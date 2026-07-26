import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Video, Sparkles, Palette, Shapes, Share2, Layout, Clock, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Video':
        return <Video className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-400" />;
      case 'Shapes':
        return <Shapes className="w-6 h-6 text-blue-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-blue-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-400" />;
      default:
        return <Video className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Soluções Audiovisuais Completa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Serviços de <span className="text-blue-500">Alta Performance</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
            Soluções personalizadas do briefing à entrega final para impulsionar a visibilidade da sua empresa ou marca.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#111111] border border-neutral-800/80 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:bg-blue-600/10 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {service.popularTag && (
                    <span className="bg-blue-600/90 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {service.popularTag}
                    </span>
                  )}
                </div>

                {/* Service Name & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-neutral-800/80">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                    O que está incluso:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Service Footer */}
              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Prazo: {service.deliveryTime}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-white transition-colors"
                >
                  <span>Orçamento</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
