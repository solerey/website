import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  geo: { "@type": "GeoCoordinates", latitude: 45.9572, longitude: 6.9281 },
  numberOfRooms: 8,
  occupancy: { "@type": "QuantitativeValue", maxValue: 14 },
  floorSize: { "@type": "QuantitativeValue", value: 400, unitCode: "MTK" },
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: {
      default: t("home_title"),
      template: `%s | Le Solerey`,
    },
    description: t("home_description"),
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
