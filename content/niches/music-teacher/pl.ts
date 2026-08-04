import { musicTeacherResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai dla nauczycieli muzyki",
    description:
      "Przychód z lekcji pianina i gitary, zarejestrowane koszty studia i wyliczony zysk — z historią ucznia i spisaniem semestralnych karnetów.",
    ogImageAlt:
      "Przegląd finansów Perelai dla nauczyciela muzyki: przychód z lekcji, zarejestrowane koszty i wyliczony zysk za okres — dane przykładowe.",
  },

  hero: {
    eyebrow: "Oprogramowanie finansowe dla nauczycieli muzyki",
    h1: "Ile przynosi studio — widać za dowolny okres.",
    subhead:
      "Podsumuj przychód z lekcji instrumentalnych, koszty strojenia i druku nut oraz wyliczony zysk za dzień, tydzień, miesiąc, kwartał lub rok. Rozdziel ukończone lekcje, zarejestrowane płatności i bezgotówkowe spisania semestralnych bloków — i patrz na wynik według ucznia lub typu lekcji.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Grafik pianina i gitary nie pokazuje marży studia",
      body: "Godziny czytania z nut, gam i prób wypełniają tydzień, ale nie odpowiadają, czy zwróciło się strojenie pianina, wymiana strun i druk partytur. Kalendarz nauczania i wydatki studia żyją osobno.",
    },
    {
      title: "Semestralna przedpłata maskuje realny tydzień w kasie",
      body: "Pełna opłata za semestr przy zapisie sprawia, że kolejne tygodnie wyglądają na bez przychodu, mimo regularnych lekcji ucznia. Bezgotówkowe spisanie kredytu przy każdej odbytej lekcji utrzymuje obraz okresu wiarygodny.",
    },
    {
      title: "Nuty w szafie, przelew rodzica i faktura za strojenie — osobno",
      body: "Harmonogram lekcji siedzi w kalendarzu, wpływy od uczniów w bankowości internetowej, a paragony za nuty i konserwację — w segregatorze. Zestawić finanse studia muzycznego to wieczorna praca ręczna.",
    },
  ],

  dayInLife: {
    title: "Po lekcji pianina — nuty, strojenie i rozliczenie w jednym miejscu.",
    body: "Zamykasz lekcję instrumentalną, dopisujesz opłatę od ucznia, spisujesz kredyt semestralnego bloku i rejestrujesz koszt partytury lub strojenia. Perelai łączy te operacje z uczniem, rodzajem lekcji i zakresem dat.",
    steps: [
      {
        title: "Ukończona lekcja pianina nie oznacza zebranej opłaty",
        body: "Oznaczenie Lekcji Gry na Pianinie jako zakończonej dokumentuje odbyte nauczanie. Pobranie opłaty to niezależny krok w ramach Wizyty.",
      },
      {
        title: "Opłata ucznia zostaje przy konkretnym terminie lekcji",
        body: "Wpisana płatność łączy się z danym uczniem i datą lekcji — historia finansowa prowadzi do wykonanego nauczania instrumentalnego.",
      },
      {
        title: "Semestralny blok: spisanie kredytu bez ruchu gotówki",
        body: "Przy przedpłaconym pakiecie semestralnym każda odbyta lekcja zużywa jeden kredyt jako rozliczenie bezgotówkowe. Nauczanie i wpłaty nie mieszają się w raportach.",
      },
      {
        title: "Marża studia według ucznia, instrumentu i zakresu dat",
        body: "Porównuj przychód z lekcji, zarejestrowane koszty strojenia i materiałów oraz wyliczony zysk — z podziałem na ucznia lub kategorię lekcji.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Lekcja Gry na Pianinie, Lekcja Gry na Gitarze",
      perelaiWord: "Usługi na Wizycie",
      why: "Szablon pedagoga muzycznego startuje z dwoma typami lekcji — pod repertuar, słuch absolutny i ćwiczenia gamowe. Każdy termin instrumentalny staje się Wizytą z uczniem, rodzajem lekcji i zapisem opłaty.",
    },
    {
      theirWord: "Nuty i Podręczniki",
      perelaiWord: "Dodatek na Wizycie",
      why: "Tom z nutami albo wydrukowana partytura dopisywane są jako dodatek do wizyty ucznia — obok samej lekcji pianina lub gitary.",
    },
    {
      theirWord: "Konserwacja Instrumentów",
      perelaiWord: "Zarejestrowany wydatek",
      why: "Strojenie pianina, wymiana strun na gitarze i naprawy instrumentów wpisujesz jako koszty okresu. Wchodzą w wyliczony zysk studia.",
    },
    {
      theirWord: "Blok lekcji semestralnych",
      perelaiWord: "Przedpłacony karnet",
      why: "Semestralne pakiety lekcji leżą jako kredyty i schodzą lekcja po lekcji — bez zawyżania przychodu w dniu wpłaty.",
    },
  ],

  setup: {
    title: "Szablon studia muzycznego — gotowy katalog od pierwszego logowania.",
    body: "Lekcje pianina i gitary, dodatek na nuty oraz pozycja na konserwację instrumentów czekają w szablonie nauczyciela muzyki — bez pustego ekranu.",
    steps: [
      {
        title: "Skonfiguruj czas trwania i stawki lekcji instrumentalnych",
        body: "Dostosuj Lekcję Gry na Pianinie i Lekcję Gry na Gitarze w gotowym szablonie pedagoga muzycznego.",
      },
      {
        title: "Prowadź harmonogram i dopisuj materiały nutowe",
        body: "Planuj cykliczne zajęcia, zamykaj wizyty i dołączaj Nuty i Podręczniki, gdy partytura wchodzi w cenę lekcji.",
      },
      {
        title: "Analizuj marżę studia w wybranym horyzoncie czasowym",
        body: "Oglądaj przychód okresu, zarejestrowane koszty i wyliczony zysk — od jednego dnia po cały rok.",
      },
    ],
  },

  faq: [
    {
      q: "Co się dzieje z semestralnym pakietem po przedpłacie?",
      a: "Pakiet trafia do kredytów. Na każdej odbytej lekcji schodzi jeden kredyt — przeprowadzone nauczanie i opłata to osobne zapisy.",
    },
    {
      q: "Czy wliczę koszt strojenia pianina lub nowych strun?",
      a: "Tak. Koszty strojenia, strun i materiałów studia ewidencjonujesz w okresie — wchodzą w zarejestrowane koszty i wyliczony zysk.",
    },
    {
      q: "Czy zakończona lekcja automatycznie oznacza zebraną opłatę?",
      a: "Nie. Status lekcji i status płatności to niezależne pola. Lekcja może być ukończona przed wpisaniem opłaty.",
    },
    {
      q: "Czy mogę zmieniać typy lekcji w szablonie?",
      a: "Tak. Lekcja Gry na Pianinie, Lekcja Gry na Gitarze, dodatek Nuty i Podręczniki oraz wydatek Konserwacja Instrumentów są w pełni konfigurowalne.",
    },
  ],

  labels: {
    terminologyTitle: "Słownik studia muzycznego i pojęcia Perelai.",
    inYourChair: "W Twoim studio",
    inPerelai: "W Perelai",
    whyItMatters: "Dlaczego to ważne",
    mocksTitle: "Przykładowe dane lekcji pianina i gitary.",
    mocksBody: "Podgląd korzysta z usług, dodatku nutowego i wydatków szablonu pedagoga muzycznego.",
    faqTitle: "Pytania o finanse studia muzycznego.",
  },

  whatItIsNot: {
    title: "Jasno, czym to nie jest.",
    body: "Perelai rejestruje ukończone lekcje, wydatki nauczania i wyliczony zysk za wybrany okres. Nie jest pełnym back office studia.",
    items: [
      {
        title: "Nie oprogramowanie księgowe",
        body: "Pokazuje przychód okresu, zarejestrowane koszty i wyliczony zysk. Księgowość, rozliczenia podatkowe i porady finansowe to praca księgowego.",
      },
      {
        title: "Nie oprogramowanie do nut ani notacji",
        body: "Możesz śledzić usługi, dodatki i spisania karnetów. Notacja, kompozycja i nagrywanie audio nie wchodzą w zakres.",
      },
      {
        title: "Nie marketplace",
        body: "Link do rezerwacji należy do Ciebie. Perelai nie staje między Tobą a uczniami.",
      },
    ],
  },

  cta: {
    title: "Wiedz, ile wyniósł okres.",
    body: "Zacznij od listy lekcji studia i trzymaj ukończone nauczanie, zarejestrowane płatności, spisania karnetów i otwarte salda zamówień jako czytelne zapisy.",
    label: "Utwórz przestrzeń pracy",
    microcopy: "Otrzymasz e-mail weryfikacyjny, aby dokończyć konfigurację.",
  },

  research: musicTeacherResearch,
}
