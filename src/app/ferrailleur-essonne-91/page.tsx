import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { essonne91 } from "@/content/departments/essonne-91";

export const metadata: Metadata = {
  title: essonne91.meta.title,
  description: essonne91.meta.description,
};

export default function Essonne91Page() {
  return <DepartmentPageTemplate content={essonne91} />;
}
