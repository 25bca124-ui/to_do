import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-white/5 bg-white dark:bg-[#070707] py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="text-lg font-serif italic tracking-tight text-neutral-900 dark:text-white">
            AKASH
          </span>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Software Developer • {PERSONAL_INFO.experienceYearsCount} Years Exp • {PERSONAL_INFO.age} y/o
          </p>
          <p className="text-[11px] text-zinc-600 font-mono mt-0.5">
            {PERSONAL_INFO.email}
          </p>
        </div>

        {/* Center / Social icons */}
        <div className="flex items-center space-x-3">
          <a
            id="footer-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-neutral-200 dark:border-white/10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="footer-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-neutral-200 dark:border-white/10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            id="footer-twitter-link"
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-neutral-200 dark:border-white/10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all"
            aria-label="Twitter / X"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            id="footer-mail-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 border border-neutral-200 dark:border-white/10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-600">
            &copy; {new Date().getFullYear()} AKASH
          </span>
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-zinc-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
