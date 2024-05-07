import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/includes/Navbar";
import Footer from "@/components/includes/Footer";

export const metadata: Metadata = {
  title: "A gym website",
  description: "Gym Website for anyone, contact for acquiring at low price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
