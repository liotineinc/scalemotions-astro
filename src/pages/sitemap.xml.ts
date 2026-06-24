import type { APIRoute } from "astro";
import { pageRoutes } from "../data/navigation";
import { site } from "../data/site";

export const GET: APIRoute = () => {
  const urls = pageRoutes
    .map((route) => {
      const loc = new URL(route.path, site.url).toString();
      return "<url><loc>" + loc + "</loc><changefreq>weekly</changefreq><priority>" + (route.path === "/" ? "1.0" : "0.7") + "</priority></url>";
    })
    .join("");

  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + "</urlset>", {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

