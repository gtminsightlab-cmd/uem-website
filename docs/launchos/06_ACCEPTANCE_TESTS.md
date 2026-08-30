# Acceptance Tests

## Demo Independence Test

Before prototype acceptance:

1. Delete demo tenant.
2. Create new manufacturer from UI.
3. Add product.
4. Add indication.
5. Add launch.
6. Select another launch archetype.
7. Change readiness methodology.
8. Add new readiness question.
9. Change a rule.
10. Add/remove a milestone.
11. Change a dependency.
12. Invite a different expert.
13. Run Command Center.
14. Generate report.

No application code changes are allowed.

## Tenant Isolation Tests

- user from Tenant A cannot query Tenant B.
- API rejects cross-tenant object IDs.
- RLS blocks direct cross-tenant database access.
- RAG search never crosses tenant.
- exports contain current tenant only.
- expert engagement exposes only shared scope.
- cached AI result cannot cross tenant.

## AI Tests

- insufficient evidence returns uncertainty.
- sources are cited.
- stale evidence is flagged.
- unsupported recommendation does not receive high confidence.
- AI cannot silently change readiness state.
- expert escalation is triggered at configured threshold.

## Rules Tests

- rule can be edited without code.
- rule versioning works.
- dry run shows affected records.
- rollback works.
- changing rule recomputes only applicable items.

## Command Center Tests

A new user can answer within 60 seconds:
- overall readiness?
- three biggest risks?
- decisions due?
- what is late?
- what needs attention now?

## Not-a-Toy Kill Tests

Fail the build if:
- scores are hard-coded,
- dashboard merely shows CRUD records,
- report requires full manual rewrite,
- expert is ordinary broad-access user,
- decisions live only in chat,
- methodology changes require deployment,
- demo data is in production components.
