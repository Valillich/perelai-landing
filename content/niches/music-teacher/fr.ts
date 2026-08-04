import { musicTeacherResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai pour professeurs de musique",
    description:
      "Suivez le revenu des cours, les coûts enregistrés et le profit calculé pour toute période — historique élève et utilisations de forfaits lisibles.",
    ogImageAlt:
      "Aperçu financier Perelai pour un professeur de musique, avec revenu des cours, coûts enregistrés et profit calculé pour une période — données d'exemple.",
  },

  hero: {
    eyebrow: "Logiciel financier pour professeurs de musique",
    h1: "Une vision claire des finances de votre enseignement privé.",
    subhead:
      "Suivez le revenu des cours, les coûts enregistrés et le profit calculé pour un jour, une semaine, un mois, un trimestre ou une année. Consultez le résultat par élève et catégorie de cours, tandis que les cours terminés, les paiements enregistrés et les utilisations de forfaits restent séparés.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Les heures d'enseignement masquent les dépenses du studio",
      body: "Un planning rempli de cours de piano, de guitare et de lecture à vue montre l'activité d'enseignement, pas le résultat financier de la période. L'accordage du piano, le changement de cordes et l'impression de partitions existent à côté des heures de cours — et ne figurent pas dans l'agenda du studio.",
    },
    {
      title: "Le paiement anticipé du semestre complique la vue hebdomadaire",
      body: "Encaisser la totalité du semestre à l'inscription masque si les semaines d'enseignement suivantes ont généré de nouveaux mouvements de trésorerie. Enregistrer les utilisations de crédit sans espèces à chaque cours suivi garde l'enseignement instrumental terminé transparent.",
    },
    {
      title: "Cours, paiements et dépenses vivent à des endroits différents",
      body: "Les cours particuliers se réservent dans l'agenda, les honoraires des élèves arrivent par virement, et les reçus de partitions et d'accordage finissent dans des tiroirs. Évaluer les finances du studio, c'est rassembler ces fragments.",
    },
  ],

  dayInLife: {
    title: "Enregistrez chaque cours. Consultez la période quand vous en avez besoin.",
    body: "Terminez les cours, enregistrez les paiements, utilisez les crédits de forfait et ajoutez les dépenses d'enseignement dans l'administration courante. Perelai garde ces enregistrements liés à l'élève, à la catégorie de cours et à la période choisie.",
    steps: [
      {
        title: "La fin de cours et le statut de paiement sont des choses distinctes",
        body: "Marquer un Cours de Piano comme terminé enregistre que l'enseignement a eu lieu. L'encaissement est enregistré séparément comme partie de la visite.",
      },
      {
        title: "Les paiements restent liés au cours et à l'élève",
        body: "Quand un paiement est enregistré, il s'attache à l'élève et au cours concernés — l'historique financier reste lié à l'enseignement fourni.",
      },
      {
        title: "Les crédits du bloc semestriel s'appliquent aux visites planifiées",
        body: "Déduire un crédit d'un bloc de cours semestriel clôture la visite sans mouvement d'argent. L'enseignement réalisé et les enregistrements de paiement restent séparés.",
      },
      {
        title: "Voir le résultat financier du studio",
        body: "Affichez le revenu des cours, les coûts enregistrés et le profit calculé pour un jour, une semaine, un mois, un trimestre ou une année — par élève ou catégorie de cours.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Cours de Piano, Cours de Guitare",
      perelaiWord: "Services sur une Visite",
      why: "Le modèle professeur de musique comprend deux types de cours de départ pour le répertoire, l'oreille et les gammes. Chaque cours planifié devient une Visite portant l'élève, le type de cours et l'enregistrement de paiement ensemble.",
    },
    {
      theirWord: "Partitions & Livres",
      perelaiWord: "Complément sur une Visite",
      why: "Les recueils de partitions ou les scores imprimés s'enregistrent comme compléments attachés à l'enregistrement de visite de l'élève.",
    },
    {
      theirWord: "Entretien des Instruments",
      perelaiWord: "Dépense enregistrée",
      why: "Enregistrez l'accordage, le changement de cordes et autres dépenses d'enseignement comme coûts de période. Ils contribuent au profit calculé de la période sélectionnée.",
    },
    {
      theirWord: "Bloc de cours semestriel",
      perelaiWord: "Forfait prépayé",
      why: "Les forfaits de cours prépayés restent en crédits, utilisés cours par cours sans fausser le revenu de la période.",
    },
  ],

  setup: {
    title: "Partez de la liste de cours d'un studio de musique, pas d'une page blanche.",
    body: "Le modèle professeur de musique s'ouvre avec deux types de cours modifiables, un complément et une catégorie de dépense — votre premier écran ressemble déjà à un studio en activité.",
    steps: [
      {
        title: "Configurez votre catalogue de cours",
        body: "Choisissez durées des cours instrumentaux et tarifs depuis le modèle professeur de musique préchargé.",
      },
      {
        title: "Planifiez les cours et ajoutez les éléments pertinents",
        body: "Planifiez des cours récurrents, terminez les visites et ajoutez Partitions & Livres quand ils font partie de l'enregistrement du cours.",
      },
      {
        title: "Suivez la performance du studio par période",
        body: "Consultez revenu de période, coûts enregistrés et profit calculé pour un jour, une semaine, un mois, un trimestre ou une année.",
      },
    ],
  },

  faq: [
    {
      q: "Comment sont gérés les forfaits de cours semestriels prépayés ?",
      a: "Les forfaits semestriels restent en crédits. Quand un élève assiste, un crédit est utilisé — les cours donnés et le paiement restent séparés.",
    },
    {
      q: "Puis-je enregistrer des dépenses comme l'accordage du piano ou le changement de cordes ?",
      a: "Oui. Vous pouvez enregistrer les dépenses d'enseignement pertinentes. Elles entrent dans les coûts et le profit calculé de la période sélectionnée.",
    },
    {
      q: "Terminer un cours enregistre-t-il aussi un paiement ?",
      a: "Non. La fin de cours et le statut de paiement sont enregistrés séparément. Un cours terminé peut exister avant qu'un paiement soit enregistré.",
    },
    {
      q: "Les options de cours du modèle sont-elles personnalisables ?",
      a: "Oui. Vous pouvez modifier ou étendre les services de départ (Cours de Piano, Cours de Guitare), le complément Partitions & Livres et la catégorie de dépense Entretien des Instruments.",
    },
  ],

  labels: {
    terminologyTitle: "Termes de l'enseignement musical et concepts Perelai.",
    inYourChair: "Dans votre studio",
    inPerelai: "Dans Perelai",
    whyItMatters: "Pourquoi c'est important",
    mocksTitle: "Données du studio de musique, affichées dans le produit.",
    mocksBody: "Les données d'exemple utilisent les services, le complément et la dépense du modèle professeur de musique.",
    faqTitle: "Questions fréquentes.",
  },

  whatItIsNot: {
    title: "Clair sur ce que ce n'est pas.",
    body: "Perelai enregistre les cours terminés, les dépenses d'enseignement et le profit calculé pour une période choisie. Ce n'est pas votre back office complet de studio.",
    items: [
      {
        title: "Pas un logiciel de comptabilité",
        body: "Il affiche le revenu de période, les dépenses enregistrées et le profit calculé. Comptabilité, déclarations fiscales et conseil financier relèvent de votre comptable.",
      },
      {
        title: "Pas un logiciel de partitions ni de notation",
        body: "Vous pouvez suivre services, compléments et utilisations de forfaits. La notation musicale, la composition et l'enregistrement audio n'en font pas partie.",
      },
      {
        title: "Pas une marketplace",
        body: "Votre lien de réservation vous appartient. Perelai ne s'interpose pas entre vous et vos élèves.",
      },
    ],
  },

  cta: {
    title: "Sachez ce qu'a donné la période.",
    body: "Commencez avec une liste de cours du studio pour gérer l'enseignement terminé, les paiements enregistrés, les utilisations de forfaits et les soldes de commandes ouverts comme enregistrements lisibles.",
    label: "Créer un espace de travail",
    microcopy: "Vous recevrez un e-mail de confirmation pour finaliser la configuration.",
  },

  research: musicTeacherResearch,
}
