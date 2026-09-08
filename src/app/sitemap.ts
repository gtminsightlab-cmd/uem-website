import type { MetadataRoute } from 'next';

import { insights } from '@/content/insights';
import { absoluteUrl } from '@/lib/site';

const updated = new Date('2026-09-05T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: updated, changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/services'), lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/aesthetic-medicine'), lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/launchos'), lastModified: updated, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/insights'), lastModified: updated, changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/about'), lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/resources'), lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/contact'), lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/employment-verification'), lastModified: updated, changeFrequency: 'yearly', priority: 0.4 },
  ];

  const insightPages: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: absoluteUrl(`/insights/${insight.slug}`),
    lastModified: new Date(insight.published),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticPages, ...insightPages];
}
