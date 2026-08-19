import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 border-b border-neutral-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
            Endorsements
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
            Collaborator Words
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900/30 border border-neutral-200 dark:border-white/5 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-5 h-5 text-zinc-600 dark:text-zinc-500 mb-4" />
                <p className="text-sm text-neutral-700 dark:text-zinc-300 leading-relaxed font-sans italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-serif italic font-bold text-xs flex items-center justify-center">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-900 dark:text-white">
                    {t.author}
                  </h4>
                  <p className="text-[11px] font-mono text-zinc-500">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
