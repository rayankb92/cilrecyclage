import type { ServiceContent } from "../types";

export const recyclageFerrailles: ServiceContent = {
  slug: "recyclage-ferrailles",
  nav: "Recyclage ferrailles",
  meta: {
    title:
      "Recyclage Ferraille Lourde et Légère en Île-de-France | VALMETAUX",
    description:
      "Ferrailleur professionnel en IDF : recyclage de ferraille lourde (poutrelles, fonte) et légère (platin, tôles). Enlèvement camion-grue, virement instantané. 95, 92, 78, 93, 77, 91, 94.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Recyclage de Ferrailles : Volumes Lourds et Légères en IDF",
    pitch:
      "Chantier de démolition, rénovation industrielle, garagiste — nous traitons tous les types d'acier et de fonte. Camion-grue, bennes, intervention rapide dans toute l'Île-de-France.",
    image: "/images/logistique/poutrelle.webp",
    imageAlt: "Poutrelles et ferraille lourde prêtes au recyclage — VALMETAUX",
  },
  targets: {
    particuliers: [
      "Vieux appareils électroménagers (lave-linge, four, radiateurs)",
      "Ferraille de garage : vélos, portails, mobilier métal",
      "Structures légères à évacuer avant travaux",
    ],
    professionnels: [
      "Chantiers BTP : ferraille de béton armé, poutrelles IPN/IPE, coffrages",
      "Démolition : structures métalliques, charpentes, machines HS",
      "Garagistes : carters, boîtes de vitesses, jantes, essieux",
      "Usines : rebuts de production acier, font de machines en fin de vie",
    ],
  },
  steps: [
    {
      title: "Évaluation du volume et du type de ferraille",
      description:
        "Décrivez-nous ou envoyez des photos de votre ferraille. On évalue le volume, le type (ferraille légère platin, lourde, fonte) et on planifie l'intervention adaptée.",
    },
    {
      title: "Enlèvement sur site avec le matériel adapté",
      description:
        "Camion plateau pour les petits volumes, camion-grue pour les structures lourdes. Nous intervenons directement sur votre chantier, entrepôt ou atelier sans contrainte de manutention de votre côté.",
    },
    {
      title: "Pesée et virement instantané",
      description:
        "Pesée à notre dépôt ou sur site selon le volume. Règlement par virement instantané le jour de l'enlèvement pour les professionnels.",
    },
  ],
  keyPoints: [
    {
      title: "Ferraille légère (platin)",
      description:
        "Électroménager, tôles fines, vélos, mobilier, pièces détachées légères. Prise en charge dès les petits volumes.",
    },
    {
      title: "Ferraille lourde",
      description:
        "Poutrelles IPN/IPE, structures de charpente, poutres et colonnes métalliques. Camion-grue disponible pour l'extraction.",
    },
    {
      title: "Fonte et mécanique",
      description:
        "Radiateurs fonte, moteurs hors service, boîtes de vitesses, carters — valorisés séparément pour optimiser votre rachat.",
    },
    {
      title: "Couverture IDF complète",
      description:
        "Nous intervenons dans les 7 départements IDF : 95, 92, 78, 93, 77, 91, 94 — planification sous 24/48h pour les volumes importants.",
    },
  ],
  relatedSlugs: ["enlevement-chantier", "depose-de-bennes", "rachat-de-metaux"],
};
