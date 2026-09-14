"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { firm, practiceAreas } from "@/lib/firm";
import { useIntake } from "@/store/intake";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

export function Intake() {
  const area = useIntake((s) => s.area);
  const summary = useIntake((s) => s.summary);
  const name = useIntake((s) => s.name);
  const phone = useIntake((s) => s.phone);
  const email = useIntake((s) => s.email);
  const requests = useIntake((s) => s.requests);
  const setArea = useIntake((s) => s.setArea);
  const setSummary = useIntake((s) => s.setSummary);
  const setName = useIntake((s) => s.setName);
  const setPhone = useIntake((s) => s.setPhone);
  const setEmail = useIntake((s) => s.setEmail);
  const submit = useIntake((s) => s.submit);
  const [agree, setAgree] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const areaLabel = practiceAreas.find((a) => a.id === area)?.title;
  const missing = {
    area: !area,
    summary: !summary.trim(),
    name: !name.trim(),
    phone: !phone.trim(),
    agree: !agree,
  };

  const onSubmit = () => {
    setAttempted(true);
    if (Object.values(missing).some(Boolean)) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }
    const item = submit();
    if (!item) {
      toast.error("Preencha área, resumo, nome e telefone.");
      return;
    }
    setAgree(false);
    setAttempted(false);
    toast.success("Pedido registrado. Abra o WhatsApp se quiser enviar agora.");
  };

  const waText = encodeURIComponent(
    `Olá, Silva e Macedo. Sou ${name || "[nome]"}. Área: ${areaLabel ?? "—"}. ${summary || ""}`,
  );

  return (
    <section id="triagem" className="scroll-mt-20 border-t border-border bg-bg py-20 pb-28 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Contato</p>
          <h2 className="mt-3 font-serif text-4xl text-fg">Envie o caso.</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Os sócios respondem por telefone ou WhatsApp. Honorários só depois da análise, por
            escrito.
          </p>
        </div>

        <form
          className="border border-border bg-elevated p-6 shadow-sm lg:col-span-8 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <FieldGroup>
            <FieldSet>
              <FieldLegend>O caso</FieldLegend>
              <FieldDescription>
                Escolha a área e descreva o que aconteceu. Isso não é consulta jurídica.
              </FieldDescription>
              <FieldGroup className="gap-4">
                <Field data-invalid={attempted && missing.area}>
                  <FieldLabel>Área</FieldLabel>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {practiceAreas.map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => setArea(a.id)}
                        className={cn(
                          "rounded-md border px-3 py-3 text-left text-sm",
                          area === a.id
                            ? "border-primary bg-primary text-primary-fg"
                            : "border-border bg-surface text-muted hover:border-primary hover:text-fg",
                        )}
                      >
                        {a.title}
                      </button>
                    ))}
                  </div>
                  {attempted && missing.area ? <FieldError>Escolha uma área.</FieldError> : null}
                </Field>
                <Field data-invalid={attempted && missing.summary}>
                  <FieldLabel htmlFor="summary">Resumo</FieldLabel>
                  <Textarea
                    id="summary"
                    className="min-h-32"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="O que aconteceu, prazos e documentos."
                  />
                  <FieldDescription>Texto curto. Detalhe o restante na conversa.</FieldDescription>
                  {attempted && missing.summary ? (
                    <FieldError>Escreva um resumo do caso.</FieldError>
                  ) : null}
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSeparator>Dados</FieldSeparator>

            <FieldSet>
              <FieldLegend>Quem fala conosco</FieldLegend>
              <FieldDescription>Usamos só para retorno deste pedido.</FieldDescription>
              <FieldGroup>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field data-invalid={attempted && missing.name}>
                    <FieldLabel htmlFor="name">Nome</FieldLabel>
                    <Input
                      id="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {attempted && missing.name ? <FieldError>Informe o nome.</FieldError> : null}
                  </Field>
                  <Field data-invalid={attempted && missing.phone}>
                    <FieldLabel htmlFor="phone">Telefone / WhatsApp</FieldLabel>
                    <Input
                      id="phone"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {attempted && missing.phone ? (
                      <FieldError>Informe o telefone.</FieldError>
                    ) : null}
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="email">E-mail</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="opcional"
                  />
                  <FieldDescription>Se quiser receber cópia por e-mail.</FieldDescription>
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />

            <Field orientation="horizontal" data-invalid={attempted && missing.agree}>
              <Checkbox
                id="agree"
                checked={agree}
                onCheckedChange={(v) => setAgree(v === true)}
              />
              <FieldContent>
                <FieldLabel htmlFor="agree" className="font-normal">
                  Li o{" "}
                  <Link to="/legal" hash="aviso" className="underline underline-offset-2">
                    aviso legal
                  </Link>{" "}
                  e a{" "}
                  <Link to="/legal" hash="privacidade" className="underline underline-offset-2">
                    política de privacidade
                  </Link>
                  . Honorários só depois da análise, por escrito.
                </FieldLabel>
                {attempted && missing.agree ? (
                  <FieldError>Confirme para enviar.</FieldError>
                ) : null}
              </FieldContent>
            </Field>

            <Field orientation="responsive">
              <Button type="submit" className="rounded-md sm:min-w-44">
                Registrar pedido
              </Button>
              <Button asChild variant="outline">
                <a href={`${firm.whatsappHref}?text=${waText}`} target="_blank" rel="noreferrer">
                  Enviar no WhatsApp
                </a>
              </Button>
            </Field>
          </FieldGroup>
        </form>

        {requests.length > 0 && (
          <div className="lg:col-span-12">
            <h3 className="text-sm uppercase tracking-[0.2em] text-steel">Neste aparelho</h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {requests.map((r) => (
                <li key={r.id} className="border border-border bg-elevated p-4">
                  <p className="text-sm text-fg">
                    {r.name} · {practiceAreas.find((a) => a.id === r.area)?.title}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{r.summary}</p>
                  <p className="mt-2 text-xs text-steel">{r.phone}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
