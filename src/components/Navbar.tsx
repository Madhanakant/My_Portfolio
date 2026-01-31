
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-black tracking-tighter">
          <span className="gradient-text">MADHANAKANT</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#education" className="hover:text-white transition-colors">Journey</a>
          <a href="#skills" className="hover:text-white transition-colors">Stack</a>
          <a href="#contact" className="px-5 py-2.5 bg-blue-600/10 border border-blue-500/30 rounded-full text-blue-400 hover:bg-blue-600/20 transition-all">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
