import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: 1,
    title: 'Kies 1 van onze diensten',
    description: 'Kies eenvoudig de dienst die bij jou past en plaats jouw bestelling.',
    icon: '/icons/service-choice.svg',
    align: 'left'
  },
  {
    number: 2,
    title: 'Briefing invullen',
    description: 'Na de bestelling ontvang je per mail een briefing waar je al jouw bestanden en wensen kunt delen.',
    icon: '/icons/briefing.svg',
    align: 'right'
  },
  {
    number: 3,
    title: 'Eerste ontwerp',
    description: 'Binnen 2-3 werkdagen ontvang je het eerste ontwerp.',
    icon: '/icons/design.svg',
    align: 'left'
  },
  {
    number: 4,
    title: 'Feedback geven',
    description: 'Geef feedback op het ontwerp en ontvang binnen 1-2 werkdagen de aanpassingen.',
    icon: '/icons/feedback.svg',
    align: 'right'
  }
];

export default function Process() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = entry.target.getAttribute('data-step');
            const progress = document.getElementById('progress-line');
            if (progress) {
              progress.style.height = `${(parseInt(step) * 25)}%`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.step-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-4">IN 4 STAPPEN</p>
          <h2 className="text-4xl font-bold text-[#001e36]">HOE WERKT EQUALDESIGNS</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2">
            <div 
              id="progress-line"
              className="absolute top-0 left-0 w-full bg-[#31a8ff] transition-all duration-1000"
              style={{ height: '0%' }}
            />
          </div>

          <div className="relative space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`step-card flex items-center ${
                  step.align === 'left' ? 'justify-start pr-8' : 'justify-end pl-8'
                }`}
                data-step={step.number}
              >
                <div className={`relative w-[calc(50%-16px)] ${step.align === 'right' ? 'ml-auto' : ''}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img 
                      src={step.icon} 
                      alt={step.title}
                      className="w-24 h-24 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-[#31a8ff] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  <div className={`absolute top-1/2 ${
                    step.align === 'left' ? 'right-0 translate-x-[24px]' : 'left-0 -translate-x-[24px]'
                  } -translate-y-1/2`}>
                    <div className="w-10 h-10 bg-[#31a8ff] rounded-full flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}