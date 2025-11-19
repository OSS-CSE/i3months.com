---
title: Authentication
description: Building a secure user authentication system
order: 1
---

# Authentication

Learn how to build a secure user authentication system.

## NextAuth.js Setup

You can implement authentication using NextAuth.js:

```bash
npm install next-auth
```

## Configuration File

Create `app/api/auth/[...nextauth]/route.ts`:

```typescript
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

## Session Management

How to use sessions on the client side:

```tsx
'use client';
import { useSession } from 'next-auth/react';

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return <p>Hello, {session.user.name}!</p>;
  }

  return <p>Please sign in.</p>;
}
```
