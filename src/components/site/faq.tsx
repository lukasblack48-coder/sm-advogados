"use client";

import { faqs } from "@/lib/firm";
import { FAQSection } from "@/components/ui/faqsection";

const mid = Math.ceil(faqs.length / 2);
const faqsLeft = faqs.slice(0, mid).map((f) => ({ question: f.q, answer: f.a }));
const faqsRight = faqs.slice(mid).map((f) => ({ question: f.q, answer: f.a }));

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-surface">
      <FAQSection
        title="Antes de ligar"
        subtitle="Perguntas"
        description="Respostas objetivas. Honorários só depois da análise, por escrito."
        buttonLabel="Enviar o caso →"
        onButtonClick={() =>
          document.getElementById("triagem")?.scrollIntoView({ behavior: "smooth" })
        }
        faqsLeft={faqsLeft}
        faqsRight={faqsRight}
        className="py-20 sm:py-28"
      />
    </section>
  );
}
