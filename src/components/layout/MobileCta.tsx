"use client";

import { SITE } from "@/content/site";

export function MobileCta() {
  return (
    <a
      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-slate-800 bg-slate-950 px-6 py-4 lg:hidden"
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
        Appeler le dépôt
      </span>
      <span className="text-lg font-black text-white">{SITE.phone}</span>
    </a>
  );
}
