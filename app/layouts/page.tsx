import PageHeader from "@/components/page-header";
import Card from "./card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Layouts built with Tailwind CSS and React - Origin UI",
  description:
    "Beautiful UI layouts built with Tailwind CSS and React to help you get started with your next project.",
};

const cards = [
  {
    id: 3,
    title: "SaaS Dashboard",
    demoUrl: "https://ui-experiment-03.vercel.app/",
    repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-03",
    imgHeight: 829,
  },
  {
    id: 2,
    title: "AI Chat",
    demoUrl: "https://ui-experiment-02.vercel.app/",
    repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-02",
    imgHeight: 700,
  },
  {
    id: 1,
    title: "Dark Table",
    demoUrl: "https://ui-experiments-green.vercel.app/",
    repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-01",
    imgHeight: 894,
  },
];

export default function Page() {
  return (
    <>
      <PageHeader title="Layouts">
        Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </PageHeader>

      {/* Cards */}
      <div className="space-y-12">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>      

    </>
  );
}
