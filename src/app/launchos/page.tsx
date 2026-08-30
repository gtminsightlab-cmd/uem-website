import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'LaunchOS',
  description:
    'LaunchOS is UEM’s AI-native, multi-tenant U.S. pharmaceutical commercialization operating system, currently in Conviction Prototype development.',
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
    body: 'Explainable outputs and configurable, versioned methodology that can be reviewed instead of hidden in code.',
  },
];

const architectureLayers = [
  {
    label: 'Product logic',
    body: 'Stable application behavior, permissions, workflows, auditability, and tenant-safe access patterns.',
  },
  {
    label: 'Configurable methodology',
    body: 'Versioned readiness questions, candidate rules, evidence requirements, and decision frameworks subject to expert validation.',
  },
  {
    label: 'Tenant data',
    body: 'Each manufacturer’s people, launches, answers, evidence, decisions, risks, partners, and outputs—strictly isolated.',
  },
  {
    label: 'Demo seed data',
    body: 'Fictional records used to demonstrate the same production architecture, never to define how the product behaves.',
  },
];

export default function LaunchOSPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[72px] text-white">
        <div className="container-wide relative">
          <div className="grid min-h-[680px] items-stretch lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center py-20 pr-0 md:py-24 lg:py-28 lg:pr-14">
              <div className="mb-7 inline-flex w-fit border border-gold/40 bg-gold/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                Conviction Prototype · in development
              </div>
              <h1 className="font-serif text-hero font-medium">
                The decision system behind a smarter U.S. launch.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
                LaunchOS is UEM&apos;s AI-native, multi-tenant commercialization operating system in
                development for pharmaceutical manufacturers. Its purpose is to connect evidence,
                readiness, risks, decisions, experts, and execution into one executive operating view.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#prototype" className="btn-primary justify-center">
                  Explore the product direction <span aria-hidden="true">↓</span>
                </a>
                <Link href="/contact" className="btn-outline-white justify-center">
                  Join an operator review
                </Link>
              </div>
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

      <section className="border-b border-gold/25 bg-ink py-5 text-white">
        <div className="container-content flex flex-col gap-2 text-xs leading-6 text-white/58 md:flex-row md:items-center md:justify-between">
          <span className="font-semibold uppercase tracking-[0.12em] text-gold">Current status</span>
          <span>Architecture and Conviction Prototype work are underway. This page does not represent general product availability.</span>
        </div>
      </section>

      <section id="prototype" className="section scroll-mt-24 bg-white">
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
                LaunchOS is being built for pharmaceutical commercial leaders preparing for a U.S.
                launch—especially teams with retained rights, a small U.S. organization, and roughly
                6–24 months before launch.
              </p>
              <p>
                The Conviction Prototype must let an experienced commercial executive understand the
                eventual value within 15 minutes. That means revealing the decisions and failure risks
                that matter, not presenting a collection of attractive dashboards.
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

      <section id="architecture" className="section scroll-mt-24 bg-navy text-white">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Architecture rule</p>
            <h2 className="mt-5 font-serif text-h2 font-medium">Four layers that must never collapse into one another.</h2>
            <p className="mt-5 leading-8 text-white/68">
              The demo uses the same production architecture intended for future manufacturer tenants.
              Only its records are fictional.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {architectureLayers.map((layer, index) => (
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
              <p className="eyebrow">What LaunchOS will not replace</p>
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
            <p className="eyebrow">Proof before scale</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">The current job is conviction, not feature volume.</h2>
            <p className="mt-6 leading-8 text-mid">
              UEM is validating the workflow, methodology, evidence model, tenant-safety requirements,
              and executive usefulness before making broader product claims. Readiness questions,
              scoring logic, hard gates, and expert rules remain configurable methodology candidates
              until qualified operators and specialists validate them.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-gold p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">Operator review</p>
              <h3 className="mt-4 font-serif text-3xl">Challenge the system while it is still being shaped.</h3>
              <p className="mt-5 text-sm leading-7 text-white/75">
                UEM welcomes focused review from commercial leaders and functional experts who can
                test whether the product reflects how consequential launch decisions are actually made.
              </p>
              <Link href="/contact" className="btn-outline-white mt-7">
                Start a LaunchOS conversation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
