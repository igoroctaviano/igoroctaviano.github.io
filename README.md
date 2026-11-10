# igoroctaviano.com

Personal site, blog and open source tools. Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type check + static build into dist/
```

## Editing content

| What | Where |
| --- | --- |
| Name, bio, greetings, social links | `src/site.ts` |
| Blog posts | `src/content/blog/<slug>.md` (frontmatter: `title`, `description`, `date`, optional `lang`, `draft`) |
| Open source tools | `src/data/tools.json` (`featured: true` shows it on the home page) |
| ioctavis and its products | `COMPANY` in `src/site.ts` (each product links to its own site) |
| Social share image | `node scripts/og.mjs` regenerates `public/og.png` |
