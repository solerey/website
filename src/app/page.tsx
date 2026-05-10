import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  { icon: "🏠", label: "400 m²", detail: "de surface habitable" },
  { icon: "🛏️", label: "8 chambres", detail: "jusqu'à 14 personnes" },
  { icon: "🧖", label: "Sauna", detail: "privatif" },
  { icon: "🎱", label: "Billard", detail: "salle dédiée" },
  { icon: "🔥", label: "Cheminée", detail: "dans le salon principal" },
  { icon: "⛷️", label: "10 min", detail: "des pistes de ski" },
];

const PREVIEW_PHOTOS = [
  { src: "/images/gallery/photo-4.jpg", alt: "Salon principal chalet Le Solerey Chamonix avec cheminée" },
  { src: "/images/gallery/photo-2.jpg", alt: "Vue extérieure chalet Le Solerey Chamonix" },
  { src: "/images/gallery/photo-8.jpg", alt: "Chambre chalet Le Solerey location Chamonix" },
  { src: "/images/gallery/photo-6.jpg", alt: "Cuisine équipée chalet Le Solerey Chamonix" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/photo-1.jpg"
          alt="Chalet Le Solerey au Lavancher, Chamonix-Mont-Blanc"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 text-center text-cream px-6 max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-6 animate-fade-in">
            Le Lavancher — Chamonix-Mont-Blanc
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-6 animate-slide-up">
            Le Solerey
          </h1>
          <div className="gold-line mx-auto mb-6" />
          <p className="font-display text-xl md:text-2xl italic text-cream/80 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Le charme de la ferme, restaurée avec goût et confort
          </p>
          <p className="text-cream/60 text-sm tracking-wider mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            14 personnes · 400 m² · 8 chambres · Sauna · Billard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Link
              href="/photos"
              className="px-8 py-3.5 border border-cream/30 text-cream text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors duration-300"
            >
              Découvrir — 25 Photos
            </Link>
            <a
              href="https://www.airbnb.fr/rooms/1069918179722628241"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-chalet-gold text-chalet-dark text-sm font-semibold tracking-widest uppercase hover:bg-chalet-gold/90 transition-colors duration-300"
            >
              Réserver
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-stone mb-4">Équipements</p>
            <h2 className="font-display text-3xl md:text-4xl">Un chalet pensé pour les groupes</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {FEATURES.map((f) => (
              <div key={f.label} className="text-center group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </span>
                <p className="font-display text-xl mb-1">{f.label}</p>
                <p className="text-chalet-stone text-sm">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTOS PREVIEW ── */}
      <section className="section-padding bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-stone mb-4">Galerie</p>
            <h2 className="font-display text-3xl md:text-4xl">Découvrez Le Solerey</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PREVIEW_PHOTOS.map((photo, i) => (
              <Link
                key={i}
                href="/photos"
                className="relative aspect-[3/4] overflow-hidden group rounded-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-chalet-dark/0 group-hover:bg-chalet-dark/20 transition-colors duration-500" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/photos"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-chalet-wood hover:text-chalet-brown transition-colors"
            >
              Voir les 25 photos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HISTOIRE TEASER ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/histoire/vue-mont-blanc.jpg"
              alt="Vue sur le Mont-Blanc depuis Le Solerey"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-stone mb-4">Depuis 1803</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">Notre Histoire</h2>
            <div className="gold-line mb-8" />
            <p className="text-chalet-brown/80 leading-relaxed mb-4">
              Construit en 1803 par Michel Cachat, Le Solerey était à l&apos;origine une ferme savoyarde
              au cœur du Lavancher. La pièce centrale au rez-de-chaussée accueillait le bétail,
              tandis que l&apos;étage était réservé au stockage du foin.
            </p>
            <p className="text-chalet-brown/80 leading-relaxed mb-8">
              Aujourd&apos;hui entièrement restaurée, cette ferme authentique a conservé ses matériaux
              d&apos;origine — pierre, bois ancien, poutres apparentes — tout en offrant le confort
              moderne d&apos;un chalet haut de gamme.
            </p>
            <Link
              href="/histoire"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-chalet-wood hover:text-chalet-brown transition-colors"
            >
              En savoir plus
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ── */}
      <section className="section-padding bg-chalet-dark text-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">Votre séjour</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream">
              Un chalet de 400 m² au pied du Mont-Blanc
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="space-y-6 text-cream/70 leading-relaxed">
            <p>
              Idéalement situé au Lavancher, dans la vallée de Chamonix-Mont-Blanc, Le Solerey offre
              un cadre exceptionnel pour vos séjours en famille ou entre amis. À 1200 m d&apos;altitude,
              ensoleillé et dominant la vallée, Le Lavancher offre une vue imprenable sur les aiguilles
              et le massif du Mont-Blanc.
            </p>
            <p>
              Avec ses 8 chambres, ses 4 salles de bain, ses 3 salons aux ambiances distinctes, son
              sauna privatif et sa salle de billard, Le Solerey est l&apos;un des rares chalets à Chamonix
              capable d&apos;accueillir des grands groupes sans compromettre le confort individuel.
            </p>
            <p>
              Depuis le chalet, vous accédez rapidement à toutes les stations de la vallée :
              Les Houches, Le Brévent, La Flégère, Les Grands Montets à Argentière, et Le Tour.
              Le bus Chamonix, gratuit avec votre carte d&apos;hôte, dessert l&apos;ensemble du domaine.
              L&apos;Aiguille du Midi, la Mer de Glace et le tunnel du Mont-Blanc sont à quelques minutes.
            </p>
            <p>
              En hiver, Le Solerey est la base idéale pour un séjour ski à Chamonix. En été, la
              vallée offre un terrain de jeu exceptionnel pour la randonnée, l&apos;alpinisme, le VTT,
              le parapente ou simplement la contemplation du massif du Mont-Blanc.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 pt-8 border-t border-cream/10">
            <h3 className="font-display text-2xl text-cream mb-4">Réservez votre séjour</h3>
            <p className="text-cream/50 mb-6 text-sm">
              Pour toute demande de réservation, de disponibilité ou d&apos;information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33640401107"
                className="px-8 py-3.5 border border-cream/30 text-cream text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors"
              >
                📞 +33 6 40 40 11 07
              </a>
              <a
                href="mailto:charlotte.desjars@outlook.com?subject=Réservation Le Solerey"
                className="px-8 py-3.5 bg-chalet-gold text-chalet-dark text-sm font-semibold tracking-widest uppercase hover:bg-chalet-gold/90 transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
