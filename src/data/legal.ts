import { site } from "./site";

export const companyLegal = {
  brand: "Scale Motion",
  legalName: "Scale Motion LLC",
  domain: site.domain,
  website: site.url,
  contactEmail: site.contactEmail,
  supportPhone: site.supportPhone,
  effectiveDate: "June 23, 2026",
} as const;

export const mobileDataNonSharingClause =
  "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.";

export const privacyContent = {
  eyebrow: "Privacy Policy",
  title: "How Scale Motion LLC collects, uses, protects, and shares data.",
  intro:
    "This Privacy Policy explains how Scale Motion LLC, operating the Scale Motion website and growth services at scalemotions.com, handles information collected through our website, chat widget, forms, client onboarding, Google Ads work, and related services.",
  sections: [
    {
      title: "Information we collect",
      body: [
        "Contact and business information, including name, email address, company name, website URL, industry, market, and details you submit through our website, forms, calendar tools, or chat widget.",
        "Service and account information needed to evaluate or manage marketing work, including website, analytics, advertising, CRM, call tracking, Google Business Profile, and campaign context that you authorize us to review.",
        "Google Ads account and campaign information when you grant access for reporting, monitoring, optimization, troubleshooting, or account management.",
        "Website usage data, such as pages visited, device/browser information, referring pages, approximate location, form interactions, and other analytics used to improve the website and our services.",
      ],
    },
    {
      title: "How we use information",
      body: [
        "To respond to inquiries, provide free feedback, deliver service-related communications, schedule calls, and support active or prospective client relationships.",
        "To review websites, advertising accounts, search visibility, CRM follow-up, lead quality, market opportunities, and performance marketing priorities.",
        "To manage, monitor, report on, and optimize client Google Ads, PPC, Local Services Ads, SEO, CRM, website, and conversion systems.",
        "To maintain security, prevent abuse, debug technical issues, comply with applicable law, and enforce our agreements.",
      ],
    },
    {
      title: "Google Ads API and Google user data",
      body: [
        "When we access Google Ads API data, we use it only to provide or improve user-facing client services such as account monitoring, reporting, optimization, and campaign management.",
        "We request access only to information needed for the services authorized by the client. We do not sell Google user data, use it for unrelated advertising, transfer it to data brokers, or use it to determine credit-worthiness.",
        "Access to Google Ads data is limited to authorized team members and service providers who need it to provide the requested services, subject to confidentiality and security obligations.",
      ],
    },
    {
      title: "SMS, chat, and A2P/10DLC consent",
      body: [
        "Scale Motion LLC may send customer-care and service-related SMS messages only after the user opts in through the LeadConnector/GHL chat widget on scalemotions.com.",
        "Messages may relate to inquiries, support requests, appointment coordination, or existing service relationships.",
        "Message frequency varies. Message and data rates may apply.",
        "Reply STOP to unsubscribe. Reply HELP for help.",
        "Contact Scale Motion LLC at john@scalemotions.com or (813) 500-0198.",
        mobileDataNonSharingClause,
      ],
    },
    {
      title: "How we share information",
      body: [
        "We may share information with service providers that help us operate the website, chat widget, CRM, calendar, analytics, advertising, reporting, email, SMS delivery, security, hosting, and client service workflows.",
        "We may share information when required by law, to protect rights and security, to prevent fraud or abuse, or as part of a business transaction such as a merger, acquisition, or asset sale.",
        "We do not sell personal information.",
        mobileDataNonSharingClause,
      ],
    },
    {
      title: "Data storage and security",
      body: [
        "We use reasonable administrative, technical, and organizational safeguards designed to protect information from unauthorized access, misuse, loss, alteration, or disclosure.",
        "No method of transmission or storage is completely secure. We keep information only as long as reasonably needed for the purposes described in this policy, unless a longer period is required by law, contract, dispute resolution, security, or legitimate business needs.",
      ],
    },
    {
      title: "Your choices",
      body: [
        "You may request access, correction, deletion, or restriction of your personal information by contacting Scale Motion LLC at john@scalemotions.com or (813) 500-0198.",
        "You can opt out of SMS messages by replying STOP. You can request help by replying HELP. You can opt out of marketing email using the unsubscribe link in the email, when available.",
        "Clients can revoke account access through the relevant platform, including Google Ads, Google Business Profile, analytics, CRM, hosting, or advertising platforms.",
      ],
    },
    {
      title: "Contact",
      body: [
        "For privacy questions, data requests, or Google Ads API privacy inquiries, contact Scale Motion LLC at john@scalemotions.com or (813) 500-0198.",
        "Scale Motion LLC · St. Petersburg, FL",
        // TODO: Add official A2P brand-registration mailing address when available from registration.
      ],
    },
  ],
} as const;

export const termsContent = {
  eyebrow: "Terms & Messaging Terms",
  title: "Website terms, service communications, and SMS consent.",
  intro:
    "These Terms explain the rules for using the Scale Motion website and the messaging terms that apply when you opt in to receive service-related text messages from Scale Motion LLC.",
  sections: [
    {
      title: "Business identity",
      body: [
        "Scale Motion LLC operates this website and provides customer-care and service-related communications for prospective and active clients.",
      ],
    },
    {
      title: "Website use",
      body: [
        "The website and its content are provided for general business information. Using this website does not create a client relationship or require Scale Motion LLC to provide services.",
        "You agree not to misuse the website, interfere with its operation, submit false information, attempt unauthorized access, or use the website for unlawful purposes.",
      ],
    },
    {
      title: "Free feedback and service inquiries",
      body: [
        "Free feedback, diagnostics, and strategy conversations are informational and based on the context available at the time of review.",
        "Any paid service relationship requires a separate written agreement, scope, and payment terms.",
      ],
    },
    {
      title: "SMS program",
      body: [
        "Scale Motion LLC sends customer-care and service-related text messages to users who opt in through the LeadConnector/GHL chat widget at scalemotions.com. Messages may include responses to inquiries, support requests, appointment coordination, follow-up communications, or service-related updates.",
        "Messaging is limited to customer care purposes and does not include promotional text campaigns unless you separately provide the required consent for that use.",
      ],
    },
    {
      title: "Opt-in",
      body: [
        "By providing your mobile number through the chat widget and confirming consent, you agree to receive customer-care SMS messages from Scale Motion LLC related to your inquiry or service request. Consent is not a condition of purchase.",
      ],
    },
    {
      title: "Frequency and rates",
      body: ["Message frequency varies. Message and data rates may apply."],
    },
    {
      title: "Opt-out and help",
      body: [
        "Reply STOP to unsubscribe. Reply HELP for help. You may also contact Scale Motion LLC at john@scalemotions.com or (813) 500-0198.",
      ],
    },
    {
      title: "Privacy cross-link",
      body: [
        "For details on how Scale Motion LLC collects, uses, and protects information, including SMS opt-in data, please review our Privacy Policy at https://scalemotions.com/privacy/.",
      ],
    },
    {
      title: "No mobile-data sale or marketing transfer",
      body: [mobileDataNonSharingClause],
    },
    {
      title: "Messaging examples",
      body: [
        "Hi, this is Scale Motion LLC. We received your inquiry and will follow up shortly. Reply HELP for help or STOP to opt out.",
        "Scale Motion LLC: following up on your website or marketing review request. Message frequency varies. Reply HELP for help or STOP to opt out.",
      ],
    },
    {
      title: "Third-party tools",
      body: [
        "The website may use third-party tools such as GoHighLevel/LeadConnector chat, CRM, calendar, analytics, hosting, advertising, and reporting services. These providers help us operate the website and respond to inquiries.",
        "Your use of those tools may also be governed by the relevant provider's terms and privacy practices.",
      ],
    },
    {
      title: "Contact",
      body: [
        "Questions about these Terms or messaging practices can be sent to Scale Motion LLC at john@scalemotions.com or (813) 500-0198.",
        "Scale Motion LLC · St. Petersburg, FL",
        // TODO: Add official A2P brand-registration mailing address when available from registration.
      ],
    },
  ],
} as const;

export const goHighLevelComplianceCopy = {
  useCase:
    "Scale Motion LLC sends customer-care and service-related text messages to users who opt in through the LeadConnector/GHL chat widget at scalemotions.com. Messages may include responses to inquiries, support requests, appointment coordination, follow-up communications, or service-related updates. Messaging is limited to customer care purposes and does not include promotional content.",
  optIn:
    "Users initiate a support request by interacting with the Scale Motion LLC website https://scalemotions.com chat widget. During the chat interaction, users may voluntarily provide their mobile phone number to receive follow-up support messages. By submitting their number, users provide consent to receive customer-care text messages from Scale Motion LLC related to their inquiry.",
  optInMessage:
    "Scale Motion LLC: You're opted in for customer-care texts. Msg freq varies. Msg&data rates may apply. Reply HELP for help, STOP to opt out.",
  sampleMessages: [
    "Hi, this is Scale Motion LLC. We received your inquiry and will follow up shortly. Reply HELP for help or STOP to opt out.",
    "Scale Motion LLC: following up on your website or marketing review request. Message frequency varies. Reply HELP for help or STOP to opt out.",
  ],
} as const;
