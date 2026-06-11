import type { ServiceContent } from "../types";

export const deposeDeBennes: ServiceContent = {
  slug: "depose-de-bennes",
  nav: "Dépose de bennes",
  meta: {
    title:
      "Dépose de Bennes Ferrailles en Île-de-France — Gratuit selon tonnage | VALMETAUX",
    description:
      "VALMETAUX met à disposition des bennes ferrailles sur vos chantiers et sites industriels en IDF. Pose et rotation gratuites selon tonnage. 77, 91, 94 et petite couronne.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Bennes Ferrailles sur Vos Sites en Île-de-France",
    pitch:
      "Flux continus de ferrailles sur vos chantiers ou en usine ? Nous déposons des bennes adaptées à votre cadence de production de déchets métalliques, avec rotation programmée selon votre rythme.",
    image: "/images/logistique/benne-rempli.webp",
    imageAlt: "Benne ferrailles et poutrelles sur site — VALMETAUX",
  },
  targets: {
    professionnels: [
      "Entreprises du BTP avec flux régulier de ferrailles de chantier",
      "Usines et ateliers produisant des rebuts métalliques en continu",
      "Gestionnaires d'entrepôts logistiques avec structures métalliques en rotation",
      "Démolisseurs et recycleurs cherchant un partenaire de longue durée",
    ],
  },
  steps: [
    {
      title: "Définition du besoin",
      description:
        "Volume estimé par semaine ou par mois, type de ferraille dominant, contraintes d'accès au site. On choisit ensemble la taille de benne adaptée (de 7 m³ à 30 m³).",
    },
    {
      title: "Dépose et mise en place",
      description:
        "Livraison de la benne sur votre site en Île-de-France. Positionnement stratégique selon vos flux de production et les contraintes d'accès au camion.",
    },
    {
      title: "Rotations selon votre cadence",
      description:
        "Quand la benne est pleine (ou selon un calendrier défini), nous intervenons pour la remplacer. Pesée à chaque rotation avec bordereau de pesée — rachat selon cours du jour.",
    },
  ],
  keyPoints: [
    {
      title: "Tailles de 7 m³ à 30 m³",
      description:
        "Bennes adaptées à tous les volumes : petite benne pour un atelier, grande benne ouverte pour un chantier de démolition.",
    },
    {
      title: "Gratuité sous condition de tonnage",
      description:
        "La pose et la rotation peuvent être entièrement gratuites en fonction du tonnage et de la qualité des métaux récupérés. Contactez-nous pour une simulation.",
    },
    {
      title: "Bordereaux de pesée à chaque rotation",
      description:
        "Traçabilité complète : un bordereau de pesée est remis à chaque enlèvement pour votre comptabilité matière et vos obligations réglementaires.",
    },
    {
      title: "Couverture grande couronne incluse",
      description:
        "Nous livrons des bennes jusqu'en Seine-et-Marne (77), Essonne (91) et Val-de-Marne (94) — pas seulement la petite couronne.",
    },
  ],
  relatedSlugs: [
    "enlevement-chantier",
    "recyclage-ferrailles",
    "rachat-de-metaux",
  ],
};
