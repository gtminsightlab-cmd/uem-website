import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Launch Intelligence',
  description:
    'UEM launch intelligence and research areas for consequential U.S. commercialization decisions.',
};

const researchAreas = [
  'Cardiology',
  'CNS & neurology',
  'Dermatology',
  'Endocrinology & metabolic health',
  'Gastroenterology',
  'Immunology & inflammation',
  'Infectious disease',
  'Musculoskeletal & bone health',
  'Nephrology & urology',
  'Oncology',
  'Ophthalmology',
  'Rare disease',
  'Respiratory disease',
];

const intelligencePrinciples = [
  {
    title: 'Readiness is not a decorative score',
    body: 'A useful readiness view separates progress from confidence, evidence quality, unanswered questions, and launch-gating exposure.',
  },
  {
    title: 'AI does not rewrite launch reality',
    body: 'AI may summarize, structure, compare, and surface gaps. It should not silently change readiness state, close decisions, manufacture evidence, or present unsupported certainty.',
  },
  {
    title: 'A conclusion should show its basis',
    body: 'Material recommendations should make their sources, assumptions, limitations, and decision consequences visible to the people accountable for acting.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[72px] text-white">
        <div className="absolute inset-0 hero-shimmer" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="grid min-h-[660px] items-stretch lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center py-20 pr-0 md:py-24 lg:py-28 lg:pr-14">
              <p className="eyebrow">Launch Intelligence</p>
              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(40px,4.4vw,68px)] font-medium leading-[1.03] tracking-[-0.035em]">
                Research should improve a decision—not decorate a website.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
                UEM follows the scientific, market, access, field, and operating questions that shape
                commercialization decisions across major therapeutic areas.
              </p>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border-x border-t border-white/10 lg:min-h-full lg:border-y lg:border-r-0">
              <Image
                src="/images/uem-launch-intelligence-hero.webp"
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
                  Sources · Context · Synthesis · Decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <FadeIn>
            <p className="eyebrow">Research library</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Thirteen therapeutic areas connected by launch decisions.</h2>
            <p className="mt-5 leading-8 text-mid">
              The therapeutic context changes, but the leadership questions remain connected:
              evidence, differentiation, access, organization, field execution, patient friction,
              governance, and the timing of consequential choices.
            </p>
          </FadeIn>
          <div className="grid gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:grid-cols-2">
            {researchAreas.map((area, index) => (
              <FadeIn key={area} delay={index * 0.025} className="h-full">
                <div className="flex h-full items-center gap-4 bg-surface p-5">
                  <span className="text-xs font-semibold text-gold">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-medium text-navy">{area}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">The proof standard</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Research earns value when it changes a decision.</h2>
            <p className="mt-5 leading-8 text-mid">
              UEM evaluates intelligence by its source quality, currency, relevance, and ability to
              clarify what leadership should decide or investigate next.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {intelligencePrinciples.map((note, index) => (
              <FadeIn key={note.title} delay={index * 0.08}>
                <article className="h-full border border-gray-200 bg-white p-7">
                  <h3 className="font-serif text-xl leading-7 text-navy">{note.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-mid">{note.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-content flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="eyebrow">Need current intelligence?</p>
            <h2 className="mt-5 font-serif text-h2 font-medium">
              Ask for the decision context, not a generic download.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              Tell us the asset, launch stage, therapeutic area, and commercial decision. We will be
              explicit about what UEM can support now and what requires additional research or expert review.
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Request a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
