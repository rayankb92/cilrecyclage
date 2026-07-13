"use client";

/**
 * Lien téléphone réutilisable.
 * - Centralise le formatage href tel:
 */

import { track } from "@vercel/analytics";
import { SITE } from "@/content/site";

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
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
