import React from 'react';
import MultipleSelector, { Option } from '@/components/ui/multiselect';
import { Label } from '@/components/ui/label';

const frameworks: Option[] = [
  {
    value: "next.js",
    label: "Next.js",
    group: "React"
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    group: "Other"
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    group: "Vue",
  },
  {
    value: "remix",
    label: "Remix",
    group: "React"
  },
  {
    value: "astro",
    label: "Astro",
    group: "React"
  },
  {
    value: "angular",
    label: "Angular",
    group: "Other"
  },
  {
    value: "vue",
    label: "Vue.js",
    group: "Vue"
  },
  {
    value: "react",
    label: "React",
    group: "React"
  },
  {
    value: "ember",
    label: "Ember.js",
    group: "Other"
  },
  {
    value: "gatsby",
    label: "Gatsby",
    group: "React"
  },
  {
    value: "eleventy",
    label: "Eleventy",
    group: "Other",
  },
  {
    value: "solid",
    label: "SolidJS",
    group: "Other"
  },
  {
    value: "preact",
    label: "Preact",
    group: "React"
  },
  {
    value: "qwik",
    label: "Qwik",
    group: "Other"
  },
  {
    value: "alpine",
    label: "Alpine.js",
    group: "Other"
  },
  {
    value: "lit",
    label: "Lit",
    group: "Other"
  },
]

export default function Select50() {
  return (
    <div className="space-y-2">
      <Label>Multiselect with placeholder and clear</Label>
      <MultipleSelector
        commandProps={{
          label: 'Select frameworks',
        }}
        defaultOptions={frameworks}
        placeholder="Select frameworks"
        emptyIndicator={
          <p className="text-center text-sm">
            No results found
          </p>
        }
        groupBy="group"
      />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Inspired to{" "}
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
};
