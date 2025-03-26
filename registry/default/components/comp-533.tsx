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
    date: "15 minutes ago",
    title: "Pull Request Submitted",
    description:
      "Submitted PR #342 with new feature implementation. Waiting for code review from team leads.",
  },
  {
    id: 2,
    date: "10 minutes ago",
    title: "CI Pipeline Started",
    description:
      "Automated tests and build process initiated. Running unit tests and code quality checks.",
  },
  {
    id: 3,
    date: "5 minutes ago",
    title: "Code Review Feedback",
    description:
      "Received comments on PR. Minor adjustments needed in error handling and documentation.",
  },
  {
    id: 4,
    title: "Changes Pushed",
    description:
      "Implemented requested changes and pushed updates to feature branch. Awaiting final approval.",
  },
]

export default function Component() {
  return (
    <Timeline defaultValue={3}>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineTitle className="-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>
            {item.description}
            <TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
