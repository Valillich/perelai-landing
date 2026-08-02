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
attribution, deliberate product/website analytics, service improvement, billing records and legal
claims or obligations.

### When the business is controller and Perelai is processor

A business customer generally determines why and how it handles End Client contacts, service history,
bookings, requests, orders, reservations, notes, imported records, payment-status records and messages
sent on its behalf. We process that **Customer Personal Data** under the business's instructions and
our [Data Processing Addendum](/legal/dpa).

For a request about Customer Personal Data, contact the business you booked with or that collected
your data first. We will assist it as required. If you cannot identify or reach it, contact
{{PRIVACY_EMAIL}} and tell us the business name and relevant interaction; we will route or handle the
request according to our role and applicable law.

### Other independent controllers

A business remains independently responsible for its services and client relationship. Google,
payment/Merchant of Record providers if later used, banks, professional advisers and some fraud or
identity services may process data under their own purposes and notices. Their role must be assessed
for each flow and must not be hidden under the word `subprocessor`.

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
- subscription, plan, billing, tax and payment-status data if billing launches;
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
| billing, tax and records if launched | customer/billing/transaction records | contract; legal obligation |
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
- billing, tax, Merchant of Record or payment providers if launched;
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
| Google tokens | until disconnect/expiry `[verify]` | revoke/delete `[verify]` |
| security/access logs | `[TBD]` | delete/aggregate `[TBD]` |
| support messages | `[TBD]` | `[TBD]` |
| notifications and system task records | category-specific env/jobs `[verify]` | `[TBD backups]` |
| billing/tax records | applicable legal period `[TBD]` | restricted archive |
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
