import React from 'react';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <img src="/logo.svg" alt="EqualDesigns" className="h-16 mx-auto mb-16" />
        </div>
        <h2 className="text-gray-600 text-2xl mb-4">IS ER SPECIAAL VOOR JOU</h2>
        <h1 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
          PROFESSIONEEL DESIGN<br />VOOR JOUW MERK
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a 
            href="#portfolio" 
            className="bg-[#2E1065] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#4C1D95] transition-colors"
          >
            BEKIJK PORTFOLIO
          </a>
          <a 
            href="#contact" 
            className="bg-[#7C3AED] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6D28D9] transition-colors"
          >
            NEEM CONTACT OP
          </a>
        </div>
      </div>
    </div>
  );
}