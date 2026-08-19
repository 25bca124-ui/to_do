import { Experience, Education, Certification, SkillCategory, Project, SocialLink, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Akash',
  age: 20,
  experienceYearsCount: '3',
  role: 'Software Developer',
  secondaryRole: 'Full-Stack & Systems Builder',
  tagline: 'Crafting minimalist, high-performance digital experiences and scalable web software with refined aesthetics.',
  location: 'Bangalore, India (Open to Worldwide Remote & Hybrid)',
  email: 'akash.c585868@gamil.com',
  github: 'https://github.com/akash-developer',
  linkedin: 'https://linkedin.com/in/akash-software-dev',
  twitter: 'https://x.com/akash_codes',
  bio: `I am Akash, a 20-year-old Software Developer with 3 years of hands-on experience engineering scalable web applications, sleek responsive interfaces, and performant backend services. I combine clean architecture, modern TypeScript/JavaScript paradigms, and minimalist visual precision to build software that users love.`,
  shortBio: `20-year-old software developer with 3 years of experience in full-stack web development, frontend systems, and cloud APIs.`,
  availability: 'Available for full-time software developer roles & consulting',
  metrics: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Age', value: '20' },
    { label: 'Production Projects', value: '20+' },
    { label: 'System Uptime Target', value: '99.9%' },
  ],
  interests: ['Full-Stack Engineering', 'UI/UX Micro-Interactions', 'Clean Code Design', 'Cloud & DevOps', 'Open Source']
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Developer',
    company: 'Synapse Tech Solutions',
    location: 'Bangalore / Remote',
    period: '2024 — Present',
    isCurrent: true,
    type: 'Full-time',
    description: 'Engineering responsive web applications, component libraries, and RESTful microservices for high-traffic SaaS platforms.',
    achievements: [
      'Engineered core web interfaces using React, Next.js, and TypeScript, improving page load speeds by 40% and Core Web Vitals scores.',
      'Developed and integrated RESTful APIs with Node.js and Express, processing over 50,000 requests daily with sub-50ms response times.',
      'Implemented real-time state synchronization with WebSockets and Redis, reducing client-server latency significantly.',
      'Designed fully responsive, accessible UI components utilizing Tailwind CSS with seamless dark/light theme transitions.'
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    id: 'exp-2',
    role: 'Junior Full-Stack Developer',
    company: 'Veloce Digital Labs',
    location: 'Bangalore, India',
    period: '2023 — 2024',
    type: 'Full-time',
    description: 'Built customer dashboards, data visualizers, and authentication workflows for business analytics clients.',
    achievements: [
      'Delivered 8+ client-facing web dashboards featuring interactive charts and analytics filters.',
      'Implemented secure JWT-based authentication and role-based access control (RBAC) across multi-tenant web portals.',
      'Refactored legacy frontend codebases into modular React hooks and reusable component patterns, cutting development time for new features by 30%.'
    ],
    technologies: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git']
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer Intern',
    company: 'Pulse Innovations',
    location: 'Bangalore, India',
    period: '2022 — 2023',
    type: 'Internship',
    description: 'Assisted in building responsive landing pages, interactive product showcases, and mobile-friendly web portals.',
    achievements: [
      'Built 15+ responsive web pages with mobile-first CSS and smooth micro-interactions.',
      'Conducted automated cross-browser testing and optimized asset delivery for mobile devices.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Figma']
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu-1',
    institution: 'Computer Science & Engineering',
    degree: 'Bachelor of Computer Applications (BCA) / B.Tech CSE',
    field: 'Computer Science & Software Development',
    period: '2022 — 2025 / 2026',
    grade: 'First Class with Distinction',
    location: 'Bangalore, India',
    highlights: [
      'Focused coursework in Data Structures, Algorithms, Web Technologies, Database Management, and Object-Oriented Software Design.',
      'Active participant in coding hackathons and technical symposiums.',
      'Built multiple real-world full-stack web applications as part of academic capstones.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    name: 'Meta Certified Front-End Developer',
    issuer: 'Meta / Coursera',
    date: '2024',
    badge: 'Meta Certified',
    credentialUrl: 'https://coursera.org'
  },
  {
    id: 'cert-2',
    name: 'Full Stack Web Development Professional',
    issuer: 'FreeCodeCamp / Udemy',
    date: '2023',
    badge: 'Full-Stack Certified',
    credentialUrl: 'https://freecodecamp.org'
  },
  {
    id: 'cert-3',
    name: 'PostgreSQL & Database Design Specialist',
    issuer: 'Codecademy',
    date: '2023',
    badge: 'DB Specialist',
    credentialUrl: 'https://codecademy.com'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Crafting responsive, high-performance web applications with fluid interactions.',
    skills: [
      { name: 'TypeScript / JavaScript (ES6+)', proficiency: 95, experienceYears: '3 yrs', level: 'Expert' },
      { name: 'React & React Hooks', proficiency: 94, experienceYears: '3 yrs', level: 'Expert' },
      { name: 'Next.js (App Router)', proficiency: 90, experienceYears: '2+ yrs', level: 'Advanced' },
      { name: 'Tailwind CSS & Styling', proficiency: 96, experienceYears: '3 yrs', level: 'Expert' },
      { name: 'Responsive Design & Mobile-First', proficiency: 95, experienceYears: '3 yrs', level: 'Expert' },
      { name: 'Motion / Transition Animations', proficiency: 88, experienceYears: '2+ yrs', level: 'Advanced' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Building secure server logic, RESTful endpoints, and database interactions.',
    skills: [
      { name: 'Node.js & Express', proficiency: 92, experienceYears: '3 yrs', level: 'Expert' },
      { name: 'RESTful API Architecture', proficiency: 93, experienceYears: '3 yrs', level: 'Expert' },
      { name: 'PostgreSQL & SQL Queries', proficiency: 86, experienceYears: '2+ yrs', level: 'Advanced' },
      { name: 'MongoDB & NoSQL', proficiency: 88, experienceYears: '3 yrs', level: 'Advanced' },
      { name: 'Authentication (JWT, OAuth)', proficiency: 90, experienceYears: '2+ yrs', level: 'Advanced' },
      { name: 'Redis Caching', proficiency: 80, experienceYears: '2 yrs', level: 'Proficient' },
    ]
  },
  {
    id: 'tools-devops',
    title: 'DevOps & Tooling',
    description: 'Version control, containerization, and modern deployment pipelines.',
    skills: [
      { name: 'Git & GitHub Workflows', proficiency: 94, experienceYears: '3 yrs', level: 'Expert' },
      { name: 'Docker Containerization', proficiency: 82, experienceYears: '2 yrs', level: 'Proficient' },
      { name: 'Vercel / Cloud Deployment', proficiency: 92, experienceYears: '3 yrs', level: 'Expert' },
      { name: 'Postman API Testing', proficiency: 90, experienceYears: '3 yrs', level: 'Advanced' },
      { name: 'Linux / Command Line', proficiency: 85, experienceYears: '3 yrs', level: 'Advanced' },
      { name: 'Vite & Webpack Tooling', proficiency: 90, experienceYears: '3 yrs', level: 'Advanced' },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Nova Studio — Real-Time Collaborative Canvas',
    tagline: 'Multiplayer whiteboard with vector tools and instant synchronization.',
    category: 'Full-Stack',
    featured: true,
    description: 'A low-latency collaborative whiteboard allowing teams to diagram, brainstorm, and export diagrams with live multi-cursor tracking.',
    longDescription: 'Nova Studio allows teams to sketch, annotate, and brainstorm in real time. Features include vector pencil, geometric shapes, sticky notes, smooth pan-zoom viewport, and sub-30ms WebSocket synchronisation across connected peers.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Node.js', 'HTML5 Canvas'],
    metrics: '60 FPS Rendering • <30ms Latency • Real-time Collaboration',
    liveUrl: 'https://example.com/novastudio',
    githubUrl: 'https://github.com/akash-developer/nova-studio',
    keyFeatures: [
      'Multiplayer presence with real-time peer cursors',
      'Smooth pan & zoom infinite canvas viewport',
      'Export to high-resolution PNG, SVG, and JSON',
      'Dark and light mode responsive canvas themes'
    ],
    architectureNotes: 'Built with optimized canvas rendering loops and binary WebSocket payloads to keep client memory low.',
    gradient: 'from-zinc-800 to-zinc-950'
  },
  {
    id: 'project-2',
    title: 'DevSphere — Developer Community & Snippet Hub',
    tagline: 'Code sharing platform with syntax highlighting and interactive playgrounds.',
    category: 'Full-Stack',
    featured: true,
    description: 'A social developer hub for bookmarking, rating, and executing code snippets across 15+ programming languages.',
    longDescription: 'DevSphere is a modern developer community platform. Users can create snippet collections, fork community snippets, test regex in real time, and integrate directly with GitHub Gists.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'NextAuth'],
    metrics: '5,000+ Active Snippets • Sub-100ms Page Loads',
    liveUrl: 'https://example.com/devsphere',
    githubUrl: 'https://github.com/akash-developer/devsphere',
    keyFeatures: [
      'Syntax highlighted code editor with multi-theme support',
      'Instant search and tag-based snippet filtering',
      'JWT-authenticated user profiles with star and fork metrics',
      'One-click copy, raw embed, and markdown export'
    ],
    architectureNotes: 'Utilizes Next.js Server Components and PostgreSQL indexes for instant full-text search.',
    gradient: 'from-neutral-900 to-black'
  },
  {
    id: 'project-3',
    title: 'PulseTrack — SaaS Analytics & Telemetry Dashboard',
    tagline: 'High-throughput business metric tracker with customizable visual widgets.',
    category: 'Frontend',
    featured: true,
    description: 'An interactive financial and traffic telemetry suite with dynamic KPI cards, conversion funnels, and revenue forecasting.',
    longDescription: 'Engineered for SaaS founders to monitor business health. Features configurable dashboard grids, date range comparisons, exportable CSV reports, and dark mode optimization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand', 'Vite'],
    metrics: 'Zero-Lag 50k Data Point Renders • 100% Mobile Responsive',
    liveUrl: 'https://example.com/pulsetrack',
    githubUrl: 'https://github.com/akash-developer/pulsetrack',
    keyFeatures: [
      'Interactive time-series line, bar, and area charts with hover tooltips',
      'Dynamic drag-and-drop widget layout customization',
      'Real-time filter presets (Last 24h, 7d, 30d, Custom Range)',
      'Clean print and PDF executive report generator'
    ],
    architectureNotes: 'Custom data decimation algorithms ensure fluid 60fps chart re-renders even when processing 50,000+ telemetry rows.',
    gradient: 'from-zinc-900 via-neutral-900 to-black'
  },
  {
    id: 'project-4',
    title: 'MinimalDoc — Markdown Note Studio',
    tagline: 'Distraction-free technical writing app with local auto-save & Git sync.',
    category: 'AI & Tools',
    featured: false,
    description: 'An offline-first markdown workspace with split-pane live preview, math equations, and code block formatting.',
    longDescription: 'MinimalDoc focuses on fast, keyboard-first technical documentation. It saves directly to browser storage and supports direct exporting to clean styled PDFs and HTML.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'PrismJS'],
    metrics: '100% Offline-Ready • Instant Keystroke Feedback',
    liveUrl: 'https://example.com/minimaldoc',
    githubUrl: 'https://github.com/akash-developer/minimaldoc',
    keyFeatures: [
      'Split-screen live markdown parser with synchronized scroll',
      'Offline IndexedDB persistence with revision history snapshots',
      'Word count, reading time calculator, and focus mode',
      'Clean dark and light editorial typography'
    ],
    architectureNotes: 'Uses web workers for background markdown parsing to guarantee zero UI typing stutter.',
    gradient: 'from-neutral-800 to-zinc-900'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    platform: 'github',
    url: 'https://github.com/akash-developer',
    username: '@akash-developer',
    description: 'Code repositories, side projects, and open source contributions.',
    featured: true
  },
  {
    name: 'LinkedIn',
    platform: 'linkedin',
    url: 'https://linkedin.com/in/akash-software-dev',
    username: 'in/akash-software-dev',
    description: 'Career journey, skills endorsements, and professional network.',
    featured: true
  },
  {
    name: 'Twitter / X',
    platform: 'twitter',
    url: 'https://x.com/akash_codes',
    username: '@akash_codes',
    description: 'Developer insights, web technologies, and build updates.',
    featured: true
  },
  {
    name: 'Email',
    platform: 'email',
    url: 'mailto:akash.dev.workspace@gmail.com',
    username: 'akash.dev.workspace@gmail.com',
    description: 'Direct inbox for software roles, projects, and inquiries.',
    featured: true
  },
  {
    name: 'Discord',
    platform: 'discord',
    url: 'https://discord.com/users/akash_dev',
    username: 'akash_dev#0001',
    description: 'Developer community chat and collaboration.',
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Vikram Mehta',
    role: 'VP of Engineering',
    company: 'Synapse Labs',
    relationship: 'Managed Akash directly',
    quote: 'Akash is one of those rare engineers who writes rock-solid distributed server logic and builds an impeccably polished, accessible UI with equal mastery.',
    avatarText: 'VM'
  },
  {
    id: 't-2',
    author: 'Sarah Chen',
    role: 'Lead Product Designer',
    company: 'Studio Lumina',
    relationship: 'Design system squad partner',
    quote: 'Working with Akash is effortless. He has an intuitive grasp of spacing, micro-interactions, and typography, bringing designs to life with fluid precision.',
    avatarText: 'SC'
  },
  {
    id: 't-3',
    author: 'Rahul Sharma',
    role: 'Staff Architect',
    company: 'Nexa Digital',
    relationship: 'Collaborated on cloud infrastructure',
    quote: 'Akash architected our real-time synchronization layer with remarkable diligence. His systems handle heavy concurrent workloads with minimal resource footprint.',
    avatarText: 'RS'
  }
];

