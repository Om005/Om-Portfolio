"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-5xl mx-auto py-20 px-4">
      <SectionHeader id="projects" title="Projects" desc="Selected work and case studies." className="mb-20" />
      <div className="flex flex-col gap-28 md:gap-36 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group flex flex-col w-full">
      {/* Large Preview Image Container (Links directly to project page) */}
      <Link href={`/project/${project.id}`} className="block w-full pointer-events-auto">
        <div
          className="relative w-full overflow-hidden rounded-[20px] border border-border/40 bg-secondary/5 shadow-md hover:shadow-lg transition-all duration-500 cursor-can-hover"
          style={{ aspectRatio: "16/9" }}
        >
          <ScrollingPreview
            src={project.src}
            alt={project.title}
            bg={`/assets/backgrounds/${project.id}.jpg`}
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
        {/* Custom Indicator Line matching the design */}
        <div className="w-full h-[2px] bg-border/20 mt-6 overflow-hidden rounded-full">
          <div className="w-1/4 h-full bg-foreground/60 group-hover:w-full transition-all duration-700 ease-out" />
        </div>
      </Link>

      {/* Details section below image */}
      <div className="grid bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-8">
        {/* Left Column: Title and Category */}
        <div className="col-span-1 flex flex-col justify-start">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight">
            {project.title}: <br className="hidden md:block" /> {project.category}
          </h3>
        </div>

        {/* Right Column: Avatar, Description, Links */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            {/* Avatar and Creator tag */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/github-profile.jpeg"
                  alt="Om Chavda"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                Developed by Om Chavda
              </span>
            </div>

            {/* Description */}
            <p className="text-textcolor text-base leading-relaxed mb-6 font-sans">
              {project.description}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-mono mt-auto">
            <Link
              href={`/project/${project.id}`}
              className="font-bold text-foreground/80 hover:text-foreground flex items-center gap-1.5 transition-colors cursor-can-hover"
            >
              Read case study <span className="text-base">→</span>
            </Link>

            {project.live && project.live !== "#" && (
              <Link
                href={project.live}
                target="_blank"
                className="font-bold text-foreground/80 hover:text-foreground flex items-center gap-1 transition-colors cursor-can-hover"
              >
                View project <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}

            {project.github && project.github !== "#" && (
              <Link
                href={project.github}
                target="_blank"
                className="font-bold text-foreground/80 hover:text-foreground flex items-center gap-1 transition-colors cursor-can-hover"
              >
                Source code <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
