import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Video, Play, MessageCircle, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const titles = [
    'Editor de Vídeo Senior',
    'Motion Designer 3D',
    'Designer Gráfico',
    'Especialista em Retenção'
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-gradient">
      {/* Background Dots Pattern & Lighting Glow */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Hero CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Disponível para novos projetos e contratos</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Impacto Visual que <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Prende a Atenção
              </span>
            </h1>

            {/* Dynamic Typing Subtitle */}
            <div className="h-10 flex items-center">
              <span className="text-xl sm:text-2xl font-semibold text-neutral-300 font-mono">
                {displayText}
                <span className="animate-pulse text-blue-500">|</span>
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Transformo ideias brutas em produções audiovisuais de padrão internacional. 
            Especialista em ritmo narrativo, motion design envolvente, tratamento de cor de ponta e identidades visuais de alta conversão.
          </p>

          {/* Key Bullet Highlights */}
          <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-300">
            <div className="flex items-center gap-1.5 bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>Alta Retenção de Audiência</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Qualidade 4K HDR & ProRes</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Prazos Rigorosamente Cumpridos</span>
            </div>
          </div>

          {/* Hero Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="#portfolio"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Ver Portfólio de Projetos</span>
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm border border-neutral-700/80 flex items-center justify-center gap-2 transition-all hover:border-neutral-500"
            >
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span>Entrar em Contato</span>
            </a>
          </div>

        </div>

        {/* Right Column: Profile Showcase Card & Floating Visuals */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md">
            
            {/* Glowing Accent Ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-lg" />

            {/* Profile Card Container */}
            <div className="relative rounded-2xl bg-[#111111] border border-neutral-800 p-4 sm:p-6 shadow-2xl space-y-5">
              
              {/* Profile Image with Studio Frame */}
              <div className="relative aspect-4/5 rounded-xl overflow-hidden border border-neutral-800 group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Silas Vinícius - Designer & Editor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                    Silas Vinícius
                  </div>
                  <div className="text-lg font-bold">Diretor Criativo & Editor</div>
                </div>
              </div>

              {/* Quick Stats Banner inside Card */}
              <div className="grid grid-cols-3 gap-2 text-center bg-neutral-950 p-3 rounded-xl border border-neutral-800/80">
                <div>
                  <div className="text-base font-bold text-white font-mono">+350</div>
                  <div className="text-[10px] text-neutral-400">Projetos</div>
                </div>
                <div className="border-x border-neutral-800">
                  <div className="text-base font-bold text-blue-400 font-mono">+15M</div>
                  <div className="text-[10px] text-neutral-400">Views</div>
                </div>
                <div>
                  <div className="text-base font-bold text-white font-mono">100%</div>
                  <div className="text-[10px] text-neutral-400">Satisfação</div>
                </div>
              </div>

              {/* Floating Software Tools Badges */}
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono pt-1">
                <span className="flex items-center gap-1 text-blue-400">
                  <Video className="w-3.5 h-3.5" /> Premiere
                </span>
                <span>After Effects</span>
                <span>DaVinci</span>
                <span>Photoshop</span>
              </div>
            </div>

            {/* Floating Live Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#1A1A1A] border border-neutral-700/80 text-white p-3 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-lg">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <div>
                <div className="text-xs font-bold">Showreel 2025</div>
                <div className="text-[10px] text-neutral-400">Pronto para visualização</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors group"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Rolar para explorar</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-blue-500" />
      </a>
    </section>
  );
};
