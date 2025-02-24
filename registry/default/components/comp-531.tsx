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
    date: "Dec 25, 2021",
    title: "Step One",
    description: "Desc for step one",
    completed: true,
  },
  {
    id: 2,
    date: "Dec 25, 2021",
    title: "Step Two",
    description: "Desc for step two",
    completed: true,
  },
  {
    id: 3,
    date: "Dec 25, 2021",
    title: "Step Three",
    description: "Desc for step three",
    completed: true,
  },
  {
    id: 4,
    date: "Dec 25, 2021",
    title: "Step Four",
    description: "Desc for step four",
  },
  
];

export default function Component() {
  return (
    <div className="space-y-8">

      <Timeline orientation="horizontal">
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

      <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
        Vertical stepper with inline titles and descriptions
      </p>
    </div>
  );
}
