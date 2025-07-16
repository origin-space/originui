# Timeline Component

Timelines display events in chronological order. Use them for project milestones, activity feeds, process workflows, or any sequence of events. They work great when you need to show progress over time, track completion status, or display user activities. Timelines handle both simple milestones and complex activity feeds with rich content.

Progress bars show completion percentage, but timelines show individual steps and their status. Cards display static content, but timelines emphasize the temporal relationship between items. Pick from 12 styles below based on your needs: orientation (vertical/horizontal), content type (simple/rich), special features (completion/icons), and layout style (classic/alternating/bordered).

## Which 'Timeline' variant do you need?

### Need a horizontal layout for workflows or processes?

**Just the basics:**
- Simple steps with dates? Use `HorizontalTimeline`

**With full content:**
- Need descriptions for each step? Use `HorizontalDetailedTimeline`

**Activity feed with all the bells and whistles:**
- Complex activity tracking with icons and timestamps? Use `HorizontalActivityFeed`

### Building vertical timelines? What's your main purpose?

**Title only - the simplest:**
- Basic milestone list? Use `TitleOnlyTimeline`

**Title with descriptions:**
- Need to show details for each item? Use `StandardTimeline`

**With completion tracking:**
- Showing task completion with checkmarks? Use `CheckmarkTimeline`

**With custom action icons:**
- Git-style or process icons? Use `GitIconTimeline`

### Need activity feeds or social timelines?

**Social-style with avatars:**
- User activities with profile pictures? Use `SocialTimeline`

**System logs or events:**
- Clean bordered list for logs? Use `BorderedListTimeline`

### Want special layouts for visual impact?

**Alternating left/right:**
- Visual storytelling with balance? Use `AlternatingTimeline`

**Dates outside the flow:**
- Clean focus on content with external dates? Use `ExternalDateTimeline`

**Dates after content:**
- Recent activity with dates below? Use `DateBelowTimeline`

## 📊 COMPLETE COMPONENT MATRIX

### Core Timeline Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **TitleOnlyTimeline** (read if you plan to implement: registry/default/components/comp-530.tsx) | 56 | Title and indicator only | Simple milestone tracking |
| **HorizontalTimeline** (read if you plan to implement: registry/default/components/comp-541.tsx) | 56 | Horizontal orientation | Progress steps, workflows |
| **BorderedListTimeline** (read if you plan to implement: registry/default/components/comp-538.tsx) | 58 | Bordered list format | Activity logs, system events |
| **StandardTimeline** (read if you plan to implement: registry/default/components/comp-532.tsx) | 60 | Content descriptions | Project milestones |
| **HorizontalDetailedTimeline** (read if you plan to implement: registry/default/components/comp-540.tsx) | 60 | Horizontal with full content | Multi-step processes |
| **DateBelowTimeline** (read if you plan to implement: registry/default/components/comp-533.tsx) | 61 | Dates after content | Recent activity displays |
| **AlternatingTimeline** (read if you plan to implement: registry/default/components/comp-537.tsx) | 64 | Alternating left/right layout | Visual storytelling |
| **ExternalDateTimeline** (read if you plan to implement: registry/default/components/comp-531.tsx) | 66 | Dates positioned outside | Clean content focus |
| **CheckmarkTimeline** (read if you plan to implement: registry/default/components/comp-534.tsx) | 71 | Completion checkmarks | Task completion tracking |
| **GitIconTimeline** (read if you plan to implement: registry/default/components/comp-535.tsx) | 73 | Custom action icons | Git workflow, processes |
| **SocialTimeline** (read if you plan to implement: registry/default/components/comp-536.tsx) | 84 | Avatars and content boxes | Social activity, notifications |
| **HorizontalActivityFeed** (read if you plan to implement: registry/default/components/comp-539.tsx) | **130** | Icons, relative time, activity feed | Complex user activity tracking |

### Layout Categories

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Vertical Basic** | TitleOnlyTimeline, StandardTimeline, CheckmarkTimeline | Standard project tracking, milestones |
| **Horizontal** | HorizontalTimeline, HorizontalDetailedTimeline | Step-by-step processes, workflows |
| **List Style** | BorderedListTimeline, HorizontalActivityFeed | System logs, activity feeds |
| **User-Focused** | SocialTimeline, HorizontalActivityFeed | Social platforms, team collaboration |
| **Specialized Layouts** | AlternatingTimeline, ExternalDateTimeline | Visual storytelling, content-focused displays |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 TitleOnlyTimeline (comp-530)

**Description**: The simplest timeline component with titles and indicators only. Perfect for basic milestone tracking.

**When to Use**:
- Project milestone displays
- Simple progress tracking
- Quick status overviews
- When space is limited
- Default starting point for any timeline

**Implementation After Refactoring**:
```tsx
import TitleOnlyTimeline from '@/components/TitleOnlyTimeline'

const milestones = [
  { id: 1, title: "Project Kickoff" },
  { id: 2, title: "Design Phase" },
  { id: 3, title: "Development Sprint" },
  { id: 4, title: "Testing & Deployment" }
]

<TitleOnlyTimeline 
  items={milestones}
  currentStep={3}
  onStepClick={handleStepClick}
/>
```

**Props to Implement**: `items`, `currentStep`, `onStepClick`, `orientation`

---

### 🔷 SocialTimeline (comp-536)

**Description**: Social timeline with user avatars, actions, and bordered content boxes. Ideal for activity feeds and notifications.

**When to Use**:
- Social media activity feeds
- Team collaboration timelines
- Notification systems
- Issue tracking interfaces
- Comment threads and discussions

**Implementation After Refactoring**:
```tsx
import SocialTimeline from '@/components/SocialTimeline'

const activities = [
  {
    id: 1,
    user: "Hannah Kandell",
    action: "opened a new issue",
    description: "I'm having trouble with the new component library.",
    image: "/avatar-01.jpg",
    date: "15 minutes ago"
  }
]

<SocialTimeline 
  activities={activities}
  onUserClick={handleUserClick}
  onActionClick={handleActionClick}
/>
```

**Props to Implement**: `activities`, `onUserClick`, `onActionClick`, `showBorders`

---

### 🔷 CheckmarkTimeline (comp-534)

**Description**: Timeline with checkmark indicators for completed steps. Shows completion status visually.

**When to Use**:
- Task completion tracking
- Multi-step form progress
- Onboarding flows
- Process checklists
- Goal achievement displays

**Implementation After Refactoring**:
```tsx
import CheckmarkTimeline from '@/components/CheckmarkTimeline'

const tasks = [
  { id: 1, title: "Setup Account", completed: true },
  { id: 2, title: "Configure Settings", completed: true },
  { id: 3, title: "Invite Team", completed: false },
  { id: 4, title: "Launch Project", completed: false }
]

<CheckmarkTimeline 
  tasks={tasks}
  onTaskToggle={handleTaskToggle}
  showCheckmarks={true}
/>
```

**Props to Implement**: `tasks`, `onTaskToggle`, `showCheckmarks`, `completedColor`

---

### 🔷 HorizontalActivityFeed (comp-539)

**Description**: Advanced horizontal activity feed with icons, relative timestamps, and rich user interaction. The most feature-complete timeline.

**When to Use**:
- Complex user activity tracking
- Dashboard activity feeds
- Real-time event logging
- Social platform updates
- Any comprehensive activity system

**Implementation After Refactoring**:
```tsx
import HorizontalActivityFeed from '@/components/HorizontalActivityFeed'

const activities = [
  {
    id: 1,
    user: "Matt",
    action: "post",
    image: "/avatar-01.jpg",
    date: new Date(Date.now() - 60000)
  }
]

<HorizontalActivityFeed 
  activities={activities}
  onActionClick={handleActionClick}
  showRelativeTime={true}
  refreshInterval={30000}
/>
```

**Props to Implement**: `activities`, `onActionClick`, `showRelativeTime`, `refreshInterval`, `actionIcons`

---

### 🔷 HorizontalTimeline (comp-541)

**Description**: Timeline displayed horizontally, perfect for step-by-step processes and workflows.

**When to Use**:
- Multi-step processes
- Workflow visualization
- Progress indicators
- Sequential task displays
- When vertical space is limited

**Implementation After Refactoring**:
```tsx
import HorizontalTimeline from '@/components/HorizontalTimeline'

const steps = [
  { id: 1, title: "Planning", date: "Mar 15, 2024" },
  { id: 2, title: "Design", date: "Mar 22, 2024" },
  { id: 3, title: "Development", date: "Apr 5, 2024" },
  { id: 4, title: "Testing", date: "Apr 19, 2024" }
]

<HorizontalTimeline 
  steps={steps}
  currentStep={2}
  orientation="horizontal"
/>
```

**Props to Implement**: `steps`, `currentStep`, `orientation`, `stepSpacing`

---

### 🔷 AlternatingTimeline (comp-537)

**Description**: Timeline with alternating left/right layout for visual storytelling and enhanced readability.

**When to Use**:
- Visual storytelling
- Enhanced readability for long timelines
- Marketing or company history pages
- Content-heavy timeline displays
- When visual balance is important

**Implementation After Refactoring**:
```tsx
import AlternatingTimeline from '@/components/AlternatingTimeline'

const events = [
  { id: 1, title: "Project Start", date: "Mar 15, 2024" },
  { id: 2, title: "First Milestone", date: "Mar 22, 2024" }
]

<AlternatingTimeline 
  events={events}
  currentStep={1}
  centerLine={true}
/>
```

**Props to Implement**: `events`, `currentStep`, `centerLine`, `alternatingPattern`

---

### 🔷 BorderedListTimeline (comp-538)

**Description**: Clean list-style timeline with borders and formatted dates. Ideal for system logs and event tracking.

**When to Use**:
- System activity logs
- Event tracking
- Audit trails
- Simple chronological lists
- When clean, minimal design is needed

**Implementation After Refactoring**:
```tsx
import BorderedListTimeline from '@/components/BorderedListTimeline'

const events = [
  {
    id: 1,
    description: "System backup completed successfully.",
    date: new Date("2024-01-09T10:55:00")
  }
]

<BorderedListTimeline 
  events={events}
  dateFormat="full"
  showBorders={true}
/>
```

**Props to Implement**: `events`, `dateFormat`, `showBorders`, `maxHeight`

---

## 🎨 SPECIALIZED LAYOUTS & VARIANTS

### GitIconTimeline (comp-535)
```tsx
// Timeline with custom icons for different action types
<GitIconTimeline 
  events={gitEvents}
  iconMapping={{ fork: GitFork, merge: GitMerge }}
/>
```

### ExternalDateTimeline (comp-531)
```tsx
// Dates positioned outside the main timeline flow
<ExternalDateTimeline 
  events={events}
  datePosition="external"
  showConnectors={true}
/>
```

### DateBelowTimeline (comp-533)
```tsx
// Dates displayed after content descriptions
<DateBelowTimeline 
  events={events}
  datePosition="below"
/>
```

### HorizontalDetailedTimeline (comp-540)
```tsx
// Horizontal timeline with full content descriptions
<HorizontalDetailedTimeline 
  steps={detailedSteps}
  orientation="horizontal"
  showDescriptions={true}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Project Timeline
```tsx
// Start here for simple project tracking
import TitleOnlyTimeline from '@/components/TitleOnlyTimeline'

<TitleOnlyTimeline 
  items={[
    { id: 1, title: "Planning" },
    { id: 2, title: "Development" },
    { id: 3, title: "Testing" }
  ]}
  currentStep={2}
/>
```

### User Activity Feed
```tsx
// For social platforms and activity tracking
import SocialTimeline from '@/components/SocialTimeline'

<SocialTimeline 
  activities={userActivities}
  showAvatars={true}
  enableInteraction={true}
/>
```

### Process Workflow
```tsx
// For step-by-step processes and workflows
import HorizontalTimeline from '@/components/HorizontalTimeline'

<HorizontalTimeline 
  steps={workflowSteps}
  orientation="horizontal"
  showProgress={true}
/>
```

### Advanced Activity Feed
```tsx
// For comprehensive activity tracking
import HorizontalActivityFeed from '@/components/HorizontalActivityFeed'

<HorizontalActivityFeed 
  activities={complexActivities}
  showRelativeTime={true}
  enableFiltering={true}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 60 LoC**: Basic timelines with minimal features (BasicTimeline, HorizontalTimeline)
- **60-70 LoC**: Standard timelines with content (SimpleTimeline, CheckIconTimeline)
- **70-85 LoC**: Feature-rich with icons or special layouts (CustomIconTimeline, UserActivityTimeline)
- **> 130 LoC**: Complex activity feeds with advanced features (ActivityFeedTimeline)

**Why LoC matters**: Timeline complexity directly affects:
- Maintenance and customization effort
- Performance and rendering speed
- User interaction complexity
- Data structure requirements

### Timeline Composition
Timeline components use shared building blocks from `/components/timeline/`:
- `timeline-item.tsx` - Individual timeline entries
- `timeline-indicator.tsx` - Step markers and icons
- `timeline-separator.tsx` - Connecting lines
- `timeline-content.tsx` - Content display areas
- `timeline-date.tsx` - Date formatting components

**Pro tip**: Mix and match these building blocks to create custom timeline layouts quickly.

### Orientation Patterns
All timelines support consistent orientation patterns:
1. **Vertical** (default): Top-to-bottom flow for chronological data
2. **Horizontal**: Left-to-right for process steps
3. **Alternating**: Left/right alternation for visual balance
4. **List**: Minimal vertical layout for dense information

### Performance Tips
1. Start with the simplest timeline that meets your needs
2. Use virtualization for timelines with 100+ items
3. Lazy load content for complex timeline entries
4. Implement date range filtering for large datasets
5. Cache relative time calculations

### Accessibility
- All timelines include proper ARIA labels and roles
- Keyboard navigation fully supported for interactive elements
- Screen reader announcements for timeline updates
- Focus management for step selection
- High contrast mode support for all indicators
- Mobile touch targets meet WCAG guidelines

### Data Structure Patterns
```
Timeline Data Flow:
  Raw Data → Processing → Timeline Items → Render → User Interaction
      ↓           ↓             ↓           ↓            ↓
   Database   Transform     Components   Display    Callbacks
```

### Migration Path
```
TitleOnlyTimeline → StandardTimeline → CheckmarkTimeline → HorizontalActivityFeed
   (56 LoC)          (60 LoC)          (71 LoC)            (130 LoC)
```

Start simple, add features as user needs grow!