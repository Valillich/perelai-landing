import { independentColoristResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai pour coloristes indépendants",
    description: "Une méthode plus sereine pour gérer vos rendez-vous de coloration, vos demandes de réservation et votre trésorerie.",
    ogImageAlt: "Espace de travail Perelai pour une coloriste indépendante, affichant des visites de coloration, un calendrier et un aperçu financier",
  },
  hero: {
    eyebrow: "Pour les coloristes indépendants",
    h1: "Quand un double rendez-vous peut ruiner toute votre journée.",
    subhead: "Centralisez vos DMs débordants, vos visites de coloration et vos encaisses du jour dans un espace de travail conçu pour votre façon de travailler.",
    mock: "colorist-workspace",
  },
  pains: [
    { title: "Vos DMs Instagram sont complètement submergés", body: "Une demande de réservation ne devrait pas cohabiter avec une question sur une formule de couleur, une photo et un changement d'heure à minuit." },
    { title: "Dix minutes de retard et la journée semble gâchée", body: "Une couleur de racines, un balayage et un coiffage de dernière minute ont des durées différentes. Votre calendrier doit refléter la réalité du travail." },
    { title: "« Elle me paiera la prochaine fois » reste une affaire non classée", body: "Enregistrez ce qui a réellement été encaissé, visualisez les montants en attente et gardez un œil sur les produits de couleur et les consommables." },
  ],
  dayInLife: {
    title: "Même si la journée dérape, vous savez toujours ce qui vient ensuite.",
    body: "Perelai garde visible le travail d'une journée de coloration sans vous demander de la reconstituer le soir venu.",
    steps: [
      { title: "Diagnostic et touche d'essai", body: "Démarrez la Visite avec la prestation qui définit le plan de coloration." },
      { title: "Racines ou couleur dimensionnelle", body: "Conservez la prestation de couleur du jour dans le calendrier, avec le temps qu'elle requiert." },
      { title: "Soin traitant et coiffage", body: "Ajoutez le travail qui complète la visite, y compris les options choisies par votre client." },
      { title: "Paiement et suivi", body: "Terminez avec le montant reçu, le travail restant et la décision suivante bien visibles dans la boîte de réception opérationnelle." },
    ],
  },
  terminology: [
    { theirWord: "Une couleur de racines, un balayage ou un gloss / patine", perelaiWord: "Visite", why: "Regroupe la prestation, les notes client et l'historique des paiements." },
    { theirWord: "Soin traitant, supplément cheveux longs ou coiffage", perelaiWord: "Options", why: "Associe le travail supplémentaire à la Visite qui le nécessite." },
    { theirWord: "Produits de coloration et matériel jetable", perelaiWord: "Dépenses associées", why: "Affiche les coûts à côté de la prestation à laquelle ils appartiennent." },
    { theirWord: "Un ensemble prépayé de séances d’entretien de couleur", perelaiWord: "Forfait", why: "Le solde prépayé se déduit au fur et à mesure de l'utilisation des Visites." },
    { theirWord: "« Elle me paiera la prochaine fois »", perelaiWord: "Commande", why: "Suivez les montants dus sans pour autant les qualifier de factures." },
    { theirWord: "Informer un client que son paiement a été reçu", perelaiWord: "Confirmation de paiement", why: "Envoyez une confirmation que votre client peut consulter via un lien." },
    { theirWord: "Ce qui nécessite encore votre décision après le dernier client", perelaiWord: "Élément de la boîte opérationnelle", why: "Reste présent jusqu'à ce que vous le résolviez, et pas simplement jusqu'à ce que vous le lisiez." },
  ],
  setup: {
    title: "Commencez avec les prestations de coloration que vous réalisez déjà.",
    body: "Pas de liste vide générique. Le modèle pour coloriste commence avec des prestations modifiables, des options et des coûts associés.",
    steps: [
      { title: "Ouvrez l'espace de travail pour coloriste", body: "Si vous arrivez depuis cette page, le modèle pour coloriste indépendant apparaîtra en premier lors de la configuration." },
      { title: "Personnalisez la liste", body: "Commencez avec Diagnostic & Touche d'essai, Couleur de racines, Couleur dimensionnelle / Balayage, Correction de couleur, Gloss & Patine, et Coupe & Coiffage. Adaptez selon vos besoins." },
      { title: "Importez l'essentiel", body: "Importez vos contacts via vCard depuis votre téléphone, connectez Google Agenda, puis partagez votre propre lien de réservation." },
    ],
  },
  faq: [
    { q: "Mes prestations de couleur sont-elles déjà configurées ?", a: "Oui. Le modèle pour coloriste indépendant démarre avec six prestations modifiables, dont Couleur de racines, Couleur dimensionnelle / Balayage, Correction de couleur, Gloss & Patine, et Coupe & Coiffage. Il inclut aussi Soin traitant, Supplément cheveux longs et Coiffage comme options." },
    { q: "Les clients peuvent-ils arrêter de réserver via mes DMs ?", a: "Partagez un lien de réservation dans votre bio ou envoyez-le par message. Les clients choisissent une prestation, un membre de l'équipe et un créneau. Perelai ne prend aucune commission sur les réservations." },
    { q: "Que se passe-t-il si quelqu'un ne vient pas ?", a: "Perelai peut envoyer des rappels automatiques par e-mail, dans l'application et par notification push. Le travail et l'argent sont suivis séparément, afin qu'un rendez-vous manqué ne soit pas comptabilisé comme un revenu." },
    { q: "Puis-je voir si une journée de couleur a vraiment été rentable ?", a: "Enregistrez les montants réellement encaissés, associez les produits de couleur et consommables à la prestation correspondante, et consultez revenus, coûts et montants dus sans tableur." },
    { q: "Dois-je tout migrer en un week-end ?", a: "Non. Commencez par importer vos contacts depuis votre téléphone via vCard et connectez éventuellement Google Agenda. La liste de prestations est entièrement modifiable à votre rythme." },
  ],
  labels: {
    terminologyTitle: "Les termes de votre fauteuil ont leur place dans Perelai.",
    inYourChair: "Au fauteuil",
    inPerelai: "Dans Perelai",
    whyItMatters: "Pourquoi c'est important",
    mocksTitle: "Données de coloriste telles qu'affichées dans le produit.",
    mocksBody: "Ces données d'exemple utilisent les prestations, options et dépenses associées issues du modèle pour coloriste indépendant.",
    faqTitle: "Questions que se posent les coloristes avant de sauter le pas.",
  },
  whatItIsNot: {
    title: "Clarté sur ce que ce n'est pas.",
    body: "Perelai est conçu pour gérer la clientèle, les réservations et les finances de votre activité de coloration. Il n'a pas vocation à remplacer des outils spécialisés.",
    items: [
      { title: "Pas un logiciel de comptabilité", body: "Il enregistre ce qui est réservé, réalisé et payé pour rendre la trésorerie visible. Ce n'est ni un bilan fiscal ni un conseil financier." },
      { title: "Pas une plateforme de mise en relation", body: "Votre lien de réservation est le vôtre. Perelai ne prend aucune commission et n'interfère pas dans votre relation client." },
      { title: "Pas un système de dossier médical", body: "Il ne fournit pas de dossiers cliniques, de suivi de diagnostic ni de gestion de patients." },
    ],
  },
  cta: {
    title: "Gardez votre journée de coloration sous contrôle sans avoir à la reconstituer plus tard.",
    body: "Créez un espace de travail qui commence par vos prestations de couleur et rassemble visites, trésorerie et suivis en un seul endroit.",
    label: "Créer un espace de travail",
    microcopy: "Pas de carte de crédit requise. Vous recevrez un e-mail de confirmation pour finaliser la configuration.",
  },
  research: independentColoristResearch,
}
