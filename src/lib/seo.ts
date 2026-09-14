import { firm, practiceAreas } from "@/lib/firm";

export const seo = {
  title: "Silva e Macedo Advogados Associados | Primavera do Leste/MT",
  shortTitle: "Silva e Macedo Advogados",
  description:
    "Escritório Silva e Macedo no Centro de Primavera do Leste/MT. Cível, crédito, empresarial, agrário, trabalhista e família. Atendimento direto com os sócios.",
  locale: "pt_BR",
  keywords:
    "advogado Primavera do Leste, Silva e Macedo Advogados, advocacia Mato Grosso, escritório de advocacia Centro, cível, trabalhista, agrário",
  ogImage: "/og.jpg",
  themeColor: "#e7eaee",
} as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "#escritorio",
      name: firm.name,
      alternateName: firm.shortName,
      description: seo.description,
      image: seo.ogImage,
      url: "/",
      telephone: firm.phoneHref.replace("tel:", ""),
      email: firm.email,
      foundingDate: "2015-07-20",
      taxID: firm.cnpj,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${firm.address.street}, ${firm.address.suite}`,
        addressLocality: firm.address.city,
        addressRegion: firm.address.state,
        postalCode: firm.address.cep,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -15.558,
        longitude: -54.294,
      },
      areaServed: {
        "@type": "City",
        name: "Primavera do Leste",
        containedInPlace: {
          "@type": "State",
          name: "Mato Grosso",
        },
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      knowsAbout: practiceAreas.map((a) => a.title),
      employee: firm.partners.map((p) => ({
        "@type": "Person",
        name: p.name,
        jobTitle: p.role,
      })),
    },
    {
      "@type": "WebSite",
      "@id": "#website",
      name: firm.shortName,
      inLanguage: "pt-BR",
      publisher: { "@id": "#escritorio" },
    },
  ],
};
