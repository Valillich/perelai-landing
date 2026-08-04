import { hairSalonResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai für Friseursalon-Inhaber",
    description:
      "Erfassen Sie Umsatz, erfasste Kosten und berechneten Gewinn für jeden Zeitraum — aufgeschlüsselt nach Leistungskategorie und Kunde.",
    ogImageAlt:
      "Perelai-Finanzübersicht für einen Friseursalon mit Umsatz, Kosten und berechnetem Gewinn für einen Zeitraum sowie einer Aufschlüsselung nach Leistungskategorie — Beispieldaten.",
  },

  hero: {
    eyebrow: "Finanzsoftware für Friseursalon-Inhaber",
    h1: "Sehen Sie den Monatsabschluss Ihres Salons, ohne ihn von Hand neu aufzubauen.",
    subhead:
      "Erfassen Sie Umsatz, erfasste Kosten und berechneten Gewinn für jeden Zeitraum. Prüfen Sie das Ergebnis nach Leistungskategorie und Kunde, während erfasste Zahlungen und offene Bestellungs- oder Ratensalden getrennt bleiben.",
    mock: "colorist-workspace",
  },

  pains: [
    {
      title: "Der Monat wird rekonstruiert, nicht gelesen",
      body: "Umsatz steckt im Buchungssystem, Zahlungen verteilen sich über Konten, und Produktkosten kommen Wochen später auf Lieferantenrechnungen. Der Monatsabschluss wird zu einem Abend, an dem Sie aus Erinnerung und Kartenterminal-Zusammenfassung neu zusammensetzen, was schon passiert ist.",
    },
    {
      title: "Umsatz allein zeigt nicht, was der Monat gekostet hat",
      body: "Ein voller Plan kann Produktkosten, Miete und andere erfasste Ausgaben trotzdem verbergen. Erfahrene Inhaber fragen, was eine Zahl schon berücksichtigt, bevor sie ihr vertrauen. Perelai hält Umsatz, erfasste Kosten und berechneten Gewinn als getrennte Zahlen sichtbar.",
    },
    {
      title: "Die Tools erzählen keine gemeinsame Geschichte",
      body: "Termine, Kundenhistorie und Zahlungsaufzeichnungen liegen oft in verschiedenen Systemen, die keine Daten austauschen — also muss jemand an zwei oder drei Stellen nachschauen, um eine Frage zu beantworten. Perelai hält jedes erfasste Finanzereignis mit dem Kunden und der Arbeit dahinter verbunden.",
    },
  ],

  dayInLife: {
    title: "Erfassen Sie den Tag, während er läuft. Lesen Sie den Monat, wenn Sie ihn brauchen.",
    body: "Schließen Sie Termine ab, erfassen Sie Zahlungen, lösen Sie Pakete ein und tragen Sie Kosten als Teil der Tagesarbeit ein. Perelai hält jeden Eintrag mit dem Kunden, der Leistungskategorie und dem Zeitraum verbunden, zu dem er gehört — so beginnt die Monatsprüfung bei einer Aufzeichnung statt bei einer Rekonstruktion.",
    steps: [
      {
        title: "Ein Termin ist abgeschlossen, noch nicht beglichen",
        body: "Damenschnitt als erledigt zu markieren, hält fest, dass die Arbeit stattgefunden hat. Es behauptet nicht, dass Geld angekommen ist. Der Termin bleibt in einem Zustand, den Sie sehen können, statt stillschweigend als Umsatz zu zählen.",
      },
      {
        title: "Eine Zahlung hängt an der Arbeit, die sie bezahlt hat",
        body: "Wenn der Kunde bezahlt, hängt die Zahlung an diesem Termin — nicht an einer anonymen Tagesgesamtsumme. So bleibt die Zahl mit dem Kunden und der Leistungskategorie dahinter verbunden.",
      },
      {
        title: "Eine Paketeinlösung schließt ab, ohne neue Zahlung",
        body: "Ein vorausbezahlter Kunde, der eine Behandlung einlöst, schließt den Termin ab und bewegt an diesem Tag kein Geld. Perelai erfasst die Einlösung, sodass erfasste Zahlungen und realisierter Umsatz zwei getrennte Zahlen bleiben statt einer irreführenden.",
      },
      {
        title: "Der Zeitraum antwortet",
        body: "Wählen Sie Tag, Woche, Monat, Quartal oder Jahr und lesen Sie Umsatz, erfasste Kosten und berechneten Gewinn dafür — mit Aufschlüsselung nach Leistungskategorie und Kunde darunter und jedem offenen Bestellungssaldo getrennt gehalten.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Damenschnitt, Ansatzfärbung, Balayage / Mehrdimensionale Farbe, Gloss & Toner, Behandlung",
      perelaiWord: "Leistungen auf einem Termin",
      why: "Die Salon-Vorlage startet mit diesen fünf, bearbeitbar. Jeder gebuchte Termin wird zu einem Termin, der Kunde, Leistung und Geldaktivität zusammenführt.",
    },
    {
      theirWord: "Föhnen & Styling oder Bond-Behandlung am Stuhl dazugebucht",
      perelaiWord: "Zusatzleistungen",
      why: "Die Extraarbeit hängt an dem Termin, an dem sie ausgeführt wurde — so entspricht der Eintrag dem, was passiert ist, nicht dem, was ursprünglich gebucht war.",
    },
    {
      theirWord: "Farbarbeit im Vergleich zu Finishing-Arbeit",
      perelaiWord: "Leistungskategorie",
      why: "Umsatz und Kosten werden nach Kategorie gruppiert, sodass die Aufschlüsselung Farbarbeit mit Finishing vergleicht. Sie meldet keine eigene Zahl für jede einzelne Leistung auf der Liste.",
    },
    {
      theirWord: "Haarfarbe-Produkt und Einwegartikel",
      perelaiWord: "Verknüpfte Kosten",
      why: "Sie werden als Kosten für den Zeitraum erfasst und erscheinen in derselben Ansicht wie der Kategorieumsatz, den sie unterstützt haben — statt nur auf einer Lieferantenabrechnung. Perelai misst nicht, wie viel Produkt eine einzelne Formel verbraucht hat.",
    },
    {
      theirWord: "Ein Kunde auf einem vorausbezahlten Kurs von Terminen",
      perelaiWord: "Paket",
      why: "Guthaben wird abgebucht, wenn Termine genutzt werden. Eine Einlösung schließt den Termin ab und erzeugt keine Geldbewegung — deshalb erscheinen eingelöste Arbeit und erfasste Zahlungen als unterschiedliche Dinge.",
    },
    {
      theirWord: "Ein Behandlungskurs, der über mehrere Termine abgezahlt wird",
      perelaiWord: "Bestellung und Raten",
      why: "Was noch geschuldet wird, bleibt an dieser Bestellung hängen — ein offener Betrag hat einen klaren Umfang statt eines vagen Gefühls, dass jemand etwas schuldet.",
    },
    {
      theirWord: "Umsatz minus erfasste Kosten des Zeitraums",
      perelaiWord: "Gewinn",
      why: "Die Gewinnzahl in Perelai ist Umsatz minus die für den gewählten Zeitraum erfassten Ausgaben. Eine operative Zahl für den Salonbetrieb — kein Buchhaltungs- oder Steuerergebnis.",
    },
    {
      theirWord: "Was jedes Teammitglied sehen und tun kann",
      perelaiWord: "Zugang als Mitarbeiter oder Supervisor",
      why: "Jede Person wird mit einer Rolle eingeladen, und der Zugang folgt dieser Rolle — so kann ein Team in einem Arbeitsbereich arbeiten, ohne dass jedes Konto gleich eingerichtet ist.",
    },
  ],

  setup: {
    title: "Starten Sie mit der Leistungsliste eines Salons, nicht mit einer leeren Seite.",
    body: "Die Salon-Vorlage öffnet mit fünf bearbeitbaren Leistungen, zwei Zusatzleistungen und zwei verknüpften Kostenarten — der erste Bildschirm sieht schon wie ein arbeitender Salon aus.",
    steps: [
      {
        title: "Öffnen Sie den Salon-Arbeitsbereich",
        body: "Wenn Sie über diese Seite kommen, steht die Salon-Vorlage beim Onboarding an erster Stelle. Sie starten mit Damenschnitt, Ansatzfärbung, Balayage / Mehrdimensionale Farbe, Gloss & Toner und Behandlung — statt eine Leistungsliste aus dem Nichts zu benennen.",
      },
      {
        title: "Machen Sie Menü und Kosten zu Ihren",
        body: "Passen Sie Dauer und Preise an, behalten Sie Föhnen & Styling und Bond-Behandlung als Zusatzleistungen, wenn Sie sie anbieten, und behalten Sie Haarfarbe-Produkt und Einwegartikel als die Kostenarten, die Sie je Zeitraum erfassen.",
      },
      {
        title: "Fügen Sie die Personen hinzu, die den Salon führen",
        body: "Laden Sie Teammitglieder mit Zugang als Mitarbeiter oder Supervisor ein und halten Sie Arbeitszeiten, Abwesenheiten und zugewiesene Leistungen zusammen. Der Zugang folgt der Rolle, mit der jede Person eingeladen wird.",
      },
      {
        title: "Bringen Sie mit, was diese Woche hilft",
        body: "Importieren Sie Kontakte per vCard, verbinden Sie Google Kalender und teilen Sie Ihren Buchungslink. Beginnen Sie mit den nächsten Wochen, statt den Salon für eine Migration zu pausieren.",
      },
    ],
  },

  faq: [
    {
      q: "Sind die Leistungen des Salons schon eingerichtet?",
      a: "Ja. Die Salon-Vorlage startet mit Damenschnitt, Ansatzfärbung, Balayage / Mehrdimensionale Farbe, Gloss & Toner und Behandlung, plus Föhnen & Styling und Bond-Behandlung als Zusatzleistungen sowie Haarfarbe-Produkt und Einwegartikel als verknüpfte Kosten. Alles ist bearbeitbar.",
    },
    {
      q: "Wie detailliert ist die Leistungsaufschlüsselung?",
      a: "Umsatz und Kosten werden nach Leistungskategorie gruppiert — so können Sie Farbarbeit mit Finishing über einen gewählten Zeitraum vergleichen und die Umsatzhistorie eines Kunden über die Zeit sehen. Perelai berechnet keine Profitabilität für jede einzelne Leistung auf Ihrer Liste.",
    },
    {
      q: "Erfasst Perelai die Farbe in jeder Formel?",
      a: "Nein. Perelai erfasst Kosten nach Zeitraum und Leistungskategorie. Es wiegt keine Farbe, berechnet keinen Formelverbrauch und verwaltet kein Backbar-Lager. Wenn Sie die genauen Produktkosten hinter einer einzelnen Formel brauchen, ist das ein anderes Werkzeug.",
    },
    {
      q: "Zählt ein abgeschlossener Termin als erhaltenes Geld?",
      a: "Nein. Abgeschlossene Arbeit, realisierter Umsatz und erfasste Zahlungen werden getrennt geführt. Ein Termin kann fertig sein und trotzdem auf Zahlung warten, und ein vorausbezahltes Paket kann einen Termin schließen, ohne dass an diesem Tag Geld bewegt wird. Die drei getrennt zu halten, gibt der Zeitraumzahl eine klare Bedeutung.",
    },
    {
      q: "Was steckt in der Gewinnzahl?",
      a: "Umsatz für den gewählten Zeitraum, minus die dagegen erfassten Ausgaben. Eine Berechnung für den Salonbetrieb — kein Buchhaltungs- oder Steuerergebnis, und kein Ersatz für Ihren Steuerberater.",
    },
    {
      q: "Kann mein Team denselben Arbeitsbereich nutzen?",
      a: "Ja. Laden Sie Teammitglieder mit Zugang als Mitarbeiter oder Supervisor ein. Arbeitszeiten, Abwesenheiten und zugewiesene Leistungen bleiben im selben Arbeitsbereich, mit Zugang nach Rolle.",
    },
  ],

  labels: {
    terminologyTitle: "Salonworte — und wie sie in Perelai heißen.",
    inYourChair: "In Ihrem Salon",
    inPerelai: "In Perelai",
    whyItMatters: "Warum es wichtig ist",
    mocksTitle: "Salondaten, wie sie im Produkt erscheinen.",
    mocksBody: "Die Beispieldaten nutzen die Leistungen, Zusatzleistungen und verknüpften Kosten der Salon-Vorlage.",
    faqTitle: "Was Friseursalon-Inhaber zuerst fragen.",
  },

  whatItIsNot: {
    title: "Klar darüber, was es nicht ist.",
    body: "Perelai verfolgt das Geld, das an der Arbeit Ihres Salons hängt. Es gibt nicht vor, der Rest Ihres Backoffice zu sein.",
    items: [
      {
        title: "Keine Buchhaltungssoftware",
        body: "Es erfasst Umsatz, Kosten und eine berechnete Gewinnzahl für einen Zeitraum. Es macht keine Buchführung, keine Steuererklärung und keine Finanzberatung — und ersetzt Ihren Steuerberater nicht.",
      },
      {
        title: "Kein Lohn oder HR",
        body: "Sie können Teammitglieder einladen und Arbeitszeiten, Abwesenheiten und zugewiesene Leistungen zusammenhalten. Löhne, Provision und Zeiterfassung gehören nicht dazu.",
      },
      {
        title: "Kein Backbar-Lager",
        body: "Haarfarbe-Produkt und Einwegartikel werden als Kosten für einen Zeitraum erfasst. Perelai wiegt kein Produkt, verfolgt keinen Verbrauch pro Formel und bestellt keinen Bestand nach.",
      },
    ],
  },

  cta: {
    title: "Sehen Sie den Monat, ohne ihn neu aufzubauen.",
    body: "Starten Sie mit einer Salon-Leistungsliste und halten Sie abgeschlossene Arbeit, erfasste Zahlungen, Paketeinlösungen und offene Bestellungssalden als getrennte, lesbare Einträge.",
    label: "Arbeitsbereich erstellen",
    microcopy: "Sie erhalten eine Bestätigungs-E-Mail, um die Einrichtung abzuschließen.",
  },

  research: hairSalonResearch,
}
