export const pricingPackages = [
  {
    title: "Foundation",
    bestFor: "For businesses that need the basics fixed first.",
    items: ["Website review", "Tracking + analytics setup", "Local visibility review", "Conversion recommendations", "Priority plan"],
  },
  {
    title: "Growth",
    bestFor: "For businesses ready to improve leads, visibility, ads, SEO, and conversion.",
    items: ["Foundation +", "Website rebuild or recovery", "Google Maps + organic SEO", "Google Ads or Meta Ads", "CRM + review systems"],
    featured: true,
  },
  {
    title: "Scale",
    bestFor: "For businesses that need a full growth engine.",
    items: ["Growth +", "AEO + content engine", "Multi-channel paid", "Automation + AI agents", "Authority + PR / backlinks", "Live analytics + strategy"],
  },
  {
    title: "Custom / Market Authority",
    bestFor: "Competitive markets, multi-location, or aggressive campaigns.",
    items: ["Tailored scope", "Senior strategy", "Aggressive visibility", "Custom integrations", "Ongoing optimization"],
  },
] as const;

export const pricingAddons = [
  "Website recovery",
  "Review repair support",
  "AI bot / agent upgrades",
  "PR / backlink campaigns",
] as const;

