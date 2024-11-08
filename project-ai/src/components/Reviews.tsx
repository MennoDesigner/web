import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Jan de Vries",
    company: "Tech Solutions",
    review: "Uitstekende service en professionele aanpak. Het eindresultaat overtrof onze verwachtingen.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  },
  // Add more reviews to match your 15 review requirement
];

export default function Reviews() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider) {
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
          } else {
            slider.scrollLeft += 1;
          }
        }
      }, 30);
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0066CC]">WAT KLANTEN ZEGGEN</h2>
        </div>

        <div 
          ref={sliderRef}
          className="flex overflow-x-hidden gap-6 pb-8"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index}
              className="min-w-[300px] md:min-w-[400px] bg-gray-50 p-6 rounded-xl shadow-lg flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}