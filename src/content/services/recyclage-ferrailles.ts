import type { ServiceContent } from "../types";

export const recyclageFerrailles: ServiceContent = {
  slug: "recyclage-ferrailles",
  nav: "Recyclage ferrailles",
  meta: {
    title:
      "Recyclage Ferraille Lourde et Légère en Île-de-France | CIL Recyclage",
    description:
      "CIL Recyclage prend en charge la ferraille lourde et légère en Val-d'Oise et en Île-de-France : poutrelles, fonte, platin, tôles, structures métalliques. Enlèvement, dépôt et virement instantané.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Recyclage de Ferrailles : Volumes Lourds et Légers",
    pitch:
      "Chantier, atelier, rénovation, démolition ou débarras métallique : nous valorisons tous les types de ferrailles avec une logistique adaptée au volume et au mode d'accès.",
    image: "/images/logistique/poutrelle.webp",
    imageAlt: "Poutrelles et ferraille lourde prêtes au recyclage chez CIL Recyclage",
  },
  targets: {
    particuliers: [
      "Ferraille de garage, portails, grillages, mobilier métallique",
      "Radiateurs, petits équipements et structures à déposer avant travaux",
      "Lots métalliques issus de rénovation ou de débarras",
    ],
    professionnels: [
      "Chantiers BTP : ferraille de démolition, poutrelles, éléments acier",
      "Ateliers et usines : chutes métalliques, machines hors service, fonte",
      "Garagistes : essieux, carters, boîtes, jantes et pièces mécaniques",
      "Sites industriels : structures métalliques et volumes à évacuer proprement",
    ],
  },
  steps: [
    {
      title: "Évaluation du volume et du type de ferraille",
      description:
        "Après un échange téléphonique ou sur photos, nous identifions le type de ferraille, le volume estimé et la meilleure solution : apport, enlèvement ou benne.",
    },
    {
      title: "Enlèvement sur site avec le matériel adapté",
      description:
        "Selon le lot, nous organisons un chargement au dépôt, une intervention sur chantier ou un enlèvement avec le matériel adapté aux structures lourdes.",
    },
    {
      title: "Pesée et virement instantané",
      description:
        "Les métaux récupérés sont pesés et valorisés selon leur nature. Le règlement est ensuite effectué par virement instantané.",
    },
  ],
  keyPoints: [
    {
      title: "Ferraille légère (platin)",
      description:
        "Tôles, portails, cadres, pièces métalliques, équipements légers : ces lots peuvent être regroupés, triés et valorisés proprement.",
    },
    {
      title: "Ferraille lourde",
      description:
        "Poutrelles, charpentes, structures acier, fonte et pièces massives : prise en charge avec une logistique pensée pour les charges encombrantes.",
    },
    {
      title: "Fonte et mécanique",
      description:
        "Radiateurs fonte, ensembles mécaniques, moteurs et pièces métalliques sont séparés pour une valorisation plus cohérente.",
    },
    {
      title: "Dépôt et intervention",
      description:
        "CIL Recyclage travaille depuis Villaines-sous-Bois avec une couverture Val-d'Oise et Île-de-France pour les demandes en volume ou les chantiers.",
    },
  ],
  relatedSlugs: ["enlevement-chantier", "depose-de-bennes", "rachat-de-metaux"],
};
