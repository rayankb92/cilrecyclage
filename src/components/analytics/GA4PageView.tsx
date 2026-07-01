"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SITE } from "@/content/site";

export function GA4PageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("config", SITE.googleAds.adsId, { page_path: pathname });
    window.gtag("config", SITE.googleAds.ga4Id, { page_path: pathname });
  }, [pathname]);

  return null;
}
