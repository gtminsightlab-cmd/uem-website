# Wave 0 — Foundation

## Goal
Create the real production architecture used by both the Conviction Prototype and later enterprise deployments.

## Required
- application shell
- auth
- organizations / tenants
- role framework
- manufacturer / product / indication / geography / launch hierarchy
- RLS / tenant isolation
- methodology/configuration framework
- readiness-question schema
- archetype schema
- Rules Manager schema
- Evidence / Source registry
- audit events
- seed/fixture system
- demo tenant seed
- error / observability foundation

## Must Be Visible
Wave 0 should not be weeks of invisible backend work. Once the shell, tenancy, and seed system exist, the seeded manufacturer must be visible in the UI through the production data path.

## Acceptance
- demo tenant can be deleted and recreated from seed
- second tenant can be created without code changes
- cross-tenant isolation tests pass
- no methodology assumptions exist in React components
- rules/methodology are versioned records
- all important changes create audit events
