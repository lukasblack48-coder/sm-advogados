"use client";

import * as React from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoMark } from "@/components/site/logo";
import { firm } from "@/lib/firm";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Atuação", href: "/#atuacao" },
  { label: "O escritório", href: "/#escritorio" },
  { label: "Triagem", href: "/#triagem" },
  { label: "Contato", href: "/#contato" },
];

function GlassPill({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border border-white/25",
        "bg-ink/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_30px_rgba(0,0,0,0.28)]",
        "backdrop-blur-xl",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 top-0 h-1/2 rounded-full bg-linear-to-b from-white/35 to-transparent"
      />
      {children}
    </div>
  );
}

export default function Header17() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <div className="group pointer-events-auto relative">
        <GlassPill>
          <nav className="relative z-10 flex items-center gap-1 px-1.5 py-1.5">
            <a
              href="/"
              className="grid size-10 shrink-0 place-items-center rounded-full text-on-ink"
              aria-label="Silva e Macedo"
            >
              <LogoMark className="size-7" />
            </a>

            <div className="hidden grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-cols-[1fr] group-focus-within:grid-cols-[1fr] md:grid">
              <div className="flex min-w-0 items-center overflow-hidden">
                <div className="flex items-center gap-0.5 pr-1 opacity-0 transition-opacity delay-75 duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-on-ink-muted transition-colors hover:bg-white/10 hover:text-on-ink"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href={firm.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-primary px-3 py-2 text-sm text-primary-fg hover:bg-primary-hover"
                  >
                    WhatsApp
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Abrir menu"
                  className="grid size-10 place-items-center rounded-full text-on-ink md:hidden"
                >
                  <Menu className="size-4" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-72 flex-col p-6">
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle>
                    <a
                      href="/"
                      className="flex items-center gap-2 font-semibold tracking-tight text-fg"
                      onClick={() => setOpen(false)}
                    >
                      <LogoMark className="size-7" />
                      Silva e Macedo
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-elevated"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 border-t border-border pt-6">
                  <Button asChild className="w-full rounded-full">
                    <a href={firm.whatsappHref} target="_blank" rel="noreferrer">
                      WhatsApp <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </GlassPill>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-full mt-1 h-12 origin-top scale-y-[-1] opacity-35 blur-[0.4px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        >
          <GlassPill className="h-full" />
        </div>
      </div>
    </header>
  );
}
