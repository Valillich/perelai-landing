# US/en v1 — source review, owner authority and code release

**Date:** 2026-09-25. **Authority:** `owner-us-en-release-20260925`.
The owner explicitly requested completing and adding this US/en version to the reviewed registry,
reusing the UA infrastructure, retention and accepted MVP operator controls. This is that scoped
instruction, not a lawyer's certificate, all-state compliance opinion or permission to deploy.

## Exact artifact

- Human source: [US.en.standard.v1.draft.md](US.en.standard.v1.draft.md), historical filename retained.
- Machine packet: [US.en.standard.v1.prepared.json](US.en.standard.v1.prepared.json), `.template`.
- Synthetic preview: [US.en.standard.v1.preview.md](US.en.standard.v1.preview.md).
- Version: `business-booking-US-en-v1`; effective date: `2026-09-25`.
- Country/language: `US` / `en`; profile: `ORDINARY_NON_MEDICAL`.
- Modes: `APPOINTMENT`, `REQUEST`; no prepayment or cancellation/no-show fees.
- Actual-helper content digest: `9a9e9802fcb78f1834056f688a511fdb3a0f2a4411d2c6ca3659443bac2ce6ff`.
- Intended exact default: US → this version. No language fallback changes another Company's country.
- Only runtime tokens: `BUSINESS_NAME`, `CONTACT_EMAIL`, `PRIVACY_CONTACT_EMAIL`.

## Applicability decision and limits

This is one reusable US baseline for ordinary, non-medical booking with operational disclosures and
no sale of booking information, cross-context advertising sharing or targeted advertising. It is
available for an owner to preview and confirm against their actual business facts. The existing
external-notice path remains available. Country, SOLO/STUDIO label and Perelai's size alone are not
an exemption assessment for the Business. No state-wide exemption or particular Business revenue,
data volume or affiliate relationship has been invented.

CalOPPA-style disclosures are included without relying on CCPA revenue thresholds: categories,
sources, purposes, recipients, online collection, tracking practices, request/change process and
effective date. Conditional rights do not claim that every visitor has every CCPA right. A Business
that has additional statutory notice or request-method duties must use a supplemented external
notice and the required working channels; this baseline is not a substitute for those duties.
For the MVP, handle such a Business through support rather than adding a state-law configuration
engine. Do not claim the registry verifies eligibility of every US business automatically.

In particular:

- CCPA revenue is only one route. Its current adjusted amount is $26,625,000; the statutory business
  test also includes buying/selling/sharing 100,000 or more consumers'/households' information and
  deriving at least 50% of revenue from selling/sharing it, plus specified related entities.
  Ordinary processing of 100,000 records is not itself that second California threshold.
  Service-provider/contractor obligations are separate. Evaluate Perelai and the Business separately.
- Other states have different scope rules; Texas, for example, generally exempts SBA-defined small
  businesses while preserving a sensitive-data sale restriction. There is no universal US $25m safe harbour.
- Consumer-health collection/inferences, biometrics and children's-data flows are outside the
  selected baseline. Washington's consumer-health law reaches small businesses; a non-medical
  label or a warning in a note field does not by itself exclude health information.
- Remove inapplicable European boilerplate from this US notice without asserting GDPR or the
  Data Act can never apply. Actual establishment, offering/monitoring and customer scope determine
  applicability; hosting in Germany alone does not decide the Perelai/Business question.
- Ukrainian governing law is scoped to the separate Perelai relationship and preserves mandatory
  US protections. This notice does not choose law for a US salon's service contract, impose venue
  or arbitration, or override the separate platform agreements.

## Processing facts and source checks

Owner-confirmed UA facts are reused: FOP identity/contact, Hetzner/Falkenstein, Resend/Plus Five Five,
Inc., remote administration, 90 days / 24 months, Company 30/30 and narrow 1095-day claims evidence.
Cloudflare and optional Google Calendar are retained from the actual UA recipient inventory.
Business-selected external image delivery is also described, without treating its provider as an
advertising recipient or claiming all third parties have no technical logging.

Source inspection on 2026-09-25 found no PostHog/gtag/fbq/Hotjar/Mixpanel or DNT/GPC handler in the
reviewed app source and public entrypoint. Public routing uses language and temporary booking
browser state; request validation and IP quota remain disclosed. Prior audit 17 supports the
observed public booking surface, but was not a fresh production capture. Landing analytics are a
separate surface and are not used as proof of the booking page's behavior. No claim of automatic
GPC parsing is made; the selected process has no advertising sale/sharing to disable.

The owner confirms that the Business facts are accurate in the existing preview workflow. Do not
use this source check as an audit of a salon's separate website, CRM exports or advertising tools.
Material notice changes affecting held data require an operator/Business contact process; the
notice no longer promises a nonexistent automatic change banner. Do not silently overwrite v1.

## Operational handoff — no new implementation programme

Reuse the accepted UA MVP controls and their documented limitations. The owner reported the
retention integration drill 3/3, focused API tests 57/57 and API typecheck; those results are prior
evidence, not tests rerun for this notice change. Production deploy, ordinary Company deletion and
real Coolify restore were not performed. Their deferral does not prove the public retention promise
operates automatically. `clean-old-data.ts` skips unsafe dependencies; every overdue skip needs
operator resolution. A success exit must not be presented as full erasure of skipped data.

1. Keep a monitored operator schedule and resolve skipped notifications/files/linked records.
2. Route privacy requests to the Business contact and Perelai support where processing assistance
   is needed. Use applicable deadlines; preserve proof of narrowly justified exceptions/holds.
3. For a covered Business needing a toll-free channel, additional notice or other state-specific
   procedure, use its external notice and support handling before relying on the baseline. Do not
   ask ordinary SOLO users to interpret statutory thresholds themselves.
4. Before deploying this build, check the actual providers/tracking configuration, public Privacy
   URL and reachable contact. Keep the no-advertising profile intact. Code integration does not
   certify those deployment facts, automatically publish existing Company settings, or change EU access.

## Verification

Prepared against the application's actual digest/renderer with SWC: 12 successful US variants,
current and pinned resolution, and unchanged UA content. Focused Jest/typecheck results and code
integration status are recorded below after execution. No production database access is needed.

## Official sources checked on 2026-09-25

- [CPPA current monetary adjustment](https://www.cppa.ca.gov/regulations/cpi_adjustment.html).
- [CPPA applicability, service-provider duties and request methods](https://cppa.ca.gov/faq).
- [California BPC §22575](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=22575.).
- [Texas Business & Commerce Code chapter 541](https://tcss.legis.texas.gov/resources/BC/htm/BC.541.htm).
- [Washington RCW chapter 19.373](https://app.leg.wa.gov/RCW/default.aspx?cite=19.373&full=true).
- [FTC COPPA guidance](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions).
- [GDPR Article 3](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng).

These sources support the distinctions above; they do not certify Perelai's deployment or any
particular salon. Future changes to processing or legal scope need review of the affected part,
not automatic reapproval of every country or rewriting this immutable version.


## Completed code integration and verification — 2026-09-25

US/en is present in `REVIEWED_TEMPLATES` and `CURRENT_TEMPLATES` alongside unchanged UA/uk.
The packet status is `ACTIVE_IN_CODE_NOT_DEPLOYED`. The JSON, Markdown client-copy blocks and
literal runtime entry match, with the exact digest recorded above. A regression test pins the
US digest, checks current/reference lookup, all 12 renders, unsupported country/mode rejection,
changed-content rejection, human-source alignment and the unchanged UA digest.

- **267/267 API tests passed in four suites:** `business-notice-us`, `public-booking-legal`,
  `companies.service`, `public-booking.service`.
- **API typecheck passed:** `tsc --project apps/api/tsconfig.app.json --noEmit --incremental
  --tsBuildInfoFile /private/tmp/perelai-us-api.tsbuildinfo` with an 8-GiB Node heap.
- `git diff --check` passed for changed code/docs; the four US packet files match between repos.
- No production deployment, Company mutation, deletion, migration or real-backup restore occurred.

The installed Node/Jest combination initially failed to load the repository's TypeScript config
(`__dirname` in ES module scope). Tests were then run with an external CJS adapter that transpiles
the same repo config using its installed SWC and merges the same Nx preset. Test files, transforms,
mappers and assertions were not disabled or changed to accommodate that runner issue. Command:

```sh
node node_modules/jest/bin/jest.js --config /private/tmp/perelai-us-jest-config.cjs \
  --runInBand --cacheDirectory /private/tmp/perelai-us-jest-cache --runTestsByPath \
  apps/api/src/public-booking/business-notice-us.spec.ts \
  apps/api/src/public-booking/public-booking-legal.spec.ts \
  apps/api/src/companies/companies.service.spec.ts \
  apps/api/src/public-booking/public-booking.service.spec.ts
```

Source fingerprint: `apps/api/src/public-booking/business-notice-template.ts` SHA-256 `a1510af4178a80b61723f0fa3001ecc1d48792d28946e8c5b8c33c61de081d8d`.
Repository HEAD (dirty worktree, not a new release commit): `facdee1f154be735cb2aa346eca9575a07469f85`.
