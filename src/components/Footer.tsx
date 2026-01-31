
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-900 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tight mb-2">Madhanakant K K</h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">2nd Year IT Student @ HiCET</p>
        </div>

        <div className="flex space-x-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
        </div>

        <div className="text-sm text-gray-600 font-mono">
          &copy; 2026 MADHANAKANT K K
        </div>
      </div>
      
      <div className="mt-12 text-center opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase">
          Evolving through code • 2026 Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
