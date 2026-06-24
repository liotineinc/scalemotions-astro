export const portfolioFilters = [
  "All",
  "Websites",
  "Landing Pages",
  "SEO Systems",
  "Ads / Funnels",
  "CRM / Automation",
  "Dashboards",
  "Brand / Creative",
] as const;

export const portfolioProjects = [
  { title: "Conversion-Led Website", category: "Websites", industry: "Home Services", problem: "Site looked good, didn't convert." },
  { title: "Local Authority SEO", category: "SEO Systems", industry: "HVAC", problem: "Strong service area, weak Maps presence." },
  {
    title: "Lead-Capture Landing Page",
    category: "Landing Pages",
    industry: "Roofing",
    problem: "Ad clicks were burning without a conversion path.",
  },
  { title: "Google + Meta Funnel", category: "Ads / Funnels", industry: "Restoration", problem: "Spend rising, attribution missing." },
  {
    title: "CRM + Follow-Up Workflow",
    category: "CRM / Automation",
    industry: "Medical",
    problem: "Leads going cold inside the inbox.",
  },
  { title: "Growth Performance Dashboard", category: "Dashboards", industry: "Legal", problem: "No live visibility into pipeline health." },
  {
    title: "Premium Brand System",
    category: "Brand / Creative",
    industry: "Luxury Services",
    problem: "Brand felt inconsistent across channels.",
  },
  {
    title: "Multi-Location Visibility",
    category: "SEO Systems",
    industry: "Automotive",
    problem: "Maps presence uneven across locations.",
  },
  { title: "Booking-First Website", category: "Websites", industry: "Wellness", problem: "Friction-heavy intake - drop-off everywhere." },
] as const;

