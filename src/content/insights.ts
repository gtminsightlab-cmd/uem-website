export type InsightSource = {
  id: number;
  title: string;
  publisher: string;
  url: string;
  note?: string;
};

export type InsightParagraph = {
  text: string;
  citations?: number[];
};

export type InsightSection = {
  heading: string;
  paragraphs: InsightParagraph[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  published: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  lead: InsightParagraph[];
  sections: InsightSection[];
  closing: string;
  sources: InsightSource[];
};

export const insights: Insight[] = [
  {
    slug: 'fda-approval-is-a-milestone-us-launch-is-a-system',
    title: 'FDA Approval Is a Milestone. A U.S. Launch Is a System.',
    shortTitle: 'Approval is a milestone. Launch is a system.',
    description:
      'What first-time U.S. launchers often discover too late—and the decisions that should be made before one approval date becomes the only date anyone can see.',
    category: 'U.S. launch readiness',
    published: 'August 30, 2026',
    readingTime: '7 minute read',
    image: '/images/launchos-decision-system-hero-v4.webp',
    imageAlt: 'A launch decision system connecting evidence, risks, decisions, and actions',
    imageCaption: 'A launch becomes manageable when evidence, decisions, dependencies, and owners can be seen together.',
    lead: [
      {
        text: 'For years, one date can carry the emotional weight of an entire company: the expected FDA decision. The board asks about it. Investors ask about it. Families plan around it. People refresh their phones waiting for it.',
      },
      {
        text: 'Then the decision arrives—and the company discovers that one date has been hiding a hundred other decisions. Who owns the patient journey? Which payer assumptions are still assumptions? Is the field team the right size for the actual prescriber universe? What happens when one vendor misses a dependency? Who is allowed to say the launch is not ready?',
      },
      {
        text: 'FDA reported 46 novel drug approvals in 2025. Every one represents an extraordinary scientific and regulatory achievement. Approval, however, does not create payer coverage, patient access, trained managers, a functioning distribution path, or a reliable commercial operating cadence.',
        citations: [1],
      },
    ],
    sections: [
      {
        heading: 'First-time launchers are not short on intelligence',
        paragraphs: [
          {
            text: 'They are usually short on institutional memory. Experienced organizations have routines for questions a first-time launcher may not yet know to ask. Those routines live across people, governance, systems, vendor relationships, and the informal pattern recognition that comes from previous launches.',
          },
          {
            text: 'In McKinsey’s analysis of launches from 2014 through 2017, first-time launchers reached a median 63% of prelaunch expectations, compared with 93% for experienced launchers. The study period matters: this is not a 2026 market census. But the operating lesson remains useful. A strong asset does not automatically come with a strong launch institution.',
            citations: [2],
          },
          {
            text: 'That gap is not solved by producing a longer checklist. A checklist records activities. Leadership needs to see decisions, weak assumptions, cross-functional dependencies, evidence quality, and the consequence of waiting.',
          },
        ],
      },
      {
        heading: 'Regulatory readiness and commercial readiness touch—but they are not interchangeable',
        paragraphs: [
          {
            text: 'For a manufacturer outside the United States, the distinction is especially important. FDA requirements continue beyond the approval event. Foreign drug establishments offering products for U.S. import must meet registration, listing, application, and import-information requirements. Incomplete or inconsistent information can delay entry or lead to detention. FDA also expanded its use of unannounced inspections at foreign manufacturing facilities in 2025.',
            citations: [3, 4],
          },
          {
            text: 'Those obligations belong in the launch critical path. But they do not replace the separate commercial work: evidence strategy, payer engagement, distribution design, patient services, organization design, hiring, training, data, governance, and field execution.',
          },
          {
            text: 'One workstream can be green while the launch remains exposed. A field team can be hired on schedule and still be mis-sized because the target-account assumptions were weak. A hub can be contracted and still fail patients because escalation ownership is unclear. A distribution agreement can be signed while operational data still cannot reach the people who need to act on it.',
          },
        ],
      },
      {
        heading: 'Replace “percent complete” with a decision view',
        paragraphs: [
          {
            text: 'A leadership team does not need another meeting where every workstream reports 80% complete. It needs an honest view of what is true and what is not yet known.',
          },
          {
            text: 'For every material launch decision, I would want to see the decision owner, the evidence being used, the confidence in that evidence, the assumptions that could change the answer, the dependent workstreams, the next decision date, and the consequence of delay.',
          },
          {
            text: 'This is also where AI requires discipline. AI can organize evidence, compare inputs, surface gaps, and show contradictions. It should not manufacture confidence or silently convert an uncertain recommendation into a completed decision. Consequential choices still need accountable human approval.',
          },
        ],
        bullets: [
          'Run an “approval came 60 days early” exercise and identify the five decisions that break first.',
          'Run the opposite exercise: if approval moves, which commitments should pause and which should continue?',
          'Define commercial hard gates before workstream owners begin reporting against them.',
          'Assign one manufacturer-side owner to every dependency that crosses vendors or functions.',
          'Record “evidence insufficient” as a legitimate status, with a next action—not as an embarrassment to hide.',
        ],
      },
      {
        heading: 'The philosophy behind RxLaunchOS',
        paragraphs: [
          {
            text: 'RxLaunchOS is grounded in a simple belief: launch leadership should be able to see what decision is required, why it matters now, what evidence supports it, and what happens if the team waits. It supports experienced operators and accountable leaders rather than attempting to replace their judgment or the systems a manufacturer already uses.',
          },
          {
            text: 'The intended role is a manufacturer-side decision layer: configurable methodology, evidence-aware AI, explicit rules, and scoped expert judgment working together. When the system does not know enough, it should say so—and help the team get the right human expertise into the decision.',
          },
        ],
      },
    ],
    closing:
      'A launch plan tells you what everyone intends to do. A launch operating system tells leadership what is true, what is uncertain, and which decision cannot wait. If your team is preparing for a first U.S. launch, start with the decisions—not the dashboard.',
    sources: [
      {
        id: 1,
        publisher: 'U.S. Food and Drug Administration',
        title: 'Novel Drug Approvals for 2025',
        url: 'https://www.fda.gov/drugs/novel-drug-approvals-fda/novel-drug-approvals-2025',
      },
      {
        id: 2,
        publisher: 'McKinsey & Company',
        title: 'First-time launchers in the pharmaceutical industry',
        url: 'https://www.mckinsey.com/industries/life-sciences/our-insights/first-time-launchers-in-the-pharmaceutical-industry',
        note: 'Analysis includes launches from 2014–2017.',
      },
      {
        id: 3,
        publisher: 'U.S. Food and Drug Administration',
        title: 'Importing Human Drugs',
        url: 'https://www.fda.gov/industry/importing-fda-regulated-products/importing-human-drugs',
      },
      {
        id: 4,
        publisher: 'U.S. Food and Drug Administration',
        title: 'FDA Announces Expanded Use of Unannounced Inspections at Foreign Manufacturing Facilities',
        url: 'https://www.fda.gov/news-events/press-announcements/fda-announces-expanded-use-unannounced-inspections-foreign-manufacturing-facilities',
      },
    ],
  },
  {
    slug: 'us-commercial-team-does-not-have-to-look-like-big-pharma',
    title: 'Your U.S. Commercial Team Does Not Have to Look Like Big Pharma',
    shortTitle: 'Your U.S. team does not have to look like Big Pharma.',
    description:
      'A practical way to decide what to build, what to buy, what to rent, and what not to fund yet.',
    category: 'Organization design',
    published: 'August 30, 2026',
    readingTime: '8 minute read',
    image: '/images/people/global-launch-working-session.webp',
    imageAlt: 'International pharmaceutical leaders reviewing a U.S. launch operating model',
    imageCaption: 'Cross-functional U.S. launch planning',
    lead: [
      {
        text: 'The first U.S. commercial organization chart is usually drawn too early.',
      },
      {
        text: 'Boxes appear before the questions are settled: market access, sales, marketing, operations, analytics. Then the boxes create their own gravity. Candidates are interviewed. Vendors are invited in. A field-force number starts circulating until it becomes “the number,” even when nobody can point to the evidence that produced it.',
      },
      {
        text: 'The better question is not, “What does a pharmaceutical company normally have?” It is, “What must this manufacturer be able to decide, own, and execute for this product—and which of those capabilities should live inside the company?”',
      },
    ],
    sections: [
      {
        heading: 'A commercial model is a capital-allocation decision',
        paragraphs: [
          {
            text: 'Recent McKinsey analysis found that 20–30% of first-time launchers exceeded launch expectations, compared with 40–50% of established companies. The same analysis estimates that a typical first-time launcher spends roughly $80–100 million annually on launch selling, general, and administrative activity.',
            citations: [1],
          },
          {
            text: 'No manufacturer should copy that number into a budget. Product potential, prescriber concentration, treatment setting, access friction, evidence, service requirements, capital, and pipeline strategy all change the answer. The point is that commercial design consumes consequential capital. It deserves more than a familiar-looking org chart.',
          },
          {
            text: 'For an international company, this is compounded by the need to translate—not merely export—its home-market operating assumptions. The Korea Health Industry Development Institute identifies U.S. regulatory requirements, commercialization cost, insurance and pricing complexity, competition, IP, and cultural and business differences among the issues Korean manufacturers must navigate.',
            citations: [2],
          },
        ],
      },
      {
        heading: 'Start with capabilities, not titles',
        paragraphs: [
          {
            text: 'Before approving a role or a vendor scope, map the capabilities the launch requires. Who will own market understanding? Who will decide the evidence strategy? Who will design the patient path, field model, distribution, data flow, operating cadence, and partner governance? Which decisions must remain inside the manufacturer even if execution is outsourced?',
          },
          {
            text: 'Then use six verbs: build, buy, rent, integrate, partner, and delay. They create a more honest conversation than “in-house versus outsourced.”',
          },
        ],
        bullets: [
          'Build when the capability is strategically differentiating, repeatedly needed, and important to retain.',
          'Buy a defined deliverable when the outcome and quality standard can be made explicit.',
          'Rent experienced capacity when the need is urgent, specialized, or unlikely to justify permanent headcount.',
          'Integrate when a proven system already performs the job and the real need is visibility or coordination.',
          'Partner when success requires shared risk, complementary assets, or market infrastructure the manufacturer should not recreate.',
          'Delay when the evidence is not mature enough to justify an irreversible commitment.',
        ],
      },
      {
        heading: 'The field-force decision deserves its own evidence',
        paragraphs: [
          {
            text: 'Over 25 years in pharmaceutical commercial leadership, I have worked through multiple launches, interviewed more than 1,000 representative candidates, and hired more than 200 representatives and 30 district managers across large and smaller organizations.',
          },
          {
            text: 'That experience taught me not to begin with a rep count. Begin with the patient flow, addressable prescriber and account universe, treatment setting, call objective, access conditions, geographic reality, hiring timeline, manager span, expected productivity, and fully loaded economics.',
          },
          {
            text: 'Internal, contract, and hybrid models can each be right. The dangerous move is allowing a provider of field services to be the only party defining how much field service the manufacturer needs. A vendor can bring valuable expertise and execution. The manufacturer still needs a buyer-side view of the assumptions, tradeoffs, dependencies, and exit options.',
          },
        ],
      },
      {
        heading: 'Make optionality a design principle',
        paragraphs: [
          {
            text: 'The goal is not the smallest possible team. It is the smallest responsible commitment that preserves the ability to scale when the evidence changes.',
          },
          {
            text: 'That means distinguishing reversible choices from commitments that create fixed cost or lock the company into one vendor stack. It means revisiting the operating model at evidence gates rather than defending an annual-plan assumption for twelve months. And it means requiring every vendor proposal to state assumptions, dependencies, exclusions, governance, and the performance measures it will accept.',
          },
          {
            text: 'IQVIA’s own work with emerging biopharma companies emphasizes launch planning, readiness, governance, and operating-model design. The practical takeaway is that outsourcing execution does not eliminate the need for manufacturer-side orchestration.',
            citations: [3],
          },
        ],
      },
      {
        heading: 'One founding member, one part of a broader team',
        paragraphs: [
          {
            text: 'My field and hiring experience is one input into UEM’s work. The broader UEM team brings additional perspectives across pharmaceutical commercialization, regulated distribution, technology, operating-model design, and scoped specialist disciplines. A credible commercialization office should never pretend one person covers every launch decision.',
          },
          {
            text: 'UEM translates that combined operator judgment into inspectable methods. RxLaunchOS makes assumptions, decision rules, evidence, and rationale visible rather than burying them in one expert’s memory or one vendor’s proposal.',
          },
        ],
      },
    ],
    closing:
      'Your first U.S. team should not be a miniature copy of someone else’s company. It should be the commercial system your medicine, patients, evidence, and capital require now—with a deliberate path to become what they require next.',
    sources: [
      {
        id: 1,
        publisher: 'McKinsey & Company',
        title: 'Small but mighty: Priming biotech first-time launchers to compete with established players',
        url: 'https://www.mckinsey.com/industries/life-sciences/our-insights/small-but-mighty-priming-biotech-first-time-launchers-to-compete-with-established-players',
      },
      {
        id: 2,
        publisher: 'Korea Health Industry Development Institute',
        title: 'U.S. Market Strategies for Korean Pharmaceutical Companies',
        url: 'https://www.khidi.or.kr/board/view?linkId=48939208&menuId=MENU01819',
      },
      {
        id: 3,
        publisher: 'IQVIA',
        title: 'How Emerging Biopharma Companies Can Successfully Launch Their Asset',
        url: 'https://www.iqvia.com/-/media/iqvia/pdfs/library/case-studies/iqvia---ebp-case-studies---how-emerging-pharma-companies-can-successfully-launch-their-asset_.pdf',
      },
    ],
  },
  {
    slug: 'prescription-was-written-why-couldnt-patient-get-the-drug',
    title: 'The Prescription Was Written. Why Couldn’t the Patient Get the Drug?',
    shortTitle: 'The prescription was written. Why couldn’t the patient get the drug?',
    description:
      'What the distance between FDA approval and patient access teaches first-time U.S. launchers.',
    category: 'Patient access',
    published: 'August 30, 2026',
    readingTime: '7 minute read',
    image: '/images/people/evidence-review-working-session.webp',
    imageAlt: 'Commercial and access leaders reviewing evidence and patient journey friction',
    imageCaption: 'Access evidence and patient-journey friction',
    lead: [
      {
        text: 'Somewhere in the launch dashboard, the prescription counted as a win.',
      },
      {
        text: 'The physician had made a decision. The patient had agreed to move forward. The field team had done its job. Then the therapy stopped moving—not because the science changed, but because a form was incomplete, a coverage policy was not yet in place, the out-of-pocket cost was too high, or nobody owned the next handoff.',
      },
      {
        text: 'To a dashboard, this can look like “access friction.” To a patient, it is the difference between starting treatment and going home without it.',
      },
    ],
    sections: [
      {
        heading: 'Demand and access are not the same event',
        paragraphs: [
          {
            text: 'In the United States, a physician’s decision can begin a complicated chain: benefit verification, prior authorization, documentation, appeal, affordability support, specialty-pharmacy routing, site-of-care coordination, fulfillment, and follow-up. A break anywhere in that chain can prevent an appropriate patient from receiving the prescribed therapy.',
          },
          {
            text: 'A study of 116,176 insured patients with new bempedoic acid prescriptions found that 68.9% received payer approval. Among the approved patients, 17.3% abandoned the prescription. The authors concluded that nearly half of the initially prescribed patients failed to receive therapy because of payer rejection or abandonment.',
            citations: [1],
          },
          {
            text: 'That is a product- and dataset-specific finding, not a universal benchmark for every launch. It is useful because it exposes the gap between intended treatment and actual therapy initiation.',
          },
        ],
      },
      {
        heading: 'Approval does not create a coverage policy',
        paragraphs: [
          {
            text: 'Payers still need to assess evidence, treatment alternatives, utilization controls, budget impact, and policy language. A 2026 analysis using the Tufts Specialty Drug Evidence and Coverage database reported that, for most drugs launched in 2024, coverage policies from large commercial plans were still lacking as far as one year after approval. The authors also cite earlier research finding a median 209 days to coverage issuance.',
            citations: [2],
          },
          {
            text: 'IQVIA reported in an emerging-biopharma case study that only one in four new-to-brand patients attempting to fill a launch brand succeeded. Again, that result belongs to the analysis IQVIA described; it should not be turned into a promise or forecast for a different medicine. It reinforces the need to instrument the patient journey instead of assuming demand will automatically become treatment.',
            citations: [3],
          },
        ],
      },
      {
        heading: 'Market access is not one department’s problem',
        paragraphs: [
          {
            text: 'Market-access leaders may shape payer strategy, but medical, commercial, distribution, patient services, data, legal and regulatory, and external vendors all influence whether a patient begins therapy. That makes access a cross-functional operating outcome.',
          },
          {
            text: 'The Medicare Drug Price Negotiation Program offers a current example of how policy becomes operations. CMS guidance includes data exchange among participating manufacturers and dispensing entities through the Medicare Transaction Facilitator. Whatever a manufacturer’s specific exposure, the broader lesson is clear: pricing and access policy eventually become workflows, data requirements, handoffs, and accountable execution.',
            citations: [4],
          },
          {
            text: 'A manufacturer cannot outsource that accountability simply because several vendors participate in the path. A hub SLA, distribution contract, or pharmacy agreement covers a defined scope. Someone inside the manufacturer still needs to see the end-to-end journey and act when the spaces between scopes begin failing patients.',
          },
        ],
      },
      {
        heading: 'Measure the spaces between the milestones',
        paragraphs: [
          {
            text: 'Total prescriptions and shipments matter, but they do not explain where the patient journey is breaking. Launch teams should define permitted, privacy-respecting measures for conversion, elapsed time, and fallout at each material step.',
          },
          {
            text: 'The weekly question should not stop at “How many prescriptions did we receive?” It should continue: How many patients moved to the next step? How long did that take? Where did the process stop? What reason was recorded? Who owns the correction? Do we have enough evidence to know whether this is a local workflow problem, a payer-policy issue, an affordability problem, or a design flaw?',
          },
        ],
        bullets: [
          'Draw the actual patient journey for the product and treatment setting, including every handoff and wait state.',
          'Assign an internal owner to each cross-vendor handoff; a vendor SLA does not replace manufacturer accountability.',
          'Review the leading reasons patients fail to start therapy weekly during launch, not only at quarter-end.',
          'Separate “we do not have enough evidence yet” from “performance is poor.” They require different decisions.',
          'Create a formal route to qualified payer and market-access expertise when the question exceeds the team’s verified depth.',
        ],
      },
      {
        heading: 'Keep the system honest—and keep the patient visible',
        paragraphs: [
          {
            text: 'Software can help expose friction, compare patterns, and bring a stalled handoff to the right leader’s attention. It should not invent a payer strategy or claim certainty the evidence does not support.',
          },
          {
            text: 'That evidence-honesty principle is part of how UEM is developing RxLaunchOS. The intended system connects risks, assumptions, decisions, dependencies, and next actions while preserving accountable human judgment. Deep payer strategy remains specialist work. The right response to an evidence gap is not a confident AI answer; it is a clearly scoped expert escalation and a decision owner.',
          },
        ],
      },
    ],
    closing:
      'Demand tells you whether someone wanted the medicine. Access tells you whether the commercial system helped the patient receive it. A launch team needs to see both—and it needs to see the gap while there is still time to act.',
    sources: [
      {
        id: 1,
        publisher: 'Journal of Clinical Lipidology / PubMed Central',
        title: 'Impact of payer rejections and out-of-pocket costs on patient access to bempedoic acid therapy',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11871453/',
      },
      {
        id: 2,
        publisher: 'Journal of Managed Care & Specialty Pharmacy / PubMed Central',
        title: 'ICER’s launch price and access report: Key takeaways and questions',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13032863/',
      },
      {
        id: 3,
        publisher: 'IQVIA',
        title: 'Optimizing Commercial Success for Emerging Biopharmas',
        url: 'https://www.iqvia.com/-/media/iqvia/pdfs/us/case-study/2024/optimizing-commercial-success-for-emerging-biopharma-case-study.pdf',
      },
      {
        id: 4,
        publisher: 'Centers for Medicare & Medicaid Services',
        title: 'Medicare Drug Price Negotiation Program—Regulations, Guidance, and Policy Documents',
        url: 'https://www.cms.gov/initiatives/medicare-prescription-drug-affordability/overview/medicare-drug-price-negotiation-program/regulations-guidance-policy-documents',
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
