export const site = {
  name: "Visi Protona Global",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://visiprotonaglobal.com",
  tagline: "Reliable Kraft Paper Roll Supply & Import Services",
  description:
    "Indonesia's trusted supplier of kraft paper, duplex board, and custom packaging. Ready stock, on-time delivery, and import services on behalf of clients.",
  email: "sales@visiprotonaglobal.com",
  phone: { display: "(+62) 813 1950 6815", href: "+6281319506815" },
  // TODO(verify): the Figma text contains "RT. 000 RW. 000"; the live site uses
  // "Jalan Taman Tekno BSD Sektor XI Blok O2 No 16 ... 15314". Pick one.
  address:
    "Jalan Taman Tekno BSD Sektor XI Blok 02 No 16 RT. 000 RW. 000, Setu, Setu, Kota Tangerang Selatan, Banten",
  // TODO(verify): Figma shows a third card repeating "Years Industry Experience".
  stats: [
    {
      label: "Years Industry Experience",
      value: 28,
      suffix: "+",
      icon: "/images/icons/buildings.svg",
    },
    {
      label: "Clients Served",
      value: 100,
      suffix: "+",
      icon: "/images/icons/users.svg",
    },
  ],
  // TODO(verify): social profile URLs are not in the design.
  socials: [
    { label: "X", href: "#", icon: "/images/icons/x.svg" },
    { label: "Facebook", href: "#", icon: "/images/icons/facebook.svg" },
    { label: "Instagram", href: "#", icon: "/images/icons/instagram.svg" },
  ],
} as const;
