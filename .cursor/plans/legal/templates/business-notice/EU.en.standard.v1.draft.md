# European Union · English · standard appointment/request notice

**Prepared:** 2026-09-24. **Status:** DRAFT, not an approved registry entry.
**Coverage:** EU member countries, subject to the selection/eligibility rules in [README](README.md).
**Language:** en. **Candidate source identifier:** `business-booking-EU-en-v1`.
**Proposed effective date:** 2026-10-01; confirm when the completed version is approved. `EU` identifies the shared source, not a Company's country.
**Modes/profile:** APPOINTMENT/REQUEST; ordinary non-medical services; standard no-fee assumptions.
Same text for SOLO and STUDIO, with the actual business's confirmed facts.

This is the proposed default English source for eligible EU countries without a more specific
approved default. It supplies the common GDPR structure; it does not establish that English alone
is suitable for every local audience or replace applicable national service/consumer disclosures.
Perelai completes common facts and any necessary country variation centrally. The owner confirms
their business facts and that the prepared information fits the service and clients.

**Operator facts updated:** 2026-09-24 from the supplied extract and owner confirmation; see [README](README.md#completed-operator-block--2026-09-24). Remaining processing/provider slots are unresolved; this is still a draft.

**MVP policy, owner accepted 2026-09-24:** reuse the [shared baseline](README.md#shared-mvp-baseline--owner-accepted-2026-09-24) and applicable local additions. Company deletion is planned within 30 days of a confirmed authorised instruction; residual backups within 30 days after active deletion (ordinary total at most 60). Verify execution before publication. The retention slot still needs ordinary client-record periods/criteria and exceptions; these closure limits do not replace them or individual-rights deadlines.

## `summary` — before submission

```text
{{BUSINESS_NAME}} is the controller of your personal data. We use your contact and appointment details to handle your request, maintain the related client record and contact you about your booking. We use Perelai to help provide this service. Privacy questions: {{PRIVACY_CONTACT_EMAIL}}. Read the full notice below for our purposes and legal bases, recipients, retention periods and your rights.
```

**Full-notice link label:** `How we use your personal data`.
Show the summary and token-free full-notice link before submission. Present any information needed
for earlier technical collection at that collection point; a form notice does not fix undisclosed
tracking. The full notice must remain readable without login or a personal booking token.

## `fullText` — complete Business notice

```text
Personal data notice for booking

1. Who is responsible for your data

{{BUSINESS_NAME}} is the controller responsible for your booking information and related client record. For booking questions, contact {{CONTACT_EMAIL}}. For questions or requests about personal data, contact {{PRIVACY_CONTACT_EMAIL}}.

{{BUSINESS_CONTACT_DETAILS}}
{{DATA_PROTECTION_CONTACT_BLOCK}}

This notice covers booking through Perelai and our related client administration. It does not replace information about separate activities, such as medical records or cameras at our premises, if those activities take place. The effective date and version appear above.

2. Information we use and where it comes from

We use the information you provide, such as your name, email address, phone number and message, together with details of your selected service, appointment, service provider and communication language. We record the request's status and history, related communications, and the terms presented and any acceptance recorded. Your request may be linked to an existing client record we hold for you. We also record updates made while handling your booking and service.

The form identifies the information needed to send your request. The ordinary public booking process requires an email address to handle and confirm a booking. An individual booking link may use information already held in your client record. Without the information needed for the selected process, we cannot complete your online request. Additional details are optional. Please do not include health information or other sensitive information in a message.

{{BOOKING_TECHNICAL_DATA_PARAGRAPH}}

3. Purposes and legal bases

We use information to handle your request, arrange or change an appointment, communicate about it and provide the agreed service. This processing is necessary to take steps at your request before entering into a contract or to perform that contract, under Article 6(1)(b) GDPR.

We maintain a limited client-service history to help handle repeat visits and keep the records needed to resolve disputes and establish, exercise or defend legal claims. These purposes rely on our legitimate interests in continuity of client service and protecting our legal rights, under Article 6(1)(f) GDPR. The scope and duration are limited as explained below. You can object to this processing on grounds relating to your particular situation.

We process privacy-rights requests to meet our obligations under the GDPR, under Article 6(1)(c). Submitting a booking does not by itself give permission for promotional messages or unrelated uses of your information. This notice provides information; it is not a request for blanket consent.

4. Who receives information

People authorised to arrange or provide your service can access the information needed for their tasks.

Perelai is operated by ILLICHOV VALERII (registered in Ukraine as ІЛЛІЧОВ ВАЛЕРІЙ ВАЛЕРІЙОВИЧ), an individual entrepreneur (FOP) registered in Ukraine, trading as “Perelai”. For booking and related client administration, the operator processes personal information on our instructions.

Ukrainian tax identification number (RNOKPP): 3278516853.
Ukrainian Unified State Register (EDR) entry number: 2001010010001028235.
Registered business address: Zamarstynivska 170E, apartment 68, Lviv, 79068, Ukraine.
Perelai support, privacy and legal enquiries: support@perelai.app.

{{PERELAI_SERVICE_PROVIDERS_PARAGRAPH}}

We may provide necessary information to an authorised public authority when legally required. The Perelai operator explains its separate processing purposes in its own privacy notice: {{PLATFORM_PRIVACY_URL}}. That notice does not replace this business's notice.

5. Transfers outside the European Economic Area

{{INTERNATIONAL_TRANSFERS_PARAGRAPH}}

6. How long we keep information

{{RETENTION_PARAGRAPHS}}

7. Your rights

You can request access to your personal data and a copy of it, correction of inaccurate information, erasure or restriction of processing. You may also request portability of data where the GDPR's conditions are met. For processing based on legitimate interests, you can object on grounds relating to your particular situation. If a separate processing activity relies on consent, you may withdraw that consent without affecting the lawfulness of earlier processing.

To make a request, contact {{PRIVACY_CONTACT_EMAIL}}. We may need proportionate information to verify your identity and protect another person's data. Rights have conditions and exceptions; for example, some information may still be needed for legal claims. If we cannot fulfil your request in full, we will explain why.

You may lodge a complaint with a competent data protection supervisory authority, in particular in the EU member country where you usually live, work or where an alleged infringement occurred. You do not have to contact us first. National authorities and their contact details are listed here: https://www.edpb.europa.eu/about-edpb/our-members_en. Select the relevant national authority from that directory to contact it about a complaint.

8. Automated decisions

{{AUTOMATED_DECISIONS_PARAGRAPH}}

{{EU_COUNTRY_PRIVACY_BLOCK}}
```

## `standardReminder` — separate from the privacy notice

### `ASAP`

```text
Plans changed? Please let us know as soon as possible if you need to cancel or reschedule: {{CONTACT_EMAIL}}. No prepayment is required for this booking, and we do not charge cancellation or no-show fees. This page does not accept payments.
```

### `PREFER_12H`

```text
If you need to cancel or reschedule, please let us know at least 12 hours ahead when possible: {{CONTACT_EMAIL}}. This helps us plan our schedule; there is no fee for giving less notice. No prepayment is required for this booking, and we do not charge cancellation or no-show fees. This page does not accept payments.
```

### `PREFER_24H`

```text
If you need to cancel or reschedule, please let us know at least 24 hours ahead when possible: {{CONTACT_EMAIL}}. This helps us plan our schedule; there is no fee for giving less notice. No prepayment is required for this booking, and we do not charge cancellation or no-show fees. This page does not accept payments.
```

**Free-text field hint:** `Please do not include health information or other sensitive information.`

### Proposed Company-closure clause — internal, not in `fullText`

This clause is a drafting component for `RETENTION_PARAGRAPHS`, **not approved public copy**.
Use it only after the 30/30 procedure, backups and restore suppression are evidenced. It does
not define retention while a client record remains in an active business workspace or override
individual-rights deadlines.

> After an authorised and confirmed instruction to delete this business workspace, Perelai
> deletes in-scope customer personal data from active systems without undue delay and within
> 30 calendar days. Residual backup copies are kept out of ordinary use and deleted within
> 30 calendar days after active deletion, and no later than 60 calendar days after the
> confirmed instruction. Only particular records subject to a documented, applicable
> retention duty or valid claim may be retained separately with restricted access for that
> purpose.

## Completion and default-selection notes — internal, never render

- Use the common slot definitions in README. Complete `BOOKING_TECHNICAL_DATA_PARAGRAPH` with the
  actual automatic collection attributable to this business's booking processing, including the
  categories, purposes and legal bases where applicable. Explain which separate platform processing
  is covered by Perelai's notice. Do not assume the app has the landing's tracking configuration.
- `EU_COUNTRY_PRIVACY_BLOCK` contains any additional approved privacy information for the actual
  country/profile, with a heading when nonempty. It may be empty when the shared text is sufficient
  and the applicability decision is recorded. It is completed centrally, not a new legal-text field
  for owners. Do not introduce a country-specific retention term without an operable procedure.
- The common complaint wording deliberately links to the official directory rather than assigning
  Poland's UODO to all countries. The EDPB directory is a way to find an authority, not itself the
  complaint recipient. Add a direct national-authority link in the country block where useful.
- Check the intended audience's language. An English-only notice is appropriate only where it is
  understandable to that audience; targeting clients in another language may require a reviewed
  translation. A salon owner's ability to read English does not establish the clients' understanding.
  Do not add a compulsory client checkbox claiming English comprehension as a workaround.
- Retain national-default priority, exact-version references, custom notices and existing owner
  choices as specified in README. `country = EU` does not work with the current exact-country
  renderer. Reuse this source to prepare country-specific approved entries/default references;
  do not remove country validation or use an all-country wildcard.
- The source is limited to eligible EU member-country businesses/flows. It is not the default for
  the UK, Switzerland, Ukraine, the US or non-EU EEA countries. A business elsewhere may be subject
  to GDPR, but that fact alone does not select this default or resolve territorial obligations.
- Keep the actual legitimate-interest assessment, controller/processor arrangements, EEA transfers
  and purpose-specific retention in the shared review packet. No approval or hosting/safeguards
  claim follows from the source name. Review indirect-source transparency separately if importing
  client records or collecting for third parties; this notice does not alone close those duties.
- These are privacy and no-fee reminder texts, not a harmonised EU service contract. National
  service/consumer rules, identity disclosures and mandatory remedies still apply where relevant.
  No separate Refund Policy field is needed for the defined no-money booking flow; previously paid
  services/packages and custom fees are outside its assumptions.

## Primary sources checked on 2026-09-24

- [EDPB-endorsed transparency guidelines, especially paragraphs 9 and 13](https://www.edpb.europa.eu/system/files/2023-09/wp260rev01_en.pdf)
  — intelligibility for the intended audience and translations where needed.
- [EDPB: lawful processing](https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en)
  — purposes and corresponding legal bases.
- [EDPB: information and individual rights](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en)
  — layered notices and applicable rights.
- [EDPB: national supervisory authorities](https://www.edpb.europa.eu/about-edpb/our-members_en)
  — authoritative contact directory.
- [European Union: member countries](https://european-union.europa.eu/principles-countries-history/eu-countries_en)
  — membership for the EU default-selection group; this is not the same group as the EEA or Schengen.

These sources inform the common structure. Complete actual facts and the relevant language/country
applicability review before registry activation; drafting this file does not approve a release.
