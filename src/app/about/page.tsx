import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Upper Echelon Management',
  description: 'Meet our Principal -- a cardio-metabolic launch architect with 30+ years across BMS, Novo Nordisk, and Vivus. Principal-led, no handoffs.',
};

const career = [
  { firm: 'Bristol-Myers Squibb', role: 'Diabetes Sales Representative', years: '1999-2003', desc: 'Glucophage, Glucovance, Prandin -- front-line field experience during the foundational oral diabetes era.' },
  { firm: 'Daiichi Sankyo', role: 'Metabolic Commercial Roles', years: '2004-2008', desc: 'Welchol T2D indication and post-TZD era positioning in a skeptical payer environment.' },
  { firm: 'Novo Nordisk', role: 'Field Leadership, Insulin & GLP-1', years: '2006-2013', desc: 'Led teams through Novo\'s transition from "insulin company" to modern incretin powerhouse including the liraglutide era.' },
  { firm: 'Vivus', role: 'Leadership, Qsymia (Obesity)', years: '2014-2018', desc: 'Field leadership, KOL/speaker strategy, and payer pull-through for one of the first modern prescription obesity therapies.' },
  { firm: 'National Leadership', role: 'Cross-Portfolio Commercial', years: '8+ Years', desc: 'National-scope leadership across TX, FL, GA, NC, SC and full California coverage.' },
];

const principles = [
  { title: 'Principal-Led, Always', desc: 'Every engagement is led by our Principal. No bait-and-switch. No junior analysts doing the real work while the partner moves on.' },
  { title: 'Clinical-Commercial Blend', desc: '70% commercial rigor, 30% clinical fluency. We speak the language of CCOs and physicians alike, because your launch needs both.' },
  { title: 'No-Handoff Model', desc: 'From stress test through month twelve, the same team that diagnosed the problem designs and governs the solution.' },
  { title: 'Evidence-Grounded', desc: 'Every recommendation connects to real-world persistence data, payer behavior, and guideline evolution -- never to slideware or theory.' },
  { title: 'Operator Mentality', desc: 'We have carried the bag, led the team, and been accountable for the number. Our advice comes from having done the work, not observed it.' },
  { title: 'Built for Boutique Intensity', desc: 'We serve 2-3 clients at a time, by design. That means you get undivided principal attention, not diluted across a portfolio of 20 accounts.' },
];

const broaderCapabilities = [
  { area: 'Oncology Supportive Care', desc: 'Launch strategy for supportive care therapies in complex treatment protocols.' },
  { area: 'Rare Disease & Orphan', desc: 'Precision deployment for small-population launches with specialty pharmacy and access complexity.' },
  { area: 'CNS & Neurology', desc: 'Commercial architecture for CNS assets where KOL engagement and treatment persistence are decisive.' },
  { area: 'Immunology & Inflammation', desc: 'Field model design and payer strategy for competitive specialty categories.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-200 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-content">
          <FadeIn>
            <span className="eyebrow mb-4 block">Our Story</span>
            <h1 className="font-serif text-h2 text-navy mb-5 max-w-2xl">
              Built by operators, <em className="italic">for operators</em>
            </h1>
            <p className="text-base text-mid leading-relaxed max-w-xl">
              Upper Echelon Management exists because too many high-science launches are
              run by people who have never carried the bag or led the team. We bring
              three decades of field-up commercial experience to the launches that
              matter most.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sharon Bio */}
      <section id="principal" className="section bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            {/* Left: photo placeholder + name */}
            <FadeIn>
              <div>
                {/* Premium photo frame with gold accent border */}
                <div className="relative max-w-[360px] mb-6 p-1 bg-gradient-to-br from-gold via-gold/70 to-gold/50 rounded-md shadow-lg">
                  {/* Inner container with slight padding for frame effect */}
                  <div className="bg-white p-1 rounded-sm">
                    {/* Image container with fallback gradient background */}
                    <div className="bg-gradient-to-br from-navy to-navy-md rounded-sm aspect-[3/4] relative overflow-hidden flex items-end p-8">
                      {/* Gradient fallback placeholder - shows if image fails to load */}
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                          backgroundSize: '24px 24px',
                        }}
                      />

                      {/* Real image - fills container with object-cover, positioned over gradient fallback */}
                      <img
                        src="/images/sharon-lee.jpg"
                        alt="Sharon Lee, Principal at Upper Echelon Management"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Text overlay with name and title */}
                      <div className="relative z-10">
                        <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-gold block mb-2">
                          Principal
                        </span>
                        <h2 className="font-serif text-3xl text-white mb-1">Sharon Lee</h2>
                        <p className="text-xs text-white/50">Cardio-Metabolic Launch & Retention Architect</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface border border-gray-200 rounded-md p-5 mb-3">
                  <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-gold block mb-3">
                    Education
                  </span>
                  <p className="text-sm font-semibold text-navy mb-0.5">University of California, Berkeley</p>
                  <p className="text-xs text-mid leading-relaxed">
                    Bachelor of Arts &amp; Science, History -- Magna Cum Laude
                  </p>
                  <p className="text-xs text-mist mt-1">
                    NCAA Division I Field Hockey -- Full Athletic Scholarship
                  </p>
                </div>
                <div className="bg-surface border border-gray-200 rounded-md p-5">
                  <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-gold block mb-3">
                    Geographic Leadership
                  </span>
                  <p className="text-sm text-mid leading-relaxed">
                    20+ years leading teams across the West, Southwest, and Southeast -- including
                    full California responsibility, plus deep experience in Texas, Florida, Georgia,
                    North Carolina, and South Carolina. 8 years in national leadership.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right: bio content */}
            <div>
              <FadeIn delay={0.1}>
                <div className="border-l-[3px] border-gold pl-5 mb-8">
                  <p className="font-serif text-base italic text-navy leading-relaxed">
                    &ldquo;Many physician leaders assume she is an MD. In reality, she is a
                    commercially wired operator with deep clinical fluency and a long track record
                    of winning in the most demanding metabolic markets.&rdquo;
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="space-y-4 mb-10">
                  <p className="text-sm text-mid leading-relaxed">
                    Sharon is a cardio-metabolic launch and retention architect who has lived every
                    stage of the modern diabetes and obesity curve -- from carrying metformin and
                    combo therapies in the field to leading GLP-1 and obesity launches for global brands.
                    A UC Berkeley graduate (Magna Cum Laude) and former NCAA Division I athlete on
                    a full scholarship, she brings the same discipline and competitive edge to every engagement.
                  </p>
                  <p className="text-sm text-mid leading-relaxed">
                    She began her career at Bristol-Myers Squibb as a diabetes sales representative
                    during the Glucophage / Glucovance era, where she learned first-hand how prescribers,
                    patients, and payers make real-world trade-offs around glycemic control, cost, and access.
                  </p>
                  <p className="text-sm text-mid leading-relaxed">
                    At Novo Nordisk, Sharon moved into field leadership, managing insulin and early
                    GLP-1 portfolios during the pivotal transition from &ldquo;insulin company&rdquo;
                    to incretin powerhouse. She led teams through the launch and expansion of products
                    in the liraglutide era, integrating clinical narratives on weight, A1C, and
                    cardio-metabolic risk with hard commercial targets.
                  </p>
                  <p className="text-sm text-mid leading-relaxed">
                    At Vivus, she served in a leadership role for Qsymia, one of the first modern
                    prescription obesity therapies, where she was involved in field leadership, KOL
                    and speaker strategy, and payer pull-through. That experience -- navigating a
                    skeptical, access-constrained market for a single-asset obesity brand -- gives
                    her a rare, practical lens on today&apos;s GLP-1 and next-gen incretin launches.
                  </p>
                </div>
              </FadeIn>

              {/* Career timeline */}
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-5">
                    Career Arc
                  </h3>
                  <div className="space-y-0">
                    {career.map((c, i) => (
                      <div
                        key={c.firm}
                        className={`flex gap-4 py-4 ${
                          i < career.length - 1 ? 'border-b border-gray-200' : ''
                        }`}
                      >
                        <div className="min-w-[140px]">
                          <p className="text-sm font-semibold text-navy">{c.firm}</p>
                          <p className="text-xs text-mist italic">{c.years}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-mid mb-1">{c.role}</p>
                          <p className="text-xs text-mist leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn>
            <div className="mb-14">
              <span className="eyebrow mb-4 block">Our Principles</span>
              <h2 className="font-serif text-h2 text-navy">
                How we <em className="italic">operate</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="bg-white border border-gray-200 rounded-md p-7 hover:shadow-md transition-shadow">
                  <div className="flex gap-4 mb-3">
                    <span className="font-serif text-xl text-gray-200 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-semibold text-navy">{p.title}</h3>
                  </div>
                  <p className="text-[13px] text-mid leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Broader Capabilities */}
      <section className="section bg-white">
        <div className="container-content">
          <FadeIn>
            <div className="mb-14">
              <span className="eyebrow mb-4 block">Beyond Metabolic</span>
              <h2 className="font-serif text-h2 text-navy max-w-lg">
                Selective engagements across <em className="italic">specialty biopharma</em>
              </h2>
              <p className="text-sm text-mid max-w-lg mt-4 leading-relaxed">
                While our core focus is advanced metabolic and obesity therapies, our
                principal-led model and launch architecture methodology extend to other
                high-science categories where persistence, access, and clinical dialogue
                are decisive.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {broaderCapabilities.map((cap, i) => (
              <FadeIn key={cap.area} delay={i * 0.08}>
                <div className="border border-gray-200 rounded-md p-6 hover:border-navy transition-colors">
                  <h4 className="font-serif text-[15px] text-navy mb-2">{cap.area}</h4>
                  <p className="text-xs text-mist leading-relaxed">{cap.desc}</p>
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
              Want to learn how UEM can support your launch?
            </h2>
            <p className="text-sm text-white/50 max-w-md mx-auto mb-6 leading-relaxed">
              Schedule a 30-minute Launch Stress Test with our Principal to explore fit
              and discuss your specific challenges.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a Call <span className="text-sm">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
