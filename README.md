Origin UI is an extensive collection of copy-and-paste components for quickly building app UIs. It includes hundreds of components and is constantly updated with new stuff.

**Demo** → [https://originui.com](https://originui.com)

## Overview

Origin UI streamlines UI development by providing:

- Hundreds of customizable components
- Consistent styling
- Regular updates and new component additions
- Dark mode support out of the box

## Getting Started

Origin UI is designed to integrate seamlessly with Next.js projects, but the components are also compatible with any React-based project. The components follow shadcn conventions, so they’ll feel familiar to anyone who has used shadcn before.

**1. Set up the required files:**

- Copy all `.tsx` files from Origin UI's `registry/default/ui` folder to your project's `components/ui` folder.
- Copy `utils.ts` from Origin UI's `registry/default/lib` folder to your project's `lib` folder.

Note: If you're using shadcn, you may likely already have these files - however, I would recommend using our components over shadcn's for a consistent styling experience.

**2. Add the following CSS variables to your stylesheet (you don't need to overwrite them if you already have them):**

```
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.14 0 286);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.14 0 286);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.14 0 286);
  --primary: oklch(0.21 0.01 286);
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.97 0 286);
  --secondary-foreground: oklch(0.21 0.01 286);
  --muted: oklch(0.97 0 286);
  --muted-foreground: oklch(0.55 0.01 286);
  --accent: oklch(0.97 0 286);
  --accent-foreground: oklch(0.21 0.01 286);
  --destructive: oklch(0.64 0.21 25);
  --destructive-foreground: oklch(0.99 0 0);
  --border: oklch(0.92 0 286);
  --input: oklch(0.87 0.01 286);
  --ring: oklch(0.14 0 286);
  --radius: 0.5rem;
}

.dark {
  --background: oklch(0.14 0 286);
  --foreground: oklch(0.99 0 0);
  --card: oklch(0.14 0 286);
  --card-foreground: oklch(0.99 0 0);
  --popover: oklch(0.14 0 286);
  --popover-foreground: oklch(0.99 0 0);
  --primary: oklch(0.99 0 0);
  --primary-foreground: oklch(0.21 0.01 286);
  --secondary: oklch(0.27 0.01 286);
  --secondary-foreground: oklch(0.99 0 0);
  --muted: oklch(0.21 0.01 286);
  --muted-foreground: oklch(0.65 0.01 286);
  --accent: oklch(0.21 0.01 286);
  --accent-foreground: oklch(0.99 0 0);
  --destructive: oklch(0.64 0.21 25);
  --destructive-foreground: oklch(0.99 0 0);
  --border: oklch(0.27 0.01 286);
  --input: oklch(0.27 0.01 286);
  --ring: oklch(0.87 0.01 286);
}
```

After completing these steps, you can copy and use the components in your project. Note that some components (e.g., number inputs, date pickers, time pickers, phone number inputs) may require additional libraries.

## Tailwind v4 support

Our UI library has been updated to Tailwind CSS v4 as of February 25, 2025. Legacy components built with v3 remain available by adding `/legacy/` to the component URL:

```bash
# v3 legacy component
pnpm dlx shadcn@latest add https://originui.com/r/legacy/comp-01.json
```

Note: New components will only be developed for Tailwind v4.

## Contributing

We welcome contributions to Origin UI! Please read our [contributing guidelines](CONTRIBUTING.md) on how to submit improvements and new components.

## Terms of Use

Feel free to use these components in personal and commercial projects. However, while the tutorials and demos are available for your use as-is, they cannot be redistributed or resold. Let’s keep things fair and respect each other’s work.

If you have any questions or just want to say hi, feel free to reach out to us on X 👉 [@pacovitiello](https://x.com/pacovitiello) & [@DavidePacilio](https://x.com/DavidePacilio).

## Notes

This project is a work in progress, and we’re continuously working to improve and expand this collection. We’d love to hear your feedback or see your contributions as the project evolves!
