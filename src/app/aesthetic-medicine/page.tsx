import type { Metadata } from 'next';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';
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

      <section className="bg-navy pt-[72px] text-white">
        <div className="container-content py-18 md:py-30">
          <p className="eyebrow">Aesthetic medicine commercialization</p>
          <h1 className="mt-6 max-w-5xl font-serif text-hero font-medium">
            Commercialize aesthetic products through the practices that adopt, recommend, and use them.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            UEM supports smaller and growth-stage manufacturers bringing injectables,
            professional skincare, and other practice-dispensed aesthetic products into U.S.
            dermatology, plastic-surgery, medical-office, and med-spa channels.
          </p>
          <Link href="/contact" className="btn-primary mt-9">
            Discuss an aesthetic launch <span aria-hidden="true">→</span>
          </Link>
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
              <h2 className="mt-5 font-serif text-3xl text-navy">LaunchOS for aesthetic medicine</h2>
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
                Explore the LaunchOS model <span className="ml-2" aria-hidden="true">→</span>
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
