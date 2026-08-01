# DVC7 Device Release Evidence

**Audit date:** 2026-08-01  
**Landing repository:** `/Users/valery/Sites/perelai-landing`  
**Sibling application:** `/Users/valery/Sites/beauty-finance` — inspected read-only; no app files changed.

Evidence types are kept distinct below. `PASS` from source, unit tests, or browser emulation is never recorded as physical-device evidence. The production preview available to this audit had a fixed 1280px viewport, so it cannot close target-width or physical-device rows.

## Automated release gates

| requirement | evidence/command | result | owner | date | blocker |
|---|---|---|---|---|---|
| TypeScript gate | `pnpm typecheck` | PASS | Codex (landing) | 2026-08-01 | — |
| Lint gate | `pnpm lint` | PASS | Codex (landing) | 2026-08-01 | — |
| Required test command | `pnpm test` with host Node `v20.18.0` | BLOCKED — Vite 7/Vitest startup fails with `ERR_REQUIRE_ESM`; no assertions run. | Codex (landing) | 2026-08-01 | Host Node is below Vite 7's required `>=20.19.0`. |
| Test suite on supported runtime | `PATH=/Users/valery/.nvm/versions/node/v20.19.5/bin:$PATH pnpm test` | PASS — 15 files, 166 tests. Includes device content, install, shell, SEO/sitemap/schema and analytics tests. | Codex (landing) | 2026-08-01 | Does not make the required host-runtime command pass. |
| Niche verification | `pnpm verify:niches` | PASS — 32 pages, 17 mock keys, 12 rail keys, 9 locales; uniqueness floor retained. | Codex (landing) | 2026-08-01 | — |
| Production build | `pnpm build` | PASS — 72 static pages generated. | Codex (landing) | 2026-08-01 | — |
| Whitespace gate | `git diff --check` | PASS | Codex (landing) | 2026-08-01 | — |
| Metadata, schema, sitemap, llms and analytics | `tests/seo-surface.test.ts`, `tests/install-page.test.ts`, `tests/analytics.test.ts` within the supported-runtime suite | PASS — locale metadata limits, `SoftwareApplication`, `/install` alternates, llms contract, fixed analytics enums and no fingerprint fields are covered. | Codex (landing) | 2026-08-01 | — |
| Device-content contracts | `tests/device-content.test.ts` and `tests/device-shell.test.ts` within the supported-runtime suite | PASS — message parity, banned claims, screenshot contract, rails, deterministic dataset and fixture drift guards. | Codex (landing) | 2026-08-01 | — |
| Forbidden package/dependency scan | `grep -R -n -E 'device-mockup\|react-device\|@react-three\|three\|recharts' components lib` | PASS — no matches after removing non-dependency prose false positives; `git diff -- package.json pnpm-lock.yaml` is empty. | Codex (landing) | 2026-08-01 | — |
| Component color-token scan | `grep -R -n -E '#…\|rgba?(…numeric… )\|…color utility…' components/mock components/devices` | PASS — no direct component color literals; colors resolve through `app/globals.css` tokens. | Codex (landing) | 2026-08-01 | — |
| Clock nondeterminism scan | `grep -R -nF 'Date.now()' components lib` | PASS — no matches. | Codex (landing) | 2026-08-01 | — |
| Deterministic static HTML | Two consecutive `pnpm build` runs; SHA-256 for `en`, `de`, `pl` `/install` HTML: `dbb96c…c892`, `2eaf6b…5487`, `533c4f…0638` both times. | PASS — byte-identical after fixed production build ID. | Codex (landing) | 2026-08-01 | — |
| Claim scan | `tests/device-content.test.ts` banned-claim rules plus scan of `messages`, `content`, `app`, `components`, `lib` | PASS — no `PWA`, native-app, download CTA, store-availability or one-click claim. “Offline” occurs only in the visible negative FAQ question/answer. | Codex (landing) | 2026-08-01 | — |
| Broken-link audit | Production-build crawl of 63 emitted internal anchors, manual redirects disabled. | PASS — 0 HTTP failures, 0 unexpected redirects. | Codex (landing) | 2026-08-01 | — |
| Orphan-link audit | Header/footer source contracts, sitemap test, and 63-anchor production crawl. | PASS — `/install` is in navigation, footer, sitemap and locale alternates. | Codex (landing) | 2026-08-01 | — |

## Served screenshot and social-image budget

| requirement | evidence/command | result | owner | date | blocker |
|---|---|---|---|---|---|
| Shipping desktop screenshot source | Production `GET /product/devices/desktop-calendar-1440.webp` | PASS — `image/webp`, 126,214 bytes, under 200KB. | Codex (landing) | 2026-08-01 | — |
| Shipping desktop screenshot optimized response | Production `GET /_next/image?url=%2Fproduct%2Fdevices%2Fdesktop-calendar-1440.webp&w=1920&q=75` | PASS — `image/jpeg`, 91,784 bytes, under 200KB. | Codex (landing) | 2026-08-01 | — |
| English OG image | Production `/en/install/opengraph-image/default` | PASS — PNG, 115,950 bytes. | Codex (landing) | 2026-08-01 | — |
| English Twitter image | Production `/en/install/twitter-image/default` | PASS — PNG, 115,950 bytes. | Codex (landing) | 2026-08-01 | — |
| Ukrainian OG image | Production `/uk/install/opengraph-image/default` | PASS — PNG, 118,368 bytes. | Codex (landing) | 2026-08-01 | — |
| Ukrainian Twitter image | Production `/uk/install/twitter-image/default` | PASS — PNG, 118,368 bytes. | Codex (landing) | 2026-08-01 | — |
| Polish OG image | Production `/pl/install/opengraph-image/default` | PASS — PNG, 120,186 bytes. | Codex (landing) | 2026-08-01 | — |
| Polish Twitter image | Production `/pl/install/twitter-image/default` | PASS — PNG, 120,186 bytes. | Codex (landing) | 2026-08-01 | — |
| Russian OG image | Production `/ru/install/opengraph-image/default` | PASS — PNG, 122,644 bytes. | Codex (landing) | 2026-08-01 | — |
| Russian Twitter image | Production `/ru/install/twitter-image/default` | PASS — PNG, 122,644 bytes. | Codex (landing) | 2026-08-01 | — |
| Spanish OG image | Production `/es/install/opengraph-image/default` | PASS — PNG, 116,560 bytes. | Codex (landing) | 2026-08-01 | — |
| Spanish Twitter image | Production `/es/install/twitter-image/default` | PASS — PNG, 116,560 bytes. | Codex (landing) | 2026-08-01 | — |
| French OG image | Production `/fr/install/opengraph-image/default` | PASS — PNG, 124,154 bytes. | Codex (landing) | 2026-08-01 | — |
| French Twitter image | Production `/fr/install/twitter-image/default` | PASS — PNG, 124,154 bytes. | Codex (landing) | 2026-08-01 | — |
| German OG image | Production `/de/install/opengraph-image/default` | PASS — PNG, 123,406 bytes. | Codex (landing) | 2026-08-01 | — |
| German Twitter image | Production `/de/install/twitter-image/default` | PASS — PNG, 123,406 bytes. | Codex (landing) | 2026-08-01 | — |
| Portuguese OG image | Production `/pt/install/opengraph-image/default` | PASS — PNG, 120,618 bytes. | Codex (landing) | 2026-08-01 | — |
| Portuguese Twitter image | Production `/pt/install/twitter-image/default` | PASS — PNG, 120,618 bytes. | Codex (landing) | 2026-08-01 | — |
| Turkish OG image | Production `/tr/install/opengraph-image/default` | PASS — PNG, 118,347 bytes. | Codex (landing) | 2026-08-01 | — |
| Turkish Twitter image | Production `/tr/install/twitter-image/default` | PASS — PNG, 118,347 bytes. | Codex (landing) | 2026-08-01 | — |

## Definition of Done — plan §14

| requirement | evidence/command | result | owner | date | blocker |
|---|---|---|---|---|---|
| 1. Device positioning supports, not replaces, core value | Homepage Devices source and DVC copy audit: booking/client/money remains primary; device block occurs after Money. | PASS | Codex (landing) | 2026-08-01 | — |
| 2. No prospect-facing PWA terminology | Claim scan and `tests/device-content.test.ts`. | PASS | Codex (landing) | 2026-08-01 | — |
| 3. Browser first, optional install, no store listing | `messages/*/devices.json`; claim contract PASS rows for browser delivery, optionality and no store. | PASS | Codex (landing) | 2026-08-01 | — |
| 4. No native/offline/download/store-badge implication | Claim scan, visible negative offline FAQ, and no badge source. | PASS | Codex (landing) | 2026-08-01 | — |
| 5. `/install` is canonical, localized, static, linked, non-orphaned | Install/SEO tests, production build and internal crawl. | PASS | Codex (landing) | 2026-08-01 | — |
| 6. No thin platform SEO pages | Route/config audit: no `/ios-app`, `/android-app`, `/ipad-app`, `/desktop-app`; `install` reserved. | PASS | Codex (landing) | 2026-08-01 | — |
| 7. Homepage has early reassurance and one full device section | `components/homepage/devices.tsx`, homepage messages and DVC5 source audit. | PASS | Codex (landing) | 2026-08-01 | — |
| 8. Niche pages use shared compact block; uniqueness green | `pnpm verify:niches`; shared `DeviceConfidence` source. | PASS | Codex (landing) | 2026-08-01 | — |
| 9. CTAs create/login; no fake landing install CTA | Install tests plus rendered `/install` CTA hrefs. | PASS | Codex (landing) | 2026-08-01 | — |
| 10. Story uses rendered product surfaces, not stock imagery | Mock shell components plus mounted `next/image` real-app honesty anchor. | PASS | Codex (landing) | 2026-08-01 | — |
| 11. Rail labels generated and drift guard fails | `MockDesktopRail`, generated UI strings and `verify:niches` fixture test. | PASS | Codex (landing) | 2026-08-01 | — |
| 12. One dataset across real density breakpoints | `DeviceDensityLadder`, app-screen dataset tests and real 1024/1360 thresholds. | PASS | Codex (landing) | 2026-08-01 | — |
| 13. Every §8.1 principle holds; §8.9 verdict recorded | Source review and rows below; the German 360 dark rendered review is not complete. | BLOCKED | Codex (landing) | 2026-08-01 | Target-width visual review is unavailable in this session. |
| 14. All device visuals render in 9 locales, light/dark | Key parity passes; full visual locale/theme matrix was not manually rendered. | BLOCKED | Codex (landing) | 2026-08-01 | 9-locale × light/dark target-width visual audit missing. |
| 15. Shipping screenshot is real, synthetic, PII-free, accurately captioned | Capture manifest; mounted localized alt/caption; production image checks. | PASS | Codex (landing) | 2026-08-01 | — |
| 16. Repeated visuals rendered, not screenshot explosion | Component inventory and one screenshot asset only. | PASS | Codex (landing) | 2026-08-01 | — |
| 17. Strong device claims have current manual evidence | Claim contract §3 and capture manifest. | BLOCKED | Sibling app owner | 2026-08-01 | Physical iPhone/iPad/Android and app installation evidence absent. |
| 18. Store answer is standalone and consistent across page, llms, JSON-LD, OG | `tests/seo-surface.test.ts` answer-engine and entity-consistency tests. | PASS | Codex (landing) | 2026-08-01 | — |
| 19. Four-assistant dated baseline logged | `docs/research/device-answer-engine-baseline.md`. | PASS — unavailable assistant surfaces are explicitly dated and not inferred. | Codex (landing) | 2026-08-01 | — |
| 20. Every locale has complete human-reviewed device copy/metadata | Key parity and metadata tests pass, but no human-review sign-off names or evidence are recorded. | BLOCKED | Content owner | 2026-08-01 | Human locale-review attestation missing. |
| 21. Web-only schema matches visible content | `SoftwareApplication` tests; no MobileApplication, Offer, FAQPage, rating or store URL scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 22. Sitemap, canonical, hreflang, OG/Twitter, llms include `/install` truthfully | SEO/install tests and 18 production social responses. | PASS | Codex (landing) | 2026-08-01 | — |
| 23. Analytics answers a decision without fingerprinting/PII | Analytics tests and tracking plan audit. | PASS | Codex (landing) | 2026-08-01 | — |
| 24. No A/B test runs without sample calculation | Experiment backlog states sample requirement; source scan found no active experiment/flag implementation. | PASS | Codex (landing) | 2026-08-01 | — |
| 25. All gates, claims scan, asset budget and manual matrix pass | Automated landing checks pass on supported Node; host `pnpm test` and manual matrix remain open. | BLOCKED | Codex and app owners | 2026-08-01 | Host Node test startup; physical and target-width manual matrix gaps. |
| 26. Release evidence ends READY or BLOCKED with exact blockers | This document. | PASS — it ends in BLOCKED with the minimum grouped blocker list. | Codex (landing) | 2026-08-01 | — |

## Plan §13 validation matrix

| requirement | evidence/command | result | owner | date | blocker |
|---|---|---|---|---|---|
| Landing homepage: 320, 360, 390 responsive emulation | Source/tests pass; available production Browser fixed at 1280px. | BLOCKED | Codex (landing) | 2026-08-01 | Required target-width browser emulation not available in this session. |
| Landing `/install`: 320–430 plus physical phone | Source/tests pass; no physical phone supplied. | BLOCKED | Codex and device tester | 2026-08-01 | Required narrow-width and physical-phone run missing. |
| Landing `/install`: 768, 820, 1024 tablet | Source/tests pass; no resizable browser target or tablet. | BLOCKED | Codex and device tester | 2026-08-01 | Required tablet viewport run missing. |
| Landing `/install`: 1360, 1440, 1600 desktop Chrome/Edge | Fixed 1280px preview passes no-overflow; requested widths and Edge not exercised. | BLOCKED | Codex and device tester | 2026-08-01 | Required desktop width/Edge run missing. |
| App normal browser: iPhone Safari | Claim contract and DESK20 evidence. | BLOCKED | Sibling app owner | 2026-08-01 | Physical iPhone Safari not supplied. |
| App standalone: iPhone/iPad launch | Claim contract and DESK20 evidence. | BLOCKED | Sibling app owner | 2026-08-01 | Physical Home Screen launch not supplied. |
| App normal browser: Android Chrome | Claim contract and DESK20 evidence. | BLOCKED | Sibling app owner | 2026-08-01 | Physical Android Chrome not supplied. |
| App standalone: Android installed | Claim contract and DESK20 evidence. | BLOCKED | Sibling app owner | 2026-08-01 | Physical Android installed launch not supplied. |
| App normal browser: desktop Chrome/Edge 1024/1360/1600 | Capture manifest verifies automated panes; DESK20 manual desktop row remains open. | BLOCKED — automated capture is not physical/manual desktop evidence. | Sibling app owner | 2026-08-01 | Headed Chrome/Edge manual run missing. |
| App fallback: desktop Safari/Firefox without install prompt | Claim contract and DESK20 evidence. | BLOCKED | Sibling app owner | 2026-08-01 | Safari/Firefox fallback run missing. |
| App embedded: iOS webview → Safari | Claim contract and DESK20 evidence. | BLOCKED | Sibling app owner | 2026-08-01 | Physical embedded-browser escape run missing. |
| Rendered surfaces: 360/768/1024/1360/1600, light/dark, en/de | Source contracts and unit coverage pass; the fixed-width preview cannot close visual evidence. | BLOCKED | Codex (landing) | 2026-08-01 | Target-width rendered visual matrix missing. |
| Rendered surfaces: theme toggle | Production preview: unique toggle, dark class enabled then removed; no horizontal overflow at 1280px. | PASS — browser-rendered desktop check, not physical-device proof. | Codex (landing) | 2026-08-01 | — |
| Rendered surfaces: two builds | Consecutive build SHA-256 comparison. | PASS | Codex (landing) | 2026-08-01 | — |
| Accessibility: keyboard, reduced motion, 200% zoom, screen reader | Semantic summary/hidden chrome source verified; browser keyboard CUA did not advance focus and no screen reader/zoom run was available. | BLOCKED | Accessibility tester | 2026-08-01 | Keyboard, screen-reader, reduced-motion and 200% zoom smoke tests missing. |
| Localization: all published locales, light/dark | Complete-message test passes; rendered clipping matrix not executed. | BLOCKED | Content and device tester | 2026-08-01 | Visual review for all 9 locales and themes missing. |

## Copy-editing Seven Sweeps

Scope: homepage additions, `/install`, shared niche block, FAQs, metadata, OG text and `llms.txt`. Every shipping device claim maps to a PASS row in `docs/device-claim-contract.md` through `docs/device-copy-audit.md` §2; the amended visual summary maps to the PASS responsive-density row.

| requirement | evidence/command | result | owner | date | blocker |
|---|---|---|---|---|---|
| Sweep 1 — Clarity | Re-read current English source, visible `/install` preview, and `docs/device-copy-audit.md` §7. | PASS | Codex (landing) | 2026-08-01 | — |
| Sweep 2 — Voice and tone | Same scope; browser-first, calm tone preserved without device-install promises. | PASS | Codex (landing) | 2026-08-01 | — |
| Sweep 3 — So what | CTA/handoff and limitation copy reviewed against core value proposition. | PASS | Codex (landing) | 2026-08-01 | — |
| Sweep 4 — Prove it | Claim contract, store-search evidence, schema/SEO tests and prohibited-claim scan. | PASS | Codex (landing) | 2026-08-01 | — |
| Sweep 5 — Specificity | Exact app URL, optional-install limitation, verification-email expectation and real screenshot caption checked. | PASS | Codex (landing) | 2026-08-01 | — |
| Sweep 6 — Heightened emotion | Relief-oriented wording retained; no unsupported superlative, urgency or scarcity added. | PASS | Codex (landing) | 2026-08-01 | — |
| Sweep 7 — Zero risk | Browser fallback, store absence, online limitation, verification email and CTA destinations checked. | PASS | Codex (landing) | 2026-08-01 | — |

## Plan §8.1 premium-principle review

| requirement | evidence/command | result | owner | date | blocker |
|---|---|---|---|---|---|
| §8.1.1 One object, not three | `DeviceDensityLadder` source; `/install` preview; no peer screenshot row. | PASS — homepage composition is one object; `/install` uses emphasis tabs and one below-fold honesty anchor. | Codex (landing) | 2026-08-01 | — |
| §8.1.2 Chrome is the proof | Mock mobile bottom bar and desktop 82px rail source; rendered 1280 preview. | PASS | Codex (landing) | 2026-08-01 | — |
| §8.1.3 Only pane density changes | Shared `AppScreenDataset` prop and `device-shell` tests. | PASS | Codex (landing) | 2026-08-01 | — |
| §8.1.4 Restraint over spectacle | Component source scan for 3D, perspective, glow, gradient/blob and heavy device effects. | PASS | Codex (landing) | 2026-08-01 | — |
| §8.1.5 Deliberate alignment | Reused `DeviceFrame`, container-query ladder and actual product thresholds. | PASS | Codex (landing) | 2026-08-01 | — |
| §8.1.6 German 360px dark-mode ugly case | German messages complete; no 360px dark rendered preview was possible. | BLOCKED | Codex (landing) | 2026-08-01 | German 360px dark visual/clipping review missing. |

## Plan §8.9 anti-pattern verdicts

Each row is a separate review verdict. `Source review` covers the named landing surface; `1280 preview` means the rendered production preview. These results do not substitute for the blocked target-width visual matrix above.

| requirement | evidence/command | result | owner | date | blocker |
|---|---|---|---|---|---|
| 1. Three separate device images — homepage ladder | Source review of `DeviceDensityLadder`; 1280 preview. | PASS | Codex (landing) | 2026-08-01 | — |
| 1. Three separate device images — install hero | Source review of `DevicePage`. | PASS | Codex (landing) | 2026-08-01 | — |
| 1. Three separate device images — install phone panel | Source review of `DeviceShowcase`. | PASS | Codex (landing) | 2026-08-01 | — |
| 1. Three separate device images — install tablet panel | Source review of `DeviceShowcase`. | PASS | Codex (landing) | 2026-08-01 | — |
| 1. Three separate device images — install desktop panel/screenshot | Source review and mounted image preview. | PASS | Codex (landing) | 2026-08-01 | — |
| 2. Tilted/3D/perspective — homepage ladder | Source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 2. Tilted/3D/perspective — install hero | Source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 2. Tilted/3D/perspective — install phone panel | Source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 2. Tilted/3D/perspective — install tablet panel | Source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 2. Tilted/3D/perspective — install desktop panel/screenshot | Source review and mounted image preview. | PASS | Codex (landing) | 2026-08-01 | — |
| 3. Notch/Dynamic Island hardware likeness — homepage ladder | `DeviceFrame` source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 3. Notch/Dynamic Island hardware likeness — install hero | `DeviceFrame` source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 3. Notch/Dynamic Island hardware likeness — install phone panel | `DeviceFrame` source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 3. Notch/Dynamic Island hardware likeness — install tablet panel | `DeviceFrame` source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 3. Notch/Dynamic Island hardware likeness — install desktop panel/screenshot | Capture-manifest/image review. | PASS | Codex (landing) | 2026-08-01 | — |
| 4. Fake browser chrome/URL bar — homepage ladder | Source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 4. Fake browser chrome/URL bar — install hero | Source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 4. Fake browser chrome/URL bar — install phone panel | Source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 4. Fake browser chrome/URL bar — install tablet panel | Source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 4. Fake browser chrome/URL bar — install desktop panel/screenshot | Capture-manifest/image review. | PASS | Codex (landing) | 2026-08-01 | — |
| 5. Gradient blob/glow — homepage ladder | Source review and component color scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 5. Gradient blob/glow — install hero | Source review and component color scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 5. Gradient blob/glow — install phone panel | Source review and component color scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 5. Gradient blob/glow — install tablet panel | Source review and component color scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 5. Gradient blob/glow — install desktop panel/screenshot | Source review and image review. | PASS | Codex (landing) | 2026-08-01 | — |
| 6. Desktop shell squeezed to 360px — homepage ladder | `min-w-[64rem]` plus scroll-container source review. | PASS — code prevents squeeze; 360 visual row remains blocked separately. | Codex (landing) | 2026-08-01 | — |
| 6. Desktop shell squeezed to 360px — install hero | `min-w-[64rem]` plus overflow container source review. | PASS — code prevents squeeze; 360 visual row remains blocked separately. | Codex (landing) | 2026-08-01 | — |
| 6. Desktop shell squeezed to 360px — install phone panel | Uses mobile shell, not desktop shell. | PASS | Codex (landing) | 2026-08-01 | — |
| 6. Desktop shell squeezed to 360px — install tablet panel | Tablet has `min-w-[620px]` inside an overflow container. | PASS — code prevents squeeze; 360 visual row remains blocked separately. | Codex (landing) | 2026-08-01 | — |
| 6. Desktop shell squeezed to 360px — install desktop panel/screenshot | Desktop has `min-w-[64rem]` inside overflow container; screenshot is desktop native size. | PASS — code prevents squeeze; 360 visual row remains blocked separately. | Codex (landing) | 2026-08-01 | — |
| 7. Hand-typed rail labels — homepage ladder | `MockDesktopRail` generated-string source and `verify:niches`. | PASS | Codex (landing) | 2026-08-01 | — |
| 7. Hand-typed rail labels — install hero | `MockDesktopRail` generated-string source and `verify:niches`. | PASS | Codex (landing) | 2026-08-01 | — |
| 7. Hand-typed rail labels — install phone panel | Mobile surface has no desktop rail. | PASS | Codex (landing) | 2026-08-01 | — |
| 7. Hand-typed rail labels — install tablet panel | `MockDesktopRail` generated-string source and `verify:niches`. | PASS | Codex (landing) | 2026-08-01 | — |
| 7. Hand-typed rail labels — install desktop panel/screenshot | Source guard; screenshot classified as real-app evidence. | PASS | Codex (landing) | 2026-08-01 | — |
| 8. Different data across densities — homepage ladder | One `dataset` prop into all shells; shell tests. | PASS | Codex (landing) | 2026-08-01 | — |
| 8. Different data across densities — install hero | Same page-level dataset source review. | PASS | Codex (landing) | 2026-08-01 | — |
| 8. Different data across densities — install phone panel | Same `DeviceShowcase` dataset prop. | PASS | Codex (landing) | 2026-08-01 | — |
| 8. Different data across densities — install tablet panel | Same `DeviceShowcase` dataset prop. | PASS | Codex (landing) | 2026-08-01 | — |
| 8. Different data across densities — install desktop panel/screenshot | Same mock dataset; screenshot labelled actual product/example data. | PASS | Codex (landing) | 2026-08-01 | — |
| 9. Second autoplay carousel — homepage ladder | Homepage source: only existing `HeroShowcase`; device ladder is static. | PASS | Codex (landing) | 2026-08-01 | — |
| 9. Second autoplay carousel — install hero | Static mock shell source. | PASS | Codex (landing) | 2026-08-01 | — |
| 9. Second autoplay carousel — install phone panel | Explicit user-selected tabs; no autoplay source. | PASS | Codex (landing) | 2026-08-01 | — |
| 9. Second autoplay carousel — install tablet panel | Explicit user-selected tabs; no autoplay source. | PASS | Codex (landing) | 2026-08-01 | — |
| 9. Second autoplay carousel — install desktop panel/screenshot | Static shell and static image source. | PASS | Codex (landing) | 2026-08-01 | — |
| 10. App Store/Google Play badge — homepage ladder | Badge/source claim scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 10. App Store/Google Play badge — install hero | Badge/source claim scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 10. App Store/Google Play badge — install phone panel | Badge/source claim scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 10. App Store/Google Play badge — install tablet panel | Badge/source claim scan. | PASS | Codex (landing) | 2026-08-01 | — |
| 10. App Store/Google Play badge — install desktop panel/screenshot | Badge/source claim scan and screenshot review. | PASS | Codex (landing) | 2026-08-01 | — |
| 11. AI-generated/redrawn/cleaned UI — homepage ladder | Source uses rendered mock kit and generated app strings, not an image model. | PASS | Codex (landing) | 2026-08-01 | — |
| 11. AI-generated/redrawn/cleaned UI — install hero | Source uses rendered mock kit. | PASS | Codex (landing) | 2026-08-01 | — |
| 11. AI-generated/redrawn/cleaned UI — install phone panel | Source uses rendered mock kit. | PASS | Codex (landing) | 2026-08-01 | — |
| 11. AI-generated/redrawn/cleaned UI — install tablet panel | Source uses rendered mock kit. | PASS | Codex (landing) | 2026-08-01 | — |
| 11. AI-generated/redrawn/cleaned UI — install desktop panel/screenshot | Capture manifest records unedited real-app screenshot; mock is rendered. | PASS | Codex (landing) | 2026-08-01 | — |

## Additional required manual checks

| requirement | evidence/command | result | owner | date | blocker |
|---|---|---|---|---|---|
| Physical install UI where supported | Claim contract and DESK20 status. | BLOCKED | Sibling app owner | 2026-08-01 | No physical supported-device install run. |
| Already-installed behavior | App `resolveInstallRoute` source hides/reduces install UI; no physical standalone session. | BLOCKED — source is not physical evidence. | Sibling app owner | 2026-08-01 | No already-installed physical run. |
| Internet-loss behavior matches visible limitation | Claim contract/source confirms no offline shell and page says internet is required; loss was not exercised. | BLOCKED — source is not network-loss evidence. | Sibling app owner | 2026-08-01 | No app network-loss run. |
| CTA URL, verification email, landing → app handoff | Install tests and rendered CTA URLs: login `http://localhost:4200/login`; signup `/register` with canonical `landing_path=/install` and locale. | PASS | Codex (landing) | 2026-08-01 | — |
| No app changes from landing audit | Landing-only diff review; sibling read-only evidence inspection. | PASS | Codex (landing) | 2026-08-01 | — |
| Sibling-app clean-tree gate | Existing DVC evidence records pre-existing sibling worktree changes; this audit left them untouched. | BLOCKED | Sibling app owner | 2026-08-01 | Pre-existing sibling dirty worktree prevents a clean-tree assertion. |

## Verdict

BLOCKED

- Run `pnpm test` with Node 20.19.0 or later (the current default Node 20.18.0 cannot start Vite 7).
- Complete the landing target-width visual/accessibility matrix: 320/360/390/768/820/1024/1360/1440/1600, German at 360px dark, all locales/light-dark, keyboard, screen reader, reduced motion and 200% zoom; record human locale-review sign-off.
- Complete the sibling app's physical iPhone Safari, iPad portrait/landscape, Android Chrome, headed desktop Chrome/Edge and no-install-prompt fallback, installed/previously-installed, embedded-webview → Safari, and internet-loss checks; resolve or separately attest the sibling clean-tree state.
