import { MetadataRoute } from 'next';
import { payload } from '@/payload/config';

/**
 * Generate robots.txt file
 * Controls how search engines crawl and index the site
 *
 * @returns Robots configuration
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = payload.global.baseUrl || 'https://example.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
