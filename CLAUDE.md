# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (localhost:3000)
npm run build      # production build
npm run lint       # ESLint via next lint
npx prisma studio  # open DB GUI
npx prisma migrate dev --name <name>  # create and apply a migration
npx prisma generate                   # regenerate Prisma client after schema change
```

No test suite exists yet.

## Architecture

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Prisma 7 + Neon (serverless PostgreSQL) · Nodemailer

### Two separate runtimes — this is critical

| File | Runtime | Why |
|---|---|---|
| `src/lib/auth.ts` | Node.js | Uses `node:crypto` — for Route Handlers and Server Components only |
| `src/lib/auth-edge.ts` | Edge | Uses `crypto.subtle` (Web Crypto) — for `middleware.ts` only |

Never import `auth.ts` from `middleware.ts` — it will crash at runtime.

### Page structure

`src/app/page.tsx` assembles all landing-page sections in order:
`Hero → About → TargetAudience → Services → Payment → FAQ → Contact`

FAQ questions are **DB-driven** — managed via the admin panel's שאלות נפוצות tab (`/admin`). The file `src/components/sections/FAQ/faq-data.ts` still exists but is not used by the live FAQ section. `src/lib/faq.ts` fetches items from the `FaqItem` table ordered by `order` column.

Payment pricing lives in `src/components/sections/Payment/plans.ts` (`PLANS` array) — edit here to change prices or add plans.

`src/components/sections/NutritionCalculator.tsx` exists but is not yet wired into the page.

Navigation links live in `src/components/ui/NavLink.tsx` (`NAV_LINKS` array) — update this whenever a new section with an `id` is added.

### Scroll reveal system

Any element with `data-reveal` starts invisible and fades in when it enters the viewport. `ScrollAnimations.tsx` drives this via `IntersectionObserver`. Attributes:

- `data-delay="120"` — ms delay before reveal
- `data-from="left|right|scale"` — directional variant
- `data-stagger` — staggers up to 6 direct children automatically

Wrap new section content in `<div data-reveal>` to participate.

Hero section uses separate CSS-only keyframe animations (`hero-anim-badge`, `hero-anim-title`, `hero-anim-text`, `hero-anim-cta`, `hero-anim-social`, `hero-anim-stats`, `hero-anim-image`) that fire on page load without IntersectionObserver.

### Bilingual system (Arabic / Hebrew)

The site supports two languages via `src/contexts/LanguageContext.tsx`:

- `Lang = "ar" | "he"` — default is Arabic (`"ar"`), persisted in `localStorage` as `"language"`
- All UI strings live in `src/lib/translations.ts` — add new strings to **both** language keys in the `translations` object
- In client components: `const t = useT()` (from `@/contexts/LanguageContext`) then use `t.section.key`
- `LanguageProvider` wraps the app in `layout.tsx`; `LanguageToggle` in the navbar switches languages
- Both Arabic and Hebrew are RTL, so `dir="rtl"` on `<html>` stays fixed — no direction flip needed

### Design system conventions

- **Primary color `rose-*`** is actually **green** (`rose-500 = #4E8B6E`). This is intentional — the Tailwind config overrides the default rose palette.
- Font: Rubik (Google Fonts, Hebrew + Latin subsets) via `--font-rubik` CSS variable.
- Dark mode: class-based via `next-themes` (`ThemeProvider` in `layout.tsx`). All dark styles use Tailwind `dark:` variants. Do not use `!important` overrides — they break dark variants.
- Layout: `section-padding` + `section-container` (defined in `globals.css` `@layer components`) — use these on every new section.
- CSS utility classes in `globals.css`: `card-base`, `card-hover`, `btn-primary`, `btn-outline`, `section-title`, `section-subtitle`, `form-input`, `form-label`.
- Primary button: `btn-primary` class (gradient `from-rose-500 to-rose-400`, white text, rounded-full).
- The entire site is **RTL Hebrew** (`dir="rtl"` on `<html>`). Use `dir="ltr"` only on elements that must render left-to-right (e.g., numeric gauges, fill bars).

### Admin panel

Route: `/admin` (protected by `middleware.ts`). Credentials come from `ADMIN_USERNAME` / `ADMIN_PASSWORD` env vars. Session is an httpOnly cookie (`admin_session`) containing a SHA-256 token derived from username + `SESSION_SECRET`.

Three tabs exist: **פניות** (contact submissions), **שאלות נפוצות** (FAQ CRUD — full create/edit/delete/reorder via `FaqManager.tsx` → `POST|PATCH|DELETE /api/admin/faq`), and **ניהול מוצרים** (products — placeholder, not yet implemented). The `Client` model in `schema.prisma` is scaffolded for a future clients feature but has no UI yet.

### Contact flow

Form → `POST /api/contact` → validates → saves `ContactSubmission` to DB → sends email via Nodemailer (Gmail SMTP, best-effort — email failure does not fail the request) → admin reads submissions at `/admin`.

Note: `src/app/actions/contact.ts` is a Server Action that only sends email (no DB write) — it is not used by the current `Contact.tsx` component which calls the API route directly.

### Environment variables required

```
DATABASE_URL        # Neon pooled connection string
DIRECT_URL          # Neon direct connection (for migrations only)
ADMIN_USERNAME
ADMIN_PASSWORD
SESSION_SECRET
CONTACT_TO_EMAIL    # recipient of contact form emails
SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS
```
