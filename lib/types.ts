export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  icon: string;
  slug: string;
}

export interface Solution {
  id: number;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  placeholder?: boolean;
}

export interface CSRCategory {
  id: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}
