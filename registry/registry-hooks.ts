import { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    name: "use-character-limit",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-character-limit.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-image-upload",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-image-upload.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-pagination",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-pagination.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-slider-with-input",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-slider-with-input.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-toast",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-toast.ts",
        type: "registry:hook",
      },
    ],
  },
];
