import { createClient } from '@/lib/supabase/server';
const object = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
export class HttpError extends Error { constructor(public status: number, message: string) { super(message); } }
export async function body(request: Request) {
  if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/json')) throw new HttpError(415, 'JSON required');
  if (Number(request.headers.get('content-length')) > 65536) throw new HttpError(413, 'Body too large');
  const reader = request.body?.getReader();
  if (!reader) throw new HttpError(400, 'JSON body required');
  const chunks: Uint8Array[] = []; let size = 0;
  while (true) {
    const { done, value } = await reader.read(); if (done) break;
    size += value.byteLength;
    if (size > 65536) { await reader.cancel(); throw new HttpError(413, 'Body too large'); }
    chunks.push(value);
  }
  let value: unknown;
  try { value = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { throw new HttpError(400, 'Invalid JSON'); }
  if (!object(value)) throw new HttpError(400, 'Object required');
  return value;
}
export async function hubGuard() {
    const db = createClient();
    const { data: { user } } = await db.auth.getUser();
    if (!user) throw new HttpError(401, 'Not signed in');
    const { data: profile } = await db.from('profiles').select('id,full_name,role,active,must_change_pin').eq('id', user.id).single();
    if (!profile?.active) throw new HttpError(403, 'Inactive member');
    if (profile.must_change_pin) throw new HttpError(403, 'Change your PIN first');
    return { db, user, profile };
}
