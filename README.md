# Five Percent Safety Hub

Daily learning for safety professionals at a Ghanaian surface mine. This foundation provides staff ID and PIN authentication, people administration, and protected learning-record tables. The hub includes a streaming AI tutor. The original artifact and lesson data remain in `data/`.

## Setting it up

The database sets itself up. Every build runs `scripts/migrate.mjs`, applying new SQL files in `supabase/migrations/` once each and creating the first administrator when configured. Migration failures stop the build. Without `DATABASE_URL`, database setup is skipped.

1. Create a Supabase project (the reference app uses West EU/London) and save the database password.
2. Under Authentication → Sign In / Providers → Email, turn off **Allow new users to sign up**. There is no public signup page; only administrators create accounts.
3. Copy the Project URL, `anon` key and secret `service_role` key from Project Settings → API Keys → Legacy API keys.
4. Under Connect → **Session pooler**, copy the connection string and fill in the database password. Use this for `DATABASE_URL`.
5. Create a private GitHub repository and push this project to it.
6. Import the repository into Vercel as a Next.js project. Add the environment variables below before deploying.

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret service role key; server only |
| `DATABASE_URL` | Secret Session pooler URL |
| `STAFF_EMAIL_DOMAIN` | `staff.safetyhub.local` (default); keep stable after creating accounts |
| `INITIAL_ADMIN` | `STAFFID\|Full Name\|PIN\|email`; used only when there are no admins |
| `ANTHROPIC_API_KEY` | Optional; enables the tutor |
| `TUTOR_DAILY_LIMIT` | Tutor requests per user per day; default `40` |

7. Deploy and check the build log for migrations and the first administrator creation. Use a private 6–12 digit PIN without all-identical digits or ascending/descending runs. **Remove `INITIAL_ADMIN` from Vercel after successful bootstrap.** Its optional email is stored as private contact information, not the login address.
8. Sign in with that staff ID and PIN, then choose your own PIN. Open Admin to add people individually or paste `STAFFID, Full Name, PIN` per line (up to 200). Bulk accounts start as members. Deliver initial PINs privately; users must replace them at first sign-in. Resetting a PIN forces another change.

## Local development

Install dependencies with `npm install` when ready. Copy `.env.example` to `.env.local` and fill in the keys. Then run `npm run dev`.

- `npm run build`: migrate, then build Next.js.
- `npm start`: run the production build.
- `npm run migrate`: apply migrations and optional bootstrap.
- `npm run test:db`: run the real SQL migrations in PGlite with a stub Supabase auth schema, testing permissions and constraints.

The standalone migration command reads process environment variables, like the reference app. Export the values from `.env.local` in your shell before running it or a local production build; Next.js loads `.env.local` itself for development. Vercel supplies environment variables to the build automatically. Never commit secrets.

## Access rules

Staff IDs are case-insensitive and use letters, numbers, dots, underscores or hyphens. They become hidden email addresses on `STAFF_EMAIL_DOMAIN`; PINs are Supabase passwords. Login uses staff ID only. Cookie sessions are refreshed by middleware; server guards also require an active profile and enforce initial PIN changes.

Active signed-in people can read everyone's progress, assignments and profile names for the future team view. They can create, update and delete only their own learning records. Profile contact emails are private. Profiles can only be changed with the server service role after an admin guard; even admins cannot write profiles directly through the browser API. Deactivation blocks existing sessions through RLS immediately and bans password sign-in. Admins cannot deactivate themselves or change their own role.

Members learn; owners and admins can update the singleton `hub_settings` row through the authenticated API. Only admins access `/admin` and manage people. SQL helper functions use a fixed search path. Updated timestamps and the settings editor ID are recorded by database triggers. Assignments allow 1,200 characters; team notes allow 200.

The tutor uses Claude Opus 5.5 with automatic refusal fallback. Without an Anthropic API key, the hub shows the existing tutor unavailable message.
