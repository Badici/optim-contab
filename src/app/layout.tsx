import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optimcontab.ro"),
  title: {
    default: "OptimContab — Contabilitate & consultanță fiscală",
    template: "%s — OptimContab",
  },
  description:
    "OptimContab oferă servicii premium de contabilitate, consultanță fiscală, salarizare și suport complet pentru afaceri. Rapid, clar și orientat pe rezultate.",
  applicationName: "OptimContab",
  keywords: [
    "contabilitate",
    "contabil",
    "consultanta fiscala",
    "salarizare",
    "audit",
    "infiintare firme",
    "Romania",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://optimcontab.ro",
    siteName: "OptimContab",
    title: "OptimContab — Contabilitate & consultanță fiscală",
    description:
      "Servicii premium de contabilitate, consultanță fiscală și salarizare. Colaborare modernă, procese clare, rezultate măsurabile.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "OptimContab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OptimContab — Contabilitate & consultanță fiscală",
    description:
      "Servicii premium de contabilitate, consultanță fiscală și salarizare.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
