import SearchButton from "@/components/search-button";
import { SubscribeBottom } from "@/components/subscribe-form";
import { categories } from "@/config/components";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div data-home>
      <div className="max-w-3xl max-sm:text-center">
        <h1 className="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
          Beautiful UI components built with Tailwind CSS and React.
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          A collection of copy-and-paste components for quickly build application UIs.
        </p>
        <SearchButton />
      </div>

      <div className="relative my-16">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              name={category.name}
              componentsCount={category.components.length}
            />
          ))}
          <CategoryCard slug="timeline" name="Timeline" />
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
  const isComingSoon = componentsCount === undefined && !isEasing;

  return (
    <div className="space-y-3 text-center">
      {!isComingSoon ? (
        <Link
          href={href}
          className="peer inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80"
          tabIndex={-1}
        >
          <ImageComponent imageBasePath={imageBasePath} alt={alt} />
        </Link>
      ) : (
        <div className="relative inline-flex overflow-hidden rounded-xl border sm:flex dark:border-zinc-700/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 right-5 z-10 text-zinc-400 dark:text-zinc-500"
            width="27"
            height="13"
            fill="currentColor"
          >
            <path d="M21.74 12.504c-.27 0-.461-.088-.573-.266-.112-.177-.168-.48-.168-.91 0-.345.042-.774.126-1.288.093-.513.205-1.078.336-1.694.13-.625.266-1.27.406-1.932-.57.775-1.2 1.396-1.89 1.862a5.728 5.728 0 0 1-2.268.896c-.196.458-.42.873-.672 1.246a3.67 3.67 0 0 1-.826.896c-.299.224-.612.336-.938.336-.402 0-.742-.163-1.022-.49-.27-.326-.406-.802-.406-1.428 0-.43.056-.812.168-1.148.112-.345.238-.592.378-.742a3.35 3.35 0 0 1-.196-1.19c0-.55.126-1.036.378-1.456.252-.43.588-.76 1.008-.994.42-.242.872-.364 1.358-.364.392 0 .742.182 1.05.546.308.364.462.887.462 1.568 0 .635-.112 1.34-.336 2.114a5.983 5.983 0 0 0 1.54-.896 10.364 10.364 0 0 0 1.512-1.442c.485-.56.924-1.18 1.316-1.862a.483.483 0 0 1 .434-.252c.168 0 .298.052.392.154a.503.503 0 0 1 .154.392c0 .047-.028.206-.084.476-.047.27-.112.616-.196 1.036-.075.42-.159.882-.252 1.386-.094.504-.187 1.013-.28 1.526-.084.514-.154.99-.21 1.428a57.095 57.095 0 0 1 1.554-2.772c.29-.476.564-.91.826-1.302.27-.392.508-.704.714-.938.214-.242.382-.364.504-.364.224 0 .42.075.588.224.168.15.252.304.252.462 0 .215-.024.542-.07.98-.047.43-.103.915-.168 1.456l-.196 1.624a106.6 106.6 0 0 0-.168 1.47c-.047.439-.07.766-.07.98 0 .14-.06.266-.182.378a.584.584 0 0 1-.406.168.391.391 0 0 1-.266-.098c-.066-.056-.117-.186-.154-.392-.038-.205-.056-.522-.056-.952 0-.42.014-.877.042-1.372a39.09 39.09 0 0 1 .112-1.498 27.3 27.3 0 0 1 .182-1.358c-.215.355-.462.78-.742 1.274-.27.495-.556 1.004-.854 1.526a56.588 56.588 0 0 1-.868 1.47c-.28.458-.532.826-.756 1.106-.224.28-.397.42-.518.42ZM16.884 8.29c.112-.354.2-.732.266-1.134.074-.41.112-.821.112-1.232 0-.242-.047-.438-.14-.588-.094-.15-.22-.224-.378-.224-.243 0-.48.07-.714.21-.234.13-.43.318-.588.56-.15.243-.224.532-.224.868 0 .42.158.78.476 1.078.326.29.723.444 1.19.462Zm-.378.966c-.635-.028-1.148-.214-1.54-.56l-.056.35a1.725 1.725 0 0 0-.028.308c0 .29.046.518.14.686a.514.514 0 0 0 .462.238c.168 0 .34-.093.518-.28.177-.186.345-.434.504-.742ZM9.406 12.14c-.55 0-.985-.21-1.302-.63-.317-.42-.476-.966-.476-1.638 0-.243.033-.5.098-.77.075-.28.168-.532.28-.756a.668.668 0 0 1-.154-.266 1.542 1.542 0 0 1-.056-.448A3.965 3.965 0 0 1 8.818 4.93a3.42 3.42 0 0 1 1.022-.798c.383-.187.77-.28 1.162-.28.644 0 1.167.233 1.568.7.401.457.602 1.157.602 2.1 0 .494-.075.998-.224 1.512a7.227 7.227 0 0 1-.588 1.484c-.243.476-.527.9-.854 1.274a4.326 4.326 0 0 1-1.022.896 2.062 2.062 0 0 1-1.078.322ZM8.93 7.87a.478.478 0 0 1 .084.294c0 .14-.028.28-.084.42-.047.14-.098.33-.154.574-.056.242-.084.588-.084 1.036 0 .448.177.672.532.672.392 0 .756-.154 1.092-.462.336-.318.635-.724.896-1.218a7.012 7.012 0 0 0 .602-1.582c.15-.57.224-1.106.224-1.61 0-.327-.06-.556-.182-.686-.121-.14-.34-.21-.658-.21-.327 0-.667.112-1.022.336a2.706 2.706 0 0 0-.868.882c-.233.373-.35.793-.35 1.26 0 .102-.01.2-.028.294ZM1.492 12.462a.84.84 0 0 1-.574-.196c-.14-.121-.21-.257-.21-.406 0-.168.023-.294.07-.378.056-.093.173-.159.35-.196.439-.103.891-.224 1.358-.364.476-.15.92-.304 1.33-.462.41-.168.742-.332.994-.49.261-.159.392-.299.392-.42 0-.112-.103-.22-.308-.322a8.171 8.171 0 0 0-.784-.364c-.317-.13-.658-.275-1.022-.434a7.098 7.098 0 0 1-1.022-.546 3.183 3.183 0 0 1-.784-.7 1.489 1.489 0 0 1-.308-.924c0-.541.13-1.045.392-1.512.27-.476.62-.915 1.05-1.316.43-.401.9-.77 1.414-1.106a16.978 16.978 0 0 1 1.54-.91A127 127 0 0 1 6.742.702a1.403 1.403 0 0 1 .7-.196c.27 0 .467.06.588.182a.577.577 0 0 1 .182.42c0 .13-.07.285-.21.462-.14.168-.34.317-.602.448-.261.13-.574.196-.938.196H6.35c-.317.168-.663.369-1.036.602-.373.233-.742.49-1.106.77-.364.28-.7.57-1.008.868a5.68 5.68 0 0 0-.728.84c-.177.27-.266.518-.266.742 0 .27.103.513.308.728.205.215.467.406.784.574.327.168.667.331 1.022.49.364.159.705.322 1.022.49.327.159.593.336.798.532a.863.863 0 0 1 .308.658c0 .29-.103.565-.308.826a3.296 3.296 0 0 1-.784.728c-.327.215-.686.41-1.078.588a12.234 12.234 0 0 1-2.142.714c-.29.065-.504.098-.644.098Z" />
          </svg>
          <ImageComponent imageBasePath={imageBasePath} alt={alt} />
        </div>
      )}
      <div className="[&_a]:peer-hover:underline">
        <h2>
          {!isComingSoon ? (
            <Link href={href} className="text-sm font-medium hover:underline">
              {name}
            </Link>
          ) : (
            <span className="text-sm font-medium">{name}</span>
          )}
        </h2>
        <p className="text-muted-foreground text-[13px]">
          {isEasing
            ? "29 Examples"
            : !isComingSoon
              ? `${componentsCount} ${componentsCount === 1 ? "Component" : "Components"}`
              : "-"}
        </p>
      </div>
    </div>
  );
}

type ImageComponentProps = {
  imageBasePath: string;
  alt: string;
};

function ImageComponent({ imageBasePath, alt }: ImageComponentProps) {
  return (
    <>
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
    </>
  );
}
