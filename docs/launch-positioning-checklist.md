# POS0 — позиционирование и компактный launch-copy

**19.09.2026 · редакция 3 · RU hero OWNER APPROVED · документы, не реализация сайта.**

**Результат POS0:** новая рамка и компактный launch-copy подготовлены. **Владелец 19.09.2026 утвердил шесть RU-строк hero из §2** прямым ответом «принимаю твой итоговый вариант. обнови планы» с полным текстом. Это RU source freeze, не approval всех переводов, остальных блоков или runtime. Новый UK/EN H1/body адаптировать в POS2; остальные кандидаты ниже остаются на смысловой вычитке. Цены, 21-дневный STUDIO trial и лимиты уже приняты; повторное коммерческое решение не требуется. Публичная готовность продукта этим документом не подтверждается.

Срез: landing `4be46b0a2b5090877e51faf93c643aa26b1512f1`; app `6ba23125e08f05935f69d89c34a8d512fdefbf2f`, чистый при проверке POS0. Существующая untracked-папка `positioning` сохранена. В предыдущем планировании app был dirty на `d0bed763…`; это больше не текущий блокер генерации. Чистый HEAD, однако, не доказывает завершение M1/M2 или release gates.

## 1. Позиционирование и редакторское решение

**Perelai — запись, клиенты и учёт оплат для самостоятельных beauty-специалистов и небольших студий.**

Продаём понятный рабочий сценарий: назначить визит, сохранить контекст клиента, учесть оплату или использование пакета. Финансовый обзор помогает проверить результат, но не заставляет посетителя сначала разбираться в финансовой модели. Команда — возможность подключить помощь, а не обязательное условие использования.

Основание выбора: H1 передаёт результат — порядок в записях и ясность в оплатах; короткий body сразу раскрывает расписание, клиентскую историю и запись оплаты. Категорию и аудиторию уточняют eyebrow, metadata/footer и продуктовый пример ниже; условия trial видны рядом с действием. Это выбранная владельцем маркетинговая формулировка, **не доказанное превосходство над конкурентами, не результат клиентского исследования и не обещание измеренного роста конверсии**. Уникальность словом «наконец-то» не заявляем.

**Первый запуск — утверждённый вариант из §2.** Benefit-led H1 заменяет предметный список «Запись, клиенты / и учёт оплат.». Прежние кандидаты ниже сохраняются только как история редакторского выбора; не выносить их обратно на согласование и не внедрять как варианты.

| Исторический резерв — НЕ к внедрению | RU | UK | EN | Почему не первый запуск |
|---|---|---|---|---|
| B — сценарий | От записи клиента — до учёта оплаты. | Від запису клієнта — до обліку оплати. | From appointment to payment record. | Хорошо описывает цепочку, но хуже раскрывает клиентскую историю и работу с пакетами |
| C — ощущение порядка | Рабочий день вашей студии — под контролем. | Робочий день вашої студії — під контролем. | Keep your studio’s day in order. | Менее конкретно; слово «студия» может отдалить самостоятельного мастера |

Прежний резерв CTA «Начать пробный период» / «Почати пробний період» / “Start your trial” снят с выбора первого запуска. Принят «Попробовать 21 день». Один launch-вариант; без JSON-наборов, env-переключателей или A/B-инфраструктуры.

## 2. Hero и общий CTA — утверждённый RU

**OWNER APPROVED · Valery · 2026-09-19.** Scope — ровно шесть строк ниже, дословно из ответа владельца. POS2 переносит их без стилистической правки; source freeze не ждёт нового approval. Одна и та же строка основного CTA может использоваться в `closing.cta`, `nav.start` и `common.cta.signup`, но это не утверждение остального текста этих блоков.

| Ключ в `home.json` | Утверждённый RU · OWNER APPROVED |
|---|---|
| `hero.title` | Порядок в записях. |
| `hero.accent` | Ясность в оплатах. |
| `hero.body` | Планируйте визиты, ведите историю клиентов и отмечайте оплаты. |
| `hero.signup` | Попробовать 21 день |
| `hero.how` | Посмотреть, как это работает |
| `hero.trialMicro` — новый | 21 день STUDIO без карты. После пробного периода оформите подписку. |

`title` и `accent` — две законченные фразы **одного H1**; точки сохраняются. Доступный текст содержит разделение между ними. RU может визуально занимать две строки в существующем hero, без второго H1 и принудительно одинакового переноса на всех ширинах/языках. Body — ровно одно предложение: без дополнительной строки про команду, пакеты, доходы или «в одном месте». Маркетинговую выгоду несёт H1, действия и границы категории — body и следующий product proof.

**UK/EN H1 и body: ADAPTATION PENDING → POS2.** Прежние «Записи, клієнти / й облік оплат.» и “Appointments, clients / and payment tracking.” больше не активные кандидаты H1. Новая адаптация должна сохранить пару выгод и конкретные действия, а не буквальную русскую конструкцию ценой естественности. Начать её можно сейчас, без повторного согласования RU. Результат проходит одну смысловую вычитку POS3; не помечать его owner-approved/native-reviewed автоматически.

Кандидаты UK/EN для уже существующего CTA-смысла, **не exact-copy approval**:

| Ключ | UK — candidate | EN — candidate |
|---|---|---|
| `hero.signup` | Спробувати 21 день | Start 21-day trial |
| `hero.how` | Подивитися, як це працює | See how it works |
| `hero.trialMicro` | 21 день STUDIO без картки. Після пробного періоду оформіть підписку. | 21 days of STUDIO, no card required. Subscribe when your trial ends. |

**Вспомогательные строки — вне утверждённых шести.** Кандидаты ниже не добавляются в body и не превращаются в ещё один продающий подзаголовок. Сохранить краткое раскрытие цены и signup handoff; собрать оставшуюся смысловую вычитку одним набором, не отдельными gates на каждую строку.

| Ключ / место | RU | UK | EN |
|---|---|---|---|
| `home.hero.eyebrow` | Для самостоятельных мастеров и небольших beauty-студий | Для самостійних майстрів і невеликих б’юті-студій | For independent beauty professionals and small studios |
| `hero.priceMicro` — новый | После пробного периода: SOLO — {soloPrice}/мес., STUDIO — {studioPrice}/мес. за рабочее пространство. | Після пробного періоду: SOLO — {soloPrice}/міс., STUDIO — {studioPrice}/міс. за робочий простір. | After the trial: SOLO {soloPrice}/month or STUDIO {studioPrice}/month per workspace. |
| `hero.micro`, `closing.micro`, `pricing.cta.micro` | Подтвердите email по ссылке в письме, чтобы завершить настройку. | Підтвердьте email за посиланням у листі, щоб завершити налаштування. | You’ll get a verification email to finish setting up. |
| Ссылка к цене | Тарифы и условия | Тарифи й умови | Plans and terms |

**G1/G2** обосновывают продуктовую часть: порядок в записях и действия с клиентской историей — G1, ясность в учтённых оплатах и «отмечайте оплаты» — G2. Это не обещание автоматического учёта, отсутствия ошибок, сверки с банком или приёма карт. **G6/G7** обосновывают trial/цену; STUDIO по-прежнему требует применимой G3/TEAM readiness. Не писать «все функции», «без ограничений» или «спишем на 22-й день». Администратор и касса не удлиняют hero.

`{soloPrice}` / `{studioPrice}` в review означают **19 USD / 29 USD**, не валюту app preview. В реализации значения берутся из BILL7 public display artifact. Вместе с ценой дать короткий currency helper из §4; не помещать все ограничения тарифов под hero. Header повторяет кнопку, но не весь helper-блок. `nav.start_short` может использовать тот же короткий CTA после проверки ширины.

**Handoff:** существующий signup helper → регистрация → письмо → настройка; не прямая покупка. Ссылку `#how` сохранить. Коммерческий набор публикуется только после G6/G7. До этого разрешены docs/preview, а не скрытая подмена trial на недоступный offer.

## 3. Home — один аргумент на блок

`T` = title, `B` = body. Пары ниже заменяют смысловые строки, не устройство существующих previews. Новый RU hero body — одно предложение; UK/EN адаптировать отдельно. Остальные основные B — короткие 1–2 предложения. Новые тексты этого раздела остаются кандидатами, approval hero на них не распространяется.

| Существующий блок / ключ | RU | UK | EN |
|---|---|---|---|
| `operations` | **T:** От записи до завершённого визита. **B:** Запишите клиента, проведите визит, затем зафиксируйте оплату или используйте пакет. Задачи, требующие решения, остаются во входящих. | **T:** Від запису до завершеного візиту. **B:** Запишіть клієнта, проведіть візит, потім зафіксуйте оплату або використайте пакет. Завдання, що потребують рішення, залишаються у вхідних. | **T:** From appointment to completed visit. **B:** Schedule the client, complete the visit, then record a payment or apply a package. Items needing a decision stay in your Inbox. |
| `records` | **T:** Видно, за что учтена оплата. **B:** Запись об оплате связана с визитом или заказом клиента. Использование пакета показывается отдельно от новых денег. | **T:** Видно, за що зафіксовано оплату. **B:** Запис про оплату пов’язаний із візитом або замовленням клієнта. Використання пакета показується окремо від нових надходжень. | **T:** See what each payment was for. **B:** Payment records stay connected to the client visits or orders they relate to. Package use stays separate from new money received. |
| `collaboration` | **T:** Работайте самостоятельно или с командой. **B:** Приглашайте участников с нужным доступом. Для мастеров ведите расписание, отсутствие и назначенные услуги. | **T:** Працюйте самостійно або з командою. **B:** Запрошуйте учасників із потрібним доступом. Для майстрів ведіть розклад, відсутності й призначені послуги. | **T:** Work solo or bring in your team. **B:** Invite people with the appropriate role. Manage schedules, time off and assigned services for your service professionals. |
| `finance` | **T:** Выручка, расходы и прибыль за выбранный период. **B:** Проверяйте выручку, учтённые расходы и рассчитанную прибыль. Использование ранее оплаченного пакета не добавляет новую выручку. | **T:** Виручка, витрати й прибуток за вибраний період. **B:** Перевіряйте виручку, обліковані витрати й розрахований прибуток. Використання раніше оплаченого пакета не додає нової виручки. | **T:** Revenue, costs and profit for your chosen period. **B:** Review revenue, recorded costs and calculated profit. Using a prepaid package does not add new revenue. |
| `drivers` | **T:** Посмотрите, из чего складывается результат. **B:** Выручка по категориям услуг и клиентам, расходы по категориям и сравнение периодов. | **T:** Подивіться, з чого складається результат. **B:** Виручка за категоріями послуг і клієнтами, витрати за категоріями та порівняння періодів. | **T:** See what makes up your results. **B:** Explore revenue by service category and client, costs by category, and changes between periods. |
| `setup` | **T:** Начните со своих услуг и клиентов. **B:** Настройте услуги, перенесите контакты и поделитесь ссылкой для записи. | **T:** Почніть зі своїх послуг і клієнтів. **B:** Налаштуйте послуги, перенесіть контакти й поділіться посиланням для запису. | **T:** Start with your services and clients. **B:** Set up your services, import contacts and share your booking link. |
| `closing` | **T:** Попробуйте Perelai в своей следующей рабочей неделе. **B:** Начните со своего расписания и клиентов. | **T:** Спробуйте Perelai у свій наступний робочий тиждень. **B:** Почніть зі свого розкладу й клієнтів. | **T:** Try Perelai in your next working week. **B:** Start with your own schedule and clients. |

**Records уточнён относительно начального плана:** заголовок «с понятным остатком» не подходит к обычной полной оплате визита и может обещать частичную оплату Visit. Остаток показываем именно у пакета. Связь записей доказывается текущим feed; не добавлять новых ссылок/интеракций ради текста.

Три коротких шага Setup (существующие `step1…3Title/Body`):

| Шаг | RU | UK | EN |
|---|---|---|---|
| 1 | **Настройте услуги.** Выберите подходящий шаблон и отредактируйте список услуг. | **Налаштуйте послуги.** Виберіть відповідний шаблон і відредагуйте перелік послуг. | **Set up your services.** Choose a suitable template and edit the service list. |
| 2 | **Перенесите контакты.** Импортируйте контакты с телефона через vCard. | **Перенесіть контакти.** Імпортуйте контакти з телефона через vCard. | **Import your contacts.** Bring contacts from your phone using vCard. |
| 3 | **Поделитесь ссылкой.** Клиенты выбирают услугу и время на вашей странице записи. | **Поділіться посиланням.** Клієнти вибирають послугу й час на вашій сторінці запису. | **Share your booking link.** Clients choose a service and time on your booking page. |

Не обещать длительность миграции; Google исключён. Devices и NicheRouter не переписываются. В `not`: оставить три текущих ограничения, сократив финансовое до «Учёт работы и оплат — не бухгалтерская или налоговая отчётность» / «Облік роботи й оплат — не бухгалтерська чи податкова звітність» / “Work and payment tracking, not accounting or tax reporting.” Marketplace/clinical смысл и ссылки сохраняются.

### Почему именно эти слова — уточнение после owner feedback

- **«Порядок в записях. Ясность в оплатах.»** — принятая формулировка пользы, а не уникальность и не гарантия безошибочной работы. Body сразу показывает механизм. Предметные **«учёт оплат» / «облік оплат» / payment tracking** остаются в категории, metadata/footer; они не обязаны дословно повторять H1.
- **«Отмечайте оплаты»** — утверждённый естественный глагол hero, вместо прежних «фиксируйте»/«учитывайте». Он описывает ведение записи, не перевод денег, эквайринг, автосверку или действие «в один клик». Точные app labels не переписывать ради этого глагола.
- **«Ведите историю клиентов»** — утверждённая фраза вместо «сохраняйте». Вторую фразу о самостоятельной работе/команде убрали из body; аудитория остаётся в eyebrow, команда — в Collaboration.
- **Пакеты убраны только из hero body**, не из продукта и не из первого продуктового сценария. Вместо них — история клиентов, полезная и при разовых визитах. Пакет раскрывается ниже через создание → оформление продажи → использование → остаток. Это не доказательство, что пакеты уникальны или нужны всей beauty-аудитории.
- **«Создавайте и продавайте»** технически близко к доступному сценарию, но «оформляйте продажу» точнее: Perelai учитывает продажу, не обещает витрину, привлечение покупателей или приём карт. Source: `MembershipTemplateEditorSheet.tsx` вызывает `createPackageTemplate`, `SellMembershipSheet.tsx` — `sellClientPackage`.
- **«Абонемент» — пояснение, не переименование.** При необходимости один раз: RU «предоплаченные пакеты услуг (абонементы)», UK «передплачені пакети послуг (абонементи)». Дальше — пакет; в app и EN не вводить вторую сущность membership/subscription. В hero этот термин не нужен.

Шесть RU-строк hero теперь имеют зарегистрированное owner approval (§2). Package/Admin/Drawer и прочие строки остаются кандидатами; это решение не утверждает весь набор автоматически. Повторный полный аудит/исследование не требуется.

### Новые фрагменты и accessible copy

| Marketing key | RU | UK | EN |
|---|---|---|---|
| `packages.title` | Остаток пакета — под рукой. | Залишок пакета — під рукою. | Keep track of what’s left in a package. |
| `packages.body` | Создавайте пакеты услуг и оформляйте их продажу клиентам. Следите за использованием и остатком пакета. | Створюйте пакети послуг і оформлюйте їх продаж клієнтам. Стежте за використанням і залишком пакета. | Create prepaid service packages and record their sale to clients. Track usage and what remains in each package. |
| `packages.summary` | Пример использования пакета: из трёх посещений использовано одно, осталось два. Новая оплата не поступает. | Приклад використання пакета: із трьох відвідувань використано одне, залишилося два. Нова оплата не надходить. | Example package use: one of three visits is used, leaving two. No new payment is received. |
| `collaboration.accessTitle` | Помощь с записью и расчётами. | Допомога із записами й розрахунками. | Help with appointments and checkout. |
| `collaboration.accessBody` | Администратор ведёт запись и выполняет разрешённые расчёты с клиентами без доступа к общей финансовой отчётности. | Адміністратор веде записи й виконує дозволені розрахунки з клієнтами без доступу до загальної фінансової звітності. | Your administrator handles appointments and permitted client checkout, without access to general financial reports. |
| `collaboration.planNote` | Доступ команды — в STUDIO. Администратор, который не оказывает услуги, не занимает место исполнителя. | Доступ команди — у STUDIO. Адміністратор, який не надає послуги, не займає місце виконавця. | Team access is part of STUDIO. An administrator who does not provide services uses no service-professional place. |
| `collaboration.accessSummary` | Пример доступа: администратор без профиля исполнителя. | Приклад доступу: адміністратор без профілю виконавця. | Example workspace access: Administrator, with no service-professional profile. |
| `drawer.title` — **POS2 READY; release отдельно** | Сверяйте наличные в конце дня. | Звіряйте готівку наприкінці дня. | Check your cash at the end of the day. |
| `drawer.body` — **POS2 READY; release отдельно** | Откройте кассовую смену до приёма наличных. В конце смены введите пересчитанную сумму и сравните её с ожидаемой. | Відкрийте касову зміну до приймання готівки. Наприкінці зміни введіть пораховану суму й порівняйте її з очікуваною. | Open a cash drawer session before receiving cash. At closing, enter your cash count and compare it with the expected amount. |
| `drawer.summary` — **POS2 READY; release отдельно** | Пример кассовой смены: открытие — 100, принято наличными — 50, ожидается — 150, пересчитано — 145, расхождение — −5. | Приклад касової зміни: відкриття — 100, отримано готівкою — 50, очікується — 150, пораховано — 145, розбіжність — −5. | Example cash drawer session: opening count 100, cash received 50, expected 150, counted 145, difference −5. |
| Все новые `.caption` | Пример данных | Приклад даних | Example data |

Package summary допускается только для fixture с единицей «посещение», не для произвольных кредитов. Drawer summary требует одной явно названной demo-валюты рядом с числами, не валюты подписки. Состояния реального UI не склеивать в выдуманный экран. Drawer copy и компонент включены в POS2, не отложены. Перед публичным показом (включая aria/FAQ/meta/machine) отдельно сверить текущий допуск с DR7: прочитанный report всё ещё говорит NO-GO. Не публиковать «скоро» вместо проверки и не называть незавершённую приёмку выполненной.

Точные роли, поля доступа, единицы и cash labels в mock — **из app export**, не из этих marketing keys. Дополнительные tab labels создавать только если переключатель действительно нужен; существующие controls не переписывать. `collaboration.teamBody` следует новому body, без устаревшего перечисления только Staff/Supervisor; `teamTitle`, `notesDetail` и mock заметки сохранить, если не меняется их смысл. Удалённые/скрытые панели не должны оставлять лишние обещания в sr-only summary.

Hero `imageAlt` после Calendar-first: RU «Пример Perelai: расписание визитов и финансовый обзор.» / UK «Приклад Perelai: розклад візитів і фінансовий огляд.» / EN “Example Perelai appointment calendar and finance overview.” Summary существующих финансовых previews проверяется в POS1 по исправленным данным, без новых метрик и недостоверных итогов.

## 4. Pricing — два тарифа и один trial

Ниже именно рекламный текст. Цена/лимит/доступность — данные BILL7, не независимые литералы в переводах. `{soloLimit}=1`, `{studioLimit}=5`; использовать корректные plural forms при реализации. STUDIO+ — один существующий проверенный канал контакта, без выдуманного email.

| Место | RU | UK | EN |
|---|---|---|---|
| `hero.title` | Начните с 21 дня STUDIO. | Почніть із 21 дня STUDIO. | Start with 21 days of STUDIO. |
| `hero.body` | Без карты. После пробного периода выберите и оформите подписку. Без оформления автоматического списания не будет. | Без картки. Після пробного періоду виберіть та оформіть підписку. Без оформлення автоматичного списання не буде. | No card required. Choose and purchase a subscription when your trial ends. You won’t be charged unless you subscribe. |
| `plans.solo.description` | Для самостоятельной работы. | Для самостійної роботи. | For working on your own. |
| `plans.solo.capacity` | {soloLimit} активный исполнитель. | {soloLimit} активний виконавець. | {soloLimit} active service professional. |
| `plans.solo.access` | Без отдельного доступа для команды. | Без окремого доступу для команди. | No additional team access. |
| `plans.studio.description` | Когда нужен доступ команды. | Коли потрібен доступ команди. | When you need team access. |
| `plans.studio.capacity` | До {studioLimit} активных исполнителей. | До {studioLimit} активних виконавців. | Up to {studioLimit} active service professionals. |
| `plans.studio.access` | Доступ для команды, включая администратора. | Доступ для команди, зокрема адміністратора. | Team access, including an administrator. |
| Единица цены | {price}/мес. за рабочее пространство | {price}/міс. за робочий простір | {price}/month per workspace |
| `trial.body` | Пробный период даёт доступ STUDIO, даже если после него вы выберете SOLO. | Пробний період надає доступ STUDIO, навіть якщо після нього ви виберете SOLO. | The trial gives you STUDIO access, even if you choose SOLO afterward. |
| `cta.button` | Попробовать STUDIO 21 день | Спробувати STUDIO 21 день | Try STUDIO for 21 days |
| Общие возможности, компактная строка | Запись клиентов, история визитов, учёт оплат и пакетов, финансовый обзор. | Записи клієнтів, історія візитів, облік оплат і пакетів, фінансовий огляд. | Appointments, client history, payment and package records, and a financial overview. |
| `studioPlus.title` | Нужна команда больше? | Потрібна більша команда? | Need a larger team? |
| `studioPlus.body` | Обсудите ваши задачи с Perelai. | Обговоріть ваші потреби з Perelai. | Talk to Perelai about what you need. |
| `studioPlus.cta` | Связаться с нами | Зв’язатися з нами | Contact us |
| Currency helper, также рядом с ценой Home | Базовые цены указаны в USD. Итоговая валюта и применимые налоги — при оформлении подписки. | Базові ціни вказано в USD. Остаточна валюта й застосовні податки — під час оформлення підписки. | Base prices are in USD. Final currency and applicable taxes are confirmed at checkout. |
| Renewal helper | Оформленная подписка продлевается ежемесячно по условиям подписки. | Оформлена підписка продовжується щомісяця за умовами підписки. | Paid subscriptions renew monthly under the subscription terms. |

Renewal helper публиковать со ссылкой на действующие согласованные условия. Это не юридическое заключение и не новая refund/cancellation policy. Один общий trial CTA под двумя информационными карточками достаточен; не создавать ложные «SOLO trial» и «купить сейчас». Не маркировать STUDIO «лучшим для всех».

## 5. FAQ, meta и shared surfaces

### Шесть вопросов Home

`H1…H6` — редакторские ID, не обязательные новые JSON keys. POS2 переиспользует существующую форму FAQ и сохраняет шесть вопросов, не добавляет все старые finance/device ответы сверху. Pricing может ссылаться на те же approved строки, не меняя смысла.

| ID | RU | UK | EN |
|---|---|---|---|
| H1 / G1 | **Как клиенты записываются?** Поделитесь своей ссылкой. Клиенты выбирают услугу и время на вашей странице записи. | **Як клієнти записуються?** Поділіться своїм посиланням. Клієнти вибирають послугу й час на вашій сторінці запису. | **How do clients book?** Share your booking link. Clients choose a service and time on your booking page. |
| H2 / G6 | **Есть ли пробный период и нужна ли карта?** 21 день STUDIO без карты. Пробный период начинается после настройки бизнеса. Дата окончания видна в приложении. | **Чи є пробний період і чи потрібна картка?** 21 день STUDIO без картки. Пробний період починається після налаштування бізнесу. Дату завершення видно в застосунку. | **Is there a trial, and do I need a card?** Try STUDIO for 21 days without a card. Your trial starts after business setup. The app shows your end date. |
| H3 / G6 | **Что произойдёт после пробного периода?** Чтобы продолжить работу, оформите подписку. Без подписки или другого действующего доступа работа ограничивается. Само окончание пробного периода не удаляет данные. | **Що станеться після пробного періоду?** Щоб продовжити роботу, оформіть підписку. Без підписки чи іншої чинної підстави доступу робота обмежується. Саме завершення пробного періоду не видаляє дані. | **What happens when the trial ends?** Subscribe to keep working. Without a subscription or another valid source of access, work is restricted. Trial expiry itself does not delete your data. |
| H4 / G3/G7 | **Можно ли работать с командой?** Да, в STUDIO: до {studioLimit} активных исполнителей и доступ команды. Администратор, который не оказывает услуги, не занимает место исполнителя. | **Чи можна працювати з командою?** Так, у STUDIO: до {studioLimit} активних виконавців і доступ команди. Адміністратор, який не надає послуги, не займає місце виконавця. | **Can I work with a team?** Yes. STUDIO supports up to {studioLimit} active service professionals and team access. An administrator who does not provide services uses no performer place. |
| H5 / G2 | **Пакет услуг — это подписка?** Нет. Клиент заранее оплачивает объём услуг, который использует на подходящих визитах. Это не регулярное списание и не подписка Perelai. | **Пакет послуг — це підписка?** Ні. Клієнт заздалегідь оплачує обсяг послуг, який використовує на відповідних візитах. Це не регулярне списання й не підписка Perelai. | **Is a prepaid package a subscription?** No. A client prepays for services to use on eligible visits. It is not a recurring charge or a Perelai subscription. |
| H6 / G2/G5 | **Это бухгалтерия или приём платежей?** Нет. Perelai помогает вести записи, клиентов и учёт оплат. Это не бухгалтерская или налоговая отчётность и не сервис приёма карт. | **Це бухгалтерія чи приймання платежів?** Ні. Perelai допомагає вести записи, клієнтів і облік оплат. Це не бухгалтерська чи податкова звітність і не сервіс приймання карток. | **Is this accounting software or a payment processor?** No. Perelai helps manage appointments, clients and payment records. It does not provide accounting or tax reporting, or process your clients’ card payments. |

### Pricing FAQ — пять вопросов, без второго длинного списка

Для Pricing использовать H3 как один из пяти ответов. Ещё четыре пары:

| ID | RU | UK | EN |
|---|---|---|---|
| P1 / G6 | **Когда начинается пробный период и можно ли получить ещё один?** Карта не нужна. Пробный период начинается после первой подходящей завершённой настройки бизнеса и предоставляется один раз плательщику. Новое рабочее пространство не запускает новые 21 день. | **Коли починається пробний період і чи можна отримати ще один?** Картка не потрібна. Пробний період починається після першого завершеного налаштування бізнесу, яке дає право на нього, і надається один раз платнику. Новий робочий простір не запускає нові 21 день. | **When does the trial start, and can I get another?** No card is required. The trial begins after your first eligible completed business setup and is available once per payer. A new workspace does not restart the 21 days. |
| P2 / G3/G7 | **Кто занимает место исполнителя?** Тот, кто оказывает услуги, включая работающего владельца, даже без отдельного логина. Администратор без профиля исполнителя место не занимает, но его доступ требует STUDIO. | **Хто займає місце виконавця?** Той, хто надає послуги, зокрема власник, навіть без окремого логіна. Адміністратор без профілю виконавця місце не займає, але його доступ потребує STUDIO. | **Who counts toward the service-professional limit?** Anyone actively providing services, including a working owner, even without a login. An administrator without a service-professional profile does not count, but their access requires STUDIO. |
| P3 / G7 | **Можно ли после пробного периода выбрать SOLO?** Да. Сначала оставьте одного активного исполнителя, отзовите дополнительный доступ и незавершённые приглашения команды. Сотрудники не удаляются автоматически. | **Чи можна після пробного періоду вибрати SOLO?** Так. Спочатку залиште одного активного виконавця, відкличте додатковий доступ і незавершені запрошення команди. Працівники не видаляються автоматично. | **Can I choose SOLO after the trial?** Yes. First keep one active service professional, revoke additional team access and cancel pending team invitations. People are not deleted automatically. |
| P4 / G7/legal | **Как продлевается подписка?** После оформления подписка продлевается ежемесячно. Итоговая валюта, применимые налоги и условия показываются перед оплатой. | **Як продовжується підписка?** Після оформлення підписка продовжується щомісяця. Остаточна валюта, застосовні податки й умови показуються перед оплатою. | **How does renewal work?** Once purchased, your subscription renews monthly. Final currency, applicable taxes and terms are shown before you pay. |

Не превращать вопрос о SOLO в обещание автоматического downgrade. Обычные покупки/renewal не равны no-card trial; прейскурант не заменяет checkout consent.

### Metadata / footer

| Ключ / surface | RU | UK | EN |
|---|---|---|---|
| `home.meta.title` | Perelai — запись, клиенты и учёт оплат | Perelai — записи, клієнти й облік оплат | Perelai — Appointments, Clients & Payment Tracking |
| `home.meta.description` | Расписание, история клиентов, учёт оплат и пакетов услуг для самостоятельных мастеров и небольших beauty-студий. | Розклад, історія клієнтів, облік оплат і пакетів послуг для самостійних майстрів і невеликих б’юті-студій. | Appointments, client history, payment records and prepaid packages for independent beauty professionals and small studios. |
| `home.footer.description` | Запись, клиенты и учёт оплат для самостоятельных мастеров и небольших студий. | Записи, клієнти й облік оплат для самостійних майстрів і невеликих студій. | Appointments, clients and payment tracking for independent beauty professionals and small studios. |
| `pricing.meta.title` | Тарифы SOLO и STUDIO — Perelai | Тарифи SOLO і STUDIO — Perelai | SOLO and STUDIO Pricing — Perelai |
| `pricing.meta.description` | 21 день STUDIO без карты. Затем SOLO — {soloPrice}/мес. или STUDIO — {studioPrice}/мес. за рабочее пространство. | 21 день STUDIO без картки. Потім SOLO — {soloPrice}/міс. або STUDIO — {studioPrice}/міс. за робочий простір. | Try STUDIO for 21 days without a card. Then SOLO {soloPrice}/month or STUDIO {studioPrice}/month per workspace. |

Home/Pricing OG/Twitter, `lib/site.ts`, JSON-LD descriptions и `/llms.txt`/`/pricing.md` используют этот же смысл после gates. Не оставлять там finance-only/no billing. Шаблон social cards и типы schema не менять. `/install` получает только необходимые shared CTA/helper corrections; platform copy остаётся в своём контракте. Все изменённые показываемые строки затем адаптировать в `pl/es/fr/de/pt/tr`, без нового исследования каждой ниши.

## 6. G1–G8 — claim и publication gates

**Общая ревизия чтения:** app `6ba23125…`, landing `4be46b0a…`. **Copy locales:** RU hero approved (§2); новый UK/EN hero pending adaptation; прочие RU/UK/EN строки — draft. Никакой runtime locale не тестировался. Старые evidence ниже явно датированы: это чтение отчётов, не повторный запуск их тестов. README terminology/mvp и 03 не содержат заполненной M4 live-приёмки.

| Gate / использованная фраза | Source / proof type | Роль / тариф / locale | Статус и достаточный следующий шаг |
|---|---|---|---|
| G1: hero «Порядок в записях», планирование визитов и история клиентов; Operations | [ADR-0001](/Users/valery/Sites/beauty-finance/docs/adr/0001-visit-transaction-order-terminology.md); app `ClientsPage.tsx`, `ClientDetailsPage.tsx`, Calendar/Visit; [MVP handoff](/Users/valery/Sites/beauty-finance/.cursor/plans/terminology/mvp/03-general-landing-handoff.md) | Owner, APPOINTMENT, SOLO/STUDIO; RU/UK/EN смысл | **READY для copy; release journey не проверен.** Один настоящий appointment → visit с клиентом на release revision в POS4/M4; не пересобирать тестовую программу |
| G2: hero «Ясность в оплатах» / «отмечайте оплаты», создание/оформление продажи Package, H5/H6 | [ADR-0003](/Users/valery/Sites/beauty-finance/docs/adr/0003-membership-package-redemption.md), ADR-0002/0006; app `MembershipTemplateEditorSheet` → `createPackageTemplate`, `SellMembershipSheet` → `sellClientPackage`, `PackageCreditBadge`, `ClientPackagesHistorySheet`; landing `lib/finance-fixture.ts` | Owner, SOLO/STUDIO; Administrator только G3; RU/UK/EN | **READY смысл; POS1 исправил fixture/feed/тесты.** Продажа пакета учитывается один раз; `v6` — списание с нулём новых cash/Revenue. Payment vs redemption не подменяются acquiring |
| G3: «администратор…без общей финансовой отчётности», команда | [ADR-0014](/Users/valery/Sites/beauty-finance/docs/adr/0014-team-roles-and-performer-links.md), `WorkspaceAccessSheet/FormFields`; [STUDIO readiness 13.09](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/studio-readiness-20260913.md) | Owner + Administrator; настоящий STUDIO trial/paid, не SOLO/internal mode; RU/UK/EN | **DEPENDENCY: BILL3/4 + TEAM5/TEAM-RELEASE + BILL8.** TR0–4/TR6 выполнены исторически, это не новый коммерческий PASS. Уточнить выпущенные labels после M2; без general Finance, с разрешёнными checkout/OPEN cash reads |
| G4: «Сверяйте наличные…» | [ADR-0015](/Users/valery/Sites/beauty-finance/docs/adr/0015-cash-drawer-sessions.md); `CashDrawerPage`; [DR5A UI handoff](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/drawer/inventory/dr5a-web-handoff.md), [DR7](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/drawer/inventory/dr7-acceptance.md), уточнение владельца в текущей задаче | Owner: SOLO/STUDIO; Admin: разрешённая OPEN-смена; draft RU/UK/EN | **IMPLEMENTATION READY — включён в POS2.** DR0–DR6/UI реализованы, DR-R1 исправлен; не повторять app implementation. **PUBLIC RELEASE: unresolved evidence**, поскольку report 13.09 всё ещё NO-GO/browser-pilot pending. В POS4 сверить актуальную приёмку и enablement, не блокируя подготовку landing |
| G5: Finance/Drivers «выручка, расходы…» | Finance API/UI; `lib/finance-fixture.ts`; ADR-0003; [finance claim contract](finance-claim-contract.md) | Owner / разрешённый Business manager; не Administrator; SOLO/STUDIO, RU/UK/EN | **POS1 fixture согласован:** totals/category/client/trend используют один источник totals; cash включает подтверждённый paid order instalment, но не redemption. Не обещать cash=Revenue, любую per-service детализацию или бухгалтерскую формулу |
| G6: trial/CTA/H2/H3/P1 | [решение 16.09](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260916.md) C-19; [V1 §2](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/paddle-trial-conversion-evidence.v1.md); ADR-0013 | Eligible payer + Owner; 21-day STUDIO, expiry/recovery; RU/UK/EN | **POLICY READY; RELEASE NOT ESTABLISHED.** BILL1/3/4/8 и TEAM/legal. Нет раннего оформления в v1, нового trial на Company или автоматического списания без покупки |
| G7: цена/1–5/доступ команды/Pricing | [решение 06.09](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/launch-decisions-20260906.md); `libs/core/src/billing/catalog.ts`; [commercial catalog](/Users/valery/Sites/beauty-finance/.cursor/plans/monetization/inventory/commercial-catalog.v1.md) | Payer; независимая Company; SOLO/STUDIO, STUDIO+ contact; RU/UK/EN → прочие locales | **POLICY READY; BILL7/RELEASE DEPENDENCY.** В source checkout=false/purchase disabled; production не проверен. Получить public display artifact, налоговый helper/legal и фактическую доступность; не объявлять цену неизвестной |
| G8: Google Calendar | [scope](/Users/valery/Sites/beauty-finance/libs/server/calendar-sync/src/lib/contracts/google-calendar-scopes.ts) = readonly; MVP handoff | Integration-authorized user; locale/runtime не проверены | **OMITTED.** Удаление ложного two-way — POS1. Новый Calendar claim не нужен для запуска; Google login не доказательство |

**Разрешение по кассе:** запрос владельца разблокирует включение реализованной возможности в план и подготовку landing, что записано выше. Он не содержит результата browser/pilot или подтверждения deployed flag. В прочитанном README Drawer есть ещё более старые строки о незакрытом DR-R1; canonical DR7 фиксирует его исправление. Эти app-документы не переписывались в маркетинговой задаче, спорный public статус не превращён в фиктивный PASS.

F4/TC8 notes и F20–F26 Devices не расширялись. F25/TC5 coworker остаётся HOLD. Никакой новый claim не становится разрешённым через картинку, alt, sr-only, FAQ или metadata в обход этой таблицы.

## 7. Old → new → reason

| Было | Теперь | Причина |
|---|---|---|
| Finance-first и запрет начинать с booking | Ежедневная работа: запись, клиенты, учёт оплат/пакетов | Новый launch brief и MVP handoff |
| US colorists, solo-only; studio framing запрещён | Solo beauty + небольшие студии; география отдельно | Новый scope, без «для всех профессий» |
| “Without Complicated Spreadsheets”, “in one place”, finally | Порядок в записях. Ясность в оплатах. + три действия в body | Выбранная владельцем польза без новизны, гарантий или конкурентного превосходства |
| «Запись, клиенты / и учёт оплат.»; «сохраняйте» / «учитывайте» | Утверждённый benefit-led H1; «ведите историю клиентов и отмечайте оплаты» | Решение владельца 19.09.2026; понятная польза без сухого перечня функций |
| Остатки пакетов как обязательная часть hero | История клиентов в hero; полный сценарий пакета ниже | Первый экран полезен и для разовых визитов |
| Drawer optional deferred | Drawer implementation READY, основной scope POS2; public gate отдельно | Реализация подтверждена, несовпадение release-документа не скрыто |
| `and payment records` / `and payment tracking` как EN H1 | Новый H1 адаптировать из утверждённого RU; payment tracking остаётся названием категории | Не переводить снятый кандидат и не приписывать approval ещё не написанной адаптации |
| «Оплата или пакет — с понятным остатком» | Payment record + отдельный остаток пакета | Не обещать остаток/частичную оплату любого Visit |
| Пакет 90 увеличивает Revenue | Погашение: 0 новой Revenue/денег | ADR-0003, техническая правка POS1 |
| Staff/Supervisor как исчерпывающие роли | Роль доступа отдельно от исполнителя; Administrator отдельно от Business manager | ADR-0014/MVP, UI labels не сочинять |
| “No card” потому что billing отсутствует; trial/price запрещены | Утверждённый no-card STUDIO trial + последующая подписка; отдельные release gates | Решения 06/16.09, billing source уже существует |
| Будущие 19/29/49, Founding | SOLO19/STUDIO29; STUDIO+ contact-only | Не продавать внутреннюю гипотезу |
| Two-way Calendar; setup in an evening | vCard + редактируемые услуги + booking link | Readonly scope; нет доказательства времени настройки |
| Экспорт «не существует» | Код есть, коммерческий доступ/retention не обещаны | Не подменять policy инвентаризацией кода |
| Смена дизайна ради нового позиционирования | Существующие previews + точные исправления и малые дополнения | Прямое ограничение владельца; scope POS1–3 |

### 7.1 POS1: конечные общие замены в доступных нишах

Это конечный factual-pass, а не развитие текста ниш. Он охватывает опубликованные модули из
`content/niches/index.ts` и не добавляет новых app labels: их можно брать только из generator после
M1/M2.

| Surface | Было | Теперь | Причина |
|---|---|---|---|
| `hair-salon/*` package steps, terminology и FAQ | Redemption мог читаться как settled Revenue, хотя денег в этот день нет | Продажа package учитывается один раз; redemption закрывает визит с нулём новых cash и Revenue | ADR-0001–0003; не считать одну продажу дважды |
| `hair-salon/*` team terminology/setup/FAQ | `Staff/Supervisor` как исчерпывающая пара ролей | Нейтральный доступ команды по роли; исполнитель и роль доступа не смешиваются | Administrator и Business manager/SUPERVISOR не синонимы; M1/M2 labels ещё не зафиксированы |
| `hair-salon/*`, `lash-artist/*`, `premium-colorist/*`, `massage-therapist/*` setup/FAQ | Connect Google Calendar, optional Calendar connection или two-way implication | vCard import + свой booking link/расписание в Perelai; Calendar promise omitted | Google login не доказывает Calendar; текущий scope read-only, release flow не подтверждён |
| `lash-artist/pl`, `premium-colorist/pl` CTA | «Бесплатное рабочее пространство» | Нейтральное «Создать рабочее пространство» | Нельзя превращать отсутствие опубликованного offer в ценовое обещание |
| `music-teacher/en` package FAQ | Attendance выравнивается с Revenue | Sale учитывается один раз; redemption кредита не добавляет cash или Revenue | Та же граница package, без нового коммерческого сценария |

Проверка active copy не нашла других `Founding`, `free forever`, `no billing` или Calendar/two-way
обещаний в доступных нишах. Исторические research comments и legal disclosure не являются launch claims
и не переписываются этим pass.

## 8. Один редакторский проход и следующий шаг

**Применены skills при подготовке POS0:** `product-marketing` — единая категория и v9; `copywriting` — главный вариант и компактные альтернативы; `cro` — trial/последующая цена рядом с CTA, две карточки вместо перегруженной таблицы; `copy-editing` — Seven Sweeps и внутренняя проверка ниже. Ни один skill не добавляет новый launch gate или требование внешнего исследования.

**История редакторской проверки до финального выбора владельца** (оценки ниже относятся к прежним кандидатам, не являются проверкой нового H1):

**Seven Sweeps, один проход:** clarity — payment tracking вместо сухого records в H1, понятия пакета/подписки разведены; voice — спокойные активные глаголы; so what — виден клиентский рабочий сценарий; prove it — G1–G8, без конкурентных/числовых результатов; specificity — остаток пакета и точные 21/19/29/1/5; emotion — самостоятельность и помощь без стыда/страха; risk — карта, последующая цена, явная покупка и письмо, без безусловной гарантии хранения. Повторная сверка после правок не обнаружила нового смыслового конфликта; owner/native/runtime review не подменён.

**Simulated panel:** один редакторский разбор с четырёх перспектив, не опрос реальных людей и не независимые рецензенты. Баллы — субъективная шкала редактора, не конверсионные данные и не разрешение публикации.

| Перспектива | До → после | Замечание и принятая правка |
|---|---|---|
| Conversion copywriter | 7 → 8 | EN records звучало как архив; tracking в H1, record в body; конкретный trial CTA |
| UX-редактор | 7 → 8 | Остаток мог читаться как долг по визиту; перенесён к пакету, сложные ограничения — в FAQ |
| Solo-пользователь, моделируемая перспектива | 7 → 8 | Studio-only framing исключал одиночку; eyebrow/hero/SOLO начинают с самостоятельной работы |
| Владелец студии, моделируемая перспектива | 6 → 8 | Непонятно, считается ли администратор; отдельно роль, performer place и требование STUDIO |

**Короткий повторный Seven Sweeps после замечаний:** ясность — учёт вместо двусмысленных расчётов; голос — учитывайте; польза — история клиента в hero, пакет ниже; доказательства — source создания/продажи и явный public-gap кассы; конкретика — остаток остаётся в package proof; эмоция — самостоятельная работа и помощь команды; риск — без обещания acquiring/абонентских списаний. Simulated recheck тех же четырёх перспектив: 8/8/8/8, субъективная редакторская оценка, не исследование; дополнительный approval gate не создаётся.

**Approval · 2026-09-19:** Valery явно принял шесть RU-строк из §2 — **OWNER APPROVED / RU SOURCE FROZEN**. Источник — ответ в текущей задаче «принимаю твой итоговый вариант. обнови планы» с этими строками. UK/EN H1/body — **ADAPTATION PENDING**; UK/EN CTA/helper, eyebrow, остальные новые секции, metadata и Pricing — **CANDIDATE / REVIEW PENDING**. Одобрение текста не устанавливает фактическую доступность trial/ролей/кассы и не является native review или результатом исследования. Для оставшихся строк достаточно одной смысловой вычитки, без нового комитета и повторного утверждения RU/цены.

**Граница выполнения:** POS0 обновил product-marketing v9, rails, commercial policy, указатели контекста и старых MSG/FM plans; добавил этот журнал. Follow-up довёл context до v10, уточнил hero/пакеты и разблокировал Drawer в плане POS2. Принятие финального RU hero довело context до v11: `product-marketing` использован для единого freeze/status в плане, prompts и канонических документах; история v1–v10 сохранена. Public messages, components, fixtures, generated JSON, app code и flags не менялись. Builds/unit/browser/provider tests не запускались: это документация, не runtime-приёмка.

**Проверки документации:** `git diff --check`, существование локальных Markdown targets, парность code fences, отсутствие trailing whitespace; сохранение прежней истории marketing context. Итоговый список изменений ограничен `.md`, package fixture и false two-way остаются POS1, не выданы за исправленные.

**Далее:** POS1 можно начать сейчас — исправления package arithmetic и two-way claims независимы. В POS2 переносить утверждённый RU hero и адаптировать UK/EN без повторного approval RU; остальные строки сохраняют свой review status. POS3 завершает смысловую вычитку новых адаптаций/оставшихся строк, остальные локали и получает BILL7 commercial artifact. Drawer теперь в основном scope POS2, без ожидания повторной реализации кассы; его public статус сверяется в POS4. G3/G6/G7 также нельзя превратить в PASS одним текстом. Новые marketing keys — только в рамках плана, утверждённые strings из этого журнала имеют приоритет над начальными кандидатами `positioning/01`.

## 9. POS2 Corrective Pass Evidence · 2026-09-21

- **R1 fixed (App Previews & Product Labels):**
  - `MockCashDrawerSummary`: Replaced mock with app UI labels from generated export across all 9 locales; separated into OPEN session summary (with `CircleDot`, expected float + receipts) and close preview (counted minus expected shortage preview) without autoplay. Amounts formatted via `formatDrawerAmount` with locale-aware currency (fixed demo USD), using Unicode minus `−` (U+2212, verified absence of literal `\u2212`).
  - `MockWorkspaceAccessSummary`: Aligned with `WorkspaceAccessFormFields` structure (Administrator role ChoiceCard + `service_mode_none` "Does not provide services"). Accessible `planNote` is NOT enclosed inside `aria-hidden="true"`.
  - `MockPackageCheckout`: Reproduces `PackageCreditBadge` pattern with explicit unit count (`2 / 3 visits`), `memberships.package_credit_applied`, and explicit new payment `$0` (`calendar_create.checkout_pay_now`). No misleading `≈ $0` approximation.
  - Declared UI keys (`CASH_DRAWER_UI_KEYS` [10], `WORKSPACE_ACCESS_UI_KEYS` [6], `PACKAGE_CHECKOUT_UI_KEYS` [5]) registered in `verify-niches.mjs` `DECLARED_KEY_SOURCES` and covered across all 9 published locales.
- **R2 fixed (Generated Catalog & UI Strings Provenance):**
  - Re-exported from clean checkout at commit `3986975504543976f730776da50e90ce986c1969` (BILL3).
  - Provenance equality verified: `niche-catalog.generated.json` and `app-ui-strings.generated.json` share identical `sourceCommit` (`3986975504543976f730776da50e90ce986c1969`) and `generatedAt` (`2026-09-21T12:39:10+02:00`).
  - Generator idempotency and cache optimization verified; no untracked temp files left behind.
- **R3 status (6 Published Locales):**
  - `pl/es/fr/de/pt/tr` await full semantic localization pass from vocabulary in POS3. Home is NOT marked ready for publication until POS3 completes.
- **Owner Framing & Messaging Alignment:**
  - Audience widened to independent professionals and small teams working by appointment (e.g. massage therapists, tutors, beauty professionals; not beauty-only and not any profession/CRM).
  - RU hero frozen strings preserved verbatim with terminal periods in H1 (`title` and `accent`).
  - Secondary CTA anchor verified linking to `#how`.
  - Hero trial helper and verification email helper both retained.
  - `messages/ru/home.json`, `messages/en/home.json`, and `lib/site.ts` aligned with vocabulary.
  - `.agents/product-marketing.md` bumped to v12 with dated changelog entry preserving full history.
- **Release gates:**
  - DR7 (Cash drawer public release) and commercial/conversion gates remain untouched and separate from landing copy implementation.
- **Verification commands:**
  - `pnpm typecheck`: PASS (clean)
  - `pnpm lint`: PASS (clean)
  - `pnpm test`: PASS (23 files passed, 331/331 tests passed)
  - `pnpm verify:niches`: PASS (32 pages, 17 mock keys, 43 declared product labels, 9 locales, uniqueness checked)
  - `pnpm build`: PASS (108 static routes generated, exit code 0)
  - `git diff --check`: PASS (clean)

## 10. POS3 Localization Part Handoff Evidence · 2026-09-21

- **Scope & Sources:**
  - Basis: `.cursor/plans/positioning/04_home_copy_vocabulary_ru_en_20260921.md` (§§1–7), landing HEAD `9bb41fa` + POS2 corrective pass diff.
  - Manifest scope: 80 key pairs from §2 + controls/summaries from §§6–7 (`hero.showcase.pauseAutoplay`, `hero.showcase.resumeAutoplay`, `meta.title`, `meta.description`, `footer.description`, `footer.devices`).
  - Target locales: all 9 published locales (`en`, `ru`, `uk`, `pl`, `es`, `fr`, `de`, `pt`, `tr`).
- **Locale Status & Tone Conventions:**
  - **RU:** 6 hero strings preserved verbatim as OWNER APPROVED / FROZEN (terminal periods in `hero.title` and `hero.accent`, exact `trialMicro`).
  - **EN / UK / PL / ES / FR / DE / PT / TR:** Editorial candidates / natural adaptations based on vocabulary §4 and §5:
    - UK: polite plural (`ви`).
    - PL: informal / direct singular (`Ty`), e.g. "Twój terminarz", "Planuj wizyty", "Wypróbuj przez 21 dni".
    - ES: informal / direct singular (`tú`), e.g. "Tu agenda, en orden.", "Planifica citas", "Probar durante 21 días".
    - FR: polite plural / formal (`vous`), e.g. "Des rendez-vous bien organisés.", "Planifiez vos rendez-vous", "Essayer pendant 21 jours".
    - DE: formal (`Sie`), e.g. "Ordnung im Terminplan.", "Planen Sie Termine", "21 Tage testen".
    - PT: Brazilian convention matching existing site (`você`), e.g. "Sua agenda em ordem.", "Agende atendimentos", "Testar por 21 dias".
    - TR: polite suffix (`-in`/`-ın`), e.g. "Randevularınızda düzen.", "Randevuları planlayın", "21 gün deneyin".
  - **Review Status:** Editorial candidate / draft. Native review and final production release remain pending POS4. No claims of native-reviewed or production-ready status.
- **Data & Contract Invariants Verified (Raw JSON Before Merge):**
  - All 80 manifest scope keys + controls present in raw `messages/<locale>/home.json` across all 9 locales (0 missing keys, 0 empty strings).
  - No untranslated English paragraphs leaked into non-English locales (brands `Perelai`, `SOLO`, `STUDIO`, `STUDIO+`, `vCard`, and demo currency `USD` preserved).
  - Proper next-intl interpolation (`{count}`) preserved without i18next `{{count}}` corruption.
  - Unicode minus `−` (U+2212) verified in `drawer.summary` (`−5`) across all locales; absence of literal `\u2212` confirmed.
  - Hero showcase controls `pauseAutoplay` and `resumeAutoplay` fully localized in all 9 locales.
  - App UI mocks in landing remain sourced from clean app export commit `3986975504543976f730776da50e90ce986c1969` (BILL3); no arbitrary app UI translations invented in JSX.
- **Verification Commands & Gates:**
  - `pnpm typecheck`: PASS (clean)
  - `pnpm lint`: PASS (clean)
  - `pnpm test`: PASS (24 test files, 394/394 tests passed, including new `tests/locale-raw-coverage.test.ts`)
  - `pnpm verify:niches`: PASS (32 pages, 17 mock keys, 43 declared product labels, 9 locales, uniqueness checked)
  - `pnpm build`: PASS (108 static routes generated, exit code 0)
  - `git diff --check`: PASS (clean)
- **Pending Follow-ups (Separate Scopes):**
  - POS3 commercial scope: Pricing / BILL7 commercial artifact sync.
  - POS4: Native copy review, live verification journey on release revision, release gates (DR7, billing/conversion).
