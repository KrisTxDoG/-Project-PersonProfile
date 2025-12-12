export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}