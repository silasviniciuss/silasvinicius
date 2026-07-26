import React, { useState } from 'react';
import { Project, Category } from '../types';
import { Play, Eye, Sparkles, Filter, Search, Grid, LayoutList, Layers, ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'dense'>('grid');

  const categories: Category[] = [
    'Todos',
    'Edição de Vídeo',
    'Motion Design',
    'Design Gráfico',
    'Social Media',
    'Branding'
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'Todos' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio de Destaque</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos Recentes & <span className="text-blue-500">Casos de Sucesso</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
            Explore trabalhos de edição cinematográfica, animação 3D, branding e peças promocionais de alto impacto.
          </p>
        </div>

        {/* Filter Controls & Search Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800">
          
          {/* Categories Horizontal Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat === 'Todos'
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-neutral-800 text-neutral-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Layout Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Buscar projeto, cliente ou software..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex items-center bg-neutral-900 p-1 rounded-xl border border-neutral-800">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  layoutMode === 'grid' ? 'bg-blue-600 text-white' : 'text-neutral-500 hover:text-white'
                }`}
                title="Visualização em Grade"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('dense')}
                className={`p-1.5 rounded-lg transition-colors ${
                  layoutMode === 'dense' ? 'bg-blue-600 text-white' : 'text-neutral-500 hover:text-white'
                }`}
                title="Visualização em Lista Detalhada"
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Projects Cards Display */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900/30 rounded-2xl border border-dashed border-neutral-800 space-y-3">
            <Layers className="w-10 h-10 text-neutral-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">Nenhum projeto encontrado</h3>
            <p className="text-xs text-neutral-400">Tente buscar por outro termo ou alterar a categoria selecionada.</p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="text-xs font-mono text-blue-400 hover:underline pt-2"
            >
              Resetar Filtros
            </button>
          </div>
        ) : layoutMode === 'grid' ? (
          /* Grid Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-[#111111] border border-neutral-800/80 overflow-hidden cursor-pointer hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Thumbnail Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-blue-400 border border-neutral-700/60 font-semibold">
                    {project.category}
                  </div>

                  {/* Video Play Indicator */}
                  {project.videoUrl && (
                    <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-md text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  )}

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-black/90 text-white px-4 py-2 rounded-xl border border-white/20 text-xs font-semibold flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>Ver Projeto Completo</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="text-blue-400 font-medium">{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tools Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool, i) => (
                      <span
                        key={i}
                        className="bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[10px] text-neutral-500 font-mono px-1">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Dense List Mode */
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-[#111111] border border-neutral-800/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-6 cursor-pointer hover:border-blue-500/50 transition-all hover:bg-neutral-900/60"
              >
                <div className="relative w-full sm:w-48 aspect-16/10 rounded-xl overflow-hidden bg-neutral-900 shrink-0">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.videoUrl && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-950/60 text-blue-400 border border-blue-500/30 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">{project.client} • {project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tools.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono bg-neutral-950 px-2 py-0.5 rounded text-neutral-400 border border-neutral-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>Ver Detalhes</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
