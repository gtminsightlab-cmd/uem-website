import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';
import { insights } from '@/content/insights';

export const metadata: Metadata = {
  title: 'U.S. Commercialization Insights',
  description:
    'Evidence-backed perspectives from Sharon Lee and Upper Echelon Management for global and emerging manufacturers preparing a U.S. pharmaceutical launch.',
  openGraph: {
    title: 'U.S. Commercialization Insights | Upper Echelon Management',
    description:
      'Human, evidence-backed guidance for first-time U.S. launch manufacturers.',
    type: 'website',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'U.S. Commercialization Insights | Upper Echelon Management',
    description: 'Human, evidence-backed guidance for first-time U.S. launch manufacturers.',
    images: [],
  },
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy pt-[72px] text-white">
        <div className="container-content py-24 md:py-30">
          <p className="eyebrow">U.S. Commercialization Insights</p>
          <h1 className="mt-6 max-w-4xl font-serif text-hero font-medium">
            Clear thinking for the decisions behind a first U.S. launch.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            Written for global manufacturers entering the United States and emerging U.S. biopharma
            teams building commercial infrastructure for the first time. Research is cited, limits
            are stated, and the human consequences stay visible.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <div className="grid gap-8 lg:grid-cols-3">
            {insights.map((insight, index) => (
              <FadeIn key={insight.slug} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(22,75,82,0.12)]">
                  <Link href={`/insights/${insight.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-light">
                      <Image
                        src={insight.image}
                        alt={insight.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold">
                      <span>{insight.category}</span>
                      <span className="text-gray-300" aria-hidden="true">•</span>
                      <span className="text-mist">{insight.readingTime}</span>
                    </div>
                    <h2 className="mt-5 font-serif text-2xl leading-tight text-navy">
                      <Link href={`/insights/${insight.slug}`} className="transition-colors hover:text-gold-dark">
                        {insight.title}
                      </Link>
                    </h2>
                    <p className="mt-4 flex-1 text-sm leading-7 text-mid">{insight.description}</p>
                    <div className="mt-7 border-t border-gray-200 pt-5">
                      <p className="text-xs font-semibold text-navy">By Sharon Lee</p>
                      <p className="mt-1 text-[11px] text-mist">Founding Member · Upper Echelon Management</p>
                    </div>
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="mt-6 inline-flex text-sm font-semibold text-navy animated-underline"
                    >
                      Read the article <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow">Why we publish</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Useful before promotional.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-mid">
              UEM publishes to help commercial leaders see decisions, dependencies, and evidence
              gaps earlier. Each article connects practical launch questions with the operating
              principles behind UEM and LaunchOS.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border-l-2 border-gold bg-surface p-7 md:p-9">
              <p className="font-serif text-2xl leading-9 text-navy">
                “The most useful answer is sometimes a clearer question, a visible assumption, or
                an honest statement that the evidence is not ready.”
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                Sharon Lee · Founding Member
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
