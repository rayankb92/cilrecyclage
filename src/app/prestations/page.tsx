import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ALL_SERVICES } from "@/content";
import { SITE } from "@/content/site";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

const url = `${SITE.url}/prestations`;

export const metadata: Metadata = {
  title: `Nos Prestations — Rachat Métaux, Ferraille, Bennes | ${SITE.name}`,
  description:
    "Découvrez les prestations CIL Recyclage : rachat de métaux, recyclage ferrailles, métaux non ferreux et spéciaux, enlèvement sur chantier et dépose de bennes en Val-d'Oise et en Île-de-France.",
  alternates: { canonical: url },
  openGraph: {
    title: `Nos Prestations — Rachat Métaux, Ferraille, Bennes | ${SITE.name}`,
    description:
      "Rachat de métaux, recyclage ferrailles, métaux spéciaux, enlèvement chantier, bennes — toutes nos prestations en Île-de-France.",
    url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
};

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Prestations" },
];

const SERVICE_SNIPPETS: Record<string, string> = {
  "rachat-de-metaux":
    "Cuivre, laiton, aluminium, inox et autres métaux valorisés au dépôt ou sur enlèvement.",
  "recyclage-ferrailles":
    "Ferraille légère, lourde, fonte et structures métalliques traitées avec une logistique adaptée.",
  "recyclage-metaux-non-ferreux":
    "Tri précis des métaux à forte valeur comme le cuivre, le laiton, l'aluminium, le zinc et le plomb.",
  "recyclage-metaux-speciaux":
    "Carbure, titane, nickel, Inconel, catalyseurs et alliages techniques évalués séparément.",
  "enlevement-chantier":
    "Intervention sur chantier ou site technique pour charger, évacuer et valoriser les métaux présents.",
  "depose-de-bennes":
    "Bennes ferrailles déposées sur site avec rotation, pesée et valorisation du contenu selon le lot.",
};

function ServiceIcon({ slug }: { slug: string }) {
  const common = "h-6 w-6 text-white";

  switch (slug) {
    case "rachat-de-metaux":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M12 3v18" />
          <path d="M5 8h14" />
          <path d="M7 8l-3 8h6l-3-8Z" />
          <path d="M17 8l-3 8h6l-3-8Z" />
        </svg>
      );
    case "recyclage-ferrailles":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M3 18h18" />
          <path d="M7 18V9l5-4 5 4v9" />
          <path d="M10 18v-4h4v4" />
        </svg>
      );
    case "recyclage-metaux-non-ferreux":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M7 7h10v10H7z" />
          <path d="M3 11h4M17 11h4M11 3v4M11 17v4" />
        </svg>
      );
    case "recyclage-metaux-speciaux":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M12 3l7 4v10l-7 4-7-4V7l7-4Z" />
          <path d="M12 8v8M8.5 10l7 4M15.5 10l-7 4" />
        </svg>
      );
    case "enlevement-chantier":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M3 16h12V9H9" />
          <path d="M15 12h3l3 3v1h-6" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
          <path d="M4 7h16v10H4z" />
          <path d="M9 7V5h6v2" />
        </svg>
      );
  }
}

export default function PrestationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Header */}
      <section className="border-b border-[#232323] bg-[#121212] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#F47A20]">
            CIL Recyclage — Val-d&apos;Oise & Île-de-France
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Nos Prestations de Rachat et Recyclage de Métaux
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Du dépôt direct à Villaines-sous-Bois jusqu&apos;à l&apos;enlèvement
            sur chantier, CIL Recyclage couvre les besoins de valorisation,
            de collecte et de logistique métal pour les particuliers,
            artisans et professionnels.
          </p>
        </div>
      </section>

      {/* Grille prestations */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/prestations/${service.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#D9DDE3] bg-white transition hover:border-[#F47A20] hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#232323]">
                <Image
                  src={service.hero.image}
                  alt={service.hero.imageAlt}
                  fill
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#121212]/78 to-transparent" />
                <span className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F47A20] shadow-lg">
                  <ServiceIcon slug={service.slug} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base font-bold text-slate-900 group-hover:text-[#D95F02]">
                  {service.nav}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                  {SERVICE_SNIPPETS[service.slug] ?? service.meta.description}
                </p>
                <span className="mt-4 text-xs font-bold text-[#F47A20] group-hover:underline">
                  Voir la prestation →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="bg-[#121212] py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F47A20]">
            Une demande spécifique ?
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-white">
            Appelez directement le dépôt de Villaines-sous-Bois
          </h2>
          <p className="mt-3 text-slate-400">
            Estimation rapide par téléphone ou sur photo pour vos métaux,
            ferrailles, enlèvements et besoins logistiques.
          </p>
          <PhoneLink
            className="mt-7 inline-flex items-center gap-3 border-l-2 border-[#F47A20] pl-4 transition hover:border-[#D95F02]"
          >
            <div className="text-left">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#F47A20]">
                Appeler
              </span>
              <span className="block text-2xl font-black text-white">
                {SITE.phone}
              </span>
            </div>
          </PhoneLink>
        </div>
      </section>
    </>
  );
}
