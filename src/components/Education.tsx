
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Academic Journey</h2>
        <p className="text-gray-400 text-lg">My path through technology and excellence.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-blue-500/20 ml-4 md:ml-0 md:left-1/2">
          {/* Card 1: College (Present) */}
          <div className="mb-16 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full md:left-auto md:right-auto md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            <div className="md:w-1/2 md:pr-12 md:text-right ml-8 md:ml-0 group">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">2024 - 2028 (Expected)</span>
              <h3 className="text-2xl font-bold mt-4 group-hover:text-blue-400 transition-colors">B.Tech - Information Technology</h3>
              <p className="text-gray-300 mt-2 font-medium">Hindusthan College of Engineering and Technology</p>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed italic">
                Currently in 2nd year, exploring software engineering paradigms and mastering Python/Web technologies.
              </p>
            </div>
          </div>

          {/* Card 2: 12th Grade (2022-2024) */}
          <div className="mb-16 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full md:left-auto md:right-auto md:-translate-x-1/2"></div>
            <div className="md:w-1/2 md:pl-12 md:ml-auto ml-8 md:ml-0 group">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20">2022 - 2024</span>
              <h3 className="text-2xl font-bold mt-4 group-hover:text-purple-400 transition-colors">Higher Secondary (12th)</h3>
              <p className="text-gray-300 mt-2 font-medium">Computer Science Group</p>
              <div className="inline-flex items-center mt-3 px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-xs font-bold border border-green-500/20">
                Score: 86.3% 
              </div>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                Deepened my understanding of Computer Science fundamentals, logic-building, and mathematics.
              </p>
            </div>
          </div>

          {/* Card 3: 10th Grade (Pre-2022) */}
          <div className="relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-700 rounded-full md:left-auto md:right-auto md:-translate-x-1/2"></div>
            <div className="md:w-1/2 md:pr-12 md:text-right ml-8 md:ml-0 group">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/10">Completed 2022</span>
              <h3 className="text-2xl font-bold mt-4 group-hover:text-gray-400 transition-colors">Secondary Education (10th)</h3>
              <div className="inline-flex items-center mt-3 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/20">
                Score: 83.8%
              </div>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                A strong academic start that paved the way for a career in technology and engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
