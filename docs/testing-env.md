# Test environment variables

## `TEST_DATABASE_URL`

Required by the `beauty-finance` API integration suites. Without it, every `*.integration.spec.ts` run
fails before its cases execute, at `apps/api/src/common/utils/test-db.ts`:

```text
TEST_DATABASE_URL is not defined in the environment!
```

`apps/api/jest.config.ts` ignores `\.integration\.spec\.ts$` by default, so unit runs are unaffected. To
run an integration suite, override the ignore pattern and target the file:

```bash
cd /Users/valery/Sites/beauty-finance && ./node_modules/.bin/jest --no-cache --config apps/api/jest.config.ts --runInBand --testPathIgnorePatterns='a^' --testPathPatterns='operational-inbox.integration.spec'
```

### Where the value lives

**The connection string is a credential and is deliberately not stored in this repository.** It points at
a live Postgres instance with a username and password; committing it to a tracked file would expose it to
everyone with repository access, to every clone, and to the full git history — where deleting it later
does not remove it.

Keep it in one of these instead:

- an untracked local env file in the app repo (`beauty-finance/.env.test.local`), or
- an exported shell variable for the session:

```bash
export TEST_DATABASE_URL='postgresql://USER:PASSWORD@HOST:PORT/beauty_finance_test'
```

The current value is held by the repository owner. Ask them for it; do not paste it into documentation,
issues, plans, or agent transcripts.

### Claim-audit history unblocked by this variable

| Date | Suite | Result | Consequence |
|---|---|---|---|
| 2026-08-02 (MSG0) | `operational-inbox.integration.spec` | **Blocked** — variable unset | F1 recorded as `PASS (source)` only |
| 2026-08-03 | `operational-inbox.integration.spec` | **14 passed** | F1 upgraded to `PASS` with live integration evidence |
| 2026-08-03 | `finance-audit.integration.spec`, `finance-feed-v2.integration.spec` | **27 passed** | Supports FC1–FC7 in [`finance-claim-contract.md`](finance-claim-contract.md) |

`TC5` (coworker shared availability) remains **HOLD**. Its focused suite was not part of this run, and a
claim status changes only with its own dated verification entry in
[`team-collaboration-claim-contract.md`](team-collaboration-claim-contract.md).
