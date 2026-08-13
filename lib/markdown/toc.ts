import type { Heading } from './rehype-plugins';

/**
 * Whether a contents rail would list anything for these headings.
 *
 * The page reserves the rail's width in its layout, and it has to reserve it
 * before the rail component gets to decide it has nothing to show. Without
 * asking first, a page with no headings still pays for the column and its
 * article sits off-centre beside empty space.
 *
 * Lives here rather than beside the component because the component is a
 * client module: Next replaces such a module's exports with client references,
 * so a predicate exported from it is not callable while the page is rendered
 * on the server. Stated once, so the two sides cannot drift apart.
 *
 * A single heading is not worth a list — it would name the page's one section
 * back to a reader already looking at it.
 */
export function hasTableOfContents(headings: Heading[]): boolean {
  return headings.length >= 2;
}
