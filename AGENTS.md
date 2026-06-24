# Agent Instructions

This is the production Astro source repo for the Motion / SCALE MOTION website.

## Core Rules

- Preserve SEO on every page: title, description, canonical, Open Graph, H1, and relevant JSON-LD.
- Preserve visual consistency by editing src/styles/tokens.css first, then component CSS only when needed.
- Componentize repeated UI. Do not duplicate large HTML sections across pages.
- Keep site/business data in src/data.
- Never hardcode local machine paths.
- Do not reintroduce Webflow-generated scripts/classes or Cloudflare Worker server logic into the Astro site.
- Contact forms are static until wired to a real handler. Do not invent a fake backend.
- Run npm run build before finalizing changes.
- Update README.md after route, integration, deployment, or structure changes.

## Compliance Notes

- Privacy and terms pages must remain easy to find in navigation/footer.
- SMS/A2P language lives in src/data/legal.ts.
- Native forms do not collect phone numbers while the GoHighLevel chat widget handles SMS opt-in.

