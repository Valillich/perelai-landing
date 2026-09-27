# US/en release and the next market — 2026-09-25

## Current decision

The owner expressly requested final US/en copy, registry integration and typecheck using the
accepted UA technical/retention facts. Use the [US packet and record](templates/business-notice/US.en.standard.v1.release-record.md).
Do not ask for another generic approval of the same task. Registry integration and deployment
are separate; existing Company notices require their ordinary owner preview/publication workflow.

There is one US baseline, not 50 independently written notices. Its scope is ordinary non-medical
booking with no online payments or advertising use of booking data. State-specific additions are
required when an actual Business/process needs them. A $25m-only exemption is incorrect: see the
record's current official sources and the separate roles of Business and Perelai. The conditional
state-law clause is explanatory, not a waiver or a complete CCPA supplement for a covered salon.

The US copy does not import GDPR/Data Act/EU-representative boilerplate. It also does not assert
that choosing country US overrides the actual reach of any law. Ukrainian governing law is confined
to the Perelai relationship, with mandatory protections preserved; the salon-client contract is separate.

## Small operational follow-up for the implementation/release agent

1. Verify the installed US entry and its explicit default against the JSON and pinned digest;
   keep UA byte-identical. Do not retranslate or regenerate the final text with an LLM.
2. Use the existing preview/fact-confirmation and external-notice paths. Support should check the
   first US businesses' actual activity and additional notice/channel needs; a salon should not
   have to write platform clauses or study every state's law. No new state-law engine is needed.
3. Verify the deployed booking page has the same no-advertising behavior and providers, and the
   platform Privacy URL/contact work. Check the published platform Terms preserve the Ukrainian-law
   choice and mandatory local-law exception. A Business privacy notice does not replace those Terms.
4. Assign the manual retention run and resolve skipped scopes. Document provider copies and
   restore limitations honestly; owner acceptance of MVP scope is not proof of live deletion.
5. Report code integration, deploy and Company publication separately. Do not change other markets
   or existing pinned/custom notices to make this release test pass.

## Next market recommendation

**Prioritize AU/en for the next focused assessment.** AU already exists in
`libs/core/src/templates/supported-markets.ts` as CLOSED with AUD/en-AU; English is supported in
`apps/web/src/config/localization.ts`. No new catalog country or translation is needed. This is a
practical recommendation based on the current product profile, not a finding that Australia has
no legal duties or is universally the easiest jurisdiction.

[OAIC's current small-business guidance](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business)
retains the general A$3m-or-less turnover exemption, with exceptions including health services,
trading in personal information, covered related bodies and government contracting. Evaluate the
FOP and the actual salon separately, including overseas-business scope. Keep a truthful privacy
notice, security/rights/retention process and applicable consumer protections even when exempt.

The next AU task should reuse the common facts, check Privacy Act applicability and overseas
processing, prepare AU/en copy with local contact/complaint wording, verify relevant subscription
and consumer-law disclosures, then propose the exact registry/access change. Do not simply copy
US/en or open AU by changing one enum. Retain CLOSED until this scoped work is complete.

Canada can be assessed afterwards, but it is not a no-privacy-law fallback: PIPEDA and applicable
provincial rules need consideration. Cross-border processing is not categorically prohibited;
accountability remains. See [Canadian regulator's cross-border processing guidance](https://www.priv.gc.ca/en/privacy-topics/airports-and-borders/gl_dab_090127/).
The UK is less suitable as a workaround for EU representative cost because UK territorial and
representative rules can also apply: [ICO guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/receiving-personal-information-from-the-eea/).

A new catalog country is unnecessary for the next step. Language availability alone should not
open Brazil, Turkey or other countries: it establishes UI availability, not legal readiness.
Global service remains a feasible product direction through one common operating standard and
small applicable local additions. The current CLOSED values are release choices, not permanent
legal prohibitions on serving those markets. Do not implement a blanket nationality/IP ban or
claim a free/demo/invitation label exempts real-client processing.


**Follow-up, 2026-09-26:** the AU preparation recommended above is complete in
[handoff 26](26_au_notice_preparation_and_nz_next_market_20260925.md). AU activation remains a
separate next action; after AU the current recommendation is a scoped NZ/en assessment before
Canada. This supersedes the earlier Canada-after-AU suggestion; no country access changed.
