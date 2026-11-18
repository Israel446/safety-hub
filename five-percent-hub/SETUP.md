# Five Percent Safety Hub: setup guide

This is the same process as your other apps (Supabase for the database and sign-in, Vercel for hosting), but simpler. There is no build step, no SMS provider and no payments. The whole app is a folder of plain files.

Plan about 30 to 40 minutes. Google sign-in is the only fiddly part and can be added later.

## What is in this folder

| File | What it is |
| --- | --- |
| `index.html` | The app |
| `config.js` | The only file you edit: your two Supabase values |
| `schema.sql` | Database tables and access rules, run once |
| `lessons.js`, `lessons-b.js` | Weeks 1 and 2 (weekdays, weekends) |
| `lessons-c.js`, `lessons-d.js` | Weeks 3 and 4, weeks 5 and 6 |
| `lessons-e.js`, `lessons-f.js` | Weeks 7 and 8, weeks 9 and 10 |
| `lessons-g.js`, `lessons-h.js` | Weeks 11 and 12, weeks 13 and 14 |
| `teaching.js`, `teaching-b.js`, `teaching-c.js`, `teaching-d.js` | Opening questions, slide points and side stories for the teaching edition |
| `systems.js` | The visual system (diagram) for each lesson |
| `curriculum.js` | The year map and upcoming titles |
| `vendor/` | The Supabase browser library (version 2.45.4) |
| `fonts/` | The two typefaces, bundled so the hub loads fast on mobile data (SIL Open Font License) |
| `upgrade-reviews.sql` | Only for a database set up before November 2026: adds review syncing |

## 1. Create the Supabase project

1. Go to supabase.com, sign in, and choose **New project**. Name it `five-percent-hub`. Pick the region closest to Ghana that is offered. Save the database password somewhere safe.
2. When it is ready, open **SQL Editor**, choose **New query**, paste the whole of `schema.sql`, and press **Run**. It should say success with no rows returned.

## 2. Put your project values in config.js

1. In Supabase open **Project Settings**, then **API** (on newer dashboards, **API Keys**).
2. Copy the **Project URL** into `supabaseUrl`.
3. Copy the **anon** key (also labelled **publishable**) into `supabaseKey`.

Do not use the `service_role` or `secret` key. That one bypasses every access rule and must never be in a website.

## 3. Put it online with Vercel

Pick whichever you used before:

- **GitHub:** create a new repository, upload everything in this folder, then in Vercel choose **Add New > Project**, import the repository, leave every setting on its default (framework: Other, no build command), and deploy.
- **Vercel CLI:** in this folder run `vercel`, then `vercel --prod`.

You will get an address such as `https://five-percent-hub.vercel.app`.

## 4. Tell Supabase where the site lives

In Supabase open **Authentication**, then **URL Configuration**:

- **Site URL:** your Vercel address.
- **Redirect URLs:** add the same address.

Without this, confirmation emails, password resets and Google sign-in send people to the wrong place.

## 5. Email sign-in

Email and password sign-in is on by default. Two things to know:

- New members must click a confirmation link sent by email before they can sign in.
- Supabase's built-in email sender is meant for testing and only allows a small number of emails per hour. Before you invite the whole department, either connect your own email service under **Authentication > Emails > SMTP Settings**, or turn off **Confirm email** under **Authentication > Sign In / Providers > Email** so people can sign in immediately. Turning it off means email addresses are not verified.

## 6. Google sign-in (optional, can be done later)

1. Go to console.cloud.google.com and create a project.
2. Open **APIs & Services > OAuth consent screen**. Choose External, fill in the app name and your email, and publish it.
3. Open **Credentials > Create credentials > OAuth client ID**. Type: Web application.
   - **Authorised JavaScript origins:** your Vercel address.
   - **Authorised redirect URIs:** the callback URL Supabase shows you in the next step. It looks like `https://YOUR-PROJECT.supabase.co/auth/v1/callback`.
4. In Supabase open **Authentication > Sign In / Providers > Google**, switch it on, and paste the Client ID and Client secret from Google.

Until this is done the "Continue with Google" button will show an error. Email sign-in works without it.

## 7. Make yourself the admin

Create your own account on the live site first. Then in the Supabase SQL Editor run this, with your name as you typed it at sign-up:

```sql
update public.profiles set is_admin = true where display_name = 'Your Name Here';
```

Check it changed exactly one row. Sign out and in again. As admin you get a **Set as next team session** button on every lesson. Only people whose company or team name matches yours see that session.

## How the pieces behave

- **Without an account** anyone can read every lesson and use the teaching edition. Progress stays on their device.
- **With an account** progress follows the person across devices, and they appear in the Team tab.
- **Company or team name** groups people. Everyone who types the same name (capital letters do not matter) sees each other under Team by default, with an **Everyone** button for the whole hub. Agree one exact spelling with your department, for example `GMC Safety`.
- **What other members can see:** name, team name, lessons completed, streak, and any assignment text the person saves. Email addresses are never shown.
- **Printing:** every lesson and teaching edition has a **Print or save as PDF** button.

## Updating from an earlier version

If you already deployed the hub and ran `schema.sql` before the review queue was added, run `upgrade-reviews.sql` once in the Supabase SQL Editor. Until you do, reviews still work but stay on each person's device. Then upload every file from the new zip except `config.js`.

## Adding new lessons

Each new batch arrives as new lesson and teaching files, an updated `curriculum.js`, and an `index.html` that loads them. Add or replace those files in the repository and Vercel redeploys. Keep your own `config.js`; never overwrite it with the empty one from a new zip. Nothing in the database changes and nobody loses progress.

## What has and has not been tested

- Tested: the pages, quiz, completion, assignment saving and teaching edition in a phone-sized browser, with accounts switched off.
- Tested: `schema.sql` on a local PostgreSQL 16 with stand-in sign-in tables. A member could not write another member's progress, rename another member, make themselves admin or set the team lesson; an admin could; a signed-out visitor could read nothing.
- Not yet tested: sign-up, sign-in, Google, password reset and syncing against a real Supabase project. That needs your project. Run through the checklist below after step 4.

## First-run checklist

- [ ] Create an account with email; confirm by the emailed link; you land back on the hub signed in
- [ ] Your name shows at the top right
- [ ] Complete a lesson on your phone; sign in on a computer; it shows as complete there too
- [ ] Save an assignment; a second account can see it under Team once that lesson is the team session
- [ ] Forgot password sends an email and the link lets you choose a new password
- [ ] A second account cannot see the **Set as next team session** button
- [ ] Google sign-in works (after step 6)
