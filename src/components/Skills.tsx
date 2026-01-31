
import React from 'react';
import { Skill } from '../../types';

const skills: Skill[] = [
  { name: 'HTML5', level: 90, category: 'frontend', icon: '🌐' },
  { name: 'CSS3', level: 85, category: 'frontend', icon: '🎨' },
  { name: 'JavaScript', level: 80, category: 'frontend', icon: '⚡' },
  { name: 'Python', level: 75, category: 'language', icon: '🐍' },
  { name: 'Java (Basic)', level: 60, category: 'language', icon: '☕' },
  { name: 'C (Basic)', level: 65, category: 'language', icon: '⚙️' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Toolbox & Languages</h2>
        <p className="text-gray-400">The technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="glass p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase">{skill.category}</span>
            </div>
            
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="mt-2 text-right text-xs font-mono text-gray-500">
              {skill.level}% Proficiency
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
