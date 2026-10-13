# Copy/paste task prompts for simpler implementation LLMs

**Next bounded app task — 2026-10-13:** [plan 39](39_mvp_workspace_currency_and_business_country_20261013.md)
defines CUR-1/GEO-1 **IMPLEMENTED / TARGETED TESTED** and GEO-2 **PREPARED / SYNTHETIC WALKTHROUGH**, not deployed. [Evidence](/Users/valery/Sites/beauty-finance/inventory/workspace-currency-business-country-20261013.md). The general country-hold gap remains a separate task. This supplements the current release work;
it does not reopen completed BILL6A/OPS or change existing market admission.

```text
Implement legal/39_mvp_workspace_currency_and_business_country_20261013.md in beauty-finance.
Read its observed seams and preserve unrelated changes. Deliver CUR-1 and GEO-1 as a small
core/API/Web change: one shared 15-currency workspace catalog, ISO-code validation, no FX,
no new market admission. Preserve Billing/Paddle currency and country/subdivision/legal gates.
New UA workspaces use UAH because public and internal prices share one currency. Never rewrite
legacy money or infer a currency migration during Company relocation; report affected cases.
Keep existing currency-change locks and close any concrete saved-service-price relabeling gap.
Preserve null suggestions when the currency differs from the country price pack. New catalog
validation must not break historical reads/exports or unrelated updates. Make business-country
and CA province labels explicit in all existing locales; no new universal checkbox, geo/KYC API
or automatic IP/phone/card-based restriction. Reuse current versioned CA declaration.
Prepare GEO-2 as one short operator runbook with a synthetic walkthrough, using completed
BILL6A-OPS for actual relocation. Verify existing restriction commands before claiming they stop
all new activity while preserving data return/cancellation. If no suitable Company hold exists,
report the bounded gap; do not invent a new enforcement framework or claim archive/billing
restricted mode solves it. Payment must never override a confirmed regional restriction.
Keep seven platform legal texts, versions/hashes, ENV and pinned acceptance copy unchanged.
Run focused tests/typecheck/lint appropriate to changes, report existing failures separately,
and update plan 39's statuses/evidence. Do not deploy, contact users, mutate production,
relocate an actual Company, cancel a subscription or delete data as part of this task.
```

**Independent review 2026-10-12:** [review 38](38_lp_m1_independent_review_20261012.md) supersedes
“Do not repeat LP-M1” only for three bounded corrections: R1 direct Company-create admission,
R2 verified personal-link read/cancel access with new intake held, R3 accurate llms.txt selection
claims. Corrective pass now implemented/tested: app `59a270485`, landing R3 and
generated provenance updated. Do not repeat these implementation tasks; next is
the remaining local visual checklist and inventory/transition/notice checks.
No Terms amendment or repetition of the whole implementation prompt below.

**Implementation update 2026-10-12:** LP-M1 is implemented in app `a91628447` and landing
publication/acquisition/generated-artifact changes. Targeted policy/API/PG/Web tests pass.
Do not repeat LP-M1. Real protected-ID inventory/transition is still a rollout blocker;
LP-M2 is a separate pending CA-v2 task. LP-M3 checklist files are prepared, not executed
production drills; LP-M4 actual published notice/R2/deployed-path verification remains open.

**Next bounded legal polish — simplified 2026-10-12:** use [handoff 37](37_mvp_legal_polish_and_business_scope_20261012.md)
for LP-M1–M4. Global holds replace the earlier country matrix; no new Terms version or ordinary-use
declaration is needed for this change. It supplements release preparation, not completed G tasks.
The following is the historical implementation prompt; execute review 38's bounded corrections
instead of repeating completed LP-M1 or restoring its pre-implementation observations.

```text
Implement the scoped MVP legal/product alignment in legal/37_mvp_legal_polish_and_business_scope_20261012.md.
Read the simplified global hold list and acceptance cases before editing. Hold aesthetic_clinic,
advanced_skincare, massage, spa, personal_trainer and yoga_instructor in ALL markets; enforce the
existing rent/personal group holds on the server. Use one pure libs/core template-admission function
alongside existing country/capability guards. No country × profession matrix, new ordinary-use
declaration/table/migration, healthcare classifier or marketing-consent feature. Inventory affected
existing Companies read-only before rollout; do not dump client content or guess the real Company ID.
Enforce new setup/template selection and applicable publication/intake boundaries; preserve historical
resolution, export and support. Distinguish six-template intake holds from functional group selection
holds. Add short no-health-data hints; keep existing Terms acceptance and pinned U70 text unchanged.
Keep current country admission, including CA's ten admitted subdivisions. In a separate bounded change,
broaden CA's existing declaration to exclude QC/AB/BC with a new version; preserve v1 OUTSIDE_QUEBEC
evidence and a scoped reaffirmation transition. This is not a new platform Terms version.
Align landing niches/services/routes/CTA and generated artifacts after the app policy is fixed;
massage is currently enabled. Remove held offers from exposure, not historical customer categories.
Do not edit the seven platform texts, hashes, manifests, archives, effective dates or ENV for these
scope changes. Terms remain 2026-11-01.1. Defer niche reopening and extra declarations to real demand.
Complete PAR-O's two short incident/privacy-request checklists and a minimal walkthrough. Use LP-M4
for existing release evidence. Inspect actual v1 publications/Google wording/R2 facts: if incorrect
notices are live, prepare a timely immutable correction and republication transition; do not overwrite
accepted text, silently select future v2 or claim that November alone fixes today's disclosures.
Verify rendered legal identity instead of replacing intentional interpolation tokens. Keep U49,
Intelligence/campaigns and external LLM expansion outside this launch delta, per section 8.
Implement/test the authorized preparation; identify any remaining real deployment/operational step
separately. No live customer disablement/deletion, country relocation or provider submission is implied.
```

**Current status — 2026-10-07 (owner update + BILL8A):** G-BE2, PAR-P,
BILL5B (`ffacfc7a4`) and BILL6A (`70c20652d`, accepted operator/CLI scope) are **DONE**.
R1/R2/R3 original fixes are complete. BILL8A inventory is **COMPLETE**; production
Stages A–H remain **BLOCKED** for the specific evidence in [BILL8A report](/Users/valery/Sites/beauty-finance/inventory/bill8a-release-readiness-20261007.md).
Do not rerun completed implementation prompts. Later app commits require a fresh landing
artifact pin; this is release maintenance, not reopening PAR-P/R3. Local sandbox mail and
OPS4 storage simulation do not establish external delivery or production/off-host readiness.
Earlier dated checkpoints below remain historical evidence, not the current execution queue.

Read [review 33](33_g_par_p_independent_review_20261005.md) first for the 05.10 status and bounded
R1–R3 corrective prompt. G-UI/G-BE1/G-INT and PAR-P implementation exist; G-BE2/POS4/release
evidence remains partial. Do not dispatch their original implementation prompts as new work.
Use [document 32](32_provider_submission_parallel_work_and_launch_20261001.md) to choose the next
pre-submission, parallel or release task; document 14 defines the minimum scope. These are bounded prompts, not a requirement
to finish every task serially. Prepare current legal pages/acceptance, BILL policy and provider
packets in parallel; conditional features stay scoped to their own release. Give each LLM only the relevant task plus this legal directory and the
repository `CONTEXT.md`/`AGENTS.md`. Do not ask one small model to implement landing, app, API and public
booking in one change.

Use [decision 21](21_gdpr_baseline_and_retention_mvp_20260924.md) for the owner-accepted common
privacy baseline, regional additions and Company-deletion/backup policy. This is shared preparation,
not a new country-by-country approval project.

## Global preamble for every task

```text
This task implements an approved plan; it does not author or approve law.
Read document 32 first. Current platform texts are already approved and public at 2026-11-01.1,
effective 2026-11-01. Do not reopen completed A–F or infer provider approval from accessible pages.
Use content/legal/en and the manifest, not historical source drafts 02–07/10, for current wording.
Read every referenced file before editing. Inspect current code rather than assuming plan line numbers
are current. Preserve unrelated user changes. Do not replace [TBD] or {{...}} with guesses. Do not
change any draft status to approved. Do not publish placeholder or draft legal content in production.
Add appropriate tests for the security/acceptance behaviour you change. Complete independent
preview/schema work when approvals are absent, and report the specific dependent production step
that remains blocked. Never infer release approval from a completed code task. Read document 14,
the 2026-09-16 policy/current selected provider path and current app release evidence. Reviews 12/13
are historical; the old BILL1A-only verdict and open C-05/C-19 questions are obsolete. Prices and
capacity stay $19/$29 and 1/5. Trial is 21-day STUDIO with no card; launch v1 accepts purchase only
after expiry, never automatic trial-end billing. C-05/C-11 policy is decided; verify implementation.
No separate free-MVP contract, voluntary R-01 guarantee, new privacy/refund portal, all-country
annexes or optional-feature rebuild is needed. Do not weaken TEAM-RELEASE or current data duties.
Apply decision 21: one common GDPR-based operational baseline, small applicable regional additions,
and one shared review/evidence packet. GDPR does not automatically satisfy other laws. Company
deletion is within 30 calendar days of a confirmed authorised instruction; residual backups within
30 days after active deletion (ordinary total at most 60). These are accepted policy requirements,
not verified live behaviour. Verify execution; do not reopen the numeric policy or invent a blanket
seven-year billing rule. Complete the active-client retention profile and separate FOP accounting
schedule. Manual support-assisted procedures are acceptable if they actually meet the duties.
Do not require a lawyer certificate per country/template/salon. Preserve profile eligibility,
language suitability, exact-country references and immutable publication/approval checks.
```

## Task A — legal content loader and env validation (landing only)

```text
Implement LGL-1's content foundation in perelai-landing using:
- 00_README_execution_plan.md §§4-5 and LGL-1;
- 01_legal_facts_env_contract.md §§1 and 10.

Scope only: typed legal identity env validation, front-matter/document schema, safe token
interpolation, immutable rendered hash/approval-manifest verification, and unit tests. Do not create
page UI yet. Production validation must reject draft status, unresolved [TBD, unresolved tokens,
missing required identity, example/local emails and approval hash mismatch. Optional DPO/EU/UK blocks
must be all-or-nothing. Interpolate escaped text, never raw HTML. Do not populate approval values.
```

## Task B — canonical landing pages and redirects (landing only)

```text
Implement the seven canonical legal pages and navigation using 00_README_execution_plan.md §§1, 4, 6,
LGL-1 and §10, and the source drafts 02-07 plus 10. Use the existing localized App Router architecture.
Create applicable /legal/* routes for the first served language; other locales may follow with
reviewed content. Add /terms and /privacy locale-aware
redirect aliases plus /refund-policy and /legal/refund-policy -> /legal/billing; one Billing
document/version, prominent Refund Policy navigation before Paddle review; clean canonical metadata,
sitemap, print styles, version/date display and archive
link. Draft preview is noindex with a visible banner; approved production cannot render unresolved
content. Do not machine-translate English. Replace footer placeholders. Add route/metadata/build-gate
tests. Do not touch beauty-finance.
```

## Task C — safe cross-domain legal navigation (app + landing, separate commits)

```text
Implement 00_README_execution_plan.md §6 and LGL-2 plus 08_ui_copy_and_surface_matrix.md §§1-4, 8-12.
First implement/test landing's allowlisted return component. Then implement/test the app legal URL
builder and context-specific components. Never accept or forward a full return URL. Preserve only the
existing clamped registration attribution plus independently validated niche and generated
standard OfferCode in the public release allowlist (SOLO_MONTHLY/STUDIO_MONTHLY, STUDIO gated).
Offer intent grants no access or trial Plan and staff signup ignores it. Retired FOUNDING_*/
ADDITIONAL_*/annual codes resume ordinary signup with fresh selection, without aliasing or historical
record rewriting; STUDIO+ contact has no Offer. Never forward a Paddle/
provider ID, price, currency, tax, checkout URL or billing identifier. Standalone, onboarding and token-bearing routes
open a clean new tab. No reset/invite/booking/status/receipt/preferences/client-hub token or raw
referrer may reach landing or analytics. Keep app /terms and /privacy as redirect shells; placeholder
prose is development fallback only and impossible in production.
```

## Task D — contractual acceptance evidence (app API/web)

```text
Implement 00_README_execution_plan.md §7 and LGL-3 plus 08_ui_copy_and_surface_matrix.md §3 and §7.
Create an append-only LegalAcceptance model/migration/service. API is authoritative for current
versions and server timestamp; reject missing, stale or forged versions. Gate email and Google signup
before user/workspace creation; bind OAuth acceptance to short-lived server state. Owner and coworker-
owner accept Terms+DPA and acknowledge Privacy. Staff invite accepts Terms and acknowledges Privacy,
not DPA. The same individual-use rule applies to an invited administrative member; the role label
does not establish authority to bind a DPA, manage a payer or use an owner-only export.
Bind the represented-business DPA acceptance to the Company when provisioned without
rewriting signup evidence. Store acceptance-copy version, locale and source. Do not store IP/user-agent until separately
approved. Add migration, unit, integration and UI accessibility tests. Do not add initial acceptance to
OnboardingPage.
```

## Task E — public booking legal layer (app API/web)

```text
Implement 00_README_execution_plan.md §§6.4, 7.5, 8 and LGL-4; use
05_public_booking_terms_source_en.md, 08_ui_copy_and_surface_matrix.md §§2 and 5-6,
and 19_simple_booking_legal_setup_20260923.md (current simple-setup/readiness decision).
Replace PublicBookingPage's AuthLegalLinks with PublicBookingLegalNotice. Add structured Business legal
settings, safe public DTO fields and version/hash snapshots. Show Business policies + Perelai Booking
Terms/Privacy at collection. Replace the 11-field wall with confirmed identity/contact, standard
no-prepayment/no-cancellation-fee settings and a reviewed generated Business notice. SOLO and STUDIO
use the same path: no external policy URLs, refund text or manual versions required. Keep custom
policies available and preserve legacy settings. Do not require a checkbox for the standard reminder
or for Privacy; keep applicable contractual Business agreement, Privacy presentation and optional
marketing permission separate. Use the scoped readiness matrix, not a blanket missing-URL gate.
Never invent business facts, legal approval or retention promises. Do not forward
token-bearing paths to landing. Apply appropriate links to confirmation/status/receipt/preferences/
client-hub pages. Add per-mode, missing-policy, XSS/URL, evidence and accessibility tests.
```

## Task F — storage/cookie audit and preferences (both repos, audit before code)

```text
Perform the runtime audit in 06_cookie_policy_source_en.md's internal notes and complete the evidence
table in 01_legal_facts_env_contract.md. First deliver a read-only report: cookies, local/session
storage, IndexedDB, Cache Storage, service workers, outbound hosts, Set-Cookie and provider retention
for each surface. Explicitly threat-model accessToken localStorage and public token-like session data.
Do not implement a consent banner until owner/counsel has classified technologies by launch country.
After classification, implement LGL-5: optional SDKs blocked before required choice, effective reject/
withdraw, necessary-only fallback, and verified Cookie Policy inventory. A banner that does not control
loading is a test failure.
```

## Task G0 — early Paddle review packet (preparation only)

**Status 2026-09-27:** all seven legal texts are owner-approved as `2026-11-01.1`, effective
**2026-11-01**; the public launch has been postponed. [Release 30](30_platform_legal_mvp_postponement_20260927.md)
records applied review fixes, configuration and remaining operations. Artifact approval does not verify
operational readiness; use the forthcoming date honestly in any provider packet. Use `/legal/billing`
as the Refund Policy and identity/support in register 01.

**Verified 2026-10-01:** all seven public legal routes return HTTP 200 with the expected version/date;
the local manifest passes. Repeat a brief URL check when submitting, not the whole implementation.
The next gap is Pricing's outdated beta/future-price copy. Follow PRE-P in document 32: finish the
minimal commercial POS3 or provide an approved-facts pricing screenshot and truthful launch status.
Home currently links to `perelai.app`; resolve the actual checkout origin before preparing the domain
list. `app.perelai.app` in older examples is not verified configuration. Submission status is unverified.

```text
Follow LGL-0A and documents 14/21 alongside BILL2B and later BILL work. Reuse the common packet;
Execute PRE-P from document 32; BILL5/6/8 completion is not a prerequisite to preparing/submitting
the domain-review packet. Public activation still follows the applicable runtime gates.
unused countries and an unneeded privacy portal do not block preparation. Prepare truthful, approved Terms/Privacy/Refund
pages, explicit Refund Policy navigation, verified identity/support and relevant domain list. Prepare
an owner-approved pricing screenshot for private provider review where the pricing page is not ready.
No production drafts, guessed prices, KYC documents in Git or activation of live checkout. Record
provider review status separately from C-11/12/13 approvals. Submitting an application or accepting a
provider contract requires a separately authorised owner/operator action, not this preparation task.
```

## Task G0b — Google legal/verification packet (parallel preparation)

**Status 2026-09-27:** use Privacy `2026-11-01.1`, effective 2026-11-01. Its §4 states Google sign-in data
(`openid email profile`: ID, email, name), Calendar `calendar.events.readonly` data, use, human-access
limits, disconnect behaviour (local token/sync-state deletion; revoke in Google Account) and Google's
recommended Limited Use sentence; Terms §10 states read-only import. Remaining owner actions: OAuth
consent screen brand/domain verification with `https://perelai.com/legal/privacy`, scope
justification text and the Calendar read-only demo video, then submission.

**Next — 2026-10-01:** execute PRE-G in document 32 independently of PRE-P/Billing. Privacy is
publicly accessible; Console/domain/scopes and the real Google-account demonstration remain to be
verified. Use the existing CS5 handoff for the outstanding real-provider walkthrough, not a rebuild.
Record prepared/submitted/provider-approved separately; no submission was performed by the plan update.

```text
Follow LGL-0B and documents 14/21. Reuse the common packet, completed FOP identity and shared support
contact. Prepare accurate brand/domain/home/Privacy/support facts, Google-data
scope/use/storage/sharing/retention/deletion and Limited Use, and a Calendar read-only demonstration.
Distinguish basic sign-in from calendar.events.readonly verification. Remove two-way Calendar claims;
do not wait for BILL completion. A pending optional integration stays unavailable with honest copy
and working email login/internal calendar. Do not submit or accept provider terms under this task.
```

## Task G — SaaS Billing/Paddle legal integration (prepare in parallel; activate after relevant BILL gates)

**Current status — 2026-10-05:** G-UI/G-BE1/G-INT are implemented; server review and durable
assent now exist. Independent [review 33](33_g_par_p_independent_review_20261005.md) found wrong
legal/checkout origins (R1/R2); correct these before release-origin acceptance. G-BE2 has archive,
ledger/outbox and sandbox purchase/refund evidence, but actual delivery/direct-link/lost-login
and remaining B-13/B-14 checks are still open. Production copy remains DRAFT, effective 01.11.
Next: review 33 corrective prompt, then the remaining G-BE2 checks and POS4; no reimplementation.

**Backend/UI split — 2026-10-01 (historical starting point):** the requirement in README §7.6
was present, but the then-inspected checkout API had only `offerCode`/`purpose` and no durable
purchase assent. The original scope below remains a contract, not a new task queue. Follow
[backend plan 12](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/12_purchase_legal_acceptance_backend_20261001.plan.md)
and its **G-BE1 / G-INT / G-BE2** prompts in
[monetization 09](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/09_copy_paste_prompts_20260822.md).

- **G-UI (implemented; original scope):** Web review/recovery/links/locales. Keep new checkout disabled
  while `canRecordAcceptance` has no real backend authority. Do not edit Prisma/server code in this task.
- **G-BE1:** server-owned versioned review; required `legalAcceptance` in POST checkout;
  atomic immutable evidence + attempt and safe retry/recovery. Backend owns core schemas/API/Prisma.
- **G-INT:** consume the exact G-BE1 handoff; connect the prepared UI and check polling/reopen/
  standalone `_ptxn`, not just the purchase button. Never replace the temporary false with constant true.
- **G-BE2:** prove durable purchase/cancellation confirmation and applicable B-14 behavior using
  Paddle and existing Notifications. Do not duplicate current BILL5A work or receipts/dunning.

Portal/cancel/refund/support/data rights stay independent of purchase acceptance. G-BE1 can run
alongside UI and BILL5A, with narrow coordination of shared schema/barrel files; no deployment,
runtime flag or provider approval follows from finishing one part. Keep one concrete API handoff
in the app's `inventory/purchase-legal-acceptance.v1.md` when implementation is ready.

**After corrective pass:** remaining PAR-L/G-BE2 in document 32; reuse implemented Billing
seams. Agree account-service email copy/classification before enabling its
delivery; booking-notification approval does not automatically cover billing or marketing messages.
Keep the current no-analytics/no-attribution launch baseline. Provider review does not block sandbox work.

```text
Do not implement Billing architecture from this prompt. Prepare legal copy/links in parallel now;
before activating a flow, verify its generated catalog and relevant BILL/runtime evidence. For
public STUDIO trial/team access or purchase also verify TEAM-RELEASE; never use an internal charge,
grants or off/observe mode to bypass it. Implement LGL-6 using
00_README_execution_plan.md, 01_legal_facts_env_contract.md, current content/legal/en Terms/Billing
and their manifest, and 08_ui_copy_and_surface_matrix.md §§10 and 12. Source 10 is historical;
do not replace current approved terms with an older draft. Apply backend plan 12's split: implement
only the assigned UI, G-BE1, G-INT or G-BE2 scope and preserve the other agent's active files.

Render /legal/billing as Refund & Cancellation Policy, with refund aliases; add approved
Terms/Privacy/Refund Policy/Paddle Buyer Terms links to Pricing,
Checkout review/return, Settings/Billing and restriction/recovery surfaces. Preserve only a standard
OfferCode in the public release allowlist through registration; never expose Paddle IDs or start
checkout on landing.
Keep Plan, Offer, BillingCustomer payer authority, Company subscription/access and End Client finance
domains distinct. Browser success stays pending until the verified webhook projection activates
access. Use approved standard monthly prices and active-performer capacity, no Founding/annual/
sibling offers or paid-count cap. Reconcile generated values with launch-20260906 and version the
decided C-11 monthly renewal/period-end cancellation/no voluntary prorated refund policy, C-05
prepared renewal downgrade/immediate provider-prorated upgrade, and C-19 STUDIO trial. Launch v1
supports no early setup: purchase after expiry, no automatic charge. Verify the enabled implementation;
final seller/market wording, grace/restriction and data routes still need the stage-specific facts. Audit Paddle fields/roles/cookies,
update Privacy/Subprocessor/Cookie evidence and add route/state/accessibility/security tests. Implement
README §7.6 purchase-time evidence/durable confirmation and B-13/B-14; test lost-login cancellation,
withdrawal, first/later monthly purchases and renewals, full/partial/tax refunds, same-subscription
plan changes and isolation of two SOLO/two STUDIO/mixed Companies. Annual offers/early setup are
deferred; R-01's voluntary money-back proposal is excluded from v1. Use Paddle and monitored support
for refunds; do not introduce a separate refund engine. Apply jurisdiction decisions F-17/F-18; never promise payment from a redirect.
```

## Task G1 — TEAM legal integration and STUDIO+ contact (after team evidence)

```text
Implement LGL-6A using document 14, current TEAM/TR/Drawer evidence, Terms §§3/13, Privacy roles/data/
retention/security, DPA Schedules 1/2 and UI document 08. Do not implement or declare TEAM-RELEASE
from this legal task. Reuse completed TEAM/TR/Drawer work and current accepted reports. ADMINISTRATOR
is reception/controlled checkout; SUPERVISOR has broader finance scope. Public STUDIO trial also
requires TEAM-RELEASE. Drawer remains separately gated and is available to SOLO owners when enabled.

Use ACTIVE_SERVICE_PERFORMERS, SOLO 1 / STUDIO 5: working owner and no-login profiles count;
administrative membership alone does not. Capacity-reserving new-performer invitations count once;
existing-profile and admin invitations do not add another performer. Verify request-time expiry,
deactivate/reactivate and future-work handling. Capacity exclusion grants no data, owner, billing,
DPA-signing or unlimited-user authority. Do not imply additional-member invitations are free on SOLO.

Reconcile current Company permissions, successful-revocation boundary for later requests, refresh,
in-flight final effects, caches, files/export grants and notification recipients against TEAM2/3.
Record finite lifetime/limitations of already-issued provider URLs; do not promise recall of copies.
Migration must preserve IDs/history and explicitly resolve ambiguous admin/performer classification.
Translate only evidenced controls into approved public safeguards; leave unsupported claims blocked.

STUDIO+ is only a small Contact us block beneath two launch cards: no price, numeric limit, OfferCode,
checkout, trial/grant, automatic overage or release promise. Complete F-21 minimum fields, channel,
lawful basis, recipients/tool and retention; link Privacy at collection and separate marketing choice.
Test capacity labels, token-safe links, current-role access and no subscription/marketing side effects.
Keep any STUDIO live sale/upgrade, public paid CTA and general team onboarding gated by TEAM-RELEASE
and LGL-6/BILL approval. Return the deployment/evidence references; legal text cannot close security work.
```

## Task H — Workspace Data Export legal integration (app + landing content, after IM/EX gates)

```text
Do not rebuild IM4/IM5/EX1/IM6 or mark them complete from this prompt. The 2026-09-05 inventory
identifies implemented Export/import/files. Reconcile current acceptance evidence with historical
IM4-C2/IM5/EX1/IM6 criteria and document any still-open gaps before new release claims. Then implement LGL-7 using
11_workspace_data_export_legal_matrix.md plus the Terms, Privacy, DPA, Subprocessor and UI drafts.

Use `Workspace Data Export` and `Download a copy of your workspace data`; never `GDPR export`, privacy
access export, backup or reverse import. Keep Export out of onboarding and owner-only at create and
download. Reconcile the actual archive manifest/formats/exclusions, 24h artifact, 10m single-use
grants, <=5m signed URL, storage/log controls, notification, audit retention and Company deletion.
Apply the TEAM2/3 current-owner/session revocation and notification-recipient tests; an administrative
role or paid plan does not grant owner export. Check same-user cross-Company isolation.
Distinguish single-use action grants from potentially reusable short-lived object URLs and artifact
expiry from F-18 retrieval/switching duties. Maintain a separate privacy-request route/process; a Company archive does not close an access or
portability request. Reconcile Billing restricted-mode behaviour. Add terminology, RBAC, isolation,
grant/replay, lifecycle, purge/recovery, notification/logging and accessibility tests.
```

## Task I — release verification (read-only unless fixing a found defect is separately authorised)

```text
Run the applicable §10/11 checks in document 00 and the short launch checklist in document 14;
record genuinely disabled/deferred flows and reuse current app acceptance evidence. Verify approved hashes and env,
all clean/localized routes, redirects, return allowlists, auth acceptance, OAuth state, append-only
evidence, public booking policies/version snapshots, no token leakage, analytics allowlist,
accessibility, no draft/TBD output, and archived versions. Also verify Billing seller roles/catalog/
Paddle configuration/webhook authority/restriction states, LGL-6A/TEAM-RELEASE at the shipped
commit/schema, correct performer metrics/permissions and contact-only STUDIO+, plus Workspace Data Export terminology,
RBAC, scope, TTLs, purge and the separate Privacy Access Export/request process. Reconcile the rendered
documents against the approved source/hash and vendor/retention/security evidence. Report pass/fail
per checklist item; do not declare legal approval.
```

## Human handoff between tasks

Before B: legal identity env may be filled in preview, but production approval manifest remains empty.  
Before D: counsel approves acceptance copy and who may bind a workspace.  
Before E: counsel decides missing-Business-policy behaviour and contract-formation semantics per mode.  
Before F implementation: privacy/counsel classifies each technology by launch country.  
Before G: BILL0 commercial/legal gates, catalog, Paddle role/configuration and Billing implementation
evidence are approved.

Before STUDIO publication or any live sale/upgrade: TEAM-RELEASE and LGL-6A pass for the deployed
revision as well as G/BILL gates. Before G1 public contact collection: F-21 channel/privacy facts
are verified. C-05/C-19 and basic C-11 are decided; verify actual flows. R-01 is excluded from v1,
and C-07 early setup must not hold the post-expiry launch path.

Before H: reconcile current IM/EX implementation and acceptance evidence; privacy/counsel approve export metadata
retention and request-boundary copy.

Before I production: the applicable document-14 stage has actual release evidence and approved
exact document versions/hashes. IM/EX checks apply to enabled/claimed features, not an automatic
requirement to rebuild Export or automate individual privacy requests.

## Definition of a good LLM handoff

Every implementation task ends with:

1. files changed and why;
2. current behaviour versus target behaviour;
3. tests run and exact result;
4. remaining `[TBD]`/human gates (no invented resolution);
5. security/privacy regressions checked;
6. any plan drift discovered in current code; and
7. explicit statement that code completion is not legal approval.
