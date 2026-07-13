import type { GuideContent } from "@/content/types";
import { SITE } from "@/content/site";

interface LocalBusinessJsonLdProps {
  city?: string;
  pageUrl?: string;
}

export function LocalBusinessJsonLd({
  city,
  pageUrl,
}: LocalBusinessJsonLdProps) {
  const telephones = [SITE.phone];
  const mapQuery = encodeURIComponent(
    [
      SITE.address.streetAddress,
      SITE.address.postalCode,
      SITE.address.addressLocality,
      SITE.address.addressCountry,
    ].join(", "),
  );
  const areaServed = city
    ? [
        {
          "@type": "City",
          name: city,
        },
        {
          "@type": "AdministrativeArea",
          name: "Val-d'Oise",
        },
      ]
    : [
        {
          "@type": "AdministrativeArea",
          name: "Val-d'Oise",
        },
        {
          "@type": "AdministrativeArea",
          name: "Île-de-France",
        },
      ];

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RecyclingCenter"],
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    description: SITE.tagline,
    disambiguatingDescription: `${SITE.name}, ${SITE.address.streetAddress}, ${SITE.address.postalCode} ${SITE.address.addressLocality}. ${SITE.accessNote}.`,
    url: pageUrl ?? SITE.url,
    telephone: telephones,
    email: SITE.email ?? undefined,
    image: `${SITE.url}${SITE.logoPath}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.addressRegion,
      addressCountry: SITE.address.addressCountry,
    },
    geo: SITE.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        }
      : undefined,
    openingHours: SITE.openingHours,
    areaServed,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        areaServed: ["Val-d'Oise", "Île-de-France"],
        availableLanguage: ["fr"],
      },
    ],
    knowsLanguage: ["fr"],
    priceRange: "€€",
    sameAs: SITE.sameAs.length > 0 ? SITE.sameAs : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({ guide }: { guide: GuideContent }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    image: guide.image ? `${SITE.url}${guide.image}` : undefined,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    url: `${SITE.url}/guides/${guide.slug}`,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}${SITE.logoPath}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/guides/${guide.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqPageJsonLd({
  faq,
}: {
  faq: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE.url}${item.href}` : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
