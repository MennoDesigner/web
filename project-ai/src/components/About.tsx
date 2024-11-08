import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our Team"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Over EqualDesigns</h2>
            <p className="text-gray-600 mb-6">
              Bij EqualDesigns geloven we in het creëren van onderscheidende digitale ervaringen die uw merk versterken en uw doelen helpen bereiken.
            </p>
            <div className="space-y-4">
              {[
                'Meer dan 5 jaar ervaring',
                'Focus op kwaliteit en innovatie',
                'Persoonlijke aanpak',
                'Flexibel en resultaatgericht'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#0066CC]" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}