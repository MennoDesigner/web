import React from 'react';

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50">
          {/* Replace with actual partner logos */}
          {['AIRDNEX', 'KAAIMAN', 'VIOLUX', 'METIS', 'NOOV'].map((partner, index) => (
            <div key={index} className="text-xl font-bold text-gray-400">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}