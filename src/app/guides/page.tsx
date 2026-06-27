import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ALL_GUIDES } from "@/content";
import { SITE } from "@/content/site";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: `Guides & Conseils Ferraille et Métaux — ${SITE.name}`,
  description:
    "Guides pratiques sur le rachat de métaux en Île-de-France : prix du cuivre, préparation de la ferraille, réglementation virement instantané, carbure de tungstène.",
  alternates: { canonical: "/guides" },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Marché des métaux": "text-amber-600 bg-amber-50 border-amber-200",
  "Conseils pratiques": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Réglementation": "text-blue-700 bg-blue-50 border-blue-200",
};

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Guides & Conseils" },
];

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Header */}
      <section className="border-b border-slate-800 bg-slate-950 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-amber-400">
            Base de connaissances
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Guides & Conseils sur les Métaux
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Tout comprendre avant de vendre vos métaux : cours du marché,
            préparation de votre lot, réglementation en vigueur.
          </p>
        </div>
      </section>

      {/* Grille articles */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-amber-300 hover:shadow-lg"
            >
              {/* Image */}
              {guide.image && (
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={guide.image}
                    alt={guide.imageAlt ?? guide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                {/* Catégorie + temps de lecture */}
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      CATEGORY_COLORS[guide.category] ??
                      "border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    {guide.category}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {guide.readingTime} min
                  </span>
                </div>

                <h2 className="mt-3 text-base font-bold leading-snug text-slate-900 group-hover:text-amber-700">
                  {guide.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                  {guide.excerpt}
                </p>

                <span className="mt-4 text-xs font-bold text-amber-600 group-hover:underline">
                  Lire le guide →
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
            Une question sur votre lot ?
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-white">
            Appelez directement le dépôt
          </h2>
          <p className="mt-3 text-slate-400">
            Notre équipe répond à toutes vos questions sur les prix, la
            logistique et la réglementation.
          </p>
          <PhoneLink
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
          </PhoneLink>
        </div>
      </section>
    </>
  );
}
