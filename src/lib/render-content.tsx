import Link from "next/link";
import type { ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function parseInlineLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    const normalizedHref = href.startsWith("/") ? href : `/${href}`;

    parts.push(
      <Link
        key={`${match.index}-${label}`}
        href={normalizedHref}
        className="font-medium text-amber-700 underline decoration-amber-300 underline-offset-2 hover:text-amber-900"
      >
        {label}
      </Link>,
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function parseBold(text: string): ReactNode[] {
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  const result: ReactNode[] = [];

  segments.forEach((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      result.push(
        <strong key={`bold-${index}`} className="font-semibold text-zinc-900">
          {segment.slice(2, -2)}
        </strong>,
      );
      return;
    }

    result.push(...parseInlineLinks(segment));
  });

  return result;
}

export function RichParagraph({ text }: { text: string }) {
  return <p className="leading-7 text-zinc-700">{parseBold(text)}</p>;
}

export function RichTextBlock({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text.split("\n\n").map((paragraph, index) => (
        <RichParagraph key={index} text={paragraph.trim()} />
      ))}
    </div>
  );
}
