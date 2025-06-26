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
  reg,
  real1,
  real2,
  real3,
  inventory,
  inventory2,
  inventory3,
  hamlati,
  hamlati2,
  hamlati3,
  hamlati4,
  chess,
  chess2,
  chess3,
  ai1,
  ai2,
  ai3,
  ai4,
  ai5,
  ai6,
  ai7,
  ai8,
  ai9,
  portfolio,
  portfolio2,
  portfolio3,

  // Company logos
  sbx,
  sahl,
  ai,
  fiverr,

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
  { title: "AI/ML Engineering", icon: ai },
  { title: "Software Engineering", icon:se },
  { title: "Project Management", icon: pmp },
  { title: "Algorithmic Trading", icon: python },
  { title: "Full-Stack Development", icon: reactjs },
 
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

export const experiences = [  {
    title: "IT Manager",
    company_name: "Starbucks (Arabian Gates)",
    icon: sbx, // Will replace with Starbucks icon later
    iconBg: "#F0F0F0", // Light gray with better contrast
    date: "Jan 2024 - Present",
    points: [
      "Empowered IT team to leverage new technologies, staying current with advancements and accelerating daily operations.",
      "Conducted in-depth training sessions for employees, improving team efficiency and reducing technical support dependency.",
      "Developed software solutions to streamline inventory operations, improving workflow speed and accuracy by 30%.",
      "Provided technical support and troubleshooting, resolving IT issues across branches within 24 hours.",
      "Diagnosed and resolved recurring POS and OXO ERP issues, improving transactional reliability and reducing system errors.",
      "Optimized product listings and category structures, accelerating item lookup and checkout speed by 20%.",
    ],
  },
  {    title: "AI/ML Engineer",
    company_name: "Remote (Single-Client Engagement)",
    icon: ai,
    iconBg: "#E6F7FF", // Light blue - better for AI/ML role
    date: "Feb 2025 - Present",
    points: [
      "Designed an AI-powered stock prediction system combining pattern recognition, sentiment analysis, and reinforcement learning.",
      "Developed a modular pipeline for data ingestion, preprocessing, feature engineering, model training, and evaluation.",
      "Engineered database schemas to store historical price data, technical patterns, sentiment scores, and performance metrics.",
      "Built reinforcement learning models using PPO in stable-baselines3 to optimize trading policies.",
      "Created multi-interface interaction points (CLI, Streamlit GUI, email notifications) for comprehensive user access.",
      "Implemented evaluation metrics such as Sharpe Ratio, profit factor, and drawdown for robust risk control.",
      "Developed model versioning workflows with API access, enabling model promotion and experiment reproducibility.",
    ],
  },
  {    title: "Full Stack Engineering Intern",
    company_name: "Sahl Solutions",
    icon: sahl,
    iconBg: "#F0F7EF", // Light green - for growth and learning
    date: "Jun 2024 - Aug 2024",
    points: [
      "Contributed to the Hamlati project, a web and mobile platform streamlining accommodation for Hajj pilgrims.",
      "Developed and integrated key backend features using Django and managed data flow with SQLite.",
      "Built and refined frontend interfaces with Vue.js, ensuring responsiveness across devices.",
      "Optimized web performance and enhanced page load times by improving code structure and eliminating redundant queries.",
      "Coordinated with cross-functional teams to integrate APIs and third-party tools, enhancing system reliability.",
    ],
  },
  {    title: "Web Developer",
    company_name: "Freelance",
    icon: fiverr,
    iconBg: "#F5F0FF", // Light purple - for creativity
    date: "Jan 2022 - Aug 2024",
    points: [
      "Built custom full-stack applications using React.js, Django, Next.js, and Laravel for retail and real estate clients.",
      "Designed responsive, intuitive websites with mobile-first layouts, improving user engagement and navigation.",
      "Developed e-commerce platforms using Shopify and Laravel, enabling product management and online payments.",
      "Created user-centric UI/UX wireframes using Figma and implemented consistent frontend interfaces.",
      "Integrated third-party APIs including payment gateways and email systems to expand site functionality.",
    ],
  },
];

export const projects = [
  {
    name: "AI-Powered Stock Prediction System",
    description:
      "Advanced trading system combining pattern recognition, sentiment analysis, and reinforcement learning for stock market predictions with multi-interface access points.",
    category: "AI/ML",
    status: "in-progress",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Reinforcement Learning", color: "pink-text-gradient" },
      { name: "sqlite3", color: "orange-text-gradient" },
      { name: "MLOps: mlflow, tensorboard", color: "orange-text-gradient" },
      { name: "Data science/ML: scikit-learn, pandas, numpy, matplotlib, seaborn", color: "orange-text-gradient" },
      { name: "Reinforcement learning: stable-baselines3, PPO, gymnasium", color: "orange-text-gradient" },
      { name: "NLP/sentiment analysis: transformers, torch", color: "orange-text-gradient" },
      { name: "Trading/Backtesting: backtesting.py", color: "orange-text-gradient" },
      { name: "Web/Cloud deployment: fastapi, uvicorn, streamlit", color: "orange-text-gradient" },
      
    ],
    image: ai1,
    image2: ai2,
    image3: ai3,
    image4: ai4,
    image5: ai5,
    image6: ai6,
    image7: ai7,
    image8: ai8,
    image9: ai9,
    source_code_link: "#",
    live_demo_link: "#",
    detail_page: "/projects/stock-prediction",
    metrics: {
      returns: "+7000% / year",
      profit_factor: "1.22+",
      uptime: "99.9%"
    },
  },
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
    name: "Real Estate Management Platform",
    description:
      "Comprehensive real estate platform with property listings, virtual tours, and customer management. Built with modern web technologies for seamless property discovery and management.",
    category: "Full-stack",
    status: "completed",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Full-stack", color: "green-text-gradient" },
      { name: "Stripe", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "yellow-text-gradient" },
    ],
    image: real1,
    image2: real2,
    image3:  real3,
    source_code_link: "https://github.com/yoonus-k/cpcs_241_db",
    live_demo_link: "#",
    detail_page: "/projects/real-estate",
    metrics: {
      performance: "90%",
      users: "TBD",
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
  {
    name: "Course Registration System",
    description:
      "Chrome extension built with JavaScript and Bootstrap to streamline course registration during high traffic. Uses Chrome messaging technology for automated registration at specified times.",
    category: "Tools",
    status: "completed",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Chrome Extension", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "Automation", color: "yellow-text-gradient" },
    ],
    image: reg,
    source_code_link: "https://github.com/yoonus-k/Odus_Reg",
    live_demo_link: "#",
    detail_page: "/projects/registration-system",
    metrics: {
      speed_up: "95%+",
      users: "300+",
      uptime: "99.7%"
    },
  },
  {
    name: "AI Chess Engine",
    description:
      "Python-based Chess AI utilizing enhanced alpha-beta pruning algorithm. Features adjustable algorithm depth and choice between manual or AI mode for challenging gameplay.",
    category: "AI/Gaming",
    status: "completed",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "AI Algorithm", color: "green-text-gradient" },
      { name: "Alpha-Beta Pruning", color: "pink-text-gradient" },
      { name: "Game Development", color: "yellow-text-gradient" },
    ],
    image: chess,
    image2: chess2,
    image3: chess3,
    source_code_link: "https://github.com/yoonus-k/Chess_AI_Python",
    live_demo_link: "#",
    detail_page: "/projects/ai-chess",
    metrics: {
      performance: "Expert",
      accuracy: "92%+",
      speed: "X5",
    },
  },

];
