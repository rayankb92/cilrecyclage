import type { ServiceContent } from "../types";

export const enlèvementChantier: ServiceContent = {
  slug: "enlevement-chantier",
  nav: "Enlèvement sur chantier",
  meta: {
    title:
      "Enlèvement Ferrailles et Métaux sur Chantier en IDF — Camion-Grue | VALMETAUX",
    description:
      "VALMETAUX intervient sur vos chantiers et sites industriels en Île-de-France pour l'enlèvement de ferrailles et métaux. Camion-grue, intervention 24/48h, virement instantané.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Enlèvement de Ferrailles sur Chantier dans Toute l'IDF",
    pitch:
      "Poutrelles, machines industrielles, structures métalliques — notre camion-grue intervient directement sur vos chantiers et sites en Île-de-France. Pas de manutention de votre côté, intervention planifiée sous 24 à 48h.",
    image: "/images/logistique/chargement-grue-camion.webp",
    imageAlt: "Grue chargeant des métaux sur camion au dépôt VALMETAUX",
  },
  targets: {
    professionnels: [
      "Chantiers BTP et démolition : évacuation de ferrailles de structure",
      "Usines et ateliers : reprise de machines hors service et équipements en fin de vie",
      "Entrepôts : évacuation de racks, structures de stockage et palettiers",
      "Gestionnaires de sites : nettoyage et mise en conformité environnementale",
      "Syndics et property managers : remise en état de locaux industriels",
    ],
  },
  steps: [
    {
      title: "Estimation sur photos ou visite",
      description:
        "Envoyez-nous des photos de ce qui doit être enlevé ou demandez une visite préalable pour les volumes complexes. On vous répond rapidement avec une date d'intervention et une estimation du rachat.",
    },
    {
      title: "Intervention avec le matériel adapté",
      description:
        "Camion plateau pour les petits volumes accessibles, camion-grue pour les charges lourdes et encombrantes (poutrelles, machines, cuves). Nous intervenons en milieu contraint : sous-sol, cour étroite, accès limité.",
    },
    {
      title: "Enlèvement complet, site propre",
      description:
        "Nous chargeons et évacuons l'intégralité des ferrailles et métaux identifiés. Le site est laissé propre. Règlement par virement instantané le jour de l'intervention ou à la pesée au dépôt.",
    },
  ],
  keyPoints: [
    {
      title: "Réactivité 24/48h",
      description:
        "Pour les volumes importants et les urgences de chantier, nous planifions l'intervention sous 24 à 48h selon nos disponibilités.",
    },
    {
      title: "Camion-grue disponible",
      description:
        "Structures lourdes, machines industrielles, charges en hauteur — notre grue prend en charge ce que la manutention manuelle ne peut pas.",
    },
    {
      title: "Couverture 7 départements IDF",
      description:
        "Val-d'Oise, Hauts-de-Seine, Yvelines, Seine-Saint-Denis, Val-de-Marne, Essonne et Seine-et-Marne — toute la région parisienne.",
    },
    {
      title: "Rachat inclus",
      description:
        "L'enlèvement n'est pas une simple prestation de débarras — les métaux récupérés sont rachetés. Selon le volume et la qualité, l'opération peut être neutre ou génératrice de revenus.",
    },
  ],
  relatedSlugs: ["depose-de-bennes", "recyclage-ferrailles", "rachat-de-metaux"],
};
