export type ProductItem = {
  title: string;
  description: string;
  image: string;
};

export type ProductGroup = {
  title?: string;
  /** Cards per row on desktop; 2 renders large cards. */
  columns: 2 | 3 | 4;
  /** Draw a divider above this group. */
  divided?: boolean;
  items: ProductItem[];
};

export type ProductHighlight = {
  title: string;
  description: string;
  icon: string;
};

export type ProductCategory = {
  slug: string;
  href: string;
  title: string;
  /** Short text on the homepage card. */
  summary: string;
  /** Image on the homepage card. */
  image: string;
  heroImage: string;
  featured?: ProductItem & { highlights: ProductHighlight[] };
  groups: ProductGroup[];
};

const img = (name: string) => `/images/products/${name}.jpg`;

// Order matches the homepage grid. Everything comes from the Figma design.
// TODO(verify): the Industrial Chemicals and Export Division heroes are plain
// photos, not the cutouts from Figma; soap-noodles.jpg is still missing; and the
// desktop layout of those two pages was built from their mobile frames.
export const productCategories: ProductCategory[] = [
  {
    slug: "raw-materials",
    href: "/raw-materials",
    title: "Raw Materials",
    summary:
      "Quality packaging foundations from selected raw materials for every industrial need.",
    image: "/images/product-raw-materials.jpg",
    heroImage: img("hero-raw-materials"),
    featured: {
      title: "Sack Kraft Paper (Virgin & Recycled)",
      description:
        "High-strength paper engineered for heavy-duty industrial packaging. Available in both virgin and recycled grades to suit sustainability goals and cost requirements, with excellent tear resistance and burst strength.",
      image: img("sack-kraft-paper"),
      highlights: [
        {
          title: "Natural Grade",
          description:
            "Unbleached sack kraft in its natural brown form, offering superior tensile strength and durability for demanding multi-wall bag applications such as cement, flour, and chemical packaging.",
          icon: "/images/icons/potted-plant.svg",
        },
        {
          title: "Semi-Extensible Grade",
          description:
            "Enhanced with extensibility properties that allow the paper to absorb impact and resist bursting under dynamic loads, ideal for automated filling lines and valve bags.",
          icon: "/images/icons/arrows-out-simple.svg",
        },
        {
          title: "High-Porosity Grade",
          description:
            "Specially manufactured with controlled air permeability to allow rapid de-aeration during high-speed filling, ensuring faster packing cycles and reduced bag breakage.",
          icon: "/images/icons/wind.svg",
        },
      ],
    },
    groups: [
      {
        columns: 3,
        items: [
          {
            title: "Bleached Sack Kraft Paper",
            description:
              "A bright white variant of sack kraft paper, combining the same structural strength with a clean, printable surface — ideal for consumer-facing packaging that requires both performance and aesthetic appeal.",
            image: img("bleached-sack-kraft-paper"),
          },
          {
            title: "Kraft Liner Board",
            description:
              "Robust linerboard produced from kraft pulp, used as the facing layer in corrugated board manufacturing. Delivers high stacking strength, moisture resistance, and consistent caliper for reliable box performance",
            image: img("kraft-liner-board"),
          },
          {
            title: "Duplex and Ivory Board",
            description:
              "Premium coated board with a bright white surface on one or both sides, providing an excellent base for high-resolution printing. Widely used in folding cartons, cosmetic packaging, and retail displays.",
            image: img("duplex-and-ivory-board"),
          },
        ],
      },
      {
        columns: 3,
        items: [
          {
            title: "Label Stickers",
            description:
              "Self-adhesive label stock available in various face materials and adhesive types, suitable for product labelling, barcode printing, and promotional sticker applications across food, industrial.",
            image: img("label-stickers"),
          },
          {
            title: "Wet-Strength Paper",
            description:
              "Specially treated paper that retains a significant portion of its strength when wet, making it ideal for applications such as meat wrap, produce bags, liquid-filled containers, and outdoor labelling",
            image: img("wet-strength-paper"),
          },
          {
            title: "PET Film",
            description:
              "Transparent polyethylene terephthalate film offering exceptional clarity, dimensional stability, and barrier properties. Used as a lamination substrate, window patch material, and protective layer in flexible packaging.",
            image: img("pet-film"),
          },
        ],
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
    heroImage: img("hero-industrial-chemicals"),
    groups: [
      {
        columns: 2,
        items: [
          {
            title: "Hotmelt Adhesives",
            description:
              "Fast-setting thermoplastic adhesives designed for high-speed converting and packaging lines. Provide strong, durable bonds on paper, board, and film substrates with excellent heat and cold resistance.",
            image: img("hotmelt-adhesives"),
          },
          {
            title: "Fatty Alcohol Ethoxylates",
            description:
              "Non-ionic surfactants derived from natural fatty alcohols, used as wetting agents, emulsifiers, and dispersants in pulp processing and paper coating formulations.",
            image: img("fatty-alcohol-ethoxylates"),
          },
        ],
      },
      {
        columns: 3,
        items: [
          {
            title: "Soap Noodles",
            description:
              "High-purity saponified fatty acid bases used in the manufacture of bar soaps and as a raw material input in various oleochemical processing applications.",
            image: img("soap-noodles"),
          },
          {
            title: "Alkyl Ketene Dimer (AKD)",
            description:
              "A reactive sizing agent applied during paper manufacturing to impart water repellency and control ink absorption. Essential for producing papers with controlled surface energy for writing, printing, and packaging applications",
            image: img("alkyl-ketene-dimer"),
          },
          {
            title: "Surfactants",
            description:
              "A broad range of surface-active agents that reduce surface tension in pulp slurries, coating formulations, and cleaning processes — improving runnability, drainage, and coating uniformity across the paper machine.",
            image: img("surfactants"),
          },
        ],
      },
    ],
  },
  {
    slug: "export-division",
    href: "/export-division",
    title: "Export Division",
    summary:
      "Global-ready industrial and specialty paper solutions built for demanding markets worldwide.",
    image: "/images/product-export-division.jpg",
    heroImage: img("hero-export-division"),
    groups: [
      {
        title: "Industrial Material Group",
        columns: 2,
        items: [
          {
            title: "White Top Liner Board",
            description:
              "A kraft liner with a bright white-coated top surface, combining the structural integrity of brown kraft with a high-quality printable face. The preferred choice for premium corrugated boxes where branding and print quality matter",
            image: img("white-top-liner-board"),
          },
          {
            title: "Saturating Kraft Paper",
            description:
              "An unbleached kraft paper with an open, highly absorbent structure engineered to fully saturate with resin during High-Pressure Laminate (HPL) production. Also used in decorative overlays and interior panel manufacturing.",
            image: img("saturating-kraft-paper"),
          },
        ],
      },
      {
        title: "Technical & Business Paper Group",
        columns: 4,
        divided: true,
        items: [
          {
            title: "Laid Paper",
            description:
              "A textured paper characterised by its distinctive parallel line pattern, conveying professionalism and heritage. Commonly used for official corporate letterheads, legal documents, certificates, and premium stationery.",
            image: img("laid-paper"),
          },
          {
            title: "Carbonless Paper (NCR)",
            description:
              "No-carbon-required (NCR) paper uses microencapsulated dyes to transfer writing or impact printing without the need for carbon interleaves. Ideal for multi-part business forms, invoices, delivery notes, and receipts.",
            image: img("carbonless-paper"),
          },
          {
            title: "Sublimation Paper (Sticky)",
            description:
              "A specialised heat-transfer paper with a light-tack adhesive backing that keeps the paper firmly in place during the sublimation printing process, preventing ghosting. Designed for sportswear, performance apparel, and cut-piece fabric printing.",
            image: img("sublimation-paper"),
          },
          {
            title: "Greaseproof Paper",
            description:
              "A densely refined paper with inherent resistance to oils and fats, produced without chemical coatings. Suitable for direct food contact and used extensively in bakery wrapping, burger sheets, and food service packaging.",
            image: img("greaseproof-paper"),
          },
        ],
      },
    ],
  },
  {
    slug: "finished-paper-packaging",
    href: "/finished-paper-packaging",
    title: "Finished Paper Packaging",
    summary:
      "Complete packaging solutions crafted from quality paper for every product and industry.",
    image: "/images/product-finished-packaging.jpg",
    heroImage: img("hero-raw-materials"),
    groups: [
      {
        columns: 2,
        items: [
          {
            title: "Shopping Bags",
            description:
              "Stylish and sturdy kraft paper shopping bags available with twisted or flat rope handles. Customisable in size, finish, and print for retail, boutique, and promotional use — combining brand presence with eco-friendly credentials.",
            image: img("shopping-bags"),
          },
          {
            title: "Food Bags",
            description:
              "Versatile paper bags designed for food-safe packaging of bakery goods, snacks, takeaway meals, and grocery items. Available in various closures and liners to meet hygiene and freshness requirements.",
            image: img("food-bags"),
          },
          {
            title: "Corrugated Bags / Boxes",
            description:
              "Lightweight yet highly protective corrugated packaging for shipping, storage, and e-commerce fulfilment. Engineered for optimal stacking strength and cushioning, available in standard and custom configurations",
            image: img("corrugated-bags-boxes"),
          },
          {
            title: "Cement Bags",
            description:
              "Heavy-duty multi-wall sack kraft bags purpose-built to withstand the weight, abrasion, and moisture exposure of bulk cement and construction materials. Designed for reliable performance on automated filling and palletising lines",
            image: img("cement-bags"),
          },
        ],
      },
    ],
  },
];

export function getCategory(slug: string): ProductCategory {
  const category = productCategories.find((item) => item.slug === slug);
  if (!category) throw new Error(`Unknown product category: ${slug}`);
  return category;
}
