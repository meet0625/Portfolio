// Single source of truth for site content.
// Edit this file to update copy, links, skills, projects, and experience.

export const profile = {
  name: 'Meet Kadiya',
  roles: ['Software Developer', 'Full-Stack Engineer', 'Problem Solver', 'Open Source Contributor'],
  tagline: 'I build clean, reliable software — from idea to production.',
  phone: '+91 8200518250',
  email: 'meetkadiya121@gmail.com',
  github: 'https://github.com/MeetKadiya/',
  githubUsername: 'MeetKadiya',
  linkedin: 'https://www.linkedin.com/in/meetkadiya/',
  resumeUrl: '/resume.pdf',
  location: 'India',
};

export const about = {
  summary: [
    "I'm a software developer who enjoys turning ambiguous problems into working, maintainable systems. I care about readable code, sensible architecture, and shipping things that hold up in production — not just in a demo.",
    "My day-to-day spans the full stack: designing APIs, building responsive interfaces, and setting up the pipelines that get code from a laptop to a live server without drama.",
  ],
  highlights: [
    { label: 'Focus', value: 'Full-stack web development' },
    { label: 'Approach', value: 'Clean architecture, tested code' },
    { label: 'Currently', value: 'Open to new opportunities' },
    { label: 'Based in', value: 'India' },
  ],
};

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Python', 'Bash', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Flask', 'REST APIs', 'SQLite', 'Node.js'],
  },
  {
    category: 'Security & Tools',
    items: ['Bash Scripting', 'DNS & SSL', 'Git', 'Docker', 'Linux'],
  },
];

export const projects = [
  {
    title: 'MonarchDomain',
    description:
      'A dual-purpose Bash recon tool for bug bounty and security workflows: enumerates subdomains via crt.sh and DNS brute force, then runs vulnerability checks (security headers, SSL, open ports). Supports resume, diffing between runs, stealth/rate-limit-aware requests, and optional httpx integration.',
    stack: ['Shell', 'Bash', 'curl', 'DNS', 'SSL'],
    githubUrl: 'https://github.com/MeetKadiya/MONARCHDOMAIN',
    liveUrl: '',
    featured: true,
  },
  {
    title: 'Solo Leveling System',
    description:
      'An interactive "System" UI inspired by Solo Leveling, built with React. Tracks player stats (Strength, Agility, Intelligence, Vitality), simulates daily quests for EXP, and automatically calculates level-up milestones with a Shadow Monarch-themed interface.',
    stack: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/MeetKadiya/solo-leveling-system',
    liveUrl: '',
    featured: true,
  },
  {
    title: 'Database Integration',
    description:
      'A Flask web app demonstrating end-to-end database integration — a Python backend serving HTML templates backed by a SQLite database.',
    stack: ['Python', 'Flask', 'SQLite'],
    githubUrl: 'https://github.com/MeetKadiya/Database-Integration',
    liveUrl: '',
    featured: false,
  },
  {
    title: 'Log Analysis',
    description:
      'A Python script that parses raw server log files and produces structured analysis output, useful for spotting patterns like error spikes or repeated access attempts.',
    stack: ['Python'],
    githubUrl: 'https://github.com/MeetKadiya/Log-Analysis',
    liveUrl: '',
    featured: false,
  },
  {
    title: 'Coffee',
    description:
      'A responsive coffee-shop landing page built from scratch with semantic HTML and hand-written CSS, including a dedicated stylesheet for media queries across breakpoints.',
    stack: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/MeetKadiya/Coffee',
    liveUrl: '',
    featured: false,
  },
];

export const experience = [
  {
    role: 'Android Development Intern',
    org: 'Acmegrade',
    period: 'Mar 2024 — May 2024',
    points: [
      'Built a fully responsive medical app in Android Studio using Java and XML.',
      'Designed the login/register flow, swipe intro screens, and 5 core fragments (Home, Favorites, Chat, Notifications, Profile) with logout.',
      'Implemented user authentication with Firebase.',
    ],
  },
  {
    role: 'Certified Software Programmer',
    org: 'IANT, Ahmedabad',
    period: 'Nov 2023 — Nov 2024',
    points: [
      'Completed a certification covering HTML, CSS, JavaScript, Bootstrap, Python (Django, Flask, NumPy), PHP, and Laravel.',
      'Built web pages with HTML5, CSS3, JavaScript, PHP, and MySQL.',
      'Designed and managed relational databases using Python and MySQL.',
    ],
  },
  
];
