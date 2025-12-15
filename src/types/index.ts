export interface Member {
  id: string;
  name: string;
  nameEn: string;
  position: string;
  positionEn: string;
  image: string;
  bio: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Achievement {
  id: string;
  slug: string;
  client: string;
  title: string;
  category: string[];
  image: string;
  description: string;
  services: string[];
  date: string;
}

export interface App {
  id: string;
  slug: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  screenshots: string[];
  downloadLinks: {
    ios?: string;
    android?: string;
    web?: string;
  };
  features: string[];
  createdAt: string;
}

export interface AppCategory {
  id: string;
  name: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  details: string;
  image: string;
  color: string;
}

export interface CompanyInfo {
  name: string;
  nameEn: string;
  concept: string;
  mission: string;
  vision: string;
  coreValues: string[];
  founded: string;
  address: string;
  addressEn: string;
  phone: string;
  email: string;
  website: string;
  ceoName: string;
}
