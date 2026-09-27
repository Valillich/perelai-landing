# Perelai legal facts inventory and env contract

**Current platform release — 2026-09-27:** all seven documents are **`2026-11-01.1`**,
effective **`2026-11-01`**. Approval: `owner-platform-legal-mvp-postponement-20260927`.
The owner asked to postpone by two weeks or one month; 1 November is the selected month-buffer
release date, not evidence of deployment. The owner authorised the recommendations from
[review 29](29_platform_legal_review_and_zoho_eu_correction_20260927.md), implemented and qualified in
[release 30](30_platform_legal_mvp_postponement_20260927.md). These entries supersede conflicting
historical decisions below for this new platform packet only. Hashes are in `content/legal/versions.json`
and use `lib/legal/production-identity.ts` (`pnpm legal:manifest`; `--write` recomputes).

| Fact | Current decision |
|---|---|
| Forum | Ukrainian law; competent courts of Ukraine in Lviv; 30-day pre-action notice; mandatory local/consumer protections preserved; no arbitration |
| Liability cap | greater of fees paid in the preceding 12 months and USD 100; both parties' contractual indemnities, defence costs, settlements and awards are inside the same aggregate cap; non-excludable liability and applicable DPA/SCC precedence preserved |
| Ordinary retention | 90 calendar days to eligibility + at most 30 calendar days for cleanup (maximum 120 from the applicable clock); ordinary client history 24 calendar months + at most 30 calendar days. Operator-led cycles; technical skips are not legal exceptions. Specific continuing purposes and legal holds require separate classification. This does not silently amend existing salon notices |
| Workspace deletion | verified support request; archive UI is not erasure. Operator-led active deletion without undue delay and within 30 calendar days; residual backups within another 30; earlier legal deadlines prevail. This remains a commitment requiring operational execution, not a completed production test |
| Inactivity | after six consecutive months restricted without a paid subscription **or other valid access**, Perelai **may** close after at least 30 days' email notice. No automatic six-month deletion promise; ordinary retention continues |
| Support | initial response target 3–5 Ukrainian business days; no guaranteed resolution SLA; no extension of privacy, incident or mandatory refund deadlines |
| Incidents | notify the Customer **without undue delay** after awareness; removed voluntary 48-hour target. Manual operator handling is allowed; applicable notification duties remain |
| Support mailbox | Zoho Mail EU (`zoho.eu`) for `support@perelai.app`; owner correction, not evidence of a migration. Verify the contracting entity and executed DPA in the account. EU hosting does not establish exclusively EU support/onward processing |
| DB backups / files | owner-selected Coolify → Cloudflare R2 EU jurisdiction, ≤7 days off-site, ≤10 days on-server. DB only: uploaded files/attachments are not backed up and may be unrecoverable on storage loss. Actual settings and restore/deletion reconciliation remain to be verified |
| Trial | one 21-day STUDIO trial per eligible payer relationship; later eligible workspaces share the original end. TEAM-RELEASE and actual feature availability remain separate |
| Evidence | 1095 **calendar days**, with category-specific clocks: acceptance from active deletion of the relevant account/workspace; deletion record from completion; necessary subscription evidence from end of the subscription relationship. No blanket retention of whole CRM records |
| Tax/accounting | statutory category-specific periods, starting points and extensions; removed unsupported blanket “generally 1095 days”. Accountant confirmation of the FOP schedule remains open |
| Other defaults | kept 30-day notice/cure/audit framework and free data return within 30 days; logs normally ≤90 days; support mail ≤24 months, with narrow justified exceptions |
| Analytics | no analytics in Launch v1 text; owner still needs to verify deployed behaviour and remove the historical PostHog project |

Deployment configuration: landing identity uses exact `NEXT_PUBLIC_LEGAL_*` values from `.env.example`.
Date/version come from Markdown + manifest, not ENV overrides. API `LEGAL_TERMS_VERSION`,
`LEGAL_DPA_VERSION`, `LEGAL_PRIVACY_VERSION`, `LEGAL_BOOKING_TERMS_VERSION` and Web
`VITE_LEGAL_TERMS_VERSION`, `VITE_LEGAL_DPA_VERSION`, `VITE_LEGAL_PRIVACY_VERSION`,
`VITE_LEGAL_BOOKING_TERMS_VERSION`, `VITE_LEGAL_BILLING_VERSION` all use **`2026-11-01.1`**.
Signup/booking acceptance-copy versions are separate. No production deployment, acceptance-evidence
rewrite or automatic switch on the calendar date is authorised or performed by this document edit.
Future dating does not defer obligations for existing users or data.

The preceding `.1`/Zoho `.2` packet and exact manifest are preserved in
[archive](archive/platform-before-20261101/README.md). The original `.1` also remains in Git commit
`38776d614a002b73e36f5895a024bbc94f713d68`. Text approval is not operational completion or a lawyer's opinion.

**Salon notice v2 — Cloudflare backup disclosure, 2026-09-27:** UA/uk, US/en, AU/en and CA/en
now have immutable `business-booking-<country>-<language>-v2` entries, effective **2026-11-01**,
under `owner-booking-notice-cloudflare-v2-20260927`. State: **REGISTERED_FUTURE_NOT_DEFAULT**.
Their source/JSON/preview/release packets match between repositories. They disclose Cloudflare R2
EU database-backup storage, daily backups with ≤7 days off-site / ≤10 days on-server, exclusion
of uploaded files, and read-only Calendar import. All v1 artifacts/digests and current defaults
are preserved; no salon settings or evidence were republished. This backup correction keeps the
salon notices' existing ordinary retention commitments; the platform cleanup window does not
silently extend them. See [handoff 31](31_booking_notice_v2_cloudflare_backups_20260927.md).

**CA/en scoped code activation — 2026-09-26:** the owner explicitly requested
“разблокируй Канаду оставив QC/AB/BC закрытыми” (`owner-ca-en-release-20260926`).
`business-booking-CA-en-v1` is now the reviewed CA default; Canada is PUBLIC in code
only with server-enforced subdivision admission: **MB, NB, NL, NS, NT, NU, ON, PE, SK, YT**.
**QC, AB and BC remain closed.** A valid full province code and current owner declaration
`ca-operating-scope-v1` / `OUTSIDE_QUEBEC` are required; country-only selection is insufficient.
Status: **ACTIVE_IN_CODE_NOT_DEPLOYED**. See the [release record](templates/business-notice/CA.en.standard.v1.release-record.md)
and [handoff 27](27_ca_notice_preparation_and_activation_20260926.md) for evidence and deployment work.
This supersedes older CA CLOSED/preparation-only status statements; it does not prove live inbox,
incident, retention or backup operations and does not publish any salon's settings.

**Email-scope clarification:** the owner's booking-only product decision is accepted. The earlier
statement that all such messages are necessarily non-CEM or fully exempt was not established by
that decision alone. A full exception under CASL Regulations s.3(b) and a consent-only exception
under CASL s.6(6) have different consequences. Evaluate actual message content and sending conditions
before relying on an exception; a marketing-consent subsystem remains outside the MVP scope.
This distinction qualifies earlier broad “no CEM / no unsubscribe requirement” statements in CA
handoffs and records; their product-scope decision remains valid, their legal classification is not
proved merely by calling notifications transactional. [Regulations s.3](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2013-221/FullText.html),
[CASL s.6](https://laws-lois.justice.gc.ca/eng/acts/E-1.6/FullText.html).
**Technical notification inventory — 2026-09-26:** the actual built-in client-email allowlist
(`CLIENT_EMAIL_EVENT_TYPES`) has 18 booking/request/reservation/order/receipt/package events;
it excludes `VisitReminderInternal`, which is handled as an internal notification. The built-in
template sources contain no marketing, promotion, newsletter or campaign content. This proves the
current trigger inventory, not a legal exception for a message body. The builder permits Company
`NotificationTemplate` overrides, which remain governed by the Terms §12 prohibition on promotional
content; this inventory does not validate a particular Company override.
**CA technical follow-up — 2026-09-26:** the future-open CA path now re-checks the latest
`CompanyAdmissionDeclaration` (version, answer, country and subdivision) before new public
booking intake and authenticated operational writes. Missing or stale declarations fail closed;
read, export and legal routes remain available. Selection is deterministic (`createdAt DESC, id DESC`).
`DELETION_RETAINED` Companies are excluded from recommendation facts. This is implementation
evidence only: the subsequent scoped activation is recorded above; this inventory does not satisfy AB provider
inventory, BC retention or other release gates. [Handoff 27](27_ca_notice_preparation_and_activation_20260926.md).

**AU/en status reconciled — 2026-09-26:** app code and the [AU release record](templates/business-notice/AU.en.standard.v1.release-record.md)
now show AU registry/default integrated and AU PUBLIC. The earlier preparation-only note is
superseded by that separate integration. UA/US/AU text and digests are unchanged by CA preparation;
no deployment is inferred. [Handoff 26](26_au_notice_preparation_and_nz_next_market_20260925.md)
remains the historical AU instruction and NZ recommendation; NZ has not been opened here.

**US/en update — 2026-09-25:** the owner requested final `business-booking-US-en-v1` and
its integration alongside UA/uk. The [US release record](templates/business-notice/US.en.standard.v1.release-record.md) contains the final
baseline, applicability distinctions, digest and verification status. Older statements that
US factual slots remain unfilled are superseded by this packet. Other profiles remain separate.
See [handoff 25](25_us_notice_release_and_next_markets_20260925.md) for the release steps and the AU/en recommendation; no
additional country is opened by this update. Registry code and production deployment are distinct.

**Purpose:** the fact sheet that must be completed before the source drafts may become production
documents.  
**Status:** mixed — code-observed facts plus unresolved business/legal facts.  
**Rule:** repository evidence proves implementation, not production deployment or legal sufficiency.

**Plan truth checked:** 2026-09-23 against the current monetization catalog, 2026-09-16 policy,
selected v1 trial-conversion path, ADR-0013, CONTEXT and TEAM/Drawer readiness reports.
Use `14_launch_legal_minimum_20260918.md` for current launch scope; reviews 12/13 are historical.
The clean-browser/source evidence in `17_cookie_storage_runtime_audit_20260923.md` supplements this
inventory. It does not establish provider-account facts, legal classification or release approval.
The later Launch v1 source change removes stored landing attribution and disables PostHog; the
2026-09-23 production observations remain historical until a new build is deployed and audited.

**Apply blockers by stage:** finish facts for current processing and the chosen launch country now;
payment facts before charges; optional-feature facts before enabling/promising that feature.
F-05 applies if the UK is served; F-13/15 specific archive controls apply to enabled export; F-17/18
need an applicability decision for actual operations/markets, not all-country implementation.
A documented manual rights/return/deletion process is acceptable if it meets actual duties.
Mark irrelevant/deferred items with a reason, never fabricate facts or publish TBDs. Reuse one
owner/legal review packet rather than a separate approval meeting for every row.

**Owner-accepted policy, 2026-09-24:** [decision 21](21_gdpr_baseline_and_retention_mvp_20260924.md)
defines the common GDPR-based foundation and small applicable regional additions. Reuse one
country/profile matrix and technical procedure; obtain focused legal/accounting input for actual
open questions. Company deletion/backup policy is 30 days + 30 days; remaining `[TBD]` entries
mean missing facts, active-retention choices or implementation evidence, not a need to approve
those two numerical policy choices again. Do not mark unverified controls as live.

**Evidence update, 2026-09-25:** the deletion CLI review and the owner's supplied implementation
report are recorded in §5.1. Policy acceptance, source/test evidence, owner-reported production
facts and verified production operation are separate statuses. The remaining-work map in §11
includes open decisions without a literal `[TBD]` marker; closing placeholders alone is not a
release check.

**Owner decisions and fact update, 2026-09-25:** hosting/DB/Redis/files at Hetzner in Falkenstein
with an executed DPA and transactional email via Resend are owner-confirmed. The Ukrainian FOP
performs support/admin work remotely from different countries, including outside the EEA;
this supersedes the earlier Ukraine-only access description. SCC reliance, encryption and secure
connections are owner-declared; the applicable instrument, actual countries and control scope
remain to record in §7. Active-history limits of 90 days / 24 months, PL/en + UA/uk, Ukrainian
governing law and the 12-month-fees base cap remain selected, subject to the stated qualifications.
The owner reports having tested Workspace Data Export: reuse that capability, with the remaining
Data Act mapping in §5.3. Necessary claims evidence may survive deletion; §6.2 now identifies where
whole current evidence rows are a reasonable MVP choice. The desired 1095-day period is not a
universal legal deadline. Deferring an EU representative until sales is a proposed commercial
timing choice, not an established Article 27 exception (§5.2).

**Later scope clarification, 2026-09-25:** the owner confirms an existing free Polish user handles
real client data and reports no stable EU place of business. Poland is therefore existing processing,
not merely a future market that can be deferred on paper. The owner now wants a simpler initial
public-market scope. [Proposal 22](22_market_access_and_existing_pl_pilot_20260925.md) recommends
UA first, US as the next bounded pilot, and a separate server-enforced market-admission policy.
This revisits the earlier PL/en + UA/uk launch direction; exact new release modes remain to select.
No existing user is suspended, no new market approved and no statutory exemption created by this record.

**Owner correction, 2026-09-25:** the Polish pilot has ended and the owner
reports **0 active EU users**. The preceding paragraph is historical; the
former PL account/data remains a separate return, deletion and retention case. If services
have ended, arrange closure under the contract/controller instructions; do not wait indefinitely
for a separate erasure request or infer authorisation to delete from inactivity. The owner selected UA and US `PUBLIC` for the admission-code
gate, with other catalog markets `CLOSED`. This does not establish production
release or approve any draft notice. See [22](22_market_access_and_existing_pl_pilot_20260925.md) and
[implementation review 23](23_market_gate_review_and_release_unblocking_20260925.md). Review 23
identifies a provisional-Company operational API gap when Billing is off/observe and an inconsistent
setup check on legal publication; these must be fixed before relying on market restriction.

**UA/uk content completion, 2026-09-25:** the owner explicitly requested preparation from the
facts and approvals already supplied. [UA release record](templates/business-notice/UA.uk.standard.v1.release-record.md)
now contains the assembled prose, version `business-booking-UA-uk-v1`, prepared effective date
2026-09-25, content-authority reference and application-computed hash. All UA drafting-only slots
are resolved; source-backed auto-confirmation, IP quota and technical collection are disclosed.
The owner instruction authorises preparation; it is not a claimed professional opinion or
production approval. Operational retention/provider configuration and platform document release
remain their existing checks. No repeat approval of the same identity/provider/policy choices is
needed. At that preparation stage the registry was unchanged; the later UA and US code releases
are recorded in §10 and the respective release records. EU/PL remain deferred drafts.

## 1. Legal identity env contract

Legal identity is public information. Store it in the landing deployment environment as requested,
validate it in one server-side module and interpolate it into all documents. Never put private keys,
personal identity documents or non-public correspondence in `NEXT_PUBLIC_*` variables.

```env
# Required in production
NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME="ILLICHOV VALERII (ІЛЛІЧОВ ВАЛЕРІЙ ВАЛЕРІЙОВИЧ)"
NEXT_PUBLIC_LEGAL_PROVIDER_FORM="Individual Entrepreneur (FOP)"
NEXT_PUBLIC_LEGAL_TRADING_NAME=Perelai
NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION=Ukraine
NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER=2001010010001028235
NEXT_PUBLIC_LEGAL_TAX_NUMBER=3278516853
NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS="Zamarstynivska 170E, apartment 68, Lviv, 79068, Ukraine"
NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL=support@perelai.app
NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL=support@perelai.app
NEXT_PUBLIC_LEGAL_NOTICES_EMAIL=support@perelai.app
NEXT_PUBLIC_LEGAL_SECURITY_EMAIL=support@perelai.app

# Optional; render only when the complete block is present and the role actually exists
NEXT_PUBLIC_LEGAL_EU_REP_NAME=
NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS=
NEXT_PUBLIC_LEGAL_EU_REP_EMAIL=
NEXT_PUBLIC_LEGAL_UK_REP_NAME=
NEXT_PUBLIC_LEGAL_UK_REP_ADDRESS=
NEXT_PUBLIC_LEGAL_UK_REP_EMAIL=
NEXT_PUBLIC_LEGAL_DPO_NAME=
NEXT_PUBLIC_LEGAL_DPO_EMAIL=
```

Template mapping:

| Draft token | Environment variable |
|---|---|
| `{{LEGAL_PROVIDER_FULL_NAME}}` | `NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME` |
| `{{LEGAL_PROVIDER_FORM}}` | `NEXT_PUBLIC_LEGAL_PROVIDER_FORM` |
| `{{TRADING_NAME}}` | `NEXT_PUBLIC_LEGAL_TRADING_NAME` |
| `{{COUNTRY_OF_REGISTRATION}}` | `NEXT_PUBLIC_LEGAL_COUNTRY_OF_REGISTRATION` |
| `{{REGISTRATION_NUMBER}}` | `NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER` |
| `{{TAX_NUMBER}}` | `NEXT_PUBLIC_LEGAL_TAX_NUMBER` |
| `{{BUSINESS_ADDRESS}}` | `NEXT_PUBLIC_LEGAL_BUSINESS_ADDRESS` |
| `{{SUPPORT_EMAIL}}` | `NEXT_PUBLIC_LEGAL_SUPPORT_EMAIL` |
| `{{PRIVACY_EMAIL}}` | `NEXT_PUBLIC_LEGAL_PRIVACY_EMAIL` |
| `{{LEGAL_NOTICES_EMAIL}}` | `NEXT_PUBLIC_LEGAL_NOTICES_EMAIL` |
| `{{SECURITY_EMAIL}}` | `NEXT_PUBLIC_LEGAL_SECURITY_EMAIL` |
| `{{EU_REP_NAME}}` | `NEXT_PUBLIC_LEGAL_EU_REP_NAME` |
| `{{EU_REP_ADDRESS}}` | `NEXT_PUBLIC_LEGAL_EU_REP_ADDRESS` |
| `{{EU_REP_EMAIL}}` | `NEXT_PUBLIC_LEGAL_EU_REP_EMAIL` |
| `{{UK_REP_NAME}}` | `NEXT_PUBLIC_LEGAL_UK_REP_NAME` |
| `{{UK_REP_ADDRESS}}` | `NEXT_PUBLIC_LEGAL_UK_REP_ADDRESS` |
| `{{UK_REP_EMAIL}}` | `NEXT_PUBLIC_LEGAL_UK_REP_EMAIL` |
| `{{DPO_NAME}}` | `NEXT_PUBLIC_LEGAL_DPO_NAME` |
| `{{DPO_EMAIL}}` | `NEXT_PUBLIC_LEGAL_DPO_EMAIL` |

Do not use `Perelai LLC`, a US address, a Polish entity, a DPO or a representative unless documentary
evidence confirms it. If privacy minimisation requires not publishing the founder's residential
address, counsel must identify a lawful service/registration address; an LLM must not solve that by
omission or invention.

### Operator identity completed on 2026-09-24

Source: the owner's supplied `Виписка з ЄДР.pdf` (extract no. 611635828097, generated
2024-02-27) and explicit confirmation in this task on 2026-09-24. The PDF is supporting evidence,
not a public attachment; do not copy it, its personal email or its phone number into the repository
or public pages. This check is not a fresh live-register search or proof of current tax-group status.

| Fact | Recorded value / interpretation |
|---|---|
| Ukrainian registered name | ІЛЛІЧОВ ВАЛЕРІЙ ВАЛЕРІЙОВИЧ |
| Owner-supplied Latin name | ILLICHOV VALERII; preserve this spelling and use the Ukrainian full name alongside it to identify the registered entrepreneur without inventing a Latin patronymic |
| Legal form / service name | Individual Entrepreneur (FOP), registered in Ukraine, trading as Perelai; Perelai is the service name, not a separate legal entity |
| Ukrainian tax identification number (RNOKPP) | 3278516853; not an EU VAT number or a company registration number |
| Ukrainian Unified State Register (EDR) entry | 2001010010001028235; entry date shown in the extract: 2024-02-26. Do not describe this as the original business commencement date |
| Registered address, Latin | Zamarstynivska 170E, apartment 68, Lviv, 79068, Ukraine |
| Registered address, Ukrainian | Україна, 79068, Львівська обл., місто Львів, вул. Замарстинівська, будинок 170Е, квартира 68 |
| Public support / privacy / legal / security route | support@perelai.app; one shared route, handled by the operator. Delivery and operational handling still need the ordinary release check |

The owner explicitly corrected the initially supplied apartment/postcode to the extract's
apartment 68 and postcode 79068. Do not propagate the superseded apartment 98 / postcode 79019.
Keep both identifiers as strings in code/configuration: the EDR number exceeds JavaScript's safe
integer range. The env values above are facts to configure, not evidence that deployment env changed.

Ready English identity wording:

> Perelai is operated by ILLICHOV VALERII (registered in Ukraine as ІЛЛІЧОВ ВАЛЕРІЙ ВАЛЕРІЙОВИЧ),
> an individual entrepreneur (FOP) registered in Ukraine, trading as “Perelai”.
> Ukrainian tax identification number (RNOKPP): 3278516853.
> Ukrainian Unified State Register (EDR) entry number: 2001010010001028235.
> Registered business address: Zamarstynivska 170E, apartment 68, Lviv, 79068, Ukraine.
> Support, privacy and legal enquiries: support@perelai.app.

Use `support@perelai.app` now; neither a personal mailbox nor a newly created `legal@` address is
needed solely to populate these contact fields. `admin@perelai.app` is not selected as the public
legal route. A future `legal@perelai.app` alias is optional and must work before being advertised.
This mailbox does not imply a DPO appointment or an EU/UK representative. The platform contact
must not replace a salon's `CONTACT_EMAIL` / `PRIVACY_CONTACT_EMAIL` in a Business notice.
See [EDPB guidance on access-request communication channels](https://www.edpb.europa.eu/system/files/2023-04/edpb_guidelines_202201_data_subject_rights_access_v2_en.pdf),
particularly paragraphs 53–55; maintain an accessible, monitored route and handle misdirected
requests appropriately.

Other owner inputs from this task, recorded without overstating what they establish:

- **Hosting:** OWNER CONFIRMED 2026-09-25: hosting, application DB, Redis and files use Hetzner,
  Falkenstein, Germany (EU); the Hetzner DPA is concluded. Record the actual account/DPA reference
  privately and reconcile runtime storage roots/backup coverage. Support/admin is performed by the
  Ukrainian Perelai FOP with global remote access, including outside the EEA; transactional email
  uses Resend in the US (§7). These are not
  EU-only processing facts. The independent R2 deletion journal remains a separate planned store.
- **Retention:** the earlier “1 year after account deletion” proposal is superseded by decision 21:
  active Company data deleted within 30 days of D0, residual backups within 30 days after active
  deletion, ordinary total at most 60 days. These limits need runtime verification. The owner now
  approves 90 days for uncompleted requests and 24 months after the last visit for client history
  (§6.1); edge-case triggers and execution remain open. Record-specific exceptions and the FOP
  accounting schedule remain to complete in §6.2. Public booking clients need not have accounts;
  deleting a user does not itself terminate the Company.
- **Backup configuration evidence (2026-09-25):** owner screenshots show Coolify `postgres`
  daily/UTC local backups with independent limits of 3 copies and 10 days; for the pictured
  Hetzner server, automatic Backups are off and no manual Snapshots are shown. See the
  [operator runbook and screenshot hashes](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/polishing/company_deletion_operator_test_runbook_20260925.md).
  A later server listing shows three dumps dated Sep 23–25; the owner attests Coolify rotation is
  operating. This confirms the current directory inventory, not a witnessed older-file purge,
  all servers/volumes, R2 versions, or recovery from a deleted-Company backup. The scratch CLI
  drill passed, but [production restore replay remains blocked](/Users/valery/Sites/beauty-finance/docs/runbooks/production_disaster_recovery_runbook.md).
  Leave the 30/30 execution gate open.
- **Effective date, updated 2026-09-25:** under the owner's instruction to remove the date delay,
  the unreleased UA/uk candidate now uses **2026-09-25**, with a recomputed digest and synchronized
  release record. Other profiles retain the proposed 2026-10-01 date pending their completion.
  Preserve generic future/invalid-date validation; no bypass ENV is needed. A current date does
  not establish operational readiness. An effective date is not a substitute for an immutable
  content digest. [Sprint 24](24_mvp_deletion_retention_and_ua_activation_sprint_20260925.md)
  includes conditional UA activation after its actual retention and release checks pass.

### Validation requirements

- trim all values and reject control characters/HTML;
- validate emails and prohibit `localhost`/example domains in production; verify delivery and a
  responsible person for support/privacy/legal/security routes (one monitored mailbox may serve
  multiple roles); assess a public phone/support alternative for launch/Paddle requirements;
- validate exact document dates as `YYYY-MM-DD` and immutable versions as a conservative slug;
- optional representative/DPO blocks are all-or-nothing;
- never provide production fallbacks for name, address, registration or jurisdiction;
- interpolate as text nodes, never `dangerouslySetInnerHTML`;
- snapshot the resolved identity with every approved document build so later env changes do not
  silently alter an already versioned contract.

The last point is essential: an immutable Terms version cannot change because a deployment env value
changed. Build output or an approval manifest must preserve the exact rendered document hash.

## 2. Code-observed product facts

| Fact | State | Evidence / drafting consequence |
|---|---|---|
| B2B SaaS/PWA for service professionals and small businesses | CONFIRMED PRODUCT CONTEXT | Terms are B2B, subject to mandatory-law exceptions. |
| Email/password and Google authentication | LIVE IN CODE | Privacy covers credentials, Google identifiers and OAuth state. |
| Google Calendar integration | LIVE IN CODE | Requested scope is `calendar.events.readonly`; event objects, identifiers, sync data and OAuth tokens must be disclosed accurately. |
| Clients, visits, public requests/orders/rentals, notes, operational and financial records | LIVE IN CODE / deployment flags vary | Drafts use neutral categories; release owner must mark deployed modes. |
| CSV/vCard imports | CURRENT CODE; DEPLOYMENT/ACCEPTANCE TO VERIFY | Current inventory includes API/server/worker imports. Reconcile later IM acceptance with historical findings; verify preview/purge/recovery guarantees before publication. |
| Public booking/intake and tokenised status/receipt/preferences pages | LIVE IN CODE | Requires end-client terms, layered notice and token-safe legal links. |
| Payment records/allocations | LIVE IN CODE | Perelai records operational information; no evidence of client-money processing or card vaulting. Do not call records payment processing. |
| Cash Drawer | IMPLEMENTED CORE; OPERATIONAL RELEASE TO VERIFY | Cash custody sessions/counts/movements/discrepancies and actor references; also SOLO owner capability. DR0–6 code exists; use current DR7/readiness evidence. No fiscal register, acquiring, statutory Z-report or STUDIO-only promise. |
| Company hard deletion/closure | ISOLATED RETAINED-PROTOCOL DRILL VERIFIED; PRODUCTION PROCEDURE AND RESTORE PENDING | `delete-company.ts` defaults to dry-run and has an ordinary-DB retained path only behind explicit CLI/env, exact manifest/authority/D0/maintenance, stopped-writer and full independent-journal-copy gates. It fails closed for unclassified relations. The isolated drill passed; no self-service erasure or production 30/30 completion is established. See §5.1. |
| SaaS Billing/subscriptions | IMPLEMENTATION IN PROGRESS; LIVE READINESS NOT ESTABLISHED HERE | Reuse current BILL1/BILL2 evidence; old BILL1A-only verdict is historical. Paddle remains first MoR. Policy approval/fixture examples do not establish provider account approval or live behavior. |
| BillingCustomer/Company relationship | APPROVED DESIGN; PLANNED RUNTIME | One BillingAccount per Company with at most one current paid subscription; one payer may fund any number independently at standard offers. No PRIMARY/ADDITIONAL, sibling discount or commercial paid-count cap. Payer identity grants no workspace permissions. |
| SaaS trial | C-19 APPROVED; RUNTIME RELEASE EVIDENCE REQUIRED | One shared local 21-day STUDIO trial per payer, up to 5 performers/TEAM. No card or provider subscription during trial in v1; choose/pay after expiry. No automatic day-22 charge or permanent free MVP. Drawer subject to operational availability. |
| Pricing/tax | MONTHLY PRICES APPROVED; C-11 DISCLOSURE/PROVIDER SETUP PENDING | SOLO_MONTHLY 1900 USD / STUDIO_MONTHLY 2900 USD, MONTH, quantity 1. Standard prices, no Founding/reference prices or approved annual offers. Paddle may localise currency; `tax_mode=location`; no launch overrides/PPP/custom FX/VAT engine. |
| Performer capacity and administrative access | APPROVED; TEAM CORE IMPLEMENTED, COMMERCIAL ADMISSION/RELEASE PENDING | SOLO 1 / STUDIO 5 active performers including working owner/no-login/reserved new-profile invites. ADMINISTRATOR reception differs from SUPERVISOR management. Reuse TEAM/TR evidence; verify TEAM4/5/BILL admission. |
| STUDIO release | C-17 HARD GATE APPROVED; TEAM-RELEASE NOT PASSED | Regular paid launch plan, not beta. Any live STUDIO sale/upgrade (including internal charges), public paid CTA and general team onboarding require TEAM-RELEASE plus Billing/legal gates. |
| STUDIO+ | C-18 CONTACT_ONLY APPROVED | Small contact block; no price, numeric limit, OfferCode, checkout, trial grant or launch commitment. Verify enquiry data/retention and actual support/mail provider before publication. |
| Workspace Data Export | IMPLEMENTED; OWNER REPORTS FUNCTIONAL TEST PASSED 2026-09-25; test environment/build and production scope not supplied | Reuse the existing owner-only Company archive under Settings/Data Transfer. C-10 packaging/restricted create/download and complete switching procedure remain to reconcile; §5.3. Must not be called a complete GDPR/privacy access export or backup. See `11_workspace_data_export_legal_matrix.md`. |
| Privacy Access Export | AUTOMATED PRODUCT NOT ESTABLISHED; MANUAL PROCESS REQUIRED WHERE RIGHTS APPLY | Verified person-scoped response, distinct from tenant archive; establish working intake, deadlines and protected delivery before processing subject to these rights. |
| Email delivery via Resend | LIVE IN CODE | Candidate subprocessor; legal entity, regions and transfer mechanism require vendor/account verification. |
| Web Push via VAPID | LIVE IN CODE / feature flags | Browser permission is separate; endpoint/subscription data and provider path require audit. |
| BullMQ/Redis | IMPLEMENTED; HETZNER HOSTING OWNER CONFIRMED 2026-09-25 | Redis runs on the owner's Hetzner infrastructure in Falkenstein; no separate managed Redis vendor is asserted. Reconcile actual queue payloads, expiry, access and backup coverage. |
| Landing PostHog | DISABLED IN LAUNCH V1 SOURCE; 2026-09-23 PRODUCTION CONFIG REQUEST OBSERVED | Root layout no longer mounts the SDK and the retained adapter ignores even a configured key. Dormant settings retain memory persistence and disabled autocapture/replay. Verify zero requests after deployment; previous production events and provider retention remain subject to the historical audit. |
| Landing `NEXT_LOCALE` cookie | LIVE IN CODE AND OBSERVED IN PRODUCTION | One year, SameSite=Lax. The production entry path set it without an explicit language-button click in the audited session; final copy must reflect actual middleware behaviour. |
| Theme and region browser storage; prior attribution | CURRENT SOURCE RETAINS REQUESTED PREFERENCES AND CLEARS LEGACY `perelai_attr` | No new landing UTM/referrer storage or cross-domain marketing handoff in Launch v1. Verify the new build and disclose still-enabled preferences. |
| AI functionality | NOT CONFIRMED AS PRODUCTION | No AI provider/production function confirmed. Assess rules-based billing/eligibility under Privacy §18 too; absence of AI is not an Article 22 conclusion. No shared Customer Data model training by default. |
| File attachments | CURRENT CODE; DEPLOYMENT TO VERIFY | Inventory CORE_WORKSPACE includes files/FileAsset storage. Audit content, metadata, access, retention and sensitive-data handling; do not silently omit deployed attachments from notices. |
| Coworker availability | CURRENT CODE, ADR-0010 | Linked Companies see opaque occupied intervals plus company name/colour. No foreign client/staff/service/amount/note or resolvable transaction ID; assess identifiability of solo-business data. |

### Public booking legal setup — 2026-09-23 decision

See [document 19](19_simple_booking_legal_setup_20260923.md) for the current product contract.
Observed source has no end-client card collection/acquiring/automatic charge in the booking form.
This does not establish whether the Business separately takes prepayments or sells prepaid packages.

- Historical UI baseline, 2026-09-23: `/settings/booking-card` → settings →
  `PublicBookingSettingsSheet`, 11 legal fields with custom disclosures/privacy URL.
  Update 2026-09-25: source now has saved-draft preview/publication methods in
  `CompaniesService` and the versioned renderer in `business-notice-template.ts`; its reviewed and
  current production registries remain empty. Implementation is no longer merely planned, but
  standard-notice production availability is not established. Refund absence alone does not block
  the defined no-money flow. This observation does not re-certify all findings of review 20.
- Standard eligibility: the owner confirms no prepayment/deposit/cancellation fee for this flow.
  No required refund text, custom policy URL, manually entered version or cancellation-reminder
  checkbox. Both SOLO and STUDIO use the same setup.
- Confirm actual provider identity and monitored contact; do not treat Company display name or
  account email as verified public legal identity. Collect additional facts only when applicable.
- Platform-supplied template inputs: approved first-market/language wording, actual purposes/legal
  bases, recipient/transfer facts and retention/rights procedures from §§4–7. Review these once for
  the supported template; do not delegate legal drafting or unknown provider facts to each master.
- A generated layered Business notice satisfies the product's notice-presence requirement when
  approved, populated, owner-confirmed and presented. An adequate external notice is an alternative.
  Privacy acknowledgement is not consent; do not derive consent from booking submission.
- Preserve legacy/custom agreements and capture selected template/path/version plus rendered text
  in server-validated revision/evidence. Optional/non-applicable fields stay out of blocking errors.

## 3. Feature truth table to complete at release

Owner must mark one value for every row: `LIVE`, `BETA`, `FEATURE_FLAGGED`, `PLANNED`, or
`NOT_SUPPORTED`.

| Capability | Production state | Document impact |
|---|---|---|
| Email/password authentication | [TBD] | Terms, Privacy |
| Google sign-in | [TBD] | Terms, Privacy, subprocessors |
| Google Calendar | [TBD] | Terms, Privacy, DPA, subprocessors |
| Calendar and Inbox | [TBD] | Terms, Privacy |
| client CRM, notes | [TBD] | Terms, Privacy, DPA |
| files/attachments | [TBD] | Terms, Privacy, DPA, security |
| CSV/vCard imports | [TBD] | Terms, Privacy, DPA, retention |
| public appointments | [TBD] | all end-client documents |
| public requests | [TBD] | all end-client documents |
| public orders | [TBD] | all end-client documents |
| rental reservations/inventory | [TBD] | all end-client documents |
| transactional emails | OWNER-DECLARED BOOKING-ONLY END-CLIENT SCOPE: no promotional content; actual content/trigger determines CASL classification and scope of any exception | Terms §12, Privacy, DPA, subprocessors |
| marketing emails | OUT OF SCOPE FOR LAUNCH V1: no marketing, promotional or lifecycle-email functionality enabled; reassess before enabling | Privacy, consent UX |
| public receipts/status/preferences/client hub | [TBD] | Privacy, booking terms, link safety |
| prepaid Packages/instalment tracking | [TBD] | Terms, Privacy |
| Cash Drawer cash recording/reconciliation | [TBD operational availability, no repeat DR0–6] | Terms/Privacy/DPA and data retention; omit promise if disabled |
| staff/RBAC, administrative membership and performer profile separation | [TBD: TEAM-RELEASE evidence] | Terms, Privacy, DPA; current permissions, revocation, isolation and explicit migration |
| STUDIO regular paid team plan | [TBD: TEAM-RELEASE + BILL/legal gates] | Terms, Billing, UI; approved $29/month and 5 performers do not prove release |
| STUDIO+ contact-only enquiry | [TBD: implemented contact route] | Privacy, retention, UI; not a released subscription |
| PWA install and Web Push | [TBD] | Privacy, Cookie Policy |
| billing/subscription/trials | [TBD] | Terms, Privacy, Billing policy |
| Paddle-hosted checkout/Buyer Portal | [TBD] | Terms, Privacy, Cookies, Billing policy, third-party roles |
| Workspace Data Export | [TBD] | Terms, Privacy, DPA, retention, security, subprocessors |
| Privacy Access Export/request workflow | [TBD] | Privacy, DPA, rights operations |
| AI functionality | [TBD] | Terms, Privacy, subprocessors, AI Notice |

Security-sensitive storage observed during the follow-up audit:

- app authentication currently stores `accessToken` in `localStorage`;
- public client-hub/return flows store token-like session records in `sessionStorage`;
- onboarding drafts, last-login email and multiple UI/user preference records also use browser
  storage.

This is not a legal-text-only fact. Security must threat-model XSS/token exposure and decide whether
the production session architecture should change before the notice is approved. Legal pages must
never receive, log or analyse these values.

## 4. Controller/processor facts to approve

### Perelai generally acts as controller for

- landing visits and deliberate analytics events;
- registration, authentication, account/workspace administration;
- account identities, authentication roles and necessary security logs; operational performer
  records/schedules handled for the business remain processor data where that is their purpose;
- STUDIO+ business enquiries and replies, with separate marketing choices where required;
- subscriptions/billing records if billing is launched;
- BillingCustomer payer identity, trial eligibility, Offer intent/attribution, Company subscription
  projections and access-enforcement records if billing is launched;
- support, security, fraud prevention, product feedback and legal claims;
- Perelai's own marketing and referral attribution.

### Perelai generally acts as processor for

- end-client contact and service history entered/collected by a business;
- bookings, requests, orders, reservations, notes and business-uploaded content;
- reminders and operational messages sent on the business's instructions;
- imported contacts/events and operational/financial records stored for the business;
- operational performer profiles (including people without an account), assignments, schedules
  and business-directed team administration, according to the actual processing purpose;
- creation and delivery of a Workspace Data Export on an authorised owner instruction, to the extent
  the archive contains Customer Personal Data. Perelai separately controls limited security, audit
  and legal-compliance metadata for the export flow.

### Business customer generally acts as controller for

- why and how it uses end-client data;
- fields collected, legal basis, retention, staff access and marketing choices;
- its privacy/booking/cancellation/refund notices and data-subject responses.

These are functional conclusions, not labels that override facts. Escalate any Perelai reuse of
Customer Data for its own analytics, advertising or model training: it may change the role analysis.

## 5. Legal facts and applicability register — staged launch checks

| ID | Decision owner | Required answer |
|---|---|---|
| F-01 | Founder | COMPLETED 2026-09-24: operator name, separate EDR/RNOKPP identifiers and registered address recorded in §1 from the supplied extract and owner confirmation; no remaining identity-value TBD. |
| F-02 | Founder + UA/EU counsel where applicable | Ukrainian FOP identified in §1; global remote access and SCC reliance declared. Owner further reports no stable EU place of business. Record this fact; assess territorial scope separately for own account/service processing and Customer Data processing. A Polish controller relationship alone does not automatically establish every processor duty under Article 3. §7 and proposal 22. |
| F-03 | Owner + focused legal input | OWNER SELECTED: Ukrainian governing law for the Perelai service contract. Preserve non-waivable local protections and separate governing law from forum, pre-action procedure and any SCC governing law. Court/venue and final enforceability remain open; §5.2. |
| F-04 | Owner + focused privacy input | EU representative NOT APPOINTED. Owner now reports PL pilot ended and 0 active EU users; former account/data and any continuing access/retention still need a documented disposition. Historical real-data use is not erased by the new market gate. Assess any remaining Article 3/27 processing rather than inferring an exception from no sales. DPO assessment remains separate. |
| F-05 | Counsel | UK launch status, UK representative and review under current UK data law. |
| F-06 | Owner + focused legal input | Current code: UA/US/AU PUBLIC; CA PUBLIC only for MB/NB/NL/NS/NT/NU/ON/PE/SK/YT with current scope declaration; QC/AB/BC and other catalog countries CLOSED. See the CA release record for explicit owner authority and verification. Earlier UA/US-only selection is historical. Earlier PL/en + UA/uk and proposal 22's US limited-pilot sequence are historical. PL pilot is owner-reported ended; separately resolve former-account data. This choice does not approve UA/US notice drafts or production launch. Preserve prepared variants and existing records; §10. |
| F-07 | Owner + focused legal input | OWNER SELECTED base cap: fees paid by the Customer during the preceding 12 months. Final clause must define claim trigger, affected Company/account scope, fees via MoR, mandatory exceptions and the no-payment/trial case; no automatic zero-liability conclusion. §5.2. |
| F-08 | Owner + legal | C-05/C-19 and basic C-11 now decided: monthly renewal, period-end cancellation, no voluntary prorated refund; trial STUDIO, v1 post-expiry purchase. Verify enabled flows/copy, settle actual grace/restriction and served-market wording. No R-01 guarantee approval task. |
| F-09 | Engineering/ops | POLICY ACCEPTED; TEST FIXTURE VERIFIED; PRODUCTION PROCEDURE AND RESTORE PENDING. Decision 21: active Company data within D0 + 30 days; residual backups within 30 days of active deletion, ordinary maximum D0 + 60. §5.1 separates backup configuration/owner attestation from tested operation and records deletion/recovery defects. Verify ordinary-Company execution, prompt authority checks, return/retrieval, public-access invalidation, all stores, recovery including unfinished confirmed cases and record-specific exceptions. No immediate/all-data deletion claim. |
| F-10 | Security | Owner declares encryption/secure connections for global admin access. Record specific controls and verify their actual scope; no inferred at-rest encryption, MFA or unrestricted-country approval. Evidence-backed TOMs, incident procedure and customer notification channel remain required for applicable processing. |
| F-11 | Finance/tax + counsel | Contracting disclosure between Perelai supplier terms and the applicable Paddle buyer entity; vendor payout accounting/tax for the FOP; launch jurisdictions/currencies. |
| F-12 | Product + legal | Verify the selected v1 path: no early payment setup/provider trial; 21-day STUDIO expires without charge, then affirmative purchase. C-07 early setup deferred; do not reopen first-charge alternatives or let its absence block ordinary checkout. |
| F-13 | Engineering/security/privacy | Reuse owner-reported successful export test and existing implementation. Record tested build/environment and relevant evidence for owner RBAC, fresh confirmations, grant/URL TTLs, archive isolation, audit events, object purge and Company-deletion interaction; do not redevelop or repeat already evidenced checks. §5.3. |
| F-14 | Privacy/counsel/ops | Approve the Privacy Access Export/manual request procedure, identity verification, Art. 15 supplemental information, Art. 20 scope, exceptions and third-party-rights review. |
| F-15 | Privacy/ops | Approve retention for export job/audit metadata (planned default 12 months), failed/staging cleanup, legal holds and incident evidence. |
| F-16 | Product/counsel | Define permitted read/export/delete/closure actions in Billing restriction and the neutral public-intake response; reconcile Terms, UI and policy. |
| F-17 | Launch-country legal + billing/product | Review buyer status, renewal/withdrawal/remedies for the first served market; verify purchase assent and confirmation plus Paddle/support responsibility. Use a provider withdrawal route if applicable and sufficient. Other-country annexes/custom automation only when required. Document 14 controls scope. |
| F-18 | Focused EU legal + product/data operations | Owner now considers Data Act covered by tested Workspace Data Export; this supersedes the previous exclusion proposal. Export capability ACCEPTED AS OWNER-REPORTED; full compliance NOT ESTABLISHED. Resolve service classification and the bounded contract/switching/retrieval/deletion mapping in §5.3. No blanket MVP or Ukrainian-provider exemption, and no requirement to build a new general migration product. |
| F-19 | Privacy + engineering | Customer Data licence, staff legal bases, Google Limited Use, coworker sharing, sensitive notes/files, processor-support roles and complete DPA authorisation/audit safeguards. |
| F-20 | Security + product + privacy | Reuse current TEAM/TR/Drawer acceptance reports for actual deployment, current sessions/permissions, offboarding and data isolation; TEAM-RELEASE still required for public STUDIO trial/sales. Verify actual ADMINISTRATOR/SUPERVISOR scope and Drawer enabled status; no repeated implementation or invented security claims. |
| F-21 | Product + privacy + support | STUDIO+ contact channel, minimum fields, lawful basis by purpose, recipient/vendor map and enquiry retention. No automatic marketing enrolment, client-data intake or promise of future paid access. |

### 5.1. Deletion and recovery evidence — reviewed 2026-09-25

Sources: [30/30 implementation plan](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/polishing/company_deletion_30_30_mvp_20260925.plan.md),
[test operator runbook](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/polishing/company_deletion_operator_test_runbook_20260925.md),
[production DR draft](/Users/valery/Sites/beauty-finance/docs/runbooks/production_disaster_recovery_runbook.md),
the owner's supplied implementation report, and the source/test/audit inspection in this task.

| Fact | Status and evidence boundary |
|---|---|
| Deletion policy | ACCEPTED in 21. Keep the 30-day active and subsequent 30-day backup ceilings; no need to approve these numbers again. |
| Current operator command | SOURCE/ISOLATED-RUNTIME VERIFIED 2026-09-25: `apps/api/src/scripts/delete-company.ts` defaults to dry-run. Ordinary-DB retained execution requires `--execute`, `--allow-production-execution`, `DELETE_COMPANY_ALLOW_PRODUCTION_EXECUTION=true`, exact Company/owner/manifest/authority/D0/maintenance references, `DELETE_COMPANY_WRITERS_STOPPED=true` plus `--writers-stopped`, and a complete current independent journal copy. These gates do not grant deployment or operation approval; an unclassified relation, missing copy or missing maintenance proof stops before deletion. No new execution on archived local Company `cmugzt6pn0006vveukypzgc70` was authorised or performed. |
| Automated checks | CURRENT TASK VERIFIED: 53 focused API unit tests plus 2 retained-case PostgreSQL/Redis integration tests passed on 2026-09-25. API application typecheck and standalone `delete-company.ts` module load passed (the normal API tsconfig excludes scripts). The added unit check rejects omitted or elapsed retained-evidence expiry dates: a new case cannot silently default to a universal 1095-day period. No full-suite or production release result is inferred. Earlier 327/23/1/10 focused-suite results remain historical review evidence, not a substitute for this drill. |
| Scratch deletion and replay | RUNTIME VERIFIED ON ISOLATED FIXTURES: an archived target and unaffected sentinel shared one `BillingCustomer`, each with distinct accounts. The drill checked missing complete-journal-copy fail-closed behaviour, DB-boundary failure/resume, target PII/job/file/payment-allocation/payment-account/Staff/Category purge, retained legal scope + Perelai Terms evidence + closed target billing account, and sentinel integrity. It restored a pre-case SQL backup to quarantine and replayed **both completed and unfinished authorised cases** before access. It did not use the ordinary source Company, Coolify backup, production storage or an off-server production copy. |
| Coolify backups | RECORDED CONFIGURATION: `postgres`, daily UTC, max 3 copies and max age 10 days as independent configured limits. OWNER-REPORTED ROTATION: supplied listing shows three Sep 23–25 dumps and the owner confirms rotation. This is not proof of every copy's expiry or successful restore. Do not translate the copy count into a guaranteed three-day TTL. |
| Hetzner server backups | RECORDED SCREENSHOT EVIDENCE: automatic Backups disabled and no Snapshots for the pictured server. The three source screenshots were unavailable at the runbook's Desktop paths during this review, so their hashes/content were not independently reverified. Keep the earlier evidence attribution; restore a private evidence reference or capture current settings for release. |
| Exact target confirmation | SOURCE/TEST VERIFIED: dry-run hash now includes exact record IDs, queue IDs and object provider/bucket/key; DELETE_STARTED persists that manifest. Earlier count-only finding is CLOSED. Historical scratch runs predate this change and do not prove a new-format recovery drill. |
| Recovery rule | SOURCE/RUNTIME VERIFIED IN QUARANTINE: the runbook and `reconcileRetainedDeletionJournal` reconcile all authorised cases, including unfinished cases, and preserve access suppression before reopening. The integration drill executed this against a pre-case backup. Production execution and cutover remain unverified. |
| Durable deletion journal | UPDATED OWNER DIRECTION 2026-09-25: protected local `deletion.jsonl` for MVP, not R2/S3. The retained path writes a strict hash-linked fsync'd sequence, refuses simultaneous writers through a private lock and rejects a missing, malformed or stale **complete journal copy**. It requires a second copy after the completion event before marking the case verified. Its passed drill used the explicit **test-only same-filesystem exception**. The shown Coolify configuration backs up PostgreSQL dumps, not the whole server; Hetzner Backups are disabled on the pictured host. An accessible off-server continuity copy, location/access, retention and recovery evidence remain [TBD]; no production deletion/replay claim. |
| Restore and production completion | PARTIALLY VERIFIED: an isolated SQL-backup restore with journal replay has been demonstrated. NOT VERIFIED: Coolify/Hetzner production-format restore, ordinary Company deletion, genuinely independent journal checkpoint, all relation classes and production maintenance fence. F-09 remains open. |

Required corrections before these controls can be recorded as operational:

- Carry the verified minimal case/D0/manifest/failure-resume design into a separately approved
  ordinary-Company protocol. The current test implementation deliberately rejects unclassified rows.
- Put the production checkpoint on genuinely independent protected storage; a local primary journal
  and test-only same-filesystem copy cannot complete recovery after host loss or an older backup.
- Classify ordinary Company relations and implement erasure/minimisation alongside necessary
  restricted evidence, consistently with ADR-0016. Do not bypass its protections with a production
  flag or classify all booking evidence as Perelai accounting records.
- Reconcile **all authorised deletion cases**, including unfinished ones, before a restored
  system serves traffic or starts workers, as the corrected DR runbook now requires.
  A crash after DB deletion but before `DELETE_VERIFIED` must not permit resurrection. A start event alone
  is not proof of authority or completion: verify the case, keep access suppressed and finish or
  resolve it before reopening. Missing/untrusted journal segments block reopening.
- Rehearse an approved ordinary-Company deletion and production-format backup restore/replay;
  verify public-token invalidation and expiry/access for every in-scope backup/object copy.
  Retain dated evidence outside the recovery source.

For a small launch, a documented operator procedure with a verified maintenance window can avoid
a new public deletion UI or background Company-GC service. Stop all relevant API/worker/relay/
scheduler/webhook writers before effects; preserve suppression and outstanding purge obligations
across failures and before reopening. Merely passing `--maintenance-confirmed` is not that proof.

### 5.2. Owner's group-5 decisions — accepted scope versus legal applicability

| Item | MVP disposition |
|---|---|
| First markets | Current owner-selected code releases: UA/uk, US/en, AU/en and the ten-region CA/en cohort above; QC/AB/BC and other catalog markets CLOSED. Deployment remains separate. PL pilot is owner-reported ended, with zero active EU users; former-account closure/retention and residual processing remain separate. Review 23 records implementation gaps; no production/legal release approval inferred. PL/EU variants are deferred. |
| Ukrainian governing law | ACCEPTED DRAFTING CHOICE for Perelai's service contract, not a consequence that excludes other mandatory laws. Keep mandatory-protection wording; forum and pre-action terms remain open. [Rome I Articles 3, 6 and 9](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32008R0593). |
| Liability cap | ACCEPTED COMMERCIAL BASE: preceding 12 months' Customer fees. Specify calculation and exceptions in the final Terms; a trial can otherwise yield a zero cap. Do not exclude non-excludable liability, data-subject rights or regulatory powers. Ukrainian law invalidates contractual exclusion/limitation for intentional breach; see [Civil Code Article 614(3)](https://zakon.rada.gov.ua/laws/show/435-15#Text). |
| EU representative | NOT APPOINTED is accepted as a fact; NOT REQUIRED is not established. Article 27 applies where Article 3(2) does, with an exception requiring occasional processing, no large-scale sensitive/criminal-data processing and unlikely risk. Ongoing salon bookings/client history do not appear occasional (assessment of this product). The PL pilot is now ended according to the owner; assess any continuing covered processing and designate a representative if required. Do not infer an exception from zero active accounts. [GDPR Article 27](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32016R0679). |
| DPO | NOT APPOINTED. A working MVP assessment may conclude no mandatory DPO for the stated ordinary non-medical scope without large-scale systematic monitoring or large-scale sensitive/criminal-data processing, subject to actual activities and applicable local law. Record this separately from Article 27; reassess platform-wide scale, not only one salon. Keep `support@perelai.app` as privacy contact, not a DPO title. [EDPB DPO guidance](https://www.edpb.europa.eu/sme/be-compliant/data-protection-officer_en). |
| Data Act | UPDATED OWNER POSITION: covered by an existing export which the owner has tested. Accept the reported capability; export alone does not prove all applicable duties. The Commission includes SaaS within Chapter VI's potential scope. Resolve classification and use the minimal completion map in §5.3. [Commission explanation](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained). |

These are focused applicability/drafting checks, not requirements for a legal certificate per
market. An owner decision can select policy and commercial terms; it cannot establish a statutory
exemption or override a mandatory retention/transfer rule.

The later owner clarification and [proposal 22](22_market_access_and_existing_pl_pilot_20260925.md)
apply to the existing Polish case: free operational CRM use is not a synthetic demo; assess the
Article 3 trigger by role before concluding appointment is mandatory. If it is, a functioning
individual representative can be sufficient without a new EU entity or a specific commercial package.
The proposal is not authorisation to continue an unremedied gap or an instruction to delete user data.

**EU representative — practical MVP risk and timing:** the owner proposes buying a representative
service after first EU sales. Record this as a proposed deferral, not a launch clearance. Where
Article 3(2) applies and Article 27's exception does not, appointment is due for that processing;
payment is not the trigger. Assess any actual EU establishment first. Fewer than ten salon accounts
can involve many end-clients, and regular operation remains regular even at low volume. There is
no evidence here from which to estimate the probability of an investigation or a likely fine.

An authority may request records/explanations and order corrective action; reprimands, fines and
processing restrictions are possible. Severity, duration, harm and cooperation matter. A small,
promptly corrected case does not automatically receive a fine, but there is no guaranteed first
warning. Appointing later can remedy the ongoing gap without retrospectively curing it. The
practical exposure includes response costs and disruption, even without a fine.
See the [Commission's enforcement explanation](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/enforcement-and-sanctions_en).

**Minimum next action:** document the ended PL service and remaining data/access/retention,
with one Article 3/27 assessment for any continuing covered processing and before reopening EU
operational admission. Appoint a representative if required, or record the evidenced reason why not. If applicable appointment is
deferred, do not mark F-04 closed or the PL launch compliant. A demo without covered EU personal-data
processing can use synthetic data; synthetic bookings alone do not exclude real account/telemetry
processing from the assessment. No compliance dashboard is required. If contacted by a DPA,
verify the request, answer accurately within its deadline, preserve relevant evidence and promptly
correct confirmed gaps. Do not claim an appointment, SCC execution or control that does not exist.

### 5.3. Workspace Data Export and Data Act — reuse implementation, complete the service terms

**Evidence accepted:** owner reports testing Workspace Data Export on 2026-09-25. Environment,
build and test report were not supplied; this is an owner attestation, not an independently
observed production test. The [import master plan](/Users/valery/Sites/beauty-finance/.cursor/plans/import/00_import_experience_master_20260806.plan.md)
links the separate [EX1 export plan](/Users/valery/Sites/beauty-finance/.cursor/plans/import/12_workspace_data_export_mvp_20260823.plan.md):
owner-scoped ZIP, canonical JSONL/CSV, README/manifest and a 24-hour archive lifetime. Its
2026-08-25 release status is historical; it does not contradict a later owner test or prove current
production deployment. Reuse [matrix 11](11_workspace_data_export_legal_matrix.md), not a new export feature.

If Chapter VI applies, close the following bounded mapping against
[Data Act Articles 25–30](https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng):

| Remaining point | Minimum MVP completion |
|---|---|
| Export coverage and technical information | Map existing exported datasets/assets and exclusions to the actual exportable scope; describe formats, available interfaces and justified exclusions. Check applicable interface duties. A working ZIP is useful evidence, not proof of completeness. |
| Switching contract and support | State the request route, notice (maximum two months), ordinary transition (maximum 30 calendar days, subject to statutory exceptions), assistance, continuity/security, termination and any permitted charges. Existing export plus monitored support can handle individual requests; no universal destination importer is assumed. |
| Retrieval after switching | Provide at least 30 calendar days after the agreed transition ends. A 24-hour download/archive TTL can coexist with this through regeneration or secure assisted delivery throughout the retrieval period. Verify expired trial/Billing restriction does not make the route unusable. |
| Erasure and Company closure | Reconcile post-retrieval erasure with the agreed return/deletion choice and 30/30 policy. An export ZIP expiry is not the source-data erasure date. Do not silently extend an accepted deletion deadline or force a switching retrieval period onto every erasure request; settle the applicable route and dates when acknowledging it. |

This is a contract/runbook and limited verification task unless a concrete export/access gap is
found. No automatic scheduler or new migration UI is required solely to record this assessment.

## 6. Data and retention inventory — complete enabled processing before publication

| Category | Purpose/role | Active retention | Deleted/backups | Owner/evidence |
|---|---|---|---|---|
| account/profile | controller | [TBD] | [TBD] | auth + DB audit |
| performer profiles, schedules and membership/invite relationships | processor for business operations; controller for own account/security purposes | [TBD by purpose; include no-login profiles and expired/revoked invitations] | [TBD history/migration/deletion] | TEAM0/1/3 + privacy |
| session/refresh revocation, access versions and cache invalidation records | security role determined by purpose | [TBD actual TTLs] | [TBD; membership revocation != data erasure] | TEAM2 + storage audit |
| STUDIO+ enquiries and replies | controller; business enquiry/support | [TBD defined enquiry lifecycle] | [TBD mailbox/tool deletion/backups] | support/privacy; separate marketing records |
| legal acceptance and purchase/recurring authorisation evidence | Perelai controller for necessary contract/claims evidence | OWNER SELECTED: 1095 days after Company deletion as requested claims baseline; validate purpose-specific start/period/holds once, not per routine row. Existing LegalAcceptance + scope scalar fields are a reasonable whole-row MVP candidate; §6.2 | direct operator-only access accepted in principle; technical isolation, minimal attribution/parent dependencies and expiry route [TBD] | Art. 17(3)(e) can qualify erasure duties but does not replace an Art. 6 basis; no salon CRM retention merely to preserve acceptance |
| PublicBookingLegalEvidence | Business evidence on instructions; independently justified Perelai claims purpose only where actually established | Current disclosure snapshot records legal text/context rather than raw booking form fields. Whole current rows can be proportionate for a justified purpose; blanket all-kind 1095-day retention NOT established. Select kind-level rules once; §6.2 | [TBD role/basis/clock for each retained kind, restriction/hold and expiry path despite append-only/FK protection]; no ordinary UI/API access | privacy + engineering; marketing permission and Business-only evidence are not automatically Perelai/FOP accounting data |
| Company deletion case/journal | minimal operations/accountability evidence; confirm basis by purpose | [TBD period/criteria covering outstanding case, backup/replay needs and justified claims; avoid indefinite retention] | owner now selects local JSONL; independent continuity copy, access, integrity, recovery and expiry [TBD]; no CRM payload | Perelai operator + engineering; §5.1 |
| refund/cancellation/withdrawal requests and confirmations | controller/contract/claims | [TBD] | [TBD] | support + Paddle reconciliation |
| coworker link/invite and occupied-time disclosure | mixed by purpose; business instruction | [TBD] | [TBD membership exit/history] | ADR-0010 + privacy |
| attachments/FileAsset objects, metadata and staging | processor where Customer Data | [TBD] | [TBD object/DB/backups] | files/storage audit |
| cash custody/count/movement/discrepancy records, notes and operator references | processor for business operations; limited security purpose by flow | [TBD cash record vs person-link periods] | [TBD privacy/anonymisation vs business history/holds] | Drawer DR6 + privacy; no new export promise |
| workspace and Customer Data | processor | OWNER APPROVED 2026-09-25: 90 days for uncompleted requests, 24 months after last completed visit for ordinary client history; §6.1. Edge-case triggers and operating procedure [TBD]; Business confirms applicable instructions/profile | decision 21: active deletion within D0 + 30; residual backups within 30 days thereafter; production execution PENDING under §5.1 | owner/privacy + engineering/ops; assisted procedure acceptable |
| deleted/archived clients | processor | [TBD purpose-based profile; archive is not erasure or unlimited retention] | [TBD individual deletion/rights procedure and backup interaction; Company closure follows 21] | schema/jobs or verified manual procedure |
| import source and preview files | processor | [TBD hours/days] | [TBD] | import pipeline |
| Workspace Data Export artifact | processor | planned: 24 hours from READY | automatic object purge; verify backups/versioning | EX1 tests + storage config |
| export create/download grants | mixed security/processor | planned: 10 minutes, single use | hash/revocation deletion `[verify]` | EX1 security tests |
| export job/audit metadata | mixed; data-minimised, not necessarily anonymous | planned default 12 months, legal approval required | `[TBD deletion/legal hold]` | privacy + operations |
| failed/staging export objects | processor | planned immediate cleanup | prove retries/orphan sweeps | worker/storage runbook |
| Calendar sync state/runs/tombstones | processor with limited security purpose by flow | [TBD] | [TBD disconnect/erasure/backups] | ADR-0005 + Calendar runtime |
| Google OAuth tokens | controller/processor depending use | until disconnect [verify] | revoke/delete [verify] | integration code/runbook |
| OAuth state and verification tokens | controller/security | [TBD actual TTL] | deletion [TBD] | constants/jobs |
| public booking/status/access tokens | processor/security | [TBD] | [TBD] | public token services |
| security/access logs | controller | [TBD] | [TBD] | platform/logging vendor |
| notification logs | mixed | env currently specifies 180 days | [TBD backups] | env + tasks |
| read system notifications | processor | env currently specifies 90 days | [TBD backups] | env + tasks |
| archived system notifications | processor | env currently specifies 30 days | [TBD backups] | env + tasks |
| revoked Web Push data | controller/processor | env currently specifies 30 days | [TBD backups] | env + tasks |
| system task runs | controller/operations | env currently specifies 30 days | [TBD backups] | env + tasks |
| support messages | controller | [TBD] | [TBD] | support tooling |
| BillingCustomer/trial/access projection | controller | [TBD contract/claims period] | `[TBD]` | Billing + counsel |
| Paddle customer/subscription/transaction/webhook records | controller/shared by flow | [TBD applicable law/contract] | restricted archive `[TBD]` | Paddle config + billing/counsel |
| vendor payout/accounting/tax records | Perelai own accounting obligations; applicable GDPR basis assessed separately | Owner selects 1095 days as desired baseline; reporting-related clocks and statutory extensions may require longer. [TBD accountant-confirmed category/start-event/period/extension table]; §6.2 | necessary original invoices/receipts/payout documents can be retained intact; blanket checkout/webhook rows are not the approved tax record set | finance/accountant; Ukrainian law is not automatically an Art. 6(1)(c)/(3) Union/Member-State-law basis |
| historical PostHog events/config requests | controller | [TBD vendor setting] | [TBD] | 2026-09-23 production config request; Launch v1 source disables SDK; prior provider records/dashboard still require review |
| historical landing attribution/session storage | controller | browser tab/session in prior production build | new source removes legacy key on page load and creates no replacement; prior server/app acquisition records are separate | production audit 2026-09-23; post-deploy verification pending |
| language cookie | controller | `NEXT_LOCALE`: 1 year | cookie clear/expiry | production `Set-Cookie` audit 2026-09-23 |
| theme/region preferences | controller | localStorage until changed/removed | browser/site-data clear | source audit; absent in clean runtime profile |
| app bearer access token | controller/security | localStorage record; JWT lifetime 1 day | logout or 401 removes record; expired value may remain until a clear path | auth source audit; security acceptance required |
| onboarding draft | mixed business data/functionality | sessionStorage; completion clear or tab/session end | browser session clear; explicit logout did not clear in reviewed path | app source audit 2026-09-23 |
| billing checkout attempt | controller/security/functionality | sessionStorage; 120-second polling deadline, terminal clear or tab/session end | timeout does not itself prove immediate record deletion | current source only; production checkout not established |
| public hub/personal-return session records | processor/security | sessionStorage; logical 2-hour freshness checked on read | stale/error/mismatch clear or tab/session end; physical timer not established | public-routing source/tests; raw token-like data threat model in document 17 |
| public booking return path | processor/functionality | sessionStorage with no explicit TTL found | overwrite or tab/session end | public-routing source/runtime audit |
| Cloudflare challenge cookie/request logs | controller/security by purpose `[confirm role]` | `cf_clearance` observed with about 1-year expiry | account/log deletion and backups `[TBD]` | production runtime proves cookie, not dashboard configuration |
| Google OAuth binding cookie | controller/security | 10 minutes | browser expiry; server binding deletion `[TBD]` | production API `Set-Cookie` plus auth source/tests |
| residual backups/snapshots/object versions of deleted Company data | processor; excluded from ordinary use after active deletion | decision 21: at most 30 days after active deletion, ordinary total at most D0 + 60 | Coolify screenshot: `postgres` daily/UTC local backup, max 3 copies/10 days; server listing shows three Sep 23–25 dumps and owner attests rotation; pictured Hetzner server: automatic Backup off, zero manual Snapshots. Historical purge, other stores/object versions and restore walkthrough `[TBD]`; reapply deletions before restored data returns to use. | engineering/ops; [2026-09-25 evidence and limits](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/polishing/company_deletion_operator_test_runbook_20260925.md) |

Published prose must use verified periods. Where a fixed period is not possible, publish precise
criteria plus examples; do not substitute `as long as necessary` for an operational schedule.

### 6.1. Owner-approved active-history schedule — 2026-09-25

The owner explicitly approves the two numerical limits below for the MVP. They are now
**POLICY APPROVED; IMPLEMENTATION/EDGE CASES PENDING**, not merely proposed periods. Do not ask
for approval of the same numbers again. One prepared profile can serve eligible SOLO and STUDIO
businesses; the Business controller confirms applicable purposes/instructions through setup.

| Category | Approved ordinary limit / trigger | Still required |
|---|---|---|
| Uncompleted requests not converted to a service | 90 days after closure, using the previously proposed profile the owner approved | Map closure/expiry to actual statuses, including abandoned requests that never receive a manual closure; do not leave them pending indefinitely. Demonstrate cleanup of related data/tokens and treatment of necessary evidence |
| Ordinary client contact and visit history | 24 calendar months after the last completed visit; a specific continuing purpose or dispute is handled separately | Define records with no completed visit and future bookings; an administrative edit alone must not restart the clock. Specify minimum held fields and end/review of any exception; demonstrate cleanup |
| Necessary dispute/acceptance evidence | Separate minimal record, period tied to the applicable purpose/limitation rule and any live proceeding | Field-level classification, basis, start event, expiry/review, access and erasure/minimisation route; no blanket indefinite hold |

A scheduled manual review/cleanup is acceptable for the initial volume if it actually enforces
the selected limits and handles earlier applicable rights requests. Calendar reminders alone do
not establish erasure capability. Company closure follows 21 independently of this active-history
profile; it does not restart these clocks. Record any genuinely necessary profile exception with
specific, understandable purpose-based criteria and a workable review/deletion schedule.
The superseded “until the salon manually deletes it” rule is not the adopted baseline.
See [UODO on retention periods/criteria](https://uodo.gov.pl/pl/676/4260).

### 6.2. Retained evidence — accept necessary proof, keep one small retention schedule

**Owner direction accepted in principle:** necessary legal/accounting evidence can remain after
Company deletion, with direct DBA access and no product UI. Keeping a complete row is not itself
a GDPR violation. The decision turns on its contents, purpose, lawful basis, duration and access.
There is no requirement to destroy useful proof, hash every field or build an anonymisation service.
The owner selects 1095 days after Company deletion as the desired claims-retention baseline;
this is a policy choice requiring the limited clock/purpose checks below, not a statutory safe harbour.

**Legal basis:** document Perelai's legitimate interest in establishing, exercising or defending
claims, necessity and balancing under Article 6(1)(f) where appropriate. Article 17(3)(e) is an
exception to erasure, not an independent lawful basis. It does not legalise unnecessary collection
or indefinite storage. A justified routine evidence schedule need not wait for an actual lawsuit;
an individual dispute can justify a separate, scoped hold. See
[CJEU, NTH Haustechnik, C-484/24, 18 June 2026, paragraph 85](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A62024CJ0484).
State the retained categories, purposes and periods/criteria in the applicable Privacy/DPA text;
do not promise that closure erases every record without exceptions.

**Source review, 2026-09-25:** [schema](/Users/valery/Sites/beauty-finance/apps/api/prisma/schema.prisma)
and [buildDisclosureSnapshot](/Users/valery/Sites/beauty-finance/apps/api/src/public-booking/public-booking.service.ts:646).
The following is the minimum implementation direction, not a claim that production deletion now
supports it. Approve these rules once per record category/kind; no legal assessment per ordinary row.

| Record | Simple MVP disposition |
|---|---|
| `LegalAcceptanceCompanyScope` | Retain all four current scalar fields: `id`, `legalAcceptanceId`, `companyId`, `createdAt`, for necessary acceptance attribution. The relation row alone does not prove which terms were accepted. |
| Related `LegalAcceptance` | Whole current scalar row is a reasonable candidate: `id`, `userId`, `representedCustomerRef`, `authorityBasis`, `documentType`, `documentVersion`, `acceptedAt`, `sourceSurface`, `locale`, `signupMethod`, `acceptanceTextVersion`. It contains acceptance metadata, not passwords or CRM contents. Preserve the referenced immutable document/copy versions and enough attribution to make the evidence usable. Confirm necessity once; IDs remain personal data where linkable. |
| `PublicBookingLegalEvidence` | Whole current row can be proportionate for necessary proof: IDs/kind, versions/hashes, locale/time and the disclosure snapshot. The reviewed builder stores Business identity/contact details and displayed legal text/context, not raw client booking fields. Retaining exact displayed text can be more useful than hashes alone; external URL content is explicitly NOT captured. Review the actual JSON/custom-text boundary once and do not append unrelated client/health/payment payloads. |
| Public evidence purpose split | For `PERELAI_TERMS_ACCEPTANCE` and the Perelai-assent portion of `BOOKING_AGREEMENT`, document the actual own claims need/basis. Business-only agreement or `MARKETING_OPT_IN` evidence follows the Business instruction/return-deletion route unless a distinct lawful Perelai purpose is established. The kind alone is not automatic permission to retain every row for 1095 days. A processor cannot relabel all former Customer Data as its own claims archive merely in the DPA. No retained evidence may be reused for marketing. |
| Billing | Retain necessary original invoices/receipts, payout/reconciliation records and required transaction identity, parties, dates, amounts/currency/tax/refund status intact where needed. The schema has no single `BillingTransaction` model: `BillingCheckoutAttempt` and `BillingWebhookEvent` also contain checkout URLs, leases/retries, error fields and `normalizedPayloadJson`. Do not retain these entire operational tables under a generic tax rationale. Define a small explicit projection or use the actual accounting documents; add any specific authorisation/dispute proof with its own purpose. |
| Deletion case and parent references | Keep a minimal case/tombstone and the necessary identity links; neither a full User/Company profile nor the salon's transaction history is needed merely to satisfy an FK. Record how the retained reference can identify the relevant acceptance if challenged; do not remove attribution blindly. Shared users/acceptances still serving another Company follow their remaining purposes. |

**One retention schedule, two clocks:**

- **Own claims evidence:** 1095 days is the owner's selected target, not a period prescribed by
  Article 17. Before implementation, record a defined start event (owner proposed Company deletion)
  and why this duration covers the relevant relationship/claims without unnecessary storage.
  Contract termination, booking acceptance and another Company's closure are not interchangeable.
  Validate this once for the selected categories/markets, with a narrower rule where appropriate.
  An open complaint/litigation hold has a recorded reason, limited scope and next review/end event.
- **FOP accounting:** use the applicable document category and reporting-related start event.
  [DPS guidance](https://if.tax.gov.ua/media-ark/news-ark/print-1015043.html) confirms 1095 days for
  some FOP records but also longer periods/extensions, including uncompleted audit situations.
  Obtain one accountant-confirmed schedule; do not automatically delete tax evidence exactly
  1095 days after Company closure. Ukrainian obligations and the applicable GDPR Article 6 basis
  must be distinguished where GDPR applies. Neither clock means exactly three calendar years.

**Minimum operation without new UI:** one category/fields/basis/start/expiry/hold table and a
short legitimate-interest assessment; restricted named DBA credentials, protected access and
access/action logs; a recurring manual expiry/hold review with deletion evidence. Ordinary app
roles must not expose retained records. Manual operation is acceptable at MVP volume if it is
actually performed and demonstrable; a reminder alone does not implement erasure.

**Existing technical dependency:** scope rows reference `LegalAcceptance`/`Company`; acceptance
references `User`; public evidence references `Company`. FK restrictions and append-only triggers
prevent naive deletion/expiry. The isolated retained-case implementation now keeps a minimised
`DELETION_RETAINED` Company parent, an append-only `CompanyDeletionCase` and expiration/hold
records rather than weakening the FK protections. It permits only the classified
`PERELAI_TERMS_ACCEPTANCE` evidence route; business-only, marketing and unclassified booking
evidence still fail closed. The completed isolated drill proved this narrow shape, including shared
BillingCustomer preservation, but it does not establish the purpose/basis/expiry decision for every
real evidence category or ordinary Company. Keep
[ADR-0016](/Users/valery/Sites/beauty-finance/docs/adr/0016-append-only-legal-acceptance-evidence.md)
aligned. Do not disable evidence protections globally or leave undeletable evidence indefinitely.
This bounded change belongs with the operator deletion protocol; it does not require an archive UI.

## 7. Subprocessor and transfer inventory — red until completed

Owner confirmations below establish the declared deployment and agreement facts. Public vendor
terms identify the supplier/available safeguards; code alone does not prove either. Keep account,
DPA/version and configuration references privately; do not ask for a new DPA solely to duplicate
an agreement the owner confirms is already concluded. Remaining verification is scope-specific.

| Function | Candidate observed | Contracted entity | Data | Locations | Role | Transfer mechanism | Status |
|---|---|---|---|---|---|---|---|
| landing hosting/CDN | Hetzner hosting owner-confirmed; Cloudflare edge/challenge observed; per-origin configuration to reconcile | Hetzner Online GmbH; Cloudflare contracted entity/product [TBD] | request/technical data | Hetzner: Falkenstein, Germany; Cloudflare locations [TBD]; global operator access as below | processor by actual flow | Hetzner DPA owner-confirmed; Cloudflare safeguards [TBD]; operator arrangement below | HETZNER FACTS CONFIRMED; CLOUDFLARE/TRANSFER SCOPE OPEN |
| app/API hosting | Hetzner | Hetzner Online GmbH; DPA concluded per owner | account + Customer Data | Falkenstein, Germany (EU); global remote support/admin access as below | processor/subprocessor by purpose | Hetzner DPA; separate operator-access arrangement below | OWNER CONFIRMED 2026-09-25; retain private account/DPA reference |
| PostgreSQL | DB hosted on Hetzner; Coolify `postgres` backup inventory recorded | Hetzner Online GmbH; DPA concluded per owner; no separate managed-DB vendor asserted | application database | Falkenstein, Germany; global operator access as below | subprocessor for Customer Data | Hetzner DPA; operator flow below | OWNER CONFIRMED; reconcile actual DB/backup identifiers and coverage |
| files/storage | Files on Hetzner; supersedes the earlier unconfirmed R2 file-hosting candidate | Hetzner Online GmbH; DPA concluded per owner | files, import/export artifacts and staging where enabled | Falkenstein, Germany; global operator access as below | subprocessor for Customer Data | Hetzner DPA; operator flow below | OWNER CONFIRMED; verify storage roots, expiry and all backup copies |
| deletion journal storage | owner now selects a protected local file on Hetzner; R2/S3 deferred | Hetzner Online GmbH for host storage; independent continuity copy [TBD] | minimal Company deletion cases/events; no CRM payload | Falkenstein host; copy location [TBD] | processor for Perelai operations/accountability records by purpose | Hetzner DPA owner-confirmed; copy mechanism [TBD] | TEST CLI LOCAL WRITE EXISTS; PRODUCTION CONTINUITY/REPLAY NOT VERIFIED |
| Redis/queues | Redis on Hetzner; no separate managed Redis vendor asserted | Hetzner Online GmbH; DPA concluded per owner | task/notification data | Falkenstein, Germany; global operator access as below | subprocessor for Customer Data | Hetzner DPA; operator flow below | OWNER CONFIRMED; payload retention and backup coverage remain to verify |
| transactional email | Resend | Plus Five Five, Inc. (Resend), as named in the current public DPA; supersedes owner's shorthand “Resend Inc.” | recipients/message metadata/content | United States (primary processing); review applicable subprocessors | processor for own platform mail / subprocessor for Business mail | SCCs under DPA §6, owner-selected; modules follow actual roles | PROVIDER/COUNTRY CONFIRMED; public DPA checked 2026-09-25; retain accepted account/version reference |
| operator support/admin access | ILLICHOV VALERII, Perelai FOP; not a separate support vendor | Ukrainian FOP in §1 | Customer Data only as needed for authorised support/admin operations | Global/remote, including non-EEA countries, owner-confirmed; actual/current permitted countries [TBD] | Perelai processor or controller by purpose; travel alone does not create another subprocessor | SCC reliance OWNER DECLARED for the EEA-controller → Ukrainian-FOP flow; instrument/version, parties, suitable scope/module, completed annexes and assessment reference [TBD]; Resend SCCs do not cover this flow | FACT UPDATED 2026-09-25; security owner-declared; actual coverage not independently reviewed |
| authentication/calendar | Google observed | [TBD entities/services] | identifiers, events, tokens | [TBD] | independent controller and/or subprocessor by flow | [TBD] | VERIFY |
| landing analytics | PostHog observed | [TBD legal entity/project region] | typed events, locale, marketing context | EU endpoint in code; contract verify | processor | [TBD] | VERIFY |
| error monitoring | [TBD/not observed] | [TBD] | errors/technical data | [TBD] | subprocessor | [TBD] | BLOCKED |
| support | public route `support@perelai.app` selected; mailbox/helpdesk provider [TBD] | [TBD] | support content | [TBD] | processor/subprocessor by purpose | [TBD] | CONTACT COMPLETE; PROVIDER/HANDLING OPEN |
| billing/MoR | Paddle selected as first production adapter | applicable Paddle buyer entity `[verify by buyer location]` | identity, billing, tax, transaction/subscription data | [TBD] | authorised reseller/Merchant of Record and independent controller for buyer Transaction; assess any processor flows separately | Paddle terms/privacy + transfer assessment `[TBD]` | PLANNED, NOT LIVE |
| AI | not selected | [TBD] | [TBD] | [TBD] | [TBD] | [TBD] | NOT LIVE |

For each restricted transfer, counsel/privacy owner must select and execute the correct mechanism
(adequacy, SCC module, UK Addendum/IDTA, or another lawful basis) and complete any required transfer
risk assessment. Never publish `provider is GDPR compliant` as a substitute. Landing analytics providers process
Perelai-controller data; they are not Customer Data subprocessors merely because they are vendors.
Review the actual remote-access countries, not only server location or the operator's registration.

Primary checks, 2026-09-25:

- [Hetzner's legal notice](https://www.hetzner.com/legal/legal-notice/) identifies Hetzner Online
  GmbH. Service location and concluded DPA are owner attestations, not facts established by this
  public page. A single infrastructure-provider record may cover hosting/DB/Redis/files, with
  their different data and deletion paths retained in the inventory.
- [Resend DPA](https://resend.com/legal/dpa), updated 2026-08-27, names Plus Five Five, Inc.,
  identifies primary US processing and incorporates SCCs. Module 2 covers controller-to-processor
  and Module 3 processor-to-subprocessor flows. Keep the applicable accepted version/reference;
  separate handwritten execution is not automatically required where acceptance incorporates it.
  The DPA also references DPF; no independent certification check or switch to DPF reliance is
  recorded here. Review the [subprocessor list](https://resend.com/legal/subprocessors) and actual
  message/log retention and tracking settings; the email provider is not necessarily the support
  inbox host.
- The operator remains the Ukrainian FOP while access can occur elsewhere. EU hosting does not
  remove the transfer to a separate third-country processor. Travel by the same operator does
  not automatically create a new recipient or require a new SCC signature for each trip; internal
  processing still needs appropriate safeguards. See [EDPB Guidelines 05/2021, §2.2 and Examples 8/11](https://www.edpb.europa.eu/system/files/2023-02/edpb_guidelines_05-2021_interplay_between_the_application_of_art3-chapter_v_of_the_gdpr_v2_en_0.pdf).
  Applied here: keep one lightweight actual/permitted-country access register and review the
  local-law/security implications before accessing personal data from a new country. Resolve the
  instrument's scope, including whether the importer is already subject to GDPR for that processing;
  do not choose a SCC module solely from the FOP registration. Reuse a valid incorporated agreement
  rather than demand a duplicate signature. Ukraine-market transfers also need their domestic-law basis.

**Minimal record still needed for global access:** current countries, operator/any other recipients,
data/purpose, relevant DPA/SCC and assessment references, and actual safeguards. The owner confirms
encryption and secure connections; protocol/configuration scope has not been independently checked.
MFA, named access, device protection and avoiding unnecessary local copies are measures to select
and verify, not completed facts. Encryption is a safeguard, not a substitute for the applicable
transfer mechanism or assessment. “Global” is a truthful high-level description, not approval to
process from every country regardless of local risks. No travel-management application is needed.

## 8. Cookie/storage/network inventory — runtime/source evidence completed 2026-09-23

Full method, per-surface results, outbound hosts, provider-retention gaps and threat models are in
`17_cookie_storage_runtime_audit_20260923.md`. `None in clean profile` means none was observed before
the audited interaction; it is not a claim about every later user action.

| Origin/surface | Technology | Runtime/source evidence | Retention/clearing evidence | Classification/remaining evidence |
|---|---|---|---|---|
| production landing home | `NEXT_LOCALE` cookie | present on entry; `Path=/`, `SameSite=Lax`, JavaScript-readable | `Max-Age=31536000` (1 year) | owner/counsel classification by launch country; copy must not say only explicit selection |
| production landing | `cf_clearance` cookie | Cloudflare challenge cookie; `HttpOnly`, `Secure`, `SameSite=None`, `Partitioned` | observed expiry about 1 year | security/ops must reconcile dashboard setting, purpose and Cloudflare account/log retention |
| landing | `perelai-theme` localStorage | source-confirmed explicit theme preference; absent in clean audited profiles | until replaced/removed/site-data clear | functional classification by launch country |
| landing | `perelai-market` localStorage | source-confirmed explicit `?market` display override; absent in clean audited profiles | until replaced/removed/site-data clear | functional classification by launch country |
| production landing home, 2026-09-23 baseline | `perelai_attr` sessionStorage | stored first-touch source/campaign/referrer-host/niche; production clean home stored direct/founding-beta | tab/browser session; browser restore behaviour varies | new source removes legacy key and creates no replacement; verify deployed result |
| production landing home, 2026-09-23 baseline | PostHog SDK memory/network | no SDK cookie/localStorage; production fetched `eu-assets.i.posthog.com` project config before choice | memory ends on unload; provider event/config retention `[TBD vendor setting]` | new source removes bootstrap and adds hard disable; verify deployed network result and old provider retention |
| production Cookie Policy | landing cookie/storage/network | only `cf_clearance` observed; no PostHog host, localStorage, sessionStorage, IndexedDB, Cache Storage or service worker | cookie as above | route result does not cure home-page behaviour |
| app login/register | `i18nextLng` localStorage | observed in production and current local source | until replaced/removed/site-data clear | functional classification |
| app auth | `accessToken` localStorage | bearer JWT; current source lifetime 1 day; API checks membership ID/access version; logout/401 removes token | may persist across restart and remain after expiry until a clear path | necessary/security; explicit XSS, CSP, cross-tab logout and residual-state security acceptance required |
| app login | `lastLoginEmail` localStorage | source-confirmed login prefill | until replaced/removed/site-data clear | functional/minimisation review |
| app preferences/UI | `bf-theme`, `bf-privacy-modes`, education/install/counter/entity-ID groups | source-confirmed; privacy modes mask UI amounts/statistics and are not tracking consent | until changed/removed/version/site-data clear depending key | group only where purpose/retention remain clear; stable identifiers are not generic preferences |
| onboarding | `bf_onboarding_draft_${companyId}` sessionStorage | business/location/timezone/template, services/prices/expenses, staff and Calendar/import run/job state | completion clear or tab/session end; explicit logout clear not found | necessary/functional plus Customer Data/security review |
| app billing | `billing_checkout_attempt` sessionStorage | attempt/OfferCode/Company/payer/idempotency/deadline; no provider secret/checkout URL | terminal clear or tab/session end; polling deadline 120 seconds | current source only; production route redirected to login; necessary/security classification |
| public booking | `bf_public_booking_return_path` sessionStorage | pathname/search observed for fake-slug booking in production/current source | overwrite or tab/session end; no explicit TTL found | necessary/functional; query/token and log-redaction review |
| public hub | `bf_public_hub_session` sessionStorage | raw token + verified time only after successful load; no record created by fake-token runtime probe | 2-hour logical freshness on read; stale/error/mismatch clear; physical timer not established | necessary/security; threat model and backend token/log evidence required |
| personal booking | `bf_public_personal_booking_return_path` sessionStorage | return path may contain raw path/query token, Company slug and verified time | same 2-hour read-time check/removal | necessary/security; do not send to legal pages, analytics or cross-origin referrers |
| Google OAuth start | `google_oauth_bind` cookie | production API set `HttpOnly`, `Secure`, `SameSite=Lax`, `Path=/api/auth`, then redirected to Google | `Max-Age=600` (10 minutes) | Google redirect cookies were not audited; server deletion/log retention `[TBD]` |
| Web Push | `/notification-sw.js`, Push API subscription | source registers worker only from user-initiated enable flow; worker uses an in-memory Map, not Cache Storage/IndexedDB | subscription until revoked/expired; revoked backend records 30 days from env evidence; backups `[TBD]` | separate browser permission and purpose/role/provider review |
| all clean audited surfaces | IndexedDB / Cache Storage / service-worker registration | none observed; no app/landing browser IndexedDB or Cache Storage source use found | not applicable to clean state | rerun after material actions and production changes; Web Push worker remains conditional |
| production app/public | outbound app/API hosts | app assets on `app.perelai.app`; public pages on `book.perelai.app`; public data from `api.perelai.app` | provider/request/security-log retention `[TBD]` | contracted entities, regions, headers and logs still require account evidence |
| current-source checkout | Paddle.js | local route attempted `cdn.paddle.com`; production checkout probe redirected to login and made no Paddle request | Paddle/provider retention `[TBD]` | exact live Checkout/Portal inventory and production release evidence absent |
| current source | conditional third parties | Google redirect, browser-selected push endpoint and `images.unsplash.com` cover images occur only on their trigger paths | provider-specific `[TBD]` | verify enabled production actions and provider settings before publication |

The owner has selected a Launch v1 build with no optional landing analytics or marketing integration.
The source removes attribution storage and disables PostHog even with a key; it carries no CMP.
LGL-5 is complete for the deployed build only after a clean-browser check proves no optional SDK,
config/event request, pixel or attribution write across routes, plus a Cloudflare dashboard injection
check. The remaining service/security and requested-preference technologies still need the recorded
served-country classification and verified provider facts before this draft can be approved. A banner
that records a choice while an optional SDK still loads is a test failure for any future release.

### UA booking automation and technical collection — source checked 2026-09-25

`PublicBookingService.resolveAutoAcceptForBooking` resolves the Company/staff auto-accept setting;
appointment handling and email confirmation apply it. Availability, lead-time, token/email and
form checks can reject a request. `PublicBookingController` uses an IP + Company key to apply a
production-mode quota. The prepared UA notice explains these operations and a human contact;
no blanket “no automated decisions” or no-IP-processing statement is appropriate. These are source
facts, not evidence of a specific Company's enabled setting or provider-log retention.

## 9. Security statements allowed only after evidence

Owner declares encryption and secure connections for global support/admin access (2026-09-25).
This closes the statement of intended/declared safeguards, not verification of protocols, coverage,
at-rest protection or every access location. Reuse §7's small access record for concrete evidence.

Potentially publishable, once verified in production:

- encryption in transit;
- password hashing;
- role-based access controls;
- access logging/monitoring;
- backups and recovery tests;
- staff/contractor confidentiality;
- incident response;
- tenant isolation controls.

Never publish `bank-level`, `military-grade`, `fully GDPR compliant/certified`, `zero knowledge`,
`completely secure`, `encrypted at rest` or a certification unless scope-specific evidence exists.
The reviewed schema shows Google access/refresh-token fields but does not prove application-level token
encryption; security review must resolve this before drafting a claim.

## 10. Document approval manifest

The release owner records an immutable approval manifest separate from env after the shared packet
is complete. Reference focused legal/accounting review where relevant; external counsel need not
sign every unchanged document/translation. Policy acceptance in decision 21 does not fill runtime
evidence or approve incomplete public text:

```json
{
  "terms": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "privacy": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "dpa": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "bookingTerms": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "cookies": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "subprocessors": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""},
  "billing": {"version": "", "effectiveDate": "", "sha256": "", "approvalRef": ""}
}
```

Archive the submitted Paddle domain list, policy URLs/versions and approved private pricing revision
separately from production permission. Record B-13 purchase assent and B-14 refund-operation evidence;
C-13 accountant approval is not implied by a provider-verification result.

The implementation LLM may build schema and validation, but it may not populate approval values or
change `status` from `draft` to `approved`.

### Generated Business notices — draft package, 2026-09-23

[EU/en, PL/pl, UA/uk and US/en template drafts](templates/business-notice/README.md) reuse this inventory and the
actual processor/transfer facts from 03/04/07. A language, pricing locale or draft filename is not
evidence that a launch market was selected. Current owner-authorised code releases include **UA/uk, US/en, AU/en and scoped CA/en**.
The ten CA regions and continuing QC/AB/BC closure are recorded at the top of this register;
other catalog countries remain CLOSED. Earlier UA/US-only decisions are historical.
The PL pilot is owner-reported ended; handle its former records separately. The earlier PL/en
direction is historical. [Review 23](23_market_gate_review_and_release_unblocking_20260925.md)
records the code gaps and exact release sequence. No draft/default is activated by this record.

| First-profile field | Recorded value / remaining check |
|---|---|
| Country / language | Current selected profiles: UA/uk and US/en; complete common facts once and US-specific applicability separately. PL/EU profiles deferred. `ua` is not the Ukrainian language identifier. No publication approval inferred. |
| Source / processing profile | UA/uk uses `UA.uk.standard.v1.draft.md`; US/en uses `US.en.standard.v1.draft.md`. Exact-country entries, `ORDINARY_NON_MEDICAL`, APPOINTMENT/REQUEST, no online prepayment or cancellation/no-show fees. Confirm eligibility; UA/US country alone does not exclude actual GDPR scope. |
| Initial default targets / existing choices | UA → uk and US → en are now integrated as exact-country code defaults; deployment is separate. Preserve existing published/custom choices and pinned versions. No US onboarding fallback remains in the reviewed code; legal country never comes from language or legacy EU pricing. Both UA and US registry mappings are present in code. |
| Shared content | UA/uk and US/en drafting slots are resolved in their release packets from owner facts and source observations. Only supported Business runtime fields remain. EU/PL drafts are deferred; actual operating evidence remains separate. |
| Publication record | UA: version business-booking-UA-uk-v1, effective date prepared as 2026-09-25, owner-ua-uk-preparation-20260925 content-authority reference and exact helper-computed digest are in its release record. UA is integrated under its owner-defined MVP release record. US: business-booking-US-en-v1, 2026-09-25, owner-us-en-release-20260925 and exact digest in its US record; now integrated in code. No deployment or lawyer opinion is claimed. EU/PL remain candidates. |

Source checks on 2026-09-25: all four `.draft.md` copies in
`beauty-finance/docs/legal/business-notice-drafts/` match this repository's package byte for byte;
`REVIEWED_TEMPLATES` and `CURRENT_TEMPLATES` now include UA/uk and US/en. Copy equality alone
does not establish deployment or runtime readiness; see their separate release records.

Before registry activation, record the selected template's country, language, supported modes and
processing profile, immutable version, effective date, exact-content hash, approval reference and
active/retired status. Bind it to the reviewed processor/recipient/transfer facts and the workable
retention/rights procedure. Store the Company's confirmed facts/rendered preview separately from
platform approval. Do not turn these shared platform facts into fields every salon must research.

The EU English source added on 2026-09-24 provides a common source for eligible EU member-country
profiles. Record actual country, audience language and required national variations centrally.
The earlier PL/en preparation choice is deferred with the EU market closure; update the
package's older PL/pl-default instructions when preparing any PL release artifacts. A future approved PL/pl
default must not silently replace published/custom choices. `EU` is the source family, never the
Company country or an all-country wildcard; an English source does not approve all EU audiences.

The US English source added on 2026-09-24 was completed on 2026-09-25 with ordinary non-medical
booking scope, online collection/tracking and no-sale/no-advertising practices, conditional
rights/request procedures and an operator-run material-change notification process. A small salon is not automatically exempt from every relevant
privacy law. Record applicability centrally; do not import GDPR rights or EU transfer grounds into
the US text by translation.

The identity update and 2026-09-25 owner decisions now supply the operator, core provider/location,
active-history policy and selected-market inputs. Resolve them into the drafts only alongside the
remaining transfer, retained-evidence, execution and automated-decision answers; source templates
for EU/PL still contain drafting slots. UA and US assembly and code integration are complete in
their packets; operational limits and deployment checks remain separate. Unknown slots must not render publicly. Review 20 records the
publication/version corrections to verify before enabling the standard generated-notice path.

## 11. Remaining facts and evidence — first-launch work map, 2026-09-25

This map groups open placeholders and decisions; it is not a new approval layer. Close facts once
in their canonical section and reuse them across Privacy, DPA and Business notices. An engineering
implementation gap cannot be closed by filling a text field. An unused feature can be deferred only
after the release owner records that it is disabled/not offered in the actual build; historical
data already collected still needs handling.

| Work item | Minimum answer/evidence still needed | When it applies |
|---|---|---|
| Actual launch scope | Code: UA/US/AU PUBLIC plus the ten-region CA cohort; QC/AB/BC and other catalog countries CLOSED. Scoped CA release authority and verification are recorded above; deployment is not inferred. PL pilot ended/zero active EU users owner-reported; no stable EU establishment. Fix review 23 admission/publication gaps, record former-PL closure, confirm ordinary non-medical/no-fee profiles and actual deployment. | Before relying on the gate or admitting operational users; no unserved-country variants required |
| Providers, locations and transfers | Hetzner/Resend facts, Ukrainian operator/global access and declared SCC reliance recorded in §7. Remaining: actual access-country list, applicable instrument/annex/assessment references and control scope; vendor-account retention/settings, Cloudflare/support-inbox/other enabled provider facts, and planned journal configuration. | For actual processing, including journal storage before using it |
| Retention and retained evidence | 90-day / 24-month limits APPROVED in §6.1. Whole current acceptance rows are a reasonable MVP candidate under §6.2. Remaining: one category/kind/basis/clock/hold schedule, billing record mapping, necessary attribution/parents and executable expiry; active-history edge cases and account/support/security/log/journal lifecycles. Owner's 1095-day target is not a universal tax deadline. | For data actually collected; trial/account evidence is not deferred merely because payment is off |
| Rights, Company deletion and recovery | F-09/F-14 and §5.1: tested authority/return workflow, ordinary-Company erasure, crash/resume, public-access invalidation, backup expiry and quarantined restore with unfinished-case reconciliation. Verify the shared inbox can receive and handle requests. | Before claiming the procedure is operational or activating a notice relying on it |
| Applicable legal position | Ukrainian law and 12-month-fees base cap selected. Remaining: mandatory carve-outs/calculation/trial/forum; territorial scope and EU representative (sales-based deferral is not an exemption); separate DPO assessment; §5.3's bounded Data Act mapping using the owner-tested export; relevant DPA/Customer Data terms. | For the selected markets/service and platform Terms/DPA |
| Actual collection and security facts | Booking technical-data and automated-decision paragraphs; §§8–9/F-10/F-20 source/deployment/security evidence, notification/incident route and current token/access protections. Confirm the deployed analytics-free build, Cloudflare settings and treatment of historical PostHog data. | For actual launch surfaces; absence of AI alone does not answer automated-decision questions |
| Final text and publication | Resolve selected template's drafting slots, render with confirmed Business facts, assign version/date/hash/approvalRef, add exact-country registry/default mapping and verify pinned versions/custom settings. Reuse verified fixes for review 20. | After relevant factual/operational gaps close; final approval is not fabricated by the implementation agent |
| Paid SaaS | Applicable F-08/11/16/17 purchase/refund/withdrawal, Paddle entity/configuration and FOP accounting, plus billing deployment evidence. F-12's no-card/no-autocharge trial behaviour is required if that trial is offered now. | Payment-specific facts before charges; trial and existing accounting duties remain current |
| Deferred markets/features | UK/EU and other unserved profiles; AI, optional marketing, ORDER/RENTAL or integrations not actually enabled; feature-specific export/push/Drawer/STUDIO+ details where deferred. Record scope and reason instead of inventing missing providers/periods. | Before enabling/serving the relevant scope; no blanket deferral of existing processing |

Immediate engineering dependency: use §6.2's small retention schedule and existing evidence shapes,
then implement the resumable operator protocol and rehearse the corrected all-authorised-cases
DR rule (§5.1). Review 23 gives the scoped ordinary-DB read-only inventory and isolated-drill
sequence; no real deletion is authorised by a review request. In parallel, fix its two admission/
publication findings, complete declared SCC/global-access and provider facts for UA/US and any
remaining PL processing, and finish applicable export-related terms/runbook through §5.3. Preserve
the approved 30/30 and 90-day / 24-month policies and operator identity; these decisions need no
repeat approval solely because execution is pending.
