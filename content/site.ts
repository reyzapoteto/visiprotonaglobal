export const site = {
  name: "Visi Protona Global",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://visiprotonaglobal.com",
  tagline: "Reliable Kraft Paper Roll Supply & Import Services",
  description:
    "Indonesia's trusted supplier of kraft paper, duplex board, and custom packaging. Ready stock, on-time delivery, and import services on behalf of clients.",
  email: "sales@visiprotonaglobal.com",
  phone: { display: "(+62) 813 1950 6815", href: "+6281319506815" },
  address: "BSD, Tangerang Selatan, Banten, Indonesia",
  // TODO(verify): placeholder numbers; the live site animates these counters.
  stats: [
    { label: "Years Industry Experience", value: 10, suffix: "+" },
    { label: "Clients Served", value: 100, suffix: "+" },
  ],
} as const;
