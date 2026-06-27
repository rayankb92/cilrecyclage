"use client";

/**
 * Lien téléphone réutilisable.
 * - Centralise le formatage href tel:
 * - Point unique pour brancher le tracking Google Ads (gtag) plus tard
 */

import { SITE } from "@/content/site";

interface PhoneLinkProps {
  phone?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function PhoneLink({
  phone = SITE.phone,
  className,
  children,
  onClick,
}: PhoneLinkProps) {
  const href = `tel:${phone.replace(/\s/g, "")}`;

  function handleClick() {
    // TODO: Google Ads conversion tracking
    // if (typeof window !== "undefined" && typeof window.gtag === "function") {
    //   window.gtag("event", "conversion", {
    //     send_to: "AW-XXXXXXXXXX/YYYYYYYYYY",
    //   });
    // }
    onClick?.();
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
