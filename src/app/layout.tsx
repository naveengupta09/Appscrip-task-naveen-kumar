import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Discover Our Products | Premium Online Shopping",
    template: "%s | Appscrip",
  },
  description:
    "Browse curated essentials, accessories, and bags with a clean, modern shopping experience. Quality products with fast delivery.",
  keywords: ["online shopping", "premium products", "clothing", "accessories", "electronics", "home goods"],
  authors: [{ name: "Appscrip" }],
  creator: "Appscrip",
  publisher: "Appscrip",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://appscrip.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Appscrip",
    title: "Discover Our Products",
    description: "Browse curated essentials with quality guaranteed",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@appscrip",
  },
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Appscrip",
  description: "Premium online shopping for quality products",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://appscrip.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${serif.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
