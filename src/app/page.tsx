import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdvantagesFlex } from "@/components/home/AdvantagesFlex";
import { ALL_CITIES, NEARBY_DEPARTMENTS, EXTENDED_DEPARTMENTS } from "@/content";
import { CORE_SERVICES, SITE } from "@/content/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { FaqPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: `${SITE.name} — Ferrailleur Villaines-sous-Bois | Rachat Métaux 95`,
  description:
    "CIL Recyclage, ferrailleur à Villaines-sous-Bois (95570). Rachat cuivre, laiton, aluminium, ferraille et métaux spéciaux. Dépôt local, enlèvement et intervention en Île-de-France.",
};

const METAL_GRID = [
  {
    name: "Cuivre",
    detail: "Millberry, câbles, tuyauteries",
    src: "/images/metaux/cuivre-neuf-millbery.webp",
  },
  {
    name: "Laiton",
    detail: "Raccords, robinetterie, chutes",
    src: "/images/metaux/laiton.webp",
  },
  {
    name: "Aluminium",
    detail: "Jantes, profilés, carters",
    src: "/images/metaux/jantes-alu.webp",
  },
  {
    name: "Ferraille",
    detail: "Structures, dépose, chantier",
    src: "/images/logistique/poutrelle.webp",
  },
];

const HOME_FAQ = [
  {
    question: "Où se trouve le dépôt CIL Recyclage ?",
    answer:
      "Le dépôt CIL Recyclage se situe route de Viarmes CD 909, 95570 Villaines-sous-Bois, dans le nord du Val-d'Oise, avec un accès via le parking GAMM VERT.",
  },
  {
    question: "Quels métaux CIL Recyclage rachète-t-il ?",
    answer:
      "CIL Recyclage rachète notamment le cuivre, le laiton, l'aluminium, la ferraille, le zinc, le plomb, l'inox et certains métaux spéciaux selon la nature du lot.",
  },
  {
    question: "CIL Recyclage intervient-il seulement dans le Val-d'Oise ?",
    answer:
      "Le dépôt est basé à Villaines-sous-Bois dans le Val-d'Oise, avec des interventions possibles en Île-de-France pour les enlèvements, chantiers et besoins logistiques selon les volumes.",
  },
  {
    question: "Comment contacter rapidement CIL Recyclage ?",
    answer:
      "Le numéro principal du dépôt CIL Recyclage est le 01 34 71 94 63 pour un apport au dépôt, un enlèvement ou une demande de benne.",
  },
];

export default function HomePage() {
  return (
    <>
      <FaqPageJsonLd faq={HOME_FAQ} />

      <section className="relative overflow-hidden bg-[#232323]">
        <Image
          src="/images/logistique/chargement-grue-camion.webp"
          alt="Camion-grue et manutention de métaux pour CIL Recyclage"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/90 via-[#121212]/78 to-[#121212]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-6xl items-center px-4 py-14 sm:px-6 lg:min-h-[86svh]">
          <div className="max-w-3xl">
            <p className="hero-1 text-xs font-bold uppercase tracking-[0.22em] text-[#FFD7B5]">
              Villaines-sous-Bois · Val-d&apos;Oise
            </p>

            <h1 className="hero-2 mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ferrailleur et rachat de métaux en Île-de-France
            </h1>

            <p className="hero-3 mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              CIL Recyclage vous accueille au dépôt de Villaines-sous-Bois pour
              le rachat de cuivre, laiton, aluminium, ferraille et métaux
              spéciaux. Enlèvement sur site, bennes et intervention en
              Île-de-France.
            </p>

            <div className="hero-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <PhoneLink className="inline-flex items-center justify-center rounded-full bg-[#F47A20] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#D95F02]">
                Appeler le dépôt — {SITE.phone}
              </PhoneLink>
              <Link
                href="/prestations"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/16"
              >
                Voir nos prestations
              </Link>
            </div>

          </div>
        </div>
      </section>

      <AdvantagesFlex />

      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-white px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <AnimateIn>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F47A20]">
              Particuliers
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-[#232323] sm:text-3xl">
              Vendez vos métaux directement au dépôt
            </h2>
          </AnimateIn>
          <AnimateIn delay={140}>
            <p className="mt-4 leading-7 text-[#6B7280]">
              Vous videz un garage, rénovez un pavillon ou remplacez une
              installation de chauffage ? Apportez vos métaux au dépôt de
              Villaines-sous-Bois : pesée immédiate et règlement par virement
              instantané.
            </p>
            <PhoneLink className="mt-8 self-start border-b-2 border-[#F47A20] pb-0.5 text-sm font-bold text-[#232323] transition hover:border-[#D95F02] hover:text-[#D95F02]">
              Nous appeler — {SITE.phone} →
            </PhoneLink>
          </AnimateIn>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <Image
            src="/images/depot/balance.webp"
            alt="Pesée et logistique métaux pour CIL Recyclage"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[#232323]/80" />
          <div className="relative z-10">
            <AnimateIn delay={80}>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFD7B5]">
                Artisans &amp; professionnels
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                Enlèvement, benne et logistique chantier
              </h2>
            </AnimateIn>
            <AnimateIn delay={180}>
              <p className="mt-4 leading-7 text-slate-200">
                CIL Recyclage accompagne les plombiers, électriciens,
                entreprises de rénovation et gestionnaires de site pour la
                collecte, l&apos;évacuation et la valorisation des métaux sur
                chantier en Val-d&apos;Oise et en Île-de-France.
              </p>
              <PhoneLink className="mt-8 self-start border-b-2 border-[#F47A20] pb-0.5 text-sm font-bold text-white transition hover:border-[#FFD7B5] hover:text-[#FFD7B5]">
                Organiser un enlèvement — {SITE.phone} →
              </PhoneLink>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-[#121212] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateIn className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFD7B5]">
                Métaux valorisés
              </p>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Les métaux que nous rachetons
              </h2>
            </div>
            <p className="max-w-xs text-right text-sm text-slate-400">
              Cuivre, laiton, aluminium, ferraille et lots mixtes selon la
              nature des apports.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {METAL_GRID.map((metal, i) => (
              <AnimateIn key={metal.name} delay={i * 90} distance={16}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={metal.src}
                    alt={metal.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/95 via-[#121212]/30 to-transparent" />
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

      <section className="bg-[#F5F6F7] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F47A20]">
              Prestations
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#232323] sm:text-3xl">
              Services au dépôt et sur site
            </h2>
          </AnimateIn>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CORE_SERVICES.map((service, i) => (
              <AnimateIn key={service.slug} delay={i * 80}>
                <div className="rounded-2xl border border-[#D9DDE3] bg-white p-5 shadow-sm">
                  <span className="text-sm font-black text-[#F47A20]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-bold text-[#232323]">{service.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {service.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#D9DDE3] bg-white p-8 shadow-sm lg:p-10">
          <div className="lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <AnimateIn>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F47A20]">
                Rayonnement
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#232323] sm:text-3xl">
                Un dépôt local avec intervention en Île-de-France
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#6B7280]">
                Notre dépôt est implanté à Villaines-sous-Bois, au cœur du nord
                du Val-d&apos;Oise. Nous intervenons aussi dans les départements
                voisins pour les volumes importants, les chantiers et les
                demandes professionnelles.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/ferrailleur-val-doise-95"
                  className="rounded-full bg-[#F47A20] px-4 py-2 text-sm font-extrabold text-white transition hover:bg-[#D95F02]"
                >
                  Voir la page Val-d&apos;Oise 95
                </Link>
                <Link
                  href="/rachat-metaux-carnelle-pays-de-france"
                  className="rounded-full border border-[#D9DDE3] bg-white px-4 py-2 text-sm font-bold text-[#232323] transition hover:border-[#F47A20] hover:text-[#D95F02]"
                >
                  Bassin Carnelle Pays-de-France
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {ALL_CITIES.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="rounded-full border border-[#D9DDE3] bg-[#F5F6F7] px-3 py-1.5 text-xs font-bold text-[#232323] transition hover:border-[#F47A20] hover:text-[#D95F02]"
                  >
                    {city.ville}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[...NEARBY_DEPARTMENTS, ...EXTENDED_DEPARTMENTS].map((dept) => (
                  <Link
                    key={dept.slug}
                    href={`/${dept.slug}`}
                    className="rounded-full border border-[#D9DDE3] bg-[#F5F6F7] px-3 py-1.5 text-xs font-bold text-[#232323] transition hover:border-[#F47A20] hover:text-[#D95F02]"
                  >
                    {dept.nom} ({dept.code})
                  </Link>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn delay={120} className="mt-10 lg:mt-0">
              <div className="rounded-3xl bg-[#232323] p-6 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFD7B5]">
                  Adresse dépôt
                </p>
                <address className="mt-4 not-italic text-sm leading-7 text-slate-200">
                  <p>{SITE.address.streetAddress}</p>
                  <p>
                    {SITE.address.postalCode} {SITE.address.addressLocality}
                  </p>
                  <p className="text-[#FFD7B5]">{SITE.accessNote}</p>
                  <p>Lun–Ven 8h–17h · Sam 8h–12h</p>
                </address>
                <div className="mt-6 flex flex-col gap-3">
                  <PhoneLink className="inline-flex items-center justify-center rounded-full bg-[#F47A20] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#D95F02]">
                    Contact — {SITE.phone}
                  </PhoneLink>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
