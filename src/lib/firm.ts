export const firm = {
  name: "Silva e Macedo Advogados Associados",
  shortName: "Silva e Macedo",
  city: "Primavera do Leste",
  state: "MT",
  founded: "2015",
  foundedExact: "20 de julho de 2015",
  cnpj: "23.030.701/0001-79",
  partners: [
    { name: "Eudson Rosa da Silva", role: "Sócio-administrador" },
    { name: "Raul Antunes Macedo", role: "Sócio-administrador" },
  ],
  address: {
    street: "Rua Silvério Nadir Danielli, 240",
    suite: "Sala 335",
    district: "Centro",
    city: "Primavera do Leste",
    state: "MT",
    cep: "78850-000",
    full: "Rua Silvério Nadir Danielli, 240, sala 335 — Centro, Primavera do Leste/MT — CEP 78850-000",
  },
  phone: "(66) 3498-2064",
  phoneHref: "tel:+556634982064",
  whatsapp: "(66) 99986-6228",
  whatsappHref: "https://wa.me/5566999866228",
  email: "raulantunes.adv@hotmail.com",
  emailHref: "mailto:raulantunes.adv@hotmail.com",
  hours: {
    label: "Segunda a sexta, horário comercial",
    open: 8,
    close: 17,
  },
  mapsQuery: "Rua Silverio Nadir Danielli 240 Centro Primavera do Leste MT",
} as const;

export type PracticeAreaId =
  | "civil"
  | "credito"
  | "empresarial"
  | "agrario"
  | "trabalhista"
  | "familia";

export const practiceAreas: {
  id: PracticeAreaId;
  title: string;
  summary: string;
  detail: string;
}[] = [
  {
    id: "civil",
    title: "Cível e contratos",
    summary: "Obrigações, responsabilidade e segurança contratual.",
    detail:
      "Análise, revisão e litígio de contratos. Primeiro contato no WhatsApp; honorários só depois da análise, por escrito.",
  },
  {
    id: "credito",
    title: "Crédito e cooperativas",
    summary: "Cobrança, garantia e demandas de crédito no interior.",
    detail:
      "Os sócios figuram em centenas de feitos públicos no Mato Grosso, com atuação reiterada em demandas ligadas à cooperativa de crédito Sicoob Primavera — conforme registros públicos (Escavador).",
  },
  {
    id: "empresarial",
    title: "Empresarial",
    summary: "Sociedade, operação e contencioso da empresa.",
    detail:
      "Atendimento a quem empreende em Primavera do Leste: contratos, sociedade e disputa comercial. Confirme o recorte na conversa inicial.",
  },
  {
    id: "agrario",
    title: "Agrário",
    summary: "Produtor, terra e cadeia do agro no polo local.",
    detail:
      "Banca com base no polo do agro mato-grossense. O recorte exato de cada caso se define na consulta — o site não substitui orientação jurídica.",
  },
  {
    id: "trabalhista",
    title: "Trabalhista",
    summary: "Contencioso e preventivo.",
    detail:
      "Demandas trabalhistas no foro local. Envie o resumo pelo formulário ou WhatsApp para a triagem.",
  },
  {
    id: "familia",
    title: "Família e sucessões",
    summary: "Família com discrição.",
    detail:
      "Atendimento presencial no Centro. Honorários definidos após análise. Sem consulta automática pelo site.",
  },
];

export const faqs = [
  {
    q: "Atendem só Primavera do Leste?",
    a: "A sede é no Centro de Primavera do Leste. Atuação no Mato Grosso conforme o caso.",
  },
  {
    q: "Posso resolver só pelo WhatsApp?",
    a: "O primeiro contato sim. Estratégia e honorários dependem de análise. O site não é consulta jurídica.",
  },
  {
    q: "Como são os honorários?",
    a: "Definidos depois da análise, por escrito. Nenhuma cobrança por mensagem solta.",
  },
  {
    q: "Qual o horário?",
    a: "Segunda a sexta, horário comercial. Confirme o melhor horário pelo WhatsApp.",
  },
  {
    q: "O site substitui o advogado?",
    a: "Não. Esta página é institucional. Orientação jurídica só na conversa com os sócios.",
  },
  {
    q: "Atendem pessoa física e empresa?",
    a: "Sim. O recorte de cada caso se define na conversa inicial com um dos sócios.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Conversa inicial",
    body: "WhatsApp, telefone ou o formulário desta página.",
  },
  {
    n: "02",
    title: "Análise",
    body: "Documentos e recorte do caso com um dos sócios.",
  },
  {
    n: "03",
    title: "Honorários",
    body: "Proposta por escrito antes de qualquer protocolo.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    body: "PJe e foro de Primavera do Leste.",
  },
];
