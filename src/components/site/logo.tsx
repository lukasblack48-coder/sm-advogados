"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ShinyText from "./shiny-text";

export function LogoMark({ className }: { className?: string }) {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <span className={cn("relative inline-grid overflow-hidden", className)}>
      <img
        src="/logo-mark.png"
        alt=""
        width={96}
        height={86}
        className="col-start-1 row-start-1 size-full object-contain"
        aria-hidden
      />
      <ShinyText
        overlay
        text=""
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={!atTop}
        className="col-start-1 row-start-1 mix-blend-soft-light opacity-80"
      />
    </span>
  );
}
