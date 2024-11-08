import React, { useEffect, useRef } from 'react';

// ... portfolio items array ...

export default function Portfolio() {
  // ... useRef and useEffect ...

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001e36] mb-4">NOG NIET OVERTUIGD?</h2>
          <p className="text-2xl font-bold">BEKIJK ONS PORTFOLIO</p>
        </div>

        <div 
          ref={sliderRef}
          className="flex overflow-x-hidden gap-6 pb-8 relative"
        >
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <div 
              key={index}
              className="min-w-[300px] md:min-w-[400px] flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#31a8ff] font-semibold">{item.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}