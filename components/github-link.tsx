import { RiArrowRightUpLine } from "@remixicon/react";

export default async function GithubLink() {
  return (
    <a
      className="text-sm inline-flex gap-0.5 hover:underline"
      href="https://github.com/origin-space/originui"
      target="_blank"
    >
      GitHub <RiArrowRightUpLine className="text-muted-foreground/80" size={14} aria-hidden="true" />
    </a>
  );
}
