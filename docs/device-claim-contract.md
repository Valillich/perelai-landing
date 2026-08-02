# Device Claim Contract

**Repository:** `/Users/valery/Sites/perelai-landing`
**Sibling App (Read-Only Evidence):** `/Users/valery/Sites/beauty-finance`
**Created:** 2026-08-01
**Amended:** 2026-08-01 (DVC2 evidence repair — store absence, F21 split, capture classification, 1024/1360/1600 pane asserts)
**Governing Plan:** `.cursor/plans/devices/00_device_distribution_marketing_plan_20260731.md`

---

## 1. Inventory of Current App & Install Behavior

This inventory reflects direct source code inspection of `/Users/valery/Sites/beauty-finance` (`apps/web/` and `libs/core/`).

### 1.1 Manifest & Web Application Delivery
* **Source:** `apps/web/index.html`, `apps/web/public/manifest.json`
* **Display Mode:** `"display": "standalone"`, `"orientation": "portrait"`, short/full name `"Perelai"`.
* **Delivery Model:** Responsive web application at `https://perelai.app`.
* **Browser First:** The application opens and functions in a standard web browser without installation.

### 1.2 In-App Install Entry Points
* **Post-Onboarding Review:** `OnboardingReviewStep.tsx` — install stays secondary.
* **Settings / Quick Settings:** `InstallAppSettingsControl.tsx` — Install / Add to Home Screen when the browser exposes it; hidden in standalone.

### 1.3 Install Routing (`resolveInstallRoute` in `installTarget.ts`)
Routes include `native-prompt`, `ios-share-sheet`, `ios-chrome-menu`, `open-in-safari`, `none`. **Code presence is not physical evidence** that a named browser on a named device will show that path.

### 1.4 Responsive Layout Thresholds
* `< 1024px` (`64rem`): one-pane + bottom navigation.
* `1024–1359px`: desktop rail + two-pane workspaces.
* `≥ 1360px` (`85rem`): wide three-pane Calendar (Inbox + day + contextual).
* Workspace capped near `1600px`.

### 1.5 No Offline Application Shell
`notification-sw.js` is notification-oriented only. Internet is required for product data operations.

### 1.6 No public store listing (dated external evidence)

Absence of a store listing **cannot** be proved from repository contents alone. External store searches were run on **2026-08-01**:

| Store | Query | Result | Evidence location |
|---|---|---|---|
| Apple iTunes Search API (`country=us`) | `Perelai`, `entity=software` | `resultCount=2`; returned apps are **not** Perelai (`מזלוטו` / `עבודה בדקה 90`; sellers Doron Perets / Rotem Peretz). No track named Perelai; no seller/bundle tied to perelai.app. | `docs/research/store-listing-checks/apple-itunes-search-perelai-us-2026-08-01.json` |
| Apple iTunes Search API (`country=ua`) | same | `resultCount=0` | `docs/research/store-listing-checks/apple-itunes-search-perelai-ua-2026-08-01.json` |
| Apple bundleId lookup | `app.perelai`, `com.perelai.app`, `com.perelai.web`, `perelai.app` | each `resultCount=0` | recorded in `docs/research/store-listing-checks/store-listing-absence-2026-08-01.json` |
| Google Play search (`hl=en&gl=US`) | `Perelai` | Playwright DOM scrape: **0** app detail cards; no exact “Perelai” app card | `docs/research/store-listing-checks/google-play-search-perelai-us-2026-08-01.playwright.json` + `.png` |

**Verdict:** No public App Store or Google Play listing for the product brand Perelai (booking/clients/money workspace at perelai.app) was found on 2026-08-01. Similarly named apps (PeryAI, Perla, Pearla, Relai, Perila, Peralogi, Hebrew apps matching seller surnames) are different products.

---

## 2. Screenshot & Manual Evidence Gap List

See [`device-capture-manifest.md`](device-capture-manifest.md) for the full table.

### Captured (automated Playwright Chrome, authenticated synthetic workspace):
1. Phone 390×844 (emulated) — one-pane.
2. iPad portrait 834×1194 (emulated) — **one-pane** (does not enter two-pane).
3. iPad landscape 1194×834 (emulated) — two-pane + rail.
4. Desktop **1024×900** — **two-pane** verified in DOM (rail + Inbox + calendar content); contextual pane absent.
5. Desktop **1360×900**, **1440×900**, **1600×900** — **three-pane** verified in DOM (rail + Inbox + calendar + “Plan your next entry”).
6. Shipping honesty-anchor WebP/JPEG derived from the unedited 1440 capture.

**Evidence class:** all of the above are **automated browser captures** (`headless: true` Playwright, Chrome channel). They are **not** physical-desktop manual checks and **not** physical iPhone/iPad Safari / Android checks.

### 2.1 Physical iPhone run — owner, 2026-08-02

The first physical-device evidence in this contract. Owner-run on a personal iPhone against
production `https://perelai.app/`.

| Step | Observed | Artifact |
|---|---|---|
| Safari loads and signs in without installing | Workspace usable in the browser | Screenshots, 2026-08-01 |
| Share sheet carries **Add to Home Screen** | Entry present below the app row; also reachable from the compact address bar's `···` menu | Screenshots, 2026-08-01 |
| iOS confirmation sheet for `https://perelai.app/` | Perelai icon, editable name "Perelai", URL, **Open as Web App** switch **on**, Add | Screenshot, 2026-08-02 |
| Launch from the resulting icon | Opens standalone, in its own window | **Owner attestation, 2026-08-02** |

**Two caveats the copy must respect.**

1. **Open as Web App is a switch the person can turn off.** With it off iOS adds a bookmark, not a
   standalone launcher. Public copy therefore describes the default and does not promise the outcome
   unconditionally.
2. **The standalone launch is an owner attestation, not a filed capture.** Everything else in this
   row has an artifact. Filing a screenshot of the launched window into
   `docs/research/device-captures/physical/` would close the last gap; until then the row is `PASS`
   on owner sign-off, which §3's status rules permit for the Owner but which a later reviewer should
   be able to see was not a screenshot.

### Still unavailable (physical / manual):
1. Physical **iPad** Safari — the iPhone run does not transfer; iPad is a different layout class
   (emulation put portrait at 834 CSS px, i.e. one-pane).
2. Physical Android Chrome install prompt + standalone.
3. Physical iPhone push receipt with production VAPID.
4. Headed/manual desktop Chrome verification session (optional; automated captures cover layout density).
5. Desktop Safari / Firefox install-absent fallback.
6. Embedded Instagram/Facebook-style webview escape on a physical device.

---

## 3. Device Claim Ledger

Status rules:
* `PASS`: Backed by verified code **and** the evidence type required for that claim (code/invariant, dated external search, or authenticated capture as specified).
* `BLOCKED`: Missing the required evidence class (usually physical-device).
* `FORBIDDEN`: Must never be claimed.

| Claim | Public Wording | Code / evidence source | Manual / external evidence | Status | Owner | Checked |
|---|---|---|---|---|---|---|
| Browser delivery | "Works in your browser." / "Perelai runs in a web browser." | `index.html`, `manifest.json` | Local browser access | `PASS` | Valery | 2026-08-01 |
| **Use without installing** | "Installing it is optional." / "Can I use Perelai without installing anything? Yes." | Workspace `CONTEXT.md` §11/§19.18; `OnboardingReviewStep.tsx` (install secondary); app usable in browser without install | Product invariant + code — **not** a device matrix row | `PASS` | Valery | 2026-08-01 |
| **iPhone Safari Home Screen setup** | "Add Perelai to your iPhone Home Screen." | `installTarget.ts` (`ios-share-sheet`), `usePwaPrompt.ts`, `IosInstallPrompt.tsx` | **Physical iPhone Safari, 2026-08-02** — §2.1: share sheet carrying **Add to Home Screen**, then the iOS confirmation sheet for `https://perelai.app/` showing the Perelai icon, the name, and **Open as Web App** enabled | `PASS` | Valery | 2026-08-02 |
| Named install on any **other** browser or device | "Install it on your phone…", Chrome/Android/desktop-specific steps | `installTarget.ts` routes | Physical verification missing outside iPhone Safari | `BLOCKED` | Valery | 2026-08-02 |
| Cross-device workspace | "Use Perelai on phone, iPad and desktop." | `responsiveLayout.ts`, rail | Physical iPhone/iPad Safari missing; automated layout captures only | `BLOCKED` | Valery | 2026-08-01 |
| Responsive layout density | "The layout adapts as your screen gets wider." | `responsiveLayout.ts` (`64rem`/`85rem`) | Automated authenticated Chrome captures at **1024 / 1360 / 1600** (and 1440) with **DOM pane asserts** — see capture manifest §2 | `PASS` | Valery | 2026-08-01 |
| iPad portrait two-pane / rail | Portrait iPad shows rail + two panes | `64rem` = 1024px | Emulated iPad Pro 11 portrait **834 CSS px** stayed one-pane | `BLOCKED` — do not ship | Valery | 2026-08-01 |
| iPad Home Screen setup | "Add it to your iPad Home Screen." | `ios-share-sheet` route | Physical **iPad** Safari missing — the iPhone run does not transfer | `BLOCKED` | Valery | 2026-08-02 |
| Android / Desktop browser install prompt | "Install from a compatible browser on Android or desktop." | `beforeinstallprompt` path | Physical prompt capture missing | `BLOCKED` | Valery | 2026-08-01 |
| **Standalone app window (iPhone)** | "Open Perelai from its own icon, in its own window." | `manifest.json` → `display: "standalone"`; `apple-mobile-web-app-capable` | **Physical iPhone, 2026-08-02** — owner-run standalone launch confirmed; the iOS confirmation sheet's **Open as Web App** switch is the platform's own statement of the same behaviour. Conditional on that switch staying on, which the copy says | `PASS` | Valery | 2026-08-02 |
| Standalone app window (iPad / Android) | Same wording, other platforms | Same manifest | Physical launch missing on both | `BLOCKED` | Valery | 2026-08-02 |
| iPhone push condition | Home Screen enables alerts | `pushBlockedByInstall`, `webPush.ts` | Production VAPID + physical receipt missing | `BLOCKED` | Valery | 2026-08-01 |
| Light and dark themes | "Light and dark themes." | theme script / tokens | Full device-surface audit pending DVC2R | `BLOCKED` | Valery | 2026-08-01 |
| **No store distribution (F23)** | "There is no App Store or Google Play listing." | Delivery is web (`manifest.json`); **plus** dated store searches §1.6 | `docs/research/store-listing-checks/store-listing-absence-2026-08-01.json` | `PASS` | Valery | 2026-08-01 |
| Internet required (F24) | "Perelai needs an internet connection." | `notification-sw.js` has no offline shell | Architecture | `PASS` | Valery | 2026-08-01 |
| Native app / store download / badges / offline / one-click everywhere / etc. | (forbidden wordings) | — | — | `FORBIDDEN` | Valery | 2026-08-01 |

**Two-approval rule:** a public device sentence needs (1) a Platform row in `messaging-and-claims.md` §2.4 **and** (2) the matching claim-contract row above as `PASS`. Informal audit prose cannot override a `BLOCKED` row.

---

## 4. Remaining physical blockers

1. ~~Physical iPhone Safari Home Screen + standalone~~ — **cleared 2026-08-02**, §2.1.
2. Physical iPhone **push** receipt with production VAPID — still blocking the alerts claim.
3. Physical **iPad** Safari — blocks every iPad sentence and the cross-device "phone, iPad and desktop" line.
4. Physical **Android** Chrome install prompt + standalone.
5. Embedded webview escape on a physical device.
6. A filed screenshot of the launched standalone window (§2.1 caveat 2).

Layout-density copy may use the automated 1024/1360/1600 pane-asserted captures. **iPhone** Home
Screen and standalone-window wording is now permitted. Instructions naming any other browser or
device may **not** ship.

---

## 5. Phase gate status

* **DVC2 evidence repair:** COMPLETE for store-absence evidence, F21 split, automated desktop breakpoint pane asserts, capture relabeling.
* **Shipping asset:** `public/product/devices/desktop-calendar-1440.webp` remains an unedited real-app screenshot; classified as **automated browser capture**, not physical-desktop manual evidence.
* **Sibling app source:** unmodified by this work.
* **DVC2R:** may proceed using one/two/three-pane observations.
* **DVC3:** may publish only sentences whose claim-contract row is `PASS` under the two-approval rule.
