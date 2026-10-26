> Superseded candidate: the approved [side rail and global Features dropdown](../feature-side-rail-20261027/README.md) replaces this horizontal variant. The original evidence below is retained for reference.

# Feature Progress Rail — Variant A

Implemented the Progress Rail from `feature-nav-concept.md` as a scoped extension of the existing landing page. The former floating feature card and header feature dropdown are replaced by a rail below the measured sticky header. The header’s Features link enters the feature tour; its mobile counterpart closes the menu after selection.

## Shipped behavior

- Eight native anchor destinations follow the existing page order: `features`, `google-calendar`, `payments-packages`, `cash-reconciliation`, `team-access`, `finance-overview`, `finance-breakdown`, and `devices`.
- Desktop uses a 48px rail with eight short labels. Below the desktop breakpoint, a 40px rail shows the full active topic above eight dots. All links retain full accessible names and native keyboard, hash, and history behavior.
- Each connector fills continuously between successive anchor positions, including Google Calendar nested within the first feature section. Passive scrolling schedules measurements through `requestAnimationFrame`; connector transforms update without React renders on every scroll position.
- The rail is visible around the feature content and becomes hidden, `aria-hidden`, and inert outside it. Its normal-flow slot prevents entrance and exit from shifting content. Light/dark themes and reduced-motion preferences are supported.

## Existing visual system preserved

Source comparison covered `app/globals.css`, the homepage, rail, header, mobile menu, and shared navigation helpers. The rail reuses the incumbent Inter sans family, 12px label scale, `max-w-6xl` container, responsive gutters, semantic background/foreground/muted/border colors, and `brand-600` accent. The header’s rounded pill, translucent surface, typography, CTA, and theme/language controls remain within the incumbent design.

No palette or typography tokens were replaced. The stylesheet removes only the obsolete floating navigator’s bottom offset. Product copy, section order, analytics, and backend behavior are retained; nine published locale files add compact rail labels. This is a scoped navigation refinement, not a new visual identity. Absent `PRODUCT.md` and `DESIGN.md` remain absent; no global design document or sidecar was generated or refreshed for this change. Incumbent system files and unrelated drift were not repaired or canonized.

## Evidence

These are unedited CUA snapshot captures of the finished rail, not full-page captures or pixel comparisons against a supplied composition. Browser viewport dimensions and snapshot pixel dimensions differ:

| Capture | Browser viewport | Snapshot pixels | Scope |
| --- | --- | --- | --- |
| [ru-desktop.png](ru-desktop.png) | 1440 × 900 | 1425 × 891 | Russian, desktop, light |
| [ru-desktop-dark.png](ru-desktop-dark.png) | 1440 × 900 | 1425 × 891 | Russian, desktop, dark |
| [ru-mobile.png](ru-mobile.png) | 390 × 844 | 375 × 812 | Russian, mobile |
| [de-mobile-320.png](de-mobile-320.png) | 320 × 740 | 305 × 705 | German, narrow mobile |

Runtime checks recorded a 71px header, the expected 48px/40px rail heights, and an anchor resting at 152px below a desktop rail ending at 119px. Ordinary wheel scrolling moved a partial connector fill from 0.196 to 0.550. Mobile node hit widths were 42.875px at the 390px viewport and 34.125px at 320px. At 320px, document/body widths were 305px with no root horizontal overflow; the capture includes the viewport scrollbar.

Before/after feature visibility, native anchor positioning, mobile Features menu closure, and the hidden state past the features/FAQ were checked. Hidden state had `data-visible="false"`, `aria-hidden="true"`, and `inert`. The [detector result](detect.json) is `[]`. The fresh scoped finish review returned `ship` with no material fixes.

Validation completed: 136 targeted tests across five files, TypeScript checking, and full ESLint.

## Reproduce

Run `pnpm dev --port 3001` from the project root, then open the local homepage in Russian or German. Scroll into the features to inspect the rail, follow its anchors, and scroll beyond the feature area to confirm it disappears. Check desktop and 390px/320px mobile widths, toggle the theme, and enable reduced motion to inspect the static transitions. The evidence server is stopped after verification; restart it for review.

No commit or deployment was performed.
