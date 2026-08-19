import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Laptop, CheckCircle2, ArrowUpRight, Code, Server, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 border-b border-neutral-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Title & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono">
              About &amp; Overview
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
              Building modern web software with high standards.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-zinc-400 leading-relaxed font-sans">
              <p>
                I am <strong className="text-neutral-900 dark:text-white">Akash</strong>, a 20-year-old Software Developer with 3 years of hands-on experience developing modern web platforms, APIs, and responsive user interfaces.
              </p>
              <p>
                My focus centers on delivering fast, resilient, and intuitive software. Whether architecting clean component hierarchies in React/Next.js, designing RESTful APIs in Node.js, or optimizing relational databases, I strive for clean maintainable code and exceptional developer ergonomics.
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-200 dark:border-white/5 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-zinc-600 dark:text-zinc-500">Age:</span>
                <span className="text-neutral-900 dark:text-white font-medium">20 Years Old</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-600 dark:text-zinc-500">Experience:</span>
                <span className="text-emerald-500 font-semibold">3 Years</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-600 dark:text-zinc-500">Role:</span>
                <span className="text-neutral-900 dark:text-white">Software Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-600 dark:text-zinc-500">Location:</span>
                <span className="text-neutral-900 dark:text-white">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="about-resume-btn"
                onClick={onOpenResumeModal}
                className="px-5 py-3 rounded-xl text-[10px] uppercase font-bold tracking-[0.2em] bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer shadow-xs"
              >
                Read Full Resume
              </button>
              <a
                id="about-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-[10px] uppercase font-bold tracking-[0.2em] border border-neutral-300 dark:border-white/10 hover:border-neutral-500 dark:hover:border-white/30 text-neutral-800 dark:text-zinc-300 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Stats & Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {PERSONAL_INFO.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-50 dark:bg-zinc-900/30 border border-neutral-200 dark:border-white/5"
                >
                  <div className="text-2xl sm:text-3xl font-serif italic text-neutral-900 dark:text-white">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-zinc-900/20 border border-neutral-200 dark:border-white/5 space-y-3">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500">
                Core Specializations
              </div>
              <div className="space-y-2 text-xs text-neutral-700 dark:text-zinc-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Frontend Systems &amp; TypeScript Ecosystems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>REST API Design &amp; Node.js Backends</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Responsive UI Craft &amp; Fluid Interactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
