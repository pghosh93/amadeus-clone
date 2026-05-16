import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Plane, Building2, ShoppingBag, Hotel, CreditCard, Shield, Briefcase, BarChart3 } from 'lucide-react';
import { api } from '../services/api';
import type { Solution, Product } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Plane, Building2, ShoppingBag, Hotel, CreditCard, Shield, Briefcase, BarChart3,
};

const industryMap: Record<string, string> = {
  airlines: 'Airlines',
  airports: 'Airports',
  'travel-sellers': 'Travel Sellers',
  hospitality: 'Hospitality',
  payments: 'Travel Sellers',
  'border-authorities': 'Border Authorities',
  'corporate-travel': 'Corporations',
  'travel-intelligence': 'Airlines',
};

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [solution, setSolution] = useState<Solution | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (slug) {
      api.getSolution(slug).then(setSolution).catch(console.error);
      const industry = industryMap[slug];
      if (industry) {
        api.getProducts(industry).then((p) => setProducts(p.slice(0, 6))).catch(console.error);
      }
    }
  }, [slug]);

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  const IconComp = iconMap[solution.icon] || Plane;

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
              <IconComp className="w-8 h-8 text-white" />
            </div>
            <div>
              <nav className="text-sm text-blue-200 mb-1">
                <Link to="/solutions" className="hover:text-white">Solutions</Link> / {solution.title}
              </nav>
              <h1 className="text-4xl lg:text-5xl font-bold">{solution.title}</h1>
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">{solution.description}</p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Contact sales <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{solution.longDescription}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {products.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{product.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/products" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                View all products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Let our experts help you find the perfect {solution.title.toLowerCase()} solution for your needs.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get in touch <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
