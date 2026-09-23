# Task E / LGL-4 implementation record — public booking legal layer

Date: 2026-09-23. Repo: beauty-finance, branch `bill`. Status: code complete,
not legally approved. This task implements the approved plan (00 §§6.4, 7.5, 8;
LGL-4); it does not author or approve law.

**Later product decision:** [document 19](19_simple_booking_legal_setup_20260923.md) replaces the
interim custom-URL/default-block UX with a planned standard SOLO/STUDIO setup and a reviewed generated
Business notice. This record describes the implementation before that new UX. Do not interpret its
11 fields as universally mandatory: refund absence does not itself block current intake, and the
standard no-prepayment/no-fee path must not require it. No deployment/implementation of 19 is claimed.

## What was implemented

### API

- `Company` gained structured business legal fields (schema.prisma):
  `legalBusinessName`, `legalTraderAddress`, `businessContactEmail`,
  `privacyContactEmail`, `privacyNoticeUrl`, `bookingTermsUrl`,
  `cancellationPolicyText`/`Url`, `refundPolicyText`/`Url`,
  `legalPolicyVersion`, `legalPoliciesUpdatedAt` (server-stamped on disclosure
  edits).
- New append-only model `PublicBookingLegalEvidence`
  (migration `20260923120000_public_booking_legal_layer`, trigger reuses
  `reject_legal_acceptance_mutation`). `entityId`/`clientId` have no FK so
  evidence survives deletion of the booking entity and the client row.
- Follow-up migration `20260923130000_public_booking_legal_evidence_restrict`
  switches the `companyId` FK to `ON DELETE RESTRICT`, matching ADR-0016:
  workspace deletion must not silently erase end-client acceptance evidence.
- `sanitizeBusinessLegalUrl` / `businessLegalUrlOptions`
  (`apps/api/src/legal/business-legal-url.ts`): rejects `javascript:`,
  `data:`, credential-bearing URLs and non-HTTPS links outside local
  development (localhost/127.0.0.1 allowed when NODE_ENV != production).
- `PATCH /companies/current/legal-settings` (roles OWNER/ADMINISTRATOR/
  SUPERVISOR, billing action `COMPANIES_UPDATE_LEGAL_SETTINGS`): validates and
  stores the structured fields; unsafe URLs are rejected, not stored.
- `GET /public/booking/:slug/info` now returns `legal`: a re-sanitised
  projection (unsafe stored URLs dropped, never rendered) plus a `missing`
  list of disclosures the business has not configured. Perelai never
  fabricates a missing policy. The projection also carries `perelai`
  (booking terms + collection-copy versions) and a server-generated
  `revisionId` — a hash of the exact disclosure/version snapshot shown.
- `book()` requires `legalRevision` matching the recomputed current
  revision of the company's legal projection — a stale or unknown revision
  is rejected before any write, so evidence always binds the version the
  client actually saw (review R2). Migration
  `20260923140000_public_booking_legal_revision` adds `legalRevision` +
  `disclosureSnapshot` to the evidence row.
- `book()` requires `perelaiBookingTermsAccepted === true` and — only when
  the business actually published BOTH its booking terms and a cancellation
  disclosure — `businessTermsAccepted === true` (fail-closed,
  `BOOKING_LEGAL_ACCEPTANCE_REQUIRED`, before any writes). Approved Perelai
  booking/copy versions are required server-side; without them contractual
  intake is unavailable rather than recorded as `null` (review R3).
  `marketingOptIn` is optional and never gates submission.
- All four handlers (APPOINTMENT/RENTAL via Transaction, REQUEST via
  PublicServiceRequest, ORDER via Order) record evidence inside the same
  transaction: one `BOOKING_AGREEMENT` row with the rendered version/hash
  snapshot (business policy + cancellation + Perelai Booking Terms version +
  copy version + locale), plus a separate `MARKETING_OPT_IN` row only when
  opted in. `acceptedAt` is server time only.

### Web

- `PublicBookingLegalSection` (new) at the collection point on
  `PublicBookingPage`: layered privacy notice (08 §5.1), required Business
  agreement with terms/cancellation links immediately adjacent (§5.2),
  separate required Perelai Booking Terms statement, privacy acknowledgement
  as text — not a checkbox (§5.3), optional unchecked marketing opt-in (§5.4).
  `canBook` gates on both required checkboxes; the Business checkbox renders
  only when both business documents exist — otherwise a transparent
  "has not published its booking and cancellation terms" warning replaces
  the agreement claim (review R3, 08 §8).
- The section renders all configured business disclosures (review R6):
  trader address, business contact email, privacy contact email, refund
  policy text/link, cancellation text/link, business privacy/terms links.
  The privacy acknowledgement falls back to a Perelai-only statement when
  no business privacy notice or contact was presented.
- `PublicBookingLegalNotice` (existing, link-only) retained on the booking
  page footer and via `PublicResultShell` on confirmation / proposal / request
  status / order status / receipt / email-confirmation views, plus
  `PublicClientHubPage`, `PublicClientPreferencesPage` and
  `PublicMagicLinkRequestPage`. No contractual re-acceptance is asked on
  status surfaces.
- Perelai links are built by `buildLandingLegalUrl` from allowlisted context —
  no booking/client/status token or token-bearing path is ever forwarded.
- §5.5 status copy aligned in `en/common.json`: "Booked — check the
  confirmation details.", "Request sent — the business still needs to
  confirm.", "Request sent — this is not a confirmed appointment.", "Order
  request sent — this does not confirm acceptance or payment.", "Reservation
  request sent — availability is not confirmed yet."
- `PublicBookingSettingsSheet` gained the Business legal settings block with
  the §6 intro copy ("Perelai provides the page technology but does not create
  or approve your legal terms…") and per-field labels.

### Env

- `.env.example`: `LEGAL_BOOKING_TERMS_VERSION` and
  `LEGAL_BOOKING_ACCEPTANCE_COPY_VERSION` (+ `VITE_LEGAL_BOOKING_TERMS_VERSION`)
  remain `[TBD: counsel-approved immutable version]` — unusable values are
  rejected by `usableVersion`. The initial pass recorded `null`; the later
  correction rejects new submissions before writes until usable approved
  versions are configured. Do not use the initial-pass behaviour as the contract.

## Tests

- `business-legal-url.spec.ts` — 21 cases (schemes, credentials, https-only in
  production, local dev exception).
- `public-booking.service.spec.ts` LGL-4 block — per-mode rejection without
  acceptance, business-only acceptance insufficient, safe `getInfo` projection
  with unsafe-URL dropping, missing-disclosure reporting, evidence snapshot
  with version/hash, marketing evidence separation.
- `PublicBookingLegalSection.spec.tsx` — 15 cases: layered notice per mode,
  link hrefs/target/rel, checkbox separation, acknowledgement-not-checkbox,
  marketing unchecked, missing-policy rendering without fabrication, escaped
  inline policy text (XSS), link clicks not toggling checkboxes, accessible
  names/region.
- Fixture updates: `requests.service.spec.ts`, `operational-inbox`,
  `public-rental-reservations`, `public-rental-inventory`,
  `public-booking-coworker-confirmation`, `billing-public-enforcement`,
  `public-booking.controller.spec.ts`, `locale-persistence.spec.ts`,
  `PublicBookingPage.rental/ob9.spec.tsx`.

## Verification

- API unit: 260/260 in touched suites (public-booking, legal, companies).
- Web: 65/65 across PublicBookingPage suites + legal component/link specs.
- `tsc --noEmit` api: clean except pre-existing BILL-WIP error
  (`billing.controller.ts` `getAttemptStatus`); web: clean except pre-existing
  ClientsPage/FinancePage/ServicesEditorPage/TransactionDetailsPage/
  inboxMutationCommitted errors.
- Migrations applied to dev and test DBs; `migrate status` clean.

## Pre-existing failures (verified on HEAD service, not LGL-4)

- `operational-inbox.integration.spec.ts`: `emitPublicBookingEmailConfirmation`
  spy — method removed in `0dbf3ee4f` (notification secret refactor); two
  `waitForOrderNotification` timeouts likewise fail on HEAD.
- `public-rental-inventory.integration.spec.ts`: same missing spy.
- `public-rental-reservations.integration.spec.ts`: outbox count 1 vs 2 fails
  on HEAD.
- `locale-persistence.spec.ts` locale test: `assertBillingAllowed`
  ServiceUnavailableException fails on HEAD (BILL enforcement predates spec
  update).

## Blocked production dependency

The implemented interim layer still requires the following publication facts.
Document 19 separately adds the pending engineering work for simple setup:

1. Approved immutable `LEGAL_BOOKING_TERMS_VERSION` and
   `LEGAL_BOOKING_ACCEPTANCE_COPY_VERSION` (plus landing publication of the
   Perelai Booking Terms document — 05 is still draft with `[TBD]`/`{{...}}`).
   Until configured, new submissions are rejected before any evidence row is created.
2. Business-side disclosures are self-service settings; launch comms should
   tell businesses that Perelai does not create their policies. Since the
   second pass (review R3) the intake is fail-closed server-side: without
   approved Perelai booking/copy versions no contractual submission is
   accepted at all, and the business agreement is only demanded when the
   business published both documents — a missing set shows a warning, not
   an agreement claim about absent text.
3. Non-EN locales keep `defaultValue` English legal copy (counsel decision on
   translations, same posture as Task D round 2).

## Second-pass corrections (2026-09-23, review 18 R2–R6)

- **R2** — `legalRevision` binding: GET issues `legal.revisionId`; POST must
  echo it and is rejected on mismatch before any booking/client/token/
  evidence write. Evidence rows persist `legalRevision` and the full
  `disclosureSnapshot` shown to the client.
- **R3** — readiness gate: `getPublicBookingLegalProjection` returns Perelai
  versions in the projection; `book()` refuses submissions when approved
  Perelai versions are absent, and demands the business agreement only when
  the business published both booking terms and a cancellation disclosure.
- **R4** — workspace provisioning (`bindCompanyScope`) now checks the full
  owner evidence set (Terms + DPA as AUTHORIZED_BUSINESS_REPRESENTATIVE,
  Privacy as PERSONAL_USE) and records only missing documents in the same
  transaction; existing scope links are reused, duplicates rejected.
- **R5** — invite registrations (staff + coworker) open legal documents as
  clean URLs in a new tab (`cleanLinks` on `OwnerLegalAcceptanceField` /
  `AuthLegalLinks`, driven by `RegisterPage.isInviteFlow`), preserving the
  `return_to` invite context; no token reaches the landing site.
- **R6** — trader address, contact/privacy-contact emails and refund policy
  disclosures render in `PublicBookingLegalSection`; absent values are never
  fabricated.
- **Test infra** — parallel jest runs dropped `fireEvent` clicks on DOM nodes
  replaced by in-flight re-renders and hit the 1 s `waitFor` default under
  CPU starvation. Fixed via `asyncUtilTimeout: 5000` (configured from
  `@testing-library/dom` in `setupFiles` — importing RTL there would break
  auto-cleanup), `testTimeout: 15000`, and state-observed waits between
  dependent interactions in the ob9/rental/quantity/proposal specs.

## Third-pass corrections (2026-09-23, review 18 §6 P1 re-review)

- **R1 (landing)** — `LEGAL_DRAFT_PREVIEW` no longer weakens the canonical
  route: `isLegalProductionGateEnabled` is unconditional (`NODE_ENV` only).
  Drafts render exclusively from the isolated `/legal-preview/[document]`
  route — noindex/nofollow, self-canonical, absent from the sitemap, and
  fail-closed at both build (no static params without the flag) and runtime
  (`notFound()`). Canonical tests now assert rejection even with the flag set.
- **R2 (api)** — evidence semantics narrowed to the honest claim: the snapshot
  records per-document `capturedText` (inline, byte-exact) vs `externalUrl` +
  `contentCaptured: false` (URL shown, hosted content NOT captured). A
  same-URL external document swap does not change `revisionId` — schema and
  code comments state this boundary explicitly; no "exact external text"
  claim remains. A server-fetch snapshot or business-supplied immutable hash
  remains an optional future strengthening.
- **R3 (api+web)** — absent/incomplete business booking documents no longer
  produce `BOOKING_AGREEMENT` rows; a new `PERELAI_TERMS_ACCEPTANCE` kind
  records the Perelai terms acceptance with `businessAgreement:
  NOT_PRESENTED` and the `missing` list (migration
  `20260923150000_public_booking_evidence_kind_perelai_terms`). A privacy
  contact email no longer counts as a Business Privacy Notice — `missing`
  includes `privacyNotice` without a real `privacyNoticeUrl`, and the UI
  falls back to the Perelai-only acknowledgement.
  - **Warning path is gated, not chosen**: 08 §8 block-vs-warning stays a
    counsel decision. By default the intake is `BLOCKED` — submissions are
    rejected (`BOOKING_LEGAL_UNAVAILABLE`, no writes) and the UI shows an
    unavailability notice. The warning path activates only via
    `LEGAL_BOOKING_MISSING_POLICY_WARNING_ENABLED=true` (documented release
    gate). The projection exposes `businessAgreement:
    REQUIRED|WARNING|BLOCKED`, which also participates in `revisionId`.
  - Per-document version/hash columns are `null` when the document was not
    presented — a configured `legalPolicyVersion` is never recorded against
    an absent policy.
  - `disclosureSnapshot.documents.*` uses separate signals:
    `inlineTextCaptured` (verbatim inline text) and
    `externalContentCaptured: false` (external URL content never captured).
- **R4 (api)** — `bindCompanyScope` selects `documentVersion` and requires
  each document to match the currently configured version; superseded
  evidence is treated as missing (Forbidden without a fresh submission, or
  re-accepted at current versions in the same transaction). Pointed
  current-version check only — no general material-change flow.
