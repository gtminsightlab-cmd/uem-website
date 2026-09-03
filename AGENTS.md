# AGENTS.md — Upper Echelon Management

## Repository purpose

This repository contains the public Upper Echelon Management website. UEM is the operator-led commercialization firm. RxLaunchOS is the AI-native commercialization operating system being developed as part of UEM's work.

Do not merge the RxLaunchOS product application into this marketing website without an explicit architecture decision. Public website content may explain RxLaunchOS, its product direction, and its current build stage.

## RxLaunchOS source of truth

For any RxLaunchOS claim or feature description, read in order:

1. `docs/launchos/AGENTS.md`
2. `docs/launchos/00_READ_ME_FIRST.md`
3. `docs/launchos/01_NORTH_STAR_AND_PRODUCT_CONSTITUTION.md`
4. `docs/launchos/02_BUILD_GUARDRAILS.md`
5. `docs/launchos/13_RIGHT_TO_WIN_AND_FOUNDING_TEAM.md`
6. the active Wave and execution files referenced by those documents
7. `docs/launchos/07_DECISION_LOG.md`
8. `docs/launchos/08_OPEN_QUESTIONS.md`

The RxLaunchOS source package is preserved under `docs/launchos/`. Do not rewrite those extracted source files to fit website copy.

## Public-content rules

- Use `docs/UEM_LAUNCHOS_CONTENT_STANDARD.md` for approved public facts and exclusions.
- UEM is broader than GLP-1, obesity, or any one therapeutic area.
- Never invent client outcomes, revenue lifts, retention improvements, launch rankings, product histories, pricing, titles, timelines, or response-time promises.
- Do not publish anonymized case studies until the owner confirms the underlying engagement and permitted claims.
- Do not portray synthetic group imagery as the UEM team.
- Do not present draft videos, reports, tools, or RxLaunchOS features as available when they are not accessible through a working production path.
- Never render a fake form-submission success state.
- RxLaunchOS must be described as a configurable, evidence-aware decision system—not a project manager, generic dashboard, CRM, or ChatGPT wrapper.
- Keep UEM human judgment, RxLaunchOS product logic, configurable methodology, client data, and demo data conceptually distinct.
- Describe candidate readiness questions, weights, gates, benchmarks, and archetypes as under validation; never imply predictive validation.
- Preserve vendor neutrality and be honest about evidence limits and expert gaps.

## Working-tree safety

The repository may contain uncommitted owner work and untracked media. Preserve unrelated changes. Do not delete or relocate source assets without explicit approval.

## Verification

For website changes, run the repository's lint and production build. Inspect all changed routes for missing assets, false links, and content that contradicts the RxLaunchOS source hierarchy.
