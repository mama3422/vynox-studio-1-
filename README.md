# Vynox Studio

The official website for **Vynox Studio** — a digital development studio
specializing in FiveM systems, Discord bots and automation, custom software,
and web development.

Built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS.
Bilingual (Arabic default / English), fully responsive, and includes a
persistent visitor counter.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  api/visitor-count/route.ts   # persistent visitor counter endpoint
  fonts/                       # self-hosted font files (next/font/local)
  layout.tsx                   # root layout, metadata, font loading
  page.tsx                     # assembles all sections
  globals.css
components/                    # Navbar, Hero, About, Services, WhyVynox,
                                # Stats, Contact, Footer, VisitorCounter,
                                # ParticleNetwork (hero background)
lib/
  translations.ts              # all Arabic + English copy
  language-context.tsx         # AR/EN + RTL/LTR state
  visitor-store.ts             # Supabase-backed counter logic
public/
  logo-mark.png                # brand mark (transparent)
  og-banner.png                # social preview image
  favicon.ico
```

## Replacing placeholder links

Real Discord and contact links are not guessed — they use clearly-marked
placeholders you should update before launch:

- `components/Contact.tsx` — the `LINKS` object at the top of the file
  (`discord`, `contact`, `request`).
- `components/Footer.tsx` — the `LINKS.discord` value.

## Visitor counter (Supabase setup)

The floating counter in the bottom corner is backed by a Postgres table in
Supabase so the number survives page refreshes and server restarts. Without
Supabase configured, it falls back to an in-memory count — fine for local
preview, but it will reset on every server restart / serverless cold start,
so set up Supabase before going to production.

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase SQL Editor, run:

   ```sql
   create table if not exists visitor_counter (
     id smallint primary key default 1,
     count bigint not null default 1284,
     constraint single_row check (id = 1)
   );

   insert into visitor_counter (id, count)
   values (1, 1284)
   on conflict (id) do nothing;

   create or replace function increment_visitor_count()
   returns bigint
   language plpgsql
   security definer
   as $$
   declare
     new_count bigint;
   begin
     update visitor_counter
       set count = count + 1
       where id = 1
       returning count into new_count;
     return new_count;
   end;
   $$;

   create or replace function get_visitor_count()
   returns bigint
   language sql
   security definer
   as $$
     select count from visitor_counter where id = 1;
   $$;
   ```

3. In your Supabase project settings, copy the **Project URL** and the
   **service_role** key (Settings → API).
4. Set them as environment variables (locally in `.env.local`, and in your
   Vercel project's Environment Variables for production):

   ```
   SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

The `service_role` key is only ever used server-side (inside the API route),
so it's never exposed to the browser.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the two `SUPABASE_*` environment variables from above in the Vercel
   project settings.
4. Deploy — no other configuration is needed.

## Notes

- Fonts (Space Grotesk, Inter, Cairo, IBM Plex Sans Arabic) are self-hosted
  under `app/fonts` via `next/font/local` — no external font requests at
  runtime. See `app/fonts/NOTICE.md` for licensing.
- The stats section intentionally avoids fabricated numbers, per the brand's
  request — it communicates working principles, not invented metrics.
