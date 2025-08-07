# Tooltip Component

Tooltips show helpful text when users hover over elements. Use them for button labels, form field hints, icon descriptions, or any UI element that needs extra context. They appear instantly or after a short delay, disappear when the cursor moves away, and position themselves automatically to stay visible.

HoverCards are similar but better for rich content like user profiles or article previews. Modals and dialogs are for actions requiring user input, while tooltips are purely informational. Popovers stay open and can contain interactive elements, but tooltips disappear on mouse movement. Pick from 12 styles below based on your content type: simple text, structured content with titles/icons/images, data visualization, user profiles, or interactive keyboard shortcuts.

## Which 'Tooltip' variant do you need?

### Just showing simple text?

**Want basic styling options:**
- Standard light/dark theme? Use `SimpleTooltip`
- Always dark regardless of theme? Use `DarkTooltip`
- Need a visual arrow pointing to element? Use `TooltipWithArrow`

### Want formatted content with titles or media?

**Need structured text:**
- Title with description? Use `TooltipWithTitle`
- Icon with title and description? Use `TooltipWithIcon`
- Image preview with text? Use `TooltipWithImage`

### Displaying data or metrics?

**For numbers and stats:**
- Key-value pairs (status, metrics)? Use `StatsTooltip`
- Chart data with color legend? Use `ChartTooltip`

### Showing user or content previews?

**For hoverable cards:**
- Basic user profile (avatar + bio)? Use `ProfileHoverCard`
- Rich profile with social connections? Use `UserProfileHoverCard`
- Article or content preview? Use `ArticleHoverCard`

### Building tool interfaces?
- Need keyboard shortcuts on multiple elements? Use `KeyboardShortcutTooltips`

## 📊 COMPLETE COMPONENT MATRIX

### Core Tooltips

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SimpleTooltip** (read if you plan to implement: registry/default/components/comp-354.tsx) | 25 | Basic text tooltip | Button labels, simple descriptions |
| **DarkTooltip** (read if you plan to implement: registry/default/components/comp-355.tsx) | 25 | Always dark theme | Consistent dark styling |
| **TooltipWithArrow** (read if you plan to implement: registry/default/components/comp-356.tsx) | 25 | Visual arrow pointer | Enhanced visual connection |
| **TooltipWithTitle** (read if you plan to implement: registry/default/components/comp-357.tsx) | 33 | Title + description text | Detailed explanations |

### Rich Content Tooltips

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **TooltipWithIcon** (read if you plan to implement: registry/default/components/comp-358.tsx) | 42 | Icon + title + description | Visual context with text |
| **TooltipWithImage** (read if you plan to implement: registry/default/components/comp-359.tsx) | 42 | Image + title + description | Visual previews, media content |
| **StatsTooltip** (read if you plan to implement: registry/default/components/comp-361.tsx) | 42 | Key-value data pairs | Metrics, status information |
| **ChartTooltip** (read if you plan to implement: registry/default/components/comp-362.tsx) | 75 | Chart data with legend | Data visualization, analytics |

### HoverCards

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ProfileHoverCard** (read if you plan to implement: registry/default/components/comp-363.tsx) | 42 | Avatar + name + bio | User mentions, social features |
| **ArticleHoverCard** (read if you plan to implement: registry/default/components/comp-365.tsx) | 44 | Title + description + metadata | Content previews, link cards |
| **UserProfileHoverCard** (read if you plan to implement: registry/default/components/comp-364.tsx) | 82 | Rich profile + mutual friends | Social networks, team directories |

### Interactive Tooltips

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **KeyboardShortcutTooltips** (read if you plan to implement: registry/default/components/comp-360.tsx) | **101** | Multiple tooltips + shortcuts | Tool interfaces, keyboard navigation |

### Tooltip vs HoverCard Comparison

| Feature | Tooltip | HoverCard |
|---------|---------|-----------|
| **Content** | Short text, simple content | Rich content, complex layouts |
| **Trigger** | Hover only | Hover with delay, can include focus |
| **Size** | Small, constrained | Larger, flexible sizing |
| **Use Case** | Quick info, labels | Detailed previews, profiles |
| **Interaction** | Non-interactive | Can contain interactive elements |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 SimpleTooltip (comp-354)

**Description**: The most basic tooltip component. Simple text on hover with minimal styling.

**When to Use**:
- Button labels and icon descriptions
- Simple help text
- Form field explanations
- Basic UI element descriptions
- Default choice for simple tooltips

**Implementation After Refactoring**:
```tsx
import SimpleTooltip from '@/components/SimpleTooltip'

<SimpleTooltip 
  content="This is a simple tooltip"
  delayDuration={0}
>
  <Button variant="outline" size="sm">
    Hover me
  </Button>
</SimpleTooltip>
```

**Props to Implement**: `content`, `delayDuration`, `side`, `align`, `children`

---

### 🔷 TooltipWithTitle (comp-357)

**Description**: Tooltip with structured content including a title and description text.

**When to Use**:
- Feature explanations
- Help documentation
- Detailed button descriptions
- Complex UI element guidance
- When simple text isn't enough

**Implementation After Refactoring**:
```tsx
import TooltipWithTitle from '@/components/TooltipWithTitle'

<TooltipWithTitle 
  title="Tooltip with title"
  description="Detailed explanation of the feature or functionality."
  delayDuration={0}
>
  <Button variant="outline" size="sm">
    W/ title
  </Button>
</TooltipWithTitle>
```

**Props to Implement**: `title`, `description`, `delayDuration`, `side`, `align`, `children`

---

### 🔷 ChartTooltip (comp-362)

**Description**: Specialized tooltip for data visualization showing chart data with legends and values.

**When to Use**:
- Chart hover interactions
- Data visualization tooltips
- Analytics dashboards
- Financial data display
- Metric breakdowns

**Implementation After Refactoring**:
```tsx
import ChartTooltip from '@/components/ChartTooltip'

const chartData = {
  date: "Tuesday, Aug 13",
  items: [
    { label: "Sales", value: "$40", color: "indigo" },
    { label: "Revenue", value: "$74", color: "purple" },
    { label: "Costs", value: "$410", color: "rose" }
  ]
}

<ChartTooltip 
  data={chartData}
  delayDuration={0}
>
  <Button variant="outline" size="sm">
    Chart
  </Button>
</ChartTooltip>
```

**Props to Implement**: `data`, `dateFormat`, `delayDuration`, `side`, `align`, `children`

---

### 🔷 ProfileHoverCard (comp-363)

**Description**: HoverCard showing user profile information with avatar and bio.

**When to Use**:
- User mentions in social apps
- Team member directories
- Author information
- Profile previews
- Social features

**Implementation After Refactoring**:
```tsx
import ProfileHoverCard from '@/components/ProfileHoverCard'

const userProfile = {
  avatar: "/avatar-40-04.jpg",
  username: "@Origin_UI",
  bio: "Beautiful UI components built with Tailwind CSS and Next.js."
}

<ProfileHoverCard 
  profile={userProfile}
  width={340}
>
  <img src="/avatar-40-04.jpg" width={40} height={40} alt="Avatar" />
</ProfileHoverCard>
```

**Props to Implement**: `profile`, `width`, `showArrow`, `openDelay`, `children`

---

### 🔷 UserProfileHoverCard (comp-364)

**Description**: Rich user profile HoverCard with avatar, bio, and social connections.

**When to Use**:
- Social networking platforms
- Team collaboration tools
- Professional networks
- Community platforms
- Rich user interactions

**Implementation After Refactoring**:
```tsx
import UserProfileHoverCard from '@/components/UserProfileHoverCard'

const userProfile = {
  avatar: "avatar-40-05.jpg",
  name: "Keith Kennedy",
  username: "@k.kennedy",
  bio: "Designer at @Origin UI. Crafting web experiences with Tailwind CSS.",
  mutualFriends: [
    { avatar: "/avatar-20-04.jpg", name: "Friend 01" },
    { avatar: "/avatar-20-05.jpg", name: "Friend 02" },
    { avatar: "/avatar-20-06.jpg", name: "Friend 03" }
  ]
}

<UserProfileHoverCard 
  profile={userProfile}
  showMutualFriends={true}
>
  <a className="text-sm font-medium hover:underline" href="#">
    Keith Kennedy
  </a>
</UserProfileHoverCard>
```

**Props to Implement**: `profile`, `showMutualFriends`, `width`, `openDelay`, `children`

---

### 🔷 StatsTooltip (comp-361)

**Description**: Tooltip displaying key-value statistics in a structured grid layout.

**When to Use**:
- Performance metrics
- System status information
- Project statistics
- Deployment information
- Key performance indicators

**Implementation After Refactoring**:
```tsx
import StatsTooltip from '@/components/StatsTooltip'

const stats = [
  { label: "Status", value: "Completed" },
  { label: "Code Coverage", value: "94.3%" },
  { label: "Last Deploy", value: "Today at 15:42" },
  { label: "Performance Score", value: "98/100" }
]

<StatsTooltip 
  stats={stats}
  delayDuration={0}
>
  <Button variant="outline" size="sm">
    Stats
  </Button>
</StatsTooltip>
```

**Props to Implement**: `stats`, `delayDuration`, `side`, `align`, `children`

---

### 🔷 KeyboardShortcutTooltips (comp-360)

**Description**: Multiple tooltips with keyboard shortcuts for directional controls.

**When to Use**:
- Tool interfaces with keyboard shortcuts
- Design software controls
- Camera/viewport controls
- Accessibility features
- Power user interfaces

**Implementation After Refactoring**:
```tsx
import KeyboardShortcutTooltips from '@/components/KeyboardShortcutTooltips'

const shortcuts = [
  { direction: "top", label: "Pan top", shortcut: "⌘T", side: "top" },
  { direction: "left", label: "Pan left", shortcut: "⌘L", side: "left" },
  { direction: "right", label: "Pan right", shortcut: "⌘R", side: "right" },
  { direction: "bottom", label: "Pan bottom", shortcut: "⌘B", side: "bottom" }
]

<KeyboardShortcutTooltips 
  shortcuts={shortcuts}
  delayDuration={0}
/>
```

**Props to Implement**: `shortcuts`, `delayDuration`, `onAction`, `disabled`

---

## 🎨 SPECIALIZED VARIANTS

### DarkTooltip (comp-355)
```tsx
// Force dark theme regardless of system settings
<DarkTooltip content="Always dark tooltip">
  <Button>Dark</Button>
</DarkTooltip>
```

### TooltipWithArrow (comp-356)
```tsx
// Visual arrow pointing to trigger element
<TooltipWithArrow content="Tooltip with arrow" showArrow={true}>
  <Button>W/ arrow</Button>
</TooltipWithArrow>
```

### TooltipWithIcon (comp-358)
```tsx
// Icon + structured text content
<TooltipWithIcon 
  icon={GlobeIcon}
  title="Tooltip with title and icon"
  description="Rich content with visual context"
>
  <Button>W/ icon</Button>
</TooltipWithIcon>
```

### TooltipWithImage (comp-359)
```tsx
// Image + title + description for rich previews
<TooltipWithImage 
  image="/dialog-content.png"
  title="Tooltip with title and icon"
  description="Visual content with detailed explanation"
>
  <Button>W/ image</Button>
</TooltipWithImage>
```

### ArticleHoverCard (comp-365)
```tsx
// Article/content preview with metadata
<ArticleHoverCard 
  title="Building a Design System with Next.js and Tailwind CSS"
  description="Learn comprehensive design system architecture"
  metadata="8 min read · Updated 2 days ago"
  showArrow={true}
>
  <img src="/content-preview.png" alt="Article" />
</ArticleHoverCard>
```

---

## 🚀 QUICK START TEMPLATES

### Basic UI Tooltips
```tsx
// Start here for simple tooltips
import SimpleTooltip from '@/components/SimpleTooltip'

<SimpleTooltip content="Simple help text">
  <Button variant="outline">Hover me</Button>
</SimpleTooltip>
```

### Rich Content Tooltips
```tsx
// For detailed explanations
import TooltipWithTitle from '@/components/TooltipWithTitle'

<TooltipWithTitle 
  title="Feature Name"
  description="Detailed explanation of the feature"
>
  <Button>Rich tooltip</Button>
</TooltipWithTitle>
```

### User Profile Cards
```tsx
// For social features
import ProfileHoverCard from '@/components/ProfileHoverCard'

<ProfileHoverCard profile={userProfile}>
  <img src={user.avatar} alt="Profile" />
</ProfileHoverCard>
```

### Data Visualization
```tsx
// For charts and analytics
import ChartTooltip from '@/components/ChartTooltip'

<ChartTooltip data={chartData}>
  <div className="chart-point" />
</ChartTooltip>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 30 LoC**: Basic tooltips with simple text (SimpleTooltip, DarkTooltip, TooltipWithArrow)
- **30-45 LoC**: Structured content with title/description (TooltipWithTitle, ProfileHoverCard, ArticleHoverCard)
- **45-80 LoC**: Rich content with images, stats, or complex layouts (TooltipWithIcon, StatsTooltip, ChartTooltip)
- **80+ LoC**: Complex interactive tooltips and rich profiles (UserProfileHoverCard, KeyboardShortcutTooltips)

**Why LoC matters**: Tooltip complexity affects:
- Loading performance (especially for rich content)
- Maintenance overhead
- User experience smoothness
- Mobile performance impact

### Tooltip vs HoverCard Selection

**Use Tooltips when:**
- Content is short and simple
- Purely informational (non-interactive)
- Space is constrained
- Quick help text is needed
- Minimal visual impact desired

**Use HoverCards when:**
- Content is rich and detailed
- Interactive elements needed
- User profiles or content previews
- Social features required
- Longer hover interactions expected

### Positioning Strategy
Tooltips automatically position based on available space:
1. **Default**: Top placement for most scenarios
2. **Adaptive**: Automatically flips when near screen edges
3. **Side-specific**: Use `side` prop for specific placement needs
4. **Alignment**: Use `align` prop for fine-tuning position

### Performance Tips
1. Start with SimpleTooltip for basic needs
2. Use `delayDuration={0}` sparingly (can feel jarring)
3. Lazy load images in rich tooltips
4. Avoid nested tooltips
5. Limit HoverCard content to essential information

### Accessibility
- All tooltips include proper ARIA labels
- Keyboard navigation fully supported
- Screen reader announcements
- Focus management for interactive content
- High contrast mode compatible
- Touch-friendly for mobile devices

### Content Guidelines
**Tooltip content should be:**
- Concise and scannable
- Helpful without being obvious
- Consistent in tone and terminology
- Accessible (avoid color-only information)

**Avoid in tooltips:**
- Critical information (use inline text instead)
- Interactive elements (use HoverCard)
- Very long text (use modal or dedicated page)
- Complex forms or controls

### Migration Path
```
SimpleTooltip → TooltipWithTitle → TooltipWithIcon → ChartTooltip
   (25 LoC)        (33 LoC)           (42 LoC)         (75 LoC)

ProfileHoverCard → ArticleHoverCard → UserProfileHoverCard
   (42 LoC)           (44 LoC)          (82 LoC)
```

Start simple, add complexity only when user needs justify it!