import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Building2, ShoppingBag, Hotel, CreditCard, Shield, Briefcase, BarChart3 } from 'lucide-react';
import { api } from '../services/api';
import type { Solution } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Plane, Building2, ShoppingBag, Hotel, CreditCard, Shield, Briefcase, BarChart3,
};

const colorMap: Record<string, string> = {
  airlines: 'bg-blue-500',
  airports: 'bg-indigo-500',
  'travel-sellers': 'bg-purple-500',
  hospitality: 'bg-teal-500',
  payments: 'bg-green-500',
  'border-authorities': 'bg-red-500',
  'corporate-travel': 'bg-amber-500',
  'travel-intelligence': 'bg-cyan-500',
};

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<Solution[]>([]);

  useEffect(() => {
    api.getSolutions().then(setSolutions).catch(console.error);
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Create exceptional journeys throughout the travel ecosystem with Amadeus technology solutions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const IconComp = iconMap[solution.icon] || Plane;
              const bgColor = colorMap[solution.slug] || 'bg-blue-500';
              return (
                <Link
                  key={solution.id}
                  to={`/solutions/${solution.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-5">
                    <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-500 mb-4">{solution.description}</p>
                      <span className="inline-flex items-center text-blue-600 font-medium text-sm">
                        Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Our team of experts is ready to help you find the right solution for your business.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contact us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
