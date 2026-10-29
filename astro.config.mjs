import react from '@astrojs/react';
import { conlocaCMS } from '@conloca/astro-cms/node';
import { conlocaCloud } from '@conloca/cloud-astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://forge-athletics-eight-roan.vercel.app',
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
    conlocaCloud({
      endpoint: 'https://app.conloca.com',
      puckConfigPath: './src/puck.config.tsx',
      siteStyles: './src/styles/global.css',
      previewBuild: false,
    }),
  ],
});
