"use client";

import { useEffect, useState } from "react";
import { firm } from "@/lib/firm";

export function OfficeStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Cuiaba",
        weekday: "short",
        hour: "numeric",
        hourCycle: "h23",
      }).formatToParts(now);
      const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
      const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
      const weekdayOpen = !["Sat", "Sun"].includes(weekday);
      setOpen(weekdayOpen && hour >= firm.hours.open && hour < firm.hours.close);
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={
        open
          ? "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary"
          : "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted"
      }
    >
      <span className={open ? "size-1.5 rounded-full bg-primary" : "size-1.5 rounded-full bg-muted"} />
      {open ? "Expediente agora" : "Fora do expediente — deixe recado"}
    </span>
  );
}
