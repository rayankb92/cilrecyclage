import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { hautsDeSeine92 } from "@/content/departments/hauts-de-seine-92";

export const metadata: Metadata = {
  title: hautsDeSeine92.meta.title,
  description: hautsDeSeine92.meta.description,
};

export default function HautsDeSeine92Page() {
  return <DepartmentPageTemplate content={hautsDeSeine92} />;
}
