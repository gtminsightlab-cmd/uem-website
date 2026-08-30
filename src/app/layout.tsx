import type { Metadata } from 'next';
import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

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
  title: {
    default: 'Upper Echelon Management | Your U.S. Commercialization Office',
    template: '%s | Upper Echelon Management',
  },
  description:
    'Operator-led U.S. commercialization strategy, launch readiness, organization design, and LaunchOS product development for emerging and global biopharma manufacturers.',
  keywords: [
    'pharmaceutical commercialization',
    'first U.S. launch',
    'commercial launch readiness',
    'pharma organization design',
    'field force design',
    'LaunchOS',
  ],
  openGraph: {
    title: 'Upper Echelon Management | Your U.S. Commercialization Office',
    description:
      'Operator leadership and an evidence-aware commercialization operating system for high-stakes U.S. launches.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
