# Contributing to EziWiki

Thanks for your interest in contributing! We welcome bug fixes, features, documentation improvements, and more.

## Quick Start

1. Fork and clone the repo
2. Install dependencies: `npm install`
3. Create a branch: `git checkout -b feature/your-feature`
4. Make your changes
5. Run checks: `npm run lint && npm run test && npm run build`
6. Commit and push
7. Open a Pull Request

## Code Standards

This project follows strict TypeScript and React conventions. Key points:

- **TypeScript**: Strict mode, explicit types, no `any`
- **Components**: Named exports, PascalCase files, JSDoc comments
- **Styling**: Tailwind CSS utilities, mobile-first
- **Imports**: Use `@/` alias for internal imports

## Commit Messages

Use Conventional Commits format:

```
feat: add new feature
fix: fix bug
docs: update documentation
```

Examples:

- `feat: add icon support`
- `fix: handle missing frontmatter`
- `docs: update README installation steps`

## Pull Requests

We'll review your PR and provide feedback. Thanks for contributing!
