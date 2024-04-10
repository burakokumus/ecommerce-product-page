import "./globals.css";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers",
  description: "Frontend Mentor challenge developed with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
