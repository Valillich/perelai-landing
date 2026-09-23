# Simple legal setup for public booking — 2026-09-23

**Implementation decision following the owner's request.** Applies to public booking without
on-page card collection, acquiring or automatic charges. This supplements launch minimum 14 and
supersedes blanket custom-policy URL/checkbox requirements in 00/08/09 and the interim gates
recorded in 16/18 for the standard flow below. It does not approve a legal template, change a live
flag, or declare the UX implemented. Country/language, provider and retention facts still come from
the existing launch packet; review one reusable template there, not a separate legal project for
each SOLO owner.

## 1. Decision and limits

- **An empty Business Refund Policy must not block a booking with no prepayment, deposit or
  cancellation fee.** Do not show it as a required field, red warning or incomplete setup task.
  The SaaS Refund & Cancellation Policy at `/legal/billing` remains separate and unchanged.
- No on-page payments does not establish whether a business takes deposits elsewhere, sells prepaid
  packages or has paid-service refund obligations. Ask about the terms of this booking when choosing
  the standard flow. Do not claim that all refund/consumer rights or all offline payment disputes
  disappear. Payment records and public receipts are not payment processing.
- A privacy notice is information, not blanket consent. A short first layer plus accessible full
  information can work; a single paragraph saying “you consent” is not a complete GDPR notice.
  Do not claim the GDPR universally requires an external Privacy Policy URL or a cancellation checkbox,
  or that Perelai automatically becomes an accomplice without them.
- A polite cancellation reminder is useful product copy, not a universally mandatory legal contract
  or a proven no-show remedy. It needs no extra required checkbox in the standard flow.
- SOLO and STUDIO receive the **same easy setup and privacy protection**. Custom policies are optional
  for either plan; STUDIO does not mean mandatory legal paperwork or one policy per performer.

## 2. Current UI and the replacement

Current source: `/settings/booking-card` → settings gear → `PublicBookingSettingsSheet` →
“Legal & policies”. It renders 11 raw fields, including policy URLs and `legalPolicyVersion`.
Current API gates on custom booking/cancellation disclosures and a Business Privacy Notice URL;
refund absence is diagnostic only and does not itself drive `BLOCKED`.

Keep this entry point and add a contextual “Подготовить страницу записи” action when sharing/enabling
an unprepared page. Replace the raw-field wall with **“Информация для клиентов”** and three compact
groups, ending with **“Посмотреть как клиент” → “Сохранить и включить запись”**. Saving a draft remains
possible at any point. Do not block the owner's internal calendar, existing bookings or data access.

| Group | Simple owner interaction | Product responsibility |
|---|---|---|
| Кто оказывает услугу | Confirm legal/provider name, country and a monitored public contact; reuse existing profile values as suggestions | Distinguish display brand from actual person/entity. Ask only for missing applicable identity/address facts; do not silently publish account/private contact data |
| Запись и отмена | Choose “Без предоплаты и платы за отмену” or “У меня другие условия”; optional reminder timing: as soon as possible / preferably 12 h / preferably 24 h | The default reminder has no deadline or penalty. A selected 12/24-hour preference creates no automatic fee, charge or forfeiture |
| Данные клиентов | Preview the prepared Business Privacy Notice and confirm that its factual description matches the business | Build the notice from an approved versioned template plus confirmed facts and the actual service configuration; show a link to the full notice without requiring an external website |

Name the common contact “Контакт для клиентов”; initially reuse it for privacy enquiries. A separate
privacy contact and additional business details live under “Дополнительно”. A SOLO user sees their own
provider details; a studio sees the business identity and shared contact. The same entity can use the
same confirmed facts across its locations, but never copy another Company's identity silently.
Use existing owner/authorised management permissions; this UX grants no new powers to staff.

The owner explicitly confirms the standard assumptions before publishing. Do not silently assign
“no cancellation fee” to a business with existing terms. A short factual confirmation is sufficient;
do not ask the owner to certify GDPR compliance or obtain a lawyer's certificate.

## 3. Two policy paths

### Standard: booking without prepayment or cancellation fees

No custom Booking Terms URL, Cancellation Policy URL, Refund Policy or manually entered policy version
is required. The owner selects prepared information and a reminder; Perelai stores the exact resulting
text and generates version/date internally. This is selected, fact-based copy, not invented business
facts. A lawful business privacy notice is still presented through the generated-notice path below.

Illustrative cancellation copy, for template review:

> Если планы изменились, сообщите об отмене или переносе как можно раньше: [контакт].
> Для этой записи предоплата и плата за отмену не предусмотрены.

Use that second sentence only after the owner confirms it for this flow. Always distinguish the
platform fact “На этой странице оплата не принимается” from a business promise about when/how the
underlying service is paid for. Do not change package redemption, existing deposits or previous
service contracts through this setup.

### Custom: materially different service/payment terms

“У меня другие условия” reveals existing text/URL fields with human labels and examples. Ask only for
applicable terms: external deposit/prepayment, cancellation/no-show fee, prepaid-package use or other
material service conditions. Refund/cancellation details become relevant when that selected flow
involves money; do not infer a Perelai checkout or force a separate Refund Policy URL if the applicable
information is already in the displayed service terms.

The owner may use the generated privacy notice or their own notice in either path. Optional own
documents are available to both SOLO and STUDIO. Existing custom terms are preserved; switching to
the standard path requires explicit confirmation. No generator invents a valid penalty, non-refundable
deposit or waiver of statutory rights. Unsupported custom terms stay in draft while the owner can
choose the standard no-fee flow, if that truthfully describes the service.

Apply mode-specific formation/confirmation copy for APPOINTMENT, REQUEST, ORDER and RENTAL. The simple
no-money criterion alone does not establish whether an underlying contract is formed or displace
mode/country-specific consumer information; reuse 05 and the approved first-market templates.

## 4. Privacy without asking the owner to write legal text

The first layer identifies the Business, the booking purpose and Perelai's service role, with a public
contact and a visible **“Как используются мои данные”** link/expander. It appears before submission,
not only in the footer or confirmation email. Example summary for review:

> [Имя/бизнес] использует ваши контактные данные для оформления и ведения записи и сообщений о ней.
> Запись работает через Perelai. Вопросы о данных: [контакт]. Как используются мои данные.

This is a summary, not the whole notice. The complete reusable notice must cover applicable controller
identity/contact, data and purposes/legal bases, recipients/processors and transfers, retention periods
or meaningful criteria, rights/complaint route and required/optional data and consequences. Include
additional required information when applicable. Explain actual client-record/history processing;
do not promise “only one phone call”, “never shared” or automatic deletion that the system does not do.

The platform team supplies the common facts and reviewed wording once for the served market/language:
Perelai's role, providers/transfers, actual processing and workable retention/rights procedures. The
owner confirms business-specific facts and chooses a supported retention profile if needed; they do
not choose legal bases or invent durations in a free-text box. Retention criteria must match actual
business instructions and deletion/return operations, including any approved manual procedure.
Do not fill unresolved platform facts with guessed defaults.

Render the full generated Business notice on the public booking origin in an accessible expandable
section or document view. Give it a stable, token-free address usable without login or a booking token;
retain its exact versioned text for evidence. An existing adequate external notice remains an option.
Perelai's own Privacy Notice does not replace the Business notice. No mandatory “consent to Privacy
Policy” checkbox: record presentation/acknowledgement separately from contractual assent. Marketing
and any supported consent-based extra purpose remain separate, optional and disabled unless supported.

## 5. Client UX, gates and evidence

For a standard booking show provider/contact, the short cancellation reminder, the layered privacy
information and the existing separate Perelai Booking Terms acceptance. **No additional required
Business-policy checkbox** merely for the reminder. Custom material terms require the appropriate
separate agreement only where the approved formation model calls for it. Status/receipt pages ask
for no fresh agreement. Do not label a displayed reminder as an accepted contract in evidence.

| Situation | Required behaviour |
|---|---|
| Standard flow, confirmed facts, valid generated notice, approved Perelai terms/copy | Ready, even with empty external privacy/booking/cancellation/refund URLs |
| No prepayment/fee; refund fields empty | Not applicable; no blocking error or “missing policy” warning |
| Cancellation timing not selected | Use the selected standard no-fee reminder without an invented 12/24-hour deadline |
| Required identity/contact facts missing | Owner sees the exact missing field and a direct fix action; keep setup as draft |
| No usable generated or external Business notice | Do not accept new public submissions; guide owner to the simple notice setup, not “hire a lawyer / paste a URL” |
| Platform template, Perelai approval/version or shared privacy facts unavailable | Platform readiness issue: explain to owner, keep drafts, resolve centrally; no impossible field for owner to fill |
| Custom terms selected but applicable information incomplete | Ask for the specific missing disclosure; allow explicit change to a truthful standard flow |

These are scoped product readiness rules, not a claim that GDPR dictates this exact UI. Once the
standard template has been approved and implemented, replace the blanket `businessAgreementDocumentsComplete`
URL gate and URL-only privacy gate with these rules. Do not enable the global missing-policy warning
flag as a substitute for a real Business notice. An invalid legacy policy URL cannot be silently
replaced by a standard policy that the owner has not selected.

Keep server-authoritative `legalRevision` validation and append-only evidence. Include selected path,
template/notice versions, confirmed business facts, reminder/custom terms actually shown, Perelai
versions and the immutable rendered disclosure snapshot. Do not fabricate `BUSINESS_TERMS` acceptance
when no contractual Business agreement was requested. Keep the current distinction between captured
inline text and external URLs whose remote contents were not captured. Reject a stale revision before
booking/client/token/evidence writes and show the changed information for review again.

## 6. Bounded implementation and checks

1. Within the existing first-market launch packet, approve one reusable standard notice/copy set and
   actual retention/provider facts. This is a Perelai release dependency, not an individual merchant
   obligation to draft legal documents. No new global legal/CMP project.
2. Extend structured settings/DTOs for the selected path, confirmed template inputs and a generated
   notice; implement the compact UI in `PublicBookingSettingsSheet`. Hide raw version identifiers.
3. Update shared API/web readiness, public notice rendering and evidence snapshots together. Preserve
   custom/legacy settings, existing records and tenant/role boundaries. Do not auto-enable public intake.
4. Test SOLO and STUDIO completion with no policy URLs or refund text; exact generated notice/privacy
   presentation; no required reminder/privacy checkbox; applicable custom-deposit disclosures;
   partial template/identity refusal before writes; stale revision; tenant permissions; each enabled
   booking mode; legacy custom-policy preservation. Review mobile, keyboard and screen-reader flows.

No payment integration, automated refunds, separate salon website, new consent-management service,
policy version editor, general-purpose legal chatbot or full document editor is required.

## 7. Sources checked on 2026-09-23

- [EDPB: transparency and the right to be informed](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en)
  explains information at collection and layered notices. The proposed two-layer UI follows that
  approach; it does not certify a specific template's completeness.
- [EDPB: lawful processing](https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en)
  distinguishes consent, contract necessity and other legal bases. Consent is not automatically the
  right basis for routine booking; the template must reflect actual purposes.
- [EDPB-endorsed transparency guidance](https://www.edpb.europa.eu/documents/guideline/article-29-working-party-guidelines-on-transparency-under-regulation-2016679_en)
  supports concise, accessible information with further detail available to the individual.

The no-payment/refund-field and cancellation-reminder rules above are scoped product decisions,
not a universal exemption from service-contract or consumer law.
