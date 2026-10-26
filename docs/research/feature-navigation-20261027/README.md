# Feature navigation · 2026-10-27

The header’s Features disclosure and homepage navigator share eight destinations:
booking, optional Google Calendar, payments/packages, cash reconciliation, team
access, finance overview, revenue breakdown and devices. Labels exist in all nine
published locales. Section order and existing analytics remain unchanged.

Desktop: the floating navigator shows the previous, current and next topics,
plus arrows and an expandable contents list. Mobile/tablet: a compact current
topic with the same arrows and contents. It appears alongside the feature
sections and disappears after Devices. Ordinary scrolling is never intercepted.

Header links on Pricing, Install and niche pages resolve to the localized
homepage, including niche pages with their own unrelated `#features` anchor.
Native header disclosures keep destinations accessible before hydration.
Escape closes disclosures; desktop dropdown and contents close on outside click.
Scroll animation respects reduced motion. Lists scroll within short viewports;
the mobile navigator accounts for the bottom safe area.

Validation:

- 125 targeted tests passed across feature navigation, homepage order, Google
  disclosure, locale routing and raw locale coverage.
- TypeScript and full ESLint passed; changed files rechecked after final polish.
- Browser: RU desktop (1440 × 900), RU/DE mobile (390 × 844), desktop Pricing
  (1280 × 800). Checked direct links, current-topic tracking, contents, arrows,
  Escape, menu close after selection and hiding beyond the feature sections.
- Screenshots: `ru-header-menu.png`, `ru-desktop.png`, `ru-mobile.png`,
  `de-mobile.png`.

Local change only; no deployment.
