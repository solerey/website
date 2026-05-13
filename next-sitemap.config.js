/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.solerey.com",
  generateRobotsTxt: false, // We have a manual one
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async () => [
    // FR (défaut — pas de préfixe)
    { loc: "/",          priority: 1.0, changefreq: "weekly"  },
    { loc: "/photos",    priority: 0.9, changefreq: "monthly" },
    { loc: "/histoire",  priority: 0.7, changefreq: "yearly"  },
    { loc: "/activites", priority: 0.8, changefreq: "monthly" },
    // EN
    { loc: "/en",            priority: 0.9, changefreq: "weekly"  },
    { loc: "/en/photos",     priority: 0.8, changefreq: "monthly" },
    { loc: "/en/history",    priority: 0.7, changefreq: "yearly"  },
    { loc: "/en/activities", priority: 0.8, changefreq: "monthly" },
    // IT
    { loc: "/it",           priority: 0.9, changefreq: "weekly"  },
    { loc: "/it/foto",      priority: 0.8, changefreq: "monthly" },
    { loc: "/it/storia",    priority: 0.7, changefreq: "yearly"  },
    { loc: "/it/attivita",  priority: 0.8, changefreq: "monthly" },
    // DE
    { loc: "/de",                priority: 0.9, changefreq: "weekly"  },
    { loc: "/de/fotos",          priority: 0.8, changefreq: "monthly" },
    { loc: "/de/geschichte",     priority: 0.7, changefreq: "yearly"  },
    { loc: "/de/aktivitaeten",   priority: 0.8, changefreq: "monthly" },
  ],
};
