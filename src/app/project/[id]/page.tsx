"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import projects from "@/data/projects";
import { FloatingDock } from "@/components/ui/floating-dock";
import AnimatedBackground from "@/components/animated-background";
import SmoothScroll from "@/components/smooth-scroll";
import SlideShow from "@/components/slide-show";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  // Regex formatter to render markdown bold and inline code blocks correctly
  const formatPointText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground font-semibold'>$1</strong>")
      .replace(/`(.*?)`/g, "<code class='bg-secondary/60 dark:bg-black/30 border border-border/40 px-1.5 py-0.5 rounded font-mono text-xs text-foreground/95'>$1</code>");
  };

  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className="min-h-screen bg-slate-100 dark:bg-transparent pb-32 relative z-10">
        {/* Back navigation - shifted down to pt-28 to prevent fixed header overlap */}
        <div className="max-w-4xl mx-auto px-6 pt-28 pb-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors cursor-can-hover"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Title Area */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-mono font-semibold">
              {project.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Carousel container (showing all screenshots together) */}
          <div className="w-full">
            <SlideShow images={project.screenshots} />
          </div>

          {/* Tech Stack Area */}
          <div className="border-t border-b border-border/40 py-12 space-y-10">
            {project.skills.frontend?.length > 0 && (
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-mono font-bold">
                  Frontend Tech Stack
                </span>
                <div className="flex justify-start">
                  <FloatingDock items={project.skills.frontend} />
                </div>
              </div>
            )}
            {project.skills.backend?.length > 0 && (
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-mono font-bold">
                  Backend Tech Stack
                </span>
                <div className="flex justify-start">
                  <FloatingDock items={project.skills.backend} />
                </div>
              </div>
            )}
          </div>

          {/* Section: Content Area from Overview Onwards */}
          <div className="space-y-12">
            {/* Avatar & Author Metadata row */}
            {/* <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border/50">
                <img
                  src="/assets/me.jpg"
                  alt="Om Chavda"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80";
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                June 30, 2026
              </span>
            </div> */}

            {/* Custom Project Subheading */}
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              {project.title}: {project.category}
            </h2>

            {/* Overview */}
            <section className="space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                Overview
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-sans">
                {project.overview}
              </p>
            </section>

            {/* Key Features */}
            <section className="space-y-6">
              <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                Key Features
              </h3>
              <div className="space-y-10">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="space-y-3.5">
                    <h4 className="font-display text-base md:text-lg font-bold text-foreground">
                      {feature.title}
                    </h4>
                    <ul className="space-y-4 pl-1">
                      {feature.points.map((point, pIdx) => {
                        if (typeof point === "string") {
                          return (
                            <li
                              key={pIdx}
                              className="text-muted-foreground text-sm md:text-base leading-relaxed flex items-start gap-3.5"
                            >
                              {/* Solid purple square dot */}
                              <span className="w-1.5 h-1.5 bg-primary rounded-[1px] flex-shrink-0 mt-2.5" />
                              <span
                                className="flex-1"
                                dangerouslySetInnerHTML={{ __html: formatPointText(point) }}
                              />
                            </li>
                          );
                        } else {
                          return (
                            <li
                              key={pIdx}
                              className="text-muted-foreground text-sm md:text-base leading-relaxed flex flex-col gap-3.5"
                            >
                              <div className="flex items-start gap-3.5">
                                {/* Solid purple square dot */}
                                <span className="w-1.5 h-1.5 bg-primary rounded-[1px] flex-shrink-0 mt-2.5" />
                                <span
                                  className="flex-1"
                                  dangerouslySetInnerHTML={{ __html: formatPointText(point.text) }}
                                />
                              </div>
                              <ul className="space-y-3.5 pl-8">
                                {point.subpoints.map((sub, sIdx) => (
                                  <li
                                    key={sIdx}
                                    className="text-muted-foreground/80 text-sm md:text-base leading-relaxed flex items-start gap-3.5"
                                  >
                                    {/* Hollow purple circle dot */}
                                    <span className="w-1.5 h-1.5 border-[1.5px] border-primary rounded-full bg-transparent flex-shrink-0 mt-2.5" />
                                    <span
                                      className="flex-1"
                                      dangerouslySetInnerHTML={{ __html: formatPointText(sub) }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Resources Section at the bottom */}
            <section className="space-y-6 border-t border-border/40 pt-16">
              <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
                Resources
              </h3>
              <ul className="space-y-4 pl-1">
                {project.github && project.github !== "#" && (
                  <li className="text-muted-foreground text-sm md:text-base leading-relaxed flex items-center gap-3.5">
                    {/* Solid purple square dot */}
                    <span className="w-1.5 h-1.5 bg-primary rounded-[1px] flex-shrink-0" />
                    <Link
                      href={project.github}
                      target="_blank"
                      className="hover:underline flex items-center gap-1.5 font-sans text-foreground/90 font-medium cursor-can-hover"
                    >
                      GitHub Repository
                      <ArrowUpRight className="w-4 h-4 opacity-60" />
                    </Link>
                  </li>
                )}
                {project.live && project.live !== "#" && (
                  <li className="text-muted-foreground text-sm md:text-base leading-relaxed flex items-center gap-3.5">
                    {/* Solid purple square dot */}
                    <span className="w-1.5 h-1.5 bg-primary rounded-[1px] flex-shrink-0" />
                    <Link
                      href={project.live}
                      target="_blank"
                      className="hover:underline flex items-center gap-1.5 font-sans text-foreground/90 font-medium cursor-can-hover"
                    >
                      Live Website
                      <ArrowUpRight className="w-4 h-4 opacity-60" />
                    </Link>
                  </li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
