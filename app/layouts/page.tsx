import type { Metadata } from "next"

import PageHeader from "@/components/page-header"

import Card from "./card"

export const metadata: Metadata = {
  title: "UI Layouts built with Tailwind CSS and React - Origin UI",
  description:
    "Beautiful UI layouts built with Tailwind CSS and React to help you get started with your next project.",
}

const cards = [
  {
    id: 7,
    title: "Schema Visualizer",
    demoUrl: "https://crafted.is/exp7",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-07",
    cmd: "npx shadcn init https://ui-experiment-07.vercel.app/r/experiment-07.json",
    imgHeight: 700,
  },
  {
    id: 6,
    title: "Event Calendar",
    demoUrl: "https://crafted.is/exp6",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-06",
    cmd: "npx shadcn init https://ui-experiment-06.vercel.app/r/experiment-06.json",
    imgHeight: 688,
  },
  {
    id: 5,
    title: "Candlestick Chart",
    demoUrl: "https://crafted.is/exp5",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-05",
    cmd: "npx shadcn init https://ui-experiment-05.vercel.app/r/experiment-05.json",
    imgHeight: 770,
  },
  {
    id: 4,
    title: "Crypto Wallet",
    demoUrl: "https://crafted.is/exp4",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-04",
    cmd: "npx shadcn init https://ui-experiment-04.vercel.app/r/experiment-04.json",
    imgHeight: 894,
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    demoUrl: "https://crafted.is/exp3",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-03",
    cmd: "npx shadcn init https://ui-experiment-03.vercel.app/r/experiment-03.json",
    imgHeight: 829,
  },
  {
    id: 2,
    title: "AI Chat",
    demoUrl: "https://crafted.is/exp2",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-02",
    cmd: "npx shadcn init https://ui-experiment-02.vercel.app/r/experiment-02.json",
    imgHeight: 700,
  },
  {
    id: 1,
    title: "Dark Table",
    demoUrl: "https://crafted.is/exp1",
    repoUrl:
      "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-01",
    cmd: "npx shadcn init https://ui-experiments-green.vercel.app/r/experiment-01.json",
    imgHeight: 894,
  },
]

export default function Page() {
  return (
    <>
      <PageHeader title="Layouts &amp; Experiments">
        Beautifully designed open-source layouts and UI experiments built with
        Origin UI and shadcn/ui.
      </PageHeader>

      {/* Cards */}
      <div className="space-y-16">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  )
}
