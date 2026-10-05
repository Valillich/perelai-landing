# Независимое review G / PAR-P и следующий шаг

**Follow-up corrective checkpoint:** R1/R2 code corrections выполнены без коммита;
R3 остаётся owner-commit/freshness gate. Этот документ сохраняет исходные review findings,
не выдавая их за повторное review исправлений. [Результаты и остаток](/Users/valery/Sites/beauty-finance/inventory/g-int-r-par-p-r-20261005.md).

**Дата:** 05.10.2026. **Вердикт:** implementation есть; нужны три ограниченные правки перед
приёмкой релизного пути. **Production launch: HOLD.** Review выполнено самостоятельно,
без subagents. Это техническая проверка, не новое утверждение юридических текстов.

Проверенные ревизии: landing `564fefb..d927c64`, app `dda44bb07..6bf98fe85` для G;
PAR-P app — изменения поверх `4b28c424e`. До этого review оба рабочих дерева чистые.
Фраза прежнего handoff «no commit» описывает прошлый checkpoint: изменения уже в коммитах.
В этом проходе меняются только планы/статусы; ошибки кода ниже ещё не исправлены.

## 1. Что подтверждено

- PAR-P: app-owned provider-free каталог → проверяемый landing artifact → Pricing,
  `pricing.md`, `llms.txt`; USD 19/29 и capacity 1/5 согласованы. Plan-specific CTA
  требуют publication gate, STUDIO — дополнительный TEAM gate; общий signup без offer сохранён.
- Offer intent передаётся при password и подписанном Google signup, записывается только
  при создании первой Company; не предоставляет подписку/trial/access и не наследуется
  staff signup, существующим login или последующими workspace. Tracking не включён.
- G-UI/G-BE1/G-INT: server review, обязательное assent, atomic attempt/evidence,
  idempotency/recovery, receipt check до открытия checkout. Portal/support отделены от assent.
- G-BE2: ledger/outbox и архив точных Terms/Billing/Privacy с digest validation существуют.
  Производственный пакет намеренно DRAFT; тестовый sandbox-пакет отделён от него.
  Предыдущий handoff содержит sandbox purchase/refund/cancel evidence, но его provider/PG/Redis
  действия в этом review не повторялись. `SENT` при `MAIL_DEV_MODE=true` не доказывает доставку.

## 2. Findings

### R1 — P1: purchase review ссылается на app вместо legal landing

`beauty-finance/libs/server/billing/src/lib/purchase-legal-package.ts:63–65` фиксирует
`https://perelai.app/legal/{terms,billing,privacy}`. Web показывает эти URL напрямую,
минуя `VITE_LANDING_PUBLIC_URL`; sandbox наследует те же ссылки.

Проверено 05.10: HTTP 200 на app URL означает SPA shell, а браузер после открытия
`/legal/billing` и `/legal/terms` оказывается на `https://perelai.app/login`.
Канонический Terms документ доступен на `https://perelai.com/legal/terms` с версией
`2026-11-01.1` и effective `2026-11-01`. В актуальном app нет этих `/legal/*` content routes.
Покупатель не может прочитать связанные условия из review.

**Исправление:** canonical landing URLs в server package, синхронная проверка трёх ссылок
и отображаемой версии в браузере. Не менять тексты/хеши документов ради исправления URL,
не переписывать уже сохранённые snapshots и не утверждать DRAFT этим исправлением.

### R2 — P1: checkout allowlist исключает фактический app origin

`beauty-finance/apps/web/src/utils/billingCheckoutLaunch.ts:28–30` и
`libs/server/billing/src/lib/billing-checkout.service.ts:909–929` допускают app-hosts
`app.perelai.com`/`app.perelai.app`, но не фактический `perelai.app`.

Воспроизведение: `billingCheckoutNavigationUrl` с валидными `_ptxn`/`attemptId`,
URL `https://perelai.app/billing/checkout`, currentOrigin `https://perelai.app`,
`sandbox:false` возвращает `null`. API также отвергает этот host и не привязывает attempt.
Пример `.env.example` направляет на `app.perelai.app`; публичный запрос к этому
`/billing/checkout` 05.10 вернул **503 / no available server**.

**Исправление:** один согласованный точный checkout origin/route в API, Web и deployment
examples; для текущего приложения — `https://perelai.app/billing/checkout`, с отдельной
проверкой provider configuration при release. Не принимать произвольный HTTPS host и
не расширять wildcard. Не переносить auth token в URL или между origins. Отдельно проверить
direct-link без сессии → безопасный login/recovery и возврат к своему attempt; рабочий
локальный sandbox redirect не доказывает этот сценарий. Пока routing не исправлен,
платёжный browser journey нельзя помечать PASS.

### R3 — P2: generated niche provenance устарел после app commit

`data/niche-catalog.generated.json:2` содержит `sourceCommit=4b28c424e…`, а app HEAD —
`6bf98fe85…`. `verify:niches` завершается с `committed catalog sourceCommit ... differs
from app HEAD ...; re-run pnpm generate:niches`. Проверка входит в landing prebuild.

Повторный полный landing test без IPC-ограничений: **486/487**, один отказ именно здесь.
Прежние 487/487 и build PASS сохраняются как историческое evidence до следующего commit,
но не как PASS пары текущих ревизий. Новый production build не запускался: prebuild уже красный.

**Исправление:** после фиксации app-правок сгенерировать niche artifact из окончательной
чистой app revision штатной командой, проверить diff/provenance, повторить verify/test/build.
Не подменять SHA вручную, не отключать guard и не перегенерировать его бесконечно между
изменениями app. Commercial artifact отдельно уже проходит проверку.

**Standards:** самостоятельных actionable нарушений документированных границ модулей
не найдено; отдельный refactor для MVP не требуется. **Spec:** 3 findings — 2×P1 и 1×P2.
Новые требования стран, ещё один approval-пакет или новая billing architecture не нужны.

## 3. Собственные проверки и пределы

| Проверка | Результат этого review |
| --- | --- |
| Landing full `pnpm test`, Node 24, разрешён IPC | 33 suites PASS / 1 FAIL; 486/487 tests; R3 |
| Landing `pnpm typecheck`, `pnpm lint` | PASS |
| `node --import tsx scripts/commercial-catalog.mjs` | PASS, совпадает с app source |
| `node --import tsx scripts/legal-manifest.ts` | PASS, все 7 документов `2026-11-01.1` |
| App Billing checkout + purchase acceptance | 2 suites, 56/56 PASS |
| App Web review/checkout/launch/hooks + registration/Google URL | 7 suites, 64/64 PASS |
| Core public offers / acceptance contracts / access catalog | 3 suites, 7/7 PASS |
| API auth service/controller/Google guards + billing controller | 5 suites, 147/147 PASS |
| Notifications archive / confirmation template / email delivery | 3 suites, 57/57 PASS |
| Public browser/HTTP | R1/R2; без login, purchase, provider-console или data writes |

Итого app **331 целевой unit-тест**. Jest — Node 20 с cache в `/tmp`; Node 24 direct Jest
не загрузил TS config (`__dirname`/ESM), что не является дефектом feature.
Первый sandboxed landing run имел ещё шесть IPC-отказов tsx; повтор с разрешённым IPC
оставил только R3. App full suite/typecheck/build и реальные PG/Redis/provider drills в этом
review не повторялись; исторические отчёты не заменены выдуманными PASS.

## 4. Актуальные статусы

| Scope | Статус | Следующее действие |
| --- | --- | --- |
| A–F / platform legal texts | APPROVED TEXTS; manifest VERIFIED | Сохранить версию/дату; не переделывать документы |
| PAR-P / commercial POS3 / BILL7 | IMPLEMENTED; release verification HOLD (R3) | Refresh generated artifacts после окончательной app revision |
| G-UI / G-BE1 | IMPLEMENTED; focused tests PASS | Узкие исправления R1/R2, не повторная реализация |
| G-INT | IMPLEMENTED; release-origin acceptance HOLD (R1/R2) | Browser check на фактическом app origin |
| G-BE2 / B-13 / B-14 | PARTIALLY VERIFIED | Реальное письмо/вложения, direct-link/lost-login/cancel, применимые оставшиеся сценарии из plan 12 |
| Production purchase-copy | DRAFT; effective 01.11.2026 | Утвердить конкретную checkbox/confirmation copy, версию и config; сохранить дату |
| POS4 / Task I / BILL8 | PENDING | После R1–R3 — ограниченная приёмка релизного пути и применимых runtime gates |
| G0 / G0b | Submission/approval NOT VERIFIED | Подготовка/подача пакетов отдельно; не ждать полного Billing для подачи |
| BILL5B / TEAM / Drawer / operations | Не переаттестованы этим review | Использовать текущие handoffs и проверить только оставшийся release scope |

Дата 01.11 не переключает production DRAFT в APPROVED и не включает флаги автоматически.
Существующее утверждение всех семи platform texts не означает новое утверждение конкретной
purchase-copy. Его можно закрыть одним решением по подготовленному тексту, не новым legal проектом.

## 5. Следующая задача агенту: исправить R1–R3, затем POS4

```text
Выполни ограниченный corrective pass G-INT / PAR-P по legal/33 от 05.10.2026.
Прочитай текущий код, app plan 12 и оба inventory handoff. G-BE1/G-UI/PAR-P уже
реализованы; не повторяй их и не меняй цены, trial, рынки, TEAM gates или legal тексты.

1. Исправь server review URLs на фактический legal landing perelai.com; сверяй
   Terms/Refund/Privacy и их версии. Сохрани evidence/archive hashes и старые snapshots.
2. Согласуй API/Web checkout origin с perelai.app и точным /billing/checkout.
   Обнови code-owned validation, config examples и тесты. Чужие origins, опасные
   параметры, credential URLs, wrong attempt/Company и legacy без evidence — отказ.
   Никаких широких доменных allowlist, auth в URL или production-флагов.
3. Проверь authenticated launch и путь после потери сессии. Если browser/host ещё
   не готов, обозначь конкретный pending smoke, не выдавай unit-тест за browser PASS.
4. После фиксации app revision штатно обнови landing generated niche artifacts;
   verify:niches, verify:commercial, typecheck, lint, test и production build с уже
   утверждённой legal identity. Не менять .env/секреты и не обходить prebuild guard.
   Не выполнять commit/push автоматически: согласовать пары ревизий с workflow владельца.
5. Обнови handoffs точными результатами, остатком G-BE2 и готовностью входа POS4.
   Production copy остаётся DRAFT до её утверждения; дата 01.11 сохраняется.

Готово: R1–R3 закрыты воспроизводимыми проверками; existing acceptance, provider
authority и no-tracking сохранены. Деплой, реальные оплаты, отправка писем людям,
заявки провайдерам и включение flags не следуют из этого corrective task.
```

После этого — **POS4 + оставшийся G-BE2**: пройти один релизный маршрут
landing → signup → setup → booking → visit/payment tracking → trial expiry → sandbox
review/purchase → cancel/recovery; проверить существующие операции и release gates по legal/32.
В G-BE2 получить фактическое confirmation email с тремя архивными вложениями и проверить
provider buyer/cancellation instructions, не дублировать уже доказанные refunds без причины.
Tax-only и будущую terminal cancellation отмечать по фактическому виду проверки; не ждать
месяц, если локальный boundary можно доказать изолированным тестом, и не называть его live event.
Проверить оставшуюся retention/hold процедуру purchase evidence из plan 12, без нового dashboard.
PRE-P/G0 и PRE-G/G0b могут идти параллельно; production launch — отдельный BILL8 этап.
