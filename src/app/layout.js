import { Playfair_Display, Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.chamakfoundation.org"),
  applicationName: "Chamak Foundation",
  title: {
    default: "Chamak Foundation · Chamak Padhai Se",
    template: "%s · Chamak Foundation",
  },
  description:
    "Chamak Foundation (Chamak Padhai Se) NGO — Empowering underprivileged children through quality education, scholarships, mentorship, community libraries, and career guidance.",
  keywords: [
    "Chamak Foundation",
    "Chamak Padhai Se",
    "Chamak Foundation NGO",
    "child education charity",
    "scholarships India",
    "NGO Hyderabad",
    "Telangana education NGO",
    "Dr Mohammad Azam Ali",
    "underprivileged children education",
    "career guidance NGO",
  ],
  authors: [{ name: "Chamak Foundation" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/logo.jpeg", sizes: "500x500", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Chamak Foundation · Chamak Padhai Se",
    description:
      "Empowering underprivileged children through education, scholarships, mentorship, and opportunities.",
    url: "https://www.chamakfoundation.org",
    siteName: "Chamak Foundation",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Chamak Foundation Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.chamakfoundation.org/#website",
      "url": "https://www.chamakfoundation.org/",
      "name": "Chamak Foundation",
      "alternateName": ["Chamak Foundation NGO", "Chamak Padhai Se"],
      "publisher": {
        "@id": "https://www.chamakfoundation.org/#organization",
      },
    },
    {
      "@type": "NGO",
      "@id": "https://www.chamakfoundation.org/#organization",
      "name": "Chamak Foundation",
      "alternateName": "Chamak Padhai Se",
      "url": "https://www.chamakfoundation.org/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.chamakfoundation.org/assets/logo.jpeg",
        "width": 500,
        "height": 500,
      },
      "image": "https://www.chamakfoundation.org/assets/logo.jpeg",
      "description":
        "Chamak Foundation (Chamak Padhai Se) is a registered non-profit educational organization dedicated to empowering disadvantaged students through scholarships, career guidance, and community libraries.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN",
      },
      "telephone": "+919866129052",
      "email": "chamakfoundation23@gmail.com",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
