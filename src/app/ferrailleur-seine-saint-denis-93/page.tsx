import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { seineSaintDenis93 } from "@/content/departments/seine-saint-denis-93";
import { SITE } from "@/content/site";

const url = `${SITE.url}/ferrailleur-seine-saint-denis-93`;

export const metadata: Metadata = {
  title: seineSaintDenis93.meta.title,
  description: seineSaintDenis93.meta.description,
  alternates: { canonical: url },
  openGraph: {
    title: seineSaintDenis93.meta.title,
    description: seineSaintDenis93.meta.description,
    url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: seineSaintDenis93.meta.title,
    description: seineSaintDenis93.meta.description,
  },
};

export default function SeineSaintDenis93Page() {
  return <DepartmentPageTemplate content={seineSaintDenis93} />;
}
