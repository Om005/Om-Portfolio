"use client";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
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
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "dokit",
    category: "Cloud-Native IDE",
    title: "Dokit",
    src: `${BASE_PATH}/dokit/Home.png`,
    screenshots: ["Home.png", "Editor.png", "Dashboard.png"],
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A cloud-native collaborative development platform — isolated Linux
            containers, real-time multiplayer coding, and a codebase-aware AI
            assistant in the browser.
          </TypographyP>
          <TypographyP className="font-mono">
            Dokit provisions on-demand isolated Linux workspace containers via the
            Docker Engine API, bringing cloud convenience to local development.
            Teams can code concurrently on the same codebase with Yjs CRDT-based
            multiplayer editing, import GitHub repos, spin up templates, and share
            live preview links instantly — all secured with TOTP 2FA, JWT rotation,
            and Redis rate limiting.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            On-Demand Linux Containers & Real-Time Collaboration
          </TypographyH3>
          <p className="font-mono mb-2">
            Dynamic provisioning of isolated Docker containers running restricted
            non-root <code>dokituser</code> environments under{" "}
            <code>gosu</code>. Multiplayer code editing powered by Yjs CRDTs and
            CodeMirror 6, with live cursor tracking over WebSockets. Bidirectional
            filesystem sync using Linux <code>inotify</code> + Socket.IO, with
            BullMQ background jobs persisting workspace changes to Cloudflare R2 for
            seamless recovery on container restarts. Fine-grained RBAC enforces
            read/write access per project collaborator.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dokit/Editor.png`,
              `${BASE_PATH}/dokit/Dashboard.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            ASTra — Project-Aware RAG AI Assistant
          </TypographyH3>
          <p className="font-mono mb-2">
            A retrieval-augmented generation system that searches and explains
            codebases contextually using local Ollama embeddings (
            <code>nomic-embed-text</code>) and pgvector similarity search. Multi-language
            AST parsing chunks codebases intelligently across JS, TS, Python, Go,
            Rust, and C/C++. Maximal Marginal Relevance (MMR) re-ranking surfaces
            diverse, relevant context. Multi-turn developer chat history with
            automated summarization.
          </p>
          <SlideShow images={[`${BASE_PATH}/dokit/ASTra.png`]} />

          <TypographyH3 className="my-4 mt-8">
            Hardened Security & Dynamic Routing
          </TypographyH3>
          <p className="font-mono mb-2">
            TOTP 2FA with AES-encrypted secrets and backup codes. Short-lived JWT
            access tokens with secure rotation and instant remote session revocation.
            MaxMind GeoIP session auditing, Redis sliding-window rate limiting, and
            Zod schema validation. Wildcard Nginx subdomain routing (
            <code>[port]-[projectId].dokit.backends.live</code>) proxies HTTP
            preview traffic to running dev servers instantly. Deployed on AWS EC2 with
            a 3-version rolling strategy and automatic rollback.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dokit/Profile.png`,
              `${BASE_PATH}/dokit/Codelink.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "ingenium",
    category: "AI Coding Agent",
    title: "Ingenium",
    src: `${BASE_PATH}/ingenium/Banner.png`,
    screenshots: ["Banner.png", "telegram.jpeg", "diff.png"],
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An autonomous local AI coding partner — agentic file edits, staged
            approvals, and remote control via Telegram.
          </TypographyP>
          <TypographyP className="font-mono">
            Ingenium is an intelligent local developer assistant that runs in the
            CLI and Telegram, enabling remote codebase orchestration with secure
            manual authorization. It offers two distinct operational modes plus a
            fully modular Telegram Bot interface for managing sessions, viewing diffs,
            and approving or rejecting changes from anywhere.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Agent Mode & Plan Mode
          </TypographyH3>
          <p className="font-mono mb-2">
            <strong>Agent Mode</strong>: Autonomous task execution where the agent
            stages actions (file creations, modifications, shell scripts) requiring
            inline manual authorization before applying to the project.{" "}
            <strong>Plan Mode</strong>: Drafts a structured step-by-step
            implementation plan in <code>ingenium-plan.md</code> at the workspace
            root — developers review, edit, and execute the plan step-by-step via{" "}
            <code>/execute</code>. Both modes include built-in developer tools for
            filesystem ops, git, shell commands, Tavily web search, cron reminders,
            and token analytics.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ingenium/what_it_can_do.png`,
              `${BASE_PATH}/ingenium/sessions.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Telegram Bot — Remote Control & Visual Diffs
          </TypographyH3>
          <p className="font-mono mb-2">
            The Telegram Bot mode exposes full session management, inline visual file
            diff displays, approval/rejection callbacks, mode control, and token
            analytics in a professional interface. Any staged tool execution —
            whether a file edit or shell command — presents inline keyboard buttons
            (Approve / Reject / View Diff) before the change is applied. A{" "}
            <code>/temporary</code> mode disables log and chat history persistence to
            disk for privacy-sensitive sessions.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ingenium/telegram.jpeg`,
              `${BASE_PATH}/ingenium/diff.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Architecture & Persistence
          </TypographyH3>
          <p className="font-mono mb-2">
            Modular architecture: CLI + Telegram interfaces, staged tool framework
            with runtime executors, SQLite (Drizzle ORM) for persistent session logs,
            and a utilities layer for token counting, cron reminder scheduling, and
            settings management. Powered by OpenRouter with configurable model
            selection (defaults to Gemini 2.5 Pro) and Tavily for live web search.
          </p>
          <SlideShow images={[`${BASE_PATH}/ingenium/todo.png`]} />
        </div>
      );
    },
  },
  {
    id: "paynest",
    category: "P2P Payment App",
    title: "PayNest",
    src: `${BASE_PATH}/paynest/Home.png`,
    screenshots: ["Home.png", "Pay1.png", "Signin.png"],
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A secure peer-to-peer payment platform — Razorpay-integrated, Google
            OAuth, smart contacts, and rich transaction analytics.
          </TypographyP>
          <TypographyP className="font-mono">
            PayNest is a modern online payment platform built with Next.js 15. Users
            sign in with Google via NextAuth, activate their account by adding
            encrypted Razorpay credentials, and can send money to other active users
            with custom transaction notes. Only activated accounts can receive
            payments — ensuring a clean trust boundary.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Secure Payments & P2P Transfers
          </TypographyH3>
          <p className="font-mono mb-2">
            Native Razorpay SDK integration enabling active users to send and receive
            payments. Google OAuth via NextAuth with secure account activation
            requiring encrypted Razorpay credentials before accepting payments.
            Transactions are visible to both sender and receiver with attached message
            notes. Credential encryption ensures no plaintext secrets stored in the
            database.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/paynest/Pay1.png`,
              `${BASE_PATH}/paynest/Pay2.png`,
              `${BASE_PATH}/paynest/Creds.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Smart Contacts & Transaction History
          </TypographyH3>
          <p className="font-mono mb-2">
            Customizable contact lists with a dynamic "Recent" section showing
            contacts who transacted with you in the last 2 days — making frequent
            payments frictionless. Full transaction history with high-speed
            multi-field search (by receiver name, email, or message text) and
            filter by sent/received/successful/failed.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/paynest/Yourcontacts.png`,
              `${BASE_PATH}/paynest/All.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">User Profile & Analytics</TypographyH3>
          <p className="font-mono mb-2">
            A profile dashboard summarizing total money sent, total money received,
            and count of successful transactions — giving users a clear financial
            snapshot. The app is built with Radix UI primitives, Lucide and Tabler
            icons, react-hot-toast for notifications, and Motion for smooth
            animations.
          </p>
          <SlideShow images={[`${BASE_PATH}/paynest/Profile.png`]} />
        </div>
      );
    },
  },
];

export default projects;
