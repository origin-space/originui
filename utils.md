# Getting Started with Origin UI

Origin UI is designed for easy integration into Next.js projects, though it's also compatible with any React-based project. Following the shadcn conventions, Origin UI components should feel familiar if you've used shadcn before.

<br/>

 > **Note:** If your project already uses shadcn, you may have some of these files. For a consistent styling experience, we recommend using Origin UI's components instead.

<br/>

## Step 1: Set Up the Required Files

<br/>

 In your project’s `src` directory (or root if not using `src`), create the following folders to organize the components and utility files from Origin UI:

 <br/>

   ```plaintext
   src/
   ├── components/
   │   └── ui/
   └── lib/
   ```

1. **Copy Component Files**  
   - Copy all `.tsx` files from Origin UI's `components/ui` folder into your project’s `components/ui` folder.  
   - [Click here to navigate and coppy the files.](https://github.com/origin-space/originui/tree/main/components/ui)

2. **Copy Utility File**  
   - Copy the `utils.ts` file from Origin UI's `lib` folder to your project’s `lib` folder.  
   - [Click here to navigate to the utils source file.](https://github.com/origin-space/originui/blob/main/lib/utils.ts)

<br/>

## Step 2: Configure CSS Variables

<br/>

To ensure consistent styling, add the following CSS variables to your main stylesheet. You don’t need to overwrite existing variables if they’re already defined.
Copy the given code in your `globals.css` file
<br/>

```css
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

## Step 3: Add CSS Variables to Tailwind Configuration

Include these CSS variables in the `extend` section of your `tailwind.config.js` file:

```js
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

After completing these steps, Origin UI components are ready to use in your project. Some components (e.g., number inputs, date pickers, time pickers, phone number inputs) may require additional libraries. Refer to the comments at the top of each component file for specific setup instructions.

   
