
import React, { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import Skills from './src/components/Skills';
import Education from './src/components/Education';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
      </div>

      <Navbar isScrolled={isScrolled} />
      
      <main className="container mx-auto px-6 pt-24 space-y-32 pb-32">
        <Hero />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
