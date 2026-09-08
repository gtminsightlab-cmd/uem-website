import type { Metadata } from 'next';

import {
  absoluteUrl,
  SITE_NAME,
  SITE_SHORT_NAME,
  SOCIAL_IMAGE,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_WIDTH,
} from '@/lib/site';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_SHORT_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: path,
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
      title: fullTitle,
      description,
      images: [absoluteUrl(SOCIAL_IMAGE)],
    },
  };
}
