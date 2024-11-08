import { Label } from "@/components/ui/label";
import MultipleSelector, { Option } from "@/components/ui/multiselect";

const frameworks: Option[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];

export default function Select47() {
  return (
    <div className="space-y-2">
      <Label>Multiselect with placeholder and clear</Label>
      <MultipleSelector
        commandProps={{
          label: "Select frameworks",
        }}
        defaultOptions={frameworks}
        placeholder="Select frameworks"
        emptyIndicator={<p className="text-center text-sm">No results found</p>}
      />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Inspired by{" "}
        <a
          className="underline hover:text-foreground"
          href="https://shadcnui-expansions.typeart.cc/docs/multiple-selector"
          target="_blank"
          rel="noopener nofollow"
        >
          shadcn/ui expansions
        </a>
      </p>
    </div>
  );
}
