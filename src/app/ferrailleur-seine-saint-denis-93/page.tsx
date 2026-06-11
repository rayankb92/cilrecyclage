import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { seineSaintDenis93 } from "@/content/departments/seine-saint-denis-93";

export const metadata: Metadata = {
  title: seineSaintDenis93.meta.title,
  description: seineSaintDenis93.meta.description,
};

export default function SeineSaintDenis93Page() {
  return <DepartmentPageTemplate content={seineSaintDenis93} />;
}
