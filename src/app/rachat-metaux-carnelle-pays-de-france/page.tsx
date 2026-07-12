import type { Metadata } from "next";
import Link from "next/link";
import { ALL_CITIES, getCitiesByPhase } from "@/content";
import { SITE } from "@/content/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { PhoneLink } from "@/components/ui/PhoneLink";

const url = `${SITE.url}/rachat-metaux-carnelle-pays-de-france`;

const bassinCities = getCitiesByPhase(1).concat(getCitiesByPhase(2));
const extensionCities = getCitiesByPhase(3);

export const metadata: Metadata = {
  title:
    "Rachat Métaux Carnelle Pays-de-France - Bassin local CIL Recyclage",
  description:
    "CIL Recyclage dessert le bassin Carnelle Pays-de-France depuis Villaines-sous-Bois : Viarmes, Belloy, Montsoult, Presles, Maffliers, Domont, Luzarches et communes voisines. Rachat de métaux et ferraille.",
  alternates: { canonical: url },
  openGraph: {
    title: "Rachat Métaux Carnelle Pays-de-France - Bassin local CIL Recyclage",
    description:
      "16 communes du nord du Val-d'Oise desservies depuis Villaines-sous-Bois : rachat de métaux, ferraille, enlèvement et bennes pour particuliers, artisans et PME.",
    url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
};

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Carnelle Pays-de-France" },
];

const serviceLinks = [
  { label: "Rachat de métaux", slug: "rachat-de-metaux" },
  { label: "Recyclage ferrailles", slug: "recyclage-ferrailles" },
  { label: "Enlèvement chantier", slug: "enlevement-chantier" },
  { label: "Dépose de bennes", slug: "depose-de-bennes" },
];

export default function CarnellePaysDeFrancePage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <section className="border-b border-[#232323] bg-[#121212] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb items={breadcrumbItems} />
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#F47A20]">
            Bassin local CIL Recyclage
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Rachat de métaux sur le bassin Carnelle Pays-de-France
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Notre dépôt de Villaines-sous-Bois est au centre du bassin
            Carnelle Pays-de-France. Nous desservons {ALL_CITIES.length}{" "}
            communes du nord du Val-d&apos;Oise — particuliers, artisans et
            entreprises y trouvent un point de rachat proche pour leurs métaux
            et leur ferraille.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Un territoire naturel depuis Villaines-sous-Bois
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Implanté sur l&apos;axe D909, notre dépôt dessert naturellement
                le bassin Carnelle Pays-de-France : Croix Verte, RD301, N104 et
                A16. C&apos;est notre zone de travail quotidienne, structurée
                autour de Viarmes, Belloy-en-France, Montsoult, Maffliers et
                les communes voisines.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Le bassin mêle habitat pavillonnaire, petites entreprises,
                ateliers, zones d&apos;activité et chantiers de rénovation.
                Cuivre, laiton, aluminium, zinc, radiateurs, câbles et
                ferraille de dépose y sont valorisés au quotidien.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Pour quels besoins ?
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">Particuliers</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Rénovation de pavillon, remplacement de chauffage,
                    démontage de portail, débarras de garage et dépose de
                    tuyauteries ou radiateurs.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">Artisans et PME</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Chutes de chantier, dépose technique, lots mixtes à trier,
                    accumulation de ferraille et enlèvements ponctuels ou
                    réguliers sur site.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Communes du bassin
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Cœur de zone et communes de proximité —{" "}
                <Link
                  href="/ferrailleur-val-doise-95"
                  className="font-semibold text-[#F47A20] hover:text-[#D95F02]"
                >
                  voir toutes les communes du 95
                </Link>
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {bassinCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#FFD7B5] hover:bg-[#FFF3E8] hover:text-[#D95F02]"
                  >
                    {city.ville}
                  </Link>
                ))}
              </div>
            </section>

            {extensionCities.length > 0 && (
              <section>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Extension nord-est du 95
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Communes en élargissement pour les chantiers, zones
                  d&apos;activité et volumes professionnels.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {extensionCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}`}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-[#FFD7B5] hover:bg-[#FFF3E8] hover:text-[#D95F02]"
                    >
                      {city.ville}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#121212] p-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#F47A20]">
                Point d&apos;appui local
              </p>
              <h2 className="mt-3 text-xl font-extrabold">
                Dépôt de Villaines-sous-Bois
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Apportez vos métaux directement au dépôt ou demandez un
                enlèvement pour les volumes plus importants sur le nord du
                Val-d&apos;Oise.
              </p>
              <PhoneLink className="mt-6 inline-flex rounded-full bg-[#F47A20] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#D95F02]">
                Appeler le dépôt — {SITE.phone}
              </PhoneLink>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Liens utiles
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <Link
                  href="/ferrailleur-val-doise-95"
                  className="block font-semibold text-[#F47A20] hover:text-[#D95F02]"
                >
                  Val-d&apos;Oise (95)
                </Link>
                <Link
                  href="/"
                  className="block font-semibold text-[#F47A20] hover:text-[#D95F02]"
                >
                  Dépôt Villaines-sous-Bois
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/prestations/${service.slug}`}
                    className="block font-semibold text-[#F47A20] hover:text-[#D95F02]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
