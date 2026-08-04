import { massageTherapistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai dla masażystów",
    description:
      "Śledź przychód, zarejestrowane koszty i wyliczony zysk za dowolny okres — z historią klienta, przedpłaconymi karnetami i otwartymi saldami osobno.",
    ogImageAlt:
      "Przegląd finansów Perelai dla masażysty: przychód, zarejestrowane koszty i wyliczony zysk za okres — dane przykładowe.",
  },

  hero: {
    eyebrow: "Oprogramowanie finansowe dla masażystów",
    h1: "Pełny tydzień i dobry tydzień to nie ta sama liczba.",
    subhead:
      "Przychód, koszty, które przeciwko niemu rejestrujesz, i to, co z nich zostaje — za dzień, tydzień lub rok. Obok: ile wydał każdy stały klient, które przedpłacone bloki jeszcze trwają i co zostało nieopłacone na zamówieniu.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Zapchany tydzień nie odpowiada na pytanie",
      body: "Trzy Masaże Głębokich Tkanek pod rząd wypełniają dzień i nic nie mówią o miesiącu. Liczba, która ma znaczenie, siedzi za olejkami, które dolewałeś, wynajmem gabinetu lub kilometrami — a nic z tego nie ma w kalendarzu, który właśnie wypełniłeś.",
    },
    {
      title: "Terminy tu, płatności tam, paragony gdzie indziej",
      body: "Solo-praktycy często kończą z jedną aplikacją do wizyt, drugą do przyjmowania płatności i trzecią do paragonów. Każda działa. Żadna nie odpowiada na pytanie, które wymaga wszystkich trzech — więc stajesz się integracją między nimi.",
    },
    {
      title: "Jesteś sam — administracja nie ma dokąd pójść",
      body: "Nie ma recepcji, której to oddasz. Zarejestrowanie tygodnia staje się wieczorem z arkuszem, który ktoś Ci ustawił, albo zeszytem od hurtowni — przebudowywanym na koniec każdego miesiąca, bo nic nie zbierało danych w trakcie.",
    },
  ],

  dayInLife: {
    title: "Rejestruj między klientami. Patrz, kiedy chcesz.",
    body: "Skończyć sesję, wziąć za nią pieniądze, odjąć czyjś blok sześciu, uzupełnić olejki — każde to jedno stuknięcie, gdy zmienia się prześcieradło. Bo zapisy powstają tam, gdzie się dzieją, praktykę można obejrzeć później bez wieczoru wspominania.",
    steps: [
      {
        title: "Ukończone i rozliczone to dwie różne rzeczy",
        body: "Odznaczenie Masażu Relaksacyjnego mówi, że godzina się odbyła. Nic nie mówi o tym, czy Ci zapłacono. Te stany żyją osobno — żeby pełny wtorek nigdy cicho nie stał się liczbą, która jeszcze nie wpłynęła.",
      },
      {
        title: "Pieniądze lądują na sesji, do której należą",
        body: "Płatność idzie na tę godzinę z tym klientem, a nie do nierozróżnionego garnka dnia. Pół roku później kwota nadal wskazuje, od kogo pochodzi i za jakie zabiegi.",
      },
      {
        title: "Bloki sześciu schodzą z bloku, nie z kasy",
        body: "Ktoś w połowie przedpłaconego bloku bierze godzinę Twojego czasu i nic nie oddaje — i to jest poprawne. Odjęcie kredytu to osobny typ zdarzenia; dlatego wykonane i zapłacone nigdy nie zlewają się w jedną mylącą sumę.",
      },
      {
        title: "Wybierz odcinek czasu i przeczytaj go",
        body: "Dzień, tydzień, miesiąc, kwartał, rok — jak naprawdę myślisz. Widzisz przychód, koszty, które zarejestrowałeś, i to, co zostaje. Wszystko nadal otwarte na zamówieniu lub racie zostaje osobno od już zarejestrowanych pieniędzy.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Masaż Głębokich Tkanek, Masaż Relaksacyjny, Masaż Sportowy",
      perelaiWord: "Usługi na Wizycie",
      why: "Szablon masażu zaczyna od tych trzech, edytowalnych. Każda zarezerwowana wizyta staje się Wizytą z klientem, zabiegiem i aktywnością pieniężną razem.",
    },
    {
      theirWord: "Dodatek Gorące Kamienie do sesji",
      perelaiWord: "Dodatki",
      why: "Extra przypina się do Wizyty, na której zostało wykonane — zapis odpowiada sesji, która naprawdę się odbyła.",
    },
    {
      theirWord: "Faktura za Olejek do Masażu zapłacona w zeszły czwartek",
      perelaiWord: "Powiązane koszty",
      why: "Rejestrowane przeciwko okresowi, w który wpadają — uzupełnienie pojawia się obok godzin, które wsparło. Nikt nie waży butelki: to zakup, który wpisałeś, nie pomiar zużycia jednego klienta.",
    },
    {
      theirWord: "Klient na trzeciej sesji z bloku sześciu",
      perelaiWord: "Karnet",
      why: "Kredyty schodzą godzinami. Co tej osobie jeszcze przysługuje — zapisana liczba, nie notatka na rewersie karty.",
    },
    {
      theirWord: "Ktoś spłacający kurs w ratach",
      perelaiWord: "Zamówienie i raty",
      why: "Reszta należy do tej konkretnej umowy. „Otwarte” oznacza tę konkretną nieopłaconą kwotę, nie mgliste poczucie pieniędzy gdzieś w powietrzu.",
    },
    {
      theirWord: "Stały klient czwartkowego poranka od dziewięciu lat",
      perelaiWord: "Historia przychodu klienta",
      why: "Ile ta osoba naprawdę u Ciebie wydała w czasie obok godzin, które rezerwowała. Lojalność przestaje być uczuciem i staje się liczbą, którą można zobaczyć.",
    },
    {
      theirWord: "Co zostaje po odjęciu zakupów miesiąca",
      perelaiWord: "Zysk",
      why: "Bierze przychód okresu i odejmuje wydatki, które tam wpisałeś. Liczba robocza do decyzji o stawce godzinowej — zdecydowanie nie pozycja podatkowa ani wynik księgowego.",
    },
    {
      theirWord: "Tylko Ty i leżanka, przynajmniej w tym roku",
      perelaiWord: "Jeden obszar roboczy",
      why: "Pracuj solo. Dodawaj ludzi, gdy ich potrzebujesz — nic tu nie zakłada drugiej pary rąk i nic z powyższego nie psuje się, jeśli jej nigdy nie będzie.",
    },
  ],

  setup: {
    title: "Wieczór, nie weekend.",
    body: "Trzy zabiegi, jeden dodatek i jeden typ kosztów już czekają. Wszystko poniżej to opcjonalne porządki.",
    steps: [
      {
        title: "Wyląduj na szablonie masażu",
        body: "Wejście z tej strony daje już Masaż Głębokich Tkanek, Masaż Relaksacyjny i Masaż Sportowy. Nikt nie gapi się w pusty ekran, zastanawiając się, jak nazwać godzinny Swedish.",
      },
      {
        title: "Dopasuj do swojej praktyki",
        body: "Czasy, stawki, czy Dodatek Gorące Kamienie jedzie jako extra, i Olejek do Masażu zamiast tego, co naprawdę dolewasz. Zmień nazwę, usuń, dodaj — nic nie jest sztywne.",
      },
      {
        title: "Przenieś tylko to, czego potrzebuje poniedziałek",
        body: "Kontakty z telefonu przez vCard, Google Calendar, jeśli w nim żyjesz, i link do wklejenia tam, gdzie Cię znajdują. Dziewięć lat historii może przyjść później — albo nigdy.",
      },
    ],
  },

  faq: [
    {
      q: "Czy moje zabiegi będą już ustawione?",
      a: "Tak. Szablon masażu zaczyna od Masażu Głębokich Tkanek, Masażu Relaksacyjnego i Masażu Sportowego, plus Dodatek Gorące Kamienie i Olejek do Masażu jako powiązane koszty. Wszystko jest edytowalne — menu z czterema lub dwunastoma zabiegami to kilka minut pracy.",
    },
    {
      q: "Czy Perelai prowadzi notatki kliniczne lub rozliczenia ubezpieczeniowe?",
      a: "Nie, i warto powiedzieć wprost. Perelai prowadzi notatki klienta i wizyty do prowadzenia praktyki. To nie system dokumentacji medycznej: bez intake ani SOAP, bez planów leczenia, bez śledzenia diagnoz i bez roszczeń czy rozliczeń ubezpieczeniowych. Jeśli praktyka od tego zależy — Perelai nie jest właściwym narzędziem do tej części.",
    },
    {
      q: "Jeśli tydzień był w pełni zarezerwowany — to mój przychód?",
      a: "Niekoniecznie, a mieszanie tych dwóch to sposób, w jaki ładny tydzień rozczarowuje później. Godzina, którą wykonałeś, godzina, za którą Ci zapłacono, i godzina ze spisanego bloku to tu trzy różne stany. Są liczone osobno celowo, żeby liczba, na którą patrzysz, oznaczała jedną konkretną rzecz.",
    },
    {
      q: "Skąd wiem, gdzie ktoś jest w bloku sześciu?",
      a: "Każdy kredyt schodzi, gdy godzina jest wykorzystana — reszta zostaje zapisana przy kliencie, nie na karcie w szufladzie. Kursy spłacane w ratach działają tak samo: nieopłacona część zostaje przy własnej umowie, zamiast wplatać się w pieniądze, które już wziąłeś.",
    },
    {
      q: "Skąd bierze się liczba zysku?",
      a: "Przychód za wybrany odcinek czasu minus wydatki wpisane w ten sam odcinek. Przydatne do decyzji, czy godzina jest dobrze wyceniona. Nie pozycja podatkowa, nie wynik, który podpisze księgowy — i nie zastępstwo za księgowego.",
    },
  ],

  labels: {
    terminologyTitle: "Jak Twój słownik mapuje się na nasz.",
    inYourChair: "Na leżance",
    inPerelai: "W Perelai",
    whyItMatters: "Dlaczego to ważne",
    mocksTitle: "Praktyka jak Twoja, pokazana na żywo.",
    mocksBody: "Liczby poniżej są poglądowe — z trzech zabiegów, dodatku i typu kosztów tego szablonu.",
    faqTitle: "Pytane przed rejestracją.",
  },

  whatItIsNot: {
    title: "Gdzie się kończy.",
    body: "Idzie za pieniędzmi przypiętymi do godzin, które wykonałeś. Trzy rzeczy, których świadomie nie robi:",
    items: [
      {
        title: "Nie system dokumentacji medycznej",
        body: "Notatki są do prowadzenia praktyki — kto jaki nacisk lubi, kto wraca za dwa tygodnie. Bez formularzy intake, SOAP, planów leczenia, diagnoz i roszczeń ubezpieczeniowych.",
      },
      {
        title: "Nie oprogramowanie księgowe",
        body: "Dostajesz przychód, zarejestrowane koszty i to, co z nich zostaje za wybrany okres. Księgowość, rozliczenia i porady finansowe to czyjaś inna robota — a księgowy zostaje przy swojej.",
      },
      {
        title: "Nie marketplace",
        body: "Link do rezerwacji należy do Ciebie. Perelai nie wynajmuje relacji z klientem.",
      },
    ],
  },

  cta: {
    title: "Wiedz, na ile tydzień naprawdę wyszedł.",
    body: "Zacznij od listy usług masażu i trzymaj ukończoną pracę, zarejestrowane płatności, przedpłacone sesje oraz otwarte salda jako osobne, czytelne zapisy.",
    label: "Utwórz przestrzeń pracy",
    microcopy: "Otrzymasz e-mail weryfikacyjny, aby dokończyć konfigurację.",
  },

  research: massageTherapistResearch,
}
