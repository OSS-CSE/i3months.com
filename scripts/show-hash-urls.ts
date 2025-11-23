#!/usr/bin/env tsx

/**
 * Script to display all hash-based URLs for navigation items
 *
 * This helps you find the hash URLs for hidden pages or any other content.
 * Run with: npx tsx scripts/show-hash-urls.ts
 */

import { payload } from '../payload/config';
import { extractAllPaths } from '../lib/navigation/builder';
import { generatePathHash } from '../lib/navigation/hash';

console.log('📋 Hash-Based URLs\n');
console.log('='.repeat(80));

const paths = extractAllPaths(payload.navigation);

// Find hidden items
function findHiddenPaths(items: typeof payload.navigation, parentPath = ''): string[] {
  const hidden: string[] = [];

  for (const item of items) {
    if (item.path && item.hidden) {
      hidden.push(item.path);
    }
    if (item.children) {
      hidden.push(...findHiddenPaths(item.children, parentPath));
    }
  }

  return hidden;
}

const hiddenPaths = findHiddenPaths(payload.navigation);

paths.forEach((path) => {
  const hash = generatePathHash(path);
  const isHidden = hiddenPaths.includes(path);
  const marker = isHidden ? '🔒 [HIDDEN]' : '📄';

  console.log(`${marker} ${path}`);
  console.log(`   → /${hash}`);
  console.log(`   → ${payload.global.baseUrl || 'http://localhost:3000'}/${hash}`);
  console.log();
});

console.log('='.repeat(80));
console.log(`\nTotal pages: ${paths.length}`);
console.log(`Hidden pages: ${hiddenPaths.length}`);

if (hiddenPaths.length > 0) {
  console.log(
    '\n💡 Tip: Hidden pages are not shown in the sidebar but can be accessed via their hash URL.',
  );
}
