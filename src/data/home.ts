export type EntryIntent = "hero" | "proof" | "audit" | "final" | "sticky" | "diagnostic";

export const homeContent = {
  nav: ["Pain", "System", "Proof", "Free Feedback"],
  hero: {
    eyebrow: "Performance marketing for established SMBs",
    headline: "We fight for your market share.",
    kicker:
      "Scale Motion is not here to run ads and hope. We research the battlefield, find the leverage, and keep pressure on your competitors.",
    body:
      "Competitor research, demographic scans, top-location targeting, high-intent keyword extraction, conversion fixes, and constant optimization. Built for owners who want a team that plays offense.",
    question: "Where are competitors beating you right now?",
    options: ["Google Maps", "Paid search", "Organic rankings", "Lead quality"],
  },
  trust: [
    "Competitive research before spend",
    "Top-location targeting",
    "Highest-intent keyword extraction",
    "Daily optimization pressure",
  ],
  pain: {
    label: "01 Pain mirror",
    headline: "Your competitors are not waiting. Your marketing cannot afford to drift.",
    cards: [
      [
        "They out-researched you",
        "The other agency guessed at channels while competitors were winning the best neighborhoods, demographics, and search intent.",
      ],
      [
        "They chased activity",
        "Reports, meetings, and generic tasks replaced the only scoreboard that matters: qualified demand moving toward revenue.",
      ],
      [
        "They left gaps open",
        "Weak tracking, poor landing pages, slow follow-up, and lazy keyword strategy gave competitors room to take the lead.",
      ],
      [
        "They stopped optimizing",
        "Performance marketing is pressure. Bids, pages, keywords, locations, reviews, and conversion paths need constant adjustment.",
      ],
    ],
  },
  principles: {
    label: "02 Five principles",
    headline: "Five principles before we spend a dollar in the market.",
    items: ["Recon the market", "Map the territory", "Extract intent", "Attack leaks", "Optimize daily"],
  },
  market: {
    label: "03 Market reframe",
    headline: "The market is a battlefield of clicks, intent, and territory.",
    body:
      "Paid ads create speed, but Maps, organic search, reviews, conversion, and AI answer visibility decide who owns demand. We study where buyers move, where competitors are exposed, and where the next advance should happen.",
    bars: [
      ["Paid Ads", "15-25%", 22, "Fast pressure when the offer, keywords, and landing page are battle-ready."],
      ["Maps", "35-45%", 42, "High-intent local demand won by proximity, reviews, relevance, and location priority."],
      ["Organic", "40-50%", 50, "Durable market share built through pages, authority, internal links, and search intent."],
      ["AI Overviews", "Growing", 32, "Entity visibility is moving toward citations, topical authority, and trusted summaries."],
    ],
  },
  services: {
    label: "04 Services",
    headline: "Market intelligence, visibility pressure, conversion command.",
    columns: [
      [
        "Market Intelligence",
        ["Competitor research", "Demographic scans", "Top-location targeting", "Highest-performing keyword extraction"],
      ],
      [
        "Visibility Offensive",
        ["Google Maps SEO", "Semantic SEO", "AI search readiness", "Reviews and authority pressure"],
      ],
      [
        "Conversion Command",
        ["Google Ads", "Meta campaigns", "Landing pages", "CRM follow-up and constant optimization"],
      ],
    ],
  },
  sequence: {
    label: "05 90-day sequence",
    headline: "The first 90 days are a campaign: recon, deployment, optimization.",
    phases: [
      [
        "Days 1-30",
        "Recon and stabilize",
        "Scan competitors, demographics, top locations, tracking, search position, offer friction, and follow-up leaks.",
      ],
      [
        "Days 31-60",
        "Deploy the system",
        "Launch priority pages, reporting, CRM logic, review loops, ad tests, and market capture plan.",
      ],
      [
        "Days 61-90",
        "Optimize the winners",
        "Shift budget, content, keywords, and conversion work toward the channels proving qualified demand.",
      ],
    ],
  },
  proof: {
    label: "06 Proof",
    headline: "Proof without fake trophies. Discipline without guesswork.",
    stats: ["Competitor recon", "Demographic scan", "Location priority", "Keyword extraction"],
    cases: [
      "[Industry] in [City] - from [X] to [Y] in [Z days]",
      "[Service business] - call quality and booking path rebuilt",
      "[Local operator] - Maps, website, reviews, and follow-up aligned",
    ],
  },
  risk: {
    label: "07 Risk reversal",
    headline: "You should never feel trapped by the people hired to win growth.",
    tiles: [
      "Month-to-month after setup",
      "Owned ad accounts",
      "Owned website access",
      "War-room reporting",
      "Clear offboarding",
      "No double-dipping in your market",
    ],
    offboarding:
      "If we part ways, you leave with your accounts, your data, your website access, and a plain-English transfer path.",
  },
  disqualifier: {
    label: "08 Not for everyone",
    headline:
      "We are not the right fit if you want passive marketing, cheap activity, or a vendor who avoids hard conversations.",
    body:
      "Scale Motion works with established SMBs that can handle more demand, respond to leads quickly, and make decisions from data. If the business cannot support growth operationally, we will say that before taking the account. Performance marketing only works when the business is ready to compete.",
  },
  audit: {
    label: "09 Free Feedback",
    headline: "Start with free feedback. We find the weakness before we accelerate.",
    body:
      "We review your website, Google presence, lead path, follow-up, tracking, competitor position, demographics, locations, and keyword gaps. First we identify what is leaking. Then we decide what to fix, what to upgrade, and where it makes sense to attack harder.",
  },
  faq: {
    label: "10 FAQ",
    headline: "Questions serious owners usually ask before talking to us.",
    items: [
      [
        "What makes this performance marketing?",
        "We do the research, isolate the highest-intent opportunities, build the conversion path, and optimize constantly instead of launching campaigns and drifting.",
      ],
      ["Do I keep my accounts?", "Yes. Ad accounts, analytics, website access, and core data should belong to the business."],
      [
        "How long does the free feedback take?",
        "The form takes about 90 seconds. The review happens after we have your site, market, and business context.",
      ],
      ["Do you work with competitors?", "We do not double-dip in the same market lane when it creates a conflict."],
    ],
  },
  final: {
    label: "11 Final CTA",
    headline: "If your competitors are taking ground, stop funding passive marketing.",
    body:
      "Show us where things stand. We will give you clear feedback on what is leaking, where competitors are exposed, what locations and keywords matter most, and what to fix before we go faster.",
  },
} as const;

export const auditQuestions: Record<EntryIntent, { question: string; options: readonly string[] }> = {
  hero: { question: homeContent.hero.question, options: homeContent.hero.options },
  proof: {
    question: "What would make this worth reviewing?",
    options: ["Better lead quality", "Competitor gap analysis", "Owned market position", "A cleaner sales path"],
  },
  audit: {
    question: "What should we review first for your free feedback?",
    options: ["Competitors", "Top locations", "Keywords", "Full growth system"],
  },
  final: {
    question: "What would make the next 90 days a win?",
    options: ["More qualified calls", "Beat competitors", "Higher local visibility", "Better follow-up"],
  },
  sticky: {
    question: "Where is the market fight most urgent?",
    options: ["Traffic", "Conversion", "Lead quality", "Competitors"],
  },
  diagnostic: {
    question: "What do you want diagnosed?",
    options: ["Competitors", "Search visibility", "Keywords", "CRM / follow-up"],
  },
};

