import type { MetadataRoute } from "next";
import { ALL_CITIES, ALL_DEPARTMENTS, ALL_GUIDES, ALL_SERVICES } from "@/content";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const home: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/infos-pratiques`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const departments: MetadataRoute.Sitemap = ALL_DEPARTMENTS.map((dept) => ({
    url: `${baseUrl}/${dept.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const cities: MetadataRoute.Sitemap = ALL_CITIES.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: city.phase === 1 ? 0.8 : 0.6,
  }));

  const prestationsIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/prestations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const services: MetadataRoute.Sitemap = ALL_SERVICES.map((s) => ({
    url: `${baseUrl}/prestations/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guides: MetadataRoute.Sitemap = ALL_GUIDES.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(g.dateModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guideIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [...home, ...departments, ...cities, ...prestationsIndex, ...services, ...guides, ...guideIndex];
}
