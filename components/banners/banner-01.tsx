// Dependencies: pnpm install lucide-react

import { ArrowRight } from "lucide-react";

export default function BannerDemo() {
  return (
    <div className="dark bg-muted px-4 py-3 text-foreground">
      <p className="flex justify-center text-sm">
        <a href="#" className="group">
          <span className="me-1 text-base leading-none">✨</span>
          Introducing transactional and marketing emails
          <ArrowRight
            className="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </a>
      </p>
    </div>
  );
}
