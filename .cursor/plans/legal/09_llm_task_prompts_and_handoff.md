# Copy/paste task prompts for simpler implementation LLMs

Use document 14 to choose the current launch stage. These are bounded prompts, not a requirement
to finish every task serially. Prepare current legal pages/acceptance, BILL policy and provider
packets in parallel; conditional features stay scoped to their own release. Give each LLM only the relevant task plus this legal directory and the
repository `CONTEXT.md`/`AGENTS.md`. Do not ask one small model to implement landing, app, API and public
booking in one change.

## Global preamble for every task

```text
This task implements an approved plan; it does not author or approve law.
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
05_public_booking_terms_source_en.md and 08_ui_copy_and_surface_matrix.md §§2 and 5-6.
Replace PublicBookingPage's AuthLegalLinks with PublicBookingLegalNotice. Add structured Business legal
settings, safe public DTO fields and version/hash snapshots. Show Business policies + Perelai Booking
Terms/Privacy at collection. Keep required Business agreement, privacy acknowledgement and optional
marketing permission semantically separate. Never invent a missing Business policy. Do not forward
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

```text
Follow LGL-0A and document 14 alongside BILL2B and later BILL work. Prepare truthful, approved Terms/Privacy/Refund
pages, explicit Refund Policy navigation, verified identity/support and relevant domain list. Prepare
an owner-approved pricing screenshot for private provider review where the pricing page is not ready.
No production drafts, guessed prices, KYC documents in Git or activation of live checkout. Record
provider review status separately from C-11/12/13 approvals. Submitting an application or accepting a
provider contract requires a separately authorised owner/operator action, not this preparation task.
```

## Task G0b — Google legal/verification packet (parallel preparation)

```text
Follow LGL-0B and document 14. Prepare accurate brand/domain/home/Privacy/support facts, Google-data
scope/use/storage/sharing/retention/deletion and Limited Use, and a Calendar read-only demonstration.
Distinguish basic sign-in from calendar.events.readonly verification. Remove two-way Calendar claims;
do not wait for BILL completion. A pending optional integration stays unavailable with honest copy
and working email login/internal calendar. Do not submit or accept provider terms under this task.
```

## Task G — SaaS Billing/Paddle legal integration (landing + app, after BILL gates)

```text
Do not implement Billing architecture from this prompt. Prepare legal copy/links in parallel now;
before activating a flow, verify its generated catalog and relevant BILL/runtime evidence. For
public STUDIO trial/team access or purchase also verify TEAM-RELEASE; never use an internal charge,
grants or off/observe mode to bypass it. Implement LGL-6 using
00_README_execution_plan.md, 01_legal_facts_env_contract.md, Terms §13,
10_billing_cancellation_refund_source_en.md and 08_ui_copy_and_surface_matrix.md §§10 and 12.

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
