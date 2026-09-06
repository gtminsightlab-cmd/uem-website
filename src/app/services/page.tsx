import type { Metadata } from 'next';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';
import { createPageMetadata } from '@/lib/metadata';
import { absoluteUrl, safeJsonLd, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Pharmaceutical & Medical Aesthetics Commercialization',
  description:
    'Commercialization services for pharmaceutical, biosimilar, and medical-aesthetics manufacturers: readiness, operating-model, organization, field, and channel design.',
  path: '/services',
});

const engagements = [
  {
    id: 'readiness',
    number: '01',
    title: 'Commercial Readiness Diagnostic',
    intro: 'A disciplined view of whether the launch system is ready to support the commercial ambition.',
    includes: [
      'Leadership and workstream interviews',
      'Evidence, assumption, dependency, and decision review',
      'Readiness gaps and critical-path exposure',
      'Executive findings with prioritized next decisions',
    ],
  },
  {
    id: 'office',
    number: '02',
    title: 'Fractional U.S. Commercialization Office',
    intro: 'Senior operating leadership for companies that need U.S. commercial discipline before a full internal organization is practical.',
    includes: [
      'Commercial model and launch-governance design',
      'Cross-functional decision cadence',
      'Capability sequencing and partner orchestration',
      'Executive and board-ready decision support',
    ],
  },
  {
    id: 'organization',
    number: '03',
    title: 'Organization, Field & Hiring Design',
    intro: 'Build the organization around the strategy, timeline, market, and evidence—not around a generic industry template.',
    includes: [
      'Organization and role architecture',
      'Field-force and manager-span design',
      'Recruiting sequence and selection scorecards',
      'Onboarding, certification, and launch-readiness planning',
    ],
  },
  {
    id: 'experts',
    number: '04',
    title: 'Scoped Expert Engagements',
    intro: 'Bring specialist judgment into a defined decision without pretending one firm should own every capability.',
    includes: [
      'Decision-specific expert briefs',
      'Structured evidence and recommendation capture',
      'Build, buy, rent, or defer analysis',
      'Transparent boundaries and conflict disclosure',
    ],
  },
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${absoluteUrl('/services')}#services`,
  name: 'U.S. Pharmaceutical Commercialization Services',
  itemListElement: engagements.map((engagement, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: engagement.title,
      description: engagement.intro,
      url: absoluteUrl(`/services#${engagement.id}`),
      provider: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
      areaServed: 'United States',
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Emerging and global biopharma manufacturers',
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(servicesJsonLd) }}
      />
      <section className="bg-navy pt-[72px] text-white">
        <div className="container-content py-18 md:py-30">
          <p className="eyebrow">Commercialization Office</p>
          <h1 className="mt-6 max-w-4xl font-serif text-hero font-medium">
            Build the U.S. commercialization system before scale makes mistakes expensive.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            UEM works with smaller, emerging, and global manufacturers preparing pharmaceutical or
            biosimilar products for the U.S. market and with companies commercializing aesthetic
            products through professional practices—especially when the team is lean and the
            operating model is still taking shape.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Engagements</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Start with the decision need, then define the right scope.
            </h2>
            <p className="mt-5 leading-8 text-mid">
              Engagement design depends on launch stage, evidence quality, internal capability, and
              decision urgency. UEM does not publish artificial fixed packages or promise outcomes
              before understanding that context.
            </p>
          </FadeIn>

          <div className="mt-14 divide-y divide-gray-200 border-y border-gray-200">
            {engagements.map((engagement, index) => (
              <FadeIn key={engagement.number} delay={index * 0.06}>
                <article id={engagement.id} className="grid scroll-mt-24 gap-8 py-10 lg:grid-cols-[0.12fr_0.78fr_1.1fr] lg:gap-12">
                  <p className="text-xs font-semibold tracking-[0.14em] text-gold">{engagement.number}</p>
                  <div>
                    <h3 className="font-serif text-2xl text-navy md:text-3xl">{engagement.title}</h3>
                    <p className="mt-4 leading-7 text-mid">{engagement.intro}</p>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {engagement.includes.map((item) => (
                      <li key={item} className="border-l-2 border-gold/50 pl-4 text-sm leading-6 text-mid">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <FadeIn>
            <p className="eyebrow">Adjacent specialization</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Medical aesthetics commercialization
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 leading-8 text-mid">
              <p>
                UEM applies commercialization discipline to injectables, professional skincare,
                and other practice-dispensed aesthetic products serving dermatology,
                plastic-surgery, medical-office, and med-spa channels.
              </p>
              <p>
                The work connects channel design, practice adoption, field and partner models,
                evidence, launch governance, and performance measurement without treating
                aesthetics as a copy of the pharmaceutical market.
              </p>
              <Link href="/aesthetic-medicine" className="inline-flex text-sm font-semibold text-navy animated-underline">
                Explore aesthetic medicine commercialization <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="eyebrow">Best fit</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Built for a consequential U.S. commercialization decision.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="space-y-4 text-base leading-7 text-mid">
              {[
                'An emerging U.S. biopharma or global manufacturer preparing for a first U.S. launch.',
                'A launch roughly 6–24 months away with key commercial capabilities still to define.',
                'A focused or specialty model where disciplined sequencing matters more than organizational size.',
                'An aesthetic product manufacturer or professional-practice group making a consequential channel, portfolio, or growth decision.',
                'A leadership team that wants assumptions challenged and decisions documented—not simply endorsed.',
              ].map((item) => (
                <li key={item} className="flex gap-4 border-b border-gray-200 pb-4">
                  <span className="mt-1 text-gold" aria-hidden="true">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-content grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <p className="eyebrow">Clear boundaries</p>
            <h2 className="mt-5 font-serif text-h2 font-medium">A decision layer—not another system of record.</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 leading-8 text-white/72">
              <p>
                UEM and the developing LaunchOS product are not intended to replace CRM, data
                platforms, agency execution, market-access specialists, or the accountable leaders
                inside the manufacturer.
              </p>
              <p>
                The role is to connect the evidence and operating choices across those capabilities,
                identify where specialist expertise is required, and improve the quality and timing
                of executive decisions.
              </p>
              <Link href="/launchos" className="inline-flex text-sm font-semibold text-gold">
                See how LaunchOS extends this model <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-sm bg-gold text-white">
        <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-2xl font-serif text-3xl text-white md:text-4xl">
            Define the problem before defining the engagement.
          </h2>
          <Link href="/contact" className="btn-outline-white whitespace-nowrap">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
