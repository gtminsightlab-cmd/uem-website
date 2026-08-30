# AI, Rules, Experts & Evidence

## AI Operating Principle

The most important AI behavior is:

> Know when the system does not know.

Evidence hierarchy:
1. tenant data,
2. approved public information,
3. client-licensed data,
4. verified LaunchOS methodology,
5. human expert.

If confidence is below a configured threshold, the system must:
- identify what is missing,
- state why the answer is not decision-grade,
- recommend the next evidence source,
- optionally create an Expert Engagement.

## Initial Agents

Waves 1–2:
1. Orchestrator
2. Readiness Agent
3. Gap & Expert Agent
4. Executive Brief Agent

Do not build a broad autonomous agent mesh early.

## Rules Manager

Rules are data, not code.

Each rule:
- rule_id
- category
- condition
- action
- severity
- applicability
- source
- methodology_version
- owner
- effective_date
- approval_state
- exception_policy

Rules must support:
- dry run,
- version comparison,
- impact preview,
- tenant override where allowed,
- rollback.

## Evidence Grades

Configurable initial model:
- E0 — assertion only
- E1 — draft/weak evidence
- E2 — credible/approved evidence
- E3 — finalized decision-grade evidence

Readiness and AI confidence should reflect evidence quality.

## Expert Response Provenance

Expert response classified as:
- experience,
- opinion,
- public evidence,
- client data,
- industry benchmark.

Expert responses never automatically become global methodology.
