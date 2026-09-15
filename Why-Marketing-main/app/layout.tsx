import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CurvedSideNav } from "@/components/layout/CurvedSideNav";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "WhyMarketing | We Build Growth",
  description: "WhyMarketing is a full-stack growth and brand engineering partner helping ambitious businesses create stronger brands, better digital experiences, and measurable growth.",
  keywords: ["marketing agency", "brand engineering", "growth marketing", "UI/UX design", "SEO"],
  openGraph: {
    title: "WhyMarketing | We Build Growth",
    description: "Premium marketing and brand engineering partner.",
    type: "website",
    url: "https://whymarketing.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WhyMarketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhyMarketing | We Build Growth",
    description: "Premium marketing and brand engineering partner.",
    images: ["/og-image.jpg"],
  }
};

import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('hasVisited')) {
                  document.documentElement.classList.add('hide-loader');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-noir-bg text-noir-text font-sans selection:bg-gold-primary selection:text-noir-bg overflow-x-hidden">
        <SmoothScrollProvider>
          <LoadingScreen />
          <CurvedSideNav />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
