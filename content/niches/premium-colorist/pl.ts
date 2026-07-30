import { independentColoristResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai dla niezależnych kolorystów",
    description: "Spokojniejszy sposób na prowadzenie wizyt koloryzacyjnych, rezerwacji i przepływów pieniężnych.",
    ogImageAlt: "Przestrzeń pracy Perelai dla niezależnego kolorysty z wizytami koloryzacyjnymi, kalendarzem i podsumowaniem pieniędzy",
  },
  hero: {
    eyebrow: "Dla niezależnych kolorystów",
    h1: "Gdy jedna podwójna rezerwacja może rozłożyć cały dzień.",
    subhead: "Trzymaj przepełnione DM-y, wizyty koloryzacyjne i dzisiejsze pieniądze w jednej przestrzeni pracy stworzonej dla Twojego dnia.",
    mock: "colorist-workspace",
  },
  pains: [
    { title: "Twoje Instagram DM-y są całkowicie przepełnione", body: "Prośba o rezerwację nie powinna ginąć obok pytania o formułę, zdjęcia i nocnej zmiany terminu." },
    { title: "Dziesięć minut opóźnienia może rozłożyć dzień", body: "Farbowanie odrostów, balayage i pilna stylizacja końcowa wymagają różnego czasu. Kalendarz musi uwzględniać rytm tej pracy." },
    { title: "„Zapłaci następnym razem” nadal jest otwartą sprawą", body: "Zapisuj faktycznie otrzymane pieniądze, widz zaległości oraz koszty farb i materiałów jednorazowych." },
  ],
  dayInLife: {
    title: "Gdy dzień się rozsypie, nadal wiesz, co dalej.",
    body: "Perelai utrzymuje pracę kolorysty w zasięgu wzroku, bez odtwarzania całego dnia wieczorem z pamięci.",
    steps: [
      { title: "Konsultacja i test pasemka", body: "Zacznij Wizytę od usługi, która ustala plan koloryzacji." },
      { title: "Farbowanie odrostów lub koloryzacja wielotonowa", body: "Trzymaj dzisiejszą pracę z kolorem w kalendarzu wraz z czasem, którego potrzebuje." },
      { title: "Pielęgnacja regenerująca i stylizacja końcowa", body: "Dodaj pracę, która zmienia Wizytę, w tym wybrane przez klientkę dodatki." },
      { title: "Płatność i kolejna sprawa", body: "Po Wizycie widać otrzymaną kwotę, otwartą sprawę i kolejną decyzję w Skrzynce." },
    ],
  },
  terminology: [
    { theirWord: "Farbowanie odrostów, balayage lub toner i nabłyszczanie", perelaiWord: "Wizyta", why: "Trzymaj usługę, notatki o kliencie i płatność razem." },
    { theirWord: "Pielęgnacja regenerująca, dodatkowa porcja farb na długie włosy lub stylizacja końcowa", perelaiWord: "Dodatki", why: "Dodaj dodatkową pracę do Wizyty, której dotyczy." },
    { theirWord: "Farby i rozjaśniacze oraz materiały jednorazowe", perelaiWord: "Powiązane koszty", why: "Widzisz koszty obok pracy, której dotyczą." },
    { theirWord: "Opłacony z góry zestaw odświeżeń koloru", perelaiWord: "Karnet", why: "Przedpłacone kredyty są zużywane wraz z Wizytami." },
    { theirWord: "„Zapłaci następnym razem”", perelaiWord: "Zamówienie", why: "Śledzisz należność bez nazywania jej fakturą lub rachunkiem." },
    { theirWord: "Poinformowanie klientki, że pieniądze wpłynęły", perelaiWord: "Potwierdzenie płatności", why: "Wyślij potwierdzenie, które klientka może otworzyć z linku." },
    { theirWord: "To, co nadal wymaga decyzji po ostatniej klientce", perelaiWord: "Element Skrzynki", why: "Pozostaje widoczny, aż go rozwiążesz, a nie tylko przeczytasz." },
  ],
  setup: {
    title: "Zacznij od pracy z kolorem, którą już wykonujesz.",
    body: "Nie od pustej ogólnej listy. Szablon kolorysty zaczyna się od edytowalnych usług, dodatków i powiązanych kosztów.",
    steps: [
      { title: "Otwórz przestrzeń pracy kolorysty", body: "Wejście z tej strony ustawia szablon niezależnego kolorysty jako pierwszy podczas wdrożenia." },
      { title: "Dopasuj listę do siebie", body: "Zacznij od konsultacji i testu pasemka, farbowania odrostów, balayage, korekty koloru, tonera oraz strzyżenia z modelowaniem. Edytuj według potrzeb." },
      { title: "Przenieś podstawy", body: "Zaimportuj kontakty z telefonu przez vCard, połącz Google Calendar, a potem udostępnij własny link do rezerwacji." },
    ],
  },
  faq: [
    { q: "Czy moje usługi koloryzacyjne będą już na liście?", a: "Tak. Szablon niezależnego kolorysty zaczyna się od sześciu edytowalnych usług, w tym farbowania odrostów, koloryzacji wielotonowej lub balayage, korekty koloru, tonera i nabłyszczania oraz strzyżenia z modelowaniem. Zawiera także pielęgnację regenerującą, dodatkową porcję farb na długie włosy i stylizację końcową." },
    { q: "Czy klienci mogą przestać rezerwować przez moje DM-y?", a: "Udostępnij jeden link do rezerwacji w bio lub wyślij go w wiadomości. Klient wybiera usługę, osobę i czas. Perelai nie pobiera prowizji od rezerwacji." },
    { q: "Co się dzieje, gdy klientka nie przyjdzie?", a: "Perelai może wysyłać automatyczne przypomnienia przez e-mail, w aplikacji i jako push. Praca i pieniądze są rejestrowane osobno, więc opuszczona Wizyta nie jest traktowana jako otrzymane pieniądze." },
    { q: "Czy zobaczę, czy dzień koloryzacji naprawdę się opłacił?", a: "Zapisuj faktycznie otrzymane pieniądze, przypisuj farby, rozjaśniacze i materiały jednorazowe do właściwej pracy, a potem zobacz przychody, koszty i otwarte należności bez arkusza." },
    { q: "Czy muszę przenosić wszystko w jeden weekend?", a: "Nie. Zacznij od kontaktów z telefonu przez vCard i opcjonalnie połącz Google Calendar. Lista usług jest edytowalna, więc możesz dopasowywać ją stopniowo." },
  ],
  labels: {
    terminologyTitle: "Słowa z Twojego fotela mają swoje miejsce w Perelai.",
    inYourChair: "Przy Twoim fotelu",
    inPerelai: "W Perelai",
    whyItMatters: "Dlaczego to ważne",
    mocksTitle: "Dane kolorysty pokazane w produkcie.",
    mocksBody: "Przykładowe dane korzystają z usług, dodatków i powiązanych kosztów z prawdziwego szablonu niezależnego kolorysty.",
    faqTitle: "Pytania kolorystów przed zmianą systemu.",
  },
  whatItIsNot: {
    title: "Jasno o tym, czym to nie jest.",
    body: "Perelai pomaga prowadzić klientów, rezerwacje i pieniądze w pracy z kolorem. Nie udaje, że zastępuje specjalistyczne narzędzia.",
    items: [
      { title: "Nie jest programem księgowym", body: "Śledzi to, co zostało zarezerwowane, wykonane i opłacone, aby pokazać przepływy pieniężne. Nie jest rozliczeniem podatkowym ani poradą finansową." },
      { title: "Nie jest marketplace’em", body: "Twój link do rezerwacji należy do Ciebie. Perelai nie pobiera prowizji i nie wynajmuje relacji z klientami." },
      { title: "Nie jest systemem dokumentacji medycznej", body: "Nie oferuje dokumentacji klinicznej, śledzenia diagnoz ani zarządzania leczeniem pacjentów." },
    ],
  },
  cta: {
    title: "Prowadź pracę z kolorem dalej bez wieczornego odtwarzania dnia.",
    body: "Utwórz przestrzeń pracy, która zaczyna się od Twoich usług i trzyma Wizyty, pieniądze oraz kolejne sprawy w jednym miejscu.",
    label: "Utwórz bezpłatną przestrzeń pracy",
    microcopy: "Bez karty. Otrzymasz e-mail weryfikacyjny, aby dokończyć konfigurację.",
  },
  research: independentColoristResearch,
}
