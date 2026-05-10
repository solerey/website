import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Que faire à Chamonix ? Activités depuis le Chalet Le Solerey",
  description: "Randonnées, ski, escalade : les meilleures activités depuis le chalet Le Solerey au Lavancher. Le Chapeau, Lac Blanc, Refuge Albert 1er et plus.",
};

const local = [
  { title: "Le Chapeau", type: "Randonnée — 1h15 (aller)", desc: "La randonnée commence depuis le sommet du Lavancher. À la fin, une buvette offrant une vue magnifique sur les aiguilles.", img: "75c90c_598a77f917f64cf5a60696935352481e~mv2.png", alt: "Randonnée du Chapeau Lavancher Chamonix" },
  { title: "Les Chalets de Philippe", type: "Restauration", desc: "Un endroit pittoresque en haut du Lavancher, pour prendre un verre ou dîner. Vue imprenable et atmosphère authentique.", img: "75c90c_6a98c34e3f1f4095a591ac11b412e56f~mv2.jpg", alt: "Les Chalets de Philippe Lavancher", link: "https://chaletsphilippe.com/" },
  { title: "Le Paradis des Praz", type: "Randonnée — 1h30", desc: "Randonnée facile le long de l'Arve vers Chamonix, avec zone de loisirs et balades à poney.", img: "75c90c_8f0221832561429c8da3f9fb43d7f188~mv2.jpg", alt: "Paradis des Praz randonnée Chamonix" },
  { title: "Les Gorges de l'Arveyron", type: "Randonnée — 40 min · Escalade 4e-7e", desc: "Promenade vers une cascade avec vue imprenable. Sur le chemin, 15 voies d'escalade sur 60 m de hauteur.", img: "75c90c_c55fb72d279845e386bfec52d1bb6c10~mv2.jpg", alt: "Gorges de l'Arveyron Chamonix escalade" },
  { title: "La Fête du Pain", type: "Fête des Guides · 12 août", desc: "Le four à pain est chauffé trois jours. Vente de pain l'après-midi, dîner et concert traditionnel le soir.", img: "75c90c_56dab87313764d4395ab5b15b233da2a~mv2.jpg", alt: "Fête du Pain four communal Lavancher" },
];

const recommended = [
  { title: "Le Buet", type: "Randonnée — 6h30", diff: "Difficile", desc: "Panorama 360° sur le Mont-Blanc, les Alpes du Nord et suisses. En chemin, la cascade de Bérart et sa buvette.", img: "75c90c_07d07f693df8467dbc54bdbc8ffb9ccb~mv2.jpg", alt: "Sommet du Buet vue Mont-Blanc" },
  { title: "Refuge d'Albert 1er", type: "Randonnée — 6h30", diff: "Difficile", desc: "Sur le glacier du Tour, vue 180° sur les aiguilles du Chardonnet, Argentière, Tour et le Mont-Blanc.", img: "75c90c_6aa2ed6e8d6f4001a2ff83275ca6715b~mv2.jpg", alt: "Refuge Albert 1er glacier du Tour" },
  { title: "Le Lac Blanc", type: "Randonnée — 6h30", diff: "Difficile", desc: "Classé parmi les dix plus beaux endroits de France. Bouquetins, marmottes, réserve naturelle.", img: "75c90c_eed8823ee00f42f5b5b386afed29cb9b~mv2.jpeg", alt: "Lac Blanc Chamonix Mont-Blanc" },
  { title: "Barrage d'Émosson", type: "Activité familiale", diff: "Facile", desc: "À 1950 m, accessible en voiture. Randonnée vers le refuge avec traces de dinosaures.", img: "75c90c_f1963f19fcfa42f9bd9b268172c61c42~mv2.jpg", alt: "Barrage Émosson activité famille" },
  { title: "Refuge du Nid d'Aigle", type: "Randonnée — 4h", diff: "Moyen", desc: "Via le tramway du Mont-Blanc. Descente le long du glacier de Bionnassay, chevaux en liberté.", img: "75c90c_61d3009de536422cac0334803fa6a4b6~mv2.jpeg", alt: "Refuge Nid d'Aigle tramway Mont-Blanc" },
];

function Card({ a }: { a: { title: string; type: string; desc: string; img: string; alt: string; diff?: string; link?: string } }) {
  return (
    <div className="overflow-hidden transition-transform hover:-translate-y-1" style={{ backgroundColor: "var(--color-snow)" }}>
      <div className="img-zoom h-56 overflow-hidden">
        <img src={`https://static.wixstatic.com/media/${a.img}`} alt={a.alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl" style={{ fontFamily: "var(--font-display)" }}>{a.title}</h3>
          {a.diff && (
            <span className="text-xs px-2 py-0.5 rounded-sm" style={{
              backgroundColor: a.diff === "Facile" ? "#e8f5e9" : a.diff === "Moyen" ? "#fff8e1" : "#fce4ec",
              color: a.diff === "Facile" ? "#2e7d32" : a.diff === "Moyen" ? "#f57f17" : "#c62828",
            }}>{a.diff}</span>
          )}
        </div>
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--color-gold)" }}>{a.type}</p>
        <p className="text-sm leading-relaxed" style={{ opacity: 0.7 }}>{a.desc}</p>
        {a.link && (
          <a href={a.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm tracking-wider uppercase pb-0.5" style={{ color: "var(--color-gold)", borderBottom: "1px solid var(--color-gold)" }}>Réserver →</a>
        )}
      </div>
    </div>
  );
}

export default function Activites() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center" style={{ backgroundColor: "var(--color-stone)" }}>
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>Été & Hiver</p>
          <h1 className="text-4xl md:text-6xl" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>Activités de la Vallée</h1>
          <div className="gold-line-center" />
          <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: "var(--color-warm)", opacity: 0.7 }}>Randonnées, escalade, ski, gastronomie — le Lavancher est le point de départ idéal.</p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>À deux pas du chalet</p>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Activités du Lavancher</h2>
          <div className="gold-line mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {local.map((a, i) => <Card key={i} a={a} />)}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-warm)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>Nos recommandations</p>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Activités que nous vous recommandons</h2>
          <div className="gold-line" />
          <p className="text-base mb-12 mt-6 max-w-3xl" style={{ opacity: 0.7 }}>Des expériences plus personnelles qui nous ont marqués — moins touristiques mais tout autant époustouflantes.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommended.map((a, i) => <Card key={i} a={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
