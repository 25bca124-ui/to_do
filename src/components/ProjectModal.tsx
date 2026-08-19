import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Cpu, Server } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0d0d0d] text-neutral-900 dark:text-[#e5e5e5] rounded-2xl shadow-2xl border border-neutral-200 dark:border-white/10 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 dark:border-white/10 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-zinc-300 font-medium">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Featured Project
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-serif italic font-bold text-neutral-900 dark:text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5">{project.tagline}</p>
            </div>

            <button
              id="project-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh]">
            {/* Overview */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-neutral-700 dark:text-zinc-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Performance & Metrics */}
            {project.metrics && (
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                  Key Metrics &amp; Performance
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  {project.metrics}
                </span>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-3">
                  Core Architectural Features
                </h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-zinc-900/60 border border-neutral-200 dark:border-white/5">
                <h5 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" />
                  Technical Implementation
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-zinc-300 font-mono border border-neutral-200 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:px-6 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between bg-neutral-50 dark:bg-black/40">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-zinc-500 hover:text-zinc-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
