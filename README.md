A growing collection of over 50 input components built with Next.js and TailwindCSS.

**Demo** → [https://origin-ui-alpha.vercel.app/](https://origin-ui-alpha.vercel.app/)

## Documentation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project follows shadcn conventions and structures. If you're already using shadcn, you might only need to install additional dependencies required by some components - check the code comments at the top of each file for details. If you're not using shadcn or encounter issues, here's a checklist:

**1. Ensure these files are present in your app:**

- components/ui/input.tsx
- components/ui/label.tsx
- lib/utils.ts

**2. Add the following CSS variables to your stylesheet (you don't need to overwrite them if you already have them):**

```
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 5.9% 90%;
    --input: 240 4.9% 83.9%;
    --ring: 240 5% 64.9%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 5.9% 10%;
    --muted-foreground: 240 4.4% 58%;
    --accent: 240 5.9% 10%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 3.8% 46.1%;
  }
}
```

**3. Include the previously defined variables in the extend section of your Tailwind config file:**

```
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
```

After completing these steps, you can copy and use the components in your project. Note that some components (e.g., number inputs, date pickers, time pickers, phone number inputs) may require additional libraries - refer to the code comments at the top of each file for specific requirements.

## Terms of Use

Feel free to use these components in personal and commercial projects. However, while the tutorials and demos are available for your use as-is, they cannot be redistributed or resold. Let’s keep things fair and respect each other’s work.

If you have any questions or just want to say hi, feel free to reach out to us on X 👉 [@pacovitiello](https://x.com/pacovitiello) & [@DavidePacilio](https://x.com/DavidePacilio).

## Notes

This project is a work in progress, and we’re continuously working to improve and expand this collection. We’d love to hear your feedback or see your contributions as the project evolves!
