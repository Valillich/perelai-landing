# Legal plan review and launch decisions

> **Historical review.** The commercial assertions and C-01–16 crosswalk below describe the
> 2026-09-05 baseline. `launch-20260906` supersedes its primary/additional, Founding, annual and
> unapproved-price assumptions. Use [document 13](13_review_monetization_team_20260906.md) and the
> updated source drafts for current pricing, C-01–19 and TEAM-RELEASE. The dated findings and legal
> sources remain evidence; this record is not authority to restore retired commercial terms.

**Reviewed:** 2026-09-05. **Scope:** plans/drafts only; no site, app, vendor account or
commercial approval changed. This review improves the drafting package; it is not a legal opinion
that Perelai may launch in a particular country.

## 1. Evidence and findings

Application baseline: monetization `inventory/README.md` at `4be643bfe`, its commercial,
capability, action and lifecycle catalogs; monetization README/BILL0/BILL7/BILL8; app CONTEXT;
ADRs 0001–0013, especially 0002/0003/0006 (money and Packages), 0007/0008 (onboarding/modes),
0010 (coworker disclosure) and 0013 (Billing). These files establish design/code facts,
not deployment, completed vendor verification or legal approval. Relevant paths are in README §0.

| Priority | Finding in the previous legal package | Correction / remaining evidence |
|---|---|---|
| P1 | Refunds existed in document 10, but navigation called the page only Billing and delayed its footer link until paid launch | Keep one source at `/legal/billing`, prominently title/link it **Refund & Cancellation Policy**; add refund URL aliases; make the approved page discoverable before Paddle domain review |
| P1 | No early provider-verification phase; commercial publication and checkout gates were conflated | Add LGL-0A below. Public legal documents require approval; a privately supplied pricing screenshot can avoid premature public price claims |
| P1 | Refund section deferred virtually every rule, omitted Paddle-only execution and had no purchase acceptance evidence | Document 10 now contains a concrete, explicitly unapproved proposal, statutory/provider exceptions, operational cases and B-13/B-14 gates; README/UI specify purchase-time evidence |
| P1 | “BILL0–BILL6 in the dark” could be read as blanket implementation permission | Current BILL0B verdict is **GO for disabled BILL1A only**. C-01–16 and later slice gates remain binding |
| P1 | Export was called unimplemented; old IM4 P1 findings were treated as current | Export/import/files exist in the 2026-09-05 code inventory; deployment and C-10 remain unverified. Historical acceptance findings require closure evidence, not automatic reopening or presumed closure |
| P1 | DPA excluded all security/support data, allowed urgent subprocessor replacement without prior opportunity to object, and narrowly capped audits | Roles now follow processing purpose; mandatory Art. 28 assistance/audit/authorisation safeguards control |
| P1 | Contract basis was applied to all staff; customer data licence included generic improvement | Limit contract basis to data subjects party to the contract; separate staff legitimate interests and processor instructions; narrow the licence |
| P1 | EU consumer withdrawal and SaaS switching requirements were absent from release decisions | Add jurisdiction matrix and F-17/F-18; distinguish digital services/content, withdrawal/cancellation, and archive TTL/retrieval rights |
| P2 | Landing PostHog was labelled a Customer Data subprocessor | Separate processors of Perelai controller data from Customer Data subprocessors and independent controllers |
| P2 | Coworker availability sharing, Google Limited Use and sync/tombstone retention were incomplete; Package terminology drifted | Update Privacy/DPA/Terms/Booking drafts to match data flows and ADR vocabulary |
| P1 | Closure/deletion was described as a safe action without noting that the Company DELETE handler is a stub | Require a verified product or support-assisted closure/erasure operation, subscription cancellation and data-return route before promising self-service deletion |
| P2 | “Payment received” could be rendered from a redirect; download URL was called single-use | Pending copy is neutral until backend evidence; single-use applies to the action grant, not automatically to an object URL |
| P1 | Existing landing `content/legal.ts` claims Founding Beta has no service fee despite CF-04/C-16 PENDING | Record explicit reconciliation before publication; this plans-only change does not approve or silently rewrite current website terms |

## 2. Minimum package and document ownership

Paddle requires readily discoverable Terms, Privacy and Refund information, HTTPS, product/features
and pricing information. Its domain-review guidance allows a pricing screenshot when pricing is
not yet available. Submit the actual checkout origin as well as any relevant product domains;
do not treat the public booking domain as a SaaS checkout origin by default.
[Paddle domain review](https://www.paddle.com/help/start/account-verification/what-is-domain-verification).

Perelai additionally needs its DPA and verified subprocessor list for applicable processor services,
Cookies/storage disclosure, and separate Public Booking Terms. Acceptable Use stays in Terms §11.
Retention/deletion stays in Privacy §12, Terms §17 and DPA §12, backed by one internal schedule;
a separate public Retention Policy or AUP is optional and must not introduce a second set of rules.
Publish working privacy/support/security contact routes in those documents. Do not invent a
security certification, staffed phone line or SLA.

One refund source is enough: document 10 → `/legal/billing`. Navigation label **Refund Policy** or
**Refund & Cancellation Policy**, not only Billing. `/refund-policy` and `/legal/refund-policy`
are locale-aware redirects to that same page. No duplicate policy/version. Acceptance of this
layout by Paddle is an onboarding outcome to verify, not guaranteed by this review.

## 3. LGL-0A — early Paddle preparation, alongside BILL1–BILL2

1. Start entity/accounting fact collection and provider onboarding preparation now. A sole-trader
   workflow exists, but the actual FOP, residence/operations, sanctions and bank relationship must
   be verified. Paddle onboarding is not Ukrainian tax approval.
   [Account verification](https://www.paddle.com/help/start/account-verification/what-is-account-verification).
2. Obtain approval for the minimum truthful, current legal documents, identity and contact details.
   Where billing is unavailable, state that fact with approved wording and distinguish future paid
   terms/effective dates; do not falsely promise that anyone can buy today.
3. Prepare a pricing screenshot for private review only after the commercial owner approves the
   values to submit. Identify any remaining launch dependency honestly. If Paddle requires public
   pricing, obtain the normal commercial/legal approval before publishing it; `noindex` is not
   permission to expose unapproved prices or drafts.
4. Owner/operator creates or accesses sandbox/live accounts and submits required verification through
   Paddle's secure channels. Do not put passports, tax IDs, residential proof, bank details or
   verification attachments in Git or public configuration. Public legal identity is separately
   approved under F-01. This plan review itself does not submit an application.
5. Record case/reference, submitted domains, document versions, private pricing revision, review
   date, pending requests and result. Account/domain approval does not enable checkout.
6. Continue only the authorised technical slices with their own gates. Sandbox integration uses
   test data. Before real payments, including an internal live transaction, close C-11/12/13 and
   the relevant BILL2/BILL8 commercial, provider and runtime gates. BILL7 public price/CTA release
   remains separately gated. No real client data is exempt from privacy duties because of beta.

Do not wait until BILL7 to begin preparation. Do not adopt the pasted recommendation as permission
to complete every BILL1–6 runtime slice: the newer inventory explicitly narrows the current GO.

## 4. Jurisdiction and operational decisions

All rows are **PENDING**, owned by the founder and the named qualified adviser. US is the initial
GTM hypothesis; translated pages and supported product markets are not approval to sell everywhere.

| Decision | Required output before the affected launch |
|---|---|
| Operator/FOP and operations in Poland | Registered identity, lawful notice address, contracting/establishment analysis, governing law and venue; distinguish legal identity from a Company workspace |
| Ukraine/FOP accounting (C-13/F-11) | Written analysis of permitted activities/KVED and tax regime, Paddle contract characterisation, gross/net tax base, FX dates/rates, fees/refunds/chargebacks, payout documents, business bank account, reporting and residence/possible Polish tax nexus; reconcile first real payout later without postponing pre-launch advice |
| B2B eligibility (C-12/F-06) | Business-purpose confirmation and buyer authority, including sole proprietors; handling of consumers and mixed-purpose users. Neither “B2B only” nor absence/presence of a VAT number decides statutory status |
| US subscriptions | Counsel applicability review of ROSCA and state automatic-renewal laws: pre-charge disclosures, affirmative recurring-payment agreement, cancellation, notices and durable confirmation; state privacy thresholds, service-provider terms and sensitive data review for beauty notes/files. [FTC ROSCA](https://www.ftc.gov/legal-library/browse/statutes/restore-online-shoppers-confidence-act) |
| EU/EEA consumers if served | Classify SaaS as service/digital service versus digital content; assess withdrawal, early performance requests, durable confirmation, remedies, total-price display and mandatory languages. Do not infer that opening a SaaS account waives withdrawal. [Consumer Rights Directive, Arts. 6/8/9/13/14/16](https://eur-lex.europa.eu/eli/dir/2011/83/2022-05-28/eng) |
| EU online withdrawal | Check national implementation of Article 11a, applicable from 19 June 2026 under Directive 2023/2673: accessible withdrawal function and durable receipt where applicable. Verify who provides it in the Paddle/Perelai flow; a cancel-renewal button is not automatically a withdrawal function. [Directive 2023/2673](https://eur-lex.europa.eu/eli/dir/2023/2673/oj/eng) |
| EU SaaS switching, including B2B | Assess Perelai under Data Act Chapter VI, including scope/exceptions, contract, switching assistance, exportable data, charges, retrieval and deletion. If applicable, Arts. 25/29 require specific terms; the Art. 25 retrieval period is at least 30 days after the transition. A 24-hour artifact is not that retrieval window. [Data Act](https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng), [Commission explanation](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained) |
| UK if served | Review then-effective subscription/withdrawal and data-protection rules and commencement/transitional provisions. Reconcile the buyer protections Paddle actually offers even where broader than the statutory minimum; do not present a provider policy as a legal conclusion |
| GDPR and transfers | F-02/04/05, controller/processor map, lawful bases, Articles 13/14 notices, Article 28 schedules, EU/UK representation and lawful transfer chain. No guessed hosting country or SCC execution. [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) |
| Unsupported sensitive content | Treat client allergies, contraindications, scalp/skin notes and photos as potential health data; prohibit clinical use, minimise fields and establish removal/support handling. A prohibition does not prove such data is never received |

## 5. Billing approval/evidence crosswalk

| Existing app decision | Legal decisions/evidence |
|---|---|
| C-01/03/04/05 | F-08; B-01/02/06; exact primary/additional price, eligibility, founding terms and successor consequences |
| C-06/07/08 | F-08/12; B-03/08; charge timing, no-card trial expiry, grace and minimal anti-repeat retention |
| C-10/15 | F-09/13–18; B-09; restricted export, closure, existing confirmation continuations and switching duties |
| C-11 | B-04/05/07/13/14; all locale copy, refund proposal, purchase assent/confirmation, provider operations |
| C-12/13 | F-01–06/11/17/18; launch-market and accountant sign-off |
| C-14 | F-08/16; verified authority/reassignment/closure; no owner-as-payer assumption |
| C-16 | Reconcile current `content/legal.ts` fee statement and `docs/commercial-policy.md` CF-04; archive any replaced effective terms and provide required notice |

The July statement in `docs/commercial-policy.md` that no export code exists is also stale. Future
commercial-policy maintenance must distinguish implemented export from unapproved C-10 packaging;
it must not change PENDING to APPROVED on the strength of code presence. Cross-repository follow-up
must carry this review into BILL7/BILL8 before release; app plans were read, not edited here.

## 6. Approval packet and final verification

For each approved document save rendered hash, immutable version, effective date, language,
approver/date/reference, legal identity snapshot, actual feature/vendor configuration and applicable
territories. For Billing also retain catalog revision, the exact recurring purchase disclosure,
refund-policy version, buyer authority and provider confirmation references with approved retention.
Private evidence stays private; the public page exposes approved terms and contacts only.

Final review must exercise: legal discovery without login, refund aliases and links, pre-purchase
assent, no-card expiry, cancel renewal, withdrawal/refund intake when login is unavailable, full/partial
refund and duplicate-charge handling, account closure with active subscription, unresolved activation,
restricted data access, privacy requests and export cleanup. Include annual renewal, provider outage,
PRIMARY/ADDITIONAL consequences and region-specific paths. A screenshot or page alone does not prove
these operations work.

External references checked on 2026-09-05, in addition to those above:

- [Paddle MSA §10](https://www.paddle.com/legal/terms): agreed buyer refunds must be executed by Paddle;
  Perelai must not send a replacement transfer or its own invoice for Paddle's buyer Transaction.
- [Paddle Buyer Terms](https://www.paddle.com/legal/buyer-terms) and
  [Paddle Refund Policy](https://www.paddle.com/legal/refund-policy): verify the actual version at launch;
  statutory, supplier-promised and discretionary remedies are not the same thing.
- [Paddle seller handbook](https://www.paddle.com/seller-guides/seller-handbook): purchase disclosures,
  acceptance, support and refund discoverability. Its suggested 30-day guarantee is a recommendation,
  not an automatic Perelai promise or a universal statutory rule.
- [Google API User Data Policy](https://developers.google.com/terms/api-services-user-data-policy):
  add a truthful Limited Use disclosure and verify Calendar data use, transfers and human access.

Do not carry payout rates, thresholds, supported currencies, verification lead times or tax rates
from the pasted recommendation into a customer contract. Recheck them with the provider/accountant
when operationally needed. None is needed to decide whether this app needs a Refund Policy.

## 7. Validation of this documentation change

- Reviewed all 12 original legal-plan files and added this findings/decision record.
- Checked local Markdown links, balanced code fences/table-row boundaries and the seven-policy
  route/refund-alias contract across 13 files; no errors.
- Checked purchase-evidence/refund gates, preserved commercial PENDING decisions and removal of
  obsolete blanket Export-status claims; checks passed.
- `git diff --check` passed. Only this legal-plan directory changed; no app code tests were needed
  for a documentation-only revision. Runtime, provider dashboards, actual KYC/accounting records,
  signed contracts and production deployment were not verified by those checks.
