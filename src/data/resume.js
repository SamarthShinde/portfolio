// ============================================================
// SAVE FILE — all portfolio content lives here.
// ============================================================

export const identity = {
  name: 'Samarth Shinde',
  alias: 'SAMARTH.EXE',
  roles: ['AI Analyst', 'ML Researcher', 'Backend Developer', 'Patent Holder', 'Data Engineer'],
  title: 'AI Engineer & ML Researcher',
  location: 'Bengaluru, India',
  email: 'Samarth.060803@gmail.com',
  phone: '+91 97 39 53 65 05',
  phoneHref: 'tel:+919739536505',
  linkedin: 'https://linkedin.com/in/samarth-shinde-79a9b4249',
  github: 'https://github.com/SamarthShinde',
  desc: 'I build intelligent systems at the intersection of AI, data engineering, and real-world impact — from patented safety technology to retail forecasting pipelines powering billion-dollar brands.',
  motto: 'Ship fast, think deep.',
};

export const stats = [
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { value: 1, suffix: '', label: 'Patent Filed' },
  { value: 95, suffix: '%', label: 'CV Model Accuracy' },
  { value: 3, suffix: '×', label: 'IIT Certifications' },
];

// Career timeline — the player's journey, chronological.
export const timeline = [
  {
    year: '2021',
    title: 'Spawn Point — Ramaiah Institute of Technology',
    body: 'Began BE in Electronics & Telecommunication with Minors in AI & Machine Learning. CGPA 8.35 (major) · 8.50 (minors).',
    tag: 'EDUCATION',
  },
  {
    year: 'MAR 2024',
    title: 'ML Research Intern — Stellantis · RIT · IIT-Madras',
    body: 'Joined the "Intelli-Sensing" project: ML models for in-cabin audio sensing, multi-modal signal analysis, and driver safety systems with Prof. Viswanath Talasila.',
    tag: 'RESEARCH',
  },
  {
    year: 'MAR 2025',
    title: 'Business Analyst Intern — Impact Analytics',
    body: 'End-to-end data ingestion pipelines for Victoria’s Secret International — BigQuery/Postgres infrastructure, schema standardization, QC frameworks.',
    tag: 'INDUSTRY',
  },
  {
    year: 'MAY 2025',
    title: 'Patent Filed — Indian Patent Office',
    body: '"System and Method for Detecting Seat Belt Usage in an Automobile" — App No. 202541052870, Form 2 specification filed 30 May 2025.',
    tag: 'LEGENDARY',
  },
  {
    year: '2025',
    title: 'Degree Unlocked — BE, E&T + AI/ML Minors',
    body: 'Graduated from Ramaiah Institute of Technology with NPTEL certifications from IIT Madras, IIT Kharagpur and IIT Delhi.',
    tag: 'EDUCATION',
  },
  {
    year: 'OCT 2025',
    title: 'AI Analyst — Impact Analytics',
    body: 'Current quest: AI-driven validation & explainability frameworks for retail forecasting pipelines serving billion-dollar brands.',
    tag: 'ACTIVE',
    now: true,
  },
];

// Core attributes — RPG-style strengths.
export const strengths = [
  {
    icon: '⚔️',
    name: 'Patent-Grade R&D',
    body: 'Took research from lab data collection to a filed Indian patent — rigor that survives the real world.',
  },
  {
    icon: '🛡️',
    name: 'End-to-End Ownership',
    body: 'From raw ingestion to explainable output — owns whole pipelines, not just tickets.',
  },
  {
    icon: '📡',
    name: 'Signal Processing Depth',
    body: 'Audio AI, multi-modal sensing and time-series instinct from the Intelli-Sensing project.',
  },
  {
    icon: '⚡',
    name: 'Ship Fast, Think Deep',
    body: 'Personal motto. Rapid delivery without sacrificing the architecture underneath.',
  },
  {
    icon: '🧬',
    name: 'Cross-Domain Range',
    body: 'AI/ML + data engineering + backend — comfortable anywhere in the stack the problem lives.',
  },
  {
    icon: '🤝',
    name: 'Multi-Guild Collaboration',
    body: 'Shipped work across RIT, IIT-Madras, Stellantis and Impact Analytics teams.',
  },
];

export const skillGroups = [
  {
    channel: 'CLASS A — CORE LANGUAGES & FRAMEWORKS',
    skills: [
      { name: 'Python', pct: 95 },
      { name: 'FastAPI / SQLAlchemy', pct: 88 },
      { name: 'SQL / BigQuery', pct: 85 },
      { name: 'C / C++', pct: 75 },
      { name: 'Docker / AWS / Cloud', pct: 80 },
    ],
  },
  {
    channel: 'CLASS B — AI / ML EXPERTISE',
    skills: [
      { name: 'Machine Learning', pct: 92 },
      { name: 'NLP / GenAI / LangChain', pct: 85 },
      { name: 'Computer Vision', pct: 82 },
      { name: 'Signal Processing / Audio AI', pct: 88 },
      { name: 'Data Pipelines / Analytics', pct: 87 },
    ],
  },
];

export const techMarquee = [
  'Python', 'Machine Learning', 'BigQuery', 'FastAPI', 'NLP', 'GenAI', 'LangChain',
  'Computer Vision', 'Docker', 'AWS', 'Signal Processing', 'SQL', 'SQLAlchemy', 'Postgres',
];

export const experience = [
  {
    period: 'OCT 2025 — PRESENT',
    org: 'Impact Analytics',
    role: 'AI Analyst',
    now: true,
    body: 'Building AI-driven validation and explainability frameworks for retail forecasting pipelines — automated data quality signals, rule-based anomaly detection, and forecast readiness systems for billion-dollar brands including Victoria’s Secret, GAP, and Ralph Lauren.',
    tags: ['Python', 'BigQuery', 'GenAI', 'Anomaly Detection', 'Rule Engines', 'Explainability'],
  },
  {
    period: 'MAR 2025 — SEP 2025',
    org: 'Impact Analytics',
    role: 'Business Analyst Intern',
    body: 'Designed end-to-end data ingestion pipelines for Victoria’s Secret International — schema standardization, BigQuery/Postgres infrastructure, hierarchical product joins, fiscal calendar alignment, and ingestion QC frameworks. Owned Jira-based workflows end-to-end.',
    tags: ['BigQuery', 'Postgres', 'Data Pipelines', 'Jira', 'QC Frameworks'],
  },
  {
    period: 'MAR 2024 — FEB 2025',
    org: 'Stellantis · RIT · IIT-Madras',
    role: 'ML Research Intern',
    body: 'Developed ML models for in-cabin audio sensing in the "Intelli-Sensing" project. Led data collection across lab and field environments, analyzed multi-modal signals, contributed to driver safety systems. Collaboration with Prof. Viswanath Talasila culminated in a filed Indian patent.',
    tags: ['ML', 'Audio AI', 'Signal Processing', 'R&D', 'Patent', 'Multi-modal AI'],
  },
];

export const projects = [
  {
    id: 'PROJECT_01',
    icon: '🧠',
    name: 'In-Cabin Safety & Comfort Monitoring',
    body: 'Real-time ML system for human voice, engine noise, traffic, and music detection inside vehicles. Includes driver emotion recognition for happiness, anger, and stress states — built across RIT, IIT-Madras, and Stellantis.',
    metrics: [
      { v: '4+', l: 'Audio Classes' },
      { v: '3', l: 'Institutions' },
      { v: '1', l: 'Patent Filed' },
    ],
    tags: ['Python', 'ML', 'Audio AI', 'Signal Processing', 'Emotion AI'],
    link: 'https://github.com/SamarthShinde/Audio-Classification',
  },
  {
    id: 'PROJECT_02',
    icon: '⚡',
    name: 'FastAPI Backend System',
    body: 'Scalable backend API with JWT-based authentication, optimized SQLAlchemy queries, asynchronous processing, and database indexing for high availability. Built for seamless frontend-database communication with fast response times.',
    metrics: [
      { v: 'JWT', l: 'Auth' },
      { v: 'Async', l: 'Processing' },
    ],
    tags: ['FastAPI', 'SQLAlchemy', 'JWT', 'Async', 'Postgres'],
    link: 'https://github.com/SamarthShinde/FastAPI-Backend',
  },
  {
    id: 'PROJECT_03',
    icon: '👁',
    name: 'ImageEntity Extractor',
    body: 'Computer vision model extracting product attributes (weight, dimensions) from images for e-commerce applications. Achieved 95% accuracy and ranked 660th out of 1,980 teams in the Amazon ML Hackathon 2024.',
    metrics: [
      { v: '95%', l: 'Accuracy' },
      { v: '660', l: '/ 1,980 Teams' },
    ],
    tags: ['Computer Vision', 'ML', 'OCR', 'Python', 'E-commerce'],
    link: 'https://github.com/SamarthShinde/Amazon-ML-Hack',
  },
];

export const patent = {
  title: 'System and Method for Detecting Seat Belt Usage in an Automobile',
  appNo: '202541052870',
  filed: 'Indian Patent Office — 30 May 2025',
  status: 'Form 2 Specification Filed',
};

export const recognition = {
  quote:
    'Recognized for exceptional contributions to the Intelli-Sensing project, demonstrating strong technical skills in audio sensing and machine learning modeling that significantly advanced our Driver and Occupant Monitoring Systems.',
  author: 'Giuliana Zennaro',
  role: 'Head, Advanced Safety & Sensing',
  org: 'Stellantis Europe S.P.A',
};

export const education = [
  { gpa: '8.35', deg: 'BE, Electronics & Telecommunication', school: 'Ramaiah Institute of Technology', years: '2021 — 2025' },
  { gpa: '8.50', deg: 'BE Minors, AI & Machine Learning', school: 'Ramaiah Institute of Technology', years: '2021 — 2025' },
];

export const certs = [
  { name: 'Machine Learning', inst: 'IIT Madras' },
  { name: 'Natural Language Processing', inst: 'IIT Kharagpur' },
  { name: 'Introduction to AI', inst: 'IIT Delhi' },
];

// Section registry — order defines the scroll story + background scene per zone.
export const zones = [
  { id: 'hero',        label: 'PLAYER ONE',   nav: 'Start' },
  { id: 'timeline',    label: 'ORIGIN STORY', nav: 'Timeline' },
  { id: 'strengths',   label: 'CORE ATTRIBUTES', nav: 'Strengths' },
  { id: 'skills',      label: 'SKILL TREE',   nav: 'Skills' },
  { id: 'experience',  label: 'QUEST LOG',    nav: 'Experience' },
  { id: 'projects',    label: 'INVENTORY',    nav: 'Projects' },
  { id: 'achievements',label: 'TROPHY ROOM',  nav: 'Achievements' },
  { id: 'contact',     label: 'JOIN PARTY',   nav: 'Contact' },
];

// Optional Higgsfield/AI-generated video backgrounds.
// Drop files into public/videos/ and list them here, e.g. { hero: '/videos/hero.mp4' }.
// Any zone with a video gets a scroll-crossfaded <video> layer instead of the
// procedural canvas scene. Keep faces consistent across frames when generating.
export const sceneVideos = {};
