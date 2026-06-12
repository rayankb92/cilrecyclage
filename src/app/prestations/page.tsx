import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ALL_SERVICES } from "@/content";
import { SITE } from "@/content/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

const url = `${SITE.url}/prestations`;

export const metadata: Metadata = {
  title: `Nos Prestations — Rachat Métaux, Ferraille, Bennes | ${SITE.name}`,
  description:
    "Découvrez toutes les prestations VALMETAUX : rachat de métaux, recyclage ferrailles, métaux non ferreux et spéciaux, enlèvement sur chantier, dépose de bennes en Île-de-France.",
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

const ICONS: Record<string, string> = {
  "rachat-de-metaux": "⚖️",
  "recyclage-ferrailles": "🏗️",
  "recyclage-metaux-non-ferreux": "🔩",
  "recyclage-metaux-speciaux": "⚙️",
  "enlevement-chantier": "🚛",
  "depose-de-bennes": "📦",
};

export default function PrestationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Header */}
      <section className="border-b border-slate-800 bg-slate-950 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-amber-400">
            VALMETAUX — Île-de-France
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Nos Prestations de Rachat et Recyclage de Métaux
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Du rachat au comptoir à l&apos;enlèvement camion-grue sur chantier —
            VALMETAUX couvre l&apos;ensemble du cycle de valorisation des métaux en
            Île-de-France.
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-amber-300 hover:shadow-lg"
            >
              {/* Image ou icône */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <Image
                  src={service.hero.image}
                  alt={service.hero.imageAlt}
                  fill
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent" />
                <span className="absolute bottom-3 left-4 text-3xl">
                  {ICONS[service.slug] ?? "🔧"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base font-bold text-slate-900 group-hover:text-amber-700">
                  {service.nav}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                  {service.hero.pitch}
                </p>
                <span className="mt-4 text-xs font-bold text-amber-600 group-hover:underline">
                  Voir la prestation →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Une demande spécifique ?
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-white">
            Appelez directement le dépôt d&apos;Argenteuil
          </h2>
          <p className="mt-3 text-slate-400">
            Estimation rapide par téléphone ou sur photo, 6 jours sur 7.
          </p>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="mt-7 inline-flex items-center gap-3 border-l-2 border-amber-400 pl-4 transition hover:border-amber-300"
          >
            <div className="text-left">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Appeler
              </span>
              <span className="block text-2xl font-black text-white">
                {SITE.phone}
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
