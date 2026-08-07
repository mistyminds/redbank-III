// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mistyminds.github.io',
  base: '/redbank-III',
  output: 'static',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
