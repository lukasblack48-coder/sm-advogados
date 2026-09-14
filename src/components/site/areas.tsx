"use client";

import { practiceAreas, type PracticeAreaId } from "@/lib/firm";
import { useIntake } from "@/store/intake";
import FlowingMenu from "./flowing-menu";

const areaImages: Record<PracticeAreaId, string> = {
  civil: "/areas/civil.jpg",
  credito: "/areas/credito.jpg",
  empresarial: "/areas/empresarial.jpg",
  agrario: "/areas/agrario.jpg",
  trabalhista: "/areas/trabalhista.jpg",
  familia: "/areas/familia.jpg",
};

const demoItems = practiceAreas.map((area) => ({
  id: area.id,
  link: "#triagem",
  text: area.title,
  image: areaImages[area.id],
}));

export function Areas() {
  const setArea = useIntake((s) => s.setArea);

  return (
    <section id="atuacao" className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-10 sm:px-6 sm:pt-28">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">Atuação</p>
        <h2 className="mt-3 font-serif text-4xl text-fg sm:text-5xl">Áreas de atuação</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Passe o cursor. Clique para abrir a triagem nessa área.
        </p>
      </div>

      <div className="relative h-[600px]">
        <FlowingMenu
          items={demoItems}
          speed={15}
          textColor="#12151a"
          bgColor="#e7eaee"
          marqueeBgColor="#b39141"
          marqueeTextColor="#12151a"
          borderColor="#d0d4db"
          onItemClick={(item) => {
            if (item.id) setArea(item.id as PracticeAreaId);
            document.getElementById("triagem")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </section>
  );
}
