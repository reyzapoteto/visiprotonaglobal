import { CategoryPage } from "@/components/sections/CategoryPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Export Division",
  description: "Export support for paper products and related materials.",
  path: "/export-division",
});

export default function ExportDivisionPage() {
  return <CategoryPage slug="export-division" />;
}
