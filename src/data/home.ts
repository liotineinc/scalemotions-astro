/**
 * Single source of truth for every word on the home page.
 * Section components and src/pages/index.astro import from here and render markup only.
 * Mirrors: docs/06-page-outlines/scalemotions-home-recovery-rewrite.md
 *
 * Rules:
 *  - No copy lives in .astro files.
 *  - Field `name` attributes, form action, and hidden-field plumbing stay in
 *    ContactForm.astro unchanged — only labels, placeholders, options, and
 *    microcopy are defined here.
 *  - Bracketed proof strings are placeholders. Do not style them as real.
 */

export type EntryIntent = "hero" | "audit" | "diagnostic";

export const homeContent = {
  hero: {
    eyebrow: "Website & Google Business Profile recovery",
    /** Default H1 (spec variant #1). */
    headline: "Locked out of your own business online? We get it back.",
    /** Operator alternatives — spec variants #2–#6. Swap into `headline` to change. */
    headlineVariants: [
      "Your website is gone. Your Google listing is suspended. We recover both.",
      "We recover lost websites and suspended Google Business Profiles.",
      "The developer vanished. The domain expired. Google suspended you. Start here.",
      "Get your website and Google Business Profile back. In your name. Under your control.",
      "Lost the site? Lost the listing? We bring them back and hand you the keys.",
    ],
    kicker:
      "Expired domains. Developers who disappeared. Hosting that lapsed. Google Business Profiles that got suspended, refused verification, or ended up in someone else's account. Scale Motion recovers what you lost and puts it back where it belongs: in accounts you own.",
    body: "No passwords requested. A straight answer on what's recoverable before anything is billed.",
    // ASSUMPTION: spec's `#free-check` anchor does not exist in the repo; the
    // bottom-form section keeps its existing id `free-feedback`, so the hero
    // primary points there. Existing IDs never change.
    primary: { label: "Start Free Recovery Check", href: "#free-feedback" },
    secondary: { label: "See how recovery works", href: "#system" },
    call: { label: "Call (813) 500-0198", href: "tel:+18135000198" },
  },
  trust: [
    "Domain, hosting, and site files traced and recovered",
    "Suspended and unverifiable Google profiles reinstated",
    "Everything transferred to accounts you own",
    "Plain-English handoff so it can't happen again",
  ],
  lockout: {
    label: "How you got locked out",
    headline: "Most lockouts weren't your fault. They were set up to happen.",
    cardLabel: "Root cause",
    cards: [
      {
        title: "The developer held the keys",
        body: "The domain was registered in their name. Hosting was on their card. When they stopped answering, everything they controlled went with them.",
      },
      {
        title: "The domain quietly lapsed",
        body: "Auto-renew failed, the card on file expired, or the renewal notices went to an inbox nobody checks. The site went dark and the clock started running.",
      },
      {
        title: "The platform pulled the plug",
        body: "Hosting lapsed, a site-builder subscription got cancelled, a plugin got hacked, or an account was terminated. The files usually still exist somewhere. Finding them is the job.",
      },
      {
        title: "Google said no",
        body: "A suspension, a rejected verification video, a postcard that never came, a duplicate listing, or a former agency sitting as primary owner. Google's process is fixable, but only with the right evidence in the right order.",
      },
    ],
  },
  rules: {
    label: "Five rules",
    headline: "Five rules before we touch anything.",
    graphicLabel: "Recovery process graphic",
    steps: [
      {
        title: "Prove it's yours",
        body: "We verify ownership first. We recover a business's own assets, nothing else.",
      },
      {
        title: "Trace before you rebuild",
        body: "Registrar, DNS, hosting, backups, archives, listing history. The fastest recovery is usually already sitting somewhere.",
      },
      {
        title: "Never ask for passwords",
        body: "Delegated access only: manager roles, registrar delegation, hosting collaborator invites. You stay in control the whole time.",
      },
      {
        title: "Fix the cause",
        body: "Auto-renew on your card. Recovery email and 2FA on your phone. One written list of what lives where.",
      },
      {
        title: "Hand over the keys",
        body: "You leave with a plain-English access document and everything in accounts you own.",
      },
    ],
  },
  recovery: {
    label: "What can be recovered",
    headline: "Most of it is recoverable. The window is the part that matters.",
    body: "Every lockout has a clock. Domains pass through grace and redemption windows before they're released. Suspended profiles need an evidence-backed reinstatement request, not a hopeful reply. Lost files usually still exist in a backup, a hosting snapshot, or an archived copy. We find the clock first, then the fastest path back.",
    tiles: [
      {
        title: "Expired domain",
        status: "Recoverable",
        body: "Inside the renewal or redemption window, recovery is paperwork and a fee. After release it becomes a backorder, an auction, or a negotiation. We'll tell you which one you're in.",
      },
      {
        title: "Lost site files",
        status: "Recoverable or rebuildable",
        body: "Backups, hosting snapshots, developer handoffs, and archived copies. When the files are truly gone, we rebuild from the archive so nothing you wrote is lost.",
      },
      {
        title: "Suspended profile",
        status: "Reinstatable",
        body: "Suspensions lift when the profile is compliant and the reinstatement request carries real evidence. We fix the profile, build the evidence package, submit it, and follow up until there's an answer.",
      },
      {
        title: "Unverified or hijacked listing",
        status: "Fixable",
        body: "Failed video verifications, missing postcards, duplicate listings, and profiles owned by someone who left. Each has a known path. We walk it with you.",
      },
    ],
  },
  services: {
    label: "Services",
    headline: "Two recoveries. One outcome: it's yours again.",
    columns: [
      {
        title: "Lost Website Recovery",
        items: [
          "Expired or lapsed domain recovery",
          "Domain, DNS, and hosting located and moved to your accounts",
          "Site files, database, and business email restored from backups",
          "Rebuild from archived pages when the files are gone",
          "Hacked or defaced site cleaned and restored",
          "Handoff from an unresponsive developer or agency",
        ],
      },
      {
        title: "Google Business Profile Recovery, Verification & Setup",
        items: [
          "Suspended profile reinstatement with an evidence package",
          "Verification completed when video, postcard, or phone keeps failing",
          "Ownership reclaimed from a former agency, employee, or unknown account",
          "Duplicate, outdated, and conflicting listings resolved",
          "New profile set up and verified correctly from day one",
          "Categories, services, hours, photos, and messaging done properly",
        ],
      },
      {
        title: "Ownership & lockout prevention",
        note: "Included with every recovery",
        items: [
          "You as primary owner on Google, your registrar, and your hosting",
          "Auto-renew on your card, recovery email and 2FA on your phone",
          "One-page access document: what lives where, when it renews, who has access",
          "Follow-up check after handoff",
        ],
      },
    ],
  },
  sequence: {
    label: "Recovery sequence",
    headline: "Recovery runs in three stages: triage, recover, secure.",
    phases: [
      {
        period: "First 48 hours",
        title: "Triage",
        body: "We confirm what's actually lost, who controls what today, and which clocks are running: domain windows, suspension status, verification state. You get a written recovery plan and a quote.",
      },
      {
        period: "Days 2–14",
        title: "Recover",
        body: "Domain restored or reclaimed. Files, database, and email pulled from backups or archives. Profile cleaned up, evidence gathered, reinstatement or verification submitted, ownership requests filed.",
      },
      {
        period: "Days 14–30",
        title: "Secure and hand over",
        body: "Everything moved into accounts you own. Site back online on your hosting. Profile live with you as primary owner. Prevention locked in, access document delivered.",
      },
    ],
    footnote:
      "Google decides its own timelines. We prepare the strongest case and follow up until there's an answer.",
  },
  proof: {
    label: "Proof",
    headline: "Real recoveries. No fake trophies.",
    screenshots: [
      "Registrar renewal confirmation",
      "Site back online",
      "Reinstatement approved",
      "Verification complete",
    ],
    videoLabel: "Client video testimonial",
    /** Placeholders — replace only with verified, client-approved results. */
    cases: [
      "[Business type] in [City] - domain pulled from redemption, site back online in [X] days",
      "[Business type] - profile reinstated after a [X]-day suspension, calls resumed",
      "[Business type] - ownership reclaimed from a former agency, listing rebuilt",
    ],
    check: {
      label: "Proof check",
      headline: "Not sure what's recoverable? Find out free.",
      body: "Start with a free recovery check. We'll tell you what still exists, what the deadlines are, and what it takes to get it back, before you spend anything.",
    },
  },
  ownership: {
    label: "You own everything",
    headline: "You own everything we recover. Every time.",
    pills: [
      "Domain in your registrar account",
      "Hosting on your card, in your name",
      "Primary owner of your Google Business Profile",
      "No passwords requested, ever",
      "Flat quote approved before work starts",
      "Plain-English handoff document",
    ],
    closing:
      "If something can't be recovered, we tell you fast and show you the fastest honest way to rebuild it. No dragging it out.",
  },
  disqualifier: {
    label: "Not for everyone",
    headline: "We recover what's yours. We won't help anyone take what isn't.",
    body: 'We verify ownership before touching a domain or a listing. We won\'t claim a profile for a business that doesn\'t operate at that address, "recover" a competitor\'s listing, or chase a domain you never held. If a request looks like a takeover instead of a recovery, we\'ll say so and decline.',
  },
  audit: {
    label: "Free recovery check",
    headline: "Start with a free recovery check. We find what's left before we plan what's next.",
    body: "Tell us what happened. We check domain status and expiry windows, DNS and hosting state, whether backups or archived copies exist, and your Google Business Profile status: suspended, pending, unverified, duplicated, or owned by someone else. Then you get the fastest path back, in writing.",
    deliverableLabel: "Sample recovery check report",
  },
  faq: {
    label: "FAQ",
    headline: "Questions owners ask before they call.",
    items: [
      [
        "My domain expired. Can I still get it back?",
        "Usually, if we move fast. Most domains pass through a renewal grace period and then a redemption window before they're released. Inside those windows it's a renewal plus a fee. After release, it depends on who picked it up, and we'll tell you honestly what that path looks like.",
      ],
      [
        "My developer disappeared with everything. What now?",
        "We trace what they registered, where it's hosted, and what can be reclaimed without them. Domains, hosting, and site files can often be moved with the right ownership documentation, even when the person who set them up won't respond.",
      ],
      [
        "Will you need my Google or hosting password?",
        "No. We work through manager access, registrar delegation, and hosting collaborator invites, or we screen-share while you stay logged in. You keep every credential.",
      ],
      [
        "My Google Business Profile is suspended. How long does reinstatement take?",
        "Google sets the timeline, not us. What we control is submitting a compliant profile with real evidence the first time and following up until there's an answer. That's usually the difference between weeks and months.",
      ],
      [
        "Verification keeps failing. Why?",
        "Usually mismatched details, a video that doesn't show what Google needs to see, a shared address, or a category that triggers extra review. We fix the profile first, then run the verification properly.",
      ],
      [
        "Someone else owns my listing.",
        "We request access through Google's ownership process and document your claim. If the current owner is a former employee or agency, that request usually resolves it. If not, we escalate with evidence.",
      ],
      [
        "There's no website left at all. Can you rebuild it?",
        "Yes. We recover the content from archives and backups, then rebuild it on hosting you own, so the same lockout can't happen twice.",
      ],
      [
        "What does it cost?",
        "The recovery check is free. Recoveries are quoted as flat fees once we know what's involved, and nothing starts until you approve it.",
      ],
    ],
  },
  final: {
    label: "Final CTA",
    headline: "Every day it's down, the calls go somewhere else.",
    body: "Show us what happened. You'll get a straight answer on what's recoverable, what the deadlines are, and what it takes to get your website and Google Business Profile back in your name.",
  },
  floatingCta: {
    primary: { label: "Start Free Recovery Check", href: "/contact" },
    /** Mobile-only second pill, composed from the existing outline-pill variant. */
    call: { label: "Call", href: "tel:+18135000198" },
  },
} as const;

/** Shared form copy — labels bound to unchanged field `name` attributes. */
export const formShared = {
  cardLabel: "Free recovery check",
  microcopy: "Takes about 90 seconds. We don't sell your info. We never ask for passwords.",
  submit: "Start Free Recovery Check",
  fields: {
    website: {
      label: "Website or Google Business Profile",
      placeholder: "yourdomain.com or your business name on Google",
    },
    industry: { label: "Industry", placeholder: "e.g. plumbing, law firm, restaurant" },
    market: { label: "City / Market", placeholder: "St. Petersburg, FL" },
    name: { label: "Name" },
    email: { label: "Email" },
    notes: { label: "What should we know?" },
  },
} as const;

/** Form headings + `form_variant` values so GHL can tell submissions apart. */
export const heroForm = {
  variant: "home-hero-recovery-v1",
  heading: "What are you locked out of?",
} as const;

export const bottomForm = {
  variant: "home-bottom-recovery-v1",
  heading: "Start your free recovery check",
} as const;

export const auditQuestions: Record<EntryIntent, { question: string; options: readonly string[] }> = {
  hero: {
    question: "What happened?",
    options: [
      "My website is down or gone",
      "My domain expired or was taken",
      "Google Business Profile suspended",
      "Verification keeps failing",
      "Someone else controls my listing or site",
      "I need a Google Business Profile set up",
    ],
  },
  audit: {
    question: "What should we look at first?",
    options: ["My domain", "My website files", "My Google Business Profile", "All of it - I'm fully locked out"],
  },
  // Used by /contact. Mirrors the audit question so the shared component stays
  // vocabulary-clean; the /contact route itself is out of scope for this rewrite.
  diagnostic: {
    question: "What should we look at first?",
    options: ["My domain", "My website files", "My Google Business Profile", "All of it - I'm fully locked out"],
  },
};
