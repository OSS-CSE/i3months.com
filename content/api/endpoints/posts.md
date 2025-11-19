---
title: Posts API
description: Post management API endpoints
order: 2
---

# Posts API

API endpoints for managing posts.

## List Posts

```http
GET /api/posts?page=1&limit=10
```

### Query Parameters

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `sort` - Sort by (created_at, updated_at)

### Response Example

```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "id": 1,
        "title": "First Post",
        "content": "Content...",
        "author": {
          "id": 1,
          "name": "John Doe"
        },
        "createdAt": "2025-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100
    }
  }
}
```

## Get Post Details

```http
GET /api/posts/:id
```

## Create Post

```http
POST /api/posts
```

### Request Body

```json
{
  "title": "New Post",
  "content": "This is the post content.",
  "tags": ["nextjs", "react"]
}
```
