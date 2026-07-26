import React from 'react';
import { ArrowUp, Video, Instagram, Youtube, Linkedin, Github, Mail, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-neutral-800/80 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 p-[1px]">
                <div className="w-full h-full bg-[#0A0A0A] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono font-black text-blue-400 text-lg">SV</span>
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Silas Vinícius <span className="text-blue-500">Studio</span>
              </span>
            </a>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Design gráfico, edição de vídeo cinematográfica e motion design focado em alta retenção e conversão para marcas de liderança.
            </p>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                Disponível para orçamentos e parcerias
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 font-medium text-neutral-300">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">Navegação</div>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#hero" className="hover:text-blue-400 transition-colors">Início</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre Mim</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfólio</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">Detalhes</div>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#skills" className="hover:text-blue-400 transition-colors">Habilidades</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">Dúvidas Frequentes</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end">
            <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">Redes Sociais</div>
            
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/5561991043055"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com/silas.viniciuss"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-red-400 hover:border-red-500/40 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-white transition-all group"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} Silas Vinícius. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Desenvolvido por</span>
            <span>Silas Vinícius</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
