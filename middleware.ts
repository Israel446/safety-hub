import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Keeps the login fresh on every request and sends signed-out people to /login.
export async function middleware(request: NextRequest) {
  // Without the Supabase settings nothing can work; say which ones are missing instead of crashing.
  const missing = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'].filter(name => !process.env[name]);
  if (missing.length) {
    return new NextResponse(
      `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Setup needed</title>` +
      `<body style="font-family:system-ui,sans-serif;max-width:560px;margin:48px auto;padding:0 16px;line-height:1.5">` +
      `<h1 style="font-size:1.4rem">The hub is not connected to its database yet</h1>` +
      `<p>Add these environment variables in Vercel (Project → Settings → Environment Variables), then redeploy:</p>` +
      `<ul>${missing.map(name => `<li><code>${name}</code></li>`).join('')}</ul>` +
      `<p>Variables starting with NEXT_PUBLIC_ only take effect after a new deployment.</p></body>`,
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } },
    );
  }
  let response = NextResponse.next({ request });
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (list) => {
        list.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        list.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });
  const { data: { user } } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;
  const isLogin = path === '/login';
  if (!user && path.startsWith('/api/hub/')) {
    const unauthorized = NextResponse.json({ error: 'Not signed in' }, { status: 401 });
    response.cookies.getAll().forEach(cookie => unauthorized.cookies.set(cookie));
    return unauthorized;
  }
  if (!user && !isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', request.nextUrl.pathname);
    const redirected = NextResponse.redirect(url);
    response.cookies.getAll().forEach(cookie => redirected.cookies.set(cookie));
    return redirected;
  }
  if (user && isLogin && request.nextUrl.searchParams.get('error') !== 'inactive') {
    const url = request.nextUrl.clone(); url.pathname = '/'; url.search = '';
    const redirected = NextResponse.redirect(url);
    response.cookies.getAll().forEach(cookie => redirected.cookies.set(cookie));
    return redirected;
  }
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.svg|sw.js|api/push|manifest.webmanifest|offline.html|hub/.*\\.js$|data/.*\\.js$|.*\\.(?:png|svg|jpg|webp)$).*)'],
};
