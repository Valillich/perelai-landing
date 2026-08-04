import { hairSalonResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai dla właścicieli salonów fryzjerskich",
    description:
      "Śledź przychód, zarejestrowane koszty i wyliczony zysk za dowolny okres — z podziałem według kategorii usług i klienta.",
    ogImageAlt:
      "Przegląd finansów Perelai dla salonu fryzjerskiego: przychód, koszty i wyliczony zysk za okres z podziałem według kategorii usług — dane przykładowe.",
  },

  hero: {
    eyebrow: "Oprogramowanie finansowe dla właścicieli salonów fryzjerskich",
    h1: "Zobacz miesiąc salonu bez składania go ręcznie.",
    subhead:
      "Śledź przychód, zarejestrowane koszty i wyliczony zysk za dowolny okres. Przeglądaj wynik według kategorii usług i klienta, a zarejestrowane płatności oraz otwarte salda zamówień lub rat trzymaj osobno.",
    mock: "colorist-workspace",
  },

  pains: [
    {
      title: "Miesiąc się rekonstruuje, a nie czyta",
      body: "Przychód siedzi w systemie rezerwacji, płatności są rozrzucone po kontach, a koszty produktów spływają na fakturach dostawców tygodnie później. Koniec miesiąca to wieczór spędzony na składaniu z pamięci i podsumowania terminala tego, co już się wydarzyło.",
    },
    {
      title: "Sam przychód nie pokazuje, ile miesiąc kosztował",
      body: "Pełny grafik i tak może ukrywać koszty produktów, czynsz i inne zarejestrowane wydatki. Doświadczeni właściciele pytają, co dana liczba już uwzględnia, zanim jej zaufają. Perelai trzyma przychód, zarejestrowane koszty i wyliczony zysk jako osobne liczby.",
    },
    {
      title: "Narzędzia nie opowiadają jednej historii",
      body: "Wizyty, historia klienta i zapisy płatności często żyją w różnych systemach, które nie wymieniają danych — więc ktoś sprawdza dwa lub trzy miejsca, by odpowiedzieć na jedno pytanie. Perelai łączy każde zarejestrowane zdarzenie finansowe z klientem i pracą za nim.",
    },
  ],

  dayInLife: {
    title: "Rejestruj dzień na bieżąco. Czytaj miesiąc, gdy go potrzebujesz.",
    body: "Zamykaj wizyty, rejestruj płatności, rozliczaj karnety i dodawaj koszty jako część dziennej pracy. Perelai łączy każdy zapis z klientem, kategorią usług i okresem — więc przegląd miesiąca zaczyna się od zapisu, a nie od rekonstrukcji.",
    steps: [
      {
        title: "Wizyta jest zakończona, jeszcze nie rozliczona",
        body: "Oznaczenie Strzyżenia Damskiego jako ukończonego zapisuje, że praca się odbyła. Nie twierdzi, że pieniądze wpłynęły. Wizyta zostaje w stanie, który widać, zamiast cicho liczyć się jako przychód.",
      },
      {
        title: "Płatność jest przypisana do pracy, którą opłaciła",
        body: "Gdy klient się rozlicza, płatność trafia do tej wizyty, a nie do anonimowej sumy dnia — liczba zachowuje związek z klientem i kategorią usług.",
      },
      {
        title: "Rozliczenie karnetu zamyka wizytę bez nowej płatności",
        body: "Klient z przedpłatą, który wykorzystuje Zabieg Pielęgnacyjny, zamyka wizytę i tego dnia nie rusza pieniędzy. Perelai rejestruje rozliczenie, więc zarejestrowane płatności i zrealizowany przychód zostają dwiema osobnymi liczbami.",
      },
      {
        title: "Okres odpowiada",
        body: "Wybierz dzień, tydzień, miesiąc, kwartał lub rok i odczytaj przychód, zarejestrowane koszty i wyliczony zysk — z podziałem według kategorii i klienta oraz osobno trzymanym otwartym saldem zamówienia.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Strzyżenie Damskie, Farbowanie Odrostów, Balayage / Kolor Wielotonowy, Toner i Nabłyszczanie, Zabieg Pielęgnacyjny",
      perelaiWord: "Usługi na Wizycie",
      why: "Szablon salonu zaczyna od tych pięciu, edytowalnych. Każda zarezerwowana wizyta staje się Wizytą z klientem, usługą i aktywnością pieniężną razem.",
    },
    {
      theirWord: "Modelowanie i Stylizacja lub Pielęgnacja Regenerująca (Olaplex) dodane przy fotelu",
      perelaiWord: "Dodatki",
      why: "Dodatkowa praca przypina się do Wizyty, na której została wykonana — zapis odpowiada temu, co się wydarzyło, a nie temu, co pierwotnie zarezerwowano.",
    },
    {
      theirWord: "Praca kolorystyczna w porównaniu z finishingiem",
      perelaiWord: "Kategoria usług",
      why: "Przychód i koszty są grupowane według kategorii, więc podział porównuje kolor z finishingiem. Nie raportuje osobnej liczby dla każdej usługi w menu.",
    },
    {
      theirWord: "Farby i Rozjaśniacze oraz Materiały Jednorazowe",
      perelaiWord: "Powiązane koszty",
      why: "Rejestrowane jako koszty okresu — pojawiają się w tym samym widoku co przychód kategorii, którą wspierały, a nie tylko na fakturze dostawcy. Perelai nie mierzy, ile produktu zużyła pojedyncza formuła.",
    },
    {
      theirWord: "Klient na przedpłaconym cyklu wizyt",
      perelaiWord: "Karnet",
      why: "Kredyty schodzą, gdy Wizyty są wykorzystywane. Rozliczenie zamyka wizytę i nie tworzy ruchu gotówki — dlatego wykorzystana praca i zarejestrowane płatności są pokazywane osobno.",
    },
    {
      theirWord: "Kurs zabiegów spłacany w ratach",
      perelaiWord: "Zamówienie i raty",
      why: "Pozostała należność zostaje przy tym zamówieniu — otwarta kwota ma jasny zakres, a nie ogólne wrażenie, że ktoś coś jest winien.",
    },
    {
      theirWord: "Przychód minus zarejestrowane koszty okresu",
      perelaiWord: "Zysk",
      why: "Liczba zysku w Perelai to przychód minus wydatki zarejestrowane za wybrany okres. Liczba operacyjna do prowadzenia salonu — nie wynik księgowy ani podatkowy.",
    },
    {
      theirWord: "Do czego ma dostęp każdy członek zespołu",
      perelaiWord: "Dostęp Pracownik lub Supervisor",
      why: "Każda osoba jest zapraszana z rolą, a dostęp idzie za tą rolą — zespół może pracować w jednym obszarze roboczym bez jednakowej konfiguracji każdego konta.",
    },
  ],

  setup: {
    title: "Zacznij od listy usług salonu, nie od pustej strony.",
    body: "Szablon salonu otwiera się z pięcioma edytowalnymi usługami, dwoma dodatkami i dwoma typami powiązanych kosztów — pierwszy ekran już przypomina działający salon.",
    steps: [
      {
        title: "Otwórz przestrzeń salonu",
        body: "Wejście z tej strony stawia szablon salonu na początku onboardingu. Zaczynasz od Strzyżenia Damskiego, Farbowania Odrostów, Balayage / Koloru Wielotonowego, Tonera i Nabłyszczania oraz Zabiegu Pielęgnacyjnego — zamiast nazywać listę od zera.",
      },
      {
        title: "Uczyń menu i koszty swoimi",
        body: "Dostosuj czasy i ceny, zostaw Modelowanie i Stylizację oraz Pielęgnację Regenerującą (Olaplex) jako dodatki, jeśli je oferujesz, i zostaw Farby i Rozjaśniacze oraz Materiały Jednorazowe jako typy kosztów rejestrowane za okres.",
      },
      {
        title: "Dodaj osoby pracujące na sali",
        body: "Zaproś członków zespołu z dostępem Pracownik lub Supervisor i trzymaj grafiki, urlopy oraz przypisane usługi razem. Dostęp wynika z roli zaproszenia.",
      },
      {
        title: "Przenieś to, co pomoże w tym tygodniu",
        body: "Zaimportuj kontakty przez vCard, połącz Google Calendar i udostępnij link do rezerwacji. Zacznij od najbliższych tygodni, zamiast zatrzymywać salon na migrację.",
      },
    ],
  },

  faq: [
    {
      q: "Czy usługi salonu będą już ustawione?",
      a: "Tak. Szablon salonu zaczyna od Strzyżenia Damskiego, Farbowania Odrostów, Balayage / Koloru Wielotonowego, Tonera i Nabłyszczania oraz Zabiegu Pielęgnacyjnego, plus Modelowanie i Stylizacja oraz Pielęgnacja Regenerująca (Olaplex) jako dodatki oraz Farby i Rozjaśniacze i Materiały Jednorazowe jako powiązane koszty. Wszystko jest edytowalne.",
    },
    {
      q: "Jak szczegółowy jest podział usług?",
      a: "Przychód i koszty są grupowane według kategorii usług — możesz porównać kolor z finishingiem w wybranym okresie i zobaczyć historię przychodu klienta w czasie. Perelai nie liczy rentowności każdej pojedynczej usługi w menu.",
    },
    {
      q: "Czy Perelai śledzi farbę w każdej formule?",
      a: "Nie. Perelai rejestruje koszty według okresu i kategorii usług. Nie waży farby, nie liczy zużycia na formułę i nie zarządza magazynem backbar. Jeśli potrzebujesz dokładnego kosztu produktu za jedną formułę — to inne narzędzie.",
    },
    {
      q: "Czy ukończona wizyta liczy się jako otrzymane pieniądze?",
      a: "Nie. Ukończona praca, zrealizowany przychód i zarejestrowane płatności są prowadzone osobno. Wizyta może być gotowa i nadal czekać na płatność, a przedpłacony karnet może zamknąć wizytę bez ruchu pieniędzy tego dnia. Trzymanie trzech stanów osobno nadaje sens liczbie okresu.",
    },
    {
      q: "Co obejmuje liczba zysku?",
      a: "Przychód za wybrany okres minus wydatki zarejestrowane przeciwko temu okresowi. To wyliczenie do prowadzenia salonu, nie wynik księgowy ani podatkowy — i nie zastępuje księgowego.",
    },
    {
      q: "Czy zespół może korzystać z tej samej przestrzeni?",
      a: "Tak. Zaproś członków zespołu z dostępem Pracownik lub Supervisor. Grafiki, urlopy i przypisane usługi zostają w tej samej przestrzeni, z dostępem według roli.",
    },
  ],

  labels: {
    terminologyTitle: "Słowa salonu — i jak nazywają się w Perelai.",
    inYourChair: "W Twoim salonie",
    inPerelai: "W Perelai",
    whyItMatters: "Dlaczego to ważne",
    mocksTitle: "Dane salonu pokazane w produkcie.",
    mocksBody: "Dane przykładowe korzystają z usług, dodatków i powiązanych kosztów szablonu salonu.",
    faqTitle: "Co właściciele salonów pytają najpierw.",
  },

  whatItIsNot: {
    title: "Jasno, czym to nie jest.",
    body: "Perelai śledzi pieniądze powiązane z pracą salonu. Nie udaje, że jest resztą back office.",
    items: [
      {
        title: "Nie oprogramowanie księgowe",
        body: "Rejestruje przychód, koszty i wyliczony zysk za okres. Nie prowadzi księgowości, nie składa podatków i nie daje porad finansowych — i nie zastępuje księgowego.",
      },
      {
        title: "Nie płace ani HR",
        body: "Możesz zapraszać członków zespołu i trzymać grafiki, urlopy oraz przypisane usługi razem. Pensje, prowizje i ewidencja czasu nie wchodzą w zakres.",
      },
      {
        title: "Nie magazyn backbar",
        body: "Farby i Rozjaśniacze oraz Materiały Jednorazowe są rejestrowane jako koszty okresu. Perelai nie waży produktu, nie śledzi zużycia na formułę i nie zamawia zapasów.",
      },
    ],
  },

  cta: {
    title: "Zobacz miesiąc bez składania go od nowa.",
    body: "Zacznij od listy usług salonu i trzymaj ukończoną pracę, zarejestrowane płatności, rozliczenia karnetów oraz otwarte salda zamówień jako osobne, czytelne zapisy.",
    label: "Utwórz przestrzeń pracy",
    microcopy: "Otrzymasz e-mail weryfikacyjny, aby dokończyć konfigurację.",
  },

  research: hairSalonResearch,
}
