# Shared privacy baseline and MVP retention — 2026-09-24

**Decision:** OWNER ACCEPTED in this task. Applies to plans, source drafts and implementation
requirements. **Runtime verification and publication remain pending.** This decision supplements
[launch minimum 14](14_launch_legal_minimum_20260918.md) and takes precedence over older blanket
all-country/counsel-approval requirements and unspecified Company-deletion/backup policy choices.
It does not approve a document containing unresolved facts or activate `REVIEWED_TEMPLATES`.

## 1. One common foundation, small applicable additions

Use one GDPR-based operational baseline for data minimisation, purpose limitation, security,
access, deletion/return, provider management and handling rights requests. Reuse those controls
across countries and languages. GDPR compliance is not automatic compliance with every US state
or Ukrainian requirement; mandatory local duties and actual processing still determine the result.

Maintain one common source of product/data/vendor/retention facts, standard Terms/DPA and reusable
Business-notice structure. Preserve the four existing language/market variants as composed outputs:

| Profile | Reuse | Add or adapt only where applicable |
|---|---|---|
| EU, including Poland | Common GDPR purposes, rights, processor and operational rules | Client-readable language, authority/contact information, genuinely required national service/privacy variations; PL/pl remains Poland's default |
| Ukraine | Same factual processing, security and supported operational lifecycle | Ukrainian legal grounds, rights, request deadlines and complaint route; do not transplant GDPR references as the sole domestic legal basis |
| United States | Same factual processing, security and supported operational lifecycle | Actual state/business applicability, collection/rights/requests and sale/sharing/tracking-signal disclosures where required; GDPR labels do not satisfy these by themselves |

No independent legal project, separate data-retention engine or bespoke policy per country, salon
or plan tier. A shared review record may cover multiple countries with the same supported profile;
record the covered countries/languages and any difference in a compact matrix. A documented
“no additional provision needed for this profile” is sufficient where accurate. Only actual launch
markets need completing now. Do not infer worldwide approval from this policy decision.

Keep exact-country registry entries/default references as a technical selection/evidence mechanism,
not a requirement for 27 separately authored EU policies or 27 separate counsel sign-offs. Preserve
PL/pl priority, existing published/custom notices, version pinning and client-language suitability.
Do not add `country: EU`, remove validation or silently switch a published notice.

## 2. Accepted deletion and retention policy

The following numeric limits are product commitments to implement and verify, **not statutory
grace periods or findings that the current system already meets them**. Earlier mandatory duties
and valid individual-rights requests still apply. Do not publish these promises until the actual
working procedure and all relevant stores support them.

| Data / event | Accepted rule | Remaining evidence or decision |
|---|---|---|
| Client data while the Company uses the service | Process on the Business controller's documented instructions and for defined purposes. Provide a prepared purpose-based retention profile and periodic review/cleanup; no indefinite “until someone clicks delete” rule | Select the ordinary booking/client-history periods or meaningful criteria for the first supported profile, account for necessary evidence, and demonstrate the deletion/restriction procedure |
| Confirmed Company deletion instruction | Complete deletion of in-scope Customer Personal Data from active systems **within 30 calendar days of D0**, without undue delay. Arrange the Customer's choice of return or deletion; invalidate public access when closure is confirmed | Owner-authority verification, return assistance, DB/files/queues/provider cleanup, link/token invalidation and a completion record |
| Residual backup copies | Exclude from ordinary use and expire/delete **within 30 calendar days after active-system deletion**. Reapply deletion instructions before any restored dataset returns to ordinary use | Actual rotation for every backup/snapshot/object version and provider copy in scope; restore procedure and minimal deletion evidence |
| Perelai/FOP accounting and tax evidence | Retain only necessary records under the applicable category-specific accounting/tax schedule, with restricted use/access | One accountant-reviewed table: category, legal reason, start event, period and any audit/dispute/limitation extension. No universal seven-year rule |
| Salon financial/service records | Customer Personal Data governed by the salon's purpose/instructions and applicable duties | Keep distinct from Perelai subscription invoices/vendor payout records; the FOP's tax obligation does not justify retaining the salon's entire CRM |
| Platform logs, security, messages and legal evidence | Separate minimal purpose-based schedules; preserve already verified shorter TTLs | Reuse the existing register and actual enabled configuration; do not apply the Company-deletion deadline as a blanket replacement for every independent processing purpose |

**D0** is receipt of an authorised, confirmed instruction to delete a specified Company. Record its
timestamp; verify authority promptly and do not restart a valid request's clock for internal
approvals or queue delays. An authenticated verified owner instruction can establish D0 directly.
Cancellation/nonpayment/trial expiry, deleting an individual login and deactivating a performer
are not Company-deletion instructions. A person asking to erase their own data follows the applicable
rights procedure; do not give every such request the Company's 30 + 30-day schedule.

If active deletion completes on D0 + 30 and the last backup expires 30 days later, the ordinary
maximum is **D0 + 60 days**. Earlier active deletion shortens that maximum. State both clocks
clearly; do not promise “everything immediately” or “all copies within 30 days of the request”.

Support-assisted return/deletion is acceptable for MVP. Record the Customer's choice, provide any
required return before destruction and distinguish a real statutory/contractual retrieval period
from a 24-hour download-artifact TTL. Honour applicable switching/retrieval duties (F-18); do not
destroy records prematurely or invent a delay to an explicit lawful deletion instruction. Resolve
an actual conflict in the shared packet, not by silently resetting D0.

Any lawful retention exception must identify the particular records, role, purpose/legal basis,
access restriction and end/review condition. Do not create a blanket tax/security/claims hold over
all processor data. Where GDPR Article 28 applies, its return/deletion exception is not expanded by
Perelai's unrelated controller purposes. A minimal completion/restore-suppression record is not a
copy of the customer's deleted CRM and needs its own justified retention.

The older proposed **one year after account deletion is superseded** for the ordinary closure flow.
The proposed **seven years for all billing data is not adopted**. No new numerical active-client
retention term is inferred from the owner's acceptance of the deletion/backup limits.

## 3. One small operational packet

Use `support@perelai.app` for support, privacy and legal requests; the operator is responsible for
handling and routing them. A separate personal mailbox, `legal@` alias, privacy portal, automatic
person-scoped export product or new compliance platform is not a prerequisite for this MVP.

Keep one compact internal record covering:

1. Confirmed identity/contact (already in register 01), actual launch profile/countries/languages
   and any applicable local differences. Do not ask each salon to choose legal grounds or research laws.
2. Actual providers, data locations/remote access and agreements/transfer arrangements for enabled
   processing. Hetzner in Germany alone does not resolve the whole processing chain.
3. Purpose-based retention and the deletion/return workflow: responsible operator, applicable
   deadlines, secure delivery, work log, backup schedule and completion notification.
4. A practical walkthrough of an authorised Company deletion and a scoped individual-rights request,
   including preventing reappearance after restoration. Reuse existing tests/security evidence;
   a new full audit is not required when the existing evidence establishes the needed facts.
5. The final rendered documents, covered profiles, immutable versions/digests and internal release
   approval. Include focused legal/accounting answers only for unresolved applicable questions.

The owner confirms business policy and supplied facts; engineering/operations establishes technical
truth; qualified advice resolves the applicable legal/tax uncertainties. Do not demand an external
lawyer's signature for every fact row, language version, Company or country without a specific
reason. Reuse one review for an unchanged common clause; material changes receive relevant review.
No DPO/representative/certification is invented: assess actual applicability, not the label “MVP”.

## 4. Simple booking and release scope

Keep the standard ordinary APPOINTMENT/REQUEST flow for SOLO/STUDIO: confirmed Business identity
and contact, no prepayment/deposit/package redemption/cancellation or no-show fee in that flow,
prepared layered privacy information and optional polite cancellation reminders. No required salon
Refund Policy, external policy URL, manual legal version or privacy-consent checkbox. Preserve
custom arrangements and the separate SaaS Refund & Cancellation Policy.

Reduce scope where useful: ordinary booking rather than medical intake; no optional advertising,
sale/sharing for ads or unsupported marketing in this standard profile. Check actual free-text,
services and integrations; a label or warning does not prove sensitive data cannot be collected.

G0/G0b preparation continues in parallel. Unused countries/features and an unneeded portal do not
block it. Before serving real data/public notices, complete the facts/procedure relevant to that
processing; before charges, complete billing/provider/tax requirements. TEAM-RELEASE and existing
security/assent/version checks remain. Policy acceptance is not runtime or publication approval.

## 5. Sources supporting the decision, checked 2026-09-24

- [EDPB: retention and processing principles](https://www.edpb.europa.eu/sme/find-practical-info/faq_en?page=1&s=)
  — necessity and purpose limitation; GDPR does not prescribe these product deadlines.
- [EDPB: controller/processor responsibilities](https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en)
  — instructions, assistance, return/deletion and vendor arrangements.
- [EDPB Guidelines 07/2020, paragraphs 139–142](https://www.edpb.europa.eu/system/files_en?file=2023-10%2FEDPB_guidelines_202007_controllerprocessor_final_en.pdf)
  — controller's return/deletion choice, agreed completion and exceptions.
- [Hetzner Cloud backups/snapshots](https://docs.hetzner.com/cloud/servers/backups-snapshots/overview/)
  — seven automatic backup slots; manual snapshots persist until deleted. These facts do not prove
  Perelai's actual rotation or cover attached volumes/other stores.
- [DPS: FOP document-retention guidance, 2026-05-29](https://if.tax.gov.ua/media-ark/news-ark/print-1015043.html)
  — category/start-event/extension rules; no universal seven-year period for every invoice or CRM row.
- [Ukrainian Ombudsman: processing procedure](https://www.ombudsman.gov.ua/uk/rekomendaciyi-ta-rozyasnennya/tipovij-poryadok-obrobki-personalnih-danih)
  — domestic purposes, retention, rights and handling rules.
- [California Privacy Protection Agency: FAQs](https://cppa.ca.gov/faq)
  — applicability and specific US rights/opt-out obligations; GDPR is not a substitute.
