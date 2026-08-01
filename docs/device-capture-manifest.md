# Device Capture Manifest

**Repository:** `/Users/valery/Sites/perelai-landing`  
**Phase:** DVC2 — Device evidence capture (amended 2026-08-01 — classification + breakpoint pane asserts)  
**Capture date:** 2026-08-01  
**Sibling app commit:** `7e05cd232e85a906f17759a46b9b3f17ae8c6602` (`7e05cd23`)  
**Synthetic workspace:** `Northlight Studio` (`nail_salon`), owner `dvc2.device.capture@example.com`  
**Route:** `/calendar` · **Locale / theme:** `en` / light  
**Browser mode for all captures below:** Playwright `channel: 'chrome'`, **`headless: true`** → classified as **automated browser capture**, **not** a physical-desktop manual check.

---

## 1. Capture table

| Asset | App commit | Route | Viewport (CSS) | DPR | Browser | Evidence class | Locale | Theme | Dataset | Date | Size | Shipping? | Claim supported |
|---|---|---|---:|---:|---|---|---|---|---|---|---:|---|---|
| `evidence/phone-390x844.png` | `7e05cd23` | `/calendar` | 390×844 | 3 | Chrome Playwright | Automated emulation (not physical iPhone Safari) | en | light | Northlight Studio | 2026-08-01 | 333 804 B | No | One-pane phone chrome |
| `evidence/ipad-portrait.png` | `7e05cd23` | `/calendar` | 834×1194 | 2 | Chrome Playwright iPad Pro 11 | Automated emulation (not physical iPad Safari) | en | light | Northlight Studio | 2026-08-01 | 299 659 B | No | Portrait **one-pane** — do not caption as two-pane |
| `evidence/ipad-landscape.png` | `7e05cd23` | `/calendar` | 1194×834 | 2 | Chrome Playwright iPad Pro 11 | Automated emulation | en | light | Northlight Studio | 2026-08-01 | 389 452 B | No | Landscape **two-pane** + rail (emulated) |
| `evidence/desktop-1024x900.png` | `7e05cd23` | `/calendar` | **1024×900** | 2 | Chrome Playwright headless | **Automated browser capture** | en | light | Northlight Studio | 2026-08-01 | (see JSON) | No | **two-pane** DOM-asserted: rail + Inbox + calendar; no contextual pane |
| `evidence/desktop-1360x900.png` | `7e05cd23` | `/calendar` | **1360×900** | 2 | Chrome Playwright headless | Automated browser capture | en | light | Northlight Studio | 2026-08-01 | (see JSON) | No | **three-pane** DOM-asserted: rail + Inbox + calendar + “Plan your next entry” |
| `evidence/desktop-1440x900.png` | `7e05cd23` | `/calendar` | **1440×900** | 2 | Chrome Playwright headless | Automated browser capture | en | light | Northlight Studio | 2026-08-01 | 439 651 B | Source for shipping | **three-pane** DOM-asserted (same structure) |
| `evidence/desktop-1600x900.png` | `7e05cd23` | `/calendar` | **1600×900** | 2 | Chrome Playwright headless | Automated browser capture | en | light | Northlight Studio | 2026-08-01 | (see JSON) | No | **three-pane** DOM-asserted; workspace still capped |
| `public/product/devices/desktop-calendar-1440.webp` | `7e05cd23` | `/calendar` | 1440×900 @ DPR2 → 2880×1800 | 2 | same source | Automated browser capture (unedited real UI) | en | light | same | 2026-08-01 | **126 214 B** | **Yes** | `/install` honesty anchor; caption in DOM: `Actual product · Example data` |
| `public/product/devices/desktop-calendar-1440.jpg` | same | same | same | 2 | same | same | en | light | same | 2026-08-01 | **199 434 B** | Yes (fallback) | Same |
| AVIF | — | — | — | — | — | — | — | — | — | — | — | Not produced | Encoder unavailable; WebP primary |

Lossless PNG originals: `docs/research/device-captures/originals/`.

Per-capture JSON includes `browserMode: headless-automated`, `panePresence`, `panesVerified`, and `threePaneAsserted`. Summary: `evidence/desktop-breakpoint-summary.json`.

---

## 2. Layout class observations (binding for DVC2R)

Pane class is **not** inferred from media-query flags alone. For English synthetic Calendar, three-pane requires all of: 82px rail with Calendar/Clients/Finance, Inbox, calendar day/month content, and the contextual “Plan your next entry” pane.

| Capture | CSS width | DOM-verified layout | Notes |
|---|---:|---|---|
| Phone | 390 | one-pane | Bottom nav |
| iPad portrait (emu) | 834 | **one-pane** | Does **not** reach 1024; no rail |
| iPad landscape (emu) | 1194 | two-pane | Rail + Inbox + calendar |
| Desktop | **1024** | **two-pane** | Rail + Inbox + calendar; contextual pane **absent** |
| Desktop | **1360** | **three-pane** | Contextual pane present |
| Desktop | **1440** | **three-pane** | Shipping source |
| Desktop | **1600** | **three-pane** | Still capped workspace |

---

## 3. Shipping caption contract — withdrawn 2026-08-01

No capture ships to visitors any more. `/install` renders live product surfaces
everywhere, including the desktop panel, so there is no `next/image` asset and no
`Actual product · Example data` caption in the DOM. The contract is kept here as a
record; §7 states the consequence.

| Field | Former value | Now |
|---|---|---|
| Asset | `/product/devices/desktop-calendar-1440.webp` (+ `.jpg`) | On disk as evidence; not referenced by any component |
| Visible caption | `Actual product · Example data` | Not rendered |
| Evidence class | Automated real-app screenshot — not “physical desktop QA” | Unchanged; still gates the desktop claim |
| Forbidden | AI cleanup, baked callouts, store badges | Unchanged |

---

## 4. PII scan

Synthetic clients only; no client email/phone/address. **CLEAN.**

---

## 5. `/install` OG composition inputs (defined only — do not build)

| Input | Value |
|---|---|
| Composition | Simplified density ladder markup through `lib/og-image.tsx` |
| Dataset | `buildAppScreenDataset({ templateId: 'nail_salon', locale, market })` — one dataset |
| Locale | Page locale |
| Theme | Light (OG) |
| **Title line** | Use the **current** English meta title only: `Perelai in your browser: installing and app stores` (`devices.meta.title`). **Do not** use “Perelai on iPhone, Android, iPad & Desktop” while *Cross-device workspace* remains `BLOCKED` |
| Subline | Browser-first + optional install (F21) + no-store (F23) only if those contract rows remain `PASS` |
| Forbidden | `Date.now()`, store badges, AI UI, hardcoded unsupported platform promises |

---

## 6. Gaps

| Gap | Status |
|---|---|
| Physical iPhone / iPad Safari / Android | BLOCKED (claim rows only) |
| Headed/manual desktop Chrome session | Not performed; automated captures used for density |
| Prior mislabel “physical desktop” for headless Playwright | **Corrected** in this amendment |

**Handoff:** DVC2R may use §2 pane observations. DVC3 must not publish BLOCKED install/Safari/Chrome/webview sentences.

---

## 7. Screenshot withdrawn from shipping (2026-08-01)

### 7.1 What changed

The `/install` responsive-proof section previously reserved a slot for the one real
desktop capture. It now renders `MockDesktopShell` at the product's own `85rem`
threshold, with the contextual pane showing `MockDesktopPaneEmptyState` — a replica of
`apps/web/src/components/layout/DesktopPaneEmptyState.tsx` in the shape `CalendarPage`
gives it when nothing is selected. `components/devices/device-showcase.tsx` no longer
imports `next/image` and no longer references `/product/devices/*`.

### 7.2 Why the rendered surface is defensible here

The three labels in that pane — the create heading, the booking-mode line and the
create action — are **generated**, not written: `calendar.desktop_create_title`,
`calendar.desktop_create_description` and `calendar.fab_add_visit` were added to the
LP5b allowlist in `scripts/generate-niche-catalog.mjs`, resolve out of the app's own
`beauty.json` for all nine locales, and `pnpm verify:niches` fails if any of them stops
existing. That is the same drift guard the rail labels use, extended to a second
component. A capture cannot offer that: it rots silently, ships one locale and one
theme, and cannot show the passive state a fresh workspace actually lands in.

### 7.3 The open contract gap — needs an owner decision

Plan §8.5 and `reference/messaging-and-claims.md` §5.1 (as narrowed by
`product_mock_kit_20260728.md` §5) both require **at least one real screenshot per page
family** — one place where a visitor sees the unedited product. For the `/install`
family that was this desktop capture.

**With the capture withdrawn, the `/install` family satisfies no real-screenshot
requirement.** This is a deliberate change requested for the device showcase, not an
oversight, and it is recorded rather than quietly absorbed. Three ways to close it,
for the owner to choose:

1. Reinstate the capture somewhere in the `/install` family — the section is gone, but
   the FAQ or the limitations block could carry it below the fold.
2. Narrow §5.1 explicitly, the way LP5b already narrowed it once: state that a page
   family whose visuals are wholly generated-and-verified needs no capture, and record
   the reasoning where §5.1 lives.
3. Accept the gap for `/install` only, with the homepage hero continuing to carry the
   site's one real screenshot for the whole site rather than per family.

Until one is chosen, treat the §5.1 row for `/install` as **BLOCKED**, not satisfied.
DVC7's release audit should not mark it green on the strength of this change alone.

### 7.4 Evidence status is unaffected

Every capture in §1 keeps its evidence role. The desktop multi-pane claim still rests on
the DOM-asserted 1024/1360/1440/1600 captures, the assets stay on disk, and
`tests/device-content.test.ts` still asserts their presence. Withdrawing an asset from
*shipping* does not withdraw it from the *claim contract*.
