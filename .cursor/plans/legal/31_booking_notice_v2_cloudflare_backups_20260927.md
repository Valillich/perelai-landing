# UA/US/AU/CA v2 — Cloudflare database-backup disclosure

**Recorded:** 2026-09-27. **Owner instruction:** correct the salon notices to disclose Cloudflare
backups in a new version; continue the interrupted preparation and integration.
**Authority:** `owner-booking-notice-cloudflare-v2-20260927`.
**Effective date:** 2026-11-01, aligned with the postponed platform packet.
**State:** REGISTERED_FUTURE_NOT_DEFAULT. No deployment or salon publication performed.

**Corrected in place 2026-10-17** (`owner-platform-legal-evidence-20261017`, before the effective date):
EDR registration-action number removed; uploaded files disclosed as Cloudflare R2 (EU) without backup
copies. The digests below are the corrected ones; previous digests are in each release record.

## Delivered

Four new immutable template versions are in the application's `REVIEWED_TEMPLATES`:

| Profile | Version | Content SHA-256 |
|---|---|---|
| UA/uk | business-booking-UA-uk-v2 | `b8ad68c3d89063a43cdcedbfcf5192736a27bd9992de27648e81db4111774c9a` |
| US/en | business-booking-US-en-v2 | `c985748f29bfb7e11d900e473c7086e59a1db3e140998045422bab37372d4ae3` |
| AU/en | business-booking-AU-en-v2 | `5e95b9d923a8e0172f8055a8269b8c28fd406d74a64d7acc1df00dd35ff9e176` |
| CA/en | business-booking-CA-en-v2 | `2d030c1883624675a796d3a8158f2b1d6b43e18f7340e556bb0eaca401fa850d` |

Each profile has a human source, prepared JSON, synthetic preview and release record in the
[template package](templates/business-notice/README.md), mirrored byte-for-byte into
`beauty-finance/docs/legal/business-notice-drafts/`. The four runtime literals match their JSON
templates and the existing digest contract. These are business notice versions, not entries in
the platform's `content/legal/versions.json`; the seven platform hashes are unchanged by this task.

The notices now distinguish Cloudflare's global network/security role from **Cloudflare, Inc. /
Cloudflare R2 as recipient of database copies**, including booking/client personal information.
They disclose EU-jurisdiction storage, daily backups kept up to 7 days off-site and 10 days on
the Hetzner server, and exclusion of uploaded files/attachments. International-processing sections
name EU R2 storage without promising that all provider operations/access stay in the EU.

An adjacent factual error was corrected: Google Calendar is read-only import into Perelai,
not an outbound booking write to Google. Ordinary 90-day/24-month retention and closure 30+30
commitments were not extended. Market/province admission, reminders, fees, modes and owner inputs
are unchanged. CA remains limited to MB, NB, NL, NS, NT, NU, ON, PE, SK, YT; QC/AB/BC remain closed.

## Lifecycle and release

- V1 source files, JSON wrappers, release records, previews, runtime text and digests are preserved.
  `CURRENT_TEMPLATES` continues to point to v1. Existing published notices resolve their pinned v1.
- V2 is registered with its future date. The existing guard rejects lookup/render before
  2026-11-01; the calendar reaching that date does not automatically change a default.
- For the postponed launch, switch each exact current reference to v2 when releasing it and use
  the existing owner preview/confirm/publish process. Do not rewrite stored notices or acceptance
  evidence and do not silently migrate custom terms. Follow applicable notice/permission requirements
  for material changes concerning already-held data.
- If R2 already receives live personal data, a future-dated notice does not fix an existing
  disclosure gap. Handle the affected businesses' notices before relying on the new version.
- **Review clarification 2026-10-19:** inventory actual published notices before release: record
  Company, pinned version/language/hash, public URL and the incorrect Google/file-storage disclosures
  still served. For each affected publication, record the correction date, owner confirmation and
  republication outcome. If correction is needed before 2026-11-01, prepare an immutable correction
  with an appropriate effective date through the existing approval/publication flow; do not bypass
  the future-date guard or overwrite v1. A default switch alone does not update pinned publications.
- Bucket configuration, provider agreements, actual rotation and deletion/restore operations remain
  operational checks; content tests do not establish them. The owner-supplied EU jurisdiction is
  a specific restriction, not a location hint. See the checked
  [Cloudflare R2 location documentation](https://developers.cloudflare.com/r2/reference/data-location/).
- Before coordinated landing/API/Web release, retain evidence for EU jurisdiction on **each** used
  file/backup bucket, disabled public access on private files/backups, daily backup runs and an actual
  restore drill. These checks are not closed by this text correction. The production purchase legal
  package remains DRAFT; document synchronisation does not authorise production checkout.

## Independent continuation verification

The resumed task found the integration already present and checked it without overwriting it.

- **402/402 API tests passed**, 7 suites: v2, US, AU and CA business notices; public booking legal;
  public booking service; Company service. Includes pinned hashes, Markdown/JSON/runtime equality,
  future-date rejection, exact reference resolution, supported-mode rendering and unchanged defaults.
- All **16 v2 files match** between repositories. All **38 preceding v1 packet files** match the
  preparation baseline; all four runtime v1 literals, current references and helper implementation
  match the original Git state.
- API app typecheck: **passed**, `tsc -p apps/api/tsconfig.app.json --noEmit --incremental`,
  with the build-info file in `/private/tmp`. The first run exhausted the default 2 GB Node heap;
  retry with Node 20 and an 8 GB heap succeeded without source changes.
- `git diff --check` passed in both repositories; the seven platform hashes also verified with
  `scripts/legal-manifest.ts`. Full integration/production tests were not run.
- No ordinary database, provider account, server configuration, market admission or Company settings
  were changed. No production deployment or real deletion/restore drill was performed.
