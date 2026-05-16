export interface Solution {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  heroImage: string;
  longDescription: string;
  features: string[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  industry: string;
  category: string;
  slug: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  summary: string;
  category: string;
  image: string;
  slug: string;
  publishDate: string;
  author: string;
}

export interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  industry: string;
  message: string;
}

export interface SearchResults {
  products: Product[];
  news: NewsArticle[];
  solutions: Solution[];
  totalResults: number;
}
