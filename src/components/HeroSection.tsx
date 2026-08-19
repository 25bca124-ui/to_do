import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, Send, Github, Linkedin, Twitter, Mail, Check, Copy, Sparkles, Code2, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const techBadges = ['TypeScript', 'React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'REST APIs'];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-8 border-b border-neutral-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs font-mono text-zinc-600 dark:text-zinc-300"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
            <span>20 y/o • {PERSONAL_INFO.experienceYearsCount} Years Experience • Software Developer</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] leading-[0.9] font-serif italic text-neutral-900 dark:text-white tracking-tight mb-4">
              Software<br />Developer
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-zinc-400 max-w-lg leading-relaxed font-sans mt-6">
              I am <strong className="text-neutral-900 dark:text-white font-medium">Akash</strong>. Crafting minimalist digital experiences with a strict focus on performance, scalable full-stack architectures, and refined aesthetics.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <button
              id="hero-contact-btn"
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-black text-[11px] uppercase font-bold tracking-[0.2em] hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-all rounded-xl shadow-xs cursor-pointer flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </button>

            <button
              id="hero-resume-btn"
              onClick={onOpenResumeModal}
              className="px-5 py-3.5 border border-neutral-300 dark:border-white/10 hover:border-neutral-500 dark:hover:border-white/30 text-[11px] uppercase font-bold tracking-[0.2em] text-neutral-800 dark:text-zinc-200 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all rounded-xl cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>View Resume</span>
            </button>

            <button
              id="hero-explore-work-btn"
              onClick={() => scrollToSection('projects')}
              className="px-4 py-3.5 text-[11px] uppercase font-bold tracking-[0.2em] text-zinc-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 border-t border-neutral-200 dark:border-white/5 flex flex-wrap items-center gap-2"
          >
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-zinc-500 mr-2">
              Stack:
            </span>
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-md bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-zinc-300 border border-neutral-200 dark:border-white/5 font-mono"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Connect & Direct Profile Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 p-8 rounded-3xl bg-neutral-50 dark:bg-zinc-900/40 border border-neutral-200 dark:border-white/5 flex flex-col justify-between space-y-6"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-4">
              Developer Profile
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono py-2 border-b border-neutral-200 dark:border-white/5">
                <span className="text-zinc-500">Name</span>
                <span className="text-neutral-900 dark:text-white font-medium">{PERSONAL_INFO.name}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono py-2 border-b border-neutral-200 dark:border-white/5">
                <span className="text-zinc-500">Role</span>
                <span className="text-neutral-900 dark:text-white font-medium">{PERSONAL_INFO.role}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono py-2 border-b border-neutral-200 dark:border-white/5">
                <span className="text-zinc-500">Experience</span>
                <span className="text-emerald-500 font-semibold">{PERSONAL_INFO.experienceYearsCount} Years</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono py-2 border-b border-neutral-200 dark:border-white/5">
                <span className="text-zinc-500">Age</span>
                <span className="text-neutral-900 dark:text-white font-medium">{PERSONAL_INFO.age}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono py-2 border-b border-neutral-200 dark:border-white/5">
                <span className="text-zinc-500">Location</span>
                <span className="text-neutral-900 dark:text-white font-medium">Bangalore, IN</span>
              </div>
            </div>
          </div>

          {/* Social icons + Email copy */}
          <div className="space-y-4 pt-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono">
              Connect Directly
            </div>
            <div className="flex items-center space-x-3">
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-200 dark:border-white/10 rounded-full hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-200 dark:border-white/10 rounded-full hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-twitter-link"
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-200 dark:border-white/10 rounded-full hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Email quick copy */}
            <button
              id="hero-email-copy-btn"
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-3 rounded-xl border border-neutral-200 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 text-xs font-mono flex items-center justify-between text-zinc-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer bg-white dark:bg-black/40"
            >
              <span className="truncate">{PERSONAL_INFO.email}</span>
              {copiedEmail ? (
                <span className="text-emerald-500 font-sans text-[11px] font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Copied
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-zinc-500" />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
