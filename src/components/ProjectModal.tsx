import React, { useState } from 'react';
import { Project } from '../types';
import { X, Play, CheckCircle2, Sliders, ExternalLink, MessageCircle, Calendar, User, Sparkles, Layers } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { CustomVideoPlayer } from './CustomVideoPlayer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'video' | 'beforeAfter' | 'gallery'>('video');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card Box */}
      <div className="relative w-full max-w-5xl bg-[#111111] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto z-10 flex flex-col max-h-[92vh]">
        
        {/* Modal Top Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#111111]/95 backdrop-blur-md px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-blue-950/80 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold px-3 py-1 rounded-full">
              {project.category}
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <User className="w-3.5 h-3.5 text-neutral-500" />
              <span>{project.client}</span>
              <span>•</span>
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              <span>{project.year}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Fechar Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 custom-scrollbar">
          
          {/* Main Media Showcase (Video Player or Before/After or Hero Image) */}
          <div className="space-y-3">
            {/* Media Selector Sub-tabs */}
            <div className="flex items-center gap-2 bg-neutral-950 p-1.5 rounded-xl border border-neutral-800/80 w-fit">
              {project.videoUrl && (
                <button
                  onClick={() => setActiveTab('video')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    activeTab === 'video'
                      ? 'bg-blue-600 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Vídeo / Player</span>
                </button>
              )}

              {project.beforeAfterImages && (
                <button
                  onClick={() => setActiveTab('beforeAfter')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    activeTab === 'beforeAfter'
                      ? 'bg-blue-600 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Antes & Depois</span>
                </button>
              )}

              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'gallery' || (!project.videoUrl && !project.beforeAfterImages)
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Galeria de Imagens</span>
              </button>
            </div>

            {/* Render Selected Media View */}
            {activeTab === 'video' && project.videoUrl ? (
              <CustomVideoPlayer
                videoUrl={project.videoUrl}
                posterImage={project.thumbnail}
                title={project.title}
              />
            ) : activeTab === 'beforeAfter' && project.beforeAfterImages ? (
              <BeforeAfterSlider
                beforeImage={project.beforeAfterImages.before}
                afterImage={project.beforeAfterImages.after}
                beforeLabel={project.beforeAfterImages.beforeLabel}
                afterLabel={project.beforeAfterImages.afterLabel}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedGalleryImage(img)}
                    className="relative aspect-16/10 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white font-medium">
                      Clique para ampliar
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Title & Full Description */}
          <div className="space-y-3 border-b border-neutral-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Grid Information Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column: Objectives */}
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Objetivos do Projeto</span>
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Key Results Achieved */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Resultados & Impacto Obtido</span>
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Tools & Tech Stack Used */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Ferramentas & Softwares Utilizados
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-blue-400 font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="sticky bottom-0 z-20 bg-[#111111] px-6 py-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400">
            Gostou deste projeto para <strong className="text-white">{project.client}</strong>?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar Projeto Similar</span>
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox for Gallery Zoom */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <img
            src={selectedGalleryImage}
            alt="Ampliada"
            className="max-w-full max-h-full rounded-xl object-contain"
          />
          <button className="absolute top-6 right-6 text-white bg-neutral-900 p-2 rounded-full border border-neutral-800">
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

    </div>
  );
};
