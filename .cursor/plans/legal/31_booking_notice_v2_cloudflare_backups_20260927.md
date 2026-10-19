# UA/US/AU/CA v2 — Cloudflare database-backup disclosure

**Recorded:** 2026-09-27. **Owner instruction:** correct the salon notices to disclose Cloudflare
backups in a new version; continue the interrupted preparation and integration.
**Authority:** `owner-booking-notice-cloudflare-v2-20260927`.
**Effective date:** 2026-11-01, aligned with the postponed platform packet.
**State:** REGISTERED_FUTURE_NOT_DEFAULT. No deployment or salon publication performed.

**Corrected in place 2026-10-17** (`owner-platform-legal-evidence-20261017`, before the effective date):
EDR registration-action number removed; uploaded files disclosed as Cloudflare R2 (EU) without backup
copies. The digests below are the corrected ones; previous digests are in each release record.

**Release-scope confirmation 2026-10-19:** the owner confirms no active published notices,
including for the sole real Company being relocated. Published-notice inventory is resolved;
there is no affected-salon migration, republication or repeat notice-confirmation task. Keep the
v2 default switch on/after 2026-11-01 and the normal first owner preview/confirmation/publication.
The same day's screenshots confirm `Public Access: Disabled` for `beauty-finance-private` and
`perelai-db-backups`, and `Location: Eastern Europe (EUR)` for the backup and public-file buckets.
Evidence, source-file hashes and limits are in [register 01](01_legal_facts_env_contract.md#screenshot-evidence--2026-10-19).
Explicit EU jurisdiction, daily backup execution and restore remain separate checks.

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
  `CURRENT_TEMPLATES` continues to point to v1. The resolver preserves exact pinned references;
  the owner confirms there are no active publications to migrate for this release.
- V2 is registered with its future date. The existing guard rejects lookup/render before
  2026-11-01; the calendar reaching that date does not automatically change a default.
- For the postponed launch, switch each exact current reference to v2 when releasing it and use
  the existing owner preview/confirm/publish process for first publication. No existing-salon
  republication or repeat notice confirmation is required in the owner-confirmed current state.
  Preserve historical templates and acceptance evidence; the default switch does not rewrite them.
  No earlier correction version is needed for an absent publication. Any future change to an actual
  published notice must still preserve its exact reference and use the existing publication flow.
- Bucket configuration, provider agreements, actual rotation and deletion/restore operations remain
  operational checks; content tests do not establish them. The owner-supplied EU jurisdiction is
  a specific restriction, not a location hint. See the checked
  [Cloudflare R2 location documentation](https://developers.cloudflare.com/r2/reference/data-location/).
- Private/backup bucket public access is confirmed disabled in the 2026-10-19 screenshots.
  Before coordinated landing/API/Web release, retain evidence for explicit EU jurisdiction on each
  used file/backup bucket, daily backup runs and an actual restore drill. Regional Location screenshots
  do not close those checks. The production purchase legal package remains DRAFT; document
  synchronisation does not authorise production checkout.

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
