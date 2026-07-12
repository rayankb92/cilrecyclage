import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { PhoneLink } from "@/components/ui/PhoneLink";

const url = `${SITE.url}/rachat-metaux-carnelle-pays-de-france`;

export const metadata: Metadata = {
  title:
    "Rachat Metaux Carnelle Pays-de-France - Bassin local CIL Recyclage",
  description:
    "CIL Recyclage structure son intervention locale autour de Villaines-sous-Bois, Viarmes, Belloy-en-France, Montsoult, Baillet-en-France, Domont et Luzarches pour le rachat de metaux et la ferraille.",
  alternates: { canonical: url },
  openGraph: {
    title: "Rachat Metaux Carnelle Pays-de-France - Bassin local CIL Recyclage",
    description:
      "Villaines-sous-Bois, Viarmes, Belloy-en-France, Montsoult, Baillet-en-France, Domont et Luzarches : le bassin local prioritaire de CIL Recyclage.",
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

const localCities = [
  { label: "Viarmes", slug: "ferrailleur-viarmes" },
  { label: "Belloy-en-France", slug: "ferrailleur-belloy-en-france" },
  { label: "Montsoult", slug: "ferrailleur-montsoult" },
  { label: "Baillet-en-France", slug: "ferrailleur-baillet-en-france" },
  { label: "Domont", slug: "ferrailleur-domont" },
  { label: "Luzarches", slug: "ferrailleur-luzarches" },
];

const serviceLinks = [
  { label: "Rachat de metaux", slug: "rachat-de-metaux" },
  { label: "Recyclage ferrailles", slug: "recyclage-ferrailles" },
  { label: "Enlevement chantier", slug: "enlevement-chantier" },
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
            Rachat de metaux sur le bassin Carnelle Pays-de-France
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            CIL Recyclage s&apos;appuie sur un ancrage tres local autour de
            Villaines-sous-Bois, Viarmes, Belloy-en-France, Montsoult,
            Baillet-en-France, Domont et Luzarches. Ce bassin nous donne une
            vraie coherence terrain pour les apports au depot, les artisans, les
            renovateurs et les demandes de collecte metal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Un territoire logique depuis Villaines-sous-Bois
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Notre depot de Villaines-sous-Bois nous place naturellement sur
                l&apos;axe D909, avec une extension solide vers la Croix Verte, la
                RD301, la N104 et l&apos;A16. Cette implantation donne du sens a un
                maillage local resserre plutot qu&apos;a une couverture artificielle
                de tout l&apos;ouest du 95.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Le bassin Carnelle Pays-de-France melange habitat pavillonnaire,
                petites entreprises, ateliers, zones d&apos;activite et chantiers de
                renovation. C&apos;est un terrain favorable au cuivre, au laiton, a
                l&apos;aluminium, au zinc, aux radiateurs, aux cables et a la
                ferraille de depose.
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
                    Renovation de pavillon, remplacement de chauffage,
                    demontage de portail, debarras de garage et depose
                    d&apos;
                    tuyauteries ou radiateurs.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">Artisans et PME</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Chutes de chantier, depose technique, lots mixtes a trier,
                    accumulation de ferraille et besoins ponctuels d&apos;enlevement
                    ou de logistique metal.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Pages locales prioritaires
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {localCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#FFD7B5] hover:bg-[#FFF3E8] hover:text-[#D95F02]"
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#121212] p-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#F47A20]">
                Point d&apos;appui local
              </p>
              <h2 className="mt-3 text-xl font-extrabold">
                Depot de Villaines-sous-Bois
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Base locale pour les apports, l&apos;orientation des lots et les
                demandes de collecte metal sur le nord du Val-d&apos;Oise.
              </p>
              <PhoneLink className="mt-6 inline-flex rounded-full bg-[#F47A20] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#D95F02]">
                Appeler le depot - {SITE.phone}
              </PhoneLink>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Maillage utile
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <Link href="/ferrailleur-val-doise-95" className="block font-semibold text-[#F47A20] hover:text-[#D95F02]">
                  Val-d&apos;Oise (95)
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
