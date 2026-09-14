import { i as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, p as Slot, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as MapPin, c as ArrowDown, i as Menu, o as Mail, r as Phone, s as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as Root$1, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DZdeNk4R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var firm = {
	name: "Silva e Macedo Advogados Associados",
	shortName: "Silva e Macedo",
	city: "Primavera do Leste",
	state: "MT",
	founded: "2015",
	foundedExact: "20 de julho de 2015",
	cnpj: "23.030.701/0001-79",
	partners: [{
		name: "Eudson Rosa da Silva",
		role: "Sócio-administrador"
	}, {
		name: "Raul Antunes Macedo",
		role: "Sócio-administrador"
	}],
	address: {
		street: "Rua Silvério Nadir Danielli, 240",
		suite: "Sala 335",
		district: "Centro",
		city: "Primavera do Leste",
		state: "MT",
		cep: "78850-000",
		full: "Rua Silvério Nadir Danielli, 240, sala 335 — Centro, Primavera do Leste/MT — CEP 78850-000"
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
		close: 17
	},
	mapsQuery: "Rua Silverio Nadir Danielli 240 Centro Primavera do Leste MT"
};
var practiceAreas = [
	{
		id: "civil",
		title: "Cível e contratos",
		summary: "Obrigações, responsabilidade e segurança contratual.",
		detail: "Análise, revisão e litígio de contratos. Primeiro contato no WhatsApp; honorários só depois da análise, por escrito."
	},
	{
		id: "credito",
		title: "Crédito e cooperativas",
		summary: "Cobrança, garantia e demandas de crédito no interior.",
		detail: "Os sócios figuram em centenas de feitos públicos no Mato Grosso, com atuação reiterada em demandas ligadas à cooperativa de crédito Sicoob Primavera — conforme registros públicos (Escavador)."
	},
	{
		id: "empresarial",
		title: "Empresarial",
		summary: "Sociedade, operação e contencioso da empresa.",
		detail: "Atendimento a quem empreende em Primavera do Leste: contratos, sociedade e disputa comercial. Confirme o recorte na conversa inicial."
	},
	{
		id: "agrario",
		title: "Agrário",
		summary: "Produtor, terra e cadeia do agro no polo local.",
		detail: "Banca com base no polo do agro mato-grossense. O recorte exato de cada caso se define na consulta — o site não substitui orientação jurídica."
	},
	{
		id: "trabalhista",
		title: "Trabalhista",
		summary: "Contencioso e preventivo.",
		detail: "Demandas trabalhistas no foro local. Envie o resumo pelo formulário ou WhatsApp para a triagem."
	},
	{
		id: "familia",
		title: "Família e sucessões",
		summary: "Família com discrição.",
		detail: "Atendimento presencial no Centro. Honorários definidos após análise. Sem consulta automática pelo site."
	}
];
var faqs = [
	{
		q: "Atendem só Primavera do Leste?",
		a: "A sede é no Centro de Primavera do Leste. Atuação no Mato Grosso conforme o caso."
	},
	{
		q: "Posso resolver só pelo WhatsApp?",
		a: "O primeiro contato sim. Estratégia e honorários dependem de análise. O site não é consulta jurídica."
	},
	{
		q: "Como são os honorários?",
		a: "Definidos depois da análise, por escrito. Nenhuma cobrança por mensagem solta."
	},
	{
		q: "Qual o horário?",
		a: "Segunda a sexta, horário comercial. Confirme o melhor horário pelo WhatsApp."
	},
	{
		q: "O site substitui o advogado?",
		a: "Não. Esta página é institucional. Orientação jurídica só na conversa com os sócios."
	}
];
var processSteps = [
	{
		n: "01",
		title: "Conversa inicial",
		body: "WhatsApp, telefone ou o formulário desta página."
	},
	{
		n: "02",
		title: "Análise",
		body: "Documentos e recorte do caso com um dos sócios."
	},
	{
		n: "03",
		title: "Honorários",
		body: "Proposta por escrito antes de qualquer protocolo."
	},
	{
		n: "04",
		title: "Acompanhamento",
		body: "PJe e foro de Primavera do Leste."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "border border-border bg-transparent text-fg hover:border-primary hover:text-primary",
			ghost: "text-fg hover:bg-elevated",
			steel: "bg-steel text-bg hover:bg-steel/90"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-7",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetTitle = DialogTitle;
function SheetContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-border bg-surface p-6 shadow-xl", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute right-4 top-4 text-muted hover:text-fg",
			"aria-label": "Fechar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		}), children]
	})] });
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("text-primary", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.5",
				y: "1.5",
				width: "45",
				height: "45",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "currentColor",
				d: "M9.5 32V16.2h8.1c3.2 0 5.3 1.7 5.3 4.6 0 2.1-1.2 3.6-3.3 4.3L24.2 32h-3.6l-4.9-6.2h-3V32H9.5Zm3.2-9.2h4.5c1.6 0 2.6-.9 2.6-2.2s-1-2.1-2.6-2.1h-4.5v4.3Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "currentColor",
				d: "M26.2 32V16.2h3.2l4.6 9.6 4.6-9.6H41.8V32h-3.1V22.4L35 31.2h-2.4l-3.7-8.8V32h-2.7Z"
			})
		]
	});
}
var links = [
	{
		href: "#atuacao",
		label: "Atuação"
	},
	{
		href: "#escritorio",
		label: "O escritório"
	},
	{
		href: "#triagem",
		label: "Triagem"
	},
	{
		href: "#contato",
		label: "Contato"
	}
];
function SiteHeader() {
	const [solid, setSolid] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 48);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: solid ? "fixed inset-x-0 top-0 z-40 border-b border-border bg-bg/92 backdrop-blur-md" : "fixed inset-x-0 top-0 z-40 border-b border-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#topo",
					className: "flex items-center gap-3 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-sm tracking-[0.18em] uppercase sm:block",
						children: "Silva e Macedo"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted transition-colors hover:text-fg",
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: firm.whatsappHref,
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						className: "md:hidden",
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
					className: "mb-8 font-display text-2xl text-fg",
					children: "Menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-4",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "py-2 text-lg text-fg",
							children: l.label
						})
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: firm.whatsappHref,
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp"
						})
					})]
				})] })] })
			]
		})
	});
}
function Hero() {
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			video.pause();
			return;
		}
		video.play().catch(() => void 0);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "topo",
		className: "relative isolate min-h-[100svh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "absolute inset-0 size-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/hero-poster.jpg",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/hero-office.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-bg/30 via-bg/50 to-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-20 pt-24 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "mb-8 size-20 sm:size-24" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-4 text-xs uppercase tracking-[0.42em] text-primary",
							children: [
								firm.city,
								" · ",
								firm.state,
								" · desde ",
								firm.founded
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl leading-[1.05] text-fg sm:text-6xl md:text-7xl",
							children: firm.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-24 bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
							children: "Advocacia no Centro. Atendimento direto com os sócios."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#triagem",
									children: "Iniciar triagem"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: firm.whatsappHref,
									target: "_blank",
									rel: "noreferrer",
									children: "Falar no WhatsApp"
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#atuacao",
				className: "absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" }), "Rolar"]
			})
		]
	});
}
var useIntake = create()(persist((set, get) => ({
	step: 1,
	area: null,
	summary: "",
	name: "",
	phone: "",
	email: "",
	requests: [],
	setStep: (step) => set({ step }),
	setArea: (area) => set({
		area,
		step: 2
	}),
	setSummary: (summary) => set({ summary }),
	setName: (name) => set({ name }),
	setPhone: (phone) => set({ phone }),
	setEmail: (email) => set({ email }),
	resetDraft: () => set({
		step: 1,
		area: null,
		summary: "",
		name: "",
		phone: "",
		email: ""
	}),
	submit: () => {
		const { area, summary, name, phone, email, requests } = get();
		if (!area || !summary.trim() || !name.trim() || !phone.trim()) return null;
		const item = {
			id: crypto.randomUUID(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			area,
			summary: summary.trim(),
			name: name.trim(),
			phone: phone.trim(),
			email: email.trim(),
			status: "enviado"
		};
		set({
			requests: [item, ...requests],
			step: 1,
			area: null,
			summary: "",
			name: "",
			phone: "",
			email: ""
		});
		return item;
	}
}), { name: "sm-intake" }));
function Areas() {
	const area = useIntake((s) => s.area);
	const setArea = useIntake((s) => s.setArea);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "atuacao",
		className: "border-t border-border bg-bg py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.32em] text-primary",
					children: "Atuação"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-fg sm:text-5xl",
					children: "Escolha a área e abra a triagem."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Clique no card para ver o detalhe e já levar a área para o formulário."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: practiceAreas.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaCard, {
						id: item.id,
						title: item.title,
						summary: item.summary,
						detail: item.detail,
						active: area === item.id,
						index: i,
						onSelect: () => {
							setArea(item.id);
							document.getElementById("triagem")?.scrollIntoView({ behavior: "smooth" });
						}
					}, item.id))
				})
			]
		})
	});
}
function AreaCard({ title, summary, detail, active, index, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		type: "button",
		initial: {
			opacity: 0,
			y: 12
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			delay: index * .05,
			duration: .4
		},
		onClick: onSelect,
		className: cn("flex min-h-44 flex-col items-start border p-6 text-left transition-colors", active ? "border-primary bg-elevated" : "border-border bg-surface hover:border-steel"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 text-sm text-muted",
				children: summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-4 text-sm leading-relaxed text-fg/80",
				children: detail
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "escritorio",
		className: "border-t border-border bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.32em] text-primary",
						children: "O escritório"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-4xl text-fg",
						children: [
							"Desde ",
							firm.founded,
							", no Centro."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 leading-relaxed text-muted",
						children: [
							"Sociedade constituída em ",
							firm.foundedExact,
							". CNPJ ",
							firm.cnpj,
							". Dois sócios na banca — Eudson Rosa da Silva e Raul Antunes Macedo."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-muted",
						children: "Centenas de feitos públicos no Mato Grosso. Atuação reiterada em demandas de crédito envolvendo o Sicoob Primavera, segundo registros públicos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-[0.2em] text-steel",
							children: "Sede"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-fg",
							children: firm.address.full
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-[0.2em] text-steel",
							children: "Sócios"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-fg",
							children: firm.partners.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: p.name
							}, p.name))
						})] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-4 lg:col-span-7 sm:grid-cols-2",
				children: processSteps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border border-border bg-bg p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl text-primary",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-lg text-fg",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: s.body
						})
					]
				}, s.n))
			})]
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm text-fg placeholder:text-muted outline-none focus-visible:ring-2 focus-visible:ring-primary/50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-xs font-medium uppercase tracking-[0.16em] text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md border border-border bg-elevated px-3 py-2 text-sm text-fg placeholder:text-muted outline-none focus-visible:ring-2 focus-visible:ring-primary/50", className),
		...props
	});
}
function Progress({ className, value, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
		className: cn("relative h-1 w-full overflow-hidden rounded-full bg-border", className),
		value,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			className: "size-full bg-primary transition-transform",
			style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
		})
	});
}
function Intake() {
	const step = useIntake((s) => s.step);
	const area = useIntake((s) => s.area);
	const summary = useIntake((s) => s.summary);
	const name = useIntake((s) => s.name);
	const phone = useIntake((s) => s.phone);
	const email = useIntake((s) => s.email);
	const requests = useIntake((s) => s.requests);
	const setStep = useIntake((s) => s.setStep);
	const setArea = useIntake((s) => s.setArea);
	const setSummary = useIntake((s) => s.setSummary);
	const setName = useIntake((s) => s.setName);
	const setPhone = useIntake((s) => s.setPhone);
	const setEmail = useIntake((s) => s.setEmail);
	const submit = useIntake((s) => s.submit);
	const progress = step / 3 * 100;
	const areaLabel = practiceAreas.find((a) => a.id === area)?.title;
	const onSubmit = () => {
		if (!submit()) {
			toast.error("Preencha área, resumo, nome e telefone.");
			return;
		}
		toast.success("Triagem registrada neste aparelho.");
	};
	const waText = encodeURIComponent(`Olá, Silva e Macedo. Sou ${name || "[nome]"}. Área: ${areaLabel ?? "—"}. ${summary || ""}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "triagem",
		className: "border-t border-border bg-bg py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.32em] text-primary",
							children: "Triagem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl text-fg",
							children: "Não é um site estático."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted",
							children: "Três passos. A solicitação fica neste aparelho e você pode mandar o mesmo texto no WhatsApp dos sócios."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: progress,
							className: "mt-8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs uppercase tracking-[0.2em] text-steel",
							children: [
								"Passo ",
								step,
								" de 3"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-surface p-6 lg:col-span-7 sm:p-8",
					children: [
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-sm text-muted",
								children: "Qual área?"
							}), practiceAreas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setArea(a.id),
								className: cn("border px-4 py-3 text-left text-sm", area === a.id ? "border-primary text-fg" : "border-border text-muted hover:text-fg"),
								children: a.title
							}, a.id))]
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "summary",
									children: "Resumo do caso"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "summary",
									value: summary,
									onChange: (e) => setSummary(e.target.value),
									placeholder: "O que aconteceu, prazos, documentos."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										onClick: () => setStep(1),
										children: "Voltar"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										onClick: () => setStep(3),
										disabled: !summary.trim(),
										children: "Continuar"
									})]
								})
							]
						}),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "grid gap-4",
							onSubmit: (e) => {
								e.preventDefault();
								onSubmit();
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Nome"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									className: "mt-2",
									value: name,
									onChange: (e) => setName(e.target.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Telefone / WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									className: "mt-2",
									value: phone,
									onChange: (e) => setPhone(e.target.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "E-mail (opcional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									className: "mt-2",
									value: email,
									onChange: (e) => setEmail(e.target.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 sm:flex-row",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											type: "button",
											onClick: () => setStep(2),
											children: "Voltar"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											children: "Registrar triagem"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "steel",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `${firm.whatsappHref}?text=${waText}`,
												target: "_blank",
												rel: "noreferrer",
												children: "Enviar no WhatsApp"
											})
										})
									]
								})
							]
						})
					]
				}),
				requests.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm uppercase tracking-[0.2em] text-steel",
						children: "Neste aparelho"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 md:grid-cols-2",
						children: requests.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-border bg-elevated p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-fg",
									children: [
										r.name,
										" · ",
										practiceAreas.find((a) => a.id === r.area)?.title
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-3 text-sm text-muted",
									children: r.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-steel",
									children: r.phone
								})
							]
						}, r.id))
					})]
				})
			]
		})
	});
}
var Accordion = Root2;
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("border-b border-border", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-base text-fg transition-colors hover:text-primary [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden text-sm text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pb-5 leading-relaxed", className),
			children
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "border-t border-border bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.32em] text-primary",
					children: "Perguntas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-fg",
					children: "Antes de ligar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-10",
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `q-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
					}, f.q))
				})
			]
		})
	});
}
function OfficeStatus() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const now = /* @__PURE__ */ new Date();
			const parts = new Intl.DateTimeFormat("en-US", {
				timeZone: "America/Cuiaba",
				weekday: "short",
				hour: "numeric",
				hourCycle: "h23"
			}).formatToParts(now);
			const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
			const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
			const weekdayOpen = !["Sat", "Sun"].includes(weekday);
			setOpen(weekdayOpen && hour >= firm.hours.open && hour < firm.hours.close);
		};
		tick();
		const id = window.setInterval(tick, 6e4);
		return () => window.clearInterval(id);
	}, []);
	if (open === null) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: open ? "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary" : "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: open ? "size-1.5 rounded-full bg-primary" : "size-1.5 rounded-full bg-muted" }), open ? "Expediente agora" : "Fora do expediente — deixe recado"]
	});
}
var mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(firm.mapsQuery)}&z=16&output=embed`;
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "border-t border-border bg-bg py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.32em] text-primary",
					children: "Contato"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl text-fg",
					children: "Centro de Primavera do Leste"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficeStatus, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: firm.address.full
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-fg hover:text-primary",
									href: firm.phoneHref,
									children: firm.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "text-fg hover:text-primary",
									href: firm.whatsappHref,
									target: "_blank",
									rel: "noreferrer",
									children: ["WhatsApp ", firm.whatsapp]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-fg hover:text-primary",
								href: firm.emailHref,
								children: firm.email
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-xs leading-relaxed text-muted",
					children: [firm.hours.label, ". Este site não oferece consulta jurídica automática."]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-72 overflow-hidden border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Mapa do escritório",
					src: mapsSrc,
					className: "size-full min-h-72 grayscale contrast-125",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg",
					children: firm.shortName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: ["CNPJ ", firm.cnpj]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					firm.city,
					"/",
					firm.state,
					" · OAB dos sócios a inserir · Informação institucional"
				]
			})]
		})
	});
}
function WhatsappFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: firm.whatsappHref,
		target: "_blank",
		rel: "noreferrer",
		className: "fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-fg shadow-lg hover:bg-primary/90",
		"aria-label": "WhatsApp",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74 1.64.67 2.1.59 2.47.5.38-.08 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" })
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Areas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intake, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {})
	] });
}
//#endregion
export { Home as component };
