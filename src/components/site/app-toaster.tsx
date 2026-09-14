"use client";

import { Toaster } from "sonner";

export function AppToaster() {
  return (
    <Toaster
      theme="light"
      toastOptions={{
        className: "bg-elevated text-fg border-border",
      }}
    />
  );
}
