import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <Button
      className="group relative h-12 w-[240px] overflow-hidden rounded-full border border-[hsl(var(--border))] bg-gradient-to-r from-[hsl(var(--muted)/0.2)] via-[hsl(var(--muted)/0.1)] to-[hsl(var(--muted)/0.3)] px-6 text-[hsl(var(--foreground))] transition-all duration-500 hover:from-[hsl(var(--muted)/0.5)] hover:via-[hsl(var(--muted)/0.3)] hover:to-[hsl(var(--muted)/0.2)] hover:shadow-md"
      variant="outline"
    >
      <style>{`@keyframes m{from{transform:translateX(0%)}to{transform:translateX(-100%)}}`}</style>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex animate-[m_15s_linear_infinite] whitespace-nowrap font-semibold group-hover:[animation-play-state:paused]"
          >
            {[...Array(10)].map((_, j) => (
              <span key={j} className="ml-4 space-x-4 text-sm">
                <span>Click Me</span>
                <span>•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </Button>
  );
}
