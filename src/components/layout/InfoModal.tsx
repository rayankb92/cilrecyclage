"use client";

// use client est requis : useEffect (écouteur Escape + blocage scroll) et createPortal sont des APIs browser.

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { SITE } from "@/content/site";
import { PhoneLink } from "@/components/ui/PhoneLink";

const MAPS_LINK = `https://maps.app.goo.gl/94A6MTHNr7GVtvxv7`;

const HORAIRES = [
  { jour: "Lun – Ven", heures: "08h – 17h" },
  { jour: "Samedi", heures: "08h – 12h" },
  { jour: "Dimanche", heures: "Fermé" },
];

interface InfoModalProps {
  onClose: () => void;
}

export function InfoModal({ onClose }: InfoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Informations pratiques ${SITE.name}`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Carte */}
      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between bg-[#232323] px-5 py-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#F47A20]">
              Dépôt {SITE.name}
            </p>
            <p className="mt-0.5 text-base font-black text-white">
              {SITE.address.addressLocality}{" "}
              <span className="font-normal text-[#A3A3A3]">
                ({SITE.address.postalCode})
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#121212] text-xs text-[#A3A3A3] transition hover:bg-black hover:text-white"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <div className="divide-y divide-slate-100 px-5 pb-5">

          {/* Horaires */}
          <div className="py-4">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Horaires
            </p>
            <ul className="space-y-2">
              {HORAIRES.map(({ jour, heures }) => {
                const ferme = heures === "Fermé";
                return (
                  <li key={jour} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{jour}</span>
                    <span
                      className={
                        ferme
                          ? "text-slate-400"
                          : "font-bold text-slate-900"
                      }
                    >
                      {heures}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Adresse + navigation */}
          <div className="py-4">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Adresse
            </p>
            <p className="text-sm text-slate-700">
              {SITE.address.streetAddress}
              <br />
              {SITE.address.postalCode} {SITE.address.addressLocality}
            </p>
            <p className="mt-2 text-xs font-medium text-[#D95F02]">
              {SITE.accessNote}
            </p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex w-full items-center gap-3 rounded-xl border border-[#F47A20] px-4 py-3 transition hover:bg-[#FFD7B5]/30"
            >
              <svg className="h-5 w-5 shrink-0 text-[#F47A20]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">Lancer la navigation</span>
                <span className="text-xs text-slate-500">
                  {SITE.address.streetAddress}, {SITE.address.addressLocality} · {SITE.landmarkName}
                </span>
              </span>
              <svg className="ml-auto h-4 w-4 shrink-0 text-[#F47A20] transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* CTAs téléphone */}
          <div className="grid gap-2 pt-4 grid-cols-1">
            <PhoneLink
              className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#F47A20] py-3 text-center transition hover:bg-[#D95F02]"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD7B5]">
                Contact
              </span>
              <span className="text-sm font-black text-white">{SITE.phone}</span>
            </PhoneLink>
          </div>
          {SITE.email && (
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm text-slate-500 transition hover:border-slate-300 hover:text-slate-800"
            >
              <span>✉️</span>
              <span className="text-xs">{SITE.email}</span>
            </a>
          )}

          {/* Lien page complète */}
          <div className="pt-4">
            <Link
              href="/infos-pratiques"
              onClick={onClose}
              className="block text-center text-xs font-semibold text-slate-400 transition hover:text-[#D95F02]"
            >
              Toutes les infos pratiques →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
