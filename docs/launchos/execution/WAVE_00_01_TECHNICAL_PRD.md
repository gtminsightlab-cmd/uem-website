# LaunchOS — Wave 0–1 Technical Product Requirements Document
**Version:** 0.1 Build Candidate  
**Status:** Implementation specification for Conviction Prototype  
**Controlling documents:** AGENTS.md, North Star, Build Guardrails, Master Blueprint v2.3

---

# 1. Objective

Build a working LaunchOS vertical slice on real production architecture using configurable methodology and a disposable seeded demo tenant.

The purpose is to let experienced pharmaceutical commercial leaders **see, use, challenge, and react to LaunchOS before enterprise integrations or major capital are committed.**

The Conviction Prototype must be technically reusable. Nothing may be implemented solely to make the sample company appear intelligent.

---

# 2. User Outcome

Within 15 minutes a first-time-launch manufacturer executive should understand:

- where the launch stands,
- why LaunchOS believes that,
- which risks matter,
- which information is missing,
- what decisions are required,
- what moves if a milestone slips,
- where expert judgment is needed,
- what is likely Build vs Buy vs Rent,
- what should happen in the next 90/180 days.

An experienced pharma operator should be able to challenge the methodology through:
- rule editing,
- readiness question feedback,
- expert response,
- decision changes,
without asking an engineer to change code.

---

# 3. Scope

## In Scope — Wave 0
- App shell
- Auth
- Multi-tenant organizations
- Roles
- Manufacturer/Product/Indication/Geography/Launch hierarchy
- Methodology/config service
- Seed system
- RLS and tenancy tests
- Audit event framework
- Evidence/source registry
- Rule/version schema
- readiness-question/version schema
- launch archetype schema

## In Scope — Wave 1
- Command Center Lite
- Readiness Engine v1
- Launch Archetype v1
- Rules Manager v1
- Gap Wizard v1
- Expert Engagement v1
- Roadmap / Dependencies v1
- Decisions / Risks v1
- Build / Buy / Rent v1
- Executive report
- contextual terminology/help
- Ask LaunchOS v1

## Out of Scope
- paid licensed pharma datasets
- Veeva/Salesforce production integrations
- promotional rep AI
- autonomous next-best-action
- full field-force optimizer
- claims warehouse
- multi-region data hosting
- SOC 2 audit itself
- PHI ingestion
- MLR/PV system replacement

---

# 4. Architecture

## 4.1 Recommended Stack
Frontend: Next.js / React / TypeScript  
Platform: Vercel  
Data: Supabase / PostgreSQL / Row Level Security  
Storage: tenant-scoped object paths  
AI: provider-agnostic gateway, structured outputs, tenant-scoped retrieval, citations  
Workflow: idempotent jobs/events with retries  
Observability: structured logs, error tracking, audit events

## 4.2 Four-Layer Separation

### Product Logic
Stable code:
- readiness evaluation
- rule evaluation
- dependency propagation
- expert request creation
- evidence/confidence calculation
- report assembly

### Methodology Configuration
Editable data:
- questions
- weights
- hard gates
- archetypes
- rules
- milestone templates
- dependencies
- evidence requirements
- report templates
- AI prompt versions

### Tenant Data
- manufacturer
- product
- indication
- launch
- readiness answers
- evidence
- milestones
- risks
- decisions
- expert engagements

### Demo Seed
- fictional manufacturer
- sample product
- sample launch
- sample answers/evidence
- fictional experts
- sample decisions/risks

No application behavior may depend on demo identity.

---

# 5. Core Data Model

## organizations
id, organization_type, name, slug, status, metadata, created_at

## tenants
id, organization_id, tenant_type, name, settings_json, status, created_at

## tenant_memberships
id, tenant_id, user_id, role_id, status

## roles
id, code, name, scope_type, permissions_json

## products
id, tenant_id, name, development_code, modality, status, metadata

## indications
id, tenant_id, product_id, name, therapeutic_area, status

## launches
id, tenant_id, product_id, indication_id, geography, launch_date, pdufa_date, launch_archetype_version_id, status

## methodology_versions
id, methodology_name, version, status, effective_date, approved_by, source_notes

## readiness_questions
id, methodology_version_id, question_code, workstream, capability, stage, question_text, answer_type, options_json, weight, criticality, hard_gate, evidence_requirement_id, expert_validation, active

## readiness_answers
id, tenant_id, launch_id, question_id, answer_json, status, confidence, answered_by, answered_at

## evidence_requirements
id, code, description, accepted_types, minimum_grade

## evidence_items
id, tenant_id, launch_id, title, source_type, source_id, evidence_grade, as_of_date, file_or_url, data_classification, notes

## launch_archetype_versions
id, name, version, criteria_json, workstream_multipliers_json, recommended_metrics_json, failure_watchlist_json

## rules
id, rule_code, category, methodology_version_id, version, status, condition_json, action_json, severity, applicability_json, source, approved_by, effective_date

## rule_evaluations
id, tenant_id, launch_id, rule_id, result, severity, explanation, evidence_ids, evaluated_at

## milestones
id, tenant_id, launch_id, milestone_template_id, name, owner_user_id, planned_date, actual_date, status, criticality

## milestone_dependencies
id, tenant_id, launch_id, predecessor_id, successor_id, dependency_type, lag_days

## risks
id, tenant_id, launch_id, title, category, severity, probability, impact, owner_user_id, status, source_type, source_id

## decisions
id, tenant_id, launch_id, title, question, decision, status, owner_user_id, due_date, rationale, assumption_ids, evidence_ids, expert_response_ids, decided_at

## assumptions
id, tenant_id, launch_id, statement, confidence, owner_user_id, evidence_ids, valid_until, status

## expert_profiles
id, expert_org_id, user_id, specialties, therapeutic_areas, experience_summary, conflict_notes, status

## expert_engagements
id, tenant_id, launch_id, title, question, context_json, requested_specialty, assigned_expert_id, access_scope_json, due_at, status

## expert_responses
id, engagement_id, response_text, provenance_type, confidence, supporting_sources, submitted_at, validation_status

## ai_runs
id, tenant_id, launch_id, agent_type, prompt_version, model, input_hash, output_json, source_ids, confidence, human_review_state, created_at

## audit_events
id, tenant_id, actor_id, action, object_type, object_id, before_json, after_json, created_at

---

# 6. Tenant Safety

Required:
- tenant_id on all tenant domain records
- RLS for select/insert/update/delete
- service methods require tenant context
- URL IDs never bypass scope
- background jobs include tenant
- files use tenant-scoped paths
- retrieval filters tenant before similarity
- exports are tenant-bound
- expert packets contain only explicit shares

CI tests:
- Tenant A cannot access Tenant B by URL
- Tenant A cannot access Tenant B by API ID
- vector search cannot cross tenant
- expert cannot access unrelated launch
- reports/exports contain current tenant only

---

# 7. Methodology System

Methodology is versioned product content, not code.

Must support:
- draft
- approved
- superseded
- effective date
- source/rationale
- applicability
- clone
- diff

Wave 1 methodology objects:
- readiness questions
- launch archetypes
- rules
- milestone templates
- evidence requirements
- Build/Buy/Rent templates
- glossary/help

---

# 8. Readiness Engine v1

Inputs:
- methodology version
- launch archetype
- answers
- evidence grade
- hard gates
- criticality
- time to launch
- expert validation

Initial configurable model:
- E0 evidence factor 0.55
- E1 0.70
- E2 0.85
- E3 1.00

Question score:
answer_score × evidence_factor × question_weight × archetype_multiplier

Workstream:
weighted sum / weighted maximum

Hard-gate behavior:
unresolved critical hard gates cap applicable workstream/overall score at configurable thresholds.

Time awareness:
missing capability severity increases as expected completion window approaches/passes.

Required explainability:
- contributors
- missing evidence
- hard gates
- score change
- next actions
- linked risks/decisions

No external “validated benchmark” claim until methodology is reviewed/tested.

---

# 9. Launch Archetype v1

Dimensions:
- specialty vs broad
- HCP concentration
- patient concentration
- diagnostic burden
- route/site of care
- payer complexity
- distribution complexity
- category maturity
- launch organization maturity
- field model expectation

Output:
- archetype
- confidence
- rationale
- workstream multipliers
- key metrics
- failure watchlist
- expert-validation needs

---

# 10. Rules Manager v1

UI:
- list/filter
- current version
- create draft
- structured condition builder
- dry run against selected launch
- show effect
- approve/activate
- compare versions
- rollback

Supported operators:
equals, not_equals, greater_than, less_than, contains, in, missing, days_until, status_is, count, and/or.

No arbitrary code execution.

---

# 11. Gap Wizard v1

Purpose:
Refuse false precision.

Structured output:
- question
- decision_type
- known_inputs
- missing_inputs
- source_ids
- confidence
- can_answer_decision_grade
- preliminary_guidance
- recommended_next_actions
- expert_specialty

Below threshold:
- do not give definitive recommendation
- explain missing inputs
- suggest data or expert
- allow Ask Expert

---

# 12. Expert Engagement v1

Manufacturer:
- create from Gap Wizard/manual
- select specialty
- approve context packet
- select evidence
- due date

Expert:
- sees engagement only
- sees approved packet only
- submits response, provenance, confidence, sources

Validator:
- accept
- request clarification
- mark conflict
- send to decision

All access audited.

---

# 13. Roadmap / Critical Path v1

Required:
- methodology-driven milestone templates
- tenant milestone instances
- dependencies
- owners
- planned/actual
- criticality
- simulation

Move date:
- simulation first
- show affected downstream milestones
- show compression
- propose risk
- allow accept/change/revert

---

# 14. Decisions & Risks v1

Decision:
question, owner, due date, options, assumptions, evidence, expert input, recommendation, human decision, rationale, status.

Risk:
description, category, probability, impact, severity, owner, mitigation, trigger, source.

Command Center links to the underlying decision/risk.

---

# 15. Build / Buy / Rent v1

Wave 1 = scenario framework, not a precise economic optimizer.

Initial capabilities:
Field Sales, Virtual Sales, Commercial Ops, CRM, Data, Market Access, HUB, Distribution, Training.

Options:
Internal, Outsource/Rent, Hybrid, Delay.

Configurable dimensions:
speed, fixed cost, flexibility, control, strategic reuse, vendor dependency, hiring burden, launch certainty.

Output:
ranking, assumptions, missing evidence, confidence, human decision.

---

# 16. Command Center Lite

Header:
manufacturer, product, indication, PDUFA/launch, days to launch, archetype.

Cards:
Overall Readiness, Critical Risks, Decisions Due, Critical Path, Organization, Field, Access, Commercial Ops/Data, Distribution, Training.

Cards generated from configured workstreams.

Executive Brief:
top 3–5 items with what changed, why, evidence, confidence, impact, owner, action.

No static seeded text.

---

# 17. Report v1

Generate from live tenant state.

Sections:
1. Executive Summary
2. Overall Readiness
3. Workstream Heatmap
4. Hard Gates
5. Top Risks
6. Decisions Required
7. Evidence Gaps
8. 90-Day Roadmap
9. 180-Day Roadmap
10. Expert Findings
11. Build/Buy/Rent
12. Methodology/Evidence Appendix

Template is configurable/versioned.

---

# 18. UX

Primary Wave 1 nav:
Command, Readiness, Roadmap, Decisions & Risks, Experts, Strategy, Partners, Reports, Rules, Help.

Persistent:
Ask LaunchOS.

Every status has a “Why?”

---

# 19. Demo

Seed one fictional first-U.S.-launch manufacturer using ordinary records.

Must demonstrate:
- strong and weak workstreams
- missing evidence
- hiring sequencing risk
- unresolved field model
- expert engagement
- slipped milestone
- stale assumption
- evidence items

No hard-coded:
scores, briefs, AI responses, rules, expert answers, or demo-only routes.

---

# 20. Product Telemetry

Track:
tenant created, launch created, assessment started/completed, question skipped, evidence added, readiness recomputed, rule dry-run/activated, Gap Wizard invoked, insufficient-evidence response, expert request created, decision closed, report generated, Command Center card opened.

Avoid sending confidential text into third-party analytics.

---

# 21. Wave 1 Done

Complete only when:
- fresh tenant works without code changes
- demo can be deleted/reseeded
- readiness is live/explainable
- rules editable/versioned
- Gap Wizard returns uncertainty
- expert access scoped
- milestone shift calculates impact
- decisions retain evidence/rationale
- Command Center is live-generated
- report is live-generated
- isolation tests pass
- experienced user understands demo in <15 minutes
