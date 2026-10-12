# Read-only U70 capture harness

This is a capture fixture, not a production route or replacement UI. It imports actual components/CSS at app commit 478710c4c, serves synthetic API data, and rejects writes. The five candidate translations overlay the source locales only in this fixture. The DEV copy version is never an ENV value or approval.

To reproduce on this host: copy these six fixture files to `/private/tmp/perelai-u70-preview`, link its node_modules to `beauty-finance/apps/web/node_modules` and its public directory to `beauty-finance/apps/web/public`; generate `resources.json` as `{locale: {common: <raw common.json>}}` for all nine locales and overlay `candidate-additions.json` into each common namespace. Run the installed Vite with the saved config using Node >=20.19. The config/root paths are intentionally host-specific and read only app source.

UI route: `http://127.0.0.1:4310/book/studio-u70?lang=ru&state=initial`. States: initial, updated, accepted, unavailable, custom. For updated/accepted add only the fake token `t=U70-SYNTHETIC-PREVIEW`. Select 18:00 through the real UI, wait for the hidden `u70-capture-ready` marker (actual page reveal completed), and scroll to Privacy/footer. `theme=dark` chooses dark CSS; `text=200` doubles computed text sizes after content completion (text enlargement simulation, not native browser zoom). Capture viewports: 390×844 and 1280×900; extra DE dark 320×844. No real booking/evidence is created.

Summary/full text and ASAP reminder are UA/uk v1 source strings; only the three Business placeholders are substituted. Published documents are not translated with interface language. Complete unchanged source-file hashes are recorded separately.
