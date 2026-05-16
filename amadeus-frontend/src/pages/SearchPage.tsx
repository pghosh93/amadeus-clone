import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { api } from '../services/api';
import type { SearchResults } from '../types';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setQuery(q);
      setLoading(true);
      api.search(q).then(setResults).catch(console.error).finally(() => setLoading(false));
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6 text-center">What can we help you discover?</h1>
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search solutions, products, news..."
              className="flex-1 px-6 py-4 rounded-l-xl text-gray-900 text-lg focus:outline-none"
              autoFocus
            />
            <button type="submit" className="px-8 py-4 bg-blue-500 rounded-r-xl hover:bg-blue-400 transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </form>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <span className="text-sm text-blue-200">Popular:</span>
            {['Airlines', 'NDC', 'Revenue Management', 'Travel Platform', 'Hospitality'].map((term) => (
              <button
                key={term}
                onClick={() => setSearchParams({ q: term })}
                className="text-sm text-blue-100 hover:text-white bg-white/10 px-3 py-1 rounded-full"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white min-h-96">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex items-center justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
            </div>
          )}

          {results && !loading && (
            <>
              <p className="text-sm text-gray-500 mb-8">
                {results.totalResults} result{results.totalResults !== 1 ? 's' : ''} for "{searchParams.get('q')}"
              </p>

              {results.solutions.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Solutions</h2>
                  <div className="space-y-4">
                    {results.solutions.map((s) => (
                      <Link key={s.id} to={`/solutions/${s.slug}`} className="block p-4 border rounded-lg hover:shadow-md transition-shadow group">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{s.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.products.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Products</h2>
                  <div className="space-y-4">
                    {results.products.map((p) => (
                      <Link key={p.id} to={`/products/${p.slug}`} className="block p-4 border rounded-lg hover:shadow-md transition-shadow group">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs text-blue-600 font-medium uppercase">{p.industry}</span>
                          <span className="text-gray-300">|</span>
                          <span className="text-xs text-gray-400">{p.category}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{p.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.news.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">News & Insights</h2>
                  <div className="space-y-4">
                    {results.news.map((n) => (
                      <Link key={n.id} to={`/resources/${n.slug}`} className="block p-4 border rounded-lg hover:shadow-md transition-shadow group">
                        <span className="text-xs text-blue-600 font-medium uppercase">{n.category}</span>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{n.title}</h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{n.summary}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.totalResults === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-500 mb-4">No results found for "{searchParams.get('q')}"</p>
                  <p className="text-gray-400">Try different keywords or browse our sections:</p>
                  <div className="flex flex-wrap gap-3 justify-center mt-6">
                    <Link to="/solutions" className="flex items-center text-blue-600 font-medium hover:text-blue-700">
                      Solutions <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                    <Link to="/products" className="flex items-center text-blue-600 font-medium hover:text-blue-700">
                      Products <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                    <Link to="/resources" className="flex items-center text-blue-600 font-medium hover:text-blue-700">
                      Resources <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}

          {!results && !loading && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">Explore our travel technology solutions</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/solutions" className="flex items-center text-blue-600 font-medium hover:text-blue-700">
                  View all solutions <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
                <Link to="/products" className="flex items-center text-blue-600 font-medium hover:text-blue-700">
                  Browse products <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
