# AU/en v1 — preparation and activation handoff

**Prepared:** 2026-09-25; code-integrated 2026-09-26. **State:** ACTIVE_IN_CODE_NOT_DEPLOYED.
**Authority:** `owner-au-en-preparation-20260925` — the owner's request to prepare Australia
for activation, reusing the established common operating facts. The resulting code integration is
recorded below; it is not a claim of professional legal certification, statutory exemption or deployment.
Do not request the same identity, provider or retention choices again.

## Exact artifact

- Human source: [AU.en.standard.v1.draft.md](AU.en.standard.v1.draft.md).
- Import candidate: [AU.en.standard.v1.prepared.json](AU.en.standard.v1.prepared.json), `.template`.
- Synthetic preview: [AU.en.standard.v1.preview.md](AU.en.standard.v1.preview.md).
- Version: `business-booking-AU-en-v1`; prepared effective date: `2026-09-25`.
- Country/language: `AU` / `en` (Australian English); profile: `ORDINARY_NON_MEDICAL`.
- Modes: `APPOINTMENT`, `REQUEST`; no online payments, prepayments or cancellation/no-show fees.
- Actual application's digest: `1137bb2886e94cda3ca3d879a4230bcde1957c24b144137cdeea036dd09c992d`.
- Active current reference: AU → this exact version/profile/language.
- Runtime tokens only: `BUSINESS_NAME`, `CONTACT_EMAIL`, `PRIVACY_CONTACT_EMAIL`.

The packet wrapper records `ACTIVE_IN_CODE_NOT_DEPLOYED`. The runtime registry imports this exact
template and its exact current reference; the admission catalog opens AU as `PUBLIC`. English UI
and AUD/en-AU already exist; no new locale was added.

## Code activation (2026-09-26)

- Added the exact prepared `.template` to `REVIEWED_TEMPLATES` and its exact
  `.currentReference` to `CURRENT_TEMPLATES` in the application registry.
- Changed only Australia's existing admission entry to `PUBLIC`; the currency remains `AUD`,
  the locale remains `en-AU`, and no language-based country fallback or adjacent market was opened.
- The registry resolves both current and pinned AU references. Owner preview → fact confirmation
  → atomic publication is covered with synthetic fixtures for both `APPOINTMENT` and `REQUEST`.
  The published draft retains the country/language/version/profile/content digest reference.
- This change did not publish a legal setup for any Company, access a real Company, deploy an
  application build, or alter a provider, migration or database.

## Australian adaptation and applicability

The content is a reusable Business booking notice. It separates the Business's client records
from the FOP's independent platform purposes and retains the existing human fact-confirmation
workflow. It does not replace Perelai's own platform Privacy Notice, DPA, SaaS Terms or Refund Policy.

- **Scope, not an assumed exemption.** OAIC guidance retains a general small-business exemption
  for annual turnover A$3m or less, with exceptions including health services, trading in personal
  information, covered related bodies and specified contracts/activities. Assess the actual FOP
  and Business separately, including an overseas organisation's Australian link. Country and
  SOLO/STUDIO labels do not determine coverage. The text does not assert either is exempt.
- **Local rights and complaints.** Access and correction, proportionate verification, written
  refusals, correction statements/recipient notification where applicable, a Business contact and
  an OAIC escalation route are included. About 30 days is a reasonable operational response aim,
  not a fabricated universal statutory deadline. No general GDPR-style right to deletion is claimed.
  The monitored existing mailboxes can support this MVP process; no new privacy portal is required.
- **Anonymous enquiries.** General enquiries can be anonymous or use a preferred name where
  practicable; an actual online appointment still needs enough information and a working contact.
  Do not demand government ID for ordinary booking. The template does not promise anonymous email
  confirmation when the flow requires an address.
- **Overseas handling.** Germany and the US are known processing locations. Ukraine is accurately
  identified as the FOP's registration location, not invented as every support session's location.
  Variable remote access, network/Calendar/image providers and a contact route are disclosed.
  If more likely recipient countries can practicably be specified, update the unpublished candidate
  before release; global wording is not permission to omit a known practical country list. The APP 8
  clause does not use booking submission as consent to waive overseas accountability.
- **Consumer remedies.** Ukrainian law is limited to the separate Perelai relationship and does
  not override mandatory Australian Consumer Law rights or select law for a salon-client contract.
  No salon Refund Policy field is required for the no-money booking flow. Paid-service remedies
  remain available where applicable; a no-fee reminder does not disclaim them.
- **Excluded special flows.** This is not health/sensitive-data intake, biometrics or a children's
  data workflow. Actual beauty/wellness services that involve health information need assessment;
  a non-medical label alone is insufficient. No US under-13 rule, CCPA or EU-representative boilerplate
  is imported into the Australian copy.

This is a practical baseline for the selected process, not a declaration that all Australian
obligations are met by a notice. Preparing it is not a formal application to opt into the Privacy Act.

## Common facts and honest evidence boundary

The owner-approved FOP identity, support@perelai.app, Hetzner/Falkenstein, Resend/Plus Five Five,
Cloudflare, optional Google Calendar, variable remote support, no-advertising booking profile,
90-day/24-month history limits, Company 30/30 and narrow 1095-day acceptance evidence are reused.
Only supported Business slots remain. The calendar date is already current; retain the generic
future/invalid-date guard and do not add a bypass ENV.

Use the previously accepted UA/US MVP retention and deletion procedures with their actual limits.
Manual retention skips require operator resolution; a skipped record is not deleted merely because
the CLI exited successfully. Synthetic drills and owner release decisions are not proof of a live
Company deletion, off-host restore or deployed retention. No additional deletion or infrastructure
redesign is imposed solely for translating this baseline to AU.

## Verification of code activation

- The application's digest of the integrated runtime entry is
  `1137bb2886e94cda3ca3d879a4230bcde1957c24b144137cdeea036dd09c992d`.
  All five client-copy Markdown blocks match the prepared JSON and runtime template exactly.
- The AU default and a pinned AU reference resolve to this template. There are 12 successful
  renders (two modes × three reminders × shared/separate privacy contact), and rejects cover
  wrong country, `ORDER`/`RENTAL`, stale digest and changed content.
- Synthetic preview → confirmation → atomic publication passes for both `APPOINTMENT` and
  `REQUEST`, retaining the pinned country/language/version/profile/content-digest reference.
- Focused checks passed: 156 API tests, 19 web tests and 156 core tests. API, web and core
  TypeScript no-emit checks passed. Existing UA and US digest assertions still pass.
- No database, migration, ordinary-Company deletion, provider change or deployment was performed.

## Deployment gates not performed

Before deployment, reconcile actual providers/remote countries and monitored contact with the
notice, preserve applicable Australian rights in platform documents, and verify the owner preview
and no-fee booking path. Unknown live facts are not to be filled by assumption. These are factual
release checks, not new separate lawyer-certificate or per-state policy requirements.

## Official sources checked on 2026-09-25

- [OAIC small-business coverage](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business).
- [OAIC Australian link and other key concepts](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-b-key-concepts).
- [APP 1: transparent policy and overseas-country disclosure](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information).
- [APP 2: anonymity/pseudonymity](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-2-app-2-anonymity-and-pseudonymity).
- [APP 8: overseas disclosure](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information).
- [APP 12: access](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-12-app-12-access-to-personal-information).
- [APP 13: correction](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-13-app-13-correction-of-personal-information).
- [OAIC complaints](https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us).
- [ACCC overseas online suppliers](https://www.accc.gov.au/consumers/buying-products-and-services/buying-online).

These sources explain the drafting choices and scope. They do not certify deployment, contracts
with every provider or any particular salon's exemption.
