import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  // Optional: configure font weights
  weight: ['400', '500', '600', '700'],
  // Optional: configure display
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Kato Laundry",
  description: "Cucian Rapi, Gratis Antar Jemput",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
