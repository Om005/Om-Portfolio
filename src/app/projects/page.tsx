"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import AnimatedBackground from "@/components/animated-background";
import ProjectsSection from "@/components/sections/projects";

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      {/* Container matches standard page padding, uses transparent background to ensure 3D canvas is visible */}
      <main className="min-h-screen bg-transparent pb-32 relative z-[2] pt-20 md:pt-28">
        <ProjectsSection />
      </main>
    </SmoothScroll>
  );
}
