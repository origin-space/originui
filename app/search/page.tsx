import ComponentsContainer from "./components-container";
import PageHeader from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Origin UI",
  description:
    "Use this page to quickly find a component (e.g., multiselect, vertical slider, etc.)",
};

export default function Page() {
  return (
    <main>
      <PageHeader title="Search Origin UI">
        Use this page to quickly find a component (e.g., multiselect, vertical slider, etc.)
      </PageHeader>

      <ComponentsContainer />

    </main>
  );
}
