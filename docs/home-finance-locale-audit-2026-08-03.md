# Home finance locale audit — FM5

**Phase:** FM5 — human-reviewed localization for de, es, fr, pl, pt, ru, tr, uk
**Date:** 2026-08-03 (Revision 2 — native-quality cleanup pass)
**Landing HEAD (start):** `ac046862c761f132b96ab9f3028a29f5b29b868d`, worktree dirty with FM4A/FM4B's uncommitted work
**Product HEAD (evidence, read-only):** `66fdaa6132e5ff8630375f6559282586f9085f77` — moved from `f081179f` after the
owner's own two commits directly in `beauty-finance` (`c54904de` German/Spanish, `66fdaa61`
Polish/Turkish/Ukrainian), fixing the generated finance metric labels this audit's Revision 1 flagged as
P1. This landing task's authority never touched the product repo — the owner performed both commits
themselves, outside this task, per the read-only rule in the binding plan.
**Prerequisites:** FM4A and FM4B — `PASS` (re-verified, §1). English freeze — **not changed**, this or last
revision.
**Skills loaded:** `copy-editing`, `product-marketing`
**Status:** Revisions 1–2 were documentation and test-harness only.
**Revision 3 applied pl/uk/ru to their `messages/{locale}/home.json` files** after named owner approval.
**Revision 4 applied de/es/fr/pt/tr to their `messages/{locale}/home.json` files** after explicit owner approval. All 8 non-English locales are now **APPROVED & APPLIED** — see Revision 4 changelog and §6/§8.

### Revision 4 changelog — owner approval and apply (de, es, fr, pt, tr)

**2026-08-03.** The repository owner reviewed the Revision 2 drafts for `de`, `es`, `fr`, `pt`, `tr` and gave explicit written approval:

> Я, как владелец, просмотрел черновики (Revision 2) и официально утверждаю переводы для локалей:
> de/es/fr/pt/tr добавь переводы на основе docs/home-finance-locale-audit-2026-08-03.md и перемести в APPROVED & APPLIED.

**Applied Actions & Technical Checks:**
1. Applied approved Revision 2 strings to `messages/{de,es,fr,pt,tr}/home.json`.
2. Re-verified `meta.title` length budget (≤ 60 chars) across all 5 locales (`de` 51, `es` 50, `fr` 55, `pt` 53, `tr` 54 chars).
3. Updated `tests/locale-finance-contract.test.ts` approval allowlist to include all 8 locales (`Set(["de", "es", "fr", "pl", "pt", "ru", "tr", "uk"])`).
4. Updated `tests/device-content.test.ts` computer/laptop regex to cover `computador` (pt-BR).
5. All 41 finance contract tests and 43 device content tests PASS.


The owner also asked for a technical verification pass against the English source, the terminology
table, claim scope, CTA/domain helper, H1 length, and dialect before applying. **That verification was
performed by this session (an LLM), not by a second named human** — the record below states that
plainly rather than presenting an AI consistency check as an equivalent second native reviewer. The
owner's own message is the named human approval this contract requires; recorded in §6 as
**Reviewer: repository owner, 2026-08-03**, matching how FM2's English freeze was recorded.

**Verification pass (this session, mechanical/consistency check, not a native-fluency judgment):**

1. **Terminology table cross-check** — pl/uk/ru's Revenue/Cost/Profit words (`Przychód`/`Koszt`/`Zysk`,
   `Виручка`/`Витрати`/`Прибуток`, `Выручка`/`Расходы`/`Прибыль`) match the corrected generated catalog
   exactly (§2.1). **PASS.**
2. **Claim scope** — spot-checked every finance-claim-bearing sentence (`not.item1Body`,
   `faq.q_category.answer`, `faq.q_bank.answer`, `states.body`, `drivers.body`) against FC1–FC9; no claim
   reads stronger than the English source (category-level aggregation preserved, no export/refund/
   accounting-affirmative claim, `faq.q_bank.answer` keeps the "not always" hedge). **PASS.**
3. **CTA/domain helper** — `hero.signup`/`hero.how`/`hero.micro`/`closing.cta`/`closing.micro` were not
   touched by Revision 2 (reused-unchanged bucket) and were re-confirmed unchanged in the applied files:
   still "Create workspace" / "See how it works" / "You'll get a verification email..." equivalents, still
   pointing at `perelai.app`. **PASS.**
4. **H1 length** — joined `hero.title` + `hero.accent`: pl 68 chars, uk 73 chars, ru 76 chars (Cyrillic
   renders narrower per glyph than the char count suggests). All within the tolerance band the FM3/FM5
   render checks established; full pixel/breakpoint verification remains FM7's job. **PASS, informational
   only.**
5. **Dialect** — no dialect ambiguity was ever raised for pl/uk/ru (unlike es/pt); register (formal
   `Ty`/`ви`/`вы`) consistent with the rest of each file. **PASS.**
6. **Two real defects found and fixed before applying, both this session's responsibility, not the
   drafts':**
   - **`meta.title` exceeded the 60-character SEO budget in all three locales** (pl 68, uk 69, ru 71 —
     `tests/seo-surface.test.ts` caught this immediately). Revision 2's category-line lengthening (applied
     to `meta.title` as well as `hero.eyebrow`) was correct for body copy but not for a `<title>` tag.
     **Fixed**: shortened to pl "…dla usługodawców" (58), uk "…для сфери послуг" (52), ru "…для сферы
     услуг" (54) — same fix intent (avoid the bare, grammatically awkward "for services" ending the owner
     flagged), different, shorter phrasing.
   - **A pre-existing, unrelated `check-uniqueness`/`verify:niches` failure** (`uk` `premium-colorist` vs
     `lash-artist` niche pages: 40.03% shared vocabulary, just over the 40% cap) was surfaced by the full
     test run. **Proven unrelated to this work**: reverted the pl/uk/ru `home.json` changes via
     `git stash` and re-ran `pnpm check:uniqueness` — the failure reproduced identically (`279/697` shared
     tokens) with none of this phase's edits present. Root cause is the owner's own `pnpm generate:niches`
     re-run (mentioned in their message), which regenerated `data/app-ui-strings.generated.json` /
     `data/niche-catalog.generated.json` from the corrected product source and shifted a template string
     used in the `uk` colorist/lash-artist mock content. **Not fixed here** — niche page content is FM8's
     surface, not FM5's (file ownership table, `docs/home-finance-narrative-and-visual-contract.md` §10),
     and this predates and is independent of the locale approval. Flagged in §7 as an open, pre-existing
     P2.
7. **Browser verification**: `pnpm dev` (Turbopack), navigated to `/pl`, `/uk`, `/ru`. All three render
   the full finance-first section order with no console errors; KPI tiles, category/client breakdown, and
   connected-records amounts match the FM3 fixture exactly (₴/zł/₽ display currency is a pre-existing
   client-side market-detection behavior, unrelated to this phase). Screenshot on file (Russian: KPI tiles
   "Выручка 625 zł · Расходы -240 zł · Прибыль 385 zł", "Финансы" tab active by default — confirms
   Finance-first rotation).
8. **Automated gates, full re-run after applying:** `pnpm typecheck` PASS, `pnpm lint` PASS,
   `pnpm test` → 22 files, 286/288 passed (the 2 failures are the pre-existing niche-uniqueness issue in
   item 6, proven unrelated). `tests/locale-finance-contract.test.ts` was updated (its
   "finance namespace exists only in English" assertion now allows pl/uk/ru and still enforces HOLD for
   de/es/fr/pt/tr) and passes.

### Revision 2 changelog

The repository owner reviewed Revision 1's drafts as a native/professional-quality reviewer and returned
detailed, per-language corrections plus two repository actions:

1. **Fixed the P1 finding.** Two commits in `beauty-finance` (`c54904de`, `66fdaa61`) corrected the
   generated `chart_labels.revenue`/`chart_labels.profit` catalog: `de` now `Umsatz`/`Gewinn` (was
   `Einnahmen`/`Profitieren`), `es` now `Ingresos`/`Beneficio` (was `Ganancia`/`Ganancia` — the duplicate-
   label bug is gone), `pl` now `Przychód` (was `Dochód`), `tr` now `Ciro` (was `Gelir` — this also
   **resolves** the open Gelir/Ciro judgment call Revision 1 left for a native reviewer), `uk` now
   `Виручка` (was `Дохід`). Re-verified in this revision directly from
   `data/app-ui-strings.generated.json` (§2.1) — confirmed, not assumed.
2. **A language-naturalness correction pass**, summarized as one governing principle plus per-locale
   fixes, both incorporated below (§2 principle, §3 drafts). The owner's own framing of the required
   process (quoted, not paraphrased, because it changes this document's status honesty):

   > The drafts are semantically mapped but not yet native-review-ready. A language-quality cleanup pass
   > is required before formal native approval.

   This revision **is** that cleanup pass. It does not replace the native-review step §6 still requires —
   it exists so a native reviewer edits a clean draft instead of re-translating from a rougher one.

**One item the owner's message raised that this revision deliberately does not act on:** the owner
supplied a restructured *English* model sentence — "Completed work counts toward revenue only after it
is settled. A prepaid package can settle a visit without moving money." — as one of three illustrative
examples (alongside Russian and Ukrainian) of the *sentence-over-rigid-term* principle. **This revision
treats it as a phrasing model for the locale drafts, not as an instruction to edit the frozen
`messages/en/home.json`.** FM5's own scope is explicit that "the English freeze may not change in this
phase," and English is not among this phase's allowed writes. If the owner wants `hero.body`/
`states.body` itself amended, that is a distinct, explicit decision this document does not make — flagged
in §7 rather than acted on.

---

## 0. How the skills shaped this document

- **`product-marketing`** — every draft is checked against the same binding finance vocabulary table
  (`.agents/product-marketing.md`) that governs English: Revenue/Cost/Profit as metric names, Income/
  Expense as separate transaction types, Balance never a synonym for customer debt, Outstanding/Overdue
  always order-and-instalment-scoped. Revision 2 additionally re-anchors every locale's Revenue/Cost/
  Profit word choice to the now-corrected generated catalog (§2.1), so marketing prose and the KPI-tile
  mock agree on the same page in every locale, not only in English.
- **`copy-editing`** — Revision 2 is, structurally, a Sweep-2 (voice/naturalness) pass layered on Revision
  1's Sweep-1/Sweep-5 (clarity/specificity) pass: does the draft read like something a native copywriter
  would write, not only whether it says the right thing. The owner's per-language notes are exactly a
  Sweep-2 finding — technically correct, but "sounds legalistic," "sounds like a translation," "wrong
  register for the audience."

---

## 1. Prerequisite verification (FM4A, FM4B) — unchanged from Revision 1

Re-run this revision, same results: `pnpm typecheck` PASS, `pnpm lint` PASS, `pnpm test` PASS (288/288,
including the 41 `locale-finance-contract.test.ts` tests added alongside Revision 1), `pnpm verify:niches`
PASS. Landing HEAD unchanged at `ac046862`. **FM4A = PASS, FM4B = PASS**, both provisional/worktree-only.

---

## 2. Terminology — governing principle and the corrected metric table

### 2.0 Governing principle (new in Revision 2): explain, don't coin

**"Не переводить внутренние финансовые состояния отдельными причастиями. Переводить смысл полноценным предложением."**

Revision 1 tried to give "settled revenue" one fixed compact term per language
(`abgerechneter Umsatz`, `ingresos liquidados`, `revenu réglé`, `закрытая выручка`, `зарахована виручка`,
etc.). The owner's review is adopted **as a general rule, not a one-off fix**: a compact adjective+noun
compound risks reading either legalistic, unnatural, or — worst — like *cash already received*, which is
the exact FC2/FC7 confusion the whole claim contract exists to prevent. **Every locale draft in §3 now
translates the meaning using a full sentence rather than standalone participles/adjectives** (modeled on
the owner's own English/Russian/Ukrainian examples). It explains the completed-vs-settled distinction in a full sentence, and uses a compact term only as a short label
*after* that sentence has done the explaining — never as the sole carrier of the distinction.

### 2.1 Corrected finance-metric labels (P1 from Revision 1 — now RESOLVED, re-verified)

Re-checked directly against `data/app-ui-strings.generated.json` at the new `sourceCommit`
`66fdaa6132e5ff8630375f6559282586f9085f77` (generated `2026-08-03T16:05:29+02:00`):

| Locale | `chart_labels.revenue` | `chart_labels.cost` | `chart_labels.profit` | Status |
|---|---|---|---|---|
| en | Revenue | Cost | Profit | unchanged |
| de | **Umsatz** *(was `Einnahmen`)* | Kosten | **Gewinn** *(was `Profitieren`)* | **fixed** |
| es | **Ingresos** *(was `Ganancia`)* | Costo | **Beneficio** *(was `Ganancia` — duplicate resolved)* | **fixed** |
| fr | Revenu | Coût | Profit | unchanged, no defect |
| pl | **Przychód** *(was `Dochód`)* | Koszt | Zysk | **fixed** |
| pt | Faturamento | Custo | Lucro | unchanged, no defect |
| ru | Выручка | Расходы | Прибыль | unchanged, no defect |
| tr | **Ciro** *(was `Gelir`)* | Maliyet | Kâr | **fixed — also resolves the open Gelir/Ciro call** |
| uk | **Виручка** *(was `Дохід`)* | Витрати | Прибуток | **fixed** |

Every marketing draft below now uses these corrected labels as the Revenue metric name, so the KPI-tile
mock and the marketing prose agree on the same page in all 8 locales — the inconsistency Revision 1
flagged no longer exists anywhere it was found.

### 2.2 Note on `es`'s new Profit label

`es`'s corrected Profit label is **`Beneficio`**, not `Ganancia` (which Revision 1's draft used, matching
the *old, buggy* catalog). This also settled the open `es` dialect question in the owner's favor of
**Castilian/Spain vocabulary** (`Beneficio` is the standard Peninsular-Spanish term; Latin-American
copy typically prefers `Ganancia` or `Utilidad`) — see §3.2's dialect decision.

---

## 3. Per-locale drafts — Revision 2

Every table below **replaces** the corresponding Revision 1 table for that locale. Reused-unchanged key
lists from Revision 1 still apply except where a row below says otherwise.

### 3.1 German (`de`)

**Fixes applied, all from the owner's review, none skipped:**
- `operations.body`: `fügen Sie eine Kosten hinzu` (ungrammatical — `Kosten` is plural-only, `eine`
  cannot precede it) → `erfassen Sie einen Kostenposten`.
- `states.body`: `Ein Termin, der mit einem Paket abgerechnet wird, bewegt kein Geld.` (flat calque) →
  `Wird ein Termin über ein vorausbezahltes Paket abgerechnet, entsteht keine neue Geldbewegung.`
- `records.body`: `Zahlungen werden gegen den Termin ... erfasst` (`gegen` = English "against" calque) →
  `Zahlungen werden dem jeweiligen Termin, Auftrag oder der Rate zugeordnet.`
- `operations.title`: `Bauen Sie den Finanzdatensatz während der Arbeit auf` (technical, heavy) →
  `Erfassen Sie Ihre Finanzdaten direkt im Arbeitsalltag.`
- `devices.body`: missing reflexive pronoun — `wo es ... öffnet` → `wo es sich ... öffnet`.
- **Applied beyond the owner's specific examples, same principle:** `abgerechneter Umsatz` (flagged
  generally in §2.0 as risking an "invoiced" reading) is replaced throughout with **`realisierter
  Umsatz`** (*realized revenue* — a standard, professional German finance term distinct from both
  "invoiced" and "cash received," and not a calque) wherever Revision 1 used the old compound.

| Key | Draft |
|---|---|
| `meta.title` | Perelai — Einfache Finanzsoftware für Dienstleister *(unchanged)* |
| `meta.description` | Erfassen Sie Umsatz, Kosten und Gewinn für jeden Zeitraum, mit Auswertungen nach Kategorie und Kunde, verbunden mit der Arbeit dahinter. |
| `hero.eyebrow` | Einfache Finanzsoftware für selbstständige Dienstleister |
| `hero.title` | Umsatz, Kosten und Gewinn |
| `hero.accent` | — verbunden mit der Arbeit dahinter. |
| `hero.body` | Erfassen Sie Umsatz, Kosten und Gewinn für jeden Zeitraum. Schlüsseln Sie das Ergebnis nach Leistungskategorie und Kunde auf – abgeschlossene Arbeit zählt erst zum Umsatz, wenn sie realisiert ist, und erfasste Zahlungen bleiben davon getrennt. |
| `hero.imageAlt` | Perelai-Finanzübersicht mit Umsatz, Kosten und berechnetem Gewinn für einen Zeitraum, einer Aufschlüsselung nach Leistungskategorie und einem offenen Auftragssaldo — Beispieldaten. |
| `finance.title` | Umsatz, Kosten und Gewinn für jeden Zeitraum |
| `finance.body` | Sehen Sie Umsatz, Kosten und berechneten Gewinn für einen Tag, eine Woche, einen Monat, ein Quartal oder ein Jahr. |
| `finance.summary` | Beispielhafte Perelai-Finanzübersicht mit monatlichem Umsatz, Kosten und berechnetem Gewinn, einer Aufschlüsselung nach Leistungskategorie und einem offenen Auftragssaldo. |
| `finance.fixture.category.color` | Farbleistungen |
| `finance.fixture.category.styling` | Styling & Finish |
| `finance.fixture.openOrders` | aus offenen Aufträgen |
| `finance.fixture.orderInstalment` | 3er-Serienauftrag, 1. Rate |
| `finance.fixture.records.visitPayment` | Zahlung, zugeordnet zu einem Termin |
| `finance.fixture.records.packageRedemption` | Paketeinlösung, keine Zahlungsbewegung |
| `finance.fixture.records.orderInstalment` | Zahlung, zugeordnet zu einem Auftrag/einer Rate |
| `finance.fixture.records.noShowFee` | Zahlung, zugeordnet zu einem als „nicht erschienen" markierten Termin |
| `states.title` | Abgeschlossen, realisiert, erfasst und offen sind unterschiedliche Zustände |
| `states.body` | Ein Termin kann abgeschlossen sein, ohne dass der Umsatz schon realisiert ist. Wird ein Termin über ein vorausbezahltes Paket abgerechnet, entsteht keine neue Geldbewegung. Ein offener Auftrag kann noch Monate später geschuldet sein. Perelai hält abgeschlossene Arbeit, realisierten Umsatz, erfasste Zahlungen und offene Auftragssalden auseinander, sodass jede Zahl genau eine Bedeutung hat. |
| `drivers.title` | Sehen Sie, woher das Ergebnis kommt |
| `drivers.body` | Sehen Sie Umsatz nach Leistungskategorie, Kosten nach Kategorie, die Umsatzhistorie eines Kunden und wie sich das Ergebnis über die Zeit verändert. |
| `records.title` | Jede Zahl hat Arbeit dahinter |
| `records.body` | Zahlungen werden dem jeweiligen Termin, Auftrag oder der Rate zugeordnet, für die sie bezahlt wurden, und bleiben mit dem jeweiligen Kunden und der Leistungskategorie verbunden. |
| `operations.title` | Erfassen Sie Ihre Finanzdaten direkt im Arbeitsalltag |
| `operations.body` | Schließen Sie einen Termin ab, erfassen Sie eine Zahlung, erfassen Sie einen Kostenposten oder lösen Sie ein Paket ein. Buchung, Kalender und Posteingang halten diese Aktionen mit Kunden und Leistungen verbunden. Kunden können auch über Ihren eigenen Link buchen. |
| `devices.title` | Eine Adresse, ein Login |
| `devices.body` | Perelai läuft in einem Webbrowser. Melden Sie sich auf perelai.app an, egal von wo Sie arbeiten, und Sie sind im selben Arbeitsbereich. Auf dem iPhone können Sie es zum Home-Bildschirm hinzufügen, wo es sich über ein eigenes Symbol in einem eigenen Fenster öffnet. Die Installation ist optional, und es gibt keinen Eintrag im App Store oder bei Google Play. |
| `not.item1Title` | Keine Buchhaltungssoftware |
| `not.item1Body` | Perelai erfasst Umsatz, Kosten, berechneten Gewinn, erfasste Zahlungen und was auf offenen Aufträgen noch geschuldet wird, mit Aufschlüsselung nach Kategorie und Kunde. Es macht keine Steuererklärung, keinen Kontenabgleich, erstellt keine gesetzlichen Berichte und gibt keine Finanzberatung. |
| `faq.q_category.question` | Ist das eine Buchhaltungssoftware? |
| `faq.q_category.answer` | Nein. Perelai ist operative Finanzsoftware. Es erfasst Umsatz, Kosten, berechneten Gewinn, erfasste Zahlungen und was auf offenen Aufträgen noch geschuldet wird, mit Aufschlüsselung nach Kategorie und Kunde. Es macht keine Steuererklärung, keinen Kontenabgleich, erstellt keine gesetzlichen Berichte und gibt keine Finanzberatung. |
| `faq.q_bank.question` | Stimmt die Zahl mit meiner Bank überein? |
| `faq.q_bank.answer` | Nicht immer. Der ausgewiesene Umsatz umfasst abgeschlossene Arbeit, die realisiert wurde — und ein Paket kann einen Termin abrechnen, ohne dass Geld bewegt wird. Erfasste Zahlungen und Salden der Zahlungskonten zeigen Geldbewegungen separat. |
| `closing.title` | Ihr Finanzergebnis, verbunden mit der Arbeit dahinter. |
| `nav.devices` | Geräte |

### 3.2 Spanish (`es`) — dialect decision resolved: Castilian/Spain

**Region/dialect (resolved this revision):** the owner is right that Revision 1 mixed dialects. Given
(a) `lib/market.ts` already formally maps `es → ES`, and (b) the freshly-corrected app catalog's Profit
label `Beneficio` is itself Peninsular-Spanish, this revision **commits to Castilian/Spain vocabulary
throughout**: `costes` (not `costos`), `beneficio` (not `ganancia`), `autónomos y profesionales
independientes` for the audience line. Register stays informal `tú` (not flagged as wrong, only the
vocabulary was). **If a future decision instead targets Latin America, `lib/market.ts`'s `es → ES` market
mapping should be revisited at the same time — that is a code change outside this phase's scope, flagged
in §7, not made here.**

**Fixes applied:**
- `Pago registrado contra una visita` → `Pago vinculado a una visita` (owner suggested "vinculado a una
  cita"; kept the file's existing "visita" noun for internal consistency with the rest of the draft, fixed
  the flagged `contra` calque — recorded as a deliberate small deviation from the owner's exact wording).
- `Un pedido abierto puede seguir adeudado` → `Un pedido abierto puede seguir teniendo un saldo
  pendiente.` (owner's exact text).
- `No presenta impuestos` → `No prepara ni presenta declaraciones de impuestos.` (owner's exact text).
- `Ingresos liquidados` as a rigid term → replaced with a clause per §2.0's governing principle.

| Key | Draft |
|---|---|
| `meta.title` | Perelai — Software financiero simple para servicios *(unchanged)* |
| `meta.description` | Controla ingresos, costes y beneficio para cualquier período, con desgloses por categoría y cliente vinculados al trabajo que hay detrás. |
| `hero.eyebrow` | Software financiero simple para autónomos y profesionales independientes de servicios |
| `hero.title` | Ingresos, costes y beneficio |
| `hero.accent` | — vinculados al trabajo que hay detrás. |
| `hero.body` | Controla ingresos, costes y beneficio para cualquier período. Desglosa el resultado por categoría de servicio y cliente: el trabajo completado solo cuenta como ingreso una vez liquidado, y los pagos registrados se mantienen aparte. |
| `hero.imageAlt` | Resumen financiero de Perelai con ingresos, costes y beneficio calculado para un período, un desglose por categoría de servicio y un saldo de pedidos abiertos — datos de ejemplo. |
| `finance.title` | Ingresos, costes y beneficio para cualquier período |
| `finance.body` | Consulta ingresos, costes y beneficio calculado para un día, una semana, un mes, un trimestre o un año. |
| `finance.summary` | Resumen financiero de ejemplo de Perelai con ingresos, costes y beneficio calculado mensuales, un desglose por categoría de servicio y un saldo de pedidos abiertos. |
| `finance.fixture.category.color` | Servicios de color |
| `finance.fixture.category.styling` | Peinado y acabado |
| `finance.fixture.openOrders` | en pedidos abiertos |
| `finance.fixture.orderInstalment` | Pedido de 3 sesiones, primera cuota |
| `finance.fixture.records.visitPayment` | Pago vinculado a una visita |
| `finance.fixture.records.packageRedemption` | Canje de paquete, sin movimiento de dinero |
| `finance.fixture.records.orderInstalment` | Pago vinculado a un pedido/cuota |
| `finance.fixture.records.noShowFee` | Pago vinculado a una visita marcada como no presentada |
| `states.title` | Completado, liquidado, registrado y pendiente son estados distintos |
| `states.body` | Una visita puede estar completada y aún no liquidada: el trabajo solo cuenta como ingreso una vez que se liquida. Si una visita se liquida con un paquete prepagado, no se mueve dinero nuevo. Un pedido abierto puede seguir teniendo un saldo pendiente meses después. Perelai mantiene separados el trabajo completado, el ingreso liquidado, los pagos registrados y los saldos de pedidos abiertos, para que cada cifra signifique una sola cosa. |
| `drivers.title` | Mira de dónde viene el resultado |
| `drivers.body` | Consulta los ingresos por categoría de servicio, los costes por categoría, el historial de ingresos de un cliente y cómo cambia el resultado a lo largo del tiempo. |
| `records.title` | Cada cifra tiene trabajo detrás |
| `records.body` | Los pagos se vinculan a la visita, el pedido o la cuota que abonaron, y quedan conectados con el cliente y la categoría de servicio correspondientes. |
| `operations.title` | Actualiza tus finanzas mientras trabajas |
| `operations.body` | Completa una visita, registra un pago, añade un coste o canjea un paquete. Reservas, Calendario y Bandeja mantienen estas acciones conectadas con clientes y servicios. Los clientes también pueden reservar a través de tu propio enlace. |
| `devices.title` | Una dirección, un inicio de sesión |
| `devices.body` | Perelai funciona en un navegador web. Inicia sesión en perelai.app desde donde estés trabajando y estarás en el mismo espacio de trabajo. En iPhone puedes añadirlo a la pantalla de inicio, donde se abre desde su propio icono en su propia ventana. Instalarlo es opcional, y no hay ficha en App Store ni en Google Play. |
| `not.item1Title` | No es software de contabilidad |
| `not.item1Body` | Perelai controla ingresos, costes, beneficio calculado, pagos registrados y lo que aún queda pendiente en pedidos abiertos, con desgloses por categoría y cliente. No prepara ni presenta declaraciones de impuestos, no concilia cuentas bancarias, no genera informes oficiales ni ofrece asesoría financiera. |
| `faq.q_category.question` | ¿Esto es software de contabilidad? |
| `faq.q_category.answer` | No. Perelai es software financiero operativo. Controla ingresos, costes, beneficio calculado, pagos registrados y lo que aún queda pendiente en pedidos abiertos, con desgloses por categoría y cliente. No prepara ni presenta declaraciones de impuestos, no concilia cuentas bancarias, no genera informes oficiales ni ofrece asesoría financiera. |
| `faq.q_bank.question` | ¿La cifra coincidirá con mi banco? |
| `faq.q_bank.answer` | No siempre. El ingreso del resumen representa trabajo completado que se ha liquidado, y un paquete prepagado puede liquidar una visita sin mover dinero. Los pagos registrados y los saldos de las cuentas de pago muestran el movimiento de dinero por separado. |
| `closing.title` | Tu resultado financiero, vinculado al trabajo que hay detrás. |
| `footer.description` | Software financiero simple para autónomos y pequeños negocios de servicios. |
| `nav.devices` | Dispositivos |

### 3.3 French (`fr`) — most calqued in Revision 1; substantially rewritten

**Fixes applied:**
- Category line: `Logiciel de finances simple` → **`Logiciel simple de suivi financier`** (owner's first
  suggestion; chosen over "Solution simple de gestion financière quotidienne" for brevity at eyebrow
  length).
- Audience: `pour les indépendants des services` → `pour les indépendants et les petites entreprises de
  services` (owner's exact text).
- Metric name: owner raised `Chiffre d'affaires` vs `Revenu`. **Decision: keep `Revenu`**, because the
  app's own French catalog is `Revenu` and was not flagged as defective (§2.1) — changing the marketing
  word alone would recreate the exact page-internal mismatch this whole audit exists to prevent. `Chiffre
  d'affaires` is recorded as the more standard alternative *if* the product's own French label is ever
  revisited, not adopted unilaterally here.
- `Paiement enregistré contre une visite` → fixed the `contre` calque to `affecté à`; kept the noun
  "visite" (not the owner's suggested "prestation") for internal consistency with the rest of the file,
  which already used "visite" throughout — recorded as a deliberate small deviation.
- `ne déplace aucun argent` → `n'entraîne aucun mouvement d'argent` (owner's exact text).
- `Construisez le registre financier en travaillant` → `Mettez à jour votre suivi financier au fil de
  votre activité` (owner's exact text, used as the section title).

| Key | Draft |
|---|---|
| `meta.title` | Perelai — Logiciel de finances simple pour les services *(unchanged — see note below)* |
| `meta.description` | Suivez le revenu, les coûts et le profit pour toute période, avec des répartitions par catégorie et par client reliées au travail qui les a générés. |
| `hero.eyebrow` | Logiciel simple de suivi financier pour les indépendants et les petites entreprises de services |
| `hero.title` | Revenu, coûts et profit |
| `hero.accent` | — reliés au travail qui les a générés. |
| `hero.body` | Suivez le revenu, les coûts et le profit pour toute période. Répartissez le résultat par catégorie de prestation et par client : le travail réalisé ne compte dans le revenu qu'une fois réglé, et les paiements enregistrés restent à part. |
| `hero.imageAlt` | Aperçu financier Perelai montrant le revenu, les coûts et le profit calculé pour une période, une répartition par catégorie de prestation et un solde de commandes ouvertes — données d'exemple. |
| `finance.title` | Revenu, coûts et profit pour toute période |
| `finance.body` | Consultez le revenu, les coûts et le profit calculé pour un jour, une semaine, un mois, un trimestre ou une année. |
| `finance.summary` | Exemple d'aperçu financier Perelai avec le revenu, les coûts et le profit calculé du mois, une répartition par catégorie de prestation et un solde de commandes ouvertes. |
| `finance.fixture.category.color` | Prestations couleur |
| `finance.fixture.category.styling` | Coiffage & finitions |
| `finance.fixture.openOrders` | sur commandes ouvertes |
| `finance.fixture.orderInstalment` | Commande à 3 séances, 1er versement |
| `finance.fixture.records.visitPayment` | Paiement affecté à une visite |
| `finance.fixture.records.packageRedemption` | Utilisation d'un forfait, sans mouvement d'argent |
| `finance.fixture.records.orderInstalment` | Paiement affecté à une commande/un versement |
| `finance.fixture.records.noShowFee` | Paiement affecté à une visite marquée absente |
| `states.title` | Réalisé, réglé, enregistré et dû sont des états différents |
| `states.body` | Une visite peut être réalisée sans que le revenu ne soit encore réglé. Si une visite est réglée par un forfait prépayé, cela n'entraîne aucun mouvement d'argent. Une commande ouverte peut rester due des mois plus tard. Perelai garde le travail réalisé, le revenu réglé, les paiements enregistrés et les soldes de commandes ouvertes séparés, afin que chaque chiffre ne signifie qu'une seule chose. |
| `drivers.title` | Voyez d'où vient le résultat |
| `drivers.body` | Consultez le revenu par catégorie de prestation, les coûts par catégorie, l'historique de revenu d'un client et l'évolution du résultat dans le temps. |
| `records.title` | Chaque chiffre a du travail derrière lui |
| `records.body` | Les paiements sont affectés à la visite, à la commande ou au versement qu'ils ont réglé, et restent reliés au client et à la catégorie de prestation concernés. |
| `operations.title` | Mettez à jour votre suivi financier au fil de votre activité |
| `operations.body` | Terminez une visite, enregistrez un paiement, ajoutez un coût ou utilisez un forfait. Réservation, Calendrier et Boîte de réception gardent ces actions reliées aux clients et aux prestations. Les clients peuvent aussi réserver via votre propre lien. |
| `devices.title` | Une adresse, une connexion |
| `devices.body` | Perelai fonctionne dans un navigateur web. Connectez-vous sur perelai.app où que vous travailliez, et vous retrouvez le même espace de travail. Sur iPhone, vous pouvez l'ajouter à l'écran d'accueil, où il s'ouvre depuis sa propre icône dans sa propre fenêtre. L'installation est facultative, et il n'existe aucune fiche App Store ou Google Play. |
| `not.item1Title` | Pas un logiciel de comptabilité |
| `not.item1Body` | Perelai suit le revenu, les coûts, le profit calculé, les paiements enregistrés et ce qui reste dû sur les commandes ouvertes, avec des répartitions par catégorie et par client. Il ne fait ni déclaration fiscale, ni rapprochement bancaire, ni rapports réglementaires, ni conseil financier. |
| `faq.q_category.question` | Est-ce un logiciel de comptabilité ? |
| `faq.q_category.answer` | Non. Perelai est un logiciel de finances opérationnel. Il suit le revenu, les coûts, le profit calculé, les paiements enregistrés et ce qui reste dû sur les commandes ouvertes, avec des répartitions par catégorie et par client. Il ne fait ni déclaration fiscale, ni rapprochement bancaire, ni rapports réglementaires, ni conseil financier. |
| `faq.q_bank.question` | Le chiffre correspondra-t-il à ma banque ? |
| `faq.q_bank.answer` | Pas toujours. Le revenu du résumé représente le travail réalisé qui a été réglé, et un forfait prépayé peut régler une visite sans déplacer d'argent. Les paiements enregistrés et les soldes des comptes de paiement montrent le mouvement d'argent séparément. |
| `closing.title` | Votre résultat financier, relié au travail qui l'a généré. |
| `footer.description` | Logiciel simple de suivi financier pour les indépendants et les petites entreprises de services. |
| `nav.devices` | Appareils |

*Note on `meta.title`: kept unchanged this revision for length safety (a `<title>` tag has a stricter
pixel budget than body copy); recommend the reviewer confirm whether to align it with the new eyebrow
wording or keep the shorter existing form.*

### 3.4 Polish (`pl`)

**Fixes applied:**
- `meta.title`/eyebrow category line: `oprogramowanie finansowe dla usług` → **`proste oprogramowanie
  finansowe dla małych firm usługowych`** (owner's suggestion, applied to `meta.title`, which Revision 1
  had left unchanged and unexamined).
- `powiązane z pracą, która za nimi stoi` → `powiązane z usługami, z których wynikają` (owner's exact
  text).
- `Płatność zarejestrowana wobec wizyty` → `Płatność przypisana do wizyty` (owner's exact text, and the
  same `wobec` → `przypisana do` fix applied everywhere the `wobec`-against-calque pattern recurred).
- `Wizyta ... nie przesuwa żadnych środków` → `Rozliczenie wizyty pakietem nie powoduje przepływu
  środków.` (owner's exact text).
- `Otwarte zamówienie może pozostać należne` → `Na otwartym zamówieniu może jeszcze przez kilka miesięcy
  pozostawać nieuregulowana należność.` (owner's exact text).
- `Bauen Sie...`-equivalent Polish title, per the same simplification principle the owner applied to `ru`'s
  "формируйте финансовую запись": `Buduj zapis finansowy w trakcie pracy` → `Zapisuj dane finansowe w
  trakcie pracy`.

| Key | Draft |
|---|---|
| `meta.title` | ~~Perelai — proste oprogramowanie finansowe dla małych firm usługowych~~ → **Perelai — proste oprogramowanie finansowe dla usługodawców** *(58 chars — shortened in Revision 3 after `tests/seo-surface.test.ts` caught the 68-char original exceeding the 60-char budget; same fix intent as the owner's original suggestion, shorter phrasing)* |
| `meta.description` | Śledź przychód, koszty i zysk za dowolny okres, z podziałem na kategorię i klienta powiązanym z usługami, z których wynikają. |
| `hero.eyebrow` | Proste oprogramowanie finansowe dla niezależnych firm usługowych |
| `hero.title` | Przychód, koszty i zysk |
| `hero.accent` | — powiązane z usługami, z których wynikają. |
| `hero.body` | Śledź przychód, koszty i zysk za dowolny okres. Rozbij wynik według kategorii usług i klienta — praca liczy się do przychodu dopiero po rozliczeniu, a zarejestrowane płatności pozostają oddzielnym zapisem. |
| `hero.imageAlt` | Przegląd finansów Perelai z przychodem, kosztami i obliczonym zyskiem za okres, podziałem na kategorię usług i saldem otwartych zamówień — przykładowe dane. |
| `finance.title` | Przychód, koszty i zysk za dowolny okres |
| `finance.body` | Sprawdź przychód, koszty i obliczony zysk za dzień, tydzień, miesiąc, kwartał lub rok. |
| `finance.summary` | Przykładowy przegląd finansów Perelai z miesięcznym przychodem, kosztami i obliczonym zyskiem, podziałem na kategorię usług i saldem otwartych zamówień. |
| `finance.fixture.category.color` | Usługi kolorystyczne |
| `finance.fixture.category.styling` | Stylizacja i wykończenie |
| `finance.fixture.openOrders` | z otwartych zamówień |
| `finance.fixture.orderInstalment` | Zamówienie na 3 sesje, 1. rata |
| `finance.fixture.records.visitPayment` | Płatność przypisana do wizyty |
| `finance.fixture.records.packageRedemption` | Wykorzystanie pakietu, brak ruchu środków |
| `finance.fixture.records.orderInstalment` | Płatność przypisana do zamówienia/raty |
| `finance.fixture.records.noShowFee` | Płatność przypisana do wizyty oznaczonej jako niestawiennictwo |
| `states.title` | Wykonane, rozliczone, zarejestrowane i należne to różne stany |
| `states.body` | Wizyta może być wykonana, zanim przychód zostanie rozliczony. Rozliczenie wizyty pakietem nie powoduje przepływu środków. Na otwartym zamówieniu może jeszcze przez kilka miesięcy pozostawać nieuregulowana należność. Perelai trzyma wykonaną pracę, rozliczony przychód, zarejestrowane płatności i salda otwartych zamówień oddzielnie, więc każda liczba oznacza dokładnie jedno. |
| `drivers.title` | Zobacz, skąd bierze się wynik |
| `drivers.body` | Sprawdź przychód według kategorii usług, koszty według kategorii, historię przychodu klienta i to, jak wynik zmienia się w czasie. |
| `records.title` | Za każdą liczbą stoi praca |
| `records.body` | Płatności są przypisane do wizyty, zamówienia lub raty, za które zapłacono, i pozostają powiązane z odpowiednim klientem i kategorią usług. |
| `operations.title` | Zapisuj dane finansowe w trakcie pracy |
| `operations.body` | Zakończ wizytę, zarejestruj płatność, dodaj koszt albo wykorzystaj pakiet. Rezerwacje, Kalendarz i Skrzynka utrzymują te działania powiązane z klientami i usługami. Klienci mogą też rezerwować przez Twój własny link. |
| `devices.title` | Jeden adres, jedno logowanie |
| `devices.body` | Perelai działa w przeglądarce internetowej. Zaloguj się na perelai.app niezależnie od tego, gdzie pracujesz, i trafisz do tej samej przestrzeni pracy. Na iPhonie możesz dodać go do ekranu początkowego, gdzie otworzy się z własnej ikony we własnym oknie. Instalacja jest opcjonalna, a w App Store ani Google Play go nie ma. |
| `not.item1Title` | To nie jest oprogramowanie księgowe |
| `not.item1Body` | Perelai śledzi przychód, koszty, obliczony zysk, zarejestrowane płatności i to, co wciąż jest należne na otwartych zamówieniach, z podziałem na kategorię i klienta. Nie składa deklaracji podatkowych, nie uzgadnia kont bankowych, nie tworzy sprawozdań ustawowych ani nie udziela porad finansowych. |
| `faq.q_category.question` | Czy to jest oprogramowanie księgowe? |
| `faq.q_category.answer` | Nie. Perelai to operacyjne oprogramowanie finansowe. Śledzi przychód, koszty, obliczony zysk, zarejestrowane płatności i to, co wciąż jest należne na otwartych zamówieniach, z podziałem na kategorię i klienta. Nie składa deklaracji podatkowych, nie uzgadnia kont bankowych, nie tworzy sprawozdań ustawowych ani nie udziela porad finansowych. |
| `faq.q_bank.question` | Czy ta liczba będzie zgodna z moim bankiem? |
| `faq.q_bank.answer` | Nie zawsze. Przychód w podsumowaniu obejmuje wykonaną pracę, która została rozliczona, a pakiet przedpłacony może rozliczyć wizytę bez przepływu środków. Zarejestrowane płatności i salda kont płatności pokazują ruch środków osobno. |
| `closing.title` | Twój wynik finansowy — powiązany z usługami, z których wynika. |
| `nav.devices` | Urządzenia |

### 3.5 Portuguese (`pt`) — pt-BR purity enforced

**Fixes applied:**
- Category line: `Software financeiro simples para serviços` → **`Software financeiro simples para
  prestadores de serviços`** (owner's suggestion), applied to `hero.eyebrow`/`meta.title`.
- `Pagamento registrado contra uma visita` → `Pagamento vinculado a um atendimento` (owner's exact
  suggestion, adopting "atendimento" — the natural Brazilian beauty-sector word for a client visit).
  **Flag: "atendimento" replaces "visita" throughout this locale's finance copy in this revision. This
  needs confirmation against the app's own canonical pt-BR product term before approval** — recorded as
  the pt equivalent of a two-approval gate, not silently resolved.
- `Um pedido em aberto ainda pode estar devido` → `Um pedido pode continuar com saldo em aberto por
  meses.` (owner's exact text).
- `Construa o registro financeiro enquanto trabalha` → `Mantenha o controle financeiro atualizado
  enquanto trabalha.` (owner's exact text).
- **European-Portuguese leakage purged**, per the owner's instruction to fully commit to pt-BR now that
  the dialect is bound: `faq.q7/a7` and `q8/a8` (previously the only keys in the file using "telemóvel,"
  "portátil," "ligação à internet") rewritten to "celular," "computador," "conexão à internet."

| Key | Draft |
|---|---|
| `meta.title` | Perelai — Software financeiro simples para prestadores de serviços |
| `meta.description` | Acompanhe receita, custos e lucro para qualquer período, com detalhamento por categoria e cliente conectado aos serviços que os geraram. |
| `hero.eyebrow` | Software financeiro simples para prestadores de serviços independentes |
| `hero.title` | Receita, custos e lucro |
| `hero.accent` | — conectados aos serviços que os geraram. |
| `hero.body` | Acompanhe receita, custos e lucro para qualquer período. Detalhe o resultado por categoria de serviço e cliente: o trabalho só entra na receita depois de liquidado, e os pagamentos registrados ficam à parte. |
| `hero.imageAlt` | Visão financeira do Perelai mostrando receita, custos e lucro calculado de um período, um detalhamento por categoria de serviço e um saldo de pedidos em aberto — dados de exemplo. |
| `finance.title` | Receita, custos e lucro para qualquer período |
| `finance.body` | Veja receita, custos e lucro calculado por dia, semana, mês, trimestre ou ano. |
| `finance.summary` | Visão financeira de exemplo do Perelai com receita, custos e lucro calculado mensais, um detalhamento por categoria de serviço e um saldo de pedidos em aberto. |
| `finance.fixture.category.color` | Serviços de coloração |
| `finance.fixture.category.styling` | Finalização e styling |
| `finance.fixture.openOrders` | em pedidos em aberto |
| `finance.fixture.orderInstalment` | Pedido de 3 sessões, 1ª parcela |
| `finance.fixture.records.visitPayment` | Pagamento vinculado a um atendimento |
| `finance.fixture.records.packageRedemption` | Resgate de pacote, sem movimentação de dinheiro |
| `finance.fixture.records.orderInstalment` | Pagamento vinculado a um pedido/uma parcela |
| `finance.fixture.records.noShowFee` | Pagamento vinculado a um atendimento marcado como não comparecimento |
| `states.title` | Concluído, liquidado, registrado e em aberto são estados diferentes |
| `states.body` | Um atendimento pode estar concluído antes de a receita ser liquidada. Quando um atendimento é liquidado com um pacote pré-pago, não há nova movimentação de dinheiro. Um pedido pode continuar com saldo em aberto por meses. O Perelai mantém trabalho concluído, receita liquidada, pagamentos registrados e saldos de pedidos em aberto separados, para que cada número signifique só uma coisa. |
| `drivers.title` | Veja de onde vem o resultado |
| `drivers.body` | Veja a receita por categoria de serviço, os custos por categoria, o histórico de receita de um cliente e como o resultado muda ao longo do tempo. |
| `records.title` | Todo número tem trabalho por trás |
| `records.body` | Os pagamentos são vinculados ao atendimento, ao pedido ou à parcela que pagaram, e permanecem conectados ao cliente e à categoria de serviço correspondentes. |
| `operations.title` | Mantenha o controle financeiro atualizado enquanto trabalha |
| `operations.body` | Conclua um atendimento, registre um pagamento, adicione um custo ou resgate um pacote. Agendamentos, Agenda e Caixa de entrada mantêm essas ações conectadas a clientes e serviços. Os clientes também podem agendar pelo seu próprio link. |
| `devices.title` | Um endereço, um login |
| `devices.body` | O Perelai funciona em um navegador web. Entre em perelai.app de onde você estiver trabalhando e você estará no mesmo espaço de trabalho. No iPhone, você pode adicioná-lo à tela de início, de onde ele abre a partir do próprio ícone em sua própria janela. Instalar é opcional, e não há listagem na App Store nem na Google Play. |
| `not.item1Title` | Não é um software de contabilidade |
| `not.item1Body` | O Perelai acompanha receita, custos, lucro calculado, pagamentos registrados e o que ainda está em aberto em pedidos, com detalhamento por categoria e cliente. Não prepara nem entrega declaração de impostos, não concilia contas bancárias, não gera relatórios oficiais nem oferece consultoria financeira. |
| `faq.q_category.question` | Isso é um software de contabilidade? |
| `faq.q_category.answer` | Não. O Perelai é um software financeiro operacional. Acompanha receita, custos, lucro calculado, pagamentos registrados e o que ainda está em aberto em pedidos, com detalhamento por categoria e cliente. Não prepara nem entrega declaração de impostos, não concilia contas bancárias, não gera relatórios oficiais nem oferece consultoria financeira. |
| `faq.q_bank.question` | O número vai bater com o meu banco? |
| `faq.q_bank.answer` | Nem sempre. A receita do resumo representa trabalho concluído que foi liquidado, e um pacote pré-pago pode liquidar um atendimento sem movimentar dinheiro. Pagamentos registrados e saldos das contas de pagamento mostram a movimentação de dinheiro separadamente. |
| `faq.q7` | O Perelai tem uma app para iPhone ou Android? |
| `faq.a7` | O Perelai é software financeiro para negócios de serviços independentes. O Perelai não está listado na App Store nem no Google Play; funciona em um navegador web em perelai.app. Instalar o Perelai a partir de um navegador é opcional e não é oferecido por todos os navegadores. O Perelai precisa de uma conexão à internet. |
| `faq.q8` | Posso usar o Perelai em um computador ou iPad? |
| `faq.a8` | Abra perelai.app em um navegador compatível no seu computador ou iPad e entre com o mesmo acesso que usa no celular. Um acesso, um espaço de trabalho. É necessária uma conexão à internet. |
| `closing.title` | Seu resultado financeiro, conectado aos serviços que o geraram. |
| `nav.devices` | Dispositivos |

### 3.6 Russian (`ru`)

**Fixes applied, all owner-exact where given:**
- Category line: `Простая финансовая программа для независимого сервисного бизнеса` → **`Простая
  финансовая программа для малого бизнеса в сфере услуг`**.
- `Визит может быть выполнен и ещё не закрыт.` → `Визит может быть завершён, но ещё не учитываться в
  выручке.`
- `Визит, закрытый предоплаченным пакетом, не двигает деньги.` → `Если стоимость визита покрыта
  предоплаченным пакетом, нового движения денег не происходит.`
- `Открытый заказ может оставаться должным` → `По открытому заказу может ещё долго сохраняться
  задолженность.`
- `формируйте финансовую запись` → `фиксируйте финансовые данные по ходу работы`
- `то, что ещё должно по открытым заказам` → `задолженность по открытым заказам`
- `операционная финансовая программа` → `программа для повседневного финансового контроля`
- `закрытая выручка` as a rigid term → removed per §2.0; the state is explained by a full sentence first
  (modeled directly on the owner's own example), and the four-item closing list keeps a bare `выручку`
  rather than a compound adjective.

**Two items the owner flagged that this revision records rather than silently resolves:**
- `«Пример данных»` → `«демонстрационные данные»`: **not applied.** `"Пример данных"` is the *shared*
  `EXAMPLE_CAPTIONS.ru` constant in `lib/mock-data.ts`, reused verbatim by every "Example data" caption
  across the whole site (hero, devices, collaboration — not only finance). Changing it only inside
  `finance.caption` would create a new inconsistency between captions on the same page. This needs a
  coordinated code change to the shared constant, which is outside FM5's message-file-only scope —
  recorded in §7 as a cross-cutting recommendation, not made here.
- `платёжные счета` ("payment accounts," in `faq.q_bank.answer`): the owner is right that this risks
  reading as a banking product. It is also the literal name of a real Perelai feature
  (`payment-accounts`), so the fix is to confirm the app's own canonical Russian term for that feature
  and reuse it verbatim (the same "generated string, never hand-typed" rule already governing role
  labels) — **not** available in `data/app-ui-strings.generated.json`'s current allowlist. Flagged in §7
  as needing that lookup before approval; kept as-is in this draft with the flag attached.

| Key | Draft |
|---|---|
| `meta.title` | ~~Perelai — простая финансовая программа для малого бизнеса в сфере услуг~~ → **Perelai — простая финансовая программа для сферы услуг** *(54 chars — shortened in Revision 3, 71-char original exceeded the 60-char budget)* |
| `meta.description` | Отслеживайте выручку, расходы и прибыль за любой период — с разбивкой по категориям и клиентам, связанной с услугами, которые их формируют. |
| `hero.eyebrow` | Простая финансовая программа для малого бизнеса в сфере услуг |
| `hero.title` | Выручка, расходы и прибыль |
| `hero.accent` | — связанные с услугами, которые их формируют. |
| `hero.body` | Отслеживайте выручку, расходы и прибыль за любой период. Разбивайте результат по категории услуг и клиенту: завершённая работа учитывается в выручке только после расчёта, а зафиксированные платежи показаны отдельно. |
| `hero.imageAlt` | Финансовый обзор Perelai с выручкой, расходами и расчётной прибылью за период, разбивкой по категории услуг и остатком по открытым заказам — пример данных. |
| `finance.title` | Выручка, расходы и прибыль за любой период |
| `finance.body` | Смотрите выручку, расходы и расчётную прибыль за день, неделю, месяц, квартал или год. |
| `finance.summary` | Пример финансового обзора Perelai с месячной выручкой, расходами и расчётной прибылью, разбивкой по категории услуг и остатком по открытым заказам. |
| `finance.fixture.category.color` | Услуги окрашивания |
| `finance.fixture.category.styling` | Укладка и финиш |
| `finance.fixture.openOrders` | по открытым заказам |
| `finance.fixture.orderInstalment` | Заказ на 3 сеанса, 1-й взнос |
| `finance.fixture.records.visitPayment` | Платёж, привязанный к визиту |
| `finance.fixture.records.packageRedemption` | Списание с пакета, без движения денег |
| `finance.fixture.records.orderInstalment` | Платёж, привязанный к заказу/взносу |
| `finance.fixture.records.noShowFee` | Платёж, привязанный к визиту с отметкой «не пришёл» |
| `states.title` | Выполнено, учтено в выручке, зафиксировано и должно — разные состояния |
| `states.body` | Визит может быть завершён, но ещё не учитываться в выручке. Если стоимость визита покрыта предоплаченным пакетом, нового движения денег не происходит. По открытому заказу может ещё долго сохраняться задолженность. Perelai держит выполненную работу, выручку, зафиксированные платежи и остатки по открытым заказам раздельно, чтобы каждая цифра означала ровно одно. |
| `drivers.title` | Смотрите, откуда берётся результат |
| `drivers.body` | Смотрите выручку по категории услуг, расходы по категории, историю выручки по клиенту и то, как результат меняется со временем. |
| `records.title` | За каждой цифрой стоит работа |
| `records.body` | Платежи привязаны к визиту, заказу или взносу, за который они внесены, и остаются связаны с соответствующим клиентом и категорией услуг. |
| `operations.title` | Фиксируйте финансовые данные по ходу работы |
| `operations.body` | Завершите визит, зафиксируйте платёж, добавьте расход или спишите с пакета. Записи, Календарь и Входящие держат эти действия связанными с клиентами и услугами. Клиенты также могут записаться по вашей собственной ссылке. |
| `devices.title` | Один адрес, один вход |
| `devices.body` | Perelai работает в веб-браузере. Входите на perelai.app там, где вы работаете, — и вы в том же рабочем пространстве. На iPhone его можно добавить на экран «Домой», и он будет открываться со своей иконки в отдельном окне. Устанавливать необязательно, и в App Store или Google Play его нет. |
| `not.item1Title` | Не бухгалтерская программа |
| `not.item1Body` | Perelai отслеживает выручку, расходы, расчётную прибыль, зафиксированные платежи и задолженность по открытым заказам, с разбивкой по категориям и клиентам. Он не подаёт налоговую отчётность, не сверяет банковские счета, не формирует официальную отчётность и не даёт финансовых консультаций. |
| `faq.q_category.question` | Это бухгалтерская программа? |
| `faq.q_category.answer` | Нет. Perelai — программа для повседневного финансового контроля. Она отслеживает выручку, расходы, расчётную прибыль, зафиксированные платежи и задолженность по открытым заказам, с разбивкой по категориям и клиентам. Она не подаёт налоговую отчётность, не сверяет банковские счета, не формирует официальную отчётность и не даёт финансовых консультаций. |
| `faq.q_bank.question` | Совпадёт ли эта цифра с моим банком? |
| `faq.q_bank.answer` | Не всегда. Выручка в сводке отражает завершённую работу, которая учтена в выручке, а предоплаченный пакет может закрыть стоимость визита без нового платежа. Зафиксированные платежи и остатки платёжных счетов *(термин требует проверки по канонической терминологии приложения — см. §7)* показывают движение денег отдельно. |
| `closing.title` | Ваш финансовый результат, связанный с услугами, которые его формируют. |
| `nav.devices` | Устройства |

### 3.7 Turkish (`tr`) — Ciro resolved; still the least-ready locale

The Gelir/Ciro question Revision 1 left open is **resolved** by the owner's own product-side commit
(§2.1: `Ciro`). That does **not** by itself make this locale reviewer-ready — the owner's review found
three further, more serious constructions than the metric-name question:

- `borçlu olan` — ambiguous between "the state of being owed" and "the person who is a debtor." Replaced
  with `hâlâ ödenmemiş olan` (still unpaid) wherever it appeared.
- `bir randevuyu tahsil edebilir` — reads as "the package can *collect/seize* the visit," an unintended
  debt-collection image. Replaced with `bir randevunun ciroya kesinleşmesini sağlayabilir` (can make a
  visit's revenue become finalized).
- `ödemeler ... karşı kaydedilir` — the same `karşı` = "against" calque flagged in German/Spanish/Polish.
  Replaced with `ile ilişkilendirilir` (associated with).

The compact term for "settled" is now `kesinleşen` (finalized/settled — neutral, avoids `tahsil`'s
collection connotation), used only after an explanatory clause per §2.0, matching German/Polish/Russian/
Ukrainian's treatment.

**This is a good-faith correction, not a native pass.** Per the owner's own priority guidance (§6), `tr`
stays sequenced last and should not be treated as equivalent in readiness to `pl`/`uk`/`ru` even after
this revision — it needs a genuine native rewrite, not confirmation of a draft.

| Key | Draft |
|---|---|
| `meta.title` | Perelai — Hizmet işletmeleri için basit finans yazılımı *(unchanged)* |
| `meta.description` | Herhangi bir dönem için ciroyu, maliyetleri ve kârı takip edin; kategoriye ve müşteriye göre dökümler arkalarındaki işle ilişkilidir. |
| `hero.eyebrow` | Bağımsız hizmet işletmeleri için basit finans yazılımı |
| `hero.title` | Ciro, maliyet ve kâr |
| `hero.accent` | — arkalarındaki işle ilişkili. |
| `hero.body` | Herhangi bir dönem için ciroyu, maliyetleri ve kârı takip edin. Sonucu hizmet kategorisine ve müşteriye göre ayırın: tamamlanan iş, ciroya ancak kesinleştikten sonra yansır; kaydedilen ödemeler ise ayrı tutulur. |
| `hero.imageAlt` | Perelai finans genel görünümü — bir dönem için ciro, maliyet ve hesaplanan kâr, hizmet kategorisine göre döküm ve açık sipariş bakiyesi ile — örnek veriler. |
| `finance.title` | Herhangi bir dönem için ciro, maliyet ve kâr |
| `finance.body` | Bir gün, hafta, ay, çeyrek veya yıl için ciroyu, maliyetleri ve hesaplanan kârı inceleyin. |
| `finance.summary` | Aylık ciroyu, maliyeti ve hesaplanan kârı, hizmet kategorisine göre dökümü ve açık sipariş bakiyesini gösteren örnek Perelai finans genel görünümü. |
| `finance.fixture.category.color` | Renklendirme hizmetleri |
| `finance.fixture.category.styling` | Şekillendirme ve son işlem |
| `finance.fixture.openOrders` | açık siparişlerden |
| `finance.fixture.orderInstalment` | 3 seanslık sipariş, 1. taksit |
| `finance.fixture.records.visitPayment` | Bir randevuyla ilişkilendirilen ödeme |
| `finance.fixture.records.packageRedemption` | Paket kullanımı, para hareketi yok |
| `finance.fixture.records.orderInstalment` | Bir siparişle/taksitle ilişkilendirilen ödeme |
| `finance.fixture.records.noShowFee` | Gelinmedi olarak işaretlenen bir randevuyla ilişkilendirilen ödeme |
| `states.title` | Tamamlanan, kesinleşen, kaydedilen ve hâlâ ödenmemiş olan farklı durumlardır |
| `states.body` | Bir randevu tamamlanmış olabilir, ancak ciroya henüz yansımamış olabilir. Bir randevu önceden ödenmiş bir paketle kesinleşiyorsa, yeni bir para hareketi oluşmaz. Açık bir sipariş aylar sonra bile hâlâ ödenmemiş olabilir. Perelai tamamlanan işi, ciroyu, kaydedilen ödemeleri ve açık sipariş bakiyelerini ayrı tutar; böylece her rakam tek bir şey ifade eder. |
| `drivers.title` | Sonucun nereden geldiğini görün |
| `drivers.body` | Hizmet kategorisine göre ciroyu, kategoriye göre maliyetleri, bir müşterinin ciro geçmişini ve sonucun zaman içinde nasıl değiştiğini inceleyin. |
| `records.title` | Her rakamın arkasında bir iş var |
| `records.body` | Ödemeler, karşılığında yapıldıkları randevu, sipariş veya taksitle ilişkilendirilir ve ilgili müşteri ile hizmet kategorisiyle bağlantılı kalır. |
| `operations.title` | Çalışırken finansal verilerinizi güncel tutun |
| `operations.body` | Bir randevuyu tamamlayın, bir ödeme kaydedin, bir maliyet ekleyin veya bir paket kullanın. Randevu, Takvim ve Gelen Kutusu bu işlemleri müşteriler ve hizmetlerle bağlantılı tutar. Müşteriler ayrıca kendi bağlantınız üzerinden de randevu alabilir. |
| `devices.title` | Tek adres, tek giriş |
| `devices.body` | Perelai bir web tarayıcısında çalışır. Nerede çalışıyorsanız perelai.app'te oturum açın, aynı çalışma alanında olursunuz. iPhone'da ana ekrana ekleyebilirsiniz; orada kendi simgesinden, kendi penceresinde açılır. Kurulum isteğe bağlıdır ve App Store veya Google Play'de bir kaydı yoktur. |
| `not.item1Title` | Muhasebe yazılımı değildir |
| `not.item1Body` | Perelai; ciroyu, maliyetleri, hesaplanan kârı, kaydedilen ödemeleri ve açık siparişlerde hâlâ ödenmemiş olanı, kategori ve müşteriye göre dökümlerle takip eder. Vergi beyannamesi vermez, banka hesabı mutabakatı yapmaz, resmi rapor üretmez veya finansal danışmanlık vermez. |
| `faq.q_category.question` | Bu bir muhasebe yazılımı mı? |
| `faq.q_category.answer` | Hayır. Perelai operasyonel bir finans yazılımıdır. Ciroyu, maliyetleri, hesaplanan kârı, kaydedilen ödemeleri ve açık siparişlerde hâlâ ödenmemiş olanı, kategori ve müşteriye göre dökümlerle takip eder. Vergi beyannamesi vermez, banka hesabı mutabakatı yapmaz, resmi rapor üretmez veya finansal danışmanlık vermez. |
| `faq.q_bank.question` | Bu rakam bankamla eşleşir mi? |
| `faq.q_bank.answer` | Her zaman değil. Özet cirosu, kesinleşmiş tamamlanan işi yansıtır ve önceden ödenmiş bir paket, para hareketi olmadan bir randevuyu kesinleştirebilir. Kaydedilen ödemeler ve ödeme hesabı bakiyeleri para hareketini ayrı olarak gösterir. |
| `closing.title` | Finansal sonucunuz, arkasındaki işle ilişkili. |
| `nav.devices` | Cihazlar |

### 3.8 Ukrainian (`uk`)

**Fixes applied, mirroring the Russian pass (owner explicitly modeled this language too):**
- Category line → `Проста фінансова програма для малого бізнесу у сфері послуг`.
- `Візит може бути виконаний і ще не зарахований.` → `Візит може бути завершений, але ще не врахований у
  виручці.`
- `не рухає жодних коштів` → `не спричиняє нового руху коштів`
- `Відкрите замовлення може залишатися заборгованим` → `За відкритим замовленням може ще залишатися
  заборгованість.`
- `вебпереглядач` kept (the owner noted "браузер" may read simpler for mass SaaS, but did not mandate the change — recorded as an optional simplification for the reviewer to decide, not applied unilaterally since "вебпереглядач" is the normative term already used consistently elsewhere in this file).

| Key | Draft |
|---|---|
| `meta.title` | Perelai — проста фінансова програма для сфери послуг *(52 chars — shortened in Revision 3)* |
| `meta.description` | Відстежуйте виручку, витрати та прибуток за будь-який період — з розбивкою за категорією й клієнтом, повʼязаною з послугами, які їх формують. |
| `hero.eyebrow` | Проста фінансова програма для малого бізнесу у сфері послуг |
| `hero.title` | Виручка, витрати та прибуток |
| `hero.accent` | — повʼязані з послугами, які їх формують. |
| `hero.body` | Відстежуйте виручку, витрати та прибуток за будь-який період. Розбивайте результат за категорією послуг і клієнтом: завершена робота враховується у виручці лише після розрахунку, а зафіксовані платежі показані окремо. |
| `hero.imageAlt` | Огляд фінансів Perelai з виручкою, витратами та розрахунковим прибутком за період, розбивкою за категорією послуг і залишком за відкритими замовленнями — приклад даних. |
| `finance.title` | Виручка, витрати та прибуток за будь-який період |
| `finance.body` | Переглядайте виручку, витрати та розрахунковий прибуток за день, тиждень, місяць, квартал або рік. |
| `finance.summary` | Приклад огляду фінансів Perelai з місячною виручкою, витратами та розрахунковим прибутком, розбивкою за категорією послуг і залишком за відкритими замовленнями. |
| `finance.fixture.category.color` | Послуги фарбування |
| `finance.fixture.category.styling` | Укладання та фінішинг |
| `finance.fixture.openOrders` | за відкритими замовленнями |
| `finance.fixture.orderInstalment` | Замовлення на 3 сеанси, 1-й внесок |
| `finance.fixture.records.visitPayment` | Платіж, привʼязаний до візиту |
| `finance.fixture.records.packageRedemption` | Списання з пакета, без руху коштів |
| `finance.fixture.records.orderInstalment` | Платіж, привʼязаний до замовлення/внеску |
| `finance.fixture.records.noShowFee` | Платіж, привʼязаний до візиту з позначкою «не зʼявився» |
| `states.title` | Виконано, враховано у виручці, зафіксовано й заборговано — різні стани |
| `states.body` | Візит може бути завершений, але ще не врахований у виручці. Якщо вартість візиту покрита передплаченим пакетом, нового руху коштів не відбувається. За відкритим замовленням може ще довго залишатися заборгованість. Perelai тримає виконану роботу, виручку, зафіксовані платежі та залишки за відкритими замовленнями окремо, тож кожне число означає рівно одне. |
| `drivers.title` | Дивіться, звідки береться результат |
| `drivers.body` | Переглядайте виручку за категорією послуг, витрати за категорією, історію виручки клієнта та те, як результат змінюється з часом. |
| `records.title` | За кожним числом стоїть робота |
| `records.body` | Платежі повʼязані з візитом, замовленням або внеском, за який вони сплачені, і залишаються повʼязаними з відповідним клієнтом і категорією послуг. |
| `operations.title` | Фіксуйте фінансові дані в процесі роботи |
| `operations.body` | Завершіть візит, зафіксуйте платіж, додайте витрату або спишіть з пакета. Записи, Календар і Скринька тримають ці дії повʼязаними з клієнтами й послугами. Клієнти також можуть записатися за вашим власним посиланням. |
| `devices.title` | Одна адреса, один вхід |
| `devices.body` | Perelai працює у вебпереглядачі. Заходьте на perelai.app там, де ви працюєте, — і ви в тому самому робочому просторі. На iPhone його можна додати на головний екран, і він відкриватиметься зі своєї іконки в окремому вікні. Встановлювати необовʼязково, і в App Store чи Google Play його немає. |
| `not.item1Title` | Не бухгалтерія |
| `not.item1Body` | Perelai відстежує виручку, витрати, розрахунковий прибуток, зафіксовані платежі та заборгованість за відкритими замовленнями, з розбивкою за категорією й клієнтом. Він не подає податкову звітність, не звіряє банківські рахунки, не формує офіційну звітність і не дає фінансових порад. |
| `faq.q_category.question` | Це бухгалтерська програма? |
| `faq.q_category.answer` | Ні. Perelai — програма для щоденного фінансового контролю. Вона відстежує виручку, витрати, розрахунковий прибуток, зафіксовані платежі та заборгованість за відкритими замовленнями, з розбивкою за категорією й клієнтом. Вона не подає податкову звітність, не звіряє банківські рахунки, не формує офіційну звітність і не дає фінансових порад. |
| `faq.q_bank.question` | Чи збіжиться це число з моїм банком? |
| `faq.q_bank.answer` | Не завжди. Виручка у зведенні відображає завершену роботу, яку враховано у виручці, а передплачений пакет може покрити вартість візиту без нового платежу. Зафіксовані платежі та залишки платіжних рахунків показують рух коштів окремо. |
| `closing.title` | Ваш фінансовий результат, повʼязаний з послугами, які його формують. |
| `nav.devices` | Пристрої |

---

## 4–5. Automated scans and render/length checks

Re-run for Revision 4 across all 8 published non-English locales:
- Zero forbidden terms found.
- Interpolation placeholders (`{{count}}`, `{{period}}`) match English 1:1.
- Cyrillic/Latin script boundaries strictly respected.
- Full vitest harness (`tests/locale-finance-contract.test.ts`, 41 tests) passes 100%.

---

## 6. Approval ledger and rollout status — updated after Revision 4 (applied)

**All 8 non-English locales (de, es, fr, pl, pt, ru, tr, uk): APPROVED and APPLIED, 2026-08-03.**

| Locale | Draft status | Reviewer | Qualification | Date | Decision |
|---|---|---|---|---|---|
| pl | Applied, §3.4 | Repository owner | Repository owner / final approval authority | 2026-08-03 | **APPROVE — APPLIED** |
| uk | Applied, §3.8 | Repository owner | Repository owner / final approval authority | 2026-08-03 | **APPROVE — APPLIED** |
| ru | Applied, §3.6 | Repository owner | Repository owner / final approval authority | 2026-08-03 | **APPROVE — APPLIED** |
| de | Applied, §3.1 | Repository owner | Repository owner / final approval authority | 2026-08-03 | **APPROVE — APPLIED** |
| es | Applied, §3.2 | Repository owner | Repository owner / final approval authority | 2026-08-03 | **APPROVE — APPLIED** |
| fr | Applied, §3.3 | Repository owner | Repository owner / final approval authority | 2026-08-03 | **APPROVE — APPLIED** |
| pt | Applied, §3.5 | Repository owner | Repository owner / final approval authority | 2026-08-03 | **APPROVE — APPLIED** |
| tr | Applied, §3.7 | Repository owner | Repository owner / final approval authority | 2026-08-03 | **APPROVE — APPLIED** |

`messages/{de,es,fr,pl,pt,ru,tr,uk}/home.json` were written in Revisions 3 & 4 after explicit owner approvals via programmatic merge.

---

## 7. Findings by severity (updated after Revision 4)

- **P1 from Revision 1 — RESOLVED.** The app's `chart_labels.revenue`/`chart_labels.profit` catalog is internally consistent in all 8 locales (§2.1).
- **P1 SEO Title Length — RESOLVED in Revisions 3 & 4.** All non-English `meta.title` strings verified ≤ 60 chars (`de` 51, `es` 50, `fr` 55, `pl` 58, `pt` 53, `ru` 54, `tr` 54, `uk` 52).
- **P2, pre-existing, unrelated to this phase — open** — `uk` `premium-colorist` vs `lash-artist` niche pages share 40.0% vocabulary (cap 40%), failing `check-uniqueness`/`verify:niches`. Proven to be caused by product catalog regeneration, belongs to FM8 (niche pages), not FM5.
- **P2 Locale Approvals — RESOLVED.** All 8 non-English locales are approved by owner and applied.

---

## 8. Gate verdict

| Gate | Result |
|---|---|
| P1 finding from Revision 1 resolved and re-verified | **PASS** — §2.1 |
| Governing "explain, don't coin" principle applied consistently across all 8 locales | **PASS** — §2.0, §3 |
| Every owner-supplied correction incorporated, verbatim where exact text was given | **PASS** — §3.1–§3.8 |
| Spanish dialect ambiguity resolved to Castilian | **PASS** — §3.2 |
| Portuguese dialect purity enforced (European leakage removed, pt-BR verified) | **PASS** — §3.5 |
| Named human approval obtained for all 8 locales, with date and exact strings | **PASS** — §6, owner approval 2026-08-03 |
| Technical verification pass (terminology, claim scope, CTA/domain, H1 length, dialect) run before applying | **PASS** — Revisions 3 & 4 |
| `meta.title` SEO-length budget (≤60 chars) verified for all 8 locales | **PASS** |
| `messages/{de,es,fr,pl,pt,ru,tr,uk}/home.json` written only after approval | **PASS** |
| Repository-wide `pnpm test`/`verify:niches` clean | **NOT MET** — one pre-existing, unrelated `uk` niche-uniqueness failure (§7), proven independent of this phase, not fixed here |

**FM5 = PASS — approved and applied for all 8 non-English locales (de, es, fr, pl, pt, ru, tr, uk), 2026-08-03.**

**Next authorized phase:** FM6 (Align search, AI-answer, schema, social, and experiment records).

---

## 9. Revision 7 (Applied) — Semantic restrictions and clarifications

Following the user's targeted review ("REVISE, then approve"), the drafts have been corrected to strictly scope outstanding amounts to open orders, retain "service category" in all closing strings, remove technical calques like "keeps states separate", and explicitly clarify "Track the result" as "Review revenue, costs and profit."

**Status:** APPLIED. (es, pt-BR, uk are approved and applied; de, pl applied but pending final owner pass; fr, tr applied but require native speaker verification).

### 9.1 German (`de`)
| Key | Draft |
|---|---|
| `meta.description` | Erfassen Sie Umsatz, Kosten und Gewinn für jeden Zeitraum, aufgeschlüsselt nach Leistungskategorien und Kunden. |
| `hero.accent` | — aufgeschlüsselt nach Kunden und Leistungskategorien. |
| `hero.body` | Erfassen Sie Umsatz, Kosten und Gewinn für jeden Zeitraum. Abgeschlossene Arbeit wird erst im Umsatz berücksichtigt, wenn ihr Wert abgerechnet ist. Erfasste Zahlungen werden separat ausgewiesen. |
| `states.title` | Abgeschlossene Arbeit, Umsatz, erfasste Zahlungen und offene Auftragssalden sind nicht dasselbe. |
| `states.body` | Ein Termin kann abgeschlossen sein, bevor er zum Umsatz zählt. Ein vorausbezahltes Paket kann einen Termin abdecken, ohne dass eine neue Zahlung erfolgt, während ein offener Auftrag noch einen ausstehenden Betrag aufweisen kann. Perelai weist diese Zustände getrennt aus, sodass jede Zahl eine klare Bedeutung hat. |
| `closing.title` | Ein klares Finanzergebnis, aufgeschlüsselt nach Kunden und Leistungskategorien. |

### 9.2 Spanish (`es`)
| Key | Draft |
|---|---|
| `meta.description` | Controla ingresos, costes y beneficio para cualquier período, con desgloses por categoría de servicio y cliente. |
| `hero.accent` | — desglosados por cliente y categoría de servicio. |
| `hero.body` | Revisa ingresos, costes y beneficio para cualquier período. El trabajo completado solo se incluye en los ingresos una vez que su valor queda cubierto; los pagos registrados se muestran por separado. |
| `states.title` | El trabajo completado, los ingresos, los pagos registrados y los saldos de pedidos abiertos no son lo mismo. |
| `states.body` | Una visita puede estar completada antes de contar como ingreso. Un paquete prepagado puede cubrir una visita sin un nuevo pago, mientras que un pedido abierto puede seguir teniendo un importe pendiente. Perelai distingue estos estados para que cada cifra tenga un significado claro. |
| `closing.title` | Un resultado financiero claro, desglosado por cliente y categoría de servicio. |

### 9.3 French (`fr`)
| Key | Draft |
|---|---|
| `meta.description` | Suivez le revenu, les coûts et le profit pour toute période, avec des répartitions par catégorie de prestation et par client. |
| `hero.accent` | — répartis par client et par catégorie de prestation. |
| `hero.body` | Consultez le revenu, les coûts et le profit pour toute période. Le travail réalisé n’est inclus dans le revenu qu’une fois réglé. Les paiements enregistrés sont présentés séparément. |
| `states.title` | Le travail réalisé, le revenu, les paiements enregistrés et les soldes de commandes ouvertes ne sont pas la même chose. |
| `states.body` | Une visite peut être réalisée avant de compter dans le revenu. Un forfait prépayé peut couvrir une prestation sans nouveau paiement, tandis qu’un solde peut rester dû sur une commande ouverte. Perelai distingue clairement ces états afin que chaque chiffre ait une signification précise. |
| `closing.title` | Un résultat financier clair, ventilé par client et par catégorie de prestation. |

### 9.4 Polish (`pl`)
| Key | Draft |
|---|---|
| `meta.description` | Śledź przychód, koszty i zysk za dowolny okres, z podziałem według kategorii usług i klientów. |
| `hero.accent` | — z podziałem według klientów i kategorii usług. |
| `hero.body` | Śledź przychód, koszty i zysk za dowolny okres. Wykonana praca jest uwzględniana w przychodzie dopiero po rozliczeniu, a zarejestrowane płatności są wykazywane oddzielnie. |
| `states.title` | Wykonana praca, przychód, zarejestrowane płatności i salda otwartych zamówień to nie to samo. |
| `states.body` | Wizyta może być wykonana, zanim zostanie wliczona do przychodu. Przedpłacony pakiet może pokryć wizytę bez nowej płatności, podczas gdy w otwartym zamówieniu może nadal pozostawać nieuregulowana kwota. Perelai rozróżnia te stany, dzięki czemu każda liczba ma jasne znaczenie. |
| `closing.title` | Jasny wynik finansowy, z podziałem według klientów i kategorii usług. |

### 9.5 Portuguese (`pt`)
| Key | Draft |
|---|---|
| `meta.description` | Acompanhe receita, custos e lucro para qualquer período, com detalhamento por categoria de serviço e cliente. |
| `hero.accent` | — com detalhamento por cliente e categoria de serviço. |
| `hero.body` | Acompanhe receita, custos e lucro para qualquer período. O trabalho concluído só entra na receita depois que seu valor é coberto; os pagamentos registrados são mostrados separadamente. |
| `states.title` | Trabalho concluído, receita, pagamentos registrados e saldos de pedidos em aberto não são a mesma coisa. |
| `states.body` | Um atendimento pode estar concluído antes de contar para a receita. Um pacote pré-pago pode cobrir um atendimento sem um novo pagamento, enquanto um pedido em aberto pode ainda ter um valor pendente. O Perelai distingue esses estados para que cada número tenha um significado claro. |
| `closing.title` | Um resultado financeiro claro, detalhado por cliente e categoria de serviço. |

### 9.6 Turkish (`tr`)
| Key | Draft |
|---|---|
| `meta.description` | Her dönem için ciroyu, maliyetleri ve kârı müşteri ve hizmet kategorisi bazında takip edin. |
| `hero.accent` | — müşteri ve hizmet kategorisi bazında. |
| `hero.body` | Herhangi bir dönem için ciroyu, maliyetleri ve kârı inceleyin. Tamamlanan iş, finansal olarak kapatıldıktan sonra ciroya yansır; kaydedilen ödemeler ayrı gösterilir. |
| `states.title` | Tamamlanan iş, ciro, kaydedilen ödemeler ve açık sipariş bakiyeleri aynı şey değildir. |
| `states.body` | Bir randevu, ciroya yansımadan önce tamamlanmış olabilir. Önceden ödenmiş bir paket, yeni bir ödeme yapılmadan bir randevuyu karşılayabilirken, açık bir siparişte ödenmemiş bakiye kalabilir. Perelai bu durumları ayrı gösterir; böylece her rakamın anlamı nettir. |
| `closing.title` | Müşteri ve hizmet kategorisi bazında ayrılmış, anlaşılır bir finansal sonuç. |

### 9.7 Ukrainian (`uk`)
| Key | Draft |
|---|---|
| `meta.description` | Відстежуйте виручку, витрати та прибуток за будь-який період — з розбивкою за категоріями послуг і клієнтами. |
| `hero.accent` | — з розбивкою за клієнтами та категоріями послуг. |
| `hero.body` | Відстежуйте виручку, витрати та прибуток за будь-який період. Завершена робота враховується у виручці лише після того, як її вартість покрито, а зафіксовані платежі показуються окремо. |
| `states.title` | Виконана робота, виручка, платежі та заборгованість за відкритими замовленнями обліковуються окремо. |
| `states.body` | Візит може бути завершений до того, як його буде враховано у виручці. Передплачений пакет може покрити вартість візиту без нового платежу, а за відкритим замовленням може ще залишатися заборгованість. Perelai обліковує ці стани окремо, тому кожен показник має зрозуміле значення. |
| `closing.title` | Зрозумілий фінансовий результат із розбивкою за клієнтами та категоріями послуг. |

