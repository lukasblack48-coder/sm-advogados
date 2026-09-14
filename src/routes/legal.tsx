import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsappFab } from "@/components/site/whatsapp-fab";
import { legalNav, legalSections, legalUpdated } from "@/lib/legal";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
  head: () => ({
    meta: [
      { title: "Termos, privacidade e avisos | Silva e Macedo Advogados" },
      {
        name: "description",
        content:
          "Aviso legal, política de privacidade (LGPD), termos de uso e cookies do escritório Silva e Macedo Advogados Associados.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
});

function LegalPage() {
  return (
    <>
      <a
        href="#texto"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-elevated focus:px-3 focus:py-2"
      >
        Ir ao texto
      </a>
      <SiteHeader />
      <main id="texto" className="bg-bg pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Documentos</p>
          <h1 className="mt-3 font-serif text-4xl text-fg">Normas deste sítio</h1>
          <p className="mt-3 text-sm text-muted">Atualizado em {legalUpdated}.</p>

          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Seções legais">
            {legalNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-border bg-elevated px-3 py-1.5 text-sm text-fg hover:border-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {legalSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 mt-14">
              <h2 className="font-serif text-2xl text-fg">{section.title}</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
                {section.blocks.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <p className="mt-16 text-sm">
            <Link to="/" className="text-primary underline underline-offset-2">
              Voltar à página inicial
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  );
}
