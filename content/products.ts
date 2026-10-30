import { asset } from "@/lib/assets";

export type ProductCategory = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  image: string;
  intro: string;
  items: { title: string; description: string }[];
};

// Order matches the homepage cards.
// TODO(verify): summaries, intros, and items are drafts. Replace with the copy
// from each category page on the live site.
export const productCategories: ProductCategory[] = [
  {
    slug: "raw-materials",
    href: "/raw-materials",
    title: "Raw Materials",
    summary:
      "Kraft paper rolls and duplex board in a wide range of widths and weights.",
    image: asset("Frame-21-1024x909.jpg"),
    intro:
      "Kraft paper rolls in widths from 500 to 2,400 mm and weights from 60 to 200+ gsm, supplied from ready stock.",
    items: [
      {
        title: "Kraft Paper Roll",
        description:
          "Widths 500–2,400 mm, 60–200+ gsm. Custom sizes on request.",
      },
      {
        title: "Duplex Board",
        description: "Rigid board for packaging and printing applications.",
      },
    ],
  },
  {
    slug: "industrial-chemicals",
    href: "/industrial-chemicals",
    title: "Industrial Chemicals",
    summary: "Industrial chemicals for manufacturing and packaging needs.",
    image: asset("Frame-17-1024x909.jpg"),
    intro: "Industrial chemicals for manufacturing and packaging needs.",
    items: [],
  },
  {
    slug: "export-division",
    href: "/export-division",
    title: "Export Division",
    summary: "Export support for paper products and related materials.",
    image: asset("Frame-21-1-1024x909.jpg"),
    intro: "Export support for paper products and related materials.",
    items: [],
  },
  {
    slug: "finished-paper-packaging",
    href: "/finished-paper-packaging",
    title: "Finished Paper Packaging",
    summary: "Ready-to-use paper bags and custom packaging.",
    image: asset("Frame-17-1-1024x909.jpg"),
    intro: "Ready-to-use paper bags and custom packaging for your business.",
    items: [
      {
        title: "Paper Bags",
        description:
          "Eco-friendly kraft paper bags for retail and food service.",
      },
      {
        title: "Custom Packaging",
        description: "Packaging made to your size and branding requirements.",
      },
    ],
  },
];

export function getCategory(slug: string): ProductCategory {
  const category = productCategories.find((item) => item.slug === slug);
  if (!category) throw new Error(`Unknown product category: ${slug}`);
  return category;
}
