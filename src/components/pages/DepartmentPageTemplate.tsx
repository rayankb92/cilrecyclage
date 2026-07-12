import Link from "next/link";
import type { DepartmentContent } from "@/content/types";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/content/site";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { RichParagraph } from "@/lib/render-content";

export function DepartmentPageTemplate({
  content,
}: {
  content: DepartmentContent;
}) {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: `${content.nom} (${content.code})` },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#121212] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <BreadcrumbJsonLd items={breadcrumbItems} />
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#F47A20]">
            Ferrailleur {content.nom} — Département {content.code}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {content.hero.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            {content.hero.subheadline}
          </p>
          <PhoneLink
            className="mt-7 inline-block rounded-full bg-[#F47A20] px-7 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#D95F02] active:scale-95"
          >
            {SITE.phone}
          </PhoneLink>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          <section>
            <RichParagraph text={content.paragraphs.intro} />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              Profil du territoire
            </h2>
            <RichParagraph text={content.paragraphs.profilZone} />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              Métaux rachetés dans le {content.code}
            </h2>
            <RichParagraph text={content.paragraphs.metauxDominants} />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              Logistique chantier et évacuation de ferrailles
            </h2>
            <RichParagraph text={content.paragraphs.logistique} />
          </section>

          {content.paragraphs.interDept && (
            <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <RichParagraph text={content.paragraphs.interDept} />
            </section>
          )}
        </div>

        {/* ── VILLES ── */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Communes couvertes dans le {content.code}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {content.internalLinks.cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/${city.slug}`}
                  className="font-semibold text-[#F47A20] hover:text-[#D95F02]"
                >
                  → Ferrailleur {city.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-100 pt-5 text-sm text-slate-600">
            <span>
              Retrouvez notre{" "}
              <Link
                href="/"
                className="font-semibold text-[#F47A20] hover:text-[#D95F02]"
              >
                {content.internalLinks.home.label}
              </Link>
            </span>
            <span>·</span>
            <span>
              Département voisin :{" "}
              <Link
                href={`/${content.internalLinks.neighborDept.slug}`}
                className="font-semibold text-[#F47A20] hover:text-[#D95F02]"
              >
                {content.internalLinks.neighborDept.label}
              </Link>
            </span>
          </div>
        </section>
      </article>
    </>
  );
}
