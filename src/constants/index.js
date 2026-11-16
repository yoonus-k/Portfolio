import {
  // Tech stack
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  csharp,
  sqlite,
  postgres,
  php,
  oracle,
  nextjs,
  mysql,
  mongodb,
  laravel,
  firebase,
  figma,
  canva,
  aws,
  bootstrap,
  pmp,
  se,

  // Projects
  gymbro,
  threejs,
  inventory,
  inventory2,
  inventory3,
  hamlati,
  hamlati2,
  hamlati3,
  hamlati4,
  portfolio,
  portfolio2,
  portfolio3,

  // Company logos
  alinma,
  sbx,
  ai,
  fiverr,
  edunet,

} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: "AiOutlineHome", // Ant Design Home icon
  },
  {
    id: "about",
    title: "About",
    icon: "FiUser", // Feather User icon
    scrollTo: "hero", // Add scrollTo property to target hero section
  },
  {
    id: "experience",
    title: "Experience",
    icon: "AiOutlineFileText", // Ant Design FileText icon (or choose a more suitable one)
    scrollTo: "experience", // Scroll to the experience section
  },
  {
    id: "projects",
    title: "Projects",
    icon: "AiOutlinePicture", // Ant Design Picture icon
  },
  {
    id: "resume",
    title: "Resume",
    icon: "AiOutlineFileText", // Ant Design FileText icon
  },
  {
    id: "linkedin",
    title: "Linkedin",
    icon: "AiOutlineLinkedin", // Ant Design LinkedIn icon
    url: "https://www.linkedin.com/in/yoonus-k/"
  },
];

export const services = [
  { title: "Agentic AI & AI Agents", icon: se },
  { title: "Generative AI Apps, End to End", icon: ai },
  { title: "LLM Deployment & LLMOps", icon: aws },
  { title: "Delivery & Governance (PMP®)", icon: pmp },
];

export const technologies = [
  // Programming Languages
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "C++", icon: cpp },
  { name: "C#", icon: csharp },
  { name: "Java", icon: java },
  { name: "PHP", icon: php },

  // Frontend Technologies
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },

  // Backend Technologies
  { name: "Node JS", icon: nodejs },
  { name: "Laravel", icon: laravel },
  { name: "Django", icon: python }, // Using Python icon for Django

  // Databases
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgres },
  { name: "SQLite", icon: sqlite },
  { name: "Oracle", icon: oracle },
  // Tools & Services
  { name: "Git", icon: git },
  { name: "Firebase", icon: firebase },
  { name: "Figma", icon: figma },
  { name: "Three.js", icon: threejs },
  { name: "Canva", icon: canva },
  { name: "AWS", icon: aws },
];

export const experiences = [
  {
    title: "AI Full Stack Engineer",
    company_name: "Alinma Bank",
    icon: alinma,
    iconBg: "#FFFFFF",
    date: "Dec 2025 - Present",
    points: [
      "Own GenAI and agentic AI at the bank from idea to production: deploy and run the internal models, then build the apps and agents people use every day on top of them.",
      "Deploy, serve and manage the bank's internal LLMs, so GenAI runs where the bank's data is allowed to live.",
      "Design and build AI agents that complete multi-step tasks across internal tools and data, with guardrails, audit trails and human oversight suited to a bank.",
      "Build end-to-end GenAI applications, from data pipelines, RAG and APIs to the interface, and take them through security and compliance review into daily use.",
      "Shipped a portfolio of GenAI products. Flagships: a coding assistant inside the developers' IDE used by hundreds of developers, and an Outlook email assistant (summarize, translate in Arabic, English and French, draft replies) used by thousands of employees. Together they save many thousands of working hours a year.",
      "Assess new models and tools and advise the bank on what to adopt and what to skip.",
    ],
  },
  {
    title: "IT Project Manager",
    company_name: "Digital Awareness Corporation",
    icon: edunet,
    iconBg: "#E8F4FD",
    date: "Oct 2025 - Dec 2025",
    points: [
      "Built a fully automated AI agent for government tender analysis that made processing 300% faster.",
      "Brought AI automation tools into daily work across departments, cutting manual work.",
      "Led IT and AI automation projects from scoping to delivery, on time and aligned with business goals.",
    ],
  },
  {
    title: "AI Engineer (Freelance)",
    company_name: "Private client (under NDA)",
    icon: ai,
    iconBg: "#E6F7FF",
    date: "Feb 2025 - Sep 2025",
    points: [
      "Built an AI forecasting system for a private investment client, combining price pattern recognition with news and social sentiment.",
      "Led delivery end to end with a $50K budget and a remote team of 3, hitting every milestone on schedule and 15% under budget.",
      "Set up deployment, model versioning and API endpoints so the system can be updated and maintained.",
      "Designed a risk evaluation framework (Sharpe ratio, drawdown) that improved backtested risk-adjusted returns by 80%.",
    ],
  },
  {
    title: "IT Manager",
    company_name: "Starbucks (Arabian Gates)",
    icon: sbx,
    iconBg: "#F0F0F0",
    date: "Jan 2024 - Oct 2025",
    points: [
      "Ran IT operations for 20+ branches, with a team of 50+ and a $100K project portfolio. Promoted from IT Supervisor after six months.",
      "Automated inventory and POS processes, raising efficiency by 30% and saving 15 manual hours per branch every week.",
      "Restructured the checkout workflow, cutting average transaction time by 20%.",
      "Built internal IT training that let staff solve 80% of issues themselves and cut external IT costs by 25%.",
    ],
  },
];

export const projects = [
    {
    name: "Starbucks Inventory Management",
    description:
      "Enterprise inventory management system developed for Starbucks operations. Features real-time stock tracking, automated reordering, and comprehensive reporting dashboard.",
    category: "Enterprise",
    status: "completed",
    tags: [
      { name: "Java Script", color: "blue-text-gradient" },
      { name: "App Sheet", color: "green-text-gradient" },
      { name: "API", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "AWS", color: "yellow-text-gradient" },
      { name: "ERP: OXO", color: "yellow-text-gradient" },
    ],
    image: inventory,
    image2: inventory2,
    image3: inventory3,
    source_code_link: "#",
    live_demo_link: "#",
    detail_page: "/projects/inventory-system",
    metrics: {
      improvement: "40%+",
      users: "100+",
      stores: "20+"
    },
  },
  {
    name: "Gym Bro - E-commerce Platform",
    description:
      "Custom e-commerce website developed using Shopify's Liquid themes with premium design. Generated over $1 million in revenue, offering seamless shopping experience for fitness enthusiasts.",
    category: "E-commerce",
    status: "completed",
    tags: [
      { name: "Shopify", color: "blue-text-gradient" },
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Liquid", color: "green-text-gradient" },
      { name: "E-commerce", color: "pink-text-gradient" },
      { name: "Custom Design", color: "yellow-text-gradient" },
    ],
    image: gymbro,
    source_code_link: "https://github.com/yoonus-k/Debutify_theme_Gym_Bro",
    live_demo_link: "https://www.gymbromixer.com/",
    detail_page: "/projects/ecommerce-suite",
    metrics: {
      Revenue: "$1M+",
      users: "10K+",
      uptime: "99.8%"
    },
  },
  {
    name: "Hamlati - Hajj Accommodation Platform",
    description:
      "Comprehensive web and mobile platform streamlining accommodation booking for Hajj pilgrims. Built with Django backend and Vue.js frontend for seamless user experience.",
    category: "Full-stack",
    status: "completed",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "Vue.js", color: "green-text-gradient" },
      { name: "SQLite", color: "pink-text-gradient" },
      { name: "API Integration", color: "yellow-text-gradient" },
    ],
    image: hamlati,
    image2: hamlati2,
    image3: hamlati3,
    image4: hamlati4,
    source_code_link: "#",
    live_demo_link: "#",
    detail_page: "/projects/hamlati",
    metrics: {
      performance: "92%",
      users: "2K+",
      uptime: "99.5%"
    },
  },
  {
    name: "Personal Portfolio Website",
    description:
      "Visually appealing portfolio website developed with React.js, Tailwind CSS, Vite, Framer Motion, Three.js, and EmailJS. Features modern UI, 3D/animated elements, and is deployed on Vercel. Showcases personal projects and achievements effectively.",
    category: "Frontend",
    status: "completed",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Vite", color: "yellow-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
      { name: "Three.js", color: "blue-text-gradient" },
      { name: "EmailJS", color: "green-text-gradient" },
      { name: "Responsive Design", color: "yellow-text-gradient" },
      { name: "Vercel", color: "pink-text-gradient" },
    ],
    image: portfolio,
    image2: portfolio2,
    image3: portfolio3,
    source_code_link: "https://github.com/yoonus-k/My-Portfolio",
    live_demo_link: "https://yoonus.me/",
    detail_page: "/projects/portfolio",
    metrics: {
      performance: "98%",
      users: "1K+",
      uptime: "100%"
    },
  },
];
