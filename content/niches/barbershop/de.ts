import type { NichePageContent } from "@/content/niches/types"

// Illustrative workflow; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai für Barber",
    "description": "Planen Sie Haarschnitte und Bartpflege, behalten Sie die Kundenhistorie und erfassen Sie Zahlungen in einem Arbeitsbereich.",
    "ogImageAlt": "Perelai für Barber"
  },
  "hero": {
    "eyebrow": "Termine für Barber",
    "h1": "Haarschnitt, Kunde und Zahlung gehören zusammen.",
    "subhead": "Planen Sie Haarschnitte und Bartpflege, behalten Sie die Kundenhistorie und erfassen Sie Zahlungen in einem Arbeitsbereich.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "Ein Barttrimmen erweitert den Termin",
      "body": "Beim Fade wünscht der Kunde zusätzlich eine Bartkontur. Erfassen Sie das Barttrimmen neben dem Haarschnitt mit eigenem Preis, damit der Eintrag der Arbeit am Stuhl entspricht."
    },
    {
      "title": "Beim nächsten Besuch zählt die Vorgeschichte",
      "body": "Ein Stammkunde wünscht einen tief angesetzten Fade mit mehr Volumen oben. Bevor Sie zum Haarschneider greifen, lesen Sie seine Notizen: Scheitel, gewünschte Länge und Konturen hinter den Ohren. Manche bevorzugen einen weichen Scherenübergang, andere eine klare Linie. Diese Wünsche bleiben beim Kontakt und helfen beim nächsten Schnitt."
    },
    {
      "title": "Ein besetzter Stuhl bedeutet noch keinen Zahlungseingang",
      "body": "Die Rasur mit heißem Handtuch ist fertig und der Kunde geht zur Kasse. Abschluss und Zahlung erfassen unterschiedliche Vorgänge. Ein passendes vorausbezahltes Paket kann die Rasur ohne neue Einnahme abdecken."
    }
  ],
  "dayInLife": {
    "title": "Von der Buchung bis zum nächsten Schnitt",
    "body": "Verfolgen Sie einen konkreten Haarschnitt durch Ihren Arbeitstag.",
    "steps": [
      {
        "title": "Zeit für einen Fade reservieren",
        "body": "Planen Sie einen klassischen Fade oder eine Rasur mit heißem Handtuch und weisen Sie den Barber zu. Die Dauer passen Sie an Ihre Schnitte an."
      },
      {
        "title": "Bartpflege ergänzen",
        "body": "Erfassen Sie das tatsächlich ausgeführte Barttrimmen mit eigenem Preis. Die Zusatzleistung bleibt beim Termin."
      },
      {
        "title": "Zahlung erfassen oder Paket einlösen",
        "body": "Erfassen Sie eine Bar- oder Kartenzahlung oder lösen Sie ein passendes vorausbezahltes Paket ein. Die Einlösung erzeugt weder neue Zahlung noch neuen Umsatz."
      },
      {
        "title": "Den nächsten Besuch vorbereiten",
        "body": "Beim nächsten Fade stehen der frühere Schnitt und seine Abrechnung weiterhin in der Kundenhistorie. Prüfen Sie die Notizen, bevor Sie etwas wiederholen oder ändern."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Klassischer Fade oder Rasur mit heißem Handtuch",
      "perelaiWord": "Leistungen",
      "why": "Die Einträge im Startkatalog lassen sich bearbeiten. Jeder Termin erfasst eine konkrete Ausführung."
    },
    {
      "theirWord": "Barttrimmen am Stuhl",
      "perelaiWord": "Zusatzleistungen",
      "why": "Barttrimmen nach dem Haarschnitt ergänzt denselben Termin. Der Preis bleibt beim Fade statt als Zahlung ohne Bezug aufzutauchen."
    },
    {
      "theirWord": "Die Person in Ihrem Stuhl",
      "perelaiWord": "Kunde",
      "why": "Kontaktdaten, frühere Schnitte und Notizen helfen beim nächsten Besuch. Perelai bestimmt weder Stil noch Technik."
    },
    {
      "theirWord": "Ein selbstständig arbeitender Barber",
      "perelaiWord": "Fachkraft",
      "why": "Der Inhaber kann selbst die Leistungen erbringen. Ein separater Team-Login ist dafür nicht erforderlich."
    }
  ],
  "setup": {
    "title": "Mit Ihrem eigenen Stuhl anfangen",
    "body": "Die Vorlage enthält zwei Leistungen, zwei optionale Extras und eine Kostenkategorie für Klingen und Desinfektionsmittel. Passen Sie die Einträge an Ihren Laden an; Material bleibt eine Ausgabe.",
    "steps": [
      {
        "title": "Die Barber-Vorlage wählen",
        "body": "Diese Seite empfiehlt bei der Einrichtung die Barber-Vorlage."
      },
      {
        "title": "Ihr Angebot anpassen",
        "body": "Behalten Sie die Fades, Handtuchrasuren und Bartarbeiten, die Sie anbieten. Barttrimmen und Gesichtsmaske sind optionale Extras; unpassende Einträge können Sie entfernen."
      },
      {
        "title": "Den arbeitenden Barber hinzufügen",
        "body": "Arbeiten Sie allein, verwenden Sie Ihr eigenes Fachkraft-Profil. Teamzugriff ist eine separate Funktion von STUDIO."
      },
      {
        "title": "Die nächsten Termine eintragen",
        "body": "Fügen Sie Kunden hinzu, importieren Sie optional vCard-Kontakte und teilen Sie Ihren fertigen Buchungslink."
      }
    ]
  },
  "faq": [
    {
      "q": "Kann ich Perelai als selbstständiger Barber nutzen?",
      "a": "Ja. Der Inhaber kann selbst die Leistungen erbringen. SOLO umfasst eine aktive Fachkraft; zusätzlicher Teamzugriff gehört zu STUDIO."
    },
    {
      "q": "Sind Bartleistungen enthalten?",
      "a": "Die Vorlage enthält Barttrimmen als bearbeitbare Zusatzleistung sowie klassischen Fade und Rasur mit heißem Handtuch als Startleistungen."
    },
    {
      "q": "Kann ich Preise und Dauer ändern?",
      "a": "Ja. Legen Sie Preise und Dauer für Schnitte, Rasuren und Extras fest. Notizen können Fade-Höhe, Übergänge, Nackenlinie oder Koteletten beschreiben. Perelai schreibt weder Technik noch Tarif vor."
    },
    {
      "q": "Bedeutet ein abgeschlossener Schnitt, dass bezahlt wurde?",
      "a": "Nein. Abschluss und Zahlung sind getrennt. Auch ein passendes vorausbezahltes Paket kann die Leistung ohne neues Bargeld bei diesem Termin abdecken."
    },
    {
      "q": "Berechnet Perelai die Provision der Barber?",
      "a": "Nein. Erfasste Schnitte und Rasuren helfen beim Überblick über den Betrieb. Die Verteilung der Einnahmen bleibt Ihre Aufgabe; Gehälter, Provisionen und Lohnabrechnung werden nicht berechnet."
    }
  ],
  "labels": {
    "terminologyTitle": "Ihre Arbeit und ihre Erfassung in Perelai",
    "inYourChair": "In Ihrer Arbeit",
    "inPerelai": "In Perelai",
    "whyItMatters": "Was das bedeutet",
    "mocksTitle": "Beispiel-Arbeitsbereich",
    "mocksBody": "Synthetische Daten aus dieser Vorlage.",
    "faqTitle": "Fragen vor dem Start"
  },
  "whatItIsNot": {
    "title": "Alltägliche Aufzeichnungen für Ihre Leistungen",
    "body": "Verwalten Sie Termine, Kunden und erfasste Zahlungen mit Perelai.",
    "items": [
      {
        "title": "Betriebliche Übersicht",
        "body": "Umsatz, Kosten und berechneter Gewinn eines Zeitraums hängen von Ihren Einträgen ab. Das sind keine Steuerberichte."
      },
      {
        "title": "Kundenzahlungen",
        "body": "Erfassen Sie, wie ein Kunde bezahlt hat. Die Abwicklung von Kartenzahlungen ist nicht enthalten."
      }
    ]
  },
  "cta": {
    "title": "Mit dem nächsten Haarschnitt starten",
    "body": "Richten Sie Ihren Barber-Arbeitsbereich ein und verfolgen Sie einen Kunden von der Buchung bis zum Zahlungseintrag.",
    "label": "Arbeitsbereich erstellen",
    "microcopy": "Bestätigen Sie Ihre E-Mail-Adresse, um die Einrichtung fortzusetzen."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
