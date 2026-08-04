import { personalTrainerResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai dla trenerów personalnych",
    description:
      "Śledź przychód z treningów, zarejestrowane koszty i wyliczony zysk za dowolny okres — z historią klienta i spisaniem karnetów.",
    ogImageAlt:
      "Przegląd finansów Perelai dla trenera personalnego: przychód z treningów, zarejestrowane koszty i wyliczony zysk za okres — dane przykładowe.",
  },

  hero: {
    eyebrow: "Oprogramowanie finansowe dla trenerów personalnych",
    h1: "Siłownia, klienci i karnety — finanse bez ręcznego składania.",
    subhead:
      "Widz przychód z treningów na sali i u klienta, zarejestrowane koszty wynajmu, sprzętu i dojazdów oraz wyliczony zysk za dzień, tydzień, miesiąc, kwartał lub rok. Ukończone treningi, zarejestrowane płatności i spisania karnetów trzymasz osobno — z podziałem na klienta i typ usługi.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Zapełniony grafik sali nie pokazuje, czy miesiąc się spinał",
      body: "Sesje 1:1, bloki siłowe i konsultacje wypełniają tydzień, ale nie odpowiadają, czy zwrócił się wynajem siłowni, dojazdy do klientów i wymiana sprzętu. Kalendarz treningów i koszty praktyki fitness żyją osobno.",
    },
    {
      title: "Karnet na dziesięć treningów zniekształca tygodniowy przepływ gotówki",
      body: "Jednorazowa opłata za blok w pierwszym dniu sprawia, że kolejne tygodnie coachingu wyglądają na darmowe, choć klient regularnie przychodzi na salę. Spisanie kredytu karnetu za każdy odbyty trening utrzymuje obraz okresu uczciwy.",
    },
    {
      title: "Kalendarz, przelewy klientów i paragony za salę — w trzech miejscach",
      body: "Sloty rezerwuje się w aplikacji, opłaty widać w banku, a koszty wynajmu sali i sprzętu — w notatniku. Złożyć finansowy obraz praktyki to znowu ręczna praca.",
    },
  ],

  dayInLife: {
    title: "Rejestruj każdy trening. Czytaj okres, gdy go potrzebujesz.",
    body: "Kończ treningi, rejestruj płatności, spisuj kredyty karnetów i dodawaj koszty sali, dojazdów lub sprzętu fitness. Perelai trzyma te zapisy powiązane z klientem, kategorią usługi i wybranym okresem.",
    steps: [
      {
        title: "Ukończenie treningu i płatność pozostają osobno",
        body: "Ukończenie Treningu Indywidualnego 1:1 rejestruje, że sesja na siłowni się odbyła. Nie rejestruje płatności. Status płatności pozostaje osobną częścią tej samej Wizyty.",
      },
      {
        title: "Płatność pozostaje powiązana z treningiem i klientem",
        body: "Zarejestrowana płatność pozostaje powiązana z danym treningiem i klientem fitness — historię finansową można prześledzić do wykonanej pracy.",
      },
      {
        title: "Kredyty karnetu spisywane są na odbyte treningi",
        body: "Gdy klient korzysta z przedpłaconego Karnetu Treningowego, spisanie kredytu rejestruje się jako rozliczenie bezgotówkowe. Wykonane treningi i zarejestrowane płatności pozostają oddzielne.",
      },
      {
        title: "Czytaj podsumowania treningów za okres",
        body: "Oceniaj przychód z treningów, zarejestrowane koszty sali i sprzętu oraz wyliczony zysk za dzień, tydzień, miesiąc, kwartał lub rok — według klienta i kategorii usługi.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Konsultacja Wstępna, Trening Indywidualny 1:1, Karnet Treningowy, Prowadzenie Online",
      perelaiWord: "Usługi na Wizycie",
      why: "Szablon trenera personalnego daje cztery usługi startowe do coachingu fitness, kondycji i programowania treningów. Każdy zarezerwowany trening staje się Wizytą z klientem, usługą i zapisem płatności razem.",
    },
    {
      theirWord: "Rozpisanie Diety / Planu Treningowego",
      perelaiWord: "Dodatek na Wizycie",
      why: "Dostarczane obok treningów 1:1 lub pakietów treningowych, dodatek żywieniowy lub treningowy staje się częścią zapisu wizyty.",
    },
    {
      theirWord: "Wynajem sali, dojazdy do klientów, sprzęt",
      perelaiWord: "Zarejestrowany wydatek",
      why: "Rejestruj opłaty za salę, dojazdy i koszty sprzętu za okres. Wchodzą w wyliczony zysk wybranego okresu.",
    },
    {
      theirWord: "Blok dziesięciu treningów",
      perelaiWord: "Przedpłacony karnet",
      why: "Przedpłacone karnety klientów leżą jako kredyty i spisywane są trening po treningu, bez zniekształcania przychodu okresu.",
    },
  ],

  setup: {
    title: "Zacznij od listy usług trenera personalnego, nie od pustej strony.",
    body: "Szablon trenera personalnego otwiera się z czterema edytowalnymi usługami i jednym dodatkiem — pierwszy ekran już przypomina działającą praktykę na siłowni.",
    steps: [
      {
        title: "Otwórz przestrzeń pracy trenera personalnego",
        body: "Wejście z tej strony stawia szablon trenera personalnego na pierwszym miejscu w onboardingu, z Konsultacją Wstępną, Treningiem Indywidualnym 1:1, Karnetem Treningowym i Prowadzeniem Online.",
      },
      {
        title: "Dostosuj usługi i kategorie kosztów sali",
        body: "Ustaw długości i ceny treningów, zostaw Rozpisanie Diety / Planu Treningowego jako dodatek, jeśli oferujesz, i rejestruj wydatki siłowni względem wybranych okresów.",
      },
      {
        title: "Rejestruj treningi i przeglądaj wyniki okresu",
        body: "Oznaczaj wizyty jako ukończone, rejestruj płatności, spisuj kredyty karnetów i przeglądaj przychód, zarejestrowane koszty oraz wyliczony zysk za dzień, tydzień, miesiąc, kwartał lub rok.",
      },
    ],
  },

  faq: [
    {
      q: "Jak obsługiwane są przedpłacone pakiety treningowe?",
      a: "Przedpłacone karnety rejestrują się jako kredyty. Gdy klient przychodzi na trening, spisywany jest jeden kredyt — ukończona praca i zarejestrowane płatności pozostają osobno.",
    },
    {
      q: "Czy mogę rejestrować wydatki na wynajem sali lub dojazdy?",
      a: "Tak. Możesz rejestrować istotne wydatki biznesowe za okres. Wchodzą w zarejestrowane koszty i wyliczony zysk wybranego okresu.",
    },
    {
      q: "Czy ukończenie treningu rejestruje też płatność?",
      a: "Nie. Ukończenie i status płatności rejestrują się osobno. Ukończony trening może istnieć, zanim zarejestrowano płatność.",
    },
    {
      q: "Czy usługi szablonu są edytowalne?",
      a: "Tak. Usługi szablonu (Konsultacja Wstępna, Trening Indywidualny 1:1, Karnet Treningowy, Prowadzenie Online) i dodatek Rozpisanie Diety / Planu Treningowego są w pełni edytowalne.",
    },
  ],

  labels: {
    terminologyTitle: "Słownik sali i pojęcia Perelai.",
    inYourChair: "W Twojej praktyce",
    inPerelai: "W Perelai",
    whyItMatters: "Dlaczego to ważne",
    mocksTitle: "Przykład danych praktyki fitness.",
    mocksBody: "Demo używa usług i dodatku szablonu trenera personalnego.",
    faqTitle: "Pytania o rozliczenia treningów.",
  },

  whatItIsNot: {
    title: "Jasno, czym to nie jest.",
    body: "Perelai śledzi ukończone treningi, zarejestrowane koszty i wyliczony zysk w wybranych okresach. To nie kompletny back office siłowni.",
    items: [
      {
        title: "Nie oprogramowanie księgowe",
        body: "Przychód, wydatki i wyliczony zysk są śledzone za okres. Perelai nie prowadzi księgowości, nie składa podatków i nie daje porad finansowych — i nie zastępuje księgowego.",
      },
      {
        title: "Nie tracker fitness ani planer treningów",
        body: "Możesz śledzić usługi, dodatki i spisania karnetów. Programowanie treningów, powtórzenia i postęp fitness nie wchodzą w zakres.",
      },
      {
        title: "Nie marketplace",
        body: "Link do rezerwacji należy do Ciebie. Perelai nie wynajmuje relacji z klientem.",
      },
    ],
  },

  cta: {
    title: "Wiedz, ile wyniósł okres.",
    body: "Zacznij od menu usług trenera personalnego i trzymaj ukończone treningi, zarejestrowane płatności, spisania karnetów i otwarte salda zamówień w uporządkowanej, czytelnej formie.",
    label: "Utwórz przestrzeń pracy",
    microcopy: "Otrzymasz e-mail weryfikacyjny, aby dokończyć konfigurację.",
  },

  research: personalTrainerResearch,
}
