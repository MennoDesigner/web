import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">EqualDesigns</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-gray-800 hover:text-[#0066CC] flex items-center">
              Diensten
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <a href="#portfolio" className="text-gray-800 hover:text-[#0066CC]">Portfolio</a>
          <a href="#contact" className="text-gray-800 hover:text-[#0066CC]">Contact</a>
          <a href="#contact" className="bg-[#7C3AED] text-white px-6 py-2 rounded-full hover:bg-[#6D28D9] transition-colors">
            Neem Contact Op
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a href="#diensten" className="block py-2 text-gray-800 hover:text-[#0066CC]">Diensten</a>
            <a href="#portfolio" className="block py-2 text-gray-800 hover:text-[#0066CC]">Portfolio</a>
            <a href="#contact" className="block py-2 text-gray-800 hover:text-[#0066CC]">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}