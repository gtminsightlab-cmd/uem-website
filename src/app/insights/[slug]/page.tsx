import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getInsight, insights } from '@/content/insights';

type InsightPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export function generateMetadata({ params }: InsightPageProps): Metadata {
  const insight = getInsight(params.slug);

  if (!insight) {
    return { title: 'Insight Not Found' };
  }

  return {
    title: insight.title,
    description: insight.description,
    authors: [{ name: 'Sharon Lee' }],
    openGraph: {
      title: insight.title,
      description: insight.description,
      type: 'article',
      publishedTime: '2026-08-30',
      authors: ['Sharon Lee'],
      images: [],
    },
    twitter: {
      card: 'summary',
      title: insight.title,
      description: insight.description,
      images: [],
    },
  };
}

export default function InsightPage({ params }: InsightPageProps) {
  const insight = getInsight(params.slug);

  if (!insight) {
    notFound();
  }

  const citation = (ids?: number[]) =>
    ids?.map((id) => {
      const source = insight.sources.find((item) => item.id === id);

      if (!source) return null;

      return (
        <sup key={id} className="ml-1 align-super text-[10px] font-semibold text-gold">
          <a
            href={source.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Source ${id}: ${source.title}`}
            className="hover:text-gold-dark"
          >
            [{id}]
          </a>
        </sup>
      );
    });

  return (
    <article className="bg-white pt-[72px]">
      <header className="border-b border-gray-200 bg-surface">
        <div className="container-narrow py-20 md:py-24">
          <Link href="/insights" className="eyebrow inline-flex items-center gap-2 hover:text-gold-dark">
            <span aria-hidden="true">←</span> U.S. Commercialization Insights
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            {insight.category}
          </p>
          <h1 className="mt-5 font-serif text-[clamp(38px,5.2vw,66px)] font-medium leading-[1.04] tracking-[-0.03em] text-navy">
            {insight.title}
          </h1>
          <p className="mt-7 text-lg leading-8 text-mid">{insight.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-200 pt-6 text-xs">
            <span className="font-semibold text-navy">By Sharon Lee, Founding Member</span>
            <span className="text-gray-300" aria-hidden="true">•</span>
            <span className="text-mist">{insight.published}</span>
            <span className="text-gray-300" aria-hidden="true">•</span>
            <span className="text-mist">{insight.readingTime}</span>
          </div>
        </div>
      </header>

      <figure className="container-content py-10 md:py-14">
        <div className="relative aspect-[16/7] overflow-hidden bg-light">
          <Image
            src={insight.image}
            alt={insight.imageAlt}
            fill
            priority
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-xs leading-5 text-mist">{insight.imageCaption}</figcaption>
      </figure>

      <div className="container-narrow pb-24">
        <div className="space-y-6 border-b border-gray-200 pb-10 text-lg leading-9 text-ink">
          {insight.lead.map((paragraph, index) => (
            <p key={index} className={index === 0 ? 'font-serif text-2xl leading-10 text-navy' : ''}>
              {paragraph.text}
              {citation(paragraph.citations)}
            </p>
          ))}
        </div>

        <div className="space-y-14 py-12">
          {insight.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-3xl font-medium leading-tight text-navy md:text-4xl">
                {section.heading}
              </h2>
              <div className="mt-6 space-y-6 text-[17px] leading-8 text-mid">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.text}
                    {citation(paragraph.citations)}
                  </p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-7 space-y-4 border-l-2 border-gold bg-surface p-6 text-[16px] leading-7 text-ink md:p-8">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 flex-none rounded-full bg-gold" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <blockquote className="border-y border-gray-200 py-10 font-serif text-2xl leading-10 text-navy md:text-3xl md:leading-[1.45]">
          {insight.closing}
        </blockquote>

        <section className="mt-14" aria-labelledby="sources-heading">
          <h2 id="sources-heading" className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Research and sources
          </h2>
          <ol className="mt-6 space-y-5">
            {insight.sources.map((source) => (
              <li key={source.id} className="grid grid-cols-[28px_1fr] gap-3 text-sm leading-6 text-mid">
                <span className="font-semibold text-gold">{source.id}.</span>
                <div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-navy underline decoration-gold/40 underline-offset-4 hover:text-gold-dark"
                  >
                    {source.title}
                  </a>
                  <p className="mt-1 text-xs text-mist">
                    {source.publisher}{source.note ? ` · ${source.note}` : ''}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="mt-16 bg-navy p-8 text-white md:p-10">
          <p className="eyebrow">A decision worth pressure-testing?</p>
          <h2 className="mt-4 font-serif text-3xl">Bring us the decision—not a polished status report.</h2>
          <p className="mt-5 max-w-xl leading-7 text-white/70">
            UEM works with global and emerging manufacturers on U.S. commercialization choices,
            readiness, operating-model design, and scoped expert needs. We will be explicit about
            what we can support and where additional evidence or specialist depth is required.
          </p>
          <Link href="/contact" className="btn-primary mt-7">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </div>
    </article>
  );
}
