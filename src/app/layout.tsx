import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateStructuredData } from "./structured-data";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Suthakar Anburaj - Full Stack Developer & Software Engineer",
    template: "%s | Suthakar Anburaj"
  },
  description: "Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies. View my portfolio, projects, and professional experience.",
  keywords: [
    "Suthakar Anburaj",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
    "Web Applications",
    "Mobile Development",
    "UI/UX Design"
  ],
  authors: [{ name: "Suthakar Anburaj" }],
  creator: "Suthakar Anburaj",
  publisher: "Suthakar Anburaj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://suthakaranburaj.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suthakaranburaj.com',
    title: 'Suthakar Anburaj - Full Stack Developer & Software Engineer',
    description: 'Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies. View my portfolio, projects, and professional experience.',
    siteName: 'Suthakar Anburaj Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Suthakar Anburaj - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suthakar Anburaj - Full Stack Developer & Software Engineer',
    description: 'Full Stack Developer and Software Engineer with expertise in React, Next.js, Node.js, and modern web technologies.',
    images: ['/logo.png'],
    creator: '@suthakaranburaj',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html style={{ overflowX: "hidden" }} lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Comprehensive Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
