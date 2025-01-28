import SearchButton from "@/components/search-button";
import { SubscribeBottom } from "@/components/subscribe-form";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/config/components";

export default function Page() {
  return (
    <div data-home>
      <div className="max-w-3xl">
        <h1 className="mb-4 font-heading text-4xl/[1.1] font-bold tracking-tight text-foreground md:text-5xl/[1.1]">
          Beautiful UI components built with Tailwind CSS and React.
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          A collection of copy-and-paste components for quickly build application UIs.
        </p>
        <SearchButton />
      </div>

      <div className="mt-14 pt-14 mb-16 md:mb-20 relative before:absolute before:-inset-x-32 before:top-0 before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))]">
        <div
          className="before:absolute before:-left-12 before:-ml-px before:-top-px before:size-[3px] before:bg-ring before:z-10 after:absolute after:-right-12 after:-mr-px after:-top-px after:size-[3px] after:bg-ring after:z-10"
          aria-hidden="true"
        ></div>   
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
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
      <Link href={href} className="inline-flex sm:flex rounded-xl border border-border dark:border-zinc-700/80 overflow-hidden peer" tabIndex={-1}>
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
      <div className="mb-0.5 peer-hover:[&_a]:underline">
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
