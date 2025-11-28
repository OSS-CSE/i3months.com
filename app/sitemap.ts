import { MetadataRoute } from 'next';
import { payload } from '@/payload/config';
import { extractAllPaths } from '@/lib/navigation/builder';
import { generatePathHash } from '@/lib/navigation/hash';

/**
 * Generate sitemap for all content pages
 * This helps search engines discover and index all pages
 *
 * @returns Sitemap entries for all navigation paths
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = payload.global.baseUrl || 'https://example.com';
  const paths = extractAllPaths(payload.navigation);

  const homeEntry: MetadataRoute.Sitemap[0] = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  };

  const contentEntries: MetadataRoute.Sitemap = paths.map((path) => {
    const hash = generatePathHash(path);
    return {
      url: `${baseUrl}/${hash}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  return [homeEntry, ...contentEntries];
}
