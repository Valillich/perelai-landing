# Legal alignment with monthly plans and TEAM release

**Reviewed:** 2026-09-06. **Scope:** landing legal plans and English source drafts only.
Commercial authority is `launch-20260906`; this review does not approve public legal versions,
implement Billing/TEAM, change production pages or authorise a charge.

## 1. Source authority and verdict

Reviewed the updated [ADR-0013](/Users/valery/Sites/beauty-finance/docs/adr/0013-monetization-architecture.md),
[launch decision](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260906.md),
[commercial catalog](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/commercial-catalog.v1.md),
[capability catalog](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/capability-catalog.v1.md),
[TEAM0–TEAM5](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/10_team_access_and_studio_release_20260906.plan.md)
and [BILL7 landing handoff](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/07_landing_handoff_commercial_legal_20260822.plan.md),
with Billing README/task gates and the earlier CONTEXT/ADR/data review in document 12.

The revised commercial model is suitable as the drafting baseline: independent workspace contracts,
an explicit performer metric and a separate security release gate avoid the previous ambiguity.
The material gaps are the old legal package's contradictions and remaining decisions already tracked
as C-05/C-19 and release evidence. Approved prices do not close these gaps. This is a plan review,
not evidence that the current application enforces the new rules.

| Priority | Finding in the prior legal plans | Correction |
|---|---|---|
| P1 | PRIMARY/ADDITIONAL and successor repricing survived in policy, URL contracts and implementation prompts | Standard independent Company subscriptions; remove sibling eligibility/repricing; retired intents resume ordinary signup without aliasing or rewriting history |
| P1 | Amounts still marked wholly unapproved; Founding and annual purchase/refund language described launch options | Use approved monthly SOLO $19 / STUDIO $29; no annual/Founding/reference-price offer; preserve separate C-11 legal/tax approval |
| P1 | Generic staff/user language could imply 1/5 logins, free unlimited admins or a capacity bypass | Count active performers, including working owner/no-login profiles and reserved new-performer invites; permissions remain separate; deactivation and login removal differ |
| P1 | Legal release work had no explicit TEAM dependency | Add LGL-6A, F-20, B-15, G1 and security/role test evidence; no STUDIO sale/upgrade/public team launch before TEAM-RELEASE |
| P1 | C-05 still meant sibling rebalance, leaving current-workspace plan-change consequences undefined | Require effective date, charge/credit, consent, over-limit/future-work treatment and provider-failure recovery for the existing subscription |
| P1 | Shared trial wording could be read as automatically including the chosen paid plan/team access | Keep one shared 21-day no-card payer trial; C-19 decides trial Plan and existing-team accommodation; Offer intent grants none |
| P2 | STUDIO+ had no constrained legal/contact surface | Small Contact us block, no price/limit/Offer or access commitment; add F-21 enquiry purpose, minimum fields, recipient/tool and retention |
| P2 | Administrative roles/no-login performers were not explicit in privacy/processor and offboarding coverage | Distinguish operational business data from account/security processing; add actual permission, revocation, export/recipient and retention evidence |

## 2. Approved inputs, not remaining questions

| Decision | Current contract for drafting |
|---|---|
| C-01 | SOLO_MONTHLY = 1900 USD; STUDIO_MONTHLY = 2900 USD; MONTH, quantity 1. Annual offers deferred |
| C-02 approved part | ACTIVE_SERVICE_PERFORMERS: SOLO 1 / STUDIO 5; admin-only excluded. A working owner counts. SOLO own-performer setup and COWORKERS preserved |
| C-03 | Standard starting prices; no Founding eligibility, fabricated crossed-out price or lifetime lock |
| C-04 | One BillingAccount per Company, at most one current paid subscription; same payer may fund any number independently. No sibling discount, successor or paid-count quota |
| C-17 | STUDIO is a regular paid launch plan. TEAM-RELEASE is a mandatory stop gate, not a beta disclaimer |
| C-18 approved part | STUDIO+ contact-only plus extensible internal catalog; no sellable price, numeric limit, OfferCode, checkout, grant or automatic overage |

One shared no-card trial remains 21 UTC days from the first eligible durable onboarding completion;
other eligible Companies share the original expiry. Paying for one Company does not end another's
remaining trial. Same payer and same user do not grant cross-Company data access or a bundled invoice.
An operational bound on incomplete/unfunded workspaces is a separate pending C-14 decision.

Capacity must include a pending invitation reserving a **new** performer place once until acceptance,
expiry or revocation; inviting a login for an existing active performer or an administrative member
does not add another performer. Expiry must be checked at request time. Empty schedules, no revenue,
hidden profiles and login removal do not free capacity. Deactivation stops new assignments and
requires explicit future-work handling; reactivation checks the limit. Administrative exclusion is
not unlimited users, broad financial access or authority to bind the Customer/export its archive.
SOLO's own setup and coworker links do not imply additional internal team invitations.

## 3. Decisions and evidence still required

| Gate | Unresolved work | Legal-plan owner |
|---|---|---|
| C-02 remainder / C-09 | Remaining capabilities/quotas, current-team classification, migration and grants; preserve IDs/history, review ambiguous records | F-20; TEAM1/3/4; Terms/UI |
| C-05 | Before enabling changes: same-subscription SOLO↔STUDIO effective time, proration/credit, consent, lower-limit handling, remaining team permissions/future bookings and failed-change recovery; keep unsupported changes disabled | F-08; B-06; Terms §13; Billing §6 |
| C-06/07/08/15 | Grace/restriction, first charge during trial, extensions/retained eligibility and mixed public-confirmation effects | F-08/12/16; Billing §§3/11 |
| C-10 | Restricted export, retrieval, closure, deletion/retention and support promises | F-09/13–18; document 11 |
| C-11/12/13 | Final locale-specific price/tax/renewal/refund and seller wording, identity/jurisdictions and payout tax/accounting | LGL-0/6; B-04/05/07/11/12/13; qualified reviewers |
| C-14 | Unfunded-workspace bound/cleanup and any later payer reassignment; not paid-subscription quantity | F-08/09/19 |
| C-16 | Reconcile existing website Terms claiming “Founding Beta has no service fee” and all old price/locale copy; preserve already accepted promises through a valid prospective change/remedy | LGL-6; B-02; website content owner |
| C-17 evidence | TEAM0–TEAM5 completion and TEAM-RELEASE at deployed commit/schema, role matrix, migration dry-run, unskipped security tests, critical/high findings closed | LGL-6A; F-20; B-15; DPA Schedule 2 |
| C-18 future / contact facts | No sellable STUDIO+ price/limit/time approved. Current enquiry channel, minimum fields, basis, vendor and retention must be verified | F-21; Privacy; UI contact block |
| C-19 | Trial Plan/capabilities and existing-team accommodation; no STUDIO entitlement from Offer intent or TEAM bypass | F-12; B-03; trial UI/Terms |

TEAM evidence must cover current membership/permissions after dismissal or role change, refresh,
protected requests after the successful revocation commit, final in-flight effects, cache invalidation,
lists/details/search/aggregates, files/exports and queued notification recipients. Record remaining
finite validity of already-issued provider URLs; never promise to recall downloaded bytes. A local
role change must not remove the person's unrelated Company membership or payer relationship.
Do not substitute a broad SUPERVISOR role for limited reception access.

The [rollout plan](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/08_rollout_security_and_acceptance_20260822.plan.md)
also gates internal/operator STUDIO live charges and upgrades. Billing off/observe/grant modes do not
bypass TEAM security. Keep the intended joint SOLO/STUDIO launch unless the owner changes its scope;
independent security fixes/preparation are not a partial commercial launch.

## 4. Refund Policy remains necessary and included

[Document 10](10_billing_cancellation_refund_source_en.md) remains the single source for
`/legal/billing`, exposed as **Refund Policy / Refund & Cancellation Policy** before Paddle review;
`/refund-policy` and `/legal/refund-policy` redirect to it. A second refund document would risk
contradictory versions. This policy covers SaaS purchases; each business's client-service refunds
remain governed by that business's policies and applicable law.

R-01 is still an **unapproved proposal**: a 14-day voluntary full refund for the first paid purchase
per payer, now scoped to the monthly launch offers, with use not voiding that promise. Independent
Company subscriptions do not automatically change this to one guarantee per Company. Approve the
scope explicitly and disclose it before each affected purchase; later purchases/renewals and
mandatory/provider remedies remain distinct. launch-20260906 approved none of R-01/R-02/R-03.

Cancellation, full/partial/tax refund, plan-change credit, paid access and data deletion need separate
outcomes. Test two SOLO, two STUDIO and mixed Companies: changing/refunding one must not reprice,
cancel, grant access to or erase another. No automatic staff deletion or STUDIO+ invoice on over-limit.

## 5. Source refresh and verification

Paddle supports changes to items on an existing subscription, with an explicit proration choice and
a preview of immediate/future amounts. Those mechanisms do not select Perelai's C-05 policy or approve
a promise of immediate downgrade, credit or refund. Reviewed 2026-09-06:
[Paddle upgrade/downgrade documentation](https://developer.paddle.com/build/subscriptions/replace-products-prices-upgrade-downgrade/).

Data-protection roles depend on processing purposes and facts. Outsourced customer-data processing
requires an appropriate contract and evidenced safeguards; price or role names establish neither.
The team/privacy amendments apply this principle to the app design, not a claim that its controls
have passed: [European Commission GDPR application guidance](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en).
The country-specific refund/withdrawal/switching analysis and dated sources remain in document 12;
recheck their applicability at release rather than treating this commercial amendment as legal approval.

Validation for this edit is documentation-level: references, Markdown structure, retired-term and
decision consistency, and whitespace/diff checks. App/build/security/provider tests are future
implementation/release evidence, not tests performed by this plan review.
