# POS2 — P0/P1 review и prompt исправлений

**2026-09-21 · review текущего worktree, не реализация фиксов.**

Под P0/P1 здесь понимаются **приоритеты дефектов**, не повторное выполнение фаз POS0/POS1. Landing HEAD: `9bb41fa` (POS1); POS2 — незакоммиченные изменения. App HEAD: `3986975504543976f730776da50e90ce986c1969`; app dirty, в том числе Billing UI и EN common.json. Ничего из этих изменений не исправлялось, не stash/revert/commit.

**Вердикт:** P0 не найдено. POS2 нельзя считать полностью принятым: новые mock-фрагменты обходят обязательный product-source контракт, generated-артефакты несогласованы, текущий test gate красный. Подготовку POS3 продолжать можно. Публикация требует закрыть locale gaps и применимые release gates; это не повод заново реализовывать кассу или переделывать старые previews.

## 1. P1 — что исправить

### R1 · P1 · Новые app previews не воспроизводят подтверждённый UI и обходят переводимые product labels

**Места:** [MockCashDrawerSummary.tsx:22](../../../components/mock/MockCashDrawerSummary.tsx#L22), [MockWorkspaceAccessSummary.tsx:25](../../../components/mock/MockWorkspaceAccessSummary.tsx#L25), [MockPackageCheckout.tsx:39](../../../components/mock/MockPackageCheckout.tsx#L39).

- Drawer выводит собственные английские `Opening / Cash received / Expected / Counted / Difference` во всех локалях. Реальный `CashDrawerSummary` и `CloseCashDrawerSheet` — разные состояния: первый содержит ожидаемую наличность и движения, второй — пересчёт и результат. POS2 склеивает их в одну выдуманную таблицу.
- Access выводит `Role / Administrator / Service professional / No` из JSX/fixture. В app есть `WorkspaceAccessFormFields` с ролью и отдельным `service_mode_none` («не оказывает услуги»), а не такой бинарной карточкой.
- Package — три кружка, `2/3` без видимой единицы и `≈ $0` без подписи, что именно равно нулю. Ноль нового платежа ≠ бесплатный пакет/услуга; «пример данных» не устраняет двусмысленность. Источник `PackageCreditBadge`/checkout не воспроизведён.
- В `scripts/generate-niche-catalog.mjs`/`verify-niches.mjs` не добавлены POS2 keys/declared-key guards. В app-ui export нет `cash_drawer.*`, `staff_management.role_administrator_title`, `memberships.package_credit_*`. Формальная проверка старого kit эти новые компоненты не защищает.
- Сопутствующий небольшой дефект: Drawer рендерит буквальный текст **\u2212$5**, а не минус: двойное экранирование на строке 60. Это подтверждается старым локальным HTML; отдельно это P2, но исправляется вместе с R1.

**Почему P1:** это основной новый product proof, неверно представленный и нелокализованный даже на RU/UK, а не косметический недостаток одной подписи. Нарушены прямые ограничения POS2 §3 A–C.

**Минимальный фикс:** менять только три новых фрагмента. Перенести небольшой, узнаваемый кусок настоящего app UI; Drawer — два явно разделённых состояния (OPEN summary / close preview), при переключателе только ручное управление, без autoplay. Экспортировать лишь реально используемые ключи на всех девяти локалях из одной clean app revision, сохранять namespace/interpolation. Для Package видимо назвать единицы/остаток и «новая оплата: 0», если эта величина вообще показана; не изображать приблизительную цену. Для Drawer использовать явную demo currency (например USD) и locale-aware форматирование; summary включает валюту и смысл расхождения. Essential scope/planNote не должен исчезать для screen reader внутри `aria-hidden` без эквивалента в summary/обычном тексте.

**Приёмка:** render-test каждого нового фрагмента на девяти языках; literal-English/escaped-minus guards; missing-key negative test; повторный render детерминирован; исходный app screen и mapping ключей указаны в коротком журнале. Старые Hero/Devices/Finance/Collaboration previews не перестраивать.

### R2 · P1 · Generated catalog не имеет единой воспроизводимой ревизии

**Место:** [niche-catalog.generated.json:2](../../../data/niche-catalog.generated.json#L2), [app-ui-strings.generated.json:2](../../../data/app-ui-strings.generated.json#L2).

В текущем diff изменён только `catalog.sourceCommit`: `e566f2c… → 6ba2312…`, но:

- `app-ui-strings.sourceCommit` остался `e566f2c…`;
- оба `generatedAt` остались `2026-08-03T16:31:35+02:00`;
- реальный timestamp `6ba2312…` — `2026-09-19T14:15:28+02:00`; generator обязан получать именно timestamp выбранного commit;
- текущий verifier падает: `committed catalog sourceCommit 6ba2312 differs from app HEAD 3986975`.

Продвижение sibling HEAD само по себе — нормальная внешняя зависимость, не дефект POS2. Но изменение только provenance-поля без согласованного повторного экспорта — отдельная проблема текущего diff. Отчёт «build green» не доказывает готовность этого среза.

**Минимальный фикс:** выбрать подтверждённую clean revision с нужными labels и прогнать существующий generator для **обоих** артефактов. При dirty app использовать отдельный clean checkout выбранного commit через `PERELAI_APP_REPO`; тот же путь применять для generator, verifier и тестов. Не трогать app worktree, не менять только SHA/дату вручную, не использовать `ALLOW_DIRTY_SOURCE`, не указывать несуществующий app path ради пропуска проверки. Повторная генерация на том же source не меняет diff. Добавить короткий guard равенства provenance обоих артефактов; не строить export v2.

### R3 · P1 для публикации · Шесть опубликованных языков получают смешанную страницу

**Места:** [connected-records.tsx:85](../../../components/homepage/connected-records.tsx#L85), [homepage.tsx:29](../../../components/homepage/homepage.tsx#L29), [i18n/messages.ts:96](../../../i18n/messages.ts#L96), [collaboration-feature.test.ts:113](../../../tests/collaboration-feature.test.ts#L113).

У `pl/es/fr/de/pt/tr` отсутствуют **13 новых ключей**: `hero.trialMicro`, четыре `packages.*`, четыре `drawer.*`, четыре `collaboration.access*/planNote`. Новые компоненты подключены безусловно; существующий merge подставляет EN. Получается старый finance-first hero с английскими trial/package/drawer/access сообщениями. В локальном `.next/server/app/pl.html` это уже видно.

All-locale Collaboration test заменил чтение сырого locale JSON на merged `messagesByLocale`: отсутствие переводов стало невидимым для проверки. Этот тест проверяет успешный render с fallback, но не полноту локали.

**Фазовая граница:** перенос остальных языков был запланирован на POS3. Поэтому это **не требование притвориться, что POS2 уже должен был завершить весь POS3**. Это запрет публиковать текущий глобально подключённый вариант до локализации. Можно продолжать POS3 сразу по vocabulary; не закрывать production gate по факту успешной SSG-сборки.

**Минимальный фикс:** в POS3 применить [vocabulary](04_home_copy_vocabulary_ru_en_20260921.md) к конечному набору изменённых ключей всех published locales. Проверять raw JSON до merge, включая aria и active machine-readable consumers. Не добавлять ещё один fallback, не выключать локали/ниши и не вводить feature-flag платформу. Если rollout должен состояться раньше переводов — требуется отдельное решение владельца о scope; текущий review его не даёт.

## 2. Остальные конкретные поправки — не повышать до P1 ради количества

| Наблюдение | Что сделать |
|---|---|
| RU `hero.title/accent` без точек, два pinpoint-теста падают | По умолчанию вернуть две точки из owner freeze. Если это отдельная намеренная правка владельца, обновить freeze и тесты согласованно; не менять значение утверждённых фраз ради зелёного теста |
| EN-тест требует beauty и называет EN «approved», хотя это draft; `lib/site.ts` тоже beauty, EN metadata уже service professionals | Сохранить новое общее направление владельца. Синхронизировать source/docs/test и site description; не возвращать beauty в copy ради старого assertion. Дословно фиксировать только утверждённый RU; EN можно проверять семантически до freeze |
| FAQ UI выводит 6 вопросов, Home JSON-LD всё ещё 8; `question_id=home_faq_N` поменял смысл q2–q5 | Один короткий список FAQ definitions для UI/schema; IDs по смыслу, не позиции. Старые аналитические ID не переиспользовать для другого вопроса. Это узкая правка затронутой поверхности, не SEO-проект |
| RU удалил `money/inbox/booking`, но `app/[locale]/page.tsx:54` ещё использует их `detail` через EN fallback | FeatureList собирать из действующих локализованных продуктовых описаний; не оживлять старую finance-only категорию. Включить keys в raw-locale check |
| Hero заменил verification helper на trial helper; тест закрепил отсутствие `hero.micro` | Сохранить trial helper и короткое ожидание письма, как требует спецификация. Device helper можно перенести/не повторять; не раздувать body. Исправить тест, не запрещать полезную микрокопию |
| Secondary CTA ведёт на `#features`, а план говорит `#how` | Не считать это P1: оба anchor существуют, `#features` теперь показывает product flow. В fix-pass согласовать с планом (по умолчанию `#how`) и проверить реальную ссылку, не только существование id |
| RU `not.item2Body` содержит старое «без … комиссий», в EN этого нет | Не копировать это в vocabulary/другие языки. Узкая замена на отсутствие посредника-маркетплейса; no-fee policy здесь не доказана |
| `package.json` сменил build на `next build --webpack` | Это не найденный P1. Не откатывать вслепую; записать причину отдельного build-tool изменения, если оно действительно необходимо |

Нейтральная аудитория **не означает** «для любой профессии / любых процессов». Достаточная рамка: самостоятельные специалисты и небольшие команды, работающие по записи. Массажисты, преподаватели и beauty-специалисты — примеры; clinical records, LMS, групповые занятия, payroll, эквайринг не обещаются. Существующий colorist dataset в preview можно сохранить как пример; не затевать смену mock kit.

## 3. Что уже хорошо и сохраняется

- Правильный порядок Operations → Records/Package → Drawer → Collaboration → Finance; единственный `#features`.
- Calendar-first выполнен через порядок существующих экранов; controls/reduced-motion не переписаны.
- NicheMenu убран из header без отключения маршрутов.
- POS1 finance tests проходят: package redemption не добавляет новую выручку, текущий dataset 535 / 240 / 295 сохранён.
- Tokens и общий стиль существующего kit сохранены. Новые фрагменты небольшие; исправление не требует redesign.
- Четыре остальных RU hero-строки совпадают с freeze.

## 4. Проверки этого review

| Проверка | Фактический результат |
|---|---|
| `pnpm typecheck` | PASS |
| `pnpm lint` | PASS |
| `git diff --check` | PASS |
| Полный test suite под Node 22.19.0 с разрешёнными local IPC | **313 passed / 4 failed / 317**; 20/23 files passed |
| Падения тестов | RU title, RU accent; EN beauty exact assertion; verify:niches freshness |
| Прямой verifier (`node --import tsx scripts/verify-niches.mjs`) | FAIL: catalog SHA не равен текущему app HEAD |
| Build | Новый полный build не запускался после известного prebuild-failure; старый HTML от 20.09 прочитан только как дополнительное свидетельство |
| Browser/visual/production | Не запускались. HTML/source не выдаются за real-browser/mobile acceptance |

Первый запуск через shell Node 20.18.0 дал `ERR_REQUIRE_ESM`; sandbox также блокировал tsx IPC. Эти ошибки окружения отделены от продуктовых дефектов: повторный suite на Node 22 вне IPC-ограничения дал именно четыре падения выше. Старое утверждение walkthrough «317/317» могло относиться к срезу до ручных изменений и продвижения app HEAD; на текущий worktree оно не переносится.

**Drawer release:** свежий `drawer/inventory/dr7-acceptance.md` теперь говорит в заголовке READY TO GO, но ниже всё ещё содержит browser/pilot PENDING и delivery row «executed; incomplete». Не повторять старое NO-GO как актуальный установленный факт, но и не объявлять все проверки выполненными по одному заголовку. В POS4 сверить актуальный release handoff. Это отдельная сверка доступности, не основание выкинуть реализованный Drawer из POS2.

## 5. Prompt: узкие критические исправления POS2

Скопировать агенту целиком:

```text
Выполни corrective pass POS2 в /Users/valery/Sites/perelai-landing.
Прочитай:

- .cursor/plans/positioning/03_pos2_p0_p1_review_and_fix_prompt_20260921.md
- .cursor/plans/positioning/04_home_copy_vocabulary_ru_en_20260921.md
- positioning/01 и 02, docs/launch-positioning-checklist.md.
Skills: product-marketing (для рамки), copy-editing (для точечных строк);
при создании новых локализованных формулировок — copywriting.
Прочитай их SKILL.md и обязательные references перед действиями.

Scope — R1/R2, текущие падающие copy contracts и минимальные связанные правки §2
review. Не объявляй POS3/POS4 выполненными. Остальные шесть языков — отдельный prompt
из vocabulary; до его выполнения этот Home не ready for publication.

1. Сними HEAD/status обоих репозиториев. Сохрани все существующие правки.
   App только источник: не commit/stash/revert и не меняй app labels/flags.
   Никаких deploy, checkout/payment SDK, redesign, новых пакетов или A/B системы.
2. Новая рамка владельца: самостоятельные специалисты и небольшие команды по записи,
   не beauty-only и не «все профессии». Сохрани текущую общую EN-правку.
   Применяй vocabulary, не восстанавливай beauty из устаревшего теста/плана.
   RU hero перенеси из owner freeze с точками; остальные 4 строки не меняй.
   Не называй EN draft owner-approved. Синхронизируй соответствующие test/doc рамки:
   product-marketing bump + changelog (старые записи не менять), rails и короткие
   notes в активном positioning-пакете. Существующие demo names/services не обобщай
   механически: colorist preview — допустимый пример, не категория продукта.
3. Исправь только новые MockPackageCheckout/MockWorkspaceAccessSummary/
   MockCashDrawerSummary и их непосредственные consumers:
   - маленький реальный app-derived fragment, не выдуманные поля/таблица;
   - app UI labels из generated source по locale, не marketing JSON/JSX/fixture;
   - package unit/remaining видимы; 0 — новый платёж, не цена;
   - Drawer OPEN и close-preview отделены; сохранён порядок open → cash → count;
   - currency code + locale format; без literal backslash-u и approximate zero;
   - accessible summary передаёт существенный смысл, plan/scope и валюту.
   Старые previews не переписывать.
4. Экспорт: clean app checkout с нужными source labels через PERELAI_APP_REPO
   или дождись clean app commit. Укажи выбранную ревизию.
   Расширь существующий FIXED_UI_KEYS/common allowlist только нужными keys,
   проверь реальный namespace caller; i18next {{...}} не подставляй next-intl blindly.
   Запусти generator для ОБОИХ generated artifacts. Не редактируй SHA/дату вручную,
   не ALLOW_DIRTY_SOURCE и не nonexistent app path для пропуска verifier.
   Используй тот же PERELAI_APP_REPO для verifier/test/build.
   Проверь равенство sourceCommit/generatedAt и повторную генерацию без изменений.
   Добавь declared-key guards/negative tests новых mock-компонентов.
5. Минимальный coherence-pass затронутых поверхностей:
   - FAQ UI/schema один список из шести; устойчивые семантические analytics IDs;
   - SoftwareApplication featureList из действующих локализованных keys;
   - hero trialMicro + краткое ожидание verification email, body не расширять;
   - siteConfig больше не beauty-only; RU no-commission claim не переносить;
   - secondary anchor согласовать с планом, тестировать фактический href.
   Остальной Pricing/catalog/offer — POS3/BILL7, не выдумывай их.
6. Tests: новые fragments server-render в девяти локалях, generated-key source,
   arithmetic/units/currency/minus, детерминизм, raw locale coverage независимо от
   английского merge. Существующие проверки истины и RU freeze не ослаблять.
   Полная raw coverage Home до перевода честно pending POS3; не скрывай её fallback.
7. Run: typecheck, lint, targeted tests, full test, verify:niches, build,
   git diff --check. Совместимый Node и причины environment failure указывать.
   Browser smoke RU/EN (и UK при готовности) 320/390/768/1366, light/dark;
   сравнить старые previews до/после. Без браузера не писать visual PASS.
8. Один короткий результат в docs/launch-positioning-checklist.md:
   R1/R2 fixed evidence; R3 pending POS3 или ссылки на отдельный выполненный pass;
   актуальные SHA/commands/results; untouched release gates.
   Не переписывай прошлый отчёт как будто он проверял нынешний срез.
```

**Для перехода дальше:** R1/R2 и красные copy tests должны быть устранены перед финальной приёмкой POS2; POS3-переводы можно готовить параллельно. R3 и commercial/machine consistency закрываются до публикации, не новой маркетинговой комиссией.

## 6. Маркетинговая проверка

Использованы `product-marketing` (разделить общую аудиторию и claims) и `copy-editing` (семь sweeps: ясность → голос → польза → доказательства → конкретика → эмоциональный тон → следующий шаг). Результат — нейтральное обозначение специалистов, точное payment/package/subscription различие и короткий hero без дополнительных обещаний.

Короткая **внутренняя редакторская симуляция**, не исследование/независимые эксперты: copywriter 8/10 за сохранение пары выгод; UX writer 7/10 — нужны локализованные подписи и честный zero-payment пример; независимый преподаватель как моделируемая перспектива 8/10 — «специалист/команда» вместо beauty/master; brand editor 9/10 — категория и demo отделены. Среднее 8/10 относится к предлагаемой vocabulary-рамке, **не к готовности реализации** и не снимает R1–R3.
