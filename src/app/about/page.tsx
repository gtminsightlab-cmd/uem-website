import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the operators behind Upper Echelon Management and the principles guiding its commercialization work.',
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

const coreLeadership = [
  {
    name: 'Sharon Lee',
    role: 'Founding Member · Pharmaceutical Commercialization',
    location: 'United States',
    body: 'Sharon brings 25 years of pharmaceutical commercial leadership and contributes field, organization, hiring, readiness, and launch-execution judgment to UEM engagements and RxLaunchOS development.',
  },
  {
    name: 'Ronnie O’Dell',
    role: 'Regulated Distribution & Commercial Systems',
    location: 'United States',
    body: 'Ronnie brings more than 25 years of experience building regulated distribution, channel, vendor-network, and go-to-market systems.',
  },
  {
    name: 'Alexandra “Alex” Cortez',
    role: 'Managing Partner, Advanced Metabolic & Obesity Practice',
    location: 'Virginia, USA',
    body: 'Advanced metabolic and obesity launch architecture, retention strategy, and cross-functional commercial design.',
  },
  {
    name: 'Kenji Nakamura',
    role: 'Partner, Launch Architecture & U.S. Entry Practice',
    location: 'Tokyo, Japan',
    body: 'U.S. market-entry planning, launch architecture, segmentation, and field-model design for global manufacturers.',
  },
  {
    name: 'Mei Lin',
    role: 'Partner, Talent Architecture & Field Excellence',
    location: 'Shenzhen, China',
    body: 'Commercial organization design, selection frameworks, field-team readiness, and manager development.',
  },
  {
    name: 'Diego Alvarez',
    role: 'Partner, Real-World Retention & Access Strategy',
    location: 'Bogotá, Colombia',
    body: 'Real-world evidence, outcomes, payer dynamics, patient access, and persistence strategy.',
  },
  {
    name: 'Sophia Gallagher, RN, MSN',
    role: 'Director, Clinical Operations & Patient Support Design',
    location: 'London, United Kingdom',
    body: 'Patient-support design, nurse-liaison models, onboarding pathways, and clinical program operations.',
  },
];

const practiceTeam = [
  ['Daniel “Danny” Brooks', 'Compliance & Risk-Informed Design', 'Washington, D.C., USA'],
  ['Ethan Carter', 'Commercial Finance & Launch Economics', 'Chicago, USA'],
  ['Jing Chen', 'Real-World Evidence & Outcomes Integration', 'Shanghai, China'],
  ['Priya Desai', 'Omnichannel & Patient Experience', 'Mumbai, India'],
  ['Rafael “Rafa” Jiménez', 'KOL & Speaker Program Strategy', 'Houston, USA'],
  ['Marcus Lee', 'Field Analytics & Performance Optimization', 'Seoul, South Korea'],
  ['Luis Martinez', 'Field Strategy & Squad Deployment', 'Miami, USA'],
  ['Claudia Morales, RN, MSN', 'Nurse Liaison & Patient Support Models', 'San Antonio, USA'],
  ['Christopher “Chris” O’Neill', 'Access & Channel Strategy', 'Paris, France'],
  ['Naomi Park', 'Pricing & Contracting Strategy', 'Seoul, South Korea'],
  ['Marisol Reyes', 'Training & New Manager Development', 'Mexico City, Mexico'],
  ['Isabella “Bella” Ruiz', 'Cardiometabolic Portfolio Strategy', 'Milan, Italy'],
  ['Yuki Sato', 'Medical-Commercial Interface', 'Osaka, Japan'],
  ['Hiroko Tan', 'U.S. Market Entry & Partner Models', 'Frankfurt, Germany'],
  ['Emily Watson', 'Organizational Change & Launch Readiness', 'Basel, Switzerland'],
] as const;

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
            client work and the development of RxLaunchOS.
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
              </div>
            </figure>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">The UEM team</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Founding experience inside a multidisciplinary operating team.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-mid">
              Sharon Lee is a Founding Member and one contributor among a broader team of operators
              and specialists. Team members enter an engagement according to the decision, evidence,
              and functional depth required—not as a generic bench assigned to every project.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {coreLeadership.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.04}>
                <article className="h-full border border-gray-200 bg-white p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">{member.role}</p>
                  <h3 className="mt-4 font-serif text-2xl text-navy">{member.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-mist">{member.location}</p>
                  <p className="mt-5 text-sm leading-7 text-mid">{member.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-20 max-w-3xl">
            <p className="eyebrow">Practice leaders &amp; senior consultants</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Specialist depth aligned to the work.</h2>
            <p className="mt-5 leading-8 text-mid">
              The wider team spans field strategy, market access, evidence, clinical operations,
              finance, analytics, training, organizational readiness, and cross-border U.S. entry.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceTeam.map(([name, practice, location], index) => (
              <FadeIn key={name} delay={(index % 6) * 0.03}>
                <article className="h-full border border-gray-200 bg-white p-6">
                  <h3 className="font-serif text-xl text-navy">{name}</h3>
                  <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-gold">{practice}</p>
                  <p className="mt-3 text-xs text-mist">{location}</p>
                </article>
              </FadeIn>
            ))}
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
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">No team covers every launch discipline.</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-5 leading-8 text-mid">
              <p>
                UEM&apos;s founding experience includes pharmaceutical commercial leadership,
                organization, field execution, hiring, and regulated commercial systems. The broader
                team adds other operator and specialist perspectives as each decision requires.
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
