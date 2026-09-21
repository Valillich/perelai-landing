# Home vocabulary — RU/EN source и локализация POS3

**2026-09-21 · handoff для агента · тексты не применены в JSON.**

Основа: текущие `messages/ru/home.json` и `messages/en/home.json` POS2 на landing HEAD `9bb41fa` + незакоммиченный diff, owner RU freeze от 19.09 и новое указание владельца: **общий Home не beauty-only; подходят, например, массажисты и репетиторы**.

Это source vocabulary и конечный translation brief, не автоматическое утверждение всех формулировок. Шесть RU hero-строк — ранее **OWNER APPROVED**. EN, новые общие формулировки и переводы ниже — **редакторские кандидаты**. Не объявлять машинную адаптацию native-reviewed и не останавливать подготовку из-за отсутствия отдельного approval для каждого слова.

Связанный [review и corrective prompt](03_pos2_p0_p1_review_and_fix_prompt_20260921.md). Старый `.agents/product-marketing.md` v11 ещё beauty-oriented; при применении обновить затронутую рамку/rails с новой датированной записью, сохранив историю. Указание владельца об общей аудитории приоритетнее старого beauty-only текста; это не отменяет evidence gates.

## 1. Одна рамка для всех языков

**RU:** Perelai — запись, клиенты и учёт оплат для самостоятельных специалистов и небольших команд.

**EN:** Perelai helps independent professionals and small teams manage appointments, clients and payment records.

Scope уточняется рабочим сценарием: **работа по записи → история клиента → учёт оплаты или использование пакета услуг**. Не «CRM для любого бизнеса» и не «финансовая платформа». Финансовый обзор и сверка наличных — подтверждаемые возможности, не вся категория.

На общем Home:

- не beauty professionals / мастера красоты / салоны как единственная аудитория;
- `small studios` допустимо в нишевой странице, но для общего eyebrow **small teams** шире и понятнее преподавателю;
- `мастер` заменить на `специалист` в общем маркетинговом тексте; не менять реальные app labels и названия услуг;
- massage/tutoring/beauty — примеры общей модели по записи, не обещание медицинской документации, LMS/журнала успеваемости, групповых курсов или всех профессий;
- существующий colorist mock dataset сохраняется с Example data. Имя услуги окрашивания в примере не равно beauty-only позиционированию. Новая иллюстрационная программа не нужна.

**Порядок сообщения:** короткий eyebrow → две выгоды в одном H1 → одно предложение с тремя действиями → CTA → честные условия trial. Не возвращать пакеты/команду/доходы в hero body, «в одном месте», «наконец-то», «и многое другое».

## 2. Источник значений RU / EN по ключам

Все keys ниже — внутри `home.json`, без префикса `home.`.
Статусы:

- **A RU / D EN:** RU дословно утверждён; EN адаптация, не owner freeze.
- **S:** взято из текущей RU/EN реализации, смысл сохраняется; это не подтверждение релиза или native review.
- **R:** рекомендуемая узкая правка — общее позиционирование, ясность термина или устранение двусмысленности. Не выдавать за дословный owner-approved текст.

Это **80 пар**, а не поручение переписать все messages. Переносить только затронутый scope и проверять фактических consumers.

| Ключ | RU source | EN source / adaptation | Статус |
|---|---|---|---|
| `hero.eyebrow` | Для самостоятельных специалистов и небольших команд | For independent professionals and small teams | R |
| `hero.title` | Порядок в записях. | Order in your schedule. | A RU / D EN |
| `hero.accent` | Ясность в оплатах. | Clarity in your payments. | A RU / D EN |
| `hero.body` | Планируйте визиты, ведите историю клиентов и отмечайте оплаты. | Schedule appointments, build client history and record payments. | A RU / D EN |
| `hero.signup` | Попробовать 21 день | Start 21-day trial | A RU / D EN |
| `hero.how` | Посмотреть, как это работает | See how it works | A RU / D EN |
| `hero.trialMicro` | 21 день STUDIO без карты. После пробного периода оформите подписку. | 21 days of STUDIO, no card required. Subscribe when your trial ends. | A RU / D EN |
| `hero.micro` | Подтвердите email по ссылке в письме, чтобы завершить настройку. | You'll get a verification email to finish setting up. | S |
| `hero.deviceMicro` | Perelai работает в вашем браузере. Установка необязательна. | Perelai runs in your browser. Installing it is optional. | S |
| `hero.imageAlt` | Пример Perelai: расписание визитов и финансовый обзор. | Example Perelai appointment calendar and finance overview. | S |
| `hero.imageCaption` | Пример данных | Example data | S |
| `nav.start` | Попробовать 21 день | Start 21-day trial | S |
| `nav.start_short` | Попробовать | Try it | R |
| `operations.title` | От записи до завершённого визита. | From appointment to completed visit. | S |
| `operations.body` | Запишите клиента, проведите визит, затем зафиксируйте оплату или используйте пакет. Задачи, требующие решения, остаются во входящих. | Schedule the client, complete the visit, then record a payment or apply a package. Items needing a decision stay in your Inbox. | S |
| `records.title` | Видно, за что учтена оплата. | See what each payment was for. | S |
| `records.body` | Запись об оплате связана с визитом или заказом клиента. Использование пакета показывается отдельно от новых денег. | Payment records stay connected to the client visits or orders they relate to. Package use stays separate from new money received. | S |
| `packages.title` | Остаток пакета — под рукой. | Keep track of what's left in a package. | S |
| `packages.body` | Создавайте пакеты услуг и оформляйте их продажу клиентам. Следите за использованием и остатком пакета. | Create prepaid service packages and record their sale to clients. Track usage and what remains in each package. | S |
| `packages.summary` | Пример использования пакета: из трёх посещений использовано одно, осталось два. Новая оплата не поступает. | Example package use: one of three visits is used, leaving two. No new payment is received. | S |
| `packages.caption` | Пример данных | Example data | S |
| `drawer.title` | Сверяйте наличные в конце дня. | Check your cash at the end of the day. | S |
| `drawer.body` | Откройте кассовую смену до приёма наличных. В конце смены введите пересчитанную сумму и сравните её с ожидаемой. | Open a cash drawer session before receiving cash. At closing, enter your cash count and compare it with the expected amount. | S |
| `drawer.summary` | Пример кассовой смены в USD: открытие — 100, принято наличными — 50, ожидается — 150, пересчитано — 145, расхождение — −5. | Example cash drawer session in USD: opening count 100, cash received 50, expected 150, counted 145, difference −5. | R |
| `drawer.caption` | Пример данных | Example data | S |
| `collaboration.title` | Работайте самостоятельно или с командой. | Work solo or bring in your team. | S |
| `collaboration.body` | Приглашайте участников с нужным доступом. Для специалистов ведите расписание, периоды отсутствия и назначенные услуги. | Invite people with the appropriate access. Manage schedules, time off and assigned services for your service professionals. | R |
| `collaboration.teamTitle` | Ваша команда | Your team | S |
| `collaboration.teamBody` | Приглашайте участников с нужным доступом. Для специалистов ведите расписание, периоды отсутствия и назначенные услуги. | Invite people with the appropriate access. Manage schedules, time off and assigned services for your service professionals. | R |
| `collaboration.notesDetail` | Закрепленные заметки о клиенте и заметки к визитам остаются в истории клиента. | Pinned client notes and visit notes stay with the client history. | S |
| `collaboration.summary` | Пример рабочего пространства Perelai с ролями команды, графиками и закрепленной заметкой клиента в рамках одной компании. | Example Perelai workspace showing team roles, schedules and a pinned client note inside one business. | S |
| `collaboration.caption` | Пример данных | Example data | S |
| `collaboration.accessTitle` | Помощь с записью и учётом оплат. | Help with appointments and payment records. | R |
| `collaboration.accessBody` | Администратор помогает с записями и разрешёнными действиями по оплатам клиентов, без доступа к общей финансовой отчётности. | An administrator helps with appointments and permitted client payment actions, without access to overall financial reports. | R |
| `collaboration.accessSummary` | Пример доступа: администратор без профиля исполнителя. | Example workspace access: Administrator, with no service-professional profile. | S |
| `collaboration.planNote` | Доступ команды — в STUDIO. Администратор, который не оказывает услуги, не занимает место специалиста в лимите тарифа. | Team access is part of STUDIO. An administrator who does not provide services does not count toward the service-professional limit. | R |
| `finance.title` | Выручка, расходы и прибыль за выбранный период. | Revenue, costs and profit for your chosen period. | S |
| `finance.body` | Проверяйте выручку, учтённые расходы и рассчитанную прибыль. Использование ранее оплаченного пакета не добавляет новую выручку. | Review revenue, recorded costs and calculated profit. Using a prepaid package does not add new revenue. | S |
| `finance.summary` | Пример финансового обзора Perelai с месячной выручкой, расходами и расчётной прибылью, разбивкой по категории услуг и остатком по открытым заказам. | Example Perelai finance overview showing monthly revenue, costs and calculated profit, a service-category breakdown and an open-order balance. | S |
| `finance.caption` | Пример данных | Example data | S |
| `states.title` | Выполненная работа, выручка, зафиксированные платежи и задолженность по открытым заказам учитываются отдельно. | Completed work, revenue, payments and open-order balances are tracked separately. | S |
| `drivers.title` | Посмотрите, из чего складывается результат. | See what makes up your results. | S |
| `drivers.body` | Выручка по категориям услуг и клиентам, расходы по категориям и сравнение периодов. | Explore revenue by service category and client, costs by category, and changes between periods. | S |
| `setup.eyebrow` | Как это работает | How it works | S |
| `setup.title` | Начните со своих услуг и клиентов. | Start with your services and clients. | S |
| `setup.body` | Настройте услуги, перенесите контакты и поделитесь ссылкой для записи. | Set up your services, import contacts and share your booking link. | S |
| `setup.step1Title` | Настройте услуги. | Set up your services. | S |
| `setup.step1Body` | Выберите подходящий шаблон и отредактируйте список услуг. | Choose a suitable template and edit the service list. | S |
| `setup.step2Title` | Перенесите контакты. | Import your contacts. | S |
| `setup.step2Body` | Импортируйте контакты с телефона через vCard. | Bring contacts from your phone using vCard. | S |
| `setup.step3Title` | Поделитесь ссылкой. | Share your booking link. | S |
| `setup.step3Body` | Клиенты выбирают услугу и время на вашей странице записи. | Clients choose a service and time on your booking page. | S |
| `not.title` | Чем Perelai НЕ является | What Perelai is not | S |
| `not.body` | Если вам нужно что-то из этого списка — мы вам не подойдем, и честно говорим об этом сразу. | If you need any of these, we are not the right fit — and we would rather say so. | S |
| `not.item1Title` | Не бухгалтерская программа | Not accounting software | S |
| `not.item1Body` | Учёт работы и оплат — не бухгалтерская или налоговая отчётность. | Work and payment tracking, not accounting or tax reporting. | S |
| `not.item2Title` | Не маркетплейс | Not a marketplace | S |
| `not.item2Body` | Клиенты записываются напрямую по вашей ссылке — без посредника-маркетплейса. | Clients book directly through your link, without a marketplace intermediary. | R |
| `not.item3Title` | Не медицинская система | Not a medical record system | S |
| `not.item3Body` | Perelai не предназначен для клинических записей, учёта диагнозов или управления лечением пациентов. | No clinical records, no diagnosis tracking, no patient treatment management. | S |
| `faq.title` | Часто задаваемые вопросы | Questions | S |
| `faq.q1` | Как клиенты записываются? | How do clients book? | S |
| `faq.a1` | Поделитесь своей ссылкой. Клиенты выбирают услугу и время на вашей странице записи. | Share your booking link. Clients choose a service and time on your booking page. | S |
| `faq.q2` | Есть ли пробный период и нужна ли карта? | Is there a trial, and do I need a card? | S |
| `faq.a2` | 21 день STUDIO без карты. Пробный период начинается после настройки бизнеса. Дата окончания видна в приложении. | Try STUDIO for 21 days without a card. Your trial starts after business setup. The app shows your end date. | S |
| `faq.q3` | Что произойдёт после пробного периода? | What happens when the trial ends? | S |
| `faq.a3` | Чтобы продолжить работу, оформите подписку. Без подписки или другого действующего доступа работа ограничивается. Само окончание пробного периода не удаляет данные. | Subscribe to keep working. Without a subscription or another valid source of access, work is restricted. Trial expiry itself does not delete your data. | S |
| `faq.q4` | Можно ли работать с командой? | Can I work with a team? | S |
| `faq.a4` | Да, в STUDIO: до 5 активных специалистов и доступ команды. Администратор, который не оказывает услуги, не занимает место специалиста в лимите тарифа. | Yes. STUDIO supports up to 5 active service professionals and team access. An administrator who does not provide services does not count toward that limit. | R |
| `faq.q5` | Пакет услуг — это подписка? | Is a prepaid package a subscription? | S |
| `faq.a5` | Нет. Клиент заранее оплачивает объём услуг, который использует на подходящих визитах. Это не регулярное списание и не подписка Perelai. | No. A client prepays for services to use on eligible visits. It is not a recurring charge or a Perelai subscription. | S |
| `faq.q6` | Это бухгалтерия или приём платежей? | Is this accounting software or a payment processor? | S |
| `faq.a6` | Нет. Perelai помогает вести записи, клиентов и учёт оплат. Это не бухгалтерская или налоговая отчётность и не сервис приёма карт. | No. Perelai helps manage appointments, clients and payment records. It does not provide accounting or tax reporting, or process your clients' card payments. | S |
| `closing.title` | Попробуйте Perelai в своей следующей рабочей неделе. | Try Perelai in your next working week. | S |
| `closing.body` | Начните со своего расписания и клиентов. | Start with your own schedule and clients. | S |
| `closing.cta` | Попробовать 21 день | Start 21-day trial | S |
| `closing.micro` | Подтвердите email по ссылке в письме, чтобы завершить настройку. | You'll get a verification email to finish setting up. | S |
| `meta.title` | Perelai — запись, клиенты и учёт оплат | Perelai — Appointments, Clients & Payment Tracking | S |
| `meta.description` | Расписание, история клиентов, учёт оплат и пакетов услуг для самостоятельных специалистов и небольших команд. | Appointments, client history, payment records and prepaid service packages for independent professionals and small teams. | R |
| `footer.description` | Запись, клиенты и учёт оплат для самостоятельных специалистов и небольших команд. | Appointments, clients and payment tracking for independent professionals and small teams. | R |

Примечания:
1. RU H1 в текущем JSON потерял точки, но source выше сохраняет owner freeze. EN точки здесь — редакторская нормализация, не доказательство его approval.
2. `collaboration.body/teamBody` могут сейчас повторяться из-за существующей структуры. Не превращать устранение повторения в redesign; при точечном сокращении сохранять смысл ролей/расписаний.
3. `drawer.summary` предполагает предложенную fixed demo currency **USD**. Если fixture выбрана другая, изменить её и summary совместно; SaaS price currency не выводить из demo.
4. `faq.a2` — короткий Home-ответ. В Pricing сохранить точную политику: первый подходящий завершённый setup, один trial на плательщика; новое пространство срок не перезапускает. Не добавлять эти детали целым абзацем в hero.
5. В `not.item2Body` удалено старое RU «без комиссий»: отсутствие marketplace ≠ утверждённая политика fees.
6. `client checkout` в описании app permissions не переводить как банковский эквайринг. В маркетинге выше — разрешённые действия по оплатам; ограничения общей отчётности сохраняются.
7. Текущие unused `money.* / inbox.* / booking.* / faq.q_category / q_bank / faq.q7–8` не копировать вслепую. Сначала проверить consumers. Home JSON-LD featureList должен использовать действующие локализованные формулировки; FAQ schema совпадает с шестью реально показанными вопросами.

## 3. Терминологические инварианты RU → EN

| Понятие | Предпочтительно RU | EN | Не путать / не обещать |
|---|---|---|---|
| Категория пользователя | самостоятельный специалист | independent professional | Не master, craftsman, sole trader во всех контекстах: последнее может обозначать правовой статус |
| Малый коллектив | небольшая команда | small team | Не салон как единственный бизнес; не enterprise |
| Исполнитель, тарифная единица | активный специалист, оказывающий услуги | active service professional | Не любой login/user/member. Работающий owner входит в лимит |
| Пользователь с доступом | участник команды с доступом | team member with access | Не обязательно оказывает услуги и занимает performer place |
| Администратор | администратор | administrator | Не SUPERVISOR / Business manager; не полный доступ к Finance |
| Запись | запись в расписании | appointment / booking по контексту | Не клиентская запись в базе; не subscription |
| Визит / сессия | визит; для ниши занятие/сеанс | visit / session по контексту | Это выполнение запланированной услуги, не новая app-сущность |
| История | история клиента | client history | Не medical record или клиническая карта |
| Учёт оплат | отмечать/учитывать оплаты | record payments / payment tracking | Не take/process payments, acquiring, bank sync |
| Пакет | предоплаченный пакет услуг | prepaid service package | Не SaaS subscription, membership club или регулярное списание |
| Использование пакета | использовать / списать единицу пакета | use / redeem package credit | Ноль новой оплаты и дополнительной выручки; не бесплатная услуга |
| Остаток пакета | оставшиеся услуги/посещения | remaining services / visits | Не долг клиента и не денежный остаток счёта |
| Подписка продукта | подписка Perelai | Perelai subscription | Отдельно от клиентского пакета и recurring appointments |
| Пробный период | 21 день STUDIO без карты | 21-day STUDIO trial, no card required | Не free forever, не все возможности независимо от роли, не списание автоматически на 22-й день |
| Пространство | рабочее пространство | workspace | Тариф за workspace, не за каждого клиента/login |
| Выручка | выручка | revenue | Не любые денежные поступления и не вся cash drawer |
| Тип движения денег | доход/поступление — по контексту операции | income / money received | Не заменять этим Revenue в названии метрики |
| Расходы | учтённые расходы | recorded costs | Не исчерпывающая бухгалтерия и не налоги |
| Прибыль | рассчитанная прибыль | calculated profit | Не гарантированный чистый доход; формула только по подтверждённому контракту |
| Касса | учёт и сверка наличных | cash tracking / cash reconciliation | Не фискальный аппарат, POS terminal или эквайринг |
| Кассовая смена | кассовая смена | cash drawer session | Не payroll shift и не смена расписания сотрудника |
| Расхождение | пересчитано минус ожидается | counted minus expected | Не автоматически созданный расход/изъятие |
| Остаток по заказу | задолженность по открытому заказу | amount owed on an open order | Не общий голый balance; Account Balance — другое |
| Повторяющаяся запись | регулярные записи | recurring appointments | Не recurring charge |

Бренды/plan names **Perelai, SOLO, STUDIO, STUDIO+** не переводить. `Administrator` и прочие UI labels внутри preview берутся из app export; таблица выше регулирует prose, а не подменяет source UI.

## 4. Согласованный словарь для остальных опубликованных языков

Цели: **uk, pl, es, fr, de, pt, tr**. `it` отсутствует в PUBLISHED_LOCALES — не включать его в этот pass. Сохранять текущий стиль обращения: UK/RU вежливое множественное, PL Ty, ES tú, FR vous, DE Sie, PT бразильский стиль текущего сайта (você), TR вежливое -in/-ın. Не смешивать PT-BR и PT-PT внутри одного pass. Это editorial convention на основе текущих strings, не выбор страны запуска.

Таблицы — предпочтительные **маркетинговые** эквиваленты. Изменение падежа/числа по контексту обязательно. Реальные названия app controls имеют отдельный source (§6).

| Понятие | UK | PL | ES | FR |
|---|---|---|---|---|
| independent professional | незалежний фахівець | niezależny specjalista | profesional independiente | professionnel indépendant |
| small team | невелика команда | mały zespół | equipo pequeño | petite équipe |
| appointment | запис | wizyta / termin | cita | rendez-vous |
| visit / service session | візит / сеанс | wizyta / sesja | cita / sesión | rendez-vous / séance |
| client history | історія клієнта | historia klienta | historial del cliente | historique client |
| record payments | фіксувати оплати | rejestrować płatności | registrar pagos | enregistrer les paiements |
| prepaid service package | передплачений пакет послуг | przedpłacony pakiet usług | paquete de servicios prepagado | forfait de prestations prépayé |
| use a package | використати пакет | wykorzystać pakiet | usar un paquete | utiliser un forfait |
| remaining sessions | решта сеансів | pozostałe sesje | sesiones restantes | séances restantes |
| Perelai subscription | підписка Perelai | subskrypcja Perelai | suscripción a Perelai | abonnement Perelai |
| trial period | пробний період | okres próbny | período de prueba | période d’essai |
| no card required | без картки | bez karty | sin tarjeta | sans carte bancaire |
| workspace | робочий простір | przestrzeń pracy | espacio de trabajo | espace de travail |
| team access | доступ команди | dostęp dla zespołu | acceso del equipo | accès de l’équipe |
| administrator | адміністратор | administrator | administrador | administrateur |
| service-professional limit | ліміт фахівців, які надають послуги | limit osób świadczących usługi | límite de profesionales que prestan servicios | limite de professionnels qui assurent les prestations |
| revenue | виручка | przychód | ingresos | chiffre d’affaires |
| money received | отримані кошти | otrzymane środki | cobros recibidos | encaissements |
| recorded costs | обліковані витрати | zarejestrowane koszty | costes registrados | dépenses enregistrées |
| calculated profit | розрахований прибуток | obliczony zysk | beneficio calculado | bénéfice calculé |
| cash reconciliation | звірка готівки | porównanie gotówki przeliczonej z oczekiwaną | comprobación del efectivo contado frente al esperado | rapprochement des espèces comptées et attendues |
| cash drawer session | касова зміна | sesja kasowa | sesión de caja | session de caisse |
| expected / counted | очікується / перераховано | oczekiwana / przeliczona kwota | esperado / contado | attendu / compté |
| difference | розбіжність | różnica | diferencia | écart |
| Example data | Приклад даних | Przykładowe dane | Datos de ejemplo | Données d’exemple |

| Понятие | DE | PT | TR |
|---|---|---|---|
| independent professional | selbstständige Fachkraft | profissional independente | bağımsız profesyonel |
| small team | kleines Team | pequena equipe | küçük ekip |
| appointment | Termin | agendamento | randevu |
| visit / service session | Termin / Sitzung | atendimento / sessão | randevu / seans |
| client history | Kundenhistorie | histórico do cliente | müşteri geçmişi |
| record payments | Zahlungen erfassen | registrar pagamentos | ödemeleri kaydetmek |
| prepaid service package | im Voraus bezahltes Leistungspaket | pacote de serviços pré-pago | ön ödemeli hizmet paketi |
| use a package | ein Paket nutzen | usar um pacote | paket kullanmak |
| remaining sessions | verbleibende Termine / Sitzungen | sessões restantes | kalan seanslar |
| Perelai subscription | Perelai-Abonnement | assinatura do Perelai | Perelai aboneliği |
| trial period | Testphase | período de teste | deneme süresi |
| no card required | ohne Karte | sem cartão | kart gerekmez |
| workspace | Arbeitsbereich | espaço de trabalho | çalışma alanı |
| team access | Teamzugriff | acesso da equipe | ekip erişimi |
| administrator | Administrator | administrador | yönetici |
| service-professional limit | Limit der Personen, die Leistungen erbringen | limite de profissionais que prestam serviços | hizmet sunan kişi sınırı |
| revenue | Umsatz | receita | ciro |
| money received | erhaltene Zahlungen | valores recebidos | alınan ödemeler |
| recorded costs | erfasste Kosten | custos registrados | kaydedilen giderler |
| calculated profit | berechneter Gewinn | lucro calculado | hesaplanan kâr |
| cash reconciliation | Abgleich des gezählten und erwarteten Bargelds | conferência do dinheiro contado e esperado | sayılan ve beklenen nakdin karşılaştırılması |
| cash drawer session | Kassensitzung | sessão de caixa | kasa oturumu |
| expected / counted | erwartet / gezählt | esperado / contado | beklenen / sayılan |
| difference | Differenz | diferença | fark |
| Example data | Beispieldaten | Dados de exemplo | Örnek veriler |

В ES/PL денежные термины могут совпадать в общем языке; смысл уточняется контекстом `recorded / received / revenue`. Не переименовывать существующие графики ради этой таблицы. В TR `yönetici` слишком широко для различения двух app ролей — в конкретном UI использовать именно экспортированную пару ADMINISTRATOR/SUPERVISOR, не этот общий перевод.

## 5. Hero — готовые локализованные кандидаты для применения и вычитки

Семантика взята из RU freeze и текущего EN. Каждая пара title/accent остаётся одним H1. Это **DRAFT**, не заявление о native review. Body не добавляет пакеты, команду, зарплаты, автоматизацию или эквайринг.

| Locale | eyebrow | title | accent |
|---|---|---|---|
| uk | Для незалежних фахівців і невеликих команд | Порядок у записах. | Ясність в оплатах. |
| pl | Dla niezależnych specjalistów i małych zespołów | Porządek w terminarzu. | Jasny obraz płatności. |
| es | Para profesionales independientes y equipos pequeños | Tu agenda, en orden. | Tus pagos, claros. |
| fr | Pour les professionnels indépendants et les petites équipes | Des rendez-vous bien organisés. | Des paiements bien suivis. |
| de | Für selbstständige Fachkräfte und kleine Teams | Ordnung im Terminplan. | Klarheit über Ihre Zahlungen. |
| pt | Para profissionais independentes e pequenas equipes | Sua agenda em ordem. | Clareza nos pagamentos. |
| tr | Bağımsız profesyoneller ve küçük ekipler için | Randevularınızda düzen. | Ödemelerinizde netlik. |

| Locale | body | signup | how |
|---|---|---|---|
| uk | Плануйте візити, ведіть історію клієнтів і фіксуйте оплати. | Спробувати 21 день | Подивитися, як це працює |
| pl | Planuj wizyty, prowadź historię klientów i rejestruj płatności. | Wypróbuj przez 21 dni | Zobacz, jak to działa |
| es | Planifica citas, guarda el historial de tus clientes y registra los pagos. | Probar durante 21 días | Ver cómo funciona |
| fr | Planifiez vos rendez-vous, conservez l’historique de vos clients et enregistrez les paiements. | Essayer pendant 21 jours | Voir comment ça fonctionne |
| de | Planen Sie Termine, führen Sie Kundenhistorien und erfassen Sie Zahlungen. | 21 Tage testen | So funktioniert es |
| pt | Agende atendimentos, mantenha o histórico dos clientes e registre pagamentos. | Testar por 21 dias | Veja como funciona |
| tr | Randevuları planlayın, müşteri geçmişini tutun ve ödemeleri kaydedin. | 21 gün deneyin | Nasıl çalıştığını görün |

| Locale | trialMicro |
|---|---|
| uk | 21 день STUDIO без картки. Після пробного періоду оформіть підписку. |
| pl | 21 dni STUDIO bez karty. Po okresie próbnym wykup subskrypcję. |
| es | 21 días de STUDIO sin tarjeta. Suscríbete al terminar el período de prueba. |
| fr | 21 jours de STUDIO sans carte bancaire. Souscrivez un abonnement à la fin de l’essai. |
| de | 21 Tage STUDIO ohne Karte. Schließen Sie nach der Testphase ein Abonnement ab. |
| pt | 21 dias de STUDIO sem cartão. Assine após o período de teste. |
| tr | STUDIO’yu 21 gün kart gerekmeden deneyin. Deneme süresi sonunda abonelik satın alın. |

Общий compact CTA сохраняет число 21. Не переводить «попробовать» как «купить сейчас», «активировать платную подписку» или «скачать приложение». `how` ведёт на согласованный существующий anchor, не на несуществующее видео.

## 6. Marketing messages ≠ точные app UI strings

Этот словарь **не разрешает вручную перенести слова в mock JSX**.

| Fragment | Проверенные source paths / key families | Правило |
|---|---|---|
| Package | app `PackageCreditBadge.tsx`: `memberships.package_credit_applied/available/extra`; `ClientPackagesHistorySheet.tsx`/реальный checkout для остатка | Посмотреть namespace реального caller; у badge профильный namespace. Не придумывать ключ остатка или единицы по его названию |
| Access | `WorkspaceAccessFormFields.tsx`: `staff_management.access_role`, `role_administrator_title/desc`, `service_provision_label`, `service_mode_none/none_desc` | Взять labels из app по выбранному source commit и правильному namespace. Не “Role / Service professional / Yes / No” из фикстуры |
| Drawer OPEN | `CashDrawerSummary.tsx`: `cash_drawer.open`, `summary_opening`, `summary_receipts`, `summary_expected`, остальные реально показанные rows | common namespace. Не добавлять labels закрытия в OPEN как будто это один экран |
| Drawer close | `CloseCashDrawerSheet.tsx`: `close_preview_title`, `preview_expected`, `preview_counted`, `shortage/surplus/counts_match` | common namespace; shortage/surplus имеют `{{amount}}`; передавать locale-formatted amount по правилам app |

Список подтверждает существование keys в source, но не что они уже попали в landing export. На срезе review они **не экспортированы**. Exact UI labels могут быть менее естественны, чем marketing prose: не «улучшать» их в landing отдельно от app. В примере остаются синтетические данные и локализованная подпись Example data.

## 7. Что ещё включить в locale pass

- `hero.showcase.pauseAutoplay/resumeAutoplay` сейчас английские в RU/UK и остальных языках. Это реальный доступный control text, а не harmless fixture. Добавить локализованные «Приостановить автоматическое переключение» / «Возобновить автоматическое переключение» с сохранением поведения компонента.
- Не менять механически `hero.showcase.paid/pending`: сначала проверить смысл текущего календарного dataset; PAID может означать расчёт закрыт пакетом без поступления денег.
- New summaries/captions и aria — часть той же локализации, не разрешённый обход скрытым EN.
- Применить общий audience wording к Home meta/footer, `lib/site.ts`, актуальным shared descriptions и публичным machine-readable summaries в scope POS3. Не заменять niche-specific аудитории внутри нишевых URL.
- `closing.cta`, `nav.start`, общий signup helper используют тот же смысл trial. `/install` не переписывать: только реально общие коммерческие строки, если они противоречат запуску.
- Price microcopy хранит `{soloPrice}`, `{studioPrice}`; лимиты — из approved display artifact. Не превращать 19/29 в независимо написанные цены для девяти локалей. До BILL7 не публиковать тестовый catalog.
- Сохранить vCard, browser-first/optional install и device contract. Не добавлять store/native/offline/push claim из перевода.
- Clinical disclaimer остаётся и для массажистов. «Подходит преподавателю» не означает образовательный функционал, которого нет.

## 8. Prompt: применить vocabulary в POS3 без расширения scope

```text
Выполни только локализационную часть POS3 для landing на основе
.cursor/plans/positioning/04_home_copy_vocabulary_ru_en_20260921.md.
Сначала прочитай review 03 и текущее состояние R1/R2; не маскируй их переводами.

Skills: product-marketing → copy-editing; copywriting для естественных адаптаций.
Прочитай SKILL.md и обязательные references. Один короткий semantic review,
не новый комитет и не исследование всех профессий.

1. Зафиксируй HEAD/status. Не трогай чужие изменения и app source. Не deploy.
2. Источник — RU owner freeze (6 строк) + EN/семантика §2 vocabulary.
   Сохрани общее позиционирование, не beauty-only. R-строки — предложенные уточнения;
   применённые изменения запиши old/new/reason без выдачи нового approval.
3. Приведи RU/EN source к согласованной рамке; RU 6 строк дословно, включая точки.
   Адаптируй изменённые ключи для uk/pl/es/fr/de/pt/tr; готовые hero candidates §5 —
   стартовый вариант. Не делай побуквенный перевод, если он неестественен.
   Никаких изменения смысла, гарантий, acquiring или free-forever.
4. Бери 80 пар из §2 как manifest scope. Дополни только ключами фактических новых
   controls/summaries и активных machine-readable consumers из §§6–7.
   Существующие nicheRouter, конкретные fixture/services и device text не переписывай
   под общую аудиторию. Не локализуй произвольно app UI внутри JSX.
5. UI labels — только app-generated export после R1/R2. Marketing glossaries — только
   prose. Для placeholders различай i18next {{count}} и next-intl {count};
   правильно применяй plural/interpolation и форматирование locale.
6. Проверяй raw messages/<locale>/home.json ДО merge:
   новые ключи существуют, нет пустых/скопированных английских paragraphs,
   placeholder sets совпадают, язык aria верный. Одинаковые бренды, USD, vCard и
   Demo names не считать ошибкой. Не требуй, чтобы вообще каждый текст отличался от EN.
   Добавь runtime render checks, но не подменяй ими raw coverage.
7. FAQ UI/schema согласованы, analytics IDs не зависят от позиции. Meta/footer/site
   и featureList не оставляют beauty-only/finance-first хвостов или EN fallback.
   Scope Pricing/BILL7 сохранить из основного POS3, не выдумывать цену/offer.
8. Run typecheck, lint, tests, verify:niches, build с тем же clean source checkout,
   git diff --check. Browser smoke: RU/EN/UK/PL + самая длинная DE/FR строка,
   320/390/768/1366, обе темы; отсутствие overflow и доступность CTA.
   Остальные локали — raw checks + render; visual PASS только по реально проверенным.
9. Допиши короткий locale handoff в docs/launch-positioning-checklist.md:
   source revision, список keys, review status, реальные проверки, остаток POS3/POS4.
   Не утверждай native review/production release. Не переписывай app previews.
```

**Готово:** один смысл во всех девяти published locales без beauty-only рамки, не смешаны Revenue/поступления/пакет/подписка, raw-key checks не зависят от английского fallback, RU owner freeze сохранён. Остальные коммерческие release gates принадлежат POS3/POS4/BILL/TEAM, не этому vocabulary.
