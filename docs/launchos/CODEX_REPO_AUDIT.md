# LaunchOS Repository Implementation Audit

**Audit date:** 2026-08-29  
**Workspace:** `C:\Users\GTMin\Projects\BunyPharmaOS`  
**Scope:** Wave 0 and PR-001 through PR-027  
**Audit mode:** Read-only implementation inspection; this document is the only repository file added.

## Executive verdict

This is a **source handoff directory, not an implementation repository**. Before this audit it contained three files: the v2.3 handoff ZIP, the v2.4 build-ready handoff ZIP, and a standalone copy of the v2.3 CSO-amended master blueprint. It has no `.git` directory, application source, package manifest, database migrations, auth, UI, tests, CI, or deployment configuration.

Accordingly:

- **Wave 0 implemented outcomes:** 0 of 9 PRs demonstrably complete.
- **Wave 1 implemented outcomes:** 0 of 18 PRs demonstrably complete.
- **PR-001 through PR-027:** none is implemented or testable.
- **Planning/input readiness:** strong. The v2.4 pack contains a coherent technical PRD, UI spec, PR sequence, 192-question methodology seed, and valid Asterion seed data.
- **Build readiness:** blocked until this directory is confirmed as the canonical repository, initialized as a real Git project, and the v2.4 source files are made directly available at their prescribed paths.

The v2.4 handoff pack is the only pack that contains the eight Wave 0-1 execution artifacts. Its `99_MASTER_BLUEPRINT_v2.3.md` is byte-for-byte identical to the standalone `LaunchOS_Master_Blueprint_v2.3_CSO_Experience_Amendment.md` (SHA-256 `752F9BCB0A2D1D51C9010AD62B0C270828306F369D721F91342C616B42E1FF8A`).

## Audit basis and source-of-truth handling

The repository root has no `AGENTS.md`. The applicable LaunchOS `AGENTS.md` was read first from `LaunchOS_Codex_Handoff_Pack_v2.4_BUILD_READY.zip`, followed by the requested files in the requested order. The controlling Wave 0/1 architecture, AI, UX, demo policy, wave files, and readiness-bank guide were also read where the hierarchy required them.

No source conflict was silently resolved. Conflicts and ambiguities are listed in section 11.

## 1. What already exists and can be reused

### Authoritative product/build inputs

- The v2.4 build-ready pack contains 31 documents/data files, including all requested Wave 0/1 execution artifacts.
- `execution/WAVE_00_01_TECHNICAL_PRD.md` provides the proposed stack, four-layer separation, core domain model, tenant controls, module behaviors, and Wave 1 completion criteria.
- `prs/WAVE_00_01_PR_SEQUENCE.md` provides the PR-001 through PR-027 order and dependency gates.
- `ui/CONVICTION_PROTOTYPE_UI_SPEC.md` provides the Conviction Prototype shell, decision-centric page behavior, visual semantics, and 60-second UX test.
- `methodology/READINESS_QUESTION_BANK_v0.csv` is valid CSV with 192 unique question IDs, 16 workstreams of 12 questions each, 25 candidate hard gates, and 56 expert-validation candidates. Every row is marked `candidate_v0`; all answer types are currently `single_select`.
- `demo/ASTERION_DEMO_SEED_v0.json` is valid JSON and is clearly labeled fictional. It contains 5 evidence items, 3 rules, 8 milestones, 5 dependencies, 3 risks, 2 decisions, 2 experts, and one draft engagement.
- The Asterion scenario and seed are reusable as **seed inputs only**. Their fixed company, product, dates, thresholds, and example records are permitted only if a generic seed/import path writes ordinary production records.
- The master blueprint is useful for depth and historical rationale, but remains lower in precedence than the controlling files.

### Existing implementation

None. There is no runtime asset to reuse: no component, service, migration, policy, test, workflow, integration, or deployment configuration exists.

## 2. What conflicts with LaunchOS architecture

There is no existing production architecture to conflict with LaunchOS. The conflicts are currently in repository packaging or in the proposed specification:

1. **Source files are archive-only.** The prescribed paths such as `AGENTS.md`, `00_READ_ME_FIRST.md`, `execution/...`, and `prs/...` do not exist in the working tree. Future agents, CI, and contributors cannot automatically follow the hierarchy.
2. **The directory is not a Git repository.** PR sequencing, reversibility, CI, change review, and decision traceability cannot operate.
3. **Manufacturer hierarchy mismatch.** The architecture requires Manufacturer → Product → Indication → Geography → Launch. The technical PRD proposes `organizations` and `tenants`, but no explicit manufacturer or geography table; `launches.geography` is a scalar. The intended identity and cardinality are unresolved.
4. **Tenant-owned child gap.** The proposed `expert_responses` row has no `tenant_id`, conflicting with the permanent rule that every tenant-owned record carries `tenant_id`.
5. **Tenant integrity cannot rely on ID arrays.** Proposed `decisions`, `assumptions`, and `rule_evaluations` include arrays such as `evidence_ids`, `assumption_ids`, and `expert_response_ids`. Implemented literally, these cannot provide ordinary relational foreign keys or composite tenant consistency and would create an avoidable leakage risk.
6. **Global versus tenant configuration is unresolved.** Roles, methodology, evidence requirements, rules, archetypes, glossary content, prompt versions, and report templates need explicit platform/global/tenant scope and override rules. Open Question 8 already acknowledges this for rules.
7. **Navigation conflict.** `05_UX_COMMAND_CENTER.md` defines a 17-item primary navigation, while the Wave 0-1 technical PRD and Conviction Prototype UI spec define a focused 10-item Wave 1 navigation. The source hierarchy favors the active-wave requirement, but PR-001/PR-005 must not silently choose how the two models relate.
8. **PR boundary overlap.** PR-001 calls for a LaunchOS app shell, while PR-005 calls for the production UI shell and context switcher. The minimum shell versus production shell boundary is not specified.
9. **Seed/config classification needs an explicit loader contract.** The Asterion JSON combines tenant records with candidate rules. This is not itself a guardrail violation, but the loader must classify each object into methodology/configuration versus tenant data and must not make a demo rule globally active by accident.

## 3. What must be refactored

No production code exists, so there is nothing to refactor in code. The following repository/specification normalization is required before or during the relevant foundation PRs:

- Materialize the v2.4 source files at canonical working-tree paths and label v2.3 historical; do not maintain two active source hierarchies.
- Add a root source manifest identifying the v2.4 build-ready pack as controlling and the master blueprint as lower-precedence depth.
- Resolve organization/manufacturer/tenant/geography semantics before PR-002 migrations.
- Replace cross-record ID arrays with tenant-aware join tables or an equally enforceable relational design.
- Add `tenant_id` to every tenant-owned child, including expert responses, or document and test a stronger approved alternative.
- Define platform-global, platform-versioned, tenant-overridable, and tenant-private configuration scopes.
- Keep the Asterion seed loader generic and idempotent; seed values must never enter UI components, services, or route branches.
- Separate the minimal structural shell in PR-001 from tenant-aware context/navigation behavior in PR-005.

## 4. What is missing

Everything required for an executable product is missing:

- Git repository metadata and a remote/PR destination.
- README/setup/contribution conventions and directly accessible LaunchOS source docs.
- Node/package-manager baseline, dependency lockfile, Next.js/TypeScript application, lint/type/test/build scripts.
- CI and deployment configuration.
- Environment-variable contract and secret-handling documentation.
- Supabase/PostgreSQL project configuration, migrations, generated types, local development workflow, and seed runner.
- Auth, memberships, RBAC, tenant context, RLS policies, and isolation tests.
- Storage policies and tenant-scoped object paths.
- Methodology, evidence, rules, audit, and launch-domain persistence.
- UI shell, routes, navigation, context switcher, loading/error/empty states, and accessibility tests.
- Readiness, archetype, rules, dependencies, decisions, risks, expert, report, and Build/Buy/Rent services.
- AI gateway, structured output contracts, prompt/version registry, evidence/citation handling, evaluation suite, retrieval, cache isolation, and human-review controls.
- Background jobs, exports, telemetry, structured logs, error tracking, and performance/security hardening.
- All unit, integration, RLS, API, browser, demo-independence, fresh-tenant, and 15-minute journey tests.

## 5. Current tenant/auth/security state

**State: absent.** There are no users, sessions, organizations, tenants, memberships, roles, permission checks, RLS policies, storage policies, secrets, security headers, or tests. No present runtime can leak tenant data because no runtime or data store exists, but no security requirement has been satisfied.

The technical PRD describes the intended controls but does not implement them. PR-004 remains a hard blocker for all tenant-scoped feature work. PR-003 also requires an approved role/permission matrix; the current documents list role names but do not define exact permissions, external-vendor rules, platform support access, impersonation/break-glass behavior, session claims, or membership switching semantics.

## 6. Current database/schema state

**State: absent.** There is no database project, schema, migration, ORM/query layer, generated type, seed script, or test database.

The technical PRD's core model is a useful conceptual starting point, not an implementation-ready schema. Before PR-002/PR-004 it needs:

- explicit organization/manufacturer/tenant/geography cardinalities;
- IDs, types, uniqueness, required/nullability, lifecycle status, and timestamp rules;
- composite tenant-aware foreign keys for product → indication → launch and all launch-owned children;
- normalized relation tables for evidence, assumptions, expert responses, options, and sources;
- global/configuration scope and version constraints;
- RLS policy design for all CRUD operations and service roles;
- immutable audit enforcement rather than a convention only;
- data-classification, retention/deletion, storage, and export semantics;
- transaction and idempotency rules for seeds, rule evaluation, scoring, and jobs.

## 7. Current UI shell/navigation state

**State: absent.** There is no Next.js app, route, component, style, context switcher, state layer, responsive behavior, accessibility implementation, or UI test.

The focused Conviction Prototype navigation and detailed Command Center behaviors are reusable specifications. Before shell implementation, the 10-item Wave 1 navigation must be reconciled with the 17-item broader UX navigation, and PR-001's structural shell must be distinguished from PR-005's production, tenant-aware shell.

## 8. Current AI/integration state

**State: absent.** There is no AI provider, provider-agnostic gateway, model configuration, prompt registry, structured schema, source/citation pipeline, confidence calculation, Gap Wizard, agent, expert escalation, RAG index, cache, evaluation, or external integration.

The AI rules are directionally strong: evidence-first, configured uncertainty thresholds, scoped retrieval, human approval, and no silent state mutation. Provider, data-retention terms, model selection, prompt versioning mechanics, tenant cost controls, and the boundary between deterministic services and AI synthesis remain unselected. No licensed-data, CRM, Veeva, Salesforce, claims, or pharma-vendor integration exists, which is appropriate for the current wave.

## 9. Hard-coded/demo-specific logic versus Build Guardrails

There is no application logic, so no current code violates the hard-coding rules.

The Asterion name, product, dates, HCP counts, staffing range, evidence, rule thresholds, recommendation text, milestones, risks, decisions, and experts are fixed **inside demo seed data**, which is allowed. They become violations if any of the following occurs:

- a component or route checks `asterion-biopharma-demo`, `ABP-101`, or any demo identity;
- a service embeds the seed's scores, thresholds, dates, recommendations, expert answers, or outcomes;
- seeded rules bypass versioned rule/config records;
- demo reports or AI answers are rendered as static production output;
- deleting the seed tenant removes methodology or breaks a feature.

The seed currently provides no readiness answers or expected calculated scores. That is acceptable at audit stage, but PR-007/PR-010 will need ordinary answer records sufficient to demonstrate live scoring without introducing expected scores into application code.

## 10. Existing code that risks cross-tenant leakage

There is no existing code to identify. The proposed design has the following leakage risks if implemented without correction:

- child records without direct tenant ownership, especially `expert_responses`;
- arrays/JSON containing foreign IDs without tenant-aware foreign-key enforcement;
- parent/child IDs that can refer to different tenants unless composite constraints and RLS both enforce scope;
- global methodology or rules accidentally exposing tenant overrides or private inputs;
- expert access inferred from an assigned user instead of an active, time-bound engagement and approved packet;
- background jobs, object paths, exports, analytics, caches, AI runs, and vector searches accepting an unverified tenant ID;
- URL/API object lookup performed before membership and tenant checks.

These are design risks, not findings in running code. PR-004 must include negative database, API, expert, storage, export, cache, job, and retrieval tests before tenant-scoped features proceed.

## 11. Architectural decisions requiring clarification

### Required before PR-001

1. **Canonical repository:** Is `C:\Users\GTMin\Projects\BunyPharmaOS` the intended long-lived Git repository, and what remote/hosting service will own PRs and CI?
2. **Canonical source layout:** Should the v2.4 pack be extracted at repository root (matching the documented paths), with v2.3 retained only as historical input? This audit recommends yes.
3. **Toolchain baseline:** Approve the package manager, Node baseline, framework version policy, and CI host. The documents recommend Next.js/React/TypeScript/Vercel but do not lock versions or package tooling.
4. **PR-001/PR-005 boundary:** PR-001 should create only a product-neutral structural shell and CI; tenant-aware navigation/context switching should remain PR-005. Confirm this split.

### Required before PR-002 through PR-009

5. Is a manufacturer represented by `organization`, `tenant`, both, or a separate domain record?
6. Is Geography a first-class entity with multiple launches, or a typed value on `launches`?
7. Can one organization own multiple tenants, and can a user belong to multiple tenants with different roles?
8. Which auth provider and database-access pattern are approved, and how is tenant context derived server-side rather than trusted from input?
9. Is RBAC normalized or JSON-based, and what is the exact permission matrix for platform, manufacturer, vendor, auditor, and expert actors?
10. Which methodology/config objects are global, tenant-overridable, or tenant-private? What is the precedence and approval model?
11. Should all tenant-linked relations use composite `(tenant_id, id)` constraints and normalized join tables? This audit recommends yes.
12. How are audit events made immutable, redacted, retained, and accessed by platform/security operators?
13. Are the three Asterion rules tenant-specific demo overrides or candidates for global methodology? They must be scoped explicitly.
14. Which navigation set controls the Conviction Prototype, and which broader destinations are hidden, deferred, or represented as disabled future modules?

### Already acknowledged as later-wave open questions

Readiness scoring/hard-gate behavior, archetype taxonomy, expert-escalation threshold, report configurability, Build/Buy/Rent scope, external vendor permissions, source requirements for board-grade output, and methodology validation remain open. They do not block a narrowly scoped PR-001 but do block their corresponding later PRs.

The workspace name `BunyPharmaOS` also differs from the working product name LaunchOS while trademark/public branding remains open. Do not rename the product or repository without an approved decision.

## 12. Proposed mapping of the existing repository to PR-001 through PR-027

| PR | Current state | Reusable input already present | Remaining implementation outcome |
|---|---|---|---|
| PR-001 | Not started | `AGENTS.md`, build hierarchy, PR sequence, PR template (archive-only) | Git repo, canonical docs, conventions, minimal app shell, CI basics |
| PR-002 | Not started | Conceptual core data model | Approved hierarchy, migrations, constraints, generated types |
| PR-003 | Not started | Role names and membership concept | Auth, sessions, memberships, RBAC and tests |
| PR-004 | Not started | Isolation requirements and acceptance tests | RLS, tenant-aware services, negative isolation suite |
| PR-005 | Not started | UI shell/context specification | Production shell, navigation, tenant/product/launch context switcher |
| PR-006 | Not started | Valid 192-row question bank and methodology/version concepts | Configuration schema, version lifecycle, import path |
| PR-007 | Not started | Valid Asterion scenario/JSON seed | Generic idempotent seed framework and disposable demo tenant |
| PR-008 | Not started | Evidence grades, sample evidence, audit concept | Evidence/source registry, immutable audit persistence/policies |
| PR-009 | Not started | Rule schema concept and 3 seeded candidate rules | Safe structured evaluator, versioning and tests |
| PR-010 | Not started | Question bank and Readiness UI spec | Config-driven assessment rendering and persisted answers |
| PR-011 | Not started | Candidate formula/factors and explainability requirements | Config-driven scoring, gates, confidence, `Why?`, tests |
| PR-012 | Not started | Command Center card/attention specifications | Live tenant-derived Command Center Lite |
| PR-013 | Not started | Archetype dimensions and one demo candidate label | Config-driven recommendation, confidence, rationale |
| PR-014 | Not started | Rules Manager UX and operator list | Draft/edit/diff/dry-run/approve/rollback UI |
| PR-015 | Not started | Sample risks/decisions and domain fields | Tenant-safe decisions, risks, assumptions, evidence/rationale links |
| PR-016 | Not started | 8 sample milestones and 5 dependencies | Templates, instances, dependency simulation and impact acceptance |
| PR-017 | Not started | Gap Wizard structured output requirements | Evidence-aware insufficient-information workflow |
| PR-018 | Not started | 2 fictional experts and one draft engagement | Scoped packet, time-bound access, provenance, validation, audits |
| PR-019 | Not started | Scenario options/dimensions and demo field decision | Configurable Build/Buy/Rent framework with assumptions/confidence |
| PR-020 | Not started | Executive attention/brief output contract | Evidence-backed live synthesis linked to decisions/risks |
| PR-021 | Not started | Ask LaunchOS UX and AI rules | Global context-aware interface with citations and safe actions |
| PR-022 | Not started | Report section specification | Live configurable report assembly/render/export |
| PR-023 | Not started | Initial glossary term list and Help UX | Configurable glossary/contextual help |
| PR-024 | Not started | Asterion journey and 15-minute outcome | Automated production-path Conviction journey E2E |
| PR-025 | Not started | Demo-independence acceptance sequence | Delete/reseed/fresh-tenant E2E proof |
| PR-026 | Not started | Security/performance acceptance themes | Error, job, export, access, observability and performance hardening |
| PR-027 | Not started | Operator-feedback intent and RC definition | Feedback capture, acceptance evidence, release candidate |

No later PR should be credited as partially implemented merely because its desired sample data or specification exists. The inputs reduce design effort; they do not satisfy runtime acceptance.

## Recommended first PR

### PR-001 — Repo conventions + LaunchOS app shell

**Recommendation:** Do PR-001 only after audit approval and the four PR-001 clarifications in section 11 are confirmed. Do not start PR-002 work in the same change.

### Exact files likely to change

Canonical source extraction, copied byte-for-byte from the v2.4 pack with its wrapper directory removed:

- `AGENTS.md`
- `00_READ_ME_FIRST.md` through `14_BUILD_EXECUTION_PACK_INDEX.md`
- `99_MASTER_BLUEPRINT_v2.3.md`
- `waves/WAVE_00_FOUNDATION.md` through `waves/WAVE_06_ENTERPRISE_HARDENING.md`
- `execution/WAVE_00_01_TECHNICAL_PRD.md`
- `ui/CONVICTION_PROTOTYPE_UI_SPEC.md`
- `prs/WAVE_00_01_PR_SEQUENCE.md`
- `methodology/READINESS_QUESTION_BANK_v0.md`
- `methodology/READINESS_QUESTION_BANK_v0.csv`
- `demo/ASTERION_DEMO_SCENARIO.md`
- `demo/ASTERION_DEMO_SEED_v0.json`

Repository/app files likely to be added:

- `.gitignore`
- `.editorconfig`
- `.nvmrc` or the approved equivalent runtime pin
- `README.md`
- `CONTRIBUTING.md`
- `package.json`
- `package-lock.json` if npm is approved (otherwise exactly one approved lockfile)
- `tsconfig.json`
- `next-env.d.ts`
- `next.config.ts`
- `eslint.config.mjs`
- `vitest.config.ts`
- `vitest.setup.ts`
- `.github/workflows/ci.yml` if GitHub is the approved host
- `.github/pull_request_template.md`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/shell/app-shell.tsx`
- `src/components/shell/app-shell.test.tsx`
- `docs/launchos/SOURCE_MANIFEST.md`
- `docs/launchos/CODEX_REPO_AUDIT.md` (retain this approved audit; update only for factual linkage if needed)

No database, auth, Asterion rendering, business rule, readiness calculation, AI output, or demo route belongs in PR-001.

### Acceptance criteria

1. The directory is a clean, canonical Git repository with an approved remote/PR workflow.
2. A root `AGENTS.md` and all controlling v2.4 source files exist at documented paths; v2.3 is clearly historical and cannot be mistaken for active instructions.
3. A clean checkout installs reproducibly from one lockfile.
4. Lint, type-check, unit test, and production build pass locally and in CI.
5. The minimal shell renders a product-neutral LaunchOS frame and responsive content area without tenant/demo data or business behavior.
6. The shell is structurally ready for PR-005 but does not pre-decide unresolved navigation or context-switching behavior.
7. The PR template captures North Star contribution, requirement source, configurability, tenant-security impact, tests, acceptance, out-of-scope, open questions, and decision-log changes.
8. No secret is committed, no Asterion value appears in application source, and no database/auth/AI dependency is implied to work.

### Risks

- Accidentally treating the v2.3 pack or standalone duplicate as a second active source of truth.
- Letting PR-001 absorb PR-002/PR-005 behavior and creating an oversized, irreversible foundation PR.
- Baking the wrong navigation into components before the navigation conflict is approved.
- Selecting framework/package/CI versions without an explicit baseline and reproducible lock.
- Scaffolding into the wrong directory or a temporary handoff folder if this is not the canonical remote-backed repository.
- Product/repository naming drift while LaunchOS trademark/public branding remains open.

### Dependencies

- Explicit approval of this audit.
- Confirmation that this workspace is the canonical repository and identification of its remote/CI host.
- Approval of the canonical source extraction/layout and historical-archive treatment.
- Approval of package manager, runtime/framework baseline, and PR-001 versus PR-005 boundary.

### Is PR-001 safe to begin?

**Not yet.** It is technically low risk and should be the first implementation PR, but the current directory is not a Git repository and the authoritative instructions are archive-only. Once the four PR-001 clarifications are confirmed and the audit is explicitly approved, PR-001 is safe to begin with the scope above.
