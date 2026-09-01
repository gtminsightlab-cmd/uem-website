# UEM Employment-Verification Intake Standard

**Status:** Implemented product and operating baseline; attorney review still required

**Research checked:** 2026-08-31
**Scope:** Public intake and handling of third-party requests concerning a current or former UEM worker

This document is an operational research summary, not a legal opinion. Employment-reference,
income-verification, privacy, service-letter, and record-retention duties can vary by the worker's
state, the requesting party, the purpose, and the facts. UEM should have employment counsel review
the workflow before treating it as a final nationwide response policy.

## Public form standard

The public site provides two separate paths:

1. `/contact` for commercialization, LaunchOS, research, partnership, and other ordinary business inquiries.
2. `/employment-verification` for current or former worker verification.

The employment-verification form must collect:

- requester name, organization, role, work email, business phone, requester type, and optional website;
- worker name, optional former name, current/former status supplied by the requester, approximate employment period, last known title, and primary work jurisdiction;
- the request purpose and the exact categories requested;
- preferred secure response method and any portal, mailing, or reference instructions;
- certification that the requester is the worker or has current written authorization or other lawful authority; and
- certification that prohibited sensitive information was not submitted.

The form must not collect a Social Security number, date of birth, driver's-license or passport copy,
bank information, medical or genetic information, patient information, or client-confidential material.

## Disclosure baseline

After UEM independently verifies the record, requester, authority, jurisdiction, and response channel,
the normal neutral response may be limited to:

- employment dates;
- position or title; and
- current or former employment status.

Compensation or income should require a current, specific written authorization or another documented
legal basis. A requester-provided questionnaire does not obligate UEM to answer every question.

Do not disclose medical, disability, accommodation, leave-health, or genetic information through this
workflow. Do not provide subjective performance, misconduct, separation-reason, or rehire-eligibility
information unless an approved jurisdiction-specific policy and documented record authorize the response.

Never automate the substantive verification response. Ronnie O'Dell or another specifically authorized
UEM reviewer must compare the request with the source record and determine what may be released.

## Why the form asks for authorization and jurisdiction

- The FTC's employer background-check guidance says a requesting employer using a background-reporting
  company must give a stand-alone disclosure and obtain the worker's written permission before procuring
  the report. Those duties primarily govern the requester and consumer-reporting company, but collecting
  the authorization gives UEM a defensible review input; it does not prove the request is valid by itself.
- State laws vary. As one example, Missouri Revised Statutes § 290.152 allows a written response to a
  written request that the employer reasonably believes comes from a prospective employer, specifies
  permissible content, requires consistency with any service letter, and requires the employer to send
  the employee a copy of the response. Missouri § 290.140 separately creates a service-letter process for
  certain qualifying former employees and employers. If Missouri applies, route the request for that
  specific review instead of treating the website form as the statutory letter itself.
- The EEOC requires medical information to remain confidential and separate from ordinary personnel
  records, with narrow exceptions. GINA likewise sharply limits disclosure of genetic information.

## Document and delivery security

- Accept one PDF, JPG, or PNG no larger than 3 MB. Validate MIME type, extension, and the file signature.
- Upload from the trusted server only to the private `employment-verification` Supabase bucket.
- Do not grant `anon` or `authenticated` storage policies and do not expose the service-role key to the browser.
- Do not attach the document to notification email. Send Ronnie a seven-day signed download URL and warn
  that the link must not be forwarded.
- If email delivery fails, remove the uploaded object. A daily authenticated retention job removes objects
  older than the configurable retention period (30 days by default).
- Use the requester work email only as a reply address after the reviewer validates it. Do not place the
  worker name or other personal data in the email subject.
- Record-response content should use a verified secure business email, a verified requestor portal, or
  another reviewer-approved channel. Do not send sensitive compensation material in an unprotected email body.

The FTC's security guidance supports collecting only information with a legitimate business need,
limiting access, keeping it only as long as necessary, and disposing of it securely.

## Sources

- [FTC and EEOC — Background Checks: What Employers Need to Know](https://www.ftc.gov/business-guidance/resources/background-checks-what-employers-need-know)
- [FTC — Employer Background Checks and Your Rights](https://consumer.ftc.gov/articles/employer-background-checks-and-your-rights)
- [EEOC — Pre-Employment Inquiries and Medical Questions & Examinations](https://www.eeoc.gov/pre-employment-inquiries-and-medical-questions-examinations)
- [EEOC — GINA confidentiality guidance for small businesses](https://www.eeoc.gov/laws/guidance/questions-and-answers-small-businesses-eeoc-final-rule-title-ii-genetic-information)
- [FTC — Protecting Personal Information: A Guide for Business](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business)
- [Missouri Revised Statutes § 290.152](https://www.revisor.mo.gov/main/OneSection.aspx?section=290.152)
- [Missouri Revised Statutes § 290.140](https://revisor.mo.gov/main/OneSection.aspx?section=290.140)
- [Supabase — Storage buckets and private access](https://supabase.com/docs/guides/storage/buckets/fundamentals)
- [Supabase — Storage file limits](https://supabase.com/docs/guides/storage/uploads/file-limits)
- [Vercel — Functions request-body limit](https://vercel.com/docs/functions/limitations#request-body-size)

## Required owner and counsel decisions

Before presenting this as a final nationwide HR policy, confirm:

1. UEM's employing legal entity or entities and the states in which UEM currently has or had workers.
2. The authorized reviewer and backup reviewer.
3. Whether the default response is dates/title/status only or whether compensation is routinely permitted with authorization.
4. The final retention period for requests, uploaded documents, sent responses, and proof of authorization.
5. State-specific response, employee-copy, service-letter, and timing rules for every applicable worker jurisdiction.
6. Whether UEM will use encrypted email, a secure document portal, or both for approved compensation responses.
