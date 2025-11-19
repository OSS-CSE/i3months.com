---
title: First Steps
description: How to start your first project
order: 1
---

# First Steps

This tutorial is a guide for those who are starting a project for the first time.

## Create a Project

Create a new project:

```bash
npx create-next-app@latest my-app
cd my-app
```

## Run Development Server

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to see the result.

## Create Your First Page

Edit the `app/page.tsx` file:

```tsx
export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <p>This is your first Next.js page.</p>
    </main>
  );
}
```

Changes will be automatically reflected.
