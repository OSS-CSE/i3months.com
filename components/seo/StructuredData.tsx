/**
 * Structured Data (JSON-LD) component for SEO
 * Provides rich snippets for search engines
 */
interface StructuredDataProps {
  type: 'WebSite' | 'Article' | 'BreadcrumbList';
  data: Record<string, unknown>;
}

/**
 * Renders JSON-LD structured data for search engines
 *
 * @param props - Component props
 * @param props.type - Schema.org type
 * @param props.data - Structured data object
 */
export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
