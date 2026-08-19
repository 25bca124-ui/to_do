import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'tools-devops', label: 'Tools & DevOps' },
  ];

  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryName: cat.title,
      categoryId: cat.id,
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = activeCategoryId === 'all' || skill.categoryId === activeCategoryId;
    const matchesQuery =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 border-b border-neutral-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
              Proficiencies &amp; Stack
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
            <input
              id="skills-search-bar"
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-mono rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder-zinc-500 focus:outline-hidden focus:border-neutral-900 dark:focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-cat-${cat.id}`}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategoryId === cat.id
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold'
                  : 'text-zinc-500 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-white/10 bg-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={`${skill.categoryId}-${skill.name}`}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900/30 border border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-neutral-100 dark:bg-white/5 text-zinc-400 border border-neutral-200 dark:border-white/5">
                      {skill.experienceYears}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 block">
                    {skill.categoryName}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/5">
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="h-1 w-full bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-neutral-900 dark:bg-white rounded-full"
                    />
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
