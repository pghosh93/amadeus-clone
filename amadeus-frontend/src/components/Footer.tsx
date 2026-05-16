import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">amadeus</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Amadeus technology powers the global travel and tourism industry.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions/airlines" className="hover:text-white transition-colors">Airlines</Link></li>
              <li><Link to="/solutions/airports" className="hover:text-white transition-colors">Airports</Link></li>
              <li><Link to="/solutions/travel-sellers" className="hover:text-white transition-colors">Travel Sellers</Link></li>
              <li><Link to="/solutions/hospitality" className="hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link to="/solutions/payments" className="hover:text-white transition-colors">Payments</Link></li>
              <li><Link to="/solutions/corporate-travel" className="hover:text-white transition-colors">Corporate Travel</Link></li>
              <li><Link to="/solutions/travel-intelligence" className="hover:text-white transition-colors">Travel Intelligence</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Amadeus</Link></li>
              <li><Link to="/about#leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/about#careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/about#sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/about#investors" className="hover:text-white transition-colors">Investors</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">News & Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/developers" className="hover:text-white transition-colors">Developers</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2 text-sm">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r text-sm hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Amadeus IT Group. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Legal Notice</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
