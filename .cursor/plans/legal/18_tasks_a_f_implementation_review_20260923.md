# Review реализации Tasks A–F — 2026-09-23

Проверено текущее состояние обоих репозиториев, **включая незакоммиченные изменения**:
landing HEAD `1c59578`, app HEAD `72fa0f3a1`. Это review реализации, не юридическое
утверждение документов и не свидетельство deployment. Код приложения не изменялся.

Основание: Tasks A–F в документе 09, требования 00/01/08, текущий launch minimum 14,
записи реализации 15–17 и действующие commercial catalog / launch decisions приложения.
Позднее решение Task F отключить landing analytics/attribution учитывается; внедрение
CMP не возвращается в обязательный объём запуска.

**Вывод:** подготовку G0/G0b можно начинать параллельно исправлениям. Считать A–F
полностью закрытыми нельзя. Отправка провайдерам требует окончательных опубликованных
документов. Исправления public booking блокируют соответствующий сбор клиентских данных,
но не сбор фактов, подготовку pricing screenshot и Google verification packet.

## 1. Замечания по реализации

### R1 — P1: production-маршрут обходит проверку готовности документов — A/B

[page.tsx:101](/Users/valery/Sites/perelai-landing/app/[locale]/legal/[document]/page.tsx:101)
и `generateMetadata` на строке 64 вызывают `loadLegalDocument` с `isProduction: false`.
Поэтому обязательные проверки identity, draft/TBD и approval manifest/hash не защищают
реальные canonical routes. `noindex` регулирует индексацию, но не запрещает публикацию.
Другой production-проверки документов в build/route/layout не найдено.

Подтверждение: при `NODE_ENV=production` вызов реального `generateMetadata` для Terms
успешен; вызов того же loader без override в том же процессе отвергает отсутствующий
`NEXT_PUBLIC_LEGAL_PROVIDER_FULL_NAME`. Все семь записей manifest пока пустые.

**Исправить:** подключить строгую проверку к production build/render. Draft preview
оставить в явно отделённом preview-режиме. Проверять весь набор реально публикуемых
документов. Добавить тест маршрута/build, а не только отдельного validator: draft,
неполная identity и изменённый после approval текст должны останавливать публикацию.

### R2 — P1: booking evidence не связано с показанной пользователю редакцией — E

[public-booking.service.ts:700](/Users/valery/Sites/beauty-finance/apps/api/src/public-booking/public-booking.service.ts:700)
создаёт snapshot из Company, загруженной при POST. В booking DTO передаются только
флаги согласия, без идентификатора показанной редакции. Сценарий: GET показывает
отмену за 24 часа, бизнес меняет правило на 48 часов, клиент отправляет старую форму —
система записывает согласие уже с новым правилом. Аналогично Perelai/copy version
читаются на сервере при отправке, а не сверяются с отображёнными.

Дополнительно `businessPolicyHash` на строке 661 хеширует только version + URL.
Изменение внешнего текста по тому же URL не меняет такой hash. Полный старый текст
inline cancellation также нельзя восстановить из одного hash после перезаписи Company.

**Исправить:** выдавать из GET серверный идентификатор неизменяемой legal-редакции,
возвращать его при POST и проверять до записи booking. При смене редакции требовать
обновление формы и новое подтверждение либо сохранять ранее показанную разрешённую
редакцию. Сохранять воспроизводимый snapshot показанных disclosure/copy и ссылки на
архивированные документы. Hash URL не называть hash содержимого внешней политики.
Не требуется автоматический crawler внешних сайтов. Проверить смену условий между
GET и POST для всех четырёх booking modes.

### R3 — P1: можно принять непредставленные условия и записать null-версии — E

[public-booking.service.ts:1558](/Users/valery/Sites/beauty-finance/apps/api/src/public-booking/public-booking.service.ts:1558)
проверяет два boolean, но не готовность документов. В
[legal-acceptance.config.ts:80](/Users/valery/Sites/beauty-finance/apps/api/src/legal/legal-acceptance.config.ts:80)
booking/copy versions необязательны; evidence сохраняет `null`, если они отсутствуют.
Production bootstrap требует signup versions, но не эти booking versions.

В [PublicBookingLegalSection.tsx:168](/Users/valery/Sites/beauty-finance/apps/web/src/components/public-booking/PublicBookingLegalSection.tsx:168)
обязательная фраза о согласии с политиками бизнеса остаётся даже при отсутствии
booking/cancellation policies. Ни warning, ни блокировка по `legal.missing` не реализованы.
Privacy acknowledgement также утверждает ознакомление с notice бизнеса, даже если его
не показали. Текущий UI-тест прямо закрепляет сохранение обязательной фразы при
отсутствующих политиках. Это противоречит документу 08 §8.

**Исправить:** применить согласованное правило готовности public intake в API и UI.
Без утверждённых Perelai booking/copy versions приём должен быть недоступен. Для
незаполненных Business policies нужен разрешённый сценарием запуска прозрачный fallback
или блокировка; нельзя требовать согласия с отсутствующим текстом. Не превращать
неприменимую refund policy в универсальное обязательное поле. Проверить отсутствие
DB-записей при отказе. Исправить утверждение документа 16, что слой уже предупреждает
о пропущенных политиках и оставшиеся зависимости исключительно юридические.

### R4 — P2: provisioning сохраняет только DPA из полного согласия — D

[legal-acceptance.service.ts:260](/Users/valery/Sites/beauty-finance/apps/api/src/legal/legal-acceptance.service.ts:260)
при создании workspace существующим пользователем создаёт только DPA row, хотя
`OwnerLegalAcceptanceField` показывает Terms + DPA + Privacy. Предположение, что Terms
и Privacy уже записаны, не проверяется. У старого beta-пользователя записей может не
быть вообще; у приглашённого сотрудника Terms имеют `PERSONAL_USE`, тогда как новая
роль — представитель своего бизнеса. Новое принятие Terms в этом качестве теряется.

**Исправить:** в той же транзакции сохранять недостающие/вновь принятые Terms и Privacy
вместе с DPA, с реальными version/source/authority. Не переписывать старые записи.
Добавить сценарии «legacy user без evidence создаёт workspace» и «приглашённый сотрудник
становится владельцем своего бизнеса». Это точечное исправление текущего flow;
общую систему material-change reacceptance для него строить не нужно.

### R5 — P2: legal navigation теряет контекст приглашения — C/D

[OwnerLegalAcceptanceField.tsx:64](/Users/valery/Sites/beauty-finance/apps/web/src/components/legal/OwnerLegalAcceptanceField.tsx:64)
и [AuthLegalLinks.tsx:53](/Users/valery/Sites/beauty-finance/apps/web/src/components/auth/AuthLegalLinks.tsx:53)
открывают документы в той же вкладке на обычном register. `SignupScreen` не передаёт
им признак token-bearing invite flow. После `/register?returnTo=/invite/...` → Terms →
«Return to registration» landing закономерно восстанавливает обычный `/register` без
приглашения. Пользователь теряет invite flow и видит регистрацию owner вместо staff.
Coworker invite также нужно учитывать; RegisterPage уже вычисляет оба вида приглашения.

**Исправить:** из контекста приложения передавать признак приглашения в оба набора
ссылок; открывать чистую legal URL в новой вкладке с `noopener noreferrer`, сохраняя
исходную форму. Не передавать токен или полный returnTo на landing. Проверить staff,
administrative member и coworker invitations в обычном браузере и standalone.

### R6 — P2: часть заполненных Business disclosures не показывается — E

[PublicBookingLegalSection.tsx:92](/Users/valery/Sites/beauty-finance/apps/web/src/components/public-booking/PublicBookingLegalSection.tsx:92)
использует privacy URL, booking URL и cancellation policy, но не `traderAddress`,
`contactEmail`, `privacyContactEmail` и `refundPolicy`. Эти поля уже есть в настройках и
public DTO. Поэтому даже полностью настроенная inline refund policy не попадает в
форму, а сохранённый privacy email не даёт клиенту контакт для обращения. API при этом
может считать privacy disclosure заполненным на основании этого email.

**Исправить:** показывать предоставленные identity/contact/privacy-contact и применимые
refund disclosures у точки сбора данных. Отделить условия бизнеса от SaaS Refund Policy
Perelai. Добавить DOM-проверку отображения всех заполненных полей и отсутствия выдуманных
значений при неполной конфигурации.

### R7 — P2: identity с апострофом/амперсандом искажается при рендеринге — A/B

[interpolate.ts:7](/Users/valery/Sites/perelai-landing/lib/legal/interpolate.ts:7)
заранее заменяет символы на HTML entities, а React renderer затем экранирует их повторно.
Проверка реального renderer: `O'Connor & Partners` даёт HTML
`O&amp;#39;Connor &amp;amp; Partners`; посетитель видит буквальные `&#39;` и `&amp;`.
Так могут искажаться имя поставщика и адрес после заполнения env.

**Исправить:** обеспечить один корректный слой экранирования с сохранением безопасного
plain text; учесть Markdown-синтаксис при интерполяции. Проверять итоговый DOM-текст
identity, а не только промежуточную строку. Не использовать raw HTML как обход.

## 2. Публикация и Task F

- Все семь документов в `content/legal/en` остаются drafts, approval manifest пуст.
  Это ожидаемый незавершённый этап подготовки текста, но не готовые страницы для
  отправки провайдерам. Нужны фактическая identity/контакты, первая страна/язык,
  применимые vendors/retention и утверждённые version/date/hash. Approval нельзя
  получить простым заполнением технических переменных.
- Убрать служебные инструкции из публикуемого текста после решения фактов. В UI
  [legal-document-page.tsx:100](/Users/valery/Sites/perelai-landing/components/legal/legal-document-page.tsx:100)
  зашиты неподтверждённое обещание архива и `legal@perelai.app`; использовать фактический
  legal contact и действующий способ получения версий. На строке 109 non-English
  notice называет текст draft независимо от его статуса — сделать его условным.
- Task F: в текущем landing source PostHog отключён даже при заданном ключе, layout
  не монтирует bootstrap, legacy attribution очищается. Новый CMP для этого решения
  не нужен. Отчёт 17 относится к предыдущему deployment; он сам требует повторной
  проверки после deployment. Этот review не проводил новый production browser audit.
- Перед публикацией обновлённых Privacy/Cookies подтвердить в чистом браузере отсутствие
  optional запросов/storage на фактических origins и совпадение описания с runtime.
  Не обещать отсутствие PostHog в production только на основании локальных тестов.

## 3. Что нужно для G0/G0b

**Начать подготовку сейчас:** supplier/support/domain facts, окончательные тексты,
pricing screenshot SOLO $19 / STUDIO $29, 21-day STUDIO trial без карты и без списания
на день 22, Google brand/scopes/data-handling evidence и read-only Calendar demo.
Не ждать окончания BILL, внедрения CMP, STUDIO+ или универсального privacy portal.

**До отправки на проверку:** исправить R1/R7 и публикационные замечания, утвердить
и опубликовать реальные Terms/Privacy/Refund Policy с работающей навигацией;
синхронизировать manifest, API/web versions и утверждённую копию. Проверить фактические
домены и видимые обещания продукта. R2–R6 закрыть до запуска затронутых app/public flows;
отключённая public booking функция не должна задерживать подготовку провайдеров.

Refund Policy уже имеет один canonical route `/legal/billing`, aliases и заметную ссылку
в footer. Создавать второй документ не требуется.

Официальные требования перепроверены 2026-09-23:

- [Paddle Domain Review](https://www.paddle.com/help/start/account-verification/what-is-domain-verification):
  доступные через навигацию Terms/Privacy/Refund, описание продукта/функций/цен,
  identity в Terms; pricing screenshot допустим, если страница ещё не готова;
  каждый реально используемый checkout origin требует соответствующего approval.
- [Google brand verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/brand-verification)
  и [sensitive-scope verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification):
  публичные home/Privacy, согласованные brand/domain facts, раскрытие работы с
  Google-данными и scope/demo evidence. Basic sign-in и Calendar review разделять.

## 4. Проведённая проверка

| Проверка | Результат |
|---|---|
| Landing `pnpm test` | 454 passed, 1 failed: `verify-niches` |
| `node --import tsx scripts/verify-niches.mjs` | Подтверждена причина: catalog `sourceCommit=3986975`, app HEAD `72fa0f3`; требуется актуализация generated catalog |
| Landing `tsc --noEmit --incremental false` | Две ошибки в `tests/locale-raw-coverage.test.ts:244,252`: несовпадение props; вне legal |
| API: legal config/service/URL, auth service/Google guard, companies, public booking | 7 suites, 276 tests passed |
| Web: legal config/URL/acceptance, signup, OAuth callback, create workspace, public booking legal UI | 10 suites, 49 tests passed |
| Production-mode route probe | Подтвердил обход loader gate в R1 |
| React server-render identity probe | Подтвердил двойное экранирование в R7 |

Первый запуск `pnpm verify:niches` дополнительно встретил sandbox EPERM на IPC tsx;
прямой запуск через `node --import tsx` обошёл это ограничение и выявил реальный stale
catalog. Полный production build и DB integration/migration execution в этом review
не выполнялись. Provider dashboards, deployment, approval и отправка заявок не выполнялись.
Проходящие unit/UI-тесты не закрывают описанные пробелы: для них нужны указанные
поведенческие regression tests.

## 5. Разрешение R1–R7 — 2026-09-23 (второй проход)

Все семь находок исправлены в коде. Это исправление реализации, не юридическое
утверждение, не deployment-подтверждение и не provider-верификация.

| Находка | Статус | Что сделано |
|---|---|---|
| R1 route gate | Исправлено | `app/[locale]/legal/[document]/page.tsx` и `generateMetadata` вызывают production-валидацию (`loadLegalDocument` с реальным `isProduction`); draft preview остаётся отдельным opt-in режимом. `tests/legal-routes.test.ts` покрывает production-отказ и preview-исключение. |
| R7 interpolation | Исправлено | `lib/legal/interpolate.ts` заменяет markdown-активные символы на безопасные full-width варианты вместо HTML entities; финальное экранирование — слой React. DOM-тест подтверждает `O'Connor & Partners` без видимых entities. |
| R2 revision binding | Исправлено | `GET info` отдаёт серверный `legal.revisionId` из точного snapshot проекции; `POST book()` требует `legalRevision`, пересчитывает текущую редакцию и отклоняет stale/unknown до любых записей. Evidence хранит `legalRevision` + `disclosureSnapshot` (миграция `20260923140000_public_booking_legal_revision`). |
| R3 readiness gate | Исправлено | Гейт до записей: Perelai booking/copy versions обязательны; business agreement требуется только когда оба документа реально опубликованы (согласовано с копией «booking AND cancellation terms»); missing → прозрачный warning, не выдуманное согласие. Тесты: отклонения не создают booking/client/token/evidence. |
| R4 provisioning | Исправлено | `bindCompanyScope` проверяет весь набор evidence (Terms rep-basis, DPA rep-basis, Privacy personal); `recordWorkspaceProvisioningAcceptance` записывает только недостающие документы в той же транзакции, scope-линк идемпотентен (unique key + findFirst). Покрыты: новый owner, legacy user без records, staff→owner (personal Terms не считается business-rep), дубликат submission → Conflict. |
| R5 invite links | Исправлено | `cleanLinks`-режим в `OwnerLegalAcceptanceField` и `AuthLegalLinks`: чистый URL без `from`/registration в новой вкладке `noopener noreferrer`; `SignupScreen.cleanLegalLinks` включается `isInviteFlow` (staff + coworker) из `RegisterPage`. Invite-токен/returnTo на landing не передаются — исходная вкладка держит контекст. |
| R6 disclosures | Исправлено | `PublicBookingLegalSection` рендерит traderAddress, contactEmail, privacyContactEmail (structured `<dl>`), refundPolicy text + url, cancellation text + url, business privacy/terms links. Незаполненные поля не выдумываются; privacy acknowledgement без business notice сводится к Perelai-only формулировке. |

### Проверки второго прохода

| Проверка | Результат |
|---|---|
| Landing legal tests | 7 files, 66/66 passed |
| API unit: legal + public-booking + companies | 318/319 (1 fail — `locale-persistence`, pre-existing billing-mock, воспроизводится на HEAD) |
| Web: 16 suites (pages + components + services) | 88/88, два подряд чистых параллельных прогона |
| API `tsc --noEmit` | чисто |
| Web `tsc --noEmit` | только pre-existing ошибки вне legal (ClientsPage/FinancePage/ServicesEditorPage/TransactionDetailsPage/inboxMutationCommitted) |
| Prisma | миграции применены на dev+test БД, Client и zod-схемы регенерированы |

### Исправление тестовой инфраструктуры (web jest)

Параллельный запуск page-спеков давал недетерминированные падения: `fireEvent`
попадал в DOM-узел, заменённый в полёте рендером, и дефолтный `waitFor` (1 с)
истекал под нагрузкой. Исправлено:

- `src/test/polyfills.ts`: `configure({asyncUtilTimeout: 5000})` через
  `@testing-library/dom` — НЕ `@testing-library/react` (импорт RTL в
  `setupFiles` до установки jest-глобалов отключает auto-cleanup и утечка DOM
  давала «multiple elements» между тестами одного файла).
- `jest.config.ts`: `testTimeout: 15000` для тяжёлых page-спеков.
- `ob9`/`rental`/`quantity`/`proposal` спеки: ожидание применённого состояния
  (`checked`, `booking-quantity-*`, live re-query input) между зависимыми
  событиями вместо последовательных `fireEvent` без подтверждения.

### Оставшиеся production-блокеры (не код)

- Counsel-утверждённые финальные документы с реальными реквизитами и
  version/date/hash в approval manifest (все семь `en`-документов — drafts).
- `LEGAL_BOOKING_TERMS_VERSION` / `LEGAL_BOOKING_ACCEPTANCE_COPY_VERSION` —
  `[TBD]`; до их заполнения public booking contractual intake остаётся
  заблокированным серверным readiness-гейтом (fail-closed, не записывает).
- Реальная business/legal identity + контакты для `NEXT_PUBLIC_LEGAL_*` env.
- Переводы legal-копии на не-EN локали — решение counsel (EN — canonical,
  `fallbackLng` покрывает).
- Provider/domain verification (Paddle, Google) — зависит от опубликованных
  финальных документов.
- Фактическая проверка deployment для Task F (analytics отключён в коде;
  production-аудит браузером не проводился).

## 6. Разрешение R1–R4 — 2026-09-23 (третий проход, P1-re-review)

Повторный review нашёл четыре P1 в исправлениях второго прохода. Исправлено
в коде; это по-прежнему не юридическое утверждение и не deployment-подтверждение.

| Находка | Статус | Что сделано |
|---|---|---|
| R1 draft на canonical URL | Исправлено | `isLegalProductionGateEnabled` больше не читает `LEGAL_DRAFT_PREVIEW` — canonical `/legal/*` и его `generateMetadata` всегда fail-closed в production. Preview перенесён в изолированный маршрут `/[locale]/legal-preview/[document]`: `noindex`/`nofollow`, self-canonical (не указывает на `/legal/*`), отсутствует в sitemap, fail-closed в обе стороны (нет build-флага → нет статических страниц; нет runtime-флага → `notFound()`). `.env.example` описывает флаг как preview-only. Тесты: canonical отклоняет draft и без флага, и с `LEGAL_DRAFT_PREVIEW=true`; preview рендерится только через свой маршрут. |
| R2 revision ≠ внешний контент | Исправлено (ограниченная семантика) | Принято решение №3 из разрешённых: evidence честно фиксирует «показан этот URL», а не «точный текст по URL». `disclosureSnapshot` получил структуру `documents.*`: `capturedText` (inline-текст, захвачен побайтово) vs `externalUrl` + `contentCaptured: false` (контент за URL не захватывается). Комментарии в `public-booking-legal.ts` и `schema.prisma` прямо заявляют: подмена документа по тому же URL без смены настроек даёт тот же revision — это вне гарантии evidence. Тест фиксирует: same-URL → same revision, смена URL → новый revision. Серверный fetch внешних документов или immutable business-supplied hash остаются опциональным усилением — до выбора формулировка «точный текст» из evidence исключена. |
| R3 недостоверное evidence при отсутствующих политиках | Исправлено | При отсутствии booking/cancellation документов вместо `BOOKING_AGREEMENT` пишется `PERELAI_TERMS_ACCEPTANCE` (новое значение enum, миграция `20260923150000_public_booking_evidence_kind_perelai_terms`); snapshot фиксирует `businessAgreement: NOT_PRESENTED` и список `missing`. `BOOKING_AGREEMENT` пишется только когда оба документа реально показаны (`businessAgreement: COLLECTED`). Privacy-сторона: `privacyContactEmail` больше не считается notice — `missing` включает `privacyNotice` без реального `privacyNoticeUrl`, а UI fallback'ит к Perelai-only acknowledgement. **Выбор «warning vs блокировка» (08 §8, `[TBD]`) не утверждён кодом**: по умолчанию intake при неполных business-документах отклоняет submission (`BLOCKED`, `BOOKING_LEGAL_UNAVAILABLE`, без записей); warning-path включается только явным `LEGAL_BOOKING_MISSING_POLICY_WARNING_ENABLED=true` — это release gate до решения counsel. Состояние `businessAgreement: REQUIRED|WARNING|BLOCKED` отдаётся в проекции, входит в revision и управляет UI (blocked-нотис вместо warning-копии). |
| R4 старые версии при provisioning | Исправлено | `bindCompanyScope` теперь выбирает `documentVersion` и требует совпадения с текущими `termsVersion`/`dpaVersion`/`privacyVersion` конфигурации. Superseded-версии трактуются как missing: без свежей submission provisioning отклоняется (Forbidden), со свежей — все три документа записываются в той же транзакции на текущих версиях, scope привязывается к новому DPA. Тест `treats evidence at a superseded document version as missing` покрывает оба пути. Это точечная проверка текущих версий, не material-change flow. |

### Проверки третьего прохода

| Проверка | Результат |
|---|---|
| Landing `tests/legal-routes.test.ts` + interpolate | 27/27 |
| API `legal-acceptance.service.spec.ts` | 15/15 (вкл. stale-version provisioning) |
| API `public-booking-legal.spec.ts` + `public-booking.service.spec.ts` | 144/144 |
| Web `PublicBookingLegalSection.spec.tsx` | 20/20 (вкл. contact-only privacy) |
| API `tsc --noEmit` | чисто |
| Web `tsc --noEmit` | без новых ошибок в legal/public-booking |
| Prisma | миграция `20260923150000` применена на dev+test БД, Client регенерирован |

### Известные границы после третьего прохода

- **R2 остаётся URL-only evidence**: замена внешнего документа по тому же URL без
  смены настроек не детектируется. Evidence честно не заявляет захват внешнего
  текста; если требуется детекция — нужен отдельный механизм (server-fetch
  snapshot с контролируемой fetch-политикой или immutable business-supplied
  revision/hash). Решение — за counsel/планом, реализация не выбрана.
- **Warning-path (R3)** — НЕ активен по умолчанию: public intake при
  неполных business-документах отклоняет submissions до явного
  `LEGAL_BOOKING_MISSING_POLICY_WARNING_ENABLED=true`. Установка флага —
  release gate, требующий решения counsel по 08 §8. Public intake не считать
  готовым к включению до этого решения (в дополнение к `[TBD]` версиям).

### Четвёртый проход (тот же день) — уточнения evidence

- Версии/хеши business policies теперь `null`, когда документ не представлен:
  `businessPolicyVersion`/`businessPolicyHash` записываются только при наличии
  booking terms URL, `businessCancellationVersion`/`businessCancellationHash` —
  только при наличии cancellation text/URL. Warning-path тест фиксирует null.
- `disclosureSnapshot.documents.*` разделяет сигналы: `inlineTextCaptured`
  (inline-текст захвачен побайтово) и `externalContentCaptured: false`
  (внешний документ за URL не захвачен — даже при наличии inline-текста).
- `LEGAL_BOOKING_MISSING_POLICY_WARNING_ENABLED` задокументирован в
  `.env.example` как release gate; canonical `/legal-preview/*` — только на
  контролируемом preview-развёртывании (noindex не ограничивает доступ,
  preview-enabled артефакт нельзя выкладывать на публичный production origin).
- Business Privacy Notice (08 §5.1): при полном наборе terms/cancellation, но
  без `privacyNoticeUrl`, intake раньше оставался доступен. Добавлено
  `businessPrivacyNotice: 'PRESENTED' | 'BLOCKED'` в проекцию и revision
  basis; `book()` отклоняет `BOOKING_LEGAL_UNAVAILABLE` при `BLOCKED`
  **безусловно** — warning-флаг касается только agreement-блока, так как
  approved short-notice fallback требует counsel-текста и полей настроек,
  которых пока нет. UI показывает unavailability-нотис; `canBook` = false.
  Тесты: projection (флаг не разблокирует privacy), service (отказ без
  записей), web (blocked-нотис + contact-only acknowledgement).
