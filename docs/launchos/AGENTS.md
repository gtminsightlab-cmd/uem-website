# AGENTS.md — LaunchOS

## Read This First

You are working on LaunchOS, an AI-native, multi-tenant U.S. pharmaceutical commercialization operating system.

### North Star
Help pharmaceutical commercial leaders design smarter launches, identify failure earlier, and make better commercialization decisions — whether it is their company’s first U.S. launch or their tenth.

### Before Coding
Read, in order:
1. `00_READ_ME_FIRST.md`
2. `01_NORTH_STAR_AND_PRODUCT_CONSTITUTION.md`
3. `02_BUILD_GUARDRAILS.md`
4. `13_RIGHT_TO_WIN_AND_FOUNDING_TEAM.md`
4. the active PRD under `waves/`
5. `03_ARCHITECTURE_AND_TENANCY.md`
6. `04_AI_RULES_EXPERTS_AND_EVIDENCE.md`
7. `05_UX_COMMAND_CENTER.md`
8. `06_ACCEPTANCE_TESTS.md`
9. `07_DECISION_LOG.md`
10. `08_OPEN_QUESTIONS.md` when requirements are ambiguous

The full blueprint is `99_MASTER_BLUEPRINT_v2.3.md`. Use it for depth, not as the first file for every task.

## Permanent Build Rules

- No hard-coded demo business logic.
- Demo is normal seeded tenant data.
- Methodology, rules, milestones, weights, thresholds, evidence requirements, prompts, and report structures must be configurable/versioned where practical.
- Multi-tenancy is foundational.
- Enforce tenant isolation in database, API, search/RAG, exports, caches, jobs, and expert workflows.
- Never weaken tenant safety to speed up a demo.
- AI must state when evidence is insufficient.
- Material AI outputs need evidence/source/confidence.
- Experts receive scoped engagement access, not broad tenant access.
- UI is decision-centric, not database-centric.
- Do not broaden scope beyond the active wave without documenting the reason.
- Do not silently resolve contradictory requirements. Add an item to `08_OPEN_QUESTIONS.md`.
- Keep PRs small, testable, and reversible.

## Demo Independence Test

For every feature ask:
> If the seeded demo tenant were deleted, could a new manufacturer use this feature without changing code?

If no, fix the architecture before merging.

## PR Requirements

Use `11_PR_TEMPLATE.md`.

Every PR must document:
- North Star contribution
- requirement source
- user outcome
- architecture/schema changes
- configurability
- tenant-security impact
- tests
- acceptance criteria
- out-of-scope
- new open questions
- decision-log changes

## Current Build Priority

Follow the active wave only.

Initial sequence:
- Wave 0 — Foundation
- Wave 1 — Conviction Prototype
- Wave 2 — Launch Operating System

Do not prematurely build rep-facing generative AI, full NBA, broad licensed-data integrations, CRM replacement, or autonomous promotional tooling.

## Definition of Done

A task is not done until:
- applicable tests pass,
- lint/type checks pass,
- tenant isolation remains intact,
- demo independence remains intact,
- docs/decision log/open questions are updated when necessary,
- no requirement is implemented only as a static mock when working behavior was requested.


## Founding-Team Canonical Context

Do not describe LaunchOS as lacking pharma launch experience.

Sharon O'Dell's field/launch experience is canonical product input for:
- Organization Designer
- Field Force Designer
- Hiring & Certification OS
- manager spans/sequencing
- interview/hiring methodology
- CRM/call planning
- launch readiness
- field execution

Do not invent unconfirmed launch/product specifics. See `13_RIGHT_TO_WIN_AND_FOUNDING_TEAM.md`.

## Wave 0–1 Execution Files

Before implementing Wave 0 or Wave 1, also read:
- `14_BUILD_EXECUTION_PACK_INDEX.md`
- `execution/WAVE_00_01_TECHNICAL_PRD.md`
- `ui/CONVICTION_PROTOTYPE_UI_SPEC.md`
- `prs/WAVE_00_01_PR_SEQUENCE.md`

For readiness work:
- `methodology/READINESS_QUESTION_BANK_v0.md`
- `methodology/READINESS_QUESTION_BANK_v0.csv`

For demo work:
- `demo/ASTERION_DEMO_SCENARIO.md`
- `demo/ASTERION_DEMO_SEED_v0.json`

Candidate readiness weights and hard gates are methodology data awaiting operator/expert validation; never compile them into application code.
