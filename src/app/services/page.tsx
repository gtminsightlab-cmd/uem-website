import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Upper Echelon Management',
  description: 'Advanced Metabolic Retention Audit, Launch Architecture Mandate, and Talent Architecture & Squad Building for GLP-1, dual/triple agonists, and obesity therapies.',
};

const coreServices = [
  {
    num: '01',
    title: 'Advanced Metabolic Retention Audit',
    badge: 'Front-Door Diagnostic',
    price: '$75-150K Fixed Fee',
    duration: '4-8 Weeks',
    overview: 'For biotechs with GLP-1, dual/triple agonists, or obesity therapies already in market or close to launch.',
    bullets: [
      'Quantify revenue leakage from early discontinuation, access barriers, and channel friction using your data and emerging real-world persistence benchmarks.',
      'Map your current patient journey from prescription to 6-12 month follow-up, highlighting friction points in titration, side-effect management, affordability, and channel.',
      'Assess your HCP and KOL narrative vs. the evolving cardiometabolic evidence base and payer expectations.',
    ],
    deliverables: [
      'Retention Leakage Report with financial model and prioritized list of 5-7 operational "leaks"',
      'Retention Blueprint: lean retention engine design including patient support, nurse/liaison model, loyalty architecture, and KOL activation',
      'Board-ready 2-3 page Executive Summary quantifying risk, upside, and recommended next steps',
    ],
    addons: [
      'Targeted Field Force Tune-Up sessions to embed new persistence messaging',
      'Focused New Manager Coaching to help frontline leaders drive the right behaviors post-audit',
    ],
  },
  {
    num: '02',
    title: 'Advanced Metabolic Launch Architecture Mandate',
    badge: '12-Month Retainer',
    price: 'Starting at $50K/month + Performance Bonus',
    duration: '12 Months',
    overview: 'For companies planning or executing a high-stakes U.S. launch in advanced metabolic or obesity categories.',
    bullets: [
      'Design end-to-end Launch Architecture: target patient and prescriber segmentation, access strategy, field model, channel prioritization, and governance.',
      'Build a Retention Engine integrating titration and side-effect navigation, patient support, and loyalty constructs to reduce early drop-off.',
      'Lead KOL and Narrative Strategy so your story is clinically credible, payer-relevant, and executable by real reps in real clinics.',
      'Includes Talent Architecture & Squad Building for key roles, with our Principal personally vetting finalists and providing UEM Fit Scores.',
    ],
    deliverables: [
      'Complete launch architecture documentation and governance framework',
      'Retention Engine design with KPIs and pilot program structure',
      'KOL stratification, message platform, and activation plan',
      'Talent architecture with role archetypes, competency models, and vetted candidate slates',
    ],
    addons: [
      'Ongoing New Manager Coaching for new or expanded districts',
      'Quarterly Launch War Room facilitation to adjust tactics based on real-world performance',
      'Bespoke micro-video modules ("how we sell this asset") for internal training',
    ],
  },
  {
    num: '03',
    title: 'Talent Architecture & Squad Building',
    badge: 'Elite Hiring',
    price: 'Scoped Per Engagement',
    duration: '4-12 Weeks',
    overview: 'For U.S. and foreign firms that cannot afford to get their first wave of hires wrong.',
    bullets: [
      'Define the role archetypes and competencies required for complex metabolic and obesity launches: clinical fluency, access savvy, persistence mindset, and compliance rigor.',
      'Run Clinical Stress Tests -- live role-plays on real cardio-metabolic cases. If candidates cannot explain your label, persistence data, and safety profile in plain language, they do not move forward.',
      'Behavioral and Culture Screens to catch the red flags generalist recruiters miss: blame-shifting, territory entitlement, compliance gray-zones, and low coachability.',
      'Network-Level Reference Checks through a 30-year network of managers and physicians -- not generic reference calls.',
    ],
    deliverables: [
      'Role archetype definitions and competency models for your specific launch',
      'Small curated slate with structured UEM Fit Scores (0-100) and narrative risk flags',
      'Candidate briefs with strengths, risks, and ideal role fit recommendations',
    ],
    addons: [
      'New Manager Coaching for leaders inheriting or building those squads',
      'Asset-specific "Advanced Metabolic Selling 101" video series for onboarding',
    ],
  },
];

const alaCarte = [
  {
    title: 'New Manager Coaching',
    desc: 'For first-time district/regional managers in metabolic and specialty categories. 3-6 virtual session packages with optional shadowing and call reviews.',
    outcome: 'Shorten the time it takes a new manager to become effective at coaching complex metabolic selling and managing compliance.',
  },
  {
    title: 'Field Force Tune-Up',
    desc: 'Short 1-2 half-day virtual engagements to pressure-test and sharpen how reps sell GLP-1, dual/triple, or obesity assets and handle payer and persistence objections.',
    outcome: 'Immediate uplift in message quality and clinical credibility of your existing field force.',
  },
  {
    title: 'Launch War Room Facilitation',
    desc: '1-2 day structured working session with cross-functional leaders to walk through your Launch Architecture and Retention Engine with Sharon as external stress tester.',
    outcome: 'Identify blind spots and misalignments before they become expensive field-level problems.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-content">
          <FadeIn>
            <span className="eyebrow mb-4 block">Capabilities</span>
            <h1 className="font-serif text-h2 text-navy mb-5 max-w-2xl">
              Launch architecture, retention design, and elite talent for{' '}
              <em className="italic">advanced metabolic</em> therapies
            </h1>
            <p className="text-base text-mid leading-relaxed max-w-xl">
              Three core services designed to de-risk your U.S. launch from strategy through
              execution. Each can stand alone or layer together into a comprehensive mandate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Services */}
      {coreServices.map((svc, idx) => (
        <section key={svc.num} className={`section ${idx % 2 === 0 ? 'bg-white' : 'bg-surface'}`}>
          <div className="container-content">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
              {/* Left: overview */}
              <FadeIn>
                <div className="lg:sticky lg:top-24">
                  <span className="text-[11px] font-bold tracking-[0.15em] text-gold mb-3 block">
                    {svc.num}
                  </span>
                  <h2 className="font-serif text-h3 text-navy mb-3">{svc.title}</h2>
                  <div className="flex gap-2 mb-5 flex-wrap">
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-sage bg-emerald-50 px-2.5 py-1 rounded">
                      {svc.badge}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-mid bg-gray-100 px-2.5 py-1 rounded">
                      {svc.duration}
                    </span>
                  </div>
                  <div className="gold-line mb-5" />
                  <p className="text-sm text-mid leading-relaxed mb-6">{svc.overview}</p>
                  <div className="bg-navy rounded-md p-5">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold mb-1 block">
                      Investment
                    </span>
                    <span className="font-serif text-xl text-white">{svc.price}</span>
                  </div>
                </div>
              </FadeIn>

              {/* Right: details */}
              <div>
                <FadeIn delay={0.1}>
                  <div className="mb-10">
                    <h3 className="text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-5">
                      What We Do
                    </h3>
                    <div className="space-y-4">
                      {svc.bullets.map((b, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-mid leading-relaxed">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                  <div className="mb-10">
                    <h3 className="text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-5">
                      Deliverables
                    </h3>
                    <div className="space-y-3">
                      {svc.deliverables.map((d, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="font-serif text-sm text-gold flex-shrink-0 w-5">{i + 1}.</span>
                          <p className="text-sm text-mid leading-relaxed">{d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="bg-surface border border-gray-200 rounded-md p-6">
                    <h3 className="text-[10px] font-bold tracking-[0.16em] uppercase text-mist mb-4">
                      Optional Add-Ons
                    </h3>
                    <div className="space-y-2.5">
                      {svc.addons.map((a, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-gold text-xs mt-0.5">+</span>
                          <p className="text-sm text-mid leading-relaxed">{a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* A La Carte */}
      <section id="addons" className="section bg-navy">
        <div className="container-content">
          <FadeIn>
            <div className="mb-14">
              <span className="eyebrow text-gold/70 mb-4 block">Coaching & Training</span>
              <h2 className="font-serif text-h2 text-white mb-4">
                A la carte <em className="italic text-gold-light">add-ons</em>
              </h2>
              <p className="text-sm text-white/50 max-w-lg leading-relaxed">
                Available as standalone engagements or bundled with core services.
                Priced as discrete packages ($15-40K depending on scope).
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.12]">
            {alaCarte.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-navy p-8 hover:bg-navy-md transition-colors">
                  <h3 className="font-serif text-lg text-white mb-3">{item.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed mb-4">{item.desc}</p>
                  <div className="h-px bg-white/10 mb-4" />
                  <p className="text-sm text-gold/80 leading-relaxed">
                    <span className="font-semibold text-gold">Outcome:</span> {item.outcome}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-white">
        <div className="container-content text-center">
          <FadeIn>
            <h2 className="font-serif text-h3 text-navy mb-4">
              Not sure which service fits?
            </h2>
            <p className="text-sm text-mid max-w-md mx-auto mb-6 leading-relaxed">
              Start with a 30-minute Launch Stress Test. We will diagnose where your launch is most
              exposed and recommend the right engagement model.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a Stress Test <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
