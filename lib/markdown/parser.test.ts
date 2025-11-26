import { describe, it, expect } from 'vitest';
import { parseMarkdownFile } from './parser';

describe('parseMarkdownFile', () => {
  it('should successfully read and parse a markdown file with frontmatter', async () => {
    const result = await parseMarkdownFile('intro');

    expect(result.content).toContain('# Welcome to eziwiki');
    expect(result.content).toContain('eziwiki');
    expect(result.frontmatter.title).toBe('Welcome to eziwiki');
    expect(result.frontmatter.description).toBe(
      'A beautiful, minimal wiki and documentation site generator',
    );
  });

  it('should parse markdown file without frontmatter', async () => {
    const result = await parseMarkdownFile('secret-demo');

    expect(result.content).toContain('# 🎉 You Found the Secret Page!');
    expect(result.content).toContain('hidden');
    expect(result.frontmatter.title).toBe('Secret Demo Page');
  });

  it('should throw error for missing file with clear message', async () => {
    await expect(parseMarkdownFile('nonexistent-file')).rejects.toThrow(
      'Markdown file not found: nonexistent-file',
    );
    await expect(parseMarkdownFile('nonexistent-file')).rejects.toThrow(
      'Expected file location: content/nonexistent-file.md',
    );
  });
});
