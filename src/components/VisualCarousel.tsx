'use client';

import Image from 'next/image';
import { useState } from 'react';

const slides = [
  {
    src: '/images/visual-system/readiness-signals.png',
    title: 'Readiness signals',
    body: 'A launch view should separate overall movement from the unresolved signals that can still stop progress.',
    note: 'Readiness · Confidence · Evidence · Gates',
  },
  {
    src: '/images/visual-system/launch-critical-path.png',
    title: 'Launch critical path',
    body: 'Milestones matter because of their dependencies and decision gates—not because they occupy a row on a project plan.',
    note: 'Milestones · Dependencies · Decision gates',
  },
  {
    src: '/images/visual-system/evidence-to-decision.png',
    title: 'Evidence to decision',
    body: 'Different evidence inputs converge at a governed decision, where the team can proceed, gather more proof, or stop.',
    note: 'Evidence · Validation · Choice · Action',
  },
  {
    src: '/images/visual-system/commercial-operating-model.png',
    title: 'Commercial operating model',
    body: 'The manufacturer remains at the center while evidence, access, field, data, partners, and governance operate as one system.',
    note: 'Manufacturer-led · Cross-functional · Vendor-neutral',
  },
  {
    src: '/images/visual-system/science-to-market.png',
    title: 'Science to market',
    body: 'Commercialization translates scientific value through evidence and operating choices into a market the organization can serve.',
    note: 'Science · Translation · Market system',
  },
  {
    src: '/images/visual-system/risk-governance.png',
    title: 'Risk and governance',
    body: 'Risks become manageable when escalation, ownership, decision rights, and resolution paths are visible together.',
    note: 'Risk · Ownership · Escalation · Resolution',
  },
];

export default function VisualCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <div className="overflow-hidden border border-navy/15 bg-white shadow-[0_24px_70px_rgba(22,75,82,0.10)]">
      <div className="grid lg:grid-cols-[1.28fr_0.72fr]">
        <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden bg-surface">
          <Image
            key={activeSlide.src}
            src={activeSlide.src}
            alt=""
            fill
            quality={92}
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover"
          />
          <div className="absolute left-5 top-5 border border-navy/15 bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy backdrop-blur-sm">
            Illustrative operating model
          </div>
        </div>

        <div className="flex min-h-[320px] flex-col justify-between bg-navy p-7 text-white md:p-10">
          <div aria-live="polite">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
              {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </p>
            <h3 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">{activeSlide.title}</h3>
            <p className="mt-5 leading-7 text-white/70">{activeSlide.body}</p>
            <p className="mt-7 border-l-2 border-gold pl-4 text-xs font-semibold uppercase leading-6 tracking-[0.1em] text-white/55">
              {activeSlide.note}
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                className="flex h-11 w-11 items-center justify-center border border-white/25 text-lg transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Show previous operating model"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="flex h-11 w-11 items-center justify-center border border-white/25 text-lg transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Show next operating model"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="mt-6 flex gap-2" aria-label="Select operating model">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 flex-1 transition-colors ${index === activeIndex ? 'bg-gold' : 'bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Show ${slide.title}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
