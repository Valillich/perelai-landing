# Perelai Subprocessor List — English publication template

> **DRAFT — EMPTY/UNVERIFIED LIST; DO NOT PUBLISH AS COMPLETE.** Code identifies candidate services,
> not the contracted legal entity, account region, data location or transfer mechanism. Privacy,
> security and procurement owners must verify every row against contracts and production.

**Version:** `[TBD: immutable publication version]`  
**Effective date:** `[TBD: YYYY-MM-DD]`  
**Last reviewed:** `[TBD: YYYY-MM-DD]`

## About this list

{{LEGAL_PROVIDER_FULL_NAME}}, trading as Perelai, uses the entities listed in the approved table below
to process Customer Personal Data on behalf of business customers. Terms such as `Subprocessor` are
used according to the [Data Processing Addendum](/legal/dpa).

Some third parties may instead act as independent controllers for a particular flow, such as a user's
direct relationship with Google or Paddle as Merchant of Record. Those services are identified
separately and are not mislabelled as subprocessors merely for convenience.

## Approved Subprocessors

> Production publication must contain only verified rows. Do not display `[TBD]`, candidates, or an
> empty table with the words `complete list`.

| Legal entity | Service/function | Personal data/categories | Processing locations | Transfer mechanism/safeguards | Controller context | Last verified |
|---|---|---|---|---|---|---|
| `[TBD]` | application/API hosting | account and Customer Data; technical data | `[TBD]` | `[TBD]` | Perelai subprocessor | `[TBD]` |
| `[TBD]` | PostgreSQL/database hosting | application database records | `[TBD]` | `[TBD]` | Perelai subprocessor | `[TBD]` |
| `[TBD: private object-storage entity]` | object/file storage, if live | imports/files; short-lived Workspace Data Export archives and object metadata | `[TBD]` | `[TBD]` | Perelai subprocessor | `[TBD]` |
| `[TBD]` | Redis/queue infrastructure, if managed/live | task, notification and limited payload data | `[TBD]` | `[TBD]` | Perelai subprocessor | `[TBD]` |
| `[TBD: Resend contracted entity]` | transactional email delivery | recipient, sender, message metadata/content, delivery events | `[TBD]` | `[TBD]` | Perelai subprocessor | `[TBD]` |
| `[TBD]` | error monitoring, if configured | errors, request/user/technical context per scrub rules | `[TBD]` | `[TBD]` | Perelai subprocessor | `[TBD]` |
| `[TBD]` | customer support tooling, if configured | support contact/content and attachments | `[TBD]` | `[TBD]` | Perelai subprocessor | `[TBD]` |
| `[TBD]` | Web Push/notification delivery beyond direct browser protocol, if any | subscription endpoint/keys, message/delivery data | `[TBD]` | `[TBD]` | assess by flow | `[TBD]` |

## Processors of Perelai-controller data

These providers are not Customer Data subprocessors for the listed flows. A separate Customer Data
flow, if introduced, needs its own classification and DPA authorisation.

| Legal entity/service | Function and data | Role | Locations/transfer safeguards | Last verified |
|---|---|---|---|---|
| `[TBD: PostHog contracted entity]` | landing analytics; typed events and approved attribution | processor for Perelai-controller analytics; no client content | `[TBD account region/contract]` | `[TBD]` |
| `[TBD landing hosting/CDN]` | landing request and security data | processor for Perelai-controller website operation | `[TBD]` | `[TBD]` |

## Other material third-party services / independent-controller contexts

| Legal entity/service | Function | Role and reason | Data | Locations/transfer information | Last verified |
|---|---|---|---|---|---|
| `[TBD: Google entities/services]` | Google sign-in and user-enabled Google Calendar | assess separate sign-in controller relationship and any processor activity for Customer imports | account identifiers, OAuth data, calendar event data | `[TBD]` | `[TBD]` |
| `Paddle: applicable buyer contracting entity [verify by purchase location]` | SaaS checkout, subscription, billing, indirect tax, invoice/refund and Buyer Portal | authorised reseller/Merchant of Record and independent controller for the buyer Transaction; assess and document any separate processor flow | buyer identity/contact, business/tax details, payment and fraud data, currency/tax/transaction/subscription/refund status | `[TBD Paddle entity, locations and transfer information]` | PLANNED, NOT LIVE |
| `[TBD: future AI provider]` | AI function | role depends on function/training/retention; separate approval required | `[TBD]` | `[TBD]` | NOT LIVE |

Do not list a provider in multiple tables without explaining the distinct flows. Customer Data
subprocessor notices follow the DPA; a controller-only vendor change instead follows the applicable
Privacy Notice/consent obligations. One brand may serve different roles under different contracts.
Paddle must not be put in the Approved Subprocessors table merely because Perelai receives webhooks.
Use the actual data-role analysis, contracts and Privacy Notice for each flow.

## Subprocessor changes

Business customers may subscribe to change notices at `[TBD: verified subscription mechanism]`.
Perelai gives the notice period and objection/remedy stated in the approved DPA. The production page
must show scheduled changes separately:

| Proposed entity | Function | Intended date | Locations/transfer | Notice date | Objection deadline/contact |
|---|---|---|---|---|---|
| None currently announced / `[TBD]` | | | | | |

Do not use `None` until procurement/deployment audit confirms it.

## Contact

Questions or a reasonable data-protection objection: {{PRIVACY_EMAIL}}  
Legal notices: {{LEGAL_NOTICES_EMAIL}}

## Change history

| Effective date | Version | Change | Notice reference |
|---|---|---|---|
| `[TBD]` | `[TBD]` | initial approved publication | `[TBD]` |

---

## Internal completion checklist — do not publish

For every row, attach an internal record containing:

- signed DPA/terms and exact contracted legal entity;
- services/features enabled in the production account;
- categories, subjects, purpose and least-data configuration;
- primary/backup/support locations and remote-access countries;
- retention/deletion and incident commitments;
- security due diligence and current assurance reports;
- onward subprocessors;
- EEA/UK transfer mechanism, SCC module/annexes and transfer assessment;
- DPF status only if the exact entity and scope are current;
- owner, review date and renewal/termination date; and
- public notice/objection history.

Reconcile at each release and at least quarterly against:

1. infrastructure/deployment configuration;
2. environment variables and outbound DNS/network logs;
3. package dependencies/SDK initialisation;
4. vendor/admin dashboards;
5. finance/procurement records; and
6. support/security runbooks.

The public page should be updateable without editing Privacy Notice prose, but a materially new
purpose/provider still requires review of the Privacy Notice, DPA and consent controls.
