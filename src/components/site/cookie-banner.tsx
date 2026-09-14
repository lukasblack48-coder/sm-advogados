"use client";

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const KEY = "sm-lgpd-v1";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(KEY) !== "1");
    } catch {
      setOpen(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de privacidade"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-elevated/95 p-4 shadow-lg backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          Usamos armazenamento local só para o formulário e para lembrar este aviso. Não há cookies
          de propaganda. Leia a{" "}
          <Link to="/legal" hash="privacidade" className="text-fg underline underline-offset-2">
            política de privacidade
          </Link>{" "}
          e os{" "}
          <Link to="/legal" hash="cookies" className="text-fg underline underline-offset-2">
            cookies
          </Link>
          .
        </p>
        <Button type="button" className="shrink-0 rounded-full" onClick={accept}>
          Aceitar
        </Button>
      </div>
    </div>
  );
}
