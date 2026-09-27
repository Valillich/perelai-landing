# Канада: CA/en и минимальный путь активации

**Дата:** 2026-09-26. **Статус:** ACTIVE_IN_CODE_NOT_DEPLOYED.
Owner прямо поручил: «разблокируй Канаду оставив QC/AB/BC закрытыми».
`business-booking-CA-en-v1` включён в reviewed registry и default CA; страна PUBLIC.
Сервер допускает только **MB, NB, NL, NS, NT, NU, ON, PE, SK, YT** при точном коде
провинции и актуальном подтверждении `OUTSIDE_QUEBEC` / `ca-operating-scope-v1`.
**QC/AB/BC остаются закрыты.** UA/US/AU и их тексты не меняются.
Выполнение ниже заменяет прежний статус PREPARED_NOT_ACTIVATED и записи «CA CLOSED».
Разделы прежних спринтов сохранены как история, а не текущая инструкция блокировать CA.

Следующий шаг — деплой со сверкой уже подготовленной миграции province/declaration и
smoke-проверкой разрешённого CA-ON/закрытого CA-QC. Реальная Company публикует условия
через обычный owner preview/confirmation; эта задача не публикует их за владельца.
Фактическая работа support@, privacy/incident-процедур и retention не проверена этим
изменением кода; действовать по [операторской процедуре](templates/business-notice/CA.en.standard.v1.operations.md).

## Пакет

- [Исходник](templates/business-notice/CA.en.standard.v1.draft.md).
- [JSON-кандидат](templates/business-notice/CA.en.standard.v1.prepared.json).
- [Синтетический preview](templates/business-notice/CA.en.standard.v1.preview.md).
- [Release record и источники](templates/business-notice/CA.en.standard.v1.release-record.md).
- [Короткая операторская процедура](templates/business-notice/CA.en.standard.v1.operations.md).

Версия `business-booking-CA-en-v1`, дата 2026-09-26, язык `en`. Работает для SOLO/STUDIO,
APPOINTMENT/REQUEST, обычных немедицинских услуг без оплаты через booking, штрафов,
рекламы и чувствительных данных. География кандидата — бизнес вне Québec; AB/BC имеют
дополнительные условия ниже. Не трактовать английский интерфейс как выбор юрисдикции.
Французский уже есть в localization.ts, но это не готовые CA/fr договоры или Québec release.

Общие ФОП/контакты/провайдеры и сроки повторно утверждать не требуется. `[TBD]` в
клиентском тексте нет; незавершённые технические проверки явно перечислены ниже.

## Историческое основание для province gate (теперь реализован)

До реализации промпта 28 `Company` хранила `country` и свободный `address`, без структурированной провинции.
`requirePublicMarket` проверяет страну; template lookup тоже выбирает только страну.
`requireSetupMarket` допускает прежнюю страну существующей Company. Никакой из этих
механизмов не обеспечивает заявленное «Канада вне Québec».

Для запуска в Québec требуется отдельная оценка применимых языковых правил и privacy:
например, Charter s.55 регулирует язык стандартных договоров с предусмотренными
исключениями; Québec privacy law требует оценку зарубежной обработки и письменные
условия в применимых случаях. Это не запрет любого английского общения и не утверждение,
что место регистрации украинского поставщика снимает все местные требования.
Источники: [Charter s.55](https://www.legisquebec.gouv.qc.ca/fr/version/lc/C-11?code=se%3A55&langCont=en),
[CAI: передачи и обработка вне Québec](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/utilisation-communication-renseignements-personnels).

## Исходное задание агенту (история подготовки; текущий cohort указан выше)

Работай самостоятельно, без subagents. Сохрани чужие изменения и действующие UA/US/AU
версии, хеши и настройки Company. Это следующий шаг, не выполненный в подготовке.

1. **Сделай один явный выбор провинции/территории для CA на setup.** Сохраняй нормализованный
   код и применяй серверную allowlist. Минимальная модель — nullable subdivision code для
   Company, обязательный при CA admission. Коды: AB, BC, MB, NB, NL, NS, NT, NU, ON, PE, QC,
   SK, YT. Не выводи их из IP, языка, часового пояса или свободного адреса. QC и отсутствующий/
   неизвестный код отклоняются. Другие рынки не должны получать лишнее обязательное поле.
   Перед подтверждением покажи: «Этот этап доступен бизнесам, работающим вне Québec.
   Если ваш бизнес работает в Québec или целенаправленно обслуживает этот рынок, обратитесь
   в поддержку». Сохрани подтверждённую область деятельности вместе с версией подтверждения;
   это фактическая декларация, а не отказ от закона. Если её нельзя подтвердить — review,
   не автоматическое разрешение через custom notice. Не собирай адреса всех посетителей
   и не вводи геоблокировку по их IP: случайный посетитель из Québec не равен работе салона
   в Québec. При фактах о другой области деятельности проведи отдельную оценку.
2. **Применяй eligibility ко всему workspace и booking.** Создание, повторный setup,
   смена/исправление географии, standard/custom draft preview и publication, публичный
   resolver и submit должны проверять единое правило. Существующая CA Company без
   проверенной провинции/области деятельности остаётся доступной для чтения/экспорта,
   но не получает новые записи лишь благодаря наличию country/setupAt или старого notice.
   Очереди не должны обходить ограничения; изменение географии инвалидирует готовность
   соответствующей legal-настройки до нового подтверждения. Не заменяй ранее принятые
   версии незаметно. Сам country-only helper не доказывает соблюдение этих условий.
3. **Подключи точный пакет.** Используй `.template` и `.currentReference` из JSON,
   проверь digest фактическим helper. Не добавляй весь wrapper в runtime и не считай
   поле `eligibility` исполняемой проверкой. Добавь CA default только совместно с
   enforcement из шагов 1–2. Сохрани CA/CAD/en-CA/pricingMarket CA; не подменяй на US.
   Смена языка не меняет закреплённый документ. Сверь доступный коммерческий каталог
   перед обещаниями о цене/валюте подписки: CAD в Company сам по себе не цена SaaS.
4. **Открой только готовые провинции.** Общий кандидат охватывает 12 провинций/территорий
   вне QC; это не разрешение открыть все сразу. Самый короткий первый этап: MB, NB, NL,
   NS, NT, NU, ON, PE, SK, YT после общих проверок. AB добавляется после подтверждения
   зарубежного provider inventory; BC — после preservation из шага 5. Держи исключения
   в одной небольшой серверной allowlist, без новой системы ролей/тарифов. Country CA
   переводится PUBLIC только если ограничения провинций работают на всех нужных путях.
   Если такой контроль ещё не готов, CA остаётся CLOSED. INVITE_ONLY в нынешнем enum
   не является реализованным обходом: `requirePublicMarket` его не пропускает.
5. **Защити узко необходимые записи до удаления.** В BC PIPA s.35(1) может требовать
   год хранения данных, использованных для решения, прямо затрагивающего клиента.
   В booking проверь реальные отказ/автопринятие/отмену и использованные данные; нельзя
   просто объявить все решения календаря исключёнными. Сохраняй минимальные входные
   данные, результат, дату и основание до конца применимого срока, затем удаляй.
   Это не все CRM-строки и не автоматические 1095 дней. Учти незавершённые access requests
   для всех CA профилей. Проверь `clean-old-data.ts`, ручное удаление клиента/заявки,
   Company purge и restore replay: ни один путь не должен уничтожать защищённые записи.
   Нынешний legal hold в deletion CLI относится к retained records и сам по себе не
   доказывает сохранение нужной заявки. Допустим простой операторский register +
   исполнимая проверка purge, без cron/портала обращений; инструкция без технической
   защиты или проверяемого отдельного хранения не считается выполнением. Общие 90 дней,
   24 месяца и 30/30 сохраняются для остальных данных. Пока BC-контроль не готов,
   оставь BC закрытой, не задерживая готовый первый набор провинций.
6. **Зафиксируй границу email — решение owner 2026-09-26.** Launch v1 отправляет
   только уведомления, необходимые для конкретной записи; коммерческие, promotional
   и lifecycle-рассылки не включены. Это не требует нового CEM consent/unsubscribe-
   функционала, marketing-галочки или email-портала: таких сообщений система не
   отправляет. Но название «транзакционное» не устанавливает правовое исключение
   автоматически; применимые правила всё равно регулируют содержание и условия
   отправки. Не добавляй промо в служебные письма. Любое новое сообщение за пределами
   booking notifications требует новой классификации до включения; privacy requests
   остаются отдельным процессом.

   Техническая проверка 2026-09-26: `CLIENT_EMAIL_EVENT_TYPES` в
   `builtin-client-email-builder.ts` содержит ровно 18 внешних событий —
   подтверждение email, созданную/подтверждённую/отклонённую запись, предложение
   времени, перенос, отмены, reminder, receipt, отмену package, три статуса request,
   три статуса reservation и созданный order. `VisitReminderInternal` отсутствует в
   этом allowlist и имеет только внутреннюю копию. В built-in template sources не
   найдено marketing/promotion/newsletter/campaign content. Это доказательство
   имеющегося набора триггеров, не самостоятельная квалификация по CASL; company
   `NotificationTemplate` overrides остаются под запретом Terms §12 на promotional
   content.
7. **Заполни операционную запись, а не новый юридический квест.** Используй
   [готовую процедуру](templates/business-notice/CA.en.standard.v1.operations.md).
   Ответственным за Perelai может быть владелец с support@; для SOLO — владелец,
   STUDIO — назначенный человек и имеющийся mailbox. Нужны фактический мониторинг почты,
   сроки, журнал инцидентов и предоставляемые письменные правила зарубежных провайдеров.
   Для AB country inventory должен включать применимые страны фактического remote access
   и провайдеров; «global» не полная замена сведений, требуемых PIPA. Не выдумывай страны.
   Не дублируй уже подтверждённые Hetzner/Resend/FOP факты и не требуй отдельный legal@.
8. **Проверь и зафиксируй.** Тесты admission: каждая разрешённая провинция, QC, null,
   неизвестный код, AB/BC до готовности; обход через existing setup, смену страны,
   custom notice, старую опубликованную страницу, resolver/submit. Проверки template:
   source → JSON → runtime/digest, pinned/default, оба режима, reminder и privacy-email
   fallback; UA/US/AU неизменны. Для retention — граничные даты и невозможность purge
   защищённого record; для email — подтверждение, что коммерческие/lifecycle-шаблоны
   не включены и служебные письма не содержат промо. Запусти
   целевые API/core/web проверки и соответствующий typecheck. Используй синтетические
   fixtures; не удаляй обычные Company и не рассылай реальные письма в ходе тестов.
   Запиши фактический список открытых провинций в release record. Деплой и публикацию
   настроек настоящего салона отчитай отдельно от ACTIVE_IN_CODE_NOT_DEPLOYED.

Не добавляй обязательный Refund Policy салона для страницы без платежей. Платные
SaaS-условия, обязательные местные consumer remedies и налоговые обязанности продавца
проверяются перед соответствующим платным запуском, а не считаются закрытыми этим notice.

## Юридические основания конкретных изменений

- PIPEDA не даёт общей льготы малому бизнесу; AB/BC имеют собственные законы, а
  международная обработка требует отдельного учёта PIPEDA. [Обзор OPC](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/02_05_d_15/).
- Для понятных немедицинских booking-целей возможен контекстный implied consent;
  unrelated/sensitive uses нельзя прикрыть принятием notice. [Совместное guidance OPC/AB/BC](https://www.priv.gc.ca/en/privacy-topics/privacy-for-businesses/appropriate-handling-of-personal-information/collecting-personal-information-and-consent/consent/gl_omc_201805/).
- Зарубежный hosting допустим при применимых safeguards/accountability; это не
  требование перенести всё в Канаду. [OPC cross-border guidance](https://www.priv.gc.ca/en/privacy-topics/airports-and-borders/gl_dab_090127/).
- [AB: зарубежные провайдеры и уведомления](https://www.alberta.ca/organization-responsibilities-for-protecting-personal-information).
- [BC PIPA s.35(1): минимальное хранение decision information](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/03063_01#section35).
- [CRTC: CASL и различия исключений](https://www.crtc.gc.ca/eng/com500/info.htm).

Это подготовка конкретного launch-профиля по доступным фактам. Она не доказывает
production operation, исполнение договоров провайдеров или пригодность для медицинских услуг.

## Фактические результаты (субдивизии, спринт 2026-09-26, plan 28)

Реализовано в `/Users/valery/Sites/beauty-finance` (branch `bill`, незакоммиченное дерево):

- `libs/core/src/companies/subdivisions.ts` — реестр ISO 3166-2: 13 CA + 51 US
  (50 штатов + DC). Нормализация trim/uppercase, точное членство, соответствие
  стране. `CA_ADMISSION_OPEN_SUBDIVISIONS` — 10 первых провинций (QC deferred,
  AB pending provider inventory, BC pending PIPA s.35(1) retention). Коды
  констант: `CA_OPERATING_SCOPE_DECLARATION_KIND/VERSION`, ответ
  `OUTSIDE_QUEBEC`.
- `Company.subdivisionCode TEXT NULL` + таблица `CompanyAdmissionDeclaration`
  (append-only, onDelete: Restrict) — миграция
  `20260926120000_company_subdivision_geography`, применена к изолированной
  `beauty_finance_test`; 3838 существующих строк имеют NULL, backfill нет.
- Централизованный допуск: `apps/api/src/companies/market-access.ts` —
  `requirePublicMarket` / `resolveSubdivisionCode` / `assertSubdivisionAdmission`
  / `assertGeographyAdmission` / `resolveSetupSubdivision` /
  `assertCompanyGeographyAdmitted` / `assertPublicIntakeAdmission`.
  Применён в `companies.controller` (create, workspace), `companies.service`
  (create, createWorkspace, setup, update, updatePublicBookingConfig,
  publishBookingLegalSetup), `public-booking.service` (getInfo/getAvailability/
  book), `company-lifecycle.guard` (блок операционных записей для countryless
  provisional и для CA-географии; чтение/экспорт/legal сохранены через
  `AllowProvisionalWorkspaceWrite`).
- `requireSetupMarket` больше не является обходом: setup-мутация для старой CA
  Company блокируется `assertCompanyGeographyAdmitted` внутри транзакции после
  lock/identical-replay short-circuit.
- CA operating-scope declaration записывается в setup при допущенной CA-
  географии (недостижимо, пока CA CLOSED) и проверяется при публикации
  booking-legal: версия/ответ/geography привязка, иначе
  `BOOKING_LEGAL_REVISION_CHANGED`.
- Web: dropdown региона в `OnboardingBusinessStep`, `CreateCompanySheet`,
  `CompanyProfileEditPage`; сброс при смене страны; закрытые регионы
  disabled с пометкой; resume/draft wiring; локали en/ru/uk/de/es/fr/pl/pt/tr.

Не выполнено в этом спринте (как и требовалось):
- CA остаётся `accessStatus: 'CLOSED'` — страна не активирована, UI список
  onboarding показывает только PUBLIC рынки (AU/UA/US).
- BC retention-контроль не реализован; общий срок 90 дней не менялся.
- Provider inventory для AB и остальные release-gate проверки не проверялись этим
  спринтом. Новая CASL consent/unsubscribe-функциональность не является gate: система
  не поддерживает marketing/CEM-рассылки. Это не вывод об автоматическом правовом
  исключении для каждого service message.
- Фоновые задания (reminders/cleanup) не получили отдельный admission-gate —
  новые операционные HTTP-записи закрыты guard'ом и intake-проверками; purge/
  privacy workflow сохранены. Отдельный аудит jobs остаётся открытым пунктом.

Проверки (все прошли):
- `jest` core: `subdivisions.spec.ts` (11), `supported-markets.spec.ts` (1).
- `jest` api: `market-access.spec.ts`, `companies.controller.spec.ts`,
  `company-lifecycle.guard.spec.ts`, `companies.service.spec.ts`,
  `public-booking.service.spec.ts`, `public-booking-legal.spec.ts`,
  `resolve-company-by-booking-slug.spec.ts` — 321 тест.
- `jest --config jest-integration.config.ts`
  `companies.subdivision.integration.spec.ts` — 6 тестов на реальной
  `beauty_finance_test` (persist US-CA, mismatch 400, CA closed 403, bypass
  requireSetupMarket закрыт, чтение CA открыто, declaration insert/Restrict).
- `tsc -p apps/api/tsconfig.app.json --noEmit` — чисто; web typecheck имеет
  только прежние посторонние ошибки (ClientsPage, FinancePage,
  ServicesEditorPage, TransactionDetailsPage, inboxMutationCommitted).
- `prisma validate` + `migrate deploy` на изолированной БД — OK.

### Ревизия CA-gate readiness (после review, два P1 + два P2)

- Порядок `assertGeographyAdmission` исправлен: нормализация и валидация
  country/subdivision идут до market admission — `CA` без региона, с `US-CA`
  или неизвестным кодом получает 400 (`COMPANY_SUBDIVISION_REQUIRED` /
  `COUNTRY_MISMATCH` / `UNKNOWN`); закрытая география остаётся 403.
- Общий `PATCH /companies/:id` больше не меняет CA-регион:
  `COMPANY_SUBDIVISION_CHANGE_RESTRICTED` для любого отклонения от текущего
  значения (identical — no-op). Единственный авторизованный путь — setup():
  admission + in-request `operatingScopeConfirmation` + append-only
  `CompanyAdmissionDeclaration` в одной транзакции, при смене CA-географии
  `bookingLegalSetup`/`bookingLegalDraft`/`legalPoliciesUpdatedAt`
  инвалидируются.
- `LEGACY_CUSTOM` legal-path для CA больше не имеет grandfather: публичная
  проекция требует `identityConfirmed`, привязанный к текущему
  `subdivisionCode` и версии/ответу декларации — stale binding = BLOCKED.
- `CreateWorkspaceDto`/`CreateCompanyDto` и `CreateCompanySheet` провели
  `operatingScopeConfirmation` end-to-end; чекбокс больше не декоративный.
- `previewBookingLegalNotice` проходит тот же geography-гейт, что и
  публикация (400/403), и требует актуальную декларацию для CA — шаблон
  будущего CA не может утечь через preview.
- `CompanyProfileEditPage` для CA показывает регион read-only с hint про
  setup-flow.
- Data export: `subdivisionCode` и legal-поля Company добавлены в проекцию;
  `CompanyAdmissionDeclaration`, `LegalAcceptance(+Scope)`,
  `PublicBookingLegalEvidence` — INCLUDED в dataset `company` (path
  `companyScopes.companyId` расширен `some`-траверсом); `CompanyDeletionCase`/
  `CompanyDeletionRetainedRecord` — EXCLUDED_WITH_REASON (internal).

Проверки после ревизии:
- `jest` api (companies/guards/public-booking): 486 passed; 1 baseline-failure
  `locale-persistence` (идентично падает на HEAD — billingAccessPolicy не
  инъектирован в спеке).
- `jest` core: 814 passed; 1 baseline-failure `access-catalog` (файл каталога
  идентичен HEAD — расхождение счётчика 318/319 закоммичено ранее).
- `jest --config jest-integration.config.ts`: `companies.subdivision` 6/6,
  `booking-legal-publication` 4/4, `workspace-export-projections` 2/2.
  Остальные падения интеграционного сьюта — baseline окружения
  (BILLING_CONFIG/BILLING_ACCESS_POLICY провайдеры в чужих test modules,
  legal env-версии, FROZEN-guard vs users.self-profile — все подтверждены на HEAD).
- `tsc` api — чисто; web — только прежние посторонние ошибки.

### Follow-up: current declaration enforcement (2026-09-26)

- Проверка scope-декларации больше не ограничена preview/publish. Публичные
  `info`/availability/submit и authenticated operational writes выбирают
  последний `CompanyAdmissionDeclaration` для CA и сверяют его версию, ответ,
  country и subdivision с живой Company. Отсутствие или устаревание блокирует
  новый intake/work, но не read/export/legal пути. Выбор latest детерминирован
  по `createdAt DESC, id DESC`.
- `DELETION_RETAINED` Company исключены из recommendation facts: tombstone не
  получает новую операционную рекомендацию.
- Проверки: 269 целевых API unit, 1 recommendation-loader unit, 58 billing
  unit и 11 изолированных API integration-тестов прошли. Полный
  `pnpm nx run @beauty-finance/api:typecheck --skip-nx-cache` проходит.

CA остаётся `CLOSED`; этот follow-up не активирует registry, не меняет BC
retention и не закрывает provider-inventory release gates. Отсутствие CEM/
marketing-функциональности не разрешает добавлять коммерческие сообщения и не
означает автоматического исключения для подписанных service notifications.

## Проверка scoped activation — 2026-09-26

Добавлены проверки всех десяти регионов через реальные методы create/createWorkspace/setup,
preview → сохранение → публикация, public info/availability/submit, с синтетическими I/O
адаптерами. Country policy и template registry не подменяются. Подтверждены блокировки
QC/AB/BC, обязательная провинция, актуальная scope declaration и неизменность pinned UA/US/AU.
Результаты запусков см. CA release record / JSON; PostgreSQL integration требует отдельного
`TEST_DATABASE_URL`, в этой сессии он не настроен. Рабочая БД не использовалась как тестовая.

Проверки: **461/461 API, 28/28 web, 12/12 core**, API/core typecheck прошли.
Полный API-прогон не зелёный: 189 suites pass / 13 fail (2570 pass / 145 fail), причины
за пределами activation diff перечислены в release record. Полный web typecheck не запускался.
Перед деплоем сверить `20260926120000_company_subdivision_geography`; миграция не применялась.
