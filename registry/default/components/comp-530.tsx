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

const items = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Project Kickoff",
    description: "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
    completed: true,
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description: "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
    completed: true,
  },
  {
    id: 3,
    date: "Apr 5, 2024",
    title: "Development Sprint",
    description: "Backend API implementation and frontend component development in progress.",
    completed: true,
  },
  {
    id: 4,
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    description: "Quality assurance testing, performance optimization, and production deployment preparation.",
  },
];

export default function Component() {
  return (
    <div className="space-y-8">
      <Timeline>
        {items.map((item) => (
        <TimelineItem key={item.id} completed={item.completed}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>
            {item.description}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
