import { lashArtistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai dla niezależnych stylistek rzęs",
    description: "Trzymaj rezerwacje rzęs, pracę z klientkami i pieniądze w zasięgu wzroku, gdy DM-y zaburzają dzień.",
    ogImageAlt: "Przestrzeń pracy Perelai dla niezależnej stylistki rzęs z wizytami, kalendarzem i podsumowaniem pieniędzy",
  },
  hero: {
    eyebrow: "Dla niezależnych stylistek rzęs",
    h1: "Nie możesz odpowiadać na DM-y przez cały dzień.",
    subhead: "Trzymaj przedłużanie rzęs, uzupełnienia i faktycznie otrzymane pieniądze w jednej przestrzeni pracy, aby spóźniona klientka nie oznaczała wieczornego odtwarzania dnia.",
    mock: "lash-workspace",
  },
  pains: [
    { title: "Prośba o rezerwację nie powinna ginąć w DM-ach", body: "Dostępność, pytanie o zaliczkę, zdjęcie referencyjne i zmiana terminu nie powinny zmuszać Cię do przeszukiwania wiadomości między klientkami. Wątek pełen zrzutów ekranu nie jest dobrym miejscem na rozpoczęcie dnia z usługami." },
    { title: "Jeden zablokowany termin może zmienić cały dzień", body: "Lifting i henna rzęs nie zmieszczą się w czasie przeznaczonym na uzupełnienie rzęs, a spóźniony nowy zestaw przesuwa kolejne usługi. Kalendarz powinien odzwierciedlać faktyczną pracę, a nie jeden ogólny typ wizyty." },
    { title: "Twój czas, materiały i pieniądze potrzebują jednego widoku", body: "Zapisuj faktycznie otrzymane pieniądze, trzymaj kleje i akcesoria przy pracy oraz zobacz zaległości bez odtwarzania tygodnia w arkuszu. Ruchliwy wtorek nie powinien kończyć się pytaniem, ile zostało po materiałach i kosztach." },
    { title: "Poprzednia wizyta powinna być łatwa do znalezienia", body: "Gdy stała klientka prosi o uzupełnienie, jej Wizyty, notatki i płatności należą do jej historii. Nie powinnaś przewijać starych DM-ów tuż przed przygotowaniem stanowiska." },
    { title: "Ostatnia wiadomość nie powinna zajmować całego wieczoru", body: "Klientki nadal mogą zadawać pytania bezpośrednio. Zwykłe rezerwacje mogą przejść na Twój własny link, aby po ostatniej klientce nie sprawdzać dostępności aż do snu." },
  ],
  dayInLife: {
    title: "Gdy grafik się zmienia, nadal widzisz, co wymaga uwagi.",
    body: "Perelai trzyma najważniejsze części dnia stylistki rzęs na widoku, od porannej regulacji brwi po pieniądze zapisane po ostatnim uzupełnieniu. Chodzi nie o uogólnienie rzemiosła, lecz o wiarygodne miejsce poza skrzynką wiadomości dla dokładnego zestawu usług, historii klientki, kosztu materiałów i niedokończonej decyzji.",
    steps: [
      { title: "Brwi mają jasny początek", body: "Umieść Regulację Brwi, Hennę Brwi i Laminację Brwi jako osobne usługi z własnym czasem. Poranna praca przy brwiach nie powinna zlewać się z dłuższym zestawem rzęs." },
      { title: "Lifting dostaje potrzebny czas", body: "Trzymaj Lifting i Hennę Rzęs w kalendarzu, zanim szybsze usługi wokół niego zaczną się przesuwać. Gdy ktoś pyta o wolny termin, najpierw widzisz prawdziwy kształt dnia." },
      { title: "Nowy zestaw ma swoje miejsce", body: "Dodaj Przedłużanie Rzęs jako Wizytę z danymi klientki i czasem, którego potrzebuje, zamiast trzymać plan wyłącznie w wątku wiadomości. Wizyta łączy usługę, notatki i zapisaną aktywność pieniężną." },
      { title: "Uzupełnienie pozostaje połączone", body: "Trzymaj Uzupełnienie Rzęs w kalendarzu razem z resztą dnia, zamiast szukać szczegółów w ostatniej wiadomości. Powracającą klientkę można przygotować bez odtwarzania jej historii z pamięci." },
      { title: "Kolejna rezerwacja jest świadomym wyborem", body: "Korzystaj z czasu, który naprawdę widzisz, gdy klientka pyta o dostępność. Własny link do rezerwacji pozwala wybrać usługę, osobę i czas bez osobnej rozmowy o każdym wolnym miejscu na Instagramie." },
      { title: "Lista usług pozostaje rozpoznawalna", body: "Trzymaj nazwy, które znają klientki, od Laminacji Brwi po Przedłużanie Rzęs, na edytowalnej liście usług. Gdy menu się zmienia, poprawiasz listę startową bez zamieniania strony rezerwacji w ogólny katalog salonu." },
      { title: "Praca z rzęsami ma własny rytm", body: "Oczyszczanie, izolacja, aplikacja, wybór skrętu i retencja są częścią pracy wokół usługi rzęs. Regulacja Brwi, Lifting i Henna Rzęs oraz nowy zestaw nie wymagają tego samego czasu, skupienia ani przygotowania." },
      { title: "Powracająca klientka nie jest pustym terminem", body: "Rozmowa o uzupełnieniu może zacząć się od historii Wizyty, notatek i aktywności płatniczej klientki, a nie od nowej wiadomości z prośbą o przypomnienie sobie szczegółów. To lepszy punkt wyjścia przed decyzją o następnej usłudze." },
      { title: "Materiały mają swoje miejsce przy usłudze", body: "Połącz Kleje i Akcesoria z właściwą pracą, zamiast trzymać wydatki w osobnym stosie paragonów, notatek i zapamiętanych zakupów. Koszt trafia do widoku pieniędzy dla pracy, która go użyła." },
      { title: "Pieniądze i otwarte sprawy są widoczne", body: "Zapisz otrzymane pieniądze, połącz kleje i akcesoria, a następną decyzję zostaw w Skrzynce. Koniec dnia to lista do przejrzenia, a nie powiadomienia znikające po przeczytaniu." },
      { title: "Zapis płatności ma wyraźne zakończenie", body: "Gdy po regulacji brwi, liftingu, nowym zestawie lub uzupełnieniu zapisujesz faktycznie otrzymane pieniądze, Potwierdzenie płatności daje klientce link do otwarcia. Wykonana praca i otrzymane pieniądze pozostają osobne." },
      { title: "Jutro zaczyna się od prawdziwej listy", body: "Pytanie bez odpowiedzi, kwota do rozliczenia lub zadanie po Wizycie pozostają widoczne w Skrzynce. Przeczytanie powiadomienia nie usuwa pracy, więc poranek nie zaczyna się od odtwarzania pominiętych spraw." },
    ],
  },
  terminology: [
    { theirWord: "Termin Regulacji Brwi, Henny Brwi lub Laminacji Brwi", perelaiWord: "Wizyta", why: "Trzymaj nazwaną usługę, notatki o klientce i płatność razem, nawet gdy praca przy brwiach znajduje się między dłuższymi usługami rzęs." },
    { theirWord: "Lifting i Henna Rzęs, Przedłużanie Rzęs lub Uzupełnienie Rzęs", perelaiWord: "Wizyta", why: "Każdy rodzaj pracy z rzęsami ma własne miejsce w kalendarzu, zamiast jednego bloku, który przestaje pasować po spóźnieniu." },
    { theirWord: "Pakiet Henna Rzęs i Brwi dodany do usługi", perelaiWord: "Dodatki", why: "Dołącz dodatkową pracę do Wizyty, której dotyczy, aby zapis pokazywał to, co rzeczywiście wydarzyło się przy stanowisku." },
    { theirWord: "Kleje i Akcesoria zużyte w ciągu dnia", perelaiWord: "Powiązane koszty", why: "Widzisz koszt obok pracy, którą wspiera, zamiast przypominać go sobie po tygodniu nowych zestawów i uzupełnień." },
    { theirWord: "Opłacony z góry zestaw planowanych uzupełnień rzęs", perelaiWord: "Karnet", why: "Przedpłacone kredyty są zużywane wraz z Wizytami, więc pozostałe terminy nie są osobną listą w pamięci lub wiadomościach." },
    { theirWord: "Klientka, która rozliczy się później", perelaiWord: "Zamówienie", why: "Śledzisz należność bez nazywania jej fakturą lub rachunkiem i zachowujesz kolejną sprawę widoczną przy pełnym dniu pracy." },
    { theirWord: "Pytanie o zasady lub kolejna sprawa po ostatniej klientce", perelaiWord: "Element Skrzynki", why: "Pozostaje widoczny, aż go rozwiążesz, a nie tylko przeczytasz i zgubisz pod następną wiadomością lub zmianą terminu." },
  ],
  setup: {
    title: "Zacznij od pracy z rzęsami, którą już wykonujesz.",
    body: "Nie od pustej ogólnej listy. Szablon stylistki rzęs zaczyna się od edytowalnych usług, dodatku z henną i powiązanego kosztu materiałów.",
    steps: [
      { title: "Otwórz przestrzeń pracy stylistki rzęs", body: "Wejście z tej strony ustawia szablon stylistki rzęs jako pierwszy podczas wdrożenia." },
      { title: "Dopasuj listę do siebie", body: "Zacznij od regulacji brwi, henny brwi, laminacji brwi, liftingu i henny rzęs, przedłużania rzęs oraz uzupełnienia rzęs. Edytuj według potrzeb." },
      { title: "Przenieś podstawy", body: "Zaimportuj kontakty z telefonu przez vCard, połącz Google Calendar, a potem udostępnij własny link do rezerwacji." },
    ],
  },
  faq: [
    { q: "Czy moje usługi rzęs będą już na liście?", a: "Tak. Szablon stylistki rzęs zaczyna się od sześciu edytowalnych usług: regulacji brwi, henny brwi, laminacji brwi, liftingu i henny rzęs, przedłużania rzęs oraz uzupełnienia rzęs. Zawiera też pakiet henny rzęs i brwi oraz kleje i akcesoria." },
    { q: "Czy klientki mogą rezerwować bez wymiany DM-ów?", a: "Udostępnij jeden link do rezerwacji w bio lub wyślij go w wiadomości. Klientka wybiera usługę, osobę i czas. Osoba szukająca Henny Brwi zaczyna od nazwanej usługi, a klientka na Uzupełnienie Rzęs ma jasną drogę bez pytania Cię w wiadomości o każdy wolny termin." },
    { q: "Co się dzieje, gdy klientka się spóźnia lub nie przychodzi?", a: "Perelai może wysyłać automatyczne przypomnienia przez e-mail, w aplikacji i jako push. Praca i pieniądze są rejestrowane osobno, więc opuszczona Wizyta nie jest traktowana jako otrzymane pieniądze." },
    { q: "Czy zobaczę, co tydzień naprawdę przyniósł?", a: "Zapisuj faktycznie otrzymane pieniądze, przypisuj kleje i akcesoria do właściwej pracy, a potem zobacz przychody, koszty i otwarte należności bez arkusza. Wykonane Przedłużanie Rzęs to zrealizowana praca, a nie automatycznie otrzymane pieniądze, więc liczba nie ukrywa należności wymagającej dalszej decyzji." },
    { q: "Czy muszę przenosić wszystko w jeden weekend?", a: "Nie. Zacznij od kontaktów z telefonu przez vCard i opcjonalnie połącz Google Calendar. Lista usług jest edytowalna, więc możesz dopasowywać ją stopniowo." },
  ],
  labels: {
    terminologyTitle: "Słowa z Twojej pracy z rzęsami mają miejsce w Perelai.",
    inYourChair: "W Twojej pracy z rzęsami",
    inPerelai: "W Perelai",
    whyItMatters: "Dlaczego to ważne",
    mocksTitle: "Dane stylistki rzęs pokazane w produkcie.",
    mocksBody: "Przykładowe dane korzystają z usług, dodatku i powiązanego kosztu z prawdziwego szablonu stylistki rzęs.",
    faqTitle: "Pytania stylistek rzęs przed zmianą systemu.",
  },
  whatItIsNot: {
    title: "Jasno o tym, czym to nie jest.",
    body: "Perelai pomaga prowadzić klientów, rezerwacje i pieniądze w pracy z rzęsami. Nie udaje, że zastępuje specjalistyczne narzędzia.",
    items: [
      { title: "Nie jest programem księgowym", body: "Śledzi to, co zostało zarezerwowane, wykonane i opłacone, aby pokazać przepływy pieniężne. Nie jest rozliczeniem podatkowym ani poradą finansową." },
      { title: "Nie jest marketplace’em", body: "Twój link do rezerwacji należy do Ciebie." },
      { title: "Nie jest systemem dokumentacji medycznej", body: "Nie oferuje dokumentacji klinicznej, śledzenia diagnoz ani zarządzania leczeniem pacjentów." },
    ],
  },
  cta: {
    title: "Trzymaj dzień z rzęsami na widoku po ostatniej klientce.",
    body: "Utwórz przestrzeń pracy, która zaczyna się od Twoich usług i trzyma Wizyty, pieniądze oraz kolejne decyzje w jednym miejscu.",
    label: "Utwórz bezpłatną przestrzeń pracy",
    microcopy: "Otrzymasz e-mail weryfikacyjny, aby dokończyć konfigurację.",
  },
  research: lashArtistResearch,
}
