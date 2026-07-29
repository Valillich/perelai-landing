# Niche Catalog — code-verified reference

**Generated from:** `beauty-finance/libs/core/src/templates/business-templates-catalog.ts`
(rechecked 2026-07-29), cross-checked against `business-groups.ts`, `business-template.types.ts`,
`business-template-resolver.ts`, `supported-markets.ts`, `apps/web/src/config/localization.ts`,
`apps/web/src/utils/publicBookingFeatureFlags.ts`, `apps/api/.env.example`.

> ⚠️ **Do not hand-edit and do not copy from any `CONTEXT.md`.** The catalog sections of all three
> `CONTEXT.md` files are stale — see `00_architecture_review_20260725.md` §4 for the diff. This file
> is the human-readable mirror of `data/niche-catalog.generated.json`, which Phase **LP2** generates
> mechanically. When they disagree, the generated JSON wins; when the JSON disagrees with
> `libs/core`, the build fails.

---

## 1. Hard rules

1. A landing CTA may only emit a `niche` value that exists in the **Valid slugs** column below.
   Anything else resolves to `null` in `resolveNicheOnboardingContext()` → no recommendation, no
   preselected template, no attribution.
2. Slugs are matched **exactly** (trimmed + lowercased). No prefix, fuzzy or partial matching.
3. Slug text is rendered to the user in onboarding: *"Based on your interest in **{slug}**"*.
   Choose the slug that reads best in that sentence, not the one that reads best in a URL.
4. `landing_path` must be the page's **English canonical path without locale prefix**
   (e.g. `/for-independent-colorists`, never `/uk/for-independent-colorists`). Keeping one value per
   page across all languages keeps `Company.acquisitionLandingPath` groupable.
5. A niche page may only ship in a wave whose booking mode is enabled in production.
6. Two landing pages may map to the same template **only if** their primary keyword differs and ≥60%
   of body copy differs. Otherwise it is keyword cannibalization.
7. An enabled page must resolve to a template whose `bookingConfig.enabled` is true, unless a dated,
   approved app-side activation path is recorded. Mode flags alone are insufficient.

---

## 2. Groups and terminology profiles

`groupId` drives the onboarding picker grouping and is what the resolver returns as `profile`.
`terminologyProfile` drives the i18n namespace the app uses for that tenant's vocabulary — this is
what makes app copy change per niche, and it is the raw material for each landing page's
**terminology mapping table** (the most defensible unique content per page).

| groupId | Label in app | terminologyProfile values used | i18n namespace files |
|---|---|---|---|
| `beauty` | Beauty & Wellness | `beauty`, `aesthetic` | `beauty.json` |
| `edu` | Education & Coaching | `edu`, `coaching`, `fitness` | `edu.json` |
| `freelance` | Freelance | `freelance` | `freelance.json` |
| `pro` | Professional Services | `pro` | `pro.json` |
| `rent` | Rentals & Spaces | `rental` | `rent.json` |
| `personal` | Personal Finance | `personal` | `personal.json` |

Locale files live at `beauty-finance/apps/web/public/locales/{lng}/{ns}.json` for
`lng ∈ {en, uk, pl, ru, es, fr, de}`.

---

## 3. Wave definitions

| Wave | Gate to enter | Contents |
|---|---|---|
| **1a** | none — ship first | `independent_colorist` only. CONTEXT §18: *"Do not create many similar SEO pages before validating the first niche."* |
| **1b** | Wave 1a passes the LP11 validation gate | 7 more `FEATURED` + `APPOINTMENT` + non-regulated templates |
| **2** | Wave 1b stable ≥4 weeks; ≥2 niches beating the homepage baseline | 10 `ACTIVE` + `APPOINTMENT` + non-regulated templates |
| **HOLD-LEGAL** | written compliance sign-off (review §A6) | the 2 `regulated: true` templates |
| **3** | production-verified flags recorded in `PRODUCTION_BOOKING_FLAGS`; sequenced 3a→3b→3c — see [`../wave3_request_order_rental_niches_20260725.md`](../wave3_request_order_rental_niches_20260725.md) | 12 `REQUEST` / `ORDER` / `RENTAL` templates |
| **NEVER** | — | `HIDDEN` templates; they carry no niche slugs and cannot be reached from a landing page |

**Why Wave 3 is gated:** `getCompanyDataFromNicheContext()` seeds
`publicBookingMode` + `publicBookingEnabled` from the resolved template. A niche page for a mode that
is off in the deployed environment creates tenants whose public intake is dark — the page sells a
feature the tenant cannot use. See review §5.5 and §7.1.

**Flag status (2026-07-25):** `PUBLIC_BOOKING_{REQUEST,ORDER,RENTAL}_ENABLED` and their `VITE_`
mirrors were flipped to `true` in `apps/api/.env.example` and the local `.env`.
`PUBLIC_RENTAL_INVENTORY_ENABLED` remains a separate, stricter gate. `.env.example` is **not**
production, and a `VITE_` flag has no effect until the web bundle is rebuilt — so Wave 3 is now
*sequenced*, not *unblocked*. Record the verified production value, with a date and a name, in
`config/niche-pages.ts`.

---

## 4. Wave 1a — ship first

| Landing path (EN canonical) | `niche` to emit | Template ID | Group | Terminology | Mode | Staff req. | Visibility | Prio |
|---|---|---|---|---|---|---|---|---|
| `/for-independent-colorists` | `premium-colorist` | `independent_colorist` | beauty | `beauty` | APPOINTMENT | no | FEATURED | 1 |

**All valid slugs for this template:** `premium-colorist`, `independent-colorist`, `hair-colorist`
**Invalid — do not use:** `colorist` (listed in `perelai-landing/CONTEXT.md` §11 but absent from the catalog)

**Alias paths that should 301 → canonical:** `/for-hair-colorists`, `/for-colorists`

**Template payload the tenant receives** (source of the page's terminology table):
6 services (30–240 min: consultation, root touch-up, full colour, balayage/correction, gloss, cut+style),
3 add-ons (bond builder, long-hair surcharge, styling), 2 linked expenses (colour product, developer).

---

## 5. Wave 1b — after the Wave 1a gate

| Landing path (EN canonical) | `niche` to emit | Template ID | Group | Terminology | Mode | Staff req. | Vis. | Prio |
|---|---|---|---|---|---|---|---|---|
| `/for-lash-artists` | `lash-artist` | `brow_lash_artist` | beauty | `beauty` | APPOINTMENT | no | FEATURED | 4 |
| `/for-nail-artists` | `nail-studio` | `nail_salon` | beauty | `beauty` | APPOINTMENT | **yes** | FEATURED | 5 |
| `/for-massage-therapists` | `massage-therapist` | `massage` | beauty | `beauty` | APPOINTMENT | no | FEATURED | 6 |
| `/for-barbers` | `barbershop` | `barber` | beauty | `beauty` | APPOINTMENT | **yes** | FEATURED | 9 |
| `/for-salons` | `hair-salon` | `salon` | beauty | `beauty` | APPOINTMENT | **yes** | FEATURED | 3 |
| `/for-private-tutors` | `private-tutor` | `tutor` | edu | `edu` | APPOINTMENT | no | FEATURED | 7 |
| `/for-coaches` | `business-coach` | `coach` | edu | `coaching` | APPOINTMENT | no | FEATURED | 8 |

**All valid slugs per template**

| Template | Valid slugs |
|---|---|
| `brow_lash_artist` | `brow-artist`, `lash-artist`, `brow-lash` |
| `nail_salon` | `nail-salon`, `nail-studio`, `nails` |
| `massage` | `massage`, `massage-therapist` |
| `barber` | `barber`, `barbershop` |
| `salon` | `hair-salon`, `salon` |
| `tutor` | `private-tutor`, `tutor`, `tutoring` |
| `coach` | `business-coach`, `life-coach`, `coach`, `coaching` |

**Optional persona split** (allowed under rule 6, decide at LP11):
`/for-brow-artists` (`brow-artist`) as a sibling of `/for-lash-artists` — different search intent,
different service vocabulary, same template. Requires genuinely different copy, not a find-and-replace.

**Staff-required templates** (`salon`, `nail_salon`, `barber`) add a `staff` step to onboarding.
Their pages must speak to **owners with a team**, not solo pros, and the "3 steps to set up" section
must show 4 steps, not 3. Getting this wrong is the fastest way to make the page feel generic.

---

## 6. Wave 2 — after Wave 1b proves out

| Landing path (EN canonical) | `niche` to emit | Template ID | Group | Terminology | Mode | Staff | Vis. | Prio |
|---|---|---|---|---|---|---|---|---|
| `/for-spas` | `day-spa` | `spa` | beauty | `beauty` | APPOINTMENT | **yes** | ACTIVE | 20 |
| `/for-makeup-artists` | `makeup-artist` | `makeup_artist` | beauty | `beauty` | APPOINTMENT | no | ACTIVE | 21 |
| `/for-personal-trainers` | `personal-trainer` | `personal_trainer` | edu | `fitness` | APPOINTMENT | no | ACTIVE | 11 |
| `/for-music-teachers` | `music-teacher` | `music_teacher` | edu | `edu` | APPOINTMENT | no | ACTIVE | 12 |
| `/for-yoga-instructors` | `yoga-instructor` | `yoga_instructor` | edu | `fitness` | APPOINTMENT | **yes** | ACTIVE | 13 |
| `/for-language-schools` | `language-school` | `language_school` | edu | `edu` | APPOINTMENT | **yes** | ACTIVE | 14 |
| `/for-career-coaches` | `career-coach` | `career_coach` | edu | `coaching` | APPOINTMENT | no | ACTIVE | 15 |
| `/for-consultants` | `consulting` | `consulting` | pro | `pro` | APPOINTMENT | no | ACTIVE | 40 |
| `/for-accountants` | `accounting` | `accounting` | pro | `pro` | APPOINTMENT | no | ACTIVE | 41 |
| `/for-photographers` | `photography` | `photographer` | pro | `pro` | APPOINTMENT | no | ACTIVE | 42 |

**All valid slugs per template**

| Template | Valid slugs |
|---|---|
| `spa` | `spa`, `day-spa` |
| `makeup_artist` | `makeup-artist`, `mua` |
| `personal_trainer` | `personal-trainer`, `fitness-coach`, `personal-training` |
| `music_teacher` | `music-teacher`, `music-lessons` |
| `yoga_instructor` | `yoga`, `yoga-instructor` |
| `language_school` | `language-school`, `language-lessons` |
| `career_coach` | `career-coach`, `career-coaching` |
| `consulting` | `consulting`, `legal` |
| `accounting` | `accountant`, `accounting` |
| `photographer` | `photographer`, `photography` |

⚠️ **`legal` → `consulting`.** A "for lawyers" page would land the user on a template literally
labelled *Consulting* with generic consulting services. Either write the page as *consulting/advisory*
(safe) or request a dedicated `legal` template in the app repo first. Do not ship `/for-lawyers`
against the `consulting` template.

---

## 7. HOLD-LEGAL — regulated verticals

| Landing path | `niche` | Template ID | Mode | Vis. | Blocker |
|---|---|---|---|---|---|
| `/for-aesthetic-clinics` | `aesthetic-clinic` | `aesthetic_clinic` | APPOINTMENT | FEATURED | `regulated: true`, `requiresStaff: true` |
| `/for-estheticians` | `esthetician` | `advanced_skincare` | APPOINTMENT | ACTIVE | `regulated: true` |

Valid slugs: `aesthetic_clinic` → `medical-aesthetics`, `aesthetic-clinic`, `medspa`.
`advanced_skincare` → `esthetician`, `advanced-skincare`, `skincare`.

`aesthetic_clinic` is marketing-priority **2** and `FEATURED`, so it will look like an obvious Wave 1b
candidate. It is not. Workspace CONTEXT §17 forbids claiming HIPAA-readiness, clinical records,
diagnosis, patient treatment management or medical recommendations without a compliance strategy.
**Do not draft these pages until review item A6 is signed off**, and when drafted, they must go through
a separate copy review against §17.

---

## 8. Wave 3 — non-appointment modes

Sequenced in [`../wave3_request_order_rental_niches_20260725.md`](../wave3_request_order_rental_niches_20260725.md)
(3a REQUEST → 3b ORDER → 3c RENTAL), each family behind its own entry gate. None of these may ship
until the corresponding flag is `true` in **production** for both the API and the rebuilt Vite bundle,
and that verified value is recorded in `PRODUCTION_BOOKING_FLAGS`.

⚠️ **ORDER additionally has an activation blocker:** `public-booking.service.ts:1881` rejects any
public ORDER submission where a service or add-on price is `null`, and the curated price catalog is
deliberately empty — so every fresh ORDER tenant ships a public page that 400s until they set prices.
Cross-repo item A10. Current `course_creator` and `content_creator` templates also have
`bookingConfig.enabled: false`; onboarding copies that value to `Company.publicBookingEnabled`, so
their public order pages default off even when ORDER mode flags are true. Cross-repo item A13.

| Landing path | `niche` | Template ID | Group | Terminology | Mode | Vis. |
|---|---|---|---|---|---|---|
| `/for-course-creators` | `course-creator` | `course_creator` | edu | `edu` | **ORDER** | ACTIVE |
| `/for-content-creators` | `content-creator` | `content_creator` | freelance | `freelance` | **ORDER** | ACTIVE |
| `/for-freelance-designers` | `freelance-designer` | `freelance_designer` | freelance | `freelance` | **REQUEST** | ACTIVE |
| `/for-handymen` | `home-services` | `handyman` | pro | `pro` | **REQUEST** | ACTIVE |
| `/for-marketing-agencies` | `marketing-agency` | `marketing_agency` | pro | `pro` | **REQUEST** | ACTIVE |
| `/for-it-services` | `it-services` | `it_services` | pro | `pro` | **REQUEST** | ACTIVE |
| `/for-coworking-spaces` | `coworking` | `coworking` | rent | `rental` | **RENTAL** | BETA |
| `/for-car-rentals` | `car-rental` | `car_rental` | rent | `rental` | **RENTAL** | BETA |
| `/for-equipment-rentals` | `equipment-rental` | `equipment_rental` | rent | `rental` | **RENTAL** | BETA |
| `/for-event-venues` | `event-venue` | `event_venue` | rent | `rental` | **RENTAL** | BETA |
| `/for-short-term-rentals` | `short-term-rental` | `short_term_rental` | rent | `rental` | **RENTAL** | BETA |
| `/for-storage-facilities` | `storage-unit` | `storage_unit` | rent | `rental` | **RENTAL** | BETA |

**All valid slugs per template**

| Template | Valid slugs |
|---|---|
| `course_creator` | `course-creator`, `online-course` |
| `content_creator` | `content-creator`, `content` |
| `freelance_designer` | `freelance-designer`, `graphic-designer` |
| `handyman` | `handyman`, `trades`, `home-services` |
| `marketing_agency` | `marketing-agency`, `marketing` |
| `it_services` | `it-services`, `software-dev`, `developer` |
| `coworking` | `coworking`, `studio-rental` |
| `car_rental` | `car-rental` |
| `equipment_rental` | `equipment-rental` |
| `event_venue` | `event-venue`, `venue` |
| `short_term_rental` | `short-term-rental`, `airbnb`, `holiday-rental` |
| `storage_unit` | `storage`, `storage-unit` |

⚠️ **Do not emit `airbnb` as a niche slug on a public page** — third-party trademark on a commercial
marketing URL. Use `short-term-rental`. See review item A7.
⚠️ All six `rent` templates are `BETA` in the app's own picker. Even after the flags flip, their pages
must carry an honest "in beta" signal.

---

## 9. NEVER — unreachable templates

| Template ID | Group | Visibility | Slugs |
|---|---|---|---|
| `personal_budget` | personal | HIDDEN | *(none)* |
| `family_budget` | personal | HIDDEN | *(none)* |

`nicheSlugs: []` and `HIDDEN` ⇒ unreachable by any landing URL and excluded from the onboarding
picker unless `includeHidden: true`. No landing page. No mention in navigation.

---

## 10. Languages and markets

These are **two different axes.** Never derive one from the other.

**Languages** (`apps/web/src/config/localization.ts` — must match exactly):

| Code | Name | Landing URL prefix |
|---|---|---|
| `en` | English | *(none — root)* |
| `uk` | Українська | `/uk` |
| `pl` | Polski | `/pl` |
| `ru` | Русский | `/ru` |
| `es` | Español | `/es` |
| `fr` | Français | `/fr` |
| `de` | Deutsch | `/de` |

**Markets** (`libs/core/src/templates/supported-markets.ts`):

| Country | Currency | localeHint | Pricing market |
|---|---|---|---|
| US | USD | en-US | US |
| UA | UAH | uk-UA | UA |
| PL | PLN | pl-PL | PL |
| GB | GBP | en-GB | GB |
| CA | CAD | en-CA | CA |
| AU | AUD | en-AU | AU |
| DE | EUR | de-DE | EU |
| FR | EUR | fr-FR | EU |
| ES | EUR | es-ES | EU |
| EU | EUR | en-IE | EU |

Fallback: **US**. Note `ru` is a supported *language* with **no** corresponding market — a
`ru` visitor must still be assigned a real market (their detected region, else `US`).
Note `en` serves four different markets (US/GB/CA/AU) — never infer language from country or country
from language.

**App's documented market precedence** (workspace CONTEXT §9), which the landing's region detection
should mirror in spirit:

```
1. explicit restored user choice
2. persisted company value          ← not applicable on the landing
3. reviewed timezone mapping
4. browser locale region
5. language fallback
6. explicit fallback (US)
```

---

## 11. The `NicheOnboardingContext` wire contract

From `libs/core/src/zod/schemas.ts:726-729` and
`apps/web/src/utils/nicheOnboardingContext.ts`.

| Field | Emit as | Required | Max length | App fallback param |
|---|---|---|---|---|
| niche | `niche` | **yes** | 80 | — |
| source | `utm_source` | no | 80 | `source` (checked first) |
| campaign | `utm_campaign` | no | 120 | `campaign` (checked first) |
| landingPath | `landing_path` | no | 240 | `landingPath` (checked first) |

**`safeParse` is all-or-nothing.** One field over its limit discards the whole context, niche
included. Clamp every field before building the URL.

**Not read by the app, not persisted:** `utm_medium`, `utm_content`, `utm_term`, `gclid`, `fbclid`,
`msclkid`, `ttclid`. Passing them is harmless (useful for GA4 on the app domain) but they will never
reach `Company`. Landing-side analytics is the only place these exist.

**Canonical URL shape:**

```
https://perelai.app/register
  ?niche=premium-colorist
  &utm_source=instagram
  &utm_campaign=founding-beta
  &landing_path=%2Ffor-independent-colorists
```

---

## 12. Drift guard contract (implemented in Phase LP2)

`pnpm verify:niches` must fail the build when any of the following is true:

1. A slug in the landing registry is absent from `business-templates-catalog.ts`.
2. A registry entry's `templateId` does not match the generated template for its slug, or a policy
   check derived from generated `groupId`, terminology, booking config or visibility fails. These
   code-owned fields are not duplicated in the registry.
3. A page is assigned to a wave whose booking mode is not `APPOINTMENT` while the corresponding
   production flag is recorded as `false` in the registry's `flags` block.
4. Two registry entries share a `templateId` without both declaring `personaSplit: true`.
5. A `landing_path` exceeds 240 characters, or a `niche` exceeds 80.
6. An enabled page's generated template has `bookingConfig.enabled: false` without an approved,
   dated activation path.

The script resolves the app repo from `$PERELAI_APP_REPO` (default `../beauty-finance`). If the path
does not exist it warns and skips **only the live freshness comparison**. Registry validation against
the committed generated JSON always runs, so a landing-only CI checkout still catches invalid slugs,
paths, duplicates, disabled templates and policy violations. If the app path exists, additionally
regenerate in memory and fail on cross-repo drift.
