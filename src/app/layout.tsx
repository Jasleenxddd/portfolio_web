import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jasleen Kaur | Full-Stack & AI/ML",
  description:
    "Portfolio of Jasleen Kaur, featuring full-stack development, machine learning, NLP, LLMs, and intelligent digital products.",
  keywords: [
    "Jasleen Kaur",
    "full-stack developer",
    "machine learning",
    "NLP",
    "LLMs",
    "portfolio",
  ],
  authors: [{ name: "Jasleen Kaur" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jasleen Kaur | Full-Stack & AI/ML",
    description:
      "Full-stack and AI/ML portfolio featuring intelligent products, applied machine learning, NLP, and LLM projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasleen Kaur | Full-Stack & AI/ML",
    description:
      "Full-stack and AI/ML portfolio featuring intelligent products and applied machine learning.",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-space">{children}</body>
    </html>
  );
}
