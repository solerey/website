import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Histoire du Chalet Le Solerey — Ferme de 1803 au Lavancher",
  description:
    "Découvrez l'histoire du Solerey, ferme savoyarde construite en 1803 au Lavancher, Chamonix-Mont-Blanc. De l'élevage à la location de vacances haut de gamme.",
  alternates: { canonical: "https://www.le-solerey.com/histoire" },
};

export default function HistoirePage() {
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
          <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">Depuis 1803</p>
          <h1 className="font-display text-4xl md:text-6xl text-cream">Notre Histoire</h1>
        </div>
      </section>

      {/* 1803 */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">1803</p>
            <h2 className="font-display text-3xl mb-6">Construction de la ferme</h2>
            <div className="gold-line mb-8" />
            <p className="text-chalet-brown/80 leading-relaxed mb-4">
              Construit en 1803 par Michel Cachat, le Solerey était à l&apos;origine une ferme. La
              pièce centrale au rez-de-chaussée (l&apos;étable) accueillait le bétail. Un tiers
              seulement était habitable, autour de la cuisine et de sa grande cheminée.
            </p>
            <p className="text-chalet-brown/80 leading-relaxed mb-4">
              On y trouve également la pièce de vie avec son poêle, utilisé comme salon et chambre.
              L&apos;étage était réservé au stockage du foin. À cette époque, les principales
              activités des cinq fermes au Lavancher sont l&apos;élevage et la culture de pommes de
              terre comme aliment de base.
            </p>
            <p className="text-chalet-brown/80 leading-relaxed">
              Toutes regroupées autour du four à pain, elles ont vu petit à petit grandir
              l&apos;engouement pour la montagne. Le Lavancher était le chemin incontournable pour
              atteindre la Vallée Blanche par le Chapeau et le Mauvais Pas. C&apos;est ainsi que
              Le Solerey a abrité le cordonnier des alpinistes.
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
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">Après 1900</p>
            <h2 className="font-display text-3xl">L&apos;essor du tourisme</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <p className="text-chalet-brown/80 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
            À cette époque, le tourisme battait son plein, bien que les activités traditionnelles
            du Lavancher, axées sur la culture des champs, soient restées inchangées. Des hôtels,
            tels que l&apos;Hôtel Beau-Séjour, ont fait leur apparition pour accueillir les skieurs
            revenant de la Vallée Blanche.
          </p>
          <p className="text-chalet-brown/80 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
            En 1905, Chamonix Mont Blanc a connu un record de froid avec des températures descendant
            jusqu&apos;à -31 degrés. En 1908, une première section du chemin de fer du Montenvers a
            été inaugurée, offrant un accès à la Mer de Glace. Les Jeux Olympiques d&apos;hiver ont
            marqué l&apos;année 1924.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/histoire/hotel-beau-sejour.png"
                alt="L'hôtel Beau-Séjour au Lavancher, Chamonix"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/histoire/anciens-proprietaires.png"
                alt="Anciens propriétaires de la ferme Le Solerey"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/histoire/lavancher-ancien-1.png"
                alt="Le Lavancher à l'époque, vue historique"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/histoire/lavancher-ancien-2.png"
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
          <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">Le village</p>
          <h2 className="font-display text-3xl md:text-4xl mb-8">
            Pourquoi le Lavancher est-il unique ?
          </h2>
          <div className="gold-line mx-auto mb-10" />
          <p className="text-cream/70 leading-relaxed text-lg">
            À 1200 m d&apos;altitude, ensoleillé et dominant la vallée, Le Lavancher offre une
            vue imprenable sur les aiguilles : un coin idéal pour échapper à l&apos;agitation de
            Chamonix. Point central des trois domaines skiables, traversé par la piste de ski de
            fond, Le Lavancher est aussi le point de départ de nombreuses randonnées. Le Lavancher
            est porteur d&apos;une grande histoire et il est difficile de ne pas s&apos;y sentir
            chez soi.
          </p>
        </div>
      </section>
    </>
  );
}
