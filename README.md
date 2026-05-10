# Chalet Le Solerey — Site web

Site vitrine pour le chalet Le Solerey, location de vacances à Chamonix-Mont-Blanc.

## Stack

- **Next.js 15** (App Router, static export)
- **Tailwind CSS**
- **TypeScript**
- **next-sitemap** (SEO)

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Le site est exporté en statique dans `out/`. Déployable sur Vercel, IONOS, Cloudflare Pages, etc.

## SEO intégré

- JSON-LD `LodgingBusiness` (schema.org)
- Meta tags Open Graph + Twitter Card
- Sitemap XML auto-généré
- Alt text SEO sur toutes les images
- robots.txt
- URLs propres sans accent
