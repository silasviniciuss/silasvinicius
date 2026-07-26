import React, { useState } from 'react';
import { Project, Category } from '../types';
import { X, Plus, Trash2, Edit3, RotateCcw, FolderKanban, Check, Sparkles } from 'lucide-react';

interface CMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onAddProject: (project: Project) => void;
  onDeleteProject: (id: string) => void;
  onResetProjects: () => void;
  onShowToast: (title: string, description?: string, type?: 'success' | 'error' | 'info') => void;
}

export const CMSModal: React.FC<CMSModalProps> = ({
  isOpen,
  onClose,
  projects,
  onAddProject,
  onDeleteProject,
  onResetProjects,
  onShowToast
}) => {
  if (!isOpen) return null;

  const [isAdding, setIsAdding] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<Category>('Edição de Vídeo');
  const [newShortDesc, setNewShortDesc] = useState('');
  const [newFullDesc, setNewFullDesc] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newYear, setNewYear] = useState('2025');
  const [newThumbnail, setNewThumbnail] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [newTools, setNewTools] = useState('Premiere Pro, After Effects');

  const categories: Category[] = [
    'Edição de Vídeo',
    'Motion Design',
    'Design Gráfico',
    'Social Media',
    'Branding',
    'Web Design'
  ];

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newShortDesc || !newClient) {
      onShowToast('Campos obrigatórios ausentes', 'Preencha título, cliente e descrição.', 'error');
      return;
    }

    const created: Project = {
      id: `proj-cms-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      shortDescription: newShortDesc,
      fullDescription: newFullDesc || newShortDesc,
      client: newClient,
      year: newYear,
      thumbnail:
        newThumbnail ||
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
      videoUrl: newVideoUrl || undefined,
      gallery: [
        newThumbnail ||
          'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80'
      ],
      tools: newTools.split(',').map((t) => t.trim()),
      objectives: ['Aumentar visibilidade de marca', 'Entrega em alta qualidade 4K'],
      results: ['+100% Satisfação do Cliente', 'Entrega no prazo'],
      featured: true
    };

    onAddProject(created);
    onShowToast('Projeto Adicionado no CMS!', `"${newTitle}" agora está visível no portfólio.`, 'success');

    // Reset form
    setNewTitle('');
    setNewShortDesc('');
    setNewFullDesc('');
    setNewClient('');
    setNewThumbnail('');
    setNewVideoUrl('');
    setIsAdding(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#111111] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] my-auto">
        
        {/* Top Bar */}
        <div className="bg-[#111111] p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <FolderKanban className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Gerenciador de Projetos (CMS)</span>
                <span className="text-[10px] bg-blue-950 text-blue-400 border border-blue-500/30 font-mono px-2 py-0.5 rounded-full">
                  Sem necessidade de código
                </span>
              </h2>
              <p className="text-xs text-neutral-400">Adicione, edite ou remova trabalhos do seu portfólio dinamicamente.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CMS Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Header Actions */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-neutral-800">
            <div className="text-xs font-mono text-neutral-400">
              Total de Projetos Cadastrados: <strong className="text-white">{projects.length}</strong>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAdding(!isAdding)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>{isAdding ? 'Cancelar Novo' : 'Novo Projeto'}</span>
              </button>

              <button
                onClick={onResetProjects}
                className="px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white text-xs flex items-center gap-1.5"
                title="Restaurar Projetos Padrão"
              >
                <RotateCcw className="w-3.5 h-3.5 text-neutral-500" />
                <span>Resetar Padrão</span>
              </button>
            </div>
          </div>

          {/* New Project Form */}
          {isAdding && (
            <form onSubmit={handleCreateProject} className="p-5 rounded-xl bg-neutral-900/80 border border-blue-500/40 space-y-4 animate-in slide-in-from-top duration-300">
              <h3 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Cadastrar Novo Projeto no Portfólio</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-neutral-300">Título do Projeto *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Comercial Lançamento Nike"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-neutral-300">Cliente *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Nike Brasil"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-neutral-300">Categoria</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as Category)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-neutral-300">Ano</label>
                  <input
                    type="text"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-neutral-300">Ferramentas (separadas por vírgula)</label>
                  <input
                    type="text"
                    value={newTools}
                    onChange={(e) => setNewTools(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-neutral-300">URL da Imagem / Cover (Unsplash ou Web)</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={newThumbnail}
                  onChange={(e) => setNewThumbnail(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-neutral-300">URL do Vídeo MP4 (Opcional)</label>
                <input
                  type="url"
                  placeholder="https://commondatastorage.googleapis.com/.../video.mp4"
                  value={newVideoUrl}
                  onChange={(e) => setNewVideoUrl(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-neutral-300">Descrição Curta *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Breve resumo do projeto..."
                  value={newShortDesc}
                  onChange={(e) => setNewShortDesc(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg"
                >
                  Salvar e Publicar
                </button>
              </div>
            </form>
          )}

          {/* Active Projects Table */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-neutral-400">Projetos Ativos no Portfólio</h3>

            <div className="space-y-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-12 h-12 rounded-lg object-cover bg-neutral-950 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">{project.title}</div>
                      <div className="text-[10px] text-neutral-400 font-mono">
                        {project.category} • {project.client} ({project.year})
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onDeleteProject(project.id);
                        onShowToast('Projeto Removido', `"${project.title}" foi excluído.`, 'info');
                      }}
                      className="p-2 rounded-lg bg-neutral-950 hover:bg-red-950/40 text-neutral-500 hover:text-red-400 border border-neutral-800 transition-colors"
                      title="Excluir Projeto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
