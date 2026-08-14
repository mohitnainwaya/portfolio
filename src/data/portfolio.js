import {
  Award,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Brush,
  CalendarCheck,
  CheckCircle,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Wrench,
} from 'lucide-react';

export const profile = {
  name: 'Mohit Kumar Nainwayan',
  initials: 'MN',
  title: 'Mechanical Engineering Student @ DTU | Full-Stack Software Developer',
  location: 'Delhi, India',
  email: 'mohitnainwayan@gmail.com',
  phone: '9315411757',
  resume: '/resume/mohit-nainwayan-resume.pdf',
  avatar: '/assets/mohit-profile.jpg',
  intro:
    'Mechanical Engineering student at Delhi Technological University (DTU) specializing in Automotive Engineering and Full-Stack Software Development. Experienced in building scalable full-stack web applications with React, Spring Boot, Node.js, and AWS alongside automotive manufacturing operations.',
  typingPhrases: [
    'Full-Stack Development (React & Spring Boot)',
    'Real-Time Node.js & Socket.IO Apps',
    'Automotive & Mechanical Engineering',
    'Java & Cloud System Architecture',
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mohitnainwayan', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/mohitnainwayan', icon: Github },
    { label: 'Email', href: 'mailto:mohitnainwayan@gmail.com', icon: Mail },
  ],
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  eyebrow: 'About me',
  heading: 'Combining Engineering Rigor with Full-Stack Development.',
  story:
    'I am a B.Tech Mechanical Engineering student with a specialization in Automotive Engineering at Delhi Technological University (DTU). Alongside my core engineering background in thermal systems and CAD design, I have built strong expertise in full-stack software development, developing real-time applications and robust backend systems.',
  passion:
    'My core passion lies in software architecture, distributed systems, and technical problem-solving. Whether engineering full-stack LMS platforms with Spring Boot & AWS or optimizing production operations in automotive manufacturing, I focus on performance, reliability, and measurable efficiency.',
  goal:
    'My objective is to secure software or engineering internship opportunities where I can apply my full-stack programming capabilities, problem-solving skills, and engineering principles to build impactful technical solutions.',
  education: 'B.Tech in Mechanical Engineering (Automotive Specialization), Delhi Technological University (2023–2027).',
  facts: [
    'Solved 200+ algorithmic coding problems on LeetCode & GeeksForGeeks.',
    'Scored a perfect 99/100 on NPTEL Incubation & Entrepreneurship by IIT Bombay.',
    'Achieved 95% production efficiency during Operations Internship at Sona Comstar.',
  ],
};

export const counters = [
  { label: 'NPTEL IIT Bombay Score', value: 99, suffix: '/100' },
  { label: 'LeetCode & GFG Solved', value: 200, suffix: '+' },
  { label: 'Production Efficiency', value: 95, suffix: '%' },
  { label: 'LMS System Uptime', value: 99, suffix: '.9%' },
];

export const skills = [
  {
    category: 'Languages',
    icon: Code2,
    color: 'from-cyan-300 to-blue-400',
    items: ['Java (Advanced)', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Full-Stack & Web',
    icon: Layers3,
    color: 'from-emerald-300 to-teal-400',
    items: ['React.js', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.IO', 'JWT'],
  },
  {
    category: 'Databases & Cloud',
    icon: Database,
    color: 'from-amber-300 to-orange-400',
    items: ['MySQL', 'MongoDB', 'Redis', 'AWS EC2', 'AWS S3', 'Heroku', 'Git', 'GitHub'],
  },
  {
    category: 'Engineering & CAD',
    icon: Wrench,
    color: 'from-rose-300 to-red-400',
    items: ['Autodesk Fusion 360', 'AutoCAD', 'IC Engine Simulation', 'Thermodynamics', 'Lean Manufacturing (5S)'],
  },
  {
    category: 'Tools & Software',
    icon: TerminalSquare,
    color: 'from-purple-300 to-indigo-400',
    items: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Advanced Excel', 'GitHub Actions', 'Postman'],
  },
];

export const projects = [
  {
    title: 'SkillBridge – Full-Stack LMS',
    featured: true,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1500&q=85',
    description:
      'Spearheaded the development of a full-stack Learning Management System (LMS) with 99.9% uptime using React.js and Spring Boot REST APIs. Implemented JWT authentication and role-based access control, cutting auth latency by 95%. Deployed on AWS EC2 with S3 media storage, Redis caching, and query optimization to achieve sub-200ms response times and a 40% reduction in API latency.',
    stack: ['React.js', 'Spring Boot', 'REST APIs', 'JWT', 'AWS EC2', 'AWS S3', 'Redis', 'MySQL'],
    github: 'https://github.com/mohitnainwayan',
    live: null,
  },
  {
    title: 'TaskFlow – Real-Time Management App',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1500&q=85',
    description:
      'Developed a collaborative task management web application using Node.js, Express.js, MongoDB Atlas, and Socket.IO for instant real-time updates. Integrated Google OAuth 2.0 for secure authentication and established an automated CI/CD pipeline using GitHub Actions for deployment on Heroku.',
    stack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Socket.IO', 'Google OAuth 2.0', 'GitHub Actions', 'Heroku'],
    github: 'https://github.com/mohitnainwayan',
    live: null,
  },
  {
    title: 'IC Engines Performance Analysis',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85',
    description:
      'Analyzed Spark Ignition (SI) and Compression Ignition (CI) engine performance metrics—including brake power, thermal efficiency, and specific fuel consumption (SFC)—through detailed numerical calculations and comparative cycle analysis using Autodesk simulation software.',
    stack: ['Autodesk Fusion 360', 'AutoCAD', 'Thermodynamics', 'Cycle Analysis', 'Mechanical Engineering'],
    github: null,
    live: null,
  },
  {
    title: 'High-Performance Portfolio Website',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    description:
      'Designed and engineered a fully responsive personal portfolio built with CSS Flexbox/Grid, custom keyframe animations, and Intersection Observers. Achieved a Lighthouse performance score of 92+ with smooth cross-device compatibility across 10+ viewport sizes.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox/Grid', 'Lighthouse 92+'],
    github: 'https://github.com/mohitnainwayan',
    live: null,
  },
];

export const timeline = [
  {
    year: '2026',
    title: 'Operations Management Intern – Sona Comstar',
    type: 'Internship',
    icon: BriefcaseBusiness,
    description:
      'Spearheaded daily manufacturing and assembly operations of automotive components, achieving 95% production efficiency. Enhanced quality control by 30% and cycle times by 25% using Lean 5S and CNC machining optimizations.',
  },
  {
    year: '2025',
    title: 'NPTEL IIT Bombay Certification (99/100)',
    type: 'Achievement',
    icon: Trophy,
    description:
      'Earned a perfect score of 99/100 in "Understanding Incubation and Entrepreneurship" course conducted by IIT Bombay via NPTEL.',
  },
  {
    year: '2023–2027',
    title: 'B.Tech in Mechanical Engineering (Automotive)',
    type: 'Education',
    icon: GraduationCap,
    description:
      'Currently pursuing Mechanical Engineering with Automotive Specialization at Delhi Technological University (DTU), Delhi. CGPA: 6.5.',
  },
  {
    year: '2022',
    title: 'Class 12th Senior Secondary Education',
    type: 'Education',
    icon: GraduationCap,
    description:
      'Completed Class 12th CBSE Senior Secondary examinations from Kendriya Vidyalaya Shalimar Bagh with 65%.',
  },
  {
    year: '2020',
    title: 'Class 10th Secondary Education',
    type: 'Education',
    icon: GraduationCap,
    description:
      'Completed Class 10th CBSE Secondary examinations from Kendriya Vidyalaya Shalimar Bagh with 62.5%.',
  },
];

export const experience = [
  {
    company: 'SONA COMSTAR',
    logo: 'SC',
    role: 'Operations Management Intern',
    duration: 'June 2026 – July 2026',
    summary:
      'Directly supervised and optimized daily assembly operations and manufacturing processes for high-precision automotive components.',
    responsibilities: [
      'Spearheaded daily manufacturing and assembly operations of automotive components, achieving 95% production efficiency by streamlining workflows and implementing standardized operating procedures.',
      'Enhanced quality control protocols by 30% as measured by defect reduction rates, conducting rigorous inspections and documenting process deviations.',
      'Amplified process optimization efforts by 25% through cycle time reductions, applying Lean Manufacturing and 5S principles to CNC machining, production planning, and shop-floor workflows.',
    ],
  },
];

export const certifications = [
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google / Coursera',
    description: 'Comprehensive training in Networking, Operating Systems, System Administration, and IT Troubleshooting Fundamentals.',
    icon: ShieldCheck,
  },
  {
    title: 'NPTEL: Incubation and Entrepreneurship (IIT Bombay)',
    issuer: 'IIT Bombay / NPTEL',
    description: 'Achieved a score of 99/100 in understanding business incubation, product development, and technological entrepreneurship.',
    icon: Trophy,
  },
  {
    title: 'Java Full-Stack Development',
    issuer: 'Professional Certification',
    description: 'Mastered Spring Boot, Hibernate, REST APIs, React.js, and Microservices architecture. Solved 200+ problems on LeetCode & GeeksForGeeks.',
    icon: FileCode,
  },
];

export const statistics = [
  { label: 'NPTEL Score (IIT Bombay)', value: 99, suffix: '/100', icon: Trophy },
  { label: 'LeetCode & GFG Problems', value: 200, suffix: '+', icon: Code2 },
  { label: 'Production Efficiency', value: 95, suffix: '%', icon: Rocket },
  { label: 'LMS Uptime Performance', value: 99, suffix: '.9%', icon: ShieldCheck },
];
