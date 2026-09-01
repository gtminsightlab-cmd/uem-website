export const requesterOrganizationTypes = [
  "Employer HR or talent team",
  "Background screening or verification provider",
  "Lender, housing provider, or benefits administrator",
  "Government agency or authorized investigator",
  "Current or former UEM worker requesting their own record",
  "Other authorized requester",
] as const;

export const verificationPurposes = [
  "Pre-employment or background screening",
  "Employment or income verification for credit, housing, or benefits",
  "Government, licensing, or legal requirement",
  "Current or former worker personal request",
  "Other lawful purpose",
] as const;

export const workerStatuses = ["Current", "Former", "Not sure"] as const;

export const verificationItems = [
  "Employment dates",
  "Job title or position",
  "Current or former employment status",
  "Compensation or income",
  "Complete the attached verification form",
  "Other lawful employment information",
] as const;

export const responseMethods = [
  "Secure email to my work email",
  "Upload to the requester’s secure portal",
  "Mail to a verified business or agency address",
  "Other secure method",
] as const;

export const allowedVerificationFileTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
] as const;

export const employmentVerificationBucket = "employment-verification";
export const maxVerificationFileBytes = 3 * 1024 * 1024;
