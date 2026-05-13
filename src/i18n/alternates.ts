const BASE = "https://www.solerey.com";

const ROUTES = {
  home:       { fr: "",            en: "/en",           it: "/it",          de: "/de"           },
  histoire:   { fr: "/histoire",   en: "/en/history",   it: "/it/storia",   de: "/de/geschichte" },
  photos:     { fr: "/photos",     en: "/en/photos",    it: "/it/foto",     de: "/de/fotos"      },
  activites:  { fr: "/activites",  en: "/en/activities",it: "/it/attivita", de: "/de/aktivitaeten" },
} as const;

type Route = keyof typeof ROUTES;

export function getAlternates(route: Route) {
  const paths = ROUTES[route];
  return {
    canonical: `${BASE}${paths.fr}`,
    languages: {
      fr:          `${BASE}${paths.fr}`,
      en:          `${BASE}${paths.en}`,
      it:          `${BASE}${paths.it}`,
      de:          `${BASE}${paths.de}`,
      "x-default": `${BASE}${paths.fr}`,
    },
  };
}
