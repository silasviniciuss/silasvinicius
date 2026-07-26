import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Cpu, Sparkles, Award, ExternalLink, Sliders } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sobre o Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Excelência Visual com Foco em <br className="hidden sm:inline" />
            <span className="text-blue-500">Narrativa e Retenção</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            Com mais de 6 anos de atuação no mercado audiovisual, combino técnica apurada de edição, 
            design gráfico refinado e conhecimento sobre psicologia de consumo de mídia.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Photo & Process Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-[#111111] border border-neutral-800 p-6 space-y-6">
              
              {/* Profile Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden border border-neutral-800 group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Silas Vinícius no Estúdio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Estúdio de Edição & Cor</span>
                  <p className="text-sm font-semibold">Monitoramento em 4K HDR Color Graded</p>
                </div>
              </div>

              {/* Pillars */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-400" />
                  <span>Diferenciais Competitivos</span>
                </h3>
                
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-start gap-2 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Ritmo & Sound Design:</span> Trilha sincronizada frame-a-frame com efeitos sonoros imersivos.
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Color Grading Profissional:</span> Correção de cor avançada no DaVinci Resolve (Teal & Orange, Film Look).
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Motion & 3D Integrado:</span> Animações customizadas no After Effects e Blender sem templates genéricos.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Career Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-8">
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Trajetória & Experiência</h3>
                    <p className="text-xs text-neutral-400">Histórico profissional e evolução na área audiovisual</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                  2019 - 2026
                </span>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-800">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Dot */}
                    <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 ${
                      item.highlight
                        ? 'bg-blue-500 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                        : 'bg-neutral-900 border-neutral-600'
                    }`} />

                    <div className="space-y-1 bg-neutral-900/40 p-4 rounded-xl border border-neutral-800/80 group-hover:border-blue-500/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-blue-400">{item.year}</span>
                        <span className="text-[11px] text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                          {item.company}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white">{item.role}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Software Suite Banner */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>Workstation: Mac Studio M2 Ultra + Dual 4K Display</span>
                </div>
                <div className="text-blue-400 font-semibold hover:underline cursor-pointer">
                  Conheça todas as ferramentas ↓
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
