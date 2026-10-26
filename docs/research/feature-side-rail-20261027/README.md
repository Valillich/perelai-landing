# Feature Side Rail — validated implementation

This scoped navigation refinement supersedes the [horizontal Progress Rail candidate](../feature-progress-rail-20261027/README.md). It restores the global Features dropdown on every landing page and places a local vertical reading guide beside the homepage feature content when space permits. No commit or deployment was performed.

## Behavior and layout

- The shared header exposes all eight feature destinations on home, pricing, install, and niche pages. Homepage links use local hashes; other pages target the localized homepage. Desktop selection and Escape close the dropdown. The mobile Features subgroup exposes the same destinations and closes the menu after selection.
- The side rail appears only at `min-width: 96rem` **and** `min-height: 36rem`. The feature zone uses `minmax(0,1fr) minmax(0,72rem) minmax(0,1fr)` columns, preserving the existing product content width. The navigator sits before the content in the grid and sticks within that zone. There is no top rail or reserved top slot.
- Roomy screens show eight compact labels and a continuous vertical connector. Elsewhere, a fixed bottom pill shows the full current topic, eight dots, and previous/next controls. The pill respects the bottom safe area. Every destination retains its full accessible name, native anchor behavior, focus styling, and active-location state.
- Connector fill uses `scaleY` between successive anchors, including Google Calendar nested within the first feature section. Passive scrolling schedules measurements through `requestAnimationFrame`; only topic and visibility changes enter React state. There is no endless pulse. Reduced-motion preferences disable transitions and smooth anchor scrolling.
- The local guide becomes hidden, `aria-hidden`, and inert outside the feature area. Sticky containment carries the side rail out with its feature zone before the following How section.

## Incumbent system preserved

Source comparison covered `app/globals.css`, the homepage and navigator, shared header/menu components, locale layout, and navigation helpers. The implementation retains Inter, the existing 12px rail-label scale and 13px pill-topic text, semantic light/dark surfaces and text, `brand-600` progress color, the header's rounded translucent pill, and the existing `max-w-6xl` product width and responsive gutters. The compact navigator reuses the existing rounded, bordered surface language; the roomy side rail is transparent and borderless.

Product copy, section order, product mocks, fonts, palette tokens, analytics, and backend behavior are preserved. Nine published locales provide short labels. This introduces no new visual world or global design-system rule: `PRODUCT.md`, `DESIGN.md`, and the design sidecar were not created or changed. Existing unrelated drift was not repaired or canonized. The initially dirty `next-env.d.ts` change was preserved.

## Evidence and verification

These are unedited CUA snapshots, not full-page captures or pixel comparisons against a composition. Browser viewport and snapshot pixel dimensions differ:

| Capture | Browser viewport | Snapshot pixels | Scope |
| --- | --- | --- | --- |
| [ru-desktop-1536.png](ru-desktop-1536.png) | 1536 × 900 | 1516 × 891 | Russian, side rail, light |
| [ru-desktop-dark.png](ru-desktop-dark.png) | 1536 × 900 | 1516 × 891 | Russian, side rail, dark |
| [ru-laptop-pill.png](ru-laptop-pill.png) | 1440 × 900 | 1425 × 891 | Russian, bottom pill |
| [ru-mobile.png](ru-mobile.png) | 390 × 844 | 375 × 812 | Russian, mobile pill |
| [de-mobile-320.png](de-mobile-320.png) | 320 × 740 | 305 × 705 | German, narrow mobile |
| [pricing-dropdown.png](pricing-dropdown.png) | 1280 × 800 | 1265 × 791 | Pricing, global dropdown |

Recorded runtime checks:

- Product content remains 1152px wide at both 1536px and 1920px viewports. At 1536px, content spans x=184.5–1336.5; the rail spans x=1352.5–1505, is 152.5px wide and 352px high, and sticks at y=102.
- At 1440px the pill is 384 × 54px. It remains 54px high at 390px and 320px; dot hit widths are 33.625px and 24.875px respectively. The narrow targets remain a compact-navigation caveat, not a global component-sizing rule.
- At How, the feature zone bottom is y=96.125 and rail bounds are y=−247.875–104.125, including its 8px exit translation. The guide reports `data-visible="false"` and has `inert`.
- Pricing's `/ru#cash-reconciliation` destination was inspected and followed successfully; install/niche `/ru#team-access` links were verified. German mobile selection exposes all eight destinations and closes the menu.
- At German 320px, root `scrollWidth=310` and `clientWidth=305` were observed. The clipping audit found no unclipped element beyond the client edge, and the navigation box fits. This evidence does **not** establish that the whole page is free of horizontal overflow.

Validation passed: 145 tests across six files, TypeScript checking, and full ESLint. The header integration test covers nine locales in all four page contexts. The [detector result](detect.json) is `[]`; the scoped finish review returned `ship` with no material navigation fixes.

## Reproduce

Run `pnpm dev --port 3001` from the project root. Inspect `/ru` at 1536 × 900 and 1920px width for the side rail; use 1440 × 900, 390 × 844, and German 320 × 740 for the pill. Scroll through successive anchors and past the feature zone, follow header destinations from pricing/install/niche pages, test keyboard dismissal and mobile selection, and check dark/reduced-motion modes. The verification server is stopped after review; restart it to reproduce.
