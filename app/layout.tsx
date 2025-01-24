import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as Sonner } from "@/registry/default/ui/sonner";
import { Toaster } from "@/registry/default/ui/toaster";
import type { Metadata, Viewport } from "next";
import { Outfit as FontHeading, Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://originui.com"),
  title: "Origin UI - Beautiful UI components built with Tailwind CSS and Next.js",
  description:
    "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative overflow-hidden px-4 before:absolute before:inset-x-0 before:top-[72px] before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))] supports-[overflow:clip]:overflow-clip sm:px-6">
            <div className="relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:-left-8 before:w-px before:bg-[linear-gradient(to_bottom,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))] after:absolute after:inset-y-0 after:-right-8 after:w-px after:bg-[linear-gradient(to_bottom,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))]">
              <div
                className="before:absolute before:-left-8 before:top-[72px] before:size-1 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-muted-foreground/70 after:absolute after:-right-8 after:top-[72px] after:z-10 after:size-1 after:-translate-y-1/2 after:translate-x-1/2 after:bg-muted-foreground/70"
                aria-hidden="true"
              ></div>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
        <Toaster />
        <Sonner />
        <Script
          src="https://plausible.cruip.com/js/script.js"
          data-domain="originui.com"
          strategy="beforeInteractive"
          defer
        />
      </body>
    </html>
  );
}
