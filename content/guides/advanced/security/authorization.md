---
title: Authorization
description: Implementing role-based access control
order: 2
---

# Authorization

Learn how to implement role-based access control (RBAC).

## Define Roles

Define user roles:

```typescript
export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
```

## Implement Middleware

Create middleware to check permissions:

```typescript
export function withAuth(handler: Function, allowedRoles: Role[]) {
  return async (req: Request) => {
    const session = await getSession(req);

    if (!session || !allowedRoles.includes(session.user.role)) {
      return new Response('Unauthorized', { status: 401 });
    }

    return handler(req);
  };
}
```

## Usage Example

```typescript
export const GET = withAuth(
  async (req: Request) => {
    // Admin-only logic
    return Response.json({ data: 'secret' });
  },
  [Role.ADMIN],
);
```
