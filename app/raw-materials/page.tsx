import { CategoryPage } from "@/components/sections/CategoryPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Raw Materials",
  description:
    "Kraft paper rolls and duplex board in widths from 500 to 2,400 mm and 60 to 200+ gsm.",
  path: "/raw-materials",
});

export default function RawMaterialsPage() {
  return <CategoryPage slug="raw-materials" />;
}
