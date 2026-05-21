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
  title: "Critical Hire | Final-Stage Selection Support Before You Make the Offer",
  description:
    "Critical Hire helps businesses with final-stage selection support before making an offer. Test the role, candidates, evidence, interview findings, and decision risk before committing to a consequential hire.",
  keywords: [
    "critical hire",
    "hiring risk",
    "final-stage hiring decision",
    "business-critical appointment",
    "reduce hiring risk",
    "bad hire cost",
    "hiring decision support",
    "selection support",
    "final-stage selection",
    "pre-offer review",
    "Cambridgeshire business",
    "UK SME hiring",
    "Optitude 360",
    "Executive Search Psychology",
    "Piers Courage Morgan",
  ],
  authors: [{ name: "Optitude 360" }],
  openGraph: {
    title: "Critical Hire | Final-Stage Selection Support Before You Make the Offer",
    description:
      "Critical Hire helps businesses with final-stage selection support before making an offer. Test the role, candidates, evidence, interview findings, and decision risk before committing.",
    type: "website",
    siteName: "Critical Hire by Optitude 360",
  },
  twitter: {
    card: "summary_large_image",
    title: "Critical Hire | Final-Stage Selection Support Before You Make the Offer",
    description:
      "Critical Hire helps businesses with final-stage selection support before making an offer. Test the role, candidates, evidence, and decision risk before committing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
