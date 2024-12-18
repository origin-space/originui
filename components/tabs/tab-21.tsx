"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const tabItems = [
  { id: "tab-1", label: "Tab 1", content: "Content for Tab 1" },
  { id: "tab-2", label: "Tab 2", content: "Content for Tab 2" },
  { id: "tab-3", label: "Tab 3", content: "Content for Tab 3" },
  { id: "tab-4", label: "Tab 4", content: "Content for Tab 4" },
  { id: "tab-5", label: "Tab 5", content: "Content for Tab 5" },
  { id: "tab-6", label: "Tab 6", content: "Content for Tab 6" },
];

export default function TabDemo() {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <Tabs defaultValue="tab-1" onValueChange={setActiveTab}>
      <div className="relative w-full">
        <TabsList className="relative flex rounded-full bg-gray-100 dark:bg-muted">
          {/* Active background with dynamic width */}
          <div
            className={`absolute left-0 top-0 h-full rounded-full bg-primary p-3 transition-transform duration-300`}
            style={{
              width: `${100 / tabItems.length}%`,
              transform: `translateX(${tabItems.findIndex((tab) => tab.id === activeTab) * 100}%)`,
            }}
          ></div>
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`relative z-10 flex-1 px-4 py-2 text-center text-gray-600 transition-colors hover:text-gray-800 data-[state=active]:bg-transparent data-[state=active]:text-white dark:data-[state=active]:text-black ${
                activeTab === tab.id ? "font-semibold text-white" : ""
              }`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabItems.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          <p className="p-4 text-center text-xs text-muted-foreground">{tab.content}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
}
