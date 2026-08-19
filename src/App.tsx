/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8f8f8] text-[#111111] dark:bg-[#0a0a0a] dark:text-[#e5e5e5] flex flex-col selection:bg-white selection:text-black transition-colors duration-300">
        {/* Navigation Bar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <AboutSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <SkillsSection />
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
          <TestimonialsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </ThemeProvider>
  );
}
