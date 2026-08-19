import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Frontend', 'AI & Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 border-b border-neutral-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
              Selected Work
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold'
                    : 'text-zinc-500 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/30 border border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif italic text-neutral-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">{project.tagline}</p>
                  <p className="text-sm text-neutral-600 dark:text-zinc-400 mt-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="mt-4 p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-[11px] font-mono text-zinc-400">
                      {project.metrics}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-neutral-100 dark:bg-white/5 text-zinc-400 border border-neutral-200 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between">
                  <button
                    id={`project-details-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-neutral-200 dark:border-white/10 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                        aria-label="GitHub Source"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-neutral-200 dark:border-white/10 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
