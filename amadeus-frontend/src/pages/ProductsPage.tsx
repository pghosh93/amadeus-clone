import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { api } from '../services/api';
import type { Product } from '../types';

const industries = ['Airlines', 'Airports', 'Travel Sellers', 'Hospitality', 'Corporations', 'Border Authorities'];
const categories = [
  'Airlines', 'Airline Services', 'Airport management systems', 'Altea Departure Control System',
  'Altea Digital touchpoints', 'Altea Reservation', 'Altea Ticketing', 'Content',
  'Customer loyalty', 'Disruption Management', 'Dynamic Offer Pricing', 'Ground handling',
  'NDC for airlines', 'Network & Schedule Planning - Sky suite', 'Passenger & baggage solutions',
  'Products', 'Professional services', 'Revenue Accounting', 'Revenue Management',
  'Sales and Distribution', 'Travel Intelligence', 'Travel Sellers', 'Corporations',
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    api.getProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    }).catch(console.error);
  }, []);

  useEffect(() => {
    let result = products;
    if (selectedIndustry) {
      result = result.filter((p) => p.industry === selectedIndustry);
    }
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [products, selectedIndustry, selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedIndustry('');
    setSelectedCategory('');
    setSearchQuery('');
  };

  const activeFilterCount = (selectedIndustry ? 1 : 0) + (selectedCategory ? 1 : 0);

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-xl text-blue-100">Explore our comprehensive portfolio of travel technology solutions.</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{activeFilterCount}</span>
              )}
            </button>
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
                <X className="w-4 h-4" /> <span>Clear filters</span>
              </button>
            )}
            <span className="text-sm text-gray-500">
              Showing {filtered.length} of {products.length} results
            </span>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Industries</option>
                  {industries.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No products match your criteria.</p>
              <button onClick={clearFilters} className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{product.industry}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs text-gray-400">{product.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{product.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
