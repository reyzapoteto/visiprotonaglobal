export type ProductCategory = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  image: string;
  intro: string;
  items: { title: string; description: string }[];
};

// Order matches the homepage grid. Titles, summaries, and images come from Figma.
// TODO(verify): intros and items are drafts until the Product pages are built
// from Figma.
export const productCategories: ProductCategory[] = [
  {
    slug: "raw-materials",
    href: "/raw-materials",
    title: "Raw Materials",
    summary:
      "Quality packaging foundations from selected raw materials for every industrial need.",
    image: "/images/product-raw-materials.jpg",
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
    summary:
      "Precision-engineered chemical solutions powering efficient and high-performance paper production.",
    image: "/images/product-industrial-chemicals.jpg",
    intro: "Industrial chemicals for manufacturing and packaging needs.",
    items: [],
  },
  {
    slug: "export-division",
    href: "/export-division",
    title: "Export Division",
    summary:
      "Global-ready industrial and specialty paper solutions built for demanding markets worldwide.",
    image: "/images/product-export-division.jpg",
    intro: "Export support for paper products and related materials.",
    items: [],
  },
  {
    slug: "finished-paper-packaging",
    href: "/finished-paper-packaging",
    title: "Finished Paper Packaging",
    summary:
      "Complete packaging solutions crafted from quality paper for every product and industry.",
    image: "/images/product-finished-packaging.jpg",
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
