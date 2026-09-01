import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'LaunchOS for Pharmaceutical Commercial Teams',
  description:
    'LaunchOS connects role-based pharmaceutical commercialization plans, evidence-qualified scoring, governed simulations, risks, decisions, and execution.',
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
    body: 'The manufacturer remains accountable for the launch, the evidence, and the final decision. LaunchOS strengthens that control rather than transferring it to a vendor.',
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

const rolePaths = [
  {
    role: 'Territory representative / KAM',
    horizon: 'Account and 90-day plan',
    body: 'Connect assigned accounts, objectives, stakeholder and barrier facts, evidence, outcomes, and follow-ups to the next purposeful action.',
  },
  {
    role: 'District manager',
    horizon: 'Team, monthly, and quarterly plan',
    body: 'See roster, territory, capacity, coaching evidence, commitments, barriers, and escalations together so the right issue is coached or unblocked.',
  },
  {
    role: 'Regional director / RVP',
    horizon: 'District and regional plan',
    body: 'Compare authorized district patterns, direct manager attention, and surface resource, sequencing, or strategy pivots without ranking people.',
  },
  {
    role: 'VP / functional leader',
    horizon: 'National function plan',
    body: 'Align targets, capability, vendors, channels, evidence, milestones, and cross-functional dependencies to the launch strategy.',
  },
  {
    role: 'CMO / commercial executive',
    horizon: 'Enterprise and portfolio view',
    body: 'See the decisions, tradeoffs, capital implications, launch risks, and weak assumptions that require leadership attention now.',
  },
  {
    role: 'Cross-functional commercial team',
    horizon: 'One shared operating record',
    body: 'Work from the same versioned plan while market access, field operations, CRM/data, and launch leadership retain clear ownership and approval.',
  },
];

const scoreDimensions = [
  {
    title: 'Coverage',
    body: 'Shows whether the required, authorized inputs are present and current enough to evaluate.',
  },
  {
    title: 'Gate integrity',
    body: 'Keeps failed or unverified launch gates visible instead of averaging them away.',
  },
  {
    title: 'Decision hygiene',
    body: 'Tests whether material choices have owners, dates, options, consequences, and an explicit state.',
  },
  {
    title: 'Evidence adequacy',
    body: 'Separates verified, stale, contradictory, assumed, and missing support for material claims.',
  },
  {
    title: 'Critical-path exposure',
    body: 'Connects committed dates and dependencies to the consequence of delay while refusing false precision.',
  },
];

const simulationExamples = [
  'Internal, CSO, or stage-gated hybrid field model',
  'Field-force size, manager capacity, and recruiting sequence',
  'CRM blueprint, vendor selection, and onboarding timing',
  'Payer-evidence assumptions and access-sensitive investment gates',
  'Territory alignment, workload, vacancies, and account movement',
];

const competitiveAdvantages = [
  {
    title: 'One operating chain across roles',
    body: 'Enterprise intent flows into role plans, measures, actions, reviews, decisions, reports, and learning without changing who is authorized to see or decide.',
  },
  {
    title: 'Evidence beside the answer',
    body: 'Scores, signals, and recommendations remain tied to source, freshness, coverage, confidence, and an explicit insufficient-data state.',
  },
  {
    title: 'Methodology that can evolve',
    body: 'Questions, rules, gates, thresholds, evidence requirements, and report structures are configurable and versioned rather than buried in a slide deck or hard-coded screen.',
  },
  {
    title: 'Manufacturer-side neutrality',
    body: 'LaunchOS helps compare build, buy, rent, partner, and defer choices without acting as a captive CRM, CSO, data vendor, or agency.',
  },
];

const launchosUrl = 'https://launchos-demo.vercel.app';
const launchosLoginUrl = `${launchosUrl}/login`;
const launchosPricingUrl = `${launchosUrl}/pricing`;

export default function LaunchOSPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[72px] text-white">
        <div className="container-wide relative">
          <div className="grid min-h-[680px] items-stretch lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center py-20 pr-0 md:py-24 lg:py-28 lg:pr-14">
              <div className="mb-7 inline-flex w-fit border border-gold/40 bg-gold/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">LaunchOS by UEM</div>
              <h1 className="font-serif text-hero font-medium">
                The pharmaceutical launch decision system behind a smarter U.S. commercialization plan.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
                LaunchOS is UEM&apos;s AI-native commercialization operating system for pharmaceutical
                and biosimilar manufacturers. It connects role plans, evidence, scoring, scenarios,
                risks, decisions, experts, and execution from the territory to the enterprise.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={launchosLoginUrl} className="btn-primary justify-center">
                  Explore the LaunchOS demo <span aria-hidden="true">→</span>
                </a>
                <a href={launchosPricingUrl} className="btn-outline-white justify-center">View plans &amp; pricing</a>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
                LaunchOS is the product. Asterion is the clearly labeled fictional pharmaceutical company used inside its read-only demonstration.
              </p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden border-x border-t border-white/10 lg:min-h-full lg:border-y lg:border-r-0">
              <Image
                src="/images/launchos-decision-system-hero-v4.webp"
                alt="LaunchOS pharmaceutical launch planning system connecting evidence, readiness, risks, decisions, and execution"
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
                <strong className="mt-3 block text-navy">Explore LaunchOS</strong>
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
                LaunchOS is designed for pharmaceutical commercial leaders preparing for a U.S.
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

      <section className="section border-y border-gray-200 bg-surface">
        <div className="container-content">
          <FadeIn className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="eyebrow">Ideal customer profile</p>
              <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
                Built for the manufacturer creating a U.S. launch system while preparing the launch itself.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-mid">
              <p>
                The primary fit is an emerging U.S. biopharma, biosimilar company, or global
                manufacturer preparing a first or early U.S. launch with retained rights, a lean
                commercial organization, and consequential capabilities still to define.
              </p>
              <p>
                LaunchOS is especially relevant roughly 6–24 months before launch, when leaders must
                connect strategy, organization, evidence, partners, field design, data, and execution
                without pretending every answer is already known.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="mt-10 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Retained U.S. rights', 'The manufacturer owns the commercial choices and needs the decision record to remain on its side.'],
              ['Lean internal team', 'The launch demands institutional discipline before every full-time capability is practical.'],
              ['Focused market', 'Specialty and concentrated HCP/HCO universes make sequencing, targeting, capacity, and access assumptions material.'],
              ['High-cost decisions ahead', 'Organization, field model, CRM, partners, evidence, and timing still have meaningful options and consequences.'],
            ].map(([title, body]) => (
              <article key={title} className="h-full bg-white p-6">
                <h3 className="font-serif text-xl text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-mid">{body}</p>
              </article>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">One system, different operating jobs</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Strategy becomes useful when each role can turn it into a plan they can actually run.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-mid">
              LaunchOS changes the questions, horizon, and roll-up for the job at hand while preserving
              tenant permissions, reporting relationships, and human decision rights.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rolePaths.map((path, index) => (
              <FadeIn key={path.role} delay={index * 0.04}>
                <article className="h-full border border-gray-200 bg-surface p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">{path.horizon}</p>
                  <h3 className="mt-4 font-serif text-2xl text-navy">{path.role}</h3>
                  <p className="mt-4 text-sm leading-7 text-mid">{path.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1} className="mt-8 border-l-2 border-gold bg-surface px-6 py-5 text-sm leading-7 text-mid">
            A planning persona changes the operating lens, not authorization. LaunchOS does not turn a
            self-selected title into access, evaluate employee performance, or expose one tenant&apos;s
            information to another.
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

      <section className="section bg-white">
        <div className="container-content">
          <FadeIn className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">Transparent plan-quality scoring</p>
              <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
                Score the plan&apos;s sufficiency—not the employee or the probability of market success.
              </h2>
            </div>
            <div className="space-y-5 leading-8 text-mid">
              <p>
                LaunchOS evaluates versioned planning objects once, then shows what is covered, what is
                blocked, which evidence is weak, and which decision or critical-path commitment needs
                human attention.
              </p>
              <p>
                When coverage, required gates, or evidence are insufficient, the system suppresses a
                false overall score and explains what must be resolved. Approved weights and thresholds
                remain versioned methodology rather than a hidden universal formula.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {scoreDimensions.map((dimension, index) => (
              <FadeIn key={dimension.title} delay={index * 0.04} className="h-full">
                <article className="h-full bg-surface p-6">
                  <p className="text-xs font-semibold text-gold">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-xl text-navy">{dimension.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-mid">{dimension.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.12} className="mt-8 grid gap-3 text-sm leading-7 text-mid md:grid-cols-3">
            <p className="border border-gray-200 p-5"><strong className="block text-navy">Visible formula state</strong> Method version, coverage, gates, blockers, and calculation trace remain beside any approved composite.</p>
            <p className="border border-gray-200 p-5"><strong className="block text-navy">Evidence-aware refusal</strong> Missing, stale, contradictory, or mixed-grain inputs produce a useful refusal instead of polished fiction.</p>
            <p className="border border-gray-200 p-5"><strong className="block text-navy">Human decision boundary</strong> AI may explain or challenge the result; it cannot set the score, approve a gate, or make the launch decision.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <p className="eyebrow">Scenario simulation</p>
            <h2 className="mt-5 font-serif text-h2 font-medium">
              Rehearse the decision before the market teaches the lesson.
            </h2>
            <p className="mt-6 leading-8 text-white/68">
              LaunchOS compares explicit options, assumptions, dependencies, tradeoffs, leading
              indicators, and wait consequences. A simulation is a governed scenario—not a prediction
              or an automatic recommendation.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <ol className="divide-y divide-white/12 border border-white/12 bg-white/[0.04]">
              {simulationExamples.map((example, index) => (
                <li key={example} className="flex gap-5 px-6 py-5 text-sm leading-7 text-white/72">
                  <span className="font-semibold text-gold">0{index + 1}</span>
                  <span>{example}</span>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">Competitive advantage</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              More than task tracking. More accountable than an AI answer. More reusable than a consulting deck.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {competitiveAdvantages.map((advantage, index) => (
              <FadeIn key={advantage.title} delay={index * 0.05}>
                <article className="h-full border border-gray-200 bg-white p-7 md:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-semibold text-gold">0{index + 1}</span>
                    <h3 className="font-serif text-2xl text-navy">{advantage.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-mid">{advantage.body}</p>
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
              <p className="eyebrow">Operating provenance</p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-navy">Built from operator experience</h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-mid">
              LaunchOS translates UEM&apos;s pharmaceutical commercialization, launch execution,
              regulated distribution, and go-to-market systems experience into a configurable,
              evidence-aware operating system.
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
              LaunchOS is designed to improve commercial judgment without obscuring accountability,
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
            <p className="eyebrow">From evidence to action</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Make the next consequential decision visible.</h2>
            <p className="mt-6 leading-8 text-mid">
              LaunchOS helps commercial leaders identify the evidence a decision depends on, the
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
                remain, and whether LaunchOS or a scoped specialist can strengthen the path forward.
              </p>
              <Link href="/contact" className="btn-outline-white mt-7">
                Start a LaunchOS conversation <span aria-hidden="true">→</span>
              </Link>
              <a href={launchosPricingUrl} className="mt-4 block text-xs font-semibold text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white">
                Or view plans and monthly pricing in LaunchOS →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
