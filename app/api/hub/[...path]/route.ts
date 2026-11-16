import { NextResponse } from 'next/server';
import { body, HttpError, hubGuard } from '@/lib/hub-guard';
export const dynamic = 'force-dynamic';
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const lesson = /^w\d+-l\d+$/;
const object = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
const stamp = (v: string) => new Date(v).getTime();
const progress = (r: Record<string, any>) => ({ done: r.done, quiz: r.quiz, days: r.days, review: r.review, updatedAt: stamp(r.updated_at) });
function check(ok: unknown) { if (!ok) throw new HttpError(400, 'Invalid input'); }
async function handle(request: Request, { params }: { params: { path: string[] } }) {
  try {
    const { db, user, profile } = await hubGuard();
    const path = params.path.join('/'), method = request.method;
    const result = (value: unknown) => NextResponse.json(value, { headers: { 'Cache-Control': 'no-store' } });
    const fail = (error: { code?: string } | null) => { if (error) throw new HttpError(error.code === '42501' ? 403 : 500, 'Database request failed'); };
    if (path === 'me' && method === 'GET') return result({ tutor: Boolean(process.env.ANTHROPIC_API_KEY), id: user.id, name: profile.full_name, isOwner: ['owner', 'admin'].includes(profile.role) });
    if (path === 'profiles' && method === 'POST') {
      const b = await body(request); check(Array.isArray(b.ids) && b.ids.length <= 1000 && b.ids.every(id => typeof id === 'string' && uuid.test(id)));
      if (!(b.ids as string[]).length) return result({});
      const { data, error } = await db.from('profiles').select('id,full_name').eq('active', true).in('id', b.ids as string[]); fail(error);
      return result(Object.fromEntries((data || []).map(p => [p.id, { name: p.full_name, isMe: p.id === user.id, avatarUrl: null }])));
    }
    if (path === 'members' && method === 'GET') {
      const { data, error } = await db.from('progress').select('user_id,done,quiz,days,review,updated_at,profiles!inner(active)').eq('profiles.active', true).order('user_id'); fail(error);
      return result((data || []).map(r => ({ id: r.user_id, ...progress(r) })));
    }
    const parts = params.path;
    const team = path === 'doc/hub/team';
    const member = parts[0] === 'doc' && parts[1] === 'members' && uuid.test(parts[2] || '');
    if (member && parts.length === 4 && parts[3] === 'work' && method === 'GET') {
      const { data, error } = await db.from('assignments').select('lesson_id,text,updated_at').eq('user_id', parts[2]); fail(error);
      return result({ items: Object.fromEntries((data || []).map(r => [r.lesson_id, { text: r.text, ts: stamp(r.updated_at) }])) });
    }
    const work = member && parts.length === 5 && parts[3] === 'work' && lesson.test(parts[4]);
    if (!team && !(member && parts.length === 3) && !work) throw new HttpError(404, 'Unknown document');
    const table = team ? 'hub_settings' : work ? 'assignments' : 'progress';
    const query = () => { let q = db.from(table).select('*'); q = team ? q.eq('id', 1) : q.eq('user_id', parts[2]); return work ? q.eq('lesson_id', parts[4]) : q; };
    if (method === 'GET') {
      const { data, error } = await query().maybeSingle(); fail(error);
      return result({ exists: !!data, data: !data ? null : team ? { lesson: data.team_lesson, note: data.team_note, setAt: stamp(data.updated_at) } : work ? { text: data.text, ts: stamp(data.updated_at) } : progress(data) });
    }
    if (method !== 'POST') throw new HttpError(405, 'Method not allowed');
    const b = await body(request);
    if (team) {
      check((b.lesson === null || (typeof b.lesson === 'string' && lesson.test(b.lesson))) && typeof b.note === 'string' && b.note.length <= 200);
      if (!['owner', 'admin'].includes(profile.role)) throw new HttpError(403, 'Forbidden');
      const { error } = await db.from('hub_settings').update({ team_lesson: b.lesson, team_note: b.note }).eq('id', 1); fail(error);
    } else if (work) {
      check(typeof b.text === 'string' && b.text.length <= 1200);
      const { error } = await db.from('assignments').upsert({ user_id: parts[2], lesson_id: parts[4], text: b.text }, { onConflict: 'user_id,lesson_id' }); fail(error);
    } else {
      check(object(b.done) && Object.keys(b.done).every(k => lesson.test(k)) && Object.values(b.done).every(v => typeof v === 'number' && Number.isFinite(v)));
      check(object(b.quiz) && Object.keys(b.quiz).every(k => lesson.test(k)) && Object.values(b.quiz).every(v => Number.isInteger(v) && Number(v) >= 0));
      check(Array.isArray(b.days) && b.days.length <= 120 && b.days.every(d => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d)));
      check(object(b.review) && Object.entries(b.review).every(([k,v]) => /^w\d+-l\d+:\d+$/.test(k) && object(v) && Number.isInteger(v.box) && Number(v.box) >= 0 && Number(v.box) <= 4 && typeof v.due === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v.due) && typeof v.t === 'number' && Number.isFinite(v.t)));
      const { error } = await db.from('progress').upsert({ user_id: parts[2], done: b.done, quiz: b.quiz, days: b.days, review: b.review }, { onConflict: 'user_id' }); fail(error);
    }
    return result({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof HttpError ? error.message : 'Request failed' }, { status: error instanceof HttpError ? error.status : 500, headers: { 'Cache-Control': 'no-store' } });
  }
}
export { handle as GET, handle as POST };
