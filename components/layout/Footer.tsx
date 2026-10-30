import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";

const heading = "text-xl leading-[1.3] font-bold text-white";
const itemList = "flex flex-col gap-3 font-medium leading-[1.8] text-white/72";

export function Footer() {
  return (
    <footer className="bg-white px-4 pb-4">
      <div className="mx-auto flex max-w-[1410px] flex-col gap-8 rounded-lg bg-ink p-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2">
          <Image
            src="/images/logo.svg"
            alt={site.name}
            width={91}
            height={91}
          />
          <address className="max-w-[438px] leading-[1.8] text-white/56 not-italic">
            {site.address}
          </address>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <nav aria-label="Footer" className="flex w-[145px] flex-col gap-4">
            <h2 className={heading}>Quick Links</h2>
            <ul className={itemList}>
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className={heading}>Contact</h2>
            <ul className={itemList}>
              <li>
                <a href={`tel:${site.phone.href}`} className="hover:text-white">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex w-[145px] flex-col gap-4">
            <h2 className={heading}>Follow Us</h2>
            <ul className="flex gap-4">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} aria-label={social.label}>
                    <Image src={social.icon} alt="" width={24} height={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
