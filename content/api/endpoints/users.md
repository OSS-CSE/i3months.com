---
title: Users API
description: User management API endpoints
order: 1
---

# Users API

API endpoints for managing user information.

## List Users

```http
GET /api/users
```

### Response Example

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

## Create User

```http
POST /api/users
```

### Request Body

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "secure_password"
}
```

## Update User

```http
PUT /api/users/:id
```

## Delete User

```http
DELETE /api/users/:id
```
