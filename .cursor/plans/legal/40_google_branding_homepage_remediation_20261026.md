# Google Branding — public homepage and application purpose

Date: 2026-10-26. Scope: the owner's two findings “homepage behind login” and Google API
Terms/application-purpose/AI NCII clarification. Privacy-policy sufficiency is outside this change.
Status: implementation locally verified; owner explicitly chose a ready commit only.
Not pushed or deployed; Google re-review is separate.

## Findings and boundary of evidence

The owner confirmed `https://perelai.com` is the Application home page in Google Branding.
Anonymous GET `https://perelai.com/` returned 200 with zero redirects on 2026-10-26.
A Googlebot user agent with English Accept-Language returned the same public HTML (200, zero redirects).
Russian Accept-Language returned 307 to `/ru`, then 200 on the same domain. The response contains
the product title, purpose and content, without a password form. No account cookies were supplied.
These checks cannot reconstruct the earlier reviewer visit or prove Google will accept a resubmission.

There is no observed login gate to remove at the confirmed homepage. `perelai.app` is the product
origin and requires account access for private workspace features; the public homepage URL stays
`https://perelai.com/`. No auth protection was weakened, and the OAuth URL was not replaced speculatively.

The existing public hero/body uses `Reveal`, whose initial HTML ancestor has
`style="opacity:0;transform:translateY(24px)"`. A reviewer/browser that does not execute the reveal
can miss the purpose text. This is a confirmed visibility risk, not a proven explanation for Google's
specific login finding. Core hero text and the Features introduction now use `fade={false}` so their
text stays visible before client JavaScript. Other feature animations remain as implemented.

The local English Next dev root exhibited the existing `/` → internal `/en` → `/` self-redirect.
Production `/` did not reproduce it. Local browser QA used `/ru` and `/de`; English copy was verified
by server rendering. This change does not silently change the locale-routing contract to solve a
dev-only issue or claim it caused the production review finding.

## Visible Google explanation

A compact, server-rendered block is inside `#features`, immediately after Operations and before
payment records. It is plain expanded text, outside Reveal/FAQ and outside How it works. It explains:

- Google sign-in: basic profile/email to access the person's Perelai account.
- Calendar: optional import from the selected Google calendar into Perelai's schedule.
- Read-only: Perelai does not change or delete Google events.
- Availability: Calendar import is in testing, not generally available; Perelai works without it.
- Direct localized Privacy Notice link. The English link is exactly `/legal/privacy`.

All nine published locales include raw `home.googleAccess` strings, without English fallback.
The limited-availability sentence deliberately does not claim an accepted production Calendar rollout.

Read-only app evidence at `de499ad0c`:

- `apps/api/src/auth/google.strategy.ts`: `openid`, `email`, `profile`; profile used for identity.
- `libs/server/calendar-sync/src/lib/contracts/google-calendar-scopes.ts`: only
  `https://www.googleapis.com/auth/calendar.events.readonly`.
- `.cursor/plans/calendar-sync/README.md`: CS5 blocked; implementation acceptance is separate
  from a real OAuth/provider/worker release walkthrough.
- Current product category/capability source: appointments, clients, payment records, packages
  and finance review. No image-generation/AI NCII workflow was found in the reviewed app source.
  This is a scoped source observation, not a certification of every dependency or legal compliance.

No public sentence about NCII is added to normal product marketing: the application purpose and
requested data use are stated directly. The reviewer clarification below answers the explicit finding.

## Verification

- 91 focused tests passed: nine-locale disclosure HTML, visible text/link and read-only/pilot semantics,
  homepage order, locale routing and raw locale coverage.
- TypeScript and ESLint passed.
- RU desktop/mobile and DE mobile screenshots checked for normal wrapping and Privacy-link visibility.
- Public homepage was inspected without signing in. New core purpose/disclosure HTML contains no
  opacity-zero ancestor; JavaScript is not required to reveal those texts.
- How it works, analytics, app backend/auth, Google scopes, Privacy content/approved legal hashes
  and production settings were not changed.

Evidence files:

- [HTTP/HTML verification](../../../docs/research/google-branding-20261026/verification.json).
- [RU desktop](../../../docs/research/google-branding-20261026/ru-desktop.jpg),
  [RU mobile](../../../docs/research/google-branding-20261026/ru-mobile.jpg),
  [DE mobile](../../../docs/research/google-branding-20261026/de-mobile.jpg).
- [Published homepage before these changes](../../../docs/research/google-branding-20261026/public-home-before.jpg).

This owner request supersedes the historical G8 “OMITTED” choice in the positioning checklist
only for an explanatory integration block with an explicit testing caveat. It grants no Calendar
rollout, new scopes or claim of completed CS5/provider approval.

## Publication and Google handoff

Publish the verified landing change through the normal deployment, then check the **deployed**
English `https://perelai.com/` and its Features block in a signed-out browser. Homepage in Branding
remains `https://perelai.com/`; Privacy URL remains `https://perelai.com/legal/privacy`.
If the login finding persists, ask Google for the exact resolved URL and timestamp; check CDN/WAF
request evidence for that visit rather than assuming the login-required app origin was submitted.
Do not mark a finding resolved merely because these local files changed. The separate Privacy-content
finding still requires its own response before claiming all Google issues have been addressed.

### Draft reply after publication (not sent)

> Perelai is web software for independent service professionals and small teams to manage
> appointments, client records and recorded payments. Our application homepage is
> https://perelai.com/ and is publicly accessible without an account or sign-in. The homepage
> describes the product and includes a visible Features section explaining our Google data use.
>
> Google sign-in uses basic profile information and email for account access. Connecting Google
> Calendar is optional and currently in testing; it imports events from the selected calendar into
> the Perelai schedule using read-only access. Perelai does not modify or delete Google events.
>
> Perelai does not generate or manipulate intimate imagery and does not use Google APIs for
> AI-generated non-consensual intimate imagery. Its Google integration serves account access
> and calendar-event import. Please review the public homepage and let us know the exact URL
> and access time if you still encounter a login screen.

This draft addresses only the two findings in scope; it is not a statement that the separate
Privacy-policy finding has been resolved or that Google's approval was received.

## Sources checked 2026-10-26

- [Google — App Homepage](https://support.google.com/cloud/answer/13807376?hl=en): publicly accessible
  purpose/features and transparent explanation of requested user data; a visible Privacy link.
- [Google APIs Terms, §2(b)](https://developers.google.com/terms#b_compliance_with_law_third_party_rights_and_other_google_terms_of_service).

## Calendar publication flag — owner follow-up, 2026-10-26

`NEXT_PUBLIC_GOOGLE_CALENDAR_RELEASED=false` is documented in `.env.example` and set in
local `.env`. Missing, false or invalid values keep the testing warning visible. Explicit
`true` removes only the testing sentence after a landing rebuild; the independent sentence
that Calendar connection is optional remains visible in all nine locales. This controls
marketing text only and grants no app/OAuth access. Change it in deployment ENV and rebuild
only when the integration is generally released (provider verification, CS5 and actual rollout).

The existing `NEXT_PUBLIC_PRODUCT_STAGE_ENABLED` flag is independent: unset defaults to true,
and it controls the Beta badge in app previews (`MockDesktopRail` / `ProductStageBadge`).
Its behavior/current value was not changed. It is now documented in `.env.example`.
