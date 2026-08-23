# Perelai Billing, Cancellation and Refund Policy — English source draft

> **DRAFT — NOT FOR PRODUCTION OR RELIANCE.** This document reflects the approved provider-neutral
> billing architecture and Paddle as the first intended production Merchant of Record. It does not
> approve a price, Offer, renewal rule, trial conversion, grace period, cancellation consequence or
> refund policy. Resolve every `[TBD]`, reconcile the rendered text with the production catalog and
> Paddle account, and obtain owner/counsel approval before enabling paid acquisition or checkout.

**Version:** `[TBD: immutable approved version]`

**Effective date:** `[TBD: YYYY-MM-DD]`

**Last updated:** `[TBD: YYYY-MM-DD]`

This Policy forms part of the [Perelai Terms of Service](/legal/terms). The Terms control the use of
the Perelai Product. This Policy explains the commercial lifecycle of a Perelai SaaS subscription.

## 1. Who sells the Product and which terms apply

{{LEGAL_PROVIDER_FULL_NAME}}, trading as Perelai (**Perelai**), supplies, operates and licenses the
Perelai Product under the Terms of Service.

For a purchase completed through Paddle, the applicable Paddle entity is the authorised reseller and
Merchant of Record for the buyer Transaction. The buyer purchases through Paddle under the
[Paddle Buyer Terms](https://www.paddle.com/legal/buyer-terms), while access to and use of the Product
remain governed by the Perelai Terms. The applicable Paddle entity depends on the location from which
the buyer purchases.

Paddle processes the payment, determines/collects applicable indirect tax for the buyer Transaction,
issues transaction documents and administers buyer-side payment/cancellation/refund channels according
to its terms and mandatory law. Perelai remains responsible for providing the Product and for the
promises it makes in its Terms. Neither party becomes the seller or payment processor for services a
Perelai Customer provides to its End Clients.

## 2. Plans, Offers, Companies and payer authority

- A **Plan** defines Product capabilities and limits.
- An **Offer** defines approved commercial terms for a Plan, including billing interval and price.
- A **Company** is a separate tenant workspace with its own subscription and access projection.
- The **payer** is the person or business with authority to fund one or more Company subscriptions.

Multi-company use is not itself a PRO or premium Plan feature. One payer may fund more than one
Company, but each Company has a separate subscription/access state and `[TBD: approved PRIMARY versus
ADDITIONAL commercial position]`. A payer does not receive a Company role merely by paying, and a
Company owner cannot manage another payer's billing relationship without authority.

Only the payer or another person with verified billing authority may start checkout, change payment
details, cancel, request a refund or manage the buyer relationship. `[TBD: payer transfer/replacement,
dispute and loss-of-access procedure.]`

## 3. Offer intent and authoritative checkout

A landing-page price or `OfferCode` is an invitation to review an Offer, not a charge, reservation,
entitlement or guarantee of eligibility. The app validates the current Offer after the relevant
Company exists. Staff signup ignores Offer intent.

Before the buyer confirms a purchase, Paddle Checkout must show the authoritative Product/Offer,
billing interval, currency, subtotal, discount, applicable tax, total, first-charge timing, renewal
and any trial/cancellation information required for that purchase. A browser URL, locale, niche,
Company accounting currency, marketing-region preference or prior displayed estimate does not override
the Checkout total.

The public landing may advertise only generated public PRIMARY Offers. ADDITIONAL Company Offers are
app-only. Provider product/price IDs and checkout URLs must not appear in landing links or be treated as
the public catalog.

## 4. Trial

Subject to eligibility, the planned Product trial is:

- 21 days;
- no card required to start;
- one trial per payer relationship, not per user or Company;
- started when the first eligible Company durably completes onboarding; and
- shared by any other eligible Companies attached to that payer during the same original window.

Creating or linking another Company does not restart or extend the trial. A Company still waits for
its own durable onboarding completion before Company-specific Product access. An invited staff member
does not receive a payer trial.

The no-card trial does not itself authorise a charge and is not proof of a Paddle Subscription. The
following remain release blockers:

```text
Eligibility/exclusions: [TBD]
Exact trial start event and timezone/display: [TBD implementation verification]
Checkout during trial: [TBD immediate charge versus charge/period after trial]
First-charge notice and cancellation deadline: [TBD]
Trial-end reminders: [TBD]
Trial-end access transition: [TBD grace/restriction matrix]
```

Do not publish `free for 21 days, then automatically charged` unless the buyer has explicitly
authorised that exact subscription and the production flow, reminders and law support the statement.

## 5. Prices, currencies, discounts and tax

Each approved Offer has one canonical USD economic anchor. Paddle may automatically convert and
present the price in a supported local currency using transaction-location information. This
local-currency presentment does not create another Plan or Offer.

Perelai's launch catalog does not use country-specific unit-price overrides, regional/PPP prices or a
custom FX/VAT engine. The Paddle price uses `tax_mode=location`, so the price may be inclusive or
exclusive of tax depending on the transaction country. The Checkout total is authoritative.

The following values are not approved and must not be inferred from planning hypotheses:

```text
PRIMARY monthly/annual Offer prices: [TBD]
Founding eligibility, deadline and price-lock duration: [TBD]
ADDITIONAL Company monthly/annual Offer prices: [TBD]
Discount/coupon eligibility and stacking: [TBD]
Offer migration, repricing and proration: [TBD]
Supported launch jurisdictions/currencies: [TBD]
```

Automatic currency conversion is not a promise that every currency/payment method is available. A
bank or payment provider may apply its own conversion or cross-border fees outside the Paddle total.

## 6. Subscription activation and access authority

Checkout begins from the app after a Company exists. Landing never creates a Paddle Checkout or
activates access.

After checkout, a return or success screen is informational. Paid access activates only when Perelai
receives, verifies and projects an authoritative Paddle webhook for the Company subscription. A
pending, delayed, duplicate or out-of-order event is handled by the billing projection; browser state
cannot grant access.

If confirmation is pending, the app must show `Payment received — confirming access` or another
approved pending message, refresh from backend state and provide recovery/support. It must not promise
that access is active merely because Paddle redirected the browser.

## 7. Renewals and price changes

`[TBD: replace this section with approved values before launch.]`

The purchase review must state whether the Subscription renews automatically, its initial and renewal
period, renewal date/anchor, when recurring Charges are taken and how to stop renewal. Paddle's Buyer
Terms currently provide for recurring renewal until cancellation; Perelai/Paddle notices must satisfy
mandatory territory-specific rules.

The approved policy must define:

- monthly and annual renewal mechanics;
- notice/reminder timing;
- price-change notice, consent where required and the right to cancel;
- proration or credit when an Offer/Company position changes;
- treatment of founding terms; and
- what happens when a Plan/Offer is retired.

No price-lock, `lifetime`, permanent discount or renewal promise may be made unless its scope,
exceptions, duration and successor treatment exist in the catalog and approved Terms.

## 8. Cancellation

The payer may cancel a Paddle Subscription through the Paddle Buyer Portal or another approved route
shown in Billing settings. Under the current Paddle Buyer Terms, cancellation generally takes effect
at the end of the current billing period. Perelai must verify that statement against the applicable
Subscription configuration and mandatory law at launch.

```text
Cancellation route(s): [TBD verified URLs/product path]
Cancellation effective date: [TBD]
Access through paid-through date: [TBD]
Immediate cancellation/termination cases: [TBD]
Reactivation/resubscription: [TBD]
Company closure versus subscription cancellation: [TBD]
```

Cancelling renewal does not itself close the Company, delete Company data, cancel a Customer's End
Client arrangements or refund a prior Charge. Company closure/deletion is a separate authenticated
action under the Terms and DPA.

## 9. Refunds, withdrawals and tax refunds

`[TBD: owner/counsel must approve the commercial refund policy and its interaction with Paddle before
publication.]`

Refund and statutory withdrawal requests use the Paddle channel identified in the Buyer Terms/Buyer
Portal and any Perelai support route stated here. Eligibility may depend on mandatory law, buyer
status/location, timing, Product delivery/use and the reason for the request. Nothing in this Policy
limits rights that cannot lawfully be limited.

```text
Voluntary refund eligibility/window: [TBD]
Annual-plan refund/proration: [TBD]
Duplicate/incorrect Charge process: [TBD]
Service non-delivery remedy: [TBD aligned with Paddle Buyer Terms]
Statutory withdrawal handling/digital-service consent: [TBD by launch jurisdiction]
Refund decision/communication owner and target: [TBD]
Access consequence after full/partial refund: [TBD]
Tax-refund route and evidence: [TBD aligned with Paddle]
```

Do not promise `no refunds`, `money-back guarantee`, automatic prorated refunds or a fixed approval
time without counsel approval and tested provider operations.

## 10. Failed payment, grace and restricted mode

Paddle may retry a failed recurring Charge and may notify the buyer according to its configuration and
Buyer Terms. Perelai changes Company access only from the authoritative billing projection.

`[TBD: approve retry notices, grace length and enforcement timings.]` A billing restriction does not
automatically terminate or delete the Company. The intended restricted surface permits authentication,
logout, reading existing data, billing recovery, safe settings/support, account closure/deletion and
any future separately approved export action. It denies creation of new business value, including new
clients, bookings, requests, orders and imports. New public intake returns a neutral temporary-
unavailable response without revealing the Company's billing state.

The final allow/deny matrix, post-restriction data access and time before any termination/deletion must
be approved and tested before `BILLING_MODE=enforce`.

## 11. Workspace data after cancellation or restriction

Trial expiry, cancellation, failed payment and restriction do not by themselves delete or archive a
Company's data. The [Terms](/legal/terms), [Privacy Notice](/legal/privacy) and [DPA](/legal/dpa) govern
access, export, closure, deletion, backup rotation and legal retention.

Where Workspace Data Export is enabled and permitted by the approved restriction matrix, it provides
an owner a defined Company archive. It is not a full backup or a person-scoped privacy-rights response.

```text
Read-only/recovery period: [TBD]
Export availability in restricted mode: [TBD]
Post-cancellation/post-termination export window: [TBD]
Closure/deletion warning and schedule: [TBD]
Legal/tax/security holds: [TBD]
```

## 12. Billing records, receipts and support

Paddle supplies buyer transaction confirmation/invoices or other documents for the SaaS Transaction.
Those documents are distinct from Perelai Public Receipts and from a Customer's End Client invoices,
Payment Accounts, Payment Allocations, Orders, Instalments or Packages.

Billing support: `[TBD: verified Perelai route/email]`

Paddle buyer support/cancellation/refund route: `[TBD: verified Buyer Portal/help route]`

Perelai legal notices: {{LEGAL_NOTICES_EMAIL}}

For a dispute, identify the relevant Company and Paddle Transaction without emailing full card data,
credentials, checkout links or unnecessary personal data.

## 13. Changes to this Policy

We show the effective date and archive prior versions at `[TBD: archive URL]`. Material changes to
renewal, price, cancellation, refunds or access consequences receive the notice and consent/action
required by the Terms and applicable law. Updating this page does not retroactively alter an already
accepted Transaction.

---

## Internal approval and evidence matrix — do not publish

| Gate | Required evidence/decision | Owner | Blocks |
|---|---|---|---|
| B-01 | immutable public PRIMARY and app ADDITIONAL Offer catalog; exact amounts/intervals | owner + finance | pricing/checkout |
| B-02 | founding cohort, deadline, price lock and successor treatment | owner + counsel | founding copy |
| B-03 | trial trigger, sharing, checkout timing, first charge and reminders | product + counsel | trial launch |
| B-04 | applicable Paddle entities, seller disclosure, Buyer Terms/Privacy links | counsel + procurement | checkout |
| B-05 | `tax_mode=location`, automatic conversion, no launch overrides, supported markets | billing + tax | checkout/pricing |
| B-06 | renewal, repricing, proration and cancellation effective date | owner + counsel | subscriptions |
| B-07 | voluntary/statutory refunds and tax-refund support split | counsel + support | paid launch |
| B-08 | retry, grace, restriction and public neutral response | product + counsel | enforce mode |
| B-09 | post-restriction read/export/closure/deletion and legal holds | privacy + product + ops | enforce mode |
| B-10 | webhook signature/replay/idempotency/projection tests; browser is non-authority | security + billing | paid access |
| B-11 | Paddle data fields, controller roles, locations, retention and transfer map | privacy + procurement | Privacy release |
| B-12 | FOP vendor payout accounting/tax and launch jurisdictions | finance/tax counsel | production |

The `$19/$190` Founding and `$29/$290` Public numbers seen in planning are hypotheses, not approved
facts. A simpler LLM must never copy them into production content without B-01/B-02 approval.
