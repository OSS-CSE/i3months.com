import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

/**
 * Result of parsing a Markdown file
 */
export interface ParsedMarkdown {
  /** Markdown content without frontmatter */
  content: string;
  /** Parsed frontmatter metadata as key-value pairs */
  frontmatter: Record<string, unknown>;
}

/**
 * Reads and parses a Markdown file from the content directory
 *
 * This function loads a Markdown file, extracts any YAML frontmatter,
 * and returns both the content and metadata separately. The frontmatter
 * can contain arbitrary metadata like title, author, date, etc.
 *
 * Files are expected to be in the `content/` directory with a `.md` extension.
 * The function automatically appends `.md` to the provided path.
 *
 * Language Support:
 * - If a language parameter is provided, it will first try to load `{filePath}.{lang}.md`
 * - If the language-specific file doesn't exist, it falls back to `{filePath}.md`
 * - Example: parseMarkdownFile('intro', 'ko') tries 'intro.ko.md' then 'intro.md'
 *
 * @param filePath - Path to the Markdown file relative to the content directory (without .md extension)
 * @param language - Optional language code (e.g., 'en', 'ko'). If provided, tries language-specific file first
 * @returns Promise resolving to parsed content and frontmatter
 * @throws Error if the file cannot be read or does not exist
 *
 * @example
 * ```typescript
 * // For a file at content/guides/quick-start.md
 * const result = await parseMarkdownFile('guides/quick-start');
 *
 * console.log(result.frontmatter.title); // "Quick Start Guide"
 * console.log(result.content); // "# Quick Start\n\nWelcome..."
 * ```
 *
 * @example
 * ```typescript
 * // Loading language-specific content
 * const koResult = await parseMarkdownFile('intro', 'ko'); // Tries intro.ko.md first
 * const enResult = await parseMarkdownFile('intro', 'en'); // Tries intro.en.md first
 * ```
 *
 * @example
 * ```typescript
 * // Handling errors
 * try {
 *   const result = await parseMarkdownFile('nonexistent');
 * } catch (error) {
 *   console.error('Failed to load content:', error.message);
 * }
 * ```
 */
export async function parseMarkdownFile(
  filePath: string,
  language?: string,
): Promise<ParsedMarkdown> {
  const contentDir = path.join(process.cwd(), 'content');

  // Try language-specific file first if language is provided
  if (language) {
    const langPath = path.join(contentDir, `${filePath}.${language}.md`);
    try {
      const fileContent = await fs.readFile(langPath, 'utf-8');
      const { data, content } = matter(fileContent);
      return {
        content,
        frontmatter: data,
      };
    } catch (error) {
      // If language-specific file doesn't exist, fall through to default
      if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) {
        throw new Error(
          `Failed to read Markdown file: ${filePath}.${language}.md\n` +
            `Error: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }
  }

  // Try default file without language suffix
  const fullPath = path.join(contentDir, `${filePath}.md`);
  try {
    const fileContent = await fs.readFile(fullPath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      content,
      frontmatter: data,
    };
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      throw new Error(
        `Markdown file not found: ${filePath}\n` +
          `Expected file location: content/${filePath}.md` +
          (language ? ` or content/${filePath}.${language}.md` : ''),
      );
    }
    throw new Error(
      `Failed to read Markdown file: ${filePath}\n` +
        `Error: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
