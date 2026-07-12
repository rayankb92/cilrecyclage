import type { MetalItem, ServiceItem } from "./types";

export const SITE = {
  name: "CIL Recyclage",
  tagline: "Ferrailleur et rachat de metaux en Val-d'Oise et Ile-de-France",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cilrecyclage.fr",
  locale: "fr_FR",
  phone: "01 34 71 94 63",
  logoPath: "/cilrecyclage-logo-nobg.png",
  googleAds: {
    id: "GT-NFP5MXFC",
    adsId: "AW-18269725493",
    ga4Id: "G-F8GGC9P4CS",
    phoneConversionLabel: "FFwQCNPGocgcELXG14dE",
  },
  email: null,
  address: {
    streetAddress: "Rte de Viarmes CD 909",
    addressLocality: "Villaines-sous-Bois",
    postalCode: "95570",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: null as { latitude: number; longitude: number } | null,
  openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-12:00",
} as const;

export const CORE_SERVICES: ServiceItem[] = [
  {
    name: "Rachat de métaux",
    slug: "rachat-metaux",
    description:
      "Valorisation de vos métaux ferreux et non ferreux au cours du jour : cuivre, laiton, aluminium, inox, plomb, zinc et métaux spéciaux.",
  },
  {
    name: "Dépose de bennes",
    slug: "logistique-chantier/depose-de-bennes",
    description:
      "Mise à disposition de bennes pour la collecte de ferrailles et métaux valorisables sur chantiers et sites industriels.",
  },
  {
    name: "Enlèvement camion-grue",
    slug: "logistique-chantier/enlevement-camion-grue",
    description:
      "Manutention et enlèvement de charges lourdes : poutrelles, machines industrielles et structures métalliques.",
  },
  {
    name: "Évacuation de ferrailles",
    slug: "evacuation-ferrailles-metalliques",
    description:
      "Enlèvement et évacuation de ferrailles et objets métalliques encombrants sur site.",
  },
];

export const PRIORITY_METALS: MetalItem[] = [
  {
    name: "Cuivre",
    slug: "rachat-cuivre",
    description:
      "Millberry, cuivre neuf, chutes de plomberie et câbles électriques.",
  },
  {
    name: "Laiton",
    slug: "laiton-plomberie",
    description: "Laiton de plomberie, robinetterie et chutes industrielles.",
  },
  {
    name: "Aluminium",
    slug: "aluminium",
    description: "Jantes, carters, profilés AGS et câbles aluminium.",
  },
  {
    name: "Zinc & Plomb",
    slug: "zinc-plomb",
    description: "Zinc de toiture, vieux plomb et batteries au plomb.",
  },
  {
    name: "Ferraille lourde",
    slug: "ferraille-lourde-chantier",
    description: "Poutrelles IPN, IPE, HEA, HEB et acier de déconstruction.",
  },
  {
    name: "Platin",
    slug: "ferraille-platin",
    description: "Ferraille légère, tôles, clôtures et carcasses métalliques.",
  },
  {
    name: "Carbure de tungstène",
    slug: "speciaux-carbure-tungstene",
    description: "Plaquettes, forets et tournures pour ateliers d'usinage.",
  },
  {
    name: "Inox & Moteurs",
    slug: "inox-moteurs-electriques",
    description: "Inox 304/316, moteurs électriques et fonte de chauffage.",
  },
];
