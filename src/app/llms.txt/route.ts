import { ALL_CITIES, ALL_DEPARTMENTS, ALL_GUIDES, ALL_SERVICES } from "@/content";
import { SITE } from "@/content/site";

const topCities = ALL_CITIES.filter((city) => city.phase === 1)
  .map((city) => `- ${city.ville}: ${SITE.url}/${city.slug}`)
  .join("\n");

const departments = ALL_DEPARTMENTS.map(
  (dept) => `- ${dept.nom} (${dept.code}): ${SITE.url}/${dept.slug}`,
).join("\n");

const services = ALL_SERVICES.map(
  (service) => `- ${service.nav}: ${SITE.url}/prestations/${service.slug}`,
).join("\n");

const guides = ALL_GUIDES.map(
  (guide) => `- ${guide.title}: ${SITE.url}/guides/${guide.slug}`,
).join("\n");

const body = `# ${SITE.name}

> ${SITE.tagline}

${SITE.name} est un ferrailleur et centre de rachat de metaux base a Villaines-sous-Bois (95570), dans le Val-d'Oise, avec intervention locale et en Ile-de-France selon les volumes.

## Depot principal

- Nom: ${SITE.name}
- Adresse: ${SITE.address.streetAddress}, ${SITE.address.postalCode} ${SITE.address.addressLocality}, ${SITE.address.addressRegion}, France
- Acces: ${SITE.accessNote}
- Repere: ${SITE.landmarkName}
- Telephone: ${SITE.phone}
- Horaires: ${SITE.openingHours}
- Site principal: ${SITE.url}
- Sitemap: ${SITE.url}/sitemap.xml

## Pages prioritaires

- Accueil: ${SITE.url}/
- Infos pratiques: ${SITE.url}/infos-pratiques
- Hub local Carnelle Pays-de-France: ${SITE.url}/rachat-metaux-carnelle-pays-de-france
- Val-d'Oise 95: ${SITE.url}/ferrailleur-val-doise-95

## Villes prioritaires

${topCities}

## Departements

${departments}

## Prestations

${services}

## Guides

${guides}
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
