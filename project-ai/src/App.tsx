import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Strengths from './components/Strengths';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartButton from './components/CartButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partners />
        <Services />
        <Process />
        <Portfolio />
        <Strengths />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartButton />
    </div>
  );
}

export default App;