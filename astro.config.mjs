import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://igoroctaviano.com",
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark-dimmed" },
      defaultColor: false,
    },
  },
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--ff-sans",
      weights: ["400 700"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--ff-mono",
      weights: [400],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
  redirects: {
    "/blog/imperativa-vs-funcional.md/": "/blog/imperativa-vs-funcional/",
    "/blog/sistemas-operacionais-exercicios.md/": "/blog/sistemas-operacionais-exercicios/",
    "/blog/using-typescript/": "/blog/",
  },
});
