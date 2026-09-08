export type VisualKind =
  | "signal"
  | "flow"
  | "readiness"
  | "compare"
  | "roles"
  | "network"
  | "governance"
  | "cta";

export type VideoScene = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  narration: string;
  visual: VisualKind;
};

export type VideoStory = {
  id: string;
  title: string;
  sector: "pharma" | "aesthetics";
  disclosure: string;
  scenes: VideoScene[];
};

export const videoStories: VideoStory[] = [
  {
    id: "pharma-end-to-end",
    title: "RxLaunchOS: From Launch Thesis to Learning Loop",
    sector: "pharma",
    disclosure: "Working beta · Decisions remain human-owned",
    scenes: [
      {
        id: "launch-reality",
        eyebrow: "Pharmaceutical commercialization",
        headline: "A launch can look busy and still be exposed.",
        body: "RxLaunchOS brings the assumptions, evidence, decisions, dependencies, and consequences into one manufacturer-side operating view.",
        bullets: ["Evidence", "Decisions", "Critical path"],
        narration: "A pharmaceutical launch can look busy and still be exposed. Weak assumptions, missing evidence, disconnected workstreams, and late decisions often become visible only after the cost of change has climbed.",
        visual: "signal",
      },
      {
        id: "define",
        eyebrow: "01 · Define the launch",
        headline: "Start with context—not a generic template.",
        body: "Capture the product, indication, timeline, commercial objectives, constraints, evidence, and accountable decision owners.",
        bullets: ["Launch context", "Objectives", "Owners"],
        narration: "R X Launch O S starts with the actual launch context: the product, indication, timeline, commercial objectives, constraints, available evidence, and the leaders accountable for each consequential decision.",
        visual: "flow",
      },
      {
        id: "diagnose",
        eyebrow: "02 · Diagnose readiness",
        headline: "Know what is ready—and what is only assumed.",
        body: "Readiness separates coverage, evidence quality, gates, contradictions, stale inputs, and unresolved questions.",
        bullets: ["Known", "Missing", "Blocked"],
        narration: "The readiness layer distinguishes what is known, assumed, missing, stale, contradictory, or blocked. When the evidence is insufficient, it refuses false precision and shows the work needed before the plan can be trusted.",
        visual: "readiness",
      },
      {
        id: "design",
        eyebrow: "03 · Design the operating model",
        headline: "Build, buy, rent, partner—or wait.",
        body: "Structure organization, field model, CRM timing, vendor requirements, RFPs, territories, milestones, and cross-functional dependencies.",
        bullets: ["Operating model", "RFPs", "Roadmap"],
        narration: "Teams can structure the operating model, field force, CRM timing, partner requirements, requests for proposal, territory design, milestones, and dependencies—while preserving the evidence and assumptions behind each choice.",
        visual: "network",
      },
      {
        id: "rehearse",
        eyebrow: "04 · Rehearse decisions",
        headline: "Compare options before committing the launch.",
        body: "Governed scenarios make tradeoffs, dependencies, leading indicators, and the consequence of waiting visible.",
        bullets: ["Internal vs. CSO", "Sequence", "Wait cost"],
        narration: "Scenario Lab compares explicit options. Internal versus outsourced field teams. Different hiring sequences. CRM and territory timing. Each scenario shows assumptions, tradeoffs, dependencies, leading indicators, and the consequence of waiting. It is comparison—not prediction.",
        visual: "compare",
      },
      {
        id: "operate",
        eyebrow: "05 · Decide and operate",
        headline: "Carry approved decisions into accountable action.",
        body: "The decision record connects rationale, ownership, milestones, risks, work, reporting, and changing signals without giving AI approval authority.",
        bullets: ["Human approval", "Action", "Monitoring"],
        narration: "Human-approved decisions carry into accountable work, milestones, risks, reports, and launch signals. R X Launch O S can explain and challenge the plan, but it cannot silently approve a gate or make the commercial decision for leadership.",
        visual: "governance",
      },
      {
        id: "learn",
        eyebrow: "06 · Learn",
        headline: "One operating rhythm from plan to portfolio.",
        body: "Use a fictional demonstration, create an isolated working trial, or scope an enterprise commercialization office.",
        bullets: ["Demo", "14-day trial", "Enterprise"],
        narration: "The result is one operating rhythm: define, diagnose, design, decide, operate, and learn. Explore the fictional demonstration, create a private fourteen-day working trial, or discuss an enterprise commercialization office with Upper Echelon Management.",
        visual: "cta",
      },
    ],
  },
  {
    id: "pharma-personas",
    title: "RxLaunchOS: One Strategy, Six Operating Lenses",
    sector: "pharma",
    disclosure: "Role lenses change the work—not authorization",
    scenes: [
      {
        id: "role-system",
        eyebrow: "Role-based planning",
        headline: "The launch is shared. The job is not.",
        body: "RxLaunchOS changes the questions, horizon, and roll-up for the work each person is responsible for performing.",
        bullets: ["Same strategy", "Relevant view", "Clear ownership"],
        narration: "A launch strategy becomes useful when every leader and operator can translate it into the work they actually own. R X Launch O S changes the planning lens without changing permissions or decision rights.",
        visual: "roles",
      },
      {
        id: "executive",
        eyebrow: "Commercial executive",
        headline: "See the decisions that can move the enterprise.",
        body: "Chief commercial officers and commercial executives see readiness, tradeoffs, resource implications, weak assumptions, and portfolio attention.",
        bullets: ["Readiness", "Capital", "Portfolio"],
        narration: "For the chief commercial officer or commercial executive, the system concentrates attention on launch readiness, enterprise tradeoffs, resource and capital implications, weak assumptions, and decisions that cannot remain unresolved.",
        visual: "signal",
      },
      {
        id: "functional",
        eyebrow: "VP and functional leader",
        headline: "Turn strategy into a national operating plan.",
        body: "Align targets, capabilities, channels, vendors, evidence, milestones, and cross-functional dependencies.",
        bullets: ["Capabilities", "Partners", "Dependencies"],
        narration: "For vice presidents and functional leaders, R X Launch O S connects national targets, capabilities, channels, vendors, evidence, milestones, and cross-functional dependencies to the commercial strategy.",
        visual: "network",
      },
      {
        id: "regional",
        eyebrow: "Regional director",
        headline: "Recognize patterns and direct intervention.",
        body: "Compare authorized district patterns, manager needs, capacity constraints, resource requests, and regional strategy pivots.",
        bullets: ["Patterns", "Intervention", "Resources"],
        narration: "For a regional director, the view highlights authorized district patterns, manager intervention, capacity constraints, resource needs, and regional strategy pivots—without ranking employees or turning activity into surveillance.",
        visual: "compare",
      },
      {
        id: "manager",
        eyebrow: "District manager",
        headline: "Coach the barrier—not the dashboard.",
        body: "Connect roster, territories, capacity, coaching evidence, commitments, barriers, actions, and escalations.",
        bullets: ["Coaching", "Commitments", "Escalations"],
        narration: "For district and first-line managers, it brings roster, territory, capacity, coaching evidence, commitments, barriers, actions, and escalations together so the right issue can be coached or unblocked.",
        visual: "readiness",
      },
      {
        id: "field",
        eyebrow: "Representative and KAM",
        headline: "Make the next account action purposeful.",
        body: "Connect assigned accounts, objectives, stakeholders, barriers, evidence, outcomes, follow-ups, and the next action.",
        bullets: ["Accounts", "Objectives", "Next action"],
        narration: "For representatives and key account managers, the system connects assigned accounts, objectives, stakeholder and barrier facts, evidence, outcomes, follow-ups, and the next purposeful account action.",
        visual: "flow",
      },
      {
        id: "shared-record",
        eyebrow: "Cross-functional team",
        headline: "One versioned record. Human authority stays clear.",
        body: "Field, access, operations, data, finance, medical, and launch leadership contribute without losing functional ownership.",
        bullets: ["Shared truth", "Scoped access", "Human approval"],
        narration: "Across the commercial team, each role contributes to one versioned operating record while functional ownership and human approval remain explicit. Choose your role lens in the working trial and see the launch from where you actually sit.",
        visual: "cta",
      },
    ],
  },
  {
    id: "aesthetics-end-to-end",
    title: "Aesthetic Medicine: Manufacturer to Practice",
    sector: "aesthetics",
    disclosure: "Design-partner direction · Sector methodology under validation",
    scenes: [
      {
        id: "category",
        eyebrow: "Aesthetic medicine commercialization",
        headline: "A product does not become a practice channel by itself.",
        body: "Professional skincare, injectables, and practice-dispensed products require product, provider, practice, channel, and patient experience to work as one system.",
        bullets: ["Manufacturer", "Practice", "Adoption"],
        narration: "A product does not become a practice channel by itself. Professional skincare, injectables, and practice-dispensed products require the manufacturer, provider, practice team, channel, and patient experience to work as one commercial system.",
        visual: "network",
      },
      {
        id: "market",
        eyebrow: "01 · Define the market",
        headline: "Choose the practices and adoption path deliberately.",
        body: "Segment dermatology, plastic surgery, medical-office, and med-spa settings by fit, economics, capability, and adoption conditions.",
        bullets: ["Segments", "Economics", "Adoption"],
        narration: "The work begins by defining the target practice segments and adoption path. Dermatology, plastic surgery, medical offices, and med spas do not share identical economics, training needs, purchase patterns, or patient journeys.",
        visual: "signal",
      },
      {
        id: "channel",
        eyebrow: "02 · Design the channel",
        headline: "Direct, distributor, hybrid, or staged expansion.",
        body: "Map routes to market, account coverage, partner roles, training responsibilities, inventory assumptions, and practice support.",
        bullets: ["Route to market", "Partners", "Coverage"],
        narration: "Leaders can design direct, distributor, hybrid, or staged routes to market; define account coverage and partner roles; and make training, inventory, education, and practice-support assumptions visible before launch.",
        visual: "flow",
      },
      {
        id: "operating-model",
        eyebrow: "03 · Build the commercial model",
        headline: "Plan the team, partners, training, and practice support.",
        body: "Structure field and inside roles, clinical education, practice development, partner requirements, RFPs, milestones, and launch governance.",
        bullets: ["Team design", "RFPs", "Training"],
        narration: "The commercialization plan can structure field and inside roles, clinical education, practice development, partner requirements, requests for proposal, milestones, and the governance needed to keep commercial activity from outrunning the operating system.",
        visual: "roles",
      },
      {
        id: "scenarios",
        eyebrow: "04 · Compare launch tactics",
        headline: "Rehearse the choices that shape adoption.",
        body: "Compare segment focus, sales coverage, partner mix, training cadence, launch sequence, investment gates, and measures of progress.",
        bullets: ["Option A", "Option B", "Decision gate"],
        narration: "Governed scenarios can compare segment focus, sales coverage, partner mix, training cadence, launch sequence, investment gates, and measures of progress. They expose tradeoffs and missing evidence; they do not predict market success.",
        visual: "compare",
      },
      {
        id: "operate-learn",
        eyebrow: "05 · Operate and learn",
        headline: "Watch adoption without confusing activity for progress.",
        body: "Connect decisions, owners, readiness, risks, field signals, partner performance, practice adoption, and next actions.",
        bullets: ["Signals", "Decisions", "Next actions"],
        narration: "During launch, leadership can connect decisions, owners, readiness, risks, field signals, partner performance, practice adoption, and next actions—then update the plan as evidence changes.",
        visual: "governance",
      },
      {
        id: "design-partner",
        eyebrow: "Design-partner program",
        headline: "Help shape the aesthetic-medicine configuration.",
        body: "UEM supports category commercialization today. The RxLaunchOS sector configuration remains exploratory and is being validated with qualified manufacturers and operators.",
        bullets: ["Research", "Testing", "Validation"],
        narration: "Upper Echelon Management supports category commercialization today. The R X Launch O S aesthetic-medicine configuration is a design-partner direction under validation, not a generally available or proven product. Qualified manufacturers and operators can help test the workflow and shape what comes next.",
        visual: "cta",
      },
    ],
  },
  {
    id: "aesthetics-personas",
    title: "Aesthetic Medicine: The People Behind Adoption",
    sector: "aesthetics",
    disclosure: "Proposed role lenses for design-partner validation",
    scenes: [
      {
        id: "handoffs",
        eyebrow: "Manufacturer-to-practice system",
        headline: "Every handoff changes what the launch needs.",
        body: "The planned role lenses connect enterprise intent to channel design, field execution, education, and practice adoption.",
        bullets: ["Strategy", "Channel", "Practice"],
        narration: "Aesthetic commercialization crosses many hands. The planned R X Launch O S role lenses are designed to connect enterprise intent to channel design, field execution, education, and practice adoption without pretending every role needs the same screen.",
        visual: "network",
      },
      {
        id: "executive",
        eyebrow: "GM and commercial executive",
        headline: "Choose the market, model, and investment path.",
        body: "See category assumptions, channel economics, capability gaps, investment gates, partner choices, and launch risks.",
        bullets: ["Market", "Model", "Investment"],
        narration: "For the general manager or commercial executive, the lens concentrates category assumptions, channel economics, capability gaps, investment gates, partner choices, launch risks, and the decisions leadership must own.",
        visual: "signal",
      },
      {
        id: "brand-channel",
        eyebrow: "Brand, sales, and channel leaders",
        headline: "Translate positioning into a route to practice adoption.",
        body: "Align segments, value proposition, account strategy, coverage, distributor roles, education, and launch measures.",
        bullets: ["Segments", "Coverage", "Partners"],
        narration: "Brand, sales, and channel leaders connect target segments, value proposition, account strategy, coverage, distributor roles, education, and launch measures into one commercial design.",
        visual: "flow",
      },
      {
        id: "regional",
        eyebrow: "Regional and district leaders",
        headline: "See where adoption needs intervention.",
        body: "Compare territory coverage, manager capacity, practice barriers, training needs, partner performance, and resource requests.",
        bullets: ["Coverage", "Barriers", "Intervention"],
        narration: "Regional and district leaders compare territory coverage, manager capacity, practice barriers, training needs, partner performance, and resource requests so intervention follows evidence instead of anecdotes.",
        visual: "compare",
      },
      {
        id: "field",
        eyebrow: "Territory and practice-development teams",
        headline: "Turn practice facts into the next purposeful action.",
        body: "Connect account potential, provider and staff stakeholders, adoption barriers, education, commitments, outcomes, and follow-up.",
        bullets: ["Practice facts", "Education", "Follow-up"],
        narration: "Territory and practice-development teams connect account potential, provider and staff stakeholders, adoption barriers, education, commitments, outcomes, and the next purposeful follow-up.",
        visual: "readiness",
      },
      {
        id: "education-ops",
        eyebrow: "Education, operations, and analytics",
        headline: "Keep enablement and evidence connected to the launch.",
        body: "Coordinate training readiness, inventory and service assumptions, data quality, partner obligations, adoption signals, and escalation.",
        bullets: ["Training", "Operations", "Signals"],
        narration: "Clinical education, commercial operations, and analytics teams coordinate training readiness, inventory and service assumptions, data quality, partner obligations, adoption signals, and escalation without losing functional accountability.",
        visual: "governance",
      },
      {
        id: "validation",
        eyebrow: "Design-partner invitation",
        headline: "Test the lenses with people who do the work.",
        body: "Manufacturers, operators, and qualified practice-channel leaders can review the proposed workflows before sector methodology is promoted.",
        bullets: ["Review", "Challenge", "Shape"],
        narration: "These aesthetic role lenses are proposed for design-partner validation. Manufacturers, operators, and qualified practice-channel leaders can review, challenge, and shape the workflows before sector methodology is promoted into a generally available product.",
        visual: "cta",
      },
    ],
  },
];

export const getVideoStory = (id: string) => {
  const story = videoStories.find((candidate) => candidate.id === id);
  if (!story) throw new Error(`Unknown video story: ${id}`);
  return story;
};
