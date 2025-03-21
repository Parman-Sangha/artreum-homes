import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext"; // Ensure AuthProvider is imported

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Artreum Homes | Luxury Real Estate & Custom Home Builder",
  description:
    "Discover luxury custom homes and premium real estate with Artreum Homes. We specialize in building and selling high-end properties with innovative designs and exceptional craftsmanship.",
  keywords:
    "luxury homes, custom homes, real estate, home builder, luxury real estate, premium properties, Artreum Homes",
  authors: [{ name: "Artreum Homes" }],
  openGraph: {
    title: "Artreum Homes | Luxury Real Estate & Custom Home Builder",
    description:
      "Discover luxury custom homes and premium real estate with Artreum Homes. We specialize in building and selling high-end properties with innovative designs and exceptional craftsmanship.",
    url: "https://artreumhomes.com",
    siteName: "Artreum Homes",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artreum Homes - Luxury Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artreum Homes | Luxury Real Estate & Custom Home Builder",
    description:
      "Discover luxury custom homes and premium real estate with Artreum Homes. We specialize in building and selling high-end properties with innovative designs and exceptional craftsmanship.",
    images: ["/images/twitter-image.jpg"],
    creator: "@artreumhomes",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://artreumhomes.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <AuthProvider>
          {children} {/* Make sure children are inside the body */}
        </AuthProvider>
      </body>
    </html>
  );
}
