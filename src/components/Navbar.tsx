import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'resume', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/80 dark:bg-[#0d0d0d]/90 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/40 border border-neutral-200 dark:border-white/10'
              : 'bg-white/50 dark:bg-transparent backdrop-blur-xs border border-transparent dark:border-white/5'
          }`}
        >
          {/* Logo / Brand */}
          <button
            id="nav-brand-btn"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group cursor-pointer text-left"
          >
            <span className="text-2xl font-serif italic tracking-tight text-neutral-900 dark:text-white">
              AKASH
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Dev • 3 Yrs Exp
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-6 text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 dark:text-zinc-400">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-neutral-900 dark:text-white font-bold'
                      : 'hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center space-x-3">
            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/15 text-neutral-800 dark:text-zinc-200 transition-all border border-neutral-200 dark:border-white/10 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark Mode Pill Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="w-11 h-6 bg-neutral-200 dark:bg-zinc-800 rounded-full relative flex items-center px-1 transition-colors cursor-pointer border border-neutral-300 dark:border-white/10"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`w-4 h-4 rounded-full flex items-center justify-center ${
                  theme === 'dark'
                    ? 'ml-auto bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                    : 'mr-auto bg-neutral-900 text-white'
                }`}
              >
                {theme === 'dark' ? (
                  <Moon className="w-2.5 h-2.5 text-black" />
                ) : (
                  <Sun className="w-2.5 h-2.5 text-white" />
                )}
              </motion.div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 p-5 rounded-2xl bg-white dark:bg-[#0d0d0d] border border-neutral-200 dark:border-white/10 shadow-2xl space-y-3"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-[0.2em] font-medium text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-white py-2"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-zinc-500 font-mono">#0{navItems.indexOf(item) + 1}</span>
                </button>
              ))}
              <div className="h-px bg-neutral-200 dark:bg-white/10 my-2" />
              <button
                id="mobile-resume-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black text-xs uppercase font-bold tracking-widest text-center"
              >
                View Full Resume (PDF)
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
