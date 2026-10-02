# Подача в Google/Paddle, параллельная работа и запуск MVP

**Актуально на 01.10.2026.** Основание: проверка опубликованного сайта и запрос владельца
обновить порядок следующих задач. Этот документ задаёт последовательность для legal,
positioning и monetization; существующие планы сохраняют технические контракты.
При конфликте старых очередей, статусов или C-07 использовать эту последовательность и
выбранный v1-сценарий ниже. Новые юридические документы и новый набор release-gates не требуются.

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

## 3. Параллельно: начать сейчас, не ждать ответа провайдера

| ID / исполнительская задача | Вход и ограниченный результат | Приёмка / что не блокирует |
| --- | --- | --- |
| PAR-B1 — BILL5A | Сверить готовые BILL1 facts, BILL2 worker seam, BILL3 policy и Notifications; реализовать только lifecycle/wakeups и надёжную передачу service notices текущему payer | Переходы trial/grace/cancel/restore по времени; dedupe, replay, потеря handoff, реальные PG/Redis tests. Не дублировать Paddle receipts/dunning; никаких marketing/lifecycle campaigns |
| PAR-L — Task G UI + G-INT | Готовые `content/legal/en` + текущие Billing UI: ссылки, copy, review/recovery, отмена/возврат через Paddle/support; UI уже в работе | Новая покупка закрыта до G-BE1; затем G-INT связывает DTO/receipt со всеми checkout путями. Portal/cancel не блокировать. Согласовать BILL5A account-service copy до включения отправок |
| PAR-L-BE — G-BE1 / G-BE2 | [Backend plan 12](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/12_purchase_legal_acceptance_backend_20261001.plan.md): review + atomic immutable acceptance/attempt; затем confirmation/B-14 | G-BE1 идёт параллельно UI/BILL5A и выпускает exact core/API handoff; G-BE2 использует готовый Notifications seam, не второй mail pipeline. BILL5A сам по себе не реализует purchase acceptance |
| PAR-B2 — BILL5B | После callable reconciliation hooks BILL2 и subscription changes BILL2E: сверка подписок, webhook/checkout recovery, границы действия и конфликты | Потеря/повтор/перестановка событий и outage не портят доступ; bounded recovery. Не включать production cadence этим code-task; большой metrics UI не нужен для этой приёмки |
| PAR-P — остаток POS3/BILL7 | Подготовить provider-free catalog/offer handoff, коммерческие тексты всех используемых поверхностей и корректный signup intent | Сохранить исправленные Home/previews и переводы; не повторять POS0–POS2, не включать tracking. POS4 завершить на релизной ревизии |
| PAR-O — существующие операции из release 30 | Support/incident/privacy checklist; проверка доставки писем; cleanup со всеми skips; R2 EU/rotation, local copies, logs, independent deletion journal, restore/replay; provider DPA и бухгалтерский график | Ссылки на фактические результаты в существующих runbooks. Ручная процедура допустима; документ или unit test не заменяет restore/deletion walkthrough |
| PAR-R — подготовка Task I/BILL8A | По текущей ревизии собрать имеющиеся BILL/TEAM/Drawer/export/migration/build результаты и выписать только открытые применимые проверки | Read-only audit можно готовить до ответов Google/Paddle; verdict отдельных live stages останется pending до их prerequisites |

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
