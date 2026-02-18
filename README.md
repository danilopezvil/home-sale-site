# Home Sale Site (Next.js App Router + Tailwind)

Starter structure for a home sale website with public listings and admin routes.

## Routes included

- `/` – landing page
- `/items` – listing grid
- `/items/[id]` – dynamic listing details page
- `/admin` – admin landing page
- `/admin/items` – admin items table placeholder
- `/admin/reservations` – admin reservations table placeholder

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (SQL schema included)

## 1) Install dependencies

```bash
npm install
```

## 2) Set environment variables

```bash
cp .env.example .env.local
```

Fill in your Supabase values in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 3) Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 4) Apply Supabase schema

Run SQL in `supabase/schema.sql` in the Supabase SQL editor (or via Supabase CLI) to create:

- `items`
- `item_images`
- `reservations`

with enums, foreign keys, and indexes.

## Notes

- Current UI pages are scaffold placeholders with mock data (`lib/sample-data.ts`).
- Replace mocks with Supabase queries when wiring backend access.
