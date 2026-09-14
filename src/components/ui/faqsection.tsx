"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  faqsLeft: FAQItem[];
  faqsRight: FAQItem[];
  className?: string;
}

export function FAQSection({
  title = "Antes de ligar",
  subtitle = "Perguntas",
  description = "Respostas objetivas. O site não substitui conversa com os sócios.",
  buttonLabel = "Enviar o caso →",
  onButtonClick,
  faqsLeft,
  faqsRight,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-5xl px-4 py-16", className)}>
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-medium tracking-[0.32em] text-primary uppercase">
          {subtitle}
        </p>
        <h2 className="mb-3 font-serif text-3xl text-fg md:text-4xl">{title}</h2>
        <p className="mx-auto mb-6 max-w-xl text-muted">{description}</p>
        <Button variant="default" className="rounded-full" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
        {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
          <Accordion key={columnIndex} type="single" collapsible className="space-y-4">
            {faqColumn.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${columnIndex}-${i}`}>
                <AccordionTrigger className="text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted">
                  <div className="min-h-10 transition-all duration-200 ease-in-out">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
