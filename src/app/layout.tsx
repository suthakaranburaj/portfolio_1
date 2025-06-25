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
  title: "Suthakar Anburaj",
  description: "Suthakar Anburaj's Portfolio",
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
              sameAs: [
                "https://github.com/suthakaranburaj",
                "https://linkedin.com/in/suthakaranburaj",
              ],
              description:
                "I'm always the first to take on complex and unique problems, driven by a mindset that thrives on challenge and innovation.",
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
