import Image from "next/image";
import Link from "next/link";
import { ALL_CITIES, NEARBY_DEPARTMENTS, EXTENDED_DEPARTMENTS } from "@/content";
import { PRIORITY_METALS, SITE } from "@/content/site";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function Footer() {
  return (
    <footer className="border-t border-[#232323] bg-[#121212] text-[#A3A3A3]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src={SITE.logoPath}
            alt={SITE.name}
            width={180}
            height={72}
            className="mb-4 h-auto w-36"
          />
          <p className="text-sm leading-6">
            Dépôt de rachat de métaux à Villaines-sous-Bois. Cuivre, laiton,
            aluminium, ferraille et métaux spéciaux pour particuliers,
            artisans et professionnels.
          </p>
          <address className="mt-4 not-italic space-y-1 text-sm">
            <p>{SITE.address.streetAddress}</p>
            <p>
              {SITE.address.postalCode} {SITE.address.addressLocality}
            </p>
            <p className="text-[#FFD7B5]">{SITE.accessNote}</p>
            <p>Lun–Ven 8h–17h · Sam 8h–12h</p>
            <PhoneLink
              className="mt-2 inline-block font-bold text-[#F47A20] hover:text-[#FFD7B5]"
            >
              {SITE.phone}
            </PhoneLink>
            <span className="ml-2 text-xs text-[#6B7280]">contact</span>
            {SITE.email && (
              <>
                <br />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[#F47A20] hover:text-[#FFD7B5]"
                >
                  {SITE.email}
                </a>
              </>
            )}
          </address>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Départements
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NEARBY_DEPARTMENTS.map((dept) => (
              <li key={dept.slug}>
                <Link href={`/${dept.slug}`} className="hover:text-[#F47A20]">
                  Ferrailleur {dept.nom} ({dept.code})
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-3 space-y-2 border-t border-[#232323] pt-3 text-sm">
            {EXTENDED_DEPARTMENTS.map((dept) => (
              <li key={dept.slug}>
                <Link href={`/${dept.slug}`} className="hover:text-[#F47A20]">
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
          <div className="mt-4">
            <Link
              href="/rachat-metaux-carnelle-pays-de-france"
              className="text-sm font-semibold text-[#F47A20] hover:text-[#FFD7B5]"
            >
              Bassin Carnelle Pays-de-France
            </Link>
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {ALL_CITIES.map((city) => (
              <li key={city.slug}>
                <Link href={`/${city.slug}`} className="hover:text-[#F47A20]">
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

      <div className="border-t border-[#232323] px-4 py-4 text-center text-xs text-[#6B7280] sm:px-6">
        © {new Date().getFullYear()} {SITE.name} — Ferrailleur
        Villaines-sous-Bois, Île-de-France
      </div>
    </footer>
  );
}
