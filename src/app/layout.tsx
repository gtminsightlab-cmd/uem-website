import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import {
  absoluteUrl,
  DEFAULT_DESCRIPTION,
  safeJsonLd,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_WIDTH,
} from '@/lib/site';

import './globals.css';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Pharmaceutical Commercialization & U.S. Launch Strategy | UEM',
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Pharmaceutical commercialization consulting and software',
  alternates: { canonical: '/' },
  manifest: '/manifest.webmanifest',
  formatDetection: { address: false, email: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Pharmaceutical Commercialization & U.S. Launch Strategy | UEM',
    description: DEFAULT_DESCRIPTION,
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [
      {
        url: absoluteUrl(SOCIAL_IMAGE),
        width: SOCIAL_IMAGE_WIDTH,
        height: SOCIAL_IMAGE_HEIGHT,
        alt: 'Upper Echelon Management — U.S. pharmaceutical commercialization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmaceutical Commercialization & U.S. Launch Strategy | UEM',
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl(SOCIAL_IMAGE)],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0F1A' },
  ],
  colorScheme: 'light',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: SITE_SHORT_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      foundingDate: '2015',
      founder: { '@type': 'Person', name: 'Sharon O’Dell', jobTitle: 'Founder' },
      knowsAbout: [
        'U.S. pharmaceutical commercialization',
        'Pharmaceutical launch readiness',
        'Biopharma organization design',
        'Pharmaceutical field-force design',
        'Biosimilar commercialization',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: SITE_SHORT_NAME,
      url: SITE_URL,
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationJsonLd) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
