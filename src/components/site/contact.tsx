"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { firm } from "@/lib/firm";
import { OfficeStatus } from "./office-status";

const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(firm.mapsQuery)}&z=16&output=embed`;

export function Contact() {
  return (
    <section id="contato" className="border-t border-border bg-bg py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Contato</p>
          <h2 className="mt-3 font-serif text-4xl text-fg">Onde estamos</h2>
          <div className="mt-4">
            <OfficeStatus />
          </div>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-muted">{firm.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a className="text-fg hover:text-primary" href={firm.phoneHref}>
                {firm.phone}
              </a>
              <span className="text-muted">·</span>
              <a className="text-fg hover:text-primary" href={firm.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a className="text-fg hover:text-primary" href={firm.emailHref}>
                {firm.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="min-h-72 overflow-hidden border border-border">
          <iframe
            title="Mapa do escritório"
            src={mapsSrc}
            className="size-full min-h-72 grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
