---
title: Performance Optimization
description: How to optimize your application performance
order: 2
---

# Performance Optimization

Learn various ways to improve your application's performance.

## Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image';

export default function Avatar() {
  return <Image src="/avatar.png" width={500} height={500} alt="Avatar" />;
}
```

## Code Splitting

Reduce bundle size using dynamic imports:

```tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/heavy'));
```

## Caching Strategy

Improve loading speed with proper caching strategies.
