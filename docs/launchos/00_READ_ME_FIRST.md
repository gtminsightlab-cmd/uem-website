# LaunchOS — READ ME FIRST

This folder is the authoritative Codex handoff package for LaunchOS.

## North Star

> Help pharmaceutical commercial leaders design smarter launches, identify failure earlier, and make better commercialization decisions — whether it is their company’s first U.S. launch or their tenth.

Primary wedge:
- first U.S. launches for emerging U.S. biopharma and global manufacturers entering the U.S.

Expansion:
- established pharma launch leaders,
- regional leaders,
- first-line managers,
- field teams after regulatory gates are satisfied.

## What LaunchOS Is

LaunchOS is an AI-native, multi-tenant U.S. pharmaceutical commercialization operating system and manufacturer-side decision layer.

It combines:
- verified commercialization methodology,
- deterministic rules,
- expert judgment,
- evidence-grounded AI,
- client-authorized data,
- vendor-neutral orchestration,
- role-specific workflows,
- command-center decision intelligence.

## What LaunchOS Is NOT

Do not build LaunchOS as:
- a generic project manager,
- a generic CRM,
- a dashboard collection,
- a ChatGPT wrapper,
- a consulting-document repository,
- a hard-coded demo,
- a replacement for Veeva, IQVIA, MMIT, CSOs, distributors, HUBs, or MLR/PV systems.

## Source-of-Truth Order

When requirements conflict, follow this order:

1. `01_NORTH_STAR_AND_PRODUCT_CONSTITUTION.md`
2. `02_BUILD_GUARDRAILS.md`
3. `13_RIGHT_TO_WIN_AND_FOUNDING_TEAM.md`
3. Current Wave PRD under `/waves`
4. `03_ARCHITECTURE_AND_TENANCY.md`
5. `04_AI_RULES_EXPERTS_AND_EVIDENCE.md`
6. `05_UX_COMMAND_CENTER.md`
7. `06_ACCEPTANCE_TESTS.md`
8. `07_DECISION_LOG.md`
9. `08_OPEN_QUESTIONS.md`
10. `09_RESOURCE_AND_RESEARCH_INDEX.md`
11. Master Blueprint v2.3
12. Older research / historical context

Codex must not silently resolve contradictions. Add them to `08_OPEN_QUESTIONS.md`.

## Build Rule

> Production architecture + configurable methodology + tenant data + replaceable demo seed data.

Never hard-code demo behavior.

## Working Rule for Every PR

Every PR must answer:
1. Which North Star outcome does this advance?
2. Which wave requirement does it satisfy?
3. What was made configurable?
4. What remains intentionally out of scope?
5. How was tenant isolation tested?
6. How was hard-coded demo logic avoided?
7. What acceptance tests pass?
8. What new risks or open questions were discovered?


## Canonical Founding-Team Correction
Read `13_RIGHT_TO_WIN_AND_FOUNDING_TEAM.md` before any work involving positioning, methodology authorship, expert strategy, field-force design, hiring, or founder credibility.


## Implementation Bridge
Before coding Wave 0–1, read `14_BUILD_EXECUTION_PACK_INDEX.md` and its referenced execution artifacts.
