"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const PHOTOS = Array.from({ length: 25 }, (_, i) => ({
  src: `/images/gallery/photo-${i + 1}.jpg`,
  alt: `Chalet Le Solerey Chamonix - Photo ${i + 1}`,
}));

// Alt texts for SEO (customize these with real descriptions)
const ALT_TEXTS = [
  "Vue extérieure du chalet Le Solerey au Lavancher, Chamonix-Mont-Blanc",
  "Façade en pierre et bois du chalet Le Solerey",
  "Entrée du chalet Le Solerey avec vue sur les montagnes",
  "Salon principal avec cheminée en pierre, chalet Le Solerey Chamonix",
  "Deuxième salon cosy du chalet Le Solerey",
  "Cuisine équipée du chalet Le Solerey, location Chamonix",
  "Salle à manger du chalet Le Solerey pour 14 personnes",
  "Chambre double avec vue montagne, chalet Le Solerey",
  "Suite parentale du chalet Le Solerey Chamonix",
  "Chambre twin du chalet Le Solerey, idéale pour enfants",
  "Salle de bain avec douche, chalet Le Solerey",
  "Sauna privatif du chalet Le Solerey Chamonix",
  "Salle de billard du chalet Le Solerey",
  "Troisième salon avec poêle, chalet Le Solerey",
  "Couloir avec poutres apparentes, chalet Le Solerey",
  "Escalier en bois ancien, ferme restaurée Le Solerey",
  "Détail décoration intérieure, chalet Le Solerey",
  "Vue depuis le balcon du chalet Le Solerey sur le Mont-Blanc",
  "Jardin et terrasse du chalet Le Solerey en été",
  "Vue panoramique sur les aiguilles depuis Le Solerey",
  "Chalet Le Solerey sous la neige en hiver",
  "Paysage hivernal depuis le Lavancher, Chamonix",
  "Détail architectural du chalet Le Solerey, pierre et bois",
  "Espace détente du chalet Le Solerey Chamonix",
  "Vue nocturne du chalet Le Solerey illuminé",
];

export default function PhotosPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % PHOTOS.length);
    }
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + PHOTOS.length) % PHOTOS.length);
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-chalet-dark text-cream pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">Galerie</p>
          <h1 className="font-display text-4xl md:text-6xl mb-6">Photos du Solerey</h1>
          <p className="text-cream/50 text-sm">
            Chalet de charme 400 m² — 8 chambres — Chamonix-Mont-Blanc
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-6 gap-1"
            style={{ gridAutoRows: "180px" }}
          >
            {PHOTOS.map((photo, i) => {
              const pos = i % 5;
              const span = pos === 0
                ? "col-span-1 row-span-1 md:col-span-4 md:row-span-2"
                : "col-span-1 row-span-1 md:col-span-2 md:row-span-2";
              return (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className={`${span} relative overflow-hidden group cursor-pointer`}
                >
                  <Image
                    src={photo.src}
                    alt={ALT_TEXTS[i] || photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-chalet-dark/0 group-hover:bg-chalet-dark/20 transition-colors duration-500" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white z-10"
            aria-label="Fermer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
            aria-label="Photo précédente"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="relative max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={PHOTOS[lightboxIndex].src}
              alt={ALT_TEXTS[lightboxIndex]}
              width={1400}
              height={900}
              className="max-h-[85vh] w-auto h-auto object-contain rounded-sm"
              quality={90}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
            aria-label="Photo suivante"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            {lightboxIndex + 1} / {PHOTOS.length}
          </div>
        </div>
      )}
    </>
  );
}
