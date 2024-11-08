import React, { useState } from 'react';
import { Image, Box, Camera, Video, Pen, FileText } from 'lucide-react';

const services = [
  {
    icon: <Image className="h-8 w-8" />,
    title: 'LISTING DESIGN',
    description: 'Laat een listing voor jouw product ontwerpen.',
    color: 'bg-white shadow-lg',
    textColor: 'text-gray-800',
    hoverColor: 'hover:bg-[#001e36] hover:text-white',
    width: 'col-span-1'
  },
  {
    icon: <Box className="h-8 w-8" />,
    title: 'VERPAKKING DESIGN',
    description: 'Laat een verpakking voor jouw product ontwerpen.',
    color: 'bg-[#001e36]',
    textColor: 'text-white',
    hoverColor: 'hover:bg-[#31a8ff]',
    width: 'col-span-2'
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: 'PRODUCT FOTOGRAFIE',
    description: 'Laat jouw product professioneel fotograferen.',
    color: 'bg-[#31a8ff]',
    textColor: 'text-white',
    hoverColor: 'hover:bg-[#001e36]',
    width: 'col-span-1'
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: 'PRODUCT VIDEO',
    description: 'Professionele product videos maken.',
    color: 'bg-white shadow-lg',
    textColor: 'text-gray-800',
    hoverColor: 'hover:bg-[#001e36] hover:text-white',
    width: 'col-span-1'
  },
  {
    icon: <Pen className="h-8 w-8" />,
    title: 'LOGO DESIGN',
    description: 'Uniek logo ontwerp voor jouw merk.',
    color: 'bg-[#001e36]',
    textColor: 'text-white',
    hoverColor: 'hover:bg-[#31a8ff]',
    width: 'col-span-2'
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'HUISSTIJL',
    description: 'Complete huisstijl ontwikkeling.',
    color: 'bg-[#31a8ff]',
    textColor: 'text-white',
    hoverColor: 'hover:bg-[#001e36]',
    width: 'col-span-1'
  }
];

export default function Services() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-4">BEKIJK HIER</p>
          <h2 className="text-4xl font-bold text-[#001e36]">ONZE DIENSTEN</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.width} perspective-1000`}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div className={`relative w-full h-64 transition-transform duration-500 transform-style-3d ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Front of card */}
                <div className={`absolute w-full h-full ${service.color} ${service.textColor} p-6 rounded-2xl backface-hidden`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>

                {/* Back of card */}
                <div className={`absolute w-full h-full bg-white shadow-lg p-6 rounded-2xl backface-hidden rotate-y-180`}>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#001e36]">{service.title}</h3>
                      <p className="text-sm text-gray-600">Bekijk meer informatie over deze dienst en ontdek wat we voor je kunnen betekenen.</p>
                    </div>
                    <a 
                      href={`/diensten/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-[#31a8ff] text-white px-4 py-2 rounded-lg text-center hover:bg-[#001e36] transition-colors"
                    >
                      Bekijk Meer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}