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
  title: "Critical Hire — Before You Offer the Job, Test the Decision | Optitude 360",
  description:
    "Critical Hire is a final-stage hiring decision review for UK businesses making appointments they cannot afford to get wrong. By Optitude 360 — applying Executive Search Psychology to business-critical hiring decisions.",
  keywords: [
    "critical hire",
    "hiring risk",
    "final-stage hiring decision",
    "business-critical appointment",
    "reduce hiring risk",
    "bad hire cost",
    "hiring decision support",
    "Cambridgeshire business",
    "UK SME hiring",
    "Optitude 360",
    "Executive Search Psychology",
    "pre-offer review",
  ],
  authors: [{ name: "Optitude 360" }],
  openGraph: {
    title: "Critical Hire — Before You Offer the Job, Test the Decision",
    description:
      "A final-stage hiring decision review for UK businesses making appointments they cannot afford to get wrong. By Optitude 360.",
    type: "website",
    siteName: "Critical Hire by Optitude 360",
  },
  twitter: {
    card: "summary_large_image",
    title: "Critical Hire — Before You Offer the Job, Test the Decision",
    description:
      "A final-stage hiring decision review for UK businesses making appointments they cannot afford to get wrong.",
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
  );
}
