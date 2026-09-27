# UA/US/AU/CA v2 — Cloudflare database-backup disclosure

**Recorded:** 2026-09-27. **Owner instruction:** correct the salon notices to disclose Cloudflare
backups in a new version; continue the interrupted preparation and integration.
**Authority:** `owner-booking-notice-cloudflare-v2-20260927`.
**Effective date:** 2026-11-01, aligned with the postponed platform packet.
**State:** REGISTERED_FUTURE_NOT_DEFAULT. No deployment or salon publication performed.

## Delivered

Four new immutable template versions are in the application's `REVIEWED_TEMPLATES`:

| Profile | Version | Content SHA-256 |
|---|---|---|
| UA/uk | business-booking-UA-uk-v2 | `3b1a4ca30a0fe9834b52297a071e6e30b3454ab15b453fdca81db98c0d096905` |
| US/en | business-booking-US-en-v2 | `34f00fdb046096c36a18a9a12418d33103cac59ebf27ac27a6290dfdc861223e` |
| AU/en | business-booking-AU-en-v2 | `b63bf52fc96b71c0780b7297b5001753eeb8ca9ff1dcbffc8d7f5649341b2035` |
| CA/en | business-booking-CA-en-v2 | `be3286fee8237268306591c03e36ca063a14942c2ff4a5fbd237c6beb432636a` |

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
- Bucket configuration, provider agreements, actual rotation and deletion/restore operations remain
  operational checks; content tests do not establish them. The owner-supplied EU jurisdiction is
  a specific restriction, not a location hint. See the checked
  [Cloudflare R2 location documentation](https://developers.cloudflare.com/r2/reference/data-location/).

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
