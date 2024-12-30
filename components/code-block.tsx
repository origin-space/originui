import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";

type Props = {
  children: string;
  lang: BundledLanguage;
};

export async function CodeBlock(props: Props) {
  const code = await codeToHtml(props.children, {
    lang: props.lang,
    theme: "github-dark",
  });

  return (
    <div
      className="[&_code]:font-mono [&_code]:text-[13px] [&_pre]:leading-snug [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:rounded-lg [&_pre]:!bg-zinc-950 [&_pre]:p-4 dark:[&_pre]:!bg-zinc-900"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
