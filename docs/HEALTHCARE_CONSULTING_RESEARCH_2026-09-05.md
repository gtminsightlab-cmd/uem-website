# Separate opportunities and Echelon / RxLaunchOS consulting

Date: 2026-09-05. Status: initial researched recommendation and website implementation brief.

## Owner direction

ClearSpec Labs ecommerce/sourcing, ClearSpec Platform software, and healthcare opportunities are different
businesses. The owner accepted separate website entrances and requested implementation plus research. Healthcare
may remain consulting through echelonconsulting.io and a future med-spa/healthcare-lab adaptation of RxLaunchOS.
This does not approve operating a clinical network or selling a new healthcare software subscription.
The earlier combined-investment recommendation in OPPORTUNITY_REVIEW.md is superseded by this clarification.

## Recommendation

Use Seven16's parent site to explain the separate opportunities, with individual destination pages. Use Echelon as
the potential consulting entry point for healthcare business decisions. Adapt RxLaunchOS through separately reviewed,
versioned sector methodology after consulting demonstrates a repeatable need. Preserve the existing pharma offering.

The near-term deliverable should be a decision brief: whether to pursue the business, what operating model fits,
what evidence is missing, which qualified partners are needed and what the owner should do next. A valid outcome
can be defer or do not launch. This model does not require a patient portal, pharmacy-order system or owned network.

## What current sources support

| Source, reviewed 2026-09-05 | Observed fact | Implication / inference |
| ------------------------- | ------------- | ----------------------- |
| [Echelon services](https://echelonconsulting.io/services) | Public services include readiness assessment, operating-model work and scoped expert input | An adjacent consulting format is plausible; actual med-spa/lab expertise and demand remain to be established |
| [RxLaunchOS overview](https://echelonconsulting.io/launchos) | Public positioning is pharmaceutical commercialization, with evidence, readiness, decisions, experts and configurable methods | Reuse the decision approach; do not claim existing healthcare-sector modules |
| [AmSpa](https://www.americanmedspa.org/) | The association offers business, legal and compliance resources for medical aesthetic practices | Sector expertise and existing alternatives must inform the offer; generic information alone is weak differentiation |
| [CMS CLIA overview](https://www.cms.gov/medicare/quality/clinical-laboratory-improvement-amendments) | CLIA regulates human laboratory testing for health assessment and diagnosis/prevention/treatment | A clinical-lab methodology needs a specific test/service/facility profile and qualified lab input, rather than reuse of research COA controls |
| [FDA compounding laws](https://www.fda.gov/drugs/human-drug-compounding/human-drug-compounding-laws) | FDA distinguishes 503A and 503B conditions and states that compounded drugs are not FDA-approved | Compounding requires a separate methodology and specialist review; it is not another label for clinical labs |
| [HHS business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html) | Business-associate obligations can apply to services involving PHI | Calling the offer consulting does not itself remove obligations. Begin with business evidence and synthetic examples; assess data needs before accepting patient information |
| [Qualiphy](https://qualiphy.me/) | Vendor advertises white-label consultation, testing and delivery options | An operated-network offering would meet existing alternatives; consulting can help clients compare those alternatives without becoming one |

These are primary public-source observations, not verification of vendor performance, an individual business's
legal eligibility, or commercial demand. No market-size estimate or 90% confidence assertion is needed to justify
the research stage. Exact jurisdictional requirements must be reviewed for the actual engagement.

## Three independent consulting scopes

| Scope | Decision the client brings | Proposed work product | Specialist validation |
| ----- | ------------------------- | --------------------- | --------------------- |
| Med spa | Open a location, add a service, expand or change vendors? | Demand/channel assessment, service economics, staffing/partner options, readiness gaps and owner decisions | Medical-aesthetics operator and appropriate clinical/legal specialists |
| Healthcare lab | Launch or expand a diagnostic service, collection model or customer channel? | Customer/service model, test and capacity assumptions, specimen/result workflow dependencies, payer/cash-pay scenarios and readiness | Qualified laboratory operations/director input; reimbursement and regulatory expertise where relevant |
| Compounding | Enter a market, expand a service or select operating partners? | Exact activity/entity map, channel strategy, vendor diligence, economics, quality/continuity questions and decision brief | Pharmacy/compounding operations and applicable legal/quality specialists |

These are candidate engagements, not currently contracted service packages. Compensation, deliverables, hours,
specialist costs and data permissions must be scoped. They do not share Labs customers, product supply, checkout,
merchant accounts or sourcing endorsements merely because the parent website links to all of them.

## How RxLaunchOS could support the work

Local UEM source reviewed: READ_ME_FIRST, product constitution, build guardrails, right-to-win, decision log, open
questions and public content standard. The source defines a configurable decision system with tenant isolation,
expert input and clear separation of product logic, methodology, client data and demo fixtures. This review did not
inspect the full live product application or verify that every documented capability is operational.

| Reusable concept | Sector adaptation required | Proof before claiming availability |
| ---------------- | -------------------------- | ---------------------------------- |
| Evidence register | Med-spa/lab/pharmacy-specific evidence types, source freshness and reviewer roles | A client can attach and review relevant business evidence without patient-data leakage |
| Readiness assessment | Separate questions, milestones, conditions and expert-owned gates for each sector | Unknown answers remain unknown; invalid sector questions cannot contaminate another sector |
| Decision and risk log | Open/expand/partner/defer decisions, accountable owner, due date and assumptions | Explain why the recommendation changed when evidence changes |
| Build/buy/partner comparison | Practice systems, laboratory systems, outsourcing and specialist alternatives | Actual scope/quotes, neutral criteria and disclosed conflicts |
| Economics | Service/location/test economics rather than pharmaceutical-launch defaults | Independent arithmetic; separate revenue, contribution, cash needs and sensitivity |
| Executive report | Sector-appropriate recommendation, unresolved evidence and next decisions | Human reviewer can approve, reject and trace each material conclusion |

Do not reuse pharmaceutical launch weights or readiness percentages for these sectors. Do not turn RxLaunchOS into
an EHR, laboratory information system, dispensing system or medication checkout. The application repository needs
a separately scoped change covering archetypes, methodology versions, permissions and acceptance evidence.

## A practical consulting-first sequence

1. Interview a small initial set of qualified med-spa and laboratory leaders; identify an actual buying decision and
   its budget holder. Prepare outreach first; no messages were sent during this task.
2. Produce one illustrative, clearly synthetic decision brief per sector. Ask domain specialists to challenge the
   evidence requirements and reasoning. Do not market these as client results.
3. Scope one bounded engagement where the client values the decision enough to pay. Model consultant time,
   specialist fees, research/data, software and support before setting a price.
4. Deliver with existing approved tools and human review. Track delivery effort, usefulness, missing evidence and
   whether the decision changed. Do not require integrations to validate consulting demand.
5. Adapt RxLaunchOS only for repeated work that clients and specialists validate. Initially prefer reviewed business
   documents and properly aggregated operating information over patient-level feeds.
6. Decide independently whether to remain consulting, add software-assisted consulting, offer a repeatable module,
   or stop. No obligation to commercialize Health Network follows from this research.

## Website implementation and remaining handoff

- Parent: `/opportunities`, with separate Labs and Platform entries and separate med-spa, healthcare-lab and
  compounding pages. Discoverable from home, portfolio, desktop/mobile navigation and sitemap.
- Labs: small parent-opportunities footer link on the configured platform host only; no medical offers in catalog
  or checkout. Retired $103,000 scenario removed from local public-pricing source.
- Healthcare CTAs: Echelon's existing business contact page. No patient or clinical data is forwarded by these links.
- Echelon site: existing contact is pharma-oriented. Before active healthcare acquisition, add appropriate
  organization/purpose choices and contextual pages in its own scoped change. Do not require a drug asset/PDUFA
  answer from a med-spa or clinical-lab visitor. No new form or false confirmation is implemented here.
- Echelon naming: **RxLaunchOS** is the owner-approved working public product name. Describe any
  aesthetic-medicine or healthcare-lab sector configuration as exploratory rather than inventing a separate product brand.
- Existing public UEM biography/product-leadership copy differs from newer local content rules. That discrepancy
  should be reconciled by its owning release; no old biography facts are copied into this work.

## Evidence still needed

Willingness to pay, practitioner/lab/pharmacy specialist participation, exact consulting deliverables, time to
deliver, contribution, client confidentiality terms and validated methodology are unknown. No national operating
coverage, clinical service, provider agreement, BAA, pricing or case study has been established by this work.
