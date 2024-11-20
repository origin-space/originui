import { ArrowRight } from "lucide-react";

export default function Banner01() {
  return (
    <div className="px-4 py-3 bg-muted text-foreground dark">
      <p className="flex justify-center text-sm">
        <a href="#" className="group">
          <span className="text-base leading-none me-1">✨</span>
          Introducing transactional and marketing emails
          <ArrowRight
            className="inline-flex -mt-0.5 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </a>
      </p>
    </div>
  );
}