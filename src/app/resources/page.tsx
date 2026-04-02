import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Upper Echelon Management',
  description: 'Free video content, playbook snippets, and the Intelligence Vault -- therapeutic area deep-insight reports for biopharma leaders.',
};

const videos = [
  {
    title: '5 Mistakes Managers Make When Hiring for GLP-1 and Obesity Launches',
    desc: 'Sharon breaks down the most common hiring errors that derail metabolic launches -- and what to screen for instead.',
    duration: '12 min',
    tag: 'Talent',
  },
  {
    title: 'How Elite Reps Talk About Titration and Persistence in 2026',
    desc: 'The clinical-commercial selling approach that separates top-quartile reps from sample droppers in advanced metabolic categories.',
    duration: '10 min',
    tag: 'Selling',
  },
  {
    title: 'Coaching Your First-Time Manager in a Complex Metabolic Launch',
    desc: 'Practical frameworks for turning a strong individual contributor into a leader who drives persistence behaviors across their district.',
    duration: '14 min',
    tag: 'Coaching',
  },
];

const vaultReports = [
  { title: 'Cardiology & Cardiovascular', pages: 42, status: 'available' },
  { title: 'Endocrinology & Metabolic', pages: 38, status: 'available' },
  { title: 'Infectious Diseases & Vaccines', pages: 35, status: 'available' },
  { title: 'Immunology & Inflammation', pages: 40, status: 'available' },
  { title: 'Gastroenterology & Digestive', pages: 36, status: 'available' },
  { title: 'Respiratory & Pulmonary', pages: 34, status: 'available' },
  { title: 'Hematology & Coagulation', pages: 33, status: 'available' },
  { title: 'Dermatology & Skin Disease', pages: 31, status: 'available' },
  { title: 'Ophthalmology & Retinal', pages: 29, status: 'available' },
  { title: 'Nephrology & Urology', pages: 32, status: 'available' },
  { title: 'Musculoskeletal & Bone', pages: 30, status: 'available' },
  { title: 'Rare Diseases & Orphan Conditions', pages: 37, status: 'available' },
  { title: 'CNS & Neurology', pages: 41, status: 'available' },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-content">
          <FadeIn>
            <span className="eyebrow mb-4 block">Resources</span>
            <h1 className="font-serif text-h2 text-navy mb-5 max-w-2xl">
              Playbook snippets, deep-insight reports, and{' '}
              <em className="italic">free</em> expert content
            </h1>
            <p className="text-base text-mid leading-relaxed max-w-xl">
              Free video content showcasing our clinical-commercial approach, plus the
              Intelligence Vault -- our library of therapeutic area deep-insight reports.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Video Content */}
      <section className="section bg-white">
        <div className="container-content">
          <FadeIn>
            <div className="mb-14">
              <span className="eyebrow mb-4 block">Playbook Snippets</span>
              <h2 className="font-serif text-h2 text-navy">
                Short videos with <em className="italic">Sharon</em>
              </h2>
              <p className="text-sm text-mid mt-4 max-w-lg leading-relaxed">
                Each video showcases real clinical-commercial pattern recognition from
                30+ years in metabolic and obesity launches. No fluff, no theory --
                just hard-won insight.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="group border border-gray-200 rounded-md overflow-hidden hover:shadow-lg hover:border-navy transition-all">
                  {/* Video placeholder */}
                  <div className="bg-gradient-to-br from-navy to-navy-md aspect-video flex items-center justify-center relative">
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <div className="relative z-10 w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold transition-colors">
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="ml-1">
                        <path d="M0 0L18 10L0 20V0Z" fill="#0F2040" />
                      </svg>
                    </div>
                    <span className="absolute bottom-3 right-3 text-[10px] font-bold tracking-wider uppercase text-white/50 bg-black/30 px-2 py-0.5 rounded">
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold mb-2 block">
                      {v.tag}
                    </span>
                    <h3 className="font-serif text-[16px] text-navy mb-2 leading-snug">
                      {v.title}
                    </h3>
                    <p className="text-xs text-mist leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="text-center text-xs text-mist mt-8 italic">
              Video content coming soon. Sign up for notifications on our Contact page.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intelligence Vault */}
      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn>
            <div className="mb-14">
              <span className="eyebrow mb-4 block">Intelligence Vault</span>
              <h2 className="font-serif text-h2 text-navy">
                Therapeutic area <em className="italic">deep-insight</em> reports
              </h2>
              <p className="text-sm text-mid mt-4 max-w-lg leading-relaxed">
                A comprehensive library of 13 therapeutic area reports covering market
                dynamics, competitive landscape, clinical pipeline, and commercial
                implications for biopharma leaders.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vaultReports.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.04}>
                <div className="bg-white border border-gray-200 rounded-md p-6 hover:border-navy hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-sage bg-emerald-50 px-2 py-0.5 rounded inline-block mb-3">
                    Available Now
                  </span>
                  <h4 className="font-serif text-[16px] text-navy mb-1.5 leading-snug">
                    {r.title}
                  </h4>
                  <p className="text-xs text-mist mb-4">{r.pages} pages</p>
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold pt-3 border-t border-gray-200 block">
                    Request Access &rarr;
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-content text-center">
          <FadeIn>
            <h2 className="font-serif text-h3 text-white mb-4">
              Want access to the Intelligence Vault?
            </h2>
            <p className="text-sm text-white/50 max-w-md mx-auto mb-6 leading-relaxed">
              Contact us to request reports or sign up for notifications when new video
              content is released.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
