import PageHeader from "@/components/page-header";
import XLinks from "@/components/x-links";
import type { Metadata } from "next";
import Easings from "./easings";

export const metadata: Metadata = {
  title: "Tailwind CSS Easing Classes - Origin UI",
  description:
    "A collection of easing utility classes to enhance your Tailwind CSS animations and transitions.",
};

const easings = [
  {
    name: "linear",
    points: [0, 0, 1, 1],
  },
  {
    name: "ease",
    points: [0.25, 0.1, 0.25, 1],
  },
  {
    name: "ease-in",
    points: [0.42, 0, 1, 1],
  },
  {
    name: "ease-out",
    points: [0, 0, 0.58, 1],
  },
  {
    name: "ease-in-out",
    points: [0.42, 0, 0.58, 1],
  },
  {
    name: "easeInSine",
    points: [0.12, 0, 0.39, 0],
  },
  {
    name: "easeOutSine",
    points: [0.61, 1, 0.88, 1],
  },
  {
    name: "easeInOutSine",
    points: [0.37, 0, 0.63, 1],
  },
  {
    name: "easeInQuad",
    points: [0.11, 0, 0.5, 0],
  },
  {
    name: "easeOutQuad",
    points: [0.5, 1, 0.89, 1],
  },
  {
    name: "easeInOutQuad",
    points: [0.45, 0, 0.55, 1],
  },
  {
    name: "easeInCubic",
    points: [0.32, 0, 0.67, 0],
  },
  {
    name: "easeOutCubic",
    points: [0.33, 1, 0.68, 1],
  },
  {
    name: "easeInOutCubic",
    points: [0.65, 0, 0.35, 1],
  },
  {
    name: "easeInQuart",
    points: [0.5, 0, 0.75, 0],
  },
  {
    name: "easeOutQuart",
    points: [0.25, 1, 0.5, 1],
  },
  {
    name: "easeInOutQuart",
    points: [0.76, 0, 0.24, 1],
  },
  {
    name: "easeInQuint",
    points: [0.64, 0, 0.78, 0],
  },
  {
    name: "easeOutQuint",
    points: [0.22, 1, 0.36, 1],
  },
  {
    name: "easeInOutQuint",
    points: [0.83, 0, 0.17, 1],
  },
  {
    name: "easeInExpo",
    points: [0.7, 0, 0.84, 0],
  },
  {
    name: "easeOutExpo",
    points: [0.16, 1, 0.3, 1],
  },
  {
    name: "easeInOutExpo",
    points: [0.87, 0, 0.13, 1],
  },
  {
    name: "easeInCirc",
    points: [0.55, 0, 1, 0.45],
  },
  {
    name: "easeOutCirc",
    points: [0, 0.55, 0.45, 1],
  },
  {
    name: "easeInOutCirc",
    points: [0.85, 0, 0.15, 1],
  },
  {
    name: "easeInBack",
    points: [0.36, 0, 0.66, -0.56],
  },
  {
    name: "easeOutBack",
    points: [0.34, 1.56, 0.64, 1],
  },
  {
    name: "easeInOutBack",
    points: [0.68, -0.6, 0.32, 1.6],
  },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Tailwind CSS easing classes">
            A set of easing functions ready to copy and paste into your Tailwind CSS project.
          </PageHeader>

          <Easings easings={easings} />

          <XLinks />
        </div>
      </div>
    </main>
  );
}
