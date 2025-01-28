import SearchButton from "@/components/search-button";
import { SubscribeBottom } from "@/components/subscribe-form";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/config/components"

export default function Page() {
  return (
    <div data-home>
      <div className="mb-16 max-w-3xl">
        <h1 className="mb-4 font-heading text-4xl/[1.1] font-bold tracking-tight text-foreground md:text-5xl/[1.1]">
          Beautiful UI components built with Tailwind CSS and React.
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Origin UI is an extensive collection of copy-and-paste components for quickly building
          app UIs. It&lsquo;s free, open-source, and ready to drop into your projects.
        </p>
        <SearchButton />
      </div>

      <div className="grid grid-cols-4 gap-6 my-16 md:my-20">
        {categories.map((category) => (
          <div key={category.slug} className="space-y-3">
            <Link href={`/${category.slug}`} className="block rounded-xl border border-border overflow-hidden" tabIndex={-1}>
              <Image className="dark:hidden" src={`/thumbs/${category.slug}.png`} alt={`${category.name} components`} width={268} height={198} />
              <Image className="hidden dark:block" src={`/thumbs/${category.slug}-dark.png`} alt={`${category.name} components dark`} width={268} height={198} />
            </Link>
            <div className="text-center mb-0.5">
              <h2>
                <Link href={`/${category.slug}`} className="text-sm font-medium hover:underline">
                  {category.name}
                </Link>
              </h2>
              <p className="text-[13px] text-muted-foreground">{category.components.length} Components</p>
            </div>
          </div>
        ))}
      </div>

      <SubscribeBottom />
    </div>
  );
}
