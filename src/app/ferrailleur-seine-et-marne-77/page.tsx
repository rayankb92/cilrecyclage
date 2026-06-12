import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { seineEtMarne77 } from "@/content/departments/seine-et-marne-77";
import { SITE } from "@/content/site";

const url = `${SITE.url}/ferrailleur-seine-et-marne-77`;

export const metadata: Metadata = {
  title: seineEtMarne77.meta.title,
  description: seineEtMarne77.meta.description,
  alternates: { canonical: url },
  openGraph: {
    title: seineEtMarne77.meta.title,
    description: seineEtMarne77.meta.description,
    url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: seineEtMarne77.meta.title,
    description: seineEtMarne77.meta.description,
  },
};

export default function SeineEtMarne77Page() {
  return <DepartmentPageTemplate content={seineEtMarne77} />;
}
