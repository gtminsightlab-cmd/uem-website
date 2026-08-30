# LaunchOS Pull Request Template

## PR Title
`[Wave X][Module] Short outcome`

## North Star Link
Which North Star question does this improve?

## Requirement
Source document and section:

## User Outcome
What can the user do after this PR that they could not do before?

## Architecture
- schema changes:
- services:
- APIs:
- UI:
- jobs/automations:
- AI:
- permissions:

## Configurability
What is configurable instead of hard-coded?

## Demo Independence
Confirm:
- [ ] No demo values are embedded in components.
- [ ] Demo data is seed/fixture data only.
- [ ] New tenant can use this feature without code changes.

## Multi-Tenant Safety
- [ ] tenant_id enforced
- [ ] RLS updated/tested
- [ ] API cross-tenant test
- [ ] RAG/search isolation if applicable
- [ ] expert scope test if applicable

## AI Safety / Evidence
- [ ] sources attached
- [ ] confidence handled
- [ ] insufficient evidence state exists
- [ ] no silent state mutation

## Tests
List automated/manual tests.

## Acceptance Criteria
List relevant criteria from `06_ACCEPTANCE_TESTS.md`.

## Screens / Demo
Describe the user journey.

## Out of Scope
Explicitly state what is not being solved.

## New Open Questions
Add any unresolved item to `08_OPEN_QUESTIONS.md`.

## Decision Changes
If this PR changes architecture/product decisions, update `07_DECISION_LOG.md`.
