# CA/en standard booking notice v2 — release record

**Recorded:** 2026-09-27. **State:** REGISTERED_FUTURE_NOT_DEFAULT.
**Authority:** `owner-booking-notice-cloudflare-v2-20260927` (owner requested the Cloudflare backup correction).
**Version:** `business-booking-CA-en-v2`. **Effective date:** 2026-11-01, aligned with the postponed platform release.
**Content SHA-256:** `be3286fee8237268306591c03e36ca063a14942c2ff4a5fbd237c6beb432636a`.

## Changes

- Cloudflare, Inc. / R2 is a recipient of database backup copies containing booking/client personal data.
- EU-jurisdiction bucket for off-site DB copies; this is distinct from the global Cloudflare network.
- Daily DB backups; up to 7 days off-site and 10 days on-server; uploaded files/attachments excluded.
- International-processing section now discloses EU R2 storage. No claim that all processing stays in Germany or the EU.
- Corrected the existing Calendar paragraph: read-only import into Perelai, no outbound event writing.
- Ordinary 90-day/24-month and closure 30+30 commitments are unchanged. The platform's later cleanup
  window does not silently extend a salon notice. No country/province admission change.

## Version and release handling

The v1 source, wrapper, preview, release record, runtime content and digest are unchanged.
V2 is retained in the reviewed runtime registry with its future date; the current default remains v1.
The effective-date guard prevents v2 lookup/render before 2026-11-01. No automatic default switch,
Company migration, owner publication or deployment is performed. When releasing, switch the exact
country reference to v2 and use the existing owner preview/confirm/publish flow. Material changes
to already-held data must follow the applicable notice/permission process; never overwrite prior evidence.

Canada remains limited to MB, NB, NL, NS, NT, NU, ON, PE, SK, YT; QC/AB/BC stay closed. Reuse the existing CA operations procedure.

The R2 settings and rotation are owner-supplied release facts; account configuration, provider terms,
retention execution and restore/deletion replay were not tested here. EU jurisdiction is a specific
R2 restriction, not a best-effort location hint: [Cloudflare documentation](https://developers.cloudflare.com/r2/reference/data-location/).
If R2 is already processing live data, the future date does not cure an existing disclosure gap; handle
that notice for the affected salons before relying on the new version.

## Verification

Digest and synthetic preview use the actual runtime helper. Source/JSON/runtime equality, date
boundaries and v1 preservation are checked by the focused v2 regression tests; see the shared v2
handoff for the executed result. No live-operation claim follows from these content checks.
