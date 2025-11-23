'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useTabStore } from '@/lib/store/tabStore';
import { NavigationItem } from '@/lib/payload/types';
import { resolveHashToPath } from '@/lib/navigation/hash';

interface TabInitializerProps {
  navigation: NavigationItem[];
}

/**
 * Helper function to find navigation item by path
 */
export function findNavigationItemByPath(
  items: NavigationItem[],
  path: string,
): NavigationItem | null {
  const normalizedPath = path.replace(/\/$/, '');

  for (const item of items) {
    if (!item.path) {
      if (item.children) {
        const found = findNavigationItemByPath(item.children, path);
        if (found) return found;
      }
      continue;
    }

    const normalizedItemPath = item.path.replace(/\/$/, '');
    if (normalizedItemPath === normalizedPath) {
      return item;
    }

    if (item.children) {
      const found = findNavigationItemByPath(item.children, path);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Initializes tabs on first load only
 */
export function TabInitializer({ navigation }: TabInitializerProps) {
  const pathname = usePathname();
  const { tabs, addTab, activeTabId, updateTabPath, hasHydrated } = useTabStore();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (!hasHydrated) return;
    if (!isInitialMount.current) return;

    const currentHash = pathname === '/' ? '' : pathname.slice(1).replace(/\/$/, '');
    const currentPath = currentHash
      ? resolveHashToPath(currentHash, navigation) || currentHash
      : '';

    if (tabs.length === 0) {
      // No saved tabs - create initial tab based on URL
      const navItem = findNavigationItemByPath(navigation, currentPath);
      const title = navItem?.name || 'New Tab';
      addTab({ title, path: currentPath });
    } else if (activeTabId) {
      // Tabs exist - update active tab to match URL
      const navItem = findNavigationItemByPath(navigation, currentPath);
      const title = navItem?.name || 'New Tab';
      updateTabPath(activeTabId, currentPath, title);
    }

    isInitialMount.current = false;
  }, [hasHydrated, tabs.length, pathname, navigation, addTab, activeTabId, updateTabPath]);

  return null;
}
