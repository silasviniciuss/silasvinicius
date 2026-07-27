import React, { useState } from 'react';
import { Category, ContactFormData } from '../types';
import { Send, MessageCircle, Mail, Phone, MapPin, Copy, Check, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  onShowToast: (title: string, description?: string, type?: 'success' | 'error' | 'info') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  onShowToast
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Edição de Vídeo',
    budget: 'R$ 1.000 - R$ 3.000',
    deadline: '7 - 15 dias',
    message: initialService ? `Olá, gostaria de um orçamento para o serviço de ${initialService}.` : ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories: Category[] = [
    'Edição de Vídeo',
    'Motion Design',
    'Design Gráfico',
    'Social Media',
    'Branding',
    'Web Design'
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast('Copiado para a área de transferência', text, 'info');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Preencha os campos obrigatórios', 'Nome, Email e Mensagem são necessários.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(
        'Proposta Enviada com Sucesso!',
        'Agradeço o contato. Responderei no seu WhatsApp ou Email em até 2 horas.',
        'success'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Edição de Vídeo',
        budget: 'R$ 1.000 - R$ 3.000',
        deadline: '7 - 15 dias',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Vamos Conversar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Inicie Seu <span className="text-blue-500">Projeto Hoje</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
            Preencha o formulário abaixo ou chame diretamente no WhatsApp para receber uma estimativa rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#111111] border border-neutral-800 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Canais Diretos de Contato</span>
              </h3>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/5561991043055?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20audiovisual."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-600 text-white">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-400">Resposta Rápida (WhatsApp)</div>
                    <div className="text-sm font-bold text-white">+55 (61) 99104-3055</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-mono group-hover:underline">Chamar →</span>
              </a>

              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400">Email Comercial</div>
                    <div className="text-sm font-bold text-white">silasvinicius.dev@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('silasvinicius.dev@gmail.com', 'Email')}
                  className="p-2 text-neutral-400 hover:text-white"
                  title="Copiar Email"
                >
                  {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400">Localização Base</div>
                  <div className="text-sm font-bold text-white">Brasília, DF — Atendimento Global</div>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-semibold font-mono">
                  <Clock className="w-4 h-4" />
                  <span>Horário de Atendimento</span>
                </div>
                <p>Segunda a Sexta: 09:00h - 17:00h (GMT-3)</p>
                <p>Projetos urgentes sob demanda especial de plantão nos finais de semana.</p>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-5 shadow-2xl"
            >
              <h3 className="text-lg font-bold text-white mb-2">Formulário de Briefing Rápido</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300">Seu Nome / Nome da Empresa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300">Seu Email Principal *</label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300">WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Project Category */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300">Tipo de Serviço Desejado</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value as Category })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Budget Option */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300">Orçamento Estimado</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Até R$ 1.000', 'R$ 1.000 - R$ 3.000', 'R$ 3.000 - R$ 7.000', 'R$ 7.000+'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-3 py-2 rounded-xl text-[11px] font-mono border transition-all ${
                        formData.budget === b
                          ? 'bg-blue-600 border-blue-500 text-white font-bold'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300">Detalhes do Projeto *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Descreva o que você precisa: quantidade de vídeos, prazo desejado, referências visuais ou links de inspiração..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Briefing & Solicitar Orçamento</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
