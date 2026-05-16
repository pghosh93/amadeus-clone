import { Link } from 'react-router-dom';
import { ArrowRight, Code, BookOpen, Zap, Shield, Globe, Terminal } from 'lucide-react';

const popularApis = [
  { name: 'Flight Offers Search', description: 'Find the most cost-effective, detailed flight options from over 400 airlines.', icon: '✈️' },
  { name: 'On-Demand Flight Status', description: 'Track live updates on flight schedules, terminal details, and real-time delay status.', icon: '📡' },
  { name: 'Hotel Search', description: 'Search and book from over 2 million hotel properties worldwide.', icon: '🏨' },
  { name: 'Transfer Search', description: 'Access diverse pre-arranged private and public transportation options.', icon: '🚗' },
  { name: 'Airport & City Search', description: 'Look up IATA location codes and airport/city information.', icon: '🌍' },
  { name: 'Travel Recommendations', description: 'Get AI-powered destination recommendations based on traveler preferences.', icon: '🤖' },
];

export default function DevelopersPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Terminal className="w-8 h-8 text-blue-400" />
              <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Amadeus for Developers</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Build the future of travel</h1>
            <p className="text-xl text-blue-100 mb-8">
              Leverage the full potential of travel data with Amadeus Travel APIs. Get instant access to 
              over 400 airlines, 150,000 hotels, 300,000 tours & activities, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#apis" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-400 transition-colors">
                Explore APIs <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#docs" className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                <BookOpen className="mr-2 w-5 h-5" /> Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Zap, title: 'Quick Start', description: 'Get started in minutes with our RESTful APIs and comprehensive SDKs.' },
              { icon: Shield, title: 'Enterprise Ready', description: 'Production-grade APIs with SLA guarantees and global availability.' },
              { icon: Globe, title: 'Global Coverage', description: 'Access travel content from providers worldwide through a single integration.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-xl bg-gray-50">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apis" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular APIs</h2>
            <p className="text-lg text-gray-600">Explore some of our best-regarded APIs for travel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularApis.map((apiItem, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <span className="text-3xl mb-4 block">{apiItem.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{apiItem.name}</h3>
                <p className="text-sm text-gray-500">{apiItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="docs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources for Developers</h2>
            <p className="text-lg text-gray-600">Everything you need to get started and build great travel apps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Documentation', description: 'Comprehensive API reference guides, tutorials, and code samples.', link: '#' },
              { icon: Code, title: 'SDKs & Libraries', description: 'Official SDKs for Python, Java, Node.js, and more.', link: '#' },
              { icon: Terminal, title: 'API Sandbox', description: 'Test APIs in a sandbox environment with sample data.', link: '#' },
            ].map((item, i) => (
              <a key={i} href={item.link} className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-4">{item.description}</p>
                <span className="inline-flex items-center text-blue-600 font-medium text-sm">
                  Explore <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 rounded-2xl p-8 font-mono text-sm overflow-x-auto">
            <div className="text-gray-400 mb-2"># Quick Start: Search for flights</div>
            <div className="text-green-400">curl -X GET \</div>
            <div className="text-blue-300 pl-4">"https://api.amadeus.com/v2/shopping/flight-offers" \</div>
            <div className="text-yellow-300 pl-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
            <div className="text-purple-300 pl-4">-d "originLocationCode=MAD" \</div>
            <div className="text-purple-300 pl-4">-d "destinationLocationCode=LHR" \</div>
            <div className="text-purple-300 pl-4">-d "departureDate=2026-06-15" \</div>
            <div className="text-purple-300 pl-4">-d "adults=1"</div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start building today</h2>
          <p className="text-lg text-blue-100 mb-8">
            Whether you are a developer, a startup or a leading travel brand, Amadeus APIs enable you to 
            innovate, create high-quality apps and deliver them to the market quickly.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Enterprise Access <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
