-- Five Percent Safety Hub: upgrade for the review queue (November 2026).
-- Only needed if you already ran schema.sql before this update. Run once in the Supabase SQL editor.
-- Safe to run twice. Until it is run, reviews still work but stay on each device.
alter table public.progress
  add column if not exists reviews jsonb not null default '{}'::jsonb
  check (jsonb_typeof(reviews) = 'object' and pg_column_size(reviews) < 200000);
