// ============================================================
// DATA.JS — All portfolio content lives here. Edit freely.
// ============================================================

export const personal = {
  name: "Basavaraj S Maneppagol",
  shortName: "Basavaraj",
  initials: "BM",
  title: "Software Engineer",
  roles: [
    "Backend Engineer",
    "MERN Stack Developer",
    "Security Minded Dev",
    "Freelance Builder",
    "Full-Stack Engineer",
  ],
  location: "Bengaluru, Karnataka, India",
  email: "basavarajmaneppagol7760@gmail.com",
  phone: "+91 7760369208",
  linkedin: "https://www.linkedin.com/in/basavaraj-maneppagol-6a9737315/",
  github: "https://github.com/BasavarajSM776036",
  resume: "/Basavaraj_Resume.pdf",                             // ← Place your resume PDF in /public/
  summary:
    "Software Engineer with hands-on experience in backend & security engineering, MERN stack development, REST API design and full-stack application architecture. Currently a Junior Engineer at Digiscrypt Technologies. I build secure, scalable software — and I'm open to freelance projects.",
};

export const skills = {
  Languages: [
    { name: "JavaScript (ES6+)", icon: "SiJavascript" },
    { name: "Java", icon: "SiJava" },
    { name: "Python", icon: "SiPython" },
    { name: "C", icon: "SiC" },
  ],
  Frontend: [
    { name: "React.js", icon: "SiReact" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss3" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Bootstrap", icon: "SiBootstrap" },
  ],
  Backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "REST APIs", icon: "SiPostman" },
    { name: "JWT Auth", icon: "SiJsonwebtokens" },
    { name: "MVC / RBAC", icon: "SiApache" },
  ],
  Databases: [
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Mongoose", icon: "SiMongoose" },
    { name: "MySQL", icon: "SiMysql" },
  ],
  "Security & Tools": [
    { name: "Git & GitHub", icon: "SiGit" },
    { name: "Postman", icon: "SiPostman" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Netlify", icon: "SiNetlify" },
    { name: "Linux (Basic)", icon: "SiLinux" },
  ],
  "Core Concepts": [
    { name: "DSA", icon: "SiLeetcode" },
    { name: "OOP", icon: "SiCplusplus" },
    { name: "Async JS", icon: "SiJavascript" },
    { name: "Agile / SDLC", icon: "SiJira" },
  ],
};

export const experience = [
  {
    role: "Junior Engineer, Security & Backend Engineering",
    company: "Digiscrypt Technologies",
    location: "Sirsi, Karnataka",
    period: "Oct 2026 – Present",
    type: "Full-time",
    color: "#6366f1",
    bullets: [
      "Backend and security engineering assignments including internal tools and project development under an Engineering Lead.",
      "Code reviews, debugging, software reliability and security reviews in the engineering workflow.",
      "Collaborating with the team to develop, review and maintain software components following established coding practices.",
      "Applying backend and software engineering fundamentals for maintainable, reliable applications.",
    ],
  },
  {
    role: "Software Engineer Resident, Backend & Security Engineering",
    company: "Digiscrypt Technologies",
    location: "Hybrid",
    period: "Jun 2026 – Oct 2026",
    type: "Residency",
    color: "#8b5cf6",
    bullets: [
      "Structured residency on backend development, software security and practical engineering workflows.",
      "Reviewed and debugged code to improve quality, reliability and maintainability.",
      "Git collaboration: branching, pull requests, code reviews, merging.",
      "Repository-level engineering tasks under technical mentorship.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Vtricks Technologies",
    location: "Bengaluru",
    period: "Feb 2026 – May 2026",
    type: "Internship",
    color: "#f97316",
    certificate: "/src/assets/vtricks-certificate.jpg",
    bullets: [
      "Built responsive interfaces using React.js, JavaScript, HTML, CSS and Bootstrap.",
      "Full-stack work: frontend-backend integration and REST API workflows.",
      "DOM manipulation, async JavaScript, debugging, API testing and Git.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Namma Khate",
    tagline: "Shop Management PWA for local retail",
    period: "Aug – Sep 2026",
    stack: ["HTML", "CSS", "JavaScript", "PWA", "Netlify"],
    highlights: [
      "Mobile-first PWA that digitizes daily ops for a local retail store",
      "Tracks cash collections, inventory purchases & customer credit dues",
      "Weight-and-price billing calculator with profit analytics",
      "Works offline via service workers — true PWA experience",
    ],
    live: "https://nammakhate.netlify.app",
    github: "https://github.com/BasavarajSM776036",
    gradient: "from-indigo-400 to-violet-500",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Pharmacy ERP",
    tagline: "Full-stack inventory & billing system",
    period: "2026",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    highlights: [
      "Complete pharmacy management: inventory, purchasing, sales & billing",
      "REST APIs for real-time stock and billing workflows",
      "Automated GST invoice generation and stock tracking",
      "Customers, suppliers and multi-role access management",
    ],
    live: "#", // ← Replace with live link
    github: "https://github.com/BasavarajSM776036",
    gradient: "from-violet-400 to-purple-600",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "AI Clinic Platform",
    tagline: "Healthcare platform with RBAC & appointments",
    period: "Jan – Feb 2026",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "Role-based access for patients, doctors and medical learners",
      "Appointment booking with doctor approval workflows",
      "Medical report uploads with secure authenticated routes",
      "Responsive dashboards for each user role",
    ],
    live: "#", // ← Replace with live link
    github: "https://github.com/BasavarajSM776036",
    gradient: "from-sky-400 to-indigo-500",
    color: "#0ea5e9",
  },
  {
    id: 4,
    title: "Document Forgery Detection",
    tagline: "ML-powered document verification system",
    period: "Apr – Dec 2025",
    stack: ["React.js", "Node.js", "Express.js", "Python", "Machine Learning"],
    highlights: [
      "OCR + ML pipeline for document analysis and similarity checking",
      "Secure uploads with authentication and protected routes",
      "Forgery detection using computer vision techniques",
      "End-to-end full-stack + ML integration",
    ],
    live: "#", // ← Replace with live link
    github: "https://github.com/BasavarajSM776036",
    gradient: "from-orange-400 to-rose-500",
    color: "#f97316",
  },
];

export const education = {
  institution: "SDM Institute of Technology",
  degree: "B.E. in Computer Science & Engineering",
  period: "2022 – 2026",
  cgpa: "8.14 / 10",
  location: "Karnataka, India",
};

export const certifications = [
  "The Complete Web Development Training — Udemy",
  "Data Structures & Algorithms using Java — Coursera",
  "Build Your Own Generative AI Model",
  "Internet of Things (IoT)",
  "Database and SQL",
];

export const achievements = {
  title: "Beyond The Code",
  sport: "Sepak Takraw",
  description:
    "When I'm not building software, I'm on the court. Sepak Takraw is a southeast Asian sport combining elements of volleyball, football and gymnastics — and I've represented Karnataka at the highest levels.",
  stats: [
    { label: "National Representations", value: 6, suffix: "×", description: "Represented Karnataka nationally in Sepak Takraw" },
    { label: "State Representations", value: 11, suffix: "×", description: "Represented Karnataka at state level" },
    { label: "Projects Built", value: 10, suffix: "+", description: "Full-stack and backend projects delivered" },
    { label: "CGPA", value: 8.14, suffix: "", description: "B.E. Computer Science, SDMIT" },
  ],
};

export const languages = [
  { name: "Kannada", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Conversational" },
];

export const freelance = {
  headline: "Got an idea? Let's build it together.",
  subtext:
    "I take on freelance projects — web apps, backend APIs, MERN stack builds, PWAs, and more. If you have a vision, I have the code to bring it to life.",
  cta: "Let's Talk",
  ctaEmail: "basavarajmaneppagol7760@gmail.com",
};
