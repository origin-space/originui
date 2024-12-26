import { Registry } from "@/registry/schema";

export const components: Registry = [
  {
    name: "comp-01",
    type: "registry:component",
    registryDependencies: [
      "http://localhost:3000/r/label.json",
      "http://localhost:3000/r/input.json",
    ],
    files: [
      {
        path: "compositions/comp-01.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-02",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-02.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-03",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-03.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-04",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-04.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-05",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-05.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-06",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-06.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-07",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-07.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-08",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-08.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-09",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-09.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-10",
    type: "registry:component",
    files: [
      {
        path: "compositions/comp-10.tsx",
        type: "registry:component",
      },
    ],
    tags: [],
  },
  {
    name: "comp-42",
    type: "registry:component",
    dependencies: ["lucide-react", "react-aria-components"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "compositions/comp-42.tsx",
        type: "registry:component",
      },
    ],
    tags: ["React Aria"],
  },
];
