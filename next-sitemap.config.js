/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.solerey.com",
  generateRobotsTxt: false, // We have a manual one
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async () => [
    { loc: "/", priority: 1.0, changefreq: "weekly" },
    { loc: "/photos", priority: 0.9, changefreq: "monthly" },
    { loc: "/histoire", priority: 0.7, changefreq: "yearly" },
    { loc: "/activites", priority: 0.8, changefreq: "monthly" },
  ],
};
