# MVP legal polish and business-template scope

**Date:** 2026-10-12. **Status:** LP-M1 and corrective R1–R3 IMPLEMENTED / targeted TESTED; NOT DEPLOYED. LP-M2 IMPLEMENTED / targeted TESTED; visual acceptance and rollout inventory remain. LP-M3 procedures PREPARED, operations unverified; LP-M4 PARTIAL.
**Next:** [independent review 38 and visual checklist](38_lp_m1_independent_review_20261012.md):
R1/R2 are fixed in app `59a270485`; landing R3 and provenance are updated.
Continue remaining visual acceptance/inventory/transition/notice checks, not reimplementation.
**Request:** keep launch preparation small: hold six clinical/wellness templates in every market,
preserve the functional `rent`/`personal` holds, and defer country-specific niche rules until real
post-MVP demand. This revision supersedes this document's earlier country × template matrix,
mandatory ordinary-use declaration and proposed launch Terms amendment.
**Observed revisions:** app `8735a2397`; landing `f6637c0` plus existing local legal-plan changes.
This document records a bounded launch policy; it does not certify compliance, activate markets,
approve new legal wording, change production, or replace the existing BILL8 release evidence.

## 1. Assessment of the supplied review

- Agree with the emphasis on ordinary non-medical use, clear CA scope, a working incident/privacy
  process, and checking published promises against the deployed product. A score or country-level
  “GO” is not evidence that those checks passed. Keep UA/US/AU and the existing ten-region CA scope;
  do not open EEA/UK or close an entire existing market solely because a specific niche is unsuitable.
- Keep **2026-11-01** as the seven platform documents' effective date. That was the owner's chosen
  postponement, not a defect to automatically fix on 12 October. Earlier real-user admission needs an
  applicable effective packet; demo/sandbox and provider review do not make future terms current.
  Duties concerning existing data continue. Do not remove date guards or edit ENV as part of polishing.
- “Regulated healthcare” is too narrow a test. AU health services can include massage and fitness,
  and appointment/contact data collected to provide such a service can itself be health information.
  The term “wellness”, no diagnosis field, no payment, or a checkbox does not change that fact.
- US is not a universal health-data exemption. HIPAA scope depends on covered-entity/business-associate
  facts; state consumer-health rules can apply outside HIPAA and to small businesses. Avoid routing
  unsupported health activity through a US template as a workaround.
- No need for a new Refund Policy or mandatory refund checkbox for ordinary no-fee public booking.
  Keep cancellation information and any genuinely applicable custom service/money terms. The
  platform's SaaS Refund & Cancellation Policy is a different document and purchase flow.
- Keep booking notifications free of promotions. No marketing-consent feature, newsletter engine,
  new compliance dashboard, province-by-province profession engine or health-data product in this MVP.
- **Keep Terms `2026-11-01.1` unchanged for this scope reduction.** Section 4 already describes
  conditional feature availability; §11 and Privacy §16 already prohibit clinical/sensitive records.
  Removing new template choices and adding faithful reminders does not itself amend the contract.
  Section 11 is not a blanket ban on every wellness profession: do not misquote it as one or hide
  new contractual duties in a hint. A later new contractual restriction, changed data purpose or
  withdrawal of an existing paid promise needs its own review/notice/version decision. Existing
  customers require an explicit transition, not an assumption that the feature clause permits any loss.

## 2. What the source actually contains

| Observation | Evidence | Consequence |
| --- | --- | --- |
| `rent` and `personal` have `availableForSelection: false` | App `libs/core/src/templates/business-groups.ts`; Web `utils/onboardingBootstrap.ts`, `utils/onboardingTemplatePicker.ts` | Preserve these functional holds. They are not a declaration that rentals/personal budgeting are legally prohibited. |
| Setup still resolves any catalog definition or synthetic group ID | `resolveSetupTemplateIdentity` in `libs/core/src/templates/business-templates.ts`; `apps/api/src/companies/companies.service.ts` setup path | UI filtering alone does not reject a direct disabled-template setup request. Add an admission check at the mutation boundary; retain the resolver for existing data. |
| `aesthetic_clinic` is FEATURED, with injectable treatment, microneedling and medical supplies | `business-templates-catalog.ts`; `template-keys.en.ts` | Current defaults actively invite use outside the supported profile. |
| `advanced_skincare` includes chemical peel, microneedling and treatment-plan review | Same files | A harmless-sounding group name does not make these ordinary salon defaults. |
| `massage` includes deep-tissue/sports massage; `spa` includes massage; `personal_trainer` includes `Custom Meal/Training Plan` | Same files | Review services/add-ons and actual activity, not only the template label. |
| `bookingConfig.regulated` is documented as a copy-review hint | `business-template.types.ts` | It is not an implemented healthcare admission gate and is not a complete classifier. |
| Reviewed salon notices use `ORDINARY_NON_MEDICAL` | API `public-booking/business-notice-template.ts`; stored setup schema in `libs/core/src/zod/schemas.ts` | A country match or this constant alone does not prove that the business is eligible. |
| CA scope evidence is `ca-operating-scope-v1` / `OUTSIDE_QUEBEC` | `libs/core/src/companies/subdivisions.ts`; API `companies/market-access.ts` | It does not attest to absence of AB/BC operations. Broader text requires new evidence semantics. |
| Massage and personal-trainer marketing copy exists; massage niche is enabled | Landing `config/niche-pages.ts`, `content/niches/massage-therapist/en.ts`, `content/niches/personal-trainer/en.ts` | Align published locales, service examples, CTA eligibility and generated artifacts with the chosen scope. A clinical disclaimer at the bottom does not override contradictory claims. |
| No dedicated incident/privacy-request runbooks found in the inspected tracked runbook directories | App `docs/runbooks`; landing/app legal plans already require these procedures | Finish the existing PAR-O duty with two short operator checklists, not a new compliance project. Their absence here does not prove the owner has no external procedure. |

## 3. Selected minimum template policy — one list for all markets

This is a **conservative MVP product boundary**, not a finding that a profession is illegal or that
every person using a template is governed by the same law. Keep catalog IDs/data for historical
resolution. Restrict **new selection/admission**; do not delete or rewrite existing Companies.

| Template / group | All markets, including UA/US/AU and admitted CA provinces | Minimum action |
| --- | --- | --- |
| `aesthetic_clinic`, `advanced_skincare` | MVP HOLD | No new selection, setup, template switch or acquisition promise; no clinical launch. |
| `massage`, `spa`, `personal_trainer`, `yoga_instructor` | MVP HOLD | Same global rule. No country exceptions or relaxation/recreation subprofiles at launch. Review one requested niche later. |
| `rent`, `personal` — every template and synthetic group ID | Functional HOLD | Enforce the owner's existing selection decision on the server; not a claim of legal prohibition. |
| Other currently available templates | No new restriction from this change | Preserve current country/subdivision, capability and release rules. Focus acquisition on ordinary beauty services; do not newly activate hidden niches or booking modes. |

Keep stable catalog IDs, translations and historical definitions for reading/exporting existing data.
`Custom Meal/Training Plan` must disappear from the **exposed offering/new setup**, together with its
closed trainer template. The global hold removes that promise without a historical data migration;
deleting an unreachable legacy key is not a separate launch gate. Review/remove health-program
defaults before any reopening. Do not delete or relabel a customer's existing service categories.

Country access stays unchanged: UA/US/AU plus CA **MB, NB, NL, NS, NT, NU, ON, PE, SK, YT**;
CA QC/AB/BC and currently closed countries stay closed. The user has not requested closing Canada.
Existing province controls and LP-M2 are retained; there is no new country × profession matrix.
Course/content templates with booking disabled remain so. Keeping a catalog entry is not a public
feature promise, health-service approval or permission to collect sensitive data.

Risk is **not limited to free text**: the service being booked can reveal health information, as can
imported calendar content, notes or uploads. Ordinary beauty templates can also be misused; hints
and the existing Terms/support process reduce risk, not certify every customer's actual practice.
Do not suggest omitting professionally required medical records; unsupported activity needs a
suitable system. Custom/coach labels are not permission to offer unsupported healthcare.

## 4. LP-M1 — apply the product boundary at actual entry points

**Status: IMPLEMENTED (app `a91628447`), R1–R3 corrections OPEN in review 38; rollout BLOCKED
pending corrections and real inventory/transition.**
See [app implementation evidence](/Users/valery/Sites/beauty-finance/inventory/mvp-template-scope-20261012.md)
and [operator inventory/runbook](/Users/valery/Sites/beauty-finance/docs/runbooks/legal-template-scope-rollout.md).
Landing holds both previously enabled massage and personal-trainer pages; generated artifacts
are pinned to this clean app revision. Historical IDs/copy are retained, not exposed as acquisition.
The implemented small shared, pure template-admission function in `libs/core` combines known
template/synthetic group + existing functional group availability + the six-ID global hold list.
Compose it with existing country/subdivision and capability guards; do not rebuild those guards or
pass country into a new profession matrix. Return a readable reason. Do not overload `visibility`
or change the resolver that historical Companies need. No new table, migration or declaration field.

1. Consume the policy in onboarding, subsequent Company creation/setup and any supported
   template-change path, including server-side direct requests and synthetic `*_custom` paths
   (discover the real suffix rather than inventing it). Check before seeding or operational writes.
   Preserve supported metadata edits on old Companies; fresh setup is not the same as editing a name.
2. Show a concise informational scope notice near business selection, for example:
   “Healthcare and wellness templates are unavailable in this release. Do not enter medical records
   or other health information.” Notes/public comments: “Do not include health information.”
   Localise using the existing UI-copy workflow, link existing Terms/Privacy where helpful, and
   preserve accessible contrast. These are availability/data-minimisation reminders, not new terms
   or blanket consent. Do not change the pinned U70 acceptance copy or add a checkbox.
3. **Defer** the separate ordinary-use `CompanyAdmissionDeclaration`, questionnaire and evidence
   version. Keep ordinary Terms acceptance and CA's already-existing declaration; do not claim
   they prove clinical suitability. No extra onboarding acceptance event for LP-M1.
4. Before enabling the guards on existing workspaces, produce a minimal read-only inventory of
   affected template/group IDs, country/subdivision, public-booking state and counts. Include custom
   IDs/aliases and identify the owner's protected real workspace by a verified ID, not a guessed
   name. Do not dump client notes or other personal content for this inventory. If affected active
   workspaces exist, record a support-led transition before rollout; preserve account access,
   export, cancellation and support. No automatic deletion or forced migration. New publication
   and new intake for the six held templates must not bypass eligibility through custom notices
   or an existing slug. A functional `rent`/`personal` selection hold alone does not retroactively
   disable a valid existing booking mode. Test these two cases separately.
5. Reuse short no-health-data guidance in existing notes/comments and import/Google guidance.
   No classifier or content scanning. Known unsupported use discovered through support requires
   case handling; do not treat a renamed/custom template as legal clearance.
6. **Do not edit Terms, Privacy, other platform documents, hashes, manifest, archives or ENV for
   this scope reduction.** Keep `2026-11-01.1` / `2026-11-01`. New hints must accurately reflect
   existing obligations; substantive contractual changes require a separate versioned change.
7. Disable acquisition for the six held templates across landing routes, menus, sitemap, CTA and
   machine-readable pages in every served locale; use existing publication flags. Massage is
   actually enabled in `config/niche-pages.ts`, so “we do not promote it” is not yet true in code.
   Regenerate artifacts from the final app revision with existing tooling. Preserve history/aliases
   internally without silently redirecting a held clinical niche to an available salon offer.

**Acceptance:** table-driven tests for six blocked IDs, unavailable groups and their synthetic IDs;
direct setup/template-change rejection before writes (password/Google converge on the same setup);
permitted salon and custom-template regression; new publication/intake rejection for held IDs;
existing country/CA admission unchanged; historical read/export/support preserved; held landing
routes and acquisition artifacts unavailable. No combinatorial country × niche test matrix, no new
ordinary-use declaration or changed Terms hash. Record inventory/transition separately from tests.

## 5. LP-M2 — clarify the existing CA declaration, without adding another checkbox

**Status: IMPLEMENTED / targeted TESTED — not deployed; visual acceptance and rollout inventory remain.**
Evidence: [LP-M2 handoff](/Users/valery/Sites/beauty-finance/inventory/ca-operating-scope-v2-20261012.md).
The implementation uses explicit `ca-operating-scope-v2` / `SUPPORTED_REGIONS_ONLY`,
preserves v1, and provides one owner reaffirmation in existing booking settings.
Terms remain unchanged.

Implementation: app `e8ad7e70a`; generated landing provenance refreshed to that
revision. Landing tests 500/500, verify:niches, commercial catalog and all seven
legal manifest hashes PASS. No production environment or legal approval changed.

This is a correction to one existing control, not a new regional-rule engine or a platform Terms amendment. Replace the
narrow QC-only statement in the existing setup control with:

> This workspace is used only for business operations in the supported Canadian provinces and
> territories. It is not used for operations in Alberta, British Columbia or Québec.

Show the current supported list next to the explanation (or one accessible “Supported regions”
disclosure). Do not equate operating geography with every client's citizenship, residence or travel.
Location selection alone is insufficient for a business conducting operations in multiple provinces;
uncertain cross-region activity goes to support rather than being silently approved.

- New copy must have a new declaration version, e.g. `ca-operating-scope-v2`, and an answer reflecting
  its broader scope. Update schema/validation/locales/setup/relocation/publication checks together.
- Keep the exact region list in the immutable versioned copy. A dynamically changing list plus
  “supported regions” must not retroactively broaden a past declaration. Version the list/copy when
  scope changes; reuse the existing declaration table rather than add an unnecessary DB subsystem.
- Preserve v1 evidence as “outside Québec” only. Do not rewrite it as acceptance of v2. Plan one
  reaffirmation at the next applicable setup/publication/operational transition for affected owners;
  keep account access, export, cancellation and support available. No prompt on every booking.
- Admission remains the existing ten-region allowlist. QC/AB/BC stay closed; no EU/UK/NZ opening.

## 6. LP-M3 — finish existing PAR-O with two short operator procedures

**Status: PREPARED / production execution not evidenced.**
[Incident checklist](/Users/valery/Sites/beauty-finance/docs/runbooks/privacy-incident-response.md) and
[privacy-request checklist](/Users/valery/Sites/beauty-finance/docs/runbooks/privacy-request-response.md)
contain synthetic paper walkthroughs, not real mail delivery or production drills.
Extend an existing procedure
if the owner already has one; otherwise add two short app `docs/runbooks` documents. One accountable
operator and a protected manual record are enough; no ticketing integration or scheduler is required.

**Incident checklist:** discovery/determination times; containment; systems/data and affected
Companies; factual role/jurisdiction assessment; risk and decision rationale; Customer notification
without undue delay; required regulator/individual notices; follow-up and closure. Under PIPEDA,
record every personal-data safeguards breach under the organisation's control, even below the RROSH
notification threshold. Keep the minimal record **at least 24 months from the day the organisation
determines that the breach occurred**, longer only where another documented duty/hold applies.
Customer-controlled data normally calls for prompt Customer notification and assistance; identify
the organisation responsible for regulatory reporting rather than automatically double-reporting.
Perelai's own controller duties remain. Other applicable countries/deadlines must also be considered;
the ordinary support response target does not set an incident deadline.

**Privacy-request checklist:** receipt/date/channel; proportionate identity and authority checks;
Perelai controller vs Company-controlled data; applicable deadline; routing without abandonment;
access/correction/erasure action using existing export/retention/deletion tools; narrow lawful
exceptions; response and completion record. Preserve distinctions between archive, client-record
cleanup and full Company deletion; do not demand a passport by default or erase evidence blindly.

Store real incident/request records privately, not in Git. An empty reusable template and a synthetic
walkthrough can be committed. Record who monitors `support@perelai.app`, an actual mail delivery test,
and a short tabletop result. Do not label a created Markdown file as a performed production drill.

## 7. LP-M4 — reuse the existing release evidence, no new broad audit project

**Status: PARTIAL verification delta; deployment/notice/storage facts remain unverified.** Link results into [release 32](32_provider_submission_parallel_work_and_launch_20261001.md),
release 30 and app BILL8A/B. Do not reopen completed G/PAR/BILL implementation work.

| Verify once on the candidate release | Evidence, not a new feature |
| --- | --- |
| Effective versions and acceptance | Seven manifests/app archive/ENV match the actually effective packet; future-dated preview remains distinguishable; purchase-copy and U70 release status are separate. |
| Scope | Country/province/template/direct API paths obey the chosen policy; disabled `rent`/`personal` cannot be selected through raw setup; existing workspace behavior remains deliberate. |
| Public booking | Identity/contact, price or price method, cancellation terms and business privacy notice are accessible before submission; custom money terms only where applicable. No card fields or fictitious universal Refund Policy requirement. |
| Google / notifications / tracking | Deployed OAuth scope is read-only; no unexpected Calendar writes, marketing sends, analytics/ads or republished old tracking configuration. Inspect actual enabled paths; no need for a new automation framework. |
| Storage / erasure / export | Actual DB off-site ≤7 days, local ≤10 days, file-backup exclusion, ≤24-hour export expiry, deletion/restore controls and cleanup-cycle evidence agree with the applicable promises. Reuse existing runbooks. |
| Notice versions | Current v1 and prepared v2 must not be conflated. The inspected v2 notices already describe read-only Google import; older v1 wording still describes sending bookings to Calendar. Check actual published Company snapshots and whether R2 is already used. If incorrect notices are in use, issue a dated immutable correction and arrange republication promptly; waiting for 1 November does not correct current processing disclosures. If no affected current publication exists, record that finding and use the prepared applicable packet at launch. Never overwrite v1 evidence, backdate acceptance or silently activate the future v2. |
| Provider identity | Source `{{LEGAL_PROVIDER_FULL_NAME}}` / `{{TAX_NUMBER}}` / `{{BUSINESS_ADDRESS}}` are intentional interpolation inputs, not evidence of an unfinished document. The loader interpolates and validates them. Check the rendered release pages and Paddle's entered identity match the approved identity; do not hardcode source values or reversion Terms merely to remove tokens. |
| Manual duties | Support delivery/owner, minimal incident log, privacy-request walkthrough, vendor agreements and existing retention work are evidenced. No invented provider-account verification. |

## 8. Handoff order and completion rule

1. LP-M1: inventory existing workspaces, implement the global template/group admission rule and
   minimal hints, then align landing exposure/generated artifacts. Keep other existing market and
   booking-mode decisions. LP-M2: correct CA's existing declaration as a separate bounded change.
2. **No launch Terms amendment, new ordinary-use declaration or niche-specific country engine.**
   Existing seven platform texts, hashes and effective dates remain unchanged for this change.
3. LP-M3 proceeds independently with existing operator tools. LP-M4 consumes completed evidence;
   its current-notice correction can proceed immediately if active v1 publications are found.
   A salon-notice revision and CA declaration revision are separate from platform Terms versioning.
4. Report IMPLEMENTED / TESTED / DEPLOYED / OPERATIONALLY VERIFIED separately. This planning edit marks none
   of these complete. Do not interpret the external review's “GO” as production authorization.

### Post-MVP queue — triggered by demand, not a launch dependency

| Deferred work | Trigger and smallest next step |
| --- | --- |
| Reopen one of the six templates | First concrete customer request: identify actual services, data and operating country; review that niche's defaults/copy and operational needs. Open only a supported scope. No speculative worldwide matrix. |
| Separate ordinary-use declaration | Add only if a specific reopening requires meaningful additional attestation. A checkbox is not a substitute for supported processing or actual eligibility. |
| U49 personal Google events as time off | Not required for the beauty launch. Before enabling, design the projection around busy interval, target and minimum source identity needed for sync; show a generic label. Do not persist/expose personal titles, descriptions or attendees in blocks, logs or exports. Assess transient classification, current OAuth access and the notice/review implications as well; “do not store title” does not mean no personal data is processed. Reconcile with app polishing plan 02 before implementing U49/U50. |
| Intelligence / RFM / churn and campaigns | Separate internal analytics/profiling from sending marketing messages. Review purposes, access, transparency and retention for the actual feature; do not assume every RFM calculation is marketing or automatically requires a new consent checkbox. Marketing delivery requires its own channel/jurisdiction review and changes to the current no-campaign scope. CAN-SPAM is generally an opt-out regime, not a universal prior-consent rule; CASL has different consent/exemption rules, and current Terms impose a separate opt-in contractual restriction for external marketing. |
| Phase 14 external LLM | Before any external transfer, identify recipient/data, training/use terms, retention, DPA/subprocessor and notice changes. Local processing without a new recipient avoids that particular provider change; it does not make purpose/access/retention questions disappear. No new AI subprocessors for launch. |
| Change logs | Not a prerequisite to launch a new logging subsystem. Whenever implemented, minimise personal content and follow the applicable deletion/retention rules. Ordinary client history must not survive indefinitely as an audit diff; legally retained acceptance/deletion/billing evidence has its own narrow schedule and is not blindly erased with every client edit. |

These entries qualify the supplied review; they do not amend or mark the app feature plans completed.
If any deferred feature is already enabled on the release candidate, classify that actual behaviour
before release rather than using the word “post-MVP” to avoid an existing disclosure duty.

## 9. Primary sources checked on 2026-10-12

- [OAIC — health-service and health-information definitions](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/health-service-providers/guide-to-health-privacy/introduction-and-key-concepts):
  includes appointment/billing information and broad health-related services; the AU holds are an
  MVP recommendation inferred from that scope, not a statutory ban on these template names.
- [OAIC — small business](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business):
  health-service exceptions mean turnover alone does not establish exemption.
- [CMTO — health-information custodians and agents](https://www.cmto.com/all-touchpoints/health-information-custodians-agents-and-privacy/):
  Ontario RMT/MT privacy responsibilities; not a claim that every Canadian massage practice has
  identical classification.
- [HHS — covered entities and business associates](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html)
  and [Washington RCW 19.373.010](https://app.leg.wa.gov/RCW/default.aspx?cite=19.373.010):
  HIPAA is not the sole health-data regime; do not infer a blanket small-business exclusion.
- [Canada breach regulations §6](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2018-64/FullText.html)
  and [OPC reporting guidance](https://www.priv.gc.ca/en/privacy-topics/privacy-for-businesses/privacy-breaches-at-your-business/gd_pb_201810/):
  retention trigger, risk assessment and allocation of reporting/record-keeping duties.
- [FTC — CAN-SPAM compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business):
  commercial/transactional classification and opt-out duties; not a blanket requirement for prior
  consent to every US marketing email. This does not override other laws or current Perelai Terms.

This is a focused source/code review and implementation handoff. No production database, provider
console, customer's sensitive records or live backup was inspected; no full test suite was run.
The sentence above describes the original planning review; implementation evidence follows below.

## 10. Checks performed for this planning change

- Re-read Terms §§2/4/11, the interpolation path and U49's actual proposed projection. Selected
  global holds replace the earlier matrix; platform Terms and ordinary-use attestation work are
  removed from the MVP queue. Implementation and production inventory remain unperformed here.
- Read-only execution of the app's actual resolver confirmed `coworking` and `personal_budget`
  still resolve while their groups are unavailable for selection; `aesthetic_clinic` and
  `advanced_skincare` resolve in the selectable beauty group. No setup/API mutation was executed.
- Landing `node --import tsx scripts/legal-manifest.ts`: all seven existing document hashes match;
  dates/versions stay `2026-11-01` / `2026-11-01.1`.
- `git diff --check` and new handoff link/code-fence checks passed. Existing unrelated changes
  were preserved; app code, published legal sources and runtime configuration were not edited.

## 11. Implementation checkpoint — 2026-10-12

App `a91628447`; generated landing catalog/UI labels have exactly that sourceCommit.
Six holds remain a single all-market availability policy, not a healthcare classifier.
Only publication/intake for the six templates is held; functional group selection
holds do not retrospectively turn off existing valid rental/personal booking modes.
No existing workspace was changed or queried for real inventory. No deployment occurred.

| Verification | Result |
| --- | --- |
| Core template/subdivision regressions | 216/216 PASS |
| API Company/auth/public-booking regressions | 817/817 PASS |
| Fresh isolated PostgreSQL setup/publication/PATCH/effect-lock matrix | 43/43 PASS |
| Targeted Web onboarding/notes/import | 82/82 PASS |
| Landing whole suite | 34 suites, 499/499 PASS |
| Landing verify:niches / commercial / uniqueness | PASS |
| App API/core/Web declaration builds; API full spec typecheck | PASS |
| Landing typecheck/lint; seven-document legal manifest | PASS |
| Landing production build with approved legal identity snapshot | PASS |

Build with current local `.env` failed closed on APPROVAL_HASH_MISMATCH. Only
`NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME` differs from the approved identity snapshot.
The passing build used the existing `PRODUCTION_LEGAL_IDENTITY_ENV` in the test
process; no ENV file or legal source/hash/date was edited. Target deploy identity
must be verified by the operator; this is not permission to bypass the guard.

Whole app gates remain NOT green outside LP-M1: whole core 51 passed / 2 failed
suites (839 passed / 2 failed tests), existing export schema accounting drift.
Web full spec typecheck has 15 errors outside this change. Whole Web run:
558 passed / 5 failed / 1 skipped suites; 5418 passed / 8 failed / 5 skipped tests.
Failures are in CalendarPage.desktop, CalendarPage.visitRestore,
VisitDetailPage.restoreCandidate, ServicesEditorPage.desktop and
NotificationTemplatesTab (outside LP-M1). Do not treat targeted LP-M1 acceptance
as full release acceptance; the unchanged baseline gates need a separate repair.

Next operator steps: verified protected-ID read-only inventory and support-led
transition if needed; actual published v1/R2/Google facts and any immutable
notice correction; LP-M2 CA scope v2 as a separate bounded change; actual support
mailbox/incident/privacy-request walkthrough. LP-M3 files are preparation only.
Platform Terms, seven hashes and effective dates remain unchanged.

## 12. Corrective pass after review 38 — 2026-10-12

App `59a270485`; landing artifacts now pin that clean revision. Direct create
validates explicit template/profile identities before its transaction; provisional
creation remains possible. Verified personal links use management-only response
and retain read/cancel without new intake, rebooking or proposal acceptance.
Invalid/foreign/expired/missing-client JWT and FROZEN lifecycle remain closed.
llms.txt now describes 20 selectable catalog templates in four admitted groups.
Historical catalog/acceptance data, Terms, pricing and runtime flags are unchanged.

Evidence: [corrective report](/Users/valery/Sites/beauty-finance/inventory/lp-m1-corrective-20261012.md).
API 854/854; Web booking/parser 63/63; real PG 55/55; production-bundle browser
mobile/desktop cancel 2/2; landing whole suite 500/500 PASS. API/Web builds and
API spec typecheck PASS. Landing build PASS with existing approved identity
snapshot supplied only to the verification process, no ENV edit or hash bypass.
Full app baseline failures are not reclassified as green by this corrective run.
Remaining operator visual checklist, real protected-ID inventory/transition and
current published notice/R2 facts still block rollout; LP-M2 remains separate.
