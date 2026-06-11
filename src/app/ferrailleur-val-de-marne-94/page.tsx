import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { valDeMarne94 } from "@/content/departments/val-de-marne-94";

export const metadata: Metadata = {
  title: valDeMarne94.meta.title,
  description: valDeMarne94.meta.description,
};

export default function ValDeMarne94Page() {
  return <DepartmentPageTemplate content={valDeMarne94} />;
}
