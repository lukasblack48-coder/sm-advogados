import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppToaster } from "@/components/site/app-toaster";
import { CookieBanner } from "@/components/site/cookie-banner";
import { jsonLd, seo } from "@/lib/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { name: "author", content: "Silva e Macedo Advogados Associados" },
      { name: "robots", content: "index,follow" },
      { name: "googlebot", content: "index,follow" },
      { name: "theme-color", content: seo.themeColor },
      { name: "color-scheme", content: "light" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "geo.region", content: "BR-MT" },
      { name: "geo.placename", content: "Primavera do Leste" },
      { name: "geo.position", content: "-15.558;-54.294" },
      { name: "ICBM", content: "-15.558, -54.294" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: seo.locale },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:site_name", content: seo.shortTitle },
      { property: "og:image", content: seo.ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Silva e Macedo Advogados Associados" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: seo.ogImage },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", href: "/logo-mark.png", sizes: "any" },
      { rel: "canonical", href: "/" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
      },
      { rel: "alternate", hrefLang: "pt-BR", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: () => (
    <html lang="pt-BR" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
          <AppToaster />
          <CookieBanner />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
