'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NavigationItem } from '@/lib/payload/types';
import { useTabStore } from '@/lib/store/tabStore';

/**
 * Props for the Sidebar component
 */
interface SidebarProps {
  /** Array of top-level navigation items */
  navigation: NavigationItem[];
  /** Whether the sidebar is collapsed */
  isCollapsed?: boolean;
  /** Callback to toggle sidebar collapse state */
  onToggle?: () => void;
}

/**
 * Props for the NavigationItemComponent
 */
interface NavigationItemComponentProps {
  /** Navigation item to render */
  item: NavigationItem;
  /** Current page path for highlighting active item */
  currentPath: string;
  /** Nesting level for indentation (0 = top level) */
  level: number;
  /** Array of booleans indicating which levels should show vertical lines */
  parentLines?: boolean[];
}

/**
 * Recursive navigation item component with expand/collapse functionality
 *
 * Renders a single navigation item with support for nested children.
 * Items with children can be expanded/collapsed. Items with paths are
 * rendered as links and highlighted when active.
 *
 * @param props - Component props
 * @param props.item - Navigation item to render
 * @param props.currentPath - Current page path for active state
 * @param props.level - Nesting depth for indentation
 * @param props.isLast - Whether this is the last item in its parent's children
 * @param props.parentLines - Array indicating which levels should show vertical lines
 */
function NavigationItemComponent({
  item,
  currentPath,
  level,
  parentLines = [],
}: NavigationItemComponentProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const router = useRouter();
  const { activeTabId, updateTabPath } = useTabStore();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.path === currentPath;

  const handleToggle = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (item.path) {
      e.preventDefault();
      if (activeTabId) {
        // Update only the active tab's path
        updateTabPath(activeTabId, item.path, item.name);
      }
      router.push(`/${item.path}`);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center relative">
        {/* Vertical lines for tree structure */}
        {level > 0 && (
          <div className="absolute left-0 top-0 bottom-0 flex">
            {parentLines.map((showLine, idx) => (
              <div key={idx} className="relative" style={{ width: '20px' }}>
                {showLine && (
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        )}

        <div
          className="flex items-center"
          style={{ marginLeft: level > 0 ? `${parentLines.length * 20}px` : '0' }}
        >
          {hasChildren && (
            <button
              onClick={handleToggle}
              className="mr-1 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors touch-manipulation flex-shrink-0"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
              aria-expanded={isExpanded}
            >
              <svg
                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
          {item.path ? (
            <Link
              href={`/${item.path}`}
              onClick={handleLinkClick}
              className={`flex-1 px-3 py-2 rounded-md text-sm transition-colors touch-manipulation ${
                isActive
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700'
              } ${!hasChildren ? 'ml-5' : ''}`}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.name}
            </Link>
          ) : (
            <div
              className={`flex-1 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 ${
                !hasChildren ? 'ml-5' : ''
              }`}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.name}
            </div>
          )}
        </div>
      </div>
      {hasChildren && isExpanded && (
        <div>
          {item.children!.map((child, index) => {
            const newParentLines = [...parentLines, true];

            return (
              <NavigationItemComponent
                key={`${child.name}-${index}`}
                item={child}
                currentPath={currentPath}
                level={level + 1}
                parentLines={newParentLines}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Desktop sidebar component displaying hierarchical navigation
 *
 * Renders a fixed sidebar on the left side of the page with the full
 * navigation tree. Supports unlimited nesting with expand/collapse
 * functionality. Automatically highlights the active page.
 *
 * Hidden on mobile viewports (< 768px), where the MobileMenu component
 * is used instead.
 *
 * @param props - Component props
 * @param props.navigation - Array of top-level navigation items to display
 *
 * @example
 * ```tsx
 * const navigation = [
 *   { name: 'Home', path: 'home' },
 *   {
 *     name: 'Guides',
 *     children: [
 *       { name: 'Quick Start', path: 'guides/quick-start' }
 *     ]
 *   }
 * ];
 *
 * <Sidebar navigation={navigation} />
 * ```
 */
export function Sidebar({ navigation, isCollapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const currentPath = pathname === '/' ? '' : pathname.slice(1);

  return (
    <aside
      className={`hidden md:block h-screen sticky top-0 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Toggle button */}
      <div className="flex justify-end p-2 border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={onToggle}
          className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            className={`w-5 h-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      {!isCollapsed && (
        <nav className="p-4">
          {navigation.map((item, index) => (
            <NavigationItemComponent
              key={`${item.name}-${index}`}
              item={item}
              currentPath={currentPath}
              level={0}
              parentLines={[]}
            />
          ))}
        </nav>
      )}
    </aside>
  );
}
