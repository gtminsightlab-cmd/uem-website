'use client';

import Script from 'next/script';
import { FormEvent, useRef, useState } from 'react';

import {
  assetStages,
  contactPurposes,
  engagementNeeds,
  launchHorizons,
  organizationTypes,
  preferredNextSteps,
} from '@/lib/contact';

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

const fieldClassName =
  'mt-2 w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-mist focus:border-navy focus:ring-2 focus:ring-navy/10';
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function SectionHeading({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="mb-7 border-b border-gray-200 pb-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">Section {number}</p>
      <h3 className="mt-2 font-serif text-2xl text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-mid">{body}</p>
    </div>
  );
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [startedAt, setStartedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState('submitting');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      needs: formData.getAll('needs'),
      turnstileToken: formData.get('cf-turnstile-response'),
      startedAt,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || 'Your inquiry was not received. Please review the brief and try again.');
      }

      formRef.current?.reset();
      window.turnstile?.reset();
      setStartedAt(Date.now());
      setSubmissionState('success');
    } catch (error) {
      window.turnstile?.reset();
      setSubmissionState('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Your inquiry was not received. Please try again.',
      );
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="border border-gray-200 bg-surface p-6 md:p-8">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />

      <SectionHeading
        number="01"
        title="Who is reaching out?"
        body="Help us understand the organization, role, and market context behind the inquiry."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          Name <span className="text-gold">*</span>
          <input className={fieldClassName} type="text" name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label className="text-sm font-semibold text-navy">
          Work email <span className="text-gold">*</span>
          <input className={fieldClassName} type="email" name="workEmail" autoComplete="email" maxLength={254} required />
        </label>
        <label className="text-sm font-semibold text-navy">
          Company or organization <span className="text-gold">*</span>
          <input className={fieldClassName} type="text" name="company" autoComplete="organization" maxLength={150} required />
        </label>
        <label className="text-sm font-semibold text-navy">
          Role or title <span className="text-gold">*</span>
          <input className={fieldClassName} type="text" name="role" autoComplete="organization-title" maxLength={120} required />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">
          Organization type <span className="text-gold">*</span>
          <select className={fieldClassName} name="organizationType" defaultValue="" required>
            <option value="" disabled>Select the closest fit</option>
            {organizationTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-navy">
          Headquarters country or region <span className="text-gold">*</span>
          <input className={fieldClassName} type="text" name="countryRegion" autoComplete="country-name" maxLength={100} required />
        </label>
        <label className="text-sm font-semibold text-navy">
          Company website
          <input className={fieldClassName} type="url" name="companyWebsite" autoComplete="url" maxLength={250} placeholder="https://" />
        </label>
      </div>

      <div className="my-10 border-t border-gray-200" />
      <SectionHeading
        number="02"
        title="What is the commercialization context?"
        body="Structure the inquiry around the asset, timing, and decision—not a generic request for information."
      />

      <label className="block text-sm font-semibold text-navy">
        Purpose of communication <span className="text-gold">*</span>
        <select className={fieldClassName} name="purpose" defaultValue="" required>
          <option value="" disabled>Select the primary purpose</option>
          {contactPurposes.map((purpose) => <option key={purpose} value={purpose}>{purpose}</option>)}
        </select>
      </label>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          Asset or portfolio stage <span className="text-gold">*</span>
          <select className={fieldClassName} name="assetStage" defaultValue="" required>
            <option value="" disabled>Select a stage</option>
            {assetStages.map((stage) => <option key={stage} value={stage}>{stage}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-navy">
          U.S. launch horizon <span className="text-gold">*</span>
          <select className={fieldClassName} name="launchHorizon" defaultValue="" required>
            <option value="" disabled>Select a horizon</option>
            {launchHorizons.map((horizon) => <option key={horizon} value={horizon}>{horizon}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-navy">
          Therapeutic area or platform
          <input className={fieldClassName} type="text" name="therapeuticArea" maxLength={150} />
        </label>
        <label className="text-sm font-semibold text-navy">
          Product or asset name
          <input className={fieldClassName} type="text" name="assetName" maxLength={150} placeholder="Optional; use a non-confidential name" />
        </label>
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-semibold text-navy">
          Areas where perspective may be needed <span className="text-gold">*</span>
        </legend>
        <p className="mt-2 text-xs leading-5 text-mist">Select every area relevant to the decision.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {engagementNeeds.map((need) => (
            <label key={need} className="flex items-start gap-3 border border-gray-200 bg-white p-3 text-xs leading-5 text-mid">
              <input className="mt-1 h-4 w-4 shrink-0 accent-navy" type="checkbox" name="needs" value={need} />
              <span>{need}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="my-10 border-t border-gray-200" />
      <SectionHeading
        number="03"
        title="What decision needs to move?"
        body="A useful response begins with the decision, what is known, and what a productive next step would accomplish."
      />

      <label className="block text-sm font-semibold text-navy">
        Decision, problem, or research question <span className="text-gold">*</span>
        <textarea className={`${fieldClassName} min-h-40 resize-y`} name="message" minLength={40} maxLength={5000} required />
      </label>
      <label className="mt-6 block text-sm font-semibold text-navy">
        Evidence, work, or constraints already in place
        <textarea
          className={`${fieldClassName} min-h-28 resize-y`}
          name="currentContext"
          maxLength={3000}
          placeholder="For example: completed research, internal alignment, data constraints, board timing, or partner dependencies"
        />
      </label>
      <label className="mt-6 block text-sm font-semibold text-navy">
        Preferred next step <span className="text-gold">*</span>
        <select className={fieldClassName} name="preferredNextStep" defaultValue="" required>
          <option value="" disabled>Select the most useful next step</option>
          {preferredNextSteps.map((step) => <option key={step} value={step}>{step}</option>)}
        </select>
      </label>

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="mt-7 flex items-start gap-3 text-xs leading-5 text-mid">
        <input className="mt-1 h-4 w-4 shrink-0 accent-navy" type="checkbox" name="safeToShare" value="yes" required />
        <span>
          I understand this is an initial inquiry and will not submit protected health information,
          patient information, trade secrets, or other confidential material. <span className="text-gold">*</span>
        </span>
      </label>

      <div className="mt-7">
        {turnstileSiteKey ? (
          <div
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-theme="light"
            data-size="flexible"
            data-action="uem_contact"
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
          disabled={submissionState === 'submitting' || !turnstileSiteKey}
        >
          {submissionState === 'submitting' ? 'Sending inquiry…' : 'Submit commercialization brief'}
          {submissionState !== 'submitting' ? <span aria-hidden="true">→</span> : null}
        </button>
        <p className="text-xs leading-5 text-mist">Required fields are marked with an asterisk.</p>
      </div>

      <div aria-live="polite" className="mt-5">
        {submissionState === 'success' ? (
          <p className="border-l-2 border-navy bg-white px-4 py-3 text-sm leading-6 text-navy">
            Your inquiry has been received. The UEM team will review the purpose, context, and expertise required before determining the most useful next step.
          </p>
        ) : null}
        {submissionState === 'error' ? (
          <p className="border-l-2 border-gold bg-white px-4 py-3 text-sm leading-6 text-ink">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
