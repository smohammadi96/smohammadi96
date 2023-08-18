import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanaz Mohamamdi Resume",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className={font.className}>{children}</body>
    </html>
  );
}
