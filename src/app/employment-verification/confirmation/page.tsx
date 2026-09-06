import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Employment Verification Request Received",
  description:
    "Confirmation that Upper Echelon Management received an employment-verification request.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmploymentVerificationConfirmationPage() {
  return (
    <section className="bg-navy pt-[72px] text-white">
      <div className="container-narrow flex min-h-[calc(100vh-72px)] items-center py-18 md:py-24">
        <div className="w-full border border-white/15 bg-white p-7 text-ink shadow-2xl md:p-12">
          <div
            aria-hidden="true"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-2xl font-semibold text-white"
          >
            ✓
          </div>
          <p className="eyebrow mt-8">Request received</p>
          <h1 className="mt-4 max-w-2xl font-serif text-h1 font-medium text-navy">
            Your employment-verification request has been received.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mid">
            Please allow up to 3 business days for verification.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-mid">
            UEM will review the requester, authorization, worker record,
            jurisdiction, and secure response method before releasing any
            information. We will contact you if additional documentation is
            needed.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" href="/">
              Return to UEM →
            </Link>
            <Link className="btn-secondary" href="/employment-verification">
              Submit another request
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
