# LaunchOS

## Master Strategy, Product Architecture & Build Blueprint

**Version: 2.3 Contract Sales / CSO Amendment (2026-08-28)**
Purpose: Authoritative product, strategy, methodology, architecture, and research blueprint
Primary market: Emerging biopharma and global manufacturers preparing a first U.S. commercial launch
Expansion market: Established pharma launch leaders, regional leaders, first-line managers, and field teams
Operating model: Service-led SaaS → progressively more software-led as methodology is validated
Build principle: Decision-grade operating system, not a thin AI wrapper or project-management toy

---


## What's New in v2.1

v2.1 is the **reconciled build-control release**. It does not discard the research, market, regulatory, financial, data-rights, expert-network, or GTM work in v2.0. It makes that work operationally authoritative by reconciling the companion Gap Analysis and Sync Brief into one hierarchy of truth.

v2.1 adds:

1. **A source-of-truth hierarchy** so Codex, founders, experts, and future models know which decision controls when older text conflicts.
2. **A Build Control Charter** defining what may be built in Waves 0–2 and what is explicitly prohibited until commercial, regulatory, security, or data-rights gates are met.
3. **A Minimum Sellable Product definition** so LaunchOS cannot drift into a broad platform build before the Commercial Readiness Diagnostic is sold.
4. **Evidence, benchmark, and licensed-data firewalls** so shared methodology and cross-tenant assets cannot accidentally incorporate restricted third-party data.
5. **A procurement/security gate** that moves SSO, tenant-isolation tests, security questionnaire readiness, subprocessor documentation, and SOC 2 readiness forward.
6. **An expert-network operating gate** covering conflict checks, scoped access, validation, payment, and provenance before experts can be used in paid engagements.
7. **A regulatory gate for rep-facing AI**: no Wave 5 field-facing generative capability until counsel, MLR controls, evals, and insurance are in place.
8. **A 90%+ viability framework** distinguishing confidence in the market problem, service offer, product workflow, SaaS repeatability, and enterprise procurement readiness.
9. **A formal open-decisions register** so unsettled founder choices are visible rather than silently assumed.
10. **A next-build order** focused on the readiness bank, diagnostic report, buyer/pricing interviews, First Launch Radar, and Wave 0–1 PRD.

The original v2.0 additions (§47–63) remain controlling except where v2.1 explicitly supersedes them.

## Amendments Register (v1 → v2)

| # | v1 Section | Amendment | Driver |
|---|---|---|---|
| A1 | §35 Wave plan | Waves re-scoped and re-sequenced per §60: SSO + security-questionnaire readiness pulled into Waves 1–2; SOC 2 Type I runs parallel to first paid engagements; Waves 3–6 gated behind funding/hiring triggers, not dates | CON-01, CON-03 |
| A2 | §15 Agent architecture | Waves 1–2 consolidate 11 agents to 3–4 (Orchestrator + Readiness, Gap/Expert, Executive); remaining agents activate in Waves 3–5 behind eval gates | THN-05 |
| A3 | §35 Wave 5 (field/rep AI) | Additionally gated behind pharma regulatory counsel review; rep-facing outputs rendered only from client-MLR-approved fragments; off-label classifier + hard refusal; no free generation (see §52) | RSK-01 |
| A4 | §24B Data strategy | "Client licenses, we integrate" is necessary but NOT sufficient: LaunchOS must hold master third-party access agreements (IQVIA TPA template) and partner-program memberships before first enterprise onboarding (see §53) | MIS-04 |
| A5 | §18/§21 Benchmarks & Failure Lab | Cold-start supply plan and minimum-N thresholds defined (§58); benchmark maturity timeline disclosed to buyers; benchmark assets must be provably free of licensed data/derivatives (§53) | CON-04, MIS-10 |
| A6 | §31 Service-led phases | Phase-exit criteria are now measurable gates (§51.2), not vibes | CON-05 |
| A7 | §6.13 Vendor neutrality | Declared absolute and non-monetized; no referral/placement fees from vendors, ever; forfeited revenue recorded as deliberate decision; conflicts policy in §54 | CON-06 |
| A8 | §32 Pricing | Pricing hypotheses now carry a validation method (§50.3): anchor testing in buyer interviews, Van Westendorp/Gabor-Granger, explicit revision rule | ASM-01 |
| A9 | §5 LaunchOS Pro | Pro-tier guardrails added: ToS prohibition on employer-confidential data, technical DLP warnings, employer-claim process, Pro→Enterprise path (§62.4) | CON-07 |
| A10 | §26 Security | Data residency stance, US-only v1 with stated sales consequences (§63.4); subprocessor register (§62.5); PHI decision tree (§52.6); retention schedule (§61.5) | THN-02, CON-02 |
| A11 | §20/§21 Patient funnel | PHI boundary stated per module: funnel runs on aggregated/de-identified feeds, Expert Determination standard (§52.6); limited-data-set/DUA path (§52.6) and dormant BAA template (§62.2) defined for patient-level demands | CON-02 |
| A12 | §12/§16.1 Readiness scoring | Scoring model specification (weights, criticality multipliers, evidence-recency decay, aggregation) required as a Wave 1 deliverable (§60 acceptance criteria) | THN-03 |
| A13 | §13 Rules Manager | Execution semantics added: priority/conflict resolution and a dry-run sandbox before activation are required Wave 2 specifications (§60.2 Wave 2 acceptance criteria); per-rule precision tracking instrumented via workflow events (§59.2) | THN-04 |
| A14 | §9 Expert lifecycle | INTERNAL VALIDATION defined: validator role, 4-dimension rubric, 2-business-day SLA, contradiction protocol writing to Decision Ledger (§54.8) | THN-06 |
| A15 | §36 AI stack | Model governance expanded: golden eval sets per agent, pre-deploy eval gates, tenant-isolation test suite green in CI (§60.2 Wave 1 acceptance), provider DPA/zero-retention terms (§62.5 subprocessor list), per-tenant LLM cost ceilings (§59.1 KPI 6) | MIS-16, RSK-07 |
| A16 | §37 Acceptance criteria | Add: (16) procurement pack survivable (§62.5); (17) data-rights registry operational with TPA certificates (§53); (18) expert legal stack executed before first engagement (§54); (19) insurance tower bound before first paid work (§52.7) | MIS-03/04/18 |
| A17 | §4 Priority geographies | Priority order re-ranked by evidence: the U.S. EBP pool (~25 EBP-filed launches/yr) and Korea (proven direct-entry precedent) are the active tracks; Europe is direct founder-led on mid-cap first launchers; Japan is demoted to partner-led and opportunistic — no Japan-specific GTM spend in Yr 1 until its direct-entry SAM is evidenced (§49.4, §63.6) | Research: market_evidence §8.5; ZS 15-yr census |
| A18 | §33 Expert Council funding | "Experts funded by engagements when needed" amended: cold-start requires guaranteed minimum paid engagements or small retainers ($1,500–$3,000/mo × 3 months) for 3–5 anchor experts within the founding council of 25 (§54.3, §55 R-11) | ASM-04 |

---
---
# PART I — Blueprint v1.0 (Sections 1–46, as approved)

*The v1.0 text follows verbatim. Amendments above govern where they conflict.*


## 1. Executive Summary


LaunchOS is an AI-native, multi-tenant U.S. pharmaceutical commercialization operating system.

Its job is to give a first-time or resource-constrained manufacturer the commercial discipline, operating methodology, expert access, launch governance, data integration, field readiness, and decision visibility normally found inside a mature pharmaceutical company — without requiring that manufacturer to build a large U.S. commercial organization from scratch.

LaunchOS also serves experienced pharma leaders who already work inside established manufacturers and want an independent, current, intelligent second set of eyes to:

• pressure-test a launch,
• benchmark readiness,
• identify launch risks earlier,
• improve field execution,
• coach managers and representatives,
• identify commercial friction,
• perform pre-mortems and postmortems,
• determine what management should intervene on now rather than after the quarter closes.

LaunchOS does not replace:

• Veeva or Salesforce CRM,
• IQVIA, Veeva Compass, MMIT, Definitive Healthcare, or other licensed data,
• CSOs and outsourced field teams,
• specialty distribution, HUBs, 3PLs, or specialty pharmacies,
• market-access specialists,
• MLR systems,
• medical affairs systems,
• pharmacovigilance systems.

LaunchOS sits above and between them, converting fragmented strategy, data, vendors, experts, execution, and milestones into decision intelligence and coordinated action.


---



## 2. North Star


> **Help pharmaceutical commercial leaders design smarter launches, identify failure earlier, and make better commercialization decisions — whether it is their company’s first U.S. launch or their tenth.**

For first-time U.S. launchers:

> **Give the manufacturer the operating discipline and commercial intelligence of a mature U.S. pharma organization without requiring it to build that entire organization before it knows what it truly needs.**

The platform should continuously answer:


## 1. Are we ready?


## 2. What are we missing?


## 3. What is late?


## 4. What decision is required?


## 5. What happens if we do nothing?


## 6. What assumptions are weak or stale?


## 7. What should be built, bought, rented, or delayed?


## 8. Where is commercial friction developing?


## 9. Which risks are moving from theoretical to real?


## 10. What should leadership pay attention to this week?


## 11. What does the current evidence actually support?


## 12. Does LaunchOS know enough to answer, or should it ask a human expert?



---



## 3. Strategic Thesis


Why this market exists

First-time launchers increasingly retain commercial rights and launch independently, but have less institutional commercialization experience, fewer internal experts, and more fragmented vendor ecosystems than established manufacturers.

The resulting problem is not merely “lack of software.”

It is a combination of:

• commercialization knowledge gaps,
• poor sequencing,
• insufficient launch governance,
• disconnected vendors,
• weak data-to-decision translation,
• late risk detection,
• field-force overbuild or underbuild,
• poor hiring sequencing,
• market-access surprises,
• CRM and data decisions made before the operating model is clear,
• organizational memory trapped in consultants, PowerPoints, and individual employees.

LaunchOS strategy

LaunchOS becomes the manufacturer-side commercialization office and decision system.

The manufacturer may use:

• Inizio, IQVIA, Syneos, EVERSANA, or another CSO,
• McKesson, Cencora, Cardinal, specialty distributors, HUBs and 3PLs,
• Veeva or Salesforce,
• IQVIA, Veeva Compass, MMIT, Definitive Healthcare, Komodo, H1, or other data.

LaunchOS remains independent and asks:

> **What does this asset actually need, when does it need it, who should provide it, what should it cost, how do we know it is working, and what should management do next?**


---



## 4. Target Customers


ICP A — First-Time U.S. Commercial Launchers

Ideal characteristics:

• first U.S. branded commercial product,
• Phase III, NDA/BLA submitted, PDUFA scheduled, or recently approved,
• U.S. rights retained,
• 6–24 months from anticipated launch,
• approximately 20–300 employees,
• small commercial organization,
• capital-conscious,
• specialty/focused prescriber universe is especially attractive,
• significant vendor dependence expected.

Priority geographies:


## 1. South Korea


## 2. Japan


## 3. Europe


## 4. Emerging U.S. biopharma


Primary economic buyer:

• CEO
• U.S. President/GM
• CCO
• Chief Business Officer
• COO
• VP Commercial
• board/investor operating partner


---


ICP B — Established Pharma Launch Leaders

Use LaunchOS to improve or pressure-test launches.

Roles:

• CCO
• GM
• VP Sales
• VP Commercial Operations
• VP Distribution
• VP Marketing
• VP Market Access
• Launch Excellence
• Regional VP / Regional Director

Problems:

• first time personally leading a launch,
• new therapeutic area,
• outdated internal methodology,
• fragmented launch data,
• lack of an independent challenge function,
• desire to identify risks earlier,
• desire to benchmark current practices.


---


ICP C — Managers and Field Teams

First-Line Manager

Needs:

• launch readiness,
• rep coaching,
• field ride preparation,
• account progression,
• team exceptions,
• manager operating rhythm.

Regional Director

Needs:

• region health,
• manager effectiveness,
• territory variance,
• adoption signals,
• access patterns,
• intervention prioritization.

Sales Representative

Needs:

• priority accounts,
• call objectives,
• approved context,
• follow-up,
• CRM drafting,
• compliance-safe coaching.

This is an expansion market, not the first enterprise wedge.


---



## 5. Product Family


LaunchOS Enterprise

For manufacturers.

Includes:

• tenant
• multiple products / indications / launches
• launch methodology
• command center
• rules
• expert network
• automations
• data integrations
• vendor orchestration
• readiness
• strategy
• field design
• hiring
• execution
• failure detection
• governance
• executive reporting

Initial operating model:
software + fractional commercialization office


---


LaunchOS Pro

For individual commercial executives and experienced leaders.

Uses:

• Launch Health Check
• Pressure Test My Launch
• Failure Lab
• role-specific methodology
• best-practice guidance
• anonymized/manual metrics
• public information

No employer confidential integrations without enterprise authorization.


---


LaunchOS Team / Manager / Field

Future expansion:

• LaunchOS Regional
• LaunchOS Manager
• LaunchOS Rep

Designed to create product-led adoption upward into an enterprise tenant.


---



## 6. Product Constitution


LaunchOS must never become:

• a generic task manager,
• a generic CRM,
• a database admin interface,
• a ChatGPT wrapper,
• a dashboard zoo,
• a consultancy document repository.

The experience should feel like:

> **“I logged into my U.S. Commercialization Office.”**

Non-negotiable principles


## 1. Multi-tenant from the first production schema.


## 2. Security-first architecture.


## 3. User intent drives navigation; schema does not.


## 4. Methodology drives product behavior.


## 5. Rules are deterministic where appropriate.


## 6. AI must identify missing information.


## 7. AI must not manufacture certainty.


## 8. Human experts are first-class system participants.


## 9. Expert access is scoped.


## 10. AI outputs show evidence, freshness, confidence, and approval status.


## 11. No cross-tenant retrieval or model memory.


## 12. No tenant confidential information trains shared models.


## 13. Vendor-neutral recommendations.


## 14. Minimize PHI in V1.


## 15. Integrate regulated systems rather than replace them.


## 16. Every major decision has an audit trail.


## 17. Every feature maps to Feature → Advantage → Benefit → Payoff.


## 18. Every launch risk can have an owner, evidence, action, due date, and escalation rule.


## 19. The product must work with public/manual data before expensive proprietary data is connected.


## 20. Enterprise integrations should make LaunchOS better, not make LaunchOS possible.



---



## 7. Multi-Tenant Architecture


Organization Types

A. Platform Operator

LaunchOS operator organization.

B. Manufacturer Tenant

Hierarchy:

Manufacturer
→ Product
→ Indication
→ Geography
→ Launch

C. Expert Organization

An expert may belong to:

• boutique consulting firm,
• individual advisory practice,
• LaunchOS expert council,
• specialist organization.

Expert access is through Expert Engagements, not broad tenant membership.


---


Mandatory Tenant Fields

Every tenant-scoped object must support:

• organization_id
• tenant_id
• product_id if applicable
• launch_id if applicable
• access_scope
• data_classification
• created_by
• source_id
• version
• timestamps
• audit metadata


---


Isolation Rules

Manufacturer A must never access Manufacturer B through:

• UI
• REST/GraphQL API
• direct database query
• analytics query
• search
• vector retrieval
• embeddings
• cache
• agent context
• background job
• export
• report
• expert request
• logs visible to users

AI knowledge indexes must be tenant-scoped.


---



## 8. Roles & Permissions


Manufacturer Roles

Executive

CEO / President / CCO

Access:

• command
• forecast
• budget
• risks
• decisions
• readiness
• vendor health
• all major workstreams

Functional Leader

VP Sales, Marketing, Market Access, Distribution, Commercial Operations

Access:

• functional workspace
• dependencies
• delegated cross-functional information
• decisions and risks relevant to function

Regional Director

Access:

• region
• districts
• managers
• field performance
• access/adoption exceptions

First-Line Manager

Access:

• own team
• coaching
• field rides
• readiness
• account progression
• rep metrics

Representative

Access:

• assigned territory/accounts
• approved knowledge
• call planning
• follow-up
• CRM draft support

Contributor

Limited assigned workstream/project access.

Viewer

Board, observer, executive read-only.

Vendor

Only assigned project/RFP/workstream.

Auditor

Read-only governance/audit view.


---



## 9. Expert Tenant / Expert Network


This is a differentiating capability.

Expert Profile

Fields:

• specialties
• launch functions
• therapeutic areas
• prior roles
• company experience
• launch experience
• geography
• availability
• rates
• conflicts
• NDA status
• approved engagement types
• quality score
• client feedback

Expert Engagement

Expert sees only:

• question
• structured context
• explicitly shared files/data
• relevant assumptions
• requested deliverable
• due date

Expert never receives full client access by default.

Lifecycle

REQUESTED
→ ASSIGNED
→ ACCEPTED
→ IN REVIEW
→ SUBMITTED
→ INTERNAL VALIDATION
→ CLIENT REVIEW
→ ACCEPTED / MODIFIED / REJECTED
→ DECISION RECORDED

Knowledge Governance

Expert advice can be classified as:

• tenant-only,
• reusable template with permission,
• anonymized methodology candidate,
• public-source-supported insight.

No automatic global training.


---



## 10. Core Commercialization Methodology


LaunchOS methodology is built around:

STRATEGIZE

• Target Product Profile (TPP)
• Launch Archetype
• Market Landscape
• Patient Journey
• HCP/HCO Universe
• Competitive Landscape
• Market Shaping
• Payer / Access Landscape
• Forecast
• Commercial North Star
• Success Metrics

DESIGN

• Commercial Operating Model
• Build / Buy / Rent
• Organization Design
• Field Force Model
• Channel Strategy
• HCP Segmentation / Targeting
• Distribution
• HUB / Patient Services
• Data Strategy
• Technology Architecture
• Vendor Architecture
• Governance

BUILD

• Leadership Hiring
• FLSM Hiring
• Representative Hiring
• CSO / Vendor Selection
• Territory Alignment
• CRM
• Data
• Reporting
• Incentive Compensation
• Training
• Certification
• Market Access Readiness
• Distribution Readiness
• Patient Services Readiness
• Content / MLR Dependencies
• Launch Room Readiness

LAUNCH & OPTIMIZE

• Launch Command Center
• Field Effectiveness
• HCP Adoption
• Market Access
• Patient Starts
• Distribution
• Demand / Supply
• Forecast Reconciliation
• Competitive Response
• Risk Monitoring
• Intervention
• Postmortem
• Optimization


---



## 11. Master Launch Timeline


Configurable relative timeline:

• L-24
• L-21
• L-18
• L-15
• L-12
• L-9
• L-6
• L-3
• Launch
• L+1
• L+3
• L+6
• L+12

Every milestone supports:

• owner
• due date
• dependency
• criticality
• completion evidence
• readiness effect
• risk
• confidence
• linked decision
• expert validation requirement
• change history

PDUFA/launch date changes automatically reforecast relevant timing.


---



## 12. Command Center


This is the product centerpiece.

Executive Header

Company
Product / Indication
PDUFA / anticipated launch
Days to launch
Current launch archetype

Executive Scorecards

• Launch Readiness
• Critical Risks
• Decisions Due
• Critical Path
• Budget vs Plan
• Organization Readiness
• Vendor Readiness
• Data Readiness
• Field Readiness
• Access Readiness
• Distribution Readiness

AI Executive Brief

The first thing leadership sees:

What changed?

Why does it matter?

What requires a decision?

What happens if we wait?

Every brief item includes:

• evidence
• source
• source date
• confidence
• estimated impact
• owner
• due date
• recommended next action

Actions:

• Review Decision
• Assign
• Ask Expert
• Model Scenario
• Show Evidence
• Accept Recommendation
• Reject / Modify


---



## 13. Rules Manager


LaunchOS combines AI with deterministic rules.

Rule Categories

• timing
• dependency
• readiness
• data freshness
• expert escalation
• AI confidence
• hiring
• field readiness
• vendor governance
• security
• compliance
• launch performance
• commercial friction
• escalation

Rule Schema

• rule_id
• name
• description
• category
• applicability
• condition
• action
• severity
• source
• owner
• version
• effective date
• approval
• exception policy
• change history

Example

IF:

• field_reps_required > 30
• launch_date < 270 days
• required_first_line_managers_not_hired

THEN:

• risk = HIGH
• create executive exception
• identify recruiting dependency
• recommend FLSM hiring acceleration

Rules are editable/versioned by authorized methodology owners — never hard-coded as immutable business truth.


---



## 14. AI Gap Wizard


The most important AI behavior is knowing when it lacks evidence.

Decision order:


## 1. Can tenant data answer?


## 2. Can approved public data answer?


## 3. Is licensed data required?


## 4. Does verified LaunchOS methodology answer?


## 5. Is expert judgment needed?


Example:

Question: How many field representatives should we deploy?

Known:

• HCP universe ✓
• geography ✓
• product profile ✓

Missing:

• opportunity segmentation ✕
• call-frequency assumption ✕
• access complexity ✕

Result:

> Recommendation confidence: 46%. Field force sizing should not be finalized. Obtain claims/market data and validate call assumptions with a field commercialization expert.

CTA:
Ask Expert


---



## 15. LaunchOS Agent Architecture


Orchestrator

Applies:

• tenant boundary
• role permission
• rules
• allowed tools/data
• approval gates

Specialized Agents

Launch Readiness Agent

Continuously assesses readiness, gaps, evidence, dependencies.

Strategy Agent

Launch archetype, assumptions, market, positioning, operating model.

Gap & Expert Agent

Detects unknowns and creates structured expert requests.

Organization & Hiring Agent

Sequencing, spans, manager/rep timing, readiness.

Field Force Design Agent

Runs scenario and optimization workflows; does not guess headcount.

Vendor Strategy Agent

Build/buy/rent, RFPs, scorecards, comparison.

Commercial Intelligence Agent

Monitors approved public/licensed/client sources.

CRM & Call Planning Agent

Supports operating-model design and compliant field workflows.

PMO Agent

Critical path, delays, downstream impact, escalation.

Compliance & Governance Agent

Permissions, evidence, approved-source policy, AI restrictions.

Executive Agent

Converts complexity into decisions.


---



## 16. Key Decision Models



### 16.1 Commercial Readiness Engine


150–250 structured questions with:

• dynamic branching
• evidence requirements
• confidence
• role weighting
• critical-path weighting
• benchmark context
• recommended remediation


---



### 16.2 Launch Archetype Engine


Inputs:

• modality
• site of care
• therapeutic area
• patient concentration
• HCP concentration
• route
• diagnostic burden
• payer complexity
• distribution
• market maturity
• differentiation
• competition

Outputs:

• launch archetype
• priority workstreams
• likely friction
• recommended metrics
• likely build/buy/rent profile
• failure watchlist


---



### 16.3 Build / Buy / Rent Engine


For each capability:

• Build internally
• Rent/outsource
• Buy platform/data
• Hybrid
• Delay
• Not required

Capability examples:

• sales force
• virtual sales
• KAM
• FRM
• CRM
• claims data
• HCP master
• market access
• HUB
• specialty distribution
• analytics
• agency
• training

Output includes:

• recommendation
• rationale
• timing
• estimated cost range
• risk
• dependency
• alternatives


---



### 16.4 Organization Designer


Creates:

• target org structure
• role sequence
• hiring timeline
• manager span
• FLSM requirements
• territory management
• interview scorecards
• job profiles
• onboarding and certification plan

This module should heavily encode real operator experience.


---



### 16.5 Field Force Designer


Inputs:

• HCP/HCO universe
• opportunity/potential
• geography
• call frequency
• workload
• channel preference
• access complexity
• travel
• launch objectives

Outputs:

• field headcount scenarios
• territory scenarios
• manager count
• regional structure
• field / virtual / hybrid mix
• cost
• expected reach
• sensitivity

Mathematical optimization is preferred over LLM-generated headcount.


---



### 16.6 Vendor / CSO RFP Engine


Vendor categories:

• CSO
• CRM
• market access
• data
• HUB
• specialty distribution
• 3PL
• specialty pharmacy
• agency
• training
• analytics

Functions:

• generate RFP
• requirements template
• proposal ingestion
• normalize pricing
• weighted score
• reference tracking
• SLA comparison
• contract red flags
• recommendation packet

LaunchOS remains buyer-side and vendor-neutral.


---



### 16.7 CRM Blueprint


LaunchOS does not replace Veeva/Salesforce.

It defines:

• HCP/HCO hierarchy
• affiliations
• account objectives
• calls
• call objectives
• outcomes
• objections
• access barriers
• follow-up
• FRM/MSL handoffs
• approved content
• next-best action
• manager coaching fields

Operating model first; CRM configuration second.


---



## 17. Hiring & Certification OS


Pipeline:

Role Approved
→ Open
→ Sourcing
→ Screen
→ Interview
→ Offer
→ Background
→ Hire
→ Onboarding
→ Home Study
→ Live Training
→ Assessment
→ Certification
→ Territory Ready
→ Launch Ready

Dashboards:

• required vs hired
• manager hiring
• hiring velocity
• at-risk roles
• certification
• territory readiness
• vendor/CSO staffing SLA


---



## 18. Launch Failure Lab


LaunchOS should not merely teach best practices. It should learn systematically from historical failures and underperformance.

Case Taxonomy

• product
• therapeutic area
• launch archetype
• company type
• expected trajectory
• actual trajectory

Failure categories:

• access
• differentiation
• customer understanding
• targeting
• field execution
• patient friction
• site-of-care
• distribution
• supply
• organization
• resource prioritization
• governance
• forecast assumptions

Each case stores:

• early signals available
• signals missed
• key assumptions
• intervention
• outcome
• source confidence
• reusable lesson
• potential rule candidate


---



## 19. Pressure Test / Pre-Mortem


Primary question:

> **If this launch misses expectations by 30%, what are the most plausible reasons?**

Workflow:


## 1. inventory assumptions


## 2. map comparable failure patterns


## 3. inspect dependencies


## 4. identify missing measurements


## 5. rank risk hypotheses


## 6. request missing data


## 7. escalate to experts where needed


## 8. generate monitoring plan


The output is not a prediction. It is an evidence-based challenge process.


---



## 20. Commercial Friction Funnel


A core model for launches:

Addressable
→ Diagnosed
→ Identified
→ HCP Engaged
→ Clinically Considered
→ Prescribed
→ Access Approved
→ Dispensed
→ Started
→ Persistent

For each transition:

• expected conversion
• actual conversion
• variance
• root-cause hypotheses
• evidence
• recommended investigation
• owner
• intervention
• trend


---



## 21. Early Launch Performance


Support launch-archetype-adjusted adoption indicators such as:

• breadth
• repeat/return writing
• prescribing depth
• time-to-first trial
• time-to-repeat
• patient starts
• access approval
• abandonment
• time-to-therapy
• persistence
• site capacity
• referral pathway performance

Benchmarks are guideposts, not universal rules.


---



## 22. Role-Specific Field Product


Representative

Question:

> What should I accomplish today?

Provides:

• priority accounts
• approved call objective
• previous interaction
• access context
• follow-up
• approved content
• CRM draft

Post-call:

• structured summary
• barrier classification
• follow-up
• FRM/MSL escalation
• compliance triggers


---


First-Line Manager

Question:

> Who needs coaching and why?

Provides:

• team health
• rep exceptions
• adoption/account progression
• field ride planning
• coaching commitments
• follow-up effectiveness


---


Regional Director

Question:

> Where is my region off plan?

Provides:

• district comparison
• manager effectiveness
• territory variance
• access patterns
• adoption patterns
• resource imbalance
• recommended intervention


---


VP Sales

Question:

> Why is the field organization missing?

Provides:

• national/regional decomposition
• staffing
• targeting
• adoption
• access
• manager performance
• territory productivity
• recommended executive actions


---



## 23. Automations


Timeline

• PDUFA change → timeline recalculation
• critical milestone slip → dependency impact
• unresolved decision ages → escalation

Data

• data stale → warning
• integration failure → alert
• decision based on stale evidence → reopen

Hiring

• critical role late → executive risk
• managers late relative to reps → warning
• certification below threshold → escalation

Vendor

• RFP response late
• SLA misses
• contract milestone
• data delivery miss

Expert

• AI confidence below threshold → expert suggestion
• expert deadline
• expert answer accepted → decision update

Competitive Intelligence

• competitor approval
• label update
• pivotal trial event
• payer policy event
• guideline change

Post-launch

• adoption signal below threshold
• access friction increases
• patient funnel conversion deteriorates
• regional variance exceeds rule
• site capacity constraint emerges


---



## 24. Data Strategy


LaunchOS uses three data layers.

A. Public Data

Examples:

• FDA
• Drugs@FDA
• Orange Book / Purple Book
• ClinicalTrials.gov
• CMS
• Open Payments
• PubMed
• SEC
• investor relations
• professional guidelines
• conference abstracts
• public payer policies
• NPI / NPPES
• job postings

Use:

• First Launch Radar
• market intelligence
• competitor monitoring
• KOL/investigator research
• organizational signals
• initial launch diagnostic


---


B. Client-Licensed Commercial Data

LaunchOS does not buy this speculatively.

The manufacturer licenses the appropriate data; LaunchOS integrates it.

Potential providers:

IQVIA

• OneKey HCP/HCO
• prescription / claims / commercial analytics
• emerging biopharma analytics services

Veeva

• Compass Patient
• Compass Pathway
• Compass Prescriber
• Compass National
• OpenData

MMIT

• formulary
• payer
• restrictions
• market-access data
• REST API

Definitive Healthcare

• HCP/HCO
• affiliations
• claims
• referral patterns
• commercial intelligence

Others to evaluate by use case

• Komodo Health
• H1
• PurpleLab
• Clarivate
• specialty therapeutic datasets


---


C. Client Internal / Partner Data

Examples:

• Veeva CRM
• Salesforce Life Sciences
• finance/forecast
• sales activity
• CSO
• distributor
• 3PL
• HUB
• specialty pharmacy
• market-access
• training
• incentive compensation
• supply
• patient services

Integration methods:

• REST
• GraphQL
• API
• webhooks
• SFTP
• CSV
• EDI
• secure file drop
• warehouse share

LaunchOS cannot assume all pharma infrastructure is API-native.


---



## 25. Data Lineage


Every external commercial record should retain:

• source vendor
• dataset
• source record ID
• as-of date
• ingestion timestamp
• transformation version
• permitted use
• tenant
• confidence/quality indicator

LaunchOS recommendations should be traceable to the evidence used.


---



## 26. Security Architecture


Identity

• MFA
• SAML SSO
• session controls
• SCIM later

Authorization

• RBAC
• project-level grants
• tenant isolation
• data-classification-aware permissions
• time-limited expert access
• least privilege

Encryption

• TLS in transit
• strong encryption at rest
• managed secrets
• rotation

Operations

• immutable audit logs
• backup
• DR
• vulnerability scanning
• dependency scanning
• production/dev separation
• security event monitoring
• penetration testing

Enterprise roadmap

• SOC 2-ready architecture from Day 1
• SOC 2 Type I
• SOC 2 Type II
• ISO 27001 if demanded by market

PHI

Avoid PHI in V1 whenever possible.
Prefer properly de-identified commercial data.


---



## 27. Compliance & Governance


Knowledge Classes

• Public
• Approved Commercial
• Internal Confidential
• Medical
• Restricted/Prohibited

AI Controls

Material outputs should show:

• source
• source date
• confidence
• model/version
• approval state

Commercial agents must not autonomously create off-label promotional guidance.

Potential:

• medical question → approved Medical Information/MSL workflow
• adverse event → defined PV escalation
• product complaint → quality escalation

LaunchOS does not initially replace:

• MLR/PromoMats
• PV systems
• regulatory systems
• clinical systems
• validated electronic record systems

It consumes approval status and orchestrates dependencies.


---



## 28. UX / UI Principles


Do not build database navigation

Avoid primary navigation such as:

• Companies
• Products
• Tasks
• Tables
• Documents

Users think in decisions.

Primary Navigation


## 1. Command


## 2. Strategy


## 3. Readiness


## 4. Roadmap


## 5. Workstreams


## 6. Organization


## 7. Market & Customers


## 8. Field


## 9. Access


## 10. Partners


## 11. Decisions & Risks


## 12. Experts


## 13. Intelligence


## 14. Reports


## 15. Compliance & Governance


## 16. Security


## 17. Help & Academy


Persistent:
Ask LaunchOS


---



## 29. Help / Academy / AI Support


Help

How to operate the platform.

Commercialization Academy

Contextual definitions and guides for:

• TPP
• PDUFA
• NDA/BLA
• HCP
• HCO
• KOL
• IDN
• CSO
• FLSM
• KAM
• FRM
• MSL
• HUB
• 3PL
• GTN
• TRx / NRx
• reach/frequency
• payer mix
• formulary
• pull-through
• MLR
• launch archetype
• next best action

AI Support

Examples:

• Why is this workstream RED?
• Show the evidence.
• What is missing?
• Which expert should review this?
• What happens downstream if this slips?
• Explain this methodology.
• What do I need to decide?


---



## 30. Feature → Advantage → Benefit → Payoff


|Feature              |Advantage                      |Benefit                    |Payoff                               |
|---------------------|-------------------------------|---------------------------|-------------------------------------|
|Readiness Engine     |Structured launch methodology  |Finds gaps early           |Avoid late launch surprises          |
|Launch Archetype     |Tailored model                 |Avoid generic checklist    |Better allocation                    |
|Critical Path        |Dependencies visible           |Understand delay impact    |Protect timing                       |
|Gap Wizard           |AI recognizes unknowns         |Reduces false confidence   |Better decisions                     |
|Expert Network       |Expert judgment on demand      |Avoid permanent specialists|Lower SG&A                           |
|Rules Manager        |Encoded operating discipline   |Repeatability              |Higher launch quality                |
|Build/Buy/Rent       |Vendor-neutral architecture    |Avoid unnecessary build    |Capital preservation                 |
|Field Force Designer |Quantitative scenarios         |Right-size team            |Potential multimillion-dollar savings|
|RFP Engine           |Structured selection           |Better vendors             |Lower cost/risk                      |
|Organization Designer|Real hiring sequencing         |Fewer staffing delays      |Faster field readiness               |
|CRM Blueprint        |Model before tech              |Better implementation      |Higher adoption                      |
|Failure Lab          |Historical pattern intelligence|Detect risk sooner         |Faster intervention                  |
|Pressure Test        |Challenges assumptions         |Exposes blind spots        |Smarter launch                       |
|Friction Funnel      |Identifies conversion breaks   |Finds root cause           |Improves uptake                      |
|Command Center       |Decision-centric view          |Faster action              |Better launch control                |
|Role Dashboards      |Relevant context               |Less noise                 |Higher productivity                  |
|Automations          |Continuous monitoring          |Less manual PMO            |Smaller teams                        |
|Tenant Security      |Safe collaboration             |Enterprise trust           |Adoption                             |
|Expert Scoped Access |Minimum necessary disclosure   |Safer specialist use       |Expandable expert network            |
|Decision Ledger      |Institutional memory           |Preserve context           |Better governance                    |


---



## 31. Service-Led SaaS Model


Phase 1

80% service / 20% software

Sell:

• readiness diagnostic
• launch pressure test
• commercialization blueprint
• fractional launch office

Software captures the work.

Phase 2

60% service / 40% software

Templates, rules, workflows and experts become reusable.

Phase 3

40% service / 60% software

Client teams increasingly operate within LaunchOS themselves.

Mature

Platform + advisory + expert ecosystem + integration layer.


---



## 32. Initial Commercial Offers


Launch Health Check

Individual or enterprise-lite.

Target test:
$1,500–$3,000

Commercial Readiness Diagnostic

Manufacturer.

Target:
$20,000–$30,000

Commercialization Blueprint

Target:
$50,000–$100,000

Fractional U.S. Launch Office

Target:
$15,000–$35,000/month

LaunchOS Enterprise SaaS

Quote-based after value and data requirements are validated.

All pricing is a hypothesis until buyer validation.


---



## 33. Two-Person Company Operating Model


Founders should own:

Commercial / Launch Operator

• buyer relationships
• launch methodology
• field organization
• hiring
• leadership
• commercial strategy
• launch governance
• expert network

AI / GTM / Product Operator

• product
• AI
• analytics
• data integration
• research
• command center
• vendor/RFP system
• GTM
• platform operations

Do not employ full specialist functions initially.

Build an Expert Council:

• market access
• commercial operations
• sales
• distribution
• HUB/patient services
• medical affairs
• MLR/compliance
• analytics
• Veeva/CRM
• training
• incentives

Experts are advisors/subcontractors, funded by engagements when needed.


---



## 34. What We Do Not Build


Do not build:

• CSO workforce
• specialty distribution
• HUB
• specialty pharmacy
• medical affairs organization
• pharmacovigilance
• regulatory submission system
• MLR repository
• Veeva replacement
• IQVIA replacement
• MMIT replacement
• full proprietary claims data company
• generic AI marketing platform

Integrate established providers.


---



## 35. Build Waves


Wave 0 — Product Constitution & Research

Freeze:

• North Star
• methodology
• taxonomy
• tenancy
• roles
• security
• expert model
• rules model
• core UX

Build research corpus and source registry.


---


Wave 1 — Sellable Readiness Product

Build:

• tenant/auth
• company/product/launch setup
• readiness assessment
• Launch Archetype
• rule engine v1
• gap detection
• evidence
• simple Command Center
• report export
• expert request
• audit log

Goal:
sell the first paid diagnostic.


---


Wave 2 — Launch Operating System

Build:

• roadmap
• dependencies
• risks
• decisions
• expert network
• rules manager UI
• automations
• role dashboards
• AI Executive Brief
• Decision Ledger

Goal:
operate a real launch engagement in LaunchOS.


---


Wave 3 — Commercial Design

Build:

• organization designer
• hiring sequencing
• Build/Buy/Rent
• field force scenarios
• RFP engine
• CRM blueprint
• hiring/certification


---


Wave 4 — Intelligence & Failure Detection

Build:

• source registry
• public intelligence agents
• licensed data adapters
• HCP/HCO/payer objects
• Failure Lab
• Pressure Test
• Commercial Friction Funnel
• launch early-warning rules


---


Wave 5 — Field Performance

Build:

• Rep
• Manager
• Regional
• VP Sales
• CRM integration
• coaching
• call planning
• next-best-action


---


Wave 6 — Enterprise Hardening

• SSO
• SCIM
• SOC 2
• pen test
• retention policies
• DR exercises
• advanced audit/export
• enterprise integration governance


---



## 36. Recommended Technical Architecture


Initial asset-light stack:

Front End

• Next.js
• React
• TypeScript

Platform

• Vercel

Database / Auth / Storage

• PostgreSQL
• Supabase
• Row Level Security
• tenant-bound storage

AI

• provider-agnostic gateway
• structured outputs
• model routing by task
• tenant-aware RAG
• citations
• eval harness

Workflow

• durable event/job architecture
• explicit workflow state
• retry / exception handling

Analytics

• PostgreSQL initially
• warehouse connectors later
• custom decision-centric UI before generic BI

Security

• MFA
• RBAC
• audit logs
• tenant isolation tests
• managed secrets
• WAF
• CSP
• vulnerability scanning

Avoid premature microservices.


---



## 37. Product Quality / “Not a Toy” Acceptance Criteria


Do not call LaunchOS production-ready if:


## 1. AI can cross tenant boundaries.


## 2. Expert can see unrelated client data.


## 3. AI recommendation lacks evidence.


## 4. AI does not recognize missing information.


## 5. readiness score cannot explain itself.


## 6. rule history is not versioned.


## 7. critical path does not propagate change.


## 8. UI mirrors the database.


## 9. Command Center cannot prioritize decisions.


## 10. decisions lack assumptions/evidence.


## 11. tenant cannot export its data.


## 12. commercial/medical boundaries are ambiguous.


## 13. security audit trail is incomplete.


## 14. methodology has not been expert-reviewed.


## 15. product has not been used for real paid work.



---



## 38. Product Validation / 90%+ Confidence Gates


Research alone does not create 90% product-market confidence.

Required evidence:


## 1. 20 target buyer interviews.


## 2. 10 CEO/CCO/VP demos.


## 3. 5 target companies share current launch workflow.


## 4. 3 ask for proposals.


## 5. 1 paid Commercial Readiness engagement.


## 6. A real client uses LaunchOS weekly.


## 7. At least 5 modules replace actual work.


## 8. Evidence of willingness to pay recurring.


## 9. A real security/procurement review is survivable.


## 10. One launch team says it would not willingly go back to spreadsheets/PowerPoint for core launch governance.



---



## 39. Research / Methodology Development Loop


For every module:


## 1. Research institutional/public best practice.


## 2. Extract terminology, process, decisions, metrics.


## 3. Draft canonical model.


## 4. Review with senior operator.


## 5. Review with 2–3 relevant experts.


## 6. Reconcile disagreement.


## 7. Encode rules/ranges.


## 8. Back-test against historical launches.


## 9. Create AI evals.


## 10. Release methodology version.


## 11. Observe real client use.


## 12. Refine.


This loop is the protection against building a shallow product.


---



## 40. Reference Architecture — Conceptual


```text
                        LAUNCHOS
                           |
         +-----------------+-----------------+
         |                                   |
  Manufacturer Tenants                 Expert Network
         |                                   |
 Product / Indication / Launch         Scoped Engagement
         |
  +------+----------+-----------+-----------+
  |                 |           |           |
Strategy         Readiness    Execute    Intelligence
  |                 |           |           |
  +-----------------+-----+-----+-----------+
                          |
                    Decision Engine
                          |
              Rules + AI + Experts
                          |
                  Command Center
                          |
      +-------------------+-------------------+
      |                   |                   |
   Veeva/CRM          Licensed Data      Vendors/Partners
      |                   |                   |
   Field Data      IQVIA/Veeva/MMIT      CSO/HUB/3PL/etc.
```


---



## 41. Resource & Source Documentation


The following resources should seed the LaunchOS research corpus.
They are reference material, not content to copy verbatim.

A. Launch Strategy / First-Time Launchers

McKinsey — First-time launchers in the pharmaceutical industry

https://www.mckinsey.com/industries/life-sciences/our-insights/first-time-launchers-in-the-pharmaceutical-industry

Use for:

• first-time-launcher problem definition,
• insight breadth,
• early team building,
• vendor use,
• control tower / daily feeds,
• targeted commercial footprint.

McKinsey — Making the leap from R&D to fully integrated biotech

https://www.mckinsey.com/industries/life-sciences/our-insights/making-the-leap-from-r-and-d-to-fully-integrated-biotech-for-first-launch

Use for:

• commercial capability timing,
• capital efficiency,
• North Star,
• organizational ramp.

ZS — Pharma product launch success signals

https://www.zs.com/insights/pharma-product-launch-success-signals

Use for:

• early adoption signals,
• breadth,
• return writing,
• depth,
• launch-room diagnostic loop.

ZS — Pharma product launch excellence: digital success strategies

https://www.zs.com/insights/pharma-product-launch-excellence-digital-solutions

Use for:

• launch archetypes,
• AI-enabled launch hub,
• launch-specific investment.

ZS — U.S. emerging pharma biotech first launch analysis

https://www.zs.com/insights/us-emerging-pharma-biotech-first-launch-analysis

Use for:

• first-launch case patterns,
• launch archetype/failure research.

Trinity Life Sciences — Launch Excellence

https://trinitylifesciences.com/services/launch-excellence/

Use for:

• commercialization readiness,
• launch plan architecture,
• PMO / readiness concepts.

Herspiegel Consulting

https://herspiegel.com/

Use for:

• commercialization planning,
• product launch,
• market access,
• operational launch support.


---


B. Commercial Intelligence / AI / Decision Systems

PwC — Decision-centric commercial intelligence

https://www.pwc.com/us/en/industries/health-industries/library/commercial-analytics-in-pharma.html

Use for:

• decision-centric architecture,
• moving beyond observational dashboards,
• next-best-action decision logic.

BCG — Healthcare Commercial AI

https://www.bcg.com/x/product-library/healthcare-commercial-ai

Use for:

• commercial AI,
• next-best-action,
• field productivity,
• AI-enabled commercial execution.

Deloitte — AI and biopharma sales productivity

https://www.deloitte.com/us/en/industries/life-sciences-health-care/blogs/health-care/can-ai-help-biopharma-sales-reps-become-more-effective.html

Use for:

• field copilot,
• rep prep/admin automation,
• coaching and productivity use cases.

TCS ADD AgentHub

https://www.tcs.com/who-we-are/newsroom/press-release/tcs-launches-agentic-ai-platform-transform-drug-development

Use for:

• role-based agents,
• auditability,
• human + AI operating model,
• governed agent architecture.

SignalFire — AI agents in biopharma

https://www.signalfire.com/blog/ai-agents-in-biopharma-end-outsourced-drug-development

Use for:

• service-to-software thesis,
• expert + agent operating model,
• AI-native outsourcing.


---


C. Commercialization / Execution Benchmarks

IQVIA — Emerging Biopharma

https://www.iqvia.com/solutions/industry-segments/emerging-biopharma

Use for:

• emerging-biopharma commercialization scope,
• analytics modules,
• flexible commercialization capabilities.

IQVIA — Claims data into launch insights

https://www.iqvia.com/library/case-studies/emerging-biopharma-company-turns-patient-claims-data-into-launch-insights

Use for:

• prelaunch analytics use cases,
• patient/physician/payer insights.

Syneos Health — Full-Service Commercialization

https://www.syneoshealth.com/solutions/commercial-delivery/full-service-pharma-commercialization-syneos-health

Use for:

• execution partner capability map,
• outsourced commercialization,
• first-launch support.

Inizio Engage

https://inizioengage.com/

Use for:

• contract field teams,
• hybrid sales,
• KAM,
• engagement models.

EVERSANA — Launch a Product

https://www.eversana.com/our-expertise/commercialization-models/launch-a-product/

Use for:

• integrated commercialization alternative,
• outsourcing archetype.

Indegene — Invisage

https://www.indegene.com/news/indegene-launches-invisage-an-ai-enabled-hybrid-omnichannel-sales-and-marketing-platform-to-improve-hcp-impact-for-life-sciences-companies

Use for:

• omnichannel field/digital orchestration,
• HCP engagement architecture.


---


D. Distribution / Patient Services

McKesson Biologics Hub Services

https://biologics.mckesson.com/hub-services/

Use for:

• HUB service capabilities,
• patient access,
• specialty launch workflow.

McKesson InspiroGene

https://www.mckesson.com/about-us/newsroom/press-releases/2024/mckesson-launches-inspirogene-a-dedicated-business-to-guide-and-support-the-commercialization-of-cell-and-gene-therapies/

Use for:

• 3PL,
• specialty distribution,
• specialty pharmacy,
• integrated launch logistics.

Cencora — Drug Commercialization Guide

https://www.cencora.com/resources/pharma/guide-to-drug-commercialization

Use for:

• commercialization decisions,
• distribution,
• patient support,
• launch journey.

Cencora — RFP timing / specialty distribution

https://www.cencora.com/resources/pharma/how-to-optimize-your-rfp-process-for-specialty-distribution-insights-from-experts

Use for:

• vendor RFP timing,
• distribution requirements.


---


E. Data Vendors / APIs

IQVIA OneKey

https://www.iqvia.com/solutions/commercialization/data-and-information-management/onekey/onekey-hcp-reference-data

Use for:

• HCP/HCO master,
• affiliations,
• identity,
• channel preference.

Veeva Compass

https://www.veeva.com/products/veeva-compass/

Products:

• Compass Patient
• Compass Pathway
• Compass Prescriber
• Compass National

Use for:

• patient journey,
• Rx/procedure,
• HCP/HCO projections,
• access friction,
• launch performance.

MMIT API

https://api.mmitnetwork.com/

Use for:

• formulary coverage,
• plans,
• restrictions,
• payer/access intelligence.

Definitive Healthcare

https://www.definitivehc.com/

Use for:

• HCP/HCO,
• claims,
• affiliations,
• referrals,
• commercial intelligence,
• prelaunch planning.

Other vendors to research by use case:

• Komodo Health
• H1
• PurpleLab
• Clarivate


---


F. Academic / Training Sources

MIT OpenCourseWare — Science and Business of Biotechnology

https://ocw.mit.edu/courses/15-480x-the-science-and-business-of-biotechnology-fall-2021/

Use for:

• biotech economics,
• company formation,
• drug development context,
• commercialization foundations.

Harvard — Commercial Functions in Biotechnology and Pharmaceutical Companies

https://coursebrowser.dce.harvard.edu/course/commercial-functions-in-biotechnology-and-pharmaceutical-companies/

Use for:

• lifecycle commercial functions,
• marketing,
• analytics,
• sales,
• launch decisions.

Stanford M-TRAM

https://med.stanford.edu/m-tram/academics/capstone-project.html

Use for:

• late translation,
• medical adoption,
• commercialization,
• health economics/reimbursement.


---



## 42. Open-Source Repository Appendix



## 1. Databricks Pharmaceutical Next Best Action


https://github.com/databricks-industry-solutions/next-best-action-hls

Purpose:

• pharma HCP next-best-action demonstration,
• channel priorities,
• historical HCP engagement,
• vendor constraints,
• touchpoint distribution,
• optimization.

Potential LaunchOS use:

• reference architecture for HCP action engine,
• not direct production adoption without review.


---



## 2. Google OR-Tools


https://github.com/google/or-tools

License:
Apache 2.0

Capabilities:

• mixed/linear optimization
• assignment
• routing
• knapsack
• constraint programming

Potential LaunchOS use:

• territory optimization,
• field force allocation,
• workload balancing,
• manager/rep assignment,
• scenario planning.


---



## 3. PyMC-Marketing


https://github.com/pymc-labs/pymc-marketing

Capabilities:

• Bayesian marketing mix
• CLV
• customer choice
• budget allocation
• uncertainty

Potential LaunchOS use:

• resource allocation,
• scenario modeling,
• marketing effectiveness,
• launch forecasting components.


---



## 4. CausalLift


https://github.com/Minyus/causallift

License:
BSD 2-Clause

Purpose:

• uplift / causal targeting.

Potential LaunchOS use:

• distinguish high-propensity accounts from accounts whose behavior is more likely to change because of intervention.


---



## 5. OpenAI Knowledge Retrieval


https://github.com/openai/openai-knowledge-retrieval

Capabilities:

• ingestion
• retrieval
• citations
• multiple vector stores
• evaluation harness
• grounded knowledge application

Potential LaunchOS use:

• tenant-scoped knowledge vault,
• commercial academy,
• evidence-grounded agents,
• evaluation patterns.


---



## 6. LangGraph RAG Research Agent Template


https://github.com/langchain-ai/rag-research-agent-template

Status:
Archived read-only as of March 2026; use as reference rather than core dependency.

Potential LaunchOS use:

• research planning pattern,
• parallel retrieval,
• evidence synthesis.


---



## 43. Repository Due-Diligence Rules


Before using any open-source code:


## 1. verify license,


## 2. verify current maintenance,


## 3. security scan,


## 4. dependency review,


## 5. no production dependency on archived repo,


## 6. isolate sample/demo logic,


## 7. write our own tests,


## 8. ensure tenant security requirements,


## 9. validate commercial data rights,


## 10. document provenance.



---



## 44. Initial Research Backlog


Launch Failure Lab

Research:

• Exubera
• Zulresso
• Leqembi
• other underperforming first launches
• successful turnarounds
• access-driven failures
• site-of-care failures
• field-force mis-sizing
• supply/distribution failures

First-Time Launcher Benchmark

Research:

• successful Korean U.S. launches
• Japanese U.S. entrants
• European first launches
• emerging U.S. biotech launches

Commercial Hiring

Develop:

• executive sequencing
• RVP/RD/FLSM sequencing
• rep recruiting
• manager span
• hiring lead time
• certification
• CSO vs internal decision

Data Prescription

Map launch archetype → minimum viable data package.

Example categories:

• claims
• HCP/HCO
• formulary/access
• CRM
• distribution
• HUB
• specialty pharmacy


---



## 45. Immediate Next Steps


Product


## 1. Freeze this blueprint as Product Constitution v1.


## 2. Create detailed PRD for Wave 1.


## 3. Create tenant/security threat model.


## 4. Create Rules Manager schema.


## 5. Create Readiness ontology.


## 6. Create Expert Engagement PRD.


## 7. Create Command Center wireframes.


## 8. Create AI evidence/confidence standard.


## 9. Create data-source registry.


## 10. Create audit-event specification.


Methodology


## 11. Convert public launch frameworks into canonical ontology.


## 12. Conduct structured operator knowledge extraction.


## 13. Recruit expert council.


## 14. Have experts critique modules.


## 15. Create versioned methodology registry.


Validation


## 16. Build First Launch Radar.


## 17. Identify first 100–200 prospects.


## 18. Interview 20 buyers.


## 19. Demo Command Center prototype to 10.


## 20. Sell first readiness engagement before overbuilding.



---



## 46. Final Definition


> **LaunchOS is an AI-native, multi-tenant pharmaceutical commercialization operating system that helps manufacturers and commercial leaders design, build, pressure-test, execute, monitor, and improve U.S. product launches. It combines verified launch methodology, expert judgment, deterministic rules, role-specific workflows, commercial intelligence, client-authorized data, and AI decision support in one secure operating environment.**

Primary wedge:
first U.S. launches for emerging and global manufacturers.

Expansion:
traditional pharma launch leaders and field leadership.

Core promise:

> **Know what is missing. Know what matters. Know what to do next — before the launch tells you too late.**


---

# PART II — New Sections (47–63), Added in v2.0

*Each section below names the v1 gap ID(s) it resolves and cross-references the sections it depends on.*


---

## 47. Competitive Landscape, Whitespace & Positioning

**Purpose.** Establish who already occupies the launch-commercialization market, which LaunchOS capabilities face real competition, and the one position that is structurally defensible. Source of record: `research/competitive_landscape.md` (2026-08-28). Consultancy pricing is uniformly non-public; where not verified, it is flagged, not estimated.

**Headline verdict.** "AI + launch methodology" is already contested by every major consultancy. The defensible frame is the **neutral cross-stack decision & arbitration layer**: LaunchOS makes build/buy/rent decisions, orchestrates the Veeva/IQVIA/CSO/hub stack, and runs failure-mode detection — without selling any of the execution services it arbitrates. No incumbent can copy this without attacking its own P&L.

────────

### 47.1 Competitor Map — Consultancies & Full-Service Commercializers

| Competitor | First-launcher offering | Owned technology | Structural vulnerability to LaunchOS |
|---|---|---|---|
| **IQVIA (EBP practice)** | Asset Maximizer framework; 1,200+ EBP clients and 650+ first-time launchers since 2023 [Verified: https://www.iqvia.com/solutions/industry-segments/emerging-biopharma] | OCE+ with Next Best engine; AI agents incl. Global Market Insights agent | Sells data + field + hub services → structurally conflicted as neutral arbitrator. 800-lb gorilla in LaunchOS's exact segment; must be managed, not fought (§47.4) |
| **EVERSANA** | Complete Commercialization — acts as entire commercial arm on risk/revenue share; claims 25% more capital-efficient, 50% faster; cites $247M avg launch cost [Verified: https://www.eversana.com/insights/capital-time-efficient-commercialization/] | ACTICS, NAVLIN, ORCHESTRATE AI suite | Competes for the *whole budget*, not a layer. Cannot neutrally arbitrate vendors it competes with |
| **ZS** | Launch analytics; supports ~80% of U.S. biotech/pharma launches annually [Verified: https://zoomrx.com/blog/zs-associates-vs-zoomrx-pharma-launch-tracking] | ZAIDYN — 50+ AI products; agentic ZAIDYN Medical/Content (May 2026); Salesforce Agentforce integration [Verified: https://www.zs.com/about/newsroom/zs-launches-agentic-ai-products-zaidyn-medical-and-zaidyn-content] | Strongest tech competitor. Optimizes field/engagement, not launch-readiness decisioning or vendor arbitration; effective floor ~$250M-revenue companies [Inference] |
| **Trinity Life Sciences** | Launch Excellence COE; 50+ launches/yr [Verified: https://trinitylifesciences.com/services/launch-excellence/] | Launch Accelerator 2.0 — benchmark-based planning tool on TGaS LEAD database [Verified: https://trinitylifesciences.com/media-center/news/trinity-life-sciences-introduces-launch-accelerator-2-0-the-first-and-only-benchmark-based-launch-tool-for-pharma/] | Accelerator is a PM tool, not a decision engine; no build/buy/rent arbitration; sold with consultants attached |
| **Syneos Health** | 700+ launches; launch strategy, scenario planning, launch office design [Verified: https://www.syneoshealth.com/solutions/commercial-delivery/drug-launch-strategy-services] | Kinetic commercial intelligence engine | CRO/CSO economics dominate; Kinetic optimizes engagement, not launch governance |
| **Putnam / Inizio** | Launch strategy; Ignite advisory | Launch Elevate, Navigator AI, STEM AI [Reported — source of record §1] | Inizio Engage conflict — sells field teams a neutral layer would arbitrate |
| **ClearView** | Launch Success Platform; readiness pressure testing [Verified: https://clearviewhcp.com/services/launch-commercialization/] | CATALYST post-launch optimization | Premium-priced for top-20 pharma; thin emerging-biotech focus; no product |
| **Herspiegel** | 150+ launches [Reported — source of record §1]; startup first-launch practice | None material — PE-backed roll-up | Pure services; no platform moat |
| **Axtria** | **AI-Powered Launch Excellence for Emerging Pharma (Nov 13, 2025)** — consulting + data fabric + autonomous agents [Verified — primary URLs catalogued in source of record, competitive_landscape.md §2] | DataMAx, SalesIQ, CustomerIQ, InsightsMAx.ai; $240M Kedaara investment (Sept 2025) | Closest software-side competitor to LaunchOS's exact segment. But commercial-ops/data-fabric-centric — not a readiness rules engine, vendor arbitrator, or failure lab |
| **Boutiques** (Kx, Blue Matter, Deallus, Prescient) | Project-basis launch strategy/CI | Deallus absorbed into GlobalData (Dec 2024) [Reported — source of record §1] | Capacity-constrained, project-only, or captured by a data vendor |

**Cross-cutting pattern [Verified across §1 of research]:** every consultancy monetizes people attached to a framework. Their tools exist to make services stickier. None sells a standalone, continuously-learning decision system, and none will arbitrate against its own execution business.

### 47.2 Competitor Map — AI / Software Vendors

| Vendor | What it actually does | Overlap with LaunchOS |
|---|---|---|
| **Veeva AI** | AI Agents GA Dec 2025 (Free Text, Voice, Pre-call, Content); Link Key People at 13 of top 20 biopharmas (Feb 2026) [Verified — primary URLs catalogued in source of record, competitive_landscape.md §2] | Compresses task-level "command center" value inside CRM. No launch methodology, vendor orchestration, or cross-stack arbitration. Validates "we don't replace Veeva" |
| **Salesforce Life Sciences Cloud / Agentforce** | Agent-first HCP engagement GA Oct 2025; Agentforce $2/conversation, $125/user/mo add-on [Verified — primary URLs catalogued in source of record, competitive_landscape.md §2] | Platform threat only if a first-launcher skips Veeva; zero launch methodology content |
| **Komodo Health** | Healthcare Map + Brand Performance; ~$200M ARR (2024) [Verified — primary URLs catalogued in source of record, competitive_landscape.md §2] | Data-up-stack threat to post-launch trajectory analytics; does not do pre-launch decisioning |
| **Aktana → PharmaForceIQ** | NBA/optichannel engagement; trade sale Jan 2026 [Verified: https://www.mmm-online.com/news/pharmaforceiq-scoops-up-customer-engagement-firm-aktana/] | Cautionary signal: 12 years, 200M data points, Genentech/Sanofi/Abbott clients — ended in trade sale. Point solutions get absorbed |
| **ODAIA, WhizAI, Indegene, Sorcero, H1** | Function-specific AI: targeting, insight retrieval, omnichannel engagement, medical-affairs agents, KOL data | Fragmented by function; none owns cross-functional launch decision/governance |

**Pattern [Verified]:** the software layer is fragmenting by *function*. Nobody owns the *cross-functional launch decision/governance* function. The gap is real but narrowing — Axtria and IQVIA are walking toward it from the data side.

────────

### 47.3 Whitespace Verdict per LaunchOS Capability

| LaunchOS capability | Verdict | What exists today | LaunchOS implication |
|---|---|---|---|
| **Readiness engine** | **Contested-weak** | Trinity Accelerator (benchmark gap/risk), Syneos Launch Readiness Reviews, TRiBECA SmartLaunch SaaS | Open flank: all are project tooling or consultant-delivered. Win with a continuously-updating, signal-driven *score*, not an assessment event |
| **Launch archetypes** | **Partially contested** | TGaS LEAD and IQVIA data are the raw material | Nobody sells archetype-driven auto-configuration of a launch plan as a product. Ship it |
| **Build/buy/rent engine** | **Genuinely unoccupied** | Every incumbent sells one side (EVERSANA: rent everything; CSOs: rent field; Veeva: buy software) | **Sharpest wedge. Lead with it in every deal** |
| **Expert network, scoped access** | **Contested at edges, open at core** | H1/Veeva Link cover identification; GLG-type networks cover calls | Nobody embeds scoped expert access *inside* a launch decision workflow |
| **Failure lab / failure detection** | **Mostly unoccupied** | Komodo Brand Performance and ZoomRx detect underperformance *post-launch*; Deallus wargaming is consultant-delivered, competitive-only | Nobody sells pre-launch failure-mode simulation across readiness/access/field/vendor dimensions |
| **Pressure test** | **Contested** | ClearView and Trinity both "pressure test" readiness | Differentiate on: continuous, AI-run, benchmark-quantified — not a 6-week consulting project |
| **Commercial friction funnel** | **Unoccupied as named construct** | Components exist (payer-coverage stats, Veeva Pulse access data) | Nobody assembles access→awareness→adoption→adherence into one instrumented funnel tied to decisions. Own the construct |

────────

### 47.4 Sharpened Positioning

**The frame that survives contact with the market:**

> LaunchOS is the neutral decision and arbitration layer that sits above Veeva, IQVIA, CSOs, hubs, and distributors — deciding what the stack should do, auditing what it delivers, and detecting failure modes before the quarter closes. It sells no data, no field teams, no hub services, and no CRM.

**Explicit beachhead rule.** Assume **IQVIA is already in the account** (650+ first-time launchers since 2023 [Verified: https://www.iqvia.com/solutions/industry-segments/emerging-biopharma]). Do not position against IQVIA; position as **the layer that manages IQVIA and all other vendor spend** — scope discipline, deliverable audits, renewal arbitration, redundancy elimination. Managing-IQVIA is a winnable frame; displacing-IQVIA is not. Same rule applies to EVERSANA and any CSO: LaunchOS arbitrates them, never competes with them for execution scope.

**Mechanisms that make the frame credible:**

- **Published arbitration criteria.** Vendor scorecards and selection logic are visible to the buyer — the artifact no conflicted incumbent can produce. Owner: Launch Operator. Acceptance: criteria doc ships with every build/buy/rent output.
- **No referral economics, contractually.** Zero placement fees, referral fees, or reseller margin from any arbitrated vendor; disclosed in every MSA. Owner: founders. Acceptance: contract clause present in 100% of MSAs.
- **Read-only integration posture.** Pull from Veeva/Salesforce/OCE (Veeva Direct Data API); never compete to be the system of engagement. Owner: AI/Product Operator. Acceptance: live read-only CRM integration in the first three paid engagements.
- **Buyer-side pricing only.** LaunchOS is paid by the manufacturer, priced as displacement of consulting hours and redundant tools — not as a new line item (§48.3, §50.7).

### 47.5 Adjacent Threats & Required Responses

| Threat | Mechanism | LaunchOS response (owner, trigger, acceptance) |
|---|---|---|
| **CSO platforms given away free** (Amplity AnswerY, Inizio Navigator AI, Syneos Kinetic) | Bundle the "decision layer" to sell bodies | Counter with the neutrality artifact: captive layers always recommend the parent's field teams. Trigger: any deal where a CSO platform is in the evaluation. Acceptance: win/loss note documents whether neutrality was the deciding factor |
| **Data vendors moving up-stack** (IQVIA GMI agent, Komodo Brand Performance, GlobalData+Deallus) | Data + CI + AI decision support sold as launch strategy | Stay on the decision/execution-governance side; license data, never rebuild it. Trigger: data vendor announces launch-decisioning product. Acceptance: integration or partnership response within 60 days |
| **CRM agents compress command-center value** (Veeva AI, Agentforce) | Task-level dashboards become free inside CRM | LaunchOS tells the buyer *what the stack should be doing*, not another dashboard. Deprioritize any feature a CRM agent plausibly ships within 12 months. Owner: AI/Product Operator. Acceptance: quarterly feature-overlap review against Veeva/Salesforce release notes |
| **Big consultancies productizing methodology** (Trinity Accelerator, ZAIDYN, Axtria emerging-pharma) | Methodology-as-software race underway | LaunchOS is late to "methodology," early to "neutral decision layer." Do not fight on methodology breadth; fight on arbitration + continuous instrumentation |

────────

### 47.6 Moat: 7 Moves Translated into Build & Contract Actions

1. **Own the cross-launch benchmark dataset through delivery, not purchase.** Trinity's moat is the TGaS LEAD database built over decades. *Action:* instrument every client launch (readiness scores, vendor selections, outcomes vs. forecast); every service-led MSA includes anonymized benchmark-rights language from engagement #1. Acceptance: benchmark clause in 100% of MSAs; ≥10 instrumented launches before SaaS pricing is finalized.
2. **Codify methodology as executable rules, not decks.** *Action:* rules engine ships as archetype → required capabilities → vendor shortlist → readiness thresholds; consultancies structurally won't build this because it cannibalizes billable hours. Acceptance: a blueprint deliverable generated ≥70% from rules/templates by Wave 3, not hand-written.
3. **Monetize neutrality, never referrals.** *Action:* buyer-side fees only; arbitration criteria published; referral-fee prohibition in MSA (§47.4). IQVIA, EVERSANA, Syneos, Inizio cannot copy this without attacking their own P&L.
4. **Network effects via scoped-access expert network.** *Action:* log which expert moved which launch decision, in which context; H1 and Veeva Link have profiles — neither has *decision-context* data. Acceptance: expert-matching dataset grows with every engagement; match quality reviewed quarterly.
5. **Switching costs through the launch system-of-record.** *Action:* living launch plan, readiness history, vendor scorecards, and decision log persist across the full 24-month launch arc; extraction cost is the moat. Acceptance: decision-ledger retention and export terms defined in MSA; churn interview protocol for any non-renewal.
6. **Failure-lab data as proprietary corpus.** *Action:* structured registry of failure modes mapped to early indicators; publish aggregate findings to own the category narrative (consultancies publish anecdotes; LaunchOS publishes incidence). Acceptance: first public failure-index report after ≥10 instrumented launches.
7. **Service-led now, instrumented for SaaS transition.** ZAIDYN is the productization of 40 years of ZS analytics; LaunchOS compresses that into its first 24 months. *Action:* every founder-delivered engagement must produce reusable templates, rules, or benchmarks that measurably reduce marginal delivery cost. Acceptance: delivery-hours-per-engagement declines wave over wave (tracked in §59 KPIs).

────────

### 47.7 Where v1 Assumptions Were Weak — Corrections

1. **"Consultancies can't build this" is wrong — they are already building pieces.** Axtria shipped an emerging-pharma AI launch offering (Nov 2025); ZS has 50+ ZAIDYN products; Trinity has a benchmark tool. *Correction:* the window is the neutral decision layer, not "AI + launch methodology." v1 §3/§5 positioning language is sharpened accordingly in §47.4.
2. **IQVIA's grip on the exact target segment was underweighted.** 650+ first-time launchers since 2023 [Verified: https://www.iqvia.com/solutions/industry-segments/emerging-biopharma]. *Correction:* beachhead assumes IQVIA is incumbent in the account; the pitch is managing/arbitrating IQVIA spend, not replacing it. v1's "does not replace IQVIA" (§1) was defensive; v2 makes it the sales strategy.
3. **Buyers want fewer vendors, not more.** $247M average launch cost [Verified: https://www.eversana.com/insights/capital-time-efficient-commercialization/]; life-sciences VC fundraising at decade lows through H1 2025 (PitchBook, via research §6). *Correction:* LaunchOS must price and sell as *displacement* of consulting hours and redundant tools, never as an addition.
4. **Pricing opacity cuts both ways.** No consultancy publishes launch-readiness pricing; "cheaper than X" is not a credible anchor without primary buyer research. *Correction:* anchor pricing on outcome (forecast-hit rate, vendor-spend savings) and validate willingness-to-pay via 10–15 expert-network interviews before publishing any comparative price claim (§50).
5. **A two-founder, service-led model collides with a land-grab moment.** Aktana — 12 years, 200M data points, blue-chip clients — ended in trade sale [Verified: https://www.mmm-online.com/news/pharmaforceiq-scoops-up-customer-engagement-firm-aktana/]. *Correction:* speed to benchmark data and referenceable launches outranks feature breadth; the build sequence in §35/§60 is subordinate to the instrumentation moat (move #1), not parallel to it.

────────

**What this section does not settle.** TRiBECA SmartLaunch depth, GlobalData's post-Deallus roadmap, and European-first entrants are under-researched (flagged in research methodological notes). Consultancy engagement pricing remains non-public — obtain via the buyer-interview program in §50 before any price anchoring.


---

## 48. Market Sizing & Demand Evidence

**Purpose.** Size the first-time-U.S.-launcher market defensibly, document the failure problem LaunchOS is priced against, and state the revenue math by phase. Source of record: `research/market_evidence.md` (2026-08-28). Labeling convention throughout: **[Verified]** = primary/named-analyst source with URL; **[Estimate]** = triangulated or single-secondary-source; **[Inference]** = analytical extension. All LaunchOS-model numbers are estimates by construction.

**Headline verdict.** The customer exists, is numerous, is funded (unevenly), and fails at exactly the task LaunchOS targets. The service-led phase is a **wedge and evidence engine, not venture-scale alone** (~$13M/yr TAM); the defensible prize is the SaaS/expert-network layer — near-term SaaS TAM ~$15–75M/yr, reaching **~$100M+ ARR potential at maturity only via the established-pharma expansion that roughly triples TAM** (§48.5 sensitivity 4). LaunchOS pricing hypotheses sit at **0.03–0.5% of a launch SG&A budget** — conservative, defensible, and cheap relative to the documented cost of failure.

────────

### 48.1 How Many First-Time U.S. Launchers? — Counts by Definition

The count depends entirely on definition. Each definition feeds a different calculation; mixing them is the classic TAM error.

| Definition | Annual count | Source | Feeds |
|---|---|---|---|
| FDA CDER novel approvals (base rate) | ~48/yr (2020–25 avg); 10-yr rolling avg 46.5 at end-2024 | [Verified: FDA](https://www.fda.gov/drugs/novel-drug-approvals-fda/novel-drug-approvals-2025); [Nature](https://www.nature.com/articles/d41573-025-00001-5) | Denominator for all shares |
| **Strict first-ever U.S. launch** | **~8–9/yr** — ZS 15-yr census: 124 first launches 2011–2025; 87% go-it-alone; 56% rare disease | [Verified: ZS](https://www.zs.com/insights/us-biotech-and-pharma-first-launch-insights) | **Beachhead SOM math** — the true first-timer cohort |
| First-time drugmakers, recent flow | **~11/yr** — Trinity: 44 first-time launches 2020–2023 | [Verified: FiercePharma/Trinity](https://www.fiercepharma.com/pharma/drugs-unmet-needs-and-those-experienced-companies-have-best-chance-successful-launches) | Cross-check on strict count |
| **EBP-filed launches (broad)** | **~25/yr** — IQVIA: 126 of 273 U.S. NAS launches 2020–24 were EBP-filed (~46%); EBPs originated 85% of 2024 NAS | [Verified: IQVIA Institute](https://www.iqvia.com/insights/the-iqvia-institute/reports-and-publications/reports/expanding-options-for-emerging-biopharma-in-the-us-a-decade-of-change) | **SAM math** — broader "no prior U.S. commercial infrastructure" pool |
| Ex-U.S. direct entrants | ~2–3/yr — ZS: 31 over 15 yrs (24 Europe, 5 Asia, 2 Australia) | [Verified: ZS](https://www.zs.com/insights/us-biotech-and-pharma-first-launch-insights) | International SAM (KR/JP/EU motion, §49/§63) |
| **Active planning cohort** (adds 18–24-mo pre-approval planners + CRL resubmissions; 43 CRLs in 2024) | **~40–60/yr** | [Inference] from above + [IQVIA R&D 2025](https://makingpharmaindustry.it/wp-content/uploads/2025/03/iqvia-institute-rd-trends-2025-forweb.pdf) | **Pipeline math** — who can buy a diagnostic this year |

**Rule for all downstream math:** strict count (8–12/yr) → SOM realism; broad EBP count (~25/yr) → SAM; planning cohort (~40–60/yr) → near-term pipeline. Established-pharma launch leaders (~60% of ~48 U.S. launches/yr) are expansion-market TAM only, per v1 §4.

### 48.2 The Failure Problem — Underperformance Statistics with Named Sources

| Source | Finding | URL |
|---|---|---|
| **McKinsey (2014)** | ~2/3 of new drugs miss first-year consensus; 78% of year-1 misses also miss year 2; 70% miss year 3 | https://www.mckinsey.com/~/media/McKinsey/Industries%20Healthcare%20Systems%20and%20Services/Our%20Insights/The%20secret%20of%20successful%20drug%20launches/The_secret_of_successful_drug_launches.pdf |
| **Bain (2017)** | ~50% of launches underperformed expectations over 8 years; >25% failed to reach even 50% of external forecasts | https://www.bain.com/insights/how-to-make-your-drug-launch-a-success/ |
| **Deloitte (2019)** | 36% of 149 U.S. launches missed consensus; >1/3 of year-1 misses never recovered; 50% of failures attributed to limited market access | via OUP white paper (secondary host — verify against the Deloitte original before external use): https://www.brafton.com/wp-content/uploads/2025/05/White-paper-for-oxford-university-press.pdf |
| **ZS (2024)** | ~60% of 2019–2021 launches missed expectations; 40–50% of 2022–2023 still underperforming | https://www.zs.com/insights/pharma-product-launch-excellence-digital-solutions |
| **Trinity (2024)** | 50% of the 2023 U.S. launch class underperformed first-year forecasts | https://www.fiercepharma.com/pharma/drugs-unmet-needs-and-those-experienced-companies-have-best-chance-successful-launches |
| **McKinsey (2024) — first-timers specifically** | Only **20–30% of first-time launchers beat expectations vs. 40–50% for established players** | https://www.mckinsey.com/industries/life-sciences/our-insights/small-but-mighty-priming-biotech-first-time-launchers-to-compete-with-established-players |
| **IQVIA (2022)** | Median year-2 sales of EBP-originated drugs were **7x higher when launched by big companies** than by EBPs alone | https://www.iqvia.com/insights/the-iqvia-institute/reports-and-publications/reports/emerging-biopharma-contribution-to-innovation |
| **IQVIA (2025)** | Only 1 in 10 recent launches exceeded $100M in year 1, down from 1 in 5 | via secondary blog — **[Estimate; verify against primary IQVIA report before external use]** |

**Cost of failure [Verified]:** misses compound — trajectory is set at launch and persists (McKinsey, Bain). Pfizer Exubera: $12M sales → $2.8B pre-tax write-off (https://www.pfizer.com/news/press-release/press-release-detail/pfizer_reports_third_quarter_2007_results_reconfirms_2007_and_2008_revenue_and_adjusted_diluted_eps_1_guidance). bluebird bio: $4.5B accumulated deficit → sold for ~$29M upfront (https://medcitynews.com/2025/02/bluebird-bio-acquisition-gene-therapy-private-equity-carlyle-sk-capital-blue-pfizer-pfe/). Trinity on first-timers: mid/large pharma can wait out a slow launch; first-launch biotechs downsize or fold.

### 48.3 Buyer Budget Evidence

**What first-timers spend [Verified]:**

- McKinsey (2024): first-time launchers invest **$80–100M/year in SG&A from launch year onward**; launch beaters invest ~1.5x what underperformers invest (https://www.mckinsey.com/industries/life-sciences/our-insights/small-but-mighty-priming-biotech-first-time-launchers-to-compete-with-established-players).
- **Madrigal 10-K ramp:** SG&A **$108.1M (2023) → $435.1M (2024)** (+$327M in launch year) (https://ir.madrigalpharma.com/news-releases/news-release-details/madrigal-pharmaceuticals-reports-fourth-quarter-and-full-year).
- Sage: $88.5M SG&A in a single quarter (Q3 2019) against $1.5M Zulresso revenue (https://www.sec.gov/Archives/edgar/data/1597553/000119312519289188/d830791dex991.htm). SK Biopharma: ~$350M SG&A budgeted 2025 (https://www.koreabiomed.com/news/articleView.html?idxno=26517).
- Field-force scale (ZS 2026): oncology/immunology first launches deploy 40–85 reps; rare disease 20–40; CNS 200–300+ [Verified: https://www.zs.com/insights/us-biotech-and-pharma-first-launch-insights].

**What they pay consultancies [Estimate — single secondary source, directional only]:** Tier-1 specialists $500K–$2M per launch; broad consultancies $1M–$5M+ per integrated launch engagement; $3–6M launch sprints (RxAlmanac 2026: https://rxalmanac.com/articles/market-access-consulting/). Not audited — validate via buyer interviews (§50).

**Pricing inference [Inference]:** v1 §32 hypotheses (diagnostic $20–30k; blueprint $50–100k; fractional office $180–420k/yr) = **0.03–0.5% of an $80–100M annual launch SG&A budget** and 3–25% of one incumbent engagement. The risk is underpricing enterprise SaaS, not overpricing services.

### 48.4 Case Library — 13 Launches, 2022–2026 (plus historic controls)

| # | Company / Product | Model | Outcome | Lesson for LaunchOS |
|---|---|---|---|---|
| 1 | Madrigal / Rezdiffra (MASH) | U.S. EBP, first launch | Beat consensus every quarter; FY2025 $958.4M (~$1B first full year) [Verified: [IR](https://ir.madrigalpharma.com/static-files/b5e4ac70-1e1b-4d55-b999-ed7200873384)] | Veteran launch leadership pre-hired; capital raised ahead; narrow prescriber universe |
| 2 | Verona / Ohtuvayre (COPD) | UK entrant, U.S. direct | $42.3M 2024 → $102.9M Q2-25, first profit; acquired by Merck ~$10B (Oct 2025) [Verified: [Merck PR](https://www.merck.com/news/merck-to-acquire-verona-pharma-expanding-its-portfolio-to-include-ohtuvayre-ensifentrine-a-first-in-class-copd-maintenance-treatment-for-adults-and-expected-to-drive-growth-into-the-next-dec/)] | Tight prescriber targeting; launch execution = exit value |
| 3 | argenx / Vyvgart (gMG) | European EBP, global self-launch | FY2025 $4.2B (+90%); first operating profit $1.05B [Verified: [FiercePharma](https://www.fiercepharma.com/pharma/omg-argenx-scores-again-vyvgart-ocular-myasthenia-gravis)] | European EBP can self-commercialize in rare/specialty |
| 4 | SK Biopharma / Xcopri | Korean direct U.S. subsidiary | 2024 first-ever annual profit; U.S. revenue +62% [Verified: [KBR](https://www.koreabiomed.com/news/articleView.html?idxno=26517)] | Direct model works but needs ~4–5 years of heavy SG&A |
| 5 | Celltrion / Zymfentra + biosimilars | Korean direct U.S. | >90% insured-lives coverage; Zymfentra Rx +185% YoY Q1-26 [Verified: [Korea Herald](https://www.koreaherald.com/article/10733706)] | Payer-first access strategy; multi-year investment |
| 6 | Yuhan / Lazcluze | Korean out-license to J&J | Combo WW sales $734M (2025); ~$300M milestones to Yuhan [Verified: [KBR](https://www.koreabiomed.com/news/articleView.html?idxno=30464)] | Partner model captures U.S. value — shrinks direct-launch SAM |
| 7 | Daewoong / Jeuveau | Korean partner model (Evolus) | ~12% U.S. aesthetic-toxin share [Verified: [KBR](https://www.koreabiomed.com/news/articleView.html?idxno=31673)] | Partner entry builds value without owned salesforce |
| 8 | Eisai+Biogen / Leqembi | Japan-led global launch | 2,000–3,000 U.S. patients by Jan 2024 vs. 10,000 target; FY25 doubled to $555M [Verified: [Alzforum](https://www.alzforum.org/therapeutics/leqembi)] | Market-building launches miss early targets even with big-pharma backing; recovery takes 2–3 years |
| 9 | Biogen / Aduhelm | Established co. | <$11M in first 9 months of 2023; discontinued 2024 [Verified: [CureAlz](https://curealz.org/news-and-events/new-drug-for-alzheimers-disease-aduhelm/)] | Payer access and evidence credibility — not approval — gate revenue |
| 10 | Sage / Zulresso, Zurzuvae | U.S. EBP first launches | $1.5M first full quarter vs. $88.5M/quarter SG&A; 40% layoffs; sold to Supernus 2025 [Verified: [8-K](https://www.sec.gov/Archives/edgar/data/1597553/000119312519289188/d830791dex991.htm)] | Site-of-care readiness and restricted distribution can strangle a launch |
| 11 | bluebird bio / 3 gene therapies | U.S. EBP, 3 first launches | $4.5B accumulated deficit; sold Feb 2025 for ~$29M upfront [Verified: [MedCity](https://medcitynews.com/2025/02/bluebird-bio-acquisition-gene-therapy-private-equity-carlyle-sk-capital-blue-pfizer-pfe/)] | One-time curatives + tiny populations = hardest launch model; capital ends before scale |
| 12 | BMS / Cobenfy | Big pharma ($14B asset) | FY2025 only $155M; Leerink cut 2030 forecast $5.8B→$2.6B [Verified: [BioPharma Dive](https://www.biopharmadive.com/news/biotech-pharma-clinical-trials-watch-2026/808255/)] | Even resourced launches stall against entrenched generics; habit-breaking takes years |
| 13 | Pfizer / Exubera (historic control) | Big pharma | $12M first 9 months; withdrawn; $2.8B charge [Verified: [Pfizer PR](https://www.pfizer.com/news/press-release/press-release-detail/pfizer_reports_third_quarter_2007_results_reconfirms_2007_and_2008_revenue_and_adjusted_diluted_eps_1_guidance)] | Canonical proof: launch failure is about customers/payers, not approval |

**Cross-case synthesis [Inference]:** winners share veteran leadership hired 12–18+ months pre-launch, capital raised ahead of need, narrow prescriber universes, access secured early, willingness to spend ahead of revenue. Losers share payer/access failure, distribution/site-readiness friction, capital exhaustion, over-forecasting against entrenched standards of care. These four failure modes are the Failure Lab's initial taxonomy (§18/§58). Post-launch M&A is the dominant exit (49 of ZS's 124 first-launchers acquired, typically 2–4 years post-launch) — launch execution is the primary value-creation lever, which is LaunchOS's pitch in one sentence.

────────

### 48.5 TAM / SAM / SOM — With Labeled Assumptions

**Core inputs (all Verified, per §48.1–48.3):** ~48 U.S. novel approvals/yr; ~25 EBP-filed launches/yr; 8–12 strict first-timers/yr; ~2–3 ex-U.S. entrants/yr; ~40–60 active planning cohort [Inference]; $80–100M first-launcher annual SG&A; incumbent consultancy $1–5M+ per launch [Estimate]. All downstream figures are **[Estimate]/[Inference]**.

**Phase 1 — Service-led (diagnostics / blueprint / fractional launch office)**

| Tier | Definition | Companies/yr | Attach rate [Assumption] | Price [Hypothesis, v1 §32] | Annual revenue |
|---|---|---|---|---|---|
| **TAM** | Global first-time + EBP launch cohort + established-pharma launch leaders buying diagnostics | ~150 launch events/yr (incl. ~100 big-pharma launches [Inference]) | 60% diagnostic / 40% blueprint / 15% fractional | $25k / $75k / $300k/yr | **~$13M/yr** (EBP core ~$4M + established ~$9M) |
| **SAM** | English/Korean/Japanese-speaking first-timers and ex-U.S. entrants (KR, JP, EU, U.S. EBP) | ~45–60 | 50% / 35% / 12% | same | **~$3.4–4.5M/yr** (45–60 × weighted ~$75K blended engagement) |
| **SOM (Yr 3)** | Realistic capture vs. boutiques | — | 10–14 diagnostics; 6–10 blueprints; 4–6 fractional clients | same | **~$1.9–2.9M ARR** (low: 10×$25K + 6×$75K + 4×$300K = $1.9M; high: 14 + 10 + 6 = $2.9M). Consistent with the §51.4 Y3 services line ($2.5M) and the §49.2 funnel |

**Phase 2 — SaaS (enterprise, quote-based) + expert-network subscriptions**

| Tier | Definition | Accounts | ACV [Estimate — benchmarked to life-sciences commercial SaaS] | Adoption [Assumption] | ARR potential |
|---|---|---|---|---|---|
| **TAM** | All organizations running ≥1 launch in next 36 months globally + expert subscriptions | ~500 | $100–500k | 30% | **~$15–75M/yr** (500 × $100–500K × 30%) |
| **SAM** | Target geographies + U.S. EBPs + select established launch leaders | ~150–200 | $150–350k | 25–35% | **~$8–20M/yr** |
| **SOM (Yr 5)** | Landed via service-led wedge, expanded | 20–35 | $150–300k | — | **~$4–9M ARR** |

**Combined view**

| | TAM | SAM | SOM (5-yr) |
|---|---|---|---|
| Service-led | ~$13M/yr | ~$3.4–4.5M/yr | $1.9–2.9M (Yr 3) |
| SaaS | ~$15–75M/yr | ~$8–20M/yr | $4–9M (Yr 5) |
| **Total** | **~$28–88M/yr** | **~$11–25M/yr** | **~$6–12M ARR** |

**Sensitivity notes [Inference]:**

1. The service-led business alone is **not venture-scale** — it is the wedge and the instrumentation engine (§47.6, move #7).
2. The largest upside lever is enterprise SaaS ACV and expert-network take-rate, not first-timer seat count.
3. Downside: EBP out-licensing to big pharma (Yuhan model) removes the customer. Mitigation: sell to both sides of deals and to acquirers' launch leaders.
4. Upside: expanding to established-pharma launch leaders roughly **triples TAM** (established companies run ~60% of ~48 U.S. launches/yr plus global sequence launches).

### 48.6 Funding-Environment Reality Check

**Capital availability [Verified]:**

- Total biopharma funding **$102B (2024) → $82B (2025, −20%)**; still 3rd-best year of the decade. IPO haul collapsed to **$3B in 2025 — a 10-year low**; follow-ons fell $46B→$30B ([FierceBiotech/IQVIA](https://www.fiercebiotech.com/biotech/biopharma-doubles-down-big-bets-and-china-ipos-hit-10-year-low)).
- 2026 inflection: IPO window reopening selectively (Aktis $317.7M, Eikon $381M, Kailera $625M); **19 M&A deals ≥$1B Jan 1–Apr 7, 2026** ([PitchBook](https://pitchbook.com/news/articles/biotech-ipos-poised-for-a-comeback-but-only-for-some)).
- Bifurcation [Inference]: late-stage and commercial-stage companies are funded; seed/Series A is in crisis. **Favorable for LaunchOS** — its buyers are exactly the de-risked, near-commercial cohort that still attracts capital.

**BD/licensing countercurrent [Verified + Inference]:**

- 2025: 68 deals >$2B (vs. 27 in 2024); China-linked deals at all-time high (94 in 2025). Chinese-origin assets are predominantly licensed/NewCo'd to U.S./EU sponsors rather than launched direct; Korean companies split direct (SK, Celltrion) vs. license (Yuhan, Daewoong).
- **Net effect: the China licensing-out trend trims the ex-U.S. direct-entry SAM.** The KR/JP direct-entry segment is real but small (ZS: only 5 Asian ex-U.S. first launches in 15 years) — do not size the company on it; treat it as high-ACV upside within SAM, not the base.
- Offset: EBP dealmaking is rising, and post-launch M&A rewards proven launch execution — every launch LaunchOS instruments becomes a comp buyer's diligence artifact.

### 48.7 What This Section Establishes

1. **The problem is documented and persistent** — 36–66% of launches miss expectations across five independent research houses spanning 2014–2026; first-timers miss materially more often (20–30% beat vs. 40–50% established).
2. **The buyer has money and a burning reason to spend it** — $80–100M/yr SG&A, launch trajectory sets enterprise value, and acquisition exits hinge on early execution.
3. **LaunchOS pricing is trivially affordable in context** — 0.03–0.5% of launch SG&A; 3–25% of one incumbent consulting engagement. Sell as displacement, not addition (§47.7 item 3).
4. **Service-led is a wedge, not the prize** — ~$13M/yr service TAM buys the benchmark data and reference launches that justify the SaaS layer (near-term SaaS TAM ~$15–75M/yr; ~$100M+ ARR potential at maturity per §7 research framing, contingent on the established-pharma expansion in sensitivity 4).

**Known evidence gaps (from research §8, restated because they gate external use):** consultancy pricing is benchmark-grade, not audited — run 10–15 launch-VP interviews before publishing price anchors (§50); the IQVIA "1-in-10 launches exceed $100M year 1" stat is secondary-cited — verify against the primary report; Japanese mid-cap direct U.S. launches 2022–2026 lack primary data — the Japan SAM segment is thin today and should not be quota-bearing until evidenced.


---

## 49. Go-To-Market & Sales Motion

**Purpose.** Convert an enumerable, evidence-backed buyer universe into a pipeline engine two founders can run. This section operationalizes MIS-06, MIS-07, MIS-19, and ASM-02. It assumes the offers and price hypotheses of v1 §32 and the ICPs of v1 §4; it does not restate them.

### 49.1 First Launch Radar — the GTM spine

**Decision.** The "First Launch Radar" (v1 §45 item 16–17, previously a validation step) becomes the permanent prospecting database and the operating spine of GTM. It is owned by the Commercial founder, refreshed monthly, and every GTM artifact (target list, conference plan, referral map, content calendar) derives from it.

**Construction — all signals are public or free:**

| Signal source | What it yields | Cadence |
|---|---|---|
| ClinicalTrials.gov Phase III interventional trials, sponsor filter | Companies with U.S. pivotal programs | Monthly query |
| FDA approval history cross-check (Drugs@FDA) | Exclude sponsors with prior U.S. approvals → "first-time" flag | Per candidate |
| PDUFA calendars / FDA advisory-committee schedules | Launch-window timing (buy 6–24 months pre-launch) | Monthly |
| SEC filings (S-1, 10-K/10-Q risk factors: "no commercial infrastructure," "first commercial product") | Funding runway, headcount, stated commercialization intent | Quarterly |
| Press/deal databases (free tiers): Fierce Biotech, Endpoints, BioPharma Dive | Financing events, U.S. hiring announcements, CCO appointments | Weekly scan |
| ZS first-launch census pattern (124 U.S. first launches 2011–2025, 87% commercialized independently) [Verified: https://www.zs.com/insights/us-biotech-and-pharma-first-launch-insights] | Confirms "go-it-alone" is the norm → direct-sale model viable | Annual refresh |

**Why this works [Verified]:** the buyer set is small and enumerable. Strict first-time launchers ≈ 8–12/yr [Verified: ZS above; Trinity 44 in 2020–2023, https://www.fiercepharma.com/pharma/drugs-unmet-needs-and-those-experienced-companies-have-best-chance-successful-launches]; EBP-filed U.S. launches ≈ 25/yr [Verified: IQVIA, https://www.iqvia.com/insights/the-iqvia-institute/reports-and-publications/reports/expanding-options-for-emerging-biopharma-in-the-us-a-decade-of-change]; the active planning cohort including 18–24-month pre-approval runway and CRL-affected companies ≈ 40–60/yr [Inference: market_evidence §2]. Add ICP B (established-pharma launch leaders) and the named-account universe is 150–200 accounts/yr.

**Radar record schema (minimum):** company, asset, TA, archetype (per v1 §16.2), U.S.-rights status, PDUFA/approval date, funding stage/runway, HQ geography, named CCO/CEO, incumbent advisors visible in filings, buying-window open/close, relationship path (investor, expert, conference), disqualifiers (out-licensed U.S. rights → remove).

**Disqualifier discipline [Inference from market_evidence §6.2]:** companies that out-license U.S. rights (Yuhan→J&J model; China-origin assets predominantly licensed/NewCo'd — 94 China-linked deals in 2025) exit the Radar. The Radar must track rights retention as a first-class field; an out-licensed account is not a lost deal, it was never a buyer.

### 49.2 Pipeline math — worked example

All conversion figures below are **[Assumption]** pending §38 interview data and first-10-deal experience; the account counts above are [Verified]. The table is the planning baseline, revised quarterly against actuals.

| Stage | Annual volume | Conversion (assumed) | Basis for assumption |
|---|---|---|---|
| Named accounts on Radar | 150–200 | — | [Verified-derived]: 40–60/yr planning cohort + ICP B + multi-year carryover |
| Qualified accounts (rights retained, window open, funded) | 60–80 | ~40% of Radar | [Assumption] |
| First meetings | 30–40 | ~50% of qualified | [Assumption] founder-led, warm-path-weighted, incl. ICP B parallel track |
| Health Check / paid Diagnostic sold | 10–14 | ~35% of meetings | [Assumption] sub-$30K price → faster cycle (§49.3) |
| Diagnostic → Blueprint | 6–10 | ~50–70% | [Assumption] diagnostic ends with costed gap list |
| Blueprint → Fractional Office | 4–6 | ~65% of blueprints | [Assumption] office is blueprint execution |
| Fractional Office → Enterprise SaaS tenant | 2–4 | ~60–70% at contract renewal | [Assumption] contingent on product maturity (§60) |

**Sanity check:** Yr-3 service-led SOM target of 10–14 diagnostics, 6–10 blueprints, 4–6 fractional clients (~$1.9–2.9M ARR) [Estimate: §48.5] is consistent with this funnel at the low-to-mid end of every conversion band, with multi-year carryover accounts closing the remainder. If any stage underperforms the band by >50% for two consecutive quarters, the model — not the quota — is revised first.

**Demand-context caveat [Verified]:** biopharma funding fell to $82B in 2025 (−20%) and IPOs hit a 10-year low, though late-stage/commercial-stage companies remain funded [FierceBiotech/IQVIA: https://www.fiercebiotech.com/biotech/biopharma-doubles-down-big-bets-and-china-ipos-hit-10-year-low]. Fewer funded first-time launchers near-term → protect pipeline with ICP B accounts (established launch leaders) in parallel.

### 49.3 Sales motion — land-and-expand ladder

**Decision.** Sell the ladder, not the platform. Every deal starts at the highest step the buyer's urgency supports; no free work except the Health Check.

| Step | Offer | Price (hypothesis, v1 §32) | Expected cycle [Assumption] | Stage exit criteria (objective) |
|---|---|---|---|---|
| 0 | First Launch Radar touch → meeting | Free | 2–6 weeks | Meeting with economic buyer or champion |
| 1 | Launch Health Check | $1.5–3K | 1–3 weeks | Paid; readiness gaps quantified; debrief attended by ≥1 C-suite |
| 2 | Commercial Readiness Diagnostic | $20–30K | 3–8 weeks | Paid; 4–6-week delivery (§61.1); costed gap list accepted; Blueprint proposed in final readout |
| 3 | Commercialization Blueprint | $50–100K | 6–12 weeks | Blueprint adopted by client launch governance; vendor-selection plan started; Fractional Office proposed |
| 4 | Fractional U.S. Launch Office | $15–35K/mo | 8–16 weeks (includes security/procurement review) | 30-day value review passed (§61.2); 3+ client staff active in tenant weekly |
| 5 | Enterprise SaaS | Quote-based | 3–9 months; enterprise pharma deals 6–12 months [Assumption, industry norm] | Procurement pack accepted (§49.7); data-intake checklist complete (§61.1); annual contract signed |

**Cycle-length discipline [Assumption]:** sub-$30K diagnostics must close in <8 weeks from first meeting; if a diagnostic drags past 12 weeks it is re-qualified, not chased. Enterprise SaaS deals are never the opening offer — they are harvested from step 4.

**Champion map:**

| Role | Function in deal | Message |
|---|---|---|
| CCO / VP Commercial | Champion and daily user | "Your launch, instrumented — know what is missing before the launch tells you" |
| CEO / U.S. President-GM | Economic buyer | "First-time launchers beat expectations only 20–30% of the time vs. 40–50% for established players" [Verified: McKinsey, https://www.mckinsey.com/industries/life-sciences/our-insights/small-but-mighty-priming-biotech-first-time-launchers-to-compete-with-established-players] |
| Board member / investor operating partner | Channel + internal sponsor (§49.5) | "Launch execution is the value-creation lever before a 2–4-year post-launch exit" [Verified: ZS, 49 of 124 first-launchers acquired post-launch] |
| CFO | Budget gate | Displacement frame: 3–25% of one incumbent-consultancy engagement; 0.03–0.5% of launch SG&A [Inference: market_evidence §5.2] |

**Pricing posture in every conversation [from competitive_landscape §6.3]:** LaunchOS is positioned as *displacement* of consulting hours and redundant tools, not an added vendor. Buyers in a funding winter want fewer vendors; "we manage your IQVIA/CSO/agency spend" is a winnable frame because incumbents cannot credibly arbitrate their own services [competitive_landscape §0, §6.2].

### 49.4 Geography entry strategy

Order follows v1 §4 (KR, JP, EU, U.S. EBP), amended by evidence (Amendment A17: U.S. EBP and KR are the active tracks; Japan demoted to partner-led until its direct-entry SAM is evidenced).

| Geography | Entry posture | Why / evidence |
|---|---|---|
| **South Korea** | Priority #1 — direct founder-led | Direct U.S. entry is a proven, repeated pattern (SK Biopharmaceuticals profitable in U.S. by 2024; Celltrion >90% U.S. coverage) [Verified: market_evidence §4.1, cases 4–5]. Chaebol bio arms and venture biotechs both maintain English-fluent HQ commercial teams [Assumption — standard for Korean global bio HQs; validate in §38 interviews]. Referral path via Korean biotech VCs and KHIDI/KBIO networks [Assumption]. |
| **Japan** | Partner-led and opportunistic, not a direct-entry build | Japan direct-entry SAM is thin: no primary evidence of Japanese mid-cap direct U.S. first launches 2022–2026; only ~5 Asian ex-U.S. first launches in 15 years [Verified: market_evidence §8.5; ZS]. Target only companies that retain U.S. rights; expect 2–3x longer trust cycle [Assumption]; local referral partner essential (§49.5). |
| **Europe** | Direct founder-led on mid-cap first launchers | 24 of 31 ex-U.S. first entrants were European [Verified: ZS]; argenx proves European EBP self-commercialization [Verified: market_evidence §4.1, case 3]. English-language selling is native. GDPR mechanics per §63. |
| **U.S. emerging biopharma** | Parallel track via investor channel | Largest single pool (~25 EBP-filed launches/yr [Verified: IQVIA]); reached most efficiently through VC/PE operating partners (§49.5), not cold outbound. |

**Sequencing rule:** one geography is "active" per quarter; the rest run on inbound/referral only. Two founders cannot run four active geographies (CON-01).

### 49.5 Channel & partnership motions (3)

**Motion 1 — VC/PE operating-partner referral [from MIS-19].**
- Mechanism: 15–25 target life-science funds with operating partners who sit on portfolio boards (Atlas, RA Capital, F-Prime class; Korean/Japanese funds with U.S.-launch portfolio companies).
- Offer to the partner: a fixed-fee portfolio-wide launch-readiness screen (Health Check pricing) and quarterly portfolio launch-risk review. No referral fees on enterprise contracts — pays in pipeline, not commissions, to protect neutrality.
- Trigger to formalize: first fund refers ≥2 portfolio companies.
- Acceptance criterion: ≥30% of first-20 customers traceable to investor channel.

**Motion 2 — Boutique consultancy co-delivery, scope-disjoint only.**
- Rule: co-deliver only where scope is disjoint — LaunchOS owns readiness engine, decision governance, vendor arbitration; the boutique owns execution workstreams (access strategy, PR/comms). Never co-deliver with firms selling competing launch-readiness platforms (Trinity, Axtria, ClearView) [competitive_landscape §1].
- Contract: mutual non-poach of the client relationship for 12 months post-engagement; single client-facing SOW with named workstream owners.
- Acceptance criterion: co-delivered engagements show no methodology leakage (§62) and ≥1 repeat referral within 2 quarters.

**Motion 3 — Data-vendor/CSO adjacency, explicitly without referral fees.**
- Mechanism: technical partnerships only (integration guides, joint data-sharing clauses via the RFP engine so feed obligations are contractual at vendor selection — ASM-03 fix). No placement fees, no referral revenue, ever.
- Rationale [Verified reasoning from competitive_landscape §5.3]: the moment LaunchOS takes fees from EVERSANA/Inizio/Amplity/IQVIA it becomes a conflicted channel and the neutral-arbitration wedge (the genuinely unoccupied position, §4) collapses. Neutrality is monetized through buyer-paid pricing, not vendor-paid distribution.

### 49.6 Demand generation on a founder budget

**Pillar 1 — Failure Lab research publishing (category-narrative ownership).**
- Publish quarterly aggregate launch-failure findings from the Failure Lab: failure-mode frequencies by archetype, early-indicator hit rates, anonymized trajectory data. Aggregate-only publication owns the narrative without leaking executable rules (§62.1) [strategy from competitive_landscape §5.6].
- First three issues seeded from public case evidence (Madrigal, Verona, Sage, bluebird, Aduhelm, Exubera — market_evidence §4) so publishing starts before client data exists (CON-04 compliant: state minimum-N and maturation timeline in every publication).

**Pillar 2 — Conferences (exactly two in Yr 1).**

| Conference | Why |
|---|---|
| J.P. Morgan Healthcare Week (January, San Francisco — satellite meetings, not the conference itself) | Highest density of first-launcher CEOs/CBOs and their investors in one week; side-meeting cost is travel-only [Assumption — standard practice, low cost] |
| DIA Global Annual Meeting | Cross-functional launch/commercial-ops buyers; ICP B presence; neutral scientific venue that fits a methodology-led brand |

Excluded: Fierce Pharma / large commercial-excellence shows in Yr 1 — pay-to-play cost without buyer density at our deal size [Assumption; revisit with Yr-2 budget].

**Pillar 3 — LinkedIn operator content by the Commercial founder.**
- Cadence: 2 posts/week, one deep analysis/month. Content = anonymized engagement findings, launch-failure teardowns, build/buy/rent arbitration examples. No marketing copy; operator voice only.
- Acceptance criterion: ≥40% of first meetings in Yr 1 cite content or investor referral as source [target].

### 49.7 Vendor-viability objection handling (ASM-02) — standard procurement pack

**Decision.** Vendor viability is answered with a standing pack, not ad-hoc assurances. The pack ships with every Diagnostic proposal and is maintained quarterly by the AI/Product founder. §62.5 owns the canonical artifact list; this section adds the sales-facing items. Contents:

| Item | Objection answered |
|---|---|
| E&O + cyber insurance certificates ($5M/claim target per §62.3; verify AI-output coverage per 2026 ISO GL exclusions [Credible secondary: regulatory_compliance §6 — verify at policy renewal]) | "You'll be gone or judgment-proof when something breaks" |
| Named Expert Council roster with bios | "Two people can't know market access, hub, distribution, MLR…" |
| Escrowed data export + published continuity plan (§61.5, §62.5) | "What happens to our launch data if you fold?" |
| Referenceable paid pilots (first 3 engagements contracted with reference rights) | "Who else trusts you?" |
| Security FAQ/CAIQ + SOC 2 roadmap letter + subprocessor list (§62.5) | "Can you survive procurement?" (v1 §38.9) |
| Key-person mitigation: methodology documented in-product, key-person insurance | "What if a founder leaves?" (RSK-03) |

**Measurement [from ASM-02]:** count how many of the 20 §38 validation interviews raise vendor viability unprompted; target ≤30% after the pack exists.

### 49.8 First-20-customer plan

**Definition of "sold":** signed SOW + first invoice paid. Verbal commitments and free pilots do not count.

| Quarter | Target | Mix | Gate to proceed |
|---|---|---|---|
| Q1 | Customers 1–2 | 2 paid Diagnostics (reference rights contracted) | §38 gates 1–5 met (interviews → proposals → paid engagement) |
| Q2 | Customers 3–5 | 2 Diagnostics + 1 Blueprint | Diagnostic delivery ≤6 weeks each; ≥1 client using tenant weekly (§38.6) |
| Q3 | Customers 6–10 | 3 Diagnostics + 1 Blueprint + 1 Fractional Office | ≥1 investor-channel-sourced deal; win rate ≥25% of first meetings |
| Q4 | Customers 11–14 | 2 Diagnostics + 2 Blueprints + 1 Fractional Office | First Fractional Office passes 90-day value review (§61.2) |
| Yr 2 H1 | Customers 15–20 | Weighted to Fractional Office + first Enterprise SaaS conversion | NRR on renewing service clients ≥100%; first SaaS tenant live |

**Owner:** Commercial founder owns pipeline and all steps 0–4; AI/Product founder owns procurement pack, security reviews, and step-5 technical close. **Escalation trigger:** if Q2 gate misses, stop new-offer development and re-run pricing/packaging validation before Q3 (ASM-01 link).

**Relationship to the P&L baseline:** this plan totals ~9 diagnostics / 4 blueprints / 2 fractional starts in Yr 1 — the *stretch* case. The three-year P&L (§51.4) deliberately models a conservative 6 / 3 / ~1; burn and funding decisions follow §51.4, not this table.

**Known unknowns (state plainly):** conversion bands in §49.2 and cycle lengths in §49.3 are planning assumptions, not evidence. They are revised quarterly against CRM actuals; the first 10 deals exist to replace assumptions with measured rates.


---

## 50. Pricing, Packaging & Revenue Architecture

Expands v1 §32 ("Initial Commercial Offers") and §31 ("Service-Led SaaS Model"). Resolves gap ASM-01 (pricing hypotheses with no validation method) and the project-revenue trap flagged in research. Labels: **[Verified]** source-backed fact · **[Bench]** industry benchmark (directional) · **[Inference]** synthesis · **[Assumption]** planning lever.

**Pricing doctrine**

1. Anchor on launch outcomes (forecast-hit rate, weeks of delay avoided, mis-sized field force avoided) — never on "cheaper than a consultancy." First-time launchers spend $80–100M annually on launch SG&A [Verified — [McKinsey](https://www.mckinsey.com/industries/life-sciences/our-insights/small-but-mighty-priming-biotech-first-time-launchers-to-compete-with-established-players)]; every LaunchOS tier below is <0.5% of that budget. The pricing question is buyer cash availability pre-revenue, not value headroom.
2. Pricing opacity cuts both ways: incumbent expert networks and launch consultancies hide rates, which lets LaunchOS differentiate on published, transparent pricing — but publishing invites anchor comparisons against GLG per-call rates and ZS day-rates. Publish tier *ranges* and Expert Credit mechanics; keep Enterprise SaaS quote-based (v1 §32 stance retained).
3. Every dollar of services revenue is worth roughly 1/4–1/8 of a software dollar at exit (1.1x vs 4.5x EV/Revenue M&A medians) [Bench — [Aventis IT services](https://aventis-advisors.com/it-services-valuation-multiples/) · [Aventis SaaS](https://aventis-advisors.com/saas-valuation-multiples/)]. Packaging must therefore convert every service dollar into software-attached revenue wherever possible (see §50.4).

---

**50.1 Packaging ladder**

Tied to the service-led phases of v1 §31. Each rung exists to sell the next rung and to leave software behind.

| Tier | Price [Assumption — v1 §32 targets] | Includes | Primary delivery cost driver | Gross-margin expectation |
|---|---|---|---|---|
| **Launch Health Check** | $1,500–$3,000 one-time | Readiness Engine subset (v1 §16.1), public-data First Launch Radar scan, 90-min founder debrief, written gap memo | Founder time (~1 day); near-zero COGS | Services-grade, 80%+ [Assumption]; priced as a loss-tolerant wedge, not a profit center |
| **Commercial Readiness Diagnostic** | $20,000–$30,000 one-time | Full 150–250 question readiness assessment, Launch Archetype, gap report, 2–4 Expert Credits, remediation roadmap in-product | Founder delivery + expert honorarium pass-through | 30–35% Y1 floor; ≥35% gate target from Wave 2 (§51.2) [Bench — services GM above Veeva's 20.3% PS GAAP GM, [Veeva IR](https://ir.veeva.com/news/news-details/2026/Veeva-Announces-Fiscal-2027-First-Quarter-Results/default.aspx), justified by founder-led premium delivery with no bench] |
| **Commercialization Blueprint** | $50,000–$100,000 one-time | Operating model, Build/Buy/Rent outputs, org & field design scenarios, vendor architecture, governance plan — all generated and versioned in-product | Founder weeks + expert panel + LLM/inference load | 30–35% Y1 floor; ≥35% target [Bench as above]; margin protected only if deliverables are generated in-product, not hand-built |
| **Fractional U.S. Launch Office** | $15,000–$35,000/month retainer | Command Center operation, weekly Executive Brief, rules monitoring, expert orchestration, launch governance cadence | Founder/contractor hours per account + expert drawdown | 30–35% Y1 floor; ≥35% target [Bench]; cap concurrent accounts per gap RSK-08 |
| **LaunchOS Enterprise SaaS** | Quote-based; model $50–100K/yr company platform fee + $25–50K per active launch workstream [Assumption] | Full tenant: methodology, agents, integrations, Decision Ledger, Failure Lab, Expert Credits bundle | Cloud infra, inference, support | 71–80% target [Bench — private SaaS median 71–74%, top quartile 78%+, [OpenView/KeyBanc via StealthAgents](https://stealthagents.com/research/startup-gross-margin-benchmarks-2026)]; AI-heavy lines must hold ≥78% via model routing (§51.3) |

Expert Credits are packaged inside Diagnostic, Blueprint, Fractional Office, and Enterprise tiers — mechanics in §50.6, economics and legal in §54.

**50.2 Blended margin architecture**

Component margins: services 30–35% GM in Y1, ≥35% gate target from Wave 2 (§51.2) [Bench]; software 71–80% GM [Bench]; expert pass-through at the standard 1.3–1.4x markup dilutes blended GM ~2–5 points where credits/overage are drawn (only ≥1.5x cost would be margin-neutral — deliberately not charged; §54.2) [Bench — research §2.3]. Mix math at services 35% / software 80% [Assumption], excluding expert pass-through:

| Mix (services / software) — maps to v1 §31 phases | Blended GM | Investor read |
|---|---|---|
| 80 / 20 (Phase 1) | **44%** | Seed-tolerable; flagged as "consultancy" by growth investors |
| 60 / 40 (Phase 2) | **53%** | Transition zone; requires visible software ARR growth |
| 40 / 60 (Phase 3) | **62%** | Approaching SaaS-with-implementation norms (65–75% blended [Bench — [CFO Pro Analytics](https://cfoproanalytics.com/cfo-wiki/saas/gross-margin-targets-for-saas-companies/)]) |
| 20 / 80 (mature) | **71%** | Software-led; benchmark-grade |

Sensitivity: if services GM compresses to 25% (delivery leverage fails), the same mixes yield **36% / 47% / 58% / 69%** [Assumption]. Including expert pass-through at the standard markup subtracts a further ~2–5 points from any blended figure in proportion to expert-line volume. **What LaunchOS does:** report services GM, software GM, and expert-line margin as three separate lines monthly; a declining services-GM trend for two consecutive quarters triggers a phase-exit review (§51.2), not a pricing discount.

---

**50.3 Pricing validation methodology** — fixes ASM-01; gives v1 §32's "hypothesis until validated" a method, a sample, and a decision rule.

1. **Anchor testing inside the 20 buyer interviews (v1 §38).** For each tier, present the price with a concrete deliverable and one outcome anchor (e.g., "one week of launch delay costs ≈ $X in burn and $Y in peak-year revenue; this diagnostic exists to find that risk at L-12"). Record: accept / counter / reject, and the counter-offer level. No method machinery at this stage — the goal is to kill a wrong anchor cheaply.
2. **Structured price testing with 10–15 qualified buyers** (CEO/CCO/US-GM of companies matching ICP A; recruited from the interview pool + First Launch Radar named-account list, §49; extend to 15–20 if the price-response curves are inconclusive). Run **Van Westendorp** (too cheap / bargain / expensive / too expensive) for the Diagnostic and Blueprint tiers, and **Gabor-Granger** (buy/no-buy at stepped prices) for the Fractional Office retainer, where a discrete demand curve matters more [Inference — method selection].
3. **Instrument live deals.** Every proposal from Wave 1 onward logs quoted price, discount, and close/loss reason; willingness-to-pay evidence from v1 §38 criterion 8 ("evidence of willingness to pay recurring") feeds the same register.
4. **Revision decision rule.** A tier's price is revised (and re-tested) when **any** of: (a) ≥40% of tested buyers rate the target price "too expensive" (VW) or decline at target in Gabor-Granger; (b) win rate on quoted deals <30% with price cited as primary loss reason in ≥half of losses; (c) two consecutive deals close only at >20% discount. A tier's price is **raised** when win rate >70% at quoted price across 5+ consecutive quotes. Re-test after every revision; never revise twice without new data [Inference].
5. **Exit criteria:** pricing is "validated" for a tier when ≥5 paid deals close within ±20% of the target band. Health Check deliberately stays below procurement thresholds.

---

**50.4 The project-revenue trap: revenue that survives launch completion**

Launches end 12–24 months after engagement; client need and budget collapse. Six levers, each with a concrete mechanism [levers from research §4; mechanisms LaunchOS-specific]:

| Lever | Mechanism in LaunchOS |
|---|---|
| **1. Company-level platform fees** | Enterprise SaaS priced at the *company* level ($50–100K/yr [Assumption]) covering all assets; per-asset workstream modules ($25–50K) activate as each program nears launch. Veeva's NRR-120%+ engine is multi-product land-and-expand within accounts, not single-product renewal [Verified — [SaaStr](https://www.saastr.com/5-interesting-learnings-from-veeva-at-2-billion-in-arr/)]. |
| **2. System-of-record lock-in** | The Blueprint, Decision Ledger, launch data, and performance tracking live *inside* the platform; they are inaccessible on termination except as flat export (v1 §37.11). Palantir "Acquire, Expand, Scale" and Veeva Vault make the deliverable depend on continued subscription [Verified — [Palantir S-1](https://www.sec.gov/Archives/edgar/data/1321655/000119312520230013/d904406ds1.htm) · [Intrinsic Investing](https://intrinsicinvesting.com/2024/07/23/veeva-a-winning-platform-strategy-in-life-sciences/)]. |
| **3. Post-launch continuity subscriptions** | L+1 to L+12 products — field-team effectiveness, launch-performance benchmarking vs. archetype, optimization retainer — at 30–50% of launch-phase pricing [Assumption]. Demand for post-engagement continuity is proven: QuantumBlack clients asked to keep tool access after engagements ended [Verified — [HBS case](https://www.hbs.edu/faculty/Pages/item.aspx?num=67519)]. |
| **4. Annual contracts with pre-negotiated expansion** | 12-month minimum platform terms with auto-renewal; services drawn down against an annual commitment; expansion pricing (asset #2, field modules) written into the initial order form. Expansion deals close 40–60% faster than new logos when terms are pre-negotiated [Bench — [GetBoomerang](https://getboomerang.ai/glossaries/b2b-sales-cycle-benchmarks-2026)]. |
| **5. Capped success fees** | Outcome-linked components (e.g., launch-readiness-milestone attainment) permitted but capped at 15–20% of contract value [Assumption]. ~25% of McKinsey fees are now outcome-linked [Bench — [Nexus analysis](https://agent.nexus/compare/outsourcing/nexus-vs-mckinsey-quantumblack)], but trial readouts and CRLs sit outside LaunchOS's control; overweighted success fees make revenue unbankable. |
| **6. Multi-asset targeting** | Deliberately target VC-backed platform companies with 2+ pipeline assets (screenable from ClinicalTrials.gov/SEC via First Launch Radar, §49). Track **re-engagement rate** (client returns for asset #2) as a formal KPI; target >40% [Assumption]. |

---

**50.5 Dual retention metrics**

Project revenue (Health Check, Diagnostic, Blueprint) is non-recurring by construction — reporting one blended retention number hides the trap. LaunchOS reports two:

| Metric | Definition | Target | Benchmark |
|---|---|---|---|
| **Platform NRR** | Net revenue retention on the Enterprise SaaS + Fractional Office book only | 110–120% | Enterprise (>$100K ACV) median NRR **118%**; mid-market 108%; SMB 97% [Bench — [Optifai n=939](https://optif.ai/learn/questions/b2b-saas-net-revenue-retention-benchmark/) · [SaaS Capital](https://www.digitalapplied.com/blog/net-revenue-retention-benchmarks-2026-saas-expansion-data)]. Veeva historically 120%+ [Bench — [Stacksync](https://www.stacksync.com/blog/one-industry-owned-completely-the-origin-story-of-veeva)]. Caution: cheap AI-native products show median NRR ~48% [Bench — [ChartMogul via Digital Applied](https://www.digitalapplied.com/blog/net-revenue-retention-benchmarks-2026-saas-expansion-data)] — enterprise-priced, workflow-embedded AI retains; novelty-priced AI churns. |
| **Attach rate** | % of Diagnostic buyers converting to Blueprint + Fractional Office/Platform within 12 months | >50% | [Assumption] — the single most important operating KPI in the model; the 3-year P&L (§51.4) breaks if this conversion fails. |

Both metrics appear on the LaunchOS internal KPI dashboard (§59) and in every board/investor update.

---

**50.6 Expert Credits packaging** (economics and legal detail: §54)

- **Bundle:** each tier above Health Check includes Expert Credits (1 credit = 1 hour of senior-operator consult or 3 survey responses). Diagnostic: 2–4 credits; Blueprint: 6–10; Fractional Office: 10/quarter; Enterprise: per tier [Assumption, modeled on research §4 recommendation].
- **Overage:** honorarium + 30–40% transparent markup (sourcing, vetting, compliance, scheduling, payment) — vs. industry 100–300% markups [Reported — expert_network research; GLG audited >70% contribution margin as ceiling, [GLG S-1 via Woozle](https://insights.woozleresearch.com/blog/40-semiconductor-channel-calls-in-two-weeks-how-a-tmt-hedge-fund-pressure-tested-an-semiconductor-basket-for-18-000/)]. Buyer invoices show honorarium and markup as separate lines.
- **Rollover:** unused credits roll one quarter; annual true-up. Unexpiring-credit resentment is a top industry complaint [Reported — expert_network research]; the rollover policy is a sales asset, printed in the rate card.
- **No standalone six-figure network access fee** — network access is a platform feature, not a separate GLG-style membership. This is the deliberate wedge against Within3 (~$100K/yr programs [Reported — expert_network research]) and legacy memberships ($20K–$500K+).

---

**50.7 Outcome-based anchoring and price communication**

- Sell against outcome metrics the buyer already tracks: forecast-hit rate at L+6, weeks of critical-path slip avoided, field-force mis-sizing cost (v1 §30: "potential multimillion-dollar savings" — substantiated per gap MIS-11 by the ROI framework in §57). Every proposal states the outcome anchor, never the consultant-discount anchor.
- **Never** position as "cheaper than ZS/Inizio/EVERSANA." A price framed as a discount invites procurement to treat LaunchOS as a consultancy and compress it toward day-rates; a price framed against launch outcomes invites comparison against the $80–100M launch budget.
- Transparency asymmetry: publish *mechanics* (tier ranges, credit bundles, markup %, rollover) but keep Enterprise SaaS quote-based. Buyers benchmarking expert costs against GLG find the 30–40% markup disclosed on the invoice — the disclosure itself is the differentiation [Inference].


---

## 51. Financial Model & Funding Path

Resolves gaps MIS-01 (no financial model), MIS-12 (no funding strategy), CON-05 (undefined service→software transition triggers), and RSK-07 (AI cost margin compression). All projections are **[Assumption]** planning templates with levers, not forecasts. Labels: **[Verified]** source-backed · **[Bench]** industry benchmark · **[Inference]** synthesis · **[Assumption]** planning lever.

---

**51.1 Service-to-software precedents and valuation consequences**

The service-led → software-led path is precedented — and the penalty for failing to make the transition is quantifiable.

| Company | Services share / model at key stage | Transition evidence | Source |
|---|---|---|---|
| **Veeva** | Professional services = **45.2% of revenue** (Q ended Apr 2012), **31.3%** (Q ended Jul 2013) — *at IPO* [Verified] | IPO'd Oct 2013 at $129M revenue, 170 customers, ~$780K avg/customer; raised only ~$7M VC, burned ~$3M. PS still 17.3% of revenue at ~$2B ARR (Q1 FY27), GAAP GM 20.3% — services kept in-house deliberately as an adoption wedge | [Veeva S-1, SEC](https://www.sec.gov/Archives/edgar/data/1393052/000119312513363152/d541293ds1.htm) · [Tunguz teardown](https://www.tomtunguz.com/veeva-s-1/) · [Veeva IR Q1 FY27](https://ir.veeva.com/news/news-details/2026/Veeva-Announces-Fiscal-2027-First-Quarter-Results/default.aspx) |
| **Palantir (FDE model)** | At S-1 (2020): GAAP GM **67%** (71% ex-SBC) — software-like despite embedded engineers; S&M = 61% of revenue (2019) because engineers did pre-sale solutioning; $5.6M avg revenue/customer [Verified] | Setup time fell >5x to ~14 days by Q2 2020 via productized deployment; GM now 80–87%. **Lesson: convert FDE learnings into product, or stay a consultancy** | [Palantir S-1, SEC](https://www.sec.gov/Archives/edgar/data/1321655/000119312520230013/d904406ds1.htm) · [Turck teardown](https://api.mattturck.com/palantir/) · [Compound FDE model](https://businessmodels.compound.vc/model/forward-deployed-engineer) |
| **Appian** | Professional services ~**23%** of revenue (Q2 2024); cloud NRR 118% [Verified] | Persistent ~20–25% services share accepted at public scale | [PEX Network](https://www.processexcellencenetwork.com/digital-transformation/news/appian-userlane-pwc-celonis-apromore) |
| **Saama** | Founded 1997 as services/consulting; productized into Life Science Analytics Cloud (50+ biopharma clients) | Carlyle-led majority investment up to **$430M** (2021) with Pfizer/Merck/Amgen/McKesson ventures co-investing — services-to-product path rewarded at scale | [Saama/Carlyle release](https://www.saama.com/news/carlyle-and-leading-healthcare-focused-venture-funds-announce-strategic-growth-investment-of-up-to-430-million-in-saama/) |
| **ConcertAI** | Oncology DaaS + AI SaaS; ~50 life-science customers | $150M Series C at **$1.9B** (2022); first profitability year 2024 | [Inside Precision Medicine](https://www.insideprecisionmedicine.com/news-and-features/concertai-keeps-rocking-with-150m-series-c-funding-from-sixth-street/) |
| **McKinsey/QuantumBlack** | Consulting-led; built 20+ productized AI tools; open-sourced Kedro when clients wanted post-engagement access [Verified] | Even elite services firms productize tooling to survive engagement endings | [McKinsey QuantumBlack](https://www.mckinsey.com/capabilities/quantumblack/labs/our-products) · [HBS case](https://www.hbs.edu/faculty/Pages/item.aspx?num=67519) |

**Valuation-multiple consequences:**

| Mix | Multiple | Source |
|---|---|---|
| IT services M&A median | **1.1x EV/Revenue** (10.4x EV/EBITDA; n=1,069, 2015–2026) | [Aventis](https://aventis-advisors.com/it-services-valuation-multiples/) [Bench] |
| Tech-enabled services | **1–4x revenue** | [CT Acquisitions](https://ctacquisitions.com/revenue-multiple/) [Bench] |
| SaaS M&A median | **4.5x EV/Revenue** (n=543) | [Aventis](https://aventis-advisors.com/saas-valuation-multiples/) [Bench] |
| Public enterprise SaaS | ~**3.3x EV/TTM revenue** (PitchBook, 31-Mar-2026); Palantir ~60x is an outlier — do not anchor on it | research §7 [Bench] |

**What LaunchOS does:** manage an explicit software-mix glide path (20% → 40% → 60% software share over 3 years), and report software ARR, platform NRR, and services attach rate as separate lines in every investor communication. A company that reports one blended revenue number at >60% services will be priced as a consultancy.

---

**51.2 Phase-exit criteria for the service → software transition** — fixes CON-05 (v1 §31 phases with undefined triggers; default trajectory of every service-led SaaS is permanent consultancy with a portal).

| Gate | Trigger to exit Phase 1 (80/20) → Phase 2 (60/40) | Trigger to exit Phase 2 → Phase 3 (40/60) |
|---|---|---|
| **Productization** | ≥60% of Diagnostic/Blueprint deliverable content generated in-product (not hand-built) [Assumption] | ≥85% generated in-product; client users self-serve core workflows |
| **Service margin trend** | Services GM ≥35% for 2 consecutive quarters with no founder-hour increase per engagement | Services GM stable at 35–40% while revenue per engagement rises |
| **Client self-sufficiency score** | ≥2 clients run weekly governance cadence in LaunchOS with founder involvement <2 hrs/week [Assumption] | Median tenant: weekly active client users ≥5, founder involvement <1 hr/week, ≥5 modules replacing actual work (v1 §38.7) |
| **Attach** | Diagnostic→Blueprint/retainer attach rate ≥50% (§50.5) | Platform NRR ≥110% on the software book |
| **Hard review** | Gate missed 2 consecutive quarters → board-level review: re-scope product or accept consultancy economics and reprice the company accordingly | Same |

Gates are measured quarterly from the first paid engagement; the measurement system is part of the internal KPI dashboard (§59), not a spreadsheet assembled at fundraising time.

---

**51.3 Unit economics**

| Metric | Benchmark | LaunchOS application [Assumption unless noted] |
|---|---|---|
| Sales cycle | Enterprise (>$100K ACV) 90–180+ days; strategic 6–12+ months; cycles lengthened ~16–22% since 2022 [Bench — [Optifai n=939](https://optif.ai/learn/questions/sales-cycle-length-benchmark/) · [Ebsta/Pavilion](https://www.thestarrconspiracy.com/insights/benchmarks/b2b-buyer-journey-benchmarks-2025)] | Cycle = first qualified meeting → signature (§49.3 is authoritative): Diagnostics 3–8 weeks founder-led (re-qualify past 12 weeks); Fractional Office retainers 8–16 weeks including security/procurement review; Enterprise SaaS 3–9 months, up to 6–12 at full enterprise procurement |
| CAC | Healthtech CAC runs **2–3x** horizontal baseline; regulated industries 2–4x [Bench — [Unbuilt Lab](https://unbuiltlab.com/learn/benchmarks/saas-cac-benchmarks)] | Founder-led sales: near-zero cash CAC in Wave 1. With a sales hire: model **$30K–$80K fully-loaded CAC per new logo** |
| CAC payback | 18–24 months typical >$100K ACV; Bessemer: <24 mo acceptable enterprise; 2026 median ~15–16 mo [Bench — [ROIPad](https://roipad.com/research/saas-cac-payback-by-acv.php) · [Aleph × Benchmarkit 2026](https://www.getaleph.com/answers/cac-payback-period-saas-2026)] | Target **<12 months on services gross profit** — services are prepaid, the model's hidden cash advantage; 18–24 mo acceptable only for software-led deals |
| LTV:CAC | Vertical SaaS median 5.6x vs 4.1x horizontal [Bench — [Aleph/Benchmarkit](https://www.getaleph.com/answers/cac-payback-period-saas-2026)] | Target ≥4x on platform book; project revenue excluded from LTV |
| **Per-tenant LLM cost** (fixes RSK-07) | Software GM target ≥78% *including* inference [Bench — research §2.1] | Track inference cost per tenant per month as a first-class KPI; model-routing budgets (cheap models for classification/extraction, frontier models only for executive reasoning) with per-tenant cost ceilings; alert when a tenant's inference exceeds 15% of its subscription revenue [Assumption] |

Blended initial engagement for ICP A: a typical *opening* engagement is one ladder rung ($20–100K). A client completing the full ladder within 12 months spends **~$275–625K cumulative** (diagnostic $20–30K + blueprint $50–100K + fractional office $180–420K annualized + platform $25–75K/yr for a single-workstream emerging client; the §50.1 $50–100K company platform fee applies at enterprise scale) [Assumption — research §3.2].

---

**51.4 Three-year P&L skeleton** — **[ALL Assumption — template with levers, not projections]**

Levers: services GM 35% rising to 40% (productized delivery); software GM 78% incl. inference; founder comp below market Y1; US-based team; no office.

| Line ($K) | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Headcount (avg) | 3 (2 founders + 1 contractor) | 8 | 15 |
| Diagnostics ($25K avg × deals) | 150 (6) | 250 (10) | 350 (14) |
| Blueprints ($75K avg) | 225 (3) | 600 (8) | 750 (10) |
| Fractional launch office ($25K/mo avg) | 300 | 900 | 1,400 |
| Platform/software ARR recognized | 50 | 650 | 2,100 |
| **Total revenue** | **725** | **2,400** | **4,600** |
| Services share / Software share | 93% / 7% | 73% / 27% | 54% / 46% |
| COGS – services (delivery labor, expert pass-through) | 440 | 1,050 | 1,625 |
| COGS – software (infra, inference, support) | 12 | 150 | 480 |
| **Gross profit (margin)** | **273 (38%)** | **1,200 (50%)** | **2,495 (54%)** |
| R&D / product | 120 | 700 | 1,400 |
| S&M | 60 | 500 | 1,150 |
| G&A (incl. founder comp above COGS) | 120 | 350 | 550 |
| **Operating burn** | **(27)** | **(350)** | **(605)** |
| **Cumulative operating burn** | **(27)** | **(377)** | **(982)** |
| **Cumulative external capital need** (burn + bridge below) | ~0.3M | ~0.7M | **~2.1M total** |

**Bridge from burn to capital need [Assumption]:** cumulative operating burn through Y3 is ≈$1.0M. The ~$2.1M external-capital figure adds (a) working-capital lag on services delivered before final collection, (b) a ~4-month opex buffer at the Y3 run-rate (~$1.0M), and (c) partial founder-comp true-up (sensitivity 1). Raise sizing follows the buffered figure, not raw burn. Y1 volumes here (6 diagnostics / 3 blueprints / ~1 fractional client) are deliberately conservative against the §49.8 first-20 stretch plan (9 / 4 / 2); burn planning follows this table, not the stretch plan.

**Sensitivities** [Assumption]: (1) founders at market salaries add ~$400–600K/yr; (2) pulling the software build forward 6 months adds ~$800K burn but software share reaches ~60% by Y3; (3) each 10-point drop in services GM adds ~$170K COGS at Y3 mix. **The model breaks if diagnostics fail to convert to retainers** — attach rate, not pricing, is the single most important operating KPI (§50.5).

---

**51.5 Funding path**

| Wave (v1 §35 mapping) | Milestone to unlock | Capital need [Assumption] | Source |
|---|---|---|---|
| **Wave 1 (Mo 0–12): service-led validation** | ≥1 paid diagnostic delivered; ≥$75K cumulative booked; 20 buyer interviews complete; 1 blueprint → software spec *(aligned to the §59.4/§60.2 gate ladder, which is authoritative)* | $0–300K (founder runway; services are prepaid → near cash-flow breakeven at minimal founder draw) | **Bootstrap.** Optional $250–500K pre-seed SAFE (~$10M cap norm, Carta pre-seed [Bench]) |
| **Wave 2 (Mo 12–24): productize** | ≥3 paying clients; ≥$500K cumulative booked; ≥1 diagnostic→blueprint/retainer conversion; software MVP in weekly client use | **$3–5M seed** at ~$15–24M post — *required unless the §51.6 bootstrap branch is elected (≥3 paying clients with software attach ≥30%)* | Institutional seed; vertical-AI/healthtech funds |
| **Wave 3 (Mo 24–36): software-led GTM** | Services run-rate ≥$1.5M; software attach ≥30% of clients; ≥$1.5M software ARR with platform NRR ≥110% | **$8–15M Series A** at ~$45–80M pre | **Only when software metrics, not services revenue, carry the story** |

Round benchmarks [Bench]: median seed ~$3–4M raised at ~$18.4M pre / ~$24M post, ~19–20% dilution ([PitchBook-NVCA Q1 2026 / Carta Q4 2025 via Causo](https://hub.causo.ai/guides/seed-round-valuation-benchmark-2026)); AI seed premium ~+40% at median. Series A bar: ~$1M ARR floor / ~$3M median revenue at raise (SVB), median pre ~$48–49M, AI ~$84M; seed→A median interval **616 days**; only ~20% of seed cohorts reach A within 2 years ([Causo Series A bar](https://hub.causo.ai/guides/h1-2026-series-a-bar-report)). 83% of SaaS capital in Q1 2026 went to AI-positioned companies ([Carta via Causo](https://hub.causo.ai/guides/b2b-saas-funding-this-quarter)).

Adjacent-comparable rounds [Verified]:

| Company | Focus | Rounds |
|---|---|---|
| **ODAIA** | AI commercial insights SaaS for pharma | Seed $3.25M (2020); Series A $13.8M (2022); Series B $25M/C$34M (2023) — [Jobright/Crunchbase](https://jobright.ai/jobs/info/690901cbd046ab6061cd01c2) · [parsers.vc](https://o.parsers.vc/startup/odaia.ai/) |
| **Sorcero** | AI medical-affairs intelligence | Series A $10M (2021); Series B $42.5M (Nov 2025); total $59M — [NewSpring](https://newspringcapital.com/sorcero-secures-42-5m-series-b-financing-led-by-newspring-capital-to-scale-its-ai-platform-accelerate-expansion-across-life-sciences) |
| **WhizAI** | Augmented analytics for life sciences | Series A $8M (2021); total $21M by 2022 incl. strategics (AmerisourceBergen, Shanda) — [WhizAI](https://www.whiz.ai/press-and-news/whizai-closes-new-round-with-investment-from-shanda-group-and-amerisourcebergen-bringing-total-capital-raised-to-21-million) |

**Key rule:** services cash flow *defers but does not eliminate* outside capital. Veeva (IPO on ~$3M burned) is the extreme outlier; ODAIA/Sorcero/WhizAI each raised $15–60M to cross the same chasm. Plan for the median, not the outlier.

---

**51.6 Scenario cases: 0 / 3 / 10 clients** — gives the wave plan (v1 §35) a kill-switch logic.

[All Assumption. "Client" = company with at least a paid Diagnostic in the trailing 12 months. Monthly burn = opex net of gross profit; pre-seed/seed excluded from "cash" unless noted.]

| Scenario | Revenue run-rate | Monthly burn | Runway implication | Action rule |
|---|---|---|---|---|
| **0 clients at Month 9** | $0 | ~$8–12K (2 founders, minimal draw, infra) | Founder-runway-bound; no external capital justifiable without paid validation | **Stop-loss:** do not start Wave 2 build. Run §38 validation gates as pure research; if 0 paid diagnostics by Month 12, pivot or shut down. Prepaid-services model means no hidden COGS accrual. |
| **3 clients at Month 12** | ~$40–60K/mo (~$500–700K annualized) | ~$10–20K net (services gross profit roughly covers lean opex) | Indefinite at minimal founder draw — the design intent of the service-led phase | Bootstrap continues. Seed raise becomes *optional* and timed to productization readiness (software attach ≥30%), not cash panic. |
| **10 clients at Month 18** | ~$150–250K/mo (~$1.8–3M annualized) | Positive at current headcount; burn returns only when Wave 2–3 hiring starts (~$80–120K/mo with 8 FTE) | Seed ($3–5M) yields 30+ months runway at Wave-2 burn; Series A clocks starts (616-day median interval) | Raise seed from strength; attach-rate and software-share gates (§51.2) govern whether Series A narrative is software-led or services-led. |

Cross-checks: cap concurrent service engagements (gap RSK-08) — 10 active clients exceeds two-founder delivery capacity and forces the Expert-Council subcontractor model (§54) or hiring, which is why the 10-client case assumes 8 FTE. Each scenario's trigger, owner, and next decision is logged in the company risk register (§55).


---

## 52. Regulatory & Compliance Framework (Expanded)

**Status:** Replaces and expands v1 §26 (Security Architecture) compliance-relevant items and §27 (Compliance & Governance). v1 §27 knowledge classes, AI output disclosure, and escalation routing remain in force; this section adds the legal perimeter, enforcement climate, and risk-transfer posture. Cross-reference: v1 §6 constitution principles 10, 11, 12, 14, 15, 16 are the normative anchors for everything below.

**Disclaimer:** Not legal advice; counsel confirms before client contracts. Items marked [CC] require counsel confirmation.

────────

### 52.1 How LaunchOS Gets Regulated — Four Exposure Channels

LaunchOS's risk is not direct FDA regulation of a B2B SaaS vendor. It is conducted-through-the-client and conducted-through-the-contract exposure via four channels:

| # | Channel | Legal hook | LaunchOS surface |
|---|---|---|---|
| 1 | **Promotional content adoption** | AI outputs a client disseminates become the *client's* promotional labeling/advertising (21 CFR 201.100(d); 21 CFR 202.1); misbranding under FDCA §§502(a), 502(n) | Launch-guidance agents, messaging, HCP-facing content drafts |
| 2 | **Intended-use evidence** | 21 CFR 201.128 — coaching/analytics can be cited as evidence a client *intends* an off-label use | Field-force coaching, call planning, HCP targeting analytics |
| 3 | **Expert payments** | Open Payments (42 CFR 403.902/403.904), AKS (42 U.S.C. 1320a-7b(b)), FMV discipline | Expert network honoraria, engagement records |
| 4 | **Data flows** | HIPAA de-ID rules, state consumer-health laws, GDPR/APPI/PIPA cross-border mechanics | Commercial data ingestion, HCP reference data, EU/JP/KR clients |

Enforcers: OPDP (drugs) and APLB (biologics) on promotion; CMS on Open Payments; OIG/DOJ on AKS; state AGs and PIPC/PPC on data.

────────

### 52.2 FDA Promotional Boundaries — 2025–2026 Enforcement Climate

**The climate is the harshest in decades. [Verified per secondary legal reporting]**

- OPDP issued ~5 letters in all of 2024. After the Sept 9, 2025 Presidential Memorandum and FDA's "Crackdown on Deceptive Drug Advertising," FDA sent thousands of templated letters, ~100 cease-and-desist letters, and 125+ warning/untitled letters in 2025 (Sidley; FDA press announcement; Ropes & Gray 2026 review). [Credible secondary]
- 2026 pace: 50+ OPDP letters, including escalation patterns and waves against telehealth/compounded GLP-1 promotion (25 warning letters in the week of June 15, 2026). [Credible secondary]
- Pending: rulemaking to eliminate the 1997 "adequate provision" broadcast-ad mechanism; HHS targets a proposed rule by Dec 2026. [Credible secondary]
- FDA is using AI tools to surveil promotion at scale (King & Spalding). OPDP's Policy Division was reportedly eliminated in April 2025 RIFs — enforcement accelerates while guidance slows. [CC]

**Three trigger lines — where LaunchOS output becomes promotional exposure:**

1. **Content generation/adoption.** AI-drafted claims, messaging, or HCP-facing content a client disseminates = the client's promotion. Must satisfy fair balance (21 CFR 202.1(e)(5)) and Form FDA-2253 submission at initial dissemination (21 CFR 314.81(b)(3)(i); biologics 601.12(f)(4)). Sept 2025 letters to Novo Nordisk and Lilly cite exactly these failures.
2. **Off-label steering.** Coaching that helps reps discuss or target unapproved uses, or analytics that target HCPs *because of* off-label prescribing, is classic intended-use evidence. Safe lanes: CFL (communications consistent with FDA-required labeling; final Q&A guidance Jan 2025 [CC — confirm current]) and SIUU (scientific information on unapproved uses; final guidance Jan 2025, not yet implemented pending OMB review — treat as policy direction).
3. **"Causing" liability.** FDCA §301(a) prohibits causing misbranding. A vendor whose tool systematically generates noncompliant promotion faces direct-involvement theories plus client indemnity claims. Caronia/Amarin First Amendment defenses protect truthful, non-misleading speech — but a March 2026 OPDP letter contradicts decades-old precedent on factual on-label statements (Sidley). [Credible secondary]

**The six controls that prevent AI-generated off-label promotion** (all six mandatory; none optional):

| # | Control | Mechanism | Acceptance criterion |
|---|---|---|---|
| 1 | **PI-grounded RAG** | Generation grounded in approved PI + client approved-claims library; no free generation | Zero outputs citing non-PI sources for claims |
| 2 | **Hard blocklists** | Unapproved uses, pre-approval promotion, unsubstantiated comparative claims blocked at generation | Blocklist test suite passes in CI on every model/prompt release |
| 3 | **CFL + fair-balance checks** | CFL-factor and fair-balance checks at generation with claim-to-source citation | Every claim sentence carries a source citation |
| 4 | **Human MLR gate** | Nothing leaves the platform without client MLR review; FDA holds AI-assisted outputs to the *same* standard as human-authored — the manufacturer owns compliance | Export technically impossible without approval state = "MLR approved" (v1 §27 approval state) |
| 5 | **Immutable logs** | Who generated, approved, exported; prompt/output/version | Log completeness verifiable per output ID (v1 §26 immutable audit logs) |
| 6 | **Contractual usage policy** | MSA prohibits client use of raw outputs without MLR | Clause present in 100% of client MSAs |

**FDA AI guidance status:** only the Jan 2025 draft "Considerations for the Use of AI to Support Regulatory Decision-Making" exists — a risk-based credibility framework that *excludes* commercial/operational AI but sets the tone (lifecycle governance, documentation, human oversight). No FDA guidance governs AI-generated *commercial* content as of Aug 2026. The 2025 letters cited unsubstantiated efficacy/comparative claims — precisely the generative-AI "semantic drift" failure mode. [Inference] This gap elevates the six controls from best practice to de facto standard of care.

────────

### 52.3 State & EU AI Laws — Applicability Table

Verify quarterly; state laws remain enforceable despite federal pressure (EO 14365, Dec 11, 2025, created a DOJ AI Litigation Task Force to challenge state AI laws; the March 20, 2026 White House National Policy Framework is non-binding and favors preemption; three congressional preemption attempts failed). [Credible secondary]

| Law | Status / effective date | Core requirement | LaunchOS applicability | Action |
|---|---|---|---|---|
| **Colorado SB 26-189** (repealed/replaced SB 24-205; signed May 14, 2026) | Effective **Jan 1, 2027**; old act enjoined Apr 27, 2026 (*xAI v. Weiser*, DOJ participating) | Transparency/notice/explanation/appeal for "consequential decisions"; healthcare covered | B2B manufacturer advice likely out of scope; rep-coaching touching *employment-type* evaluations could be covered [CC] | Counsel memo before Jan 1, 2027; design coaching outputs to avoid consequential-decision classification |
| **Texas TRAIGA (HB 149)** | **In force Jan 1, 2026** | Prohibited AI practices; healthcare-provider disclosure; AG enforcement; penalties to $200k/violation; affirmative defense for NIST AI RMF alignment; AG complaint portal due Sept 1, 2026 | Directly applicable to platform operation | Adopt NIST AI RMF / GenAI Profile now to lock the affirmative defense; document alignment |
| **Utah AIPA** | Effective May 2024, amended May 2025 | Disclose GenAI on clear request; proactive disclosure for regulated occupations in high-risk interactions; safe harbor for always-on AI self-identification | Applicable to expert and HCP-facing AI interactions | Always-on AI self-identification (safe-harbor pattern) |
| **California AB 3030 / AB 489** | AB 3030 effective Jan 1, 2025 | GenAI *patient clinical* communications need disclaimers unless provider-reviewed; AI may not imply licensure | Patient-facing only — **out of scope in v1** (see Do-Not-Do #3) | Reassess only if patient-facing features are ever added |
| **EU AI Act Art. 50** | **In force Aug 2, 2026**; high-risk obligations deferred to Dec 2, 2027 (Annex III) / Aug 2, 2028 (Annex I) by the Digital Omnibus, Reg. (EU) 2026/1744 (in force July 27, 2026) | Chatbot self-disclosure; AI-content marking | Applicable to any EU-facing expert/HCP interactions | AI-content marking + interaction self-disclosure shipped platform-wide |

**What LaunchOS does:** one disclosure/marketing component satisfies Utah, EU Art. 50, and anticipated copycat statutes; NIST AI RMF documentation doubles as the TRAIGA defense and Colorado readiness evidence.

────────

### 52.4 21 CFR Part 11 — Trigger Analysis and Build List

**Legal trigger [Verified — 21 CFR 11.1; FDA 2003 "Scope and Application" guidance, narrow reading + enforcement discretion, remains operative]:** Part 11 applies to electronic records *required by FDA predicate rules* maintained electronically, records submitted to FDA electronically, and e-signatures.

**Applied to LaunchOS:**

| Scenario | Part 11 triggered? | Rationale |
|---|---|---|
| Launch-strategy guidance, analytics, coaching records, internal audit logs | **No** | Business records, not predicate-rule records — v1 governance/audit system is legally clear |
| Platform executes/routes **Form 2253** promotional submissions | **Yes** | Records submitted to FDA electronically |
| Platform becomes system of record for **adverse-event intake / PV** from field interactions (21 CFR 314.80) | **Yes** | Predicate-rule records |
| Client designates LaunchOS to hold predicate-rule records | **Yes** | Client designation makes them required records |

**Commercial reality [Inference]:** pharma clients will *contractually* require Part 11-capable controls regardless of legal trigger. Refusing to build them loses enterprise deals; building them is cheaper than retrofitting.

**Build list (Part 11-capable, not Part 11-validated):**

- Risk-based validation documentation (FDA 2022 Computer Software Assurance guidance; GAMP 5)
- Computer-generated, time-stamped audit trails (11.10(e))
- Access and authority controls (11.10(d), (g))
- E-signature uniqueness and record linkage (11.70, 11.100–300)
- Record export capability in human-readable form

[CC — commission a formal Part 11 scope memo per module before the first enterprise MSA.]

────────

### 52.5 Expert Network Compliance

**Open Payments (Sunshine Act) — [Verified — 42 CFR 403.902/403.904; CMS]:**

- Reporting duty sits with the **applicable manufacturer client** (foreign manufacturers become applicable manufacturers once they "operate in the US" with covered products, including through U.S. agents). LaunchOS's obligation is data supply, not reporting.
- Payments routed through LaunchOS to U.S. HCPs are **indirect payments**: reportable if the manufacturer requires/instructs/causes a third-party payment to a covered recipient whose identity it knows.
- **CY2026 thresholds: report payments ≥$13.82 individually, or everything once aggregate exceeds $138.13** (CMS). Covered recipients now include PAs, NPs, CNSs, CRNAs, and midwives. Consulting payments report under "Consulting Fee."
- Pending: CMS has proposed eliminating the accredited-CME exclusion. [CC]
- **LaunchOS build:** capture reportable data elements (recipient identifiers, NPI, date, amount, form, nature, covered product) and deliver to clients on reporting timelines.

**The double-blind exclusion as a design feature [Verified — 42 CFR 403.904(h)(1), 403.902; CMS FAQ]:**

- Indirect payments via third party are **excluded if the manufacturer is "unaware" of the recipient's identity**. CMS expressly blessed double-blinded market-research models; anonymity as the *reason* for the third party is not "deliberate ignorance."
- LaunchOS's scoped-expert architecture (v1 §6 principle 9: expert access is scoped) — **expert sees only the question; client never sees expert identity** — maps directly onto this exclusion. This is a compliance asset, not just a product choice.
- **Collapse condition:** the exclusion dies if the manufacturer can identify the physician or directs payment to an identifiable group. Identified (advisory-board-style) engagements to HCPs are reportable — capture NPI + transfer-of-value data for any identified engagement mode.
- **What LaunchOS does:** double-blind is the default engagement mode; identified mode exists only as an explicit client election that flips the record into the Open Payments data-capture path.

**AKS — personal services safe harbor [Verified — 42 U.S.C. 1320a-7b(b); 42 CFR 1001.952(d)]:**

- AKS is a **criminal felony** (up to 10 years/$100k per violation; CMPL; treble-damages FCA; exclusion).
- Safe harbor requires: written signed agreement ≥1 yr (or per-engagement documentation); aggregate compensation **set in advance at FMV**; no variation with referral volume/value; bona fide needed services.
- **OIG 2026 FAQ #17: FMV alone does not cure AKS risk** — commercial reasonableness and totality of circumstances matter. [Credible secondary — CC]
- Network stays strictly consultative (advice *to* manufacturer). HCP-to-HCP promotional speaking = speaker-program territory (OIG Nov 2020 Special Fraud Alert; 2022 PhRMA Code). **Speaker programs are a red line: never build, broker, or facilitate them.**

**FMV discipline:**

- Independent FMV study commissioned before first paid engagement — never set rates ad hoc. [CC]
- Tiered hourly rate cards by specialty/seniority/KOL status, anchored to survey data (AMGA/MGMA/Doximity), refreshed annually; FMV vendors maintain pre-tiered databases (e.g., Baker Tilly kolNOW, 8M+ HCPs).
- Per-expert annual engagement and payment caps, enforced by the platform, not by policy memo.
- Typical market ranges: few hundred $/hr for community physicians to materially higher for national KOLs [Inference — research benchmark].

**COI/confidentiality (industry-standard, adopted wholesale):** screen for employment/consulting conflicts and government roles (FDA advisory committees, guideline panels, active trial investigators on client products); MNPI prohibition (Primary Global Research; Martoma/CR Intrinsic $600M+ settlement; SEC April 2022 Risk Alert on Section 204A); employer-confidential and patient-identifying information bans; mutual NDAs; per-engagement attestations; conflict walls between competing clients; recordings/notes policy; topic pre-clearance; cooling-off windows for ex-employees. AlphaSights' expert code of conduct is a reasonable public template.

────────

### 52.6 Data Protection

| Regime | Rule | LaunchOS position | Required mechanism |
|---|---|---|---|
| **HIPAA de-ID** [Verified — 45 CFR 164.514(a)-(b); OCR guidance] | Safe Harbor (remove 18 identifiers + no actual knowledge) or **Expert Determination** (qualified statistician documents "very small" re-identification risk) | Expert Determination is **the norm for claims-derived data** — assume it, not Safe Harbor, for commercial claims sources | Supplier contracts warrant de-ID method, prohibit re-identification (164.514(c)), bar onward disclosure of identified data; Limited Data Set + DUA (164.514(e)) as fallback |
| **WA MHMD / NV SB 370** (RCW 19.373, eff. Mar 31, 2024) | Broad "consumer health data" incl. *inferred* health data; opt-in consents; **WA private right of action** | HIPAA-de-identified data generally excluded; non-robustly-de-identified "patient journey" analytics could be captured [CC per dataset] | Per-dataset state consumer-health-data screen before ingestion |
| **GDPR** | LaunchOS = processor for client data (Art. 28 DPA mandatory); controller for own account data; EU HCP CRM data = personal data | Art. 28 DPA template; SCCs + transfer impact assessment or EU-U.S. DPF certification; Art. 27 EU representative if targeting EU data subjects; DPIA [CC] | DPA + SCC/DPF package ready before first EU client |
| **Japan APPI** [Verified — APPI Art. 28] | Cross-border provision requires: (i) consent after disclosing destination regime + recipient safeguards; (ii) **APPI-equivalent protection system** at recipient with ongoing (~annual) monitoring; or (iii) adequacy — **the U.S. is NOT on Japan's adequacy list (EU/EEA + UK only)**; breach notification to PPC mandatory | Equivalent-system contract or consent per client; no legal residency mandate but expect contractual regional-hosting requests | APPI transfer addendum; regional-hosting option; monitor 2026 triennial-review amendment (passed Diet July 10, 2026; effective by mid-2028: administrative surcharges, processor relief, AI-training consent exception) |
| **Korea PIPA** [Verified — PIPA Art. 28-8] | Extraterritorial; cross-border transfer (incl. remote access/offshore storage) requires separate consent with prescribed disclosures, statutory basis, or — for outsourcing/storage — contract-necessity + privacy-policy disclosure; **PIPC can order suspension of transfers**; fines to **3% of total revenue**; PIPC recognized EU adequate (Sept 2025) — **not the U.S.** | Foreign entities above thresholds must appoint a **domestic agent**; no hard residency mandate but Korean pharma clients commonly impose in-region hosting/notification [CC] | KR transfer addendum; domestic-agent appointment when thresholds met; in-region hosting option |

If consumer-facing features are ever added: FTC Health Breach Notification Rule (amended, eff. July 29, 2024) applies.

────────

### 52.7 Insurance Tower

| Layer | Covers | Norm |
|---|---|---|
| **Tech E&O** | Platform failure / bad outputs causing client financial loss | Regulated counterparties demand **$5M/claim, $10M aggregate** tech-E&O + cyber [Credible secondary — SaaS norms]; $1M–$5M minimum for enterprise vendor onboarding generally |
| **Cyber** | Breach response, regulatory defense, business interruption | Bundled with tech E&O at above limits |
| **Media liability** | Content/IP in AI outputs | Often bundled with tech E&O — confirm explicitly |
| D&O, CGL, crime/social-engineering | Corporate risks | Standard |

**CRITICAL [Credible secondary — must verify]:** ISO filed **absolute AI exclusions for general liability policies effective Jan 2026**. Do not assume any existing policy covers AI-output claims. Confirm the tech E&O form *affirmatively covers AI-output claims* in writing. Size limits to **largest contractual indemnity exposure**, not revenue.

────────

### 52.8 Indemnity Posture

| Expect (give these) | Hold the line (refuse these) |
|---|---|
| IP infringement indemnity | Client owns **all** promotional/regulatory decisions (MLR approval, 2253 submission, claims substantiation) |
| Data breach indemnity (often super-capped/uncapped) | Disclaimer of medical/regulatory/legal advice |
| Confidentiality breach | No indemnity for client misuse or noncompliant dissemination of outputs |
| Gross negligence / willful misconduct | Mutual indemnification, not one-way |
| Increasingly, **AI-output claims** (scoped, capped) | Caps tied to contract value (market: 12–24 months of fees, with carve-outs) |
| | **Never** uncapped AI-output or regulatory-penalty indemnities |

────────

### 52.9 Compliance-by-Design Module Checklist

| Module | Build-in controls |
|---|---|
| **AI launch-guidance agents** | PI-grounded RAG + approved-claims library; off-label/pre-approval/comparative-claim blocklists; CFL-factor + fair-balance checks at generation; claim-to-source citations; "not promotional material — requires MLR review" watermarking; immutable prompt/output/version logs; model cards + periodic validation; NIST AI RMF/GenAI Profile alignment (TRAIGA affirmative defense; Colorado reuse) |
| **Expert network** | Written FMV-based engagements set in advance; tiered rate cards + annual caps; conflict/MNPI/PHI attestations per engagement; screening vs. FDA advisory/investigator roles; Open Payments data capture (NPI, nature/form/amount/date/product) to clients; double-blind default preserving §403.904(h)(1) exclusion; no HCP-to-HCP speaking; recordings/notes policy; state AKS/all-payor screen |
| **Data ingestion (claims/formulary/CRM)** | De-ID warranty (Safe Harbor or Expert Determination) from every supplier; re-identification ban + audit rights; DUAs for limited data sets; WA MHMD/NV SB 370 screen; GDPR Art. 28 DPA + SCCs/DPF; APPI Art. 28 equivalent-system contracts or consent; PIPA outsourcing disclosure/consent mechanics; subprocessor register; regional-hosting option for JP/KR clients |
| **Field-force call planning & coaching** | Coaching confined to approved label + CFL/SIUU boundaries; **no off-label targeting logic** (never rank HCPs by off-label prescribing); AE-intake detection with PV handoff (→ Part 11/314.80 analysis); AI-interaction disclosure (EU AI Act Art. 50; Utah/CA analogs); Part 11-ready audit trails |
| **Platform-wide** | SOC 2 Type II + ISO 27001; tenant isolation; human-in-the-loop for any externally consumed output; EU AI Act Art. 50 AI-content marking; insurance tower; quarterly regulatory watch (FDA, CO/TX/CA/UT, PIPC, PPC, CMS Open Payments thresholds) |

────────

### 52.10 Do-NOT-Do List (Regulatory Exposure Creators)

1. **Do not** let AI generate or recommend off-label messaging, or optimize targeting on off-label prescribing patterns (intended-use evidence; OPDP/DOJ exposure).
2. **Do not** auto-publish any client-facing or HCP-facing content without human MLR review and 2253 workflows.
3. **Do not** ship patient-facing or DTC chatbots/content in v1 (DTC crackdown; CA AB 3030/AB 489; FTC).
4. **Do not** convert the expert network into promotional speaker programs, or pay above FMV or at volumes correlated with prescribing (OIG Special Fraud Alert; AKS).
5. **Do not** accept PHI "temporarily," allow experts to share patient-identifiable anecdotes, or attempt re-identification of de-identified claims data.
6. **Do not** train models on one client's confidential data for another client's benefit; no MNPI in, ever.
7. **Do not** market LaunchOS as "FDA-compliant/approved," a compliance guarantee, or a substitute for legal/regulatory review.
8. **Do not** sign uncapped AI-output or regulatory-penalty indemnities; do not assume existing insurance covers AI outputs (2026 ISO exclusions).

────────

### 52.11 Counsel-Confirmation Priority List

| Priority | Item | Needed before |
|---|---|---|
| 1 | CFL guidance current status; SIUU OMB implementation | First content-generation release |
| 2 | Part 11 scope memo per module (esp. 2253/PV edge cases) | First enterprise MSA |
| 3 | Open Payments indirect-payment SOP + double-blind exclusion confirmation | First expert engagement |
| 4 | Independent FMV study + tiered rate card | First paid expert engagement |
| 5 | Per-dataset state consumer-health-data analysis (WA MHMD/NV SB 370) | First claims-data ingestion |
| 6 | APPI/PIPA transfer mechanics per client (equivalent-system contracts vs consent; KR domestic agent) | First JP/KR client |
| 7 | Colorado SB 26-189 applicability memo (rep-coaching edge) | Jan 1, 2027 |
| 8 | Insurance form review for affirmative AI-output coverage | Policy renewal post-Jan 2026 |

*Not legal advice; counsel confirms before client contracts.*


---

## 53. Data Licensing, Rights & Integration Governance

**Status:** Corrects and expands v1 §24B (Client-Licensed Commercial Data) and operationalizes v1 §25 (Data Lineage). v1 §24A (public data) and §24C (client internal data) remain in force. Cross-reference: §52.6 (data protection), §52.9 (compliance-by-design), v1 §6 constitution principles 11, 12, 19, 20.

────────

### 53.1 The Controlling Correction to v1 §24B

v1 §24B states: "The manufacturer licenses the appropriate data; LaunchOS integrates it." Directionally correct and exactly how the industry operates — **but a client license alone does not authorize LaunchOS to ingest, store, transform, or display the data.** [Verified]

- IQVIA runs a formal **Third-Party Access (TPA) program** — the documented industry template (iqvia.com/about-us/third-party-access-program). Client licenses are **internal-use only**; release to a vendor requires a **TPA Limited License Agreement** — standalone (per client/engagement, client-initiated via TPA portal) or **master TPA** (vendor across multiple clients; client receives a TPA Certificate). **2,000+ vendors are enrolled.** [Verified — vendor documentation]
- This is not unique to IQVIA: SDNY's *FTC v. IQVIA* opinion records that "other data providers operate similar third-party licensing programs." [Verified — court record]
- **The gating risk is proven, not theoretical.** From 2017–2025 IQVIA affirmatively *blocked* clients from loading IQVIA data into Veeva Network/Nitro/Andi. The eight-year Veeva–IQVIA data-blocking war ended only with the **Aug 13, 2025 settlement** (D.N.J.; all claims dismissed with prejudice), which included master data and software third-party access agreements and IQVIA joining Veeva's Technology, AI, and Services Partner Programs. [Verified — SEC filing; Veeva 10-Q]

**What LaunchOS does:** becomes a registered third-party vendor under each data vendor's access program *before* the first client onboarding, and treats vendor-access agreements as launch-blocking infrastructure, not procurement paperwork.

**IQVIA TPA vendor prohibitions (the template for all vendors) [Verified]:**

- Use solely for the named client's benefit
- **No use "to create or improve any Vendor offering"**
- No benchmarking against IQVIA data
- Return/destroy at engagement end; minimum-necessary sharing
- Client oversees vendor safeguards; **IQVIA may audit/inspect the vendor's environment**

────────

### 53.2 Vendor-by-Vendor Table

No vendor publishes rate cards. Every price below is a procurement-benchmark or government-contract data point, labeled: **[V-P]** verified primary · **[S]** credible secondary · **[I]** inference.

| Vendor / product | Ownership | What it is | Integration lane | Cadence | Price evidence | Third-party path |
|---|---|---|---|---|---|---|
| **IQVIA** Xponent, DDD, NPA, LAAD | Public (IQV) | Syndicated Rx: Xponent prescriber-level (~93% retail coverage); DDD outlet-level non-retail; NPA national projected | SFTP, cloud buckets, APIs, E360, Snowflake DaaS | NPA monthly (12–18 days post-month); Xponent weekly/monthly | IMS Xponent $1.2M/yr (2001 SEC contract — dated) [V-P]; DLA sole-source $6.75M/3yr 2023 [V-P]; Vendr $8–20K/user list, $50–100K minimums [S] | **TPA program required**; 2,000+ vendors enrolled [V-P] |
| **IQVIA OneKey** | IQVIA | HCP/HCO reference: 10.7M US professionals, 696K orgs; ~25M/6M global | APIs, SFTP, Snowflake DaaS (zero-copy) | Continuous; ~1.5M updates/mo | Five- to six-figure annual licenses [S] | Same TPA program |
| **Veeva Compass** (Patient/Prescriber/National/Pathway) | Public (VEEV) | De-identified US longitudinal patient data + projected prescriber/national; 4,000+ brands; 300M+ patients, 80B+ records [V-P] | SFTP, S3, Azure, Veeva CRM, Nitro; Veeva ID-linked | Daily (Patient) | Per-brand, unlimited access [V-P]; no price published; seven-figure brand deals implied [V-P→I] | Per-customer data agreements; no public generic TPA |
| **Veeva OpenData** | Veeva | HCP/HCO reference ~12M HCPs/2M HCOs US [S]; AMA data removed Jan 2022 [V-P] | Network MDM, Vault CRM, APIs, files | Continuous | No public pricing | Customer Veeva agreements |
| **MMIT (Norstella)** | Norstella (~$5B PE holding: Warburg Pincus, WCAS, Hg, Ardian) | Formulary/coverage/restriction/medical policy; ~98% US covered lives [S] | **MMIT API (real-time)**; FormTrak native Veeva CRM app | Near-real-time alerts | $50K–$200K+/yr [S — competitor-published, weak] | Enterprise subscription; **no public generic TPA** — bespoke negotiated terms [I] |
| **Komodo** Healthcare Map, Prism, MapEnhance | Private VC ($3.3B val 2021) | 330M de-identified US/Canada patient journeys; pre-linked labs/genomics/EHR/SDoH | SaaS apps, Sentinel, **Snowflake Marketplace (2026)**, APIs | ~15M encounters/day claimed | Vendr: median **$1M/yr**, range $120K–$4.96M [S] — most expensive line in the stack | Sentinel licenses customer data linking; no public generic TPA [I] |
| **Definitive Healthcare** | Advent-controlled; Nasdaq (DH) per Nov 2024 8-K | HCO/IDN/physician commercial intelligence, claims analytics | Platform + paid API + Salesforce/Snowflake connectors | Real-time/monthly/quarterly tiers (priced) | Vendr: $25–60K small; $100–250K mid; $500K+ enterprise; 3–5% escalators [S] | API/connector fees separate; per-user |
| **H1** | Private VC | HCP/KOL knowledge graph; 12M+ HCP profiles, 14.6B claims, $73B payments data | SaaS; Salesforce LS Cloud integration | Real-time claimed | No verified pricing [I: likely $30–60K+ minimums] | Enterprise agreement |

**Planning ranges for one emerging-biopharma brand [I]:** IQVIA syndicated bundle (Xponent + DDD + NPA + OneKey) $0.5M–$2M+/yr; MMIT single-brand formulary + API low-to-mid six figures; Komodo $1M+/yr median.

**CRM integration target:** Veeva–Salesforce partnership expired Sept 2025; Salesforce-based Veeva CRM end-of-support Dec 2029; Vault CRM GA April 2024. **CRM integration targets Vault CRM.** [V-P]

────────

### 53.3 Three Ingestion Lanes — Architecture

| Lane | Mechanism | Vendors mapped | Latency profile |
|---|---|---|---|
| **1. Snowflake secure share** | Zero-copy data sharing; no egress, no duplication | OneKey, Komodo (Marketplace, Capacity Drawdown), Definitive (connector) | Near-real-time to daily |
| **2. Scheduled SFTP/S3/Azure drops** | Bulk file delivery into tenant-scoped landing zones | Compass (SFTP/S3/Azure), IQVIA syndicated (SFTP/cloud buckets) | Daily (Compass Patient) → monthly +12–18 days (NPA) |
| **3. Pull APIs** | REST/GraphQL queries on demand | MMIT (real-time REST), OneKey, Definitive (paid API), H1 | Real-time (MMIT) |

[Inference — architectural takeaway from research.] Design rule: every feed lands in tenant-scoped storage with lineage tags applied at ingestion (v1 §25), before any transform. Latency SLAs are contract variables per vendor — capture them in the registry (§53.5).

────────

### 53.4 Redistribution & Derivative Rights — the Core Legal Risk

**Derived data is licensed data [Verified — IQVIA TPA language]:** "IQVIA Data" expressly includes "any information derived, directly or indirectly… regardless of whether IQVIA, the client or a third party creates it (e.g., aggregated, projected, combined data)"; combined data remains subject to IQVIA terms. Default language sweeps derivatives into the licensed definition.

**Enforcement is real:** *Inovalon Insights v. Komodo Health* arbitration award (Sept 29, 2023) — a claims licensor pursued a platform over downstream applications expressing licensed data in non-summary form. [Verified — court record]

**Processor vs. sublicensor boundary [Inference, grounded in TPA prohibitions]:**

| LaunchOS posture | Permitted? |
|---|---|
| Client-scoped TPA processor — ingest, transform, display for the named client only | Yes — the default and only v1 posture |
| Multi-tenant pooling of licensed records | **No** |
| Cross-client models trained on licensed data | **No** |
| Resale of derived metrics containing licensed signal | **No**, absent a direct commercial redistribution agreement with the vendor |

**Benchmark / Failure Lab implication — controlling design constraint:**

- LaunchOS benchmark assets (cross-launch readiness benchmarks, Failure Lab pattern library) **must be provably free of licensed data and derivatives.** IQVIA's default language would otherwise capture them.
- Mechanism: (i) shared models and benchmarks train only on the provably-clean public-data lake (§53.6) and LaunchOS-generated telemetry; (ii) **written carve-outs per vendor** specifying exactly which LaunchOS-generated aggregate assets may be retained — negotiated into each master access agreement, never assumed; (iii) policy engine blocks licensed-tagged records from any shared-model or benchmark pipeline (§53.5).

**What LaunchOS does about audits:** IQVIA reserves compliance-review rights over vendors holding its data [Verified]. A failed audit can terminate client service continuity — an existential SaaS risk. Response: audit-ready evidence store (SOC 2 + access logs + registry + destruction certificates) maintained as a standing artifact, not assembled on demand.

────────

### 53.5 Data Rights Management (DRM) Framework

**Contract clauses needed (vendor-side, mirrored into client MSAs):**

1. Vendor-side master access agreements (IQVIA master TPA; equivalents with Veeva, Norstella/MMIT, Komodo, Definitive, H1) naming LaunchOS as approved processing vendor across clients.
2. Client-side flow-downs: permitted-use enumeration; sole-benefit restriction; minimum-necessary sharing; derived-data definition acknowledging vendor rights in derivatives/combined data; return/destroy-on-termination with certification; audit cooperation; source-data pass-through obligations; breach/termination cascade (vendor termination → LaunchOS suspension → client notification).
3. Explicit carve-outs: which LaunchOS-generated aggregate/benchmark assets may be retained *only if* free of licensed data and derivatives — in writing, per vendor.

**Registry fields (per ingested dataset/feed):**

```
vendor · product/offering · contract ID + TPA license/certificate ID ·
client (beneficiary) ID · permitted use codes · derived-data policy ·
residency constraints · refresh cadence + SLA · expiration/termination date ·
destruction-deadline trigger · audit contact ·
source-restriction flags (e.g., AMA, prescriber-level)
```

**Operational controls:**

- Tenant-scoped storage with hard isolation (v1 §26)
- Per-record lineage tags (vendor + license + permitted-use) through every transform — extends v1 §25
- Policy engine **blocking cross-client query or model-training on licensed-tagged records** (enforces v1 §6 principles 11–12 at the data layer)
- Separate **provably-clean public-data lake** powering all shared models and benchmarks
- Quarterly license-vs-usage reconciliation against the registry
- Documented destruction workflows with **destruction certificates** on engagement end
- Audit-ready evidence store (SOC 2 + access logs) given IQVIA vendor-audit rights

**Risk watchlist [Verified/Inference per research §7]:** vendor concentration (FTC called IQVIA "the world's largest healthcare data provider" and blocked its DeepIntent acquisition — PI Dec 2023, abandoned Jan 2024); inter-vendor litigation recurrence (TPA denial can recur with any vendor pair); 3–5% annual price escalators [S] — negotiate caps at signing; PE ownership churn (Norstella, Definitive/Advent) — contract change-of-control and continuity protections; source-rights pass-throughs (AMA exited US OpenData 2022 — downstream restriction cascades reach LaunchOS through client contracts).

────────

### 53.6 Cold-Start Public-Data Stack — and Its Limits

Genuinely buildable before any client license (free, public, API/bulk) — implements v1 §6 principle 19:

| Source | Content | LaunchOS use |
|---|---|---|
| **FDA** (Drugs@FDA, NDC Directory, openFDA APIs) | Labels, AEs, recalls, approvals | First Launch Radar, competitor monitoring |
| **ClinicalTrials.gov API v2** | Competitive pipeline, readouts, site/investigator intelligence | Pipeline features, KOL/investigator research |
| **CMS** (data.cms.gov) | Medicare Part D Prescribers by Provider and Drug (NPI-level), Physician & Other Practitioners, Part D formulary files, Medicaid Drug Utilization, hospital price transparency | Readiness-workflow skeleton, market-intelligence baseline |
| **Open Payments** | Industry→HCP payment flows | KOL mapping |
| **NPPES/NPI registry** | HCP identity spine | Anchors a LaunchOS master-data key **before** OneKey/OpenData exist |

**Limits [Inference]:** Medicare-heavy, lagged 12–18 months, no commercial-payer visibility, no formulary tier detail, no patient journeys. Sufficient for demo, readiness-workflow skeleton, pipeline/KOL features; **insufficient for targeting, incentive compensation, or market-access pull-through.**

**Minimum viable licensed dataset per launch archetype [Inference]:**

| Archetype | Minimum licensed set | Skip initially |
|---|---|---|
| **Specialty / rare disease** | MMIT (access is the launch risk) + one patient-level source (Compass Patient *or* Komodo) + HCP reference (OneKey/OpenData) + hub/SP feeds (client-owned — confirm SP contracts) | Xponent (retail-weighted) |
| **Primary care / retail** | Xponent (or Compass Prescriber) + NPA + HCP reference + MMIT lite | Patient-level optional at launch |
| **Oncology / infused (buy-and-bill)** | DDD + Compass Patient (captures in-office administration) + MMIT medical-benefit policies | — |

────────

### 53.7 Action Items — Sequenced

| # | Action | Owner | Trigger / deadline |
|---|---|---|---|
| 1 | Execute **IQVIA master TPA**; enroll in **Veeva partner program** (post-settlement programs now include IQVIA participation); open bespoke third-party terms with Norstella/MMIT and Komodo | BD + data-rights counsel | **Before first enterprise onboarding** — otherwise onboarding stalls weeks-to-months per vendor |
| 2 | Budget line for data-rights counsel (master access agreements, benchmark carve-outs, client MSA flow-down template) | Finance | Current budget cycle |
| 3 | Build data-rights registry (§53.5 fields) and per-record lineage tagging | Platform engineering | Before first licensed-data ingestion |
| 4 | Stand up provably-clean public-data lake; wire policy engine to block licensed-tagged records from shared models/benchmarks | Platform engineering | Before any benchmark/Failure Lab asset is published |
| 5 | Negotiate written derivative/benchmark carve-outs into each master access agreement | Data-rights counsel | With each vendor agreement, never after |
| 6 | Quarterly license-vs-usage reconciliation + destruction-certificate workflow; audit-ready evidence store | Ops + compliance | Standing, from first license |
| 7 | Price-escalation caps (target ≤3–5%/yr) and change-of-control continuity clauses in every vendor agreement | BD | At each signing/renewal |

**Verification gaps (stated honestly):** no verified pricing for Veeva Compass, OpenData, MMIT, or H1 — all figures are procurement-benchmark or competitor-published secondaries; "Compass Payer" seen only in one third-party guide — confirm on veeva.com; Definitive: Advent control confirmed via Nov 2024 8-K, no verified completed take-private; MMIT refresh cadence and Norstella/Komodo third-party vendor terms not publicly documented — confirm in contracting. **Why it matters:** budget ranges in §53.2 drive client TCO conversations; treat them as planning figures, not quotes, until first signed agreements.


---

## 54. Expert Network Operations, Economics & Legal

Operationalizes v1 §9 (Expert Tenant) and §33 (Expert Council). Resolves gaps MIS-08 (expert-network economics & legal), THN-06 (undefined INTERNAL VALIDATION step), ASM-04 (expert supply elasticity), RSK-06 (conflict-of-interest leakage), and CON-06 (conflict policy). Labels: **[Verified]** regulatory text / SEC / first-party · **[Reported]** credible third-party · **[Inference]** synthesis · **[Assumption]** planning lever.

---

**54.1 Industry benchmarks**

Public per-call pricing at major networks is not disclosed; figures come from buyer-side reviews, expert communities, aggregators, and GLG's 2021 S-1 (IPO later withdrawn).

| Network | Model | Client price [Reported] | Expert pay [Reported] | Margin / take | Scale (claimed) |
|---|---|---|---|---|---|
| **GLG** | Membership ($20K–$50K up to $250K–$500K+ enterprise) + per-call | ~$1,000–$2,500/hr effective; avg ~$1,350 | $75–$500+/hr (marquee rumored $5,000) | **>70% audited segment contribution margin**; revenue $572M (2019) / $589M (2020); Adj. EBITDA 19–22% [Verified — SEC S-1] | 1M+ Council Members |
| **AlphaSights** | Annual (~$25K+) + per-call, custom recruiting per brief | ~$1,000–$1,500/hr | $150/hr junior floor; $250–$400 mid-senior; $600–$1,000+ ex-C-suite; payout 30–45 days | Not public; est. rev $500M–$1B unaudited; 2024 ~$4.2B valuation | ~75K active |
| **Guidepoint** | Per-consult + light subscriptions | avg ~$1,200/hr | $300–$500 typ; $500–$1,000+ VP/C-suite; payout 2–6 weeks | Not public | 1.4M–1.75M advisors |
| **Third Bridge** | Credits/prepaid ($50K tier) + Forum transcript library | avg ~$1,350/hr | Expert-set, markup applied | Not public | 1.5M claimed |
| **NewtonX** | Project-based; subscriptions $30K–$100K+; $5K min project | ~$165 per 10-min survey | $40–$75/survey; $100–$200/call (≤Director), $200–$350 (above); >$500 risks client rejection | Est. rev ~$30M (2023) | 1.1B-record knowledge graph |
| **Within3** (pharma) | Enterprise SaaS annual commitments; async advisory boards + Launch Intelligence | ~$100K/yr programs; $20–25K pilots | n/a | SaaS model; $100M+ Insight Partners round (2020) | All top-20 pharma (claimed) |
| **Techspert** (life sci) | Per-call AI matching | Not public | Pre-agreed | Not public | 25M contactable; 1-in-4 to 1-in-3 experts never consulted before |

**Structural facts that set LaunchOS's design** [Reported unless noted]:
- Industry profit margins 30–45% (Integrity Research 2021); GLG's audited >70% contribution margin is the ceiling proof for the model.
- Expert share of the client dollar is commonly only **15–40%**; 65% of experts earned <$400/consult while clients paid $1,000–$1,500 (Woozle "State of Expert Economy 2025"). Experts wait 30–45 days for payout. **This is the supply-side wedge.**
- Markup is compressible: Inex One averages $1,050/hr pay-as-you-go vs $1,350 GLG/Third Bridge.
- Standard vetting stack: profile recruiting on LinkedIn, annual re-signed T&Cs, compliance tutorials, per-project screening questions, employer-consent checks, paid time for experts who terminate drifting calls [Verified — GLG first-party].

---

**54.2 LaunchOS economics**

Recommendation [Inference, grounded in benchmarks]: **hybrid — engagement credits inside SaaS tiers + transparent cost-plus markup on honoraria.**

| Parameter | Industry norm | LaunchOS policy |
|---|---|---|
| Markup on honorarium | 100–300% (hidden) [Reported] | **30–40% transparent markup** covering sourcing, vetting, compliance, scheduling, payment; shown as a separate invoice line |
| Contribution margin on network line | GLG >70% (audited ceiling); industry 30–45% | Markup alone yields **23–29% line margin** (30–40% markup on cost); the **55–70% contribution target applies only to credit-bundled expert revenue**, where margin is carried by the platform tier it is packaged into [Inference] |
| Expert share | 15–40% of client dollar | **≥80% of the honorarium pool to the expert** — the recruiting wedge |
| Expert payout | 30–45 days | **Net-14** after client acceptance; client funds held at booking (escrow-style hold-until-acceptance); LaunchOS is merchant of record; 1099-NEC / W-8BEN at onboarding |
| Supply cost bands | — | Senior operators $250–$500/hr; ex-VP/C-suite or scarce niches $500–$1,000+; practicing HCPs per FMV bands ~$300/hr community MD to ~$1,000/hr national KOL (§54.6) [Reported] |
| Packaging | Six-figure standalone memberships | **Expert Credits bundled in platform tiers** (§50.6): 1 credit = 1 hr senior consult or 3 survey responses; overage at cost-plus; rollover one quarter + annual true-up. **No standalone six-figure network access fee.** |

---

**54.3 Cold-start playbook: the first 25–50 experts** — fixes ASM-04 (scarce launch experts disengage from platforms with sporadic deal flow).

1. **Sourcing channels** [Reported/Inference]: LinkedIn boolean search (the industry's primary engine); recently retired/transitioned pharma commercial VPs and directors; conference speaker rosters (pre-vetted willingness); fractional-executive communities; boutique launch-consultancy partners; referrals with **$250–$500 activation bounty** paid on the expert's first completed paid engagement.
2. **Founding council.** First 25 experts receive "LaunchOS Commercialization Council — Founding Member" designation. Within the founding council, **3–5 anchor experts receive a guaranteed retainer of $1,500–$3,000/month × 3 months** (or guaranteed minimum paid engagements; ~$13–45K total commitment), extended to further members only if activation stalls [Inference — aligned to §55 R-11]. This converts sporadic deal flow into a bankable commitment during cold start. Council tiers: Council Member / Senior Fellow; the vetting standard is published as a client-facing quality signal [Inference, modeled on GLG Council Members].
3. **Pitch to experts** [Reported pain points → LaunchOS answer]: 15–40% share → ≥80% of honorarium pool; 30–45 day payout → net-14; rate caps → expert-set rate within bands; open-ended calls → scoped, structured engagements.
4. **Credentialing** [Inference + Verified GLG model]: employment verification; license lookup (NPI/state); publication/trial records; **OIG exclusion list + FDA debarment list screening** (pharma-specific must); employer-consent attestation; annual re-attestation. Screen out FDA advisory committee members, guideline panelists, and active trial investigators on client products from conflicting engagements.
5. **Quality scoring clients can trust** [Inference; Techspert metrics template]: publish % profiles accepted (Techspert reports 70% client acceptance vs ~35% implied industry standard [Reported — vendor claim]), client rating per engagement, response latency, re-booking rate. Expert compensation is partly rating-weighted demand.
6. **Validation step before launch:** 10 expert interviews on minimum-engagement terms (per ASM-04 fix) run alongside the 20 buyer interviews (§50.3).

---

**54.4 Conflict engine** — fixes RSK-06. Dominant risk is trade-secret/competitive-intel leakage across competing manufacturer clients, mitigated by architecture (scoped questions, blinded files, v1 §9 Expert Engagement) plus policy:

| Control | Mechanism |
|---|---|
| **Employer blocking** | Expert declares current/recent employers and consulting clients at onboarding; system hard-blocks engagement assignment where employer = client or client's direct competitor [Verified GLG practice, extended] |
| **Cooling-off windows** | 12–24 months for ex-employees of a direct competitor before engaging on that TA/company [Inference — industry cooling-off practice] |
| **TA exclusivity option** | Client may purchase TA exclusivity at premium comp; absent exclusivity, concurrent competing engagements are capped and logged [Inference] |
| **Per-engagement attestation** | Expert re-attests conflicts, TA + company matching, no-confidential-info undertaking at every engagement acceptance |
| **Audit log** | Every expert data view, attestation, and block/override logged immutably (v1 §26 audit trail); reviewed quarterly |
| **Neutrality policy** (fixes CON-06) | Published conflicts-of-interest policy: disclosure + recusal from vendor scorecards (v1 §16.6). Vendor neutrality is absolute for the RFP engine; it is not monetized. This forfeits referral revenue deliberately — recorded as a decision in the Decision Ledger. |

---

**54.5 Legal structure**

1. **Classification (US): non-agent independent contractor** — the GLG template. GLG's non-agent designation is credited with shielding it when experts were implicated in the SAC/CR Intrinsic–Martoma matter [Verified — law review]. IRS/DOL tests apply; CA AB5 ABC test prong-B danger if expert work is LaunchOS's "usual course of business" [Verified]. Mitigants: multi-client marketplace structure, expert-set rates/availability, experts use own tools, preference for experts with consulting entities/LLCs. AB5 exempts licensed physicians and certain B2B arrangements (Borello) [Verified]. Willful misclassification: $5K–$25K/violation + back taxes [Verified]. Fiverr's 20-F treats misclassification as material risk — contract structure alone is not a defense [Verified]. **[CC — classification counsel review before first paid engagement.]**
2. **International:** UK IR35 — fee-payer bears status determination (small-company exemption); penalties to 100% of unpaid tax [Verified]. KR/JP/EU engagements route through **EOR/COR rails**; permanent-establishment and withholding analysis required [Inference — local counsel; KR/JP payment friction incl. JP qualified-invoice system not publicly documented — unresolved, obtain local tax counsel + pilot-client procurement review].
3. **IP:** deliverable work product assigned to LaunchOS (or exclusive irrevocable license) **on payment**, with carve-outs for background IP and general know-how — overbroad "all inventions" clauses chill senior experts [Reported]. LaunchOS grants the client ownership/exclusive license in the MSA. Verbal content: recorded/transcribed with consent, assigned as work product [Inference].
4. **Liability & insurance:** disclaim fitness-for-purpose; **liability capped at fees paid** [Reported — industry standard]. LaunchOS carries Tech E&O + professional liability responding to healthcare-consulting claims; senior experts carry own E&O where feasible [Inference]. Cross-ref insurance program: §52.
5. **Indemnity flow-through:** expert indemnifies LaunchOS for confidentiality/IP/MNPI breach; LaunchOS indemnifies the client for platform-side failures but **disclaims liability for expert opinions** — GLG's non-agent structure is the drafting template [Verified analysis / Inference].

---

**54.6 Compliance integration** (full framework: §52; regulatory detail: regulatory_compliance research §4)

- **Double-blind default.** Expert sees only the question and structured context (v1 §9); the client does not see HCP expert identity. Under 42 CFR §403.904(h)(1)/§403.902, indirect payments via a third party are excluded from Open Payments reporting if the manufacturer is "unaware" of the recipient's identity — CMS expressly blessed double-blinded market-research models [Verified]. **Collapse conditions:** the exclusion fails if the manufacturer can identify the physician or directs payment to an identifiable group; UI and contracts must enforce the blind.
- **Identified engagements are reportable.** Advisory-board-style (non-blind) HCP engagements: capture NPI + transfer-of-value data elements (recipient identifiers, date, amount, form, nature, covered product) and hand to clients on reporting timelines. CY2026 thresholds: ≥$13.82 individually, or everything once aggregate >$138.13 [Verified — CMS].
- **FMV rate cards + annual caps.** Tiered hourly rate cards by specialty/seniority/KOL status, presented not negotiated, anchored to survey data, refreshed annually; per-expert annual engagement/payment caps. Typical ranges ~$300/hr community MD to ~$1,000/hr national KOL [Reported, anecdotal]. OIG 2026 FAQ #17: FMV alone does not cure AKS risk — commercial reasonableness and totality of circumstances matter [Verified]. **[CC — commission an independent FMV benchmark dataset (kolNOW-type, e.g., Baker Tilly 8M+ pre-tiered HCPs) rather than rely on open sources; never set rates ad hoc.]**
- **AKS posture:** written agreement, compensation set in advance at FMV, no variation with referral volume/value — personal services safe harbor (42 CFR 1001.952(d)) [Verified]. The network stays strictly consultative (advice *to* the manufacturer).
- **No HCP-to-HCP speaking.** LaunchOS does not operate speaker programs (OIG Nov 2020 Special Fraud Alert; 2022 PhRMA Code) [Verified]. Any client request for expert-to-prescriber promotional activity is refused and logged.
- **MNPI controls:** topic pre-clearance vs. affiliations, bar on discussing current employers, opening scripts, recording with consent; enforcement record (Primary Global, Martoma/CR Intrinsic $600M+, SEC April 2022 Risk Alert on §204A) is the design spec [Verified]. LaunchOS clients are manufacturers, not hedge funds, but experts who are current/former employees of competing public pharma companies create equivalent MNPI/trade-secret exposure [Inference].

---

**54.7 Non-circumvention** — fixes MIS-08's disintermediation gap (client hires expert directly).

- **Contractual:** MSA and expert agreement include 24-month non-circumvention covering engagements initiated through the platform; liquidated damages = a defined buy-out fee (conversion fee model, standard in staffing/expert industries) [Inference].
- **Structural (the real moat):** the value is in workflow integration, not contact access. The expert's deliverable lands inside the tenant's Decision Ledger, evidence chain, and rules engine with INTERNAL VALIDATION and audit trail; a direct hire gets the person but none of the integrated system, credentialing, FMV compliance wrapper, or payout rails. State this in sales material; do not rely on the clause alone [Inference].

---

**54.8 INTERNAL VALIDATION step — specified** — fixes THN-06 (v1 §9 lifecycle step with no owner, rubric, SLA, or contradiction handling; with two founders this is the throughput bottleneck).

- **Validator role:** Commercial/launch-operator founder in Waves 1–2; delegated to a trained Senior Fellow (paid per validation at a fixed rate) once engagement volume exceeds ~8 concurrent expert deliverables [Assumption]. The validator is never the expert's recruiter for that engagement.
- **Rubric (score 1–5 each, recorded on the engagement):** (a) **evidence** — claims cite sources or documented experience; (b) **specificity** — actionable at the decision at hand, not generic; (c) **applicability** — fits the client's archetype, stage, TA, and constraints; (d) **compliance** — no confidential/MNPI/off-label content. Any dimension <3 → return to expert with structured feedback; second failure → reassign.
- **SLA:** validation complete within 2 business days of SUBMITTED; client review opens on validation pass; overdue validations escalate to both founders at day 3.
- **Contradiction-resolution protocol:** when an expert answer contradicts LaunchOS methodology or a prior validated answer, the validator does **not** silently pick one. Record both positions, the validator's recommendation, and the client's final disposition in the **Decision Ledger** (v1 §30/§37.10; spec: §56). Recurring contradictions on the same methodology point trigger a methodology review and, if warranted, a Rules Manager change with version history (v1 §13). Unresolved disagreements remain visible to the client — the product must not manufacture consensus (v1 §6.7).


---

## 55. Company Risk Register & Mitigations

**Purpose.** v1 built a sophisticated risk engine for *client launches* (§12, §13, §19) and no risk register for *LaunchOS itself* (MIS-05). This section is that register. It is a living operating artifact — not a fundraising appendix.

**Conventions.**

- Likelihood / Impact: **H / M / L** against a 24-month horizon. Impact rated against company survival (H = existential or company-ending scenario; M = material setback to a wave gate or funding event; L = absorbable).
- Owners: **CF** = Commercial/Launch Operator founder; **PF** = AI/GTM/Product founder; **Counsel** = external counsel; **Both** = shared.
- Every mitigation names a concrete mechanism, not an intention. Cross-references point to the v2 section owning the mechanism.
- Evidence labels: [Verified] = sourced fact with URL; [Inference]/[Assumption] = labeled as such.

### 55.1 Register

| ID | Risk | Category | Likelihood | Impact | Mitigation | Owner | Review trigger |
|---|---|---|---|---|---|---|---|
| R-01 | **Key-person concentration — either founder.** All buyer relationships, methodology, and expert network sit with CF; all product/AI with PF. Loss of either is company-ending. | Operational | M | H | (1) Dogfood the product: methodology encoded in platform as it is built, not held in founder memory (RSK-03 fix). (2) Key-person insurance on both founders before first institutional round. (3) Cross-train: CF can ship a scoped commit; PF can run a sales call from playbook. (4) Contractor bench with signed MSAs (§60.4). (5) Board/continuity plan published to enterprise buyers (also mitigates R-10). | Both | Quarterly; immediately on any founder health/availability event |
| R-02 | **Rep-facing AI promotional exposure (RSK-01).** Wave 5 gives reps AI-drafted call notes, NBA, coaching. Generated rep-facing content about a marketed product is promotional material subject to MLR/FDA promotion rules (21 CFR 201.100(d), 202.1); "we don't replace MLR" does not exempt content *generated inside* LaunchOS. Off-label drift in a rep-facing agent is an OPDP/APLB event for the client — existential for LaunchOS. Enforcement climate: FDA sent thousands of templated letters, ~100 cease-and-desists, 125+ warning/untitled letters in 2025 [Credible secondary: Sidley/FDA/Ropes & Gray summaries in research/regulatory_compliance.md §1]. | Regulatory | M (H if Wave 5 ships uncontrolled) | H | (1) Wave 5 gated behind regulatory-counsel review — hard gate, not advisory (§60.3 amendment e). (2) Rep-facing outputs rendered only from client-MLR-approved content fragments; **no free generation**; PI-grounded RAG + approved-claims library. (3) Off-label classifier + hard refusal; no off-label targeting logic ever. (4) Immutable prompt/output/version logs. (5) Contractual usage policy: raw outputs may not leave platform without client MLR (research/regulatory_compliance.md §1 controls i–vi). | PF + Counsel | Before any Wave 5 scoping; on any OPDP/APLB letter citing AI-generated content; quarterly regulatory watch |
| R-03 | **E&O / hallucination liability on advisory outputs (RSK-02).** LaunchOS outputs drive hiring, spend, launch-timing decisions. A hallucinated benchmark or wrong readiness score acted on creates direct damages claims; confidence labels reduce but don't eliminate. | Legal | M | H | (1) MSA liability caps (12–24 months of fees), "decision-support, not advice of counsel/compliance/regulatory" disclaimers (§62). (2) Tech E&O + media liability in force before first paid engagement; **confirm policy form affirmatively covers AI-output claims** — ISO reportedly filed absolute AI exclusions on GL forms effective Jan 2026 [Credible secondary — must verify: regulatory_compliance.md §6]. (3) Internal incident-review process for material AI errors, logged in Decision Ledger (§56). (4) Evidence/confidence/freshness labels on every material output (v1 §27) — enforced by acceptance criteria, not aspiration. (5) Golden eval sets + pre-deploy eval gates (MIS-16). | PF (controls) / CF (contracts) | Any client reliance dispute; any material AI error incident; insurance renewal |
| R-04 | **Data-license termination / derived-data purge (RSK-04).** IQVIA TPA terms define "IQVIA Data" to include derived data "regardless of whether IQVIA, the client or a third party creates it" and require return/destroy at engagement end [Verified: research/data_licensing.md §4]. Client churn or license lapse may force purge of derived data — potentially contaminating benchmarks and Failure Lab contributions. | Legal | M | H | (1) Contract for derived/anonymized learning rights **up front** in every engagement; written per-vendor carve-outs defining which LaunchOS-generated aggregates are provably free of licensed data (§53). (2) Per-record lineage tags (vendor + license + permitted-use) through every transform so purge scope is computable. (3) License-aware retention automation with certified destruction workflows. (4) Shared models trained only on the provably-clean public-data lake — never on licensed-tagged records (§53 controls). | PF + Counsel | Any client termination; any vendor license change; quarterly license-vs-usage reconciliation |
| R-05 | **IQVIA TPA policy change.** IQVIA's Third-Party Access program is a unilateral gate: 2017–2025 it affirmatively blocked clients loading IQVIA data into Veeva platforms [Verified: Veeva 10-Q, data_licensing.md §1]. IQVIA reserves vendor audit rights; failed audit terminates service continuity. Policy tightening could suspend LaunchOS ingestion for all IQVIA-licensed clients simultaneously. | Strategic | M | H | (1) Master TPA enrollment + Veeva partner program + negotiated Norstella/Komodo terms **before** first integration-dependent engagement (§53). (2) Multi-source architecture: every IQVIA-dependent module has a defined degraded mode (Veeva Compass, Definitive, public CMS/NPPES fallback per §53.6). (3) Audit-ready evidence store (SOC 2 + access logs) treating IQVIA vendor-audit as a standing condition, not an event. (4) Quarterly license-vs-usage reconciliation to pre-empt audit findings. | PF | IQVIA TPA terms change notice; any partner-program policy update; annually at minimum |
| R-06 | **Vendor concentration (data + infrastructure).** FTC called IQVIA "the world's largest healthcare data provider" [Verified: FTC v. IQVIA record, data_licensing.md §7]; Supabase/Vercel/one LLM provider on the infra side. Concentration = pricing power + unilateral policy risk. | Strategic / Technical | M | M | (1) Provider-agnostic AI gateway + model routing (v1 §36) with documented swap runbook; no single-model dependency in production paths. (2) Data-source diversification per §53 minimum-viable-dataset-per-archetype (no archetype depends on one vendor for its core question). (3) 3–5% annual escalator caps negotiated at signing [benchmark, data_licensing.md §7]. (4) Change-of-control and continuity protections in vendor contracts (PE churn: Norstella, Definitive/Advent). | PF | Vendor M&A announcement; renewal negotiations; infra cost variance >20% |
| R-07 | **Incumbent fast-follow (RSK-05).** Axtria shipped "AI-Powered Launch Excellence for Emerging Pharma" Nov 13, 2025 with $240M Kedaara backing; IQVIA EBP claims 1,200+ EBP clients and 650+ first-time launchers since 2023 [Verified: research/competitive_landscape.md §1–2]. ZS has 50+ ZAIDYN products. Every consultancy has productized a methodology tool in the last 24 months. | Market | H | H | (1) Compete on the one position incumbents structurally cannot copy: vendor-neutral build/buy/rent arbitration — copying it attacks their own services P&L (competitive_landscape.md §5.3). (2) Speed to benchmark data and referenceable launches over feature breadth (§58). (3) Decision Ledger switching-cost moat (§56.5). (4) Quarterly competitive review against named list (Axtria, IQVIA EBP, ZS ZAIDYN, Trinity Accelerator, Veeva/Salesforce agents, Komodo up-stack). | CF | Named-competitor launch in the readiness/decision-layer space; any lost deal to an incumbent |
| R-08 | **IQVIA account incumbency.** 650+ first-time launchers since 2023 means IQVIA is already in most target accounts [Verified: competitive_landscape.md §6.2]. Beachhead conversations start against an entrenched vendor, not a blank page. | Market | H | M | (1) Position as the layer that *manages* IQVIA spend — winnable frame; displacement is not (competitive_landscape.md §6.2). (2) RFP engine and vendor scorecards make IQVIA's role *visible and arbitrable* — value even where IQVIA stays. (3) First-20-account plan maps incumbent footprint before outreach (§49). | CF | Every qualified discovery call: log incumbent stack; win/loss coded by incumbent presence |
| R-09 | **Aktana-style absorption of point solutions.** Aktana — 12 years, 200M data points, Genentech/Sanofi/Abbott clients — ended in a trade sale to PharmaForceIQ (Jan 2026), not independence [Verified: competitive_landscape.md §2]. Point solutions in pharma commercial AI get absorbed. | Strategic | M | H | (1) Build the cross-functional decision/governance layer — the function nobody owns — rather than another field-NBA point solution (competitive_landscape.md §2 pattern). (2) Accumulate the two assets acquirers cannot replicate: cross-launch benchmark corpus + tenant decision histories (§56, §58). (3) Capital plan reaches seed gate before cash forces a sale (§51, §60.5). (4) If acquisition inbound: Decision Ledger + Failure Lab corpus are the priced assets; keep data-rights contracts assignment-clean. | Both | Any inbound M&A contact; any point-solution competitor acquired (update comp set) |
| R-10 | **Buyer vendor-viability rejection (ASM-02).** CEOs of KR/JP/EU manufacturers asked to hand launch-governance infrastructure to a two-person startup with no SOC 2, no references, no balance sheet. | Market | H | M | (1) Named Expert Council as credibility surface (§54, §58). (2) E&O insurance certificate in procurement pack (§52). (3) SSO + security-questionnaire readiness pulled into Wave 1–2; SOC 2 Type I parallel with first paid engagements (§60.3 amendment a). (4) Escrowed data export + published continuity plan. (5) Paid pilots structured to be referenceable. (6) **Measure it:** §38 interviews count how many buyers raise vendor viability unprompted; if >50%, escalate to H. | CF | Every procurement/security review outcome; interview tally crossing threshold |
| R-11 | **Expert-network cold-start failure (ASM-04).** Scarce launch experts disengage from platforms with sporadic deal flow; §33 assumes experts "funded by engagements when needed." | Operational | M | M | (1) Founding Commercialization Council of 25–50 vetted operators with **guaranteed minimum paid engagements or small retainers ($1,500–$3,000/mo × 3 months)** for 3–5 anchor experts [Inference grounded in research/expert_network.md §5]. (2) Recruiting wedge: expert-set rates within bands, ≥80% of honorarium pool to expert, net-14 payout — attacks documented industry pain (experts get 15–40% of client dollar, wait 30–45 days [Reported: expert_network.md §4–5]). (3) Expert recruiting/activation funnel mirroring client GTM, with activation rate as a company KPI (§59). (4) Validate minimum-engagement terms in 10 expert interviews before Wave 1 close. | CF | Expert activation rate <50% of council; first declined engagement for capacity reasons |
| R-12 | **Services-mix trap — permanent consultancy with a portal (CON-05).** Default trajectory of every service-led SaaS. IT-services M&A median ~1.1x EV/Revenue vs ~4.5x for SaaS — every services dollar is worth 1/4–1/8 of a software dollar at exit [Verified: Aventis multiples, research/financial_benchmarks.md §1.2]. | Strategic | M | H | (1) Measurable phase-exit criteria, reviewed hard at each wave gate: % of deliverables generated in-product; engagement gross-margin trend; client self-sufficiency score (§59, §60). (2) Software-mix glide path reported as its own line (20% → 40% → 60% over 3 years; financial_benchmarks.md §6). (3) Cap concurrent service engagements (R-16) so delivery cannot crowd out build. (4) Pricing architecture converts project revenue into annual platform fees from day one (§50). | Both | Any wave gate; two consecutive quarters of software-mix decline |
| R-13 | **VC funding winter squeezing customer budgets.** Biopharma funding fell $102B (2024) → $82B (2025, −20%); 2025 IPO haul $3B — a 10-year low [Verified: FierceBiotech/IQVIA, research/market_evidence.md §6.1]. Life-sciences VC fundraising at decade lows through H1 2025 (PitchBook) = fewer funded first-time launchers near-term [Verified: competitive_landscape.md §6.3]. | Market | M | M | (1) Buyer is the de-risked, near-commercial cohort that still attracts capital — bifurcation favors LaunchOS [Inference: market_evidence.md §6.1]. (2) Price as displacement of consulting hours, not addition (competitive_landscape.md §6.3). (3) Bootstrap-compatible Wave 1 plan: services are prepaid; near cash-flow breakeven possible at minimal founder draw (financial_benchmarks.md §5.3). (4) Pipeline coverage KPI (§59) sized at ≥4x to absorb funding shocks. | CF | Quarterly funding-environment scan (IQVIA R&D trends, PitchBook); pipeline coverage <3x |
| R-14 | **China licensing-out trimming SAM.** Chinese-origin assets are predominantly licensed/NewCo'd to U.S./EU sponsors rather than launched direct (94 China-linked deals in 2025, all-time high); Korean companies split direct (SK, Celltrion) vs. license (Yuhan, Daewoong) [Verified: market_evidence.md §6.2]. Out-licensing removes the customer. | Market | M | M | (1) Sell to both sides of deals: originators pre-decision (build/buy/rent *includes* the license-vs-launch decision) and acquirers/launch leaders post-deal. (2) Established-pharma launch leaders (ICP B) expansion roughly triples TAM (market_evidence.md §7.4). (3) Track license-vs-direct ratio in First Launch Radar as a SAM early-warning metric. | CF | Direct-launch share of ex-U.S. entrants declining 2 consecutive years |
| R-15 | **AI cost margin compression in the service-led phase (RSK-07).** At 80% service, heavy agent/RAG usage per engagement can quietly erode engagement margins; no cost-per-tenant model in v1. Software GM assumption (78%) already includes inference costs [Assumption: financial_benchmarks.md §6]. | Technical / Operational | M | M | (1) LLM cost per engagement and per tenant as standing company KPIs with budget ceilings (§59). (2) Model routing by task with cost targets; per-tenant cost ceilings in the orchestrator (THN-05 fix). (3) Engagement pricing assumes current inference costs with a 2x headroom factor [Assumption]; reprice triggers if routing-blended cost/engagement exceeds ceiling two months running. | PF | Monthly cost review; any tenant exceeding cost ceiling |
| R-16 | **Founder delivery bottleneck (RSK-08).** Same two founders sell, deliver, and build; one large engagement stalls all product progress. | Operational | H | M | (1) Hard cap: ≤2 concurrent fractional-office engagements OR 1 fractional + 2 diagnostics per founder at any time [Assumption — set from delivery-capacity math in §60.2]. (2) Expert Council subcontractors used for delivery leverage under LaunchOS methodology, with Internal Validation throughput SLA (§54). (3) "Ship only if" wave gates include a delivery-load condition (§60.2). | Both | Weekly capacity check; any engagement declined for capacity |
| R-17 | **Worker misclassification claims (expert network).** CA AB5 ABC-test prong-B danger if expert work is LaunchOS's "usual course of business"; willful misclassification $5K–$25K/violation plus back taxes; UK IR35 shifts determination to fee-payer [Verified: research/expert_network.md §6]. Fiverr's 20-F treats misclassification as material risk — contract structure alone is not a defense [Verified: expert_network.md §6]. | Legal | M | M | (1) Non-agent independent-contractor structure (GLG template — credited with insulating GLG in CR Intrinsic matter) [Verified: expert_network.md §2]. (2) Design levers: multi-client marketplace, expert-set rates/availability, expert's own tools, prefer experts with consulting entities/LLCs. (3) AB5 exemptions (licensed physicians, B2B) mapped per engagement; EOR/COR rails for KR/JP/EU. (4) Classification counsel review before first 10 experts activated (§54). | CF + Counsel | Before expert activation milestones (10 / 50 / 100); any state law change |
| R-18 | **Cross-border data-transfer suspension (PIPC / PPC power).** Korea PIPA: PIPC can **order suspension of cross-border transfers**, fines to 3% of total revenue; U.S. not adequacy-recognized (EU recognized Sept 2025). Japan APPI: U.S. not on adequacy list (EU/EEA + UK only); cross-border provision requires consent or APPI-equivalent protection system with ongoing monitoring [Verified: regulatory_compliance.md §5]. KR is a priority geography and Japan a partner-led market (§49.4, per Amendment A17). | Regulatory / Legal | M | H | (1) Per-client transfer mechanics decided in contracting: PIPA outsourcing disclosure/consent; APPI equivalent-system contracts or consent; KR domestic agent appointment above thresholds — each flagged [CC] for counsel (§52, §63). (2) Regional-hosting option architecturally feasible (JP/KR clients commonly impose in-region terms) — posture decided in §63, not improvised per deal. (3) GDPR: Art. 28 DPA + SCCs/DPF; subprocessor register maintained. (4) Do not sign a KR/JP enterprise deal before transfer mechanics are documented for that client. | PF + Counsel | Any KR/JP enterprise negotiation; PIPC/PPC rule changes; quarterly regulatory watch |

### 55.2 Review process & escalation rules

**Cadence and ownership.**

- **Quarterly review** (both founders, 90 minutes, standing): re-score every row's likelihood/impact; confirm mitigations are built, not listed; add/retire rows; log the review itself as a Decision Ledger record (§56) so risk governance is auditable.
- **Monthly spot-check** (15 minutes, inside the operating rhythm): rows with monthly review triggers only (R-15 cost ceilings, R-16 capacity).
- **External review annually:** counsel reviews R-02, R-03, R-04, R-17, R-18; insurance broker reviews coverage against largest contractual indemnity exposure (per regulatory_compliance.md §6: size limits to indemnity exposure, not revenue).

**Escalation rules (when a row jumps severity outside the quarterly cycle).**

| Trigger event | Escalation |
|---|---|
| Any row's review trigger fires | Row owner re-scores within 5 business days; if L→M or M→H on either axis, it goes on the next weekly founder agenda with a mitigation status readout |
| Any H-impact row reaches H-likelihood | Both founders within 48 hours; mitigation decision recorded in Decision Ledger same week; affected wave gate re-evaluated (§60) |
| Regulatory rows (R-02, R-18) escalate | External counsel engaged before further build/sales in the affected scope; work in that scope pauses, not just documents |
| Client-originated risk signal (procurement rejection, security finding, reliance dispute) | Logged as incident; mapped to register row or creates new row; review trigger evaluated immediately |
| Two consecutive quarters with zero register changes | Forced challenge session — a static register means we are not looking, not that we are safe |

**Scoring discipline.** Re-scoring requires a stated reason ("what changed since last review"), one sentence per changed row. Silent drift is the failure mode this process exists to prevent.

### 55.3 The three fatal gaps — callout

> **THREE GAPS KILL THIS COMPANY IF UNADDRESSED. Everything else on this register is manageable; these three are not.**
>
> 1. **No financial/funding model behind a six-wave, two-person build** (MIS-01, MIS-02, MIS-12, CON-01 → R-12, R-13, R-16). *Fix: re-scope Waves 0–2 to what two founders + contractors can ship, gate Waves 3–6 behind funding/hiring triggers, and raise $3–5M seed at the Wave 2 gate — or formally elect the §51.6 bootstrap branch at that gate (§51, §60).*
> 2. **No legal/contract/data-rights infrastructure for a business whose product is confidential data plus consequential advice** (MIS-03, MIS-04, RSK-02, RSK-04 → R-03, R-04, R-05, R-17). *Fix: counsel-drafted MSA/SOW/DPA/expert agreements with liability caps and per-vendor derived-data carve-outs, in force before the first paid engagement and first expert activation (§53, §62).*
> 3. **Rep-facing AI committed in Wave 5 without MLR-grade controls** (RSK-01 → R-02). *Fix: hard gate — Wave 5 does not scope until regulatory counsel signs off, and rep-facing generation is restricted to client-MLR-approved fragments with off-label hard refusal (§52, §60.3).*
>
> Each fix is cheap now and existential later. The register's first quarterly review confirms all three are in motion.


---

## 56. Decision Ledger — Specification

**Fixes MIS-09.** "Decision Ledger" appears in v1 §30 (FABP), §35 (Wave 2 scope), and §37 (criterion 10: "decisions lack assumptions/evidence") but is never designed. This section is the specification. It is a **Wave 2 build item** and a precondition for the Executive Brief, Pressure Test, and postmortem read paths below.

### 56.1 Purpose

The Decision Ledger is the tenant's institutional memory, LaunchOS's governance spine, and — deliberately — the moat.

1. **Institutional memory.** Launch teams turn over; consultants leave; PowerPoint dies. The ledger preserves *what was decided, on what evidence, with what confidence, by whom* — so a launch team at L+6 can interrogate a decision made at L-18 without archaeology.
2. **Governance spine.** v1 §6.16 ("every major decision has an audit trail") and §37.10 ("decisions lack assumptions/evidence") are untestable without this record type. The ledger is where expert validation (§9 lifecycle), rules (§13), automations (§23), and evidence lineage (§25) converge.
3. **Moat.** 24 months of a client's decision history — options considered, evidence cited, assumptions tracked to outcome — cannot be meaningfully exported into a competitor. This is a designed switching cost, published as such (§56.5).

### 56.2 Record schema

One record per decision. All fields tenant-scoped per v1 §7 mandatory fields (organization_id, tenant_id, product_id, launch_id, access_scope, data_classification, audit metadata).

| Field | Type | Required | Semantics |
|---|---|---|---|
| `decision_id` | UUID, immutable | Yes | Never reused; supersession creates a new ID |
| `tenant_scope` | tenant_id + product_id + launch_id | Yes | A decision belongs to exactly one launch context; company-level decisions use launch_id = NULL |
| `question` | text | Yes | The decision framed as a question ("How many field reps at launch?") — matches v1 §28 "users think in decisions" |
| `options_considered[]` | array of {option, pros, cons, estimated_cost_range, risk} | Yes | Minimum two options incl. "do nothing / delay" — the v1 §2 question "what happens if we do nothing?" is a mandatory option class |
| `decision` | text | Yes | The selected option, stated operationally |
| `rationale` | text | Yes | Why this option; references evidence_refs, not free-floating judgment |
| `assumptions[]` | array of {assumption, source, confidence, validation_path, staleness_trigger} | Yes | Each assumption individually staleness-tracked; feeds Pressure Test assumption inventory (§19 workflow step 1) |
| `evidence_refs[]` | array of {source_id, source_type, as_of_date, confidence} | Yes | source_id resolves to the data lineage registry (v1 §25); every evidence ref carries its as-of date — this is what makes staleness computable |
| `confidence` | 0–100 + label | Yes | Same confidence semantics as Gap Wizard outputs (v1 §14); decisions below tenant-set threshold trigger expert-suggestion automation (v1 §23) |
| `decider_role` / `approver_role` | role refs | Yes | Decider = accountable role; approver = required for decisions above criticality threshold; both are roles, not just names, so authority survives personnel change |
| `decision_date` | timestamp | Yes | |
| `status` | enum | Yes | `PROPOSED` → `ACTIVE` → (`SUPERSEDED` / `REOPENED` / `REVERSED`). Terminal states never delete the record |
| `superseded_by` | decision_id ref | Conditional | Required when status = SUPERSEDED; points to the replacing record |
| `linked_risks[]` | risk_id refs | No | Ties to client launch-risk engine (v1 §12/§13) |
| `linked_milestones[]` | milestone_id refs | No | Ties to Master Launch Timeline (v1 §11); milestone slip automation can reopen dependent decisions |
| `linked_rules[]` | rule_id refs | No | Rules that fired in producing or monitoring this decision (v1 §13) |
| `expert_engagement_refs[]` | engagement_id refs | No | Expert engagements (v1 §9) that informed or validated the decision, incl. INTERNAL VALIDATION outcomes |
| `staleness_triggers[]` | array of {trigger_type, threshold, last_evaluated} | Yes | Computed from evidence as-of dates and assumption validation paths; see §56.3 |
| `change_history` | append-only log | Yes | Every field mutation, status transition, and re-open event with actor, timestamp, reason. Append-only — corrections are new entries |

### 56.3 Semantics

**Append-only history.**

- No record is ever deleted or edited in place. A correction creates a new version entry in `change_history`; a changed decision creates a new record that supersedes the old one.
- Tenant data export (v1 §37.11) includes the full ledger with history — switching cost applies to *meaningful continuity*, not data hostage-taking. The client always owns and can export its data.

**Supersession.**

- New information → new decision record, `status = ACTIVE`, old record → `SUPERSEDED` with `superseded_by` pointer.
- The supersession chain is first-class: every record renders its lineage ("this decision replaced D-104, which replaced D-061") — the Executive Brief's "what changed" view is built from supersession events.

**Auto-reopen triggers (implements v1 §23 "decision based on stale evidence → reopen").**

| Trigger | Mechanism | Result |
|---|---|---|
| Evidence staleness | Any `evidence_refs[]` as-of date older than the source-type freshness threshold (per §25 lineage policy) | Status → `REOPENED`; Executive Brief flags "decision now rests on stale evidence" |
| Assumption invalidation | An assumption's validation path returns contradictory evidence, or its individual staleness trigger fires | Status → `REOPENED`; specific assumption flagged |
| Linked milestone slip | A linked critical-path milestone moves beyond threshold | Status → `REOPENED` for re-confirmation (not automatic reversal) |
| Expert contradiction | INTERNAL VALIDATION step returns a contradiction verdict | See below |
| Confidence decay | Aggregate confidence falls below tenant threshold (e.g., evidence aging + new signals) | Proposed re-review task; human decides |

**Reopen ≠ reverse.** `REOPENED` forces human attention; only a new decision record changes the answer. `REVERSED` is reserved for decisions affirmatively unwound.

**Contradiction capture (fixes THN-06 integration).**

- When the expert lifecycle's INTERNAL VALIDATION step finds the expert answer contradicts LaunchOS methodology or an active decision, the disagreement is recorded as a first-class object: {decision_id, expert_engagement_ref, contradiction_summary, resolution, resolver_role, resolution_date}.
- Resolution options: decision reopened, methodology rule change proposed (feeds §13 versioning), or documented disagreement accepted with rationale. Silent absorption is not an option — the contradiction record persists either way.

### 56.4 Read paths

| Consumer | Query pattern | What it answers |
|---|---|---|
| **AI Executive Brief** (v1 §12) | Supersession/reopen events since last session; PROPOSED records aging past threshold; reopened-by-staleness | "What changed? What requires a decision? What happens if we wait?" — every brief item carries the underlying record's evidence, source date, confidence, owner |
| **Pressure Test / Pre-Mortem** (v1 §19) | Full `assumptions[]` inventory across ACTIVE decisions, joined to Failure Lab patterns | The assumption inventory (workflow step 1) is a query, not a workshop artifact; weak/stale assumptions rank automatically |
| **Postmortem** (v1 §10 LAUNCH & OPTIMIZE) | Decision-vs-outcome traceability: for each material decision, options considered → decision → assumptions → observed outcome | Which assumptions failed; which options-not-taken would have mattered; generates Failure Lab case candidates and rule candidates (v1 §18) |
| **Auditor view** (v1 §8 Auditor role) | Read-only, full history, export-capable | Decision governance for client boards/investors; evidence that "every major decision has an audit trail" (§6.16) |
| **Cross-launch benchmark corpus** (LaunchOS-internal, contracted rights only) | Anonymized, aggregated decision metadata (decision types, confidence distributions, supersession rates) — never tenant content | Feeds §58 benchmarks only where contracted anonymized rights exist and minimum-N thresholds are met |

### 56.5 Why this is the moat — stated plainly

The switching cost is not the data — the client can export the data. The switching cost is **continuity**: a competitor receiving an exported ledger gets a log; it cannot reconstruct the evidence graph (refs resolve against LaunchOS's lineage registry), the staleness machinery, the expert-validation chain, or the supersession semantics that make the log *operational*. After 24 months of a real launch, the ledger is the client's governance memory — walking away means re-litigating every settled decision.

This is a deliberate design choice, and it is published:

- **To buyers:** "Your launch's decision history becomes a queryable asset. It survives staff turnover, consultant transitions, and the launch itself."
- **To the market (§47):** the ledger plus the Failure Lab corpus are the two assets incumbents cannot fast-follow — consultancies structurally won't build them (they cannibalize billable hours and re-engagement leverage) and data vendors can't (they never see the decision layer).
- **To investors (§51):** this is the system-of-record retention mechanism behind the NRR target (§59), in the lineage of Veeva Vault and Palantir's Acquire-Expand-Scale [Verified precedents: financial_benchmarks.md §4].

**Guardrail against the moat becoming hostage-taking:** export completeness is an acceptance criterion (v1 §37.11), offboarding export formats are specified in §61, and licensed third-party data is purged per §53 regardless. The client is retained by value, not by lock-in of its own records.


---

## 57. Value Quantification & ROI Proof Framework

**Fixes MIS-11.** v1 §30 claims "potential multimillion-dollar savings" and "lower SG&A" with no ROI model, measurement plan, or baseline. This section defines the value model per offer, the instrumentation that converts claims into measurements, and the buyer-facing business case. Governing rule throughout: **evidence honesty (§57.5)** — LaunchOS sells to sophisticated buyers whose CFOs discount vendor ROI claims on sight; a defensible methodology is worth more than an aggressive number.

### 57.1 Value drivers with formulas

Four value drivers. Each carries an explicit evidence grade. Every figure used in a sales or marketing context must state its inputs, its source, and its label.

**Driver 1 — Cost of launch delay per week.**

Formula: `delay_cost/week = (launch_SG&A_annual / 52) + (delayed_revenue_weeks × weekly_peak_ramp_revenue)`

- Launch SG&A anchor: first-time launchers invest **$80–100M annually in SG&A from launch year** [Verified: McKinsey, "Small but mighty" — https://www.mckinsey.com/industries/life-sciences/our-insights/small-but-mighty-priming-biotech-first-time-launchers-to-compete-with-established-players] → **$1.5–1.9M/week of organizational burn** that produces nothing while the launch slips.
- Corroborating 10-K evidence: Madrigal SG&A $108.1M (2023) → $435.1M (2024); Sage SG&A $88.5M in a single quarter against $1.5M of Zulresso revenue [Verified: market_evidence.md §5.1 with 10-K/8-K sources].
- Revenue-delay term is client-specific (forecast input, not LaunchOS estimate) — left as a client-filled variable in the business-case template.
- **Claim permitted:** "A one-quarter launch slip burns roughly $20–25M of SG&A before any revenue consequence — LaunchOS's critical-path and readiness machinery exists to find the slip 90+ days earlier." (Derived arithmetic from a verified anchor; methodology published.)

**Driver 2 — Field-force mis-sizing cost.**

Formula: `mis-sizing_cost = |overbuild_count| × fully_loaded_cost_per_rep × ramp_year_fraction + (underbuild case: uncovered_HCP_opportunity, qualitative)`

- Fully-loaded cost per rep (salary, benefits, T&E, car, training, tooling, manager overhead share): **$300–450K/yr [Assumption]** — no verified public benchmark secured; flagged for validation via Expert Council and first engagement data (see §57.5 missing-evidence protocol).
- Overbuild reference frame: ZS documents oncology/immunology first launches at 40–85 reps, rare disease 20–40, CNS 200–300+ [Verified: ZS — https://www.zs.com/insights/us-biotech-and-pharma-first-launch-insights]. A 10-rep overbuild = **$3.0–4.5M/yr [Assumption-grade arithmetic]**; a 10-rep underbuild against a concentrated specialty universe is a missed-coverage problem the Friction Funnel (§20) makes visible.
- **Claim permitted:** "Scenario-grade field-force design (v1 §16.5) typically surfaces a ±10–20% headcount question worth $3–9M/yr in either direction [Assumption]. LaunchOS prices the question at <5% of the swing."
- The underbuild direction is presented qualitatively with case anchors (Zulresso: distribution/site-of-care strangled uptake despite approved product) until measured data exists.

**Driver 3 — Consultant spend displaced.**

Formula: `displaced_spend = Σ (incumbent engagement quotes/modules the LaunchOS engagement replaces) − LaunchOS fee`

- Incumbent benchmarks: tier-1 specialist firms $500K–$2M per launch; broad consultancies **$1–5M+ per integrated launch-readiness engagement, $3–6M launch sprints** [Estimate — single secondary source: RxAlmanac, https://rxalmanac.com/articles/market-access-consulting/; market_evidence.md §5.2 flags evidence quality]. Consultancy pricing is uniformly not public [Verified gap: competitive_landscape.md methodological notes].
- LaunchOS price hypotheses ($20–30K diagnostic; $50–100K blueprint; $180–420K/yr fractional office) equal **3–25% of a single incumbent engagement** [Estimate-grade arithmetic, market_evidence.md §5.2].
- **Claim permitted (positioning, not promise):** "A LaunchOS Blueprint is priced at 3–10% of a tier-1 launch-readiness engagement and is designed to replace the readiness/governance portion of that spend — and to make any consulting you *do* buy better scoped and cheaper." Displacement framing per competitive_landscape.md §6.3 ("price as displacement, not addition").
- **Evidence-quality flag:** this driver rests on one secondary benchmark source; validated pricing and displacement evidence is a Wave 1–2 research deliverable (10–15 buyer/expert interviews per market_evidence.md §8.1) and a §38 interview question.

**Driver 4 — Forecast-miss cost (case-anchored, qualitative).**

No honest formula exists — the cost of a missed launch is market-cap and company-survival scale, not a line item. This driver is presented as documented cases, never as a computed promise:

| Case | Documented cost of miss | Source |
|---|---|---|
| Pfizer / Exubera | $12M sales in first 9 months against $1–4B/yr forecasts; withdrawn; **$2.8B pre-tax charge** | [Verified: Pfizer Q3 2007 release; Nature Biotech — market_evidence.md §3, case 13] |
| Biogen / Aduhelm | <$11M in first 9 months of 2023 vs. $14.5B peak projections; discontinued with $60M closeout charge | [Verified: market_evidence.md case 9] |
| Sage / Zulresso | $1.5M first full quarter vs. $88.5M quarterly SG&A; 40% layoffs; company sold | [Verified: SEC 8-K; FierceBiotech — case 10] |
| bluebird bio | Three approved gene therapies; $4.5B accumulated deficit; sold for ~$29M upfront | [Verified: MedCity/Endpoints — case 11] |

Statistical frame: ~2/3 of launches miss first-year expectations (McKinsey); 78% of year-1 misses also miss year 2 [Verified: market_evidence.md §3]. **Claim permitted:** "Launch misses are common, persistent, and company-ending for first-timers. LaunchOS's entire architecture exists to convert late surprises into early signals. We do not promise to prevent the miss; we promise you will see it forming."

### 57.2 Per-offer value model

| Offer (v1 §32 pricing hypotheses) | Primary value drivers | ROI shape presented to buyer |
|---|---|---|
| Launch Health Check ($1.5–3K) | Driver 3 (scoping discipline) | Qualitative; lead product, sold on insight density not ROI |
| Commercial Readiness Diagnostic ($20–30K) | Drivers 1, 4 | "Price ≈ 2–3 hours of your launch-year SG&A burn [arithmetic from verified anchor: $80–100M/yr ≈ $1.5–1.9M/week]; output = the gap list your board will ask about" |
| Commercialization Blueprint ($50–100K) | Drivers 2, 3, 1 | "3–10% of an incumbent engagement [Estimate]; typically prices against one field-force-sizing question worth $3–9M/yr [Assumption]" |
| Fractional U.S. Launch Office ($15–35K/mo) | Drivers 1, 2, 4, 3 | "<0.5% of annual launch SG&A [Verified anchor arithmetic]; replaces a fraction of one senior hire plus a slice of consulting retainer" |
| Enterprise SaaS (quote-based) | All four + switching-cost continuity (§56.5) | Platform fee justified as system-of-record carrying blueprint, decisions, and benchmarks across assets (financial_benchmarks.md §4 levers) |

### 57.3 Value measurement instrumentation

ROI claims become *measured* through three mechanisms, built into delivery rather than bolted on:

1. **Baseline capture at engagement start (required artifact).** Every paid engagement opens a baseline record: current readiness posture, planned field-force size, planned consulting spend, current decision latency (how long open decisions sit), data freshness state. Stored in the tenant; linked to the engagement SOW. No baseline → engagement does not start.
2. **Realized-value capture at milestones.** At each milestone review (30/60/90-day value reviews per §61), record: decisions made faster (decision-age deltas from §56), risks surfaced before rule-trigger date vs. without-platform estimate, field-force sizing changes adopted (with the dollar swing), consulting scope displaced (actual, from client's own vendor list), integration/vendor issues caught early.
3. **Anonymized case-study pipeline.** Every engagement contract includes the anonymized-learnings clause (§53/§62). Realized-value records feed: (a) anonymized case studies at client option (named only with written approval); (b) the benchmark corpus under §58 minimum-N rules; (c) the ROI model itself — assumptions replaced by measurements as N grows. Publication rule: no case study ships without client sign-off and legal review.

**Measurement integrity.** A realized-value entry requires a client-side confirm (the client's owner attests the value was real) before it is usable externally. Self-graded homework is not evidence.

### 57.4 Buyer business-case template (what the CCO takes to the CEO/CFO/board)

One page. LaunchOS provides the template pre-filled with client-specific inputs during the diagnostic; the client owns the final numbers.

1. **The exposure.** Annual launch SG&A ($___M; anchor $80–100M [McKinsey]); weeks of critical-path float remaining; cost per week of slip ($___M = SG&A/52).
2. **The documented base rate.** ~2/3 of launches miss year-1 expectations; first-timers miss more (20–30% beat expectations vs. 40–50% established) [Verified: McKinsey]. One relevant Failure Lab case matching the client's archetype.
3. **The specific gaps found.** Top 5 readiness gaps from the diagnostic, each with evidence and consequence-if-unaddressed.
4. **The ask.** Engagement fee as % of SG&A budget (show the arithmetic — typically <0.5% [Verified anchor]) and vs. incumbent consulting alternative ($1–5M+ [Estimate]).
5. **The measurement plan.** Baseline captured day 1; realized-value review at 90 days; kill criteria if value doesn't materialize.
6. **The reversibility.** Data export guaranteed; no lock-in (§56.5 guardrail); liability and insurance posture one line each.

### 57.5 Evidence-honesty rule

- **Never claim savings not yet measured.** Marketing and sales materials may use: verified anchors (labeled), labeled assumptions (labeled as assumptions with inputs shown), and measured realized value (with methodology note). Nothing else.
- **Publish the methodology of every ROI figure.** Each figure carries: formula, inputs, source label ([Verified]/[Estimate]/[Assumption]/[Measured, N=x]), and date. One page per figure in the sales collateral appendix.
- **Missing evidence is stated, not hidden.** Current known gaps: (a) fully-loaded rep cost — no verified benchmark, obtain via Expert Council + first 3 engagements, Wave 1–2; (b) incumbent consulting price distribution — single secondary source, validate via 10–15 buyer interviews (§38); (c) LaunchOS-attributed outcomes — zero measured until first engagements close; the entire framework above exists to produce them.
- This rule is itself a sales asset: the buyer persona has been burned by consultancy ROI decks. "Here is exactly what we know, how we know it, and what we don't know yet" is the Gap Wizard philosophy (v1 §14) applied to our own claims.


---

## 58. Cold-Start Strategy — Benchmarks, Failure Lab & Methodology Credibility

**Fixes MIS-10 and resolves CON-04.** v1 promises benchmark context (§16.1), archetype-adjusted adoption benchmarks (§21), and a failure case library (§18) — without saying where 150–250 validated questions, archetype weights, failure cases, or conversion benchmarks come from, who authors them, or how many cases make a benchmark defensible. Meanwhile §24B refuses speculative data purchases. This section is the supply plan.

### 58.1 The problem, stated plainly

The first ten clients will ask some version of: **"Based on what?"** When the readiness engine scores them 62/100 on access readiness, or the benchmark says specialty launches typically reach X% formulary coverage by L+3, the buyer will ask what data sits underneath. "Trust us" loses the deal; an invented benchmark loses the company (R-03, §57.5). The answer must be a defensible, layered methodology-supply story that is true on day one and gets stronger every engagement.

Three assets must be supplied before any client data exists:

| Asset | Needed by | Day-one source |
|---|---|---|
| Readiness question bank (150–250 questions, weighted) | Wave 1 diagnostic | Founder-authored v0 + Expert Council review (§58.4) |
| Failure Lab case library | Wave 1–2 credibility; Pressure Test | Public-source cases (§58.3) |
| Archetype benchmarks (conversion, timing, sizing norms) | Waves 2–4 | Hybrid decision (§58.5) — explicit "insufficient data" states until minimum-N |

### 58.2 Methodology supply plan (pipeline per methodology module)

Follows the v1 §39 research loop, made operational with volumes and acceptance criteria:

1. **Founder-authored v0.** CF authors each module from operator experience + the v1 §41 research corpus (McKinsey first-time-launcher work, ZS launch signals/archetypes, Trinity readiness concepts — all public, all cited in the source registry). Output: canonical model draft with every weight/range tagged `unvalidated`.
2. **Expert Council paid review cycles.** 2–3 relevant council members per module, paid structured review (per §54 economics — honorarium + markup), rubric: evidence, specificity, applicability (THN-06 rubric). Disagreements reconciled and recorded — per §56.3, methodology contradictions become first-class records, and unresolved ones keep the `contested` tag.
3. **Versioned methodology registry.** Each module ships with version, reviewer refs, validation status, and change log. Release requires: operator review complete, expert review complete, no open `contested` tags on load-bearing weights. Acceptance criterion: a module is "validated" only after steps 1–2 **and** back-testing against ≥3 historical launches (§39 step 8).
4. **Per-archetype anonymized debriefs with minimum-N thresholds.** Benchmarks are shown to clients only when the underlying archetype has N ≥ 5 anonymized debriefs/engagement records [Assumption — threshold to be pressure-tested in first buyer conversations; the principle, not the number, is fixed]. Below threshold, the product renders the explicit state:

> **"Insufficient data: LaunchOS has 2 validated reference points for this archetype; benchmark guidance withheld. Recommended: expert review."**

This is not a weakness — it is the Gap Wizard (v1 §14) applied to our own corpus, and it converts "we don't know yet" into a demonstrated design principle.

### 58.3 Failure Lab seeding

**Initial library: 13 public-source cases, authored now.** The case table in §48 (sourced in market_evidence.md §4.1) is the seed: Madrigal/Rezdiffra, Verona/Ohtuvayre, argenx/Vyvgart, SK Biopharma/Xcopri, Celltrion/Zymfentra, Yuhan/Lazcluze, Daewoong/Nabota, Eisai+Biogen/Leqembi, Biogen/Aduhelm, Sage/Zulresso, bluebird bio, BMS/Cobenfy, Pfizer/Exubera. All carry [Verified] source citations; winners and losers both — a failure library containing only failures is a bias, not a benchmark.

**Seeding procedure per case:**

1. Apply the v1 §18 taxonomy: product, TA, archetype, company type, expected vs. actual trajectory, failure categories (access, differentiation, targeting, field execution, patient friction, site-of-care, distribution, supply, organization, governance, forecast assumptions).
2. Populate every case field: early signals available, signals missed, key assumptions, intervention, outcome, **source confidence** (tiered: SEC filings > tier-1 trade press > secondary analysis), reusable lesson, potential rule candidate.
3. Route rule candidates into the Rules Manager backlog (v1 §13) — the Failure Lab's first output is rules, not content marketing. Example: Leqembi → "infra-heavy archetypes (diagnosis + site + monitoring dependencies) require market-building milestones on the critical path 12+ months pre-launch"; Zulresso → "restricted distribution + site-of-care readiness is a launch-gating workstream, not an ops detail."

**Expansion path:** every client engagement ends with a structured debrief whose anonymized output enters the library **under contracted rights secured at SOW signing** (§62) — not negotiated retroactively when the client has leverage. Target growth: +4–8 cases/yr from engagements [Assumption]; public-source additions continuous (each launch season adds cases; First Launch Radar is the detection feed).

### 58.4 Readiness-question supply (the 150–250 questions)

How the question bank (v1 §16.1) actually gets built:

1. **Operator extraction sessions (CF-led).** Structured knowledge extraction from founder operator experience, per methodology phase (STRATEGIZE / DESIGN / BUILD / LAUNCH & OPTIMIZE — v1 §10). Target: 60–80% of bank from extraction [Assumption].
2. **Corpus-derived questions.** Remainder from the §41 research corpus (McKinsey/ZS/Trinity public frameworks) — each question carries its source ref.
3. **Expert validation.** Council members review questions in their domain (market access expert reviews access block, etc.), per §58.2 step 2. Each question ships with: weight rationale, criticality multiplier, evidence-recency decay rule, benchmark context link (or `insufficient data`), recommended remediation — satisfying THN-03's scoring-spec requirement.
4. **Versioned registry + live refinement.** The bank is versioned; client usage data (which questions discriminate, which clients dispute) drives revision through the §39 loop. Question-level analytics (§59) feed back: questions with high client-override rates are reviewed first.

Acceptance criterion for Wave 1: ≥150 questions authored, 100% expert-reviewed in domain, scoring spec published internally with worked examples (THN-03).

### 58.5 Benchmark data decision — CON-04 resolved

**Decision: hybrid, three lanes, with a disclosed maturation timeline.** Rejected alternatives: buying a benchmark dataset now (violates §24B economics and likely license-restricted for AI/benchmark use — data_licensing.md §4 prohibits "use to create or improve any Vendor offering" and benchmarking against licensed data under IQVIA TPA [Verified]); and shipping benchmarks with no empirical basis (violates §57.5 and creates R-03 exposure).

| Lane | What | When | Rights basis |
|---|---|---|---|
| **(a) Public-source case library** | The 13-case Failure Lab + continuous public additions; public data lake (FDA, ClinicalTrials.gov, CMS Part D, Open Payments, NPPES) powering what it legitimately can [Verified buildable set: data_licensing.md §6] | Now | Public |
| **(b) Engagement-derived benchmarks** | Anonymized readiness scores, vendor selections, decision patterns, outcomes vs. forecast — instrumented from every engagement; minimum-N gated (§58.2) | Day one, compounding | **Contracted anonymized rights in every SOW from the first engagement** (competitive_landscape.md §5.1; §62) |
| **(c) Licensed benchmark dataset / analytics partnership** | Evaluate a TGaS-style benchmark dataset license or an analytics-firm partnership for historical launch trajectories | Evaluate at Wave 3–4 gate; buy only if (b) coverage gaps justify cost | Negotiated; must survive §53 rights review incl. derived-data and AI-use clauses |

**Disclosure to buyers (standard language, used in sales and in-product):**

> "LaunchOS benchmarks combine (1) a public, fully sourced case library, (2) anonymized, client-authorized engagement data that compounds with every launch we support, and (3) expert-validated methodology. Coverage by archetype grows over a 2–3 year maturation horizon; where data is insufficient, the product says so and routes to expert judgment instead of inventing a number."

This converts a cold-start weakness into the clearest possible demonstration of the product's core behavior.

### 58.6 Credibility ladder

Deliberate split between what is published and what is proprietary:

| Layer | Posture | Rationale |
|---|---|---|
| **Framework-level methodology** — the phase model, question domains, failure taxonomy, case library findings | **Published openly** (Academy content, conference talks, aggregate research reports) | Narrative ownership (competitive_landscape.md §5.6: "publish aggregate findings to own the category narrative"); consultancies sell access to frameworks — we give the framework away and sell the *operating system* |
| **Weights, rules, scoring, archetype engine internals** | **Proprietary** — trade secret, versioned registry, contractual non-extraction clauses (§62) | Execution moat: the executable rules are the IP incumbents structurally won't build (competitive_landscape.md §5.2) |
| **Benchmark corpus & decision-metadata aggregates** | **Proprietary asset, aggregate findings published selectively** | Trinity's TGaS LEAD precedent: the benchmark database *is* the moat (competitive_landscape.md §5.1) — but publishing aggregates is how the market learns to trust it |
| **Tenant data, tenant decisions** | **Never shared, never pooled** (v1 §6.11–12; §53 controls) | Constitution, not strategy |

The ladder answers "based on what?" at four escalating depths: published framework (anyone) → named Expert Council + case library (prospect) → live methodology walkthrough with weights logic shown under NDA (late-stage buyer) → full in-product evidence lineage (client). Each rung is earned, and each rung is real.


---

## 59. LaunchOS Internal KPIs & Product Analytics

**Fixes MIS-15, RSK-07, THN-10.** v1 defines client-facing KPIs exhaustively and none for LaunchOS itself: no pipeline math, no engagement margins, no AI-quality metrics, no retention numbers, no commercial wave-gate criteria. This section is the one-page operating KPI set, the instrumentation spec, and the platform's own health monitoring — LaunchOS dogfooding its monitoring philosophy.

### 59.1 Company KPI set

Reviewed weekly (founders' operating rhythm) unless cadence says otherwise. Targets are [Assumption]-grade planning values, revised after first 3 engagements and again at each wave gate; the *existence* of each KPI is fixed, the target number is not.

| # | KPI | Definition | Target | Cadence | Owner |
|---|---|---|---|---|---|
| 1 | **Pipeline coverage** | Qualified pipeline $ (stage-weighted) ÷ next-2-quarters revenue target | ≥4x (drop to 3x triggers R-13 review) | Weekly | CF |
| 2 | **Win rate by offer** | Closed-won ÷ qualified opportunities, per offer (health check / diagnostic / blueprint / fractional / SaaS) | Diagnostic ≥30%; fractional ≥40% of blueprint closes | Monthly | CF |
| 3 | **Sales cycle length** | First qualified meeting → signature, median days, per offer (definition per §49.3) | Diagnostic ≤60 days (§49.3 ladder: 3–8 weeks); fractional ≤120 days (8–16 weeks incl. security/procurement) [benchmark-anchored: financial_benchmarks.md §3.1] | Monthly | CF |
| 4 | **Diagnostic → retainer attach rate** | % of diagnostic buyers who buy blueprint or fractional office within 6 months | >50% — *the single most important operating KPI* [Verified importance: financial_benchmarks.md §6] | Monthly | CF |
| 5 | **Engagement gross margin** | (Engagement revenue − delivery labor − expert pass-through − allocated inference cost) ÷ revenue | ≥35% services line, trending up [benchmark: financial_benchmarks.md §2.2] | Monthly | Both |
| 6 | **LLM cost per engagement / per tenant** | Blended routed inference + embedding + retrieval cost, per engagement and per active tenant-month | Budget ceiling: ≤8% of engagement revenue (services phase); ≤15% of tenant ACV (SaaS phase) [Assumption]; breach 2 months running → repricing/routing review (R-15) | Monthly | PF |
| 7 | **Weekly active tenant users (WATU)** | Distinct tenant users with ≥1 meaningful session (decision, risk, readiness, brief interaction — not login) per week | ≥60% of licensed seats by day 60 post-onboarding; supports v1 §38.6 "real client uses weekly" | Weekly | PF |
| 8 | **Time-to-value per offer** | Signature → first delivered insight artifact (diagnostic readout / first executive brief / first validated expert answer); full value per §61.2 | Health check ≤5 days; diagnostic first value ≤14 days (Gap Wizard findings), full value ≤42 days; fractional ≤14 days to first brief [Assumption — aligned to §61.2] | Per engagement | CF |
| 9 | **Expert SLA** | (a) Request → expert assigned; (b) submission → internal validation complete; (c) end-to-end turnaround vs. SOW commitment | (a) ≤3 business days; (b) ≤2 days; (c) ≥90% on-time [Assumption; THN-06 SLA fix] | Weekly during engagements | CF |
| 10 | **AI recommendation acceptance rate** | Executive Brief / agent recommendations accepted or accepted-modified ÷ total shown (reject/modify coded with reason) | ≥60% by month 3 of a tenant's life; declining trend 2 months → eval review (MIS-16 harness) | Monthly | PF |
| 11 | **Readiness-score override rate** | % of tenant-facing readiness scores where the client formally disagrees/overrides, with stated reason | 5–15% healthy band: 0% = ignored or rubber-stamped; >25% = scoring model distrusted → methodology review (THN-03 loop). *This is a trust signal, not an error rate.* | Monthly | PF |
| 12 | **NRR — platform book** | Net revenue retention on SaaS/retainer contracts only (project revenue excluded by construction [Verified rationale: financial_benchmarks.md §3.3]) | 110–120% at enterprise scale [benchmark: financial_benchmarks.md §3.3] | Quarterly | CF |
| 13 | **Expert network activation rate** | Council experts with ≥1 paid engagement in trailing 90 days ÷ total active council | ≥50%; below threshold disengages scarce experts (R-11, ASM-04) | Monthly | CF |
| 14 | **Re-engagement rate** | Clients returning for a second asset/engagement within 18 months | >40% [Assumption: financial_benchmarks.md §4.6] | Quarterly | CF |

**Reporting rule:** software ARR, services revenue, and expert-network revenue are reported as three separate lines with separate margins — the software-mix glide path (20% → 40% → 60%) is itself a standing metric at wave gates (R-12) [benchmark basis: financial_benchmarks.md §1.2].

### 59.2 Product analytics instrumentation

**Principle: decision-centric events, not page views.** The product's constitution (v1 §28: "users think in decisions") applies to telemetry. Instrument the decision system, not the navigation.

Event taxonomy (all events tenant-scoped, user-pseudonymized, never containing tenant confidential content in analytics payloads):

| Event class | Examples | Feeds |
|---|---|---|
| Decision events | decision_proposed, decision_activated, decision_superseded, decision_reopened (with trigger type), decision_age_at_close | KPI 10, 11; Executive Brief quality; §56 analytics |
| Recommendation events | recommendation_shown, accepted, modified, rejected (+reason code) | KPI 10; eval harness regression sets |
| Evidence events | evidence_viewed, source_date_observed, gap_wizard_insufficient_data_shown, expert_escalation_accepted | Trust analytics; Gap Wizard hit rates |
| Readiness events | score_computed, score_overridden (+reason), question_answered, question_skipped | KPI 11; question-bank refinement (§58.4) |
| Expert events | request_created, assigned, validated, delivered, client_accepted/modified/rejected | KPI 9, 13; council scoring |
| Workflow events | milestone_slipped, rule_fired (+rule_id), automation_acted, export_run | Rules precision tracking (THN-04); value capture (§57.3) |
| Value events | baseline_captured, realized_value_recorded (+client_confirmed flag) | §57.3 pipeline |

**Hard constraints:** no cross-tenant analytics on content (aggregates of *metadata* only, e.g., decision-type distributions under §56.4 benchmark row); analytics payloads carry no licensed-data-tagged fields (§53 policy engine); every KPI above must be computable from emitted events — a KPI that cannot be computed is an instrumentation bug filed against PF.

### 59.3 Platform health & freshness (dogfooding the monitoring philosophy)

LaunchOS sells stale-data detection and escalation to clients; it runs the same machinery on itself. Standing internal monitors, reviewed in the weekly founder rhythm, with the same rules-engine discipline clients see:

| Monitor | Rule | Escalation |
|---|---|---|
| **Daily platform health** | Uptime, error rate, p95 latency per surface; job queue depth | Any SLO breach → same-day founder review; client-visible incidents follow §61 incident comms |
| **Stale-data detection (internal)** | Source registry feeds (First Launch Radar, public corpus, research watch) carry as-of dates and freshness SLAs; stale source → warning exactly as client modules do | Stale >2x SLA → source flagged in-product where used |
| **Job/integration failure monitoring** | Integration failures, ingestion gaps, eval-harness regressions | Failure → alert → retry policy; 3 failures → owner assignment |
| **Cost monitors** | Per-tenant and per-engagement inference cost vs. ceilings (KPI 6) | Ceiling breach → routing review within 5 days (R-15) |
| **Register freshness** | §55 risk register reviewed on schedule; KPI targets re-based at gates | Missed quarterly review = escalation item itself (§55.2) |

The internal monitoring config is literally the same rules engine clients use (v1 §13), run against LaunchOS's own tenant. This is a sales demo asset: "we monitor ourselves with the product you're buying."

### 59.4 Wave-gate commercial KPIs (fixes THN-10)

Each wave gate in §60 carries 1–2 commercial metrics so go/no-go is evidence, not sentiment. Full acceptance criteria live in §60.2; the commercial lines:

| Wave gate | Commercial KPI(s) to pass |
|---|---|
| Wave 0 → 1 | 20 buyer interviews complete (v1 §38.1); ≥3 proposal requests (§38.4) |
| Wave 1 → 2 | ≥1 paid diagnostic delivered (§38.5); ≥$75K cumulative booked revenue [Assumption]; pricing-validation interviews done (§57.1 Driver 3 flag) |
| Wave 2 → 3 | ≥3 paying clients; ≥$500K cumulative booked revenue; attach rate evidence (≥1 diagnostic → blueprint/retainer conversion) [targets from financial_benchmarks.md §5.3 Wave 1 milestone]; seed raise closed or term-sheeted **(or the §51.6 bootstrap branch elected: ≥3 paying clients with software attach ≥30%)** |
| Wave 3 → 4 | Services run-rate ≥$1.5M; ≥30% of clients on software attach [financial_benchmarks.md §5.3 Wave 2 milestone]; WATU ≥60% on ≥2 tenants |
| Wave 4 → 5 | Software ARR ≥$1.5M path visible; NRR on platform book ≥100% (early cohort — build gate; see convention below); regulatory counsel sign-off obtained (R-02 gate) |
| Wave 5 → 6 | Field-product design partners ≥2; AI recommendation acceptance ≥60% in field modules; AI-output insurance coverage confirmed in writing (§55 R-03) |

A gate that fails its commercial KPI does not slip quietly — it triggers a §55 register review and a scope/funding decision (§60.2 "ship only if" conditions).

**NRR two-threshold convention:** platform NRR **≥100%** (early cohort) is the *build gate* for Waves 4–5; platform NRR **≥110%** is the *Series-A-grade gate* used in §51.2, §51.5, and §60.5. Both thresholds are deliberate and mean different things at different stages.


---

## 60. Build Economics — Team, Timeline & Budget per Wave

**Fixes MIS-02, CON-01, CON-03.** v1 §35 lists wave scopes with no durations, staffing, budgets, dependencies, or acceptance criteria, and §33 assigns ~20 functions to two people. This section supplies the arithmetic and the re-scoping decisions it forces. All staffing counts, durations, and spend figures are **[Assumption]**-grade planning estimates — labeled, revisable at each gate, never presented to investors or buyers as commitments. Cross-references: funding detail in §51; commercial gate metrics in §59.4; wave scopes as amended from v1 §35.

### 60.1 The arithmetic reality

Two founders cannot simultaneously: (a) build six waves spanning multi-tenant SaaS, AI agents, expert marketplace, RFP engine, optimizer, and CRM integrations; (b) deliver 80%-service engagements; (c) run founder-led sales with 3–9 month cycles [benchmark: financial_benchmarks.md §3.1]. v1 said so implicitly and planned as if otherwise. CON-01's verdict stands: **arithmetic impossibility without external capital or radical descoping.** v2 chooses both, deliberately:

**Re-scoping rules (binding on all wave planning):**

1. **Waves 0–2 are sized to two founders + a contractor bench.** If a Wave 0–2 item requires a third builder, it moves or a contractor is hired for it — the wave does not silently expand.
2. **Waves 3–6 are gated behind funding/hiring triggers, not calendar dates.** No wave beyond 2 starts on schedule pressure; each starts when its gate KPIs and staffing exist (§60.2).
3. **Delivery cap.** Concurrent service engagements are capped (§55 R-16): one fractional-office engagement consumes ~0.5 founder-FTE of CF time [Assumption]; diagnostics ~0.15 FTE each [Assumption]. The cap is set so PF build time is never <70% during Waves 1–2.
4. **Demo-honesty rule.** Modules not yet built are demoed as labeled prototypes in sales conversations; selling un-built capability as shipped product is an R-03 event (client reliance on nonexistent function) and a constitution violation.
5. **Every wave has a "ship only if" condition** — a negative gate naming what must be true about the *business*, not just the code.

### 60.2 Per-wave economics

Scope column reflects the **v2 amendments in §60.3**, not raw v1 §35.

| Wave | Scope (v2-amended) | Duration target [Assumption] | Staffing [Assumption] | External spend [Assumption] | Commercial gate KPI (§59.4) | Acceptance criteria | Ship only if… |
|---|---|---|---|---|---|---|---|
| **0 — Constitution & Research** | v1 scope + permission matrix (THN-01), readiness scoring spec (THN-03), security FAQ/CAIQ draft, threat model, counsel engaged (MSA/DPA/expert agreement drafting starts), First Launch Radar v0 | 6–8 weeks | 2 founders; 1 design contractor (0.5 FTE, 4 wks) | $15–30K (counsel retainer, design contract, tooling) | 20 buyer interviews complete (v1 §38.1); ≥3 proposal requests (§38.4) | Permission matrix + scoring spec + threat model written; counsel engaged; radar list of 100–200 prospects built (v1 §45) | …interviews confirm buyers will pay for a readiness diagnostic (≥3 unprompted "what would this cost?") |
| **1 — Sellable Readiness Product** | Tenant/auth, company/product/launch setup, readiness assessment (150–250 question bank v1), archetype engine, rule engine v1, gap detection, evidence, thin Command Center, report export, expert request workflow, audit log — **plus SSO + security-questionnaire readiness pulled in (amendment a)**; agents consolidated to 3 (readiness, gap/expert, executive brief) (amendment c) | 12–16 weeks | 2 founders; contractors: design (0.5 FTE), security consultant (SSO/SOC 2 readiness, ~0.25 FTE) | $60–120K (contractors, pen-test-lite review, insurance binding, SOC 2 Type I initiation) | ≥1 paid diagnostic delivered; ≥$75K booked | First paid diagnostic delivered end-to-end in-product; tenant isolation test suite green (v1 §37.1); SSO + CAIQ answers survive a real security review (v1 §38.9); question bank ≥150, 100% expert-reviewed (§58.4) | …at least one client has paid and a second has issued an SOW — no revenue, no Wave 2 build |
| **2 — Launch Operating System** | Roadmap, dependencies, risks, Decision Ledger (§56 — full schema + append-only semantics), expert network workflow (incl. INTERNAL VALIDATION with rubric + SLA, THN-06), rules manager UI, automations, role dashboards (exec/leader only), AI Executive Brief; SOC 2 Type I completes in parallel | 16–20 weeks | 2 founders + **first hire or senior contractor (eng, 1.0 FTE)**; delivery-leverage: 1–2 council subcontractors | $150–250K (hire/contractor, SOC 2 audit fees, infra growth); cumulative external ≤$300–500K [consistent with financial_benchmarks.md §5.3 Wave 1 band $0–300K + pre-seed option] | ≥3 paying clients; ≥$500K cumulative booked; ≥1 diagnostic→blueprint/retainer conversion; seed closed or term-sheeted | A real launch engagement *operated* in LaunchOS weekly (v1 §38.6); Decision Ledger passes §56 semantics tests (supersession, auto-reopen, contradiction capture); expert engagement completes full lifecycle in-product; rules-manager execution semantics specified and tested — priority/conflict resolution and dry-run sandbox before activation (THN-04); SOC 2 Type I issued | …(seed capital is committed **or** the §51.6 bootstrap branch is formally elected — ≥3 paying clients with software attach ≥30%) **and** one client uses the platform weekly — building Wave 3 on services revenue alone re-creates CON-01 |
| **3 — Commercial Design** | Organization designer, hiring sequencing, Build/Buy/Rent engine, field-force scenarios (OR-Tools-based optimization prototype per v1 §42.2; minimum-input thresholds + rules-of-thumb fallback per ASM-05), RFP engine, CRM blueprint, hiring/certification pipeline | 20–26 weeks | 4–6 FTE total: 2 founders + 2 eng + 1 data engineer (contractor) + design (contractor) | $400–700K/yr run-rate (post-seed budget) | Services run-rate ≥$1.5M; ≥30% software attach; WATU ≥60% on ≥2 tenants | Optimizer prototype validated on one anonymized real dataset *before* full commitment (ASM-05); RFP engine used in a live client vendor selection; benchmark dataset license/partnership evaluation complete (§58.5 lane c) | …seed is closed, first hire productive, and Wave 2 modules show measured client value (§57.3) — otherwise fix retention before adding surface area |
| **4 — Intelligence & Failure Detection** | Source registry, public intelligence agents, licensed-data adapters (Snowflake-share / SFTP / API lanes per §53), HCP/HCO/payer objects, Failure Lab productized (seeded per §58.3), Pressure Test, Friction Funnel (aggregated/de-identified lane first; PHI path per §52/CON-02), early-warning rules | 20–26 weeks | 6–8 FTE total; +1 eng, data eng to 1.0 FTE, compliance consultant (fractional) | $700K–1.1M/yr run-rate; data-partnership evaluation budget $50–100K | Software ARR ≥$1.5M path visible; platform NRR ≥100% early cohort | Adapter ingests a real client-licensed feed under master TPA/vendor agreements (§53); Friction Funnel live on ≥1 engagement in de-identified mode; early-warning detection latency measured vs. licensed sources before value promised (ASM-08) | …data-rights infrastructure (§53 registry, purge automation, master agreements) is **operating**, not drafted — intelligence features on unlicensed rails create R-04/R-05 exposure |
| **5 — Field Performance** | Rep/Manager/Regional/VP Sales products, CRM integration (Vault CRM target per §53), coaching, call planning, next-best-action — **all rep-facing generation restricted to client-MLR-approved fragments; off-label classifier + hard refusal (amendment e)** | 24–30 weeks | 8–12 FTE total; +product/regulatory specialist hire or retained counsel package | $1.0–1.5M/yr run-rate; counsel review package $50–100K | ≥2 field-product design partners; AI recommendation acceptance ≥60% in field modules | **Regulatory counsel review signed** (R-02 gate): fragment-only generation verified, refusal suite tested, output logging complete, usage-policy contract language live; AI-output insurance coverage confirmed in writing; ≥2 design partners contracted | …the regulatory gate has passed in writing *and* insurance affirmatively covers AI outputs — Wave 5 without both is the fatal gap (§55.3.3) |
| **6 — Enterprise Hardening** | SCIM, SOC 2 Type II, full pen test, retention policies, DR exercises, advanced audit/export, integration governance, offboarding runbook (§61) | 16–20 weeks, largely parallelizable with Wave 5 | Same team; security contractor surge | $200–400K (audits, pen test, DR) | Enterprise procurement wins ≥2 without founder heroics; platform NRR ≥110% | SOC 2 Type II issued; certified-deletion and export paths exercised in a real offboarding dry-run; DR restore test passed | …SOC 2 Type II observation period complete — this wave is evidence accumulation, not features; do not fake it earlier (note: SSO/SOC 2 Type I already shipped in Waves 1–2 per amendment a) |

**Cross-wave constraints.** (i) Durations overlap deliberately — delivery and sales run continuously; the table sizes *build* effort. (ii) The three-year P&L skeleton (financial_benchmarks.md §6: headcount 3 → 8 → 15; ~$2–3M cumulative external capital to ~$5M revenue) is the envelope this table must fit; a wave plan that breaks the envelope triggers re-scope, not re-budget-by-hope. (iii) Every gate failure triggers a §55 register review.

### 60.3 Re-sequencing decisions (v2 amendments to v1 §35)

These are adopted decisions, recorded here and in the Decision Ledger (§56 — dogfooded).

**(a) Security pulled forward (fixes CON-03).** v1 deferred SSO, SOC 2, and pen tests to Wave 6 while §38.9 requires surviving a security/procurement review to sell Wave 1. **Amendment:** SSO + security-questionnaire readiness (CAIQ/FAQ) are Wave 1–2 scope; SOC 2 Type I runs parallel with the first paid engagements; Type II remains Wave 6 (it requires an observation period — it *cannot* honestly ship earlier). Wave 6 retains SCIM, full pen test, DR, retention, advanced export.

**(b) Waves 1–2 consolidated around the wedge.** Wave 1–2 = readiness diagnostic + expert workflow + thin command center + Decision Ledger. Role dashboards ship for Executive/Functional Leader only; Rep/Manager/Regional/VP surfaces are Wave 5. This is the CON-01 fix in scope terms: two founders ship a *diagnosis-and-decision* product, not an operating system for every persona.

**(c) Agents consolidated 11 → 3–4 (THN-05).** Waves 1–2 run three agents behind one orchestrator: Readiness, Gap & Expert, Executive Brief. Strategy, Hiring, Field Design, Vendor, CI, CRM, PMO, Compliance agents arrive with their waves (3, 3, 5, 3, 4, 5, 2, 2 respectively) — each with eval set, latency/cost budget, and human-in-the-loop gates before activation. 11 named agents at two engineers is a maintenance liability, not an architecture.

**(d) Waves 3–6 gated behind triggers, not dates.** Trigger set per wave in §60.2 ("ship only if" + commercial KPIs). Calendar dates exist only as planning hypotheses; the binding artifacts are gate criteria.

**(e) Wave 5 regulatory gate (RSK-01).** Wave 5 scoping begins only after formal review by pharma regulatory counsel, and its acceptance criteria include the fragment-only-generation and refusal controls (§52). This is a hard gate: counsel sign-off is a deliverable, not a consultation.

### 60.4 Contractor bench strategy

Skills are contracted where demand is spiky or founder-replaceable; founder-owned where they *are* the company.

| Skill | Posture | Rationale |
|---|---|---|
| Product/methodology, launch expertise, buyer relationships | **Founder-owned (CF)** — never contracted | The moat (§47); R-01 mitigation is documentation + cross-training, not outsourcing |
| Core architecture, AI orchestration, tenant isolation, eval harness | **Founder-owned (PF)** | R-03/R-05 controls live here; competence must be in-house |
| UX/product design | Contracted (0.25–0.5 FTE, retained from Wave 0) | Spiky demand; decision-centric UX quality is hire-critical but not full-time until Wave 3 |
| Security testing / SOC 2 program | Contracted specialist + audit firms | Independent by nature; also R-10 procurement-readiness evidence |
| Data engineering (adapters, entity resolution ops) | Contracted Wave 3–4 → hire at Wave 4 gate | Demand starts spiky, becomes permanent when licensed-data adapters ship |
| Regulatory counsel | Retained external — gate authority for Wave 5 | Cannot be founder-owned; R-02 requires independence |
| Delivery leverage (engagement execution) | Expert Council subcontractors under LaunchOS methodology | R-16 fix; also feeds expert activation (§58, KPI 13) |
| General engineering scale | Hire (not contract) from Wave 2 gate onward | Post-seed; contractors do not accumulate the Decision-Ledger-era codebase knowledge |

Bench rule: every contracted skill has a signed MSA + IP assignment *before* first engagement (§62), and every contractor is scoped like an expert — minimum necessary access (v1 §6.9 applied to ourselves).

### 60.5 Funding linkage

| Stage | Funds the build how | Source |
|---|---|---|
| Wave 0–1 | **Bootstrap from service revenue.** Services are prepaid; at minimal founder draw the business approaches cash-flow breakeven [Verified logic + Assumption sizing: financial_benchmarks.md §5.3]. External need: $0–300K; optional $250–500K pre-seed SAFE (~$10M cap norm [benchmark: Carta via financial_benchmarks.md §5.3]) | Founder runway + engagements |
| Wave 2 gate | **Seed $3–5M at ~$15–24M post-money** [benchmark: 2026 medians, PitchBook-NVCA/Carta via financial_benchmarks.md §5.2] — **required unless the §51.6 bootstrap branch is active (≥3 paying clients, software attach ≥30%)** | Institutional seed; vertical-AI/healthtech funds. Raise narrative: 3–5 paying launch clients + validated attach rate + benchmark corpus compounding |
| Wave 3–4 gate | Series A $8–15M only when software ARR (≥$1.5M) and NRR (≥110%) carry the story [benchmark: financial_benchmarks.md §5.2–5.3] | Software metrics, not services revenue — services revenue is valued at ~1/4 to 1/8 of software revenue at exit [Verified multiples: financial_benchmarks.md §1.2] |

**The rule that protects everything above:** services cash flow *defers* outside capital but does not eliminate it (financial_benchmarks.md §5.3: Veeva is the outlier; ODAIA/Sorcero/WhizAI each raised $15–60M to cross the same chasm). Plan for the median. Every wave gate review asks one funding question: *does the next wave's staffing exist at current cash?* If no — the wave waits, scope shrinks, or capital is raised. It never silently proceeds.


---

## 61. Customer Success, Onboarding & Support Model

**Purpose.** In an 80/20 service-led model (v1 §31), onboarding *is* the product (MIS-14). This section defines per-offer runbooks, time-to-value targets, the adoption system that makes v1 §38.6 ("weekly use") operational, support/SLA commitments (MIS-17), offboarding (MIS-21), and lifecycle-tied renewal. Everything below is deliverable by two founders plus Expert Council subcontractors; nothing here assumes a CS hire before Wave 3.

### 61.1 Onboarding runbooks per offer

**A. Commercial Readiness Diagnostic — 4–6 weeks, week-by-week.**

| Week | Actions | Owner | Exit criterion |
|---|---|---|---|
| 0 (pre-contract) | Procurement pack delivered (§49.7); MSA+SOW signed; kickoff scheduled | Commercial founder | Contract + invoice |
| 1 | Kickoff with champion + economic buyer; tenant provisioned; stakeholder map completed; document/data request list issued | Commercial founder | All stakeholders named; ≥80% of requested artifacts received |
| 2 | Readiness assessment run (150–250 question instrument, v1 §16.1); Gap Wizard session; expert questions dispatched where methodology gaps exist | Commercial founder + Expert Council | Questionnaire complete; expert responses ≥80% back within SLA |
| 3 | Archetype fit analysis; risk scoring; rules engine flags; draft readiness scorecard | AI/Product founder | Scorecard internally reviewed; confidence labels on every claim (v1 §14) |
| 4 | Draft readout with champion (pre-wire); revise; final executive readout with CEO/CCO | Commercial founder | Costed gap list accepted; Blueprint proposal delivered |
| 5–6 (conditional) | Follow-up questions; Blueprint scoping | Commercial founder | Blueprint decision yes/no scheduled |

**B. Fractional U.S. Launch Office — 30/60/90-day value reviews.**

| Milestone | Actions | Exit criterion |
|---|---|---|
| Days 1–14 | Governance cadence installed (weekly launch meeting run in LaunchOS); Decision Ledger initialized; vendor scorecards created for incumbent vendors; roles/permissions per matrix | Launch governance meeting runs in-product; decision log live |
| Day 30 review | Value review #1 with champion: decisions logged, risks flagged, vendor actions tracked vs. baseline | Champion confirms ≥3 decisions materially improved [target]; renewal of mandate confirmed |
| Day 60 review | Value review #2 with economic buyer: readiness trend, vendor SLA performance, budget vs. plan | Economic buyer confirms continuity; expansion scope (Blueprint modules) identified |
| Day 90 review | Formal QBR: quantified value log (cost avoided, weeks saved, vendor spend arbitrated); SaaS conversion proposal drafted | Go/no-go on Enterprise SaaS path scheduled |

**C. Enterprise tenant onboarding — checklist-driven, 6–10 weeks [target].**
- **Data intake checklist:** source inventory; per-source license review against §53 checklist (derived-data rights, AI/ML use, expert-access restrictions) — no ingestion before license confirmation; TPA/vendor data-sharing clauses verified in client vendor contracts (ASM-03 fix); de-identification warranty per dataset before any patient-adjacent feed (CON-02 boundary); entity-resolution master identified (client's OneKey/OpenData or equivalent, THN-08).
- **Stakeholder training:** role-based sessions (admin, launch lead, function heads, exec read-only); champion certification; train-the-trainer for client scale-out.
- **Governance integration — "make LaunchOS the meeting" [from MIS-20]:** the client's weekly launch meeting agenda, KPIs, risk review, and decision log are re-platformed into LaunchOS within 30 days. Adoption is achieved by owning the recurring meeting, not by training completion.

### 61.2 Time-to-value targets

All figures are **[Target]**, not commitments, until 10 engagements are measured.

| Offer | First value | Full value |
|---|---|---|
| Health Check | Same day (readiness snapshot) | 1 week (prioritized gap list) |
| Diagnostic | Week 2 (Gap Wizard findings) | Week 4–6 (accepted costed gap list) |
| Fractional Office | Day 14 (governance cadence live in-product) | Day 90 (quantified value log at QBR) |
| Enterprise SaaS | Week 4 (first dashboard on client data) | Week 10 (rules engine active on client thresholds) |

### 61.3 Adoption playbook (MIS-20)

- **Champion identification:** at kickoff, name one champion (CCO/VP Commercial or launch lead) with (a) authority over the governance meeting, (b) ≥5 hrs/week available, (c) career stake in launch success. No champion → do not start enterprise onboarding.
- **Usage instrumentation (built, not polled):** per-tenant event tracking of logins, decisions logged, scorecard views, rules triggered, expert engagements launched, exports. Owner: AI/Product founder.
- **Adoption health score per tenant [Target formula]:** weighted composite — weekly active users ÷ provisioned users (40%), decisions logged per week vs. baseline (25%), governance-meeting-in-product flag (25%), expert/rules utilization (10%). Green ≥0.7; yellow 0.4–0.7; red <0.4.
- **Weekly-use criterion operationalized (v1 §38.6):** a tenant counts as "used weekly" when ≥3 named client users perform ≥1 meaningful action (decision logged, scorecard reviewed, rule acknowledged, report generated) in ≥3 of the trailing 4 weeks. Logins alone do not count.
- **Interventions:** yellow → champion working session within 5 business days; red for 3 consecutive weeks → executive sponsor review and scope reset. Red at Day 90 → do not propose SaaS conversion.

### 61.4 Support tiers & SLA commitments

All numbers are **[Target]** commitments offered in MSAs; they are deliberately conservative for a two-person company and tighten after Wave 3 hiring.

| Element | Standard (all paid tiers) | Enterprise tenant |
|---|---|---|
| Uptime target | 99.5% monthly | 99.9% monthly |
| Support channels | In-app + email | In-app + email + named Slack/Teams channel |
| Severity 1 (platform down / data exposure suspected) | Response ≤4 business hours; workaround ≤24h | Response ≤1 hour, 24×7; workaround ≤8h |
| Severity 2 (core workflow blocked) | Response ≤8 business hours; fix ≤5 business days | Response ≤4 business hours; fix ≤2 business days |
| Severity 3 (degraded / cosmetic) | Response ≤2 business days; fix next release | Response ≤1 business day; fix next release |
| RTO / RPO | RTO 24h / RPO 24h (daily backups) | RTO 8h / RPO 4h (PITR) |
| Status page & incident comms | Public status page; Sev-1 notice ≤2h from detection, postmortem ≤5 business days | Same, plus direct notice to tenant admin |
| Expert-response SLA (network) | Questions answered ≤5 business days | ≤3 business days; escalated sourcing if unmet |

[Assumption] Sev-1 24×7 response before Wave 3 means founder on-call rotation; this is stated to enterprise buyers honestly and priced into ACV. If a buyer demands contractual SLAs beyond this table before Wave 3, the deal is declined or repriced — do not sign unsupportable SLAs.

### 61.5 Offboarding runbook (MIS-21)

Triggered by churn, non-renewal, or client request. Owner: AI/Product founder. Target completion: 30 days.

| Step | Detail |
|---|---|
| 1. Export | Full tenant export: decision history, scorecards, uploaded documents, generated reports, audit log — in machine-readable JSON/CSV plus human-readable PDF/ZIP. Client keeps its data and decision history permanently (§62.1). |
| 2. License purge (§53) | Certified deletion of all licensed third-party data and derived artifacts whose licenses prohibit retention (IQVIA/Veeva/MMIT-class sources). Written certificate of destruction issued per source; license-aware retention automation flags what may be retained (RSK-04). |
| 3. Expert access revocation | All expert scoped-access grants terminated same day; expert attestation of no retained client materials; audit log of expert data views archived and provided on request (RSK-06). |
| 4. Retention windows | Operational tenant data deleted 90 days post-termination unless contract specifies otherwise; backups age out ≤35 days after deletion; anonymized benchmark/Failure Lab contributions retained only where the MSA granted derived-learning rights (contracted up front — RSK-04 fix). |
| 5. Continuity | Escrowed export remains available per continuity plan (§62.5) for 12 months post-termination. |

Acceptance criterion: offboarding completes ≤30 days with zero client escalations; export importable into a generic BI tool without LaunchOS (tested annually on a synthetic tenant).

### 61.6 Renewal & expansion mechanics — tied to launch lifecycle

| Lifecycle moment | Offer motion | Trigger |
|---|---|---|
| Pre-launch (T-24 to T-6 mo) | Diagnostic → Blueprint → Fractional Office ladder (§49.3) | Readiness gaps accepted |
| Launch window (T-6 to T+6 mo) | Peak-value period: Fractional Office scope expansion (vendor arbitration volume, weekly failure-mode monitoring); SaaS conversion proposal at Day 90 review | 90-day QBR passed |
| Post-launch (T+6 to T+24 mo) | Continuity offer: post-launch trajectory monitoring, postmortem (Failure Lab contribution), next-asset early planning; right-size Fractional Office → SaaS-only | Launch +6 months |
| Post-launch M&A event | Transition service to acquirer's launch leadership (ICP B conversion opportunity) | Acquisition announced [Verified pattern: 49 of 124 first-launchers acquired, typically 2–4 yrs post-launch — ZS] |
| Next asset | New Diagnostic at preferential pricing; prior launch history = benchmark baseline | Second asset enters Phase III |

**NRR logic:** the natural end of a launch is a churn event by design; the expansion model converts it via post-launch continuity, acquirer transition, or next-asset restart. Every Fractional Office contract carries a written post-launch bridge clause priced at signing, not negotiated at the cliff.


---

## 62. IP, Defensibility & Contracts Infrastructure

**Purpose.** The moat is methodology (v1 §10), the rules library, the archetype engine, and the Failure Lab taxonomy — none of which existed as protected IP in v1 (MIS-13). The business sells consequential advice on confidential data with no contract stack (MIS-03). This section defines both. All legal instruments below are commissioned from counsel; nothing here is legal advice. Owner: Commercial founder (contracts) + AI/Product founder (technical enforcement).

### 62.1 IP strategy

| Asset | Protection mechanism | Rationale / action |
|---|---|---|
| "LaunchOS" name + marks | Trademark registration (USPTO intent-to-use now; Madrid Protocol extension to KR/JP/EU before first non-U.S. contract) | [Action] Filing is cheap; rebranding after category-narrative ownership (§49.6) is not. |
| Launch methodology, rules library, archetype engine, Failure Lab taxonomy | Trade secret + contractual non-extraction | Not patentable at practical cost; protection = never disclose executable rules, weights, or thresholds outside NDA-bound delivery. Client deliverables contain findings and recommendations, not the scoring model. |
| Client-facing platform code | Copyright (automatic) + trade secret for scoring/rule logic; no open-sourcing of methodology-adjacent modules | Standard. |
| Client data | Client-owned, contractually. LaunchOS claims no ownership; licenses only anonymized derived-learning rights (below) | Non-negotiable for buyer trust (ASM-02). |

**Non-extraction clauses — in every client MSA and every expert agreement:**
- No reverse engineering of readiness weights, rule logic, archetype assignments, or benchmark construction from deliverables or UI exposure.
- No use of LaunchOS outputs to build a competing readiness-scoring or launch-governance product.
- Deliverables licensed for internal use; no redistribution outside the client entity.

**What clients keep at termination [Decision]:** their data, their documents, their decision history, and final deliverables (§61.5). They do **not** keep the methodology, rules library, scoring model, archetype engine, benchmark corpus, or Failure Lab taxonomy. This is stated in the MSA up front — it is a procurement question every serious buyer asks (MIS-21).

**Derived-learning rights [Decision, fixes RSK-04 / CON-04]:** every client MSA and expert agreement grants LaunchOS a perpetual right to retain anonymized, aggregated learnings (benchmarks, failure-mode frequencies) that cannot identify the client, asset, or any individual. Minimum-N thresholds before any aggregate is displayed (per §58). If a data license forces purge of derived artifacts, the purge applies to licensed-source content, not to methodology learnings — this asymmetry is drafted deliberately and disclosed.

**Publication strategy [Decision]:** aggregate Failure Lab findings are published quarterly (§49.6). Publication owns the category narrative and is marketing; the published layer contains frequencies, patterns, and case teardowns — never executable rules, weights, or thresholds. Rule: if a competent consultancy could rebuild the scoring model from a publication, it does not ship.

### 62.2 Contract stack

| Instrument | Parties | Key clauses | Status / trigger |
|---|---|---|---|
| Client MSA + SOW templates (one per offer: Health Check, Diagnostic, Blueprint, Fractional Office, Enterprise SaaS) | LaunchOS ↔ client | Decision-support disclaimer (§62.3); liability cap; IP/derived-learning rights (§62.1); non-extraction; export/continuity rights; post-launch bridge pricing (§61.6) | Before first paid engagement [Critical — MIS-03] |
| DPA (Data Processing Agreement) | LaunchOS ↔ client | Art. 28 GDPR processor terms; APPI/PIPA transfer mechanics per §63; subprocessor list; breach notice ≤72h [target] | With every enterprise tenant; EU/JP/KR clients always |
| BAA template | LaunchOS ↔ client (covered entity) | Dormant. Executed only if a client insists on patient-level data (CON-02 path); de-identification-at-source remains the default | Drafted once; signed only on PHI trigger |
| Expert contractor agreement | LaunchOS ↔ expert | Assignment-on-payment of deliverable IP with background-IP carve-outs; confidentiality; conflicts/MNPI attestations per engagement (RSK-06); non-circumvention (no direct engagement with introduced clients for 24 months — MIS-08; §54.7); FMV rate card + annual caps (regulatory_compliance §4); non-agent independent-contractor classification with jurisdiction review (AB5/IR35/EOR rails) | Before first expert engagement |
| Vendor/TPA agreements | Client ↔ vendor, facilitated by LaunchOS RFP engine | Client-mandated data-sharing clauses as standard RFP artifact (ASM-03); SLA scorecard consent; LaunchOS access rights to vendor feeds | Standard artifact from Wave 2 |
| Pro-tier EULA | LaunchOS ↔ individual user | §62.4 guardrails | With Pro tier launch |

### 62.3 Liability architecture

**Disclaimers (every SOW, every report, product footer):** LaunchOS provides decision support, not legal, regulatory, medical, or investment advice; the client owns all promotional, regulatory (MLR, Form 2253), hiring, and spend decisions [Verified basis: regulatory_compliance §6 "hold these lines"]. Never market as "FDA-compliant" or a compliance guarantee [regulatory_compliance §8.7].

**Caps and carve-outs [Decision, industry-norm-anchored]:**
- Aggregate liability cap: 12–24 months of fees paid under the applicable SOW [Verified as norm: regulatory_compliance §6].
- Carve-outs accepted knowingly (standard, insurable): confidentiality breach, data breach caused by LaunchOS negligence, IP infringement by the platform, gross negligence/willful misconduct. Data-breach and confidentiality carve-outs may carry a super-cap (2–3× standard cap) — priced into enterprise ACV.
- Refused always: uncapped liability; indemnity for client misuse or noncompliant dissemination of outputs; regulatory-penalty indemnities [regulatory_compliance §8.8].

**Indemnity flow-through [Decision]:** expert → LaunchOS → client. Experts indemnify LaunchOS for IP/confidentiality violations capped at fees paid to the expert (regulatory_compliance §4 norm); LaunchOS indemnifies clients for platform IP infringement and LaunchOS-caused breach. LaunchOS does not indemnify clients for expert *opinions* — opinions are decision support under the disclaimer.

**AI-output indemnity stance [Decision]:** refuse uncapped AI-output indemnities; offer capped coverage only after confirming the tech-E&O form affirmatively covers AI-output claims. Basis [Credible secondary — verify at policy renewal]: ISO reportedly filed absolute AI exclusions for general-liability policies effective January 2026 — do not assume existing forms cover AI outputs [regulatory_compliance §6]. Action: insurance-form review before signing any AI-output indemnity [counsel + broker].

**Insurance stack [from MIS-18 / regulatory_compliance §6]:** tech E&O (media liability bundled), cyber, D&O, CGL. Target limits $5M/claim, $10M aggregate for regulated-industry enterprise onboarding [norm per regulatory_compliance §6]; sized to largest contractual indemnity exposure, not revenue. Certificates live in the procurement pack (§62.5).

### 62.4 Pro-tier guardrails (CON-07)

**Risk:** a VP at a manufacturer pastes employer-confidential launch data into a $N/mo Pro seat; employer treats it as a data-leak vector; Pro cannibalizes enterprise diagnostics.

| Guardrail | Mechanism |
|---|---|
| ToS prohibition | Pro EULA prohibits uploading employer-confidential or third-party confidential information; user represents authority over all inputs |
| Technical DLP | Paste/upload interceptor: pattern-based warnings on detected confidential markers (drug codes + "confidential," large structured tables, NPI/claims-like data); warning logged; repeat violations suspend account |
| Employer-claim process | Published takedown/claim channel: employer alleges employee uploaded confidential data → LaunchOS suspends the seat, quarantines the data, provides upload logs to the employer, deletes on verified claim |
| Pro → Enterprise upgrade path | When ≥2 users from one employer hold Pro seats, or an employer claim lands, sales outreach converts to enterprise tenant with admin controls; enterprise tenants can annex Pro seats |
| Cannibalization firewall | Pro contains no client-data integrations, no tenant benchmarks, no expert access; methodology outputs are individual-level only (v1 §5 scope enforced in product) |

### 62.5 Procurement-readiness pack (CON-03 / ASM-02 / MIS-17)

Standing artifacts, maintained quarterly, shipped with every enterprise proposal (sales-facing pack contents also in §49.7; **this section owns the canonical pack definition** — §49.7 references it):

| Artifact | Content |
|---|---|
| Security FAQ / CAIQ | Completed consensus assessment questionnaire; auth model, tenant isolation (v1 §7), encryption, logging |
| SOC 2 roadmap letter | Type I in parallel with first paid engagements (CON-03 fix — do not wait for Wave 6); Type II target within 12 months of Type I [Target] |
| Insurance certificates | §62.3 stack, current |
| Subprocessor list | Cloud hosting, LLM providers (with zero-retention/DPA terms per MIS-16), payment rails, EOR/COR for expert payouts (§63.2) |
| Data-flow diagram | End-to-end: client sources → ingestion → tenant store → LLM calls (what leaves, under what terms) → exports; residency per §63.4 |
| Continuity / escrow plan | Escrowed export mechanism (§61.5); 12-month post-termination access; key-person mitigation; wind-down runbook summary |

**Owner:** AI/Product founder. **Acceptance criterion:** the pack answers ≥90% of security-review questions in the first three enterprise procurement cycles without bespoke work [Target; measured per review].


---

## 63. Internationalization & Localization

**Purpose.** Priority geographies are KR/JP/EU before U.S. (v1 §4) but v1 contains no language, contracting, data-transfer, timezone, or residency strategy (MIS-22). This section makes the explicit decisions. Sources: regulatory_compliance §5 (privacy mechanics), market_evidence §2/§6/§8 (geography demand). Owner: Commercial founder (market entry), AI/Product founder (data mechanics), counsel per item.

### 63.1 Product language stance — explicit decision

**Decision: the product is English-only in v1, targeting English-fluent HQ and global commercial teams.**

| Option | Trade-off | Verdict |
|---|---|---|
| English-only v1 | Forfeits buyers whose launch governance runs in Japanese/Korean internally; risks losing JP mid-caps to local-language consultants | **Chosen.** First-launch commercial leadership in target segments operates in English for U.S.-launch workstreams [Assumption — validate in §38 interviews]; a two-person company cannot maintain localized product, support, and methodology in three languages (CON-01). |
| Full localization (JP/KR UI + support) | 2–3× content/support cost; methodology versioning across languages; slows every release | Rejected for v1. |
| Japanese-language layer later | Triggered by evidence, not roadmap optimism | Held as a decision, not a plan. **Trigger:** ≥3 qualified Japanese accounts stall explicitly on language in a 12-month window, or one JP anchor client funds the localization work. Until then, JP engagements are delivered in English with bilingual Expert Council support where available. |

Korea requires no language-layer decision: Korean global-bio HQ commercial teams work in English at the level LaunchOS sells to [Assumption — same validation path as above].

### 63.2 Contracting entity & tax

- **Entity [Decision]:** single U.S. entity contracts cross-border with all clients and experts in v1. No KR/JP/EU subsidiary until one region produces ≥3 concurrent enterprise clients or a regulatory/employment requirement forces it [Assumption — cost-driven threshold].
- **Withholding & permanent establishment [Labeled — obtain counsel before first KR/JP contract]:** cross-border service fees into Japan and Korea may attract withholding tax under treaty rates; sustained in-country selling activity can create PE exposure. Action: treaty-rate analysis per contract type (services vs. SaaS vs. IP license) with cross-border tax counsel; gross-up clause decision in MSAs.
- **Expert payment rails (KR/JP/EU) [Decision]:** engage non-U.S. experts through an EOR/COR (employer/agent-of-record) rail; never as direct foreign contractors without classification review. Basis [Verified]: worker-classification exposure differs by jurisdiction — AB5 ABC test (CA), UK IR35 shifts determination to fee-payer, KR/JP via EOR/COR rails [regulatory_compliance §4]. Subprocessor list (§62.5) must name the rail provider.
- **FX and invoicing:** USD-denominated contracts as default; KRW/JPY invoicing only at enterprise tier with FX-adjustment clause [Assumption — standard practice].

### 63.3 Cross-border data-transfer mechanics per region

Legal basis per region [Verified: regulatory_compliance §5; counsel confirms per client]:

| Region | Regime | Required mechanism for U.S.-hosted LaunchOS | Notes |
|---|---|---|---|
| **EU/EEA + UK** | GDPR | Art. 28 DPA (mandatory — LaunchOS is processor for client data); transfer via SCCs + transfer impact assessment, or EU-U.S. Data Privacy Framework certification; Art. 27 EU representative if targeting EU data subjects; DPIA analysis per deployment [CC] | EU HCP CRM data = personal data. UK adequacy-recognized by both EU and (since 2025) Korea/Japan frameworks [Verified: regulatory_compliance §5] |
| **Japan** | APPI | U.S. is **not** on Japan's adequacy list (EU/EEA + UK only) [Verified]. Transfer requires one of: (i) data-subject consent after disclosing destination regime + recipient safeguards; or (ii) an **APPI-equivalent protection system** at LaunchOS, contractually established with ongoing (~annual) monitoring (APPI Art. 28). Default route for B2B HCP data: equivalent-system contract [CC per client]. Breach notification to PPC mandatory. | 2026 triennial-review amendment passed the Diet July 10, 2026, effective by mid-2028 [Verified]: first-ever administrative surcharges; processor-relief provisions; **AI-training consent exception**. Track implementing rules; the AI-training exception may simplify model-improvement use of JP-sourced data but does not change transfer mechanics [CC]. |
| **South Korea** | PIPA | Cross-border transfer (incl. remote access / offshore storage) under Art. 28-8: separate consent with prescribed disclosures, or statutory basis; for **outsourcing/storage**, contract-necessity + privacy-policy disclosure is the lighter route — default for enterprise tenants [CC per client]. PIPC can **order suspension of transfers**; fines up to **3% of total revenue** [Verified]. Foreign entities above thresholds must appoint a **domestic agent** [CC — determine threshold applicability before second KR tenant]. | PIPC recognized the EU adequate (Sept 2025) — **not the U.S.** [Verified]. Korean pharma clients commonly impose in-region hosting or notification terms contractually even without a legal residency mandate [CC]. |

**Operational rule:** every non-U.S. tenant onboarding includes a transfer-mechanism line item in the data-intake checklist (§61.1); no ingestion before the mechanism is documented. This is a founder checklist, not a legal opinion — counsel signs the template per region once, then it is reused.

### 63.4 Data residency posture

**Decision: U.S.-only hosting in v1, with the sales consequences stated honestly.**
- Consequence: some JP/KR procurement teams will impose in-region hosting contractually [Verified as common practice: regulatory_compliance §5]; U.S.-only hosting will lose or delay those deals. Accepted deliberately — multi-region deployment before Wave 4 is not buildable by two engineers (CON-01).
- **Evaluation trigger:** regional-hosting option is scoped when a JP or KR anchor client (a) requires it contractually and (b) commits to enterprise-tier ACV. Implementation note: the Supabase/Postgres stack supports regional projects; tenant-level region pinning is the design point — scoped as a Wave 4+ item [Inference — engineering effort; estimate at trigger time, not now].
- Interim mitigation for residency-sensitive prospects: contract for minimal-data mode (public + manual data tier only, per ASM-06 module-tier mapping) so the client's sensitive feeds never leave their environment.

### 63.5 Timezone & coverage model

- **Expert network:** recruit KR/JP/EU-resident experts deliberately; per-engagement SLA (§61.4) holds regardless of geography because matching is timezone-aware [Target mechanism: timezone as a matching field in expert profiles].
- **Support:** Sev-1 response windows in §61.4 are clock-based, not business-hours-based, for enterprise; Standard tier is U.S.-business-hours and is sold as such to Asia-Pacific clients with an explicit disclosure [Decision — do not promise 24×7 standard support before Wave 3 hiring].
- **Engagement design: async-first [Decision].** Diagnostics and Fractional Office work run on async artifacts (readiness scorecards, decision logs, written expert opinions) with ≤2 synchronous meetings/week scheduled in Asia-Pacific morning hours. This is also a delivery-margin decision: synchronous consulting across a 13–17-hour offset does not scale at founder headcount.

### 63.6 Market-entry risk notes

- **Japan — thin direct-entry SAM [Verified]:** no primary evidence of Japanese mid-cap direct U.S. first launches in 2022–2026; ZS counts only ~5 Asian ex-U.S. first launches over 15 years [market_evidence §8.5]. **Consequence [Decision]:** Japan strategy is partner-led and opportunistic — engage only companies that demonstrably retain U.S. rights, sourced through local referral partners (§49.4/§49.5), with a 2–3× longer trust cycle priced into pipeline math. No Japan-specific GTM spend in Yr 1.
- **Korea — priority [Verified]:** repeated direct-entry precedent (SK, Celltrion) plus a live counter-model (Yuhan, Daewoong license out). GTM consequence: the Radar's rights-retention field (§49.1) is decisive in Korea — track licensing signals as disqualifiers in real time.
- **China — monitor, do not enter:** the licensing-out/NewCo trend (94 China-linked deals in 2025, 10 >$2B) [Verified: market_evidence §6.2] means Chinese-origin assets predominantly reach the U.S. through U.S./EU sponsors. This **trims the ex-U.S. direct-entry universe** [Inference] but creates buyers on the receiving side (U.S. NewCos launching China-origin assets) — the Radar captures them as U.S. entities. Quarterly review: if ≥5 China-origin direct U.S. first launches appear in a year, revisit.
- **Funding-winter demand effect [Verified]:** biopharma funding −20% in 2025 with decade-low IPOs; near-term first-launcher formation is constrained, mitigated by the late-stage/commercial-stage bifurcation (LaunchOS's buyers are the funded cohort) [market_evidence §6.1; competitive_landscape §6.3]. GTM hedge remains the ICP B parallel track (§49.2).

**Section acceptance criteria:** (1) counsel-signed transfer templates for EU/JP/KR exist before the first tenant in each region; (2) the English-only stance and U.S.-only residency stance appear verbatim in the procurement pack so no prospect discovers them late; (3) geography triggers above are reviewed quarterly by both founders.

---

# PART III — v2.1 Reconciliation & Build Control

## 64. Source-of-Truth Hierarchy

When any LaunchOS document, model output, expert opinion, or earlier blueprint conflicts, the following order controls:

1. **LaunchOS Master Blueprint v2.1 — explicit v2.1 controlling decisions**
2. **v2.0 Amendments Register**
3. **v2.0 Part II (§47–63)**
4. **v1.0 approved product constitution (§1–46)**
5. **Gap Analysis findings** as diagnostic evidence, not as direct build instructions
6. **Sync Brief** as a continuity aid, except where incorporated into this v2.1
7. Expert advice
8. Model-generated recommendations

Expert advice and AI output can challenge the methodology but do not silently supersede it. Any accepted change becomes a versioned amendment with:
- superseded rule/section,
- evidence,
- approver,
- effective date,
- impact analysis,
- affected tenants/modules.

---

## 65. Build Control Charter

### 65.1 The governing commercial rule

> **Sell before build.**

No material module begins because it is interesting, technically possible, or appears in a competitor product.

A module enters development only when at least one of the following is true:

1. a paying client needs it to complete a contracted outcome;
2. three qualified prospects independently identify the same problem;
3. it is required for security, legal, tenant isolation, evidence governance, or procurement;
4. it is required for the sellable Commercial Readiness Diagnostic;
5. it is a dependency of a capability meeting one of the four conditions above.

### 65.2 What Waves 0–2 are allowed to build

**Allowed core:**
- tenant/auth foundation;
- company/product/indication/launch setup;
- permission matrix;
- evidence/source registry;
- Readiness Engine v1;
- Launch Archetype v1;
- Gap & Expert workflow;
- Rules Engine v1 plus dry-run sandbox;
- simple Command Center;
- Decision Ledger;
- Risks / Issues / Decisions;
- Expert Engagement workflow;
- audit trail;
- AI evidence/confidence envelope;
- First Launch Radar internal prospecting tool;
- report generation;
- security questionnaire/procurement pack;
- SSO foundation if required by first enterprise procurement cycle.

**Allowed agents in Waves 1–2:**
1. Orchestrator
2. Readiness Agent
3. Gap & Expert Agent
4. Executive Brief Agent

Everything else waits.

### 65.3 What Waves 0–2 must NOT build

Do not build yet:
- rep-facing generative AI;
- next-best-action production engine;
- autonomous promotional content;
- field-force optimization as a production commitment;
- full CRM replacement;
- proprietary claims warehouse;
- global benchmark product based on thin sample sizes;
- international localization;
- PHI-heavy patient funnel;
- elaborate multi-region infrastructure;
- eleven-agent autonomous mesh;
- custom integrations that no paying client requires;
- marketplace economics around experts;
- referral-fee monetization from vendors.

### 65.4 Founder capacity rule

Until additional funded delivery/product capacity exists:

- product founder must retain **≥70% of working capacity** for product/research/build during core build waves;
- concurrent high-touch enterprise engagements are capped;
- additional client work is accepted only if it funds delivery capacity or materially advances the product;
- work that cannot be reused as methodology, product, data structure, rule, benchmark input, or sales proof is treated as bespoke consulting and priced accordingly.

---

## 66. Minimum Sellable Product — Commercial Readiness Diagnostic

The first real product is **not LaunchOS Enterprise**.

The first sellable product is:

# Commercial Readiness Diagnostic

### Required user journey

1. Create manufacturer tenant.
2. Create product / indication / U.S. launch.
3. Select/derive launch archetype.
4. Complete structured assessment.
5. Attach/identify evidence.
6. System scores readiness.
7. System identifies hard gates and gaps.
8. AI explicitly identifies unknowns.
9. Where needed, user creates an Expert Engagement.
10. LaunchOS produces:
   - readiness score,
   - workstream heatmap,
   - critical-path risks,
   - key assumptions,
   - evidence quality,
   - top decisions,
   - 90/180-day remediation roadmap.
11. Senior operator reviews output.
12. Board-grade report generated.
13. Decision Ledger records accepted actions.
14. Client can return and see changes over time.

### Minimum modules

- Auth/Tenant
- Product & Launch
- Readiness
- Archetype
- Evidence
- Gap Wizard
- Expert Request
- Rules
- Risks/Decisions
- Command Center Lite
- Audit
- Report

### Ship only if

The diagnostic is considered sellable only when:

- score is explainable;
- hard gates are explicit;
- evidence quality changes confidence;
- tenant isolation tests pass;
- source lineage exists;
- AI can return “insufficient evidence”;
- expert access is scoped and logged;
- output looks board/executive grade;
- founders can deliver the engagement without rebuilding the report manually from scratch.

---

## 67. Readiness Scoring Specification — Required Before Production

A numerical readiness score without a published internal methodology is prohibited.

Wave 1 must define:

### 67.1 Core score elements

For each capability:
- importance weight;
- launch-archetype multiplier;
- time-phase expectation;
- critical-path status;
- evidence grade;
- evidence recency;
- completion state;
- expert-validation state;
- hard-gate status.

### 67.2 Evidence grades

Example structure to validate with experts:

- **E0:** assertion only / no evidence
- **E1:** internal draft or weak evidence
- **E2:** approved internal evidence / credible external support
- **E3:** finalized, approved, decision-grade evidence

### 67.3 Hard gates

Certain deficiencies cannot be averaged away by strong scores elsewhere.

Examples:
- launch-critical leadership role unresolved;
- required distribution/fulfillment path unresolved;
- critical regulatory/compliance dependency unresolved;
- training/certification dependency blocking field deployment;
- material data-rights problem;
- critical vendor not contracted beyond required date.

### 67.4 Explainability

Every score must answer:
- why this score?
- what increased/decreased it?
- what evidence supports it?
- what would raise confidence?
- what is the next action?
- does this affect critical path?

---

## 68. Evidence, Benchmark & Data-Rights Firewall

### 68.1 Three evidence universes

LaunchOS must distinguish:

**A. Public / LaunchOS-owned**
- public regulatory data,
- public research,
- LaunchOS-original methodology,
- properly licensed reusable expert-derived methodology,
- engagement telemetry contractually cleared for aggregate use.

**B. Tenant-owned / tenant-confidential**
- client documents,
- forecasts,
- launch plans,
- CRM,
- internal research,
- vendor proposals,
- confidential decisions.

**C. Third-party licensed**
- IQVIA,
- Veeva Compass/OpenData,
- MMIT,
- Definitive,
- Komodo,
- H1,
- other contract-restricted datasets.

These are never treated as interchangeable.

### 68.2 Shared asset rule

Failure Lab, benchmark products, cross-tenant models, methodology improvements, and shared AI eval sets may only incorporate:
- public information,
- LaunchOS-owned information,
- explicitly authorized reusable expert knowledge,
- contractually permitted anonymized engagement telemetry.

No licensed third-party data or derivatives enter shared assets unless the contract explicitly permits that use.

### 68.3 Data Rights Registry

For every dataset/integration:
- vendor;
- agreement;
- client license;
- LaunchOS third-party access authorization;
- permitted modules;
- permitted outputs;
- derivative rights;
- retention;
- deletion/purge;
- audit rights;
- expiration;
- tenant(s);
- contact/owner.

A module must query the registry before using a dataset.

---

## 69. Security & Procurement Gate

LaunchOS is selling confidential commercial decision support to pharmaceutical manufacturers. Security is therefore part of product-market fit.

### 69.1 Wave 1 minimum

- MFA
- tenant-aware RBAC
- row-level security
- tenant-scoped file storage
- tenant-scoped RAG/vector access
- audit logs
- encrypted transport/storage
- secrets management
- production/dev separation
- automated tenant-isolation tests in CI
- data-flow diagram
- subprocessor list
- incident-response plan
- backup/restore process
- security FAQ / CAIQ response library
- DPA/BAA decision path
- deletion/export workflow

### 69.2 Procurement survivability

Before claiming enterprise readiness:
- first security questionnaire can be answered without inventing controls;
- security claims match implemented controls;
- no “SOC 2 compliant” language before appropriate attestation;
- SOC 2 Type I readiness runs in parallel with first enterprise engagements;
- insurance is bound before consequential paid advisory work;
- vendor AI providers have acceptable enterprise data terms / zero-training controls.

### 69.3 U.S.-only V1

U.S.-only data hosting remains the default for V1.

Foreign clients can use LaunchOS for U.S.-launch work only after:
- transfer mechanism,
- DPA,
- client data policy,
- procurement requirements
are documented.

Regional hosting is a paid-enterprise trigger, not speculative infrastructure.

---

## 70. Expert Network Gate

The expert network is a product advantage only if it is safer and easier than ad-hoc consulting.

Before the first paid Expert Engagement:

### Required
- expert agreement / independent contractor structure;
- NDA/confidentiality;
- conflict-of-interest attestation;
- employer restriction check;
- MNPI policy;
- compensation/rate card;
- IP/work-product terms;
- non-circumvention;
- scoped access;
- engagement expiration;
- activity log;
- validator role;
- provenance classification;
- invoice/payment workflow.

### Internal Validation rubric

Each expert response is reviewed across:
1. relevance to the question;
2. factual/evidentiary support;
3. conflict/compliance concerns;
4. consistency with existing LaunchOS/client decisions.

Contradictory expert advice is not “averaged.”
It creates:
- a contradiction record,
- competing assumptions,
- escalation/second expert if needed,
- final human decision in the Decision Ledger.

---

## 71. Regulatory Gate for Field/Rep AI

Rep-facing AI is **not part of early product-market validation**.

It becomes eligible only after:

1. experienced pharma promotional/regulatory counsel approves architecture;
2. enterprise client supplies approved/MLR-controlled content;
3. commercial/medical separation is implemented;
4. off-label and medical-question routing controls pass evals;
5. adverse-event/product-complaint escalation is defined;
6. output cannot be exported as promotional material unless appropriately approved;
7. immutable audit logs are operational;
8. insurance affirmatively covers the intended use;
9. client signs usage/governance policy;
10. golden eval set meets agreed thresholds.

Until then, field modules may provide:
- workflow,
- coaching structure,
- readiness,
- non-promotional operational analysis,
but not free-form product claims.

---

## 72. Vendor-Neutrality Doctrine

LaunchOS represents the manufacturer.

Therefore:

- no vendor referral fees;
- no placement fees;
- no hidden commissions;
- no preferred vendor caused by compensation;
- no data-vendor recommendation driven by reseller margin;
- no CSO recommendation driven by relationship economics.

LaunchOS may charge the client for:
- RFP design,
- evaluation,
- integration,
- vendor governance,
- performance monitoring.

This neutrality is part of the product moat.

---

## 73. Product-Market Confidence Model

“90% confidence” must be decomposed.

### 73.1 Market problem confidence
Can reach 90%+ through:
- primary research,
- public evidence,
- buyer interviews,
- launch postmortems,
- expert validation.

### 73.2 Service-offer confidence
Can reach 90%+ after:
- paid diagnostic,
- repeatable delivery,
- proposal demand,
- attach to next service.

### 73.3 Workflow/product confidence
Can reach 90%+ after:
- real client weekly use,
- ≥5 modules replacing actual work,
- users prefer LaunchOS to spreadsheet/PowerPoint process.

### 73.4 SaaS repeatability confidence
Requires:
- multiple clients use same product flow,
- low bespoke implementation,
- recurring willingness to pay,
- repeatable onboarding,
- product usage independent of founder meetings.

### 73.5 Enterprise readiness confidence
Requires:
- real procurement/security review,
- data-rights approval,
- insurance,
- security controls,
- client contract acceptance,
- acceptable support/continuity plan.

No single “90%” statement may be used without specifying which dimension it refers to.

---

## 74. Open Founder Decisions — Do Not Silently Resolve

The following remain open until formally decided:

### D1. Capital path
- bootstrap beyond Wave 2,
- or raise seed when commercial gates are met.

### D2. Primary quota-bearing geography
- U.S. emerging biopharma first,
- Korea first,
- or parallel founder-led motions.

Japan remains partner-led/opportunistic in Year 1 unless evidence changes.

### D3. LaunchOS trademark
Urgent:
- trademark clearance,
- domain review,
- USPTO filing strategy.

### D4. Public positioning language
Formal ratification needed for:
> vendor-neutral cross-stack commercialization decision and arbitration layer

versus broader:
> AI-native U.S. Commercialization Operating System

Recommended use:
- **Category:** AI-native U.S. Commercialization Operating System
- **Differentiated promise:** vendor-neutral decision, governance, and orchestration layer for first U.S. launches.

---

## 75. Build Sequence — Next Five Deliverables

No additional broad strategy document should be created before these are completed.

### 1. Readiness Question Bank v0
Target:
150–250 questions.

Every question includes:
- workstream
- capability
- stage/timing
- archetype relevance
- evidence requirement
- evidence grade
- criticality
- hard gate?
- scoring weight
- expert-validation flag
- source/methodology version

### 2. Commercial Readiness Diagnostic Report Template
Board-grade output:
- executive summary
- readiness
- critical path
- top gaps
- assumptions
- evidence quality
- decisions
- 90/180-day roadmap
- expert views
- appendix

### 3. Buyer Interview + Pricing Validation Instrument
20 buyer interviews.

Must cover:
- current process;
- failure points;
- budget;
- consulting/vendor spend;
- security/procurement;
- data rights;
- willingness to pay;
- Van Westendorp;
- Gabor-Granger;
- objections;
- product demo response.

### 4. First Launch Radar v0
Public-data prospecting engine.

Initial sources:
- ClinicalTrials.gov API
- FDA/Drugs@FDA
- SEC
- PDUFA/public calendars
- company IR
- public financing/hiring signals

First-class fields:
- first commercial product?
- U.S. rights retained?
- launch stage?
- therapeutic area?
- likely HCP concentration?
- CCO/VP Commercial hired?
- recent funding?
- outsourcing signals?

### 5. Wave 0–1 PRD
Must include:
- exact user journeys;
- schemas;
- permissions;
- threat model;
- scoring spec;
- evidence model;
- rules semantics;
- expert workflow;
- Command Center wireframes;
- acceptance tests;
- event/audit model;
- AI evals;
- no-build list.

---

## 76. Product Quality Kill Tests

LaunchOS fails the “real product” standard if any of the following is true:

1. Readiness score is a weighted questionnaire with no hard gates or evidence logic.
2. AI answers when evidence is insufficient.
3. Experts are ordinary users with broad tenant access.
4. Rules are hard-coded and cannot be versioned.
5. Dashboard shows status but not decisions.
6. Command Center cannot identify downstream impact.
7. Decision history lives only in chat.
8. Benchmark claims use tiny samples without labeling.
9. Shared models contain licensed third-party derivatives.
10. Product relies on a founder manually rewriting every report.
11. Security answers depend on future intentions rather than implemented controls.
12. The app navigates like database tables.
13. Every client requires a different workflow.
14. Client cannot export its data and decision history.
15. Users continue running the real launch in PowerPoint/Excel and merely copy status into LaunchOS.

---

## 77. Definition of “LaunchOS Is Working”

LaunchOS is working when:

### For a first-time manufacturer
The CCO can log in and know:
- what is ready;
- what is not;
- why;
- what decision is needed;
- who owns it;
- what evidence is missing;
- what slips if it is delayed;
- whether an expert should be engaged.

### For the founders
A paid readiness engagement can be delivered primarily through LaunchOS rather than outside documents.

### For experts
They can contribute high-value judgment without unnecessary exposure to client data.

### For procurement
The product can explain its security, data flows, subprocessors, rights, retention, and AI governance without improvisation.

### For product-market fit
A client returns to LaunchOS because it is where launch decisions and evidence live — not because the founders schedule another meeting.

---

## 78. Final v2.1 Controlling Definition

> **LaunchOS is an AI-native, multi-tenant U.S. pharmaceutical commercialization operating system and manufacturer-side decision layer. It helps first-time and established commercial leaders design, pressure-test, build, govern, monitor, and improve launches by combining versioned commercialization methodology, deterministic rules, expert judgment, evidence-grounded AI, client-authorized data, vendor-neutral orchestration, and decision-centric command views.**

### Primary wedge
First U.S. launches for emerging U.S. and global biopharma manufacturers retaining U.S. commercial rights.

### Expansion
Traditional pharma launch leadership and, after regulatory gates are met, field leadership and teams.

### Core promise

> **Know what is missing. Know what matters. Know what to do next — before the launch tells you too late.**

---

# PART IV — v2.2 Founding-Team / Right-to-Win Correction

## 79. Canonical Founding-Team Correction

Any earlier analysis that describes the LaunchOS founding team as lacking pharmaceutical launch experience is superseded.

### 79.1 Sharon O'Dell — Pharmaceutical Launch & Field Organization

Canonical experience:
- 25 years pharmaceutical commercial leadership;
- experience across Janssen/J&J, Bristol Myers Squibb, Novo Nordisk, VIVUS, KVK, and Sankyo/Daiichi Sankyo;
- multiple product launches;
- 200+ field representatives hired;
- 30+ district managers hired;
- 1,000+ representative interviews;
- multiple President's Club awards.

Her experience is direct methodology input for:
- Organization Designer,
- Field Force Designer,
- Hiring & Certification OS,
- FLSM/manager sequencing,
- manager spans,
- rep recruiting,
- interview scorecards,
- competency models,
- onboarding,
- certification,
- CRM/call planning,
- field-readiness rules,
- launch execution.

Do not invent product-specific launch details, therapeutic areas, or outcomes that have not been confirmed.

### 79.2 Ronnie O'Dell — Regulated Distribution & Commercial Systems

Canonical experience:
- 25+ years building regulated commercial distribution/GTM organizations in insurance;
- claimed $700M+ cumulative premium growth across multiple commercial builds;
- specialization in channel/distribution systems, vendor networks, governance, GTM, AI/product systems, and regulated commercial operations.

### 79.3 Right to Win

LaunchOS's founding right to win is the combination of:
1. first-person pharma launch execution;
2. field-organization and hiring depth;
3. regulated distribution-system architecture;
4. versioned methodology encoded into configurable software.

### 79.4 Remaining Expertise Gap

The material expertise gap currently identified is **deep payer / market-access strategy**.

Mitigation:
- recruit a former VP Market Access / payer-strategy leader as the first Expert Council anchor.

### 79.5 Methodology Rule

Founding/operator experience is not implemented as immutable code.

It must be:
- elicited,
- documented,
- source-tagged,
- expert-challenged,
- versioned,
- configurable,
- tested against real launches.

### 79.6 Risk Register Correction

- Founder pharma-launch credibility risk is materially reduced.
- Key-person concentration remains real because valuable methodology is founder-held until encoded.
- Add household/family concentration as a governance/continuity consideration for enterprise buyers.
- Security, insurance, continuity, and procurement mitigations remain required.

### 79.7 Standing Canonical-Context Rule

Important facts about LaunchOS strategy, founders, methodology, security, product rules, and market assumptions must exist in the canonical repo documentation or they are not considered reliable context for future AI workstreams.

---

# PART V — v2.3 Contract Sales / CSO Experience Amendment

## 80. Amplity Contract-Sales Experience

Sharon O'Dell spent approximately four years at Amplity in contract pharmaceutical sales.

During that period, according to the founding team:
- the contract field organization scaled from roughly **30 representatives to about 80 representatives**;
- the contract value grew from approximately **$5M to $15M** (**estimated by the user; not independently verified**).

### 80.1 Product significance

This experience strengthens LaunchOS methodology in areas that public consulting frameworks cannot fully provide:

- outsourced field-force economics;
- CSO vs internal vs hybrid operating-model decisions;
- recruiting and deployment at scale;
- manager-layer requirements;
- contract-sales governance;
- performance expectations;
- rep and manager productivity;
- field organization expansion;
- CSO vendor evaluation;
- client-side oversight of outsourced execution;
- build/buy/rent tradeoffs;
- transition/conversion planning.

### 80.2 LaunchOS modules affected

The following modules should explicitly incorporate this operator experience into versioned methodology:

1. Build / Buy / Rent Engine
2. Vendor / CSO RFP Engine
3. Field Force Designer
4. Organization Designer
5. Hiring & Certification OS
6. Vendor Performance / Governance
7. Commercial Readiness Engine
8. Launch Command Center — outsourced field readiness
9. CSO Economics / Cost Scenario Model

### 80.3 Vendor-neutrality rule

LaunchOS must not use Sharon's Amplity background as an endorsement of Amplity.

The product represents the manufacturer and should evaluate qualified CSO competitors objectively.

### 80.4 Evidence rule

The approximate $5M → $15M contract-value figures remain **founder-estimated** until independently substantiated. They may inform internal methodology and positioning, but any public claim must be clearly labeled as an estimate or verified before use.
