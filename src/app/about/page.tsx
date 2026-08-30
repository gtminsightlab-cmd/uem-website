import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the operators behind Upper Echelon Management and the principles guiding LaunchOS development.',
};

const principles = [
  {
    title: 'Evidence before certainty',
    body: 'Separate what is known, assumed, inferred, and still missing. Confidence should never outrun the evidence supporting it.',
  },
  {
    title: 'Methodology must be inspectable',
    body: 'Commercial logic should be versioned, configurable, explainable, and open to operator and expert challenge—not buried in software or a slide deck.',
  },
  {
    title: 'Expertise belongs at the decision',
    body: 'Use specialists where their judgment changes the decision, with clear scope, sourcing, and disclosure of limitations or conflicts.',
  },
  {
    title: 'The manufacturer remains accountable',
    body: 'UEM provides operating leverage and decision clarity. It does not outsource leadership accountability or pretend an advisor owns the launch.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pt-[72px] text-white">
        <div className="container-content py-24 md:py-30">
          <p className="eyebrow">About UEM</p>
          <h1 className="mt-6 max-w-4xl font-serif text-hero font-medium">
            Operator knowledge, encoded—not invented.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            Upper Echelon Management combines pharmaceutical commercial leadership with regulated
            distribution and go-to-market systems experience. That operating foundation informs both
            client work and the development of LaunchOS.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow">Multidisciplinary by design</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Different disciplines should not all look—or think—the same.
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-mid">
              <p>
                The UEM operating model is designed to connect senior science, commercial, market
                access, field, distribution, and program leaders around the same launch evidence.
              </p>
              <p>
                Specialists enter with a defined scope: contribute the judgment the decision needs,
                make assumptions visible, and leave the manufacturer with a clearer path forward.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <figure className="overflow-hidden border border-gray-200 bg-surface">
              <div className="relative aspect-[3/2] overflow-hidden bg-light">
                <Image
                  src="/images/people/global-operator-network-v2.webp"
                  alt="A diverse international group of science and business professionals gathered after a working session"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <p className="absolute bottom-0 left-0 bg-navy/85 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
                  Illustrative working scene
                </p>
              </div>
            </figure>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Founding operators</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">More than 50 years across two regulated commercial systems.</h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <article className="h-full border border-gray-200 p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Pharmaceutical commercialization</p>
                <h3 className="mt-5 font-serif text-3xl text-navy">Sharon O&apos;Dell</h3>
                <p className="mt-5 leading-8 text-mid">
                  Sharon brings 25 years of pharmaceutical commercial leadership across Janssen/J&amp;J,
                  Bristol Myers Squibb, Novo Nordisk, VIVUS, KVK, and Daiichi Sankyo, including
                  experience across multiple product launches.
                </p>
                <p className="mt-5 leading-8 text-mid">
                  Her operating record includes hiring more than 200 field representatives and 30
                  district managers, conducting more than 1,000 representative interviews, and
                  approximately four years in contract pharmaceutical sales with Amplity.
                </p>
                <p className="mt-5 border-l-2 border-gold pl-5 text-sm leading-7 text-navy">
                  Her experience directly informs UEM&apos;s organization, field, hiring, certification,
                  readiness, and launch-execution methodology.
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={0.1}>
              <article className="h-full border border-gray-200 p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Regulated distribution systems</p>
                <h3 className="mt-5 font-serif text-3xl text-navy">Ronnie O&apos;Dell</h3>
                <p className="mt-5 leading-8 text-mid">
                  Ronnie brings more than 25 years of experience building commercial distribution,
                  channel, vendor-network, and go-to-market systems in a regulated industry.
                </p>
                <p className="mt-5 leading-8 text-mid">
                  That systems perspective shapes UEM&apos;s approach to operating-model design, partner
                  decisions, governance, commercial infrastructure, and the translation of complex
                  work into an executive decision system.
                </p>
                <p className="mt-5 border-l-2 border-gold pl-5 text-sm leading-7 text-navy">
                  In LaunchOS, this experience informs the neutral partner-arbitration and system-design
                  layers while pharmaceutical methodology remains grounded in qualified operators and experts.
                </p>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <p className="eyebrow">The standard</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Commercial judgment should get stronger when it enters a system.
            </h2>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <FadeIn key={principle.title} delay={index * 0.06}>
                <article className="h-full bg-white p-7">
                  <h3 className="font-serif text-xl text-navy">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-mid">{principle.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="eyebrow">A boundary we state plainly</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">No founding team covers every launch discipline.</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-5 leading-8 text-mid">
              <p>
                UEM&apos;s deepest founding experience sits in pharmaceutical commercial leadership,
                organization, field execution, hiring, and regulated commercial systems.
              </p>
              <p>
                Deep payer and market-access expertise is a specialist requirement, not a claim we
                manufacture. UEM&apos;s model is designed to bring qualified experts into those decisions
                with explicit scope and evidence.
              </p>
              <Link href="/contact" className="inline-flex text-sm font-semibold text-navy animated-underline">
                Discuss the expertise your decision requires <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
