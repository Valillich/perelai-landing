import { massageTherapistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai pour les praticiens du massage",
    description:
      "Revenu, coûts enregistrés et profit calculé pour toute période, avec historique client, forfaits prépayés et soldes ouverts séparés.",
    ogImageAlt:
      "Aperçu financier Perelai pour un masseur, avec revenu, coûts enregistrés et profit calculé pour une période — données d'exemple.",
  },

  hero: {
    eyebrow: "Logiciel de finances pour masseurs",
    h1: "Une semaine pleine et une bonne semaine ne sont pas le même chiffre.",
    subhead:
      "Le revenu, les coûts que vous enregistrez en face, et ce que les deux laissent — pour un jour, une semaine ou une année. À côté de ce qu'a dépensé chaque habitué, quels blocs prépayés tournent encore, et ce qui reste dû sur une commande.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Une semaine complète ne répond pas à la question",
      body: "Trois Massages Deep Tissue d'affilée remplissent la journée et ne disent rien du mois. Le chiffre qui compte se trouve derrière les huiles que vous avez remplacées, la salle que vous louez ou les kilomètres parcourus — et rien de tout cela n'est dans le calendrier que vous venez de remplir.",
    },
    {
      title: "Rendez-vous ici, paiements là, reçus ailleurs",
      body: "Les praticiens solo finissent souvent avec une app pour les rendez-vous, une autre pour encaisser et une troisième pour les reçus. Chacune fonctionne. Aucune ne répond à une question qui a besoin des trois, donc vous devenez l'intégration entre elles.",
    },
    {
      title: "Il n'y a que vous, donc l'admin n'a nulle part où aller",
      body: "Il n'y a pas d'accueil à qui le passer. Enregistrer la semaine devient une soirée avec un tableur qu'on vous a monté, ou un carnet du grossiste, reconstruit en fin de mois parce que rien ne l'a collecté au fil de l'eau.",
    },
  ],

  dayInLife: {
    title: "Enregistrez entre les clients. Regardez quand vous voulez.",
    body: "Terminer une séance, encaisser, débiter le bloc de six de quelqu'un, réapprovisionner les huiles — chacun est un tap pendant qu'on change la table. Parce qu'ils sont enregistrés là où ils se passent, la pratique peut se relire plus tard sans que personne s'assoie pour s'en souvenir.",
    steps: [
      {
        title: "Terminé et réglé sont deux choses différentes",
        body: "Cocher un Massage Relaxant dit que l'heure a eu lieu. Cela ne dit rien sur le fait d'avoir été payé. Les deux vivent comme des états séparés, pour qu'un mardi plein ne se transforme jamais discrètement en un chiffre qui n'est pas encore arrivé.",
      },
      {
        title: "L'argent atterrit sur la séance à laquelle il appartient",
        body: "Le paiement va sur cette heure avec ce client, pas dans un pot indifférencié de la journée. Six mois plus tard le montant pointe encore vers qui l'a versé et pour quel soin.",
      },
      {
        title: "Les blocs de six sortent du bloc, pas de la caisse",
        body: "Quelqu'un au milieu d'un bloc prépayé prend une heure de votre temps et ne donne rien, et c'est correct. Débiter un crédit s'enregistre comme son propre type d'événement ; c'est pourquoi livré et payé ne s'effondrent jamais en un total trompeur.",
      },
      {
        title: "Choisissez une plage et lisez-la",
        body: "Un jour, une semaine, un mois, un trimestre, une année — comme vous pensez vraiment. Vous obtenez le revenu, les coûts enregistrés en face, et ce que les deux laissent. Tout ce qui reste ouvert sur une commande ou un plan reste à part de l'argent déjà enregistré.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Massage Deep Tissue, Massage Relaxant, Massage Sportif",
      perelaiWord: "Prestations sur une Visite",
      why: "Le modèle massage commence avec ces trois, modifiables. Chaque rendez-vous réservé devient une Visite portant client, soin et activité monétaire ensemble.",
    },
    {
      theirWord: "Une Option Pierres Chaudes ajoutée à la séance",
      perelaiWord: "Options",
      why: "L'extra s'attache à la Visite où elle a été faite, pour que l'enregistrement corresponde à la séance réelle plutôt qu'à celle réservée au départ.",
    },
    {
      theirWord: "La facture d'Huiles de Massage payée jeudi dernier",
      perelaiWord: "Coûts liés",
      why: "Enregistrée contre la plage où elle tombe, donc le réapprovisionnement apparaît à côté des heures qu'il a soutenues. Personne ne pèse un flacon : c'est un achat que vous avez saisi, pas une mesure de ce qu'un client a utiliséé.",
    },
    {
      theirWord: "Le client à trois séances d'un bloc de six",
      perelaiWord: "Forfait",
      why: "Les crédits diminuent une heure à la fois. Ce qui reste dû à cette personne est un chiffre stocké, pas une note au dos de sa carte.",
    },
    {
      theirWord: "Quelqu'un qui paie une cure en plusieurs fois",
      perelaiWord: "Commande et plans",
      why: "Le reste appartient à cet arrangement précis. Quand quelque chose est décrit comme en suspens, cela signifie ce montant impayé précis, pas une vague sensation d'argent qui flotte.",
    },
    {
      theirWord: "L'habitué du jeudi matin depuis neuf ans",
      perelaiWord: "Historique de revenu client",
      why: "Ce que cette personne a réellement dépensé chez vous, dans le temps à côté des heures réservées. La fidélité cesse d'être un sentiment et devient un chiffre que vous pouvez regarder.",
    },
    {
      theirWord: "Ce qui reste une fois les achats du mois déduits",
      perelaiWord: "Profit",
      why: "Prend le revenu de la période et soustrait les dépenses que vous y avez enregistrées. Un chiffre de travail pour décider si hausser votre tarif horaire — emphatiquement pas une position fiscale ni le résultat d'un comptable.",
    },
    {
      theirWord: "Juste vous et une table, au moins cette année",
      perelaiWord: "Un espace de travail",
      why: "Travaillez en solo. Ajoutez du monde quand vous en avez besoin — rien ici n'assume une seconde paire de mains, et rien de ce qui précède ne casse s'il n'y en a jamais.",
    },
  ],

  setup: {
    title: "Une soirée, pas un week-end.",
    body: "Trois soins, une option et un type de coût vous attendent à l'arrivée. Tout le reste est du rangement optionnel.",
    steps: [
      {
        title: "Atterrissez sur le modèle massage",
        body: "Venir depuis cette page vous donne déjà Massage Deep Tissue, Massage Relaxant et Massage Sportif. Personne ne fixe un écran vide en se demandant comment appeler un Swedish de soixante minutes.",
      },
      {
        title: "Adaptez-le à votre pratique",
        body: "Durées, tarifs, si l'Option Pierres Chaudes part en extra, et Huiles de Massage à la place de ce que vous réapprovisionnez vraiment. Renommez, supprimez, ajoutez — rien n'est figé.",
      },
      {
        title: "N'apportez que ce dont lundi a besoin",
        body: "Numéros du téléphone via vCard, Google Agenda branché si vous y vivez, et un lien prêt à coller là où l'on vous trouve. Neuf ans d'historique peuvent suivre plus tard, ou jamais.",
      },
    ],
  },

  faq: [
    {
      q: "Mes soins seront-ils déjà en place ?",
      a: "Oui. Le modèle massage commence avec Massage Deep Tissue, Massage Relaxant et Massage Sportif, plus Option Pierres Chaudes et Huiles de Massage comme coût lié. Tout est modifiable, donc un menu à quatre soins ou douze est quelques minutes de travail.",
    },
    {
      q: "Perelai tient-il des notes cliniques ou gère-t-il la facturation assurance ?",
      a: "Non, et il vaut mieux être direct. Perelai conserve des notes client et de visite pour faire tourner la pratique. Ce n'est pas un système de dossier de santé : pas d'intake ni de SOAP, pas de plans de traitement, pas de suivi de diagnostic, pas de sinistres ni de facturation assurance. Si votre pratique en dépend, Perelai n'est pas le bon outil pour cette partie.",
    },
    {
      q: "Si ma semaine était pleine, est-ce mon revenu ?",
      a: "Pas forcément, et confondre les deux est la façon dont une belle semaine vous déçoit plus tard. Une heure livrée, une heure payée et une heure débitée d'un bloc prépayé sont ici trois états distincts. Ils sont comptés à part exprès, pour que le chiffre que vous finissez par regarder signifie une chose précise.",
    },
    {
      q: "Comment savoir où en est quelqu'un dans son bloc de six ?",
      a: "Chaque crédit diminue quand une heure est utilisée, laissant le reste stocké contre ce client plutôt que sur une carte dans un tiroir. Les cures payées en plusieurs fois se comportent de la même façon : la partie impayée reste attachée à son propre arrangement plutôt que d'être fondue dans l'argent déjà encaissé.",
    },
    {
      q: "D'où vient le chiffre de profit ?",
      a: "Le revenu de la plage choisie, moins les dépenses enregistrées dans cette même plage. Utile pour décider si une heure est correctement tarifée. Pas une position fiscale, pas un résultat qu'un comptable signerait, et pas un substitut à en avoir un.",
    },
  ],

  labels: {
    terminologyTitle: "Comment votre vocabulaire se mappe sur le nôtre.",
    inYourChair: "Sur la table",
    inPerelai: "Dans Perelai",
    whyItMatters: "Pourquoi c'est important",
    mocksTitle: "Une pratique comme la vôtre, affichée en direct.",
    mocksBody: "Les chiffres ci-dessous sont illustratifs, construits à partir des trois soins, de l'option et du type de coût de ce modèle.",
    faqTitle: "Demandé avant de s'inscrire.",
  },

  whatItIsNot: {
    title: "Où ça s'arrête.",
    body: "Cela suit l'argent attaché aux heures que vous avez livrées. Trois choses qu'il refuse délibérément de faire :",
    items: [
      {
        title: "Pas un système de dossier de santé",
        body: "Les notes existent pour faire tourner la pratique — qui préfère quelle pression, qui revient dans deux semaines. Pas de formulaires d'intake, de charting SOAP, de plans de traitement, de suivi de diagnostic ni de sinistres assurance.",
      },
      {
        title: "Pas un logiciel de comptabilité",
        body: "Vous obtenez le revenu, les coûts enregistrés et ce qu'ils laissent sur une plage choisie. Tenue de livres, déclaration et conseil financier sont le travail de quelqu'un d'autre, et votre comptable garde le sien.",
      },
      {
        title: "Pas une place de marché",
        body: "Le lien de réservation vous appartient. Perelai ne loue pas la relation client.",
      },
    ],
  },

  cta: {
    title: "Sachez ce que la semaine a vraiment donné.",
    body: "Partez d'une liste de prestations massage et gardez travail terminé, paiements enregistrés, séances prépayées et soldes ouverts comme des enregistrements séparés et lisibles.",
    label: "Créer un espace de travail",
    microcopy: "Vous recevrez un e-mail de confirmation pour finaliser la configuration.",
  },

  research: massageTherapistResearch,
}
