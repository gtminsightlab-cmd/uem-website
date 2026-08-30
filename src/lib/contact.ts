export const contactPurposes = [
  'U.S. market entry or GTM commercialization',
  'Launch readiness or risk review',
  'Commercialization office engagement',
  'Organization or field-force design',
  'Market access, patient journey, or channel strategy',
  'Research, intelligence, or evidence review',
  'LaunchOS',
  'Expert, data, or strategic partnership',
  'Media, speaking, or other inquiry',
] as const;

export type ContactPurpose = (typeof contactPurposes)[number];

export const organizationTypes = [
  'U.S. biotech or pharmaceutical manufacturer',
  'Global manufacturer preparing for U.S. entry',
  'Commercialization, data, or service partner',
  'Research, academic, or evidence organization',
  'Independent operator or functional expert',
  'Investor, board member, or advisor',
  'Media or professional association',
  'Other',
] as const;

export const assetStages = [
  'Discovery or preclinical',
  'Phase 1',
  'Phase 2',
  'Phase 3',
  'Registration or regulatory review',
  'Approved, pre-launch',
  'Commercial or post-launch',
  'Portfolio or platform-level question',
  'Not applicable',
] as const;

export const launchHorizons = [
  '0–6 months',
  '6–12 months',
  '12–24 months',
  'More than 24 months',
  'Timing is not yet defined',
  'Already commercial',
  'Not applicable',
] as const;

export const engagementNeeds = [
  'Commercial readiness and risk diagnosis',
  'U.S. market-entry and GTM strategy',
  'Commercial operating model and governance',
  'Organization, field-force, or talent design',
  'Market access, channel, and patient support',
  'Research, competitive intelligence, or evidence synthesis',
  'Launch economics, scenarios, or investment choices',
  'LaunchOS, data, analytics, or decision-system review',
  'Expert network or strategic partnership',
  'Other',
] as const;

export const preferredNextSteps = [
  'Confidential fit discussion',
  'Scoped research brief',
  'Commercialization working session',
  'Operator or expert review',
  'Partnership conversation',
  'Not sure yet',
] as const;
