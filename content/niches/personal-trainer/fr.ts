import { personalTrainerResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai pour coachs sportifs",
    description:
      "Suivez le revenu des séances, les coûts enregistrés et le profit calculé pour toute période — avec historique client et utilisations de forfaits lisibles.",
    ogImageAlt:
      "Aperçu financier Perelai pour un coach sportif, avec revenu des séances, coûts enregistrés et profit calculé pour une période — données d'exemple.",
  },

  hero: {
    eyebrow: "Logiciel financier pour coachs sportifs",
    h1: "Une vision claire des finances de votre coaching personnel.",
    subhead:
      "Suivez le revenu des séances, les coûts enregistrés et le profit calculé pour un jour, une semaine, un mois, un trimestre ou une année. Consultez le résultat par client et catégorie de service, tandis que les séances terminées, les paiements enregistrés et les utilisations de forfaits restent séparés.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Un agenda plein ne répond pas à la question",
      body: "Des séances de coaching privé, du renforcement musculaire et des bilans à la suite remplissent la journée sans rien dire du mois. La location de salle, les déplacements chez les clients et le remplacement du matériel fitness se cachent derrière les entraînements — et rien de tout cela n'est dans l'agenda.",
    },
    {
      title: "Les blocs de forfaits prépayés brouillent le suivi de période",
      body: "Quand un client achète un bloc de dix séances à l'avance, compter ce paiement unique le premier jour fait paraître les semaines de coaching suivantes non enregistrées. Enregistrer les utilisations de forfait à chaque séance suivie garde le travail fitness terminé clair.",
    },
    {
      title: "Séances, paiements et dépenses vivent à des endroits différents",
      body: "Les rendez-vous sont dans une app calendrier, les paiements clients dans un autre outil, les dépenses de salle dans des carnets ou sur des reçus papier. Revoir la période, c'est rassembler ces enregistrements.",
    },
  ],

  dayInLife: {
    title: "Enregistrez chaque séance. Consultez la période quand vous en avez besoin.",
    body: "Terminez les séances, enregistrez les paiements, utilisez les crédits de forfait et ajoutez les dépenses professionnelles dans l'administration courante. Perelai garde ces enregistrements liés au client, à la catégorie de service et à la période choisie.",
    steps: [
      {
        title: "La fin de séance et le paiement restent séparés",
        body: "Terminer une Séance de Coaching Privée enregistre que la séance a eu lieu. Cela n'enregistre pas de paiement. Le statut de paiement reste une partie distincte de la même Visite.",
      },
      {
        title: "Le paiement reste lié à la séance et au client",
        body: "Un paiement enregistré reste lié à la séance et au client concernés, pour que l'historique financier puisse être retracé jusqu'au travail derrière.",
      },
      {
        title: "Les crédits de forfait s'appliquent aux séances suivies",
        body: "Quand un client utilise un Abonnement / Forfait Séances prépayé, l'utilisation d'un crédit est enregistrée comme règlement sans espèces. Les séances réalisées et les paiements enregistrés restent distincts.",
      },
      {
        title: "Lire les totaux d'entraînement de la période",
        body: "Évaluez le revenu des séances, les coûts enregistrés et le profit calculé pour un jour, une semaine, un mois, un trimestre ou une année — par client et catégorie de service.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Bilan de Forme Initial, Séance de Coaching Privée, Abonnement / Forfait Séances, Suivi / Coaching en Ligne",
      perelaiWord: "Services sur une Visite",
      why: "Le modèle coach sportif fournit quatre services de départ pour le coaching fitness, la condition physique et la programmation. Chaque séance réservée devient une Visite portant le client, le service et l'enregistrement de paiement ensemble.",
    },
    {
      theirWord: "Plan Alimentaire / Programme Sur Mesure",
      perelaiWord: "Complément sur une Visite",
      why: "Livré avec les séances privées ou les forfaits séances, un complément nutritionnel ou d'entraînement fait partie de l'enregistrement de la visite.",
    },
    {
      theirWord: "Location de salle, déplacements clients, équipement",
      perelaiWord: "Dépense enregistrée",
      why: "Enregistrez les frais de salle, les déplacements et les coûts d'équipement pour une période. Ils contribuent au profit calculé de la période sélectionnée.",
    },
    {
      theirWord: "Bloc de dix séances",
      perelaiWord: "Forfait prépayé",
      why: "Les forfaits clients prépayés restent en crédits, utilisés séance par séance sans fausser le revenu de la période.",
    },
  ],

  setup: {
    title: "Partez de la liste de services d'un coach sportif, pas d'une page blanche.",
    body: "Le modèle coach sportif s'ouvre avec quatre services modifiables et un complément — votre premier écran ressemble déjà à une pratique fitness en activité.",
    steps: [
      {
        title: "Ouvrez l'espace de travail coach sportif",
        body: "Arriver depuis cette page place le modèle coach sportif en premier dans l'onboarding, préchargé avec Bilan de Forme Initial, Séance de Coaching Privée, Abonnement / Forfait Séances et Suivi / Coaching en Ligne.",
      },
      {
        title: "Ajustez services et catégories de coûts",
        body: "Définissez durées et tarifs de vos séances, gardez Plan Alimentaire / Programme Sur Mesure comme complément si vous l'offrez, et enregistrez les dépenses de salle sur les périodes choisies.",
      },
      {
        title: "Enregistrez les séances et consultez les résultats de période",
        body: "Marquez les visites terminées, enregistrez les paiements, utilisez les crédits de forfait et consultez revenu, dépenses enregistrées et profit calculé pour un jour, une semaine, un mois, un trimestre ou une année.",
      },
    ],
  },

  faq: [
    {
      q: "Comment sont gérés les forfaits d'entraînement prépayés ?",
      a: "Les forfaits prépayés sont enregistrés comme crédits. Quand un client assiste à une séance, un crédit est utilisé — le travail terminé et les paiements enregistrés restent séparés.",
    },
    {
      q: "Puis-je enregistrer des dépenses comme la location de salle ou les déplacements ?",
      a: "Oui. Vous pouvez enregistrer les dépenses professionnelles pertinentes pour une période. Elles entrent dans les coûts enregistrés et le profit calculé de la période sélectionnée.",
    },
    {
      q: "Terminer une séance enregistre-t-il aussi un paiement ?",
      a: "Non. La fin de séance et le statut de paiement sont enregistrés séparément. Une séance terminée peut exister avant qu'un paiement soit enregistré.",
    },
    {
      q: "Les services du modèle sont-ils modifiables ?",
      a: "Oui. Les services du modèle (Bilan de Forme Initial, Séance de Coaching Privée, Abonnement / Forfait Séances, Suivi / Coaching en Ligne) et le complément Plan Alimentaire / Programme Sur Mesure sont entièrement modifiables.",
    },
  ],

  labels: {
    terminologyTitle: "Termes du coaching personnel et concepts Perelai.",
    inYourChair: "Dans votre pratique",
    inPerelai: "Dans Perelai",
    whyItMatters: "Pourquoi c'est important",
    mocksTitle: "Données de coaching personnel, affichées dans le produit.",
    mocksBody: "Les données d'exemple utilisent les services et le complément du modèle coach sportif.",
    faqTitle: "Questions fréquentes.",
  },

  whatItIsNot: {
    title: "Clair sur ce que ce n'est pas.",
    body: "Perelai suit les séances d'entraînement terminées, les coûts enregistrés et le profit calculé sur les périodes choisies. Ce n'est pas un back office complet de salle.",
    items: [
      {
        title: "Pas un logiciel de comptabilité",
        body: "Revenu, dépenses et profit calculé sont suivis pour une période. Perelai ne fait pas la comptabilité, les déclarations fiscales ni le conseil financier — et ne remplace pas votre comptable.",
      },
      {
        title: "Pas un tracker fitness ni planificateur d'entraînement",
        body: "Vous pouvez suivre services, compléments et utilisations de forfaits. La programmation d'entraînement, les répétitions et la progression fitness n'en font pas partie.",
      },
      {
        title: "Pas une marketplace",
        body: "Votre lien de réservation vous appartient. Perelai ne loue pas la relation client.",
      },
    ],
  },

  cta: {
    title: "Sachez ce qu'a donné la période.",
    body: "Commencez avec un menu de services coach sportif pour garder séances terminées, paiements enregistrés, utilisations de forfaits et soldes de commandes ouverts structurés et lisibles.",
    label: "Créer un espace de travail",
    microcopy: "Vous recevrez un e-mail de confirmation pour finaliser la configuration.",
  },

  research: personalTrainerResearch,
}
