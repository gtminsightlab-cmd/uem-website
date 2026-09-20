import type { Metadata } from 'next';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Pharmaceutical RFP Intelligence',
  description:
    'A manufacturer-side process for defining commercialization needs, comparing partner evidence, and retaining a human decision record.',
  path: '/rfp-intelligence',
});

const steps = [
  {
    number: '01',
    title: 'Frame the decision before the RFP',
    body: 'Clarify what the manufacturer needs to decide: the commercial problem, launch stage, scope, geography, needed capabilities, data and integration needs, timing, constraints, and accountable owner.',
  },
  {
    number: '02',
    title: 'Lock the rules before responses arrive',
    body: 'Build a right-sized request with relevant questions, response format, evidence expectations, pricing structure, demonstration instructions, and a comparison rubric. The criteria should not move to favor the most persuasive response.',
  },
  {
    number: '03',
    title: 'See what the response actually supports',
    body: 'Connect a vendor’s answer, excerpt, artifact, exception, contradiction, or missing proof to the exact question it addresses. A polished proposal is not proof by itself.',
  },
  {
    number: '04',
    title: 'Keep the award decision with the manufacturer',
    body: 'Review the comparison record with its limitations, conflicts, uncertainty, evaluator determinations, and rationale. The named decision owner makes the selection and records why.',
  },
];

const decisionUses = [
  'Field commercialization, CSO, or hybrid operating-model partners',
  'Launch-excellence, strategy, market-access, and evidence specialists',
  'Commercial-data, CRM, analytics, patient-services, and integration partners',
  'Distribution, logistics, training, enablement, and other launch-critical capabilities',
];

export default function RfpIntelligencePage() {
  return (
    <>
      <section className="bg-navy pb-20 pt-[150px] text-white md:pb-24">
        <div className="container-content max-w-5xl">
          <FadeIn>
            <p className="eyebrow">RxLaunchOS product direction</p>
            <h1 className="mt-6 max-w-4xl font-serif text-hero font-medium">
              Choose a commercialization partner with a process you can defend.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
              RFP Intelligence is being developed to help pharmaceutical manufacturers define a real
              decision, build a vendor-neutral request, compare documented evidence, and retain the
              human decision. It does not select a firm—including UEM.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary justify-center">
                Discuss an RFP decision <span aria-hidden="true">→</span>
              </Link>
              <Link href="/launchos" className="btn-outline-white justify-center">
                Explore RxLaunchOS
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn>
            <p className="eyebrow">The manufacturer-side difference</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              The process should work the same way whether UEM is a bidder or not.
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="space-y-6 text-base leading-8 text-mid md:text-lg">
              <p>
                Vendor selection often begins with a familiar template and ends with proposals that are
                hard to compare. Important questions change too late, evidence is uneven, and the reason
                for the final choice disappears into a meeting or slide deck.
              </p>
              <p>
                RxLaunchOS is intended to give the manufacturer a durable, decision-owned record from
                scope through comparison. UEM can be considered as one qualified partner, but never as
                the system&apos;s decision-maker.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section border-y border-gray-200 bg-surface">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">How the product is intended to work</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Four steps, one accountable decision trail.
            </h2>
          </FadeIn>
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.05}>
                <li className="h-full border border-gray-200 bg-white p-7 md:p-8">
                  <span className="text-xs font-semibold text-gold">{step.number}</span>
                  <h3 className="mt-4 font-serif text-2xl text-navy">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-mid">{step.body}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="eyebrow">What remains with you</p>
            <h2 className="mt-5 font-serif text-h2 font-medium">
              A clearer process is not a transfer of authority.
            </h2>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-white/72">
              {[
                'The scope, requirements, criteria, and commercial terms',
                'Who can see confidential material and who must recuse',
                'The evaluators, decision owner, and any override rationale',
                'The final selection, contract, and accountable launch outcome',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold" aria-hidden="true">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="border border-white/12 bg-white/[0.04] p-8 md:p-10">
              <p className="eyebrow">What the product will not do</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/72">
                {[
                  'Recommend or award a firm',
                  'Hide referral economics or give UEM special treatment',
                  'Turn a missing answer into a passing score',
                  'Treat a vendor claim as verified evidence without review',
                  'Replace procurement, legal, compliance, or accountable leadership judgment',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold" aria-hidden="true">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow">Where it can help</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              A process for the launch decisions that cannot be left to a beauty contest.
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {decisionUses.map((use) => (
                <li key={use} className="border border-gray-200 bg-surface p-5 text-sm leading-7 text-mid">
                  {use}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section border-t border-gray-200 bg-surface">
        <div className="container-content grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow">Current availability</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Controlled validation before broad access.
            </h2>
            <p className="mt-6 max-w-3xl leading-8 text-mid">
              The RFP Intelligence workflow is under controlled validation. It requires an authorized
              workspace and approved methodology before it can issue, compare, or score an RFP. The
              public RxLaunchOS demonstration is read-only and does not accept vendor material.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="bg-gold p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">Start with the decision</p>
              <h3 className="mt-4 font-serif text-3xl">Bring the partner choice your team needs to make.</h3>
              <p className="mt-5 text-sm leading-7 text-white/75">
                UEM can help clarify the decision, current evidence, selection process, and whether a
                scoped product conversation is appropriate. The manufacturer retains the choice of partner.
              </p>
              <Link href="/contact" className="btn-outline-white mt-7">
                Start a conversation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
