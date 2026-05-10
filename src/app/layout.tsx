import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solerey.com"),
  title: {
    default: "Chalet Le Solerey Chamonix — Location 14 pers. | Sauna & Billard",
    template: "%s | Chalet Le Solerey Chamonix",
  },
  description:
    "Louez Le Solerey, chalet de charme 400m² à Chamonix-Mont-Blanc. 8 chambres, 14 personnes, sauna, billard. Idéal groupes & familles. Réservez directement.",
  keywords: [
    "chalet chamonix",
    "location chalet chamonix",
    "chalet 14 personnes chamonix",
    "chalet groupe chamonix",
    "chalet avec sauna chamonix",
    "location vacances chamonix",
    "chalet mont blanc",
    "le solerey",
    "chalet lavancher",
    "location chalet montagne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.solerey.com",
    siteName: "Le Solerey",
    title: "Chalet Le Solerey Chamonix — Location 14 pers. | Sauna & Billard",
    description:
      "Louez Le Solerey, chalet de charme 400m² à Chamonix-Mont-Blanc. 8 chambres, 14 personnes, sauna, billard. Idéal groupes & familles.",
    images: [
      {
        url: "/images/gallery/photo-1.jpg",
        width: 1200,
        height: 630,
        alt: "Chalet Le Solerey - Vue extérieure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chalet Le Solerey Chamonix — Location 14 pers.",
    description:
      "Chalet de charme 400m² à Chamonix-Mont-Blanc. 8 chambres, 14 personnes, sauna, billard.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.solerey.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Chalet Le Solerey",
  description:
    "Chalet de charme 400m² pour 14 personnes à Chamonix-Mont-Blanc. Ancienne ferme restaurée avec 8 chambres, sauna, billard et vue sur le Mont-Blanc.",
  url: "https://www.solerey.com",
  telephone: "+33640401107",
  email: "charlotte.desjars@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Le Lavancher",
    addressLocality: "Chamonix-Mont-Blanc",
    postalCode: "74400",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.9572,
    longitude: 6.9281,
  },
  numberOfRooms: 8,
  occupancy: {
    "@type": "QuantitativeValue",
    maxValue: 14,
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: 400,
    unitCode: "MTK",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Sauna", value: true },
    { "@type": "LocationFeatureSpecification", name: "Billard", value: true },
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cheminée", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
  ],
  image: "https://www.solerey.com/images/gallery/photo-1.jpg",
  priceRange: "€€€",
  sameAs: [
    "https://www.instagram.com/chalet.le.solerey/",
    "https://www.facebook.com/profile.php?id=61554814693017",
    "https://www.airbnb.fr/rooms/1069918179722628241",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
