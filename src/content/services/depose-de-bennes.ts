import type { ServiceContent } from "../types";

export const deposeDeBennes: ServiceContent = {
  slug: "depose-de-bennes",
  nav: "Dépose de bennes",
  meta: {
    title:
      "Dépose de Bennes Ferrailles en Île-de-France | CIL Recyclage",
    description:
      "CIL Recyclage met à disposition des bennes ferrailles sur vos chantiers, sites industriels et ateliers. Dépose, rotation, pesée et valorisation selon le tonnage et la qualité du lot.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Bennes Ferrailles sur Vos Sites en Île-de-France",
    pitch:
      "Pour les flux réguliers de métaux et ferrailles, nous mettons en place des bennes adaptées à votre site, à votre cadence et à la nature des matières à évacuer.",
    image: "/images/logistique/benne-rempli.webp",
    imageAlt: "Benne ferrailles et poutrelles sur site pour CIL Recyclage",
  },
  targets: {
    professionnels: [
      "Entreprises du BTP avec flux régulier de ferrailles de chantier",
      "Usines et ateliers produisant des rebuts métalliques en continu",
      "Gestionnaires de sites logistiques ou techniques",
      "Démolisseurs et entreprises cherchant un partenaire de rotation durable",
    ],
  },
  steps: [
    {
      title: "Définition du besoin",
      description:
        "Nous cadrons ensemble le volume, la fréquence de rotation, la place disponible et le type de métaux attendu afin de choisir la benne la plus adaptée.",
    },
    {
      title: "Dépose et mise en place",
      description:
        "La benne est déposée sur site avec un positionnement cohérent pour votre exploitation et pour l'accès au camion lors des rotations.",
    },
    {
      title: "Rotations selon votre cadence",
      description:
        "Une fois la benne pleine, ou selon un calendrier défini, nous organisons son enlèvement puis sa rotation. Chaque passage donne lieu à une pesée et à une valorisation du lot.",
    },
  ],
  keyPoints: [
    {
      title: "Tailles de 7 m³ à 30 m³",
      description:
        "Le format de benne est ajusté au volume produit, au site et au rythme de remplissage pour éviter les surcoûts inutiles.",
    },
    {
      title: "Rotation planifiée",
      description:
        "Les rotations peuvent être planifiées à la demande ou selon une fréquence régulière pour sécuriser les flux métalliques du site.",
    },
    {
      title: "Pesée et traçabilité",
      description:
        "Chaque enlèvement donne lieu à une pesée du lot et à une traçabilité minimale utile pour votre suivi matière.",
    },
    {
      title: "Valorisation du contenu",
      description:
        "La logique n'est pas seulement logistique : les métaux récupérés sont valorisés selon leur nature, leur qualité et leur tonnage.",
    },
  ],
  relatedSlugs: [
    "enlevement-chantier",
    "recyclage-ferrailles",
    "rachat-de-metaux",
  ],
};
