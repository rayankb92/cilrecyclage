import type { ServiceContent } from "../types";

export const rachatDeMetaux: ServiceContent = {
  slug: "rachat-de-metaux",
  nav: "Rachat de métaux",
  meta: {
    title:
      "Rachat de Métaux au Meilleur Cours — Cuivre, Laiton, Alu | CIL Recyclage",
    description:
      "CIL Recyclage rachète vos métaux au cours du jour : cuivre, laiton, aluminium, zinc, plomb, inox. Pesée certifiée, virement instantané. Dépôt à Villaines-sous-Bois et enlèvement en Île-de-France.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Rachat de Métaux au Meilleur Cours du Jour",
    pitch:
      "Particulier, artisan ou professionnel : apportez vos métaux au dépôt de Villaines-sous-Bois ou demandez un enlèvement pour les volumes importants. Prix clairs, pesée certifiée et règlement par virement instantané.",
    image: "/images/metaux/cuivre-neuf-millbery.webp",
    imageAlt: "Cuivre neuf Millberry prêt au rachat chez CIL Recyclage",
  },
  targets: {
    particuliers: [
      "Câbles électriques, tuyauterie cuivre, robinetterie laiton",
      "Radiateurs fonte ou aluminium issus de rénovation",
      "Pièces métalliques, chutes et petits lots à valoriser",
      "Apport direct au dépôt sans minimum bloquant",
    ],
    professionnels: [
      "Chutes de chantier cuivre et laiton pour plombiers et électriciens",
      "Rebuts d'atelier en aluminium, inox ou métaux mélangés",
      "Stocks obsolètes, fins de série et lots industriels",
      "Enlèvement sur site pour les tonnages importants",
    ],
  },
  steps: [
    {
      title: "Contactez-nous ou venez directement",
      description:
        "Pour les petites quantités, présentez-vous directement au dépôt de Villaines-sous-Bois avec vos métaux. Pour les gros volumes, nous préparons un enlèvement sur site après échange téléphonique ou sur photos.",
    },
    {
      title: "Pesée certifiée sur balance homologuée",
      description:
        "Vos métaux sont triés par nature et pesés sur une balance homologuée. Chaque catégorie est identifiée séparément pour vous proposer une valorisation claire et cohérente.",
    },
    {
      title: "Virement instantané dès la pesée",
      description:
        "Le règlement s'effectue par virement bancaire instantané, conformément à la réglementation en vigueur. Le paiement est tracé, rapide et sécurisé.",
    },
  ],
  keyPoints: [
    {
      title: "Prix indexés LME",
      description:
        "Les cours suivent les marchés de référence et la qualité réelle du lot. L'objectif est de proposer un prix lisible, sans discours flou ni valorisation globale approximative.",
    },
    {
      title: "Pesée transparente",
      description:
        "La pesée est réalisée au dépôt sur matériel certifié, avec séparation par famille de métaux pour éviter les décotes inutiles.",
    },
    {
      title: "Virement instantané",
      description:
        "Le règlement se fait par virement instantané dès validation du lot, dans le respect de la législation applicable au rachat de métaux.",
    },
    {
      title: "Dépôt et enlèvement",
      description:
        "CIL Recyclage travaille à la fois au comptoir pour les apports directs et sur site pour les demandes professionnelles ou les volumes plus importants.",
    },
  ],
  relatedSlugs: [
    "recyclage-metaux-non-ferreux",
    "enlevement-chantier",
    "depose-de-bennes",
  ],
};
