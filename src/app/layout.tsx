import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://criticalhire.co.uk"),
  title: {
    default: "Critical Hire | Final-Stage Selection Support Before You Make the Offer",
    template: "%s | Critical Hire by Optitude 360",
  },
  description:
    "Critical Hire gives businesses experienced, independent final-stage selection support before making an offer for a role too important to get wrong. Test the role, candidates, evidence, and decision risk before you commit.",
  keywords: [
    "critical hire",
    "hiring risk assessment",
    "final-stage hiring decision",
    "business-critical appointment",
    "reduce hiring risk",
    "bad hire cost",
    "hiring decision support",
    "selection support",
    "final-stage selection",
    "pre-offer review",
    "candidate risk assessment",
    "attitudinal-based selection",
    "hiring risk diagnostic",
    "Cambridgeshire business",
    "UK SME hiring",
    "Optitude 360",
    "Executive Search Psychology",
    "Talent Praxis Group",
    "independent selection judgement",
    "decision brief",
    "consequential hire",
    "hire review service",
    "pre-offer hiring review",
    "SME hiring support UK",
  ],
  authors: [{ name: "Optitude 360", url: "https://criticalhire.co.uk" }],
  creator: "Optitude Business Solutions Ltd",
  publisher: "Optitude Business Solutions Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://criticalhire.co.uk",
  },
  openGraph: {
    title: "Critical Hire | Final-Stage Selection Support Before You Make the Offer",
    description:
      "Critical Hire gives businesses experienced, independent final-stage selection support before making an offer for a role too important to get wrong.",
    url: "https://criticalhire.co.uk",
    siteName: "Critical Hire by Optitude 360",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: "Critical Hire — Final-Stage Selection Support by Optitude 360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Critical Hire | Final-Stage Selection Support Before You Make the Offer",
    description:
      "Critical Hire gives businesses experienced, independent final-stage selection support before making an offer for a role too important to get wrong.",
    images: ["/og-image.png"],
  },
  category: "business",
  classification: "Hiring Decision Support",
  other: {
    "application-name": "Critical Hire",
    "apple-mobile-web-app-title": "Critical Hire",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#1B2A4A",
    "format-detection": "telephone=yes",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1B2A4A" />
        <link rel="dns-prefetch" href="https://lunacal.ai" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white focus:text-sm">
          Skip to main content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
