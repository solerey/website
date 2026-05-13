import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "it", "de"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/histoire": {
      fr: "/histoire",
      en: "/history",
      it: "/storia",
      de: "/geschichte",
    },
    "/photos": {
      fr: "/photos",
      en: "/photos",
      it: "/foto",
      de: "/fotos",
    },
    "/activites": {
      fr: "/activites",
      en: "/activities",
      it: "/attivita",
      de: "/aktivitaeten",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;
