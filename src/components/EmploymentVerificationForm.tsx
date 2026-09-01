"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";

import {
  maxVerificationFileBytes,
  requesterOrganizationTypes,
  responseMethods,
  verificationItems,
  verificationPurposes,
  workerStatuses,
} from "@/lib/employment-verification";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

type SubmissionState = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "mt-2 w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-mid focus:border-navy focus:ring-2 focus:ring-navy/10";
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function SectionHeading({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mb-7 border-b border-gray-200 pb-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
        Section {number}
      </p>
      <h2 className="mt-2 font-serif text-2xl text-navy">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-mid">{body}</p>
    </div>
  );
}

export default function EmploymentVerificationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [startedAt, setStartedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    formData.set("startedAt", String(startedAt));

    try {
      const response = await fetch("/api/employment-verification", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Your request was not received. Please review the form and try again.",
        );
      }

      formRef.current?.reset();
      window.turnstile?.reset();
      setStartedAt(Date.now());
      setSubmissionState("success");
    } catch (error) {
      window.turnstile?.reset();
      setSubmissionState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Your request was not received. Please try again.",
      );
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="border border-gray-200 bg-surface p-6 md:p-8"
    >
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <SectionHeading
        number="01"
        title="Who is requesting the verification?"
        body="Use your business or agency information. UEM may independently confirm your identity, authority, and contact details before releasing any record."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          Requester name <span className="text-gold">*</span>
          <input
            className={fieldClassName}
            type="text"
            name="requesterName"
            autoComplete="name"
            maxLength={100}
            required
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Work email <span className="text-gold">*</span>
          <input
            className={fieldClassName}
            type="email"
            name="workEmail"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Organization <span className="text-gold">*</span>
          <input
            className={fieldClassName}
            type="text"
            name="organization"
            autoComplete="organization"
            maxLength={150}
            required
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Role or title <span className="text-gold">*</span>
          <input
            className={fieldClassName}
            type="text"
            name="role"
            autoComplete="organization-title"
            maxLength={120}
            required
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Business phone <span className="text-gold">*</span>
          <input
            className={fieldClassName}
            type="tel"
            name="phone"
            autoComplete="tel"
            maxLength={40}
            required
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Organization website
          <input
            className={fieldClassName}
            type="url"
            name="organizationWebsite"
            autoComplete="url"
            maxLength={250}
            placeholder="https://"
          />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">
          Requester type <span className="text-gold">*</span>
          <select
            className={fieldClassName}
            name="requesterType"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select the closest fit
            </option>
            {requesterOrganizationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="my-10 border-t border-gray-200" />
      <SectionHeading
        number="02"
        title="Whose employment should UEM verify?"
        body="Provide enough information to match the correct record. Do not enter a Social Security number, date of birth, bank information, medical information, or genetic information."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          Worker’s full legal name <span className="text-gold">*</span>
          <input
            className={fieldClassName}
            type="text"
            name="workerName"
            maxLength={120}
            required
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Other name used while working at UEM
          <input
            className={fieldClassName}
            type="text"
            name="otherWorkerName"
            maxLength={120}
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Current or former worker <span className="text-gold">*</span>
          <select
            className={fieldClassName}
            name="workerStatus"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a status
            </option>
            {workerStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-navy">
          Last known title or assignment
          <input
            className={fieldClassName}
            type="text"
            name="lastKnownTitle"
            maxLength={150}
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Approximate employment period
          <input
            className={fieldClassName}
            type="text"
            name="approximateEmploymentPeriod"
            maxLength={100}
            placeholder="For example, March 2022–June 2024"
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Primary work state or country <span className="text-gold">*</span>
          <input
            className={fieldClassName}
            type="text"
            name="workJurisdiction"
            maxLength={100}
            required
          />
        </label>
      </div>

      <div className="my-10 border-t border-gray-200" />
      <SectionHeading
        number="03"
        title="What is needed?"
        body="UEM will disclose only information it determines is accurate, appropriate, authorized, and lawful. A request does not guarantee that every requested item will be released."
      />

      <label className="block text-sm font-semibold text-navy">
        Purpose of the request <span className="text-gold">*</span>
        <select
          className={fieldClassName}
          name="purpose"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select the primary purpose
          </option>
          {verificationPurposes.map((purpose) => (
            <option key={purpose} value={purpose}>
              {purpose}
            </option>
          ))}
        </select>
      </label>

      <fieldset className="mt-7">
        <legend className="text-sm font-semibold text-navy">
          Information requested <span className="text-gold">*</span>
        </legend>
        <p className="mt-2 text-xs leading-5 text-mid">
          Select every item you are asking UEM to verify.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {verificationItems.map((item) => (
            <label
              key={item}
              className="flex items-start gap-3 border border-gray-200 bg-white p-3 text-xs leading-5 text-mid"
            >
              <input
                className="mt-1 h-4 w-4 shrink-0 accent-navy"
                type="checkbox"
                name="requestedItems"
                value={item}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block text-sm font-semibold text-navy">
        Other information or instructions
        <textarea
          className={`${fieldClassName} min-h-28 resize-y`}
          name="otherInformation"
          maxLength={2000}
          placeholder="Describe any other lawful item requested, deadline, reference number, or instructions printed on your form."
        />
      </label>

      <label className="mt-6 block text-sm font-semibold text-navy">
        Authorization or verification form
        <input
          aria-describedby="verification-file-help"
          className={`${fieldClassName} file:mr-4 file:rounded file:border-0 file:bg-navy file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white`}
          type="file"
          name="attachment"
          accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        />
      </label>
      <p
        id="verification-file-help"
        className="mt-2 text-xs leading-5 text-mid"
      >
        Optional for a basic dates/title request. Required when requesting
        compensation or asking UEM to complete a document. PDF, JPG, or PNG
        only; maximum {Math.floor(maxVerificationFileBytes / 1024 / 1024)} MB.
        Do not upload an ID, Social Security number, banking data, or medical or
        genetic information.
      </p>

      <div className="my-10 border-t border-gray-200" />
      <SectionHeading
        number="04"
        title="How should UEM respond?"
        body="Choose a secure business channel. UEM may use a different secure method after validating the request."
      />

      <label className="block text-sm font-semibold text-navy">
        Preferred response method <span className="text-gold">*</span>
        <select
          className={fieldClassName}
          name="responseMethod"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a secure response method
          </option>
          {responseMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-6 block text-sm font-semibold text-navy">
        Secure portal, mailing, or other response instructions
        <textarea
          className={`${fieldClassName} min-h-24 resize-y`}
          name="responseInstructions"
          maxLength={1500}
          placeholder="Include a portal URL, verified business address, reference number, or contact instructions. Do not include a password."
        />
      </label>

      <div
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-7 grid gap-4">
        <label className="flex items-start gap-3 text-xs leading-5 text-mid">
          <input
            className="mt-1 h-4 w-4 shrink-0 accent-navy"
            type="checkbox"
            name="authorityConfirmed"
            value="yes"
            required
          />
          <span>
            I certify that I am the worker or that I have the worker’s current
            written authorization or other lawful authority for this request,
            and I will provide evidence of that authority if UEM asks.{" "}
            <span className="text-gold">*</span>
          </span>
        </label>
        <label className="flex items-start gap-3 text-xs leading-5 text-mid">
          <input
            className="mt-1 h-4 w-4 shrink-0 accent-navy"
            type="checkbox"
            name="privacyConfirmed"
            value="yes"
            required
          />
          <span>
            I have not included sensitive identity, financial, medical, genetic,
            patient, or client-confidential information, and I understand UEM
            will verify the request before disclosing employment information.{" "}
            <span className="text-gold">*</span>
          </span>
        </label>
      </div>

      <div className="mt-7">
        {turnstileSiteKey ? (
          <div
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-theme="light"
            data-size="flexible"
            data-action="uem_employment_verification"
          />
        ) : (
          <p className="border-l-2 border-gold bg-white px-4 py-3 text-xs leading-5 text-mid">
            Security verification is temporarily unavailable.
          </p>
        )}
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          disabled={submissionState === "submitting" || !turnstileSiteKey}
        >
          {submissionState === "submitting"
            ? "Sending request…"
            : "Submit verification request"}
          {submissionState !== "submitting" ? (
            <span aria-hidden="true">→</span>
          ) : null}
        </button>
        <p className="text-xs leading-5 text-mid">
          Required fields are marked with an asterisk.
        </p>
      </div>

      <div aria-live="polite" className="mt-5">
        {submissionState === "success" ? (
          <p className="border-l-2 border-navy bg-white px-4 py-3 text-sm leading-6 text-navy">
            Your employment-verification request has been received for review.
            Submission does not confirm the worker’s record or authorize
            disclosure; UEM will validate the request and use an appropriate
            secure response method.
          </p>
        ) : null}
        {submissionState === "error" ? (
          <p className="border-l-2 border-gold bg-white px-4 py-3 text-sm leading-6 text-ink">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
