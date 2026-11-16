create table public.tutor_usage (
  user_id uuid references public.profiles(id) on delete cascade,
  day date,
  count int not null default 0,
  primary key (user_id, day)
);
alter table public.tutor_usage enable row level security;
revoke all on public.tutor_usage from public, anon, authenticated;
-- SELECT is safe with RLS and no policies: no usage rows are exposed.
grant select on public.tutor_usage to authenticated;

create function public.tutor_take(p_limit int) returns boolean
language plpgsql security definer set search_path = public as $$
declare taken int;
begin
  if auth.uid() is null or not public.is_active() or p_limit is null or p_limit <= 0 then
    return false;
  end if;
  insert into public.tutor_usage (user_id, day, count)
    values (auth.uid(), current_date, 1)
    on conflict (user_id, day) do update
      set count = tutor_usage.count + 1
      where tutor_usage.count < p_limit
    returning count into taken;
  return taken is not null;
end $$;
revoke all on function public.tutor_take(int) from public, anon, authenticated;
grant execute on function public.tutor_take(int) to authenticated;
