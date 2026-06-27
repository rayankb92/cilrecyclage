import Image from "next/image";
import Link from "next/link";
import type { ServiceContent } from "@/content/types";
import { ALL_DEPARTMENTS, ALL_SERVICES } from "@/content";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/content/site";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function ServicePageTemplate({ content }: { content: ServiceContent }) {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Prestations", href: "/prestations" },
    { label: content.nav },
  ];

  const relatedServices = ALL_SERVICES.filter((s) =>
    content.relatedSlugs.includes(s.slug),
  );

  const hasBothTargets = Boolean(
    content.targets.particuliers && content.targets.professionnels,
  );

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* ── HERO ── full-bleed image + overlay texte, identique homepage */}
      <section className="relative min-h-[520px] overflow-hidden bg-slate-950 lg:min-h-[600px]">
        {/* Image de fond plein format */}
        <Image
          src={content.hero.image}
          alt={content.hero.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dégradé sombre pour lisibilité du texte */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/70 to-slate-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Contenu */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl flex-col justify-end px-4 pb-14 pt-10 sm:px-6 lg:min-h-[600px] lg:justify-center lg:pb-0">
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-amber-400">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {content.hero.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {content.hero.pitch}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneLink
              className="inline-flex items-center gap-3 self-start border-l-2 border-amber-400 pl-4 transition hover:border-amber-300"
            >
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Appeler maintenant
                </span>
                <span className="block text-xl font-black text-white">
                  {SITE.phone}
                </span>
              </div>
            </PhoneLink>
          </div>
        </div>

        {/* Ligne accent bas */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
      </section>

      {/* ── POUR QUI ── */}
      {(content.targets.particuliers || content.targets.professionnels) && (
        <section className="border-b border-slate-100 bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-10 text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Pour qui ?
            </h2>
            <div
              className={
                hasBothTargets
                  ? "grid gap-6 lg:grid-cols-2"
                  : "mx-auto max-w-2xl"
              }
            >
              {content.targets.particuliers && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-xl">
                      🏠
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Particuliers
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {content.targets.particuliers.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <span className="mt-1 text-amber-500">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {content.targets.professionnels && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-xl">
                      🏭
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Professionnels
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {content.targets.professionnels.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <span className="mt-1 text-amber-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-amber-400">
            Processus
          </p>
          <h2 className="mb-12 text-center text-2xl font-extrabold text-white sm:text-3xl">
            Comment ça fonctionne ?
          </h2>
          <div className="relative">
            {/* Ligne verticale de connexion (desktop) */}
            <div className="absolute left-6 top-6 hidden h-full w-px bg-slate-800 lg:block" />
            <div className="space-y-8">
              {content.steps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex gap-6 lg:items-start"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-slate-900 text-lg font-black text-amber-400">
                    {i + 1}
                  </div>
                  <div className="pb-2 pt-2">
                    <h3 className="text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POINTS CLÉS ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Nos engagements
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.keyPoints.map((point, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-amber-200 hover:bg-amber-50"
              >
                <div className="mb-1 h-1 w-8 rounded-full bg-amber-400 transition group-hover:w-12" />
                <h3 className="mt-4 font-bold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESTATIONS LIÉES ── */}
      {relatedServices.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-8 text-xl font-extrabold text-slate-900">
              Prestations complémentaires
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/prestations/${service.slug}`}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-md"
                >
                  <span className="text-sm font-bold text-slate-900 group-hover:text-amber-700">
                    {service.nav}
                  </span>
                  <span className="mt-1 text-xs text-slate-500">
                    {service.hero.pitch.slice(0, 80)}…
                  </span>
                  <span className="mt-4 text-xs font-semibold text-amber-600 group-hover:underline">
                    Voir la prestation →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MAILLAGE GÉOGRAPHIQUE ── */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-2 text-xl font-extrabold text-slate-900">
            Zone d&apos;intervention — Île-de-France
          </h2>
          <p className="mb-8 text-sm text-slate-500">
            Nous intervenons dans les 7 départements d&apos;Île-de-France.
            Retrouvez les informations spécifiques à votre département.
          </p>
          <div className="flex flex-wrap gap-3">
            {ALL_DEPARTMENTS.map((dept) => (
              <Link
                key={dept.slug}
                href={`/${dept.slug}`}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
              >
                {dept.nom} ({dept.code})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Prêt à valoriser vos métaux ?
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            Appelez directement le dépôt d&apos;Argenteuil
          </h2>
          <p className="mt-4 text-slate-400">
            Réponse rapide, estimation immédiate par téléphone ou sur photo.
            Ouvert du lundi au vendredi.
          </p>
          <PhoneLink
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-500 px-10 py-4 text-lg font-black text-white shadow-xl transition hover:bg-amber-400 active:scale-95"
          >
            {SITE.phone}
          </PhoneLink>
          <p className="mt-4 text-xs text-slate-600">
            {SITE.address.streetAddress} — {SITE.address.addressLocality}
          </p>
        </div>
      </section>
    </>
  );
}
