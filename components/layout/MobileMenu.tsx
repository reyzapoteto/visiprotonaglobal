"use client";

import Link from "next/link";
import { useState } from "react";
import { contactLink, mainNav, productNav } from "@/content/navigation";

const linkClass = "block rounded-lg px-3 py-2 hover:bg-brand-100";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="rounded-lg border border-line px-3 py-2 text-sm font-semibold"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-white p-4 shadow-md"
        >
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-2 text-xs font-semibold tracking-widest text-muted uppercase">
              Product Categories
            </li>
            {productNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={contactLink.href}
                onClick={close}
                className="mt-2 block rounded-lg bg-brand-500 px-3 py-2 text-center font-semibold text-white"
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
