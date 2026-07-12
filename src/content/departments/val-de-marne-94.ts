import type { DepartmentContent } from "../types";

// Val-de-Marne — département dense, proche de Paris, forte concentration
// artisanale et zones d'entrepôts (Vitry, Ivry, Créteil).
// Mixte B2C (chantiers urbains) + B2B (ZI, entrepôts).
export const valDeMarne94: DepartmentContent = {
  slug: "ferrailleur-val-de-marne-94",
  nom: "Val-de-Marne",
  code: "94",
  meta: {
    title:
      "Ferrailleur Val-de-Marne (94) — Rachat Métaux & Bennes Chantier | CIL Recyclage",
    description:
      "CIL Recyclage intervient dans le Val-de-Marne (94) pour le rachat de cuivre, ferraille de chantier et dépose de bennes. Enlèvement sur site, virement instantané.",
  },
  hero: {
    headline: "Rachat de métaux et ferrailleur dans le Val-de-Marne (94)",
    subheadline:
      "Zones artisanales et chantiers urbains denses du 94 : CIL Recyclage valorise vos métaux et évacue vos ferrailles sur site.",
  },
  paragraphs: {
    intro:
      "Artisan, chef de chantier ou gestionnaire de site dans le Val-de-Marne ? **CIL Recyclage** intervient dans tout le 94 pour le rachat de métaux, la dépose de bennes et l'évacuation de ferrailles sur site. Règlement par virement instantané dès la pesée.",
    profilZone:
      "Le Val-de-Marne est un département densément urbanisé avec de grandes zones industrielles et artisanales à Vitry-sur-Seine, Ivry-sur-Seine et Créteil. Les chantiers de rénovation du tissu urbain ancien génèrent un flux constant de cuivre de plomberie, de ferraille légère et de structures métalliques. Les zones d'entrepôts et ateliers produisent des volumes réguliers de métaux valorisables.",
    metauxDominants:
      "Nous rachetons l'ensemble de vos métaux ferreux et non ferreux dans le Val-de-Marne. Le tissu urbain dense génère du **cuivre** de dépose (plomberie, câbles), du **laiton** de robinetterie, des **radiateurs** fonte et aluminium, de la **ferraille légère** (platin) et des **moteurs électriques**. Les zones industrielles de Vitry et d'Ivry produisent également de l'acier lourd et des alliages.",
    logistique:
      "Nous assurons la [dépose de bennes](/logistique-chantier/depose-de-bennes/) et l'[enlèvement camion-grue](/logistique-chantier/enlevement-camion-grue/) dans tout le 94. La densité urbaine du département est maîtrisée par notre logistique adaptée aux interventions en milieu contraint.",
    interDept:
      "Nos interventions couvrent également la [Seine-Saint-Denis (93)](/ferrailleur-seine-saint-denis-93/) et la [Seine-et-Marne (77)](/ferrailleur-seine-et-marne-77/) pour vos chantiers multi-sites. Retrouvez notre [dépôt de Villaines-sous-Bois](/).",
  },
  internalLinks: {
    home: { label: "Dépôt de Villaines-sous-Bois", slug: "" },
    cities: [],
    neighborDept: {
      label: "Seine-Saint-Denis (93)",
      slug: "ferrailleur-seine-saint-denis-93",
    },
  },
};
