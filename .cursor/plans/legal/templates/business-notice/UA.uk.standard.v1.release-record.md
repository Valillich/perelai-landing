# UA/uk v1 — content authority and activation handoff

**Prepared:** 2026-09-25. **State:** CONTENT_PREPARED / REGISTRY_ACTIVATED.
**Reference:** `owner-ua-uk-preparation-20260925`.

The owner explicitly requested completing the UA/uk template using the facts and approvals already
provided in this task, to unblock the implementation agent. This record links that instruction to
the assembled artifact. It is owner-authorised preparation, not a claimed lawyer's opinion,
successful production drill or instruction to publish immediately. Do not ask again for the same
FOP identity, provider choices, contact, policy periods, market/language or selected date.

## Exact artifact

- Human source: [UA.uk.standard.v1.draft.md](UA.uk.standard.v1.draft.md); historical filename retained.
- Import candidate: [UA.uk.standard.v1.prepared.json](UA.uk.standard.v1.prepared.json), `.template`.
- Synthetic render: [UA.uk.standard.v1.preview.md](UA.uk.standard.v1.preview.md).
- Country/language: `UA` / `uk`.
- Version: `business-booking-UA-uk-v1`.
- Profile/modes: `ORDINARY_NON_MEDICAL`, `APPOINTMENT`, `REQUEST`.
- Effective date: `2026-09-25`. The owner requested removing the date delay in the current sprint.
  The unreleased candidate was advanced from `2026-10-01` and its digest recomputed; no published
  version was overwritten. The generic future/invalid-date validation stays enabled.
- Content SHA-256, calculated by the application's `businessNoticeTemplateDigest`:
  `75bcc0f449398aa51d96a1f31674d3089409c0dd2c2b58b9e7cbec1f2616811c`.
- `approvalRef`: `owner-ua-uk-preparation-20260925`, with the scope described above.

The candidate's `.template.status = ACTIVE` describes its intended registry state **after release**;
the enclosing packet explicitly says `PREPARED_NOT_PUBLISHED` and blocks activation pending checks.
It is not imported by application code. Do not treat the presence of a nonempty approvalRef as a
substitute for this record's scope. Both production arrays remain empty in this preparation.

## Resolved drafting inputs

| Former gap | Completed treatment / source |
|---|---|
| Provider/operator identity | Owner's extract and confirmed address; FOP/Perelai identity already literal; `support@perelai.app` remains the public platform route |
| Supporting providers | Owner-confirmed Hetzner/Falkenstein infrastructure and Resend US email; Resend legal name Plus Five Five, Inc. from its public DPA. Cloudflare edge from audit 17; Google Calendar disclosed conditionally, matching the implemented optional integration |
| Transfers | Germany, US, international network/Calendar processing and global remote FOP access are stated. Owner-declared protected connections and contractual measures are used; no EU-only claim, universal SCC coverage, arbitrary-country approval or fictional country list |
| Active retention | Owner-selected 90 days after uncompleted-request closure and 24 months after last completed visit. Text explains no-visit contacts, future agreed visits and that editing alone does not restart the clock |
| Company closure/backups | Accepted 30 days from confirmed instruction, then 30 days for residual backups, ordinary maximum 60; separated from archive and individual rights requests |
| Necessary evidence | 1095-day owner-selected Perelai acceptance/claims baseline; concrete clock is active Company-data deletion. Restricted scope and live-dispute exception; no blanket retention of Business-only/marketing evidence, whole CRM or all tax records. Journal/accounting retain their own schedules |
| Automation/technical collection | Actual source checks: IP-based submission quota, honeypot validation, availability/lead-time checks, email confirmation, Company/staff auto-accept setting. Explain effects and a human contact; avoid an unverified blanket denial of automated decisions |
| Privacy URL | `https://perelai.com/legal/privacy`: canonical route plus domain established by landing routing and audit 17. It is not `perelai.app/privacy`; no unverified Ukrainian translation promised |
| Optional Business blocks | No invented address/DPO/representative. Article 12 collection notice identifies the actual legal controller and contact; separate applicable trader disclosures still need to be shown by the Business. Ordinary privacy contact uses the existing email field |

All client-copy blocks have **zero drafting-only tokens and zero `[TBD]` markers**. The only remaining
tokens are supported runtime fields: `BUSINESS_NAME`, `CONTACT_EMAIL`, `PRIVACY_CONTACT_EMAIL`.
SOLO and STUDIO use the same text and existing preview/confirmation workflow. No mandatory salon
Refund Policy, marketing consent or universal privacy-consent checkbox is introduced.

## Checks performed during preparation

The current application module `apps/api/src/public-booking/business-notice-template.ts` was
transpiled with installed SWC and loaded locally. Its actual digest, renderer and reference
resolver were used with an injected in-memory candidate registry; no copied renderer implementation
or live registry edit was used.

- 12 successful renders: two modes × three reminder choices × shared/separate privacy email.
- Country/current-reference and exact digest resolution succeeded.
- Eleven rejection checks: wrong country, ORDER, RENTAL, wrong pinned hash, changed text under the
  original hash; future and invalid dates each rejected by current lookup, pinned lookup and rendering.
  The current-date candidate resolved and rendered successfully. No unresolved client-copy token remained.
- Default production UA lookup still returned `null`; arrays were not activated.
- No database access, Company deletion, env change or production request submission was performed.

## Remaining release checks — execution/configuration, not another prose-writing task

1. **Operational retention:** the selected build/procedure must enforce 90 days / 24 months and
   their described edge cases, handle rights requests, and perform Company 30/30 deletion including
   relevant provider-held copies. A small documented manual procedure is acceptable if executable.
   Reuse the current deletion work; finish its failure/resume, independent journal and restore
   evidence. A particular real Company need not be deleted solely to approve this template.
2. **Retained evidence:** implement the allowed category/attribution/expiry/hold rules and restricted
   access. Do not turn the 1095-day prose into a blanket billing/CRM retention rule. Shared-user
   and Business-only evidence follows register 01 §6.2. Preserve exact legal text evidence where needed.
3. **Actual processing matches the notice:** attach existing account/configuration evidence for
   the enabled providers, contractual safeguards and actual remote access. Public DPA text does not
   prove an account's acceptance. Ukrainian Article 29 remains applicable; this preparation does
   not certify all global destinations. If the release inventory reveals another material recipient
   or changed use, update the candidate deliberately. Do not reopen already accepted provider facts.
4. **Platform documents/contact:** check that the canonical Privacy URL serves the approved notice,
   applicable booking terms/versions are configured, and the contact works. The web fetch could not
   verify the deployed Privacy page in this preparation. Do not use a draft/preview page as proof.
5. **Publication behaviour:** verify remaining R-23 admission/setup findings are closed in the release
   build; preview/publication is atomic, default selection is exact-country, old pinned/custom choices
   survive and a changed draft cannot be published with an old confirmation. Preserve the no-fee scope.

The calendar delay is closed: this candidate is effective from 2026-09-25. Keep the generic
future/invalid-date guard; no date-bypass ENV is needed. Changing an unpublished candidate requires
a new digest and synchronized record, as done here; never silently modify a version already
published. No new lawyer certificate per salon/language or completion of US/EU drafts is required.
The owner has separately made the MVP release decision recorded below. The listed
checks remain implementation and operational facts to revisit when any material
provider, retention or deployment condition changes; they are not a new request
for identical content approval.

## Sprint 24 implementation evidence — 2026-09-25

The candidate was initially loaded through the actual application registry helper, using the
prepared JSON as an in-memory registry. Its recomputed digest remains
`75bcc0f449398aa51d96a1f31674d3089409c0dd2c2b58b9e7cbec1f2616811c`.

The retained-Company operator drill passed in an isolated PostgreSQL `*_test` database and a
separate Redis instance. It covered target Client/Transaction/PaymentAllocation, FileAsset, a
Staff profile/schedule/block, Category/add-on hierarchy, queue job, retained legal scope and
Perelai Terms evidence; an unrelated sentinel with a shared BillingCustomer remained intact. It
also covered failure/resume and pre-case backup restore/replay. This is local synthetic evidence
only, not a production deletion or Coolify restore.

**Owner release direction implemented, 2026-09-25:** after the isolated retention-cleanup drill,
the owner explicitly accepted local protected `deletion.jsonl` storage for MVP, accepted the
synthetic replay drill as the present Restore Drill evidence, deferred a Coolify-format restore to
post-MVP DevOps work, and directed immediate UA/uk activation. The application now imports the
exact `.template` content into `REVIEWED_TEMPLATES` and its `.currentReference` into
`CURRENT_TEMPLATES`. The focused production-registry test verifies the literal entry, pinned
digest, `UA` default and `APPOINTMENT`/`REQUEST` rendering; `EU`, `PL` and `US` remain inactive.

This records the owner's product/release decision, not an assertion that a deployment occurred,
that an ordinary Company was deleted, that a live Coolify dump was restored, or that a public URL
or support mailbox was externally verified. Do not publish a preview/draft page in place of the
approved platform documents; production deployment remains a separate authorised action.

## Instruction to the implementation agent

UA/uk prose preparation is complete. Stop reporting the old provider/transfer/retention/automation
tokens or the absence of version/date/hash as the blocker: those have been resolved here. Finish
and record the concrete release checks above. The current sprint handoff,
[plan 24](/Users/valery/Sites/perelai-landing/.cursor/plans/legal/24_mvp_deletion_retention_and_ua_activation_sprint_20260925.md),
includes UA/uk registry activation after those checks pass; the older preparation-only boundary
does not require another approval of identical content. Deployment and destructive execution
against a real Company remain separate from implementing and validating this sprint.

The activation uses `.template` from the prepared JSON as the reviewed entry and
`.currentReference` as the current UA default. The actual helper recomputed the matching hash;
preserve exact pinned references. The JSON wrapper and this Markdown must never be served as client
text. Update deployment evidence separately, without inventing a professional opinion.

Canonical facts and legal sources are in register 01 and the human source's release notes. Other
countries remain separately prepared drafts. This packet supersedes older UA-specific statements
that its prose slots, version, effective date or content-authority reference still need to be written.
