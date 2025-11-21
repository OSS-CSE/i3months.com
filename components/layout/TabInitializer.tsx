'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useTabStore } from '@/lib/store/tabStore';
import { NavigationItem } from '@/lib/payload/types';

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
  const { tabs, addTab, hasHydrated } = useTabStore();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (!hasHydrated) return;

    // Only create initial tab if no tabs exist and this is the first mount
    if (tabs.length === 0 && isInitialMount.current) {
      const currentPath = pathname === '/' ? '' : pathname.slice(1).replace(/\/$/, '');
      const navItem = findNavigationItemByPath(navigation, currentPath);
      const title = navItem?.name || 'New Tab';
      addTab({ title, path: currentPath });
    }

    isInitialMount.current = false;
  }, [hasHydrated, tabs.length, pathname, navigation, addTab]);

  return null;
}
