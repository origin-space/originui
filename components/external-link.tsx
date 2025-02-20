import { RiArrowRightUpLine } from "@remixicon/react";

export default async function ExternalLink({ text, href }: { text: string; href: string }) {
  return (
    <a className="inline-flex gap-0.5 text-sm hover:underline" href={href} target="_blank">
      {text}
      <span className="hidden sm:inline">
        {" "}
        <RiArrowRightUpLine className="text-muted-foreground/80" size={14} aria-hidden="true" />
      </span>
    </a>
  );
}
