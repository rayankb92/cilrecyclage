import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ALL_DEPARTMENTS } from "@/content";
import { CORE_SERVICES, SITE } from "@/content/site";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: `${SITE.name} — Ferrailleur Argenteuil | Rachat Métaux Île-de-France`,
  description:
    "VALMETAUX, ferrailleur à Argenteuil (95100). Rachat cuivre, laiton, aluminium, ferraille et métaux spéciaux. Dépose de bennes et enlèvement camion-grue en Île-de-France.",
};

const METAL_GRID = [
  {
    name: "Cuivre",
    detail: "Millberry · câbles · chutes",
    src: "/images/metaux/cuivre-neuf-millbery.webp",
  },
  {
    name: "Laiton",
    detail: "Robinetterie · raccords",
    src: "/images/metaux/laiton.webp",
  },
  {
    name: "Aluminium",
    detail: "Jantes · carters · AGS",
    src: "/images/metaux/jantes-alu.webp",
  },
  {
    name: "Cuivre mélangé",
    detail: "Tuyauteries · dépose",
    src: "/images/metaux/cuivre-mele-2.webp",
  },
];

const REASSURANCE = [
  { icon: "⚡", label: "Virement instantané",  detail: "Crédité en quelques secondes" },
  { icon: "⚖️", label: "Bascule certifiée",    detail: "Pesée contrôlée & transparente" },
  { icon: "🕐", label: "Lun–Ven 8h–17h",       detail: "Sam 8h–12h" },
  { icon: "📍", label: "Dépôt Argenteuil",      detail: "2 rue de l'ouest — 95100" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[60svh] items-center lg:min-h-[90svh]">
        <Image
          src="/images/depot/entry-with-brand.webp"
          alt="Dépôt VALMETAUX à Argenteuil — pelleteuse en action, cuivre et ferrailles"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
          {/* Stagger CSS pur — pas de JS nécessaire */}
          <p className="hero-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Argenteuil (95100) · Val-d&apos;Oise
          </p>
          <h1 className="hero-2 mt-4 max-w-2xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rachat de Métaux &amp; Ferrailleur en Île-de-France
          </h1>
          <p className="hero-3 mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Cuivre, laiton, aluminium, ferraille — pesée certifiée, règlement
            par virement instantané. Dépose de bennes et enlèvement camion-grue
            sur chantier.
          </p>
          <div className="hero-4 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 self-start border-l-4 border-amber-400 pl-4 transition hover:border-amber-300"
            >
              <span className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 group-hover:text-amber-300">
                  Appeler le dépôt
                </span>
                <span className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {SITE.phone}
                </span>
              </span>
            </a>
            <Link
              href="/ferrailleur-val-doise-95"
              className="self-start text-sm font-semibold text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-white hover:decoration-amber-400"
            >
              Ferrailleur Val-d&apos;Oise (95) →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BANDE DE RÉASSURANCE ── */}
      <section className="border-y border-slate-800 bg-slate-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {REASSURANCE.map((item, i) => (
            <AnimateIn
              key={i}
              delay={i * 80}
              distance={12}
              className="flex items-center gap-3 border-slate-800 px-4 py-5 odd:border-r nth-[n+3]:border-t lg:border-r lg:nth-[n+3]:border-t-0 lg:last:border-r-0 first:pl-0 lg:first:pl-4"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-xs font-bold text-white">{item.label}</p>
                <p className="text-[11px] text-slate-400">{item.detail}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── DOUBLE ENTRÉE B2C / B2B ── */}
      <section className="grid lg:grid-cols-2">
        <AnimateIn className="flex flex-col justify-center bg-white px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-600">
            Particuliers
          </p>
          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
            Vendez vos métaux au comptoir
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Vous rénovez un pavillon, videz un sous-sol ou remplacez votre
            installation de chauffage ? Apportez vos cuivres, radiateurs,
            câbles et ferrailles — pesée immédiate, règlement par virement
            instantané (crédité en quelques secondes).
          </p>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="mt-8 self-start border-b-2 border-amber-500 pb-0.5 text-sm font-bold text-slate-900 transition hover:border-amber-700 hover:text-amber-700"
          >
            Nous appeler — {SITE.phone} →
          </a>
        </AnimateIn>

        <AnimateIn
          delay={120}
          className="relative flex flex-col justify-center overflow-hidden px-8 py-16 sm:px-12 lg:px-16 lg:py-24"
        >
          <Image
            src="/images/depot/balance.webp"
            alt="Pont-bascule et équipement VALMETAUX"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400">
              Artisans &amp; Professionnels
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              Bennes sur chantier &amp; enlèvement
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Plombier, électricien, maçon ou gestionnaire de site ? Nous
              déposons des bennes, intervenons au camion-grue et évacuons vos
              ferrailles directement sur site.
            </p>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="mt-8 self-start border-b-2 border-amber-400 pb-0.5 text-sm font-bold text-white transition hover:border-amber-300 hover:text-amber-300"
            >
              Demander une benne — {SITE.phone} →
            </a>
          </div>
        </AnimateIn>
      </section>

      {/* ── GRILLE MÉTAUX ── */}
      <section className="bg-slate-950 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateIn className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400">
                Nos spécialités
              </p>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Métaux rachetés
              </h2>
            </div>
            <p className="max-w-xs text-right text-sm text-slate-400">
              Nous rachetons tous vos métaux ferreux et non ferreux.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {METAL_GRID.map((metal, i) => (
              <AnimateIn key={metal.name} delay={i * 90} distance={16}>
                <div className="group relative aspect-square overflow-hidden">
                  <Image
                    src={metal.src}
                    alt={metal.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-base font-black text-white sm:text-lg">
                      {metal.name}
                    </p>
                    <p className="text-xs text-slate-300">{metal.detail}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-600">
              Couverture géographique
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Nos zones d&apos;intervention
            </h2>
          </AnimateIn>

          <div className="mt-8 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {ALL_DEPARTMENTS.map((dept, i) => (
              <AnimateIn key={dept.slug} delay={i * 60} distance={12}>
                <Link
                  href={`/${dept.slug}`}
                  className="group flex flex-col bg-white px-6 py-8 transition hover:bg-slate-950"
                >
                  <span className="text-4xl font-black text-slate-200 transition group-hover:text-amber-400">
                    {dept.code}
                  </span>
                  <span className="mt-2 font-bold text-slate-900 transition group-hover:text-white">
                    {dept.nom}
                  </span>
                  <span className="mt-auto pt-4 text-xs font-semibold text-amber-600 opacity-0 transition group-hover:opacity-100">
                    Voir les villes →
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-600">
              Logistique B2B
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Services sur site
            </h2>
          </AnimateIn>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service, i) => (
              <AnimateIn key={service.slug} delay={i * 80}>
                <div className="flex gap-4">
                  <span className="mt-1 text-xl font-black text-slate-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{service.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FINAL ── */}
      <section className="bg-slate-950 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400">
              Dépôt
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Venez au dépôt ou appelez-nous
            </h2>
            <address className="mt-6 not-italic space-y-1 text-slate-400">
              <p>{SITE.address.streetAddress}</p>
              <p>
                {SITE.address.postalCode} {SITE.address.addressLocality}
              </p>
              <p>Lun–Ven 8h–17h · Sam 8h–12h</p>
            </address>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="mt-8 flex items-center gap-4 self-start border-l-4 border-amber-400 pl-4 transition hover:border-amber-300"
            >
              <span className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  Appeler le dépôt
                </span>
                <span className="text-3xl font-black text-white">
                  {SITE.phone}
                </span>
              </span>
            </a>
          </AnimateIn>

          <AnimateIn
            delay={150}
            className="mt-12 border-t border-slate-800 pt-12 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400">
              Règlement
            </p>
            <h3 className="mt-3 text-xl font-black text-white">
              Virement instantané
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              Conformément à la réglementation française sur le rachat de
              métaux, nous réglons exclusivement par{" "}
              <strong className="text-white">virement instantané</strong>. Le
              montant est crédité sur votre compte en quelques secondes après
              la pesée — sans délai, sans attente.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-400">
              {[
                "Crédité en quelques secondes",
                "Conforme à la loi (traçabilité obligatoire)",
                "Tous établissements bancaires éligibles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-amber-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
