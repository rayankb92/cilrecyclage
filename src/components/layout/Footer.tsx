import Image from "next/image";
import Link from "next/link";
import { ALL_CITIES, NEARBY_DEPARTMENTS, EXTENDED_DEPARTMENTS } from "@/content";
import { PRIORITY_METALS, SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/logo-valmetaux.png"
            alt="VALMETAUX"
            width={120}
            height={78}
            className="mb-4"
          />
          <p className="text-sm leading-6">
            Centre de récupération de métaux à Argenteuil. Rachat cuivre,
            laiton, aluminium, ferraille et métaux spéciaux.
          </p>
          <address className="mt-4 not-italic space-y-1 text-sm">
            <p>{SITE.address.streetAddress}</p>
            <p>
              {SITE.address.postalCode} {SITE.address.addressLocality}
            </p>
            <p>Lun–Ven 8h–17h · Sam 8h–12h</p>
            <a
              href={`tel:${SITE.phoneLandline.replace(/\s/g, "")}`}
              className="mt-2 inline-block font-bold text-amber-400 hover:text-amber-300"
            >
              {SITE.phoneLandline}
            </a>
            <span className="ml-2 text-xs text-slate-600">fixe</span>
            <br />
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="font-semibold text-slate-400 hover:text-amber-300"
            >
              {SITE.phone}
            </a>
            <span className="ml-2 text-xs text-slate-600">mobile</span>
            <br />
            <a
              href={`mailto:${SITE.email}`}
              className="text-amber-400 hover:text-amber-300"
            >
              {SITE.email}
            </a>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Départements
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NEARBY_DEPARTMENTS.map((dept) => (
              <li key={dept.slug}>
                <Link href={`/${dept.slug}`} className="hover:text-amber-400">
                  Ferrailleur {dept.nom} ({dept.code})
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-3 space-y-2 border-t border-slate-800 pt-3 text-sm">
            {EXTENDED_DEPARTMENTS.map((dept) => (
              <li key={dept.slug}>
                <Link href={`/${dept.slug}`} className="hover:text-amber-400">
                  Ferrailleur {dept.nom} ({dept.code})
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Communes couvertes
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {ALL_CITIES.map((city) => (
              <li key={city.slug}>
                <Link href={`/${city.slug}`} className="hover:text-amber-400">
                  {city.ville}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Métaux rachetés
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {PRIORITY_METALS.map((metal) => (
              <li key={metal.slug}>{metal.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-600 sm:px-6">
        © {new Date().getFullYear()} {SITE.name} — Ferrailleur Argenteuil,
        Île-de-France
      </div>
    </footer>
  );
}
