import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { api } from '../services/api';
import type { NewsArticle } from '../types';

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    if (slug) {
      api.getNewsArticle(slug).then(setArticle).catch(() => {});
    }
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/resources" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to News & Insights
          </Link>
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {article.author}</span>
            <span className="flex items-center"><Tag className="w-4 h-4 mr-1" /> {article.category}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-64 rounded-2xl mb-12 flex items-center justify-center">
            <span className="text-6xl">
              {article.category === 'Technology' ? '🔬' : article.category === 'Industry Insights' ? '📊' : article.category === 'Products' ? '🚀' : article.category === 'Sustainability' ? '🌿' : '📰'}
            </span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 font-medium mb-8 leading-relaxed">{article.summary}</p>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{article.content}</div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link to="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> More articles
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
