"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contactLink, mainNav, productNav } from "@/content/navigation";

const linkClass = "block rounded-card px-3 py-2 text-lg hover:bg-white/10";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-12 items-center justify-center"
      >
        <Image src="/images/icons/list.svg" alt="" width={48} height={48} />
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full mt-2 rounded-card bg-ink p-4 text-white shadow-md"
        >
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-2 text-xs font-semibold tracking-widest text-white/56 uppercase">
              Products
            </li>
            {productNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={contactLink.href}
                onClick={close}
                className="block rounded-card bg-brand-500 px-3 py-3 text-center text-lg font-medium"
              >
                {contactLink.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
