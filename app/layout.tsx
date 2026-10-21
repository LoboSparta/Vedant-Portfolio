import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/data/site";

const description = "Video editing, motion graphics and visual storytelling — from short-form reels and AI-assisted ads to long-form podcast edits.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vedant Thakur — Video Editor & Motion Storyteller",
  description,
  openGraph: {
    title: "Vedant Thakur — Video Editor & Motion Storyteller",
    description,
    type: "website",
    url: siteUrl,
    siteName: "Vedant Thakur",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Thakur — Video Editor & Motion Storyteller",
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-paper">Skip to work</a>
        {children}
      </body>
    </html>
  );
}
