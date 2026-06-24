# ScaleMotions Astro

Production-ready Astro source project for the Motion / SCALE MOTION marketing website at scalemotions.com.

This repo replaces the previous Cloudflare Worker/TanStack React export and the temporary Webflow-uploadable planning package. The site is now a static-first Astro marketing website with semantic pages, reusable components, shared data files, SEO schema, compliance/legal routes, and lightweight forms ready to connect to GoHighLevel or another handler.

## Commands

~~~bash
npm install
npm run dev
npm run build
npm run preview
~~~

npm run dev starts the local Astro server. npm run build writes the production site to dist/. npm run preview serves the built site locally.

## Deployment

### Cloudflare Pages

1. Push this folder to GitHub.
2. In Cloudflare Pages, connect the repository.
3. Build command: npm run build
4. Build output directory: dist
5. Node version: 20 or newer.

No Worker runtime is required for this static site. If you later add form handling through Cloudflare Workers, keep that Worker as a separate service or API endpoint and document the endpoint in this README.

### Other static hosts

Any static host that can run npm run build and serve dist/ will work.

## File Structure

~~~text
src/
  components/      Reusable UI sections and primitives
  data/            Business info, navigation, page content, SEO schema helpers
  layouts/         Base HTML shell, navigation, footer, global SEO
  pages/           Astro routes
  styles/          Design tokens and global CSS
public/
  assets/          Logos and static media
  robots.txt       Crawl directives and sitemap link
~~~

## Routes

- /
- /about
- /services
- /industries
- /method
- /portfolio
- /pricing
- /resources
- /testimonials
- /contact
- /privacy
- /privacy-policy
- /terms
- /sitemap.xml

## Integrations

The LeadConnector / GoHighLevel chat widget is loaded globally in src/layouts/BaseLayout.astro. Contact forms are static HTML and intentionally have no fake backend. Connect them by setting the action attribute in src/components/ContactForm.astro to a GoHighLevel form endpoint, Formspree endpoint, Netlify form, or Cloudflare Worker endpoint.

Phone fields are intentionally excluded from native website forms while the chat widget is present, so A2P/10DLC consent stays concentrated in the widget workflow unless registration language changes.

## Editing Rules

- Keep reusable copy in src/data.
- Keep repeated UI in src/components.
- Preserve the legal and SMS/A2P language unless legal/compliance review approves changes.
- Run npm run build before shipping.
- Never hardcode local machine paths.

