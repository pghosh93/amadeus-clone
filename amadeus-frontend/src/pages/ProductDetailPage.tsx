import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { api } from '../services/api';
import type { Product } from '../types';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    if (slug) {
      api.getProduct(slug).then((p) => {
        setProduct(p);
        api.getProducts(p.industry).then((all) => {
          setRelated(all.filter((r) => r.slug !== slug).slice(0, 3));
        }).catch(() => {});
      }).catch(() => {});
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-4">
            <Link to="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span>{product.industry}</span>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
          <div className="flex space-x-3 mb-6">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">{product.industry}</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">{product.category}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-700 mr-6">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to products
            </Link>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">01</span>
                  <span className="text-gray-700">Industry-leading technology backed by decades of travel expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">02</span>
                  <span className="text-gray-700">Seamless integration with existing systems and workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">03</span>
                  <span className="text-gray-700">Scalable cloud-based architecture for global operations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">04</span>
                  <span className="text-gray-700">24/7 global support and professional services</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Request a demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.slug}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{p.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
