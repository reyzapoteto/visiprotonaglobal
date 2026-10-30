import { CategoryPage } from "@/components/sections/CategoryPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Finished Paper Packaging",
  description: "Ready-to-use paper bags and custom packaging.",
  path: "/finished-paper-packaging",
});

export default function FinishedPaperPackagingPage() {
  return <CategoryPage slug="finished-paper-packaging" />;
}
