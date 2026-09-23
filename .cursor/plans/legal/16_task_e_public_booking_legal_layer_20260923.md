# Task E / LGL-4 implementation record — public booking legal layer

Date: 2026-09-23. Repo: beauty-finance, branch `bill`. Status: code complete,
not legally approved. This task implements the approved plan (00 §§6.4, 7.5, 8;
LGL-4); it does not author or approve law.

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
  fabricates a missing policy.
- `book()` requires `businessTermsAccepted === true` and
  `perelaiBookingTermsAccepted === true` (fail-closed,
  `BOOKING_LEGAL_ACCEPTANCE_REQUIRED`, before any writes). `marketingOptIn`
  is optional and never gates submission.
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
  `canBook` gates on both required checkboxes.
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
  rejected by `usableVersion`, so evidence records `null` rather than a
  placeholder.

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

Production launch of the public booking legal layer remains blocked on
counsel/owner deliverables, not code:

1. Approved immutable `LEGAL_BOOKING_TERMS_VERSION` and
   `LEGAL_BOOKING_ACCEPTANCE_COPY_VERSION` (plus landing publication of the
   Perelai Booking Terms document — 05 is still draft with `[TBD]`/`{{...}}`).
   Until configured, evidence rows record `null` for these versions.
2. Business-side disclosures are self-service settings; launch comms should
   tell businesses the layer warns on missing policies but Perelai does not
   create them.
3. Non-EN locales keep `defaultValue` English legal copy (counsel decision on
   translations, same posture as Task D round 2).
