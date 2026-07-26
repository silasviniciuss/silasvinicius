import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { INITIAL_PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { CMSModal } from './components/CMSModal';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Projects State with LocalStorage fallback
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_projects_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading projects from localStorage:', e);
    }
    return INITIAL_PROJECTS;
  });

  // Selected project for detailed modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // CMS modal state
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  // Pre-selected service title for contact form
  const [contactInitialService, setContactInitialService] = useState('');

  // Toast messages queue
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Active section tracking for navbar
  const [activeSection, setActiveSection] = useState('hero');

  // Save projects to localStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem('portfolio_projects_v1', JSON.stringify(projects));
    } catch (e) {
      console.error('Error saving projects:', e);
    }
  }, [projects]);

  // Section Observer for active navbar tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'portfolio', 'services', 'skills', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToast = (title: string, description?: string, type: 'success' | 'error' | 'info' = 'info') => {
    const newToast: ToastMessage = {
      id: `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title,
      description,
      type
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // CMS Handlers
  const handleAddProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleResetProjects = () => {
    setProjects(INITIAL_PROJECTS);
    try {
      localStorage.removeItem('portfolio_projects_v1');
    } catch (e) {}
    addToast('Projetos Restaurados', 'O portfólio voltou aos trabalhos de demonstração originais.', 'info');
  };

  const handleSelectService = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    addToast('Serviço Selecionado', `Solicitando orçamento para "${serviceTitle}".`, 'info');
  };

  const handleRequestSimilarProject = (projectTitle: string) => {
    setContactInitialService(`Projeto similar a: ${projectTitle}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* Sticky Header Navbar */}
      <Navbar onOpenCMS={() => setIsCMSOpen(true)} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Animated Metrics Bar */}
        <Stats />

        {/* About & Timeline Section */}
        <About />

        {/* Portfolio Showcase Grid & Filter */}
        <Portfolio projects={projects} onSelectProject={(p) => setSelectedProject(p)} />

        {/* Services & Deliverables */}
        <Services onSelectService={handleSelectService} />

        {/* Skills & Software Progress Bars */}
        <Skills />

        {/* Testimonials Slider */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Contact Form & Direct Links */}
        <ContactSection initialService={contactInitialService} onShowToast={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Estou%20no%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-110 flex items-center justify-center group"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
          Conversar no WhatsApp
        </span>
      </a>

      {/* Detailed Project View Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      {/* Project Management CMS Modal */}
      <CMSModal
        isOpen={isCMSOpen}
        onClose={() => setIsCMSOpen(false)}
        projects={projects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onResetProjects={handleResetProjects}
        onShowToast={addToast}
      />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

    </div>
  );
}
