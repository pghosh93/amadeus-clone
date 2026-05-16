import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Plane, Building2, ShoppingBag, Hotel, CreditCard, Shield, Briefcase, BarChart3 } from 'lucide-react';

const solutionLinks = [
  { to: '/solutions/airlines', label: 'Airlines', icon: Plane },
  { to: '/solutions/airports', label: 'Airports', icon: Building2 },
  { to: '/solutions/travel-sellers', label: 'Travel Sellers', icon: ShoppingBag },
  { to: '/solutions/hospitality', label: 'Hospitality', icon: Hotel },
  { to: '/solutions/payments', label: 'Payments', icon: CreditCard },
  { to: '/solutions/border-authorities', label: 'Border Authorities', icon: Shield },
  { to: '/solutions/corporate-travel', label: 'Corporate Travel & Expense', icon: Briefcase },
  { to: '/solutions/travel-intelligence', label: 'Travel Intelligence', icon: BarChart3 },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">amadeus</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Solutions <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 w-96 bg-white shadow-xl rounded-lg border border-gray-100 p-4 grid grid-cols-2 gap-1">
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      <item.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </Link>
                  ))}
                  <Link
                    to="/solutions"
                    className="col-span-2 mt-2 pt-2 border-t text-center text-sm text-blue-600 font-medium hover:text-blue-700 py-2"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    View all solutions
                  </Link>
                </div>
              )}
            </div>

            <Link to="/products" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link to="/resources" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Resources
            </Link>
            <Link to="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/developers" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Developers
            </Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="lg:hidden p-2 text-gray-500 hover:text-blue-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t bg-gray-50 py-4">
          <div className="max-w-3xl mx-auto px-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What can we help you discover?"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden border-t bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <Link to="/solutions" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setMobileOpen(false)}>Solutions</Link>
            {solutionLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-6 py-2 text-sm text-gray-500 hover:bg-blue-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/products" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setMobileOpen(false)}>Products</Link>
            <Link to="/resources" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setMobileOpen(false)}>Resources</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/developers" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setMobileOpen(false)}>Developers</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
