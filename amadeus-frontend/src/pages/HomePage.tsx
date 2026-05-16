import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Building2, ShoppingBag, Hotel, CreditCard, Shield, Briefcase, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import { api } from '../services/api';
import type { NewsArticle } from '../types';

const heroSlides = [
  {
    tag: 'AI',
    title: 'How can AI transform travel at scale?',
    description: 'Discover how artificial intelligence is revolutionizing every aspect of the travel industry.',
    gradient: 'from-blue-900 via-blue-800 to-indigo-900',
    link: '/resources',
  },
  {
    tag: 'Cloud technologies',
    title: 'Future-ready travel. Powered by cloud technologies.',
    description: 'Together in innovation — building the next generation of travel technology on the cloud.',
    gradient: 'from-indigo-900 via-purple-800 to-blue-900',
    link: '/resources',
  },
  {
    tag: 'Sustainability',
    title: 'Putting people, places, and the planet at the core.',
    description: 'Sustainability in action — driving responsible travel through innovation and partnerships.',
    gradient: 'from-emerald-900 via-teal-800 to-green-900',
    link: '/about',
  },
  {
    tag: 'Amadeus Nevio',
    title: 'Millions of orders in production. Billions of offers created every day.',
    description: 'The next-generation order management system transforming airline retailing.',
    gradient: 'from-violet-900 via-purple-800 to-indigo-900',
    link: '/products',
  },
];

const stats = [
  { value: '400+', label: 'Airlines' },
  { value: '2M+', label: 'Hotel properties' },
  { value: '210', label: 'Airport operators' },
  { value: '230', label: 'Tour operators' },
  { value: '95', label: 'Mobility providers' },
  { value: '34', label: 'Cruise and ferry lines' },
  { value: '95', label: 'Ground handlers' },
  { value: '26', label: 'Insurance provider groups' },
];

const solutionItems = [
  { slug: 'airlines', label: 'Airlines', icon: Plane, color: 'bg-blue-500' },
  { slug: 'airports', label: 'Airports', icon: Building2, color: 'bg-indigo-500' },
  { slug: 'travel-sellers', label: 'Travel Sellers', icon: ShoppingBag, color: 'bg-purple-500' },
  { slug: 'hospitality', label: 'Hospitality', icon: Hotel, color: 'bg-teal-500' },
  { slug: 'payments', label: 'Payments', icon: CreditCard, color: 'bg-green-500' },
  { slug: 'border-authorities', label: 'Border Authorities', icon: Shield, color: 'bg-red-500' },
  { slug: 'corporate-travel', label: 'Corporate Travel & Expense', icon: Briefcase, color: 'bg-amber-500' },
  { slug: 'travel-intelligence', label: 'Travel Intelligence', icon: BarChart3, color: 'bg-cyan-500' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    api.getNews().then(setNews).catch(() => {});
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div>
      {/* Hero Carousel */}
      <section className={`relative bg-gradient-to-r ${slide.gradient} text-white transition-all duration-700`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
              {slide.tag}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {slide.title}
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              {slide.description}
            </p>
            <Link
              to={slide.link}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Learn more <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
          <button onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}>
            <ChevronLeft className="w-6 h-6 text-white/60 hover:text-white" />
          </button>
          <div className="flex space-x-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
          <button onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}>
            <ChevronRight className="w-6 h-6 text-white/60 hover:text-white" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">About Amadeus</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">At the heart of travel</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Amadeus technology powers the global travel and tourism industry.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Connecting the travel ecosystem</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Discover our Solutions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {solutionItems.map((item) => (
              <Link
                key={item.slug}
                to={`/solutions/${item.slug}`}
                className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/solutions" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
              View all solutions <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">485M</div>
              <div className="text-blue-100">Bookings/year</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">150K</div>
              <div className="text-blue-100">Transactions/second peak</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">2.2B+</div>
              <div className="text-blue-100">Passengers boarded</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">$120B</div>
              <div className="text-blue-100">Payments processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Stay informed</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">News & Insights</h2>
            </div>
            <Link to="/resources" className="hidden md:inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
              View all <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                to={`/resources/${article.slug}`}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-4xl">
                    {article.category === 'Technology' ? '🔬' : article.category === 'Industry Insights' ? '📊' : article.category === 'Products' ? '🚀' : '📰'}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{article.summary}</p>
                  <div className="mt-4 text-xs text-gray-400">
                    {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/resources" className="inline-flex items-center text-blue-600 font-medium">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to transform your travel business?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Connect with our team to discover how Amadeus technology can help you innovate and grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Contact Sales
            </Link>
            <Link to="/products" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
