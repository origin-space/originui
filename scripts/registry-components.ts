import type { Schema } from "./registry-schema";

export type ComponentDefinition = Partial<
  Pick<Schema, "dependencies" | "devDependencies" | "registryDependencies" | "cssVars" | "tailwind">
> & {
  name: string;
  path: string;
};

export const components: ComponentDefinition[] = [];
