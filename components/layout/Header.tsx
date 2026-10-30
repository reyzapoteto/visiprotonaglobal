import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { contactLink, mainNav, productNav } from "@/content/navigation";
import { site } from "@/content/site";
import { asset } from "@/lib/assets";

const navLink =
  "rounded-lg px-3 py-2 text-sm font-medium hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-brand-500";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <Link href="/" aria-label={`${site.name} home`}>
          <Image
            src={asset("VPG_R03_color_transparent.png")}
            alt={site.name}
            width={178}
            height={100}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLink}>
              {item.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className={`${navLink} cursor-pointer`}
            >
              Product Categories
              <span aria-hidden="true"> ▾</span>
            </button>
            <ul className="invisible absolute top-full left-0 w-64 rounded-card border border-line bg-white p-2 opacity-0 shadow-md transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {productNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-brand-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Button href={contactLink.href} className="ml-2">
            {contactLink.label}
          </Button>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
