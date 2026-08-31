export const navCta = { label: "Start Free Recovery Check", href: "/#free-feedback" } as const;

/**
 * Inner marketing pages are intentionally unlisted: no nav links, no footer
 * links, excluded from the sitemap, and served with noindex. Restore entries
 * here (and in pageRoutes/footerLinks) to bring a page back.
 */
export const navigationLinks = [] as const;

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

/** Publicly discoverable routes only — feeds sitemap.xml. */
export const pageRoutes = [
  { path: "/", label: "Home" },
  { path: "/privacy", label: "Privacy" },
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms" },
] as const;
