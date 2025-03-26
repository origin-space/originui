import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry/default/ui/timeline"

const items = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Project Kickoff",
    description: "Initial team meeting.",
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description: "Completed wireframes.",
  },
  {
    id: 3,
    date: "Apr 5, 2024",
    title: "Development Sprint",
    description: "Backend development.",
  },
  {
    id: 4,
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    description: "Performance optimization.",
  },
]

export default function Component() {
  return (
    <Timeline defaultValue={3} orientation="horizontal">
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=horizontal]/timeline:mt-0"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=horizontal]/timeline:top-8" />
            <TimelineDate className="mb-10">{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator className="group-data-[orientation=horizontal]/timeline:top-8" />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
