"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_SERVICES } from "@/content";
import { SITE } from "@/content/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/valmetaux-logo-simple.png"
            alt="VALMETAUX — Achat vente métaux Argenteuil"
            width={300}
            height={300}
            priority
            className="h-15 w-auto"
          />
        </Link>

        {/* Nav desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-widest text-slate-400 lg:flex"
        >
          <Link href="/" className="transition hover:text-white">
            Accueil
          </Link>


          {/* Dropdown Prestations */}
          <div
            className="relative"
            onMouseEnter={() => setPrestationsOpen(true)}
            onMouseLeave={() => setPrestationsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 transition hover:text-white"
              aria-expanded={prestationsOpen}
              aria-haspopup="true"
            >
              Prestations
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${prestationsOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* pt-2 = pont invisible entre le bouton et le panneau (évite la fermeture au survol) */}
            <div
              className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 transition-all duration-200 ${
                prestationsOpen
                  ? "visible opacity-100"
                  : "invisible opacity-0 pointer-events-none"
              }`}
            >
              <div className="pt-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3 shadow-2xl">
                  <div className="mb-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Nos services
                  </div>
                  {ALL_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/prestations/${service.slug}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold normal-case tracking-normal text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                      {service.nav}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/guides" className="transition hover:text-white">
            Guides
          </Link>
        </nav>

        {/* Téléphone + burger mobile */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="flex-shrink-0 border-l-2 border-amber-400 pl-4 transition hover:border-amber-300"
          >
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-amber-400">
              Appeler
            </span>
            <span className="block text-sm font-black text-white">
              {SITE.phone}
            </span>
          </a>

          {/* Burger — mobile seulement */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-700 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-300 transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-300 transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-300 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Menu mobile ── */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-900 lg:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Accueil
            </Link>
            <Link
              href="/guides"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Guides & Conseils
            </Link>

            <div className="pt-2">
              <p className="px-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Prestations
              </p>
              {ALL_SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/prestations/${service.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  {service.nav}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
