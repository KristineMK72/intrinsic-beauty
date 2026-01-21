import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intrinsic Beauty | Hair Services in Brainerd, MN",
  description:
    "Haircuts, color, waxing, and hair & scalp therapy by Katherine Andrews at Intrinsic Beauty in Brainerd, Minnesota.",
  openGraph: {
    title: "Intrinsic Beauty | Brainerd, MN",
    description:
      "Haircuts, color, waxing, and hair & scalp therapy by Katherine Andrews.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
