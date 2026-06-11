import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_GUIDES, getGuideBySlug } from "@/content";
import { GuidePageTemplate } from "@/components/pages/GuidePageTemplate";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ALL_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.meta.title,
    description: guide.meta.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      title: guide.meta.title,
      description: guide.meta.description,
      type: "article",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      images: guide.image ? [{ url: guide.image }] : undefined,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuidePageTemplate guide={guide} />;
}
