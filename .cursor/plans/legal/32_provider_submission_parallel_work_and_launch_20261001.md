# Подача в Google/Paddle, параллельная работа и запуск MVP

**Corrective checkpoint 12.10.2026:** замечания R1–R3 из [review 38](38_lp_m1_independent_review_20261012.md)
исправлены/целевые tests PASS; app `59a270485`, landing artifacts закреплены на этом SHA.
Не повторять реализацию. Визуальный operator checklist и real inventory/transition/notice
проверки всё ещё нужны до rollout; production не менялся, LP-M2 отдельно PLANNED.

**Implementation checkpoint 12.10.2026:** LP-M1 реализован (app `a91628447`),
закрытые landing routes/acquisition сняты; artifacts закреплены на clean app revision.
Целевые tests PASS; production inventory/защищённый ID/transition ещё не выполнены,
rollout BLOCKED. LP-M2 отдельно PLANNED, LP-M3 процедуры PREPARED, LP-M4 частично проверен.
Подробности и оставшиеся gates — [план 37](37_mvp_legal_polish_and_business_scope_20261012.md).

**Упрощённое решение 12.10.2026:** [review и минимальная полировка 37](37_mvp_legal_polish_and_business_scope_20261012.md)
задаёт единый HOLD во всех рынках для `aesthetic_clinic`, `advanced_skincare`, `massage`, `spa`,
`personal_trainer`, `yoga_instructor`, плюс серверную защиту уже отключённых `rent`/`personal`.
Матрица страна × ниша и новая декларация немедицинского использования отложены до post-MVP
и реального запроса на закрытую нишу. **Terms остаются `2026-11-01.1` без изменений** для этого
сужения предложения. CA остаётся в прежних десяти провинциях/территориях; уточнение существующей
CA declaration до QC/AB/BC, короткие подсказки и PAR-O остаются в LP-M1–M4.
Статус SCOPE SELECTED / IMPLEMENTATION PLANNED; завершённые G/PAR/BILL задачи не открываются заново.
Исправление app admission и подготовка операторских инструкций могут идти параллельно;
landing catalog/нишевые обещания синхронизируются после изменения app. Новые правки до подачи
должны убрать противоречащие scope обещания; уже поданная заявка сама по себе не требует отмены.
Дата 01.11.2026 сохранена. Если у действующих салонов опубликованы неверные Google/R2 сведения,
нужна отдельная своевременная коррекция notice и перепубликация, без перезаписи старых доказательств;
это не новая версия платформенных Terms. Оценки «GO» не закрывают BILL8B/операционные условия.

**Актуализировано 07.10.2026 по подтверждению владельца и BILL8A.**
**G-BE2, PAR-P, BILL5B и BILL6A — ЗАВЕРШЕНЫ.** R1/R2/R3 исходного review исправлены.
**BILL8A — ЗАВЕРШЁН:** [BILL8A report](/Users/valery/Sites/beauty-finance/inventory/bill8a-release-readiness-20261007.md). Производственные этапы A–H пока BLOCKED по
конкретным evidence gaps; это не повторное открытие завершённых эпиков.

Следующая очередь: заморозить forward migration/release revision → обновить landing
artifacts/POS4 → собрать TEAM-RELEASE и применимые Drawer browser/pilot → target data/
C-09 classification, operator/off-host/provider evidence → точечные внешние legal/mail
проверки → разрешённый этап BILL8B. Эти подготовительные работы могут идти параллельно.
Новая публичная бесплатная пилотная программа не вводится; C-09 — отдельная принятая
миграционная политика существующих Company. Внешнее одобрение провайдера и live activation
не следуют из локального sandbox PASS.

Исторические checkpoints 01–05.10 ниже сохранены для трассировки; они не задают текущую очередь.

**Corrective checkpoint G-INT-R / PAR-P-R, 05.10:** R1/R2 исправлены в app working tree
поверх `6bf98fe85`, без commit/deploy. Legal URLs — perelai.com; API/Web checkout —
точный perelai.app route с bound verification и lost-session login/support.
R3 ждёт финальный owner app commit и штатную генерацию из чистой ревизии, без bypass.
Landing rerun: 486/487; commercial/types/lint/manifest PASS, freshness/prebuild HOLD.
Новая browser-приёмка, POS4 и existing G-BE2 remainder не закрыты.
[Точный handoff и команды](/Users/valery/Sites/beauty-finance/inventory/g-int-r-par-p-r-20261005.md).
Исторический обзор ниже сохранён; его R1/R2 описывают состояние до code corrections.

**Актуализировано 05.10.2026.** Основание: проверка опубликованного сайта и запрос владельца
обновить порядок следующих задач. Этот документ задаёт последовательность для legal,
positioning и monetization; существующие планы сохраняют технические контракты.
При конфликте старых очередей, статусов или C-07 использовать эту последовательность и
выбранный v1-сценарий ниже. Новые юридические документы и новый набор release-gates не требуются.

**Независимое review — 05.10.2026:** [отчёт 33](33_g_par_p_independent_review_20261005.md)
фиксирует app `6bf98fe85` / landing `d927c64`. G-UI/G-BE1/G-INT и PAR-P реализованы.
Следующий шаг: **R1/R2 — исправить legal/checkout origins; R3 — обновить generated niche
provenance после окончательной app revision**, затем POS4 и остаток G-BE2.
Текущий landing: 486/487 tests, prebuild HOLD из-за stale app SHA; commercial/manifest/types/lint PASS.
Purchase-copy DRAFT, delivery/lost-login и применимый B-13/B-14 остаток не закрыты.
Этот итог имеет приоритет над историческими next/status ниже; production launch HOLD.

**Обновление PAR-P — 05.10.2026:** provider-free catalog, gated offer CTA и app signup intent
реализованы и закоммичены в указанных выше ревизиях. Исторические результаты и границы проверки — в
[handoff](/Users/valery/Sites/beauty-finance/inventory/par-p-commercial-handoff-20261005.md).
Pricing в коде показывает SOLO USD 19 / STUDIO USD 29; старое описание beta/future prices
в таблице среза 01.10 ниже историческое. PAR-P implementation завершён; POS4/native review,
проверка релизного пути и применимые TEAM/BILL/Drawer gates остаются в release scope.
Публикационные флаги и tracking этой работой не включались; provider approval не утверждается.

## 1. Проверенное состояние и границы вывода

| Область | Что подтверждено | Что ещё не подтверждено |
| --- | --- | --- |
| Legal landing | Все 7 `/legal/*` документов доступны по HTTPS с HTTP 200, версия `2026-11-01.1`, effective date `2026-11-01`, без `[TBD]`; локальный `legal:manifest` проходит | OAuth/Paddle Console, готовность операций и конфигурация app/API не проверялись этой проверкой |
| Навигация | Home содержит ссылки Privacy, Terms, Refund Policy; CTA ведёт на `perelai.app` | Фактический checkout origin нужно сверить с конфигурацией приложения, не брать `app.perelai.app` из старых примеров |
| Pricing | `/pricing` доступен, но содержит старую beta-формулировку о будущих ценах; Home уже обещает trial, Terms содержат $19/$29 | Коммерческий POS3/BILL7 handoff и согласованность страниц не завершены |
| Positioning | Журнал §§9–10 фиксирует corrective pass POS2 и Home-localization POS3 для 9 языков | Финальный commercial POS3/POS4; запись о выполнении не доказывает текущие BILL/TEAM flags |
| Business notices | UA/US/AU/CA v2 подготовлены и зарегистрированы как будущие версии с 01.11.2026 | Default остаётся v1; нет автоматического переключения даты или повторной публикации настроек салона |
| Заявки провайдерам | Публичные тексты готовы для включения в пакет | Подача/одобрение не проверены; не записывать `SUBMITTED` или `APPROVED` по готовности файлов |

Источники: [platform release 30](30_platform_legal_mvp_postponement_20260927.md),
[notice release 31](31_booking_notice_v2_cloudflare_backups_20260927.md),
[positioning evidence](../../../docs/launch-positioning-checklist.md).
Наблюдение HTTP — срез на дату, а не мониторинг или доказательство полного совпадения live HTML с исходниками.

**Выбранный trial v1:** один общий 21-дневный STUDIO trial на плательщика, без карты;
покупка каждой Company после окончания trial, без автоматического списания. Early setup
не входит в MVP. C-07 в решении 16.09 описывает историческую желаемую возможность;
[selected provider path](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/paddle-trial-conversion-evidence.v1.md)
выбирает post-expiry checkout. Не реализовывать early setup и не ждать его ради запуска.

## 2. До подачи: короткие независимые задачи

### PRE-P — POS3 commercial minimum + Task G0 для Paddle

1. Проверить текущий BILL7 provider-free catalog/handoff. Подготовить две карточки:
   SOLO $19/month/1 исполнитель; STUDIO $29/month/до 5; административный доступ не расходует
   performer capacity, но не даёт дополнительных участников SOLO. STUDIO+ — только contact.
2. Согласовать Home, Pricing, FAQ и активные machine-readable surfaces: trial без карты,
   покупка после expiry, месячная подписка на Company, итоговая валюта/налоги в Paddle.
   Сохранить отсутствие analytics/attribution в Launch v1; старые prompts «сохранить трекеры»
   не разрешают вернуть PostHog или сбор маркетинговой атрибуции.
3. Если catalog/runtime handoff готов, выполнить узкий POS3/BILL7B. Если не готов,
   подготовить отдельный review screenshot из утверждённых фактов для Paddle с пометкой
   планируемого запуска. Не создавать временный production catalog или фиктивно рабочий checkout.
   Устаревшее описание Pricing исправить на честное текущее/планируемое состояние; обещания
   немедленного trial/функций должны соответствовать проверенному runtime.
4. В пакет G0 включить ссылки Home/Terms/Privacy/Refund, pricing URL или screenshot,
   описание продукта и ФОП, support, фактические домены и планируемую дату 01.11.2026.
   Одобрение domain review, business/identity verification и готовность live checkout
   учитывать отдельно. KYC-документы и секреты не хранить в Git.

**Готово к подаче:** пакет содержит цены/состав покупки, доступные legal-ссылки и честный
статус запуска. Screenshot допускает подачу до полного BILL7. Не ждать BILL5/6/8 или
закрытия всех эксплуатационных действий, чтобы подготовить пакет. Саму подачу выполнять
как отдельное действие владельца/уполномоченного оператора в пределах уже полученного разрешения.

### PRE-G — Task G0b для Google

1. Проверить brand/contact, ownership/authorized domains, homepage и один точный Privacy URL
   в OAuth Console. Сверить реально запрашиваемые scopes, а не только текст политики.
2. Подготовить scope justification и видео Calendar: полный OAuth consent screen на английском,
   `calendar.events.readonly`, импорт и пользовательский результат, disconnect/revoke.
   Sign-in и Calendar различать; не добавлять неиспользуемые scopes.
3. Использовать отдельный разрешённый тестовый аккаунт и синтетические данные. Закрыть
   необходимый реальный Google walkthrough из CS5 при записи видео, повторно не реализуя CS0–CS4.

**Готово к подаче:** совпадают бренд, домены, Privacy, scopes и показанный работающий сценарий.
PRE-G не зависит от Pricing/Paddle или полного Billing. Неподтверждённый Calendar остаётся
отдельно недоступным; email login и внутренний календарь могут выпускаться без него.

## 3. Актуальная очередь: завершённые эпики и оставшиеся release-проверки

| ID / исполнительская задача | Вход и ограниченный результат | Приёмка / что не блокирует |
| --- | --- | --- |
| PAR-B1 — BILL5A | Сверить готовые BILL1 facts, BILL2 worker seam, BILL3 policy и Notifications; реализовать только lifecycle/wakeups и надёжную передачу service notices текущему payer | Переходы trial/grace/cancel/restore по времени; dedupe, replay, потеря handoff, реальные PG/Redis tests. Не дублировать Paddle receipts/dunning; никаких marketing/lifecycle campaigns |
| PAR-L — Task G UI + G-INT | **DONE**, включая R1/R2: ссылки perelai.com, checkout perelai.app, receipt/recovery | Только smoke текущей релизной сборки; portal/cancel независимы от нового purchase assent |
| PAR-L-BE — G-BE1 / G-BE2 | **DONE**, принято владельцем 07.10: неизменяемый архив, ledger/outbox, локальная доставка, Paddle sandbox purchase/cancel/refund | Не повторять эпик. В BILL8 отдельно подтвердить внешнюю почту, applicable B-13/B-14 и production copy/date/config |
| PAR-B2 — BILL5B | **DONE**, `ffacfc7a4`; финальный PG/Redis gate 40 suites / 328 tests, zero skipped | Production reconciliation/recovery cadence включается только своим BILL8B этапом |
| PAR-P — POS3/BILL7 | **DONE**: цены, catalog/коммерческие тексты, password/Google registration intent. Исходный R3 исправлен `40bc9e0` | После новых app commits повторно закрепить generated sourceCommit на frozen release SHA и пройти POS4; не повторять PAR-P |
| PAR-B3 — BILL6A | **DONE**, approved operator/CLI scope, `70c20652d`; JWT stdin/private file, maintenance attestation, OPS0–OPS4, runbook | Настоящие target/protection, bootstrap, fleet drain и off-host restore остаются эксплуатационными условиями BILL8; локальная simulation их не заменяет |
| PAR-O — существующие операции из release 30 | Support/incident/privacy checklist; проверка доставки писем; cleanup со всеми skips; R2 EU/rotation, local copies, logs, independent deletion journal, restore/replay; provider DPA и бухгалтерский график. [LP-M3/M4](37_mvp_legal_polish_and_business_scope_20261012.md) уточняют минимальные инструкции, журнал CA breaches и проверку обещаний | Ссылки на фактические результаты в существующих runbooks. Ручная процедура допустима; документ или unit test не заменяет restore/deletion walkthrough |
| PAR-R — Task I/BILL8A | **BILL8A COMPLETE**, 07.10: [BILL8A report](/Users/valery/Sites/beauty-finance/inventory/bill8a-release-readiness-20261007.md) | Поэтапный BILL8B A–H BLOCKED по конкретным условиям отчёта; read-only подготовка GO |

Задачи параллельны по зависимостям, а не по праву одновременно переписывать одни файлы.
Task G UI владеет `apps/web` и copy; G-BE1 — core contracts/API/checkout/evidence и своей миграцией;
G-BE2 использует завершённый BILL5A handoff для нужного confirmation. BILL владеет остальным поведением/доставкой/платежами,
POS3 — представлением на landing. В handoff заранее перечислить общие файлы и владельца правки.
Paddle Sandbox не требует domain approval; реальные тесты в sandbox не объявлять live proof.

## 4. После подачи и после ответов

**После подачи:** сохранить дату, provider/project/domain и обезличенную ссылку/номер заявки,
статус `SUBMITTED`, запросы проверяющего и ответственного в handoff G0/G0b. Проверять
входящий support/project-contact; PAR-задачи продолжаются. Этот документ не создаёт автоматический мониторинг.

**После замечаний:** исправлять только конкретное расхождение; изменения опубликованных
юридических условий проводить как новую версию с hash/evidence, а не незаметно менять
утверждённую версию. Не открывать новые страны и scopes ради скорости проверки.

**После одобрения Paddle:** проверить точные одобренные checkout domains и статусы аккаунта;
подготовить отдельные live catalog/credentials/webhook/default payment link. Не копировать sandbox
идентификаторы и не считать ответ о домене разрешением на все production actions. Выполнение —
в соответствующем разрешённом шаге BILL8B после его проверок.

**После одобрения Google:** включать только проверенные scopes/integration после её собственного
production preflight. Это не зависимость платного MVP, если Calendar остаётся отключённым.

## 5. Перед ограниченным публичным запуском

Использовать Task I + POS4 + BILL8A/B как одну сводку существующих доказательств:

- пройти на релизном стенде landing → signup/email → setup → legal booking publication →
  клиентская заявка → визит/учёт оплаты → trial expiry → sandbox purchase → cancel/recovery;
  live проверку проводить только в соответствующем BILL8 шаге;
- подтвердить production build/migrations/worker, наблюдение за ошибками и rollback,
  изоляцию Company, актуальный TEAM-RELEASE для публичного STUDIO trial и покупки;
- Drawer проверять по актуальному DR7: исправленный DR-R1 не открывать заново;
  наличие старого заголовка READY не заменяет незавершённые browser/pilot/flag проверки.
  Если функция не выпускается, согласовать её отсутствие в публичных обещаниях;
- завершить необходимые PAR-O операции до обработки данных/приёма платежей под этими обещаниями;
  optional admin dashboard, marketing stack и новые страны не являются prerequisites;
- согласовать применяемые platform versions в landing/API/Web. 01.11.2026 — дата текста,
  а не автоматическое разрешение запуска; существующие данные имеют обязательства уже сейчас;
- выпустить точные v2 default references UA/US/AU/CA не раньше effective date, пройти owner
  preview/confirm/publish. Существующие notices/acceptance hashes не переписывать; custom terms
  не мигрировать молча. Если R2 уже хранит реальные данные, текущий disclosure gap решать сейчас;
- начать с небольшого cohort в уже разрешённых рынках и собрать проблемы реальной рабочей недели.
  CA QC/AB/BC и другие закрытые рынки остаются закрытыми.

Дополнительный минимальный operator UI/CLI определяется нужными recovery-действиями BILL8,
а не требованием закончить весь BILL6B dashboard. Не отменять обязательные permissions/audit.

## 6. Формат завершения следующей задачи

Каждый агент указывает: выбранный PRE/PAR/release scope; проверенную ревизию; изменённые файлы;
реальные команды/результаты; конкретную оставшуюся зависимость и следующий допустимый шаг.
Статусы различать: `PREPARED`, `VERIFIED` (с областью проверки), `SUBMITTED`, `APPROVED_BY_PROVIDER`,
`READY_FOR_RELEASE`, `RELEASED`. Для подачи/деплоя использовать существующую авторизацию владельца;
само редактирование планов не является выполненной заявкой, выдачей доступа или production rollout.

Не заводить отдельный approval-пакет на каждый документ, перевод или рынок. Не повторять
готовые функции по старому `planned`; если вход задачи уже реализован — проверить результат
и продолжить только незавершённый scope.

## Источники требований провайдеров (проверены 01.10.2026)

- [Paddle domain review](https://www.paddle.com/help/start/account-verification/what-is-domain-verification):
  публичные product/legal сведения, pricing либо screenshot, точные checkout domains.
- [Paddle Sandbox](https://developer.paddle.com/sdks/sandbox/): отдельное окружение без domain approval.
- [Google verification requirements](https://support.google.com/cloud/answer/13464321?hl=en):
  brand/domains/Privacy, scopes и демонстрационное видео. Перед фактической подачей сверить изменения требований.
