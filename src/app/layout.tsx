import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/content/site";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Ferrailleur Argenteuil | Rachat Métaux Île-de-France`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "VALMETAUX, ferrailleur à Argenteuil (95100). Rachat cuivre, laiton, aluminium, ferraille et métaux spéciaux. Dépose de bennes, enlèvement camion-grue en Île-de-France.",
  icons: {
    icon: "/images/favicon/favicon.ico",
    shortcut: "/images/favicon/favicon-96x96.png",
    apple: "/images/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/images/favicon/favicon.svg",
        color: "#161616",
      },
    ],
  },
  manifest: "/images/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: `${SITE.name} — Ferrailleur Argenteuil`,
    description:
      "Rachat de métaux et ferraille en Île-de-France. Dépôt à Argenteuil, intervention 95, 92, 78, 93.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "7twX9AEQq0d3Is-XQ47YJBKi3NtHrNJ6eA1o279goNg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.googleAds.id}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE.googleAds.id}');
            gtag('config', '${SITE.googleAds.ga4Id}');
          `}
        </Script>
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
