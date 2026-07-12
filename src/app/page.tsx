import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ALL_CITIES, NEARBY_DEPARTMENTS, EXTENDED_DEPARTMENTS } from "@/content";
import { CORE_SERVICES, SITE } from "@/content/site";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PhoneLink } from "@/components/ui/PhoneLink";

export const metadata: Metadata = {
  title: `${SITE.name} — Ferrailleur Villaines-sous-Bois | Rachat Metaux 95`,
  description:
    "CIL Recyclage, ferrailleur a Villaines-sous-Bois (95570). Rachat cuivre, laiton, aluminium, ferraille et metaux speciaux. Depot local, enlevement et intervention en Ile-de-France.",
};

const METAL_GRID = [
  {
    name: "Cuivre",
    detail: "Millberry, cables, tuyauteries",
    src: "/images/metaux/cuivre-neuf-millbery.webp",
  },
  {
    name: "Laiton",
    detail: "Raccords, robinetterie, chutes",
    src: "/images/metaux/laiton.webp",
  },
  {
    name: "Aluminium",
    detail: "Jantes, profiles, carters",
    src: "/images/metaux/jantes-alu.webp",
  },
  {
    name: "Ferraille",
    detail: "Structures, depose, chantier",
    src: "/images/logistique/poutrelle.webp",
  },
];

const REASSURANCE = [
  {
    label: "Depot local",
    detail: "Villaines-sous-Bois · 95570",
    icon: (
      <svg viewBox="0 2 20 20" fill="currentColor" className="h-5 w-5 text-[#F47A20]" aria-hidden="true">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Virement instantane",
    detail: "Paiement trace et rapide",
    icon: (
      <svg viewBox="0 -2 20 20" fill="currentColor" className="h-5 w-5 text-[#F47A20]" aria-hidden="true">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Bascule certifiee",
    detail: "Pesee transparente",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[#F47A20]" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Interventions IDF",
    detail: "95, 92, 93, 94, 91, 77",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[#F47A20]" aria-hidden="true">
        <path d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const hasSecondaryPhone =
    SITE.phoneLandline && SITE.phoneLandline !== SITE.phone;

  return (
    <>
      <section className="relative overflow-hidden bg-[#232323]">
        <Image
          src="/images/logistique/chargement-grue-camion.webp"
          alt="Camion-grue et manutention de metaux pour CIL Recyclage"
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
              Ferrailleur et rachat de metaux en Val-d&apos;Oise et Ile-de-France
            </h1>

            <p className="hero-3 mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              CIL Recyclage vous accueille au depot de Villaines-sous-Bois pour
              le rachat de cuivre, laiton, aluminium, ferraille et metaux
              speciaux. Enlevement sur site, logistique chantier et intervention
              sur l&apos;Ile-de-France.
            </p>

            <div className="hero-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <PhoneLink className="inline-flex items-center justify-center rounded-full bg-[#F47A20] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#D95F02]">
                Appeler le depot — {SITE.phone}
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

      <section className="border-y border-[#D9DDE3] bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {REASSURANCE.map((item, i) => (
            <div
              key={i}
              className={`reassurance-${i + 1} flex items-center gap-3 border-[#D9DDE3] px-3 py-4 odd:border-r nth-[n+3]:border-t lg:border-r lg:nth-[n+3]:border-t-0 lg:last:border-r-0`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD7B5]">
                {item.icon}
              </span>
              <div>
                <p className="text-xs font-extrabold text-[#232323]">{item.label}</p>
                <p className="text-[11px] text-[#6B7280]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-white px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <AnimateIn>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F47A20]">
              Particuliers
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-[#232323] sm:text-3xl">
              Vendez vos metaux directement au depot
            </h2>
          </AnimateIn>
          <AnimateIn delay={140}>
            <p className="mt-4 leading-7 text-[#6B7280]">
              Vous videz un garage, renovez un pavillon ou remplacez une
              installation de chauffage ? Apportez vos metaux au depot de
              Villaines-sous-Bois pour une pesee immediate et un reglement par
              virement instantane.
            </p>
            <PhoneLink className="mt-8 self-start border-b-2 border-[#F47A20] pb-0.5 text-sm font-bold text-[#232323] transition hover:border-[#D95F02] hover:text-[#D95F02]">
              Nous appeler — {SITE.phone} →
            </PhoneLink>
          </AnimateIn>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <Image
            src="/images/depot/balance.webp"
            alt="Pesee et logistique metaux pour CIL Recyclage"
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
                Enlevement, benne et logistique chantier
              </h2>
            </AnimateIn>
            <AnimateIn delay={180}>
              <p className="mt-4 leading-7 text-slate-200">
                CIL Recyclage accompagne les plombiers, electriciens,
                entreprises de renovation et gestionnaires de site pour la
                collecte, l&apos;evacuation et la valorisation des metaux sur
                chantier en Val-d&apos;Oise et en Ile-de-France.
              </p>
              <PhoneLink className="mt-8 self-start border-b-2 border-[#F47A20] pb-0.5 text-sm font-bold text-white transition hover:border-[#FFD7B5] hover:text-[#FFD7B5]">
                Organiser un enlevement — {SITE.phone} →
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
                Metaux valorises
              </p>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Les metaux que nous rachetons
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
              Services au depot et sur site
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
                Un depot local avec intervention en Ile-de-France
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#6B7280]">
                Notre ancrage principal reste le Val-d&apos;Oise, avec un
                maillage local fort autour de Villaines-sous-Bois et des
                interventions dans les departements voisins pour les volumes,
                les chantiers et les demandes professionnelles.
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
                  Adresse depot
                </p>
                <address className="mt-4 not-italic text-sm leading-7 text-slate-200">
                  <p>{SITE.address.streetAddress}</p>
                  <p>
                    {SITE.address.postalCode} {SITE.address.addressLocality}
                  </p>
                  <p>Lun–Ven 8h–17h · Sam 8h–12h</p>
                </address>
                <div className="mt-6 flex flex-col gap-3">
                  <PhoneLink className="inline-flex items-center justify-center rounded-full bg-[#F47A20] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#D95F02]">
                    Contact — {SITE.phone}
                  </PhoneLink>
                  {hasSecondaryPhone && (
                    <PhoneLink
                      phone={SITE.phoneLandline}
                      trackConversion={false}
                      className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/8"
                    >
                      Fixe depot — {SITE.phoneLandline}
                    </PhoneLink>
                  )}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
