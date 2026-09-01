import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Upper Echelon Management about a U.S. commercialization decision or LaunchOS.',
};

const inquiryTypes = [
  {
    title: 'Commercial readiness',
    body: 'A first U.S. launch, an approaching inflection point, or a leadership team that needs an evidence-based view of readiness.',
  },
  {
    title: 'Commercialization office',
    body: 'Operator support for the U.S. commercial model, organization, field strategy, governance, or a decision on what to build, buy, or rent.',
  },
  {
    title: 'LaunchOS',
    body: 'A pharmaceutical commercial leader exploring a more evidence-aware way to govern readiness, risk, and consequential launch decisions.',
  },
  {
    title: 'Research or partnership',
    body: 'A scoped intelligence request, expert capability, or potential partnership relevant to a defined commercialization decision.',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-[72px] text-white">
        <div className="container-content py-24 md:py-30">
          <p className="eyebrow">Start a conversation</p>
          <h1 className="mt-6 max-w-4xl font-serif text-hero font-medium">
            Bring the commercialization decision—not a polished brief.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72">
            A useful first conversation establishes the launch stage, the decision at risk, the
            evidence already available, and where operator or specialist judgment may be needed.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Contact UEM</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Tell us what must be decided.</h2>
            <p className="mt-6 leading-8 text-mid">
              Every inquiry begins here so the right UEM teammate can understand its purpose and
              context. Share enough to frame the problem, but do not include protected health
              information, patient information, trade secrets, or other confidential material.
            </p>
            <div className="mt-8 border border-gray-200 bg-surface p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">Separate request path</p>
              <h3 className="mt-2 font-serif text-xl text-navy">Need employment verification?</h3>
              <p className="mt-2 text-sm leading-7 text-mid">
                HR teams, screening providers, agencies, and current or former workers should use the
                dedicated employment-verification form, including its optional secure document upload.
              </p>
              <Link className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline decoration-gold underline-offset-4" href="/employment-verification">
                Open employment verification →
              </Link>
            </div>
            <div className="mt-9 grid gap-4">
              {inquiryTypes.map((inquiry) => (
                <article key={inquiry.title} className="border-l-2 border-gold pl-5">
                  <h3 className="font-serif text-xl text-navy">{inquiry.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-mid">{inquiry.body}</p>
                </article>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-sm bg-surface">
        <div className="container-content grid gap-8 md:grid-cols-3">
          {[
            ['1', 'State the decision', 'What must the leadership team choose, approve, sequence, or challenge?'],
            ['2', 'Share the context', 'Where is the asset in its journey, and what evidence or constraints shape the decision?'],
            ['3', 'Define the next useful step', 'UEM will be clear about fit, boundaries, and whether a specialist is required.'],
          ].map(([number, title, text]) => (
            <div key={number} className="border-t-2 border-gold pt-5">
              <p className="text-xs font-semibold text-gold">0{number}</p>
              <h2 className="mt-3 font-serif text-xl text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-mid">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
