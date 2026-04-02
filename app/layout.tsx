import "./globals.css";
import SiteHeader from "./components/SiteHeader";

export const metadata = {
  title: "Intrinsic Beauty Salon",
  description: "Salon services, scalp care, and professional products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F8F4EE] text-[#1F2937]">
        <SiteHeader />

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
