import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { essonne91 } from "@/content/departments/essonne-91";
import { SITE } from "@/content/site";

const url = `${SITE.url}/ferrailleur-essonne-91`;

export const metadata: Metadata = {
  title: essonne91.meta.title,
  description: essonne91.meta.description,
  alternates: { canonical: url },
  openGraph: {
    title: essonne91.meta.title,
    description: essonne91.meta.description,
    url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: essonne91.meta.title,
    description: essonne91.meta.description,
  },
};

export default function Essonne91Page() {
  return <DepartmentPageTemplate content={essonne91} />;
}
