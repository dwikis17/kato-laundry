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
  icons: {
    icon: '/logos.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" type="image/png" href="/logos.png" />
        {/* Optionally, add different sizes */}
        <link rel="apple-touch-icon" sizes="180x180" href="/logos.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logos.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logos.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
