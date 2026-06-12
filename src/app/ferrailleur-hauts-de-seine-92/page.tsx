import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { hautsDeSeine92 } from "@/content/departments/hauts-de-seine-92";
import { SITE } from "@/content/site";

const url = `${SITE.url}/ferrailleur-hauts-de-seine-92`;

export const metadata: Metadata = {
  title: hautsDeSeine92.meta.title,
  description: hautsDeSeine92.meta.description,
  alternates: { canonical: url },
  openGraph: {
    title: hautsDeSeine92.meta.title,
    description: hautsDeSeine92.meta.description,
    url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: hautsDeSeine92.meta.title,
    description: hautsDeSeine92.meta.description,
  },
};

export default function HautsDeSeine92Page() {
  return <DepartmentPageTemplate content={hautsDeSeine92} />;
}
