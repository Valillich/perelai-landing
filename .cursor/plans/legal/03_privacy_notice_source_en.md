# Perelai Privacy Notice — English source draft

> **DRAFT — NOT FOR PRODUCTION OR RELIANCE.** This working draft must be reconciled with production
> data flows, retention, vendors and launch jurisdictions, then approved by qualified counsel. It is a
> privacy notice, not a request for blanket consent.

**Version:** `[TBD: immutable approved version]`  
**Effective date:** `[TBD: YYYY-MM-DD]`  
**Last updated:** `[TBD: YYYY-MM-DD]`

## At a glance

Perelai handles personal data in two different ways:

1. We generally act as a **controller** when we decide why and how to process data for our website,
   accounts, authentication, security, support, product analytics, billing (if launched), our own
   communications and legal obligations.
2. We generally act as a **processor** when a business uses Perelai to manage its own clients,
   bookings, requests, operational records and communications. In that case, the business decides why
   it uses the data and should be your first contact for a privacy request about that data.

The detailed notice below controls if this summary is incomplete.

## 1. Scope

This Privacy Notice explains how Perelai handles personal data relating to:

- visitors to perelai.com and related landing pages;
- people who contact us, join a waitlist, participate in a referral or provide beta feedback;
- business owners, account holders, staff users and invited users;
- people using public booking, request, order, reservation, status, receipt, preference or client-hub
  pages made available through Perelai;
- End Clients whose information a business imports or enters into Perelai; and
- people who receive account, service or business communications through Perelai.

Different sections apply depending on your relationship with us. This notice does not replace a
business customer's own privacy notice for its clients or staff.

## 2. Who we are and how to contact us

For processing where Perelai is controller, the controller is:

**{{LEGAL_PROVIDER_FULL_NAME}}**, {{LEGAL_PROVIDER_FORM}}, trading as **{{TRADING_NAME}}**, registered
in {{COUNTRY_OF_REGISTRATION}} under registration number {{REGISTRATION_NUMBER}}, with an address at
{{BUSINESS_ADDRESS}}.

Privacy enquiries and requests: {{PRIVACY_EMAIL}}  
Support: {{SUPPORT_EMAIL}}  
Legal notices: {{LEGAL_NOTICES_EMAIL}}

`[Render only if appointed: Our EU representative is {{EU_REP_NAME}}, {{EU_REP_ADDRESS}},
{{EU_REP_EMAIL}}.]`

`[Render only if appointed: Our UK representative is {{UK_REP_NAME}}, {{UK_REP_ADDRESS}},
{{UK_REP_EMAIL}}.]`

`[Render only if formally appointed: Our data protection officer is {{DPO_NAME}}, {{DPO_EMAIL}}.]`

Do not render an empty or partial representative/DPO sentence.

## 3. Perelai and business customer roles

### When Perelai is controller

We determine purposes and essential means for account creation, authentication, owner/staff profiles,
workspace administration, security, fraud prevention, support, Perelai marketing, referral
attribution, deliberate product/website analytics, service improvement, payer/trial
administration, Company subscription/access records, export security/audit metadata and legal claims
or obligations.

### When the business is controller and Perelai is processor

A business customer generally determines why and how it handles End Client contacts, service history,
bookings, requests, orders, reservations, notes, imported records, payment-status records and messages
sent on its behalf. We process that **Customer Personal Data** under the business's instructions and
our [Data Processing Addendum](/legal/dpa).

When an authorised owner requests a Workspace Data Export, Perelai processes the Customer Personal
Data in that Company archive on the business's instructions. Perelai separately determines limited
security, audit, abuse-prevention and legal-compliance processing needed to create and deliver it.

For a request about Customer Personal Data, contact the business you booked with or that collected
your data first. We will assist it as required. If you cannot identify or reach it, contact
{{PRIVACY_EMAIL}} and tell us the business name and relevant interaction; we will route or handle the
request according to our role and applicable law.

### Other independent controllers

A business remains independently responsible for its services and client relationship. Google,
Paddle, banks, professional advisers and some fraud or identity services may process data under their
own purposes and notices. For a SaaS purchase, the applicable Paddle entity is the authorised
reseller/Merchant of Record and an independent controller for its buyer Transaction. Any separate
processor flow must be assessed on its own facts and must not be hidden under the word `subprocessor`.

## 4. Personal data we handle

The actual data depends on the features used.

### Landing visitors, prospects, waitlist and referrals

- IP/network and approximate location as available to hosting/security infrastructure;
- browser, device, operating system, language, region and technical request data;
- pages, deliberate product interactions and campaign/referral parameters;
- language, theme, region, cookie/storage and privacy preferences;
- contact, waitlist, referral or beta-feedback form content;
- support or other communications with us.

The current landing analytics integration is configured for deliberately defined events, in-memory
SDK persistence, no autocapture, no session replay and SDK-level IP capture disabled. Hosting and
network providers may still receive request IP addresses. Do not interpret this as anonymous browsing
until the complete production flow is verified.

### Account owners, staff and invited users

- name, email, password hash and account identifiers;
- Google sign-in identifiers and profile details returned by the approved sign-in flow;
- phone number if supplied or supported;
- workspace/company name, address and settings;
- role, permissions, invitations and workspace relationships;
- language, country/market, currency, timezone and preference settings;
- authentication, verification, login, security and audit events;
- payer relationship, trial eligibility/start/end, requested OfferCode and limited
  attribution, Company subscription/access projection and billing-management authority if launched;
- provider customer/subscription/transaction references, checkout/portal status, final currency,
  subtotal, discounts, applicable tax, total, refund/cancellation/payment-failure status and limited
  payment-method metadata returned by Paddle `[TBD: verify exact webhook/API fields]`;
- support messages, feedback and legal-document acceptance evidence.

We do not store your plaintext password. `[TBD: security review must approve any more specific hashing
or session-storage statement.]`

### Customer Personal Data controlled by a business

- End Client name, phone, email, address and communication preferences;
- services, categories, appointments, visits and service history;
- requests, orders, reservations and public form submissions;
- notes, staff assignment and `[files, only if verified live]`;
- prices, amounts, payment methods/statuses and allocation records;
- packages, memberships and instalment schedules;
- booking, confirmation, cancellation and no-show history;
- versions of business and Perelai terms accepted for a public interaction;
- records imported from CSV, vCard, calendars or other supported sources.

The business chooses many fields and may add free text. Although our Terms prohibit unsupported
sensitive content, a user may enter it. Do not send medical, diagnosis, treatment, full card,
password, government-ID or similarly high-risk data unless a product flow expressly supports it.

### SaaS Billing through Paddle

SaaS Billing is separate from the Customer's End Client financial records. At Paddle Checkout or the
Buyer Portal, Paddle receives the identity, contact, billing address, tax/business identifiers and
payment details the buyer supplies, plus device/transaction information under Paddle's own
[Privacy Notice](https://www.paddle.com/legal/privacy) and
[Buyer Terms](https://www.paddle.com/legal/buyer-terms). Perelai should receive only the provider references, commercial/transaction
amounts, tax/currency/status and limited buyer/payment metadata required to administer Service access,
support, reconciliation and legal records. `[TBD: reconcile this paragraph with actual Paddle fields,
fraud tooling and production retention before launch.]`

A landing OfferCode is untrusted commercial intent. It is parsed independently of niche and does not
create a payer, trial, subscription or entitlement. Company currency, locale or a marketing-region
preference is not used as authority for the final SaaS transaction currency or tax; Paddle Checkout
determines presentment from its transaction-location signals and shows the buyer the final amounts.

### Google Calendar

The production code reviewed for this draft requests the Google scope
`https://www.googleapis.com/auth/calendar.events.readonly`. Depending on event content and Google API
responses, we may handle:

- the connected Google email/account identifier;
- calendar and event identifiers;
- event title/summary, description, status and timestamps;
- start/end, recurrence and timezone information;
- attendees/contact information and location where included in an event;
- sync tokens, import mappings, last-sync status/errors;
- OAuth access/refresh tokens and token expiry/scope information.

The Service uses this data to connect, preview/import and synchronise calendar activity as configured
by the user. `[TBD: verify exact fields persisted, initial sync window, auto-sync frequency, token
protection and disconnect/deletion behaviour.]`

### Imports

For CSV/vCard and similar imports we may handle the source file, parsed contacts/records, preview
content, mapping choices, errors, job status and import results. `[TBD: verify whether vCard photos are
ignored, whether temporary files are persisted, and exact deletion periods.]` Google Contacts OAuth
must not be claimed unless it is actually implemented and enabled.

The import-modernisation release has unresolved acceptance findings as of 2026-08-23. Do not add
promises about preview scope, destructive cleanup, recovery journals, issue-download completeness or
retention until IM4-C2 and the IM2/IM4 acceptance review prove those behaviours.

### Workspace Data Export and privacy requests

**This feature is planned, not live. Publish this subsection only after EX1 release evidence.** Where
enabled, an authorised Company owner may request a Workspace Data Export containing the defined
operational history for that Company. Planned contents include a manifest and structured JSONL data
with CSV convenience views for supported Company settings, workspace members/staff, clients/notes,
catalog, operational finance, requests/orders/instalments/rentals, packages, payment-account/
allocation records and safe import/communication summaries. The exact manifest at download is the
scope authority.

The archive intentionally excludes passwords, hashes, tokens and secrets; raw import/staging data;
worker internals and security/risk signals; other Companies' data; private information a coworker is
not authorised to receive; and data restricted to protect third-party rights. The planned flow also
handles Company/actor/action identifiers, job status/timestamps, closed reason codes and minimal audit
events; separately approved diagnostics must not contain archive contents or bearer URLs.

Creating and downloading are separate sensitive actions. The plan uses fresh confirmation,
actor/Company/action-bound hashed single-use grants, a private object, notification without an
attachment or download token and a short-lived signed download URL. The artifact is planned to expire
24 hours after readiness, action grants after 10 minutes and the signed URL after at most 5 minutes.
These periods and controls are claims only after production tests/configuration confirm them. Creating,
expiring or downloading the archive does not delete the underlying Company data.

Workspace Data Export supports business continuity and gives the Company a copy of defined
operational data. It is not a `GDPR export` and is not necessarily a complete response to an
individual's access or portability request. A **Privacy Access Export** is a separate verified,
person-scoped process that may require additional contextual information, legal scope/exemptions and
protection of other people's rights. Contact {{PRIVACY_EMAIL}} or the relevant business as described
in §13 rather than treating a Company archive as closure of a privacy request.

### Operational and financial information

Perelai may store amounts, service/category, method/status, account, allocation, revenue/cost/profit
calculations, order balances and instalment schedules. These are business operational records. At the
product stage covered by this draft, Perelai does not receive or hold End Client money and does not
store full card credentials. Re-review this statement before any checkout or payment integration.

### Device, app and notification data

The Service may handle app version, device/browser capabilities, locale/timezone, PWA/service-worker
state, Web Push permission and subscription endpoint/keys, delivery/status events and technical error
data. `[TBD: complete app/booking storage and monitoring audit.]`

## 5. Where personal data comes from

We receive personal data:

- directly from you when you browse, register, configure, submit, contact or choose a preference;
- from a business owner, staff member or other authorised user;
- from an End Client using a public page;
- from a CSV/vCard or other source a Customer imports;
- from Google when a user signs in or connects Calendar;
- from email, notification, hosting, security, analytics and billing providers;
- automatically from a browser, device, request or referral link; and
- from authorities or advisers where needed for law, security or claims.

When a business provides your data rather than collecting it from you directly, that business is
normally responsible for telling you about its processing. Perelai also provides a short notice on
public collection surfaces.

## 6. Why we process data and our legal bases as controller

This table applies where Perelai acts as controller. A business selects its own legal bases for
Customer Personal Data.

| Purpose | Typical data | EEA/UK legal basis, subject to review |
|---|---|---|
| provide and administer an account/Service | account, workspace, settings, essential communications | perform contract; steps requested before contract |
| authenticate and secure the Service | credentials, tokens, device/security events, logs | legitimate interests in security; contract; legal obligation where applicable |
| provide support and resolve incidents | account, support content, diagnostic data | contract; legitimate interests |
| operate public technical surfaces securely | request/network data, abuse signals | legitimate interests; processor instruction for Customer Data |
| deliberate privacy-hardened website/product analytics | defined interaction/technical data | `[TBD by jurisdiction/tool: consent or legitimate interests after balancing/ePrivacy review]` |
| remember requested language/theme/region | preference/browser storage | user request; consent where required by national implementation |
| referral attribution and beta feedback | referral/campaign, feedback | consent or legitimate interests depending on collection/use |
| Perelai marketing | contact and preference data | consent or applicable electronic-marketing permission; legitimate interests only where lawful |
| administer trial, payer relationship, subscriptions and Service access if launched | account, payer, Company projection, Offer and provider status | contract; legitimate interests in reliable entitlement/security |
| administer Paddle buyer Transactions and accounting/tax records if launched | buyer, subscription, transaction, tax, currency, refund/payout records | contract; legal obligation; legitimate interests in reconciliation/claims |
| secure and audit Workspace Data Export if launched | actor/Company/action, job/grant/object status, closed codes, timestamps | processor instruction for archive content; legitimate interests/security and legal obligation for limited controller metadata |
| enforce Terms and legal claims | account, acceptance and usage records | legitimate interests; legal obligation |
| comply with law and valid authority requests | relevant records | legal obligation; public interest where applicable |

Where we rely on legitimate interests, we assess necessity, impact and reasonable expectations. You
may object as described below. Where we rely on consent, you may withdraw it without affecting prior
lawful processing. Refusing optional processing does not block an unrelated core service.

## 7. Processing on a business's instructions

For Customer Personal Data, we process data to host and organise records, provide booking/intake,
imports, reminders and operational features, maintain security, provide support and comply with the
Customer's documented instructions and law. The Customer is responsible for its lawful basis and
notices. The DPA describes instructions, confidentiality, security, subprocessors, assistance,
transfers, deletion/return and audits.

We may process limited Customer Personal Data as an independent controller when necessary to detect
abuse, comply with binding law or establish legal claims. We will limit and document such processing
and update this notice if it becomes material.

## 8. Communications

### Service and transactional messages

These may include verification, password reset, security alerts, invitations, booking/request/order
confirmation or change, reminders, import completion, integration status, payment-status confirmation
and legally required notices. Some cannot be disabled while the relevant account or transaction is
active. Business client messages are generally sent on the business's instructions.

### Marketing

Perelai product news, offers, education and referral campaigns are marketing. We use the legally
required permission/exception and provide an unsubscribe method. A Customer is responsible for its
own End Client marketing choices. Marketing controls are separate from accepting Terms and from
necessary transaction messages.

## 9. Cookies, local storage and analytics

We use cookies and similar browser storage for requested preferences, session/security functions,
short-lived acquisition context and, where configured and lawfully enabled, analytics. The current
verified landing examples include a language cookie, theme local storage, session attribution storage,
region preference storage and privacy-hardened PostHog event delivery.

See the [Cookie and Similar Technologies Policy](/legal/cookies) for names, purposes, providers and
durations. Non-essential storage or access is not enabled before the required choice in jurisdictions
that require consent. `[TBD: complete audit for app and booking origins before approving this claim.]`

## 10. Sharing and recipients

We disclose personal data only as needed for the purposes above to:

- hosting, CDN, database, object-storage and queue/infrastructure providers;
- email and notification delivery providers;
- Google for sign-in/Calendar at the user's request;
- analytics and error-monitoring providers when configured;
- support tools;
- Paddle as the planned authorised reseller/Merchant of Record and independent controller for SaaS
  buyer Transactions, plus any separately assessed billing/tax processors if launched;
- professional advisers, insurers and auditors under confidentiality;
- a buyer or successor in a genuine restructuring/transaction, subject to safeguards and notice where
  required; and
- authorities or other persons where we reasonably believe disclosure is legally required or needed
  to protect rights, security and users.

We do not sell Customer Personal Data. We do not share data with unspecified `trusted partners` for
their unrelated marketing. The current vendor, entity, purpose and processing-location list is at
[Subprocessors](/legal/subprocessors). `[TBD: list must be completed before release.]`

## 11. International transfers

Perelai's provider is registered in Ukraine and users/providers may be in different countries. Data
may therefore be transferred outside the country where it was collected. For transfers restricted by
EEA/UK data law, we use an applicable adequacy decision, approved contractual clauses (such as the
European Commission SCCs and, where required, a UK Addendum/IDTA), or another lawful mechanism,
together with supplementary measures where appropriate.

`[TBD: replace this generic paragraph with the verified transfer map, relevant modules/mechanisms and
means to request a copy. Do not state a Data Privacy Framework certification without checking the
specific legal entity and current register.]`

## 12. Retention and deletion

We keep data for the shortest period reasonably needed for its purpose, contract, security and legal
requirements, then delete or de-identify it. That principle is implemented through category-specific
rules, not an indefinite licence.

| Category | Active retention | Deletion/backup rule |
|---|---|---|
| account/profile | `[TBD]` | `[TBD]` |
| legal acceptance evidence | `[TBD: limitation/legal period]` | restricted archive `[TBD]` |
| workspace and End Client records | Customer instruction/contract `[TBD]` | `[TBD active + backup]` |
| imports and previews | `[TBD hours/days]` | source deletion `[TBD]` |
| Workspace Data Export artifact | planned 24 hours from READY `[verify]` | purge private object; verify storage versions/backups/orphan sweeps |
| export create/download action grants | planned 10 minutes and single use `[verify]` | revoke/delete hash and associated transient state `[TBD]` |
| export job and PII-minimised audit metadata | planned default 12 months; legal approval required | deletion/legal hold `[TBD]` |
| failed/staging export objects | planned immediate cleanup `[verify]` | worker retry/orphan cleanup `[verify]` |
| Google tokens | until disconnect/expiry `[verify]` | revoke/delete `[verify]` |
| security/access logs | `[TBD]` | delete/aggregate `[TBD]` |
| support messages | `[TBD]` | `[TBD]` |
| notifications and system task records | category-specific env/jobs `[verify]` | `[TBD backups]` |
| payer/trial/subscription/access records | contract/claims period `[TBD]` | delete or restricted archive `[TBD]` |
| Paddle transaction/tax/refund and vendor payout records | applicable accounting/tax/claims period `[TBD]` | restricted archive |
| PostHog events | `[TBD project retention]` | `[TBD]` |
| public confirmation/status/access tokens | `[TBD]` | invalidate/delete `[TBD]` |
| backups | `[TBD cycle]` | rotational deletion `[TBD]` |

This table is a release blocker. Do not publish the draft table or replace it with only `as long as
necessary`. Legal holds may temporarily override ordinary deletion for specified records, with access
restricted to that purpose.

## 13. Your privacy rights

Depending on your location and the processing, you may have rights to:

- obtain information and access;
- correct inaccurate data;
- request deletion;
- restrict processing;
- receive portable data;
- object, including to direct marketing and certain legitimate-interest processing;
- withdraw consent at any time;
- receive information about relevant automated decision-making; and
- complain to a competent data-protection authority or seek a judicial remedy.

For Perelai controller data, contact {{PRIVACY_EMAIL}}. For Customer Personal Data, first contact the
business you dealt with; we will assist it. We may request information needed to verify identity and
protect others. We respond within the time required by applicable law and explain if an exception or
extension applies. Exercising a right is free unless a law permits a reasonable response to manifestly
unfounded or excessive requests.

You may complain to the supervisory authority where you live or work or where an alleged infringement
occurred. `[TBD: after establishment analysis, identify any lead/primary authority and Ukraine contact
where appropriate without suggesting exclusive jurisdiction.]`

Downloading a Workspace Data Export does not waive, replace or automatically fulfil these rights. In
particular, access can require a copy plus information about purposes, categories, recipients,
retention and safeguards, while portability has its own scope and conditions. We verify the requester,
separate Perelai controller data from business-controlled Customer Personal Data, consider exemptions
and protect the rights and freedoms of others. Regional laws, including applicable US state laws, may
create different request categories and response requirements.

Regional laws may provide additional rights. Do not add a California `Do Not Sell or Share` claim or
other regional section until threshold and practice analysis is complete.

## 14. Security

We use technical and organisational measures designed to protect data in view of its nature, scope and
risk. These may include access controls, tenant/role permissions, transport security, password hashing,
backups, monitoring, confidentiality and incident procedures, but only measures verified in the
approved security schedule will be described in the production notice.

No internet service is completely secure. Do not publish claims of `military-grade`, `bank-level`,
zero-risk security, encrypted-at-rest tokens or certification without current scope-specific evidence.
Please report suspected security issues to `[TBD: approved security contact/process]` without including
unnecessary personal data.

## 15. Personal data breaches

We maintain an incident process and will notify affected controllers, authorities and/or individuals
as required by our role and applicable law. As processor, we notify the relevant Customer without
undue delay after becoming aware of a Customer Personal Data breach and provide information reasonably
available to assist its duties, as described in the DPA. `[TBD: verify operational channel and internal
targets before approval.]`

## 16. Sensitive data and regulated uses

Perelai is not designed as a medical/clinical records or full payment-card storage system. Customers
and users must not intentionally upload diagnoses, treatment records, genetic/biometric data,
health-insurance details, full card numbers/authentication data, passwords, government identity
documents or other unsupported high-risk data.

Because free-text and upload fields may receive unexpected content, we cannot state that we `never
collect` sensitive data. We may restrict or delete unsupported content consistent with the Terms and
law. A regulated or sensitive-data feature requires a separate privacy/security/legal assessment and,
where appropriate, explicit contract before launch.

## 17. Children

Business accounts are only for people aged 18 or older. Public pages are not directed to children for
independent use. A parent or guardian may provide a child's information to a business where lawful and
necessary for the requested service. The business is responsible for the appropriate legal basis,
notice and safeguards.

Perelai is not approved for medical, educational or other specially regulated child records. If you
believe a child provided data contrary to these rules, contact the relevant business and/or
{{PRIVACY_EMAIL}}.

`[TBD: counsel must confirm age/parent rules for actual service verticals and launch countries.]`

## 18. Automated processing and AI

Perelai does not currently make decisions that produce legal or similarly significant effects about a
person solely through automated processing. `[Owner must reconfirm at each release.]`

Before production AI is enabled, this notice, Terms and Subprocessor List must identify the function,
provider, input data, purpose, legal basis, retention, model-training policy, human review,
opt-out/disable controls, profiling and likely effects. Customer Personal Data must not be used for
shared model training by default.

## 19. Changes to this notice

We may update this notice to reflect changed processing, providers, law or Service features. We show
the effective date and archive prior versions at `[TBD: archive URL]`. We give advance or prompt notice
of material changes as appropriate. If a new purpose requires consent or another action, we obtain it
before that processing rather than treating continued use as blanket consent.

## 20. Contact

Privacy requests: {{PRIVACY_EMAIL}}  
Support: {{SUPPORT_EMAIL}}  
Postal address: {{BUSINESS_ADDRESS}}

If your request concerns a business customer's client record, include the business name and enough
context to locate the correct controller, but do not email passwords, full card data or unnecessary
sensitive information.

---

## Assumptions and mandatory legal review notes — do not publish this section as the notice

1. Complete the controller/processor analysis against actual behaviour; labels alone are insufficient.
2. Resolve Ukrainian provider operations, possible Polish/EU establishment, EU representative and UK
   position before launch targeting.
3. Complete Articles 13/14 information, legitimate-interest assessments and local electronic-marketing/
   cookie analysis.
4. Replace all vendor, location, transfer, retention, deletion and security unknowns with evidence.
5. Verify public booking first-communication/indirect-collection notice timing.
6. Review high-risk/regulated verticals and any files/AI feature separately.
7. Do not publish regional addenda merely for marketing; add only after applicability review.
8. Paddle/Billing and Workspace Data Export sections are architecture-informed drafts, not live-fact
   claims. Reconcile exact fields, entities, locations, roles, retention and UI before enabling them.
9. Keep Workspace Data Export distinct from a Privacy Access Export in product copy, support runbooks,
   request metrics and legal response evidence.
