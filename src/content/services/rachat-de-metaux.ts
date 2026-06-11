import type { ServiceContent } from "../types";

export const rachatDeMetaux: ServiceContent = {
  slug: "rachat-de-metaux",
  nav: "Rachat de métaux",
  meta: {
    title:
      "Rachat de Métaux au Meilleur Cours — Cuivre, Laiton, Alu | VALMETAUX Argenteuil",
    description:
      "VALMETAUX rachète vos métaux au cours du jour : cuivre, laiton, aluminium, zinc, plomb, inox. Pesée certifiée, virement instantané. Apport au dépôt ou enlèvement IDF.",
  },
  hero: {
    eyebrow: "Prestation",
    headline: "Rachat de Métaux au Meilleur Cours du Jour",
    pitch:
      "Artisan, particulier ou entreprise — apportez vos métaux au dépôt d'Argenteuil ou faites appel à notre service d'enlèvement. Prix indexés sur les cours officiels, pesée certifiée, virement instantané dès la pesée.",
    image: "/images/metaux/cuivre-neuf-millbery.webp",
    imageAlt: "Cuivre neuf Millberry prêt au rachat — VALMETAUX",
  },
  targets: {
    particuliers: [
      "Vieux câbles électriques ou tuyauterie cuivre dans votre cave ou garage",
      "Robinetterie laiton, radiateurs fonte ou alu à évacuer",
      "Pièces et ferrailles diverses en fin de vie",
      "Pas de minimum de quantité pour l'apport au dépôt",
    ],
    professionnels: [
      "Chutes de chantier cuivre et laiton (plombiers, électriciens)",
      "Rebuts de production en aluminium ou inox (ateliers, usines)",
      "Stocks obsolètes ou fin de série à valoriser",
      "Enlèvement sur site pour les volumes importants",
    ],
  },
  steps: [
    {
      title: "Contactez-nous ou venez directement",
      description:
        "Pour les petites quantités, présentez-vous directement à notre dépôt d'Argenteuil avec vos métaux. Pour les gros volumes, appelez-nous pour planifier un enlèvement sur votre site en IDF.",
    },
    {
      title: "Pesée certifiée sur balance homologuée",
      description:
        "Vos métaux sont triés par nature et pesés sur nos balances homologuées. Chaque type de métal est identifié et valorisé séparément pour vous assurer le meilleur prix total.",
    },
    {
      title: "Virement instantané dès la pesée",
      description:
        "Le règlement s'effectue par virement bancaire instantané, conformément à la législation en vigueur. Vous recevez les fonds directement sur votre compte, tracé et sécurisé.",
    },
  ],
  keyPoints: [
    {
      title: "Prix indexés LME",
      description:
        "Nos cours sont alignés sur le London Metal Exchange, référence mondiale. Pas de marge cachée : vous êtes payé au juste prix du marché.",
    },
    {
      title: "Pesée 100 % transparente",
      description:
        "Balances homologuées et contrôlées. Vous assistez à la pesée et recevez un bordereau détaillé par type de métal.",
    },
    {
      title: "Virement instantané",
      description:
        "Règlement par virement bancaire instantané le jour même, conforme à la loi de 2016 encadrant les transactions sur métaux recyclés.",
    },
    {
      title: "Identification gratuite",
      description:
        "Vous ne savez pas ce que vous avez ? Envoyez-nous une photo par téléphone pour une première estimation avant de vous déplacer.",
    },
  ],
  relatedSlugs: [
    "recyclage-metaux-non-ferreux",
    "enlevement-chantier",
    "depose-de-bennes",
  ],
};
