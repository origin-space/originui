import { Registry } from "@/registry/schema";

export const lib: Registry = [
  {
    name: "utils",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
      {
        path: "lib/clamp.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "clamp",
    type: "registry:lib",
    dependencies: [],
    files: [
      {
        path: "lib/clamp.ts",
        type: "registry:lib",
      },
    ],
  },
];
