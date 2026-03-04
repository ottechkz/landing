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
  title: "Ottech — Automation, MVPs & AI for your business",
  description:
    "We replace Excel, WhatsApp, and manual workflows with simple web systems. AI where it helps. Based in Kazakhstan, working worldwide.",
  openGraph: {
    title: "Ottech — Automation, MVPs & AI for your business",
    description:
      "We replace Excel, WhatsApp, and manual workflows with simple web systems.",
    url: "https://ottech.kz",
    siteName: "Ottech",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://ottech.kz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
