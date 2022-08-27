import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import image from '@astrojs/image';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://charlesvillard.co",
  integrations: [preact(), image(), mdx()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});