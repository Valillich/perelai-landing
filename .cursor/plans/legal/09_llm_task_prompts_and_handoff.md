# Copy/paste task prompts for simpler implementation LLMs

Use these prompts sequentially. Give each LLM only the relevant task plus this legal directory and the
repository `CONTEXT.md`/`AGENTS.md`. Do not ask one small model to implement landing, app, API and public
booking in one change.

## Global preamble for every task

```text
This task implements an approved plan; it does not author or approve law.
Read every referenced file before editing. Inspect current code rather than assuming plan line numbers
are current. Preserve unrelated user changes. Do not replace [TBD] or {{...}} with guesses. Do not
change any draft status to approved. Do not publish placeholder or draft legal content in production.
Add tests for every security/acceptance rule you touch. Stop and report if a required human-owned fact
or approval manifest is missing.
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
Implement the six canonical legal pages and navigation using 00_README_execution_plan.md §§1, 4, 6,
LGL-1 and §10, and the source drafts 02-07. Use the existing localized App Router architecture.
Create canonical /legal/* routes for all published locales; add /terms and /privacy locale-aware
redirect aliases; clean canonical metadata, sitemap, print styles, version/date display and archive
link. Draft preview is noindex with a visible banner; approved production cannot render unresolved
content. Do not machine-translate English. Replace footer placeholders. Add route/metadata/build-gate
tests. Do not touch beauty-finance.
```

## Task C — safe cross-domain legal navigation (app + landing, separate commits)

```text
Implement 00_README_execution_plan.md §6 and LGL-2 plus 08_ui_copy_and_surface_matrix.md §§1-4, 8-10.
First implement/test landing's allowlisted return component. Then implement/test the app legal URL
builder and context-specific components. Never accept or forward a full return URL. Preserve only the
existing clamped registration acquisition allowlist. Standalone, onboarding and token-bearing routes
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
not DPA. Store acceptance-copy version, locale and source. Do not store IP/user-agent until separately
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

## Task G — release verification (read-only unless fixing a found defect is separately authorised)

```text
Run the complete §10 and §11 matrices in 00_README_execution_plan.md. Verify approved hashes and env,
all clean/localized routes, redirects, return allowlists, auth acceptance, OAuth state, append-only
evidence, public booking policies/version snapshots, no token leakage, analytics allowlist,
accessibility, no draft/TBD output, and archived versions. Reconcile the rendered documents against
the approved source/hash and vendor/retention/security evidence. Report pass/fail per checklist item;
do not declare legal approval.
```

## Human handoff between tasks

Before B: legal identity env may be filled in preview, but production approval manifest remains empty.  
Before D: counsel approves acceptance copy and who may bind a workspace.  
Before E: counsel decides missing-Business-policy behaviour and contract-formation semantics per mode.  
Before F implementation: privacy/counsel classifies each technology by launch country.  
Before G production: counsel/owner supplies all immutable versions, hashes and approval references.

## Definition of a good LLM handoff

Every implementation task ends with:

1. files changed and why;
2. current behaviour versus target behaviour;
3. tests run and exact result;
4. remaining `[TBD]`/human gates (no invented resolution);
5. security/privacy regressions checked;
6. any plan drift discovered in current code; and
7. explicit statement that code completion is not legal approval.
