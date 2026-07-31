import { independentColoristResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai per coloristi indipendenti",
    description: "Un modo più sereno per gestire i tuoi appuntamenti colore, le richieste di prenotazione e il flusso di cassa.",
    ogImageAlt: "Spazio di lavoro Perelai per una colorista indipendente, con visite colore, calendario e riepilogo finanziario",
  },
  hero: {
    eyebrow: "Per coloristi indipendenti",
    h1: "Quando una doppia prenotazione può rovinarti la giornata.",
    subhead: "Riunisci messaggi privati intasati, visite colore e gli incassi di oggi in uno spazio di lavoro pensato per il tuo modo di lavorare.",
    mock: "colorist-workspace",
  },
  pains: [
    { title: "I tuoi messaggi Instagram sono completamente intasati", body: "Una richiesta di prenotazione non dovrebbe stare accanto a una domanda sulla formula colore, una foto e uno spostamento di orario a tarda notte." },
    { title: "Dieci minuti di ritardo possono far sembrare la giornata rovinata", body: "Colore radici, balayage e una piega dell'ultimo minuto hanno tempi diversi. Il tuo calendario deve riflettere la reale struttura del tuo lavoro." },
    { title: "«Mi pagherà la prossima volta» rimane una questione aperta", body: "Registra ciò che è stato davvero incassato, vedi cosa resta da saldare e tieni d'occhio i prodotti colore e i consumabili." },
  ],
  dayInLife: {
    title: "Anche se la giornata prende una brutta piega, sai sempre cosa fare dopo.",
    body: "Perelai mantiene visibile il lavoro di una giornata di colore senza chiederti di ricostruirlo la sera.",
    steps: [
      { title: "Consulenza e ciocchetta di prova", body: "Inizia la Visita con il servizio che stabilisce il piano colore." },
      { title: "Colore radici o colore dimensionale", body: "Tieni il lavoro colore di oggi nel calendario insieme al tempo necessario." },
      { title: "Trattamento ristrutturante e piega", body: "Aggiungi il lavoro che arricchisce la visita, inclusi gli extra scelti dalla cliente." },
      { title: "Pagamento e passaggio successivo", body: "Concludi con l'importo ricevuto, lasciando il lavoro rimanente e la decisione successiva visibili in In Arrivo Operativi." },
    ],
  },
  terminology: [
    { theirWord: "Un colore radici, balayage o gloss e tonalizzante", perelaiWord: "Visita", why: "Mantiene uniti servizio, note cliente e cronologia dei pagamenti." },
    { theirWord: "Trattamento ristrutturante, extra per capelli lunghi o piega", perelaiWord: "Opzioni", why: "Collega il lavoro aggiuntivo alla Visita che lo richiede." },
    { theirWord: "Prodotti colore e materiale monouso", perelaiWord: "Spese collegate", why: "Mostra i costi accanto al lavoro a cui appartengono." },
    { theirWord: "Un pacchetto prepagato di rinfreschi colore", perelaiWord: "Pacchetto", why: "Il credito prepagato si scala man mano che le Visite vengono utilizzate." },
    { theirWord: "«Pagherà la prossima volta»", perelaiWord: "Ordine", why: "Tieni traccia di ciò che ti è dovuto senza chiamarlo fattura." },
    { theirWord: "Avvisare una cliente che il pagamento è stato ricevuto", perelaiWord: "Conferma di pagamento", why: "Invia una conferma che la tua cliente può aprire tramite un link." },
    { theirWord: "Ciò che richiede ancora la tua decisione dopo l'ultima cliente", perelaiWord: "Scheda in In Arrivo Operativi", why: "Rimane lì finché non lo risolvi, non solo finché lo leggi." },
  ],
  setup: {
    title: "Inizia con il lavoro colore che fai già ogni giorno.",
    body: "Nessun elenco vuoto e generico. Il modello per coloristi parte con servizi modificabili, opzioni e spese collegate.",
    steps: [
      { title: "Apri lo spazio di lavoro per coloristi", body: "Arrivando da questa pagina, il modello per coloristi indipendenti sarà il primo selezionato durante la configurazione." },
      { title: "Rendi l'elenco davvero tuo", body: "Inizia con Consulenza & Ciocchetta di prova, Colore radici, Colore dimensionale / Balayage, Correzione colore, Gloss & Tonalizzante e Taglio & Piega. Modifica ciò che desideri." },
      { title: "Porta ciò che conta", body: "Importa i contatti dal telefono tramite vCard, collega Google Calendar e poi condividi il tuo link di prenotazione." },
    ],
  },
  faq: [
    { q: "I miei servizi colore sono già presenti?", a: "Sì. Il modello per coloristi indipendenti parte con sei servizi modificabili, tra cui Colore radici, Colore dimensionale / Balayage, Correzione colore, Gloss & Tonalizzante e Taglio & Piega. Include anche Trattamento ristrutturante, Extra capelli lunghi e Piega come opzioni." },
    { q: "Le clienti possono smettere di prenotare nei messaggi privati?", a: "Condividi un link di prenotazione nella tua bio o invialo in chat. Le clienti scelgono un servizio, uno specialista e un orario. Perelai non prende alcuna commissione sulle prenotazioni." },
    { q: "Cosa succede se qualcuno non si presenta?", a: "Perelai può inviare promemoria automatici via email, in-app e notifiche push. Lavoro e denaro sono tracciati separatamente, così un appuntamento saltato non viene considerato come incasso." },
    { q: "Posso vedere se una giornata di colore è stata davvero redditizia?", a: "Registra ciò che è stato davvero incassato, collega prodotti colore e consumabili al lavoro corrispondente e vedi entrate, costi e saldi in sospeso senza fogli di calcolo." },
    { q: "Devo spostare tutto in un solo fine settimana?", a: "No. Inizia dai contatti del telefono tramite vCard e opzionalmente collega Google Calendar. L'elenco servizi è modificabile, così puoi adattarlo passo dopo passo." },
  ],
  labels: {
    terminologyTitle: "Le parole del tuo salone trovano posto in Perelai.",
    inYourChair: "Alla tua poltrona",
    inPerelai: "In Perelai",
    whyItMatters: "Perché è importante",
    mocksTitle: "Dati di una colorista per come appaiono nel prodotto.",
    mocksBody: "I dati di esempio usano i servizi, le opzioni e le spese collegate del modello per coloristi indipendenti.",
    faqTitle: "Domande che i coloristi si pongono prima di cambiare.",
  },
  whatItIsNot: {
    title: "Massima chiarezza su ciò che non è.",
    body: "Perelai è pensato per la gestione clienti, prenotazioni e incassi del tuo lavoro colore. Non intende sostituire strumenti ultra-specializzati.",
    items: [
      { title: "Non è un software di contabilità", body: "Registra ciò che è prenotato, completato e pagato per mostrarti il flusso di cassa. Non è una dichiarazione dei redditi né consulenza fiscale." },
      { title: "Non è un marketplace", body: "Il tuo link di prenotazione è solo tuo. Perelai non prende commissioni né si intromette nella relazione con le tue clienti." },
      { title: "Non è un sistema per cartelle cliniche", body: "Non fornisce schede cliniche, tracciamento di diagnosi né gestione di pazienti." },
    ],
  },
  cta: {
    title: "Mantieni sotto controllo il lavoro colore senza dover ricostruire la giornata più tardi.",
    body: "Crea uno spazio di lavoro che parte dai tuoi servizi colore e tiene visite, finanze e passaggi successivi in un unico posto.",
    label: "Crea uno spazio di lavoro",
    microcopy: "Nessuna carta di credito richiesta. Riceverai un'email di conferma per completare l'impostazione.",
  },
  research: independentColoristResearch,
}
