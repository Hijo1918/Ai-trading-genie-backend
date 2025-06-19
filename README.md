# AI Trading Genie Backend

This is a NestJS backend for an AI-powered trading and admin platform.

## Features

- Modular NestJS backend with authentication, trading, admin, payments, and analytics modules
- REST API with Swagger UI (`/api`)
- Full admin CRUD panel integration support (React Admin)
- Database (TypeORM) ready with trade/user/payment entities
- Admin login and role guard protection
- Seed script for creating the first admin user

## Quick Start

### 1. Install dependencies

```sh
npm install
```

### 2. Set up environment

Copy `.env.example` to `.env` and set your database and JWT environment variables.

### 3. Run DB migrations (if using migrations)

```sh
npm run typeorm:migration:run
```

### 4. Seed the first admin user

```sh
npx ts-node src/seeds/create-admin.seed.ts
```

### 5. Start backend in development mode

```sh
npm run start:dev
```

Visit [http://localhost:3000/api](http://localhost:3000/api) for Swagger API docs.

---

## Scripts

- `npm run start:dev` — Start backend in development mode (auto-reloads on code changes)
- `npm run start` — Start backend in production mode
- `npx ts-node src/seeds/create-admin.seed.ts` — Seed first admin user

---

## Frontend

See the frontend folder or use [React Admin](https://marmelab.com/react-admin/) as demonstrated in the documentation.

---
