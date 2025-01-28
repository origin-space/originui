import SearchButton from "@/components/search-button";
import { SubscribeBottom } from "@/components/subscribe-form";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/config/components";

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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 my-16 md:my-20">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            slug={category.slug}
            name={category.name}
            componentsCount={category.components.length}
          />
        ))}
        <CategoryCard
          slug="easings"
          name="Easing Classes"
          isEasing={true}
        />
      </div>

      <SubscribeBottom />
    </div>
  );
}

type CategoryCardProps = {
  slug: string;
  name: string;
  componentsCount?: number;
  isEasing?: boolean;
}

function CategoryCard({ slug, name, componentsCount, isEasing = false }: CategoryCardProps) {
  const href = `/${slug}`;
  const imageBasePath = `/thumbs/${slug}`;
  const alt = isEasing ? "Tailwind CSS easing classes" : `${name} components`;

  return (
    <div className="space-y-3 text-center">
      <Link href={href} className="inline-flex sm:flex rounded-xl border border-border dark:border-zinc-700/80 overflow-hidden" tabIndex={-1}>
        <Image 
          className="w-full dark:hidden" 
          src={`${imageBasePath}.png`} 
          alt={alt} 
          width={268} 
          height={198} 
        />
        <Image 
          className="w-full hidden dark:block" 
          src={`${imageBasePath}-dark.png`} 
          alt={`${alt} dark`} 
          width={268} 
          height={198} 
        />
      </Link>
      <div className="mb-0.5">
        <h2>
          <Link href={href} className="text-sm font-medium hover:underline">
            {name}
          </Link>
        </h2>
        <p className="text-[13px] text-muted-foreground">
          {isEasing ? "29 Examples" : `${componentsCount} Components`}
        </p>
      </div>
    </div>
  );
}
