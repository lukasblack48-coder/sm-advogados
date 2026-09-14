import { Link } from "@tanstack/react-router";
import { firm } from "@/lib/firm";
import { legalNav } from "@/lib/legal";
import { LogoMark } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="size-8" />
          <div>
            <p className="font-serif text-sm text-fg">{firm.shortName}</p>
            <p className="text-xs text-muted">
              {firm.city}/{firm.state}
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted" aria-label="Documentos legais">
          {legalNav.map((item) => (
            <Link key={item.href} to="/legal" hash={item.href.split("#")[1]} className="hover:text-fg">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
