# MVP market access and completed Polish pilot

**Owner update, 2026-09-25 (supersedes the active-pilot premise below):** The
Polish pilot has ended; the owner reports **zero active EU users**. The former
Polish account remains a distinct return/deletion/retention case. If the service
has ended, arrange closure under the contract and controller instructions; do
not wait indefinitely for a separate erasure request or delete without authority. Neither inactivity nor closing new registration is evidence that
its data, backups, legal records or access have been erased. Historical analysis
below describes the earlier active-pilot state and must not be read as current
usage evidence. The owner now selected UA and US `PUBLIC`, all other catalog
countries `CLOSED`, for the code admission gate. This is a product access
decision, **not** approval of draft legal templates or production release.

**Date:** 2026-09-25. **Status:** owner scope selected; admission code reviewed with open findings.
[Review 23](23_market_gate_review_and_release_unblocking_20260925.md) is the current implementation
assessment and next-step checklist. No deployment, deletion or template publication is established
by this document. The earlier PL/en + UA/uk direction and US invitation-only proposal are historical.

## 1. Earlier Polish use and current closure

The owner previously confirmed one person in Poland used Perelai free of charge with **real client data**.
The pilot has now ended according to the owner. The following assessment explains that earlier use
and the remaining closure obligations; it is not evidence of a currently active user.
The owner reports no stable place of business in the EU. Operator registration remains the
Ukrainian FOP in register 01; actual global support/admin access remains as declared there.

Treat this as an existing production-like personal-data flow, not a synthetic demo. Free access,
an invitation, a private URL or a “beta” label does not remove applicable duties. Assess Perelai's
own account/service processing and its processing for the Polish Business separately; a Business
being subject to GDPR does not alone answer every territorial-scope question for its processor.
For this deliberately supported Polish use, there is no evidenced occasional-processing exception;
the practical planning assumption is that an Article 27 representative is needed, subject to a
focused Article 3/27 assessment. Do not repeatedly reopen the same assessment for each booking.

**Current resolution:** verify the end-of-service date, remaining access/intake/jobs and the
controller's return/deletion instructions. Arrange secure return and deletion/restricted retention
and stop ordinary operational processing according to that disposition. The applicable processor
contract must provide return or deletion at the controller's choice when services end; do not keep
all data indefinitely merely because no separate erasure request has arrived.
[EDPB processor guidance](https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en).
Assess any continuing covered processing; appoint a representative if required. There is no
statutory “wait until sales” grace period. Reopening EU operational service needs its own readiness
decision; zero active accounts does not erase historical duties. A read-only login alone still processes personal data and
is not a general exemption. The narrow return/closure process also needs its own lawful handling.
Do not suddenly erase records, block data return/rights requests or silently relabel this Company UA.
No account is automatically suspended merely by this planning document.

## 2. Minimal-cost representation and demonstration options

Representation can be provided by a suitable **individual or organisation**, not only a purchased
“Representative as a Service” package. For a Poland-only pilot, a person genuinely established in
Poland is a practical candidate. This need not be a lawyer or a newly formed Perelai EU subsidiary.

Minimum arrangement: written appointment and acceptance defining scope; usable public contact
details; a procedure to receive/escalate requests and cooperate with authorities; access to the
required processing records and information. Agree availability, confidentiality and termination/
replacement. A nominal friend's address with no functioning role is insufficient. Do not combine
incompatible DPO/processor roles. The operator retains its own obligations. Appointment is not an
SCC transfer safeguard or a substitute for the deletion/security work in register 01.
Source: [EDPB Guidelines 3/2018, section 4](https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en_1.pdf).

| Visitor/use case | MVP treatment |
|---|---|
| Someone in the EU opens an informational page | Mere accessibility does not by itself establish targeting. No general GDPR rule requires blocking every EU IP. Evaluate the actual offering and any monitoring, not passport or interface language. |
| Public product demonstration | Prefer a video or isolated synthetic-data preview with no CRM writes, imports, outbound client messages or real account requirement. Hosting/IP/security logs and optional tracking still need appropriate treatment; “synthetic records” does not make all processing disappear. |
| Free or invitation-only real salon workspace | Same applicable privacy/processor/representative obligations as the corresponding paid use. This describes the former Polish pilot, not its current activity. |
| One-off feedback test | Assess the actual limited operation and account/contact/log data; any occasional-processing exception needs its full conditions. Do not promise that repeated user testing automatically qualifies. |
| “Personal/private” hosted app | A salon's professional client records are not household activity. A natural person's domestic exemption does not automatically extend to the platform supplying the service. |

Source: [GDPR Article 2, Article 3, Article 27 and Recitals 18/23](https://eur-lex.europa.eu/eli/reg/2016/679).
A country selector and contractual scope can support a genuine limited launch; a hidden UI switch,
IP filter or “EU users prohibited” sentence cannot contradict knowingly serving an EU business.

## 3. Observed product support and future market candidates

Source files read:

- [supported-markets.ts](/Users/valery/Sites/beauty-finance/libs/core/src/templates/supported-markets.ts):
  US, UA, PL, GB, CA, AU, DE, FR, ES and legacy `EU`; UA/US `PUBLIC`, other entries `CLOSED`.
  The new code removes the automatic US onboarding fallback.
- [localization.ts](/Users/valery/Sites/beauty-finance/apps/web/src/config/localization.ts) and
  [core locales](/Users/valery/Sites/beauty-finance/libs/core/src/locale/locale.util.ts):
  en, uk, pl, ru, es, fr, de, pt (labelled Brazilian Portuguese), tr.
- [onboardingMarkets.ts](/Users/valery/Sites/beauty-finance/apps/web/src/utils/onboardingMarkets.ts)
  now filters new admission choices to public markets and removes unknown-country admission
  fallback. Existing country values remain available for historical Company setup.
- [app CONTEXT](/Users/valery/Sites/beauty-finance/CONTEXT.md) still names US as initial GTM.
  Its line 695 still states a default US fallback and needs alignment with the new code.
  Product positioning is not production/legal approval.

Keep all existing UI languages. Language availability is not country readiness, reviewed legal text
or a supported payment currency. A Polish or Russian UI can serve a user in a permitted market.

| Market | Recommended place in the MVP sequence | Remaining market-specific reason/check |
|---|---|---|
| UA / uk | OWNER SELECTED PUBLIC in code; legal/runtime completion pending | Existing operator/home-market context and UA draft; no additional EU representation issue solely from serving Ukrainian local businesses outside EU targeting. UA businesses targeting EU persons still need scope review. |
| US / en | OWNER SELECTED PUBLIC in code; legal/runtime completion pending | Existing product GTM, market data and US draft. Check actual states, processor terms, notices, security and any sensitive/health-data exposure. Small scale does not exempt all US duties. |
| AU / en | Later candidate already in the catalog | Check Privacy Act coverage and small-business exceptions, actual customer/data profile and local terms. Do not assume an exemption from Perelai's size alone. |
| CA / en or fr | Later candidate; not the first simplification step | Federal/provincial rules need an actual province profile; small businesses are not generally exempt from PIPEDA. French UI does not complete Quebec requirements. |
| PL and other EU/EEA | No new public launch until the applicable representation/transfer/common requirements close | Former Polish records/access need a documented closure disposition. Norway, Iceland and Liechtenstein are not an escape from EEA GDPR scope; do not equate EEA with the euro pricing group. |
| GB / en | Defer if the goal is avoiding a representative dependency | The UK has its own representative requirement where applicable; “outside the EU” is insufficient. |
| NZ / en — not currently in catalog | Sensible future addition to evaluate, not a release requirement | Assess NZ privacy duties/officer and transfers; add real market/currency/price-pack/legal coverage. Do not reuse US facts by fallback. |
| Other language-driven additions: BR, TR, Spanish-speaking markets | Backlog, not automatic expansion | Translation is only one component. Brazil needs LGPD applicability/transfer review; Türkiye can require foreign-controller representation/registration. No legal-readiness assessment has been completed for a particular Spanish-speaking new market. |

Sources for the country-screening conclusions (not all-country legal clearance):
[US FTC](https://www.ftc.gov/business-guidance/privacy-security/consumer-privacy),
[California scope](https://www.oag.ca.gov/privacy/ccpa),
[Australia OAIC](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business),
[Canada OPC](https://www.priv.gc.ca/en/privacy-topics/information-and-advice-for-individuals/your-privacy-rights/businesses-and-your-personal-information/),
[UK ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/receiving-personal-information-from-the-eea/),
[NZ OPC](https://www.privacy.org.nz/resources-and-learning/knowledge-base/view/154/),
[Brazil ANPD small-agent rules](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022),
[Türkiye KVKK](https://www.kvkk.gov.tr/Icerik/6635/By-Law-On-Data-Controllers-Registry).

Recommendation is based on existing product/text preparation and bounded launch work, not a claim
that another country's law is universally easier. No new country is necessary to release UA.
All markets still depend on truthful notices and workable common privacy/security/deletion duties.

## 4. Minimal market-access feature — original proposal and implementation delta

Implementation delta, 2026-09-25: `SupportedMarket.accessStatus` is the small
server-authoritative admission map; UA/US are `PUBLIC` and other listed
countries are `CLOSED`. New workspace endpoints and first setup of a
countryless signup workspace reject missing, unknown, legacy `EU` or closed
countries through the policy (403); malformed/missing DTO inputs can fail validation earlier (400). The web picker shows only public choices, preserves an
existing Company's country, and does not silently select US. Email/Google
signup still creates a **provisional countryless Company** for the existing
auth flow; public booking is disabled there and operational setup requires an
explicit admitted country. This does not enable invite-only grants or approve
any legal text. Review 23 found that operational CRM writes can bypass this setup in Billing
`off`/`observe`, and legal publication has an inconsistent setup prerequisite. Fix those findings
and verify deployed behaviour before treating admission control as complete.

Use a separate server-authoritative market policy; keep the current catalog for localization,
currency/pricing and legacy records. Do not delete EU countries or existing Company values to hide
them from new onboarding. Suggested modes:

| Mode | Admission rule |
|---|---|
| `PUBLIC` | Self-service creation in the specifically released country/profile. Existing trial/Billing/TEAM/legal controls continue to apply. |
| `INVITE_ONLY` | New Company creation only under an operator grant bound to the approved customer and then Company, with scope and expiry. Applicable legal readiness is still required. |
| `CLOSED` | No new operational Company admission. Show availability information and, optionally, a separate synthetic demo. Existing Company treatment is explicit; this mode is not an erase-all switch. |

**Selected code modes:** UA/US `PUBLIC`, other catalog entries `CLOSED`. The earlier recommendation
to make US `INVITE_ONLY` is superseded; do not add invitation-grant infrastructure for this release.
Any future individual admission needs its applicable legal scope and cannot bypass Article 27.
Record the former PL Company as a closure case, not as a grandfathered legal exemption. Ordinary trial duration remains 21 days;
any legacy free arrangement is separate from market admission and does not establish a free tier.

Implementation boundaries:

1. One country-policy map is enough for the selected PUBLIC/CLOSED release; no grant list,
   admin UI or general compliance rules engine is required now. Release metadata can reference the existing
   legal approval record; a non-empty string alone must not bypass substantive release checks.
2. Use confirmed real business country (and state/province only where the selected profile needs
   it). `EU` is a legacy regional/pricing code, not an exact country. Unknown, missing or legacy
   country requires clarification for new admission; never authorise it through the US fallback.
   Language, browser timezone, IP and payment currency are hints, not legal jurisdiction facts.
3. Enforce policy on the API for Company creation/setup, relevant country changes and pilot grants.
   Filter the UI from the same public policy response; a hidden picker alone is insufficient.
   Bind privileges to the Company/customer so another account, Company or arbitrary country edit
   cannot reuse a grant. Keep market authority distinct from ordinary team invitations.
4. Company admission and **public booking intake** are different permissions. An individually
   admitted workspace may still expose a public booking URL. Default pilot public intake off unless
   specifically included in its approved scope; check legacy/custom as well as generated notices
   and direct submission endpoints. Disabling public booking alone does not stop private CRM
   processing. Gate relevant imports/integrations/jobs if a Company is actually suspended.
5. Review existing Companies before applying restrictions. Preserve secure return/rights/closure
   routes, legal notices/evidence and deletion safeguards; avoid silent data loss or automatic
   reclassification. If operational use is stopped, ordinary writes and intake do not continue
   under the guise of read/export access. Record the applicable restricted-return/retention basis.
6. Treat request-time IP blocking as optional abuse/consistency support, not the MVP legal engine.
   Do not automatically lock a UA owner travelling in Poland out of their records. Do not promote
   the service into closed markets while knowingly accepting them through a different country.
7. Exercise a small permission matrix: PUBLIC/CLOSED; missing/EU/unsupported country;
   provisional direct API writes under all Billing modes; country-change bypass; setup and
   custom/generated legal publication; existing restricted Company return/closure access.
   Keep legal-template/Billing/TEAM controls independent. Review 23 records tests already rerun
   and gaps still open. Add expired/wrong-customer grant tests only if INVITE_ONLY is implemented.

## 5. Template and next-step boundary

Prioritise completing UA/uk common factual blocks and the operational 30/30 procedure; stage the
existing US/en draft next. Preserve PL/EU drafts and pinned references; they are not an automatic
publication target while new EU admission is closed. Adding a language/country or changing a market
mode must not populate `REVIEWED_TEMPLATES`, remove draft validation or select a foreign legal
template by language. A custom salon policy cannot repair Perelai's own missing representative.

Next concrete work: fix review 23's two admission/publication findings; perform the scoped read-only
inventory of the owner-specified local Company, then complete the resumable operator deletion and
restore drill. Resolve former-PL closure separately and finish the selected UA/US factual text. No demand for new market templates, an export rewrite or
geolocation infrastructure follows from this proposal.
