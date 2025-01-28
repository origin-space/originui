import SearchButton from "@/components/search-button";
import { SubscribeBottom } from "@/components/subscribe-form";
import { categories } from "@/config/components";
import Image from "next/image";
import Link from "next/link";

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

      <div className="relative mb-16 mt-14 pt-14 before:absolute before:-inset-x-32 before:top-0 before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))] md:mb-20">
        <div
          className="before:absolute before:-left-12 before:-top-px before:z-10 before:-ml-px before:size-[3px] before:bg-ring after:absolute after:-right-12 after:-top-px after:z-10 after:-mr-px after:size-[3px] after:bg-ring"
          aria-hidden="true"
        ></div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              name={category.name}
              componentsCount={category.components.length}
            />
          ))}
          <CategoryCard slug="easings" name="Easing Classes" isEasing={true} />
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
};

function CategoryCard({ slug, name, componentsCount, isEasing = false }: CategoryCardProps) {
  const href = `/${slug}`;
  const imageBasePath = `/thumbs/${slug}`;
  const alt = isEasing ? "Tailwind CSS easing classes" : `${name} components`;

  return (
    <div className="space-y-3 text-center">
      <Link
        href={href}
        className="peer inline-flex overflow-hidden rounded-xl border border-border dark:border-zinc-700/80 sm:flex"
        tabIndex={-1}
      >
        <Image
          className="w-full dark:hidden"
          src={`${imageBasePath}.png`}
          alt={alt}
          width={268}
          height={198}
        />
        <Image
          className="hidden w-full dark:block"
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
