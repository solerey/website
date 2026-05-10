import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos du Chalet Le Solerey — Location Chamonix",
  description: "Galerie photos du chalet Le Solerey : 400m² à Chamonix, 3 salons, 8 chambres, sauna, billard, ferme savoyarde restaurée au Lavancher.",
};

const photos = [
  { src: "75c90c_79979925c18a44598fa984025c3b8dad~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Vue extérieure ferme restaurée" },
  { src: "75c90c_7bee6ee2f67a413aaf48b666554c2829~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Salon principal cheminée" },
  { src: "75c90c_3e015248a2074a32af7aa18a022574f4~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Espace de vie poutres apparentes" },
  { src: "75c90c_c3fab03b574841d882d9afdc34a33357~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Façade pierre et bois" },
  { src: "75c90c_c30114ff4e0d406f9eff045932b0e99a~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Deuxième salon" },
  { src: "75c90c_721c1fbbd7dc428cba9d0c42e15a8248~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Chambre double" },
  { src: "75c90c_b82c3313097d4aeca8c4949b95814b88~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Salle de bain" },
  { src: "75c90c_3f2541974d664b8fb8d4a939e4fa5b55~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Cuisine équipée" },
  { src: "75c90c_db682a948d8340138b7b64efe294eb89~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Troisième salon" },
  { src: "75c90c_402a5c040fdc432bb62ff63b79681af1~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Chambre lits simples" },
  { src: "75c90c_fd12c7098a524a2294cd415a7dcba0fa~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Décoration montagne" },
  { src: "75c90c_83efd8066d2b4f86a2d66430dd95d5d2~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Sauna privatif" },
  { src: "75c90c_aad4fa384aa3425bb9447cdb5e5e3f91~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Salle de billard" },
  { src: "75c90c_d150cd0bc0f04ee893ec7c6865ad2217~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Chambre familiale" },
  { src: "75c90c_156cca1ef042428597dcd5e387738a24~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Vue balcon" },
  { src: "75c90c_ed3a6970f3bb4617a52e831d5b4319b4~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Entrée" },
  { src: "75c90c_0a7bfd238a364ffdbeb797e373236a9e~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Jardin terrasse" },
  { src: "75c90c_d8f4ec95a9b84d5089c78ae6b4880274~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Panorama Mont-Blanc" },
  { src: "75c90c_926b47444e014e7c8a536e7ad36f3293~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Espace extérieur" },
  { src: "75c90c_0dd57d86cf584f299666b994bb7ed85e~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Détail bois intérieur" },
  { src: "75c90c_e73aa6730a0b40198bd7dee8750eb1b1~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Escalier" },
  { src: "75c90c_7d3004dce3d84a148224d4e056700ac8~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Chambre mansardée" },
  { src: "75c90c_df51808a3dd04a7993a2664a5d1f60c5~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Vue hivernale" },
  { src: "75c90c_dc85071972304c41afd90589deb639c3~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Le Lavancher hiver" },
  { src: "75c90c_e23a1f3fb9de4f43a33106eb867164ca~mv2.jpg", alt: "Chalet Le Solerey Chamonix - Panorama depuis le chalet" },
];

export default function Photos() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center" style={{ backgroundColor: "var(--color-stone)" }}>
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>{photos.length} photos</p>
          <h1 className="text-4xl md:text-6xl" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>Galerie Photos</h1>
          <div className="gold-line-center" />
          <p className="mt-6 text-base" style={{ color: "var(--color-warm)", opacity: 0.7 }}>Découvrez Le Solerey en images — 400 m² de charme au cœur de Chamonix</p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {photos.map((p, i) => (
              <div key={i} className="img-zoom mb-4 break-inside-avoid">
                <img src={`https://static.wixstatic.com/media/${p.src}`} alt={p.alt} className="w-full object-cover" loading={i < 6 ? "eager" : "lazy"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center" style={{ backgroundColor: "var(--color-stone)" }}>
        <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>Envie de découvrir Le Solerey ?</h2>
        <div className="gold-line-center" />
        <a href="https://www.airbnb.fr/rooms/1069918179722628241" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-8 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-stone)", fontWeight: 500 }}>Réserver</a>
      </section>
    </>
  );
}
