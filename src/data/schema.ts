import { site } from "./site";

type Crumb = { name: string; path: string };
type FAQ = readonly [string, string];

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: new URL("/assets/motion-logo.png", site.url).toString(),
  email: site.contactEmail,
  sameAs: site.sameAs,
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  url: site.url,
  image: new URL("/assets/motion-logo.png", site.url).toString(),
  email: site.contactEmail,
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    addressCountry: site.address.country,
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  publisher: {
    "@type": "Organization",
    name: site.legalName,
  },
});

export const serviceSchema = (name = "Performance marketing", description = site.description, path = "/services") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
  },
  areaServed: "United States",
  url: new URL(path, site.url).toString(),
});

export const breadcrumbSchema = (items: readonly Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: new URL(item.path, site.url).toString(),
  })),
});

export const faqSchema = (items: readonly FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});

