# U65–U69 — independent implementation and Privacy UX review

**Date:** 2026-10-08. **Status:** review complete; recommended refinements are not implemented or approved copy.

Reviewed app commit `dadd4cac448b91b13ec1592d89dc3ceb9eb74262` against parent
`88c8388707f54214496b9a97312468415ca77d39` using `git diff dadd4cac4^...dadd4cac4`.
Standards and specification checks were performed independently by the same reviewer, without
subagents, as requested. The current uncommitted polishing plan and landing specification 08
were read as specification; they were not overwritten.

Sources:

- [U65–U70 plan](/Users/valery/Sites/beauty-finance/.cursor/plans/polishing/11-public-booking-flow.md)
- [Implementation report](/Users/valery/Sites/beauty-finance/docs/audits/u65-69-public-booking-flow.md)
- [UI specification 08](08_ui_copy_and_surface_matrix.md)
- [Local example](http://book.localhost:4200/testacc-s-workspace)

## Standards review

No material documented coding-standard violation identified in the reviewed paths.
The API readiness extraction preserves submit validation order and legalRevision calculation.
The new UI uses the server's readiness result and does not silently grant assent. Marketing
UI/payload removal matches the selected MVP scope. Tests cover the unchanged consent gates.

Maintainability observation, not a release blocker: full-notice presentation is duplicated
between PublicBookingLegalSection's sheet and PublicBusinessPrivacyPage. The sheet has extra
Business contact/address fields; the standalone page only renders the notice response. A move
to the standalone page should consolidate necessary public document details rather than drop
the sheet-only fields or create a third renderer.

Verification caveat: `git diff --check` on the current working tree passes, but the reviewed
commit range reports whitespace in `docs/audits/u65-69-spec08.patch`. Those are embedded patch
context/Markdown lines; this is not a booking failure. The earlier report's clean check should
not be interpreted as a clean range-level patch check.

## Specification review — one actionable P2

**R1 / P2 — Business-notice permalink carries a language it does not apply.**

[PublicBookingPage.tsx:3384](/Users/valery/Sites/beauty-finance/apps/web/src/pages/PublicBookingPage.tsx:3384)
now appends `?lang=<normalised UI language>`, as required by U69. However,
[PublicBusinessPrivacyPage.tsx:10](/Users/valery/Sites/beauty-finance/apps/web/src/pages/PublicBusinessPrivacyPage.tsx:10)
does not resolve that parameter, unlike PublicBookingPage. The app's i18n detector uses the
querystring detector without configuring its key to `lang`.

Browser reproduction: open
`http://book.localhost:4200/book/testacc-s-workspace/privacy?lang=ru` with English browser
preference. The heading remains `MyWorkspace — Privacy Notice`, and the return link remains
`Back to booking`. Its href also omits `lang`. The body correctly stays `lang=uk` because that
is the published document language. A previously saved Russian preference can hide the bug.

Fix the **page shell** to honour the same normalised `lang` contract and retain it in the
token-free return link. Test a conflicting stored/browser locale against the URL, including
a fresh navigation. Do not silently translate the document or select a different country's
template as part of this fix.

No P0/P1 regression was identified in the reviewed readiness/assent paths. This is not a
complete product/security review, a legal opinion, or acceptance of U70 copy.

## What the local example actually shows

At review time, the supplied Company has the standard no-fee path with a generated
`business-booking-UA-uk-v1` notice. It no longer has the unavailable LEGACY_CUSTOM state
recorded in the implementation plan's earlier baseline. Treat that baseline as historical;
do not diagnose the current block as legacy merely from the old report.

Measured in the browser: the legal card is about **407 px wide × 465 px high**, with **13 px**
body text and approximately **21.1 px** line height. It contains the Ukrainian regional
summary, a separate English Perelai-role paragraph, links and a Ukrainian cancellation
reminder. This explains its size and mixed language without a CSS font-size defect.

The sheet opens the complete **Business-to-client privacy notice**: the salon's purposes,
data/recipient/retention facts and rights contacts, including Perelai's processing role.
The separate **Perelai Privacy Notice** describes the platform operator's own processing.
These are different notices. Showing only Perelai's document would omit the Business layer.

The current Business document and reminder stay Ukrainian because their immutable published
reference is UA/uk. U69 localises link labels/navigation; it does not translate a reviewed
template. Interface language must never select a foreign jurisdiction, such as US/en for a
Ukrainian salon. The seven platform originals are separately published in English.

## Recommended U68 follow-up before U70

These are proposed UX/spec changes, not findings that the executor disobeyed the plan:
U68 explicitly required a sheet and the regional summary verbatim. That instruction explains
why the current result is still large. Amend it deliberately before expecting a shorter card.

1. **Make both notice controls normal links opening a new tab.** The Business permalink
   already works without a token or login. Link to it directly instead of a sheet that
   contains another link to the same document. Preserve `target=_blank`, `rel=noopener noreferrer`
   and safe public URLs. Keep the booking selection in the original tab. Verify contact/address
   parity, version/date, document language and readable formatting on the standalone page.
   There is no product need for both Close and Cancel on a read-only legal document.
2. **Approve a genuinely shorter first layer.** Remove repeated purpose/role sentences and
   the positional phrase “in the notice below”. Retain the Business's identity/responsibility,
   essential data categories/purposes, Perelai's distinct role, meaningful access to full
   information and any required regional highlights. Do not use CSS clipping, ellipsis or
   an arbitrary character limit to hide them. Keep the no-fee cancellation reminder separate
   from Privacy, with its material terms visible and no invented deadline or penalty.
3. **Keep body text readable.** Recommend 13–14 px, normal contrast and roughly 1.45–1.55 line
   height; reduce redundant text and excessive gaps first. Do not shrink to 10–11 px to make
   the card look short. Version/date metadata can be smaller. Check 320/375 px, keyboard
   navigation and 200% text enlargement; no fixed-height truncation or sticky-footer overlap.
4. **Distinguish UI, first-layer and full-document language.** A short first layer may use
   approved translations tied to the same notice/profile. If the full notice has no matching
   translation, label its actual language at the link, e.g. “Salon privacy (Ukrainian)”.
   Such a label explains the limitation; it is not a substitute for understandable information
   for the intended audience. Add reviewed same-country translations for actual audiences
   rather than auto-translation or nine-country template substitution.
5. **Version the right artifact.** Layout-only direct links and the shell-language fix do not
   revise all seven platform documents. New UI wording goes into U70. If summary or reminder
   strings from the reviewed Business template change, their digest/version or an explicit
   immutable presentation variant must change too, and evidence must identify what was
   displayed. U70 approval alone must not silently mutate published v1/v2 templates. Preserve
   old references/evidence and the existing owner publication rules. Check the already prepared
   November v2 release so that it does not reintroduce the old long first layer.

Illustrative compact **RU first layer for the reviewed ordinary UA flow**, pending final
wording/translation approval (not a universal substitute for every market's summary):

> **О ваших данных**  
> {{BusinessName}} отвечает за ваши контактные данные и историю визитов и использует их для
> записи, обслуживания и сообщений. Perelai обрабатывает эти данные для бизнеса, а технические
> данные — для работы и защиты платформы.  
> Вопросы о данных: {{PrivacyContact}}.  
> **Уведомление салона · Уведомление Perelai**

A shorter standard reminder may retain: ask the client to notify cancellation/rescheduling,
give the contact, and state no prepayment, cancellation/no-show fee or payment on this page.
Keep any existing owner-selected 12/24-hour preference non-penalising. Custom terms are not
automatically rewritten or reduced to the standard reminder.

Layered delivery is supported by [OAIC guidance](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/more-guidance/guide-to-developing-an-app-privacy-policy).
Readability is not established by a particular pixel number: [WCAG Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text)
requires enlargement up to 200% without loss of content or functionality. The typography above
is a design recommendation, not a statutory minimum or universal compliance conclusion.

## Independent verification

- Browser inspected the actual supplied page, the generated-notice sheet and the token-free
  standalone page. No booking, agreement submission, account setting, ENV or database mutation.
- API: 2 suites / **180 tests passed** (public-booking legal projection and service).
- Web: 8 suites / **53 tests passed** (LegalSection, SwipeToConfirm, booking ob9,
  PublicBusinessPrivacyPage, next-step resolver, legal URL builder, legal links, public API schema).
- Tests ran under Node 20 with Jest caches in `/private/tmp`. The web mock of Framer Motion
  emits unknown DOM-prop warnings; no failed assertions in this run.
- Full web suite, typecheck, lint and provider/production flows were not rerun. The prior
  agent's 112-web/typecheck/lint claims are not independently reasserted here.

Next: fix R1 and agree/implement the small U68 follow-up above, verify the actual compact
layout and link language behavior, then assemble and approve U70. No additional consent
checkbox, market opening or production gate removal is needed for this UI refinement.
