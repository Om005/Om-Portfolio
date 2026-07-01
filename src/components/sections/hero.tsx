import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none text-transparent text-slate-800 text-left",
                          "font-bold text-7xl md:text-7xl lg:text-8xl xl:text-8xl",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-medium text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Backend Engineer &amp; Full Stack Developer
                  </p>
                </BlurIn>
                <BlurIn delay={1.4}>
                  <p
                    className={cn(
                      "md:self-start mt-1 font-medium text-sm text-slate-400 dark:text-zinc-500",
                      "cursor-default"
                    )}
                  >
                    I build scalable, real-time web applications from concept to production using React, Next.js, Node.js, and modern AI tools. I focus on clean architecture, great user experiences, and practical problem-solving, backed by 2,100+ coding challenges solved.
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href={"/resume"}
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"/about"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          About Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>
                      Learn more about me
                      </p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
<Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                      </TooltipTrigger>
                       <TooltipContent side="bottom">
                      <p>
                      GitHub
                      </p>
                    </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
<Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>
                          LinkedIn
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
