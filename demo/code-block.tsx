import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import React, { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki";

export async function CodeBlock({ code }: { code: string }) {
  const out = await getCachedHighlightedCode(code);

  // @ts-expect-error - the type is wrong
  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ style, className, ...props }) => (
        <pre
          data-custom-codeblock
          {...props}
          className="max-h-[calc(100vh-260px)] overflow-x-auto rounded-lg border bg-zinc-950 py-4 ps-2 dark:bg-zinc-900 md:max-h-[calc(100vh-350px)]"
        />
      ),
      code: ({ style, className, ...props }) => (
        <code
          data-custom-code
          {...props}
          className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm"
        />
      ),
    },
  });
}

const getCachedHighlightedCode = React.cache(async (code: string) => {
  return await codeToHast(code, {
    lang: "ts",
    theme: "github-dark-default",
  });
});
