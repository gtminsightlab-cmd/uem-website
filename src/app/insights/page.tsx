import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';
import { insights } from '@/content/insights';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'U.S. Pharmaceutical Launch Insights',
  description:
    'Evidence-backed U.S. pharmaceutical launch insights for emerging, global, and first-time commercial-stage biopharma manufacturers.',
  path: '/insights',
});

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[72px] text-white">
        <div className="absolute inset-0 hero-shimmer" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="grid min-h-[660px] items-stretch lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center py-20 pr-0 md:py-24 lg:py-28 lg:pr-14">
              <p className="eyebrow">U.S. Commercialization Insights</p>
              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(40px,4.4vw,68px)] font-medium leading-[1.03] tracking-[-0.035em]">
                Clear thinking for the decisions behind a U.S. pharmaceutical launch.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
                Written for global manufacturers entering the United States and emerging U.S. biopharma
                teams building commercial infrastructure for the first time. Research is cited, limits
                are stated, and the human consequences stay visible.
              </p>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border-x border-t border-white/10 lg:min-h-full lg:border-y lg:border-r-0">
              <Image
                src="/images/uem-insights-evidence-clarity-hero.webp"
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
                  Research · Evidence · Limits · Decisions
                </p>
              </div>
            </div>
          </div>
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
                      <p className="text-xs font-semibold text-navy">By Sharon O’Dell</p>
                      <p className="mt-1 text-[11px] text-mist">Founder · Upper Echelon Management</p>
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
              principles behind UEM and RxLaunchOS.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border-l-2 border-gold bg-surface p-7 md:p-9">
              <p className="font-serif text-2xl leading-9 text-navy">
                “The most useful answer is sometimes a clearer question, a visible assumption, or
                an honest statement that the evidence is not ready.”
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                Sharon O’Dell · Founder
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
