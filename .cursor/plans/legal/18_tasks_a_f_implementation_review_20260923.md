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
