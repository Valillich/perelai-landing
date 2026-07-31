import { lashArtistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai für unabhängige Lash Artists",
    description: "Behalten Sie Buchungen, Kundenarbeit und Einnahmen im Blick, auch wenn DMs und ein verspäteter Kunde Ihren Tag stören.",
    ogImageAlt: "Perelai-Arbeitsbereich für einen unabhängigen Lash Artist, mit Lash-Terminen, Kalender und Finanzübersicht",
  },
  hero: {
    eyebrow: "Für unabhängige Lash Artists",
    h1: "Sie können nicht den ganzen Tag DMs beantworten.",
    subhead: "Behalten Sie Wimpernverlängerungen, Auffüllungen und tatsächliche Einnahmen in einem Arbeitsbereich. So zwingt Sie ein verspäteter Kunde nicht dazu, nachts den ganzen Tag zu rekonstruieren.",
    mock: "lash-workspace",
  },
  pains: [
    { title: "Eine Buchungsanfrage sollte nicht in einem DM-Thread stecken bleiben", body: "Verfügbarkeiten, eine Frage zur Anzahlung, ein Referenzfoto und eine Terminverschiebung sollten Sie nicht dazu zwingen, zwischen Kunden in Nachrichten zu suchen. Ein Thread voller Screenshots ist kein verlässlicher Ort, um einen Arbeitstag zu beginnen, besonders wenn Sie bereits ein Set vorbereiten, Materialien bereitstellen und die Details des ersten Kunden prüfen." },
    { title: "Ein blockierter Slot kann den ganzen Tag verändern", body: "Ein Wimpernlifting & Färben lässt sich nicht in einen Slot für eine Auffüllung quetschen, und ein verspätetes Neuset verändert jeden Termin danach. Führen Sie die Arbeit in einem Kalender, der den Service widerspiegelt, den Sie gerade ausführen, nicht als generischen Platzhalter. Der Unterschied ist wichtig, wenn eine Augenbrauenbehandlung um eine längere Wimpernverlängerung herum gebucht wird." },
    { title: "Ihre Zeit, Materialien und Einnahmen brauchen dieselbe Ansicht", body: "Erfassen Sie, was eingenommen wurde, behalten Sie Materialien & Kleber bei der Arbeit und sehen Sie, was noch aussteht, ohne die Woche in einer Tabelle zu rekonstruieren. Ein geschäftiger Dienstag sollte Sie nicht raten lassen, was der Tag nach Abzug von Materialien und Fixkosten eingebracht hat, oder ob eine Reihe von Auffüllungen die erfassten Kosten gedeckt hat." },
    { title: "Ein vorheriger Termin sollte leicht zu finden sein", body: "Wenn ein wiederkehrender Kunde nach einer Auffüllung fragt, gehören dessen Termine, Notizen und Zahlungen zu diesem Kunden. Sie sollten nicht durch alte DMs scrollen müssen, um das letzte nützliche Detail zu finden, bevor der Kunde bereits auf der Liege ist. Eine Kundenhistorie ist nützlicher, wenn sie bereitsteht, bevor das Gespräch beginnt." },
    { title: "Die letzte Nachricht sollte nicht Ihren Abend bestimmen", body: "Kunden können immer noch direkt Fragen stellen. Die Routinebuchung kann jedoch auf Ihren eigenen Link umziehen, was Ihnen eine klarere Grenze zwischen dem letzten Kunden und dem Rest Ihres Abends verschafft, anstatt die Verfügbarkeit bis zum Einschlafen zu überwachen. Ihr Buchungslink übernimmt die einfache Wahl von Service, Person und Zeit." },
  ],
  dayInLife: {
    title: "Wenn sich der Zeitplan verschiebt, wissen Sie trotzdem, was Aufmerksamkeit braucht.",
    body: "Perelai hält die funktionierenden Teile eines Wimpern-Tages nach dem Verlassen des letzten Kunden sichtbar, von einer Augenbrauenbehandlung am Morgen bis zu den Einnahmen nach der letzten Auffüllung. Das Ziel ist es nicht, das Handwerk generisch zu machen. Es geht darum, dem genauen Service-Mix, der Kundenhistorie, den Materialkosten und offenen Entscheidungen einen verlässlichen Platz außerhalb Ihres Posteingangs zu geben. Isolierung, Wimpern-Trays, Pinzetten, Augenpads, Lash Mapping, Durchmesser, Krümmung, Fächern, Luftfeuchtigkeit, Haltbarkeit, Bonder und Kleber-Vorbereitung sind echte Arbeit rund um ein Set und keine Details, die ein generischer Slot glätten sollte.",
    steps: [
      { title: "Augenbrauen haben einen klaren Start", body: "Platzieren Sie Augenbrauenformen, Augenbrauenfärben und Brow Lifting als eigene Services mit eigener Zeit im Tag, anstatt als vagen Platzhalter. Der Kalender kann den Unterschied zwischen einem Brow Touch-up und einem längeren Wimpern-Service anzeigen, sodass ein Augenbrauen-Kunde am Morgen nicht mit einem Neuset am Nachmittag verschwimmt." },
      { title: "Ein Lifting bekommt die Zeit, die es braucht", body: "Behalten Sie das Wimpernlifting & Färben im Kalender sichtbar, bevor die schnellere Arbeit darum herum ins Rutschen gerät. Wenn jemand nach einem weiteren Termin fragt, können Sie die Struktur des Tages sehen, bevor Sie antworten, anstatt eine Lücke zu versprechen, die Sie brauchen, um die Liege neu zu beziehen und Materialien vorzubereiten." },
      { title: "Ein Neuset findet seinen Platz", body: "Fügen Sie eine Wimpernverlängerung als Termin mit den Kundendetails und der benötigten Zeit hinzu, anstatt den Plan nur in einem Nachrichten-Thread festzuhalten. Der Termin wird zu einem Ort für den Service, Notizen und Geldflüsse zusammen, was leichter aufzurufen ist, wenn ein Kunde nach der nächsten Auffüllung fragt." },
      { title: "Eine Auffüllung bleibt verbunden", body: "Behalten Sie die Wimpernauffüllung zusammen mit dem Rest des Tages im Kalender, anstatt in der letzten Nachricht nach den Details zu suchen. Auf einen wiederkehrenden Kunden können Sie sich vorbereiten, ohne seine Historie aus dem Gedächtnis zu rekonstruieren oder zu raten, ob ein regulärer Slot verschoben, bestätigt oder noch unbeantwortet ist." },
      { title: "Die nächste Buchung ist eine bewusste Entscheidung", body: "Nutzen Sie die freie Zeit, die Sie tatsächlich sehen können, wenn ein Kunde nach Verfügbarkeit fragt. Ein direkter Buchungslink lässt einen Kunden Service, Person und Zeit wählen, ohne jeden offenen Slot in ein separates Hin und Her auf Instagram zu verwandeln." },
      { title: "Das Service-Menü bleibt erkennbar", body: "Behalten Sie die Namen, die Ihre Kunden kennen, vom Brow Lifting bis zur Wimpernverlängerung, in einer bearbeitbaren Service-Liste. Wenn sich Ihr Menü ändert, können Sie die Startliste anpassen, ohne Ihre Buchungsseite in einen generischen Salonkatalog zu verwandeln." },
      { title: "Wimpernarbeit hat ihren eigenen Rhythmus", body: "Reinigung, Isolierung, Platzierung, Wahl des Curls und Haltbarkeit sind Teil des Handwerks rund um einen Wimpern-Service. Ein Slot für Augenbrauenformen, ein Wimpernlifting & Färben und ein Verlängerungs-Set fordern nicht dasselbe von Ihrer Zeit, Konzentration oder Vorbereitung." },
      { title: "Ein wiederkehrender Kunde ist kein leerer Slot", body: "Ein Gespräch über eine Auffüllung kann mit der eigenen Termin-Historie, den Notizen und Zahlungsaktivitäten des Kunden beginnen, anstatt mit einer neuen Nachricht, in der Sie sich an jedes vorherige Detail erinnern müssen. Das gibt Ihnen einen besseren Ausgangspunkt, bevor Sie entscheiden, was der nächste Service braucht." },
      { title: "Materialien haben eine Funktion neben dem Service", body: "Verknüpfen Sie Materialien & Kleber mit der entsprechenden Arbeit, anstatt Materialien in einem separaten Stapel aus Quittungen, Notizen und erinnerten Käufen aufzubewahren. Die Kosten werden Teil der Finanzübersicht für die Arbeit, für die sie verbraucht wurden." },
      { title: "Geld und offene Enden bleiben sichtbar", body: "Erfassen Sie, was eingenommen wurde, verknüpfen Sie Materialien & Kleber und lassen Sie die nächste Entscheidung im operativen Posteingang, anstatt sie in den nächsten Tag mitzunehmen. Das Ende des Tages hat eine Liste, die abgearbeitet wird, keinen Stapel von Benachrichtigungen, die verschwinden, wenn sie gelesen werden, was ein Follow-up leichter auffindbar macht, bevor der nächste Service beginnt." },
      { title: "Der Zahlungsbeleg hat ein klares Ende", body: "Wenn Sie erfassen, was nach einem Augenbrauen-Service, Lifting, Neuset oder Auffüllen tatsächlich eingenommen wurde, kann eine Zahlungsbestätigung dem Kunden einen Link zum Öffnen geben. Die abgeschlossene Arbeit und das eingenommene Geld bleiben getrennt, wodurch vermieden wird, dass ein gebuchter oder abgeschlossener Service als Bargeld in der Hand behandelt wird." },
      { title: "Morgen beginnt mit einer echten Liste", body: "Eine unbeantwortete Frage, ein noch geschuldeter Betrag oder eine Aufgabe nach einem Termin kann im operativen Posteingang sichtbar bleiben. Das Lesen einer Benachrichtigung löscht die Arbeit nicht, sodass der erste Blick auf morgen weniger wahrscheinlich mit der Rekonstruktion dessen beginnt, was verpasst wurde." },
    ],
  },
  terminology: [
    { theirWord: "Ein Termin für Augenbrauenformen, Färben oder Brow Lifting", perelaiWord: "Termin", why: "Behalten Sie den benannten Service, Kundennotizen und Zahlungsaktivitäten zusammen, auch wenn Augenbrauenarbeit zwischen längeren Wimpern-Services liegt und den Rhythmus des Kalenders verändert." },
    { theirWord: "Wimpernlifting & Färben, Wimpernverlängerung oder Auffüllen", perelaiWord: "Termin", why: "Geben Sie jeder Art von Wimpernarbeit ihren eigenen Platz im Kalender, anstatt jede Buchung in den gleichen Block zu quetschen und zu hoffen, dass die Zeiten nach einer Verspätung noch passen." },
    { theirWord: "Eine Kombination aus Augenbrauen- & Wimpernfärben wurde hinzugefügt", perelaiWord: "Zusatzleistungen", why: "Fügen Sie die zusätzliche Arbeit dem Termin hinzu, zu dem sie gehört, damit der Service widerspiegelt, was auf dem Stuhl passiert ist, anstatt einer separaten handschriftlichen Notiz oder eines Screenshots." },
    { theirWord: "Materialien & Kleber für den Tag", perelaiWord: "Verknüpfte Kosten", why: "Sehen Sie diese Kosten neben der Arbeit, die sie unterstützt, anstatt zu versuchen, sich nach einer geschäftigen Woche voller Neusets, Augenbrauenbehandlungen und wiederkehrenden Auffüll-Kunden daran zu erinnern." },
    { theirWord: "Ein im Voraus bezahltes Set geplanter Wimpernauffüllungen", perelaiWord: "Paket", why: "Prepaid-Guthaben wird abgebucht, wenn Termine genutzt werden, sodass die verbleibenden Termine nicht als separate mentale Liste, Telefonnotiz oder lose Nachricht im Kunden-Chat enden." },
    { theirWord: "Ein Kunde, der den Restbetrag später begleicht", perelaiWord: "Bestellung", why: "Verfolgen Sie ausstehende Beträge, ohne es als Rechnung zu bezeichnen, und behalten Sie das Follow-up sichtbar, wenn Sie einen vollen Terminkalender und mehrere Anfragen zu beantworten haben." },
    { theirWord: "Eine Frage zu Richtlinien oder ein Follow-up nach dem letzten Kunden", perelaiWord: "Eintrag im operativen Posteingang", why: "Es bleibt dort, bis Sie es lösen, nicht nur bis Sie es lesen und es unter der nächsten Nachricht, einer eingehenden Buchungsanfrage oder einem Tag voller Terminverschiebungen verlieren." },
  ],
  setup: {
    title: "Beginnen Sie mit der Wimpernarbeit, die Sie bereits tun.",
    body: "Keine generische leere Liste. Die Vorlage für Lash Artists beginnt mit bearbeitbaren Services, einer Zusatzleistung für Färben und verknüpften Materialkosten, sodass die ersten Entscheidungen wie Ihr Arbeitstag aussehen.",
    steps: [
      { title: "Öffnen Sie den Arbeitsbereich für Lash Artists", body: "Wenn Sie über diese Seite kommen, steht die Vorlage für Lash Artists beim Onboarding an erster Stelle. Sie beginnen mit einer Auswahl, die die Services widerspiegelt, die ein Kunde auf Ihrem Buchungslink sieht, anstatt aus einem leeren, salonorientierten Setup zu wählen." },
      { title: "Machen Sie die Service-Liste zu Ihrer eigenen", body: "Starten Sie mit Augenbrauenformen, Augenbrauenfärben, Brow Lifting, Wimpernlifting & Färben, Wimpernverlängerung und Wimpernauffüllung. Bearbeiten Sie eine Dauer, fügen Sie Ihr Angebot hinzu oder entfernen Sie einen Service, der nicht zu Ihrer Arbeit gehört. Die Liste bleibt Ihre, wenn sich Ihr Menü ändert." },
      { title: "Bringen Sie das Wichtigste mit", body: "Importieren Sie Kontakte von Ihrem Telefon per vCard, verbinden Sie Google Calendar und teilen Sie dann Ihren eigenen Buchungslink. Sie können mit den Informationen starten, die Ihnen bei der Arbeit in dieser Woche helfen, anstatt alles auf einmal zu verschieben oder Buchungen für ein Migrationsprojekt zu pausieren." },
    ],
  },
  faq: [
    { q: "Sind meine Wimpern-Services bereits vorhanden?", a: "Ja. Die Vorlage für Lash Artists startet mit sechs bearbeitbaren Services: Augenbrauenformen, Augenbrauenfärben, Brow Lifting, Wimpernlifting & Färben, Wimpernverlängerung und Wimpernauffüllung. Sie beinhaltet auch die Kombi aus Augenbrauen- & Wimpernfärben sowie Materialien & Kleber, sodass Sie nicht jeden gängigen Service von einem leeren Blatt aus benennen müssen." },
    { q: "Können Kunden ohne DM-Austausch buchen?", a: "Teilen Sie einen Buchungslink in Ihrer Bio oder senden Sie ihn in einer Nachricht. Kunden wählen einen Service, eine Person und eine Zeit. Perelai nimmt keine Provision für Buchungen. Jemand, der ein Augenbrauenfärben sucht, kann mit diesem benannten Service beginnen, während ein Kunde für eine Wimpernauffüllung denselben klaren Weg sieht, ohne Sie nach freien Terminen fragen zu müssen." },
    { q: "Was passiert, wenn ein Kunde zu spät kommt oder nicht erscheint?", a: "Perelai kann automatische Erinnerungen per E-Mail, in-App und Push senden. Arbeit und Einnahmen werden separat erfasst, sodass ein verpasster Termin nicht als eingenommenes Geld behandelt wird. Sie entscheiden, wie Sie mit einer zukünftigen Buchungsanfrage umgehen, während die ungelöste Entscheidung sichtbar bleibt." },
    { q: "Kann ich sehen, was die Woche tatsächlich eingebracht hat?", a: "Erfassen Sie, was tatsächlich eingenommen wurde, verknüpfen Sie Materialien & Kleber mit der entsprechenden Arbeit und sehen Sie Einnahmen, Kosten und was noch aussteht, ohne Tabellenkalkulation. Das gibt Ihnen einen klareren Startpunkt, als nach der Woche Auffüllungen, Augenbrauenbehandlungen, Neusets und Materialien aus Nachrichten zu rekonstruieren. Ein abgeschlossenes Extension-Set ist getane Arbeit, nicht automatisch eingenommenes Geld, sodass die Zahl kein Saldo verbirgt, das noch Aufmerksamkeit erfordert." },
    { q: "Muss ich alles an einem Wochenende umziehen?", a: "Nein. Starten Sie mit Kontakten von Ihrem Telefon per vCard und verbinden Sie optional Google Calendar. Ihre Service-Liste ist bearbeitbar, sodass Sie sie Schritt für Schritt anpassen können. Beginnen Sie mit den nächsten Buchungen und entscheiden Sie dann, was sonst noch nützlich ist, ohne die Arbeit zu pausieren, die Ihre Rechnungen bezahlt." },
  ],
  labels: {
    terminologyTitle: "Die Worte in Ihrem Wimpern-Raum haben einen Platz in Perelai.",
    inYourChair: "In Ihrem Wimpern-Raum",
    inPerelai: "In Perelai",
    whyItMatters: "Warum es wichtig ist",
    mocksTitle: "Daten eines Lash Artists, wie sie im Produkt angezeigt werden.",
    mocksBody: "Die Beispieldaten nutzen die Services, Zusatzleistungen und verknüpften Kosten aus der Vorlage für Lash Artists.",
    faqTitle: "Fragen, die Lash Artists vor dem Wechsel stellen.",
  },
  whatItIsNot: {
    title: "Klar darüber, was es nicht ist.",
    body: "Perelai ist für die Kunden-, Buchungs- und Geldseite Ihrer Wimpernarbeit gedacht. Es gibt nicht vor, spezialisierte Tools zu ersetzen.",
    items: [
      { title: "Keine Buchhaltungssoftware", body: "Es erfasst, was gebucht, abgeschlossen und bezahlt wurde, um den Cashflow sichtbar zu machen. Es ist keine Steuererklärung oder Finanzberatung." },
      { title: "Kein Marktplatz", body: "Ihr Buchungslink gehört Ihnen. Perelai nimmt keine Provision und mischt sich nicht in die Kundenbeziehung ein." },
      { title: "Kein medizinisches Aktensystem", body: "Es bietet keine klinischen Aufzeichnungen, Diagnoseverfolgung oder Patientenmanagement." },
    ],
  },
  cta: {
    title: "Halten Sie den Wimpern-Tag auch nach dem letzten Kunden sichtbar.",
    body: "Erstellen Sie einen Arbeitsbereich, der mit Ihren Services beginnt und Termine, Geldflüsse und nächste Entscheidungen an einem Ort hält.",
    label: "Arbeitsbereich erstellen",
    microcopy: "Keine Kreditkarte nötig. Sie erhalten eine Bestätigungs-E-Mail, um die Einrichtung abzuschließen.",
  },
  research: lashArtistResearch,
}
