import { NextResponse, type NextRequest } from 'next/server';
// TEMPORARY diagnostic: does any middleware run on this Vercel project?
export function middleware(request: NextRequest) {
  const r = NextResponse.next({ request });
  r.headers.set('x-hub-diag', 'minimal-ok;url=' + (process.env.NEXT_PUBLIC_SUPABASE_URL ? 'set' : 'missing') + ';key=' + (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'set' : 'missing'));
  return r;
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico|sw.js|manifest.webmanifest|offline.html|hub/.*\\.js$|data/.*\\.js$|.*\\.(?:png|svg|jpg|webp)$).*)'] };
