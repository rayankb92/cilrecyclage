import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SERVICES, getServiceBySlug } from "@/content";
import { ServicePageTemplate } from "@/components/pages/ServicePageTemplate";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: { canonical: `/prestations/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate content={service} />;
}
