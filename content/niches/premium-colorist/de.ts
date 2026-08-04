import { independentColoristResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai für unabhängige Coloristen",
    description: "Ein entspannterer Weg, Farbtermine, Buchungsanfragen und Ihren Cashflow zu verwalten.",
    ogImageAlt: "Perelai-Arbeitsbereich für eine unabhängige Coloristin, mit Farbterminen, einem Kalender und Finanzübersicht",
  },
  hero: {
    eyebrow: "Für unabhängige Coloristen",
    h1: "Wenn eine Doppelbuchung den ganzen Tag ruinieren kann.",
    subhead: "Bringen Sie überflutete DMs, Farbtermine und die heutigen Einnahmen in einen Arbeitsbereich, der für Ihre Arbeitsweise entwickelt wurde.",
    mock: "colorist-workspace",
  },
  pains: [
    { title: "Ihre Instagram-DMs sind völlig überflutet", body: "Eine Buchungsanfrage sollte nicht neben einer Frage zur Farbformel, einem Foto und einer nächtlichen Terminverschiebung liegen." },
    { title: "Zehn Minuten Verspätung können den Tag gefühlt ruinieren", body: "Ansatzfarbe, Balayage und ein Last-Minute-Styling haben unterschiedliche Zeiten. Ihr Kalender muss die Struktur der Arbeit abbilden." },
    { title: "‘Ich zahle beim nächsten Mal’ ist immer noch ein offenes Ende", body: "Erfassen Sie, was tatsächlich eingenommen wurde, sehen Sie, was noch aussteht, und behalten Sie Farbprodukte und Einwegmaterialien im Blick." },
  ],
  dayInLife: {
    title: "Auch wenn der Tag aus dem Ruder läuft, wissen Sie, was als Nächstes ansteht.",
    body: "Perelai hält die Arbeit eines Farbtages sichtbar, ohne dass Sie sie nachts rekonstruieren müssen.",
    steps: [
      { title: "Beratung und Probesträhne", body: "Beginnen Sie den Termin mit der Leistung, die den Farbplan festlegt." },
      { title: "Ansatzfarbe oder Dimensionale Farbe", body: "Behalten Sie die heutige Farbarbeit zusammen mit der benötigten Zeit im Kalender." },
      { title: "Bonding-Behandlung und Styling", body: "Fügen Sie die Arbeit hinzu, die den Termin verändert, einschließlich der Extras, die Ihr Kunde gewählt hat." },
      { title: "Bezahlung und Follow-up", body: "Schließen Sie mit dem erhaltenen Betrag ab, lassen Sie ausstehende Arbeiten und die nächste Entscheidung sichtbar im operativen Posteingang." },
    ],
  },
  terminology: [
    { theirWord: "Eine Ansatzfarbe, Balayage oder Gloss & Toner", perelaiWord: "Termin", why: "Behalten Sie Leistung, Kundennotizen und Zahlungsvorgänge zusammen." },
    { theirWord: "Bonding-Behandlung, Extra-Produkt für langes Haar oder Styling", perelaiWord: "Zusatzleistungen", why: "Fügen Sie die zusätzliche Arbeit dem Termin hinzu, der sie erfordert." },
    { theirWord: "Farbprodukte und Einwegmaterialien", perelaiWord: "Verknüpfte Kosten", why: "Sehen Sie die Kosten neben der Arbeit, zu der sie gehören." },
    { theirWord: "Ein im Voraus bezahltes Set von Farbauffrischungen", perelaiWord: "Paket", why: "Prepaid-Guthaben wird abgebucht, wenn Termine genutzt werden." },
    { theirWord: "‘Sie zahlt beim nächsten Mal’", perelaiWord: "Bestellung", why: "Verfolgen Sie ausstehende Beträge, ohne es als Rechnung zu bezeichnen." },
    { theirWord: "Einem Kunden mitteilen, dass das Geld eingegangen ist", perelaiWord: "Zahlungsbestätigung", why: "Senden Sie eine Bestätigung, die Ihr Kunde über einen Link öffnen kann." },
    { theirWord: "Was nach dem letzten Kunden noch Ihre Entscheidung erfordert", perelaiWord: "Eintrag im operativen Posteingang", why: "Es bleibt dort, bis Sie es lösen, nicht nur bis Sie es lesen." },
  ],
  setup: {
    title: "Beginnen Sie mit der Farbarbeit, die Sie bereits tun.",
    body: "Keine generische leere Liste. Die Coloristen-Vorlage beginnt mit bearbeitbaren Leistungen, Zusatzleistungen und verknüpften Kosten.",
    steps: [
      { title: "Öffnen Sie den Coloristen-Arbeitsbereich", body: "Wenn Sie über diese Seite kommen, steht die Vorlage für unabhängige Coloristen beim Onboarding an erster Stelle." },
      { title: "Machen Sie die Liste zu Ihrer eigenen", body: "Beginnen Sie mit Beratung & Probesträhne, Ansatzfarbe, Dimensionale Farbe / Balayage, Farbkorrektur, Gloss & Toner und Haarschnitt & Styling. Passen Sie an, was Sie brauchen." },
      { title: "Bringen Sie das Wichtigste mit", body: "Importieren Sie Kontakte per vCard von Ihrem Telefon, verbinden Sie den Google Kalender und teilen Sie dann Ihren eigenen Buchungslink." },
    ],
  },
  faq: [
    { q: "Sind meine Farbleistungen bereits vorhanden?", a: "Ja. Die Vorlage für unabhängige Coloristen startet mit sechs bearbeitbaren Leistungen, einschließlich Ansatzfarbe, Dimensionale Farbe / Balayage, Farbkorrektur, Gloss & Toner und Haarschnitt & Styling. Sie enthält auch Bonding-Behandlung, Extra-Produkt für langes Haar und Styling als Zusatzleistungen." },
    { q: "Können Kunden aufhören, über meine DMs zu buchen?", a: "Teilen Sie einen Buchungslink in Ihrer Bio oder senden Sie ihn in einer Nachricht. Kunden wählen eine Leistung, eine Person und eine Zeit." },
    { q: "Was passiert, wenn jemand nicht erscheint?", a: "Perelai kann automatische Erinnerungen per E-Mail, in der App und als Push-Benachrichtigung senden. Arbeit und Einnahmen werden getrennt erfasst, sodass ein verpasster Termin nicht als eingenommenes Geld behandelt wird." },
    { q: "Kann ich sehen, ob sich ein Farbtag tatsächlich gelohnt hat?", a: "Erfassen Sie, was tatsächlich eingenommen wurde, verknüpfen Sie Farbprodukte und Einwegmaterialien mit der entsprechenden Arbeit und sehen Sie Einnahmen, Kosten und ausstehende Beträge ohne Tabellenkalkulation." },
    { q: "Muss ich alles an einem Wochenende umziehen?", a: "Nein. Starten Sie mit Kontakten von Ihrem Telefon per vCard und verbinden Sie optional den Google Kalender. Die Leistungsliste ist bereits bearbeitbar, sodass Sie sie Schritt für Schritt anpassen können." },
  ],
  labels: {
    terminologyTitle: "Die Begriffe an Ihrem Arbeitsplatz haben einen Platz in Perelai.",
    inYourChair: "An Ihrem Platz",
    inPerelai: "In Perelai",
    whyItMatters: "Warum es wichtig ist",
    mocksTitle: "Coloristen-Daten, wie sie im Produkt angezeigt werden.",
    mocksBody: "Die Beispieldaten nutzen die eigenen Leistungen, Zusatzleistungen und verknüpften Kosten der Vorlage für unabhängige Coloristen.",
    faqTitle: "Fragen, die Coloristen vor dem Wechsel stellen.",
  },
  whatItIsNot: {
    title: "Klar darüber, was es nicht ist.",
    body: "Perelai ist für die Verwaltung von Kunden, Buchungen und Finanzen Ihrer Farbarbeit gedacht. Es gibt nicht vor, spezialisierte Tools zu ersetsetzen.",
    items: [
      { title: "Keine Buchhaltungssoftware", body: "Es erfasst, was gebucht, abgeschlossen und bezahlt wurde, um den Cashflow sichtbar zu machen. Es ist keine Steuererklärung oder Finanzberatung." },
      { title: "Kein Marktplatz", body: "Ihr Buchungslink gehört Ihnen." },
      { title: "Kein medizinisches Aktensystem", body: "Es bietet keine klinischen Aufzeichnungen, Diagnoseverfolgung oder Patientenmanagement." },
    ],
  },
  cta: {
    title: "Halten Sie die Farbarbeit am Laufen, ohne den Tag später rekonstruieren zu müssen.",
    body: "Erstellen Sie einen Arbeitsbereich, der mit Ihren Farbleistungen beginnt und Termine, Einnahmen und Nachbereitungen an einem Ort hält.",
    label: "Arbeitsbereich erstellen",
    microcopy: "Sie erhalten eine Bestätigungs-E-Mail, um die Einrichtung abzuschließen.",
  },
  research: independentColoristResearch,
}
