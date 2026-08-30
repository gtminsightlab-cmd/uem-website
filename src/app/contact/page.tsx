import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Upper Echelon Management about a U.S. commercialization decision or LaunchOS operator review.',
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
    title: 'LaunchOS operator review',
    body: 'A pharmaceutical commercial operator, functional expert, or manufacturer leader interested in challenging the Conviction Prototype and its methodology.',
  },
  {
    title: 'Research or partnership',
    body: 'A scoped intelligence request, expert capability, or potential partnership relevant to a defined commercialization decision.',
  },
];

const subject = encodeURIComponent('UEM commercialization conversation');
const body = encodeURIComponent(
  'Name:\nCompany:\nLaunch stage or timing:\nDecision or problem to discuss:\nRelevant therapeutic area (optional):\n',
);

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
        <div className="container-content grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact UEM</p>
            <h2 className="mt-5 font-serif text-h2 font-medium text-navy">Tell us what must be decided.</h2>
            <p className="mt-6 leading-8 text-mid">
              Email is the current intake channel. Include enough context to understand the problem,
              but do not send protected health information, patient information, trade secrets, or
              other confidential material in an initial message.
            </p>
            <a
              href={`mailto:info@echelonconsulting.io?subject=${subject}&body=${body}`}
              className="btn-primary mt-8"
            >
              Email info@echelonconsulting.io <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 text-xs leading-5 text-mist">
              This link opens your email application with a short context guide. It does not submit
              information through this website.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {inquiryTypes.map((inquiry) => (
              <article key={inquiry.title} className="border border-gray-200 bg-surface p-6">
                <h3 className="font-serif text-xl text-navy">{inquiry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mid">{inquiry.body}</p>
              </article>
            ))}
          </div>
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
