"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import FoldText from "./fold-text";
import { LogoMark } from "./logo";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      return;
    }
    void video.play().catch(() => undefined);
  }, []);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const foldTrigger = atTop ? "loop" : "hold";

  return (
    <section id="topo" className="relative isolate min-h-[100svh] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        aria-hidden
      >
        <source src="/hero-office.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/20 via-ink/45 to-bg" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-20 pt-24 text-center">
        <div className="flex flex-col items-center">
          <LogoMark className="mb-8 size-24 sm:size-32" />
          <h1 className="font-display">
            <FoldText
              text={"SILVA E MACEDO\nADVOGADOS ASSOCIADOS"}
              splitBy="char"
              hinge="top"
              trigger={foldTrigger}
              duration={0.65}
              stagger={0.045}
              ease="power3.out"
              perspective={700}
              creaseShading={0.55}
              fontSize="clamp(1.6rem, 5.2vw, 3.4rem)"
              fontWeight={600}
              color="#f0f2f5"
            />
          </h1>
          <div className="mt-8 h-px w-24 bg-primary" />
        </div>
      </div>

      <a
        href="#atuacao"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-on-ink-muted"
      >
        <ArrowDown className="size-4" />
        Rolar
      </a>
    </section>
  );
}
