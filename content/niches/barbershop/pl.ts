import type { NichePageContent } from "@/content/niches/types"

// Illustrative workflow; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai dla barberów",
    "description": "Planuj strzyżenie i pielęgnację brody, zachowuj historię klientów i zapisuj płatności w jednym miejscu.",
    "ogImageAlt": "Perelai dla barberów"
  },
  "hero": {
    "eyebrow": "Wizyty u barbera",
    "h1": "Strzyżenie, klient i płatność — w jednym miejscu.",
    "subhead": "Planuj strzyżenie i pielęgnację brody, zachowuj historię klientów i zapisuj płatności w jednym miejscu.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "Przycięcie brody zmienia zakres wizyty",
      "body": "Klient podczas cieniowania prosi również o wymodelowanie brody. Dodaj przycięcie brody do strzyżenia z osobną ceną, aby zapis odpowiadał pracy wykonanej przy fotelu."
    },
    {
      "title": "Stały klient wraca z konkretnymi oczekiwaniami",
      "body": "Przed sięgnięciem po maszynkę sprawdź poprzednie strzyżenie i notatki o długości lub stylizacji. Łatwiej odtworzysz cieniowanie z zeszłego miesiąca."
    },
    {
      "title": "Zajęty fotel nie oznacza otrzymanej zapłaty",
      "body": "Zakończenie golenia z gorącym ręcznikiem zapisuje wykonaną pracę. Płatność rejestrujesz osobno. Odpowiedni przedpłacony pakiet może pokryć usługę bez nowego wpływu pieniędzy."
    }
  ],
  "dayInLife": {
    "title": "Od rezerwacji do kolejnego strzyżenia",
    "body": "Prześledź jedno strzyżenie przez cały dzień pracy.",
    "steps": [
      {
        "title": "Zarezerwuj czas na cieniowanie",
        "body": "Wybierz klasyczne cieniowanie albo golenie z gorącym ręcznikiem i przypisz barbera. Czas trwania dopasujesz do oferowanego strzyżenia."
      },
      {
        "title": "Dodaj pielęgnację brody",
        "body": "Jeśli wykonano przycięcie brody, dodaj je z własną ceną. Dodatek pozostaje powiązany z wizytą."
      },
      {
        "title": "Zapisz płatność lub wykorzystaj pakiet",
        "body": "Zarejestruj płatność gotówką lub kartą albo wykorzystaj odpowiedni przedpłacony pakiet. Wykorzystanie pakietu nie tworzy nowej płatności ani przychodu."
      },
      {
        "title": "Zachowaj kontekst następnej wizyty",
        "body": "Przy kolejnym cieniowaniu zobaczysz wcześniejsze strzyżenie, rozliczenie i notatki. Sprawdź je, zanim zdecydujesz, co powtórzyć lub zmienić."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Klasyczne cieniowanie lub golenie z gorącym ręcznikiem",
      "perelaiWord": "Usługi",
      "why": "Pozycje początkowego katalogu możesz edytować. Każda wizyta zapisuje konkretne wykonanie usługi."
    },
    {
      "theirWord": "Przycięcie brody przy fotelu",
      "perelaiWord": "Dodatki",
      "why": "Przycięcie brody po strzyżeniu dopisujesz do tej samej wizyty. Cena pozostaje obok cieniowania, zamiast tworzyć płatność bez kontekstu."
    },
    {
      "theirWord": "Osoba w Twoim fotelu",
      "perelaiWord": "Klient",
      "why": "Dane kontaktowe, wcześniejsze strzyżenia i notatki pomagają przygotować następną wizytę. Perelai nie wybiera fryzury ani techniki."
    },
    {
      "theirWord": "Barber pracujący samodzielnie",
      "perelaiWord": "Wykonawca",
      "why": "Usługi może wykonywać sam właściciel. Szablon nie wymaga osobnego konta członka zespołu."
    }
  ],
  "setup": {
    "title": "Zacznij od własnego fotela",
    "body": "Na początek otrzymasz dwie usługi, dwa opcjonalne dodatki i kategorię wydatków na ostrza oraz środki dezynfekujące. Zmień nazwy pod swój salon; materiały pozostają kosztem.",
    "steps": [
      {
        "title": "Wybierz szablon dla barbera",
        "body": "Podczas konfiguracji ta strona poleca szablon dla barbera."
      },
      {
        "title": "Dostosuj ofertę",
        "body": "Zostaw cieniowanie, golenie z ręcznikiem i pielęgnację brody, które faktycznie oferujesz. Przycięcie brody i maska na twarz są opcjonalnymi dodatkami — możesz je usunąć."
      },
      {
        "title": "Dodaj pracującego barbera",
        "body": "Jeżeli pracujesz samodzielnie, użyj własnego profilu wykonawcy. Dostęp zespołu jest osobną funkcją STUDIO."
      },
      {
        "title": "Wprowadź najbliższe wizyty",
        "body": "Dodaj klientów, opcjonalnie zaimportuj kontakty vCard i udostępnij gotowy link do rezerwacji."
      }
    ]
  },
  "faq": [
    {
      "q": "Czy mogę korzystać z Perelai jako samodzielny barber?",
      "a": "Tak. Właściciel może sam wykonywać usługi. SOLO obejmuje jednego aktywnego wykonawcę; dodatkowy dostęp zespołu należy do STUDIO."
    },
    {
      "q": "Czy szablon obejmuje usługi związane z brodą?",
      "a": "Tak. Przycięcie brody jest edytowalnym dodatkiem, a klasyczne cieniowanie i golenie z gorącym ręcznikiem to usługi początkowe."
    },
    {
      "q": "Czy mogę zmienić ceny i czas trwania?",
      "a": "Tak. Ustal własne ceny i czas strzyżenia, golenia oraz dodatków. W notatkach możesz opisać wysokość cieniowania, przejścia, kark i baki. Perelai nie narzuca techniki ani cennika."
    },
    {
      "q": "Czy zakończone strzyżenie oznacza zapłatę?",
      "a": "Nie. Zakończenie i płatność są osobne. Odpowiedni przedpłacony pakiet może pokryć usługę bez nowej gotówki podczas wizyty."
    },
    {
      "q": "Czy Perelai oblicza prowizje barberów?",
      "a": "Nie. Zapis strzyżeń i goleń pomaga przeglądać pracę salonu, ale podział utargu pozostaje po Twojej stronie. Wynagrodzenia, prowizje i lista płac nie są obliczane."
    }
  ],
  "labels": {
    "terminologyTitle": "Twoja praca i jej zapis w Perelai",
    "inYourChair": "W Twojej pracy",
    "inPerelai": "W Perelai",
    "whyItMatters": "Co to oznacza",
    "mocksTitle": "Przykładowy obszar roboczy",
    "mocksBody": "Syntetyczne dane z tego szablonu.",
    "faqTitle": "Pytania przed rozpoczęciem"
  },
  "whatItIsNot": {
    "title": "Codzienna ewidencja Twoich usług",
    "body": "Korzystaj z Perelai do umawiania wizyt, obsługi klientów i ewidencji płatności.",
    "items": [
      {
        "title": "Ewidencja operacyjna",
        "body": "Przychód, koszty i wyliczony zysk za okres zależą od wprowadzonych danych. Nie są to raporty podatkowe."
      },
      {
        "title": "Płatności klientów",
        "body": "Zapisuj, jak klient zapłacił. Perelai nie obsługuje przyjmowania płatności kartą."
      }
    ]
  },
  "cta": {
    "title": "Zacznij od kolejnego strzyżenia",
    "body": "Utwórz obszar roboczy dla barbera i prześledź klienta od rezerwacji do zapisu płatności.",
    "label": "Utwórz obszar roboczy",
    "microcopy": "Potwierdź adres e-mail, aby kontynuować konfigurację."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
