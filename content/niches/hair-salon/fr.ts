import { hairSalonResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai pour les propriétaires de salons de coiffure",
    description:
      "Suivez le revenu, les coûts enregistrés et le profit calculé pour toute période, avec le résultat regroupé par catégorie de prestation et par client.",
    ogImageAlt:
      "Aperçu financier Perelai pour un salon de coiffure, avec revenu, coûts et profit calculé pour une période et une répartition par catégorie de prestation — données d'exemple.",
  },

  hero: {
    eyebrow: "Logiciel de finances pour propriétaires de salons de coiffure",
    h1: "Voyez le mois de votre salon sans le reconstruire à la main.",
    subhead:
      "Suivez le revenu, les coûts enregistrés et le profit calculé pour toute période. Relisez le résultat par catégorie de prestation et par client, tandis que les paiements enregistrés et les soldes ouverts de commandes ou de plans restent séparés.",
    mock: "colorist-workspace",
  },

  pains: [
    {
      title: "Le mois se reconstruit, il ne se lit pas",
      body: "Le revenu vit dans le système de rendez-vous, les paiements sont éparpillés sur des comptes, et les coûts produits arrivent sur les factures fournisseurs des semaines plus tard. La clôture devient une soirée à reconstruire ce qui s'est déjà passé, de mémoire et d'un récapitulatif de terminal.",
    },
    {
      title: "Le revenu seul ne montre pas ce que le mois a coûté",
      body: "Un planning plein peut encore cacher les coûts produits, le loyer et d'autres dépenses enregistrées. Les propriétaires expérimentés demandent ce qu'un chiffre intègre déjà avant de lui faire confiance. Perelai garde le revenu, les coûts enregistrés et le profit calculé visibles comme des chiffres séparés.",
    },
    {
      title: "Les outils ne racontent pas une seule histoire",
      body: "Rendez-vous, historique client et enregistrements de paiement vivent souvent dans des systèmes différents qui n'échangent pas de données, donc quelqu'un doit vérifier deux ou trois endroits pour répondre à une question. Perelai garde chaque événement financier enregistré relié au client et au travail derrière.",
    },
  ],

  dayInLife: {
    title: "Enregistrez la journée au fil de l'eau. Lisez le mois quand vous en avez besoin.",
    body: "Terminez les visites, enregistrez les paiements, utilisez les forfaits et ajoutez les coûts comme partie du travail du jour. Perelai garde chaque enregistrement relié au client, à la catégorie de prestation et à la période — la revue de fin de mois part d'un enregistrement, pas d'une reconstruction.",
    steps: [
      {
        title: "Un rendez-vous est terminé, pas encore réglé",
        body: "Marquer Coupe Femme comme terminée enregistre que le travail a eu lieu. Cela n'affirme pas que l'argent est arrivé. La visite reste dans un état visible au lieu d'être comptée discrètement comme revenu.",
      },
      {
        title: "Un paiement est enregistré contre le travail qu'il a payé",
        body: "Quand le client règle, le paiement s'attache à cette visite plutôt qu'à un total anonyme de fin de journée, ainsi le chiffre garde son lien avec le client et la catégorie de prestation.",
      },
      {
        title: "Un forfait utiliséé règle sans nouveau paiement",
        body: "Un client prépayé qui utilise un Soin règle la visite et ne déplace pas d'argent ce jour-là. Perelai enregistre l'utilisation, donc paiements enregistrés et revenu réglé restent deux chiffres distincts.",
      },
      {
        title: "La période répond",
        body: "Choisissez un jour, une semaine, un mois, un trimestre ou une année et lisez le revenu, les coûts enregistrés et le profit calculé, avec la répartition par catégorie et client en dessous et tout solde ouvert de commande tenu à part.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Coupe Femme, Coloration des Racines, Balayage / Couleur Dimensionnelle, Patine & Brillance, Soin",
      perelaiWord: "Prestations sur une Visite",
      why: "Le modèle salon commence avec ces cinq, modifiables. Chaque rendez-vous réservé devient une Visite portant client, prestation et activité monétaire ensemble.",
    },
    {
      theirWord: "Brushing & Coiffage ou Soin Protecteur de Ponts (Plex) ajoutés au fauteuil",
      perelaiWord: "Options",
      why: "Le travail supplémentaire s'attache à la Visite où il a été fait, pour que l'enregistrement corresponde à ce qui s'est passé plutôt qu'à ce qui était réservé au départ.",
    },
    {
      theirWord: "Travail couleur comparé au finishing",
      perelaiWord: "Catégorie de prestation",
      why: "Revenu et coûts sont regroupés par catégorie, donc la répartition compare la couleur au finishing. Elle ne rapporte pas un chiffre séparé pour chaque prestation du menu.",
    },
    {
      theirWord: "Tubes de Coloration et Fournitures Jetables",
      perelaiWord: "Coûts liés",
      why: "Ils sont enregistrés comme coûts de la période, donc apparaissent dans la même vue que le revenu de catégorie qu'ils ont soutenu, plutôt que seulement sur un relevé fournisseur. Perelai ne mesure pas combien de produit une seule formule a utilisé.",
    },
    {
      theirWord: "Un client sur un parcours de rendez-vous prépayé",
      perelaiWord: "Forfait",
      why: "Les crédits diminuent à mesure que les Visites sont utilisées. Une utilisation règle la visite et ne crée aucun mouvement d'argent — c'est pourquoi le travail utiliséé et les paiements enregistrés sont montrés comme des choses différentes.",
    },
    {
      theirWord: "Une cure de soins payée en plusieurs fois",
      perelaiWord: "Commande et plans",
      why: "Ce qui reste dû reste attaché à cette commande, donc un montant en suspens a une portée définie plutôt qu'un vague sentiment que quelqu'un doit quelque chose.",
    },
    {
      theirWord: "Revenu moins les coûts enregistrés de la période",
      perelaiWord: "Profit",
      why: "Le chiffre de profit de Perelai est le revenu moins les dépenses enregistrées pour la période choisie. Un nombre opérationnel pour faire tourner le salon, pas un résultat comptable ou fiscal.",
    },
    {
      theirWord: "Ce à quoi chaque membre de l'équipe peut accéder",
      perelaiWord: "Accès Personnel ou Superviseur",
      why: "Chaque personne est invitée avec un rôle, et l'accès suit ce rôle, pour qu'une équipe travaille dans un seul espace de travail sans que chaque compte soit configuré de la même façon.",
    },
  ],

  setup: {
    title: "Partez de la liste de prestations d'un salon, pas d'une page vide.",
    body: "Le modèle salon s'ouvre avec cinq prestations modifiables, deux options et deux types de coûts liés, donc le premier écran ressemble déjà à un salon en activité.",
    steps: [
      {
        title: "Ouvrez l'espace de travail salon",
        body: "Arriver depuis cette page place le modèle salon en premier dans l'onboarding. Vous commencez avec Coupe Femme, Coloration des Racines, Balayage / Couleur Dimensionnelle, Patine & Brillance et Soin plutôt que de nommer une liste à partir de rien.",
      },
      {
        title: "Faites vôtres le menu et les coûts",
        body: "Ajustez durées et prix, gardez Brushing & Coiffage et Soin Protecteur de Ponts (Plex) comme options si vous les proposez, et gardez Tubes de Coloration et Fournitures Jetables comme types de coûts que vous enregistrez par période.",
      },
      {
        title: "Ajoutez les personnes qui travaillent au sol",
        body: "Invitez des membres d'équipe avec un accès Personnel ou Superviseur, et gardez plannings, congés et prestations assignées ensemble. L'accès suit le rôle avec lequel chaque personne est invitée.",
      },
      {
        title: "Apportez ce qui aide cette semaine",
        body: "Importez les contacts via vCard, connectez Google Agenda et partagez votre lien de réservation. Commencez par les prochaines semaines plutôt que de mettre le salon en pause pour une migration.",
      },
    ],
  },

  faq: [
    {
      q: "Les prestations du salon seront-elles déjà en place ?",
      a: "Oui. Le modèle salon commence avec Coupe Femme, Coloration des Racines, Balayage / Couleur Dimensionnelle, Patine & Brillance et Soin, plus Brushing & Coiffage et Soin Protecteur de Ponts (Plex) comme options et Tubes de Coloration et Fournitures Jetables comme coûts liés. Tout est modifiable.",
    },
    {
      q: "Quelle est la finesse de la répartition des prestations ?",
      a: "Revenu et coûts sont regroupés par catégorie de prestation, donc vous pouvez comparer le travail couleur au finishing sur une période choisie, et voir l'historique de revenu d'un client dans le temps. Perelai ne calcule pas la rentabilité de chaque prestation individuelle du menu.",
    },
    {
      q: "Perelai suit-il la couleur utilisée dans chaque formule ?",
      a: "Non. Perelai enregistre les coûts par période et catégorie de prestation. Il ne pèse pas la couleur, ne calcule pas l'usage au niveau formule et ne gère pas le stock backbar. Si vous avez besoin du coût produit exact derrière une seule formule, c'est un autre type d'outil.",
    },
    {
      q: "Un rendez-vous terminé compte-t-il comme de l'argent reçu ?",
      a: "Non. Travail terminé, revenu réglé et paiements enregistrés sont suivis séparément. Un rendez-vous peut être fini et encore en attente de paiement, et un forfait prépayé peut régler une visite sans qu'aucun argent ne bouge ce jour-là. Garder les trois à part, c'est ce qui donne un sens au chiffre de période.",
    },
    {
      q: "Que contient le chiffre de profit ?",
      a: "Le revenu de la période choisie, moins les dépenses enregistrées contre cette période. C'est un calcul pour faire tourner le salon, pas un résultat comptable ou fiscal, et il ne remplace pas votre comptable.",
    },
    {
      q: "Mon équipe peut-elle utiliser le même espace de travail ?",
      a: "Oui. Invitez des membres d'équipe avec un accès Personnel ou Superviseur. Plannings, congés et prestations assignées restent dans le même espace, avec un accès selon chaque rôle.",
    },
  ],

  labels: {
    terminologyTitle: "Les mots du salon, et comment on les appelle dans Perelai.",
    inYourChair: "Dans votre salon",
    inPerelai: "Dans Perelai",
    whyItMatters: "Pourquoi c'est important",
    mocksTitle: "Données de salon, montrées dans le produit.",
    mocksBody: "Les données d'exemple utilisent les prestations, options et coûts liés du modèle salon.",
    faqTitle: "Ce que les propriétaires de salons demandent en premier.",
  },

  whatItIsNot: {
    title: "Clair sur ce que ce n'est pas.",
    body: "Perelai suit l'argent lié au travail que votre salon a fait. Il ne prétend pas être le reste de votre back-office.",
    items: [
      {
        title: "Pas un logiciel de comptabilité",
        body: "Il enregistre le revenu, les coûts et un chiffre de profit calculé pour une période. Il ne fait pas de tenue de livres, de déclaration fiscale ni de conseil financier, et ne remplace pas votre comptable.",
      },
      {
        title: "Pas de paie ni de RH",
        body: "Vous pouvez inviter des membres d'équipe et garder plannings, congés et prestations assignées ensemble. Salaires, commissions et feuilles de temps n'en font pas partie.",
      },
      {
        title: "Pas un stock backbar",
        body: "Tubes de Coloration et Fournitures Jetables sont enregistrés comme coûts d'une période. Perelai ne pèse pas le produit, ne suit pas l'usage par formule et ne réapprovisionne pas le stock.",
      },
    ],
  },

  cta: {
    title: "Voyez le mois sans le reconstruire.",
    body: "Partez d'une liste de prestations salon et gardez travail terminé, paiements enregistrés, utilisations de forfait et soldes ouverts de commande comme des enregistrements séparés et lisibles.",
    label: "Créer un espace de travail",
    microcopy: "Vous recevrez un e-mail de confirmation pour finaliser la configuration.",
  },

  research: hairSalonResearch,
}
