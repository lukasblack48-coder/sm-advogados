"use client";

import { useCallback, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ShinyTextProps = {
  text?: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  delay?: number;
  overlay?: boolean;
};

export default function ShinyText({
  text = "",
  disabled = false,
  speed = 2,
  className = "",
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = "left",
  delay = 0,
  overlay = false,
}: ShinyTextProps) {
  const [paused, setPaused] = useState(false);
  const duration = `${speed}s`;
  const animation = disabled || paused ? "none" : `shiny-sweep ${duration} linear infinite`;

  const style: CSSProperties = overlay
    ? {
        backgroundImage: `linear-gradient(${spread}deg, transparent 0%, transparent 35%, ${shineColor} 50%, transparent 65%, transparent 100%)`,
        backgroundSize: "220% auto",
        animation,
        animationDirection: direction === "left" ? "normal" : "reverse",
        animationDelay: `${delay}s`,
        animationIterationCount: yoyo ? "infinite" : undefined,
      }
    : {
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "220% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        animation,
        animationDirection: direction === "left" ? "normal" : "reverse",
        animationDelay: `${delay}s`,
      };

  const onEnter = useCallback(() => {
    if (pauseOnHover) setPaused(true);
  }, [pauseOnHover]);
  const onLeave = useCallback(() => {
    if (pauseOnHover) setPaused(false);
  }, [pauseOnHover]);

  if (overlay) {
    if (disabled) return null;
    return (
      <span
        aria-hidden
        className={cn("pointer-events-none absolute inset-0", className)}
        style={style}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      />
    );
  }

  return (
    <span
      className={cn("inline-block", className)}
      style={style}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {text}
    </span>
  );
}
