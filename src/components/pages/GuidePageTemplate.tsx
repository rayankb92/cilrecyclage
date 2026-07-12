import Image from "next/image";
import Link from "next/link";
import type { GuideContent } from "@/content/types";
import { ALL_GUIDES, ALL_SERVICES } from "@/content";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqPageJsonLd,
} from "@/components/seo/JsonLd";
import { SITE } from "@/content/site";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { RichParagraph } from "@/lib/render-content";

export function GuidePageTemplate({ guide }: { guide: GuideContent }) {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: guide.title },
  ];

  const relatedGuides = ALL_GUIDES.filter(
    (g) => guide.relatedSlugs.includes(g.slug) && g.slug !== guide.slug,
  );

  const relatedServices = ALL_SERVICES.filter((s) =>
    guide.relatedServiceSlugs.includes(s.slug),
  );

  return (
    <>
      <ArticleJsonLd guide={guide} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {guide.faq.length > 0 && <FaqPageJsonLd faq={guide.faq} />}

      {/* ── HERO ── */}
      <section className="border-b border-[#232323] bg-[#121212] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-5 flex items-center gap-3">
            <span className="rounded-full border border-[#F47A20]/30 bg-[#F47A20]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#F47A20]">
              {guide.category}
            </span>
            <span className="text-xs text-slate-500">
              {guide.readingTime} min de lecture
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            {guide.excerpt}
          </p>
          <p className="mt-4 text-xs text-slate-600">
            Mis à jour le{" "}
            {new Date(guide.dateModified).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-10 lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* Article principal */}
          <article>
            {/* Image hero si disponible */}
            {guide.image && (
              <div className="relative mb-10 aspect-[16/7] overflow-hidden rounded-2xl">
                <Image
                  src={guide.image}
                  alt={guide.imageAlt ?? guide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 750px"
                  priority
                />
              </div>
            )}

            {/* Sections */}
            <div className="space-y-10">
              {guide.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="mb-4 text-xl font-extrabold text-slate-900 sm:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="prose prose-slate max-w-none text-slate-700">
                    <RichParagraph text={section.content} />
                  </div>
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="mt-6 space-y-6">
                      {section.subsections.map((sub, j) => (
                        <div
                          key={j}
                          className="border-l-2 border-[#F47A20] pl-5"
                        >
                          <h3 className="mb-2 font-bold text-slate-900">
                            {sub.heading}
                          </h3>
                          <div className="text-sm leading-7 text-slate-600">
                            <RichParagraph text={sub.content} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* FAQ */}
            {guide.faq.length > 0 && (
              <section className="mt-14">
                <h2 className="mb-6 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Questions fréquentes
                </h2>
                <div className="space-y-4">
                  {guide.faq.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-xl border border-slate-200 bg-slate-50 open:border-[#FFD7B5] open:bg-[#FFF3E8]"
                    >
                      <summary className="cursor-pointer list-none px-5 py-4 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-3">
                          {item.question}
                          <svg
                            className="h-4 w-4 shrink-0 text-[#F47A20] transition-transform group-open:rotate-180"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="mt-12 space-y-6 lg:mt-0">
            {/* CTA téléphone */}
            <div className="rounded-2xl bg-[#121212] p-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#F47A20]">
                Besoin d&apos;un prix ?
              </p>
              <p className="mt-2 text-sm font-bold text-white">
                Appelez directement le dépôt de Villaines-sous-Bois
              </p>
              <PhoneLink
                className="mt-4 flex items-center gap-3 border-l-2 border-[#F47A20] pl-3 transition hover:border-[#D95F02]"
              >
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#F47A20]">
                    Appeler
                  </span>
                  <span className="block font-black text-white">
                    {SITE.phone}
                  </span>
                </div>
              </PhoneLink>
              <p className="mt-3 text-xs text-slate-500">
                Lun–Ven 8h–17h · Sam 8h–12h
              </p>
            </div>

            {/* Prestations liées */}
            {relatedServices.length > 0 && (
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Prestations associées
                </p>
                <ul className="space-y-3">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/prestations/${service.slug}`}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-[#D95F02]"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F47A20]" />
                        {service.nav}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Guides liés */}
            {relatedGuides.length > 0 && (
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Guides à lire aussi
                </p>
                <ul className="space-y-3">
                  {relatedGuides.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="block text-sm font-semibold leading-5 text-slate-800 hover:text-[#D95F02]"
                      >
                        {g.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
