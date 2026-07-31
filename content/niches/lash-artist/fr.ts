import { lashArtistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai pour lash artists indépendants",
    description: "Gardez le contrôle sur vos réservations de cils, le suivi client et vos revenus, même lorsque les DMs et les retards perturbent votre journée.",
    ogImageAlt: "Espace de travail Perelai pour un lash artist indépendant, avec visites de cils, calendrier et aperçu financier",
  },
  hero: {
    eyebrow: "Pour les lash artists indépendants",
    h1: "Vous ne pouvez pas passer votre journée à répondre aux DMs.",
    subhead: "Conservez vos poses complètes, vos remplissages et vos revenus réels dans un seul espace de travail. Un client en retard ne vous obligera plus à tout reconstruire le soir.",
    mock: "lash-workspace",
  },
  pains: [
    { title: "Une demande de réservation ne devrait pas être bloquée dans un fil DM", body: "Disponibilités, question sur un acompte, photo de référence et report de rendez-vous ne devraient pas vous obliger à fouiller dans vos messages entre deux clients. Un fil rempli de captures d'écran n'est pas une manière fiable de démarrer sa journée, surtout quand vous préparez votre plateau et vos consommables." },
    { title: "Un créneau mal ajusté peut décaler toute la journée", body: "Un rehaussement de cils & teinture ne rentre pas dans le temps d'un remplissage, et une pose complète en retard décale tout le reste. Suivez le travail dans un calendrier qui reflète la prestation réelle, pas un simple bloc d'heures anonyme." },
    { title: "Votre temps, vos consommables et vos revenus nécessitent la même vue", body: "Enregistrez les montants encaissés, gardez le matériel & la colle associés à la prestation, et visualisez les montants restants sans reconstituer votre semaine dans un tableau Excel." },
    { title: "L'historique d'un client devrait être facile à retrouver", body: "Quand une cliente régulière demande un remplissage, ses visites, notes et paiements lui sont directement rattachés. Vous n'avez plus à faire défiler d'anciens DMs pour retrouver le moindre détail avant qu'elle ne s'installe sur la table." },
    { title: "Le dernier message ne devrait pas gâcher votre soirée", body: "Les clients peuvent toujours vous poser des questions directes. Mais les réservations courantes peuvent basculer sur votre lien dédié, posant une frontière claire entre le dernier client et votre soirée." },
  ],
  dayInLife: {
    title: "Même si le planning bouge, vous savez exactement ce qui requiert votre attention.",
    body: "Perelai maintient les éléments de votre journée de cils bien visibles une fois le dernier client parti. L'objectif est d'offrir à vos prestations, à l'historique client, aux coûts de matériel et aux décisions en attente une place fiable en dehors de votre boîte de messagerie.",
    steps: [
      { title: "Les sourcils ont un démarrage clair", body: "Placez la restructuration, la teinture et le brow lift comme des prestations autonomes avec leur durée propre dans la journée." },
      { title: "Le rehaussement obtient le temps nécessaire", body: "Gardez le rehaussement & teinture bien visible dans le calendrier avant que les rendez-vous plus courts ne viennent bousculer la journée." },
      { title: "Une pose complète trouve sa place", body: "Ajoutez une extension de cils comme une Visite avec les détails du client et la durée requise, plutôt que de tout conserver dans un fil de discussion." },
      { title: "Le remplissage reste connecté", body: "Conservez le remplissage de cils dans le calendrier avec le reste de la journée sans chercher les détails dans un dernier message." },
      { title: "La prochaine réservation est un choix conscient", body: "Consultez les disponibilités réelles lorsque quelqu'un vous sollicite. Un lien de réservation direct permet au client de choisir prestation, spécialiste et horaire sans échanger dix messages." },
      { title: "La carte des prestations reste reconnaissable", body: "Conservez les intitulés connus de vos clients dans une liste de prestations modifiable." },
      { title: "Le travail du cil a son propre rythme", body: "Nettoyage, isolation, pose, choix des courbures et rétention font partie de votre savoir-faire. Chaque prestation demande une préparation et une attention différentes." },
      { title: "Un client régulier n'est pas un créneau vide", body: "Un échange autour d'un remplissage démarre avec l'historique des visites, les notes et les paiements du client au même endroit." },
      { title: "Les consommables ont leur rôle à côté de la prestation", body: "Liez matériel & colle à la prestation correspondante plutôt que de conserver vos reçus dans un coin." },
      { title: "L'argent et les affaires en cours restent visibles", body: "Consignez les montants encaissés, associez les consommables et laissez la décision suivante dans la boîte opérationnelle." },
      { title: "Le reçu de paiement a une fin claire", body: "Une fois le montant encaissé enregistré, une confirmation de paiement peut être transmise au client sous forme de lien." },
      { title: "Demain commence avec une vraie liste", body: "Une question sans réponse ou un paiement en attente reste dans la boîte opérationnelle. Lire un message ne supprime pas la tâche." },
    ],
  },
  terminology: [
    { theirWord: "Restructuration des sourcils, teinture ou brow lift", perelaiWord: "Visite", why: "Regroupe la prestation, les notes client et l'historique des paiements." },
    { theirWord: "Rehaussement de cils & teinture, pose complète ou remplissage", perelaiWord: "Visite", why: "Donne à chaque type de prestation de cils sa place dédiée dans l'agenda." },
    { theirWord: "Une prestation combinée teinture sourcils & cils a été ajoutée", perelaiWord: "Options", why: "Rattache le travail supplémentaire à la Visite concernée." },
    { theirWord: "Matériel & colle pour la journée", perelaiWord: "Dépenses associées", why: "Affiche ces coûts en regard de la prestation qu'ils ont permis de réaliser." },
    { theirWord: "Un ensemble prépayé de séances de remplissage", perelaiWord: "Forfait", why: "Le solde prépayé se déduit à mesure que les Visites sont consommées." },
    { theirWord: "Un client qui réglera le solde plus tard", perelaiWord: "Commande", why: "Suivez les montants dus sans pour autant parler de facture." },
    { theirWord: "Une question sur les conditions ou un suivi après le dernier client", perelaiWord: "Élément de la boîte opérationnelle", why: "Reste présent jusqu'à résolution, sans se perdre sous de nouveaux messages." },
  ],
  setup: {
    title: "Commencez avec les prestations de cils que vous réalisez déjà.",
    body: "Pas de liste vide générique. Le modèle pour lash artist démarre avec des prestations modifiables, des options et des coûts de matériel associés.",
    steps: [
      { title: "Ouvrez l'espace de travail pour lash artist", body: "Si vous venez depuis cette page, le modèle pour lash artist indépendant sera sélectionné par défaut lors de la configuration." },
      { title: "Faites de la liste de prestations la vôtre", body: "Commencez avec Restructuration des sourcils, Teinture des sourcils, Brow lift, Rehaussement de cils & teinture, Pose complète d'extensions et Remplissage de cils. Modifiez les durées ou ajustez selon votre carte." },
      { title: "Importez l'essentiel", body: "Importez les contacts de votre téléphone via vCard, connectez Google Agenda, puis partagez votre propre lien de réservation." },
    ],
  },
  faq: [
    { q: "Mes prestations de cils sont-elles déjà configurées ?", a: "Oui. Le modèle pour lash artist démarre avec six prestations modifiables : Restructuration des sourcils, Teinture des sourcils, Brow lift, Rehaussement de cils & teinture, Pose complète d'extensions et Remplissage de cils." },
    { q: "Les clients peuvent-ils réserver sans passer par les DMs ?", a: "Partagez un lien de réservation dans votre bio ou par message. Les clients choisissent la prestation, le membre de l'équipe et l'horaire. Perelai ne prend pas de commission sur les réservations." },
    { q: "Que se passe-t-il si un client est en retard ou ne vient pas ?", a: "Perelai peut envoyer des rappels automatiques par e-mail, notification push et dans l'application. Le travail et l'argent sont suivis séparément pour qu'un rendez-vous manqué ne soit pas comptabilisé comme revenu." },
    { q: "Puis-je voir ce que la semaine a réellement rapporté ?", a: "Consignez les montants encaissés, associez le matériel & la colle au travail réalisé, et visualisez revenus, coûts et montants dus sans tableur." },
    { q: "Dois-je tout migrer en un week-end ?", a: "Non. Incorporez vos contacts depuis votre téléphone via vCard et connectez optionnellement Google Agenda. La liste de prestations est entièrement adaptable à votre rythme." },
  ],
  labels: {
    terminologyTitle: "Les termes de votre studio de cils ont leur place dans Perelai.",
    inYourChair: "Dans votre studio",
    inPerelai: "Dans Perelai",
    whyItMatters: "Pourquoi c'est important",
    mocksTitle: "Données de lash artist telles qu'affichées dans le produit.",
    mocksBody: "Les exemples s'appuient sur les prestations, options et dépenses associées du modèle pour lash artist.",
    faqTitle: "Questions fréquentes des lash artists avant de changer.",
  },
  whatItIsNot: {
    title: "Clarté sur ce que ce n'est pas.",
    body: "Perelai est pensé pour la gestion client, les réservations et le suivi financier de votre activité de cils. Il ne remplace pas des outils spécialisés.",
    items: [
      { title: "Pas un logiciel de comptabilité", body: "Il suit ce qui est réservé, réalisé et payé pour donner une visibilité sur la trésorerie. Ce n'est pas un bilan fiscal." },
      { title: "Pas une plateforme de mise en relation", body: "Votre lien de réservation vous appartient. Perelai ne prend pas de commission et n'intervient pas dans votre relation client." },
      { title: "Pas un système de dossier médical", body: "Il ne fournit pas de dossiers cliniques, de suivi de diagnostic ni de gestion de patients." },
    ],
  },
  cta: {
    title: "Gardez votre journée de cils claire et lisible même après le dernier client.",
    body: "Créez un espace de travail qui démarre avec vos prestations et réunit visites, trésorerie et décisions au même endroit.",
    label: "Créer un espace de travail",
    microcopy: "Pas de carte de crédit requise. Vous recevrez un e-mail de confirmation pour finaliser l'installation.",
  },
  research: lashArtistResearch,
}
