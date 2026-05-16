import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import type { NewsArticle } from '../types';

const categoryColors: Record<string, string> = {
  Technology: 'bg-blue-100 text-blue-700',
  'Industry Insights': 'bg-purple-100 text-purple-700',
  Products: 'bg-green-100 text-green-700',
  Sustainability: 'bg-emerald-100 text-emerald-700',
  Corporate: 'bg-amber-100 text-amber-700',
};

export default function ResourcesPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const allCategories = [...new Set(articles.map((a) => a.category))];

  useEffect(() => {
    api.getNews().then(setArticles).catch(() => {});
  }, []);

  const filtered = selectedCategory
    ? articles.filter((a) => a.category === selectedCategory)
    : articles;

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">News & Insights</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Stay up to date with the latest travel technology trends, product launches, and industry insights from Amadeus.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 && (
            <Link
              to={`/resources/${filtered[0].slug}`}
              className="group block bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden mb-12 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                  <span className="text-6xl">
                    {filtered[0].category === 'Technology' ? '🔬' : filtered[0].category === 'Industry Insights' ? '📊' : '📰'}
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit ${categoryColors[filtered[0].category] || 'bg-gray-100 text-gray-700'}`}>
                    {filtered[0].category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {filtered[0].title}
                  </h2>
                  <p className="text-gray-600 mb-4">{filtered[0].summary}</p>
                  <div className="text-sm text-gray-400">
                    {filtered[0].author} &middot;{' '}
                    {new Date(filtered[0].publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(1).map((article) => (
              <Link
                key={article.id}
                to={`/resources/${article.slug}`}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-4xl">
                    {article.category === 'Technology' ? '🔬' : article.category === 'Industry Insights' ? '📊' : article.category === 'Products' ? '🚀' : article.category === 'Sustainability' ? '🌿' : '📰'}
                  </span>
                </div>
                <div className="p-6">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{article.summary}</p>
                  <div className="text-xs text-gray-400">
                    {article.author} &middot;{' '}
                    {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
