'use client';

import { useState, type ReactNode } from 'react';

type ArtifactKey =
  | 'decision-spine'
  | 'readiness-board'
  | 'critical-path'
  | 'decision-brief'
  | 'failure-signals'
  | 'sourcing-matrix';

const artifacts: Array<{
  key: ArtifactKey;
  number: string;
  title: string;
  body: string;
  use: string;
}> = [
  {
    key: 'decision-spine',
    number: '01',
    title: 'Commercialization decision spine',
    body: 'Connect evidence to the signal it creates, the decision it changes, and the action the organization must take.',
    use: 'Executive alignment',
  },
  {
    key: 'readiness-board',
    number: '02',
    title: 'Launch readiness signal board',
    body: 'Separate forward progress from confidence, evidence quality, and unresolved gates across the launch system.',
    use: 'Readiness review',
  },
  {
    key: 'critical-path',
    number: '03',
    title: 'Critical-path intervention map',
    body: 'Show where a delayed decision changes downstream timing, cost, capability, or launch risk.',
    use: 'Operating review',
  },
  {
    key: 'decision-brief',
    number: '04',
    title: 'Executive decision brief',
    body: 'Frame the decision, options, evidence, recommendation, uncertainty, and consequence of waiting on one page.',
    use: 'Leadership decision',
  },
  {
    key: 'failure-signals',
    number: '05',
    title: 'Launch failure signal radar',
    body: 'Surface weak signals early enough to investigate their cause before they become launch outcomes.',
    use: 'Risk sensing',
  },
  {
    key: 'sourcing-matrix',
    number: '06',
    title: 'Build–buy–rent decision matrix',
    body: 'Compare capability choices against control, speed, economics, evidence, and strategic importance.',
    use: 'Capability design',
  },
];

function SampleHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy/10 bg-[#F7F4ED] px-4 py-3 md:px-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/70">Sample RxLaunchOS output</p>
      <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-mid">Fictional manufacturer data</p>
    </div>
  );
}

function StatusDot({ tone }: { tone: 'good' | 'watch' | 'risk' }) {
  const toneClass = {
    good: 'bg-[#2F766C]',
    watch: 'bg-[#D19A38]',
    risk: 'bg-gold',
  }[tone];

  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${toneClass}`} aria-hidden="true" />;
}

function DecisionSpine() {
  const steps = [
    ['Evidence', 'Payer research\n+ advisory input'],
    ['Signal', 'Access assumptions\n remain unstable'],
    ['Decision', 'Sequence access\n capability now?'],
    ['Owner', 'Chief Commercial\n Officer'],
    ['Action', 'Commission options\n analysis'],
    ['Learning', 'Update forecast +\n operating model'],
  ];

  return (
    <div className="p-5 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Decision spine · DS-014</p>
          <h4 className="mt-2 font-serif text-xl text-navy md:text-2xl">Market-access capability sequencing</h4>
        </div>
        <span className="hidden border border-gold/30 bg-gold/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-gold sm:inline-block">Action required</span>
      </div>
      <div className="mt-7 grid gap-0 overflow-hidden border border-navy/10 md:grid-cols-6">
        {steps.map(([label, value], index) => (
          <div key={label} className="relative border-b border-navy/10 bg-white p-4 last:border-b-0 md:min-h-[150px] md:border-b-0 md:border-r md:last:border-r-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-gold">{label}</p>
            <p className="mt-4 whitespace-pre-line text-xs font-medium leading-5 text-navy">{value}</p>
            {index < steps.length - 1 && <span className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-[9px] text-white md:flex">→</span>}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-mid">Reasoning stays connected from source evidence through the resulting operating change.</p>
    </div>
  );
}

function ReadinessBoard() {
  const rows = [
    ['Market & customer', 'On path', '78%', 'Strong', 'good'],
    ['Access & pricing', 'At risk', '46%', 'Limited', 'risk'],
    ['Field organization', 'Watch', '64%', 'Moderate', 'watch'],
    ['Supply & distribution', 'On path', '82%', 'Strong', 'good'],
    ['Launch governance', 'Watch', '59%', 'Moderate', 'watch'],
  ] as const;

  return (
    <div className="p-5 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Readiness review · T−14 months</p>
          <h4 className="mt-2 font-serif text-xl text-navy md:text-2xl">Five signals deserve different executive responses</h4>
        </div>
        <div className="text-right">
          <p className="font-serif text-3xl text-navy">2</p>
          <p className="text-[9px] font-bold uppercase tracking-[0.11em] text-mid">interventions due</p>
        </div>
      </div>
      <div className="mt-6 overflow-hidden border border-navy/10 bg-white">
        <div className="hidden grid-cols-[1.6fr_0.9fr_0.65fr_0.85fr] bg-navy px-5 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-white/65 sm:grid">
          <span>Readiness domain</span><span>Signal</span><span>Progress</span><span>Evidence</span>
        </div>
        {rows.map(([name, signal, progress, evidence, tone]) => (
          <div key={name} className="grid gap-3 border-t border-navy/10 px-5 py-4 first:border-t-0 sm:grid-cols-[1.6fr_0.9fr_0.65fr_0.85fr] sm:items-center sm:first:border-t">
            <p className="text-sm font-semibold text-navy">{name}</p>
            <p className="flex items-center gap-2 text-xs text-mid"><StatusDot tone={tone} />{signal}</p>
            <p className="text-xs font-semibold text-navy">{progress}</p>
            <p className="text-xs text-mid">{evidence}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CriticalPath() {
  const milestones = [
    ['T−18', 'Evidence plan', 'complete'],
    ['T−15', 'Access model', 'risk'],
    ['T−12', 'Field design', 'watch'],
    ['T−9', 'Partner lock', 'future'],
    ['T−6', 'Hiring', 'future'],
    ['T−3', 'Certification', 'future'],
  ];

  return (
    <div className="p-5 md:p-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Critical path · next 15 months</p>
      <h4 className="mt-2 font-serif text-xl text-navy md:text-2xl">One unresolved decision is moving three downstream commitments</h4>
      <div className="mt-9 overflow-x-auto pb-2">
        <div className="relative min-w-[700px] px-3 pt-4">
          <div className="absolute left-8 right-8 top-[31px] h-px bg-navy/20" />
          <div className="relative grid grid-cols-6 gap-5">
            {milestones.map(([time, title, state]) => (
              <div key={time}>
                <div className={`h-8 w-8 rounded-full border-4 border-white shadow-sm ${state === 'complete' ? 'bg-[#2F766C]' : state === 'risk' ? 'bg-gold' : state === 'watch' ? 'bg-[#D19A38]' : 'bg-[#D8DEDC]'}`} />
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.1em] text-mid">{time}</p>
                <p className="mt-1 text-xs font-semibold text-navy">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-px bg-navy/10 sm:grid-cols-3">
        {[
          ['Decision at risk', 'Access capability model'],
          ['Downstream effect', 'Partner scope + field design'],
          ['Leadership move', 'Resolve option set in 21 days'],
        ].map(([label, value]) => (
          <div key={label} className="bg-[#F7F4ED] p-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-gold">{label}</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-navy">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DecisionBrief() {
  return (
    <div className="p-5 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Executive brief · decision due 18 Oct</p>
          <h4 className="mt-2 font-serif text-xl text-navy md:text-2xl">How should the manufacturer stand up its field capability?</h4>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ['Build', 'Highest control', '18–24 mo.'],
              ['Buy', 'Fastest acquisition', '12–18 mo.'],
              ['Rent', 'Best near-term fit', '6–9 mo.'],
            ].map(([choice, note, time], index) => (
              <div key={choice} className={`border p-4 ${index === 2 ? 'border-gold bg-gold/[0.06]' : 'border-navy/10 bg-white'}`}>
                <p className="text-sm font-bold text-navy">{choice}</p>
                <p className="mt-2 text-[11px] leading-5 text-mid">{note}</p>
                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.1em] text-gold">{time}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 border-l-2 border-gold bg-[#F7F4ED] px-5 py-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-gold">Working recommendation</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-navy">Rent the initial capability with a defined transfer path; revisit after demand evidence matures.</p>
          </div>
        </div>
        <div className="border border-navy/10 bg-navy p-5 text-white">
          <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-gold">Decision quality</p>
          <dl className="mt-5 space-y-5">
            {[
              ['Evidence confidence', 'Moderate'],
              ['Primary uncertainty', 'Prescriber concentration'],
              ['Cost of delay', 'Partner window narrows'],
              ['Next proof needed', 'Updated demand scenarios'],
            ].map(([term, value]) => (
              <div key={term} className="border-b border-white/12 pb-4 last:border-b-0 last:pb-0">
                <dt className="text-[9px] uppercase tracking-[0.1em] text-white/45">{term}</dt>
                <dd className="mt-1 text-xs font-semibold leading-5 text-white/90">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function FailureSignals() {
  const signals = [
    ['Evidence stability', 78, 'good'],
    ['Access assumptions', 38, 'risk'],
    ['Cross-functional decisions', 54, 'watch'],
    ['Capability timing', 45, 'risk'],
    ['Partner readiness', 67, 'watch'],
    ['Executive alignment', 84, 'good'],
  ] as const;

  return (
    <div className="p-5 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Signal radar · monthly movement</p>
          <h4 className="mt-2 font-serif text-xl text-navy md:text-2xl">Weak signals before they become launch outcomes</h4>
        </div>
        <p className="max-w-xs text-xs leading-5 text-mid">Signal strength indicates where leadership should investigate—not a prediction of launch success.</p>
      </div>
      <div className="mt-7 grid gap-x-8 gap-y-5 md:grid-cols-2">
        {signals.map(([label, value, tone]) => (
          <div key={label}>
            <div className="flex items-center justify-between gap-4">
              <p className="flex items-center gap-2 text-xs font-semibold text-navy"><StatusDot tone={tone} />{label}</p>
              <p className="text-xs font-bold text-navy">{value}</p>
            </div>
            <div className="mt-2 h-2 bg-navy/10">
              <div className={`h-full ${tone === 'good' ? 'bg-[#2F766C]' : tone === 'watch' ? 'bg-[#D19A38]' : 'bg-gold'}`} style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-navy/10 pt-4 text-[10px] uppercase tracking-[0.1em] text-mid">
        <span><StatusDot tone="good" /> <span className="ml-1">stable</span></span>
        <span><StatusDot tone="watch" /> <span className="ml-1">watch</span></span>
        <span><StatusDot tone="risk" /> <span className="ml-1">investigate now</span></span>
      </div>
    </div>
  );
}

function SourcingMatrix() {
  const rows = [
    ['Launch analytics', 'Build', 'Strategic learning + data control'],
    ['CRM platform', 'Buy', 'Mature category; configuration matters'],
    ['Initial field team', 'Rent', 'Speed while demand evidence matures'],
    ['Patient services', 'Buy', 'Specialized infrastructure required'],
  ];

  return (
    <div className="p-5 md:p-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Capability architecture · working view</p>
      <h4 className="mt-2 font-serif text-xl text-navy md:text-2xl">Choose the operating model capability by capability</h4>
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[640px] overflow-hidden border border-navy/10 bg-white">
          <div className="grid grid-cols-[1.25fr_0.5fr_1.75fr] bg-navy px-5 py-3 text-[9px] font-bold uppercase tracking-[0.12em] text-white/65">
            <span>Capability</span><span>Choice</span><span>Decision basis</span>
          </div>
          {rows.map(([capability, choice, basis]) => (
            <div key={capability} className="grid grid-cols-[1.25fr_0.5fr_1.75fr] items-center border-t border-navy/10 px-5 py-4">
              <p className="text-xs font-semibold text-navy">{capability}</p>
              <p><span className="inline-block border border-gold/30 bg-gold/[0.06] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-gold">{choice}</span></p>
              <p className="text-xs leading-5 text-mid">{basis}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-mid">Each choice can be revisited as evidence, economics, timing, and strategic importance change.</p>
    </div>
  );
}

function ArtifactVisual({ artifact }: { artifact: ArtifactKey }) {
  const visuals: Record<ArtifactKey, ReactNode> = {
    'decision-spine': <DecisionSpine />,
    'readiness-board': <ReadinessBoard />,
    'critical-path': <CriticalPath />,
    'decision-brief': <DecisionBrief />,
    'failure-signals': <FailureSignals />,
    'sourcing-matrix': <SourcingMatrix />,
  };

  return visuals[artifact];
}

export default function VisualCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArtifact = artifacts[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + artifacts.length) % artifacts.length);
  };

  return (
    <div className="border border-navy/15 bg-white shadow-[0_24px_70px_rgba(22,75,82,0.10)]">
      <div className="grid border-b border-navy/10 sm:grid-cols-2 lg:grid-cols-6" role="tablist" aria-label="Proof of method examples">
        {artifacts.map((artifact, index) => (
          <button
            key={artifact.key}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="method-artifact-panel"
            onClick={() => setActiveIndex(index)}
            className={`border-b border-navy/10 px-4 py-4 text-left transition-colors last:border-b-0 sm:border-r lg:border-b-0 ${activeIndex === index ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-[#F7F4ED]'}`}
          >
            <span className={`text-[9px] font-bold uppercase tracking-[0.12em] ${activeIndex === index ? 'text-gold' : 'text-mid'}`}>{artifact.number} · {artifact.use}</span>
            <span className="mt-1.5 block text-xs font-semibold leading-5">{artifact.title}</span>
          </button>
        ))}
      </div>

      <div id="method-artifact-panel" role="tabpanel" className="grid lg:grid-cols-[1fr_280px]">
        <div className="min-w-0 bg-[#FBFAF7]">
          <SampleHeader />
          <ArtifactVisual artifact={activeArtifact.key} />
        </div>
        <aside className="flex flex-col justify-between bg-navy p-6 text-white md:p-8">
          <div aria-live="polite">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">{activeArtifact.number} / 06</p>
            <h3 className="mt-5 font-serif text-2xl leading-tight">{activeArtifact.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">{activeArtifact.body}</p>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                className="flex h-11 w-11 items-center justify-center border border-white/25 text-lg transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Show previous proof of method"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="flex h-11 w-11 items-center justify-center border border-white/25 text-lg transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Show next proof of method"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <p className="mt-6 border-l-2 border-gold pl-4 text-[10px] font-bold uppercase leading-5 tracking-[0.1em] text-white/45">Reveal the choreography.<br />Protect the calibration.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
