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
  return (
    <html style={{ overflowX: "hidden" }} lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Suthakar Anburaj",
              url: "https://suthakaranburaj.com",
              image: "https://suthakaranburaj.com/logo.png",
              jobTitle: "Full Stack Developer",
              description: "I'm always the first to take on complex and unique problems, driven by a mindset that thrives on challenge and innovation.",
              email: "mailto:suthakaranburaj@gmail.com",
              telephone: "+91-1234567890",
              address: {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              sameAs: [
                "https://github.com/suthakaranburaj",
                "https://linkedin.com/in/suthakaranburaj",
                "https://twitter.com/suthakaranburaj",
                "https://instagram.com/suthakaranburaj"
              ],
              knowsAbout: [
                "Full Stack Development",
                "React.js",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Web Development",
                "Software Engineering"
              ],
              alumniOf: {
                "@type": "Organization",
                "name": "Your University Name"
              }
            }),
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Suthakar Anburaj Portfolio",
              url: "https://suthakaranburaj.com",
              description: "Full Stack Developer and Software Engineer Portfolio",
              author: {
                "@type": "Person",
                name: "Suthakar Anburaj"
              }
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
