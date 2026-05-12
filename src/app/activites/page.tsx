import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Que faire à Chamonix ? Activités depuis le Chalet Le Solerey",
  description:
    "Randonnées, ski, escalade, restaurants... Découvrez les meilleures activités à faire depuis le chalet Le Solerey au Lavancher, vallée de Chamonix-Mont-Blanc.",
  alternates: { canonical: "https://www.le-solerey.com/activites" },
};

interface Activity {
  title: string;
  type: string;
  duration?: string;
  description: string;
  image: string;
  imageAlt: string;
  difficulty?: "easy" | "medium" | "hard";
  link?: string;
}

const LAVANCHER_ACTIVITIES: Activity[] = [
  {
    title: "Le Chapeau",
    type: "Randonnée",
    duration: "1h15 (aller)",
    description:
      "La randonnée commence depuis le sommet du Lavancher, un peu plus haut que les Chalets Philippe. À la fin de la promenade, vous trouverez une buvette offrant une vue magnifique sur les aiguilles.",
    image: "/images/activites/chapeau.jpg",
    imageAlt: "Randonnée du Chapeau depuis le Lavancher, Chamonix",
    difficulty: "easy",
  },
  {
    title: "Les Chalets de Philippe",
    type: "Restauration",
    description:
      "Un endroit pittoresque en haut du Lavancher, pour prendre un verre ou même dîner. La vue est imprenable et l'atmosphère authentique.",
    image: "/images/activites/chalets-philippe.jpg",
    imageAlt: "Les Chalets de Philippe, restaurant au Lavancher Chamonix",
    link: "https://chaletsphilippe.com/",
  },
  {
    title: "La Fête du Pain",
    type: "Fête des Guides — 12 août",
    description:
      "Cet événement rassemble l'ensemble de Chamonix autour d'activités organisées dans chaque village de la vallée. Au Lavancher, le four à pain est chauffé pendant trois jours afin de préparer le pain pour le jour J.",
    image: "/images/activites/four-a-pain.jpg",
    imageAlt: "Le four à pain du Lavancher, Fête des Guides Chamonix",
  },
  {
    title: "Le Paradis des Praz",
    type: "Randonnée",
    duration: "1h30",
    description:
      "Cette randonnée facile commence en contrebas du Lavancher, au niveau de l'Arve, puisque le sentier suit le cours de la rivière. Il s'agit d'un itinéraire menant à Chamonix, offrant une zone de loisirs.",
    image: "/images/activites/paradis-praz.jpg",
    imageAlt: "Le Paradis des Praz, randonnée familiale Chamonix",
    difficulty: "easy",
  },
  {
    title: "Les Gorges de l'Arveyron",
    type: "Randonnée & Escalade",
    duration: "40 min (aller)",
    description:
      "La randonnée débute sur le tracé du Chapeau. Il s'agit d'une promenade relativement facile qui conduit à une cascade offrant une vue imprenable sur la vallée. Sur le chemin, vous pouvez aussi vous arrêter aux dalles d'escalade (15 voies, 60 m de hauteur).",
    image: "/images/activites/gorges-arveyron.jpg",
    imageAlt: "Les gorges de l'Arveyron, randonnée et cascade Chamonix",
    difficulty: "easy",
  },
];

const RECOMMENDED_ACTIVITIES: Activity[] = [
  {
    title: "Le Buet",
    type: "Randonnée",
    duration: "6h30 (aller-retour)",
    description:
      "Le départ de cette randonnée s'effectue depuis le village du Buet, où vous découvrirez la charmante cascade de Bérart agrémentée d'une buvette. Au sommet, une perspective panoramique à 360 degrés sur le massif du Mont Blanc, les Alpes du Nord et les Alpes suisses.",
    image: "/images/activites/buet.jpg",
    imageAlt: "Sommet du Buet, panorama 360° Mont-Blanc Chamonix",
    difficulty: "hard",
  },
  {
    title: "Le Refuge d'Albert 1er",
    type: "Randonnée",
    duration: "6h30 (aller-retour)",
    description:
      "L'accès à ce refuge se fait par les remontées mécaniques du Tour, situé sur le plateau du glacier du Tour. Il offre une vue panoramique à 180 degrés sur les aiguilles du Chardonnay, Argentière, Tour, et le Mont-Blanc.",
    image: "/images/activites/refuge-albert.jpg",
    imageAlt: "Refuge d'Albert 1er, glacier du Tour, Chamonix",
    difficulty: "hard",
  },
  {
    title: "Le Lac Blanc",
    type: "Randonnée",
    duration: "6h30 (aller-retour)",
    description:
      "Classée parmi les dix plus beaux endroits de France, cette randonnée allie une vue panoramique exceptionnelle à une réserve naturelle où l'on peut observer bouquetins et marmottes. Départ depuis Argentière ou les remontées de la Flégère.",
    image: "/images/activites/lac-blanc.jpeg",
    imageAlt: "Lac Blanc randonnée Chamonix, vue Mont-Blanc bouquetins",
    difficulty: "medium",
  },
  {
    title: "Le Barrage d'Émossons",
    type: "Activité en famille",
    description:
      "À une altitude de 1950 mètres, l'endroit est accessible en voiture. C'est également le point de départ d'une randonnée menant au refuge d'Émossons, où l'on peut voir des traces de dinosaures.",
    image: "/images/activites/emosson.jpg",
    imageAlt: "Barrage d'Emosson, activité familiale vallée de Chamonix",
    difficulty: "easy",
  },
  {
    title: "Le Refuge du Nid d'Aigle",
    type: "Randonnée",
    duration: "4h (aller-retour)",
    description:
      "Pour atteindre le refuge, vous pouvez emprunter le tramway du Mont-Blanc. La descente s'effectue le long du glacier de Bonnassay, s'ouvrant sur une vallée où des chevaux gambadent en toute liberté dans un paysage magique.",
    image: "/images/activites/nid-aigle.jpeg",
    imageAlt: "Refuge du Nid d'Aigle, tramway du Mont-Blanc Chamonix",
    difficulty: "medium",
  },
];

function DifficultyBadge({ level }: { level: "easy" | "medium" | "hard" }) {
  const config = {
    easy: { label: "Facile", color: "bg-green-600/20 text-green-800" },
    medium: { label: "Moyen", color: "bg-amber-600/20 text-amber-800" },
    hard: { label: "Difficile", color: "bg-red-600/20 text-red-800" },
  };
  const c = config[level];
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${c.color}`}>
      {c.label}
    </span>
  );
}

function ActivityCard({ activity }: { activity: Activity }) {
  const content = (
    <>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs tracking-widest uppercase text-chalet-gold">
            {activity.type}
          </span>
          {activity.duration && (
            <span className="text-xs text-chalet-stone">· {activity.duration}</span>
          )}
          {activity.difficulty && <DifficultyBadge level={activity.difficulty} />}
        </div>
        <h3 className="font-display text-xl mb-3">{activity.title}</h3>
        <p className="text-chalet-brown/70 text-sm leading-relaxed">
          {activity.description}
        </p>
        {activity.link && (
          <span className="inline-flex items-center gap-1 mt-4 text-sm text-chalet-gold hover:text-chalet-warm transition-colors">
            Réserver
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  const className = "bg-white rounded-sm overflow-hidden card-hover group block";

  if (activity.link) {
    return (
      <a href={activity.link} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default function ActivitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-chalet-dark text-cream pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">
            Vallée de Chamonix
          </p>
          <h1 className="font-display text-4xl md:text-6xl mb-6">
            Activités depuis le chalet
          </h1>
          <p className="text-cream/50 max-w-2xl mx-auto">
            Randonnées, escalade, restaurants, événements locaux... Découvrez nos
            recommandations pour profiter de la vallée de Chamonix-Mont-Blanc.
          </p>
        </div>
      </section>

      {/* Activités du Lavancher */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">
              À deux pas du chalet
            </p>
            <h2 className="font-display text-3xl">Activités du Lavancher</h2>
            <div className="gold-line mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LAVANCHER_ACTIVITIES.map((a) => (
              <ActivityCard key={a.title} activity={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Nos recommandations */}
      <section className="section-padding bg-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">
              Nos coups de cœur
            </p>
            <h2 className="font-display text-3xl mb-6">
              Activités que nous vous recommandons
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-chalet-brown/70 leading-relaxed">
              Il est souvent conseillé de monter à l&apos;Aiguille du Midi ou visiter le Montenvers
              pour explorer la vallée de Chamonix. Ici on vous partage des expériences un peu plus
              personnelles qui nous ont marqué parce que moins touristiques mais tout autant
              époustouflantes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECOMMENDED_ACTIVITIES.map((a) => (
              <ActivityCard key={a.title} activity={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
