---
title: Deployment Guide
description: How to deploy your application to production
order: 1
---

# Deployment Guide

This document explains how to deploy your application to a production environment.

## Vercel Deployment

The simplest deployment method is using Vercel:

```bash
npm install -g vercel
vercel
```

## Docker Deployment

You can also deploy using Docker:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Environment Variables

Set the following environment variables before deployment:

- `NODE_ENV=production`
- `DATABASE_URL`
- `API_KEY`
