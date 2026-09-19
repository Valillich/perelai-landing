# POS0–POS4: выполнение небольшими LLM

**План, 19.09.2026.** Одна задача на запуск. Вначале прочитать [README](README.md) и нужные разделы [01](01_home_pricing_copy_and_previews.md). Создавать только один рабочий журнал `docs/launch-positioning-checklist.md`.

## Общие правила для каждого prompt

```text
Работай в /Users/valery/Sites/perelai-landing. Продуктовый source:
/Users/valery/Sites/beauty-finance. Выполни только указанную POS-задачу.
Прочитай инструкции репозитория, README/01 этой папки, MVP handoff и определения app.
Сначала проверь HEAD/status и конкретные затронутые файлы. Сохраняй чужие изменения.
Используй apply_patch. Не commit/push/deploy и не меняй product code/flags.

Новая рамка: ежедневная работа beauty-специалиста/небольшой студии, запись → визит →
учёт оплаты или пакет → при доступности сверка наличных. Trial/цены уже приняты:
21 день STUDIO без карты, SOLO USD19/STUDIO USD29 в месяц за пространство, 1/5
активных исполнителей. Подтвердить runtime нужно; повторно спрашивать цену не нужно.

RU hero утверждён владельцем 19.09.2026: шесть точных строк в launch-positioning-checklist
§2. Внедряй их дословно, не переоткрывай выбор H1 и не добавляй в body команду, пакеты,
доходы или «в одном месте». Это benefit-led H1 + конкретные действия, не finance-first.
UK/EN hero адаптируй из этого RU, не из прежнего H1; переводы и остальные новые строки
не считаются автоматически утверждёнными. Согласование RU не является release PASS.

Сохрани существующие interactive previews: дизайн, shells, анимации и взаимодействия.
Меняй только доказанные ошибки данных/подписей, минимальные layout fixes и порядок
готовых секций. Новые previews ограничены спецификацией 01. Не создавай новый tour,
design system, export v2, resolver, niche programme, A/B или analytics framework.

Рекламная фраза, точная подпись app и runtime readiness — разные основания. Не выдавай
план/словарь/internal TEAM test mode за публичную доступность. Не меняй app ради
демонстрации обещания. Drawer уже реализован в app и включён в POS2: не ждать повторной
разработки DR0–DR6. Различай G4 implementation READY и проверку public release перед POS4.
Google остаётся вне launch story без своего proof; отсутствие его claim не стоп всей работы.
Реальный STUDIO trial требует BILL/TEAM. Не оформляй их готовность текстом.

Новые UI labels экспортируй из чистого app commit существующим generator; не редактируй
generated JSON, не ставь ALLOW_DIRTY_SOURCE, не stash/revert чужой app diff.
Если app dirty, можно использовать отдельный clean checkout подтверждённой ревизии
через PERELAI_APP_REPO, либо отложить только зависящее дополнение.

Проверь skills, указанные у своей задачи; прочитай соответствующие SKILL.md из
/Users/valery/.agents/skills перед применением и нужные references.
В конце: что изменено, old/new/reason по смысловым строкам, использованные G1–G8,
реально выполненные проверки, оставшиеся launch-зависимости и следующая POS-задача.
Различай: implementation-ready, release-ready, optional deferred. Не называй локальную
сборку опубликованным релизом и машинный перевод — native-reviewed.
```

## POS0 — Одно позиционирование и компактный copy-набор

**Выполнен 19.09.2026 в документах.** Результат и статус owner review: [launch checklist](../../../docs/launch-positioning-checklist.md). Не повторять POS0 и не откатывать product-marketing v11 к старым версиям. **RU hero freeze закрыт владельцем 19.09.2026**; переводы и остальные новые строки отмечены отдельно. Prompt ниже — историческое описание выполненного scope, не инструкция заново создавать варианты или ждать повторного ответа. Следующий независимый шаг — POS1.

**Skills:** `product-marketing`, `copywriting`, `copy-editing` (checklist), `cro`.

**Историческое условие старта POS0:** не ждать M1–M4/BILL целиком. Задача уже выполнена; новые фазы используют принятые решения.

```text
Выполни POS0.
1. Сверь актуальные source revisions. Прочитай app terminology/mvp/01 и 03,
   landing product-marketing v8, rails и commercial-policy. Финансовый словарь
   Revenue/Cost/Profit сохраняется; finance-first как категория заменён.
2. Обнови затронутые overview/ICP/JTBD/objections/CTA/glossary/capabilities/goals
   в .agents/product-marketing.md; bump version и добавь одну новую запись сверху,
   сохрани историю. Убери конфликт solo-only vs small studio, старое отсутствие
   Administrator и blanket запрет trial/цен. Не обещай все профессии.
3. Синхронизируй текущие правила в .cursor/plans/reference/messaging-and-claims.md,
   docs/commercial-policy.md; запиши источники решений 06/16.09 и MVP 19.09.
   Decision approved не равно release available. Старые CF-факты про отсутствие
   billing становятся историей, а не новым объяснением cardless trial.
4. Добавь короткую superseded-for-launch заметку со ссылкой на positioning/README
   в два прежних messages plan/prompts; не переписывай весь архив и не запускай FM.
   В CONTEXT.md landing добавь указатель на актуальное позиционирование/код, если
   старое summary иначе направляет следующего агента к retired hero/ценам.
5. В одном launch-positioning-checklist.md собери RU/UK → EN source-набор:
   hero, CTA/helper, изменённые h2/body, Package/Admin/Drawer summaries,
   Pricing/FAQ, meta/footer. Начни с рекомендованного варианта 01.
   Один Seven Sweeps проход, краткий simulated review; покажи владельцу конкретный
   компактный набор для смысловой вычитки. Не объявляй approval до его ответа.
   Уже согласованные business facts не выноси на повторное утверждение.
6. Там же G1–G8: используемая фраза → source → role/plan/locale/revision → proof →
   READY или зависимость. Возьми evidence M4/BILL/TEAM/DR7, где оно уже есть;
   не дублируй эти release suites. Внешние claims не проверяй по старым PASS автоматически.

Готово: нет двух конфликтующих категорий/коммерческих правил; copy-набор reviewable,
цены/trial не открыты повторно как вопрос. Можно продолжать независимый POS1, пока
review новых строк ожидается. Только plan/docs; публичные messages и preview не меняй.
```

## POS1 — Исправить недостоверные демонстрации и общие claims

**Skills:** `copy-editing`; для новых формулировок — `copywriting`.

```text
Выполни POS1 после POS0 (технические доказанные исправления не ждут review остальных строк; RU hero уже утверждён).
1. Сверь ADR-0001/0002/0003 и реальные package records. В lib/finance-fixture.ts
   исправь дополнительную Revenue у v6 package redemption. Обнови KPI, category,
   client, trend и feed согласованно; проверь scope cashRecorded/order instalment.
2. Исправь package row в components/homepage/connected-records.tsx и
   components/mock/MockConnectedRecordsFeed.tsx: non-money state без +90/income icon.
   Внешний вид и поведение остальных карточек сохранить.
3. Обнови смысловые assertions tests/finance-fixture.test.ts; zero new cash/revenue
   у redemption, единый источник totals, детерминированность. Старое settled=cash+90
   больше не oracle. Не заменяй эти проверки snapshot-ом нового текста.
4. Обнови затронутые summaries/FAQ/state copy во всех показывающих этот пример локалях,
   включая home.faq.q_bank.answer и любые дубли, даже если часть сейчас не рендерится.
   Исправь docs/finance-claim-contract.md и rails: PAID = settlement, package sale
   признаётся один раз, redemption не новая Revenue. Не добавляй в scope весь finance
   audit или export; старое not implemented при необходимости пометь как historical /
   commercial promise unverified, не обещай export на основании наличия кода.
5. Найди two-way claim во всех активных home/pricing/devices messages, content/niches,
   shared/machine surfaces. Default launch-copy исключает Google Calendar promise;
   конкретное чтение/import можно описывать только по проверенному release flow.
   Google login не доказательство Calendar. Исправь `keep both sides in step` тоже.
6. Составь конечный old/new список общих factual replacements для доступных ниш:
   package, роли, ложные commercial statements. Ниши/их тексты по существу не развивай.
7. Новые app labels после M1/M2 получай существующим generator, только нужные keys.
   Если labels ещё не зафиксированы — отложи зависимый fragment, продолжи факт-фиксы.

Проверки: pnpm test -- tests/finance-fixture.test.ts плюс затронутые mock tests;
pnpm typecheck при TS-изменениях; verify:niches при messages/generated/consumer edits;
git diff --check. Для линейной редакторской замены не писать отдельный тест каждой строки.
Готово: финансовый preview правдив, two-way исчез из активных claims, дизайн kit сохранён.
```

## POS2 — Обновить Home и добавить ограниченный proof

**Skills:** `copywriting`, `copy-editing`, `cro`.

```text
Выполни POS2 по 01 §§1–4. Источник строк и их статусов — launch-positioning-checklist.
1. messages/ru/home.json: шесть hero-строк из §2 перенеси дословно, включая точки и
   полный trialMicro. title + accent остаются одним H1. Не добавляй рекламную подстроку.
   Для messages/{uk,en}/home.json подготовь естественные адаптации нового hero: польза
   «порядок / ясность», затем три действия. Старый H1 не переводить и не восстанавливать.
   Отметь адаптации как drafts до смысловой вычитки POS3; RU повторно не согласовывать.
   Остальные изменения: рабочий сценарий, revised section copy,
   FAQ/closing/footer/meta/aria. Остальные используемые локали получают те же изменённые
   смыслы в POS3; не публикуй English-only секцию с отсутствующими keys. Если schema
   требует keys сразу во всех языках, добавь scoped drafts в этой задаче и честно пометь
   их review status. Семантическая вычитка и коммерческое согласование остаются в POS3.
2. В homepage.tsx переставь существующие секции по 01. Перенеси #features на Operations;
   #how сохрани на Setup. FinancialStates сожми в короткое пояснение, сохрани previews.
3. В HeroShowcase поменяй только порядок Calendar/Finance и соответствующий summary;
   никаких новых hero tabs, новых autoplay и переписывания pause/reduced-motion logic.
   Сократи hero spacing лишь если CTA не помещается в заданные размеры.
4. Удали Find your trade из desktop/mobile header, оставь footer/niche-router и все
   NICHE_PAGES enabled/locales/routes. У shared anchors не должно быть дублей/потерь.
5. Добавь MockPackageCheckout внутрь ConnectedRecords; исправленный feed сохраняется.
   Синтетический ранее оплаченный пакет, понятные единицы/остаток, ноль новой Revenue.
6. Дополняй Collaboration небольшим app-derived access fragment, без новой таблицы прав
   и переделки MockCollaborationWorkspace. Source — WorkspaceAccessSheet/FormFields.
   Role Administrator и связь с Performer независимы. Claim только по G3 и TEAM/BILL.
   Актуализируй затронутые строки docs/team-collaboration-claim-contract.md, сохрани
   ограничения coworker и не объявляй новый role готовым по старому TEAM PASS.
7. Реализуй CashDrawerSummary/new section по 01: G4 implementation READY, касса уже
   реализована в app (DR0–DR6/UI). Не откладывай компонент из-за исторической DR7 метки.
   Public release проверь отдельно в POS4: текущий report ещё содержит NO-GO. До его
   сверки с фактическим релизом не публикуй claim; не добавляй Coming soon и не повторяй DR.
8. Новые fragments используют существующие tokens/shells, generated UI labels,
   фиксированную demo currency и Example data. App screenshots — reference proof,
   а не замена существующим DOM previews. Не добавляй новую UI библиотеку или зависимость.

Существующие файлы: components/homepage/{hero,hero-showcase,homepage,operations,
connected-records,collaboration,finance-overview,financial-states,drivers,setup,faq,
final-cta}.tsx; components/landing/{landing-header,mobile-nav}.tsx по необходимости.
Новые файлы ограничены preview additions из 01; lib/launch-demo-fixture.ts опционален.
Generated-key extension: scripts/generate-niche-catalog.mjs + verify-niches.mjs и
фактически используемые data artifacts. Общий генератор не мигрировать на export v2.

Проверки: обновить tests/homepage-order.test.ts и устаревший English finance exact-copy
contract, сохранив нужные guards. Добавить точечную проверку шести утверждённых RU-строк,
одного H1 и действующей ссылки #how; не фиксировать дословный EN до его адаптации.
Далее hero/mock/collaboration tests; локальная visual smoke
320/390/768/1366 px, обе темы. Сравнить существующие previews до/после: изменённые
цифры/labels допустимы, новый дизайн/потерянные controls — нет.
Готово: понятный день пользователя, короткий hero, все старые previews сохранены,
Drawer preview подготовлен в основном scope, implementation и publication отмечены раздельно;
прочие additions честно marked ready/deferred.
```

## POS3 — Pricing, trial и согласованность опубликованных сообщений

**Skills:** `copywriting`, `copy-editing`, `cro`. Смысл тарифа уже задан; новый pricing research не нужен.

```text
Выполни POS3. Подготовка может идти рядом с POS1/POS2. Прочитай BILL7 handoff, текущие
launch decisions и early setup v1; получи actual public display catalog, когда готов.
Не реализуй BILL вместо его владельца.

1. components/pricing/pricing-page.tsx, content/pricing.ts, messages/*/pricing.json:
   две plan cards SOLO/STUDIO, единый 21-day STUDIO trial, compact contact-only STUDIO+,
   concise comparison/FAQ из 01. Сохрани header/footer/стиль/трекеры. Удали устаревшую
   публичную future billing/beta упаковку; согласуй product-stage display с app release.
2. Цены/лимиты/availability из BILL7 generated artifact. Messages используют placeholders.
   Не заменяй source-of-truth самодельным catalog. Если handoff отсутствует — review
   preview подготовлен, commercial publication pending; generic positioning work продолжается.
   Никакого production fallback с тестовыми offer facts.
3. region-currency-hint.tsx не должен выбирать валюту SaaS цены. USD anchors + final
   checkout taxes/currency wording; без своей конвертации, VAT и ежегодного тарифа.
4. RU hero.signup/how/trialMicro из §2 уже утверждены: не сокращай и не перефразируй.
   Тот же основной CTA можно переиспользовать в header/closing/common без нового варианта;
   это не approval остальных текстов этих поверхностей. Trial helper и дальнейшая цена —
   возле hero/final/Pricing CTA. Сохрани verification
   email expectation. Обнови shared messages/common и нужные CTA/helper в devices.
5. Generic signup использует текущий CtaButton/lib/urls без offer. Plan-specific offer
   подключай только в координации BILL7: CtaButton props, SignupUrlParams, allowlist,
   attribution и app roundtrip. Нельзя обещать покупку прямо с landing или early trial checkout.
   Любой selected paid plan не меняет trial STUDIO. Проверить реальный app origin из config.
6. Hero: RU freeze уже закрыт → проверь UK/EN адаптации POS2 → pl/es/fr/de/pt/tr.
   Прочие новые строки остаются в общем смысловом review-наборе. Проверяй изменившиеся
   category, коммерческие факты, использованные новые preview labels и ложные claims.
   Не полировать все существующие переводы; не выдавать машинный результат за native review.
7. Синхронизируй lib/site.ts, Home/Pricing metadata и OG/Twitter, JSON-LD descriptions,
   lib/machine-readable.ts (llms.txt/pricing.md). Используй тот же public offer source.
   Не добавляй новые schema types. Нишевые URL/OG меняй только при shared factual error.
8. CtaButton сейчас отправляет fixed cta_text=create_workspace. При новом trial label
   приведи fixed semantic enum/документацию в соответствие, если он описывает label;
   не отправляй translated free text и не вводи новые события. У FAQ сохраняй устойчивый
   question_id при замене вопросов, чтобы старые данные не сменили смысл молча.

Тесты: затронутые urls/app-url-interpolation/analytics/seo-surface/i18n-routing и
locale-finance-contract; обновить старые запреты trial/цен адресно, не удалить guards
достоверности. Согласовать с BILL7 offer roundtrip tests, не продублировать suite.
Готово: один честный offer на всех доступных языках/поверхностях, implementation и
commercial release readiness отмечены отдельно.
```

## POS4 — Короткая приёмка достаточности к запуску

**Skills:** `cro`, `copy-editing`. Не превращать в отдельную CRO/SEO/security программу.

```text
Выполни POS4. Проверь финальный scope POS1–POS3; не перезапускай весь FM/TEAM/DVC.

Один финальный технический проход:
- pnpm typecheck
- pnpm lint
- pnpm test
- pnpm verify:niches
- pnpm build
- git diff --check
Учитывай существующий prebuild verify:niches: повторять весь цикл без новых правок не нужно.
Если генерация заблокирована dirty source, используй зафиксированную clean ревизию по
общему правилу; не обходи guard. Не требуй полный app build для landing-copy изменения.

Короткая ручная приёмка:
1. Home/Pricing в RU/UK/EN: 390×844 и 1366×768, light/dark. Дополнительно overflow smoke
   320/768 px; keyboard/reduced motion/200% zoom на изменённых controls. Для прочих
   локалей — ключи, truth/placeholder checks и самый длинный hero/Pricing текст.
   Не требовать полный декартов продукт 9 языков × 5 размеров × все roles.
2. CTA виден, trial/дальнейшая цена понятны; нет ложного debit-on-day-22, free SOLO,
   unlimited users, fiscal till или payment-processing claim.
3. Generic register handoff сохраняет locale/path/attribution; письмо и onboarding
   соответствуют helper. BILL/TEAM evidence подтверждает настоящий STUDIO trial и
   будущую оплату. Landing click не выдаётся за trial_started или subscription_created.
4. Finance redemption не добавляет деньги/Revenue; feed не выглядит приходом.
   Drawer, если включён: 100+50=150, counted145, difference−5, card/package не прибавляют
   cash; open до оплаты. G4 implementation уже разблокирован; перед публикацией сверить
   актуальный release/enablement с DR7 report, который пока говорит NO-GO. Если расхождение
   не закрыто, скрыть только публичный блок/claims; не требовать заново реализовать кассу.
5. Administrator без general Finance, но не «без любых сумм»; administrative-only не
   потребляет performer capacity, и это не даёт team access на SOLO.
6. Прежние previews имеют те же controls/layout/themes. Shared anchors рабочие;
   header без niche menu, enabled niche URLs/canonical/hreflang/sitemap сохранены.
7. Home/Pricing/OG/JSON-LD/llms.txt/pricing.md совпадают по категории и offer;
   активные нишевые/установочные поверхности не обещают старую beta/two-way.
8. Есть реальные опубликованные legal links/provider readiness по владельцам BILL/legal.
   Не редактируй юридический текст и не объявляй legal acceptance от лица маркетинга.

Отчёт в одном checklist: landing implementation READY/HOLD, commercial launch READY/HOLD,
Drawer implementation READY/HOLD и public included/withheld отдельно, источники фактов/проверок, конкретный остаток. Если нет готовности
BILL/legal, handoff landing закончен в пределах scope; не запускать рекламу/публикацию.
Если пользователь затем разрешит deploy, проверить реальный production output и записать
release date/version. Текущая задача сама deploy не разрешает.
```

## Минимальный рабочий журнал

```text
Date / landing revision / app evidence revision:
Рекламные строки: review владельца (какие, когда), remaining drafts:
G1–G8: фраза / source / role-plan-locale / proof / ready или причина отсрочки:
Изменённые messages/components:
Сохранённые previews; какие минимальные fixes были нужны:
UI labels: sourceCommit, locale keys; commercial catalog: revision/release status:
Проверки: реально выполнены / не выполнены (почему):
READY по landing implementation:
READY по public trial/offer: BILL / TEAM / legal:
Drawer: implementation READY/HOLD; public included/withheld и источник;
Google: included или deferred:
```

Одна unresolved optional preview row не создаёт новую фазу. Functional defect передать владельцу app; сохранить корректные тексты и продолжить независимую landing-задачу. Цель пакета — понятный и правдивый запуск с существующим интерфейсом.
