import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Areas } from "@/components/site/areas";
import { About } from "@/components/site/about";
import { Intake } from "@/components/site/intake";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { WhatsappFab } from "@/components/site/whatsapp-fab";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-elevated focus:px-3 focus:py-2 focus:text-fg"
      >
        Ir ao conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Areas />
        <About />
        <Intake />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  );
}
