---
title: API Overview
description: REST API usage guide
order: 1
---

# API Overview

This document explains how to use the application's REST API.

## Base URL

```
https://api.example.com/v1
```

## Authentication

All API requests require an authentication token:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.example.com/v1/users
```

## Response Format

All responses are in JSON format:

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

## Error Codes

- `400` - Bad Request
- `401` - Authentication Failed
- `403` - Forbidden
- `404` - Resource Not Found
- `500` - Server Error
