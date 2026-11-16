-- Explicit API privileges; RLS remains the authority for row access.
revoke all on public.profiles, public.progress, public.assignments, public.hub_settings from anon, authenticated;
grant usage on schema public to authenticated, service_role;
-- Contact emails remain private to service-role administration.
grant select (id, staff_id, full_name, role, active, must_change_pin, created_at) on public.profiles to authenticated;
grant select, insert, update, delete on public.progress, public.assignments to authenticated;
grant select, update on public.hub_settings to authenticated;
grant all on public.profiles, public.progress, public.assignments, public.hub_settings to service_role;
revoke execute on function public.is_active(), public.can_manage_hub(), public.stamp_update() from public, anon;
grant execute on function public.is_active(), public.can_manage_hub() to authenticated, service_role;
