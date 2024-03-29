import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://charlesvillard.co/",
  integrations: [preact(), mdx(), sitemap()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});