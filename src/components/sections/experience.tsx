"use client";

import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import Link from "next/link";
import { config } from "@/data/config";
import { ArrowUpRight } from "lucide-react";

type Platform = {
  name: string;
  handle: string;
  href: string;
  rating: number | null;
  level: string;
  solved: number | null;
  color: string;
  accentColor: string;
  icon: React.ReactNode;
  achievements: string[];
};

const PLATFORMS: Platform[] = [
  {
    name: "LeetCode",
    handle: "chavdaom84",
    href: config.social.leetcode,
    rating: 2039,
    level: "Knight",
    solved: 1124,
    color: "#FFA116",
    accentColor: "rgba(255,161,22,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    achievements: [
      "Global Rank 716 in Biweekly Contest 151 out of 29K+ participants",
      "1100+ problems solved across all difficulty levels",
      "Peak rating of 2039 in the top ~2% globally",
    ],
  },
  {
    name: "Codeforces",
    handle: "Om_007",
    href: config.social.codeforces,
    rating: 1438,
    level: "Specialist",
    solved: 947,
    color: "#1F8ACB",
    accentColor: "rgba(31,138,203,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.673 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
    achievements: [
      "427th Rank in ICPC 2025 Amritapuri Regional Preliminary Round",
      "940+ problems solved with consistent problem-solving streak",
      "Specialist rating (top ~15% of all CF users)",
    ],
  },
  {
    name: "CodeChef",
    handle: "chavdaom84",
    href: config.social.codechef,
    rating: null,
    level: "3★",
    solved: null,
    color: "#5B4638",
    accentColor: "rgba(91,70,56,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M11.257.004C5.27.004.41 5.038.41 11.228c0 6.19 4.86 11.224 10.847 11.224 1.999 0 3.873-.56 5.475-1.534l-2.197-2.197a7.87 7.87 0 0 1-3.278.72c-4.347 0-7.871-3.634-7.871-8.113 0-4.48 3.524-8.114 7.87-8.114 4.348 0 7.872 3.634 7.872 8.114a8.2 8.2 0 0 1-.47 2.778l2.201 2.2A11.267 11.267 0 0 0 21.705 11.23C21.705 5.038 16.845.004 10.858.004h.399zM9.124 7.657v3.34l-2.878 2.878-1.17-1.17 2.049-2.049V7.657h2zm4.492 0v3.34l2.049 2.049-1.17 1.17-2.878-2.878V7.657h2z" />
      </svg>
    ),
    achievements: [
      "Global Rank 108 in CodeChef Starters 174 Div.3",
      "Consistent 3-star rated competitive coder",
    ],
  },
];

const CPStatsSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Competitive Programming"
          desc="Problems solved. Ratings earned. Skills sharpened."
          className="mb-12 md:mb-20 mt-0"
        />

        {/* Total problems banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-14 flex items-center justify-center gap-10 flex-wrap"
        >
          {[
            { label: "Total Problems Solved", value: "2100+" },
            { label: "Peak LeetCode Rating", value: "2039" },
            { label: "Peak CF Rating", value: "1438" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Thin divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* Platform rows */}
        <div className="flex flex-col gap-14 relative">
          {/* Vertical connector */}
          <div className="absolute left-[18px] md:left-[22px] top-6 bottom-6 w-px bg-border" />

          {PLATFORMS.map((platform, index) => (
            <PlatformRow key={platform.name} platform={platform} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const PlatformRow = ({
  platform,
  index,
}: {
  platform: Platform;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex gap-6 bg-[var(--bgcolor)] backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg md:gap-10 relative"
    >
      {/* Dot on connector line */}
      <div className="flex-shrink-0 flex flex-col items-center mt-1">
        <div
          className="w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-border shadow-sm z-10 bg-background"
          style={{ color: platform.color }}
        >
          {platform.icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        {/* Header row */}
        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
          <div>
            <Link
              href={platform.href}
              target="_blank"
              className="group flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="font-display font-bold text-xl md:text-2xl text-foreground">
                {platform.name}
              </span>
              <span className="text-xs flex gap-1 items-center text-textcolor font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                @{platform.handle} <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {platform.rating && (
              <span
                className="text-sm font-mono font-semibold px-3 py-0.5 rounded-full border"
                style={{
                  color: platform.color,
                  borderColor: platform.color + "40",
                  backgroundColor: platform.accentColor,
                }}
              >
                {platform.rating} rating
              </span>
            )}
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-0.5 rounded-full border"
              style={{
                color: platform.color,
                borderColor: platform.color + "40",
                backgroundColor: platform.accentColor,
              }}
            >
              {platform.level}
            </span>
          </div>
        </div>

        {/* Stats row */}
        {platform.solved && (
          <p className="text-muted-foreground text-sm mb-4 font-mono">
            <span className="font-semibold text-foreground">{platform.solved}+</span>{" "}
            problems solved
          </p>
        )}

        {/* Achievements list */}
        <ul className="space-y-2">
          {platform.achievements.map((ach, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-textcolor leading-relaxed"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: platform.color }}
              />
              {ach}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default CPStatsSection;
