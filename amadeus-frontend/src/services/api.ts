const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080';

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const api = {
  getSolutions: () => fetchJson<import('../types').Solution[]>('/api/solutions'),
  getSolution: (slug: string) => fetchJson<import('../types').Solution>(`/api/solutions/${slug}`),
  getProducts: (industry?: string, category?: string) => {
    const params = new URLSearchParams();
    if (industry) params.set('industry', industry);
    if (category) params.set('category', category);
    const qs = params.toString();
    return fetchJson<import('../types').Product[]>(`/api/products${qs ? `?${qs}` : ''}`);
  },
  getProduct: (slug: string) => fetchJson<import('../types').Product>(`/api/products/${slug}`),
  searchProducts: (q: string) => fetchJson<import('../types').Product[]>(`/api/products/search?q=${encodeURIComponent(q)}`),
  getNews: (category?: string) => {
    const qs = category ? `?category=${encodeURIComponent(category)}` : '';
    return fetchJson<import('../types').NewsArticle[]>(`/api/news${qs}`);
  },
  getNewsArticle: (slug: string) => fetchJson<import('../types').NewsArticle>(`/api/news/${slug}`),
  search: (q: string) => fetchJson<import('../types').SearchResults>(`/api/search?q=${encodeURIComponent(q)}`),
  submitContact: (data: import('../types').ContactRequest) =>
    postJson<{ status: string; message: string }>('/api/contact', data),
};
