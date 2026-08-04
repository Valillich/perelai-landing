import { personalTrainerResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai für Personal Trainer",
    description:
      "Erfassen Sie Umsatz aus Einheiten, erfasste Kosten und berechneten Gewinn für jeden Zeitraum — mit Kundenhistorie und Paketeinlösungen lesbar.",
    ogImageAlt:
      "Perelai-Finanzübersicht für einen Personal Trainer mit Umsatz aus Einheiten, erfassten Kosten und berechnetem Gewinn für einen Zeitraum — Beispieldaten.",
  },

  hero: {
    eyebrow: "Finanzsoftware für Personal Trainer",
    h1: "Ein klarer Blick auf die Finanzen Ihres Personal Trainings.",
    subhead:
      "Erfassen Sie Umsatz aus Einheiten, erfasste Kosten und berechneten Gewinn für einen Tag, eine Woche, einen Monat, ein Quartal oder ein Jahr. Prüfen Sie das Ergebnis nach Kunde und Leistungskategorie, während abgeschlossene Einheiten, erfasste Zahlungen und Paketeinlösungen getrennt bleiben.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Ein voller Kalender beantwortet die Frage nicht",
      body: "1:1-Trainingseinheiten, Kraftcoaching und Workout-Assessments hintereinander füllen den Tag und sagen nichts über den Monat. Hallenmiete, Fahrten zu Kunden und Ersatz von Fitnessgerät sitzen hinter den Workouts — und nichts davon steht im Kalender.",
    },
    {
      title: "Vorausbezahlte Paketblöcke verdunkeln die Zeitraumübersicht",
      body: "Wenn ein Fitnesskunde einen Zehnerblock im Voraus kauft, lässt das Zählen der Einmalzahlung am ersten Tag die folgenden Coaching-Wochen unvollständig erscheinen. Paketeinlösungen zu erfassen, wenn Kunden zu jeder Einheit kommen, hält abgeschlossene Fitnessarbeit klar.",
    },
    {
      title: "Einheiten, Zahlungen und Ausgaben liegen an verschiedenen Orten",
      body: "Termine sitzen in einer Kalender-App, Kundenzahlungen in einem anderen Tool, Gym-Ausgaben in Notizheften oder Papierquittungen. Den Zeitraum zu prüfen heißt, diese Aufzeichnungen wieder zusammenzubringen.",
    },
  ],

  dayInLife: {
    title: "Erfassen Sie jede Einheit. Lesen Sie den Zeitraum, wenn Sie ihn brauchen.",
    body: "Schließen Sie Einheiten ab, erfassen Sie Zahlungen, lösen Sie Paketguthaben ein und tragen Sie Betriebsausgaben in der normalen Verwaltung ein. Perelai hält diese Einträge mit dem Kunden, der Leistungskategorie und dem gewählten Zeitraum verbunden.",
    steps: [
      {
        title: "Abschluss der Einheit und Zahlung bleiben getrennt",
        body: "Eine 1:1-Trainingseinheit abzuschließen hält fest, dass die Einheit stattgefunden hat. Es erfasst keine Zahlung. Der Zahlungsstatus bleibt ein eigener Teil desselben Termins.",
      },
      {
        title: "Die Zahlung bleibt mit Einheit und Kunde verbunden",
        body: "Eine erfasste Zahlung bleibt mit der betreffenden Einheit und dem Kunden verbunden, sodass die Finanzhistorie zur Arbeit dahinter zurückverfolgt werden kann.",
      },
      {
        title: "Paketguthaben werden gegen besuchte Einheiten eingelöst",
        body: "Wenn ein Kunde ein vorausbezahltes Trainingspaket nutzt, wird das Einlösen eines Guthabens als nicht-bare Abrechnung erfasst. Gelieferte Einheiten und erfasste Zahlungen bleiben getrennt.",
      },
      {
        title: "Trainingszahlen des Zeitraums lesen",
        body: "Prüfen Sie Umsatz aus Einheiten, erfasste Kosten und berechneten Gewinn für einen Tag, eine Woche, einen Monat, ein Quartal oder ein Jahr — geordnet nach Kunde und Leistungskategorie.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Einführungssitzung, 1:1-Trainingseinheit, Trainingspaket, Online-Coachingplan",
      perelaiWord: "Leistungen auf einem Termin",
      why: "Die Personal-Trainer-Vorlage liefert vier Starter-Leistungen für Fitnesscoaching, Kondition und Workout-Programmierung. Jede gebuchte Einheit wird zu einem Termin mit Kunde, Leistung und Zahlungsaufzeichnung zusammen.",
    },
    {
      theirWord: "Individueller Ernährungs-/Trainingsplan",
      perelaiWord: "Zusatzleistung auf einem Termin",
      why: "Zusammen mit 1:1-Einheiten oder Workout-Paketen geliefert, wird ein Ernährungs- oder Workout-Extra Teil des Termineintrags.",
    },
    {
      theirWord: "Hallenmiete, Kundenfahrten, Equipment",
      perelaiWord: "Erfasste Kosten",
      why: "Erfassen Sie Hallengebühren, Fahrten und Gerätekosten für einen Zeitraum. Sie fließen in den berechneten Gewinn des gewählten Zeitraums ein.",
    },
    {
      theirWord: "Zehnerblock",
      perelaiWord: "Vorausbezahltes Paket",
      why: "Vorausbezahlte Kundenpakete liegen als Guthaben und werden Einheit für Einheit eingelöst, ohne den Umsatz des Zeitraums zu verzerren.",
    },
  ],

  setup: {
    title: "Starten Sie mit der Leistungsliste eines Personal Trainers, nicht mit einer leeren Seite.",
    body: "Die Personal-Trainer-Vorlage öffnet mit vier bearbeitbaren Leistungen und einer Zusatzleistung — der erste Bildschirm sieht schon wie eine arbeitende Fitnesspraxis aus.",
    steps: [
      {
        title: "Öffnen Sie den Personal-Trainer-Arbeitsbereich",
        body: "Über diese Seite steht die Personal-Trainer-Vorlage beim Onboarding an erster Stelle, vorausgefüllt mit Einführungssitzung, 1:1-Trainingseinheit, Trainingspaket und Online-Coachingplan.",
      },
      {
        title: "Leistungen und Kostenarten anpassen",
        body: "Legen Sie Längen und Preise Ihrer Einheiten fest, behalten Sie den Individuellen Ernährungs-/Trainingsplan als Zusatzleistung, wenn Sie ihn anbieten, und erfassen Sie relevante Gym-Ausgaben gegen gewählte Zeiträume.",
      },
      {
        title: "Einheiten erfassen und Zeitraumzahlen prüfen",
        body: "Markieren Sie Termine als abgeschlossen, erfassen Sie Zahlungen, lösen Sie Paketguthaben ein und prüfen Sie Umsatz, erfasste Ausgaben und berechneten Gewinn für Tag, Woche, Monat, Quartal oder Jahr.",
      },
    ],
  },

  faq: [
    {
      q: "Wie werden vorausbezahlte Workout-Pakete behandelt?",
      a: "Vorausbezahlte Pakete werden als Guthaben erfasst. Wenn ein Kunde zu einer Einheit erscheint, wird ein Guthaben eingelöst — so bleiben abgeschlossene Arbeit und erfasste Zahlungen getrennt.",
    },
    {
      q: "Kann ich Ausgaben wie Hallenmiete oder Fahrten erfassen?",
      a: "Ja. Sie können relevante Betriebsausgaben für einen Zeitraum erfassen. Sie fließen in die erfassten Kosten und den berechneten Gewinn des gewählten Zeitraums ein.",
    },
    {
      q: "Erfasst der Abschluss einer Einheit auch eine Zahlung?",
      a: "Nein. Abschluss und Zahlungsstatus werden getrennt erfasst. Eine abgeschlossene Einheit kann existieren, bevor eine Zahlung erfasst ist.",
    },
    {
      q: "Sind die Vorlagen-Leistungen bearbeitbar?",
      a: "Ja. Die Vorlagen-Leistungen (Einführungssitzung, 1:1-Trainingseinheit, Trainingspaket, Online-Coachingplan) und der Individuelle Ernährungs-/Trainingsplan als Zusatzleistung sind vollständig bearbeitbar.",
    },
  ],

  labels: {
    terminologyTitle: "Personal-Training-Begriffe und Perelai-Konzepte.",
    inYourChair: "In Ihrer Praxis",
    inPerelai: "In Perelai",
    whyItMatters: "Warum es wichtig ist",
    mocksTitle: "Personal-Training-Daten, wie sie im Produkt erscheinen.",
    mocksBody: "Die Beispieldaten nutzen die Leistungen und die Zusatzleistung der Personal-Trainer-Vorlage.",
    faqTitle: "Häufig gestellte Fragen.",
  },

  whatItIsNot: {
    title: "Klar darüber, was es nicht ist.",
    body: "Perelai verfolgt abgeschlossene Workout-Einheiten, erfasste Kosten und berechneten Gewinn über gewählte Zeiträume. Es ist kein komplettes Gym-Backoffice.",
    items: [
      {
        title: "Keine Buchhaltungssoftware",
        body: "Umsatz, Ausgaben und berechneter Gewinn werden für einen Zeitraum erfasst. Perelai macht keine Buchführung, keine Steuererklärung und keine Finanzberatung — und ersetzt Ihren Steuerberater nicht.",
      },
      {
        title: "Kein Fitness-Tracker und kein Workout-Planer",
        body: "Sie können Leistungen, Zusatzleistungen und Paketeinlösungen erfassen. Workout-Programmierung, Wiederholungen und Fitnessfortschritt gehören nicht dazu.",
      },
      {
        title: "Kein Marktplatz",
        body: "Ihr Buchungslink gehört Ihnen. Perelai mietet die Kundenbeziehung nicht.",
      },
    ],
  },

  cta: {
    title: "Wissen Sie, was der Zeitraum ergeben hat.",
    body: "Beginnen Sie mit einem Personal-Trainer-Menü und halten Sie abgeschlossene Einheiten, erfasste Zahlungen, Paketeinlösungen und offene Bestellungssalden strukturiert und lesbar.",
    label: "Arbeitsbereich erstellen",
    microcopy: "Sie erhalten eine Bestätigungs-E-Mail, um die Einrichtung abzuschließen.",
  },

  research: personalTrainerResearch,
}
