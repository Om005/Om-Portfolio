"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces,  } from "react-icons/si";
import { FileText, Mail } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
  {
    name: "Email",
    href: `mailto:${config.email}`,
    icon: <Mail size={"24"} color={"#fff"} />,
  },
  {
    name: "Resume",
    href: config.resume,
    icon: <FileText size={"24"} color={"#fff"} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex">
      {show &&
        BUTTONS.map((button) => (
          <>
          <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={button.href} key={button.name} target="_blank">
                        <Button
                          variant={"ghost"}
                          className="block w-full overflow-hidden"
                        >
                          {button.icon}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>
                      {button.name}
                      </p>
                    </TooltipContent>
                  </Tooltip>
          {/* <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link> */}
          </>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
