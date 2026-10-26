import react from '@astrojs/react';
import { conlocaCMS } from '@conloca/astro-cms/node';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://forge-athletics.example',
  trailingSlash: 'never',
  integrations: [
    react(),
    conlocaCMS({
      contentRoot: './content',
      puckConfigPath: './src/puck.config.tsx',
      schemasPath: './src/schemas.ts',
      assetsPath: './public/images',
      siteStyles: './src/styles/global.css',
      routing: {
        routes: {
          pages: {
            pattern: '/cms/[...slug]',
            collection: 'pages',
            layout: './src/layouts/BaseLayout.astro',
            prerender: true,
          },
        },
      },
    }),
  ],
});
