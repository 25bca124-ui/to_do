import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Github, Linkedin, Briefcase, GraduationCap, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const textContent = `AKASH — SOFTWARE DEVELOPER
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Experience: ${PERSONAL_INFO.experienceYearsCount} Years | Age: ${PERSONAL_INFO.age}
Location: ${PERSONAL_INFO.location}

========================================
PROFESSIONAL SUMMARY
========================================
${PERSONAL_INFO.bio}

========================================
WORK EXPERIENCE (${PERSONAL_INFO.experienceYearsCount} Years)
========================================
${EXPERIENCES.map(
  (exp) => `
${exp.role} | ${exp.company}
${exp.period} | ${exp.location}
${exp.description}
Achievements:
${exp.achievements.map((a) => `  * ${a}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`
).join('\n')}

========================================
EDUCATION
========================================
${EDUCATIONS.map(
  (edu) => `
${edu.degree} in ${edu.field}
${edu.institution} (${edu.period})
Grade: ${edu.grade}
`
).join('\n')}

========================================
CERTIFICATIONS
========================================
${CERTIFICATIONS.map((cert) => `* ${cert.name} (${cert.issuer}, ${cert.date})`).join('\n')}

========================================
SKILLS
========================================
${SKILL_CATEGORIES.map((c) => `${c.title}: ${c.skills.map((s) => s.name).join(', ')}`).join('\n')}
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Akash_Software_Developer_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0d0d0d] text-neutral-900 dark:text-[#e5e5e5] rounded-2xl shadow-2xl border border-neutral-200 dark:border-white/10 flex flex-col overflow-hidden"
        >
          {/* Action Bar */}
          <div className="no-print p-4 sm:px-6 border-b border-neutral-200 dark:border-white/10 flex items-center justify-between bg-neutral-50 dark:bg-black/50">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500">
                Curriculum Vitae Preview
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                {PERSONAL_INFO.experienceYearsCount} Yrs Exp • Age {PERSONAL_INFO.age}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="modal-print-btn"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-zinc-300 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer border border-neutral-200 dark:border-white/10"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <button
                id="modal-download-btn"
                onClick={handleDownload}
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </button>

              <button
                id="modal-close-btn"
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Document Content */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0">
            {/* Header */}
            <div className="border-b border-neutral-200 dark:border-white/10 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mt-1">
                    {PERSONAL_INFO.role} • {PERSONAL_INFO.experienceYearsCount} Years Experience
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 space-y-1 sm:text-right">
                  <div>{PERSONAL_INFO.location}</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.email}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-zinc-400">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <Github className="w-3.5 h-3.5" /> {PERSONAL_INFO.github.replace('https://', '')}
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5" /> {PERSONAL_INFO.linkedin.replace('https://', '')}
                </a>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Available for Roles
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">
                Executive Profile
              </h2>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-zinc-300">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                Work Experience ({PERSONAL_INFO.experienceYearsCount} Years)
              </h2>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-neutral-900 dark:text-white">
                          {exp.role}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs text-zinc-400 font-medium">{exp.company}</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">
                        {exp.period} | {exp.location}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 italic">
                      {exp.description}
                    </p>

                    <ul className="space-y-1 pl-4">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-neutral-700 dark:text-zinc-300 list-disc leading-relaxed">
                          {ach}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {exp.technologies.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-neutral-100 dark:bg-white/5 text-zinc-400 border border-neutral-200 dark:border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Matrix */}
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-3">
                Technical Stack &amp; Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5">
                    <span className="font-semibold text-neutral-900 dark:text-white block mb-1 text-xs">
                      {cat.title}
                    </span>
                    <span className="text-zinc-400 leading-relaxed text-[11px]">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-200 dark:border-white/10">
              <div>
                <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education
                </h2>
                {EDUCATIONS.map((edu) => (
                  <div key={edu.id} className="text-xs space-y-1">
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {edu.degree}
                    </p>
                    <p className="text-zinc-400">
                      {edu.institution} ({edu.period})
                    </p>
                    <p className="font-mono text-emerald-500 text-[11px]">
                      {edu.grade}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Certifications
                </h2>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.id} className="list-disc ml-4 text-[11px]">
                      <strong className="text-white">{cert.name}</strong> ({cert.issuer}, {cert.date})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
