import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Award, Download, Calendar, MapPin, CheckCircle, FileText, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS, CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');

  const downloadTextResume = () => {
    const textContent = `AKASH — SOFTWARE DEVELOPER
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Experience: ${PERSONAL_INFO.experienceYearsCount} Years | Age: ${PERSONAL_INFO.age}
Location: ${PERSONAL_INFO.location}

========================================
WORK EXPERIENCE (${PERSONAL_INFO.experienceYearsCount} Years)
========================================
${EXPERIENCES.map(
  (exp) => `
${exp.role} | ${exp.company}
${exp.period} | ${exp.location} | ${exp.type}
Summary: ${exp.description}
Key Achievements:
${exp.achievements.map((a) => `  * ${a}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`
).join('\n----------------------------------------\n')}

========================================
EDUCATION
========================================
${EDUCATIONS.map(
  (edu) => `
${edu.degree}
${edu.institution} (${edu.period})
Grade: ${edu.grade}
`
).join('\n')}

========================================
CERTIFICATIONS
========================================
${CERTIFICATIONS.map((cert) => `* ${cert.name} — ${cert.issuer} (${cert.date})`).join('\n')}
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Akash_Software_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="py-24 px-4 sm:px-8 border-b border-neutral-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-mono mb-2">
              Curriculum Vitae
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif italic text-neutral-900 dark:text-white tracking-tight">
              Resume &amp; Experience
            </h2>
            <p className="text-xs text-zinc-500 font-mono mt-1">
              {PERSONAL_INFO.experienceYearsCount} Years of professional software development experience
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              id="resume-view-modal-btn"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-zinc-200 transition-all cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Interactive CV</span>
            </button>
            <button
              id="resume-download-btn"
              onClick={downloadTextResume}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all border border-neutral-200 dark:border-white/10 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-zinc-500" />
              <span>Download (.txt)</span>
            </button>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center space-x-6 border-b border-neutral-200 dark:border-white/5 pb-4 mb-8 text-xs font-mono uppercase tracking-widest">
          <button
            id="resume-tab-experience"
            onClick={() => setActiveTab('experience')}
            className={`pb-1 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'experience'
                ? 'text-neutral-900 dark:text-white font-bold border-b-2 border-neutral-900 dark:border-white'
                : 'text-zinc-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience ({EXPERIENCES.length})</span>
          </button>

          <button
            id="resume-tab-education"
            onClick={() => setActiveTab('education')}
            className={`pb-1 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'education'
                ? 'text-neutral-900 dark:text-white font-bold border-b-2 border-neutral-900 dark:border-white'
                : 'text-zinc-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>

          <button
            id="resume-tab-certifications"
            onClick={() => setActiveTab('certifications')}
            className={`pb-1 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'certifications'
                ? 'text-neutral-900 dark:text-white font-bold border-b-2 border-neutral-900 dark:border-white'
                : 'text-zinc-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certifications ({CERTIFICATIONS.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="exp-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/10 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <div className="text-xs text-zinc-500 font-mono mb-1">{exp.period}</div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">{exp.company} • {exp.location}</p>
                    </div>

                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-zinc-400 border border-neutral-200 dark:border-white/5">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500">
                      Key Impact
                    </div>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-zinc-300">
                          <CheckCircle className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-white/5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-neutral-100 dark:bg-white/5 text-zinc-400 font-mono border border-neutral-200 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="edu-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {EDUCATIONS.map((edu) => (
                <div
                  key={edu.id}
                  className="p-8 rounded-2xl bg-white dark:bg-zinc-900/30 border border-neutral-200 dark:border-white/5"
                >
                  <div className="text-xs text-zinc-500 font-mono mb-1">{edu.period}</div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-sm text-zinc-400 font-mono mt-1">{edu.institution} • {edu.location}</p>
                  {edu.grade && (
                    <p className="text-xs font-mono text-emerald-500 mt-2">{edu.grade}</p>
                  )}

                  <div className="space-y-2 mt-6 pt-4 border-t border-neutral-100 dark:border-white/5">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500">
                      Highlights
                    </div>
                    <ul className="space-y-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-neutral-700 dark:text-zinc-300 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-zinc-400 mt-2 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div
              key="cert-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-900/30 border border-neutral-200 dark:border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                      {cert.date}
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">Issuer: {cert.issuer}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
