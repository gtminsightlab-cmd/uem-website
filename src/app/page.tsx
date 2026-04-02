import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const stats = [
  { value: '30+', label: 'Years Metabolic Experience' },
  { value: '4', label: 'Major Pharma Eras' },
  { value: '$50K', label: 'Monthly Retainer Start' },
  { value: '100%', label: 'Principal-Led' },
];

const services = [
  {
    num: '01',
    title: 'Advanced Metabolic Retention Audit',
    subtitle: 'Front-Door Diagnostic',
    desc: 'Quantify revenue leakage from early discontinuation and access barriers. Map the real patient journey and deliver a board-ready Retention Blueprint with prioritized interventions.',
    link: '/services',
  },
  {
    num: '02',
    title: 'Launch Architecture Mandate',
    subtitle: '12-Month Retainer',
    desc: 'End-to-end commercial architecture for GLP-1, dual/triple agonists, and obesity assets. Segmentation, access strategy, field model, retention engine, and KOL/narrative governance.',
    link: '/services',
  },
  {
    num: '03',
    title: 'Talent Architecture & Squad Building',
    subtitle: 'Elite Hiring',
    desc: 'Clinical stress tests, behavioral screens, and 30-year network-level checks. Small curated slates with UEM Fit Scores -- not CV stacks from generalist recruiters.',
    link: '/services',
  },
];

const capabilities = [
  {
    icon: '\u2756',
    name: 'Cardio-Metabolic',
    desc: 'GLP-1, duals, triples, and related CV/renal launches',
  },
  {
    icon: '\u26A1',
    name: 'Obesity & Weight',
    desc: 'Next-gen obesity agents and legacy weight-loss therapies',
  },
  {
    icon: '\u2318',
    name: 'US Market Entry',
    desc: 'EU/Japanese biotechs entering the U.S. market',
  },
  {
    icon: '\u25C6',
    name: 'Specialty Biopharma',
    desc: 'Oncology support, rare disease, CNS, and complex launches',
  },
];

const impactCases = [
  {
    tag: 'Launch Scale-Up',
    title: 'National Field Team Expansion',
    challenge: 'Mid-cap biotech needed to scale from 25 to 60+ reps for a complex metabolic launch, with full clinical readiness from day one.',
    result: 'Designed squad architecture, ran clinical stress tests on every hire, and achieved top-quartile launch performance in priority territories.',
  },
  {
    tag: 'Retention Architecture',
    title: 'GLP-1 Persistence Program',
    challenge: 'Early discontinuation rates eroding lifetime value. Standard patient support programs failing to address titration and side-effect drop-off.',
    result: 'Built a Retention Engine integrating nurse liaison, HCP coaching, and loyalty constructs that reduced early discontinuation in pilot populations.',
  },
  {
    tag: 'US Market Entry',
    title: 'Foreign Biotech US Gateway',
    challenge: 'EU-based mid-cap with zero US commercial footprint needed a complete launch infrastructure for their first metabolic asset.',
    result: 'Served as de facto Head of US Launch -- built the commercial architecture, hired the initial field team, and aligned KOL and payer narratives.',
  },
  {
    tag: 'Talent Architecture',
    title: 'Obesity Launch Hiring',
    challenge: 'Generalist recruiters produced three rounds of weak candidates. Launch timeline threatened.',
    result: 'Used clinical stress testing and network-level vetting to deliver a curated slate in 4 weeks. Zero first-year turnover among UEM-vetted hires.',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-md to-navy-light" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 container-content pb-24 pt-40 md:pb-28 md:pt-48">
          <FadeIn>
            <span className="eyebrow text-gold/80 mb-5 block">Strategy-Led Execution</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-hero font-normal text-white mb-6 max-w-[820px]">
              Elite Launch Architecture for{' '}
              <em className="italic text-gold-light">Advanced Metabolic</em> Therapies
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg font-light leading-relaxed text-white/80 max-w-[540px] mb-9">
              We help biotechs de-risk U.S. launches for GLP-1, dual and triple agonists, and
              modern obesity therapies by aligning evidence, access, and field execution.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Schedule a Launch Stress Test <span className="text-sm">&rarr;</span>
              </Link>
              <Link href="/services" className="btn-outline-white">
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="relative z-10 bg-navy/90 backdrop-blur-sm">
          <div className="container-content">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`py-5 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
                  <div className="font-serif text-[34px] font-normal text-gold-light leading-none">{stat.value}</div>
                  <div className="text-[11px] font-medium text-white/50 mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div>
                <span className="eyebrow mb-4 block">Who We Are</span>
                <h2 className="font-serif text-h2 text-navy mb-5">
                  The boutique your board hires when the <em className="italic">launch cannot fail</em>
                </h2>
                <div className="gold-line mb-6" />
                <p className="text-base leading-relaxed text-mid mb-5">
                  Upper Echelon Management is a principal-led launch and retention architecture firm for
                  advanced metabolic and obesity innovators. We combine 70% commercial rigor with 30%
                  clinical fluency -- the exact blend that makes CCOs, payers, and physicians trust that
                  your asset is clinically inevitable, not optional.
                </p>
                <p className="text-base leading-relaxed text-mid">
                  Unlike global strategy houses that hand off to junior teams, or contract organizations
                  that sell volume, we stay in the room from day one through month twelve. Every engagement
                  is led by our Principal, who has sold and led teams on foundational diabetes and obesity
                  brands at BMS, Novo Nordisk, and Vivus.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-surface border border-gray-200 rounded-md p-10">
                <span className="eyebrow mb-6 block">We Serve</span>
                <div className="space-y-5">
                  {[
                    { title: 'EU & Japanese Mid-Cap Biotechs', desc: 'Bringing their first advanced metabolic or obesity asset to the U.S. market with thin or zero commercial footprint.' },
                    { title: 'U.S. Biotechs with Stalling Launches', desc: 'In-market or near-launch GLP-1, dual/triple agonists, or obesity drugs facing early discontinuation and payer friction.' },
                    { title: 'Specialty Biopharma Innovators', desc: 'Companies in oncology support, rare disease, CNS, and other complex categories needing principal-level launch strategy.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-navy mb-1">{item.title}</p>
                        <p className="text-sm text-mid leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="container-content">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="eyebrow mb-4 block">Core Services</span>
              <h2 className="font-serif text-h2 text-navy">
                Three pillars of launch <em className="italic">certainty</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {services.map((svc, i) => (
              <FadeIn key={svc.num} delay={i * 0.1}>
                <Link href={svc.link} className="group bg-white p-9 relative block transition-all duration-300 hover:bg-navy">
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold transition-all duration-500 group-hover:w-full" />
                  <span className="text-[11px] font-bold tracking-[0.15em] text-gold mb-5 block">{svc.num}</span>
                  <h3 className="font-serif text-[22px] font-normal text-navy mb-2.5 leading-tight group-hover:text-white transition-colors">{svc.title}</h3>
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold mb-4 block">{svc.subtitle}</span>
                  <p className="text-sm leading-relaxed text-mid mb-5 group-hover:text-white/70 transition-colors">{svc.desc}</p>
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold">Learn More &rarr;</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THERAPEUTIC FOCUS */}
      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn>
            <div className="mb-14">
              <span className="eyebrow mb-4 block">Therapeutic Focus</span>
              <h2 className="font-serif text-h2 text-navy max-w-lg">
                Deep expertise where <em className="italic">persistence</em> determines value
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.name} delay={i * 0.08}>
                <div className="group bg-white border border-gray-200 p-5 rounded-md cursor-default relative overflow-hidden transition-all duration-200 hover:border-navy hover:shadow-lg hover:-translate-y-0.5">
                  <span className="absolute left-0 top-0 bottom-0 w-0 bg-gold transition-all duration-300 group-hover:w-[3px]" />
                  <div className="text-[22px] mb-2.5">{cap.icon}</div>
                  <h4 className="font-serif text-[15px] text-navy mb-1">{cap.name}</h4>
                  <p className="text-xs text-mist leading-relaxed">{cap.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-navy">
        <div className="container-content py-24">
          <FadeIn>
            <div className="mb-14">
              <span className="eyebrow text-gold/70 mb-4 block">Impact</span>
              <h2 className="font-serif text-h2 text-white">Selected engagement <em className="italic">outcomes</em></h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-px bg-white/[0.12]">
            {impactCases.map((c, i) => (
              <FadeIn key={c.tag} delay={i * 0.08}>
                <div className="bg-navy p-10 transition-colors hover:bg-navy-md">
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-gold mb-3 block">{c.tag}</span>
                  <h3 className="font-serif text-[22px] text-white mb-3.5 leading-tight">{c.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed mb-3.5">{c.challenge}</p>
                  <div className="h-px bg-white/10 mb-3.5" />
                  <p className="text-sm font-medium text-white/90 leading-relaxed">{c.result}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section bg-white">
        <div className="container-content">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="eyebrow mb-4 block">How We Work</span>
              <h2 className="font-serif text-h2 text-navy">From diagnostic to <em className="italic">launch certainty</em></h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-0 relative">
            <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px bg-gray-200" />
            {[
              { num: '1', weeks: 'Week 1-2', title: 'Stress Test', desc: '30-minute diagnostic conversation to identify where your launch is most exposed.' },
              { num: '2', weeks: 'Week 2-8', title: 'Retention Audit', desc: 'Quantify leakage, map the patient journey, and deliver a prioritized Retention Blueprint.' },
              { num: '3', weeks: 'Month 2-6', title: 'Architecture Build', desc: 'Design launch, retention, and talent architecture. Stand up field model and KOL strategy.' },
              { num: '4', weeks: 'Month 6-12', title: 'Govern & Optimize', desc: 'Ongoing governance, war-room facilitation, and real-time optimization of launch KPIs.' },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.12}>
                <div className="group text-center px-4 md:py-0 py-6">
                  <div className="w-[72px] h-[72px] rounded-full border-[1.5px] border-gray-200 bg-white flex items-center justify-center mx-auto mb-5 relative z-10 transition-all duration-300 group-hover:bg-navy group-hover:border-navy">
                    <span className="font-serif text-xl font-normal text-navy group-hover:text-gold transition-colors">{step.num}</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-gold mb-2 block">{step.weeks}</span>
                  <h4 className="font-serif text-lg text-navy mb-2">{step.title}</h4>
                  <p className="text-[13px] text-mid leading-relaxed">{step.desc}</p>
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
            <span className="eyebrow text-gold/70 mb-4 block">Ready to Begin?</span>
            <h2 className="font-serif text-h2 text-white mb-6">
              Schedule your 30-minute <em className="italic text-gold-light">Launch Stress Test</em>
            </h2>
            <p className="text-base text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
              A focused diagnostic conversation with our Principal to identify where your advanced
              metabolic or obesity launch is most exposed -- and what to do about it.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Schedule a Call <span className="text-sm">&rarr;</span>
              </Link>
              <Link href="/services" className="btn-outline-white">
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
