# Build Guardrails

These rules are permanent unless explicitly superseded by an approved architecture decision.

## No Hard-Coded Demo Logic

Forbidden:
- fixed readiness scores in UI,
- hard-coded sample manufacturer names in components,
- hard-coded launch dates,
- fixed milestone dependencies,
- hard-coded expert responses,
- fake AI outputs,
- demo-only routes with special business logic,
- hard-coded KPI thresholds,
- embedded methodology assumptions in React components.

Required:
- demo tenant created by seed/fixture scripts,
- configurable methodology tables,
- versioned rules,
- tenant-aware settings,
- editable readiness questions,
- configurable launch archetypes,
- configurable milestones/dependencies,
- configurable evidence requirements,
- configurable report templates.

## Four-Layer Separation

### Product Logic
Stable code:
- evaluate rule,
- calculate dependency impact,
- create expert request,
- calculate readiness,
- render command views.

### Methodology / Configuration
Editable:
- questions,
- weights,
- hard gates,
- milestone templates,
- archetypes,
- evidence requirements,
- thresholds,
- report sections.

### Tenant Data
Client-specific:
- product,
- indication,
- dates,
- staffing,
- vendors,
- answers,
- files,
- decisions,
- risks.

### Demo Seed Data
Disposable:
- fictional manufacturers,
- fictional experts,
- seeded risks,
- seeded vendor proposals.

## Architecture Rules

- Every tenant-owned record carries `tenant_id`.
- Every service method is tenant-aware.
- RLS is mandatory where applicable.
- Vector/RAG indexes must be tenant-scoped.
- Expert access uses explicit engagement scope.
- Audit events are immutable.
- Changes to rules/methodology create new versions.
- No model output can silently mutate decision state.
- Human approval is required for consequential recommendations.
