import type { ServiceContent } from "../types";

export const enlèvementChantier: ServiceContent = {
  slug: "enlevement-chantier",
  nav: "Enlèvement sur chantier",
  meta: {
    title:
      "Enlèvement Ferrailles et Métaux sur Chantier en IDF | CIL Recyclage",
    description:
      "CIL Recyclage intervient sur vos chantiers et sites professionnels pour l'enlèvement de ferrailles et métaux en Val-d'Oise et en Île-de-France. Intervention planifiée, pesée et virement instantané.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Enlèvement de Ferrailles et Métaux sur Chantier",
    pitch:
      "Poutrelles, machines, racks, structures métalliques ou lots de chantier : nous organisons l'enlèvement directement sur site avec un matériel adapté à l'accès et au volume.",
    image: "/images/logistique/chargement-grue-camion.webp",
    imageAlt: "Grue chargeant des métaux sur camion pour CIL Recyclage",
  },
  targets: {
    professionnels: [
      "Chantiers BTP et démolition avec évacuation de ferrailles structurelles",
      "Usines et ateliers avec machines, racks ou équipements à reprendre",
      "Entrepôts et bâtiments techniques avec structures métalliques à déposer",
      "Gestionnaires de sites cherchant une intervention propre et valorisante",
      "Syndics, industriels et entreprises de rénovation lourde",
    ],
  },
  steps: [
    {
      title: "Estimation sur photos ou visite",
      description:
        "Un premier échange permet d'évaluer l'accès, le volume et la nature des métaux. Pour les dossiers complexes, une visite ou un relevé photo prépare l'intervention.",
    },
    {
      title: "Intervention avec le matériel adapté",
      description:
        "Selon le chantier, nous mobilisons le bon moyen d'enlèvement pour charger, sécuriser et évacuer les métaux dans de bonnes conditions.",
    },
    {
      title: "Enlèvement complet, site propre",
      description:
        "Les métaux identifiés sont chargés, évacués puis valorisés. Le règlement par virement intervient ensuite selon la pesée effective du lot.",
    },
  ],
  keyPoints: [
    {
      title: "Intervention préparée",
      description:
        "Chaque enlèvement est cadré selon le volume, l'accès et la sécurité du site pour éviter les opérations improvisées.",
    },
    {
      title: "Charges encombrantes",
      description:
        "Poutrelles, machines, structures acier, cuves ou racks : les lots lourds et volumineux font partie des cas traités.",
    },
    {
      title: "Val-d'Oise et IDF",
      description:
        "Le dépôt de Villaines-sous-Bois sert de base à des interventions locales et régionales selon le type de chantier et le tonnage.",
    },
    {
      title: "Rachat inclus",
      description:
        "Il ne s'agit pas d'un simple débarras : les métaux récupérés sont valorisés et rachetés selon leur nature et leur poids.",
    },
  ],
  relatedSlugs: ["depose-de-bennes", "recyclage-ferrailles", "rachat-de-metaux"],
};
