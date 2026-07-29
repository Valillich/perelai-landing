# Wave 3 — REQUEST, ORDER and RENTAL Niche Pages

**Date:** 2026-07-25
**Status:** sketch. Execute **only after** the APPOINTMENT waves (LP7 Wave 1a → LP11 Wave 1b →
LP12.3 Wave 2) are live and stable.
**Prerequisite phases:** LP2 (catalog + drift guard), LP3 (signup URL), LP4 (i18n), LP7 (niche page
template), LP9 (SEO), LP10 (analytics). None of this is buildable before the template exists.

**Why a separate document:** the three non-appointment modes are not "more niches". They are three
different products from the visitor's point of view — a request form, a shop order, and a resource
reservation — with different intake semantics, different onboarding paths and different failure modes.
Folding them into the main plan would have made every phase conditional. Keeping them separate also
keeps the discipline in workspace CONTEXT §18: validate before multiplying.

---

## 1. Flag status — recheck before starting

Wave 3 was previously blocked on rollout flags. The repository examples currently show them enabled,
but that is **not production evidence**:

```env
PUBLIC_BOOKING_REQUEST_ENABLED=true        VITE_PUBLIC_BOOKING_REQUEST_ENABLED=true
PUBLIC_BOOKING_ORDER_ENABLED=true          VITE_PUBLIC_BOOKING_ORDER_ENABLED=true
PUBLIC_BOOKING_RENTAL_ENABLED=true         VITE_PUBLIC_BOOKING_RENTAL_ENABLED=true
PUBLIC_RENTAL_INVENTORY_ENABLED=true       VITE_PUBLIC_RENTAL_INVENTORY_ENABLED=false
```

**`.env.example` is not production.** Before building any Wave 3 page, confirm against the actual
deployed environment, and record the answer in `config/niche-pages.ts`:

```ts
export const PRODUCTION_BOOKING_FLAGS = {
  APPOINTMENT: true,
  REQUEST: true,    // ← verified in production on YYYY-MM-DD by <name>
  ORDER: true,
  RENTAL: true,
} as const;
```

The LP2 verifier reads this constant. A page whose mode is `false` here fails the build. That is the
mechanism — do not bypass it by editing the page and leaving the flag stale.

Both halves matter: the API flag protects direct `POST`s, the `VITE_` flag controls whether the public
page renders the flow at all (`apps/web/src/utils/publicBookingFeatureFlags.ts`). The web bundle must
be **rebuilt** after a `VITE_` change — a flipped API flag with a stale bundle produces a page that
looks disabled while the endpoint is open.

`PUBLIC_RENTAL_INVENTORY_ENABLED` is a **separate, stricter gate** and is the sole authority for
resource assignment and Settings readiness (`docs/releases/ob10b-rental-inventory-rollout.md`). Its
`VITE_` mirror is explicitly non-authoritative. See §5.3.

---

## 2. Page inventory

12 pages in 3 mode families. Slugs and paths are fixed by
[`reference/niche-catalog.md`](reference/niche-catalog.md) §8 — do not re-derive them.

### 3a — REQUEST (4 pages)

| Path | `niche` | Template | Group |
|---|---|---|---|
| `/for-freelance-designers` | `freelance-designer` | `freelance_designer` | freelance |
| `/for-handymen` | `home-services` | `handyman` | pro |
| `/for-marketing-agencies` | `marketing-agency` | `marketing_agency` | pro |
| `/for-it-services` | `it-services` | `it_services` | pro |

### 3b — ORDER (2 pages)

| Path | `niche` | Template | Group |
|---|---|---|---|
| `/for-course-creators` | `course-creator` | `course_creator` | edu |
| `/for-content-creators` | `content-creator` | `content_creator` | freelance |

### 3c — RENTAL (6 pages, all `BETA` in the app)

| Path | `niche` | Template |
|---|---|---|
| `/for-coworking-spaces` | `coworking` | `coworking` |
| `/for-car-rentals` | `car-rental` | `car_rental` |
| `/for-equipment-rentals` | `equipment-rental` | `equipment_rental` |
| `/for-event-venues` | `event-venue` | `event_venue` |
| `/for-short-term-rentals` | `short-term-rental` | `short_term_rental` |
| `/for-storage-facilities` | `storage-unit` | `storage_unit` |

---

## 3. What changes versus an APPOINTMENT page

Everything in the LP7 niche page contract still applies — ≥60% unique body text, the terminology
table, niche research, `requiresStaff` handling. What changes is the **core promise**, and getting it
wrong produces a page that sells a flow the product does not run.

| | APPOINTMENT | REQUEST | ORDER | RENTAL |
|---|---|---|---|---|
| Visitor picks | service, staff, date, time | service/package + message + contact | item + quantity | resource + start + end |
| Produces | `Transaction(type=VISIT)` | `PublicServiceRequest` | `Order` | `Transaction(type=RESERVATION)` |
| Calendar occupancy | yes | **no** | **no** | yes (a period, not a slot) |
| Money at intake | none | none | none — **no automatic payment** | none |
| Hero promise | "clients book a time" | "clients send you a brief" | "clients order, you confirm" | "clients reserve a period" |
| The honest hook | fewer DMs, no double-booking | qualified enquiries with the details attached | one place where orders and what's owed live | availability that cannot double-book |

**Copy bans specific to Wave 3** — additive to `reference/messaging-and-claims.md` §4:

- REQUEST: never "book", "booking", "appointment", "slot". A request has no time and is not calendar
  occupancy. Use "request", "enquiry", "brief".
- ORDER: never "checkout", "pay online", "we process payments", "get paid instantly". An Order records
  what is owed; **no payment is taken at intake**. Also never "invoice" or "bill" (glossary §4.2).
- RENTAL: never "booking" or "appointment" for a reservation, and never imply a payment happened. A
  reservation may later link to an Order; the period itself is not cash.
- All three: never imply the client is charged. Perelai **records** money; it does not process it.

---

## 4. Per-family notes

### 4.1 REQUEST (3a) — start here

The easiest of the three and the closest to the existing product story: a request lands in the
operational Inbox as unresolved work. That is the same differentiator the homepage already leads with,
which makes 3a the cheapest family to write and the best test of whether non-appointment niches
convert at all.

- The page's "a day in the life" section should end **in the Inbox**, not in the calendar.
- Anti-anxiety block: what happens after the client sends a request — you review it, reply, and it can
  become an Order or a Visit. Do not promise an automated quote or proposal flow beyond what
  `apps/api/src/requests/` actually implements — read it before writing the section.
- `handyman` has three slugs (`handyman`, `trades`, `home-services`); the catalog specifies
  `home-services` because it reads best in the app's *"Based on your interest in {niche}"* line.
  Do not substitute `trades`.

### 4.2 ORDER (3b) — has a hard activation blocker

**Read this before writing a single line of copy.**

There are **two** blockers. First, current `course_creator` and `content_creator` templates have
`bookingConfig.enabled: false`. `getCompanyDataFromNicheContext()` copies that value to
`Company.publicBookingEnabled`, so a tenant acquired by either landing page starts with its public
order page disabled even when ORDER feature flags are true. An approved app-side activation path is
required (cross-repo item **A13**); the landing verifier must reject either page while this remains
unresolved.

`apps/api/src/public-booking/public-booking.service.ts:1881-1883`:

```ts
// ORDER requires all service/addon prices to be known.
if (service.price === null || addons.some((addon) => addon.price === null)) {
  throw new BadRequestException('ORDER_PRICE_REQUIRED');
}
```

And the curated market price catalog is **deliberately empty** (`docs/releases/ob13-market-price-provenance.md`),
so every newly onboarded tenant starts with `price === null` on every catalog line.

⇒ **A tenant who signs up from an ORDER niche page and skips pricing during onboarding has a public
order page that returns a 400 on every submission.** For APPOINTMENT tenants an unpriced catalog is
merely incomplete; for ORDER tenants it is broken.

Consequences for these two pages:

1. The setup section must state plainly that prices are required before the order link goes live, and
   the CTA micro-copy should set that expectation *before* signup, not after.
2. Do not use "set your prices later" or "start in 2 minutes" framing on these pages.
3. Raise the cross-repo item: onboarding should warn (or block completion) when an ORDER-mode company
   finishes the catalog step with `null` prices. Filed as **A10** below.
4. Measure these two pages against `onboarding_completed` **and** first successful public order — a
   click-through win with a broken public page is a loss.

### 4.3 RENTAL (3c) — beta, and gated twice

- All six templates are `BETA` in the app's own picker. Every rental page needs an honest beta signal
  in the hero, not buried in a footnote. `messaging-and-claims.md` §5 (honesty as differentiation)
  applies directly: saying "in beta, here's exactly what works" outperforms pretending.
- Rental onboarding has an extra `inventory` step (`libs/core/src/onboarding/onboarding-steps.ts`).
  The setup section shows **4–5 steps**, not 3.
- `PUBLIC_RENTAL_INVENTORY_ENABLED` is the authority for resource assignment and Settings readiness.
  Confirm the production value and follow `docs/releases/ob10b-rental-inventory-rollout.md` before
  claiming anything about resource-level availability or overlap prevention. If strict inventory is
  off in production, the page may say "reserve a period" but **not** "never double-books a specific
  unit".
- `short_term_rental` carries the slug `airbnb`. **Never emit it** — third-party trademark on a
  commercial marketing URL. Use `short-term-rental`. (Review item A7 still open.)
- `car_rental` has app-side special handling (`isCarRentalTemplate` in `PublicBookingPage.tsx`) —
  read it before writing the page so the described flow matches the rendered one.

---

## 5. Sequencing and gates

```
3a REQUEST (4 pages)  →  gate  →  3b ORDER (2 pages)  →  gate  →  3c RENTAL (6 pages)
```

**Entry gate for 3a** — all must hold:

- [ ] Wave 2 live and stable ≥ 4 weeks
- [ ] `PRODUCTION_BOOKING_FLAGS.REQUEST = true`, verified against the deployed API **and** a rebuilt
      web bundle, with the date and verifier recorded
- [ ] A test tenant created from a REQUEST niche page can receive a public request end to end
- [ ] The `requests/` service read and the described flow matches the code

**Entry gate for 3b** — additionally:

- [ ] `course_creator` and `content_creator` no longer leave acquired tenants with public booking
      disabled, or an approved onboarding activation path is shipped and verified end to end (A13)
- [ ] The `ORDER_PRICE_REQUIRED` expectation is written into the page's setup section and CTA
      micro-copy
- [ ] A test tenant from an ORDER niche page can complete onboarding **with prices** and receive a
      public order end to end
- [ ] Cross-repo item A10 filed (not necessarily shipped)

**Entry gate for 3c** — additionally:

- [ ] `PUBLIC_RENTAL_INVENTORY_ENABLED` production value confirmed and its consequence for the copy
      decided
- [ ] `ob10b-rental-inventory-rollout.md` runbook followed for the test tenant
- [ ] Beta signal approved for the hero
- [ ] `airbnb` confirmed absent from every emitted URL (LP2 verifier assertion)

**Exit gate for each family:** every page indexed, uniqueness ≥60% against the homepage and all
siblings, no page shipping a mode whose flag is false, and at least one real signup attributed to the
family.

---

## 6. Additional cross-repo items

Added to the review's list (§9 of `00_architecture_review_20260725.md`):

| # | Item | Impact | Priority |
|---|---|---|---|
| A9 | `AuthLegalLinks` → landing handoff — see [`legal_pages_and_cross_domain_handoff_20260725.md`](legal_pages_and_cross_domain_handoff_20260725.md) §4 | Legal text has two sources today | High |
| A10 | Onboarding should warn or block when an ORDER-mode company completes the catalog step with `null` prices | Every ORDER tenant ships a public page that 400s until prices are set | **High** — blocks Wave 3b |
| A11 | Decide whether `airbnb` may remain a niche slug in `libs/core` at all, given it can never be used publicly | Dead slug that invites misuse | Low |
| A12 | Record the production booking-flag values somewhere machine-readable the landing can verify against, rather than a human copying them into `config/niche-pages.ts` | Removes the last hand-copied gate in the drift guard | Medium |
| A13 | Add and verify an approved activation path for ORDER templates whose `bookingConfig.enabled` defaults to `false` (`course_creator`, `content_creator`) | Landing-acquired tenants otherwise start with public ordering disabled even when mode flags and prices are ready | **High** — blocks Wave 3b |

---

## 7. Prompt for the executing agent

> Use the universal preamble from
> [`reference/llm-prompts.md`](reference/llm-prompts.md).
>
> Load marketing **`programmatic-seo`**, **`customer-research`**, **`copywriting`**,
> **`copy-editing`**, **`cro`**, **`site-architecture`**, plus repo-local
> **`design-taste-frontend`** and **`tdd`**. Read every named `SKILL.md` in full.
>
> Read `wave3_request_order_rental_niches_20260725.md` in full before starting, then build the
> **{{FAMILY}}** family only (`3a` / `3b` / `3c`).
>
> Confirm the entry gate for that family in §5 before writing anything. If any checkbox is unmet,
> stop and report which one — do not proceed on the assumption it will be fixed later.
>
> For each page in the family:
> 1. Fresh `customer-research` pass for that niche — 10–15 verbatims, no reuse from other pages.
> 2. **Read the API code for that mode before describing the flow.** REQUEST →
>    `apps/api/src/requests/`; ORDER → `apps/api/src/public-booking/public-booking.service.ts`
>    (especially the `ORDER_PRICE_REQUIRED` guard around line 1881); RENTAL →
>    `apps/api/src/bookable-resources/` and `docs/releases/ob10b-rental-inventory-rollout.md`.
>    Describe what the code does, not what the mode sounds like it should do.
> 3. Apply the mode-specific copy bans in §3. In particular: REQUEST pages never say "book";
>    ORDER pages never imply payment is taken; RENTAL pages never say "booking" for a reservation.
> 4. Terminology table from that template's own `services` / `addons` / `expenses` in
>    `data/niche-catalog.generated.json`.
> 5. Setup steps: 3 normally, 4 when `requiresStaff`, 4–5 for RENTAL (inventory step).
> 6. Uniqueness check against the homepage and every existing niche page.
> 7. Add to the homepage niche router, footer, sitemap and `hreflang` sets.
>
> Report per page: the mode, the flag you verified, the research verbatims you used, and the
> uniqueness score.
