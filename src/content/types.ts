export interface InternalLink {
  label: string;
  slug: string;
}

export interface CityContent {
  slug: string;
  ville: string;
  departement: string;
  departementSlug: string;
  phase: 1 | 2 | 3;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  paragraphs: {
    proximite: string;
    profilClientele: string;
    metauxPrioritaires: string;
    evacuationMetaux: string;
    nicheSpecifique?: string;
    avantagesConcurrentiel?: string;
  };
  internalLinks: {
    department: InternalLink;
    nearbyCities: InternalLink[];
  };
}

export interface DepartmentContent {
  slug: string;
  nom: string;
  code: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  paragraphs: {
    intro: string;
    profilZone: string;
    metauxDominants: string;
    logistique: string;
    interDept?: string;
  };
  internalLinks: {
    home: InternalLink;
    cities: InternalLink[];
    neighborDept: InternalLink;
  };
}

export interface ServiceItem {
  name: string;
  slug: string;
  description: string;
}

export interface MetalItem {
  name: string;
  slug: string;
  description: string;
}

export interface GuideSection {
  heading: string;
  content: string;
  subsections?: Array<{
    heading: string;
    content: string;
  }>;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideContent {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readingTime: number;
  image?: string;
  imageAlt?: string;
  meta: {
    title: string;
    description: string;
  };
  sections: GuideSection[];
  faq: GuideFaq[];
  relatedSlugs: string[];
  relatedServiceSlugs: string[];
}

export interface ServiceContent {
  slug: string;
  nav: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    pitch: string;
    image: string;
    imageAlt: string;
  };
  targets: {
    particuliers?: string[];
    professionnels?: string[];
  };
  steps: Array<{
    title: string;
    description: string;
  }>;
  keyPoints: Array<{
    title: string;
    description: string;
  }>;
  relatedSlugs: string[];
}
