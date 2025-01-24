import PageHeader from "@/components/page-header";
import type { Metadata } from "next";
import ComponentsContainer from "./components-container";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search Origin UI",
  description: "Search for components in the Origin UI library.",
};

export default function Page() {
  return (
    <main>
      <PageHeader title="Search Origin UI">
        Use this page to quickly find a component (e.g., multiselect, vertical slider, etc.)
      </PageHeader>
      <Suspense>
        <ComponentsContainer />
      </Suspense>
    </main>
  );
}
