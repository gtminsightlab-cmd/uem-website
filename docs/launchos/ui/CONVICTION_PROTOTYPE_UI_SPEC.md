# LaunchOS — Conviction Prototype UI / UX Specification

## UI North Star
Feel like a **commercial launch operating room**, not a project-management database.

Users should immediately know:
- What matters?
- Why?
- What should I do?
- What is missing?
- What happens next?

## Global shell
Left nav:
Command, Readiness, Roadmap, Decisions & Risks, Experts, Strategy, Partners, Reports, Rules, Help.

Top bar:
Manufacturer switcher → Product → Indication → Launch → PDUFA countdown → Ask LaunchOS → Notifications → User.

## Command Center
Header:
Manufacturer / Product / Indication / PDUFA / Days to Launch / Archetype.

Executive cards:
Overall Readiness, Critical Risks, Decisions Due, Critical Path.

Workstream health:
Strategy, Market, Access, Organization, Field, Commercial Ops, Distribution, Training.

Main panel:
**What requires attention this week?**

Each item:
title, why it matters, evidence, confidence, owner, due date.
Actions:
Review / Assign / Ask Expert / Show Evidence.

Right rail:
next milestones, overdue decisions, stale evidence.

## Readiness
Header:
Readiness score + confidence + evidence quality + trend.

Workstream matrix:
Readiness / Confidence / Hard Gates / Unanswered / Evidence Gaps / Owner.

Drill-in:
Why / hard gates / questions / evidence / expert validation / next actions.

Every status has a `Why?`.

## Ask LaunchOS / Gap Wizard
Answer format:
- What I know
- What I do not know
- Current confidence
- What I can say now
- What is required for a decision-grade answer
- Recommended next actions

Buttons:
Add Information / Add Evidence / Ask Expert / Create Decision / Save to Ledger.

## Expert Engagement
Manufacturer sees exact context packet before sharing.
Expert sees engagement only, not tenant navigation.
Expert submits:
response / provenance / confidence / sources.

## Rules Manager
List:
rule / category / version / status / severity / owner.

Editor:
structured conditions, dry run, impact preview, version comparison.
No arbitrary code.

## Roadmap / Critical Path
Timeline by workstream.
Milestones show owner/date/status/criticality.
Click → predecessor/successor.
Move date in simulation → show downstream impact before accepting.

## Decisions & Risks
Tabs:
Decisions / Risks / Assumptions.

Decision:
question / owner / due / options / system recommendation / confidence / evidence / expert inputs / rationale.

Risk:
severity / probability / impact / trigger / owner / mitigation / source.

## Build / Buy / Rent
Capability selector.
Compare Internal / CSO-Rent / Hybrid / Delay.

Dimensions:
speed, fixed cost, flexibility, control, hiring burden, strategic reuse, vendor dependency.

Clearly separate known facts from assumptions.

## Report
Types:
Executive Readiness / Board Readiness / Functional Readiness.

Executive sections:
Summary / Readiness / Hard Gates / Risks / Decisions / Evidence Gaps / 90-Day / 180-Day / Experts / Build-Buy-Rent / Appendix.

## Help & Academy
Context glossary:
TPP, PDUFA, NDA/BLA, HCP, HCO, KOL, IDN, CSO, FLSM, KAM, FRM, MSL, HUB, 3PL, GTN, TRx/NRx, MLR, pull-through.

## Visual semantics
Green = on track
Amber = attention
Red = critical
Gray = not assessed/insufficient evidence

Never color alone: label + icon + text.

Readiness and confidence are separate:
`Readiness 72% | Confidence 48%`

## New Manufacturer setup
1. organization
2. product
3. indication
4. PDUFA/launch
5. launch attributes
6. archetype recommendation
7. confirm/edit
8. instantiate applicable workstreams/questions/milestones
9. Command Center empty-state with explicit evidence gaps
10. guided next actions

## UX acceptance
Within 60 seconds a new executive should answer:
- overall state?
- top 3 risks?
- overdue decisions?
- critical path?
- why is Field red?
- where is evidence weak?
