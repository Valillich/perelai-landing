# Superseded 2026-11-01.1 packet

Snapshot of the seven documents and exact manifest approved on 2026-09-27
(`owner-platform-legal-mvp-postponement-20260927`), taken on 2026-10-17 before the evidence
correction release `2026-11-01.2`. It was publicly displayed from 2026-10-01 as a future-dated version
but never reached its effective date. Acceptances or purchase evidence already recorded against it stay
valid historical records and must not be rewritten. It is retained for history and for archives that may
reference it; after deployment of `2026-11-01.2` it is not served by canonical legal routes.

Superseded because the 2026-09-28 EDR extract shows that `2001010010001028235` is the number of the
26.02.2024 registration action, not the entrepreneur's record, and because production file storage
is Cloudflare R2 (EU jurisdiction), not Hetzner. Do not rewrite historical acceptance records.

## Reproducing historical hashes

The archived Terms and Privacy interpolate the historical registration-action number. The current
`PRODUCTION_LEGAL_IDENTITY` has the corrected EDR record number, so using it unchanged with this
archive produces `APPROVAL_HASH_MISMATCH`. For historical reproduction only, use
`{ ...PRODUCTION_LEGAL_IDENTITY, registrationNumber: "2001010010001028235" }` together with this
directory's `en/` sources and `versions.json`. All other identity fields are the unchanged public
values in `lib/legal/production-identity.ts`. Do not change the production ENV or the current identity
to reproduce an old document.

From the landing repository root, this read-only check verifies all seven archived documents:

```sh
pnpm exec tsx -e 'import { loadAllLegalDocuments } from "./lib/legal/loader"; import { PRODUCTION_LEGAL_IDENTITY } from "./lib/legal/production-identity"; const docs = loadAllLegalDocuments({ contentDir: ".cursor/plans/legal/archive/platform-2026-11-01.1", identity: { ...PRODUCTION_LEGAL_IDENTITY, registrationNumber: "2001010010001028235" }, isProduction: true }); for (const [slug, doc] of Object.entries(docs)) console.log(slug, doc.renderedHash);'
```
