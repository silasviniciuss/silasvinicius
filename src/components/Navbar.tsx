import React, { useState, useEffect } from 'react';
import { Menu, X, FolderKanban, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCMS: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCMS, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Serviços', href: '#services' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[11px] flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <span className="font-mono font-black text-blue-400 group-hover:text-white text-lg tracking-tighter">
                SV
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base tracking-tight leading-none group-hover:text-blue-400 transition-colors">
              Silas Vinícius
            </span>
            <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase mt-1">
              Visual & Motion Studio
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111111]/80 backdrop-blur-lg px-4 py-1.5 rounded-full border border-neutral-800/80 shadow-inner">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* CMS Admin Button */}
          <button
            onClick={onOpenCMS}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 px-3 py-2 rounded-lg border border-neutral-800 transition-all"
            title="Gerenciar Projetos do Portfólio (CMS)"
          >
            <FolderKanban className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-mono">CMS</span>
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span>Fazer Orçamento</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCMS}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-blue-400"
            title="CMS Projetos"
          >
            <FolderKanban className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-neutral-800 p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-600" />
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCMS();
              }}
              className="w-full flex items-center justify-center gap-2 bg-neutral-900 border border-neutral-800 text-neutral-200 py-2.5 rounded-lg text-sm font-medium"
            >
              <FolderKanban className="w-4 h-4 text-blue-400" />
              <span>Gerenciar Projetos (CMS)</span>
            </button>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
