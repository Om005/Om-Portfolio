"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import AnimatedBackground from "@/components/animated-background";
import SmoothScroll from "@/components/smooth-scroll";
import { config } from "@/data/config";
import projects from "@/data/projects";

// Platform icons as SVGs
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" style={{ color: "#FFA116" }}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const CodeforcesIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" style={{ color: "#1F8ACB" }}>
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.673 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" style={{ color: "#5B4638" }}>
    <path d="M11.257.004C5.27.004.41 5.038.41 11.228c0 6.19 4.86 11.224 10.847 11.224 1.999 0 3.873-.56 5.475-1.534l-2.197-2.197a7.87 7.87 0 0 1-3.278.72c-4.347 0-7.871-3.634-7.871-8.113 0-4.48 3.524-8.114 7.87-8.114 4.348 0 7.872 3.634 7.872 8.114a8.2 8.2 0 0 1-.47 2.778l2.201 2.2A11.267 11.267 0 0 0 21.705 11.23C21.705 5.038 16.845.004 10.858.004h.399zM9.124 7.657v3.34l-2.878 2.878-1.17-1.17 2.049-2.049V7.657h2zm4.492 0v3.34l2.049 2.049-1.17 1.17-2.878-2.878V7.657h2z" />
  </svg>
);

export default function AboutPage() {
  const [stats, setStats] = React.useState({
    leetcode: { rating: 2039, solved: 1124, rank: "Knight" },
    codeforces: { rating: 1438, solved: 947, rank: "Specialist" },
    codechef: { rating: 1632, solved: 180, rank: "3★" },
  });

  React.useEffect(() => {
    // Fetch Codeforces Stats
    fetch("https://codeforces.com/api/user.info?handles=Om_007")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          const user = data.result[0];
          const formattedRank = user.maxRank 
            ? user.maxRank.charAt(0).toUpperCase() + user.maxRank.slice(1)
            : "Specialist";
          setStats((prev) => ({
            ...prev,
            codeforces: {
              ...prev.codeforces,
              rating: user.maxRating || user.rating || prev.codeforces.rating,
              rank: formattedRank,
            },
          }));
        }
      })
      .catch(() => {});

    // Fetch LeetCode Rating & Badge
    fetch("https://alfa-leetcode-api.onrender.com/chavdaom84/contest")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.contestRating) {
          const ratingVal = Math.round(data.contestRating);
          const badgeVal = (data.contestBadges && data.contestBadges.name) || "Knight";
          setStats((prev) => ({
            ...prev,
            leetcode: {
              ...prev.leetcode,
              rating: ratingVal || prev.leetcode.rating,
              rank: badgeVal || prev.leetcode.rank,
            },
          }));
        }
      })
      .catch(() => {});

    // Fetch LeetCode Solved Count
    fetch("https://alfa-leetcode-api.onrender.com/chavdaom84/solved")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.solvedProblem) {
          setStats((prev) => ({
            ...prev,
            leetcode: {
              ...prev.leetcode,
              solved: data.solvedProblem || prev.leetcode.solved,
            },
          }));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className="min-h-screen bg-slate-100 dark:bg-transparent pb-32 relative z-1 pt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Left Column: Sticky Outline Navigation (Desktop only) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <nav className="flex flex-col gap-4 font-mono text-2xl">
                  <div className="space-y-2">
                    <a
                      href="#about-me"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <span className="w-4 h-[1px] bg-border group-hovertext-sm:w-8 group-hover:bg-primary transition-all duration-300" />
                      About Me
                    </a>
                  </div>
                  
                  <div className="space-y-2">
                    <a
                      href="#education"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <span className="w-4 h-[1px] bg-border group-hover:w-8 group-hover:bg-primary transition-all duration-300" />
                      Education
                    </a>
                    <div className="pl-6 flex flex-col gap-1.5 text-lg text-muted-foreground/75">
                      <a href="#edu-daiict" className="hover:text-foreground transition-colors">
                        — DA-IICT
                      </a>
                      <a href="#edu-school" className="hover:text-foreground transition-colors">
                        — BN Virani School
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="#skills"
                      className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <span className="w-4 h-[1px] bg-border group-hover:w-8 group-hover:bg-primary transition-all duration-300" />
                      Technical Skills
                    </a>
                    <div className="pl-6 flex flex-col gap-1.5 text-lg text-muted-foreground/75">
                      <a href="#dev-skills" className="hover:text-foreground transition-colors">
                        — Dev Skills
                      </a>
                      <a href="#cp-skills" className="hover:text-foreground transition-colors">
                        — Problem Solving
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            {/* Right Column: Scrollable Main Content */}
            <div className="lg:col-span-3 space-y-24">
              
              {/* Profile Header Block */}
              <section id="about-me" className="space-y-8 scroll-mt-28">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Circle Profile Image */}
                  <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-border/80 bg-secondary/15 flex-shrink-0 shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/om.png"
                      alt="Om Chavda"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Header Details */}
                  <div className="space-y-4 text-center md:text-left">
                    <h1 className="font-display text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none">
                      {config.author}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                      Backend Engineer &amp; Full Stack Developer
                    </p>

                    {/* Social Badges Pill Row */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 font-mono text-xs">
                      <Link
                        href={config.social.github}
                        target="_blank"
                        className="flex items-center gap-2 bg-secondary/30 hover:bg-secondary/60 text-foreground border border-border/40 rounded-full px-4 py-2 transition-all cursor-can-hover"
                      >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </Link>
                      <Link
                        href={config.social.linkedin}
                        target="_blank"
                        className="flex items-center gap-2 bg-secondary/30 hover:bg-secondary/60 text-foreground border border-border/40 rounded-full px-4 py-2 transition-all cursor-can-hover"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </Link>
                      <Link
                        href={`mailto:${config.email}`}
                        className="flex items-center gap-2 bg-secondary/30 hover:bg-secondary/60 text-foreground border border-border/40 rounded-full px-4 py-2 transition-all cursor-can-hover"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Email
                      </Link>
                      <Link
                        href={config.resume}
                        target="_blank"
                        className="flex items-center gap-2 bg-secondary/30 hover:bg-secondary/60 text-foreground border border-border/40 rounded-full px-4 py-2 transition-all cursor-can-hover"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Resume
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-muted-foreground text-lg leading-relaxed font-sans max-w-3xl pt-4">
                  I am a passionate software developer with expertise in building real-time collaborative
                  platforms, scalable backend architectures, and secure web applications. My work combines
                  technical system design with clean, user-focused implementations. With over 2100+ coding
                  challenges solved across competitive programming platforms like LeetCode and Codeforces,
                  I bring strong algorithmic thinking, optimization, and deep problem-solving skills to every codebase.
                </p>
              </section>

              {/* Education Block */}
              <section id="education" className="space-y-10 scroll-mt-28 border-t border-border/40 pt-16">
                <h2 className="font-display text-3xl font-black text-foreground tracking-tight">
                  Education
                </h2>
                
                <div className="space-y-8">
                  {/* DA-IICT */}
                  <div id="edu-daiict" className="space-y-2 scroll-mt-28">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed font-sans">
                      B.Tech in Information &amp; Communication Technology with <strong className="text-foreground font-semibold">8.64/10 CGPA</strong>.
                    </p>
                  </div>

                  {/* High School */}
                  <div id="edu-school" className="space-y-2 scroll-mt-28">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      B.N. Virani Higher Secondary School, Bhavnagar
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed font-sans">
                      Completed Class 11/12 with <strong className="text-foreground font-semibold">99.94 percentile in GUJCET</strong>, <strong className="text-foreground font-semibold">99.21 percentile in Gujarat Board HSC</strong>, and <strong className="text-foreground font-semibold">98.81 percentile in JEE Mains</strong>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Technical Skills Block */}
              <section id="skills" className="space-y-12 scroll-mt-28 border-t border-border/40 pt-16">
                <h2 className="font-display text-3xl font-black text-foreground tracking-tight">
                  Technical Skills
                </h2>

                <div className="space-y-12">
                  {/* Development Skills */}
                  <div id="dev-skills" className="space-y-6 scroll-mt-28">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Full Stack Development
                    </h3>
                    <p className="text-textcolor text-base leading-relaxed font-sans max-w-3xl">
                      I specialize in developing modern web applications and highly responsive collaborative tools, building scalable backends, and setting up cloud runtimes.
                    </p>

                    {/* Elaborated Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {[
                        {
                          title: "Languages",
                          skills: ["TypeScript", "JavaScript", "C/C++", "SQL", "Rust", "Python", "HTML/CSS"]
                        },
                        {
                          title: "Backend & Databases",
                          skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM", "SQLite", "Socket.io", "REST APIs"]
                        },
                        {
                          title: "Frontend & UI Design",
                          skills: ["React.js", "Next.js", "Tailwind CSS", "Radix UI", "shadcn/ui"]
                        },
                        {
                          title: "DevOps & Tools",
                          skills: ["Docker", "Nginx", "Amazon AWS (EC2)", "Cloudflare", "Git / GitHub", "Postman", "Vercel", "Render"]
                        }
                      ].map((category) => (
                        <div
                          key={category.title}
                          className="bg-[var(--bgcolor)] backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg rounded-2xl border border-border/40 p-5 md:p-6 space-y-4 hover:border-border/80 transition-colors duration-300"
                        >
                          <h4 className="font-display text-xs font-bold tracking-wider text-muted-foreground uppercase">
                            {category.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                              <span
                                key={skill}
                                className="font-mono text-xs font-medium text-foreground bg-secondary/35 border border-border/50 rounded-lg px-3 py-1"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Project grid display */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      {projects.map((project) => (
                        <Link
                          key={project.id}
                          href={`/project/${project.id}`}
                          className="group relative block aspect-[16/10] overflow-hidden rounded-xl border border-border/40 bg-secondary/5 shadow-md hover:shadow-lg transition-all duration-300 cursor-can-hover"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.src}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
                            <span className="text-white font-bold text-sm tracking-tight flex items-center gap-1">
                              {project.title}
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </span>
                            <span className="text-white/60 text-[10px] uppercase font-mono font-bold tracking-wider">
                              {project.category}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Problem Solving / CP */}
                  <div id="cp-skills" className="space-y-6 scroll-mt-28">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Problem Solving &amp; Competitive Programming
                    </h3>
                    <p className="text-textcolor text-base leading-relaxed font-sans max-w-3xl">
                      My LeetCode profile has an 2038 peak rating and 1100+ problems solved, reflecting strong algorithm and data structure skills. My codeforces profile has a 1438 peak rating and 940+ problems solved reflecting my problem-solving abilities. Totally solved <strong className="text-foreground font-semibold">2100+ coding challenges</strong>.
                    </p>
                    
                    {/* Custom Cards Grid for CP Platforms */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      {/* LeetCode Card */}
                      <Link
                        href={config.social.leetcode}
                        target="_blank"
                        className="bg-[var(--bgcolor)] backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg group flex flex-col justify-between rounded-2xl border border-border/45 hover:bg-secondary/10 hover:border-[#FFA116]/50 shadow-sm transition-all duration-300 p-5 md:p-6 cursor-can-hover"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <LeetCodeIcon />
                              <span className="font-display font-bold text-md text-foreground">LeetCode</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#FFA116] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </div>
                          
                          <div className="space-y-1">
                            <span className="text-xs text-[#FFA116] uppercase tracking-wider font-semibold font-mono">
                              {stats.leetcode.rank}
                            </span>
                            <div className="text-2xl font-display font-black text-foreground">
                              {stats.leetcode.rating} <span className="text-xs font-mono font-normal text-textcolor">rating</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t border-border/40 mt-6 pt-4 text-xs font-mono text-textcolor flex justify-between">
                          <span>Solved</span>
                          <span className="text-foreground font-bold">{stats.leetcode.solved} problems</span>
                        </div>
                      </Link>

                      {/* Codeforces Card */}
                      <Link
                        href={config.social.codeforces}
                        target="_blank"
                        className="bg-[var(--bgcolor)] backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg group flex flex-col justify-between rounded-2xl border border-border/45 hover:bg-secondary/10 hover:border-[#1F8ACB]/50 shadow-sm transition-all duration-300 p-5 md:p-6 cursor-can-hover"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CodeforcesIcon />
                              <span className="font-display font-bold text-md text-foreground">Codeforces</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#1F8ACB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </div>
                          
                          <div className="space-y-1">
                            <span className="text-xs text-[#1F8ACB] uppercase tracking-wider font-semibold font-mono">
                              {stats.codeforces.rank}
                            </span>
                            <div className="text-2xl font-display font-black text-foreground">
                              {stats.codeforces.rating} <span className="text-xs font-mono font-normal text-textcolor">rating</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t border-border/40 mt-6 pt-4 text-xs font-mono text-textcolor flex justify-between">
                          <span>Solved</span>
                          <span className="text-foreground font-bold">{stats.codeforces.solved} problems</span>
                        </div>
                      </Link>

                      {/* CodeChef Card */}
                      <Link
                        href={config.social.codechef}
                        target="_blank"
                        className="bg-[var(--bgcolor)] backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg group flex flex-col justify-between rounded-2xl border border-border/45 hover:bg-secondary/10 hover:border-[#5B4638]/50 shadow-sm transition-all duration-300 p-5 md:p-6 cursor-can-hover"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CodeChefIcon />
                              <span className="font-display font-bold text-md text-foreground">CodeChef</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#5B4638] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </div>
                          
                          <div className="space-y-1">
                            <span className="text-xs text-[#5B4638] uppercase tracking-wider font-semibold font-mono">
                              {stats.codechef.rank}
                            </span>
                            <div className="text-2xl font-display font-black text-foreground">
                              {stats.codechef.rating ? stats.codechef.rating : "3-Star"} <span className="text-xs font-mono font-normal text-textcolor">rating</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t border-border/40 mt-6 pt-4 text-xs font-mono text-textcolor flex justify-between">
                          <span>Solved</span>
                          <span className="text-foreground font-bold">{stats.codechef.solved} problems</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
