---
title: State Management
description: Learn React state management patterns
order: 1
---

# State Management

Learn how to effectively manage state in React applications.

## Using useState

The most basic state management method:

```tsx
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Using useReducer

For complex state logic, use useReducer:

```tsx
import { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
}
```

## Context API

Use Context for global state management.
