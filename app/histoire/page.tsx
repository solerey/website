import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Histoire du Chalet Le Solerey — Ferme de 1803",
  description: "L'histoire du Solerey, ferme savoyarde construite en 1803 par Michel Cachat au Lavancher, restaurée en chalet de charme à Chamonix.",
};

export default function Histoire() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: "var(--color-stone)" }}>
        <div className="absolute inset-0">
          <img src="https://static.wixstatic.com/media/75c90c_3e33284447ce466a8848f74d798c2cda~mv2.png" alt="Anciens propriétaires du Solerey" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(44,40,36,0.5), rgba(44,40,36,0.9))" }} />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>Depuis 1803</p>
          <h1 className="text-4xl md:text-6xl" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>Notre Histoire</h1>
          <div className="gold-line-center" />
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* 1803 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-5xl mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", opacity: 0.3 }}>1803</p>
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "var(--font-display)" }}>Construction de la ferme</h2>
              <div className="gold-line" />
              <p className="mt-6 text-base leading-relaxed" style={{ opacity: 0.8 }}>
                Construit en 1803 par Michel Cachat, le Solerey était à l&apos;origine une ferme. La pièce centrale au rez-de-chaussée accueillait le bétail. Un tiers seulement était habitable, autour de la cuisine et de sa grande cheminée. L&apos;étage était réservé au stockage du foin. Les cinq fermes du Lavancher, regroupées autour du four à pain, vivaient de l&apos;élevage et de la culture de pommes de terre. Le Lavancher était le chemin incontournable pour atteindre la Vallée Blanche par le Chapeau et le Mauvais Pas — c&apos;est ainsi que Le Solerey a abrité le cordonnier des alpinistes.
              </p>
            </div>
            <div className="img-zoom">
              <img src="https://static.wixstatic.com/media/75c90c_e7855ca5e8ce4b548950f37cba83bde7~mv2.jpg" alt="Vue Mont-Blanc depuis Le Solerey en 1803" className="w-full h-[400px] object-cover" />
            </div>
          </div>

          {/* Après 1900 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="md:order-2">
              <p className="text-5xl mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", opacity: 0.3 }}>1900</p>
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "var(--font-display)" }}>L&apos;essor du tourisme</h2>
              <div className="gold-line" />
              <p className="mt-6 text-base leading-relaxed" style={{ opacity: 0.8 }}>
                Le tourisme battait son plein, bien que les activités traditionnelles du Lavancher soient restées inchangées. Des hôtels, comme l&apos;Hôtel Beau-Séjour, accueillaient les skieurs de la Vallée Blanche. En 1905, Chamonix connut un record de froid à -31°C. En 1908, le chemin de fer du Montenvers fut inauguré. Les Jeux Olympiques d&apos;hiver marquèrent l&apos;année 1924.
              </p>
            </div>
            <div className="img-zoom md:order-1">
              <img src="https://static.wixstatic.com/media/75c90c_3e52f582802e476592bd6227b8645cab~mv2.png" alt="Hôtel Beau-Séjour Chamonix début XXe siècle" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Historical photos */}
      <section className="py-20" style={{ backgroundColor: "var(--color-warm)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl text-center mb-4" style={{ fontFamily: "var(--font-display)" }}>Le Lavancher d&apos;antan</h2>
          <div className="gold-line-center mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="img-zoom"><img src="https://static.wixstatic.com/media/75c90c_ed3e6c46d36645ba9e73337285679f63~mv2.png" alt="Le Lavancher historique" className="w-full h-[400px] object-cover" /></div>
            <div className="img-zoom"><img src="https://static.wixstatic.com/media/75c90c_d5ee5ec4a7f140e7a12ef6ee6af4e281~mv2.png" alt="Le Lavancher ancien" className="w-full h-[400px] object-cover" /></div>
          </div>
        </div>
      </section>

      {/* Le Lavancher */}
      <section className="py-20" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>1200m d&apos;altitude</p>
          <h2 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: "var(--font-display)" }}>Pourquoi le Lavancher est-il unique ?</h2>
          <div className="gold-line-center" />
          <p className="mt-8 text-base leading-relaxed" style={{ opacity: 0.8 }}>
            Ensoleillé et dominant la vallée, Le Lavancher offre une vue imprenable sur les aiguilles : un coin idéal pour échapper à l&apos;agitation de Chamonix. Point central des trois domaines skiables, traversé par la piste de ski de fond, c&apos;est aussi le point de départ de nombreuses randonnées. Le Lavancher est porteur d&apos;une grande histoire et il est difficile de ne pas s&apos;y sentir chez soi.
          </p>
        </div>
      </section>
    </>
  );
}
