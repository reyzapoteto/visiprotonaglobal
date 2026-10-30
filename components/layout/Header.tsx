import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { contactLink, mainNav, productNav } from "@/content/navigation";
import { site } from "@/content/site";

const navLink =
  "text-lg font-medium text-white hover:text-white/72 focus-visible:outline-2 focus-visible:outline-white";

export function Header() {
  return (
    <header className="fixed inset-x-4 top-4 z-50 xl:inset-x-8">
      <div className="mx-auto flex h-[91px] max-w-[1376px] items-center justify-between rounded-card bg-ink px-6">
        <div className="flex items-center gap-[72px]">
          <Link href="/" aria-label={`${site.name} home`}>
            <Image
              src="/images/logo.svg"
              alt={site.name}
              width={91}
              height={91}
              priority
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-12 lg:flex">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className={navLink}>
                {item.label}
              </Link>
            ))}
            <div className="group relative">
              <button type="button" aria-haspopup="true" className={navLink}>
                Product
              </button>
              <ul className="invisible absolute top-full left-0 w-64 rounded-card bg-ink p-2 opacity-0 shadow-md transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {productNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-card px-3 py-2 text-white hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <Button href={contactLink.href} className="hidden lg:flex">
          {contactLink.label}
        </Button>
        <MobileMenu />
      </div>
    </header>
  );
}
