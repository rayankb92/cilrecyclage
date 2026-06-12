import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { valDoise95 } from "@/content/departments/val-doise-95";
import { SITE } from "@/content/site";

const url = `${SITE.url}/ferrailleur-val-doise-95`;

export const metadata: Metadata = {
  title: valDoise95.meta.title,
  description: valDoise95.meta.description,
  alternates: { canonical: url },
  openGraph: {
    title: valDoise95.meta.title,
    description: valDoise95.meta.description,
    url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: valDoise95.meta.title,
    description: valDoise95.meta.description,
  },
};

export default function ValDoise95Page() {
  return <DepartmentPageTemplate content={valDoise95} />;
}
