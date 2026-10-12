# U70 — approved public-booking copy

Status: DONE for the requested approval/version/hash/locale/local-ENV work, 2026-10-08.
Production deployment and remaining UI release checks are separate.

## Approval

The owner explicitly wrote “Утверждаю пакет U70 r1” and requested assigning an immutable version,
adding the hash test and updating `.env.example` and `.env`.

- Version: `booking-copy-2026-10-08.1`.
- Approval reference: `owner-u70-booking-copy-r1-20261008`.
- Package: `../perelai-landing/.cursor/plans/legal/u70-booking-copy-20261008/approval-record.json`.
- Canonical SHA-256: `a539d29a06c6d23c0d7e22f71c9e2375fa138a9506313ebe535ae55788b17439`.
- Canonical text remains byte-for-byte identical to approved r1 (44 keys × nine languages).

## Installed artifacts

`apps/web/src/config/booking-copy.manifest.json` maps the current version to the approved digest,
approval reference, exact key scope/locales and immutable canonical artifact. Five previously missing
keys from r1 are installed in every locale, including the neutral revision-conflict message.
Existing in-scope strings are unchanged. Full platform documents, reviewed regional summary/reminder
strings and publication references are unchanged. No API submit logic or legalRevision ordering changed.

`booking-copy.spec.ts` recomputes the digest from actual locale values, checks every saved artifact
against a version/hash pin, and exercises mutation detection for all 396 approved locale/key pairs.
Even changing both a saved artifact and manifest hash under the existing version fails the immutable
pin. A new approved version must add a new artifact/manifest entry and new test pin while retaining
old entries. Arbitrary formatting of a locale file does not change semantic copy hashes.

`.env.example` links to the approval record and uses the approved identifier. Only
`LEGAL_BOOKING_ACCEPTANCE_COPY_VERSION` was changed in the ignored local `.env`; other values were
preserved. No production/environment-provider service was accessed. A running API process must read
the updated ENV on its next start; the local integration check explicitly loaded those legal identifiers.

## Verification

- Test-first: new web hash suite initially failed for the missing manifest; after installation,
  29 focused web tests in three suites passed (hash, Privacy section and booking-page consent/reuse).
- Local PostgreSQL: `u70-approved-copy.integration.spec.ts` passed with actual Prisma/Nest module,
  generated UA/uk standard publication, real public booking submit and evidence storage. Confirmed:
  `intakeAvailable: true`, approved copy version in projection/disclosures/evidence, initial affirmative
  acceptance, real personal-link reuse with `PERELAI_TERMS_REFERENCE`, original acceptance time,
  no fabricated additional platform acceptance/marketing evidence, updated-copy state and stale
  legalRevision rejection. Notification secret writer and post-commit publisher were replaced to
  prevent delivery; legal/booking/evidence handlers were real.
- Test used an isolated temporary schema in local `_test` PostgreSQL; all synthetic records rolled
  back, then the schema was removed. No existing Company or published settings were edited.
- New web hash spec isolated TypeScript check passed; changed test-file ESLint passed without errors;
  `git diff --check` passed. Broad web spec tsc encountered pre-existing stale declaration/reference
  errors and was not claimed as a pass. A mistakenly broad initial API integration invocation was
  interrupted after outdated-test-schema failures; it is not included in the successful test counts.
- The default local test schema lacks current columns. It was not migrated/reset: the disposable
  schema was initialized separately from current Prisma schema, without generating application code.

Reproduce the PG check with a current local `_test` schema via Node `--env-file=.env.test` and
Jest `--runTestsByPath`, disabling the default integration ignore pattern. The disposable-schema
runner used for this handoff is preserved in the landing package's completion artifacts.

## Remaining release work

Production ENV/deployment must use the same copy version with matching web artifact. U70 approval does
not bypass billing/team/geography/provider gates or open another booking mode. The local evidence
check enabled REQUEST only in its test process to exercise submit without calendar setup.

The pre-existing 200% text-size swipe-caption overlap and narrow custom footer CTA truncation remain
recorded in the approved packet. They were not rewritten as passing UI/accessibility checks.
