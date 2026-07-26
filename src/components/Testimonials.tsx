import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Avaliações de Clientes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que dizem os <span className="text-blue-500">Parceiros & Clientes</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
            Depoimentos de diretores de marketing, criadores de conteúdo e CEOs sobre o resultado dos projetos.
          </p>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className="relative p-8 sm:p-10 rounded-3xl bg-[#111111] border border-neutral-800 shadow-2xl space-y-6">
            
            <Quote className="w-12 h-12 text-blue-600/30 absolute top-6 right-8 pointer-events-none" />

            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Text Quote */}
            <p className="text-base sm:text-xl text-neutral-200 font-medium leading-relaxed italic">
              "{TESTIMONIALS[currentIndex].text}"
            </p>

            {/* Client Profile Info */}
            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIALS[currentIndex].avatar}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                    <span>{TESTIMONIALS[currentIndex].name}</span>
                    <CheckCircle2 className="w-4 h-4 text-blue-400 fill-current text-black" />
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {TESTIMONIALS[currentIndex].role} — <span className="text-blue-400">{TESTIMONIALS[currentIndex].company}</span>
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-xs font-mono text-neutral-400">
                Projeto: <span className="text-white font-semibold">{TESTIMONIALS[currentIndex].projectTitle}</span>
              </div>
            </div>

          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-colors"
              title="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-neutral-800'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-colors"
              title="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
