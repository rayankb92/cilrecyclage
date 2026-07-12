import type { ServiceContent } from "../types";

export const recyclageMetauxNonFerreux: ServiceContent = {
  slug: "recyclage-metaux-non-ferreux",
  nav: "Métaux non ferreux",
  meta: {
    title:
      "Rachat Métaux Non Ferreux : Cuivre, Laiton, Zinc, Plomb | CIL Recyclage",
    description:
      "CIL Recyclage valorise vos métaux non ferreux au cours du jour : cuivre, laiton, aluminium, zinc et plomb. Dépôt à Villaines-sous-Bois, artisans et particuliers bienvenus.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Experts en Métaux Non Ferreux : Cuivre, Laiton, Alu, Zinc",
    pitch:
      "Les métaux non ferreux sont souvent les lots les plus valorisés au kilo. Nous les trions précisément pour proposer un rachat cohérent, au dépôt comme sur chantier.",
    image: "/images/metaux/laiton.webp",
    imageAlt: "Laiton et métaux non ferreux chez CIL Recyclage",
  },
  targets: {
    particuliers: [
      "Tuyauterie cuivre issue d'une rénovation de plomberie",
      "Câbles électriques gainés ou dénudés",
      "Gouttières et descentes zinc ou plomb",
      "Radiateurs aluminium, menuiseries et petits lots triés",
    ],
    professionnels: [
      "Électriciens : câbles cuivre, Millberry, chemins de câbles, alu",
      "Plombiers : tuyaux cuivre, raccords laiton, chauffe-eau, robinetterie",
      "Couvreurs : chutes zinc, plomb, cuivre de couverture",
      "Climaticiens et frigoristes : cuivre technique, condenseurs aluminium",
    ],
  },
  steps: [
    {
      title: "Identification et tri par alliage",
      description:
        "Chaque famille est triée séparément : cuivre, laiton, aluminium, zinc, plomb. Cette étape permet d'éviter les mélanges qui tirent la valorisation vers le bas.",
    },
    {
      title: "Cotation au cours du jour",
      description:
        "Le prix dépend de la nature du lot, de sa propreté et du cours du jour. Pour les volumes importants, une première estimation peut être faite sur photos.",
    },
    {
      title: "Règlement immédiat",
      description:
        "Le règlement se fait par virement instantané après pesée et validation du lot, au dépôt ou après enlèvement selon le cas.",
    },
  ],
  keyPoints: [
    {
      title: "Cuivre",
      description:
        "Millberry, cuivre mêlé, tuyauterie, chutes propres ou techniques : chaque qualité est distinguée séparément.",
    },
    {
      title: "Laiton, zinc, plomb",
      description:
        "Robinetterie, raccords, gouttières, chutes de couverture et plomb technique : ces lots sont fréquents chez les artisans du bâtiment.",
    },
    {
      title: "Aluminium",
      description:
        "Jantes, profilés, cadres, tôles, câbles alu : même les petits lots gagnent à être triés correctement avant passage au dépôt.",
    },
    {
      title: "Tri et conseil",
      description:
        "En cas de doute sur la nature d'un alliage ou d'un lot mixte, CIL Recyclage peut orienter le tri avant le déplacement ou l'enlèvement.",
    },
  ],
  relatedSlugs: [
    "rachat-de-metaux",
    "recyclage-metaux-speciaux",
    "enlevement-chantier",
  ],
};
