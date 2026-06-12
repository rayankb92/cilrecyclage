import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPageTemplate } from "@/components/pages/CityPageTemplate";
import { ALL_CITIES, getCityBySlug } from "@/content";
import { SITE } from "@/content/site";

interface CityPageProps {
  params: Promise<{ citySlug: string }>;
}

export async function generateStaticParams() {
  return ALL_CITIES.map((city) => ({ citySlug: city.slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {};
  }

  const url = `${SITE.url}/${city.slug}`;

  return {
    title: city.meta.title,
    description: city.meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: city.meta.title,
      description: city.meta.description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: city.meta.title,
      description: city.meta.description,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  return <CityPageTemplate content={city} />;
}
