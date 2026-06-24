export const testimonialThemes = [
  "Communication",
  "Transparency",
  "Website quality",
  "Lead generation",
  "Strategy",
  "Responsiveness",
  "Results",
  "Trust",
] as const;

export const testimonialPlaceholders = Array.from({ length: 6 }).map((_, index) => ({
  id: index + 1,
  quote: "Replace with verified client testimonial before publishing.",
  person: "Client Name",
  business: "Business Name",
  industry: "Industry",
  service: "Service used",
}));

