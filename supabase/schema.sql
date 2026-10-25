-- Run once in Supabase > SQL editor. Tables are only written by the Vercel API routes
-- using the service role key, so RLS stays ON with no public policies.
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  platform text not null default 'android',
  source text,
  created_at timestamptz not null default now()
);
create unique index if not exists waitlist_email_platform on public.waitlist (lower(email), platform);

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  type text not null default 'idea',
  message text not null,
  email text,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;
alter table public.feedback enable row level security;
