# LaunchOS — Wave 0–1 PR Sequence

| PR | Title | Wave | Outcome |
|---|---|---|---|
| PR-001 | Repo conventions + LaunchOS app shell | Wave 0 | App shell, docs linkage, CI basics. |
| PR-002 | Organization / tenant / launch schema | Wave 0 | Core hierarchy and migrations. |
| PR-003 | Auth + memberships + role model | Wave 0 | Authentication and RBAC. |
| PR-004 | RLS + tenant isolation tests | Wave 0 | Database/API cross-tenant protection. |
| PR-005 | Production UI shell + context switcher | Wave 0 | Visible real navigation and launch context. |
| PR-006 | Methodology/configuration schema | Wave 0 | Versions, questions, archetypes, evidence requirements. |
| PR-007 | Seed framework + Asterion demo | Wave 0 | Disposable demo data through production path. |
| PR-008 | Evidence registry + audit events | Wave 0 | Evidence grades and immutable audit model. |
| PR-009 | Rules schema + evaluator | Wave 0 | Structured rule engine. |
| PR-010 | Readiness assessment UI | Wave 1 | Render/persist configurable questions. |
| PR-011 | Readiness scoring + explainability | Wave 1 | Scores, hard gates, confidence, Why. |
| PR-012 | Command Center Lite | Wave 1 | Live executive command view. |
| PR-013 | Launch Archetype v1 | Wave 1 | Config-driven archetype recommendation. |
| PR-014 | Rules Manager UI + dry run | Wave 1 | Edit/version/simulate rules. |
| PR-015 | Decisions / Risks / Assumptions | Wave 1 | Decision and risk system. |
| PR-016 | Roadmap + dependency engine | Wave 1 | Milestones, simulation, downstream impact. |
| PR-017 | Gap Wizard | Wave 1 | Known/missing/confidence/next-action behavior. |
| PR-018 | Expert engagement | Wave 1 | Scoped expert workspace and provenance. |
| PR-019 | Build / Buy / Rent v1 | Wave 1 | Configurable scenario framework. |
| PR-020 | Executive Brief agent | Wave 1 | Live top-attention synthesis with evidence. |
| PR-021 | Ask LaunchOS | Wave 1 | Global context-aware AI interface. |
| PR-022 | Executive report generator | Wave 1 | Live board-grade report. |
| PR-023 | Help / Academy / glossary | Wave 1 | Configurable contextual industry help. |
| PR-024 | Conviction journey E2E | Wave 1 | Automated 15-minute demo workflow. |
| PR-025 | Fresh tenant independence E2E | Wave 1 | Delete demo and prove new tenant works. |
| PR-026 | Wave 1 security/performance hardening | Wave 1 | Errors, jobs, exports, access review. |
| PR-027 | Release candidate + operator feedback | Wave 1 | Feedback capture and RC. |

## Dependency rules
- PR-004 is a blocker for tenant-scoped feature work.
- PR-006 and PR-007 precede methodology-driven UI.
- PR-011 precedes meaningful Command Center readiness.
- PR-015 precedes Executive Brief decision linking.
- PR-017 precedes expert escalation integration.
- PR-024 and PR-025 are release blockers.

## Visibility milestones
- PR-005: founders can log in and see real shell.
- PR-007: Asterion exists entirely as seed data.
- PR-012: live Command Center visible.
- PR-018: expert loop visible.
- PR-022: board-grade output visible.
- PR-025: proof demo is not hard-coded.
