import { site } from "@/content/site";

export const pageCta = {
  title: "Interested in kraft paper solutions?",
  button: "Contact Us",
} as const;

export const aboutPage = {
  hero: {
    accent: "About",
    title: "Us",
    description:
      "From raw materials to finished packaging, PT Visi Protona Global provides seamless distribution of high-quality kraft paper, tailored to your business needs.",
    image: "/images/about-hero.png",
    imageAlt: "Kraft paper rolls in a warehouse",
  },
  intro: {
    label: "About Us",
    title: "Who We Are",
    lead: "PT Visi Protona Global (VPG) is an Indonesian-based company dedicated to bridging the gap between kraft paper manufacturers and businesses across a variety of industries.",
    body: "From raw materials like Kraft and Ivory/Duplex paper to finished packaging such as food bags and corrugated boxes — our goal is to offer flexible, eco-conscious solutions tailored to every business need.",
    images: [
      { src: "/images/about-1.jpg", alt: "Kraft paper production" },
      { src: "/images/about-2.jpg", alt: "Paper roll storage" },
      { src: "/images/about-3.jpg", alt: "Finished paper packaging" },
    ],
  },
  mission: {
    label: "Our Mission",
    title: "Excellence from Source to Supply",
    image: "/images/mission-sustainability.jpg",
    items: [
      {
        id: "sustainability",
        title: "Sustainability",
        icon: "/images/icons/potted-plant.svg",
        text: "We support eco-friendly practices and promote packaging options that are kinder to the environment.",
      },
      {
        id: "trust",
        number: "02",
        title: "Trust",
        icon: "/images/icons/handshake.svg",
        text: "VPG works directly with trusted suppliers and manufacturers, ensuring consistency and transparency in every transaction.",
      },
      {
        id: "flexibility",
        number: "03",
        title: "Flexibility",
        icon: "/images/icons/box-arrow-down.svg",
        text: "We provide both raw material and ready-made packaging to suit the needs of clients in food, industrial, and retail sectors.",
      },
    ],
  },
} as const;

export const contactPage = {
  hero: {
    accent: "Have",
    title: "questions or need assistance?",
    description:
      "Contact us for quotes, support, inquiries, or feedback, and we’ll get back to you as soon as possible.",
    cta: { label: "Contact Us", href: "#contact-form" },
    image: "/images/contact-hero.png",
    imageAlt: "Visi Protona Global announcement",
  },
  info: { label: "Contact Us", title: "Contact Information" },
  cards: [
    {
      id: "whatsapp",
      title: "Whatsapp",
      icon: "/images/icons/phone.svg",
      text: site.phone.display,
      href: `https://wa.me/${site.phone.href.replace("+", "")}`,
    },
    {
      id: "email",
      title: "Email",
      icon: "/images/icons/envelope-simple.svg",
      text: site.email,
      href: `mailto:${site.email}`,
    },
    {
      id: "address",
      title: "Address",
      icon: "/images/icons/map-trifold.svg",
      text: site.address,
    },
  ],
  form: {
    firstName: { label: "First name", placeholder: "Enter your first name" },
    lastName: { label: "Last name", placeholder: "Enter your last name" },
    email: { label: "Email Address", placeholder: "Enter your email address" },
    phone: { label: "Phone Number", placeholder: "Enter your phone number" },
    message: { label: "Your Messages", placeholder: "Enter here" },
    submit: "Send Message",
  },
} as const;

export const productPage = {
  hero: {
    accent: "High-Quality",
    title: "Paper Solutions for Every Industry",
    description:
      "From raw materials to finished packaging, we provide durable, reliable, and customizable paper products to support your business needs.",
    cta: { label: "Explore Products", href: "#product-list" },
  },
  label: "Our Products",
} as const;
