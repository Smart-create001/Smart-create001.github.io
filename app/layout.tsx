import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import "./globals.css";
import "./full-version.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smart-tech-engineering-lab.forager-chimp-0fforo.chatgpt.site'),
  title: {
    default: "SMART_TECH — Personal Engineering Lab",
    template: "%s — SMART_TECH"
  },
  description: "Smart's personal engineering platform — building toward Agri-Robotics through real projects, experiments, and evidence.",
  openGraph: {
    title: "SMART_TECH — Personal Engineering Lab",
    description: "Building toward Agri-Robotics through real projects, experiments and evidence.",
    type: 'website',
    images: [{ url: 'https://smart-tech-engineering-lab.forager-chimp-0fforo.chatgpt.site/og.png', width: 1200, height: 630, alt: 'SMART_TECH — Personal Engineering Lab' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "SMART_TECH — Personal Engineering Lab",
    description: "Building toward Agri-Robotics through real projects, experiments and evidence.",
    images: ['https://smart-tech-engineering-lab.forager-chimp-0fforo.chatgpt.site/og.png']
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
