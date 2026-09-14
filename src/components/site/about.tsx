"use client";

import CircularGallery from "./circular-gallery";

const processGallery = [
  { image: "/process/01.jpg", text: "01  Conversa inicial" },
  { image: "/process/02.jpg", text: "02  Analise" },
  { image: "/process/03.jpg", text: "03  Honorarios" },
  { image: "/process/04.jpg", text: "04  Acompanhamento" },
];

export function About() {
  return (
    <section id="escritorio" className="border-t border-border">
      <div className="relative overflow-hidden">
        <img
          src="/bg-office.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/55" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">O escritório</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl text-fg sm:text-5xl">
            Banca local. Desde 2015.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-fg">
            Eudson Rosa da Silva e Raul Antunes Macedo. Atendimento no Centro de Primavera do
            Leste.
          </p>
        </div>
      </div>

      <div className="relative h-[600px] bg-ink">
        <CircularGallery
          items={processGallery}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          font="bold 30px Orbitron"
          scrollSpeed={2}
        />
      </div>
    </section>
  );
}
