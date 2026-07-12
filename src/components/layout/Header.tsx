"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_SERVICES } from "@/content";
import { SITE } from "@/content/site";
import { InfoModal } from "@/components/layout/InfoModal";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#D9DDE3] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src={SITE.logoPath}
            alt={`${SITE.name} — Ferrailleur et rachat de metaux`}
            width={260}
            height={104}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-widest text-[#6B7280] lg:flex"
        >
          <Link href="/" className="transition hover:text-[#232323]">
            Accueil
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setPrestationsOpen(true)}
            onMouseLeave={() => setPrestationsOpen(false)}
          >
            <Link
              href="/prestations"
              className="flex items-center gap-1 transition hover:text-[#232323]"
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
                <div className="rounded-xl border border-[#D9DDE3] bg-white p-3 shadow-2xl">
                  <Link
                    href="/prestations"
                    className="mb-2 block rounded-lg px-3 py-2.5 text-sm font-bold normal-case tracking-normal text-[#F47A20] transition hover:bg-[#F5F6F7] hover:text-[#D95F02]"
                  >
                    Toutes les prestations →
                  </Link>
                  <div className="mb-2 border-t border-[#D9DDE3] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                    Nos services
                  </div>
                  {ALL_SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/prestations/${service.slug}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold normal-case tracking-normal text-[#232323] transition hover:bg-[#F5F6F7] hover:text-[#D95F02]"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F47A20]" />
                      {service.nav}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/guides" className="transition hover:text-[#232323]">
            Guides
          </Link>

          <button
            type="button"
            onClick={() => setInfoOpen(true)}
            className="flex items-center gap-2 transition hover:text-[#232323]"
            aria-label="Horaires et accès"
          >
            <svg className="h-3.5 w-3.5 text-[#A3A3A3]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Horaires & accès
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setInfoOpen(true)}
            className="flex flex-col items-center justify-center gap-0.5 rounded-lg border border-[#D9DDE3] bg-[#F5F6F7] px-2.5 py-1.5 transition hover:border-[#A3A3A3] hover:bg-white lg:hidden"
            aria-label="Infos pratiques"
          >
            <svg className="h-4 w-4 text-[#232323]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 002 0V7zm-1-3a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            <span className="text-[9px] font-bold uppercase leading-none tracking-wide text-[#6B7280]">
              Infos
            </span>
          </button>

          <PhoneLink
            className="group flex shrink-0 items-center gap-2.5 rounded-xl bg-[#F47A20] px-4 py-2 transition hover:bg-[#D95F02]"
            aria-label={`Appeler — ${SITE.phone}`}
          >
            <svg
              className="h-4 w-4 shrink-0 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-sm font-bold text-white">
              Appeler
            </span>
          </PhoneLink>

          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#D9DDE3] lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-[#232323] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#232323] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#232323] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {infoOpen && <InfoModal onClose={() => setInfoOpen(false)} />}

      {mobileOpen && (
        <div className="border-t border-[#D9DDE3] bg-white lg:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#232323] hover:bg-[#F5F6F7] hover:text-[#D95F02]"
            >
              Accueil
            </Link>
            <Link
              href="/guides"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#232323] hover:bg-[#F5F6F7] hover:text-[#D95F02]"
            >
              Guides & Conseils
            </Link>

            <Link
              href="/infos-pratiques"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#232323] hover:bg-[#F5F6F7] hover:text-[#D95F02]"
            >
              Horaires & accès
            </Link>

            <div className="pt-2">
              <p className="px-4 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                Prestations
              </p>
              <Link
                href="/prestations"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-bold text-[#F47A20] hover:bg-[#F5F6F7] hover:text-[#D95F02]"
              >
                Toutes les prestations →
              </Link>
              {ALL_SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/prestations/${service.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-[#232323] hover:bg-[#F5F6F7] hover:text-[#D95F02]"
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
