export interface Listing {
  id: string;
  created_at: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image_urls: string[];
  seller_whatsapp: string;
  is_approved: boolean;
  payment_status?: string;
  is_negotiable: boolean;
  location: string;
  is_sold: boolean;
}

export type Category =
  | "All"
  | "Electronics"
  | "Vehicles"
  | "Fashion"
  | "Property"
  | "Home"
  | "Other";

export const CATEGORIES: Category[] = [
  "All",
  "Electronics",
  "Vehicles",
  "Fashion",
  "Property",
  "Home",
  "Other",
];

export const CATEGORY_ICONS: Record<Category, string> = {
  All: "🛍️",
  Electronics: "📱",
  Vehicles: "🚗",
  Fashion: "👗",
  Property: "🏠",
  Home: "🛋️",
  Other: "📦",
};

export type OpportunityType = "job" | "scholarship";

export interface Opportunity {
  id: string;
  created_at: string;
  title: string;
  description: string;
  type: OpportunityType;
  organization: string;
  location: string;
  deadline?: string;
  requirements?: string;
  application_url: string;
  image_url: string;
  is_active: boolean;
}

export const OPPORTUNITY_TYPES: OpportunityType[] = ["job", "scholarship"];

export const OPPORTUNITY_TYPE_LABELS: Record<OpportunityType, string> = {
  job: "Job",
  scholarship: "Scholarship",
};

export const LIBERIA_LOCATIONS = [
  "Monrovia",
  "Paynesville",
  "Buchanan",
  "Gbarnga",
  "Kakata",
  "Voinjama",
  "Zwedru",
  "Harper",
  "Tubmanburg",
  "Greenville",
  "Sanniquellie",
  "Harbel",
  "Other",
] as const;
