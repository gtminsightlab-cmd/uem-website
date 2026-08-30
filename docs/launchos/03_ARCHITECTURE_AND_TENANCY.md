# Architecture & Tenancy

## Organization Types

1. LaunchOS Platform Operator
2. Manufacturer Tenant
3. Expert Organization

## Manufacturer Hierarchy

Manufacturer
→ Product
→ Indication
→ Geography
→ Launch

## Tenant-Scoped Objects

At minimum:
- organization_id
- tenant_id
- product_id where applicable
- launch_id where applicable
- access_scope
- data_classification
- source_id
- version
- created_by
- timestamps

## Roles

Manufacturer:
- Executive
- Functional Leader
- Regional Director
- First-Line Manager
- Representative
- Contributor
- Viewer
- Vendor
- Auditor

Platform:
- Platform Admin
- Methodology Owner
- Security Admin
- Customer Success
- Expert Network Manager
- Rules Manager
- Data/Integration Admin

## Expert Access

Experts do not receive full tenant access by default.

Access is granted through:
- Expert Engagement,
- approved context packet,
- explicitly shared files,
- time-bound permission,
- audit-logged activity.

## Suggested Technical Foundation

- Next.js / React / TypeScript
- Vercel
- Supabase / PostgreSQL
- Row Level Security
- tenant-bound object storage
- provider-agnostic AI gateway
- structured AI outputs
- tenant-aware RAG
- durable background jobs/workflows
- audit event table

Avoid premature microservices.
