# Business booking notices — EU English, PL, UA, US, AU and CA

**CA/en scoped code activation — 2026-09-26:** the owner explicitly requested
“разблокируй Канаду оставив QC/AB/BC закрытыми” (`owner-ca-en-release-20260926`).
`business-booking-CA-en-v1` is now the reviewed CA default; Canada is PUBLIC in code
only with server-enforced subdivision admission: **MB, NB, NL, NS, NT, NU, ON, PE, SK, YT**.
**QC, AB and BC remain closed.** A valid full province code and current owner declaration
`ca-operating-scope-v1` / `OUTSIDE_QUEBEC` are required; country-only selection is insufficient.
Status: **ACTIVE_IN_CODE_NOT_DEPLOYED**. See the [release record](CA.en.standard.v1.release-record.md)
and [handoff 27](../../27_ca_notice_preparation_and_activation_20260926.md) for evidence and deployment work.
This supersedes older CA CLOSED/preparation-only status statements; it does not prove live inbox,
incident, retention or backup operations and does not publish any salon's settings.

**AU/en status reconciled — 2026-09-26:** the source/JSON/release record and current app code
now show ACTIVE_IN_CODE_NOT_DEPLOYED, AU default present and AU market PUBLIC. This separate
integration supersedes the earlier preparation-only note. Its text/hash and UA/US are unchanged
by CA preparation. [AU release record](AU.en.standard.v1.release-record.md) has the integration evidence.

**US/en update — 2026-09-25:** the owner requested final `business-booking-US-en-v1` and
its integration alongside UA/uk. The [US release record](US.en.standard.v1.release-record.md) contains the final
baseline, applicability distinctions, digest and verification status. Older statements that
US factual slots remain unfilled are superseded by this packet. Other profiles remain separate.
See [handoff 25](../../25_us_notice_release_and_next_markets_20260925.md) for the release steps and the AU/en recommendation; no
additional country is opened by this update. Registry code and production deployment are distinct.

**Prepared:** 2026-09-23. **Updated:** 2026-09-26.
**Status:** UA/uk, US/en, AU/en and scoped CA/en integrated in the application registry; deployment separate; EU/en and PL/pl remain drafts.

**UA/uk completion:** the owner requested completing the previously agreed facts and wording.
[UA release record](UA.uk.standard.v1.release-record.md) supplies version, date, content authority,
hash, source checks and remaining release conditions. [Prepared JSON](UA.uk.standard.v1.prepared.json)
and [synthetic preview](UA.uk.standard.v1.preview.md) are ready for the implementation agent.
No UA drafting-only slots remain; UA and US now have reviewed entries and explicit defaults in code. The historical
`.draft.md` filename is retained for links, not as a claim that its prose is still unfilled.

**Market review, 2026-09-25:** owner selected UA/US PUBLIC for admission code, other catalog
markets CLOSED; the PL pilot ended with zero active EU users according to the owner.
**UA/uk and US/en** have completed code-release packets; verify their deployed behavior before release. The former
PL records need a documented closure/retention disposition. Preserve EU/PL drafts and pinned
references. [Review 23](../../23_market_gate_review_and_release_unblocking_20260925.md) records
two admission/publication code gaps and the exact unblocking sequence. Code modes do not approve
these drafts. The EU default rules below are deferred selection design, not current market access.

This package contains six Business notice variants for public booking: a shared English source
for EU countries, Polish for Poland, Ukrainian for Ukraine, US English for the United States
Australian English for Australia and Canadian English for a scoped Canada release.
Each includes a short notice at the
form, a full notice, a full-notice link label, three cancellation reminders and a free-text field
hint. The same selected market template serves SOLO and STUDIO with their confirmed business facts.

Start with the relevant draft below. Use [plan 19](../../19_simple_booking_legal_setup_20260923.md)
for owner/client UX, [review 20](../../20_booking_setup_review_and_market_templates_20260923.md)
for implementation findings and [fact register 01](../../01_legal_facts_env_contract.md) for the
shared facts. These Business notices accompany Perelai's separate Privacy Notice, DPA, Public
Booking Terms and SaaS Refund & Cancellation Policy.

## Package readiness

| Item | Status / next action |
|---|---|
| UA/uk wording | Complete prepared client copy, including retention/closure and actual automation; 12 successful renders with the current application module, eleven negative checks; see UA release record |
| US/en wording | Completed and integrated under owner-us-en-release-20260925; see US release record for tests, scope and operating limits |
| AU/en wording | Integrated in code; AU PUBLIC. See AU release record; deployment separate |
| CA/en wording | ACTIVE_IN_CODE_NOT_DEPLOYED; ten admitted provinces/territories, QC/AB/BC closed. Exact CA default plus province/scope controls; see CA release record |
| EU/en and PL/pl wording | Drafts remain; internal closure clauses stay outside renderable text. UA/US completion does not approve these profiles |
| EU English default | Proposed source default for eligible EU countries; verify intended audience language and any required country variation before activation |
| Business identity and public contact | Confirmed by the owner in setup before publication |
| Platform identity and public contact | COMPLETED 2026-09-24 from the owner's extract and address confirmation; literals inserted into all four drafts; support@perelai.app is the shared route |
| Platform service providers, transfers and retention | Closure policy accepted in decision 21: 30-day active + subsequent 30-day backup limits. Verify execution and complete actual providers/transfers, active-client periods/criteria and record-specific exceptions for the supported profile |
| US state/business applicability and online practices | Ordinary non-medical/no-advertising baseline completed; Business-specific additional notice/channel obligations use the external-notice/support path; no blanket small-business exemption |
| Version/date/content authority | UA: business-booking-UA-uk-v1; US: business-booking-US-en-v1. Both effective 2026-09-25, with separate content authority and digest in their release packets. Other profiles remain candidates |
| Application integration | UA/uk, US/en and AU/en have reviewed entries and exact-country defaults; tests cover pinned content. Company preview/publication and deployment remain distinct from registry integration |

The owner-approved active-history limits are 90 days for uncompleted requests and 24 months
after the last completed visit; register 01 §6.1 still needs edge-case triggers and execution.
The deletion CLI now records an exact manifest/hash and the DR wording covers unfinished cases,
but ordinary-Company deletion, durable resume and restore replay remain unverified.
Use the UA and US release records for current status and known operational limits. The earlier
review 23 US drafting list is resolved by the US packet. Do not reopen the same completed facts/date.

Only the selected launch market needs to be completed before its release. Preparing or updating
this README does not approve the drafts, populate the application's reviewed registry or establish
production readiness. The application observations in review 20 are dated 2026-09-23.

### Completed operator block — 2026-09-24

Perelai is operated by **ILLICHOV VALERII**, registered in Ukraine as
**ІЛЛІЧОВ ВАЛЕРІЙ ВАЛЕРІЙОВИЧ**, an individual entrepreneur (FOP) trading as **Perelai**.
Ukrainian tax identification number (RNOKPP): **3278516853**.
Ukrainian Unified State Register (EDR) entry number: **2001010010001028235**.
Registered business address: **Zamarstynivska 170E, apartment 68, Lviv, 79068, Ukraine**.
Public support, privacy and legal contact: **support@perelai.app**.

The source evidence and exact env values are in [register 01, operator identity](../../01_legal_facts_env_contract.md#operator-identity-completed-on-2026-09-24).
The supplied PDF remains private evidence. The owner confirmed the address from that extract.
The tax number and EDR entry are different identifiers; neither is described as an EU VAT number.
Store both as strings. Do not invent a Latin patronymic or replace the registered entrepreneur with
“Perelai LLC”. No personal mailbox is required for these notice fields. A separate `legal@` alias
is optional; check the shared inbox's delivery/handling before release without creating another
legal-identity approval step.

The four drafts now contain localised literal operator/processor paragraphs. The former combined
`PERELAI_PROCESSOR_DETAILS` slot is replaced by those facts plus the narrower Stage-1-only
`PERELAI_SERVICE_PROVIDERS_PARAGRAPH` for the supporting provider facts. UA now resolves that
slot into literal prose; the other drafts retain it. It is not a runtime field or owner setup question. Salon identity/contact slots remain salon-specific.

The owner reports Hetzner/Falkenstein hosting. UA's unreleased packet now uses 2026-09-25,
advanced under the owner's date-unblocking instruction; its digest and copies are synchronized.
The generic future-date guard remains; other drafts retain their proposed 2026-10-01 date.
[Plan 24](../../24_mvp_deletion_retention_and_ua_activation_sprint_20260925.md) is the current
implementation handoff, including conditional UA activation after the concrete release checks.
Hosting does not settle other vendors, backups, administrative access or international transfers.
The proposed “one year after account deletion” is superseded by decision 21's closure limits; finish
the remaining purpose-specific rules below. Identity completion does not establish the automation statement,
market/state applicability, or authority to publish a notice with unresolved content.

## Shared MVP baseline — owner accepted 2026-09-24

[Decision 21](../../21_gdpr_baseline_and_retention_mvp_20260924.md) governs this package. Reuse one
GDPR-based operational foundation and common product/provider/data facts. The EU/en, PL/pl, UA/uk
and US/en files are language/profile outputs with small applicable local additions, not independent
compliance programmes. GDPR is not a claim of automatic compliance with Ukrainian or US law.

One shared review/approval record may cover multiple actual countries with the same supported
profile. Record countries/languages and real differences once; no separate counsel certificate per
country, language, template or salon. Focused legal/accounting review addresses unresolved applicable
questions. Exact-country registry/default references, existing owner choices, final text/digests
and appropriate client language remain required; they do not require separate country policies.

Accepted implementation requirements: complete active Company-data deletion within 30 calendar
days of an authorised, confirmed deletion instruction (D0); exclude residual backups from ordinary
use and delete them within 30 calendar days after active deletion. Ordinary total: at most D0 + 60.
Reapply deletions before restored data returns to use. Verify all stores/snapshots and the assisted
procedure before inserting a live promise; these are policy choices, not observed runtime facts.
EU/PL/US retain **internal, non-rendered proposed closure clauses**. UA/uk now includes the
accepted closure and active-retention wording in its prepared `fullText`; it remains offline
until the release checks pass. No production claim is made by assembling that candidate.
The [MVP 30/30 implementation plan](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/polishing/company_deletion_30_30_mvp_20260925.plan.md)
names the active/export/storage/backup/restore tests needed before those clauses can be reviewed
for publication. Archiving a workspace does not establish D0 or start this deletion workflow.

For EU/PL/US, the `RETENTION_PARAGRAPHS` slot still needs the applicable profile. UA has a
completed paragraph from the owner-selected schedule, with implementation checks in its release record. The closure limits do not replace them, extend
individual-rights deadlines, or mean “keep everything until the owner deletes it”. Distinguish
Company closure from deleting a login, client record or subscription. Perelai's own accounting
records use a separate FOP schedule, never a blanket seven-year hold over salon records.

Reuse `support@perelai.app` and a workable manual process for platform rights/return/deletion. The
salon's contact remains its own. No new privacy portal, mandatory Refund Policy for the standard
no-money flow, external policy URL or client privacy-consent checkbox is introduced. Complete only
actual launch profiles now; draft availability for another market does not hold that release.

## Included templates

| Service business / clients served | Draft | Intended language | Current scope |
|---|---|---|---|
| Business operating in an eligible EU member country, ordinary beauty bookings | [EU.en](EU.en.standard.v1.draft.md) | English (`en`) | Shared GDPR source; default where no country-specific default takes priority; APPOINTMENT/REQUEST |
| Business operating in Poland, ordinary local beauty bookings | [PL.pl](PL.pl.standard.v1.draft.md) | Polish (`pl`) | GDPR; APPOINTMENT/REQUEST |
| Business operating in Ukraine, ordinary local beauty bookings | [UA.uk](UA.uk.standard.v1.draft.md), [prepared entry](UA.uk.standard.v1.prepared.json) | Ukrainian (`uk`) | Active in code; deployment separate; APPOINTMENT/REQUEST |
| Business operating in the United States, ordinary local beauty bookings | [US.en](US.en.standard.v1.draft.md) | US English (`en`) | US baseline with applicable state information; APPOINTMENT/REQUEST |
| Business operating in Australia, ordinary local beauty bookings | [AU.en](AU.en.standard.v1.draft.md), [prepared entry](AU.en.standard.v1.prepared.json) | Australian English (`en`) | Integrated in code; deployment separate; APPOINTMENT/REQUEST |
| Business operating outside Québec in Canada, ordinary local beauty bookings | [CA.en](CA.en.standard.v1.draft.md), [prepared entry](CA.en.standard.v1.prepared.json) | Canadian English (`en`) | Prepared only; province controls and applicable AB/BC readiness required; APPOINTMENT/REQUEST |

The market/language pairs identify distinct variants. UA and US have completed code-release
artifacts and immutable references; AU is integrated in code; CA has a scoped preparation packet; EU and PL remain drafts. Deployment and individual Company
publication are separate. Interface locale,
customer nationality and payment currency do not select governing privacy law or establish where
the Perelai operator is legally established. For example, a Ukrainian-speaking client of a Polish
salon needs a Ukrainian translation of the **PL** notice, not automatically the UA notice.

The EU source uses shared GDPR wording and an official national-authority directory, with a
conditional country block. Other EEA countries may reuse the structure after their own applicability
decision; they are not in the EU default group. The US baseline and its eligibility limits are
recorded in its release record; additional Business duties still need applicable supplements. UK text is not included. Additional markets and
translations need not delay one selected release.
If a UA business also falls within GDPR's territorial scope, the UA-only profile is insufficient;
assess that case and add the relevant GDPR information instead of inferring scope from passport
or IP address.

## Default selection for EU countries

**Product decision:** use the common EU English source as the proposed default for an eligible EU
country without a more specific approved country default. Keep PL/pl as Poland's preferred default.
This reuses one common text; it does not require writing 27 independent policies or asking each
owner to research national law. Perelai records the country/profile/language applicability centrally
in the existing launch packet, completing only the countries actually served.

Selection applies when preparing a **new** setup or an owner-requested replacement:

1. Preserve an existing published notice/reference or the owner's own notice. New defaults never
   silently replace them. A retired or invalid pinned version needs explicit resolution, not a
   fallback that hides the problem.
2. Prefer the active, approved country default for the processing profile and supported mode.
   Poland uses PL/pl by default. An English interface does not change it to US/en or change the law.
3. Otherwise, for an EU member country, propose the EU/en source only when its completed country
   entry is approved and English is appropriate for the intended client audience. No supported
   local translation must be silently skipped when that translation is needed for intelligibility.
4. If the country/profile/language is unsupported or required facts are incomplete, keep the setup
   as a draft and explain the missing platform preparation; allow an adequate own notice under
   the existing custom path. Do not silently choose US/en for an unknown or non-EU country.
5. Show the selected language and final text to the owner, confirm facts, then pin the exact
   country/language/version/profile/content digest at publication. Browser language or a later
   default change must not rewrite a published disclosure.

The EU default group is the following 27 ISO country codes, checked on 2026-09-24:

```text
AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE
```

Use the actual Company country in the registry and evidence. `EU` is the source family, not a
country value. UK (`GB`), Switzerland (`CH`), Norway (`NO`), Iceland (`IS`), Liechtenstein (`LI`),
Ukraine (`UA`) and the US are outside this group. EU membership is separate from Schengen, the
eurozone and the wider territorial reach of GDPR.

With the current exact-country renderer, the smallest implementation is to derive reviewed
country entries from the shared EU source, completing the country block where necessary. Set an
explicit default reference for each enabled country; retain a single source of common prose.
Preserve exact-country validation, immutable version/digest checks, supported modes and approval
records; several equivalent country entries may reference one shared review record. These are
technical selection records, not separate legal policies. Do not add a raw `country: 'EU'` record or remove validation to make it match all countries.
Publication remains dependent on a completed reviewed artifact, not merely membership in the list.

| Example after the relevant approvals | Proposed behaviour |
|---|---|
| New PL business | PL/pl default |
| New DE business serving an English-speaking audience, English profile approved | Shared EU/en text in a DE/en registry entry |
| EU business targeting clients who need a local-language notice | Applicable reviewed translation/country variant; an English-only default is insufficient |
| Existing Company with a published older valid version or own notice | Keep the published selection until explicitly changed |
| UA, US, GB or unknown country | No EU fallback; select its own eligible variant or explain unavailability |

The language constraint follows [the EDPB-endorsed transparency guidance](https://www.edpb.europa.eu/system/files/2023-09/wp260rev01_en.pdf).
English can be useful for a shared source and an English-speaking audience; it is not automatically
understandable to all clients across the EU. No extra client “I understand English” checkbox or
automatic machine translation is introduced as a substitute for usable information.

## What the owner does

SOLO: confirm the provider's actual name, public contact and country; choose “no prepayment or
cancellation/no-show charge”; preview and confirm the prepared facts. STUDIO: the same steps for
the business and shared contact. Authorised team members can process bookings for that business;
the plan tier does not create a different privacy law or one notice per performer.

ASAP is the default reminder. The owner can select “preferably 12 hours” or “preferably 24 hours”.
These preferences do not create a fee or a mandatory cancellation-policy checkbox. Tell the owner:

> Проверьте, что имя и контакт указаны верно. Для этой записи нет предоплаты, списания из оплаченного
> пакета, платы за отмену или неявку — в том числе вне Perelai. Если это не так, выберите «Мои условия».

The no-fee promise concerns this flow; it does not rewrite a previously paid service/package or
remove statutory remedies. Refund information is conditional on actual money arrangements and can
be part of the applicable service terms. It is not a required field in this standard setup.

The owner sees final rendered text, not the tokens or legal-basis choices below. The owner confirms
factual fit, not “I certify compliance with all laws”. No blanket client privacy-consent checkbox.

## Shared applicability of the drafts

- Ordinary beauty appointment/request, booking for the person submitting or an appropriately
  handled existing client link; not a medical intake, diagnosis, minors-specific flow or health survey.
- One identifiable service business controls the booking/client record. Independent operators in
  a shared studio require the real controller arrangement to be described before reusing this text.
- No online payments and no external deposit/prepayment, prepaid-package redemption, cancellation
  or no-show charge in this selected flow. The client pays for the service under the business's
  applicable service conditions; this package does not invent the payment time/method.
- Enabled processing matches the profile: contact and booking details, associated client record,
  operational messages and disclosure evidence. No marketing permission follows from booking.
  Existing client history and free-text comments must be accounted for, not concealed by “only
  to contact you once”. Add the proposed “do not enter health data” hint next to free-text fields.
- APPOINTMENT and REQUEST only. Product confirmation/formation copy still comes from document 05
  and the actual workflow. ORDER, RENTAL, special-category processing and materially different
  business practices require their matching profile/own notice, not an unreviewed automatic fallback.
- For US use, apply the release record's state-law, online-tracking and consumer-health scope
  checks centrally. SOLO/STUDIO size is not an automatic exemption, and the business's location
  alone does not settle laws protecting clients in other states. No separate legal questionnaire
  per client is introduced by these drafts.

## Template fields and two stages of rendering

Each draft contains metadata, `summary`, `fullText`, link label and three `standardReminder` values.
Only the explicitly labelled content blocks become client copy. Internal notes, metadata, sources
and alternative wording below must never appear on the public page.

**Stage 1 — Perelai prepares one complete reviewed template.** UA prose assembly is complete
in its release packet; apply the following completion steps to the remaining drafts. Replace shared fact tokens with
verified, translated literal paragraphs; remove inapplicable conditional clauses. Obtain the
existing first-market content/fact review, record the artifact digest and set a real version and
effective date. Do not mark this package approved merely because it was generated or committed.

**Stage 2 — the business confirms its facts.** Interpolate the confirmed runtime fields, show the
exact result, bind its digest to the draft and publish that same draft. Keep the notice language
and template version fixed. Generated legal text is plain text; links need a real link renderer.

| Token | Source / rule |
|---|---|
| `{{BUSINESS_NAME}}` | Actual legal provider/controller name confirmed by the owner; no silent brand-name fallback |
| `{{CONTACT_EMAIL}}` | Confirmed public business contact for booking/cancellation |
| `{{PRIVACY_CONTACT_EMAIL}}` | Confirmed privacy contact, falling back to the confirmed common contact; extend the current renderer/preview/hash consistently |
| `{{BUSINESS_CONTACT_DETAILS}}` | Complete local-language address/contact block if required for the applicable identity/notice/consumer information; owner verifies public details; empty only with recorded applicability, never invent an address |
| `{{DATA_PROTECTION_CONTACT_BLOCK}}` | Actual DPO/representative or relevant special contact if applicable; omit completely when not applicable; a normal SOLO business need not appoint a fictional DPO |
| `{{BOOKING_TECHNICAL_DATA_PARAGRAPH}}` | EU English source: actual automatic data collection, purposes and legal bases attributable to the Business booking processing; distinguish the platform's separate processing |
| `{{EU_COUNTRY_PRIVACY_BLOCK}}` | EU English source: centrally reviewed additional country/profile information, with its own heading if present; empty only following a recorded applicability decision |
| Operator/processor identity (literal text) | Completed in all four drafts from register 01; preserve the legal name, EDR/RNOKPP distinction, registered address and platform contact. Do not substitute these for the Business controller's facts |
| `{{PERELAI_SERVICE_PROVIDERS_PARAGRAPH}}` | Stage 1 only: actual supporting provider categories/arrangement for the booking flow, reconciled with 01/04/07; operator identity is already filled above this slot. Do not invent vendors or mark the recipient map complete from the FOP extract |
| `{{INTERNATIONAL_TRANSFERS_PARAGRAPH}}` | Actual countries/remote access and applicable transfer information; EU/PL, UA and US wording differs. Describe real US processing locations without importing GDPR mechanisms or implying US-only storage |
| `{{RETENTION_PARAGRAPHS}}` | Actual active-client periods/criteria and exceptions, plus decision 21's Company-deletion/backup limits after execution is verified; closure deadlines do not substitute for ordinary client-record retention |
| `{{AUTOMATED_DECISIONS_PARAGRAPH}}` | Verified statement on automated decisions/profiling for the enabled booking profile; do not infer it from the absence of an AI feature |
| `{{PLATFORM_PRIVACY_URL}}` | Actual approved public Perelai Privacy Notice URL from the legal URL contract; HTTPS and token-free |
| `{{US_ONLINE_COLLECTION_PARAGRAPH}}` | US only: actual technical/automatic data collection and purposes on the booking surface; distinguish business and platform purposes |
| `{{US_SALE_SHARING_PARAGRAPH}}` | US only: verified sale, statutory sharing and targeted-advertising practices; no unsupported “never shared” claim |
| `{{US_TRACKING_SIGNALS_PARAGRAPH}}` | US only: actual cross-site/third-party tracking, DNT response and separately applicable GPC/opt-out-signal handling |
| `{{US_STATE_PRIVACY_PARAGRAPH}}` | US only: required state-specific information and functioning request/choice procedures; empty only after documented applicability review |

The template module read on 2026-09-24 supports `BUSINESS_NAME`, `CONTACT_EMAIL`,
`PRIVACY_CONTACT_EMAIL`, `COUNTRY` and `BOOKING_MODE`, with exact-country/version references,
mode checks and an empty production registry. This is a narrow interface observation, not a rerun
of review 20 or acceptance of all its findings. These drafts still cannot be imported unchanged:
resolve platform/country tokens into literals at Stage 1. Add only genuinely business-dependent
runtime slots still needed, binding their values to preview, publication and evidence. Do not
create a general-purpose legal editor.
For a profile with no additional business-contact block, resolve that block to empty deliberately,
not by globally treating all unknown tokens as optional. No unresolved `{{...}}` or `[TBD...]` may
survive production rendering. Do not display raw enum values such as `APPOINTMENT` in legal prose.

## Shared facts to close once, not per salon

Use the existing launch packet; the following are the remaining content dependencies, not new
merchant onboarding requirements:

| Fact | Minimum reviewable answer |
|---|---|
| Operator and roles | Operator identity/contact filled above and in all four drafts; verify shared-inbox handling and the actual Business-controller / Perelai-processor arrangement and separate platform purposes |
| EU default applicability | Actual country and processing profile, client-language suitability, any required local block/translation; preserve national-default priority and existing owner selections |
| Recipients / location | Actual hosting, database/storage, email and support providers used by booking; processing/remote-access countries and agreements |
| Transfers | EU/PL: EEA departures, actual GDPR ground and safeguards route; UA: actual transfers and applicable Ukrainian ground; US: real processing destinations and applicable requirements. Do not copy SCC/adequacy claims between regimes |
| Client record and messages | What enters the business's client history, who can see it and which operational channels are enabled; no promise that a record vanishes after one appointment |
| Retention / rights | Accepted Company closure limits: active within 30 days, residual backups within 30 days thereafter. Verify execution; complete active-client periods/criteria, applicable rights deadlines and minimal evidence rules using the existing manual-process packet |
| Automated decisions | Actual slot assignment, verification and refusal behaviour; whether any solely automated decision has legal/similarly significant effects; corresponding information if applicable |
| US scope and online practices | Served-state/business applicability, actual sale/sharing/advertising and tracking/signals, any required rights/notice supplement, material-change notifications and consumer-health exclusions; complete once for the supported profile |

For retention, the final paragraph must distinguish pending/unconfirmed requests, completed records
and client history, operational messages, and minimum disclosure/claim evidence. Identify when the
clock starts (for example closure of a request or last visit), the applicable period/criterion and
any specific dispute hold. Address backup expiry/restoration so a deletion request is not undone.
“As long as necessary” alone and “until account deletion” alone are not useful limits for every
purpose. Do not invent a universal 3/5/10-year term or copy notification-log TTLs to client records.

An acceptable small-launch implementation may use a documented periodic manual review/deletion and
rights inbox. It still needs a workable way to delete/anonymise or lawfully restrict the affected
records, including append-only legal evidence where applicable; an email promise without a working
procedure is insufficient. Do not promise automated erasure before it exists.

Suggested paragraph structures for completion, **not currently established facts**:

- **Supporting recipients:** after the already completed operator paragraph, name the actual
  hosting/storage and operational-message provider categories/arrangement for this flow. Resolve
  `PERELAI_SERVICE_PROVIDERS_PARAGRAPH` from verified facts, not from the operator's extract alone.
- **Transfers:** choose a verified no-transfer statement only if hosting, support and the processor's
  remote access support it; otherwise name the relevant destinations, mechanism and safeguards route.
  Locating a database in the EU does not settle remote access by a non-EEA provider.
- **Retention:** “Uncompleted requests: [period and trigger]. Client contact/visit history: [period
  or specific criterion and trigger]. Minimum records needed for a dispute: [applicable limitation
  criterion and pending-proceeding rule]. Operational messages/backups: [actual periods/process].”
- **Automation:** if verified for this profile, explain routine availability/confirmation automation
  and state that no decisions with the relevant significant effects are made solely automatically;
  otherwise describe the applicable decision process and rights. Do not add an unsupported blanket
  “we do not profile” claim.

## Publication checklist

1. Complete one selected market's shared facts and conditional blocks; review the actual final text
   and its processing profile once. Set a unique immutable version and actual effective date.
2. Close review 20's publication/version issues, or reference their verified resolution, and enforce
   profile/mode/language eligibility. Recheck the current interface against this slot contract.
   For EU defaults, check country override priority, EU membership, language suitability, no fallback
   from a retired pinned reference, and preservation of published/custom notices.
3. Load the completed text into `ReviewedBusinessNoticeTemplate`; retain older approved versions
   under explicit lifecycle rules. The draft filename is not an approved version identifier.
4. Check actual SOLO and STUDIO previews with confirmed public facts, dedicated privacy-contact
   fallback, anonymous full-notice access, accessible links/lang, no placeholders and exact evidence.
5. Verify no-fee readiness with empty refund/external-policy fields, custom/legacy preservation,
   stale-draft/revision rejection and migration/release checks. Publish only the selected market.
   For the US profile, also verify applicable collection-time notices, actual tracking/signal
   behaviour, request methods and the material-change notification described in the notice.

## Primary sources

### EU common-source additions checked on 2026-09-24

- [EDPB-endorsed transparency guidelines](https://www.edpb.europa.eu/system/files/2023-09/wp260rev01_en.pdf)
  — intended-audience comprehension and language/translation, especially paragraphs 9 and 13.
- [EDPB national-authority directory](https://www.edpb.europa.eu/about-edpb/our-members_en)
  — complaint-contact discovery without assigning one country's authority to every business.
- [EU member countries](https://european-union.europa.eu/principles-countries-history/eu-countries_en)
  — membership used for the explicit EU default group.

### PL/UA sources checked on 2026-09-23

- [EDPB: information and individual rights](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en)
  — layered information and applicable rights, not a prescribed consent checkbox.
- [EDPB: lawful processing](https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en)
  — purpose-specific legal bases; booking is not automatically consent-based.
- [UODO: specifying retention](https://uodo.gov.pl/pl/676/4260)
  — purpose-specific retention and review/deletion criteria.
- [UODO: GDPR rights and complaint route](https://uodo.gov.pl/pl/493/155).
- [Ukraine: Law 2297-VI](https://zakon.rada.gov.ua/go/2297-17), especially Articles 8/11/12/29.
  The Rada page was available in search extracts but direct retrieval returned 403 in this review;
  the official Ombudsman materials below supplied additional usable primary guidance.
- [Ukrainian Ombudsman: standard processing procedure](https://www.ombudsman.gov.ua/uk/rekomendaciyi-ta-rozyasnennya/tipovij-poryadok-obrobki-personalnih-danih)
  — purposes, recipients, retention/deletion procedures and information at collection.
- [Ukrainian Ombudsman: online-form recommendations](https://www.ombudsman.gov.ua/storage/app/media/vykorystannya-onlain-form.pdf)
  — information required when collecting data through online forms.
- [Ukrainian Ombudsman: transfer transparency enforcement](https://ombudsman.gov.ua/uk/kontrol-za-doderzhannyam-vimog-zakonodavstva-zpd/rezultati-perevirok/viyavleno-grube-porushennya-prav-subyektiv-personalnih-danih-z-boku-vishchoyi-shkoli-advokaturi-nacionalnoyi-asociaciyi-advokativ-ukrayini).

These sources inform the proposed drafting. They do not confirm Perelai's provider accounts,
production operations, legal identity or approval of these particular templates.

### US sources checked on 2026-09-24

- [FTC: privacy and security](https://www.ftc.gov/business-guidance/privacy-security).
- [California BPC §22575 (CalOPPA)](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=22575.).
- [CPPA: FAQs](https://cppa.ca.gov/faq),
  [monetary thresholds](https://www.cppa.ca.gov/regulations/cpi_adjustment.html) and
  [current law/regulations](https://cppa.ca.gov/regulations/).
- [Washington Attorney General: My Health My Data](https://www.atg.wa.gov/protecting-washingtonians-personal-health-data-and-privacy).

The [US release record](US.en.standard.v1.release-record.md)
explains the completed baseline and its scope limits. US state-dependent rights wording
is maintained separately from the GDPR and Ukrainian-law variants.
