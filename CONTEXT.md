# Perelai Landing — Context

> Landing-specific context for LLM agents.
> For the shared product context, see the root
> `/Users/valery/Sites/perelai-workspace/CONTEXT.md`.
> For the app context, see
> `/Users/valery/Sites/beauty-finance/CONTEXT.md`.

---

## 1. Repository overview

| Field | Value |
|-------|-------|
| **Path** | `/Users/valery/Sites/perelai-landing` |
| **Framework** | Next.js 16.2 (App Router) |
| **Language** | TypeScript 5, React 19 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss`), `tw-animate-css` |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Package manager** | pnpm |
| **Target domain** | `perelai.com` |

### Project structure

```
perelai-landing/
├── app/
│   ├── globals.css            # Tailwind v4 theme tokens (CSS custom properties)
│   ├── layout.tsx             # Root layout, <html lang="en">, metadata
│   └── page.tsx               # Single landing page route
├── components/
│   └── landing/
│       ├── landing-header.tsx  # Sticky nav: logo, anchor links, CTA
│       ├── landing-hero.tsx    # Hero banner + value prop + mockup image
│       ├── landing-features.tsx # Feature grid (One-Swipe Finances, etc.)
│       ├── landing-how-it-works.tsx  # Before/After comparison
│       ├── landing-cta.tsx     # Bottom CTA banner (#pricing anchor)
│       ├── landing-footer.tsx  # Footer + navigation
│       └── reveal.tsx          # Framer Motion scroll animation wrapper
└── public/
    ├── images/                 # Mockup graphics
    └── landing/                # Hero visual assets
```

### Scripts

```bash
pnpm dev          # next dev
pnpm build        # next build
pnpm start        # next start
pnpm lint         # eslint .
```

---

## 2. Current state

The landing is a **single-page marketing site** at an early stage.

### What exists

- One page (`/`) with: Header, Hero, Features, HowItWorks, CTA, Footer
- Scroll-reveal animations via Framer Motion
- Tailwind v4 design tokens (violet brand accent `#6a4cff`)
- Basic SEO metadata in `layout.tsx` and `page.tsx`
- In-page anchor navigation: `#features`, `#how`, `#pricing`

### Brand assets (added 2026-07-25)

The real Perelai mark — violet rounded tile with the white `P` monogram, copied from
`beauty-finance/apps/web/public/` so both products ship the same icon:

| File | Purpose |
|---|---|
| `app/favicon.ico` | 32×32 — App Router auto-detected favicon |
| `app/icon.png` | 192×192 — App Router auto-detected icon |
| `app/apple-icon.png` | 180×180 — App Router auto-detected Apple touch icon |
| `public/brand/perelai-icon-1024.png` | master, for OG images and future exports |
| `public/brand/perelai-icon-512.png`, `-192.png` | manifest / PWA sizes |
| `public/brand/perelai-mark-64.png` | header and footer logo mark |

> ✅ The v0 template icons (`public/icon.svg`, `public/apple-icon.png`,
> `public/icon-{light,dark}-32x32.png`) were deleted 2026-08-10. `public/apple-icon.png` was not
> merely unreferenced — a `public/` file shadows the App Router metadata route of the same name, so
> `/apple-icon.png` was serving the black `v0` tile and Google picked it up as the search-result
> favicon. Never re-add a `public/` file whose name collides with an `app/` metadata convention
> (`favicon.ico`, `icon.*`, `apple-icon.*`, `opengraph-image.*`, `twitter-image.*`).
> Header and footer still render a generic `Sparkles` lucide icon as the logo — LP1.2 replaces it
> with `perelai-mark-64.png`. An SVG master should be requested from design; none exists in either repo.

### What does NOT exist yet

- [ ] **Signup URL builder** (`buildAppSignupUrl`) — CTAs link to `/` instead of app registration
- [ ] **UTM parameter handling** — no extraction, storage, or forwarding
- [ ] **Niche-specific pages** (e.g., `/for-independent-colorists`)
- [ ] **Analytics integration** — no tracking events
- [ ] **i18n / localization** — hardcoded English only
- [ ] **Environment variables** — app URLs hardcoded or missing
- [ ] **Dedicated pricing page**
- [ ] **Legal pages** — `/terms` and `/privacy` (the app links to its own in-app placeholders today)
- [ ] **Sitemap, robots.txt, Open Graph images**
- [ ] **Tests**

---

## 3. Design tokens

Defined in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0f1724;
  --primary: #6a4cff;          /* Brand violet */
  --primary-foreground: #ffffff;
  --secondary: #f1f3f5;
  --secondary-foreground: #0f1724;
  --muted: #f1f3f5;
  --muted-foreground: #4b5563;
  --border: #f1f3f5;
}
```

**Font:** Inter (system-ui fallback)

**Gradient palette (used in components):**
- Primary buttons: `from-[#7d5bff] to-[#5a3bff]`
- Glow overlays: `rgba(106,76,255,0.22–0.25)` radial gradients

### Design principles for landing

- More emotional and expressive than the app
- Stronger dark/gradient effects
- Larger screenshots and mockups
- Marketing storytelling hierarchy
- Premium minimalism, not generic or cluttered

---

## 4. Landing responsibility boundaries

### Landing MUST

- Explain the product value proposition
- Position for the target niche
- Capture and forward acquisition context to the app
- Build correct signup URLs with niche, UTM, and landing path
- Present pricing transparently
- Handle SEO, trust, and social proof

### Landing must NOT

- Duplicate the app's business-template catalog
- Pass `templateId`, `profile`, or `bookingMode` as trusted values
- Create categories or services
- Decide booking mode
- Store onboarding state
- Perform company setup
- Treat niche as fully determining the user's identity

**Landing communicates marketing intent. The app makes the final decision.**

---

## 5. CTA strategy

### Current CTA buttons (need updating)

| Location | Current target | Should target |
|----------|---------------|---------------|
| Header "Get Started" | `/` | `buildAppSignupUrl(...)` |
| Header "Log in" | `/` | `https://perelai.app/login` |
| Hero primary | `/` | `buildAppSignupUrl(...)` |
| Hero secondary | `#how` | `#how` (correct) |
| Bottom CTA | `/` | `buildAppSignupUrl(...)` |

### Planned signup URL helper

```ts
// Should be created at: utils/urls.ts or lib/urls.ts

interface SignupUrlParams {
  niche?: string;
  source?: string;
  campaign?: string;
  landingPath?: string;
}

function buildAppSignupUrl(params: SignupUrlParams): string {
  const url = new URL('/register', APP_URL); // APP_URL from env or config
  // Map: niche → niche, source → utm_source, campaign → utm_campaign,
  //       landingPath → landing_path
  // Allowlist, escape, max-length, fallback
  return url.toString();
}
```

### CTA copy

**Current stage:**
```
Primary:   Get Started Now / Join the Founding Beta
Secondary: See how it works
```

**After self-service:**
```
Primary:   Start free trial
Secondary: View demo
```

---

## 6. Niche landing pages plan

The first niche page should be `/for-independent-colorists` with slug
`premium-colorist`, resolving to template `independent_colorist` in the app.

Each niche page must adapt — not just swap the headline:
- Pain points specific to the niche
- Screenshots showing relevant workflows
- Terminology matching the business type
- Use cases and testimonials
- CTA copy
- FAQ content

Do not create many pages before validating the first niche.

### Execution documents

The full plan lives in `.cursor/plans/`:

| Document | Purpose |
|---|---|
| [`00_architecture_review_20260725.md`](.cursor/plans/00_architecture_review_20260725.md) | Landing ↔ app ↔ core review, defect list, cross-repo follow-ups |
| [`niche_landing_i18n_product_relaunch_20260725.plan.md`](.cursor/plans/niche_landing_i18n_product_relaunch_20260725.plan.md) | Phases LP0–LP12 with gates (APPOINTMENT waves) |
| [`legal_pages_and_cross_domain_handoff_20260725.md`](.cursor/plans/legal_pages_and_cross_domain_handoff_20260725.md) | `/terms` + `/privacy` on the landing and the app's `AuthLegalLinks` handoff |
| [`wave3_request_order_rental_niches_20260725.md`](.cursor/plans/wave3_request_order_rental_niches_20260725.md) | Non-appointment niches — execute **after** the APPOINTMENT waves |
| [`reference/niche-catalog.md`](.cursor/plans/reference/niche-catalog.md) | Code-verified slug ↔ template ↔ mode ↔ wave matrix |
| [`reference/messaging-and-claims.md`](.cursor/plans/reference/messaging-and-claims.md) | Allowed claims, banned claims, copy rails |
| [`reference/llm-prompts.md`](.cursor/plans/reference/llm-prompts.md) | Copy/paste prompts per phase |

---

## 7. SEO status

### Currently present

- `<title>` and `<meta name="description">` in page metadata
- Favicons and app icons

### Missing (to implement)

- `sitemap.ts` / `sitemap.xml`
- `robots.ts` / `robots.txt`
- Open Graph and Twitter Card meta tags with images
- JSON-LD structured data
- Canonical URLs
- Per-page unique metadata (when niche pages are added)

---

## 8. Analytics plan (not yet implemented)

### Landing events to implement

```
landing_viewed           — page view with path
landing_cta_clicked      — CTA click with niche, campaign, destination
pricing_viewed           — scroll to / click on pricing section
signup_started           — navigation to app registration
```

### Properties to attach

```ts
{
  niche?: string;
  source?: string;
  campaign?: string;
  landingPath?: string;
}
```

### Privacy rules

Never send client PII. The landing doesn't handle user data, but analytics
implementation must not capture form inputs, URL fragments with sensitive data,
or any identifying information beyond marketing parameters.

---

## 9. Messaging guidelines

### Homepage hero

> **Your clients, bookings and cash flow — finally in one place.**

Sub-headline:
> Perelai turns appointments and customer requests into an actionable Inbox,
> clear client history and a reliable view of what was booked, completed and paid.

### Product blocks

1. Connect or build your schedule
2. Act from one Inbox
3. Keep every client's history together
4. Separate completed work from received payment
5. Understand revenue without spreadsheets

### Do NOT use as main hero

- "All-in-one business platform"
- "AI-powered ERP"
- "Personal CFO for every business"
- "Full accounting"
- "Replace every tool"
- "HIPAA-ready"

### Current metadata issue

The current title uses "personal CFO" which is aspirational. Consider revising to
match actual product capabilities:

```
Current:  "Perelai — Booking & personal CFO for service pros"
Better:   "Perelai — Clients, Bookings & Cash Flow for Independent Professionals"
```

---

## 10. Environment configuration (to implement)

```env
# Suggested .env.local structure
NEXT_PUBLIC_APP_URL=https://perelai.app
NEXT_PUBLIC_BOOKING_URL=https://book.perelai.app
NEXT_PUBLIC_LANDING_URL=https://perelai.com

# Analytics (when implemented)
# NEXT_PUBLIC_ANALYTICS_ID=...
```

---

## 11. Relationship to the app

### Template catalog awareness

Landing may reference niche slugs for URL building but must **not** hand-maintain its
own copy of the template catalog. The canonical catalog lives in:

```
beauty-finance/libs/core/src/templates/business-templates-catalog.ts
```

Valid slugs for the first niche (`independent_colorist`), verified 2026-07-25:
`premium-colorist`, `independent-colorist`, `hair-colorist`

> ⚠️ **`colorist` is NOT a valid slug.** It was listed here previously and does not exist in the
> catalog — `resolveNicheOnboardingContext()` returns `null` for it, which silently drops the
> template recommendation and the acquisition attribution.

The full verified catalog (34 templates, 74 slugs, waves, booking modes, `requiresStaff` and
`regulated` flags) lives in
[`.cursor/plans/reference/niche-catalog.md`](.cursor/plans/reference/niche-catalog.md).
Phase LP2 of the relaunch plan replaces that hand-written mirror with
`data/niche-catalog.generated.json` plus a `pnpm verify:niches` guard that fails the build on drift.

### Pricing alignment

Landing pricing must match the app's billing plan. Current hypothesis:

| Plan | Monthly | Yearly |
|------|---------|--------|
| Founding Solo | $19/mo | — |
| Solo | $29/mo | — |
| Team | $49/mo | — |

> **Note:** SaaS billing is not yet implemented in the app. Landing pricing
> display must stay synchronized when it is.

### Cross-domain handoff

```
perelai.com (landing)
  → perelai.app/register?niche=...&utm_source=...&utm_campaign=...&landing_path=...
```

The app extracts these parameters during registration and seeds the workspace.
