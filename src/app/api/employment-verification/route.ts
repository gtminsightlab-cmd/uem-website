import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";

import {
  allowedVerificationFileTypes,
  employmentVerificationBucket,
  maxVerificationFileBytes,
  requesterOrganizationTypes,
  responseMethods,
  verificationItems,
  verificationPurposes,
  workerStatuses,
} from "@/lib/employment-verification";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_REQUEST_BYTES = 4_200_000;
const MIN_COMPLETION_TIME_MS = 2_000;
const SIGNED_URL_SECONDS = 7 * 24 * 60 * 60;

type TurnstileResult = {
  success?: boolean;
  action?: string;
};

function getText(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isOneOf<T extends readonly string[]>(
  value: string,
  values: T,
): value is T[number] {
  return values.includes(value);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function isValidOptionalUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFileExtension(file: File) {
  const fileNameExtension = file.name
    .toLowerCase()
    .match(/\.(pdf|jpe?g|png)$/)?.[1];
  if (file.type === "application/pdf" && fileNameExtension === "pdf")
    return "pdf";
  if (
    file.type === "image/jpeg" &&
    (fileNameExtension === "jpg" || fileNameExtension === "jpeg")
  )
    return "jpg";
  if (file.type === "image/png" && fileNameExtension === "png") return "png";
  return null;
}

function hasExpectedFileSignature(bytes: Uint8Array, mimeType: string) {
  if (mimeType === "application/pdf") {
    return (
      bytes.length >= 5 &&
      bytes[0] === 0x25 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x44 &&
      bytes[3] === 0x46 &&
      bytes[4] === 0x2d
    );
  }
  if (mimeType === "image/jpeg") {
    return (
      bytes.length >= 3 &&
      bytes[0] === 0xff &&
      bytes[1] === 0xd8 &&
      bytes[2] === 0xff
    );
  }
  if (mimeType === "image/png") {
    return (
      bytes.length >= 8 &&
      bytes[0] === 0x89 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x4e &&
      bytes[3] === 0x47 &&
      bytes[4] === 0x0d &&
      bytes[5] === 0x0a &&
      bytes[6] === 0x1a &&
      bytes[7] === 0x0a
    );
  }
  return false;
}

function safeDownloadName(fileName: string, extension: string) {
  const base = fileName
    .replace(/\.[^.]+$/, "")
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return `${base || "employment-verification-document"}.${extension}`;
}

async function verifyTurnstile(token: string, secret: string) {
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          response: token,
          idempotency_key: randomUUID(),
        }),
      },
    );
    const result = (await response.json()) as TurnstileResult;
    return Boolean(
      result.success && result.action === "uem_employment_verification",
    );
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      {
        error:
          "The request is too large. Upload one PDF, JPG, or PNG no larger than 3 MB.",
      },
      { status: 413 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "The request could not be read. Please try again." },
      { status: 400 },
    );
  }

  const requesterName = getText(formData, "requesterName", 100);
  const workEmail = getText(formData, "workEmail", 254).toLowerCase();
  const organization = getText(formData, "organization", 150);
  const role = getText(formData, "role", 120);
  const phone = getText(formData, "phone", 40);
  const organizationWebsite = getText(formData, "organizationWebsite", 250);
  const requesterType = getText(formData, "requesterType", 150);
  const workerName = getText(formData, "workerName", 120);
  const otherWorkerName = getText(formData, "otherWorkerName", 120);
  const workerStatus = getText(formData, "workerStatus", 30);
  const lastKnownTitle = getText(formData, "lastKnownTitle", 150);
  const approximateEmploymentPeriod = getText(
    formData,
    "approximateEmploymentPeriod",
    100,
  );
  const workJurisdiction = getText(formData, "workJurisdiction", 100);
  const purpose = getText(formData, "purpose", 150);
  const otherInformation = getText(formData, "otherInformation", 2000);
  const responseMethod = getText(formData, "responseMethod", 150);
  const responseInstructions = getText(formData, "responseInstructions", 1500);
  const website = getText(formData, "website", 200);
  const turnstileToken = getText(formData, "cf-turnstile-response", 2048);
  const startedAt = Number(getText(formData, "startedAt", 20));
  const requestedItems = Array.from(
    new Set(
      formData
        .getAll("requestedItems")
        .map((value) =>
          typeof value === "string" ? value.trim().slice(0, 150) : "",
        )
        .filter(Boolean),
    ),
  );

  if (website) {
    return NextResponse.json(
      { error: "The request could not be submitted. Please try again." },
      { status: 400 },
    );
  }

  if (
    !Number.isFinite(startedAt) ||
    Date.now() - startedAt < MIN_COMPLETION_TIME_MS ||
    startedAt > Date.now()
  ) {
    return NextResponse.json(
      {
        error:
          "The request was submitted too quickly. Please wait a moment and try again.",
      },
      { status: 400 },
    );
  }

  const validRequestedItems = requestedItems.filter((item) =>
    isOneOf(item, verificationItems),
  );
  const needsOtherInformation =
    validRequestedItems.includes("Other lawful employment information") ||
    purpose === "Other lawful purpose";
  const needsAttachment =
    validRequestedItems.includes("Compensation or income") ||
    validRequestedItems.includes("Complete the attached verification form");
  const needsResponseInstructions =
    responseMethod !== "Secure email to my work email";
  const attachmentValue = formData.get("attachment");
  const attachment =
    attachmentValue instanceof File && attachmentValue.size > 0
      ? attachmentValue
      : null;

  const hasValidRequiredFields =
    requesterName &&
    organization &&
    role &&
    phone &&
    workerName &&
    workJurisdiction &&
    isValidEmail(workEmail) &&
    isValidOptionalUrl(organizationWebsite) &&
    isOneOf(requesterType, requesterOrganizationTypes) &&
    isOneOf(workerStatus, workerStatuses) &&
    isOneOf(purpose, verificationPurposes) &&
    isOneOf(responseMethod, responseMethods) &&
    validRequestedItems.length > 0 &&
    validRequestedItems.length === requestedItems.length &&
    (!needsOtherInformation || otherInformation.length >= 10) &&
    (!needsResponseInstructions || responseInstructions.length >= 10) &&
    (!needsAttachment || attachment) &&
    formData.get("authorityConfirmed") === "yes" &&
    formData.get("privacyConfirmed") === "yes";

  if (!hasValidRequiredFields) {
    return NextResponse.json(
      {
        error:
          needsAttachment && !attachment
            ? "Please attach the authorization or form required for a compensation or document-completion request."
            : "Please complete every required section, including any instructions needed for the selected response method.",
      },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const verificationToEmail =
    process.env.EMPLOYMENT_VERIFICATION_TO_EMAIL ??
    process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

  if (
    !resendApiKey ||
    !verificationToEmail ||
    !contactFromEmail ||
    !turnstileSecretKey
  ) {
    return NextResponse.json(
      {
        error:
          "The verification service is temporarily unavailable. Please try again later.",
      },
      { status: 503 },
    );
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Please complete the security verification and submit again." },
      { status: 400 },
    );
  }

  if (!(await verifyTurnstile(turnstileToken, turnstileSecretKey))) {
    return NextResponse.json(
      {
        error:
          "Security verification expired or could not be confirmed. Please try again.",
      },
      { status: 400 },
    );
  }

  const requestId = randomUUID();
  let storedPath: string | null = null;
  let signedDocumentUrl: string | null = null;
  let attachmentName: string | null = null;

  if (attachment) {
    if (
      attachment.size > maxVerificationFileBytes ||
      !allowedVerificationFileTypes.includes(
        attachment.type as (typeof allowedVerificationFileTypes)[number],
      )
    ) {
      return NextResponse.json(
        { error: "Upload one PDF, JPG, or PNG no larger than 3 MB." },
        { status: 400 },
      );
    }

    const extension = getFileExtension(attachment);
    const bytes = new Uint8Array(await attachment.arrayBuffer());
    if (!extension || !hasExpectedFileSignature(bytes, attachment.type)) {
      return NextResponse.json(
        {
          error:
            "The uploaded file does not match an allowed PDF, JPG, or PNG format.",
        },
        { status: 400 },
      );
    }

    const datePath = new Date().toISOString().slice(0, 10);
    storedPath = `${datePath}/${requestId}/${randomUUID()}.${extension}`;
    attachmentName = safeDownloadName(attachment.name, extension);

    try {
      const supabase = createSupabaseAdminClient();
      const { error: uploadError } = await supabase.storage
        .from(employmentVerificationBucket)
        .upload(storedPath, bytes, {
          cacheControl: "0",
          contentType: attachment.type,
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { data: signedData, error: signedUrlError } = await supabase.storage
        .from(employmentVerificationBucket)
        .createSignedUrl(storedPath, SIGNED_URL_SECONDS, {
          download: attachmentName,
        });

      if (signedUrlError || !signedData.signedUrl)
        throw signedUrlError ?? new Error("Signed URL unavailable.");
      signedDocumentUrl = signedData.signedUrl;
    } catch {
      if (storedPath) {
        try {
          await createSupabaseAdminClient()
            .storage.from(employmentVerificationBucket)
            .remove([storedPath]);
        } catch {
          // The failed upload path is not exposed to the requester.
        }
      }
      return NextResponse.json(
        {
          error:
            "The secure document upload is temporarily unavailable. Please try again later.",
        },
        { status: 503 },
      );
    }
  }

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;width:230px">${escapeHtml(label)}</td><td style="padding:8px 12px">${escapeHtml(value)}</td></tr>`;
  const optionalRow = (label: string, value: string) =>
    value ? row(label, value) : "";
  const documentRow =
    signedDocumentUrl && attachmentName
      ? `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;width:230px">Uploaded document</td><td style="padding:8px 12px"><a href="${escapeHtml(signedDocumentUrl)}">Download ${escapeHtml(attachmentName)}</a><br><span style="color:#657177;font-size:12px">Private link expires in 7 days. Do not forward it.</span></td></tr>`
      : "";

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `uem-employment-verification-${requestId}`,
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [verificationToEmail],
      reply_to: workEmail,
      subject: `[UEM employment verification] Review request ${requestId.slice(0, 8)}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#182126;line-height:1.55;max-width:760px">
          <h1 style="color:#164B52;font-size:24px">Employment-verification request</h1>
          <p style="border-left:4px solid #B6533D;background:#F4F1EA;padding:12px 16px"><strong>Review before replying.</strong> This submission is not proof of identity, authorization, employment, or entitlement to records. Verify the requester and apply the appropriate worker-state and request-purpose rules before disclosing anything.</p>
          <p style="color:#657177;font-size:12px">Request ID: ${escapeHtml(requestId)}</p>
          <h2 style="color:#164B52;font-size:17px;margin-top:24px">Requester</h2>
          <table style="border-collapse:collapse;width:100%;background:#F4F1EA">
            ${row("Name", requesterName)}${row("Work email", workEmail)}${row("Organization", organization)}${row("Role or title", role)}
            ${row("Business phone", phone)}${row("Requester type", requesterType)}${optionalRow("Organization website", organizationWebsite)}
          </table>
          <h2 style="color:#164B52;font-size:17px;margin-top:24px">Worker record to locate</h2>
          <table style="border-collapse:collapse;width:100%;background:#F4F1EA">
            ${row("Worker name", workerName)}${optionalRow("Other name used", otherWorkerName)}${row("Current/former status supplied", workerStatus)}
            ${optionalRow("Last known title", lastKnownTitle)}${optionalRow("Approximate employment period", approximateEmploymentPeriod)}${row("Primary work jurisdiction", workJurisdiction)}
          </table>
          <h2 style="color:#164B52;font-size:17px;margin-top:24px">Request and response</h2>
          <table style="border-collapse:collapse;width:100%;background:#F4F1EA">
            ${row("Purpose", purpose)}${row("Items requested", validRequestedItems.join("; "))}${optionalRow("Other information", otherInformation)}
            ${row("Preferred response method", responseMethod)}${optionalRow("Response instructions", responseInstructions)}${documentRow}
          </table>
          <p style="color:#657177;font-size:12px;margin-top:28px">The requester certified that they are the worker or have current written authorization or other lawful authority, and that they omitted sensitive identity, financial, medical, genetic, patient, and client-confidential information. Those statements remain unverified.</p>
        </div>
      `,
      text: [
        "Employment-verification request — review before replying",
        "This submission is not proof of identity, authorization, employment, or entitlement to records.",
        `Request ID: ${requestId}`,
        "",
        `Requester: ${requesterName}`,
        `Work email: ${workEmail}`,
        `Organization: ${organization}`,
        `Role or title: ${role}`,
        `Business phone: ${phone}`,
        `Requester type: ${requesterType}`,
        organizationWebsite
          ? `Organization website: ${organizationWebsite}`
          : "",
        "",
        `Worker name: ${workerName}`,
        otherWorkerName ? `Other name used: ${otherWorkerName}` : "",
        `Current/former status supplied: ${workerStatus}`,
        lastKnownTitle ? `Last known title: ${lastKnownTitle}` : "",
        approximateEmploymentPeriod
          ? `Approximate employment period: ${approximateEmploymentPeriod}`
          : "",
        `Primary work jurisdiction: ${workJurisdiction}`,
        "",
        `Purpose: ${purpose}`,
        `Items requested: ${validRequestedItems.join("; ")}`,
        otherInformation ? `Other information: ${otherInformation}` : "",
        `Preferred response method: ${responseMethod}`,
        responseInstructions
          ? `Response instructions: ${responseInstructions}`
          : "",
        signedDocumentUrl && attachmentName
          ? `Private document (${attachmentName}; link expires in 7 days): ${signedDocumentUrl}`
          : "",
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    if (storedPath) {
      try {
        await createSupabaseAdminClient()
          .storage.from(employmentVerificationBucket)
          .remove([storedPath]);
      } catch {
        // The retained path remains private and is eligible for retention cleanup.
      }
    }
    return NextResponse.json(
      { error: "Your request was not received. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ received: true, requestId });
}
