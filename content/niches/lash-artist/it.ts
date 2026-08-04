import { lashArtistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai per lash artist indipendenti",
    description: "Tieni sotto controllo prenotazioni ciglia, clienti e incassi, anche quando i messaggi e un ritardo stravolgono la giornata.",
    ogImageAlt: "Spazio di lavoro Perelai per una lash artist indipendente, con visite ciglia, calendario e riepilogo finanziario",
  },
  hero: {
    eyebrow: "Per lash artist indipendenti",
    h1: "Non puoi passare la giornata a rispondere ai messaggi.",
    subhead: "Conserva trattamenti completi, ritocchi e incassi reali in un unico spazio di lavoro. Una cliente in ritardo non ti costringerà più a ricostruire l'intera giornata la sera.",
    mock: "lash-workspace",
  },
  pains: [
    { title: "Una richiesta di prenotazione non dovrebbe rimanere bloccata nei messaggi", body: "Disponibilità, domande sull'acconto, foto di riferimento e spostamenti d'orario non dovrebbero costringerti a cercare tra le chat tra una cliente e l'altra. Una chat piena di screenshot non è un modo affidabile per iniziare la giornata lavorativa." },
    { title: "Un blocco spostato può stravolgere il resto del giorno", body: "Laminazione ciglia & tinta non si adattano allo slot di un ritocco, e una prima applicazione in ritardo sposta ogni appuntamento successivo. Gestisci il lavoro in un calendario che rispecchi il servizio reale, non un blocco orario generico." },
    { title: "Tempo, materiali e incassi richiedono la stessa visione", body: "Annota ciò che hai incassato, tieni materiali e colla associati alla prestazione e vedi cosa resta da saldare senza ricostruire la settimana su Excel." },
    { title: "La cronologia di una cliente dovrebbe essere facile da trovare", body: "Quando una cliente abituale chiede un ritocco, le sue Visite, note e pagamenti appartengono alla sua scheda. Non dovresti scorrere vecchi messaggi per cercare l'ultimo dettaglio utile prima che la cliente si stenda sul lettino." },
    { title: "L'ultimo messaggio non dovrebbe sequestrare la tua serata", body: "Le clienti possono sempre farti domande dirette. Ma le prenotazioni di routine possono passare sul tuo link dedicato, lasciandoti un confine chiaro tra l'ultimo cliente e la tua serata." },
  ],
  dayInLife: {
    title: "Anche se l'agenda si sposta, sai esattamente cosa richiede attenzione.",
    body: "Perelai mantiene visibile la struttura della tua giornata ciglia dopo che l'ultima cliente se n'è andata: dalla definizione sopracciglia del mattino agli incassi dopo l'ultimo ritocco.",
    steps: [
      { title: "Le sopracciglia hanno un inizio chiaro", body: "Inserisci Definizione sopracciglia, Tinta sopracciglia e Brow Lamination come servizi autonomi con il loro tempo reale nel calendario." },
      { title: "La laminazione ottiene il tempo di cui ha bisogno", body: "Tieni Laminazione ciglia & tinta ben visibile in agenda prima che i lavori più veloci facciano scivolare gli orari." },
      { title: "Una prima applicazione trova il suo posto", body: "Aggiungi Extension ciglia come una Visita con i dettagli della cliente e il tempo necessario, anziché tenere tutto in chat." },
      { title: "Il ritocco rimane collegato", body: "Mantieni il Ritocco ciglia in calendario con il resto della giornata, senza cercare i dettagli nell'ultimo messaggio." },
      { title: "La prossima prenotazione è una scelta consapevole", body: "Consulta la reale disponibilità quando qualcuno chiede informazioni. Un link di prenotazione diretto permette alla cliente di scegliere servizio, specialista e orario." },
      { title: "Il listino servizi rimane riconoscibile", body: "Conserva i nomi noti alle tue clienti in un elenco di servizi personalizzabile." },
      { title: "Il lavoro sulle ciglia ha il suo ritmo", body: "Pulizia, isolamento, applicazione, scelta delle curvature e retention richiedono attenzioni e tempi diversi a seconda del servizio." },
      { title: "Una cliente abituale non è uno slot vuoto", body: "La conversazione per un ritocco inizia con la cronologia visite, le note e i pagamenti della cliente nello stesso posto." },
      { title: "I materiali contano", body: "Associa Materiali & Colla al lavoro svolto, anziché tenere ricevute e acquisti memorizzati in un angolo." },
      { title: "Denaro e sospesi rimangono visibili", body: "Registra quanto incassato, associa i materiali e lascia la decisione successiva in In Arrivo Operativi." },
      { title: "La ricevuta di pagamento ha una chiusura chiara", body: "Una volta registrato l'incasso, puoi inviare una Conferma di pagamento tramite un comodo link." },
      { title: "Domani inizia con un vero elenco", body: "Una domanda senza risposta o un pagamento in sospeso rimangono in In Arrivo Operativi. Leggere una notifica non cancella il lavoro." },
    ],
  },
  terminology: [
    { theirWord: "Definizione sopracciglia, Tinta o Brow Lamination", perelaiWord: "Visita", why: "Raggruppa servizio, note cliente e pagamenti." },
    { theirWord: "Laminazione ciglia & tinta, Extension o Ritocco", perelaiWord: "Visita", why: "Dà a ogni tipo di lavoro sulle ciglia il proprio spazio dedicato in agenda." },
    { theirWord: "È stata aggiunta una Tinta abbinata ciglia & sopracciglia", perelaiWord: "Opzioni", why: "Associa il lavoro extra alla Visita a cui appartiene." },
    { theirWord: "Materiali & Colla per la giornata", perelaiWord: "Spese collegate", why: "Mostra i costi accanto alla prestazione per cui sono stati impiegati." },
    { theirWord: "Un pacchetto prepagato di ritocchi ciglia", perelaiWord: "Pacchetto", why: "Il saldo diminuisce quando le Visite vengono effettuate." },
    { theirWord: "Una cliente che pagherà il resto più tardi", perelaiWord: "Ordine", why: "Traccia i saldi in sospeso senza parlare di fattura." },
    { theirWord: "Dubbi su regolamenti o follow-up post-trattamento", perelaiWord: "Scheda in In Arrivo Operativi", why: "Rimane lì finché non lo risolvi, senza perdersi tra i nuovi messaggi." },
  ],
  setup: {
    title: "Inizia con il lavoro ciglia che fai già ogni giorno.",
    body: "Nessun modulo generico da compilare da zero. Il modello per lash artist parte con servizi modificabili, un'opzione tinta e spese collegate.",
    steps: [
      { title: "Apri lo spazio di lavoro per lash artist", body: "Arrivando da questa pagina, il modello per lash artist indipendenti sarà il primo selezionato durante l'onboarding." },
      { title: "Rendi il listino servizi davvero tuo", body: "Inizia con Definizione sopracciglia, Tinta sopracciglia, Brow Lamination, Laminazione ciglia & tinta, Extension ciglia e Ritocco ciglia. Modifica durate e offerte." },
      { title: "Porta ciò che serve", body: "Importa i contatti dal telefono tramite vCard, collega Google Calendar e condividi il tuo link di prenotazione." },
    ],
  },
  faq: [
    { q: "I miei servizi ciglia sono già preimpostati?", a: "Sì. Il modello per lash artist parte con sei servizi modificabili (Definizione, Tinta, Brow Lamination, Laminazione ciglia & tinta, Extension e Ritocco ciglia) oltre a materiali e opzioni abbinate." },
    { q: "Le clienti possono prenotare senza passare dai messaggi privati?", a: "Condividi un link di prenotazione nella bio o in chat. Le clienti scelgono servizio, specialista e orario." },
    { q: "Cosa succede se una cliente è in ritardo o non si presenta?", a: "Perelai invia promemoria automatici via email, in-app e notifiche push. Lavoro e incassi sono separati, perciò una visita saltata non conta come incasso." },
    { q: "Posso vedere quanto ha reso davvero la settimana?", a: "Registra gli incassi reali, collega materiali e colla al lavoro svolto e vedi entrate, costi e sospesi senza fogli di calcolo." },
    { q: "Devo spostare tutto in un solo fine settimana?", a: "No. Inizia dai contatti del telefono via vCard e collega opzionalmente Google Calendar. L'elenco servizi si adatta man mano al tuo ritmo." },
  ],
  labels: {
    terminologyTitle: "Le parole della tua cabina ciglia hanno un posto in Perelai.",
    inYourChair: "In cabina",
    inPerelai: "In Perelai",
    whyItMatters: "Perché è importante",
    mocksTitle: "Dati di una lash artist per come appaiono nel prodotto.",
    mocksBody: "Gli esempi usano i servizi, le opzioni e le spese collegate del modello per lash artist.",
    faqTitle: "Domande frequenti delle lash artist prima di cambiare.",
  },
  whatItIsNot: {
    title: "Massima chiarezza su ciò che non è.",
    body: "Perelai è pensato per la gestione clienti, prenotazioni e finanze del tuo lavoro ciglia. Non sostituisce software ultra-specializzati.",
    items: [
      { title: "Non è un software di contabilità", body: "Traccia ciò che è prenotato, eseguito e pagato per la tua visibilità di cassa. Non è un bilancio fiscale." },
      { title: "Non è un marketplace", body: "Il tuo link è tuo." },
      { title: "Non è un sistema per cartelle cliniche", body: "Non gestisce schede cliniche, diagnosi né pazienti." },
    ],
  },
  cta: {
    title: "Mantieni visibile la tua giornata ciglia anche dopo l'ultima cliente.",
    body: "Crea uno spazio di lavoro che parte dai tuoi servizi e unisce visite, incassi e prossimi passaggi nello stesso posto.",
    label: "Crea uno spazio di lavoro",
    microcopy: "Riceverai un'email di conferma per completare l'impostazione.",
  },
  research: lashArtistResearch,
}
