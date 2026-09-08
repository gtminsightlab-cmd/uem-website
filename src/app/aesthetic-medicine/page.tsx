import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';
import VideoShowcase from '@/components/VideoShowcase';
import { createPageMetadata } from '@/lib/metadata';
import { absoluteUrl, safeJsonLd, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Medical Aesthetics Commercialization',
  description:
    'Commercialization strategy and operating support for aesthetic medicine, professional skincare, dermatology, plastic-surgery, medical-office, and med-spa channels.',
  path: '/aesthetic-medicine',
});

const settings = [
  'Dermatology practices',
  'Plastic-surgery practices',
  'Medical offices',
  'Med-spa networks',
];

const capabilities = [
  {
    number: '01',
    title: 'Market and channel design',
    body: 'Define the practice segments, account priorities, routes to market, partner roles, and commercial assumptions that should shape the launch.',
  },
  {
    number: '02',
    title: 'Provider and practice adoption',
    body: 'Connect product positioning with provider education, practice economics, staff confidence, patient experience, and the realities of adoption inside a professional setting.',
  },
  {
    number: '03',
    title: 'Commercial team and network design',
    body: 'Design the right field, inside, distributor, training, and account-support model for the product, channel, geography, and stage of growth.',
  },
  {
    number: '04',
    title: 'Launch governance and measurement',
    body: 'Make claims, evidence, owners, dependencies, risks, milestones, and performance signals visible before commercial activity outruns the operating system.',
  },
];

const rolePaths = [
  {
    role: 'GM / commercial executive',
    horizon: 'Market, model, and investment',
    body: 'Pressure-test category assumptions, channel economics, capability gaps, partner choices, investment gates, and launch risks before capital is committed.',
  },
  {
    role: 'Brand, sales, and channel leaders',
    horizon: 'National commercial design',
    body: 'Connect positioning, target practice segments, account strategy, coverage, distributor roles, education, measures, and launch sequence.',
  },
  {
    role: 'Regional and district leaders',
    horizon: 'Coverage and intervention',
    body: 'Compare territory coverage, manager capacity, practice barriers, training needs, partner performance, and evidence-backed resource requests.',
  },
  {
    role: 'Territory and practice-development teams',
    horizon: 'Practice adoption plan',
    body: 'Turn provider, staff, economics, education, barrier, commitment, and outcome facts into the next purposeful account action.',
  },
  {
    role: 'Clinical education and enablement',
    horizon: 'Readiness and confidence',
    body: 'Coordinate training readiness, provider and staff education, approved evidence, practice workflows, follow-up, and escalation.',
  },
  {
    role: 'Commercial operations and analytics',
    horizon: 'Operating evidence',
    body: 'Keep roster, territory, inventory and service assumptions, data quality, partner obligations, adoption signals, and reporting connected.',
  },
];

const platformProof = [
  {
    image: '/images/launchos-product/territory-signals.png',
    title: 'Practice-channel coverage and capacity',
    body: 'The current product connects target universes, geography, workload, capacity, and vacancies. For aesthetic medicine, the same operating mechanic would be configured around practices, providers, and adoption conditions.',
  },
  {
    image: '/images/launchos-product/decisions-risks.png',
    title: 'Channel and operating-model decisions',
    body: 'Direct, distributor, hybrid, and staged routes can be compared without losing the assumptions, trade-offs, evidence, owner, or human approval behind the decision.',
  },
  {
    image: '/images/launchos-product/readiness-queue.png',
    title: 'Training and enablement readiness',
    body: 'Evidence, severity, ownership, and state turn provider education, staff confidence, and practice enablement gaps into visible work instead of disconnected follow-up.',
  },
  {
    image: '/images/launchos-product/board-launch-report.png',
    title: 'A versioned commercialization record',
    body: 'Leadership can review decisions, risks, dependencies, evidence, and supersession history in one governed record while accountable people retain approval authority.',
  },
];

const aestheticServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl('/aesthetic-medicine')}#service`,
  name: 'Medical Aesthetics Commercialization',
  description:
    'Commercialization strategy and operating support for manufacturers and growth-stage companies serving U.S. aesthetic-medicine practices.',
  url: absoluteUrl('/aesthetic-medicine'),
  provider: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
  areaServed: 'United States',
  audience: {
    '@type': 'BusinessAudience',
    audienceType:
      'Aesthetic-medicine and professional-skincare manufacturers, dermatology and plastic-surgery practices, medical offices, and med-spa groups',
  },
};

export default function AestheticMedicinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(aestheticServiceJsonLd) }}
      />

      <section className="relative overflow-hidden bg-navy pt-[72px] text-white">
        <div className="absolute inset-0 hero-shimmer" aria-hidden="true" />
        <div className="relative grid min-h-[660px] items-stretch lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="flex flex-col justify-center px-5 py-20 sm:px-6 md:px-12 md:py-24 lg:py-28 lg:pl-[max(3rem,calc((100vw-1400px)/2+3rem))] lg:pr-14">
            <p className="eyebrow">Aesthetic medicine commercialization</p>
            <h1 className="mt-6 max-w-5xl font-serif text-[clamp(40px,4.4vw,68px)] font-medium leading-[1.03] tracking-[-0.035em]">
              Commercialize aesthetic products through the practices that adopt, recommend, and use them.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
              UEM supports smaller and growth-stage manufacturers bringing injectables,
              professional skincare, and other practice-dispensed aesthetic products into U.S.
              dermatology, plastic-surgery, medical-office, and med-spa channels.
            </p>
            <Link href="/contact" className="btn-primary mt-9 self-start">
              Discuss an aesthetic launch <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border-x border-t border-white/10 lg:min-h-full lg:border-y lg:border-r-0">
            <Image
              src="/images/uem-aesthetic-medicine-hero.webp"
              alt=""
              fill
              priority
              quality={90}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy/36 via-transparent to-transparent"
              aria-hidden="true"
            />
            <p className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-navy/72 px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/62 backdrop-blur-sm md:px-6">
              Practice adoption · Channel design · Commercial discipline
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="container-content grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {settings.map((setting) => (
            <div key={setting} className="flex min-h-28 items-center px-5 py-7 md:px-8">
              <p className="font-serif text-xl leading-7 text-navy">{setting}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-content">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">Manufacturer-to-practice commercialization</p>
            <h2 className="mt-5 font-serif text-h2 font-medium">See the system before you help us validate it.</h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/68">
              The first film explains the complete commercialization path. The second shows how the
              operating view changes for the people responsible for category strategy, channel design,
              field execution, education, and practice adoption.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <VideoShowcase
                title="From manufacturer to practice adoption"
                description="A structured path through market definition, direct or partner channel design, team and training choices, RFPs, launch-tactic comparison, governance, and learning."
                src="/videos/aesthetics-end-to-end.mp4"
                poster="/videos/aesthetics-end-to-end-poster.jpg"
                captions="/videos/aesthetics-end-to-end.vtt"
                duration="1 minute 52 seconds"
                status="Design-partner direction"
              />
            </FadeIn>
            <FadeIn delay={0.08}>
              <VideoShowcase
                title="The people behind practice adoption"
                description="Proposed decision lenses for executives, brand and channel leaders, regional and district teams, territory and practice-development roles, education, operations, and analytics."
                src="/videos/aesthetics-personas.mp4"
                poster="/videos/aesthetics-personas-poster.jpg"
                captions="/videos/aesthetics-personas.vtt"
                duration="1 minute 46 seconds"
                status="Proposed role lenses"
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.1} className="mt-8 border-l-2 border-gold bg-white/[0.04] px-6 py-5 text-sm leading-7 text-white/65">
            UEM supports aesthetic-medicine commercialization today. The RxLaunchOS sector
            configuration shown here is exploratory, under validation, and not represented as a
            generally available or proven product.
          </FadeIn>
        </div>
      </section>

      <section className="section border-b border-gray-200 bg-surface">
        <div className="container-content">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">Inside the platform</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              See the operating mechanics being adapted for the practice channel.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-mid">
              These are actual RxLaunchOS screens populated with fictional Asterion pharmaceutical
              demonstration data. They show the governed operating mechanics being adapted—not a
              live aesthetic-medicine tenant or a validated sector result.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {platformProof.map((proof, index) => (
              <FadeIn key={proof.title} delay={index * 0.05}>
                <article className="h-full overflow-hidden border border-gray-200 bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-gray-200 bg-navy">
                    <Image
                      src={proof.image}
                      alt={`${proof.title} shown in the RxLaunchOS fictional Asterion demonstration tenant`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7 md:p-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                      Actual platform screen
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-navy">{proof.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-mid">{proof.body}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1} className="mt-8">
            <Link href="https://app.rxlaunchos.com/login" className="text-link">
              Explore the live fictional RxLaunchOS demo <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Commercialization capabilities</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              A practice-based market needs more than consumer marketing.
            </h2>
            <p className="mt-5 leading-8 text-mid">
              Success depends on the product, the provider, the practice team, the channel, and the
              patient experience working as one commercial system. UEM helps leadership make those
              connections explicit and govern the decisions behind them.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <FadeIn key={capability.number} delay={index * 0.06} className="h-full">
                <article className="h-full bg-surface p-7 md:p-9">
                  <p className="text-xs font-semibold tracking-[0.14em] text-gold">{capability.number}</p>
                  <h3 className="mt-5 font-serif text-2xl text-navy">{capability.title}</h3>
                  <p className="mt-4 leading-7 text-mid">{capability.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow">Different jobs, one controlled launch record</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Give each role the context, decisions, and next actions needed to do its job.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-mid">
              These proposed role lenses are being tested with manufacturers and experienced
              practice-channel operators. They change the questions and planning horizon; they do
              not create access, rank employees, or replace accountable leadership.
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
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <p className="eyebrow">The operating distinction</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              The discipline carries over. The market assumptions do not.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-base leading-8 text-mid">
              <p>
                UEM brings the same evidence, readiness, organization, channel, and executive
                decision discipline used in regulated commercialization. Aesthetic medicine,
                however, has its own provider economics, purchase patterns, training needs,
                customer experience, and routes to adoption.
              </p>
              <p>
                We do not copy a pharmaceutical launch template into an aesthetic business. The
                operating model is designed around the product category, the intended practice
                setting, the evidence available, and the capabilities the organization can support.
              </p>
              <p className="border-l-2 border-gold pl-5 font-medium text-navy">
                Named-brand affiliations, client outcomes, and clinical claims are never implied
                without authorization and evidence.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full border border-gray-200 p-8 md:p-10">
              <p className="eyebrow">Connected work</p>
              <h2 className="mt-5 font-serif text-3xl text-navy">ClearSpec Labs</h2>
              <p className="mt-5 leading-8 text-mid">
                UEM contributes commercialization and operating-model perspective to ClearSpec
                Labs, a separate Seven16 Group research-commerce initiative built around clearer
                product information and evidence governance.
              </p>
              <p className="mt-4 text-sm leading-7 text-mid">
                ClearSpec Labs&apos; current public catalog is for research use only. It is not a
                source of products for human or veterinary use.
              </p>
              <a
                href="https://clearspeclabs.com"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex text-sm font-semibold text-navy animated-underline"
              >
                Visit ClearSpec Labs <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="h-full border border-gold/35 bg-surface p-8 md:p-10">
              <p className="eyebrow">System direction</p>
              <h2 className="mt-5 font-serif text-3xl text-navy">RxLaunchOS for aesthetic medicine</h2>
              <p className="mt-5 leading-8 text-mid">
                This work is informing a future aesthetic-medicine configuration of UEM&apos;s
                commercialization operating system: separate sector methodology, shared decision
                discipline, and no reuse of pharmaceutical assumptions as aesthetic-market facts.
              </p>
              <p className="mt-4 text-sm leading-7 text-mid">
                The sector configuration is exploratory and is not represented as a generally
                available, off-the-shelf product today.
              </p>
              <Link href="/launchos" className="mt-7 inline-flex text-sm font-semibold text-navy animated-underline">
                Explore the RxLaunchOS model <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="section-sm bg-gold text-white">
        <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">Start with the market decision</p>
            <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
              Bring the product, practice channel, or growth decision that needs structure.
            </h2>
          </div>
          <Link href="/contact" className="btn-outline-white whitespace-nowrap">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
