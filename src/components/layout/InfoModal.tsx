"use client";

// use client est requis : useEffect (écouteur Escape + blocage scroll) et createPortal sont des APIs browser.

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { SITE } from "@/content/site";

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

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.address.streetAddress}, ${SITE.address.postalCode} ${SITE.address.addressLocality}`,
  )}`;

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Informations pratiques VALMETAUX"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Carte */}
      <div className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between bg-slate-900 px-5 py-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
              Dépôt VALMETAUX
            </p>
            <p className="mt-0.5 text-base font-black text-white">
              {SITE.address.addressLocality}{" "}
              <span className="font-normal text-slate-400">
                ({SITE.address.postalCode})
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs text-slate-400 transition hover:bg-slate-600 hover:text-white"
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

          {/* Adresse */}
          <div className="py-4">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Adresse
            </p>
            <p className="text-sm text-slate-700">
              {SITE.address.streetAddress}
              <br />
              {SITE.address.postalCode} {SITE.address.addressLocality}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs font-bold text-amber-600 hover:text-amber-700"
            >
              Ouvrir dans Maps →
            </a>
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-2 gap-2 pt-4">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex flex-col items-center justify-center gap-1 rounded-xl bg-amber-500 py-3 text-center font-black text-white transition hover:bg-amber-600"
            >
              <span className="text-lg">📞</span>
              <span className="text-xs leading-tight">{SITE.phone}</span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 py-3 text-center text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            >
              <span className="text-lg">✉️</span>
              <span className="truncate px-2 text-xs">{SITE.email}</span>
            </a>
          </div>

          {/* Lien page complète */}
          <div className="pt-4">
            <Link
              href="/infos-pratiques"
              onClick={onClose}
              className="block text-center text-xs font-semibold text-slate-400 transition hover:text-amber-600"
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
