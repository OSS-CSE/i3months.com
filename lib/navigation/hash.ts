import crypto from 'crypto';
import { NavigationItem } from '../payload/types';

/**
 * Generate a hash-based URL from a file path
 *
 * Creates a deterministic hash from the file path that can be used as a URL.
 * The hash is URL-safe and consistent for the same input.
 *
 * @param filePath - Original file path (e.g., 'guides/quick-start')
 * @returns Hash-based URL segment (e.g., 'a3f2e9d1-4b8c7e6f-9d2a1b3c')
 *
 * @example
 * ```typescript
 * const hash = generatePathHash('guides/quick-start');
 * // Returns: 'a3f2e9d1-4b8c7e6f-9d2a1b3c'
 * ```
 */
export function generatePathHash(filePath: string): string {
  const hash = crypto.createHash('sha256').update(filePath).digest('hex');

  // Format: 8chars-8chars-8chars for readability
  return `${hash.slice(0, 8)}-${hash.slice(8, 16)}-${hash.slice(16, 24)}`;
}

/**
 * Build a mapping of hash URLs to original file paths
 *
 * Recursively traverses the navigation tree and creates a bidirectional
 * mapping between hash-based URLs and original file paths.
 *
 * @param items - Navigation items to process
 * @returns Object with hashToPath and pathToHash mappings
 *
 * @example
 * ```typescript
 * const navigation = [
 *   { name: 'Home', path: 'home' },
 *   { name: 'Guide', path: 'guides/quick-start' }
 * ];
 *
 * const mapping = buildPathHashMapping(navigation);
 * // Returns: {
 * //   hashToPath: { 'abc123...': 'home', 'def456...': 'guides/quick-start' },
 * //   pathToHash: { 'home': 'abc123...', 'guides/quick-start': 'def456...' }
 * // }
 * ```
 */
export function buildPathHashMapping(items: NavigationItem[]): {
  hashToPath: Record<string, string>;
  pathToHash: Record<string, string>;
} {
  const hashToPath: Record<string, string> = {};
  const pathToHash: Record<string, string> = {};

  function traverse(items: NavigationItem[]) {
    for (const item of items) {
      if (item.path) {
        const hash = generatePathHash(item.path);
        hashToPath[hash] = item.path;
        pathToHash[item.path] = hash;
      }
      if (item.children) {
        traverse(item.children);
      }
    }
  }

  traverse(items);
  return { hashToPath, pathToHash };
}

/**
 * Resolve a hash-based URL to the original file path
 *
 * @param hash - Hash-based URL segment
 * @param navigation - Navigation items to search
 * @returns Original file path or null if not found
 *
 * @example
 * ```typescript
 * const path = resolveHashToPath('a3f2e9d1-4b8c7e6f-9d2a1b3c', navigation);
 * // Returns: 'guides/quick-start'
 * ```
 */
export function resolveHashToPath(hash: string, navigation: NavigationItem[]): string | null {
  const { hashToPath } = buildPathHashMapping(navigation);
  return hashToPath[hash] || null;
}

/**
 * Convert a file path to its hash-based URL
 *
 * @param path - Original file path
 * @param navigation - Navigation items to search
 * @returns Hash-based URL or null if path not found in navigation
 *
 * @example
 * ```typescript
 * const hash = resolvePathToHash('guides/quick-start', navigation);
 * // Returns: 'a3f2e9d1-4b8c7e6f-9d2a1b3c'
 * ```
 */
export function resolvePathToHash(path: string, navigation: NavigationItem[]): string | null {
  const { pathToHash } = buildPathHashMapping(navigation);
  return pathToHash[path] || null;
}
