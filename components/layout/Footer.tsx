import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";
import { asset } from "@/lib/assets";

const linkClass = "hover:text-brand-700 hover:underline";

export function Footer() {
  return (
    <footer className="bg-brand-100 py-14">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <Image
            src={asset("VPG_R03_color_transparent-1024x576.png")}
            alt={site.name}
            width={1024}
            height={576}
            className="h-20 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-semibold text-brand-900">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="text-sm not-italic">
          <h2 className="font-semibold text-brand-900">Contact</h2>
          <ul className="mt-3 space-y-2">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone.href}`} className={linkClass}>
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
          </ul>
        </address>
      </Container>
    </footer>
  );
}
