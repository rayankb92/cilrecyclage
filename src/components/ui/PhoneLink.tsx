"use client";

/**
 * Lien téléphone réutilisable.
 * - Centralise le formatage href tel:
 * - Envoie une conversion Google Ads au clic (numéro mobile par défaut)
 */

import { SITE } from "@/content/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function normalizePhone(phone: string) {
  return phone.replace(/\s/g, "");
}

const PHONE_CONVERSION_SEND_TO = `${SITE.googleAds.id}/${SITE.googleAds.phoneConversionLabel}`;

interface PhoneLinkProps extends Omit<React.ComponentPropsWithoutRef<"a">, "href"> {
  phone?: string;
  /** Track Google Ads conversion on click. Defaults to true for the mobile number. */
  trackConversion?: boolean;
}

export function PhoneLink({
  phone = SITE.phone,
  className,
  children,
  trackConversion,
  onClick,
  ...rest
}: PhoneLinkProps) {
  const href = `tel:${normalizePhone(phone)}`;
  const isPrimary = normalizePhone(phone) === normalizePhone(SITE.phone);
  const shouldTrack = trackConversion ?? isPrimary;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (shouldTrack && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: PHONE_CONVERSION_SEND_TO,
      });
    }
    onClick?.(e);
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
