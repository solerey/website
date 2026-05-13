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
    title: t("activities_title"),
    description: t("activities_description"),
    alternates: { canonical: `https://www.solerey.com${locale === "fr" ? "" : `/${locale}`}/activites` },
  };
}

interface Activity {
  title: string;
  type: string;
  duration?: string;
  description: string;
  image: string;
  imageAlt: string;
  difficulty?: "easy" | "medium" | "hard";
  difficultyLabel?: string;
  link?: string;
  bookLabel?: string;
}

function DifficultyBadge({ level, label }: { level: "easy" | "medium" | "hard"; label: string }) {
  const colors = {
    easy: "bg-green-600/20 text-green-800",
    medium: "bg-amber-600/20 text-amber-800",
    hard: "bg-red-600/20 text-red-800",
  };
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${colors[level]}`}>
      {label}
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
          {activity.difficulty && activity.difficultyLabel && (
            <DifficultyBadge level={activity.difficulty} label={activity.difficultyLabel} />
          )}
        </div>
        <h3 className="font-display text-xl mb-3">{activity.title}</h3>
        <p className="text-chalet-brown/70 text-sm leading-relaxed">
          {activity.description}
        </p>
        {activity.link && activity.bookLabel && (
          <span className="inline-flex items-center gap-1 mt-4 text-sm text-chalet-gold hover:text-chalet-warm transition-colors">
            {activity.bookLabel}
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

export default async function ActivitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "activities" });

  const difficultyLabel = (level: "easy" | "medium" | "hard") => {
    const map = {
      easy: t("difficulty_easy"),
      medium: t("difficulty_medium"),
      hard: t("difficulty_hard"),
    };
    return map[level];
  };

  const LAVANCHER_ACTIVITIES: Activity[] = [
    {
      title: t("act_chapeau_title"),
      type: t("act_chapeau_type"),
      duration: t("act_chapeau_duration"),
      description: t("act_chapeau_desc"),
      image: "/images/activites/chapeau.jpg",
      imageAlt: "Randonnée du Chapeau depuis le Lavancher, Chamonix",
      difficulty: "easy",
      difficultyLabel: difficultyLabel("easy"),
    },
    {
      title: t("act_philippe_title"),
      type: t("act_philippe_type"),
      description: t("act_philippe_desc"),
      image: "/images/activites/chalets-philippe.jpg",
      imageAlt: "Les Chalets de Philippe, restaurant au Lavancher Chamonix",
      link: "https://chaletsphilippe.com/",
      bookLabel: t("book_link"),
    },
    {
      title: t("act_pain_title"),
      type: t("act_pain_type"),
      description: t("act_pain_desc"),
      image: "/images/activites/four-a-pain.jpg",
      imageAlt: "Le four à pain du Lavancher, Fête des Guides Chamonix",
    },
    {
      title: t("act_praz_title"),
      type: t("act_praz_type"),
      duration: t("act_praz_duration"),
      description: t("act_praz_desc"),
      image: "/images/activites/paradis-praz.jpg",
      imageAlt: "Le Paradis des Praz, randonnée familiale Chamonix",
      difficulty: "easy",
      difficultyLabel: difficultyLabel("easy"),
    },
    {
      title: t("act_gorges_title"),
      type: t("act_gorges_type"),
      duration: t("act_gorges_duration"),
      description: t("act_gorges_desc"),
      image: "/images/activites/gorges-arveyron.jpg",
      imageAlt: "Les gorges de l'Arveyron, randonnée et cascade Chamonix",
      difficulty: "easy",
      difficultyLabel: difficultyLabel("easy"),
    },
  ];

  const RECOMMENDED_ACTIVITIES: Activity[] = [
    {
      title: t("act_buet_title"),
      type: t("act_buet_type"),
      duration: t("act_buet_duration"),
      description: t("act_buet_desc"),
      image: "/images/activites/buet.jpg",
      imageAlt: "Sommet du Buet, panorama 360° Mont-Blanc Chamonix",
      difficulty: "hard",
      difficultyLabel: difficultyLabel("hard"),
    },
    {
      title: t("act_albert_title"),
      type: t("act_albert_type"),
      duration: t("act_albert_duration"),
      description: t("act_albert_desc"),
      image: "/images/activites/refuge-albert.jpg",
      imageAlt: "Refuge d'Albert 1er, glacier du Tour, Chamonix",
      difficulty: "hard",
      difficultyLabel: difficultyLabel("hard"),
    },
    {
      title: t("act_lacblanc_title"),
      type: t("act_lacblanc_type"),
      duration: t("act_lacblanc_duration"),
      description: t("act_lacblanc_desc"),
      image: "/images/activites/lac-blanc.jpeg",
      imageAlt: "Lac Blanc randonnée Chamonix, vue Mont-Blanc bouquetins",
      difficulty: "medium",
      difficultyLabel: difficultyLabel("medium"),
    },
    {
      title: t("act_emosson_title"),
      type: t("act_emosson_type"),
      description: t("act_emosson_desc"),
      image: "/images/activites/emosson.jpg",
      imageAlt: "Barrage d'Emosson, activité familiale vallée de Chamonix",
      difficulty: "easy",
      difficultyLabel: difficultyLabel("easy"),
    },
    {
      title: t("act_nid_title"),
      type: t("act_nid_type"),
      duration: t("act_nid_duration"),
      description: t("act_nid_desc"),
      image: "/images/activites/nid-aigle.jpeg",
      imageAlt: "Refuge du Nid d'Aigle, tramway du Mont-Blanc Chamonix",
      difficulty: "medium",
      difficultyLabel: difficultyLabel("medium"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-chalet-dark text-cream pt-32 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">
            {t("hero_label")}
          </p>
          <h1 className="font-display text-4xl md:text-6xl mb-6">
            {t("hero_title")}
          </h1>
          <p className="text-cream/50 max-w-2xl mx-auto">
            {t("hero_subtitle")}
          </p>
        </div>
      </section>

      {/* Activités du Lavancher */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-chalet-gold mb-4">
              {t("nearby_label")}
            </p>
            <h2 className="font-display text-3xl">{t("nearby_title")}</h2>
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
              {t("recommended_label")}
            </p>
            <h2 className="font-display text-3xl mb-6">
              {t("recommended_title")}
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-chalet-brown/70 leading-relaxed">
              {t("recommended_intro")}
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
