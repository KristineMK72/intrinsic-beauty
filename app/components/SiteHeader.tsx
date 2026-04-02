"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE_TEL = "+12183308125";

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm text-[#1F2937]/80 transition hover:text-[#1F2937]"
    >
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#E7DDD2] bg-[#F8F4EE]">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="leading-tight">
            <div className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/60">
              Intrinsic
            </div>
            <div className="font-serif text-2xl">Beauty Salon</div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`sms:${PHONE_TEL}`}
              className="rounded-full border border-[#E7DDD2] px-5 py-2 text-sm font-medium text-[#1F2937] transition hover:bg-white/60"
            >
              Text to Book
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E7DDD2] md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-[#1F2937]" />
              <span className="block h-0.5 w-5 bg-[#1F2937]" />
              <span className="block h-0.5 w-5 bg-[#1F2937]" />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mt-4 rounded-3xl border border-[#E7DDD2] bg-white/80 p-5 shadow-sm md:hidden">
            <nav className="flex flex-col gap-4">
              <NavLink href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </NavLink>
              <NavLink href="/products" onClick={() => setMenuOpen(false)}>
                Products
              </NavLink>
              <NavLink href="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
              <NavLink href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>

              <a
                href={`sms:${PHONE_TEL}`}
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-[#1F2937] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Text to Book
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
