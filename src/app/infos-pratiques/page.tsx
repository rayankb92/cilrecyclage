import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
const url = `${SITE.url}/infos-pratiques`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.address.streetAddress}, ${SITE.address.postalCode} ${SITE.address.addressLocality}`)}`;

export const metadata: Metadata = {
  title: `Infos pratiques — Horaires, Accès, Matériaux acceptés | ${SITE.name}`,
  description:
    "Tout ce qu'il faut savoir avant de venir : horaires d'ouverture, adresse, accès, matériaux acceptés, documents à apporter et modes de règlement chez CIL Recyclage à Villaines-sous-Bois.",
  alternates: { canonical: url },
  openGraph: {
    title: `Infos pratiques ${SITE.name} — Villaines-sous-Bois`,
    description:
      "Horaires, adresse, accès, matériaux acceptés, règlement — toutes les infos avant de venir au dépôt CIL Recyclage à Villaines-sous-Bois.",
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

function InfoIcon({
  kind,
}: {
  kind:
    | "address"
    | "contact"
    | "clock"
    | "recycle"
    | "documents"
    | "payment"
    | "access";
}) {
  const className = "h-4 w-4 text-[#F47A20]";

  switch (kind) {
    case "address":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "contact":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <path d="M6 4h12v16H6z" />
          <path d="M10 7h4M9 17h6" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v5l3 2" />
        </svg>
      );
    case "recycle":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <path d="M10 4 7 9h6" />
          <path d="m14 20 3-5h-6" />
          <path d="M6 14H3l3 5" />
          <path d="M8.5 8.5 12 6l3.5 2.5" />
          <path d="M15.5 15.5 12 18l-3.5-2.5" />
        </svg>
      );
    case "documents":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      );
    case "payment":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18M7 14h3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
          <path d="M4 17h16" />
          <path d="M7 17V9l5-4 5 4v8" />
        </svg>
      );
  }
}

export default function InfosPratiquesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Header */}
      <section className="border-b border-[#232323] bg-[#121212] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#F47A20]">
            Dépôt CIL Recyclage — Villaines-sous-Bois
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
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD7B5]">
                <InfoIcon kind="address" />
              </span>
              Adresse
            </h2>
            <address className="mt-4 not-italic space-y-1 text-slate-600">
              <p className="font-semibold text-slate-900">{SITE.name}</p>
              <p>{SITE.address.streetAddress}</p>
              <p>{SITE.address.postalCode} {SITE.address.addressLocality}</p>
            </address>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex w-full items-center gap-3 rounded-xl border border-[#F47A20] px-4 py-3 transition hover:bg-[#FFF3E8]"
            >
              <svg className="h-5 w-5 shrink-0 text-[#F47A20]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">Lancer la navigation</span>
                <span className="text-xs text-slate-500">{SITE.address.streetAddress}, {SITE.address.addressLocality}</span>
              </span>
              <svg className="ml-auto h-4 w-4 shrink-0 text-[#F47A20] transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD7B5]">
                <InfoIcon kind="contact" />
              </span>
              Contact
            </h2>
            <div className="mt-4 space-y-3">
              <PhoneLink
                className="flex items-center justify-between rounded-xl bg-[#F47A20] px-5 py-3 transition hover:bg-[#D95F02]"
              >
                <span className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD7B5]">Téléphone</span>
                  <span className="font-black text-white">{SITE.phone}</span>
                </span>
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M6 4h12v16H6z" />
                  <path d="M10 7h4M9 17h6" />
                </svg>
              </PhoneLink>
              {SITE.phoneLandline && (
                <PhoneLink
                  phone={SITE.phoneLandline}
                  trackConversion={false}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-3 transition hover:border-[#FFD7B5]"
                >
                  <span className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Fixe dépôt</span>
                    <span className="font-black text-slate-800">{SITE.phoneLandline}</span>
                  </span>
                  <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M7 5h10v14H7z" />
                    <path d="M9 9h6M9 13h6" />
                  </svg>
                </PhoneLink>
              )}
              {SITE.email && (
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#FFD7B5]"
                >
                  <svg className="h-5 w-5 text-[#F47A20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M4 7h16v10H4z" />
                    <path d="m5 8 7 6 7-6" />
                  </svg>
                  {SITE.email}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Horaires */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD7B5]">
              <InfoIcon kind="clock" />
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
          <p className="mt-4 rounded-xl bg-[#FFF3E8] px-4 py-3 text-sm text-[#D95F02]">
            En cas de volume important ou pour les professionnels, appelez
            avant de vous déplacer pour organiser la réception.
          </p>
        </section>

        {/* Matériaux acceptés */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD7B5]">
              <InfoIcon kind="recycle" />
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
            <span className="font-bold">×</span>
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
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD7B5]">
                <InfoIcon kind="documents" />
              </span>
              Pièces à fournir
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-[#F47A20]">→</span>
                Pièce d&apos;identité en cours de validité (CNI ou passeport)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-[#F47A20]">→</span>
                Pour les professionnels : Kbis ou SIRET
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-[#F47A20]">→</span>
                RIB pour le virement instantané
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD7B5]">
                <InfoIcon kind="payment" />
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
              className="mt-4 block text-xs font-bold text-[#F47A20] hover:underline"
            >
              En savoir plus sur le virement instantané →
            </Link>
          </div>
        </section>

        {/* Accès */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD7B5]">
              <InfoIcon kind="access" />
            </span>
            Accès
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div>
              <p className="font-bold text-slate-900">En voiture</p>
              <p className="mt-1">Accès pratique depuis les axes du nord du Val-d&apos;Oise. Parking sur site disponible.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">En transports</p>
              <p className="mt-1">Privilégier le déplacement en véhicule pour le dépôt de métaux et les apports pondéreux.</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">GPS</p>
              {SITE.geo ? (
                <p className="mt-1 font-mono text-slate-500">
                  {SITE.geo.latitude}N, {SITE.geo.longitude}E
                </p>
              ) : (
                <p className="mt-1 text-slate-500">
                  Utilisez l&apos;adresse du dépôt ou ouvrez directement la navigation.
                </p>
              )}
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-bold text-[#F47A20] hover:underline">
                Ouvrir Maps →
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
