# Popover Component

Popovers float next to a trigger element and show extra content when clicked. Use them for help text, quick forms, notifications, or any content too important for tooltips but too small for modals. They stay attached to their trigger, dismiss on outside clicks, and work great for contextual interactions without leaving the page.

Tooltips only show text on hover, but popovers can contain buttons, forms, and complex layouts. Dropdowns are for picking options, but popovers handle any content type. Modals take over the whole screen, but popovers stay connected to their trigger. Pick from 9 styles below based on your needs: information display, user input, social sharing, or notifications.

## Which 'Popover' variant do you need?

### Need to show information or help content?

**Just a simple explanation with an action button:**
- Use `TooltipPopover`

**Multiple tips users can step through:**
- Want forward-only navigation (with restart)? Use `StepTooltipPopover`
- Need both previous/next navigation controls? Use `NavigableTooltipPopover`

**Full product tour that points to specific UI elements:**
- Use `TourPopover` (has anchored positioning + card grid layout)

### Need to collect user input?

**Quick text feedback or bug reports:**
- Use `FeedbackPopover` (single textarea + submit)

**Multiple checkbox filters for data tables:**
- Use `FilterPopover` (checkboxes + clear/apply actions)

### Need social sharing with platform buttons?
- Use `SharePopover` (Twitter/Facebook/Email + copy link)

### Building a notification system?

**Simple notification list with badges:**
- Use `NotificationsPopover` (unread states + mark all as read)

**Rich notifications with user avatars and visual context:**
- Use `NotificationsWithAvatarsPopover`

## 📊 COMPLETE COMPONENT MATRIX

### Core Interactive Popovers

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **TooltipPopover** (read if you plan to implement: registry/default/components/comp-384.tsx) | 32 | Static content + action button | Simple info with CTA |
| **FeedbackPopover** (read if you plan to implement: registry/default/components/comp-388.tsx) | 33 | Form with textarea | Quick feedback collection |
| **StepTooltipPopover** (read if you plan to implement: registry/default/components/comp-385.tsx) | 70 | Multi-step navigation (3 tips) | Onboarding tips |
| **FilterPopover** (read if you plan to implement: registry/default/components/comp-381.tsx) | 75 | Checkbox form + clear/apply | Data filtering |
| **NavigableTooltipPopover** (read if you plan to implement: registry/default/components/comp-386.tsx) | 104 | Prev/next navigation (5 tips) | Help systems |
| **TourPopover** (read if you plan to implement: registry/default/components/comp-389.tsx) | 131 | Anchored positioning + cards | Interactive product tours |
| **SharePopover** (read if you plan to implement: registry/default/components/comp-387.tsx) | 134 | Social share + copy-to-clipboard | Content sharing |
| **NotificationsPopover** (read if you plan to implement: registry/default/components/comp-382.tsx) | 175 | List + mark as read + badges | Notification centers |
| **NotificationsWithAvatarsPopover** (read if you plan to implement: registry/default/components/comp-383.tsx) | **187** | Enhanced with user avatars | Rich notification UIs |

### Visual Patterns & Use Cases

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Information Display** | TooltipPopover, StepTooltipPopover | Help text, feature explanations |
| **Form Integration** | FeedbackPopover, FilterPopover | Quick inputs without page navigation |
| **Navigation-Based** | NavigableTooltipPopover, TourPopover | Onboarding, guided experiences |
| **Action Centers** | SharePopover, NotificationsPopover | Social actions, system notifications |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 TooltipPopover (comp-384)

**Description**: The simplest popover variant styled like a tooltip with informational content and an interactive button element.

**When to Use**:
- Quick information display with actions
- Feature explanations with CTA
- Help text that needs interactive elements
- When tooltips can't be used due to interactive content
- Minimal UI footprint needed

**Implementation After Refactoring**:
```tsx
import TooltipPopover from '@/components/TooltipPopover'

<TooltipPopover 
  triggerText="Tooltip-like popover"
  title="Popover with button"
  content="I am a popover that would like to look like a tooltip. I can't be a tooltip because of the interactive element inside me."
  actionText="Know more"
  onAction={() => handleKnowMore()}
/>
```

**Props to Implement**: `triggerText`, `title`, `content`, `actionText`, `onAction`, `side`

---

### 🔷 FeedbackPopover (comp-388)

**Description**: A clean popover form for collecting user feedback with a textarea and submit button.

**When to Use**:
- Quick feedback collection
- Bug reporting
- Feature requests
- User comments
- Any short-form text input

**Implementation After Refactoring**:
```tsx
import FeedbackPopover from '@/components/FeedbackPopover'

const [feedback, setFeedback] = useState('')

<FeedbackPopover 
  value={feedback}
  onChange={setFeedback}
  onSubmit={handleFeedbackSubmit}
  placeholder="How can we improve Origin UI?"
  submitText="Send feedback"
  title="Send us feedback"
/>
```

**Props to Implement**: `value`, `onChange`, `onSubmit`, `placeholder`, `submitText`, `title`, `triggerText`

---

### 🔷 FilterPopover (comp-381)

**Description**: A popover containing multiple filter options with checkboxes and clear/apply actions, using an icon trigger.

**When to Use**:
- Table filtering
- Search refinement
- Category selection
- Multi-select options
- Dashboard filters

**Implementation After Refactoring**:
```tsx
import FilterPopover from '@/components/FilterPopover'

const filterOptions = [
  { id: 'real-time', label: 'Real Time', checked: false },
  { id: 'top-channels', label: 'Top Channels', checked: false },
  { id: 'last-orders', label: 'Last Orders', checked: false },
  { id: 'total-spent', label: 'Total Spent', checked: false }
]

<FilterPopover 
  options={filterOptions}
  onApply={handleApplyFilters}
  onClear={handleClearFilters}
  groupLabel="Filters"
/>
```

**Props to Implement**: `options`, `onApply`, `onClear`, `groupLabel`, `triggerIcon`

---

### 🔷 StepTooltipPopover (comp-385)

**Description**: Multi-step tooltip popover with navigation between tips and a step counter.

**When to Use**:
- Feature introductions
- Onboarding sequences
- Step-by-step guides
- Tips and tricks
- Progressive disclosure

**Implementation After Refactoring**:
```tsx
import StepTooltipPopover from '@/components/StepTooltipPopover'

const tips = [
  { title: "Tip 1", content: "Use keyboard shortcuts for speed" },
  { title: "Tip 2", content: "Customize your workspace layout" },
  { title: "Tip 3", content: "Enable dark mode for night work" }
]

<StepTooltipPopover 
  tips={tips}
  onComplete={handleTipsComplete}
  triggerText="Show tips"
/>
```

**Props to Implement**: `tips`, `onComplete`, `triggerText`, `nextText`, `restartText`

---

### 🔷 TourPopover (comp-389)

**Description**: Advanced popover with anchored positioning for creating interactive product tours with card layouts and dynamic positioning.

**When to Use**:
- Product onboarding tours
- Feature walkthroughs
- Interactive tutorials
- Contextual help systems
- First-time user experiences

**Implementation After Refactoring**:
```tsx
import TourPopover from '@/components/TourPopover'

const tourSteps = [
  { 
    icon: HeartIcon,
    title: 'Heart',
    description: 'This is your new workspace. Here you\'ll find all your projects, recent activities, settings, and more.'
  },
  { 
    icon: DiamondIcon,
    title: 'Diamond',
    description: 'Use the toolbar above to create new projects, invite team members, or access settings.'
  },
  // ... more steps
]

<TourPopover 
  steps={tourSteps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  onComplete={handleTourComplete}
  gridCols={2}
/>
```

**Props to Implement**: `steps`, `currentStep`, `onStepChange`, `onComplete`, `gridCols`, `showArrow`

---

### 🔷 SharePopover (comp-387)

**Description**: Social sharing popover with copy-to-clipboard functionality, animated feedback, and multiple share platform buttons.

**When to Use**:
- Content sharing features
- Social media integration
- Link sharing with copy functionality
- Code or URL distribution
- Any shareable content

**Implementation After Refactoring**:
```tsx
import SharePopover from '@/components/SharePopover'

<SharePopover 
  url="https://originui.com/Avx8HD"
  title="Share code"
  onShare={(platform) => analytics.track('share', { platform })}
  onCopy={handleCopySuccess}
  platforms={['embed', 'twitter', 'facebook', 'email']}
  copyTimeout={1500}
/>
```

**Props to Implement**: `url`, `title`, `onShare`, `onCopy`, `platforms`, `copyTimeout`, `triggerText`

---

### 🔷 NotificationsPopover (comp-382)

**Description**: Notification center popover with unread states, badge counter, and mark-all-as-read functionality.

**When to Use**:
- System notifications
- Activity feeds
- Message centers
- Alert management
- Real-time updates

**Implementation After Refactoring**:
```tsx
import NotificationsPopover from '@/components/NotificationsPopover'

const notifications = [
  {
    id: '1',
    message: 'New comment on your post',
    time: '2 hours ago',
    unread: true,
    action: () => navigateToPost()
  },
  // ... more notifications
]

<NotificationsPopover 
  notifications={notifications}
  onMarkAllRead={handleMarkAllRead}
  onNotificationClick={handleNotificationClick}
/>
```

**Props to Implement**: `notifications`, `onMarkAllRead`, `onNotificationClick`, `showBadge`, `maxItems`

---

### 🔷 NotificationsWithAvatarsPopover (comp-383)

**Description**: Enhanced notification center with user avatars and richer visual layout.

**When to Use**:
- Social platforms
- Team collaboration tools
- User activity feeds
- When visual context matters
- Premium notification experiences

**Implementation After Refactoring**:
```tsx
import NotificationsWithAvatarsPopover from '@/components/NotificationsWithAvatarsPopover'

const notifications = [
  {
    id: '1',
    user: { name: 'Alice', avatar: '/alice.jpg' },
    message: 'mentioned you in a comment',
    time: '2 hours ago',
    unread: true
  },
  // ... more notifications
]

<NotificationsWithAvatarsPopover 
  notifications={notifications}
  onMarkAllRead={handleMarkAllRead}
  onNotificationClick={handleNotificationClick}
  showOnlineStatus={true}
/>
```

**Props to Implement**: `notifications`, `onMarkAllRead`, `onNotificationClick`, `showOnlineStatus`, `avatarSize`

---

## 🎨 SPECIALIZED VARIANTS

### NavigableTooltipPopover (comp-386)
```tsx
// Extended tooltip with prev/next navigation through multiple tips
<NavigableTooltipPopover 
  tips={helpTips}
  startIndex={0}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Information Display
```tsx
// Start here for simple help text
import TooltipPopover from '@/components/TooltipPopover'

<TooltipPopover 
  triggerText="?"
  content="Click here to learn more about this feature"
/>
```

### Form Collection
```tsx
// For quick user input
import FeedbackPopover from '@/components/FeedbackPopover'

<FeedbackPopover 
  onSubmit={handleFeedback}
  placeholder="How can we improve?"
/>
```

### Interactive Filtering
```tsx
// For data filtering interfaces
import FilterPopover from '@/components/FilterPopover'

<FilterPopover 
  options={filterOptions}
  onApply={applyFilters}
/>
```

### Notification System
```tsx
// Complete notification center
import NotificationsPopover from '@/components/NotificationsPopover'

<NotificationsPopover 
  notifications={userNotifications}
  onMarkAllRead={markAllRead}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 40 LoC**: Basic static popovers (TooltipPopover, FeedbackPopover)
- **40-80 LoC**: Simple interactive popovers (StepTooltipPopover, FilterPopover)
- **80-140 LoC**: Feature-rich popovers (NavigableTooltipPopover, TourPopover, SharePopover)
- **140-190 LoC**: Complex notification systems (NotificationsPopover, NotificationsWithAvatarsPopover)

**Why LoC matters**: Popover complexity directly impacts performance and maintainability. Start with the simplest variant that meets your needs.

### Positioning & Anchoring

Popovers support multiple positioning strategies:
- **Basic positioning**: Default placement relative to trigger
- **PopoverAnchor**: Advanced positioning for tours and complex layouts
- **Side options**: `top`, `bottom`, `left`, `right` with automatic flipping
- **Alignment**: `start`, `center`, `end` for fine-tuned positioning

```tsx
// Example of advanced positioning
<Popover>
  <PopoverAnchor className="absolute top-0 left-0" />
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent side="right" align="start">
    Content appears to the right of anchor
  </PopoverContent>
</Popover>
```

### State Management Patterns

Different popovers require different state approaches:
1. **Stateless** (TooltipPopover): No internal state needed
2. **Simple state** (StepTooltipPopover): Single value tracking
3. **Form state** (FilterPopover, FeedbackPopover): Form data management
4. **Complex state** (NotificationsPopover): Lists with individual item states

### Performance Tips
1. Start with the simplest popover that meets your needs
2. Lazy load popover content for better initial page performance
3. Use `Portal` for popovers that might be clipped by overflow containers
4. Debounce frequent popover triggers (hover events)
5. Virtualize long notification lists (50+ items)

### Accessibility
- All popovers include proper ARIA attributes
- Keyboard navigation fully supported (Tab, Escape, Enter)
- Focus management handled automatically
- Screen reader announcements for state changes
- Color contrast meets WCAG AA standards

### Migration Path
```
TooltipPopover → StepTooltipPopover → TourPopover → Custom Implementation
   (32 LoC)         (70 LoC)           (131 LoC)     (Build your own)
```

Start simple, add complexity only when user needs demand it!