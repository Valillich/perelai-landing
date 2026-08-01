# Device Validation Matrix

**Repository:** `/Users/valery/Sites/perelai-landing`
**Sibling App (Read-Only Evidence):** `/Users/valery/Sites/beauty-finance`
**Created:** 2026-08-01
**Phase:** DVC0 — Baseline & Claim Contract
**Governing Plan:** `.cursor/plans/devices/00_device_distribution_marketing_plan_20260731.md` §13

---

## 1. Available Tester Environment & Tools Audit

Direct environment inspection on this workstation (`2026-08-01`):

| Environment Category | Exact Version / Installed Tool | Availability Status | Evidence Type Designation |
|---|---|---|---|
| **Host Operating System** | macOS 26.5.2 (Build 25F84, Apple Silicon) | Available | Host environment |
| **Desktop Web Browser (Primary)** | Google Chrome 150.0.7871.187 | Available | Physical desktop / Browser emulation |
| **Desktop Web Browser (Firefox)** | Mozilla Firefox | NOT INSTALLED / UNAVAILABLE | N/A |
| **Desktop Web Browser (Edge)** | Microsoft Edge | NOT INSTALLED / UNAVAILABLE | N/A |
| **Mobile Emulation Tool** | Chrome DevTools Device Mode | Available | Browser emulation |
| **Apple iOS Simulator** | Xcode / `xcrun simctl` | NOT INSTALLED / UNAVAILABLE (`xcrun` error 72) | N/A |
| **Android Studio Emulator** | Android SDK / Emulator | NOT INSTALLED / UNAVAILABLE | N/A |
| **Automated Test Runners** | Vitest 1.x / Jest 29.x | Available | Unit / Integration test |
| **Physical Mobile Hardware** | Physical iPhone / Android Phone | Unverified in current session | Physical device (`BLOCKED`) |

---

## 2. Transcribed & Extended Validation Matrix

This matrix transcribes Plan §13, specifies exact available environments on this machine, distinguishes evidence types (Physical Device, Simulator, Browser Emulation, Unit Test), and records current verification status.

| Surface | Width / Device | Browser / Mode | What Must Be Proved | Available Tester Tool / Environment | Evidence Type | Current Status |
|---|---|---|---|---|---|---|
| **Landing homepage** | 320, 360, 390 CSS px | Chrome / Safari responsive emulation | Reassurance does not crowd CTA; device section scans; no horizontal scroll. | macOS Chrome 150 DevTools | Browser Emulation | `BLOCKED` (Device section pending DVC3/DVC5) |
| **Landing `/install`** | 320–430 CSS px | iPhone / Android emulation + one physical phone | All content and CTAs usable; no fake direct-install behavior. | macOS Chrome 150 DevTools & Physical Phone | Browser Emulation / Physical Device | `BLOCKED` (Route pending DVC4) |
| **Landing `/install`** | 768, 820, 1024 CSS px | Tablet portrait / landscape | Cards/tabs and real screenshots match captions; touch targets >=44px. | macOS Chrome 150 DevTools (iPad preset) | Browser Emulation | `BLOCKED` (Route pending DVC4) |
| **Landing `/install`** | 1360, 1440, 1600 CSS px | Desktop Chrome / Edge | Desktop proof readable; layout capped at 1600px; no oversized empty canvas. | macOS Chrome 150 | Physical Desktop | `BLOCKED` (Route pending DVC4) |
| **App normal browser** | iPhone Safari | Browser (`perelai.app`) | Login/use without installing; guided Home Screen instructions. | Physical iPhone Safari (Simulator UNAVAILABLE) | Physical Device | `BLOCKED` (DESK20 matrix in progress) |
| **App standalone** | iPhone / iPad | Home-screen launch | Icon and standalone window; conditional push only if production VAPID verified. | Physical iPhone / iPad | Physical Device | `BLOCKED` (DESK20 matrix in progress) |
| **App normal browser** | Android Chrome | Browser (`perelai.app`) | App usable; native prompt/install action only when browser exposes it. | Physical Android Chrome (Emulator UNAVAILABLE) | Physical Device | `BLOCKED` (DESK20 matrix in progress) |
| **App standalone** | Android compatible browser | Installed | Icon launch and standalone display mode. | Physical Android Device | Physical Device | `BLOCKED` (DESK20 matrix in progress) |
| **App normal browser** | Desktop Chrome / Edge | `1024`, `1360`, `1600` CSS px | Two-pane (`1024-1359`) and three-pane (`>=1360`) claims match actual UI with 82px rail. | macOS Chrome via Playwright headless (authenticated synthetic workspace) | Automated browser capture (DOM pane-asserted) | `PASS` for layout-density evidence — see `device-capture-manifest.md` §2. Not a physical/manual desktop checklist. |
| **App fallback** | Desktop Safari / Firefox | Browser (`perelai.app`) | Product remains usable even when install action is absent. | macOS Safari 17+ (Firefox UNAVAILABLE) | Physical Desktop | `BLOCKED` (DESK20 matrix in progress) |
| **App embedded** | Instagram-style iOS webview | Embedded -> Safari | Escape guidance ("Open in Safari") is truthful and actionable. | Physical iPhone (Instagram/Telegram link) | Physical Device | `BLOCKED` (DESK20 matrix in progress) |
| **Rendered device surfaces** | 360, 768, 1024, 1360, 1600 CSS px | Light & Dark, `en` & `de` locales | Ladder renders phone, tablet, desktop; pane count changes at real thresholds; 82px rail labels legible; no clipping; §8.9 anti-patterns absent. | Vitest DOM tests + Chrome 150 rendering | Unit Test / Browser Emulation | `PASS` (Components & 3-density ladder verified in DVC2R/DVC3) |
| **Rendered device surfaces** | Any viewport | Theme toggle | Compositions follow light/dark in both directions (verifies token application without screenshots). | Chrome 150 DevTools + Vitest test | Unit Test / Browser Emulation | `PASS` (Verified token-only styling & dark mode classes) |
| **Rendered device surfaces** | Any viewport | Two consecutive builds | `/install` HTML byte-identical; no `Date.now()` or dynamic non-deterministic leakage. | Vitest build verification / Node script | Unit Test | `PASS` (Deterministic build identity verified) |
| **Accessibility** | All layout classes | Keyboard, reduced motion, 200% zoom | One active tree, visible focus, correct headings/labels, no content loss. Decorative chrome `aria-hidden`; summary sentence reachable. | VoiceOver on macOS, Keyboard nav, Chrome 150 DevTools | Physical Desktop / Unit Test | `BLOCKED` (Final route audit pending DVC7) |
| **Localization** | All `PUBLISHED_LOCALES` (`en, uk, pl, ru, es, fr, de, pt, tr`) | Light & Dark | Complete strings, correct platform terminology, no clipping. | Vitest message key test + Browser rendering | Unit Test / Browser Emulation | `PASS` (Corrected catalog & landing messages across 9 locales in DVC3) |

---

## 3. Evidence Type Definitions & Constraints

1. **Unit & Integration Test Evidence:** Code-derived verifications (Vitest, `pnpm verify:niches`, key parity, SSG byte-identity). Validates contract rules and prevents drift, but cannot prove visual browser rendering or physical OS installation.
2. **Browser Emulation Evidence:** Chrome DevTools Device Mode at target CSS dimensions. Validates CSS media queries, container queries, visual hierarchy, and basic responsive layout.
3. **Simulator Evidence:** Xcode iOS Simulator or Android Studio Emulator. **Currently UNAVAILABLE on this workstation** (`xcrun simctl` error 72; Android Emulator not installed).
4. **Physical Device Evidence:** Real physical iPhone, iPad, Android phone, or Desktop machine. **MANDATORY for unblocking physical installation, standalone display mode, and push notification claims.** Code presence or unit test pass is NOT physical-device evidence.
