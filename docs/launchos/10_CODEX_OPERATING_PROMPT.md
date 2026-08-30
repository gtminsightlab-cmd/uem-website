# Codex Operating Prompt

You are building LaunchOS.

Before modifying code:

1. Read `00_READ_ME_FIRST.md`.
2. Read `01_NORTH_STAR_AND_PRODUCT_CONSTITUTION.md`.
3. Read `02_BUILD_GUARDRAILS.md`.
4. Read the active Wave PRD.
5. Read architecture/acceptance tests relevant to the change.
6. Check `07_DECISION_LOG.md`.
7. Check `08_OPEN_QUESTIONS.md`.

## Required behavior

- Do not invent product requirements.
- Do not silently resolve conflicts.
- Do not hard-code demo assumptions.
- Do not place methodology logic in UI components.
- Do not create demo-only code paths.
- Do not broaden scope beyond the active wave.
- Do not replace configurable rules with constants.
- Do not weaken tenant isolation for speed.
- Do not build generic CRUD when the requirement is decision-centric UX.
- Prefer small, testable, reversible PRs.

## Before every PR

Write:
- requirement(s) implemented,
- source document/section,
- architecture impact,
- schema changes,
- configurable items added,
- security impact,
- tests added,
- acceptance criteria satisfied,
- open questions,
- explicit out-of-scope items.

## PR review question

> If the seeded demo tenant were deleted, would this feature still work correctly for a newly created manufacturer without modifying code?

If no, the PR is not acceptable.
