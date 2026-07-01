"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FunnyThemeToggle({
  className,
}: {
  className?: string;
}) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = async (event: React.MouseEvent) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // @ts-ignore
    if (!document.startViewTransition || !event) {
      setTheme(newTheme);
      return;
    }

    const { top, left, width, height } = (
      event.currentTarget as HTMLElement
    ).getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("border-none bg-transparent flex items-center justify-center relative cursor-can-hover", className)}
      onClick={toggleTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 pointer-events-none" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 pointer-events-none" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
