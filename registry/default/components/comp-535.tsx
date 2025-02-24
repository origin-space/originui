import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry/default/ui/timeline";
import { GitFork, GitPullRequest, GitCompare, GitMerge } from "lucide-react";

const items = [
  {
    id: 1,
    date: "15 minutes ago",
    title: "Forked Repository",
    description: "Forked the repository to create a new branch for development.",
    icon: GitFork,
  },
  {
    id: 2,
    date: "10 minutes ago",
    title: "Pull Request Submitted",
    description: "Submitted PR #342 with new feature implementation. Waiting for code review from team leads.",
    icon: GitPullRequest,
  },
  {
    id: 3,
    date: "5 minutes ago",
    title: "Comparing Branches",
    description: "Received comments on PR. Minor adjustments needed in error handling and documentation.",
    icon: GitCompare,
  },
  {
    id: 4,
    title: "Merged Branch",
    description: "Merged the feature branch into the main branch. Ready for deployment.",
    icon: GitMerge,
  },
];

export default function Component() {
  return (
    <div className="space-y-8">
      <Timeline defaultValue={3}>
        {items.map((item) => (
          <TimelineItem key={item.id} step={item.id} className="group-data-[orientation=vertical]/timeline:ms-10">
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5 group-data-[orientation=vertical]/timeline:-left-7" />
              <TimelineTitle className="mt-0.5">{item.title}</TimelineTitle>
              <TimelineIndicator className="size-6 flex items-center justify-center group-data-[orientation=vertical]/timeline:-left-7 border-none bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground">
                <item.icon size={14} />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent>
              {item.description}
              <TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
