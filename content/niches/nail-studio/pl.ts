import type { NichePageContent } from "@/content/niches/types"

// Illustrative workflow; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai dla stylistek i stylistów paznokci",
    "description": "Planuj manicure i pedicure, dodawaj pokrycie lub zdobienia i zachowuj wizyty klientów wraz z płatnościami.",
    "ogImageAlt": "Perelai dla stylistek i stylistów paznokci"
  },
  "hero": {
    "eyebrow": "Wizyty na stylizację paznokci",
    "h1": "Manicure, zdobienia i płatność — wszystko pod ręką.",
    "subhead": "Planuj manicure i pedicure, dodawaj pokrycie lub zdobienia i zachowuj wizyty klientów wraz z płatnościami.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "Usunięcie poprzedniego pokrycia też zajmuje czas",
      "body": "Klientka wraca z kolorem z poprzedniej wizyty. Przed nowym pokryciem sprawdź, czy uwzględniono usuwanie lakieru hybrydowego. Usunięcie i manicure mają osobne pozycje i ceny."
    },
    {
      "title": "Zdobienie zmienia zakres wykonanej pracy",
      "body": "Zwykłe pokrycie staje się bardziej szczegółowym wzorem. Dodaj zdobienie do manicure z ustaloną ceną, zamiast zostawiać tę decyzję wyłącznie w rozmowie."
    },
    {
      "title": "Stała klientka to więcej niż termin",
      "body": "Przed kolejną stylizacją przejrzyj wcześniejsze manicure i preferowane kolory lub wzory. Po zakończeniu zapisz wykonanie i sposób rozliczenia."
    }
  ],
  "dayInLife": {
    "title": "Jedna wizyta — od usunięcia do wykończenia",
    "body": "Zapis oprzyj na faktycznie wykonanych usługach.",
    "steps": [
      {
        "title": "Wybierz usługi na dany termin",
        "body": "Zarezerwuj czas na manicure klasyczny, pedicure klasyczny, lakier hybrydowy lub jego usunięcie. Samodzielnie określasz czas każdej usługi; szablon go nie narzuca."
      },
      {
        "title": "Dodaj wybrane zdobienie",
        "body": "Użyj dodatku ze zdobieniami, gdy je wykonasz. Dodatkowa praca i jej cena pozostają przy wizycie klientki."
      },
      {
        "title": "Zakończ usługę i zapisz płatność",
        "body": "Zapisz zakończenie, a potem płatność lub wykorzystanie odpowiedniego przedpłaconego pakietu. Wykorzystanie pakietu nie daje nowego wpływu gotówki."
      },
      {
        "title": "Przygotuj kolejną wizytę",
        "body": "Następna rezerwacja i historia poprzednich usług pozostają w karcie klientki."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Manicure, pedicure i pokrycie",
      "perelaiWord": "Usługi",
      "why": "To edytowalne pozycje oferty, umawiane dla konkretnej osoby na określoną godzinę."
    },
    {
      "theirWord": "Zdobienie paznokci",
      "perelaiWord": "Dodatki",
      "why": "Wzór należy do wizyty, podczas której został wykonany."
    },
    {
      "theirWord": "Powracająca klientka",
      "perelaiWord": "Klient",
      "why": "Karta zachowuje dane kontaktowe i wcześniejsze wizyty."
    },
    {
      "theirWord": "Przedpłacona seria wybranych usług",
      "perelaiWord": "Karnety",
      "why": "Seria może pokryć uprawniony manicure lub pedicure. Wykorzystanie jej salda rozlicza wizytę, zamiast ponownie pobierać opłatę za całą serię."
    }
  ],
  "setup": {
    "title": "Ułóż własną ofertę stylizacji paznokci",
    "body": "Cztery usługi początkowe rozdzielają manicure, pedicure, pokrycie i usunięcie. Są też dwa opcjonalne dodatki i kategoria kosztów lakierów oraz narzędzi. To zwykłe usługi kosmetyczne, nie dokumentacja kliniczna.",
    "steps": [
      {
        "title": "Otwórz szablon stylizacji paznokci",
        "body": "Strona poleca szablon, który sprawdzi się również u samodzielnej stylistki lub stylisty paznokci."
      },
      {
        "title": "Ustal czas i ceny",
        "body": "Dostosuj manicure i pedicure do zwykłej pielęgnacji kosmetycznej. Rozdziel pokrycie i jego usunięcie, a dekoracje dodawaj jako zdobienia. Strona nie obiecuje obsługi podologii ani leczenia."
      },
      {
        "title": "Dodaj siebie jako wykonawcę",
        "body": "Usługi może wykonywać jedna osoba będąca właścicielem. Wymóg wskazania wykonawcy nie oznacza osobnego konta członka zespołu."
      },
      {
        "title": "Zacznij od następnej klientki",
        "body": "Dodaj klientkę i umów usługę. Import kontaktów vCard jest opcjonalny."
      }
    ]
  },
  "faq": [
    {
      "q": "Czy mogę pracować samodzielnie?",
      "a": "Tak. Właściciel może być wykonawcą. SOLO obsługuje jednego aktywnego wykonawcę bez dodatkowego dostępu zespołu."
    },
    {
      "q": "Czy mogę uwzględnić usunięcie hybrydy?",
      "a": "Tak. Usuwanie lakieru hybrydowego to usługa początkowa, którą możesz zachować, zmienić lub usunąć z oferty."
    },
    {
      "q": "Gdzie zapisać zdobienie?",
      "a": "French lub akcent na jednym paznokciu możesz ująć jako zdobienie. Nazwij dodatek zgodnie z ofertą i dopisz cenę do manicure. Wizyta obejmie wtedy zarówno pokrycie, jak i dekorację."
    },
    {
      "q": "Czy to system do podologii lub dokumentacji leczenia?",
      "a": "Ta strona obejmuje zwykły kosmetyczny manicure, pedicure i pokrycia. Działalność medyczna i dokumentacja kliniczna pozostają poza zakresem MVP."
    },
    {
      "q": "Czy wykorzystanie pakietu zostanie policzone jako kolejna płatność?",
      "a": "Nie. Sprzedaż przedpłaconej serii i wykorzystanie jednego manicure to różne zdarzenia. Sprzedaż zapisujesz raz, a wykorzystanie pomniejsza saldo. Nie tworzy kolejnej płatności ani nowego przychodu."
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
    "title": "Zachowaj pełny obraz następnego manicure",
    "body": "Zacznij od swojej oferty, umów klientkę i połącz wykonaną pracę z ewidencją płatności.",
    "label": "Utwórz obszar roboczy",
    "microcopy": "Potwierdź adres e-mail, aby kontynuować konfigurację."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
