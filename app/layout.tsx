import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Intrinsic Beauty Salon",
  description: "Salon services, scalp care, and professional products.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-[#1F2937]/80 transition hover:text-[#1F2937]"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F8F4EE] text-[#1F2937]">
        <header className="border-b border-[#E7DDD2] bg-[#F8F4EE]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" className="leading-tight">
              <div className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/60">
                Intrinsic
              </div>
              <div className="font-serif text-2xl">Beauty Salon</div>
            </Link>

            <nav className="hidden gap-6 md:flex">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#E7DDD2] bg-[#F8F4EE]">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[#1F2937]/60">
            © {new Date().getFullYear()} Intrinsic Beauty Salon
          </div>
        </footer>
      </body>
    </html>
  );
}
