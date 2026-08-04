import { musicTeacherResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai für Musiklehrer",
    description:
      "Erfassen Sie Umsatz aus Unterricht, erfasste Kosten und berechneten Gewinn für jeden Zeitraum — mit Schülerhistorie und Paketeinlösungen lesbar.",
    ogImageAlt:
      "Perelai-Finanzübersicht für einen Musiklehrer mit Umsatz aus Unterricht, erfassten Kosten und berechnetem Gewinn für einen Zeitraum — Beispieldaten.",
  },

  hero: {
    eyebrow: "Finanzsoftware für Musiklehrer",
    h1: "Ein klarer Blick auf die Finanzen Ihres Privatunterrichts.",
    subhead:
      "Erfassen Sie Umsatz aus Unterricht, erfasste Ausgaben und berechneten Gewinn für einen Tag, eine Woche, einen Monat, ein Quartal oder ein Jahr. Prüfen Sie das Ergebnis nach Schüler und Unterrichtskategorie, während abgeschlossene Stunden, erfasste Zahlungen und Paketeinlösungen getrennt bleiben.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Unterrichtsstunden verdecken die Studioausgaben",
      body: "Ein Stundenplan voller Klavierunterricht, Gitarrenstunden und Blattspiel-Übung zeigt Unterrichtsaktivität, nicht das Finanzergebnis des Zeitraums. Klavierstimmen, Saitenwechsel und Notendruck liegen neben den Unterrichtsstunden — und stehen nicht im Studio-Kalender.",
    },
    {
      title: "Vorauszahlungen für das Semester erschweren die Wochenübersicht",
      body: "Das volle Semesterhonorar bei der Anmeldung zu nehmen, verschleiert, ob spätere Unterrichtswochen neue Geldbewegungen erzeugt haben. Nicht-bare Guthabeneinlösungen je besuchter Stunde zu erfassen, hält abgeschlossenen Instrumentalunterricht transparent.",
    },
    {
      title: "Stunden, Zahlungen und Ausgaben liegen an verschiedenen Orten",
      body: "Privatstunden werden im Kalender gebucht, Schülerhonorare kommen per Überweisung, während Noten und Stimmquittungen in Schubladen landen. Studiofinanzen zu prüfen heißt, diese fragmentierten Aufzeichnungen zu sammeln.",
    },
  ],

  dayInLife: {
    title: "Erfassen Sie jede Stunde. Lesen Sie den Zeitraum, wenn Sie ihn brauchen.",
    body: "Schließen Sie Stunden ab, erfassen Sie Zahlungen, lösen Sie Paketguthaben ein und tragen Sie Unterrichtsausgaben in der normalen Verwaltung ein. Perelai hält diese Einträge mit dem Schüler, der Unterrichtskategorie und dem gewählten Zeitraum verbunden.",
    steps: [
      {
        title: "Abschluss der Stunde und Zahlungsstatus sind getrennt",
        body: "Eine Klavierstunde als abgeschlossen zu markieren, hält fest, dass unterrichtet wurde. Die Zahlungserfassung ist ein eigener Teil des Termins.",
      },
      {
        title: "Zahlungen bleiben mit Stunde und Schüler verbunden",
        body: "Wenn eine Zahlung erfasst wird, hängt sie an dem konkreten Schüler und der Stunde — die Finanzhistorie bleibt an dem erteilten Unterricht.",
      },
      {
        title: "Semesterblock-Guthaben gelten für geplante Termine",
        body: "Ein Guthaben aus einem Semester-Unterrichtsblock abzubuchen, schließt den Termin ohne Geldbewegung. Gelieferter Unterricht und Zahlungsaufzeichnungen bleiben getrennt.",
      },
      {
        title: "Studio-Finanzergebnis ansehen",
        body: "Sehen Sie Umsatz aus Unterricht, erfasste Kosten und berechneten Gewinn für Tag, Woche, Monat, Quartal oder Jahr — aufgeschlüsselt nach Schüler oder Unterrichtskategorie.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Klavierunterricht, Gitarrenunterricht",
      perelaiWord: "Leistungen auf einem Termin",
      why: "Die Musiklehrer-Vorlage enthält zwei Starter-Unterrichtsarten für Repertoire, Gehörbildung und Tonleitern. Jede geplante Stunde wird zu einem Termin mit Schüler, Unterrichtsart und Zahlungsaufzeichnung zusammen.",
    },
    {
      theirWord: "Notenblätter",
      perelaiWord: "Zusatzleistung auf einem Termin",
      why: "Notenbücher oder ausgedruckte Partituren werden als Zusatzleistungen am Schülertermin erfasst.",
    },
    {
      theirWord: "Instrumentenwartung",
      perelaiWord: "Erfasste Kosten",
      why: "Erfassen Sie Stimmen, Saitenwechsel und andere Unterrichtsausgaben als Kosten des Zeitraums. Sie fließen in den berechneten Gewinn des gewählten Zeitraums ein.",
    },
    {
      theirWord: "Semester-Unterrichtsblock",
      perelaiWord: "Vorausbezahltes Paket",
      why: "Vorausbezahlte Unterrichtspakete liegen als Guthaben und werden Stunde für Stunde eingelöst, ohne den Umsatz des Zeitraums zu verzerren.",
    },
  ],

  setup: {
    title: "Starten Sie mit der Stundenliste eines Musikstudios, nicht mit einer leeren Seite.",
    body: "Die Musiklehrer-Vorlage öffnet mit zwei bearbeitbaren Unterrichtsarten, einer Zusatzleistung und einer Kostenart — der erste Bildschirm sieht schon wie ein arbeitendes Studio aus.",
    steps: [
      {
        title: "Richten Sie Ihren Unterrichtskatalog ein",
        body: "Wählen Sie Dauern und Honorare aus der vorausgefüllten Musiklehrer-Vorlage.",
      },
      {
        title: "Stunden planen und relevante Positionen hinzufügen",
        body: "Planen Sie wiederkehrende Stunden, schließen Sie Termine ab und fügen Sie Notenblätter hinzu, wenn sie Teil des Stundeneintrags sind.",
      },
      {
        title: "Studioleistung nach Zeitraum verfolgen",
        body: "Prüfen Sie Umsatz, erfasste Kosten und berechneten Gewinn über Tag, Woche, Monat, Quartal oder Jahr.",
      },
    ],
  },

  faq: [
    {
      q: "Wie werden vorausbezahlte Semester-Unterrichtspakete behandelt?",
      a: "Semesterpakete liegen als Guthaben. Wenn ein Schüler kommt, wird ein Guthaben eingelöst — so bleiben erteilte Stunden und Honorare getrennt.",
    },
    {
      q: "Kann ich Ausgaben wie Klavierstimmen oder Saitenwechsel erfassen?",
      a: "Ja. Sie können relevante Unterrichtsausgaben erfassen. Sie fließen in die Kosten und den berechneten Gewinn des gewählten Zeitraums ein.",
    },
    {
      q: "Erfasst der Abschluss einer Stunde auch eine Zahlung?",
      a: "Nein. Abschluss und Zahlungsstatus werden getrennt erfasst. Eine abgeschlossene Stunde kann existieren, bevor eine Zahlung erfasst ist.",
    },
    {
      q: "Sind die Unterrichtsoptionen der Vorlage anpassbar?",
      a: "Ja. Sie können die Starter-Leistungen (Klavierunterricht, Gitarrenunterricht), die Zusatzleistung Notenblätter und die Kostenart Instrumentenwartung bearbeiten oder erweitern.",
    },
  ],

  labels: {
    terminologyTitle: "Musikunterrichtsbegriffe und Perelai-Konzepte.",
    inYourChair: "In Ihrem Studio",
    inPerelai: "In Perelai",
    whyItMatters: "Warum es wichtig ist",
    mocksTitle: "Musikstudio-Daten, wie sie im Produkt erscheinen.",
    mocksBody: "Die Beispieldaten nutzen Leistungen, Zusatzleistung und Kostenart der Musiklehrer-Vorlage.",
    faqTitle: "Häufig gestellte Fragen.",
  },

  whatItIsNot: {
    title: "Klar darüber, was es nicht ist.",
    body: "Perelai erfasst abgeschlossene Stunden, Unterrichtsausgaben und berechneten Gewinn für einen gewählten Zeitraum. Es ist nicht Ihr komplettes Studio-Backoffice.",
    items: [
      {
        title: "Keine Buchhaltungssoftware",
        body: "Es zeigt Umsatz, erfasste Ausgaben und berechneten Gewinn für einen Zeitraum. Buchführung, Steuererklärung und Finanzberatung bleiben bei Ihrem Steuerberater.",
      },
      {
        title: "Keine Notensatz- oder Notationssoftware",
        body: "Sie können Leistungen, Zusatzleistungen und Paketeinlösungen erfassen. Notensatz, Komposition und Audioaufnahme gehören nicht dazu.",
      },
      {
        title: "Kein Marktplatz",
        body: "Ihr Buchungslink gehört Ihnen. Perelai stellt sich nicht zwischen Sie und Ihre Schüler.",
      },
    ],
  },

  cta: {
    title: "Wissen Sie, was der Zeitraum ergeben hat.",
    body: "Starten Sie mit einer Studio-Stundenliste und halten Sie abgeschlossenen Unterricht, erfasste Zahlungen, Paketeinlösungen und offene Bestellungssalden als lesbare Einträge.",
    label: "Arbeitsbereich erstellen",
    microcopy: "Sie erhalten eine Bestätigungs-E-Mail, um die Einrichtung abzuschließen.",
  },

  research: musicTeacherResearch,
}
