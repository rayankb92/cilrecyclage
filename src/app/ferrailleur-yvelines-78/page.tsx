import type { Metadata } from "next";
import { DepartmentPageTemplate } from "@/components/pages/DepartmentPageTemplate";
import { yvelines78 } from "@/content/departments/yvelines-78";

export const metadata: Metadata = {
  title: yvelines78.meta.title,
  description: yvelines78.meta.description,
};

export default function Yvelines78Page() {
  return <DepartmentPageTemplate content={yvelines78} />;
}
