-- Five Percent Safety Hub: database setup.
-- Run this once in the Supabase SQL editor (paste the whole file, press Run).

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Member' check (char_length(display_name) between 1 and 60),
  org text not null default '' check (char_length(org) <= 80),
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.progress (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  done jsonb not null default '{}'::jsonb check (jsonb_typeof(done) = 'object' and pg_column_size(done) < 200000),
  quiz jsonb not null default '{}'::jsonb check (jsonb_typeof(quiz) = 'object' and pg_column_size(quiz) < 100000),
  days jsonb not null default '[]'::jsonb check (jsonb_typeof(days) = 'array' and pg_column_size(days) < 20000),
  reviews jsonb not null default '{}'::jsonb check (jsonb_typeof(reviews) = 'object' and pg_column_size(reviews) < 200000),
  updated_at timestamptz not null default now()
);

create table public.work (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null check (lesson_id ~ '^[a-z0-9-]{1,24}$'),
  body text not null check (char_length(body) between 1 and 1200),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);
create index work_lesson_idx on public.work (lesson_id, updated_at desc);

create table public.settings (
  key text primary key check (char_length(key) <= 40),
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- Every new account gets a profile row. Name and team come from the sign-up form or from Google.
create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, display_name, org) values (
    new.id,
    left(coalesce(nullif(trim(new.raw_user_meta_data->>'full_name'), ''), nullif(trim(new.raw_user_meta_data->>'name'), ''), 'Member'), 60),
    left(coalesce(trim(new.raw_user_meta_data->>'org'), ''), 80)
  );
  return new;
end $$;

create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

create function public.is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.profiles where id = (select auth.uid()) and is_admin);
$$;

-- Row-level security: signed-in members can read; each person writes only their own rows.
alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.work     enable row level security;
alter table public.settings enable row level security;

revoke all on public.profiles, public.progress, public.work, public.settings from anon;
revoke all on public.profiles, public.progress, public.work, public.settings from authenticated;

grant select on public.profiles to authenticated;
grant update (display_name, org) on public.profiles to authenticated;   -- is_admin can only be changed from the SQL editor
grant select, insert, update on public.progress to authenticated;
grant select, insert, update, delete on public.work to authenticated;
grant select, insert, update on public.settings to authenticated;

create policy "members read profiles" on public.profiles for select to authenticated using (true);
create policy "edit own profile" on public.profiles for update to authenticated
  using (id = (select auth.uid())) with check (id = (select auth.uid()));

create policy "members read progress" on public.progress for select to authenticated using (true);
create policy "add own progress" on public.progress for insert to authenticated with check (user_id = (select auth.uid()));
create policy "edit own progress" on public.progress for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "members read work" on public.work for select to authenticated using (true);
create policy "add own work" on public.work for insert to authenticated with check (user_id = (select auth.uid()));
create policy "edit own work" on public.work for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "delete own work" on public.work for delete to authenticated using (user_id = (select auth.uid()));

create policy "members read settings" on public.settings for select to authenticated using (true);
create policy "admins add settings" on public.settings for insert to authenticated with check ((select public.is_admin()));
create policy "admins edit settings" on public.settings for update to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
