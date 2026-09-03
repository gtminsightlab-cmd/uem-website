import Image from 'next/image';
import Link from 'next/link';

import FadeIn from '@/components/FadeIn';
import VisualCarousel from '@/components/VisualCarousel';

const operatingSteps = [
  {
    number: '01',
    title: 'Diagnose the launch system',
    body: 'Make assumptions, evidence gaps, decisions, dependencies, and capability constraints visible before they become execution failures.',
  },
  {
    number: '02',
    title: 'Design the commercial model',
    body: 'Translate the asset, market, timeline, and ambition into an operating model the organization can actually support.',
  },
  {
    number: '03',
    title: 'Operate the critical path',
    body: 'Keep leaders focused on the choices, owners, expert inputs, and cross-functional dependencies that matter most.',
  },
  {
    number: '04',
    title: 'Learn before the market teaches you',
    body: 'Use evidence and operator judgment to challenge the plan early, update it deliberately, and preserve the reasoning behind key decisions.',
  },
];

const questions = [
  'Are we genuinely ready—or merely busy?',
  'Which assumptions carry the greatest commercial risk?',
  'What must be built, bought, rented, or deferred?',
  'Which decision is becoming more expensive every week?',
  'Where is confidence stronger than the evidence?',
  'What does the executive team need to see next?',
];

const workingScenes = [
  {
    src: '/images/people/science-commercial-working-session.webp',
    alt: 'A cross-functional group of science and commercial professionals reviewing launch evidence together',
    title: 'Science + commercial judgment',
    body: 'Evidence becomes useful when scientific, operational, and market perspectives challenge one another early.',
  },
  {
    src: '/images/people/global-launch-working-session.webp',
    alt: 'An international group of biopharma leaders working through a launch decision around a table',
    title: 'Global launch leadership',
    body: 'U.S. launch choices often connect global asset teams with the leaders responsible for local execution.',
  },
  {
    src: '/images/people/evidence-review-working-session.webp',
    alt: 'A pharmaceutical scientist and a commercial executive closely reviewing evidence',
    title: 'Evidence before commitment',
    body: 'Critical assumptions should be examined together before they harden into plans, budgets, and dependencies.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[72px] text-white">
        <div className="absolute inset-0 hero-shimmer" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="grid min-h-[680px] items-stretch lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center py-20 pr-0 md:py-24 lg:py-28 lg:pr-14">
            <p className="eyebrow mb-6">Upper Echelon Management</p>
            <h1 className="font-serif text-hero font-medium text-white">
              Your U.S. Commercialization Office.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
              UEM helps pharmaceutical leaders design smarter launches, identify failure earlier,
              and make better commercialization decisions—whether it is their first U.S. launch or
              their tenth.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn-primary justify-center">
                Explore the operating model <span aria-hidden="true">→</span>
              </Link>
              <Link href="/launchos" className="btn-outline-white justify-center">
                Explore RxLaunchOS
              </Link>
            </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden border-x border-t border-white/10 lg:min-h-full lg:border-y lg:border-r-0">
              <Image
                src="/images/uem-commercialization-hero-final.webp"
                alt=""
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/12 bg-navy/65 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
                  Science · Strategy · Commercial execution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="container-content grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {[
            ['Operator-led', 'Commercial leaders who have built and run regulated operating systems'],
            ['Cross-functional', 'Science, access, field, operations, data, and executive decision perspectives'],
            ['Globally connected', 'Experience connecting global asset strategy with U.S. launch execution'],
            ['System-enabled', 'Human judgment strengthened by RxLaunchOS evidence, signals, and decision discipline'],
          ].map(([value, label]) => (
            <div key={value} className="px-5 py-8 text-left md:px-8">
              <p className="font-serif text-2xl text-navy md:text-3xl">{value}</p>
              <p className="mt-3 text-xs leading-5 text-mid">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <p className="eyebrow">The real problem</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              Launches rarely fail because the team lacked a project plan.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-base leading-8 text-mid md:text-lg">
              <p>
                They fail when assumptions remain untested, evidence is fragmented, decisions arrive
                late, and functional workstreams optimize independently of the launch as a whole.
              </p>
              <p>
                UEM brings operator leadership to that system. We connect launch readiness,
                organization design, field and hiring strategy, partner decisions, and executive
                governance so commercial leaders can see what is true—and what still needs proof.
              </p>
              <p className="border-l-2 border-gold pl-5 font-medium text-navy">
                The goal is not more activity. It is earlier conviction about the decisions that
                determine commercial performance.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              One commercialization system, not a stack of disconnected workstreams.
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-2">
            {operatingSteps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.08} className="h-full">
                <article className="h-full bg-white p-8 md:p-10">
                  <p className="text-xs font-semibold tracking-[0.14em] text-gold">{step.number}</p>
                  <h3 className="mt-5 font-serif text-2xl text-navy">{step.title}</h3>
                  <p className="mt-4 leading-7 text-mid">{step.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light/55" id="proof-of-method">
        <div className="container-content">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">Proof of method</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
              See how UEM turns launch complexity into decisions.
            </h2>
            <p className="mt-5 leading-8 text-mid">
              We make the operating choreography visible: how evidence becomes a signal, how a signal
              changes a decision, and how that decision moves the launch. The examples below show the
              structure of our work without exposing client information or proprietary calibration.
            </p>
          </FadeIn>
          <FadeIn delay={0.05} className="mt-10">
            <ol className="grid overflow-hidden border border-navy/10 bg-white sm:grid-cols-2 lg:grid-cols-6" aria-label="UEM commercialization process">
              {[
                ['01', 'Diagnose'],
                ['02', 'Pressure-test'],
                ['03', 'Design'],
                ['04', 'Decide'],
                ['05', 'Operate'],
                ['06', 'Learn'],
              ].map(([number, label], index) => (
                <li key={label} className="relative border-b border-navy/10 p-4 last:border-b-0 sm:border-r lg:border-b-0">
                  <span className="text-[9px] font-bold tracking-[0.12em] text-gold">{number}</span>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.08em] text-navy">{label}</p>
                  {index < 5 && <span className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-[9px] text-white lg:flex" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-12">
            <VisualCarousel />
          </FadeIn>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <FadeIn className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">People make the system work</p>
              <h2 className="mt-5 font-serif text-h2 font-medium text-navy">
                Better commercial decisions happen when science, operations, and market judgment meet.
              </h2>
            </div>
            <p className="max-w-2xl leading-8 text-mid lg:justify-self-end">
              Launches are human systems. UEM helps the right leaders and specialists work from the
              same evidence, surface disagreement early, and turn expertise into decisions the
              organization can execute.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {workingScenes.map((scene, index) => (
              <FadeIn key={scene.src} delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col overflow-hidden border border-gray-200 bg-surface">
                  <div className="relative aspect-[3/2] overflow-hidden bg-light">
                    <Image
                      src={scene.src}
                      alt={scene.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl text-navy">{scene.title}</h3>
                    <p className="mt-3 leading-7 text-mid">{scene.body}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-content grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <p className="eyebrow">The questions that matter</p>
            <h2 className="mt-5 font-serif text-h2 font-medium">
              A clearer executive view of launch reality.
            </h2>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2">
            {questions.map((question, index) => (
              <FadeIn key={question} delay={index * 0.05}>
                <div className="h-full border border-white/12 bg-white/[0.04] p-6">
                  <p className="font-serif text-lg leading-7 text-white/90">{question}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full border border-gray-200 p-8 md:p-10">
              <p className="eyebrow">UEM today</p>
              <h2 className="mt-5 font-serif text-3xl text-navy">The human operating layer</h2>
              <p className="mt-5 leading-8 text-mid">
                Experienced operators help leadership teams diagnose readiness, design the U.S.
                commercial model, sequence critical work, and bring the right specialist expertise
                into the room.
              </p>
              <Link href="/services" className="mt-7 inline-flex text-sm font-semibold text-navy animated-underline">
                View commercialization services <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </article>
          </FadeIn>
          <FadeIn delay={0.1}>
            <article className="h-full border border-gold/35 bg-surface p-8 md:p-10">
              <p className="eyebrow">RxLaunchOS</p>
              <h2 className="mt-5 font-serif text-3xl text-navy">The system layer</h2>
              <p className="mt-5 leading-8 text-mid">
                RxLaunchOS is UEM&apos;s AI-native commercialization operating system, connecting
                evidence, readiness, risks, decisions, experts, and the
                launch critical path without replacing the tools teams already use.
              </p>
              <Link href="/launchos" className="mt-7 inline-flex text-sm font-semibold text-navy animated-underline">
                See how RxLaunchOS works <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="section-sm bg-gold text-white">
        <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Start with the launch reality</p>
            <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
              Bring the decision you cannot afford to get wrong.
            </h2>
          </div>
          <Link href="/contact" className="btn-outline-white whitespace-nowrap">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
