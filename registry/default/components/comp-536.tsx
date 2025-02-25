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
    date: "15 minutes ago",
    title: "Hannah Kandell",
    action: "opened a new issue",
    description: "I'm having trouble with the new component library. It's not rendering properly.",
    image: "/avatar-40-01.jpg",
  },
  {
    id: 2,
    date: "10 minutes ago",
    title: "Chris Tompson",
    action: "commented on",
    description: "Hey Hannah, I'm having trouble with the new component library. It's not rendering properly.",
    image: "/avatar-40-02.jpg",
  },
  {
    id: 3,
    date: "5 minutes ago",
    title: "Emma Davis",
    action: "assigned you to",
    description: "The new component library is not rendering properly. Can you take a look?",
    image: "/avatar-40-03.jpg",
  },
  {
    id: 4,
    date: "2 minutes ago",
    title: "Alex Morgan",
    action: "closed the issue",
    description: "The issue has been fixed. Please review the changes.",
    image: "/avatar-40-05.jpg",
  },
];

export default function Component() {
  return (
    <div className="space-y-8">
      <Timeline>
        {items.map((item) => (
          <TimelineItem key={item.id} step={item.id} className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8">
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5 group-data-[orientation=vertical]/timeline:-left-7" />
              <TimelineTitle className="mt-0.5">{item.title} <span className="text-sm text-muted-foreground font-normal">{item.action}</span></TimelineTitle>
              <TimelineIndicator className="size-6 flex items-center justify-center group-data-[orientation=vertical]/timeline:-left-7 border-none bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground">
                <img src={item.image} alt={item.title} className="size-6 rounded-full" />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="px-4 py-3 rounded-lg border mt-2 text-foreground">
              {item.description}
              <TimelineDate className="mt-1 mb-0">{item.date}</TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
