import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Cpu, Film, Sparkles, Image as ImageIcon, Box, Smartphone, PenTool, Figma, Clapperboard } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Vídeo', 'Motion', 'Design'];

  const filteredSkills = SKILLS.filter(
    (skill) => selectedCategory === 'Todos' || skill.category === selectedCategory
  );

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Adobe Premiere Pro':
        return <Film className="w-5 h-5 text-purple-400" />;
      case 'Adobe After Effects':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'DaVinci Resolve':
        return <Clapperboard className="w-5 h-5 text-blue-400" />;
      case 'Adobe Photoshop':
        return <ImageIcon className="w-5 h-5 text-cyan-400" />;
      case 'Adobe Illustrator':
        return <PenTool className="w-5 h-5 text-amber-400" />;
      case 'Blender 3D':
        return <Box className="w-5 h-5 text-orange-400" />;
      case 'Figma':
        return <Figma className="w-5 h-5 text-emerald-400" />;
      case 'CapCut Pro':
        return <Smartphone className="w-5 h-5 text-pink-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema de Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dominância das <span className="text-blue-500">Principais Ferramentas</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
            Software suite atualizado para garantir fluxo de trabalho profissional, velocidade de renderização e precisão cirúrgica.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-blue-500/40 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    {getToolIcon(skill.name)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{skill.name}</h3>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {skill.experienceYears} de uso prático
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-blue-400 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800/60 p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
