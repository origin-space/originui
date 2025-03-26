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
    description:
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description:
      "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
  },
  {
    id: 3,
    date: "Apr 5, 2024",
    title: "Development Sprint",
    description:
      "Backend API implementation and frontend component development in progress.",
  },
  {
    id: 4,
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    description:
      "Quality assurance testing, performance optimization, and production deployment preparation.",
  },
]

export default function Component() {
  return (
    <Timeline defaultValue={3}>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
