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
  title: {
    default: "Chamak Foundation · Chamak Padhai Se",
    template: "%s · Chamak Foundation",
  },
  description:
    "Empowering underprivileged children through quality education, scholarships, mentorship, and opportunities to help every child shine in life.",
  keywords: [
    "Chamak Foundation",
    "Chamak Padhai Se",
    "child education charity",
    "scholarships India",
    "NGO Hyderabad",
    "underprivileged children education",
    "career guidance NGO",
  ],
  authors: [{ name: "Chamak Foundation" }],
  icons: {
    icon: "/assets/logo.jpeg",
    apple: "/assets/logo.jpeg",
  },
  openGraph: {
    title: "Chamak Foundation — Chamak Padhai Se",
    description:
      "Empowering underprivileged children through education, scholarships, and opportunities.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
