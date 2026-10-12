# U70 completion — 2026-10-08

**Status: DONE. Text approval: APPROVED.**

- Owner explicitly approved `u70-booking-copy-20261008.r1` in this chat.
- Immutable version: `booking-copy-2026-10-08.1`.
- Approval reference: `owner-u70-booking-copy-r1-20261008`.
- Canonical hash: `a539d29a06c6d23c0d7e22f71c9e2375fa138a9506313ebe535ae55788b17439` (unchanged from r1).
- All 44 approved keys in nine locales installed; five previously absent keys now localized.
- Web manifest plus immutable canonical artifact and hard-pinned version/hash test installed.
- App `.env.example` links the approval record; ignored local `.env` changed only the booking-copy version.
- Spec 08, approval record, reviewer and execution plans now reflect owner approval. Original pending records are archived.

## Evidence verification

29 focused web tests and 57 focused API legal/readiness/reuse tests passed, plus one PostgreSQL integration test (87 total). The real Nest/Prisma public booking service was checked against a
fresh temporary schema in local `_test` PostgreSQL. Projection returned the approved copy version
and `intakeAvailable: true`; a synthetic standard-path submit wrote original platform evidence
with the same copyVersion, legalRevision and disclosure version; a real generated personal link
reused it with PERELAI_TERMS_REFERENCE, preserved acceptedAt and recorded referencedAt. No second
platform acceptance or marketing evidence was fabricated. Changing the copy version returned the
updated-terms state; stale legalRevision was rejected. All test data rolled back and the temporary
schema was removed. REQUEST was enabled only in that isolated test process; notification delivery
was stubbed. Application legal/submit/evidence code and reviewed templates were unchanged.

The disposable schema was initialized from current Prisma schema to avoid changing the outdated
existing local test schema. This was not a migration/append-only-trigger audit. A prior accidental
broad Jest invocation was interrupted after test-schema mismatch errors and is not counted as a
pass. Full web spec tsc still has prior declaration/reference errors; the new hash spec's isolated
TypeScript check and changed-file lint passed.

## Remaining release actions

Production ENV/deployment rollout remains separate. A running local API reads the updated `.env`
on its next start; the successful local evidence check explicitly loaded its legal identifiers.
The existing 200%-text swipe-caption overlap and narrow custom footer CTA truncation remain open
UI observations, not passing accessibility/release checks. Neither alters the approved copy hash.

Application handoff: `/Users/valery/Sites/beauty-finance/docs/audits/u70-approved-booking-copy.md`.
Hash guard: `/Users/valery/Sites/beauty-finance/apps/web/src/config/booking-copy.spec.ts`.
Immutable manifest: `/Users/valery/Sites/beauty-finance/apps/web/src/config/booking-copy.manifest.json`.
