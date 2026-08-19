export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'Full-time' | 'Contract' | 'Internship' | 'Open Source';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  location: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0 to 100
  experienceYears: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend / Cloud' | 'Open Source' | 'AI & Tools';
  description: string;
  longDescription: string;
  technologies: string[];
  metrics?: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
  architectureNotes?: string;
  gradient: string;
}

export interface SocialLink {
  name: string;
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'discord' | 'website';
  url: string;
  username: string;
  description?: string;
  featured?: boolean;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
  budget?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
  quote: string;
  avatarText: string;
}
