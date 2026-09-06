import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import EmploymentVerificationForm from "@/components/EmploymentVerificationForm";

export const metadata: Metadata = {
  title: "Employment Verification Requests",
  description:
    "Submit an authorized employment-verification request to Upper Echelon Management through a dedicated secure intake form.",
};

const reviewPrinciples = [
  {
    title: "Basic employment facts",
    body: "UEM may confirm facts such as dates of employment, position or title, and current or former status when the record and requester are verified.",
  },
  {
    title: "Compensation or a custom form",
    body: "Attach the worker’s current written authorization or the verification form. UEM will still review whether the requested disclosure is appropriate and lawful.",
  },
  {
    title: "Protected information stays protected",
    body: "Do not request or submit Social Security numbers, dates of birth, banking details, medical or genetic information, patient information, or client-confidential material.",
  },
  {
    title: "Response channel is verified",
    body: "UEM may confirm the requester’s identity, organization, authority, and delivery channel before releasing any information.",
  },
];

export default function EmploymentVerificationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[72px] text-white">
        <div className="absolute inset-0 hero-shimmer" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="grid min-h-[660px] items-stretch lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center py-20 pr-0 md:py-24 lg:py-28 lg:pr-14">
              <p className="eyebrow">Employment verification</p>
              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(38px,4vw,62px)] font-medium leading-[1.03] tracking-[-0.035em]">
                Request employment information through a dedicated review path.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
                This form is for current or former worker verification—not
                consulting, RxLaunchOS, careers, Form I-9, or E-Verify support. UEM
                reviews the requester, authority, record, jurisdiction, and response
                method before disclosing information.
              </p>
              <Link
                className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-gold underline-offset-4"
                href="/contact"
              >
                Looking for the regular Contact UEM form? Go to Contact →
              </Link>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border-x border-t border-white/10 lg:min-h-full lg:border-y lg:border-r-0">
              <Image
                src="/images/uem-employment-verification-hero.webp"
                alt=""
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/12 bg-navy/65 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
                  Authorized request · Verified review · Controlled response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Before you submit</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Ask only for what the purpose requires.
            </h2>
            <p className="mt-6 leading-8 text-mid">
              Employment-verification rules vary by the worker’s state, the
              requester, and the purpose. The form collects the facts UEM needs
              to make that review; it does not promise disclosure of every
              requested item or replace a signed authorization.
            </p>
            <div className="mt-9 grid gap-5">
              {reviewPrinciples.map((principle) => (
                <article
                  key={principle.title}
                  className="border-l-2 border-gold pl-5"
                >
                  <h3 className="font-serif text-xl text-navy">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-mid">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-9 border border-gray-200 bg-surface p-5 text-xs leading-6 text-mid">
              Submitting this form confirms only that UEM received a request for
              review. It does not confirm employment, establish a deadline, or
              authorize the release of a record.
            </p>
          </div>

          <EmploymentVerificationForm />
        </div>
      </section>

      <section className="section-sm bg-surface">
        <div className="container-content grid gap-8 md:grid-cols-3">
          {[
            [
              "1",
              "Submit the purpose",
              "Identify the requester, worker, jurisdiction, information needed, and lawful purpose.",
            ],
            [
              "2",
              "UEM validates",
              "UEM checks the record, requester, authorization, and response channel before disclosure.",
            ],
            [
              "3",
              "Respond securely",
              "Approved information is returned through an appropriate verified business channel.",
            ],
          ].map(([number, title, text]) => (
            <div key={number} className="border-t-2 border-gold pt-5">
              <p className="text-xs font-semibold text-gold">0{number}</p>
              <h2 className="mt-3 font-serif text-xl text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-mid">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
