import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const PREVIEW_PHOTOS = [
  { src: "/images/gallery/photo-4.jpg", alt: "Salon principal chalet Le Solerey Chamonix avec cheminée" },
  { src: "/images/gallery/photo-2.jpg", alt: "Vue extérieure chalet Le Solerey Chamonix" },
  { src: "/images/gallery/photo-8.jpg", alt: "Chambre chalet Le Solerey location Chamonix" },
  { src: "/images/gallery/photo-6.jpg", alt: "Cuisine équipée chalet Le Solerey Chamonix" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("home_title"),
    description: t("home_description"),
    alternates: { canonical: `https://www.solerey.com${locale === "fr" ? "" : `/${locale}`}` },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const FEATURES = [
    { icon: "🏠", label: t("feature_surface_label"), detail: t("feature_surface_detail") },
    { icon: "🛏️", label: t("feature_rooms_label"), detail: t("feature_rooms_detail") },
    { icon: "🧖", label: t("feature_sauna_label"), detail: t("feature_sauna_detail") },
    { icon: "🎱", label: t("feature_billiard_label"), detail: t("feature_billiard_detail") },
    { icon: "🔥", label: t("feature_fireplace_label"), detail: t("feature_fireplace_detail") },
    { icon: "⛷️", label: t("feature_ski_label"), detail: t("feature_ski_detail") },
  ];

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
            {t("hero_location")}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-6 animate-slide-up">
            Le Solerey
          </h1>
          <div className="gold-line mx-auto mb-6" />
          <p className="font-display text-xl md:text-2xl italic text-cream/80 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {t("hero_subtitle")}
          </p>
          <p className="text-cream/60 text-sm tracking-wider mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {t("hero_specs")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Link
              href="/photos"
              className="px-8 py-3.5 border border-cream/30 text-cream text-sm tracking-widest uppercase hover:bg-cream/10 transition-colors duration-300"
            >
              {t("hero_cta_photos")}
            </Link>
            <a
              href="https://www.airbnb.fr/rooms/1069918179722628241"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-chalet-gold text-chalet-dark text-sm font-semibold tracking-widest uppercase hover:bg-chalet-gold/90 transition-colors duration-300"
            >
              {t("hero_cta_book")}
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
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-stone mb-4">{t("features_label")}</p>
            <h2 className="font-display text-3xl md:text-4xl">{t("features_title")}</h2>
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
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-stone mb-4">{t("gallery_label")}</p>
            <h2 className="font-display text-3xl md:text-4xl">{t("gallery_title")}</h2>
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
              {t("gallery_cta")}
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
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-stone mb-4">{t("history_label")}</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">{t("history_title")}</h2>
            <div className="gold-line mb-8" />
            <p className="text-chalet-brown/80 leading-relaxed mb-4">
              {t("history_p1")}
            </p>
            <p className="text-chalet-brown/80 leading-relaxed mb-8">
              {t("history_p2")}
            </p>
            <Link
              href="/histoire"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-chalet-wood hover:text-chalet-brown transition-colors"
            >
              {t("history_cta")}
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
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">{t("seo_label")}</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream">
              {t("seo_title")}
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="space-y-6 text-cream/70 leading-relaxed">
            <p>{t("seo_p1")}</p>
            <p>{t("seo_p2")}</p>
            <p>{t("seo_p3")}</p>
            <p>{t("seo_p4")}</p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 pt-8 border-t border-cream/10">
            <h3 className="font-display text-2xl text-cream mb-4">{t("cta_title")}</h3>
            <p className="text-cream/50 mb-6 text-sm">
              {t("cta_subtitle")}
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
                {t("cta_contact")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
