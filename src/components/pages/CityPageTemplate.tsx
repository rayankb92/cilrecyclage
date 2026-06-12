import Link from "next/link";
import type { CityContent } from "@/content/types";
import { ALL_SERVICES } from "@/content";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/content/site";
import { RichParagraph } from "@/lib/render-content";

// Services les plus pertinents pour une page ville (apport + enlèvement)
const CITY_SERVICES = ALL_SERVICES.filter((s) =>
  ["rachat-de-metaux", "enlevement-chantier", "depose-de-bennes"].includes(s.slug),
);

export function CityPageTemplate({ content }: { content: CityContent }) {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    {
      label: content.departement,
      href: `/${content.departementSlug}`,
    },
    { label: content.ville },
  ];

  return (
    <>
      <LocalBusinessJsonLd
        city={content.ville}
        pageUrl={`${SITE.url}/${content.slug}`}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* ── HERO ── */}
      <section className="bg-slate-900 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-amber-400">
            Ferrailleur {content.ville} · {content.departement}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {content.hero.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            {content.hero.subheadline}
          </p>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="mt-7 inline-block rounded-full bg-amber-500 px-7 py-3 text-base font-bold text-white shadow-lg transition hover:bg-amber-600 active:scale-95"
          >
            {SITE.phone}
          </a>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              Proximité et réactivité
            </h2>
            <RichParagraph text={content.paragraphs.proximite} />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              Profil local et clientèle
            </h2>
            <RichParagraph text={content.paragraphs.profilClientele} />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              Métaux rachetés à {content.ville}
            </h2>
            <RichParagraph text={content.paragraphs.metauxPrioritaires} />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              Évacuation de ferrailles et objets métalliques
            </h2>
            <RichParagraph text={content.paragraphs.evacuationMetaux} />
          </section>

          {content.paragraphs.nicheSpecifique && (
            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
                Expertise spécifique
              </h2>
              <RichParagraph text={content.paragraphs.nicheSpecifique} />
            </section>
          )}

          {content.paragraphs.avantagesConcurrentiel && (
            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
                Pourquoi choisir VALMETAUX à {content.ville}
              </h2>
              <RichParagraph text={content.paragraphs.avantagesConcurrentiel} />
            </section>
          )}
        </div>

        {/* ── PRESTATIONS ── */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Nos prestations à {content.ville}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {CITY_SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/prestations/${service.slug}`}
                  className="block rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 transition hover:border-amber-300 hover:text-amber-700"
                >
                  {service.nav}
                  <span className="mt-1 block text-xs font-normal text-slate-400 line-clamp-2">
                    {service.hero.pitch.slice(0, 60)}…
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── MAILLAGE INTERNE ── */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Communes voisines et département
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li>
              <Link
                href={`/${content.internalLinks.department.slug}`}
                className="font-semibold text-amber-600 hover:text-amber-800"
              >
                → Ferrailleur {content.internalLinks.department.label}
              </Link>
            </li>
            {content.internalLinks.nearbyCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/${city.slug}`}
                  className="font-semibold text-amber-600 hover:text-amber-800"
                >
                  → Ferrailleur {city.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-slate-100 pt-5 text-sm text-slate-600">
            Retrouvez notre{" "}
            <Link
              href="/"
              className="font-semibold text-amber-600 hover:text-amber-800"
            >
              centre de récupération à Argenteuil
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
