
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative flex flex-col items-center text-center py-20 lg:py-32">
      <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-8 tracking-wider uppercase">
        <span className="relative flex h-2 w-2 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span>2nd Year Student • 2026 Edition</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
        MADHANAKANT <br />
        <span className="gradient-text">K K</span>
      </h1>
      
      <p className="max-w-2xl text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed font-light">
        Information Technology student at <span className="text-gray-200 font-medium">HiCET</span>, dedicated to the craft of clean code and efficient software.
      </p>

      <div className="max-w-3xl glass p-10 rounded-3xl border border-white/5 relative group overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-70"></div>
        <div className="absolute -top-4 left-10 text-7xl text-blue-500/10 font-serif select-none">"</div>
        <p className="text-xl md:text-2xl font-medium italic text-gray-200 leading-relaxed relative z-10">
          I am a passionate and motivated student who is always eager to learn, improve my skills, and grow both personally and professionally.
        </p>
        <div className="absolute -bottom-10 right-10 text-7xl text-purple-500/10 font-serif select-none">"</div>
      </div>

      <div className="mt-20 animate-bounce text-gray-700">
        <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
