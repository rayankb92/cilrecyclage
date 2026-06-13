import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

const url = `${SITE.url}/infos-pratiques`;

export const metadata: Metadata = {
  title: `Infos pratiques — Horaires, Accès, Matériaux acceptés | ${SITE.name}`,
  description:
    "Tout ce qu'il faut savoir avant de venir : horaires d'ouverture, adresse, accès, matériaux acceptés, documents à apporter et modes de règlement chez VALMETAUX à Argenteuil.",
  alternates: { canonical: url },
  openGraph: {
    title: `Infos pratiques VALMETAUX — Argenteuil`,
    description:
      "Horaires, adresse, accès, matériaux acceptés, règlement — toutes les infos avant de venir au dépôt VALMETAUX à Argenteuil.",
    url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
};

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Infos pratiques" },
];

const HORAIRES = [
  { jour: "Lundi", heures: "08h00 – 17h00" },
  { jour: "Mardi", heures: "08h00 – 17h00" },
  { jour: "Mercredi", heures: "08h00 – 17h00" },
  { jour: "Jeudi", heures: "08h00 – 17h00" },
  { jour: "Vendredi", heures: "08h00 – 17h00" },
  { jour: "Samedi", heures: "08h00 – 12h00" },
  { jour: "Dimanche", heures: "Fermé" },
];

const MATERIAUX_ACCEPTES = [
  { categorie: "Cuivre", exemples: "Câbles, tuyaux, chutes de plomberie, millberry" },
  { categorie: "Laiton", exemples: "Robinetterie, radiateurs laiton, chutes industrielles" },
  { categorie: "Aluminium", exemples: "Jantes, carters, profilés, câbles alu" },
  { categorie: "Zinc & Plomb", exemples: "Zinc de toiture, vieux plomb, batteries plomb" },
  { categorie: "Inox", exemples: "Inox 304/316, tôles, cuve, évier" },
  { categorie: "Ferraille lourde", exemples: "IPN, IPE, HEA, HEB, acier de déconstruction" },
  { categorie: "Ferraille légère (platin)", exemples: "Tôles, clôtures, carcasses, mobilier métallique" },
  { categorie: "Moteurs électriques", exemples: "Moteurs usagés, alternateurs, transformateurs" },
  { categorie: "Carbure de tungstène", exemples: "Plaquettes, forets, tournures d'usinage" },
];

const NON_ACCEPTES = [
  "Déchets non métalliques (bois, plastique, verre…)",
  "Appareils électroménagers contenant des gaz (frigos, climatiseurs)",
  "Matières dangereuses ou contaminées",
  "Métaux radioactifs",
];

export default function InfosPratiquesPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.address.streetAddress}, ${SITE.address.postalCode} ${SITE.address.addressLocality}`,
  )}`;

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Header */}
      <section className="border-b border-slate-800 bg-slate-950 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-amber-400">
            Dépôt VALMETAUX — Argenteuil
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Infos pratiques
          </h1>
          <p className="mt-4 max-w-xl text-slate-400">
            Tout ce qu&apos;il faut savoir avant de venir : horaires, accès,
            matériaux acceptés, pièces à fournir et mode de règlement.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6">

        {/* Adresse + CTA */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                📍
              </span>
              Adresse
            </h2>
            <address className="mt-4 not-italic space-y-1 text-slate-600">
              <p className="font-semibold text-slate-900">{SITE.name}</p>
              <p>{SITE.address.streetAddress}</p>
              <p>
                {SITE.address.postalCode} {SITE.address.addressLocality}
              </p>
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"
            >
              Ouvrir dans Maps →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                📞
              </span>
              Contact
            </h2>
            <div className="mt-4 space-y-3">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-between rounded-xl bg-amber-500 px-5 py-3 transition hover:bg-amber-600"
              >
                <span className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-100">Mobile</span>
                  <span className="font-black text-white">{SITE.phone}</span>
                </span>
                <span className="text-lg">📱</span>
              </a>
              <a
                href={`tel:${SITE.phoneLandline.replace(/\s/g, "")}`}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-3 transition hover:border-amber-300"
              >
                <span className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fixe dépôt</span>
                  <span className="font-black text-slate-800">{SITE.phoneLandline}</span>
                </span>
                <span className="text-lg">📞</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-300"
              >
                <span>✉️</span>
                {SITE.email}
              </a>
            </div>
          </div>
        </section>

        {/* Horaires */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
              🕐
            </span>
            Horaires d&apos;ouverture
          </h2>
          <ul className="mt-5 divide-y divide-slate-100">
            {HORAIRES.map(({ jour, heures }) => {
              const ferme = heures === "Fermé";
              return (
                <li
                  key={jour}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="font-semibold text-slate-700">{jour}</span>
                  <span
                    className={
                      ferme
                        ? "text-slate-400"
                        : "font-bold text-slate-900"
                    }
                  >
                    {heures}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
            💡 En cas de volume important ou pour les professionnels, appelez
            avant de vous déplacer pour organiser la réception.
          </p>
        </section>

        {/* Matériaux acceptés */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
              ♻️
            </span>
            Matériaux acceptés
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {MATERIAUX_ACCEPTES.map(({ categorie, exemples }) => (
              <div
                key={categorie}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <p className="font-bold text-slate-900">{categorie}</p>
                <p className="mt-0.5 text-xs text-slate-500">{exemples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Non acceptés */}
        <section className="rounded-2xl border border-red-100 bg-red-50 p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-red-800">
            <span>🚫</span>
            Matériaux non acceptés
          </h2>
          <ul className="mt-4 space-y-2">
            {NON_ACCEPTES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-red-700">
                <span className="mt-0.5 shrink-0">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Documents & règlement */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                🪪
              </span>
              Pièces à fournir
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-amber-600">→</span>
                Pièce d&apos;identité en cours de validité (CNI ou passeport)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-amber-600">→</span>
                Pour les professionnels : Kbis ou SIRET
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-amber-600">→</span>
                RIB pour le virement instantané
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                💳
              </span>
              Mode de règlement
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Le règlement s&apos;effectue exclusivement par{" "}
              <strong className="text-slate-900">virement instantané</strong>,
              conformément à la réglementation en vigueur sur le rachat de
              métaux. Les espèces ne sont pas acceptées. Le virement est émis
              directement depuis notre compte — vous le recevez en quelques
              secondes sur votre RIB.
            </p>
            <Link
              href="/guides/virement-instantane-achat-metaux-loi"
              className="mt-4 block text-xs font-bold text-amber-600 hover:underline"
            >
              En savoir plus sur le virement instantané →
            </Link>
          </div>
        </section>

        {/* Accès */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
              🚗
            </span>
            Accès
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div>
              <p className="font-bold text-slate-900">En voiture</p>
              <p className="mt-1">A15 sortie Argenteuil / A86 depuis Cergy ou la Défense. Parking sur site disponible.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">En transports</p>
              <p className="mt-1">RER C — gare d&apos;Argenteuil. Bus ligne 95-16 depuis le centre-ville.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">GPS</p>
              <p className="mt-1 font-mono text-slate-500">
                {SITE.geo.latitude}N, {SITE.geo.longitude}E
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-bold text-amber-600 hover:underline"
              >
                Ouvrir Maps →
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
