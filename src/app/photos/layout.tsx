import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos Chalet Le Solerey — Location Vallée de Chamonix",
  description:
    "Découvrez en images notre chalet 400m² à Chamonix : 3 salons, 8 chambres, sauna, billard, cadre authentique de ferme restaurée au Lavancher.",
  alternates: { canonical: "https://www.le-solerey.com/photos" },
};

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
