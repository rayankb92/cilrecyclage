import type { ServiceContent } from "../types";

export const recyclageMetauxSpeciaux: ServiceContent = {
  slug: "recyclage-metaux-speciaux",
  nav: "Métaux spéciaux",
  meta: {
    title:
      "Rachat Métaux Spéciaux : Carbure, Titane, Nickel, Catalyseurs | CIL Recyclage",
    description:
      "CIL Recyclage rachète vos métaux spéciaux et alliages à haute valeur : carbure de tungstène, titane, nickel, Inconel, catalyseurs. Analyse précise et valorisation dédiée.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Recyclage de Métaux Spéciaux et Alliages à Haute Valeur",
    pitch:
      "Carbure de tungstène, titane, nickel, Inconel, catalyseurs ou alliages techniques : nous prenons en charge les lots qui demandent plus qu'une simple pesée globale.",
    image: "/images/metaux/carbure.webp",
    imageAlt: "Plaquettes et outils en carbure de tungstène chez CIL Recyclage",
  },
  targets: {
    particuliers: [
      "Outils contenant du carbure : forets, fraises, plaquettes, inserts",
      "Pots catalytiques à faire identifier avant valorisation",
      "Petits lots d'atelier ou de bricolage avec alliages techniques",
    ],
    professionnels: [
      "Ateliers d'usinage : plaquettes de coupe, forets carbure, outils usés",
      "Industries techniques : titane, nickel, Inconel, tantale et alliages spécifiques",
      "Automobile : catalyseurs et éléments à métaux précieux",
      "Électronique et connectique : lots contenant des alliages nobles ou spéciaux",
      "Sous-traitants aéronautiques ou de précision : chutes et rebuts identifiés",
    ],
  },
  steps: [
    {
      title: "Analyse et identification de la composition",
      description:
        "Les métaux spéciaux ne se valorisent pas comme un lot standard. Nous identifions d'abord la famille du matériau afin de préparer une valorisation adaptée.",
    },
    {
      title: "Évaluation selon la nature du lot",
      description:
        "Selon les matériaux, l'évaluation se fait au kilo, au gramme ou par catégorie technique. Les lots sont traités séparément pour rester cohérents.",
    },
    {
      title: "Paiement sécurisé, traçabilité complète",
      description:
        "Après validation, le règlement est effectué par virement instantané. Pour les entreprises, la traçabilité documentaire peut être intégrée selon le besoin.",
    },
  ],
  keyPoints: [
    {
      title: "Carbure de tungstène",
      description:
        "Plaquettes, forets monoblocs, fraises et inserts usés : le carbure fait l'objet d'une valorisation dédiée, distincte des métaux courants.",
    },
    {
      title: "Alliages complexes",
      description:
        "Titane, nickel, Inconel, Monel, tantale : ces nuances demandent une identification sérieuse avant toute cotation.",
    },
    {
      title: "Pots catalytiques",
      description:
        "Les catalyseurs ont une valeur variable selon le type, la référence et l'état du lot. Une vérification est nécessaire avant tout rachat.",
    },
    {
      title: "Traçabilité pro",
      description:
        "Pour les entreprises et ateliers soumis à des exigences de suivi, CIL Recyclage peut intégrer les documents nécessaires au traitement du lot.",
    },
  ],
  relatedSlugs: [
    "recyclage-metaux-non-ferreux",
    "rachat-de-metaux",
    "enlevement-chantier",
  ],
};
