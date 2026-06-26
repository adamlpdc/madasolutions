export const siteConfig = {
  name: "MADA Solutions",
  description:
    "MADA Solutions helps ecommerce businesses fix the ads, website, reporting and growth problems that quietly cost money every week.",
  url: "https://madasolutions.co.uk",
  email: "support@madasolutions.co.uk",
};

export type NavLink = {
  label: string;
  href: string;
};

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#what-we-do" },
  { label: "Recent Work", href: "#jobs-we-take" },
  { label: "About", href: "#why-mada" },
  { label: "Contact", href: "#contact" },
];

export const rotatingIssues: string[] = [
  "Amazon Ads are wasting spend.",
  "Traffic is arriving but not converting.",
  "Your reports don't match.",
  "Your ecommerce data is a mess.",
  "Landing pages aren't generating enquiries.",
  "Nobody knows what's actually working.",
];

export const tickerPhrases: string[] = [
  "AMAZON ADS",
  "WASTED SPEND",
  "REPORTING PROBLEMS",
  "LOW CONVERSION",
  "ECOMMERCE GROWTH",
  "CRO",
  "PAID MEDIA",
  "AI WORKFLOWS",
  "CLEANER DATA",
  "FIXED PRICES",
  "UK ECOMMERCE SUPPORT",
];

export type Job = {
  category: string;
  time: string;
  title: string;
  description: string;
  price: string;
};

export const jobsWeTake: Job[] = [
  {
    category: "AMS dashboards",
    time: "1 week",
    title: "Amazon Ads reporting dashboard you actually open daily",
    description:
      "Live spend, ACoS, TACoS, sales and unit economics by campaign, ASIN and placement — replacing the slow weekly download.",
    price: "From £750",
  },
  {
    category: "Spend optimisation",
    time: "3 days",
    title: "Amazon Ads spend & bid cleanup sprint",
    description:
      "Review of wasted spend, weak bids, search-term bleed and placement bias, with a clear reallocation plan or hands-on cleanup.",
    price: "From £299",
  },
  {
    category: "A+ content",
    time: "1 week",
    title: "A+ / A+ Premium content page design",
    description:
      "Conversion-led A+ modules that explain the offer, remove objections and lift conversion — built to brand guidelines and Amazon specs.",
    price: "From £299",
  },
  {
    category: "Lead page",
    time: "48h",
    title: "Treatment consultation page for an aesthetics clinic",
    description: "One focused page with enquiry capture, follow-up email and tracking.",
    price: "£299 fixed",
  },
  {
    category: "Tracking",
    time: "1 day",
    title: "Pixel + GA4 rescue on a Shopify store",
    description: "Stopped double-counting, restored attribution, fixed conversion events.",
    price: "£149 fixed",
  },
  {
    category: "Ecommerce",
    time: "5 days",
    title: "Shopify product/category cleanup",
    description: "Tagged, tidied and restructured 600+ products for easier navigation.",
    price: "From £299",
  },
];

export type WorkArea = {
  title: string;
  label: string;
  description: string;
  icon: "web" | "insights" | "leads" | "shopify" | "stores" | "reporting" | "ops" | "marketing" | "builds";
  color: string;
};

export const workWeWorkOn: WorkArea[] = [
  {
    title: "Websites & landing pages",
    label: "WEB",
    description: "Small sites, campaign landings, refreshes that load fast on mobile.",
    icon: "web",
    color: "#3868e8",
  },
  {
    title: "Tracking & analytics",
    label: "INSIGHTS",
    description: "Pixel, GA4, conversion events, source tracking, clean dashboards.",
    icon: "insights",
    color: "#e81878",
  },
  {
    title: "Lead capture & enquiry flows",
    label: "LEADS",
    description: "Forms, routing, follow-up emails, CRM or spreadsheet handoff.",
    icon: "leads",
    color: "#22b07d",
  },
  {
    title: "Ecommerce & product data",
    label: "SHOPIFY",
    description: "Shopify, product/category cleanup, listings and admin automation.",
    icon: "shopify",
    color: "#f59e0b",
  },
  {
    title: "Ecommerce websites",
    label: "STORES",
    description: "Shopify, WooCommerce and headless storefront builds — designed to convert, not just look pretty.",
    icon: "stores",
    color: "#f43f5e",
  },
  {
    title: "Reporting & dashboards",
    label: "REPORTING",
    description: "Replace messy spreadsheets with one live view of what matters.",
    icon: "reporting",
    color: "#0ea5e9",
  },
  {
    title: "Admin & operations",
    label: "OPS",
    description: "SOPs, process cleanup, simple automations that actually save time.",
    icon: "ops",
    color: "#a855f7",
  },
  {
    title: "Digital marketing support",
    label: "MARKETING",
    description: "Ads setup, campaign support, audience targeting, copy that converts.",
    icon: "marketing",
    color: "#e81878",
  },
  {
    title: "App & tool builds",
    label: "BUILDS",
    description: "Small internal tools, dashboards, AI-assisted workflows.",
    icon: "builds",
    color: "#3868e8",
  },
];

export type GrowFeature = {
  title: string;
  description: string;
  icon: "target" | "funnel" | "reporting" | "ai" | "ops";
};

export const growFeatures: GrowFeature[] = [
  {
    title: "Growth Strategy",
    description: "Practical plans that connect ads, website, data and operations.",
    icon: "target",
  },
  {
    title: "Conversion Rate Optimisation",
    description: "Find the leaks. Fix the friction. Lift revenue.",
    icon: "funnel",
  },
  {
    title: "Data & Reporting",
    description: "One source of truth. Dashboards that drive decisions.",
    icon: "reporting",
  },
  {
    title: "AI Workflows",
    description: "Save hours every week with practical AI and automation.",
    icon: "ai",
  },
  {
    title: "Operational Improvements",
    description: "Better processes, cleaner data and fewer manual jobs.",
    icon: "ops",
  },
];
