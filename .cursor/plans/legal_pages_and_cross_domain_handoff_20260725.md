# Legal Pages and the App → Landing Cross-Domain Handoff

**Date:** 2026-07-25
**Scope:** `/terms` and `/privacy` on `perelai.com` (landing), and how
`beauty-finance/apps/web/src/components/auth/AuthLegalLinks.tsx` reaches them without stranding the
user away from the login/signup screen.
**Execute:** after **LP4** (localized routing exists) and **LP3** (`buildAppSignupUrl` exists).
Slot it between LP8 and LP9 — the pages must exist before LP9 puts them in the sitemap.
**Status:** planning only. The app-repo half is a cross-repo change and must be raised separately
(review item **A9**, added by this document).

---

## 1. Current state

| Where | What exists |
|---|---|
| App | `TermsPage.tsx` and `PrivacyPolicyPage.tsx` — full-screen overlays with a `← Back to Log In` link and the literal body text *"This placeholder will be replaced with the final legal text."* Routed at `/terms` and `/privacy` in `app.tsx:75-76`. |
| App | `AuthLegalLinks.tsx` renders two in-app `react-router` `<Link>`s. Used by `LoginScreen`, `SignupScreen` (×2), `ForgotPasswordPage`, and by the legal pages themselves. |
| Landing | Nothing. Footer has `Privacy Policy` / `Terms of Service` links pointing at `href="#"`. |

Two placeholders in two repos is the drift problem again in miniature. One legal text, one canonical
URL.

---

## 2. Decisions

| # | Decision | Rationale |
|---|---|---|
| D1 | **The landing is canonical** for legal text: `perelai.com/terms`, `perelai.com/privacy` | Indexable, linkable from emails, app-store listings and contracts; one place to update; the app should not ship prose it does not own. |
| D2 | Paths are `/terms` and `/privacy`, **matching the app's existing paths** | Makes the app-side change a one-line origin swap, keeps existing `/terms` deep links meaningful, and matches the standard `/{page}` pattern for legal pages. |
| D3 | The app **keeps** its `/terms` and `/privacy` routes, converted to redirects | Existing deep links, bookmarks and any emails already sent keep working. No dead routes. |
| D4 | The return destination is **reconstructed from an enum**, never taken from a URL in the query string | Accepting a `return_to` URL is an open-redirect vulnerability on a page linked directly from a signup form — exactly the surface a phisher wants. |
| D5 | Acquisition context survives the round trip | A user who reads the terms and comes back must still land on `/register` with their niche and UTMs intact, or the niche recommendation and attribution are lost for the most engaged visitors. |
| D6 | Legal pages reached with `?from=` **do not write landing attribution** | Otherwise `document.referrer = perelai.app` overwrites the visit's real source and every diligent reader gets misattributed to "self-referral". |
| D7 | In standalone (installed) display mode the app opens legal in a **new tab** | Navigating an installed app's only window to an external origin strands the user outside the app shell, especially on iOS. |

---

## 3. Landing implementation

### 3.1 Routes

```
app/[locale]/terms/page.tsx      →  /terms      /uk/terms      /pl/terms  …
app/[locale]/privacy/page.tsx    →  /privacy    /uk/privacy    /pl/privacy …
```

Static, `generateStaticParams` over all locales, same shell as the rest of the site (header + footer)
so the user is visibly still on `perelai.com`.

Add `terms` and `privacy` to `RESERVED_SLUGS` (plan §LP7.1) so no niche page can ever shadow them.

### 3.2 Query contract (the only accepted parameters)

| Param | Values | Purpose |
|---|---|---|
| `from` | `login` \| `register` \| `forgot` | which app screen to offer as the return destination |
| `niche` | a slug from the generated catalog | rebuild the register URL |
| `utm_source`, `utm_campaign`, `landing_path` | the standard allowlist | preserve attribution across the round trip |

Anything else is ignored. `from` is validated against the literal set — an unknown value renders no
back button, it does not fall back to a guess.

### 3.3 Return button

Rendered at the top of the page when `from` is valid, styled as the app's own back link
(`← Back to sign up` / `← Back to log in`) so the round trip feels like one product:

```ts
// components/legal/return-to-app.tsx
const DESTINATIONS = {
  register: () => buildAppSignupUrl({ niche, source, campaign, landingPath }),  // lib/urls.ts, LP3
  login:    () => buildAppLoginUrl(),
  forgot:   () => new URL('/forgot-password', env.NEXT_PUBLIC_APP_URL).toString(),
} as const;
```

The destination origin is **always** `NEXT_PUBLIC_APP_URL`. There is no code path in which a URL from
the query string becomes an `href`.

Also render a persistent secondary link at the bottom (`Back to Perelai →` for `from`-less visits, so
organic readers are not dead-ended).

### 3.4 Stub content

A legal page that says *"placeholder"* is worse than one that says nothing, because it is linked from
a form that collects an email address. For local development/staging, ship a **structured stub**:
real headings, a visible draft
banner, a working contact address, and a `Last updated` date.

**`/terms` sections:** who we are · what the service is · account and eligibility · acceptable use ·
your data and your clients' data · availability during beta · fees (currently none — Founding Beta) ·
termination and export · liability · changes to these terms · contact.

**`/privacy` sections:** who the controller is · what we collect (account, workspace content,
technical) · what we never collect (no client PII in analytics — mirror workspace CONTEXT §12) ·
processors (hosting, Resend for email, Google when the user connects Calendar, analytics) · legal
basis · retention · your rights (GDPR, incl. UA/PL/DE/FR/ES markets) · cookies and storage (the
landing sets no tracking cookies — LP10) · international transfers · contact and complaints.

Draft banner, on both:

> **Draft.** These terms are being finalised while Perelai is in Founding Beta. The current version is
> effective from {date}; we will email registered users before any material change.
> Questions: legal@perelai.com

**Blocking rule:** the structured stub is development-only. Before any public signup traffic
(organic or paid), replace it with dated owner/legal-approved final text in every published locale.
No LLM may declare legal prose approved.

### 3.5 Localization

Legal text translation is a **legal** decision, not a copy decision. Two acceptable postures:

- **Recommended for beta:** English-only legal text, served at every locale path, with a one-line
  notice: *"The English version is the legally binding one."* `hreflang` still emitted; canonical
  self-referencing per locale.
- **Later:** professionally translated per market, with the binding-language clause kept explicit.

Never machine-translate a privacy policy and present it as binding.

### 3.6 SEO

- Indexable (a real legal page is a trust signal for both users and reviewers).
- `sitemap.ts` priority `0.3`, `changeFrequency: 'yearly'`.
- Canonical always points at the **clean** URL with no query string, so `?from=register` variants do
  not create duplicates.
- No `FAQPage` / `Article` schema. `WebPage` only.

### 3.7 Analytics

- Fire `legal_viewed` with `{ page: 'terms' | 'privacy', from, locale }`.
- Fire `legal_return_clicked` with `{ from, destination }`.
- **Suppress attribution capture** when `from` is present (decision D6). `lib/attribution.ts` gets an
  explicit `skipCapture` path for legal routes.
- The drop-off `signup_started → legal_viewed → (no return)` is a real signup-flow leak worth
  watching; the `signup` skill treats legal-link abandonment as a standard funnel measurement.

### 3.8 Footer

Replace the two `href="#"` links (review defect L10) with real links to `/terms` and `/privacy` in the
current locale.

---

## 4. App implementation (cross-repo — review item A9)

**Not part of the landing plan.** Raise as a separate task in `beauty-finance`.

### 4.1 New env var

```env
# apps/api/.env.example and the web build environment
VITE_LANDING_PUBLIC_URL=https://perelai.com     # http://localhost:3001 in dev
```

Without it, `AuthLegalLinks` must fall back to the existing in-app routes — the change must degrade
safely, never render a broken link.

### 4.2 `AuthLegalLinks.tsx`

Current: two `react-router` `<Link>`s to `/terms` and `/privacy`.
Target: two `<a>` elements to the landing, carrying `from`, the current language, and any acquisition
context present on the current URL.

```
{VITE_LANDING_PUBLIC_URL}/{localePrefix}terms
  ?from=register
  &niche=premium-colorist
  &utm_source=instagram
  &utm_campaign=founding-beta
  &landing_path=%2Ffor-independent-colorists
```

Implementation notes for whoever picks this up:

1. **`from`** — the component does not currently know which screen it is on. Add a required prop
   `from: 'login' | 'register' | 'forgot'` and set it at each of the five call sites
   (`LoginScreen:210`, `SignupScreen:71`, `SignupScreen:200`, `ForgotPasswordPage:123`, and the legal
   pages themselves). Required, not optional — the compiler should catch a missed call site.
2. **Language** — build the locale prefix from `normalizeLanguageCode(i18n.language)` using the
   landing's `as-needed` rule: `en` → no prefix, everything else → `/{code}/`. The seven codes match
   on both sides (`I18N_SUPPORTED_LANGUAGE_CODES`); if the landing ever ships fewer, fall back to no
   prefix rather than producing a 404.
3. **Acquisition context** — reuse the existing
   `parseNicheOnboardingQuery(searchParams, …)` from `apps/web/src/utils/nicheOnboardingContext.ts`
   and re-emit the same fields. Do not invent a second parser; the clamping rules
   (80/80/120/240) already live there and in the Zod schema.
4. **Standalone mode** — when
   `window.matchMedia('(display-mode: standalone)').matches`, render with
   `target="_blank" rel="noopener noreferrer"`; otherwise same tab. Decision D7.
5. **Fallback** — when `VITE_LANDING_PUBLIC_URL` is unset, keep the current in-app `<Link>` behaviour
   unchanged. One component, two modes, no broken state.

### 4.3 `TermsPage.tsx` / `PrivacyPolicyPage.tsx`

Convert to redirect shells that preserve `from` and language, keeping the routes alive (decision D3):

- On mount, `window.location.replace(landingUrl)`.
- Render the existing back-link and a one-line "Opening our terms…" while the redirect resolves, so a
  blocked redirect is not a blank screen.
- Keep the current placeholder body behind the same `VITE_LANDING_PUBLIC_URL`-unset fallback.

### 4.4 Nothing else changes

Route table, i18n keys (`legal.terms_link`, `legal.privacy_link`, `login.back_to_login`) and all five
call sites keep their current copy. This is a destination change, not a redesign — AI rule #19.

---

## 5. Round-trip verification

Add to prompt **R3** (end-to-end handoff check):

| # | Step | Expected |
|---|---|---|
| 1 | `/for-independent-colorists` → CTA | app `/register?niche=premium-colorist&utm_source=…` |
| 2 | On `/register`, click **Terms of Service** | `perelai.com/terms?from=register&niche=premium-colorist&utm_source=…` |
| 3 | On the landing terms page | `← Back to sign up` visible; page in the same language as the app was |
| 4 | Click back | app `/register` with **the same** niche and UTMs as step 1 |
| 5 | Complete registration | onboarding still preselects `independent_colorist` |
| 6 | Check the app's onboarding report | `acquisitionNiche = premium-colorist`, `acquisitionSource` unchanged by the detour |
| 7 | Repeat from the app in Ukrainian | landing page renders at `/uk/terms` |
| 8 | Tamper: `?from=https://evil.example` | **no** back button rendered; no redirect; no console error |
| 9 | Tamper: `?from=register&niche=colorist` | back button renders and points at `/register` **without** a `niche` param |
| 10 | Installed app (standalone) | legal opens in a new tab; the app window still shows the signup form |

Steps 8 and 9 are the security and drift assertions. They must be automated tests, not manual checks.

---

## 6. Definition of done

- [ ] `/terms` and `/privacy` live on the landing in all shipped locales; structured stubs are
      staging-only and public deployment contains dated owner/legal-approved final text
      and a visible draft banner
- [ ] Return button reconstructs the destination from `NEXT_PUBLIC_APP_URL` + an enum; no query-string
      URL ever becomes an `href`
- [ ] Acquisition context survives app → landing → app unchanged
- [ ] Attribution capture suppressed on `?from=` legal visits
- [ ] Footer links point at the real pages
- [ ] Both pages in `sitemap.ts` with canonical URLs free of query strings
- [ ] `legal_viewed` / `legal_return_clicked` firing
- [ ] Cross-repo task A9 filed with §4 as its spec
- [ ] Recorded as a release precondition: **no public signup traffic until legal text is final**
