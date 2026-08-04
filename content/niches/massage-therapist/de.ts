import { massageTherapistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai für Massagetherapeuten",
    description:
      "Umsatz, erfasste Kosten und berechneter Gewinn für jeden Zeitraum — mit Kundenhistorie, vorausbezahlten Paketen und offenen Salden getrennt.",
    ogImageAlt:
      "Perelai-Finanzübersicht für einen Massagetherapeuten mit Umsatz, erfassten Kosten und berechnetem Gewinn für einen Zeitraum — Beispieldaten.",
  },

  hero: {
    eyebrow: "Finanzsoftware für Massagetherapeuten",
    h1: "Eine volle Woche und eine gute Woche sind nicht dieselbe Zahl.",
    subhead:
      "Umsatz, die Kosten, die Sie dagegen erfassen, und was die beiden übrig lassen — für einen Tag, eine Woche oder ein Jahr. Dazu, was jeder Stammkunde ausgegeben hat, welche vorausbezahlten Blöcke noch laufen und was auf einer Bestellung noch offen ist.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Eine ausgebuchte Woche beantwortet die Frage nicht",
      body: "Drei Tiefengewebsmassagen hintereinander füllen den Tag und sagen nichts über den Monat. Die Zahl, die zählt, sitzt hinter den Ölen, die Sie nachgefüllt haben, dem Raum, den Sie mieten, oder den Kilometern, die Sie gefahren sind — und nichts davon steht in dem Kalender, den Sie gerade gefüllt haben.",
    },
    {
      title: "Termine hier, Zahlungen dort, Quittungen woanders",
      body: "Solo-Praktiker enden oft mit einer App für Termine, einer zweiten fürs Kassieren und einer dritten für Quittungen. Jede funktioniert. Keine beantwortet eine Frage, die alle drei braucht — also werden Sie selbst zur Integration dazwischen.",
    },
    {
      title: "Es sind nur Sie — die Verwaltung hat keinen anderen Ort",
      body: "Es gibt keinen Empfang, an den Sie es abgeben. Die Woche zu erfassen wird zu einem Abend mit einer Tabelle, die jemand für Sie eingerichtet hat, oder einem Heft vom Großhandel — am Monatsende neu aufgebaut, weil nichts es mitgenommen hat, während es passierte.",
    },
  ],

  dayInLife: {
    title: "Erfassen Sie es zwischen den Kunden. Schauen Sie hinein, wann Sie wollen.",
    body: "Eine Sitzung beenden, Geld dafür nehmen, jemandes Sechserblock abbuchen, Öle nachfüllen — jedes davon ist ein Tippen, während die Liege neu bezogen wird. Weil sie dort erfasst werden, wo sie passieren, lässt sich die Praxis später ansehen, ohne dass jemand sich hinsetzt und sich erinnert.",
    steps: [
      {
        title: "Fertig und beglichen sind zwei verschiedene Dinge",
        body: "Entspannungsmassage abzuhaken sagt, dass die Stunde stattgefunden hat. Es sagt nichts darüber, ob Sie dafür bezahlt wurden. Die beiden leben als getrennte Zustände — damit ein voll gebuchter Dienstag nie stillschweigend zu einer Zahl wird, die noch nicht angekommen ist.",
      },
      {
        title: "Geld landet auf der Sitzung, zu der es gehört",
        body: "Die Zahlung geht auf diese Stunde mit diesem Kunden — nicht in einen undifferenzierten Topf für den Tag. Sechs Monate später zeigt der Betrag noch, von wem er kam und für welche Behandlung.",
      },
      {
        title: "Sechserblöcke kommen vom Block, nicht von der Kasse",
        body: "Jemand mitten in einem vorausbezahlten Block nimmt eine Stunde Ihrer Zeit und gibt nichts — und das ist korrekt. Ein Guthaben abzubuchen ist ein eigener Ereignistyp; deshalb fallen geliefert und bezahlt nie zu einer irreführenden Gesamtsumme zusammen.",
      },
      {
        title: "Wählen Sie einen Zeitraum und lesen Sie ihn",
        body: "Ein Tag, eine Woche, ein Monat, ein Quartal, ein Jahr — was immer Sie wirklich denken. Sie sehen Umsatz, die Kosten, die Sie dagegen erfasst haben, und was die beiden übrig lassen. Alles, was auf einer Bestellung oder Rate noch offen ist, bleibt getrennt vom schon erfassten Geld.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Tiefengewebsmassage, Entspannungsmassage, Sportmassage",
      perelaiWord: "Leistungen auf einem Termin",
      why: "Die Massage-Vorlage startet mit diesen drei, bearbeitbar. Jeder gebuchte Termin wird zu einem Termin, der Kunde, Behandlung und Geldaktivität zusammenführt.",
    },
    {
      theirWord: "Ein Hot Stone Add-on auf die Sitzung gebucht",
      perelaiWord: "Zusatzleistungen",
      why: "Das Extra hängt an dem Termin, an dem es ausgeführt wurde — so entspricht der Eintrag der Sitzung, die wirklich stattgefunden hat, nicht der ursprünglich gebuchten.",
    },
    {
      theirWord: "Die Massageöle-Rechnung, die Sie letzten Donnerstag bezahlt haben",
      perelaiWord: "Verknüpfte Kosten",
      why: "Erfasst gegen den Zeitraum, in den sie fällt — so erscheint Nachfüllen neben den Stunden, die es unterstützt hat. Niemand wiegt eine Flasche: das ist ein Einkauf, den Sie eingetragen haben, keine Messung dessen, was ein Kunde verbraucht hat.",
    },
    {
      theirWord: "Der Kunde drei Sitzungen in einem Sechserblock",
      perelaiWord: "Paket",
      why: "Guthaben wird Stunde für Stunde abgebucht. Was dieser Person noch zusteht, ist eine gespeicherte Zahl — keine Notiz auf der Rückseite ihrer Karte.",
    },
    {
      theirWord: "Jemand, der einen Kurs in Raten abzahlt",
      perelaiWord: "Bestellung und Raten",
      why: "Der Rest gehört zu dieser konkreten Vereinbarung. Wenn etwas als offen beschrieben wird, meint das diesen bestimmten unbezahlten Betrag — kein vages Gefühl von Geld, das irgendwo schwebt.",
    },
    {
      theirWord: "Der Donnerstagmorgen-Stammkunde seit neun Jahren",
      perelaiWord: "Umsatzhistorie des Kunden",
      why: "Was diese Person bei Ihnen wirklich ausgegeben hat, über die Zeit neben den Stunden, die sie gebucht hat. Loyalität hört auf, ein Gefühl zu sein, und wird zu einer Zahl, die Sie ansehen können.",
    },
    {
      theirWord: "Was übrig bleibt, wenn die Einkäufe des Monats abgezogen sind",
      perelaiWord: "Gewinn",
      why: "Nimmt den Umsatz des Zeitraums und zieht die Ausgaben ab, die Sie hineinerfasst haben. Eine Arbeitszahl, um zu entscheiden, ob der Stundensatz stimmt — ausdrücklich keine Steuerposition und kein Betriebsergebnis eines Buchhalters.",
    },
    {
      theirWord: "Nur Sie und eine Liege, zumindest dieses Jahr",
      perelaiWord: "Ein Arbeitsbereich",
      why: "Arbeiten Sie solo. Fügen Sie Personen hinzu, wenn Sie sie brauchen — nichts hier setzt ein zweites Paar Hände voraus, und nichts davon bricht, wenn es nie eines gibt.",
    },
  ],

  setup: {
    title: "Ein Abend, kein Wochenende.",
    body: "Drei Behandlungen, eine Zusatzleistung und eine Kostenart warten, wenn Sie ankommen. Alles darunter ist optionales Aufräumen.",
    steps: [
      {
        title: "Landen Sie auf der Massage-Vorlage",
        body: "Über diese Seite kommen Tiefengewebsmassage, Entspannungsmassage und Sportmassage schon mit. Niemand starrt auf einen leeren Bildschirm und fragt sich, wie man eine sechzigminütige Swedish nennen soll.",
      },
      {
        title: "Biegen Sie sie auf Ihre Praxis",
        body: "Längen, Sätze, ob Hot Stone als Extra mitläuft, und Massageöle als Platzhalter für das, was Sie wirklich nachfüllen. Umbenennen, löschen, hinzufügen — nichts ist festgeschrieben.",
      },
      {
        title: "Nehmen Sie nur mit, was Montag braucht",
        body: "Nummern vom Telefon per vCard, Google Kalender verbunden, wenn Sie darin leben, und ein Link zum Einfügen, wo Leute Sie finden. Neun Jahre Historie können später folgen — oder nie.",
      },
    ],
  },

  faq: [
    {
      q: "Sind meine Behandlungen schon eingerichtet?",
      a: "Ja. Die Massage-Vorlage startet mit Tiefengewebsmassage, Entspannungsmassage und Sportmassage, plus Hot Stone Add-on und Massageöle als verknüpfte Kosten. Alles ist bearbeitbar — eine Karte mit vier Behandlungen oder zwölf ist ein paar Minuten Arbeit.",
    },
    {
      q: "Führt Perelai klinische Notizen oder Versicherungsabrechnung?",
      a: "Nein, und das sollte klar sein. Perelai führt Kunden- und Terminnizen für den Praxisbetrieb. Es ist kein Gesundheitsaktensystem: keine Aufnahme- oder SOAP-Notizen, keine Behandlungspläne, keine Diagnosenverfolgung und keine Versicherungsansprüche oder -abrechnung. Wenn Ihre Praxis davon abhängt, ist Perelai für diesen Teil nicht das richtige Werkzeug.",
    },
    {
      q: "Wenn meine Woche voll gebucht war — ist das mein Umsatz?",
      a: "Nicht unbedingt, und beides zu vermengen ist, wie eine gut aussehende Woche Sie später enttäuscht. Eine Stunde, die Sie geleistet haben, eine Stunde, für die Sie bezahlt wurden, und eine Stunde aus jemandes vorausbezahltem Block sind hier drei verschiedene Zustände. Sie werden absichtlich getrennt gezählt, damit die Zahl, die Sie am Ende ansehen, eine konkrete Sache meint.",
    },
    {
      q: "Woher weiß ich, wo jemand in seinem Sechserblock steht?",
      a: "Jedes Guthaben wird abgebucht, wenn eine Stunde genutzt wird — der Rest bleibt beim Kunden gespeichert, nicht auf einer Karte in einer Schublade. Kurse, die in Raten bezahlt werden, verhalten sich gleich: der unbezahlte Teil bleibt an seiner eigenen Vereinbarung, statt in Geld gefaltet zu werden, das Sie schon genommen haben.",
    },
    {
      q: "Woher kommt die Gewinnzahl?",
      a: "Umsatz über den gewählten Zeitraum, minus die Ausgaben, die Sie in denselben Zeitraum erfasst haben. Nützlich, um zu entscheiden, ob eine Stunde richtig bepreist ist. Keine Steuerposition, kein Betriebsergebnis, das ein Buchhalter unterschreiben würde — und kein Ersatz dafür, einen zu haben.",
    },
  ],

  labels: {
    terminologyTitle: "Wie Ihr Wortschatz auf unseren abbildet.",
    inYourChair: "Auf der Liege",
    inPerelai: "In Perelai",
    whyItMatters: "Warum es wichtig ist",
    mocksTitle: "Eine Praxis wie Ihre, live dargestellt.",
    mocksBody: "Die Zahlen unten sind illustrativ, gebaut aus den drei Behandlungen, der Zusatzleistung und der Kostenart dieser Vorlage.",
    faqTitle: "Gefragt vor der Anmeldung.",
  },

  whatItIsNot: {
    title: "Wo es aufhört.",
    body: "Es folgt dem Geld, das an Stunden hängt, die Sie geleistet haben. Drei Dinge, die es absichtlich nicht tut:",
    items: [
      {
        title: "Kein Gesundheitsaktensystem",
        body: "Notizen gibt es für den Praxisbetrieb — wer welchen Druck bevorzugt, wer in zwei Wochen wiederkommt. Keine Aufnahmeformulare, kein SOAP-Charting, keine Behandlungspläne, keine Diagnosenverfolgung und keine Versicherungsansprüche.",
      },
      {
        title: "Keine Buchhaltungssoftware",
        body: "Sie bekommen Umsatz, erfasste Kosten und was sie über einen gewählten Zeitraum übrig lassen. Buchführung, Einreichung und Finanzberatung sind jemand anderes Job — und Ihr Steuerberater behält seinen.",
      },
      {
        title: "Kein Marktplatz",
        body: "Der Buchungslink gehört Ihnen. Perelai mietet die Kundenbeziehung nicht.",
      },
    ],
  },

  cta: {
    title: "Wissen Sie, was die Woche wirklich ergeben hat.",
    body: "Starten Sie mit einer Massage-Leistungsliste und halten Sie abgeschlossene Arbeit, erfasste Zahlungen, vorausbezahlte Sitzungen und offene Salden als getrennte, lesbare Einträge.",
    label: "Arbeitsbereich erstellen",
    microcopy: "Sie erhalten eine Bestätigungs-E-Mail, um die Einrichtung abzuschließen.",
  },

  research: massageTherapistResearch,
}
