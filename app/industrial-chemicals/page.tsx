import { CategoryPage } from "@/components/sections/CategoryPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industrial Chemicals",
  description: "Industrial chemicals for manufacturing and packaging needs.",
  path: "/industrial-chemicals",
});

export default function IndustrialChemicalsPage() {
  return <CategoryPage slug="industrial-chemicals" />;
}
