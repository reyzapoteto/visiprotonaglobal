export const site = {
  name: "Visi Protona Global",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://visiprotonaglobal.com",
  tagline: "Reliable Kraft Paper Roll Supply & Import Services",
  description:
    "Indonesia's trusted supplier of kraft paper, duplex board, and custom packaging. Ready stock, on-time delivery, and import services on behalf of clients.",
  email: "sales@visiprotonaglobal.com",
  phone: { display: "(+62) 813 1950 6815", href: "+6281319506815" },
  address:
    "Jalan Taman Tekno BSD Sektor XI Blok O2 No 16, Setu, Kec. Setu, Kota Tangerang Selatan, Banten 15314, Indonesia",
  // The live site and the Figma design both show three cards, the third
  // repeating "Years Industry Experience".
  stats: [
    {
      id: "experience",
      label: "Years Industry Experience",
      value: 28,
      suffix: "+",
      icon: "/images/icons/buildings.svg",
    },
    {
      id: "clients",
      label: "Clients Served",
      value: 100,
      suffix: "+",
      icon: "/images/icons/users.svg",
    },
    {
      id: "experience-repeat",
      label: "Years Industry Experience",
      value: 28,
      suffix: "+",
      icon: "/images/icons/buildings.svg",
    },
  ],
} as const;
