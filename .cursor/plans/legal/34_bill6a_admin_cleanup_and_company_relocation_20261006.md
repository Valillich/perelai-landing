# Admin cleanup and Company relocation — BILL6A handoff

**Current status — 2026-10-07 (owner update + BILL8A):** G-BE2, PAR-P,
BILL5B (`ffacfc7a4`) and BILL6A (`70c20652d`, accepted operator/CLI scope) are **DONE**.
R1/R2/R3 original fixes are complete. BILL8A inventory is **COMPLETE**; production
Stages A–H remain **BLOCKED** for the specific evidence in [BILL8A report](/Users/valery/Sites/beauty-finance/inventory/bill8a-release-readiness-20261007.md).
Do not rerun completed implementation prompts. Later app commits require a fresh landing
artifact pin; this is release maintenance, not reopening PAR-P/R3. Local sandbox mail and
OPS4 storage simulation do not establish external delivery or production/off-host readiness.
Earlier dated checkpoints below remain historical evidence, not the current execution queue.

**Date:** 2026-10-06. **Updated:** 2026-10-07. **Status:** BILL6A / OPS implementation DONE; production operations remain gated by BILL8.

Canonical implementation plan:
[BILL6A-OPS / monetization plan 13](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/13_bill6a_admin_data_cleanup_and_company_relocation_20261006.plan.md).
Bounded agent prompts:
[monetization document 09](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/09_copy_paste_prompts_20260822.md).

## Owner clarification and preservation boundary

The owner now reports that the real business user has moved to a permitted country and
wants to preserve the existing workspace and business history. Exact Company/User IDs,
destination country and any applicable subdivision are not yet supplied or verified.
This is not authority to guess UA, reuse a historical deletion target, or erase the workspace.
Protect that Company and User from the separate test-data cleanup selection.

This clarification supersedes treating the earlier Polish account as automatically destined
for full closure solely because of its former location. It does not erase historical facts,
outstanding rights requests, retention obligations or an already valid deletion instruction.
If a real deletion case/hold exists, resolve that conflict before relocation. No change to
EU market availability, Perelai's operator establishment or representative status follows.

Previously authorised review/cleanup of client identifiers is a **separate scope**. Renaming
clients alone must not be described as proven anonymisation. This admin addendum preserves
the real CRM data and does not run such transformations.

## Required implementation behavior

- Clean up only explicitly selected test IDs, with a reviewed protection list and dry-run.
  Keep shared payer/membership/Company data intact. No database reset or export/reimport.
- Reuse the existing Company retained-deletion procedure and operational safeguards.
  Archive is not deletion. A minimal retained Company/User is reported honestly, with
  classified evidence and its existing retention policy; no blanket new 1095-day period.
- User cleanup is separate: current legal evidence has restrictive FKs. Close login and
  tokens through a proven lifecycle path; hard-delete only when no retained/shared relation
  needs the User. A password change or removed membership alone is insufficient.
- Relocation requires an actual operating-country instruction and canonical country/region
  admission. CA still excludes QC/AB/BC and needs the current owner's province-bound scope
  declaration. US subdivision remains optional under the current code policy.
- Keep IDs, creation date, trial and payer/provider history, grants, money and appointments.
  Do not infer currency/timezone changes or alter Paddle billing/tax facts.
- Disable booking and invalidate all existing business-legal publication paths during the
  move. The owner verifies current business details and republishes through the normal flow.
  Old acceptance evidence remains immutable; an admin must not manufacture owner assent.
  Legacy custom URLs must not silently become active when a generated setup is cleared.
- Preserve the C-09 perpetual-STUDIO cohort decision. Geography admission and Company
  lifecycle remain separate controls; a grant cannot reopen a deleted/closed workspace.

## Next work and status

1. Finish/accept the reusable BILL6A authority/audit seam and develop **OPS0** inventory.
2. Implement **OPS1** relocation and **OPS2** selected Company cleanup as bounded tasks;
   neither needs completion of the whole classification importer.
3. Implement **OPS3** User closure/retained disposition before claiming users removed.
4. **OPS4** verifies composition and prepares operator instructions. Actual production IDs,
   destination, manifests, maintenance and recovery evidence are supplied for execution.
5. Apply the accepted BILL6A classification/grants to remaining active Companies and continue
   the existing BILL8 release sequence. Cleanup itself enables no commercial flags.

All OPS slices are PLANNED. Base BILL6A remains IN PROGRESS per its own handoff. No legal
document/template revision, production execution, deployment or market activation was made
while preparing this plan.
