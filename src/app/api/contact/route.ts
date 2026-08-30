import { randomUUID } from 'node:crypto';

import { NextResponse } from 'next/server';

import {
  assetStages,
  contactPurposes,
  engagementNeeds,
  launchHorizons,
  organizationTypes,
  preferredNextSteps,
} from '@/lib/contact';

export const runtime = 'nodejs';

const MAX_REQUEST_BYTES = 24_000;
const MIN_COMPLETION_TIME_MS = 2_000;

type ContactPayload = Record<string, unknown> & {
  needs?: unknown;
  startedAt?: unknown;
};

type TurnstileResult = {
  success?: boolean;
  action?: string;
};

function getText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isOneOf<T extends readonly string[]>(value: string, values: T): value is T[number] {
  return values.includes(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function isValidOptionalUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ error: 'The inquiry is too large to submit.' }, { status: 413 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'The inquiry could not be read. Please try again.' }, { status: 400 });
  }

  const name = getText(payload.name, 100);
  const workEmail = getText(payload.workEmail, 254).toLowerCase();
  const company = getText(payload.company, 150);
  const role = getText(payload.role, 120);
  const organizationType = getText(payload.organizationType, 120);
  const countryRegion = getText(payload.countryRegion, 100);
  const companyWebsite = getText(payload.companyWebsite, 250);
  const purpose = getText(payload.purpose, 120);
  const assetStage = getText(payload.assetStage, 100);
  const launchHorizon = getText(payload.launchHorizon, 100);
  const therapeuticArea = getText(payload.therapeuticArea, 150);
  const assetName = getText(payload.assetName, 150);
  const message = getText(payload.message, 5000);
  const currentContext = getText(payload.currentContext, 3000);
  const preferredNextStep = getText(payload.preferredNextStep, 100);
  const website = getText(payload.website, 200);
  const turnstileToken = getText(payload.turnstileToken, 2048);
  const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : 0;
  const needs = Array.isArray(payload.needs)
    ? Array.from(new Set(payload.needs.map((need) => getText(need, 120)).filter(Boolean)))
    : [];

  if (website) {
    return NextResponse.json({ error: 'The inquiry could not be submitted. Please try again.' }, { status: 400 });
  }

  if (Date.now() - startedAt < MIN_COMPLETION_TIME_MS || startedAt > Date.now()) {
    return NextResponse.json(
      { error: 'The inquiry was submitted too quickly. Please wait a moment and try again.' },
      { status: 400 },
    );
  }

  const validNeeds = needs.filter((need) => isOneOf(need, engagementNeeds));
  const hasValidRequiredFields =
    name &&
    company &&
    role &&
    countryRegion &&
    isValidEmail(workEmail) &&
    isValidOptionalUrl(companyWebsite) &&
    isOneOf(organizationType, organizationTypes) &&
    isOneOf(purpose, contactPurposes) &&
    isOneOf(assetStage, assetStages) &&
    isOneOf(launchHorizon, launchHorizons) &&
    isOneOf(preferredNextStep, preferredNextSteps) &&
    validNeeds.length > 0 &&
    validNeeds.length === needs.length &&
    message.length >= 40 &&
    payload.safeToShare === 'yes';

  if (!hasValidRequiredFields) {
    return NextResponse.json(
      { error: 'Please complete every required section and confirm the information is safe to share.' },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!resendApiKey || !contactToEmail || !contactFromEmail || !turnstileSecretKey) {
    return NextResponse.json(
      { error: 'The inquiry service is temporarily unavailable. Please try again later.' },
      { status: 503 },
    );
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { error: 'Please complete the security verification and submit again.' },
      { status: 400 },
    );
  }

  let turnstileResult: TurnstileResult;
  try {
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: turnstileSecretKey,
        response: turnstileToken,
        idempotency_key: randomUUID(),
      }),
    });
    turnstileResult = (await turnstileResponse.json()) as TurnstileResult;
  } catch {
    return NextResponse.json(
      { error: 'Security verification is temporarily unavailable. Please try again.' },
      { status: 502 },
    );
  }

  if (!turnstileResult.success || turnstileResult.action !== 'uem_contact') {
    return NextResponse.json(
      { error: 'Security verification expired or could not be confirmed. Please try again.' },
      { status: 400 },
    );
  }

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;width:210px">${label}</td><td style="padding:8px 12px">${escapeHtml(value)}</td></tr>`;
  const optionalRow = (label: string, value: string) => (value ? row(label, value) : '');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': `uem-contact-${randomUUID()}`,
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: workEmail,
      subject: `[UEM inquiry] ${purpose} — ${company}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#182126;line-height:1.55;max-width:760px">
          <h1 style="color:#164B52;font-size:24px">New UEM commercialization brief</h1>
          <h2 style="color:#164B52;font-size:17px;margin-top:24px">Contact and organization</h2>
          <table style="border-collapse:collapse;width:100%;background:#F4F1EA">
            ${row('Name', name)}${row('Work email', workEmail)}${row('Company', company)}${row('Role or title', role)}
            ${row('Organization type', organizationType)}${row('Country or region', countryRegion)}${optionalRow('Company website', companyWebsite)}
          </table>
          <h2 style="color:#164B52;font-size:17px;margin-top:24px">Commercialization context</h2>
          <table style="border-collapse:collapse;width:100%;background:#F4F1EA">
            ${row('Purpose', purpose)}${row('Asset or portfolio stage', assetStage)}${row('U.S. launch horizon', launchHorizon)}
            ${optionalRow('Therapeutic area', therapeuticArea)}${optionalRow('Product or asset', assetName)}${row('Areas of need', validNeeds.join('; '))}
            ${row('Preferred next step', preferredNextStep)}
          </table>
          <h2 style="color:#164B52;font-size:17px;margin-top:24px">Decision, problem, or research question</h2>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
          ${currentContext ? `<h2 style="color:#164B52;font-size:17px;margin-top:24px">Evidence, work, or constraints already in place</h2><p style="white-space:pre-wrap">${escapeHtml(currentContext)}</p>` : ''}
          <p style="color:#657177;font-size:12px;margin-top:28px">Submitted through the Upper Echelon Management website. Replying to this email replies directly to the sender.</p>
        </div>
      `,
      text: [
        'New UEM commercialization brief',
        `Name: ${name}`,
        `Work email: ${workEmail}`,
        `Company: ${company}`,
        `Role or title: ${role}`,
        `Organization type: ${organizationType}`,
        `Country or region: ${countryRegion}`,
        companyWebsite ? `Company website: ${companyWebsite}` : '',
        `Purpose: ${purpose}`,
        `Asset or portfolio stage: ${assetStage}`,
        `U.S. launch horizon: ${launchHorizon}`,
        therapeuticArea ? `Therapeutic area: ${therapeuticArea}` : '',
        assetName ? `Product or asset: ${assetName}` : '',
        `Areas of need: ${validNeeds.join('; ')}`,
        `Preferred next step: ${preferredNextStep}`,
        '',
        'Decision, problem, or research question:',
        message,
        currentContext ? `\nEvidence, work, or constraints already in place:\n${currentContext}` : '',
      ].filter(Boolean).join('\n'),
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ error: 'Your inquiry was not received. Please try again.' }, { status: 502 });
  }

  return NextResponse.json({ received: true });
}
