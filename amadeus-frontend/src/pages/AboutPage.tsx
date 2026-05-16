import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Award, Leaf, TrendingUp, Building } from 'lucide-react';

const leadership = [
  { name: 'Luis Maroto', role: 'President & CEO', bio: 'Leading Amadeus since 2010 with a vision for travel technology innovation.' },
  { name: 'Till Streichert', role: 'Chief Financial Officer', bio: 'Driving financial strategy and sustainable growth across all business segments.' },
  { name: 'Decius Valmorbida', role: 'President, Travel', bio: 'Overseeing travel unit strategy and global customer relationships.' },
  { name: 'Juan José Jover', role: 'Chief Technology Officer', bio: 'Leading technology innovation and cloud transformation initiatives.' },
  { name: 'Sabine Hansen Pham', role: 'EVP, People & Culture', bio: 'Championing talent development and organizational culture worldwide.' },
  { name: 'Christophe Bousquet', role: 'President, Hospitality', bio: 'Driving innovation in hospitality technology solutions.' },
];

const timeline = [
  { year: '1987', event: 'Amadeus founded by Air France, Iberia, Lufthansa, and SAS.' },
  { year: '1992', event: 'Amadeus system goes live, processing first bookings.' },
  { year: '1999', event: 'Amadeus listed on the Madrid, Frankfurt, and Paris stock exchanges.' },
  { year: '2005', event: 'Amadeus launches Altéa, next-generation airline IT platform.' },
  { year: '2010', event: 'Return to the stock market with IPO on the Spanish Stock Exchange.' },
  { year: '2016', event: 'Expansion into hospitality with acquisition of TravelClick.' },
  { year: '2020', event: 'Accelerated cloud migration and digital transformation.' },
  { year: '2024', event: 'Launch of Amadeus Nevio, next-gen order management system.' },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Amadeus</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            At the heart of travel. Amadeus technology powers the global travel and tourism industry, 
            helping businesses connect, innovate, and deliver exceptional travel experiences.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">It's how travel works</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Amadeus is a leading technology company dedicated to the global travel and tourism industry. 
                We provide cutting-edge solutions that help airlines, airports, hotels, travel sellers, 
                and other travel players operate more efficiently and deliver better experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a team of over 18,000 people across 190+ countries, we process billions of 
                transactions each year through our technology platforms, connecting the entire travel ecosystem.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">18,000+</div>
                  <div className="text-sm text-gray-500 mt-1">Employees</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">190+</div>
                  <div className="text-sm text-gray-500 mt-1">Countries</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">70+</div>
                  <div className="text-sm text-gray-500 mt-1">Offices</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-96 flex items-center justify-center">
              <Globe className="w-32 h-32 text-blue-300" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Customer First', description: 'We put our customers at the center of everything we do, building lasting partnerships.' },
              { icon: TrendingUp, title: 'Innovation', description: 'We continuously innovate to shape the future of travel technology.' },
              { icon: Award, title: 'Excellence', description: 'We strive for excellence in our solutions, services, and operations.' },
              { icon: Leaf, title: 'Sustainability', description: 'We are committed to building a more sustainable travel ecosystem.' },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-lg text-gray-600">Meet the team driving Amadeus forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-white">{person.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center">{person.name}</h3>
                <p className="text-sm text-blue-600 font-medium text-center mb-3">{person.role}</p>
                <p className="text-sm text-gray-500 text-center">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-lg text-gray-600">Key milestones in the Amadeus journey</p>
          </div>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start space-x-6">
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-lg font-bold text-blue-600">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2" />
                  {i < timeline.length - 1 && <div className="absolute top-5 left-1 w-0.5 h-full bg-blue-200" />}
                </div>
                <p className="text-gray-700 flex-1 pb-4">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sustainability" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Leaf className="w-12 h-12 text-emerald-300 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Sustainability</h2>
              <p className="text-lg text-emerald-100 mb-6 leading-relaxed">
                We believe technology has a crucial role to play in making travel more sustainable. 
                From reducing our own carbon footprint to developing tools that help the industry make 
                greener choices, sustainability is embedded in our strategy.
              </p>
              <ul className="space-y-3 text-emerald-100">
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-300 mt-1">&#10003;</span>
                  <span>Carbon neutral operations since 2019</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-300 mt-1">&#10003;</span>
                  <span>Net-zero commitment by 2030</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-300 mt-1">&#10003;</span>
                  <span>Tools for sustainable travel choices</span>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-800 rounded-2xl h-80 flex items-center justify-center">
              <Leaf className="w-32 h-32 text-emerald-600" />
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of a global team shaping the future of travel technology. We offer exciting 
            career opportunities across engineering, product, sales, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Open Positions
            </Link>
            <a href="#" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
              Life at Amadeus <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
