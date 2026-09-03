import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'RxLaunchOS',
  description:
    'RxLaunchOS is UEM’s AI-native U.S. pharmaceutical commercialization operating system for evidence, readiness, risks, decisions, and execution.',
};

const decisionViews = [
  {
    title: 'Command',
    body: 'An executive view of readiness, critical risks, decisions due, and the launch critical path.',
  },
  {
    title: 'Readiness',
    body: 'A traceable assessment that keeps readiness, confidence, hard gates, unanswered questions, and evidence quality distinct.',
  },
  {
    title: 'Decisions & risks',
    body: 'A governed record of what must be decided, what evidence supports it, who owns it, and what delay changes.',
  },
  {
    title: 'Roadmap',
    body: 'A launch path shaped by dependencies and decision consequences rather than a generic list of project tasks.',
  },
  {
    title: 'Experts & partners',
    body: 'Scoped specialist input and build-buy-rent choices connected to the decision that requires them.',
  },
  {
    title: 'Reports & rules',
    body: 'Explainable outputs and configurable decision methods that remain clear to the leaders responsible for acting.',
  },
];

const operatingCommitments = [
  {
    label: 'Manufacturer control',
    body: 'The manufacturer remains accountable for the launch, the evidence, and the final decision. RxLaunchOS strengthens that control rather than transferring it to a vendor.',
  },
  {
    label: 'Visible reasoning',
    body: 'Readiness, risks, assumptions, evidence, and decision rationale remain inspectable so leaders can challenge the basis of a recommendation.',
  },
  {
    label: 'Evidence-aware judgment',
    body: 'The system distinguishes what is known, assumed, missing, or stale and brings qualified specialists into decisions that require deeper judgment.',
  },
  {
    label: 'Vendor neutrality',
    body: 'Build, buy, rent, and partner choices are evaluated from the manufacturer’s side—not shaped by referral fees, placement economics, or a captive delivery model.',
  },
];

const launchosUrl = 'https://app.rxlaunchos.com';
const launchosLoginUrl = `${launchosUrl}/login`;
const launchosPricingUrl = `${launchosUrl}/pricing`;

export default function RxLaunchOSPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[72px] text-white">
        <div className="container-wide relative">
          <div className="grid min-h-[680px] items-stretch lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center py-20 pr-0 md:py-24 lg:py-28 lg:pr-14">
              <div className="mb-7 inline-flex w-fit border border-gold/40 bg-gold/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">RxLaunchOS by UEM</div>
              <h1 className="font-serif text-hero font-medium">
                The decision system behind a smarter U.S. launch.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
                RxLaunchOS is UEM&apos;s AI-native commercialization operating system for pharmaceutical
                manufacturers. It connects evidence,
                readiness, risks, decisions, experts, and execution into one executive operating view.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={launchosLoginUrl} className="btn-primary justify-center">
                  Explore the RxLaunchOS demo <span aria-hidden="true">→</span>
                </a>
                <a href={launchosPricingUrl} className="btn-outline-white justify-center">View plans &amp; pricing</a>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
                RxLaunchOS is the product. Asterion is the clearly labeled fictional pharmaceutical company used inside its read-only demonstration.
              </p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden border-x border-t border-white/10 lg:min-h-full lg:border-y lg:border-r-0">
              <Image
                src="/images/launchos-decision-system-hero-v4.webp"
                alt=""
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/12 bg-navy/65 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
                  Evidence · Readiness · Decisions · Action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm border-b border-gray-200 bg-white">
        <div className="container-content">
          <FadeIn className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Use the product</p>
              <h2 className="mt-5 font-serif text-h2 font-medium text-navy">See it, build in it, then subscribe at the scope you need.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <a href={launchosLoginUrl} className="border border-gray-200 bg-surface p-5 transition-colors hover:border-gold">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Demo</span>
                <strong className="mt-3 block text-navy">Explore RxLaunchOS</strong>
                <span className="mt-2 block text-xs leading-5 text-mid">Use fictional Asterion data in a read-only workspace.</span>
              </a>
              <a href={`${launchosUrl}/signup`} className="border border-gray-200 bg-surface p-5 transition-colors hover:border-gold">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Working trial</span>
                <strong className="mt-3 block text-navy">Create your workspace</strong>
                <span className="mt-2 block text-xs leading-5 text-mid">Set up a real isolated launch tenant and role plan.</span>
              </a>
              <a href={launchosPricingUrl} className="border border-gray-200 bg-surface p-5 transition-colors hover:border-gold">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Monthly plans</span>
                <strong className="mt-3 block text-navy">See pricing and subscribe</strong>
                <span className="mt-2 block text-xs leading-5 text-mid">Compare Professional, Commercial Team, and Enterprise scope.</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="capabilities" className="section scroll-mt-24 bg-white">
        <div className="container-content grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <FadeIn>
            <p className="eyebrow">The North Star</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Design smarter. Detect failure earlier. Decide with better evidence.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-base leading-8 text-mid md:text-lg">
              <p>
                RxLaunchOS is designed for pharmaceutical commercial leaders preparing for a U.S.
                launch—especially teams with retained rights, a small U.S. organization, and roughly
                6–24 months before launch.
              </p>
              <p>
                It brings the decisions and failure risks that matter into view early enough for
                leadership to challenge assumptions, strengthen the plan, and act with greater conviction.
              </p>
              <p className="border-l-2 border-gold pl-5 font-medium text-navy">
                The intended experience is their U.S. Commercialization Office—not a project manager,
                generic CRM, dashboard collection, or ChatGPT wrapper.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Executive operating view</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Built around launch decisions, not software categories.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-3">
            {decisionViews.map((view, index) => (
              <FadeIn key={view.title} delay={index * 0.05} className="h-full">
                <article className="h-full bg-white p-7">
                  <p className="text-xs font-semibold text-gold">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl text-navy">{view.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-mid">{view.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-white">
        <div className="container-content">
          <FadeIn className="grid gap-8 border-l-2 border-gold py-3 pl-6 md:grid-cols-[0.35fr_1fr] md:items-center md:pl-10">
            <div>
              <p className="eyebrow">Product leadership</p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-navy">Sharon Lee</h2>
              <p className="mt-2 text-sm font-semibold text-mid">Founding Member, Upper Echelon Management</p>
            </div>
            <p className="max-w-3xl text-base leading-8 text-mid">
              Sharon Lee defined RxLaunchOS and spearheaded its development and project management, translating 25 years of pharmaceutical commercial leadership, launch, field-organization, hiring, and CRM planning experience into the product&apos;s operating direction.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Operating commitments</p>
            <h2 className="mt-5 font-serif text-h2 font-medium">A decision system built from the manufacturer&apos;s side.</h2>
            <p className="mt-5 leading-8 text-white/68">
              RxLaunchOS is designed to improve commercial judgment without obscuring accountability,
              evidence, or the interests behind a recommendation.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {operatingCommitments.map((layer, index) => (
              <FadeIn key={layer.label} delay={index * 0.07}>
                <article className="h-full border border-white/12 bg-white/[0.04] p-7">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-semibold text-gold">0{index + 1}</span>
                    <h3 className="font-serif text-xl">{layer.label}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/62">{layer.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-14 lg:grid-cols-2">
          <FadeIn>
            <p className="eyebrow">AI&apos;s role</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Assistant, analyst, and orchestrator—not authority.</h2>
            <p className="mt-6 leading-8 text-mid">
              AI can help structure evidence, summarize complexity, compare options, surface gaps,
              and prepare decision support. It should not invent facts, silently alter launch state,
              make unsupported predictions, or conceal uncertainty behind polished language.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border border-gray-200 bg-surface p-8 md:p-10">
              <p className="eyebrow">What RxLaunchOS will not replace</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-mid">
                {[
                  'The accountable leaders and functions inside the manufacturer',
                  'CRM, data, content, analytics, or agency execution platforms',
                  'Qualified functional experts where specialist judgment is required',
                  'Evidence standards, human review, or the documented basis for a decision',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold" aria-hidden="true">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow">From evidence to action</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Make the next consequential decision visible.</h2>
            <p className="mt-6 leading-8 text-mid">
              RxLaunchOS helps commercial leaders identify the evidence a decision depends on, the
              assumptions most likely to change the answer, the people who must contribute, and the
              consequence of waiting.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-gold p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">Launch conversation</p>
              <h3 className="mt-4 font-serif text-3xl">Bring the decision your team cannot afford to get wrong.</h3>
              <p className="mt-5 text-sm leading-7 text-white/75">
                UEM will help clarify the decision, the evidence already available, the gaps that
                remain, and whether RxLaunchOS or a scoped specialist can strengthen the path forward.
              </p>
              <Link href="/contact" className="btn-outline-white mt-7">
                Start a RxLaunchOS conversation <span aria-hidden="true">→</span>
              </Link>
              <a href={launchosPricingUrl} className="mt-4 block text-xs font-semibold text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white">
                Or view plans and monthly pricing in RxLaunchOS →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
