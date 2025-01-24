import { cn } from "@/registry/default/lib/utils";
import type { RegistryItem } from "@/registry/schema";

export default function ComponentCard({
  children,
  component,
}: {
  children: React.ReactNode;
  component: RegistryItem;
}) {
  return (
    <div
      className={cn(
        "group/item relative -space-x-px border border-border",
        component.meta?.cols === 2
          ? "sm:col-span-3 lg:col-span-3"
          : component.meta?.cols === 3
            ? "sm:col-span-6 lg:col-span-6"
            : "col-span-6 sm:col-span-3 lg:col-span-2",
      )}
    >
      {children}
    </div>
  );
}
