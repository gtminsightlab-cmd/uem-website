export const SITE_NAME = 'Upper Echelon Management';
export const SITE_SHORT_NAME = 'UEM';
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://echelonconsulting.io').replace(/\/$/, '');
export const SOCIAL_IMAGE = '/images/uem-social-preview.png';
export const SOCIAL_IMAGE_WIDTH = 1200;
export const SOCIAL_IMAGE_HEIGHT = 630;
export const DEFAULT_DESCRIPTION =
  'Operator-led U.S. pharmaceutical and biosimilar commercialization for emerging and global biopharma manufacturers, including launch readiness, organization and field-force design, and LaunchOS.';

export const absoluteUrl = (path = '/') => new URL(path, `${SITE_URL}/`).toString();

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
