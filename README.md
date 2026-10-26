# FORGE Athletics

A multi-page, static Astro site for a fictional neighborhood gym in Austin, Texas. All business details, people, prices, reviews, and article content are dummy data.

## Run locally

Requires Node.js 24.x and Bun.

```sh
bun install
bun run dev
```

Astro serves the site at `http://localhost:4321`.

```sh
bun run check    # Astro and TypeScript diagnostics
bun run build    # Static production output in dist/
bun run preview  # Serve the production build locally
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page, services, method, trainers, pricing, testimonials, and latest articles |
| `/services` | Detailed service sections with deep links |
| `/trainers` | Trainer biographies and specialty filters |
| `/pricing` | Monthly/annual pricing, comparison table, and FAQs |
| `/blog` | Filterable journal index |
| `/blog/[slug]` | Six statically generated articles |
| `/schedule` | Keyboard-accessible weekly class schedule |
| `/contact` | Contact details and query-aware email-draft form |
| `/404` | Branded not-found page |

## Content architecture

`src/data/gym.ts` currently holds the site's typed dummy content. Reusable view fragments live in `src/components`; route-specific composition lives in `src/pages`.

Conloca `0.2.1` is configured for local editing at `/__cms`. The integration uses `content/` as its content root, `src/puck.config.tsx` for the editor palette, `src/schemas.ts` for structured content, and `public/images` for the Media Library. The local editor and all 14 existing media assets have been verified.

The intended content mapping is:

- **Fragments:** site settings, SEO, navigation, shared heroes and CTAs, method steps, FAQs, and testimonials.
- **Data collections:** services, trainers, membership plans, journal articles, classes, schedules, and recurring metrics.
- **Media:** photography stored in `public/images` and managed through the Media Library.

Hosted Conloca Cloud registration is not configured yet. It requires the real Vercel production URL and the user-managed build token; no live registration is claimed.

## Forms and scheduling

The site is fully static and has no form backend. Contact and class-request forms open the visitor’s email application with a pre-filled message. Plan, billing, service, class, and day query parameters are applied in the browser so they also work on static hosting. No personal form data is stored by the site.

## Project structure

```text
content/       Conloca site registry and editable content
src/
  components/   Shared cards, navigation, footer, heroes, CTA, FAQ, and icons
  data/         Typed dummy gym content
  layouts/      SEO and global page shell
  pages/        Static routes and article generation
  styles/       Design tokens, base styles, and shared utilities
  puck.config.tsx
  schemas.ts
public/
  images/       Demo photography available in the Media Library
  favicon.svg
  robots.txt
vercel.json    Vercel build and _conloca CORS configuration
```

Photography is sourced from Unsplash and stored locally for reliable rendering.
