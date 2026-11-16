'use client';
import { createBrowserClient } from '@supabase/ssr';

let client: ReturnType<typeof createBrowserClient> | null = null;

export function supabaseBrowser() {
  if (!client) {
    client = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  }
  return client;
}

// Database errors are written as "CODE: message". Show people the message.
export function friendlyError(e: unknown): { code: string; message: string } {
  const raw = (e as { message?: string })?.message ?? String(e);
  const m = raw.match(/^([A-Z_]+): (.*)$/s);
  if (m) return { code: m[1], message: m[2] };
  if (/row-level security/i.test(raw)) return { code: 'FORBIDDEN', message: 'You do not have permission to do that.' };
  if (/Failed to fetch|NetworkError/i.test(raw)) return { code: 'NETWORK', message: 'No connection. Check your signal and try again.' };
  if (/other_needs_note/.test(raw)) return { code: 'INCOMPLETE', message: 'Write a short note when choosing "Other".' };
  return { code: 'ERROR', message: raw };
}
