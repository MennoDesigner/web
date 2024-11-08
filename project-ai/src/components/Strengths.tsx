import React from 'react';
import { Palette, MessageSquare, Layout } from 'lucide-react';

const strengths = [
  {
    title: "GRAFISCH ONTWERP",
    description: "Bolspot is een bruisend bedrijf dat gedreven wordt door een gepassioneerd en creatief team. Met een scherp oog voor design en innovatie, vormen zij de drijvende kracht achter de unieke ontwerpen die Bolspot de ideale partner maakt.",
    icon: <Palette className="w-12 h-12 text-[#31a8ff]" />
  },
  {
    title: "COMMUNICATIE STAAT OP 1",
    description: "Bolspot erkent het cruciale belang van effectieve communicatie met haar klanten. Door transparantie, begrip en responsiviteit streven we ernaar om een hechte band op te bouwen voor nog effectievere samenwerkingen in de toekomst.",
    icon: <MessageSquare className="w-12 h-12 text-[#31a8ff]" />
  },
  {
    title: "VEELZIJDIGE DIENSTEN",
    description: "Bolspot is van alle markten thuis en biedt naast alle design diensten, ook product fotografie en videografie aan. Op deze manier heb je alle diensten die je zoekt op 1 plek.",
    icon: <Layout className="w-12 h-12 text-[#31a8ff]" />
  }
];

export default function Strengths() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-gray-600 mb-4">WAAROM KIEZEN VOOR BOLSPOT?</h3>
          <h2 className="text-4xl font-bold text-[#001e36]">BEKIJK ONZE KRACHTEN</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6 flex justify-center">{strength.icon}</div>
              <h3 className="text-xl font-bold text-center mb-4">{strength.title}</h3>
              <p className="text-gray-600 text-center">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}