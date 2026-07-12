import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/content/site";
import { Analytics } from "@vercel/analytics/next";
import { GA4PageView } from "@/components/analytics/GA4PageView";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Ferrailleur Villaines-sous-Bois | Rachat Metaux 95`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "CIL Recyclage, ferrailleur a Villaines-sous-Bois (95570). Rachat cuivre, laiton, aluminium, ferraille et metaux speciaux. Depot local, enlevement et interventions en Ile-de-France.",
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
    title: `${SITE.name} — Ferrailleur Villaines-sous-Bois`,
    description:
      "Rachat de metaux et ferraille en Val-d'Oise et Ile-de-France. Depot a Villaines-sous-Bois, intervention 95, 92, 93, 94, 91 et 77.",
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
    <html lang="fr" className={`${manrope.variable} h-full antialiased`}>
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
            gtag('config', '${SITE.googleAds.adsId}');
            gtag('config', '${SITE.googleAds.ga4Id}');
          `}
        </Script>
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GA4PageView />
        <Analytics />
      </body>
    </html>
  );
}
