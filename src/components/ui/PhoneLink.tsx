"use client";

/**
 * Lien téléphone réutilisable.
 * - Centralise le formatage href tel:
 * - Envoie la conversion Google Ads "Annonce Appel Direct" sur chaque clic.
 */

import { track } from "@vercel/analytics";
import { SITE } from "@/content/site";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

function normalizePhone(phone: string) {
  return phone.replace(/\s/g, "");
}

interface PhoneLinkProps extends Omit<React.ComponentPropsWithoutRef<"a">, "href"> {
  phone?: string;
}

export function PhoneLink({
  phone = SITE.phone,
  className,
  children,
  onClick,
  ...rest
}: PhoneLinkProps) {
  const href = `tel:${normalizePhone(phone)}`;
  const isPrimary = normalizePhone(phone) === normalizePhone(SITE.phone);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    track("phone_click", {
      phone_type: isPrimary ? "mobile" : "landline",
      path: window.location.pathname,
    });

    onClick?.(e);
    if (e.defaultPrevented) return;

    // tel: n'unload pas la page : on envoie la conversion sans bloquer
    // l'appel natif (sinon adblock / gtag.js async cassent le clic).
    window.gtag_report_conversion?.();
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
