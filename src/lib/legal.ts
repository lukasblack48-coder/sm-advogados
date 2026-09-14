import { firm } from "@/lib/firm";

export const legalUpdated = "14 de setembro de 2026";

export const legalNav = [
  { href: "/legal#aviso", label: "Aviso legal" },
  { href: "/legal#privacidade", label: "Privacidade (LGPD)" },
  { href: "/legal#termos", label: "Termos de uso" },
  { href: "/legal#cookies", label: "Cookies" },
] as const;

export const legalSections = [
  {
    id: "aviso",
    title: "Aviso legal",
    blocks: [
      `Este sítio é institucional. Não constitui consulta, parecer, contratação nem relação advogado-cliente. Orientação jurídica só ocorre após conversa com um dos sócios e, quando for o caso, contrato por escrito.`,
      `A publicidade observa o Código de Ética e Disciplina da OAB e o Provimento n.º 205/2021 do Conselho Federal da OAB. Não prometemos resultado, não comparamos honorários e não fazemos captação ilícita de clientela.`,
      `${firm.name}, CNPJ ${firm.cnpj}, com sede em ${firm.address.full}. Telefone ${firm.phone}. E-mail ${firm.email}.`,
      `Conteúdo meramente informativo. Leis e entendimentos mudam. Confira sempre com o profissional responsável pelo caso.`,
    ],
  },
  {
    id: "privacidade",
    title: "Política de privacidade — LGPD",
    blocks: [
      `Esta política atende à Lei n.º 13.709/2018 (LGPD) e informa como o escritório trata dados pessoais coletados neste sítio.`,
      `Controlador: ${firm.name}, CNPJ ${firm.cnpj}, ${firm.address.full}. Canal do titular: ${firm.email} e ${firm.phone}.`,
      `Dados tratados no formulário: nome, telefone, e-mail (opcional), área de interesse e resumo do caso. Esses dados ficam neste aparelho (armazenamento local) até você enviar pelo WhatsApp ou apagar o rascunho.`,
      `Finalidade: receber o primeiro contato e responder a pedido de triagem. Não usamos os dados para marketing, venda ou perfilamento.`,
      `Bases legais (art. 7º da LGPD): consentimento (inciso I) e procedimentos preliminares relacionados a contrato (inciso V), quando você pede atendimento.`,
      `Se você abre o WhatsApp, a mensagem segue para a plataforma da Meta. Isso pode implicar transferência internacional. A Meta trata esses dados segundo a própria política.`,
      `Prazo: mantemos o rascunho só neste aparelho. Depois do envio pelo WhatsApp, o tratamento no escritório limita-se ao necessário para o atendimento, nos prazos legais e de guarda profissional.`,
      `Direitos do titular (art. 18): confirmação, acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamentos e revogação do consentimento. Peça pelo e-mail ${firm.email}. Responderemos no prazo legal.`,
      `Não há encarregado (DPO) nomeado em publicação à ANPD neste momento. O canal de contato do controlador é o e-mail acima.`,
      `Segurança: HTTPS, armazenamento local no seu aparelho e acesso restrito dos sócios às mensagens recebidas. Nenhum sistema elimina risco por completo.`,
      `Autoridade: Autoridade Nacional de Proteção de Dados (ANPD). Reclamações também podem ser feitas à OAB/MT.`,
    ],
  },
  {
    id: "termos",
    title: "Termos de uso",
    blocks: [
      `Ao usar este sítio você concorda com estes termos, com a política de privacidade e com o aviso legal.`,
      `O sítio destina-se a informação institucional e ao primeiro contato. Não há cadastro de conta. O formulário não protocola processo nem abre prazo.`,
      `É vedado usar o sítio para spam, ilícitos, engenharia social ou envio de dados de terceiros sem autorização.`,
      `Textos, marca S&M e layout são do escritório. É proibida a reprodução comercial sem autorização.`,
      `Links para WhatsApp, mapas e fontes de terceiros abrem serviços alheios, com regras próprias.`,
      `O escritório pode alterar o sítio e estes textos. A data no topo indica a versão vigente.`,
      `Foro: Comarca de Primavera do Leste/MT, com ressalva do CDC quando o titular for consumidor.`,
    ],
  },
  {
    id: "cookies",
    title: "Política de cookies",
    blocks: [
      `Cookies e armazenamento local usados neste sítio:`,
      `Necessários: preferência do aviso de cookies (lgpd) e rascunho do formulário neste aparelho. Sem eles o sítio não grava sua escolha nem o texto da triagem.`,
      `Não usamos cookies de publicidade, remarketing nem pixels de rede social neste sítio.`,
      `Você pode limpar dados do site no próprio navegador. Isso apaga o rascunho e a preferência do aviso.`,
      `Ao clicar em “Aceitar” no aviso, você consente no uso dos itens necessários descritos aqui (art. 7º, I, da LGPD).`,
    ],
  },
] as const;
