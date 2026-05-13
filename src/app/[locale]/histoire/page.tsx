import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("history_title"),
    description: t("history_description"),
    alternates: { canonical: `https://www.solerey.com${locale === "fr" ? "" : `/${locale}`}/histoire` },
  };
}

export default async function HistoirePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "history" });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/histoire/vue-mont-blanc.jpg"
          alt="Vue sur le Mont-Blanc depuis Le Solerey au Lavancher"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-12 max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">{t("hero_label")}</p>
          <h1 className="font-display text-4xl md:text-6xl text-cream">{t("hero_title")}</h1>
        </div>
      </section>

      {/* 1803 */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">{t("s1_label")}</p>
            <h2 className="font-display text-3xl mb-6">{t("s1_title")}</h2>
            <div className="gold-line mb-8" />
            <p className="text-chalet-brown/80 leading-relaxed mb-4">
              {t("s1_p1")}
            </p>
            <p className="text-chalet-brown/80 leading-relaxed mb-4">
              {t("s1_p2")}
            </p>
            <p className="text-chalet-brown/80 leading-relaxed">
              {t("s1_p3")}
            </p>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image
              src="/images/histoire/vue-mont-blanc.jpg"
              alt="Vue sur le Mont-Blanc depuis Le Solerey"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Après 1900 */}
      <section className="section-padding bg-cream-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">{t("s2_label")}</p>
            <h2 className="font-display text-3xl">{t("s2_title")}</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <p className="text-chalet-brown/80 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
            {t("s2_p1")}
          </p>
          <p className="text-chalet-brown/80 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
            {t("s2_p2")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/histoire/hotel-beau-sejour.jpg"
                alt="L'hôtel Beau-Séjour au Lavancher, Chamonix"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/histoire/anciens-proprietaires.jpg"
                alt="Anciens propriétaires de la ferme Le Solerey"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/histoire/lavancher-ancien-1.jpg"
                alt="Le Lavancher à l'époque, vue historique"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/histoire/lavancher-ancien-2.jpg"
                alt="Le village du Lavancher historique"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Le Lavancher */}
      <section className="section-padding bg-chalet-dark text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">{t("s3_label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-8">
            {t("s3_title")}
          </h2>
          <div className="gold-line mx-auto mb-10" />
          <p className="text-cream/70 leading-relaxed text-lg">
            {t("s3_p")}
          </p>
        </div>
      </section>
    </>
  );
}
