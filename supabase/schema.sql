-- Enable extension for UUID generation
create extension if not exists "pgcrypto";

-- Enums
create type item_status as enum ('draft', 'available', 'reserved', 'sold', 'archived');
create type reservation_status as enum ('pending', 'confirmed', 'cancelled', 'expired');

-- Items (properties for sale)
create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  price numeric(12, 2) not null check (price >= 0),
  city text not null,
  state text,
  bedrooms smallint not null check (bedrooms >= 0),
  bathrooms numeric(3,1) not null check (bathrooms >= 0),
  area_sqft integer not null check (area_sqft >= 0),
  status item_status not null default 'draft',
  listed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Multiple images per item
create table if not exists public.item_images (
  id uuid primary key default gen_random_uuid(),
  item_id uuid not null references public.items(id) on delete cascade,
  image_url text not null,
  alt_text text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique (item_id, sort_order)
);

-- Reservations made by prospective buyers
create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  item_id uuid not null references public.items(id) on delete restrict,
  buyer_name text not null,
  buyer_email text not null,
  buyer_phone text,
  message text,
  status reservation_status not null default 'pending',
  reserved_until timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes
create index if not exists idx_items_status on public.items(status);
create index if not exists idx_items_city on public.items(city);
create index if not exists idx_items_listed_at on public.items(listed_at desc);

create index if not exists idx_item_images_item_id on public.item_images(item_id);
create index if not exists idx_item_images_sort_order on public.item_images(item_id, sort_order);

create index if not exists idx_reservations_item_id on public.reservations(item_id);
create index if not exists idx_reservations_status on public.reservations(status);
create index if not exists idx_reservations_created_at on public.reservations(created_at desc);

-- Keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_items_updated_at on public.items;
create trigger trg_items_updated_at
before update on public.items
for each row
execute function public.set_updated_at();

drop trigger if exists trg_reservations_updated_at on public.reservations;
create trigger trg_reservations_updated_at
before update on public.reservations
for each row
execute function public.set_updated_at();
