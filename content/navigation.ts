export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export const productNav: NavLink[] = [
  { label: "Raw Materials", href: "/raw-materials" },
  { label: "Finished Paper Packaging", href: "/finished-paper-packaging" },
  { label: "Industrial Chemicals", href: "/industrial-chemicals" },
  { label: "Export Division", href: "/export-division" },
];

export const contactLink: NavLink = {
  label: "Contact Us",
  href: "/contact-us",
};

export const footerNav: NavLink[] = [
  ...mainNav,
  { label: "Products", href: "/raw-materials" },
];

export const allRoutes: string[] = [...mainNav, ...productNav, contactLink].map(
  (link) => link.href,
);
