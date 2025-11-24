---
title: Simple Example
description: A minimal example with one document
---

# Simple Example

This is a minimal example showing how to add a single document in a folder.

## File Structure

This file is located at:

```
content/
└── examples/
    └── simple-example.md
```

## Navigation Configuration

In `payload/config.ts`, this is configured as:

```typescript
{
  name: 'Examples',
  children: [
    {
      name: 'Simple Example',
      path: 'examples/simple-example',
    },
  ],
}
```

## How It Works

- **Folder**: `content/examples/`
- **File**: `simple-example.md`
- **Path**: `'examples/simple-example'`

The path matches the file location relative to the `content/` folder.

## Adding More Documents

To add another document in this folder:

1. Create `content/examples/another-doc.md`
2. Add to navigation:
   ```typescript
   {
     name: 'Examples',
     children: [
       {
         name: 'Simple Example',
         path: 'examples/simple-example',
       },
       {
         name: 'Another Doc',
         path: 'examples/another-doc',
       },
     ],
   }
   ```

That's it!
