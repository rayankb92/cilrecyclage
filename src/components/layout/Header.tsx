"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_SERVICES } from "@/content";
import { SITE } from "@/content/site";
import { InfoModal } from "@/components/layout/InfoModal";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

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
            <Link
              href="/prestations"
              className="flex items-center gap-1 transition hover:text-white"
              aria-expanded={prestationsOpen}
              aria-haspopup="true"
            >
              Prestations
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${prestationsOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
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
                  <Link
                    href="/prestations"
                    className="mb-2 block rounded-lg px-3 py-2.5 text-sm font-bold normal-case tracking-normal text-amber-400 transition hover:bg-slate-800 hover:text-amber-300"
                  >
                    Toutes les prestations →
                  </Link>
                  <div className="mb-2 border-t border-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
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

          {/* Shortcut infos pratiques — desktop */}
          <button
            type="button"
            onClick={() => setInfoOpen(true)}
            className="flex items-center gap-2 transition hover:text-white"
            aria-label="Horaires et accès"
          >
            <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Horaires & accès
          </button>
        </nav>

        {/* Téléphone + infos (mobile) + burger */}
        <div className="flex items-center gap-3">
          {/* Shortcut infos pratiques — mobile uniquement */}
          <button
            type="button"
            onClick={() => setInfoOpen(true)}
            className="flex flex-col items-center justify-center gap-0.5 rounded-lg border border-slate-600 bg-slate-800 px-2.5 py-1.5 transition hover:border-slate-400 hover:bg-slate-700 lg:hidden"
            aria-label="Infos pratiques"
          >
            <svg className="h-4 w-4 text-slate-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 002 0V7zm-1-3a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            <span className="text-[9px] font-bold uppercase leading-none tracking-wide text-slate-400">
              Infos
            </span>
          </button>

          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="group flex shrink-0 items-center gap-2.5 rounded-xl border border-amber-400 px-4 py-2 transition hover:border-amber-300 hover:bg-amber-400/10"
            aria-label={`Appeler — ${SITE.phone}`}
          >
            <svg
              className="h-4 w-4 shrink-0 text-amber-400 transition group-hover:text-amber-300"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-sm font-bold text-white transition group-hover:text-amber-400">
              Appeler
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

      {/* ── Modal infos pratiques ── */}
      {infoOpen && <InfoModal onClose={() => setInfoOpen(false)} />}

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

            <Link
              href="/infos-pratiques"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Horaires & accès
            </Link>

            <div className="pt-2">
              <p className="px-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Prestations
              </p>
              <Link
                href="/prestations"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-bold text-amber-400 hover:bg-slate-800 hover:text-amber-300"
              >
                Toutes les prestations →
              </Link>
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
