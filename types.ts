export interface NavItem {
  label: string;
  path: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
}