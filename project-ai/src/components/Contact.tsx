import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600">Neem contact met ons op voor meer informatie</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#0066CC]" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">info@equaldesigns.nl</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#0066CC]" />
              <div>
                <h3 className="font-semibold mb-1">Telefoon</h3>
                <p className="text-gray-600">+31 (0)6 12345678</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#0066CC]" />
              <div>
                <h3 className="font-semibold mb-1">Adres</h3>
                <p className="text-gray-600">Voorbeeldstraat 123<br />1234 AB Amsterdam</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Naam</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066CC] focus:ring focus:ring-[#0066CC] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066CC] focus:ring focus:ring-[#0066CC] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Bericht</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066CC] focus:ring focus:ring-[#0066CC] focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0066CC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0055aa] transition-colors"
            >
              Verstuur bericht
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}