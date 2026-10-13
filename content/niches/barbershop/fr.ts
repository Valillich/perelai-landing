import type { NichePageContent } from "@/content/niches/types"

// Illustrative workflow; no customer-research or testimonial claim.
export const content: NichePageContent = {
  "meta": {
    "title": "Perelai pour les barbiers",
    "description": "Planifiez coupes et soins de barbe, conservez l’historique des clients et enregistrez les paiements dans un même espace.",
    "ogImageAlt": "Perelai pour les barbiers"
  },
  "hero": {
    "eyebrow": "Rendez-vous pour les barbiers",
    "h1": "La coupe, le client et le paiement au même endroit.",
    "subhead": "Planifiez coupes et soins de barbe, conservez l’historique des clients et enregistrez les paiements dans un même espace.",
    "mock": "appointment-workspace"
  },
  "pains": [
    {
      "title": "Une taille de barbe complète le rendez-vous",
      "body": "Un client entre pour rafraîchir sa coupe et demande finalement une moustache dessinée, un menton raccourci et des joues dégagées. Le passage de la tondeuse au rasoir modifie le travail réalisé. Ajoutez la taille de barbe au dégradé avec son propre tarif. Des indications comme barbe courte, contours arrondis ou pattes affinées peuvent figurer dans ses notes. Le rendez-vous conserve alors les détails choisis au fauteuil, sans dépendre d’un message oublié."
    },
    {
      "title": "Le prochain passage a besoin de contexte",
      "body": "Un habitué revient pour un dégradé bas, avec les tempes dégagées mais du volume sur le dessus. Avant de prendre la tondeuse, relisez ses préférences: raie, longueur conservée, contours derrière les oreilles. Certains veulent un fondu discret aux ciseaux; d’autres demandent une transition plus nette. Ces indications restent dans sa fiche pour préparer le passage suivant. Les cheveux bouclés, une implantation marquée ou un épi demandent parfois un résultat différent de la photo évoquée. Vous pouvez préciser ce qui a été retenu: dessus texturé, dégradé progressif, frange raccourcie, finition aux ciseaux. Ces mots décrivent une préférence de coiffure, pas une consigne générée par l’application."
    },
    {
      "title": "Un fauteuil occupé ne prouve pas que le paiement est reçu",
      "body": "Terminer le rasage à la serviette chaude enregistre le travail. Saisir son règlement indique comment il a été couvert. Un forfait prépayé valable peut couvrir le rasage sans nouvel encaissement."
    }
  ],
  "dayInLife": {
    "title": "De la réservation à la prochaine coupe",
    "body": "Suivez une coupe précise tout au long de votre journée.",
    "steps": [
      {
        "title": "Réserver du temps pour un dégradé",
        "body": "Choisissez un dégradé classique ou un rasage à la serviette chaude et affectez le barbier. Adaptez la durée aux coupes proposées."
      },
      {
        "title": "Ajouter le travail sur la barbe",
        "body": "Ajoutez la taille de barbe réalisée avec son tarif. Le supplément reste rattaché au rendez-vous."
      },
      {
        "title": "Enregistrer le paiement ou utiliser un forfait",
        "body": "Saisissez un paiement en espèces ou par carte, ou utilisez un forfait prépayé valable. Son utilisation n’ajoute ni paiement ni chiffre d’affaires."
      },
      {
        "title": "Préparer le prochain passage",
        "body": "Lors du prochain dégradé, la coupe et le règlement précédents restent dans l’historique. Consultez les notes avant de reprendre ou de modifier le style."
      }
    ]
  },
  "terminology": [
    {
      "theirWord": "Dégradé classique ou rasage à la serviette chaude",
      "perelaiWord": "Services",
      "why": "Les entrées initiales du catalogue sont modifiables. Chaque rendez-vous enregistre une réalisation précise."
    },
    {
      "theirWord": "Taille de barbe au fauteuil",
      "perelaiWord": "Suppléments",
      "why": "La taille après la coupe complète le même rendez-vous. Son prix reste à côté du dégradé plutôt que de devenir un règlement sans contexte."
    },
    {
      "theirWord": "La personne dans votre fauteuil",
      "perelaiWord": "Client",
      "why": "Coordonnées, coupes précédentes et notes préparent le prochain passage. Perelai ne choisit ni le style ni la technique."
    },
    {
      "theirWord": "Un barbier qui travaille seul",
      "perelaiWord": "Professionnel",
      "why": "Le propriétaire peut assurer lui-même les prestations. Le modèle n’impose pas de compte d’équipe distinct."
    }
  ],
  "setup": {
    "title": "Commencer avec votre propre fauteuil",
    "body": "Le menu initial comprend deux prestations, deux suppléments facultatifs et une catégorie de dépenses pour les lames et le désinfectant. Adaptez les intitulés au salon; le matériel reste une dépense.",
    "steps": [
      {
        "title": "Choisir le modèle barbier",
        "body": "Cette page recommande le modèle barbier lors de la configuration."
      },
      {
        "title": "Adapter votre menu",
        "body": "Construisez la carte autour du fauteuil: dégradé, coupe courte, rasage traditionnel et entretien de barbe. Précisez vos appellations pour que le client comprenne la prestation choisie. Taille de barbe et masque facial restent des suppléments facultatifs. Vous pouvez supprimer une option absente de votre pratique et ajuster les durées selon votre geste professionnel."
      },
      {
        "title": "Ajouter le barbier qui réalise les prestations",
        "body": "Si vous travaillez seul, utilisez votre propre profil professionnel. L’accès de l’équipe est une fonction distincte de STUDIO."
      },
      {
        "title": "Saisir les prochains rendez-vous",
        "body": "Ajoutez vos clients, importez éventuellement les contacts vCard et partagez votre lien de réservation lorsqu’il est prêt."
      }
    ]
  },
  "faq": [
    {
      "q": "Puis-je l’utiliser comme barbier indépendant?",
      "a": "Oui. Le propriétaire peut réaliser les prestations. SOLO comprend un professionnel actif; l’accès supplémentaire de l’équipe relève de STUDIO."
    },
    {
      "q": "Le modèle inclut-il les prestations de barbe?",
      "a": "Il comprend la taille de barbe comme supplément modifiable, ainsi que le dégradé classique et le rasage à la serviette chaude comme prestations initiales."
    },
    {
      "q": "Puis-je modifier les prix et les durées?",
      "a": "Oui. Fixez vos tarifs et durées pour les coupes, rasages et suppléments. Les notes peuvent préciser la hauteur du dégradé, les transitions, la nuque ou les pattes. Perelai n’impose ni technique ni tarif."
    },
    {
      "q": "Une coupe terminée signifie-t-elle que le client a payé?",
      "a": "Non. Réalisation et paiement sont distincts. Un forfait prépayé valable peut aussi couvrir la prestation sans nouvel encaissement au rendez-vous."
    },
    {
      "q": "Perelai calcule-t-il les commissions des barbiers?",
      "a": "Non. Les coupes et rasages enregistrés aident à examiner l’activité du salon, mais le partage des recettes reste votre responsabilité. Salaires, commissions et paie ne sont pas calculés."
    }
  ],
  "labels": {
    "terminologyTitle": "Votre activité et son suivi dans Perelai",
    "inYourChair": "Dans votre activité",
    "inPerelai": "Dans Perelai",
    "whyItMatters": "Ce que cela signifie",
    "mocksTitle": "Exemple d’espace de travail",
    "mocksBody": "Données fictives de ce modèle.",
    "faqTitle": "Questions avant de commencer"
  },
  "whatItIsNot": {
    "title": "Le suivi quotidien de vos prestations",
    "body": "Utilisez Perelai pour les rendez-vous, les clients et les paiements enregistrés.",
    "items": [
      {
        "title": "Suivi de l’activité",
        "body": "Le chiffre d’affaires, les dépenses et le bénéfice calculé dépendent des données saisies. Ce ne sont pas des déclarations fiscales."
      },
      {
        "title": "Paiements des clients",
        "body": "Enregistrez comment le client a payé. Le traitement des paiements par carte n’est pas inclus."
      }
    ]
  },
  "cta": {
    "title": "Commencer avec la prochaine coupe",
    "body": "Configurez votre espace de barbier et suivez un client de la réservation au paiement enregistré.",
    "label": "Créer votre espace de travail",
    "microcopy": "Confirmez votre adresse e-mail pour poursuivre la configuration."
  },
  "research": {
    "sources": [],
    "verbatims": []
  }
}
