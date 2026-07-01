"use client";
import React from "react";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: React.ReactNode;
};

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const textSkill = (title: string, label: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-xs font-bold">{label}</span>,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare R2", "cloudflare-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  yjs: textSkill("Y.js", "Yjs"),
  sqlite: textSkill("SQLite", "DB"),
  nginx: textSkill("Nginx", "Ng"),
  razorpay: textSkill("Razorpay", "₹"),
  nextauth: textSkill("NextAuth", "Auth"),
  radix: textSkill("Radix UI", "Rx"),
  telegram: textSkill("Telegram Bot", "TG"),
  openrouter: textSkill("OpenRouter", "AI"),
  ollama: textSkill("Ollama / pgvector", "RAG"),
  bullmq: textSkill("BullMQ", "BQ"),
  aws: textSkill("AWS EC2", "AWS"),
  htmlcss: textSkill("HTML & CSS", "HTML"),
  js: textSkill("JavaScript", "JS"),
  gsap: textSkill("GSAP", "Gsp"),
  python: textSkill("Python", "Py"),
  rust: textSkill("Rust", "Rs"),
};

export type FeaturePoint = 
  | string 
  | { text: string; subpoints: string[] };

export type FeatureDetail = {
  title: string;
  points: FeaturePoint[];
};

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  overview: string;
  features: FeatureDetail[];
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  github?: string;
  live?: string;
};

const BASE_PATH = "/assets/projects-screenshots";

const projects: Project[] = [
  {
    id: "dokit",
    category: "Cloud-Native IDE",
    title: "Dokit",
    description: "A cloud-native collaborative development platform provisioning isolated Linux workspace containers in the browser, complete with real-time multiplayer coding, dynamic HTTP routing, and a repository-aware AI assistant.",
    overview: "Dokit is a cloud-native collaborative development platform that provisions isolated, containerized environments in the browser. Build, edit, and run code with real-time multiplayer synchronization, a project-aware AI assistant, and instant preview routing. It eliminates local setup friction by delivering secure runtimes, bidirectional cloud storage sync, and shared workspaces.",
    features: [
      {
        title: "Cloud Runtimes & Container Sandboxing",
        points: [
          "On-Demand Linux Containers: Provision and tear down isolated Linux environments dynamically via the Docker Engine API.",
          "Secure Sandbox Isolation: Run workspace containers under a restricted, non-root dokituser using gosu with limited (/workspace) filesystem access.",
          "Dynamic Environment Customization: Install backend runtimes (Python, Go, Rust, Java) and CLI utilities on the fly from the workspace terminal.",
          "Fine-Grained RBAC: Enforce project-level Role-Based Access Control (RBAC) with read/write access permissions mapping collaborators."
        ]
      },
      {
        title: "Real-Time Collaboration & Sync",
        points: [
          "Multiplayer Code Editing: Edit code concurrently with conflict-free workspace integration powered by Yjs CRDTs and CodeMirror 6.",
          "Collaborator Presence: Track live cursors, active selections, and global member presence over WebSockets.",
          "Bidirectional File Syncing: Synchronize filesystem updates instantly between the container and the web editor via Linux inotify and Socket.IO.",
          "Background Cloud Sync: Persist workspace changes automatically to Cloudflare R2 using BullMQ background job queues, ensuring seamless workspace recovery on container restarts."
        ]
      },
      {
        title: "Project-Aware AI Assistant (ASTra)",
        points: [
          "Retrieval-Augmented Generation (RAG): Search and explain codebases contextually using local Ollama embeddings (nomic-embed-text) and pgvector similarity search.",
          "Multi-Language AST Parsing: Chunk codebases intelligently using regex-based language-specific parsing pipelines supporting JS, TS, Python, Go, Rust, and C/C++.",
          "Maximal Marginal Relevance (MMR): Re-rank search results dynamically to retrieve diverse, relevant context.",
          "Incremental Chat History: Maintain multi-turn developer chat history with automated chat thread summarization and persistence."
        ]
      },
      {
        title: "Developer Workflows & Templates",
        points: [
          "One-Click GitHub Import: Import and auto-provision any public GitHub repository directly into an interactive development workspace.",
          {
            text: "Project Templates: Spin up pre-configured environments for Node.js, React (Vite), Express, FastAPI, Go API, or Blank projects:",
            subpoints: [
              "Node.js — Modern JavaScript runtime",
              "React + Vite — Fast React development with Vite",
              "Express — Backend API development",
              "FastAPI — High-performance Python framework",
              "Go API — Scalable backend in Go",
              "Blank — Empty canvas for custom setups"
            ]
          },
          "Public Developer Profiles: Render developer portfolios from a customizable profile.md with featured projects.",
          "Workspace Exporting: Download entire workspace folders as .zip archives for local backups or offline execution.",
          "Access Request Management: Users can request contributor access to collaborate on public projects."
        ]
      },
      {
        title: "Secure Snippet Sharing (Code Links)",
        points: [
          "Instant Snippet Sharing: Generate secure, shareable links for individual code snippets.",
          "Granular Access Permissions: Restrict snippet viewing access using Argon2-encrypted passwords and restricted allowed user lists.",
          "Link Lifespan: Set snippet expiration date and time.",
          "Owner Workspaces: Code link owners can modify snippet titles, descriptions, code content, visibility, and credentials directly within the viewing interface."
        ]
      },
      {
        title: "Dynamic Routing & Networking",
        points: [
          "Wildcard Preview Domains: Route HTTP preview traffic dynamically to running dev servers via Nginx ([port]-[projectId].dokit.backends.live).",
          "Secure Proxying: Proxy terminal WebSocket sessions and preview HTTP requests with internal authorization sub-requests."
        ]
      },
      {
        title: "Hardened Security & Authentication",
        points: [
          "Two-Factor Authentication (2FA): Secure accounts with TOTP verification using AES-encrypted secrets and backup recovery codes.",
          "Robust Session Management: Use short-lived JWT access tokens with secure rotation and instant, remote session revocation.",
          "Infrastructure Throttling: Protect API endpoints using a Redis-based sliding-window rate limiter and strictly validate payloads via Zod.",
          "Access Auditing: Monitor session locations via MaxMind GeoIP and trigger optional sign-in notification emails.",
          "Project Visibility: Share projects with Public, Private, or Password-Protected visibility states."
        ]
      }
    ],
    src: `${BASE_PATH}/dokit/Home.png`,
    screenshots: [
      `${BASE_PATH}/dokit/Home.png`,
      `${BASE_PATH}/dokit/Editor.png`,
      `${BASE_PATH}/dokit/Dashboard.png`,
      `${BASE_PATH}/dokit/ASTra.png`,
      `${BASE_PATH}/dokit/Profile.png`,
      `${BASE_PATH}/dokit/Codelink.png`
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.codemirror,
        PROJECT_SKILLS.yjs,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.bullmq,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.nginx,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.ollama,
      ],
    },
    live: "https://dokit-ide.vercel.app",
    github: "https://github.com/Om005/Dokit",
  },
  {
    id: "ingenium",
    category: "AI Coding Agent",
    title: "Ingenium",
    description: "An intelligent local developer AI assistant and autonomous coding companion running on CLI and Telegram, enabling remote codebase orchestration and secure approvals.",
    overview: "Ingenium acts as a local agentic coding companion that interacts with your project directory. It offers two distinct operational CLI modes (Agent Mode and Plan Mode) as well as a fully modular Telegram Bot interface for remote execution and approvals.",
    features: [
      {
        title: "Agent Mode",
        points: [
          "Autonomous task execution: The agent evaluates goals and stages actions (file creations, modifications, shell executions) that require manual approval before being applied to the project."
        ]
      },
      {
        title: "Plan Mode",
        points: [
          "Sequential proposal and review: The agent drafts a step-by-step implementation plan in ingenium-plan.md in the workspace root. The developer can review, manually modify the file, or request changes, then run /execute to run the plan step-by-step."
        ]
      },
      {
        title: "Telegram Bot Mode",
        points: [
          "Command and manage your assistant remotely: Includes full session loading/switching, inline visual file diff displays, approval callbacks, mode control, and token analytics in a professional interface."
        ]
      },
      {
        title: "Developer-Centric Tooling",
        points: [
          {
            text: "Equipped with built-in tools for:",
            subpoints: [
              "File System: Create, modify, delete, and view codebase files.",
              "Git: Check repository status, diffs, log histories, and stage commits.",
              "Shell & Processes: Safely run local shell commands.",
              "Web Integration: Search via Tavily and fetch web pages/documentation.",
              "Reminders: Schedule reminders with background notifications.",
              "Skills: Dynamically load specialized development skills."
            ]
          }
        ]
      },
      {
        title: "Privacy & Transient Sessions",
        points: [
          "Supports a temporary session mode (/temporary) where conversation logs and prompt histories are not persisted to disk."
        ]
      },
      {
        title: "Token Analytics",
        points: [
          "Detailed logs of Prompt, Completion, and Total Token usage on a per-session and global lifetime basis."
        ]
      }
    ],
    src: `${BASE_PATH}/ingenium/Banner.png`,
    screenshots: [
      `${BASE_PATH}/ingenium/Banner.png`,
      `${BASE_PATH}/ingenium/telegram1.png`,
      `${BASE_PATH}/ingenium/telegram2.png`,
      `${BASE_PATH}/ingenium/diff.png`,
      `${BASE_PATH}/ingenium/sessions.png`,
      `${BASE_PATH}/ingenium/todo.png`,
      `${BASE_PATH}/ingenium/what_it_can_do.png`
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.telegram,
      ],
      backend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.openrouter,
      ],
    },
    github: "https://github.com/Om005/Ingenium",
  },
  {
    id: "paynest",
    category: "P2P Payment App",
    title: "PayNest",
    description: "A secure peer-to-peer payment platform integrating the Razorpay SDK, NextAuth, and automated transaction analytics.",
    overview: "PayNest is a modern and secure online payment platform built with Next.js. It allows users to sign in with Google, activate their account by adding Razorpay credentials, and send money to other users. The app features smart contact management, a detailed transaction history, and search capabilities for messages, names, and emails.",
    features: [
      {
        title: "Authentication & Activation",
        points: [
          "Sign in using Google via NextAuth.",
          "Add Razorpay credentials to activate account.",
          "Only active accounts can receive payments."
        ]
      },
      {
        title: "Payment System",
        points: [
          "Search any active user and send them money.",
          "Attach messages with money.",
          "Transactions are visible to both sender and receiver."
        ]
      },
      {
        title: "Contacts",
        points: [
          "Add any user to your contact list.",
          "Special section for contacts with whom you transacted in past 2 days."
        ]
      },
      {
        title: "User Profile",
        points: [
          "View your name, email.",
          "See total money sent, money received.",
          "Count of total successful transactions."
        ]
      },
      {
        title: "Transaction History",
        points: [
          "View all transactions: sent, received, successful, failed.",
          {
            text: "Search by:",
            subpoints: [
              "Other user’s name",
              "Email",
              "Message text"
            ]
          },
          {
            text: "Filter by:",
            subpoints: [
              "Sent",
              "Received"
            ]
          }
        ]
      }
    ],
    src: `${BASE_PATH}/paynest/Home.png`,
    screenshots: [
      `${BASE_PATH}/paynest/Home.png`,
      `${BASE_PATH}/paynest/Pay1.png`,
      `${BASE_PATH}/paynest/Pay2.png`,
      `${BASE_PATH}/paynest/Creds.png`,
      `${BASE_PATH}/paynest/Yourcontacts.png`,
      `${BASE_PATH}/paynest/All.png`,
      `${BASE_PATH}/paynest/Profile.png`,
      `${BASE_PATH}/paynest/Signin.png`
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.radix,
      ],
      backend: [
        PROJECT_SKILLS.nextauth,
        PROJECT_SKILLS.razorpay,
        PROJECT_SKILLS.mongo,
      ],
    },
    github: "https://github.com/Om005/paynest",
  },
  {
    // id: "mini-projects",
    id: "mini-projects",
    category: "Web Utilities & Scripts",
    title: "Mini Projects",
    description: "A curated collection of small utility applications, layout clones, algorithmic scripts, and web UI experiments built to learn and master diverse technologies.",
    overview: "A curated set of small projects and experiments created while learning HTML, CSS, JavaScript, Tailwind, Python, React, Node.js, and Rust. It also includes a few academic or practice code pieces.",
    features: [
      {
        title: "Curated Experiments & Clones",
        points: [
          "Aura: Full-stack auth app with Next.js client and Node.js server.",
          "Desktop-Assistance: Python desktop helper scripts.",
          "First-animated-web: Simple animated web page.",
          "Layers-clone: UI layout clone.",
          "LDPC-Codes: MATLAB scripts and resources for LDPC 5G-NR coding.",
          "Learning-Rust: Rust learning exercises and examples.",
          "Music-Player: Web-based local music player.",
          "Netflix-Clone: Frontend UI clone.",
          "Password-Manager: Vite-based React app with backend.",
          "Terminal: Terminal-style web UI and experiments.",
          "Todo-List: Vite-based React todo app.",
          "Track_version_control: Basic Rust based version controll system.",
          "Winter_Of_Code_1: Python practice problems and exercises.",
          "Winter_Of_Code_2: Basic web IDE where user can run and share their programming laguage codes."
        ]
      },
      {
        title: "Outcomes",
        points: [
          "Solidified key programming and UI skills, providing a hands-on approach to learning.",
          "Showcases my journey in web development and algorithmic programming."
        ]
      }
    ],
    src: `${BASE_PATH}/mini-projects.png`,
    screenshots: [
      `${BASE_PATH}/mini-projects.png`
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.htmlcss,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.gsap,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.rust,
      ],
    },
    github: "https://github.com/Om005/Mini-Projects",
  },
];

export default projects;
