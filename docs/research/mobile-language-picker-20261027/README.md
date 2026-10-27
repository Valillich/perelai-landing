# Mobile header language picker — 2026-10-27

The nested absolute language dropdown was clipped by MobileNav's scrollable
panel. The mobile header now uses a native select, whose option picker is
handled by the browser. Desktop and footer language disclosures are unchanged.
The existing locale cookie, analytics callback, localized path and query-string
handling are reused.

Verified on the existing development server at `http://localhost:3001`:

- 390px and 320px mobile widths; all nine options are available. At 320px the
  select is 161px wide and ends at x=257 within the 305px document client width.
- Actual RU → DE → RU and RU → EN → RU navigation on Pricing preserves
  `?view=compact`. English correctly uses the unprefixed `/pricing` route.
- The regression test first failed in all nine locales before the mobile
  header was wired to the native picker. It then passed in all nine locales.
- Header and routing suites: 32 tests passed. TypeScript and ESLint for changed
  files passed. `git diff --check` passed.
- The separate, previously reported `install-page` nav-budget test still fails:
  it expects four ordinary links. Both committed and current headers have
  three links plus the separate Features disclosure. This fix does not change
  that navigation list.
- Production legal verification with the current ENV passes for all seven
  documents. No legal text, hash, version, or ENV file was edited.

`fixed-mobile-390.png` shows the native selector in the open mobile menu.
The operating system option popup is outside the web-content screenshot;
selection was verified by actual route changes, not only by inspecting markup.

No commit or deployment. The user's development server was not restarted or
stopped. Browser checks use `localhost`, matching the server's origin.
