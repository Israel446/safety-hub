-- Personal learning records, team visibility and service-role profile management.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  staff_id text not null unique check (staff_id ~ '^[A-Z0-9._-]+$'),
  full_name text not null check (length(trim(full_name)) > 0),
  role text not null default 'member' check (role in ('member','owner','admin')),
  active boolean not null default true,
  must_change_pin boolean not null default true,
  email text,
  created_at timestamptz not null default now()
);
create table public.progress (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  done jsonb not null default '{}',
  quiz jsonb not null default '{}',
  days text[] not null default '{}',
  review jsonb not null default '{}',
  updated_at timestamptz not null default now()
);
create table public.assignments (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null,
  text text not null check (length(text) <= 1200),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);
create table public.hub_settings (
  id int primary key default 1 check (id = 1),
  team_lesson text,
  team_note text check (length(team_note) <= 200),
  updated_at timestamptz not null default now(),
  updated_by uuid references public.profiles(id)
);
insert into public.hub_settings (id) values (1);

create function public.is_active() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and active)
$$;
create function public.can_manage_hub() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and active and role in ('owner','admin'))
$$;
create function public.stamp_update() returns trigger
language plpgsql set search_path = public as $$
begin
  new.updated_at := now();
  if tg_table_name = 'hub_settings' then new.updated_by := auth.uid(); end if;
  return new;
end $$;
create trigger progress_updated before update on public.progress for each row execute function public.stamp_update();
create trigger assignments_updated before update on public.assignments for each row execute function public.stamp_update();
create trigger settings_updated before update on public.hub_settings for each row execute function public.stamp_update();
alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.assignments enable row level security;
alter table public.hub_settings enable row level security;
create policy profiles_read on public.profiles for select to authenticated using (public.is_active());
create policy progress_read on public.progress for select to authenticated using (public.is_active());
create policy assignments_read on public.assignments for select to authenticated using (public.is_active());
create policy settings_read on public.hub_settings for select to authenticated using (public.is_active());
create policy progress_insert on public.progress for insert to authenticated with check (public.is_active() and user_id = auth.uid());
create policy progress_update on public.progress for update to authenticated using (public.is_active() and user_id = auth.uid()) with check (public.is_active() and user_id = auth.uid());
create policy progress_delete on public.progress for delete to authenticated using (public.is_active() and user_id = auth.uid());
create policy assignments_insert on public.assignments for insert to authenticated with check (public.is_active() and user_id = auth.uid());
create policy assignments_update on public.assignments for update to authenticated using (public.is_active() and user_id = auth.uid()) with check (public.is_active() and user_id = auth.uid());
create policy assignments_delete on public.assignments for delete to authenticated using (public.is_active() and user_id = auth.uid());
-- The singleton is seeded by migrations; owners/admins update it in place.
create policy settings_update on public.hub_settings for update to authenticated using (public.can_manage_hub()) with check (public.can_manage_hub());
