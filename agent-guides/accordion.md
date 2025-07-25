# Accordion Component

Accordions hide and show content sections with a click. Use them for FAQs, documentation, settings, or any long content that users don't need to see all at once. They work great when you have many sections (5+), want multiple sections open together, or need a mobile-friendly vertical layout.

Tabs work better for 2-5 items shown side-by-side, but accordions handle dozens of sections stacked vertically. Regular cards show everything at once, but accordions let users control what they see. Pick from 20 styles below based on your needs: visual style (classic/cards/connected), arrows (chevron/plus-minus), position (left/right), and content type (simple/descriptions/nested).

## Which 'Accordion' variant do you need?

### Just need simple collapsible sections?

**Want icons next to your titles?**
- Prefer rotating arrows? Use `IconChevronAccordion`
- Prefer plus/minus toggle? Use `IconPlusMinusAccordion`

**No icons, just clean lines (like traditional FAQ)?**
- Arrow on the right? Use `BasicChevronAccordion`
- Plus/minus on the right? Use `PlusMinusAccordion`
- Arrow on the left? Use `LeftChevronAccordion`
- Plus/minus on the left? Use `LeftPlusMinusAccordion`

**Want modern cards with borders and spacing (like settings panels)?**
- Arrow on the right? Use `TabbedChevronAccordion`
- Plus/minus on the right? Use `TabbedPlusMinusAccordion`
- Arrow on the left? Use `TabbedLeftChevronAccordion`
- Plus/minus on the left? Use `TabbedLeftPlusMinusAccordion`

**Need a connected list look (like data tables)?**
- Arrow on the right? Use `TableChevronAccordion`
- Plus/minus on the right? Use `TablePlusMinusAccordion`
- Arrow on the left? Use `TableLeftChevronAccordion`
- Plus/minus on the left? Use `TableLeftPlusMinusAccordion`

### Need titles with preview descriptions?

**Want circular icon badges too?**
- Premium look with plus/minus? Use `ComplexIconSubHeaderAccordion`
- Clean look with chevrons? Use `IconSubHeaderAccordion`

**Just text, no icons:**
- With rotating arrows? Use `SubHeaderAccordion`
- With plus/minus toggle? Use `SubHeaderPlusMinusAccordion`

### Building nested sections (like documentation trees)?
- Need icons at every level? Use `MultiLevelIconAccordion`
- Just text hierarchy? Use `MultiLevelAccordion`

## 📊 COMPLETE COMPONENT MATRIX

### Core Accordion Styles

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicChevronAccordion** (read if you plan to implement: registry/default/components/comp-334.tsx) | 30 | Simple chevron, clean lines | Basic FAQ, documentation |
| **LeftChevronAccordion** (read if you plan to implement: registry/default/components/comp-336.tsx) | 32 | Chevron on left side | Alternative visual hierarchy |
| **PlusMinusAccordion** (read if you plan to implement: registry/default/components/comp-335.tsx) | 35 | Animated plus/minus icon | Clear expand/collapse indication |
| **LeftPlusMinusAccordion** (read if you plan to implement: registry/default/components/comp-337.tsx) | 35 | Plus/minus on left | Left-aligned interaction pattern |
| **IconChevronAccordion** (read if you plan to implement: registry/default/components/comp-338.tsx) | 42 | Content icons + chevron | Categorized content, feature lists |
| **IconPlusMinusAccordion** (read if you plan to implement: registry/default/components/comp-339.tsx) | 48 | Content icons + plus/minus | Rich visual categorization |

### Visual Layout Variants

| Component | LoC | Visual Style | Best For |
|-----------|:---:|--------------|----------|
| **TabbedChevronAccordion** (read if you plan to implement: registry/default/components/comp-344.tsx) | 42 | Bordered cards with spacing | Modern interfaces, clean separation |
| **TabbedLeftChevronAccordion** (read if you plan to implement: registry/default/components/comp-346.tsx) | 42 | Tabbed style, left chevron | Alternative tabbed layout |
| **TabbedPlusMinusAccordion** (read if you plan to implement: registry/default/components/comp-345.tsx) | 45 | Bordered cards, plus/minus | Visual cards with clear actions |
| **TabbedLeftPlusMinusAccordion** (read if you plan to implement: registry/default/components/comp-347.tsx) | 45 | Tabbed style, left plus/minus | Consistent left-aligned interaction |
| **TableChevronAccordion** (read if you plan to implement: registry/default/components/comp-348.tsx) | 42 | Connected borders, no gaps | List-like appearance, data display |
| **TableLeftChevronAccordion** (read if you plan to implement: registry/default/components/comp-350.tsx) | 42 | Table style, left chevron | Table layout with left interaction |
| **TablePlusMinusAccordion** (read if you plan to implement: registry/default/components/comp-349.tsx) | 45 | Connected borders, plus/minus | Structured data with clear actions |
| **TableLeftPlusMinusAccordion** (read if you plan to implement: registry/default/components/comp-351.tsx) | 45 | Table style, left plus/minus | Table layout, left-aligned controls |

### Advanced Content Accordions

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SubHeaderAccordion** (read if you plan to implement: registry/default/components/comp-340.tsx) | 55 | Title + subtitle layout | Feature descriptions, help sections |
| **SubHeaderPlusMinusAccordion** (read if you plan to implement: registry/default/components/comp-341.tsx) | 55 | Sub-headers with plus/minus | Detailed content with clear actions |
| **IconSubHeaderAccordion** (read if you plan to implement: registry/default/components/comp-342.tsx) | 68 | Circular icons + sub-headers | Settings pages, feature toggles |
| **ComplexIconSubHeaderAccordion** (read if you plan to implement: registry/default/components/comp-343.tsx) | 68 | Full icon treatment + plus/minus | Premium interfaces, admin panels |
| **MultiLevelAccordion** (read if you plan to implement: registry/default/components/comp-352.tsx) | 85 | Nested collapsible sections | Help docs, complex navigation |
| **MultiLevelIconAccordion** (read if you plan to implement: registry/default/components/comp-353.tsx) | **95** | Multi-level + full icon treatment | Complex hierarchical content |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicChevronAccordion (comp-334)

**Description**: The simplest accordion with standard chevron icons. Clean, minimal design perfect for basic content organization.

**When to Use**:
- FAQ sections
- Help documentation
- Simple content organization
- Default choice for most websites
- When you need clean, distraction-free design

**Implementation After Refactoring**:
```tsx
import BasicChevronAccordion from '@/components/BasicChevronAccordion'

const faqItems = [
  {
    id: "1",
    title: "What is your return policy?",
    content: "We offer a 30-day return policy for all unused items..."
  },
  {
    id: "2", 
    title: "How do I track my order?",
    content: "You can track your order using the tracking number..."
  }
]

<BasicChevronAccordion 
  items={faqItems}
  defaultValue="1"
  type="single"
  collapsible={true}
/>
```

**Props to Implement**: `items`, `defaultValue`, `type`, `collapsible`, `onValueChange`

---

### 🔷 TabbedChevronAccordion (comp-344)

**Description**: Accordion with bordered card-like appearance and spacing between items. Modern, visually separated design.

**When to Use**:
- Modern web interfaces
- When visual separation is important
- Card-based design systems
- Premium website appearances
- Landing pages with feature sections

**Implementation After Refactoring**:
```tsx
import TabbedChevronAccordion from '@/components/TabbedChevronAccordion'

<TabbedChevronAccordion 
  items={items}
  className="space-y-2"
  itemClassName="rounded-md border bg-background"
  defaultValue="1"
/>
```

**Props to Implement**: `items`, `className`, `itemClassName`, `defaultValue`, `type`, `spacing`

---

### 🔷 IconChevronAccordion (comp-338)

**Description**: Accordion with content icons alongside titles. Perfect for categorized content and feature lists.

**When to Use**:
- Feature lists with categories
- Service offerings
- Product specifications
- Help sections with topics
- Any content that benefits from visual categorization

**Implementation After Refactoring**:
```tsx
import IconChevronAccordion from '@/components/IconChevronAccordion'
import { CommandIcon, ZapIcon, AtSignIcon } from 'lucide-react'

const featureItems = [
  {
    id: "1",
    icon: CommandIcon,
    title: "Developer Experience",
    content: "Built with TypeScript and modern development practices..."
  },
  {
    id: "2",
    icon: ZapIcon, 
    title: "Performance Optimized",
    content: "Tree-shaking, code splitting, minimal runtime overhead..."
  }
]

<IconChevronAccordion 
  items={featureItems}
  iconSize={16}
  defaultValue="1"
/>
```

**Props to Implement**: `items`, `iconSize`, `iconClassName`, `defaultValue`, `type`

---

### 🔷 SubHeaderAccordion (comp-340)

**Description**: Accordion with title and subtitle layout. Ideal for detailed content that needs description preview.

**When to Use**:
- Settings pages with descriptions
- Feature documentation
- Help sections with summaries
- Product feature explanations
- Any content needing title + description

**Implementation After Refactoring**:
```tsx
import SubHeaderAccordion from '@/components/SubHeaderAccordion'

const settingsItems = [
  {
    id: "1",
    title: "Notifications",
    subtitle: "Customize your notification preferences", 
    content: "Choose which updates you want to receive..."
  },
  {
    id: "2",
    title: "Security",
    subtitle: "Manage your account security settings",
    content: "Set up two-factor authentication..."
  }
]

<SubHeaderAccordion 
  items={settingsItems}
  showSubtitles={true}
  defaultValue="1"
/>
```

**Props to Implement**: `items`, `showSubtitles`, `subtitleClassName`, `defaultValue`, `type`

---

### 🔷 IconSubHeaderAccordion (comp-342)

**Description**: Premium accordion with circular icon containers, titles, and subtitles. Most visually rich single-level accordion.

**When to Use**:
- Settings and preferences pages
- Premium applications
- Feature showcase sections
- Admin dashboards
- High-value content presentation

**Implementation After Refactoring**:
```tsx
import IconSubHeaderAccordion from '@/components/IconSubHeaderAccordion'
import { BellIcon, ShieldCheckIcon, Link2Icon } from 'lucide-react'

const premiumItems = [
  {
    id: "1",
    icon: BellIcon,
    title: "Notifications",
    subtitle: "Customize your notification preferences",
    content: "Choose which updates you want to receive..."
  },
  {
    id: "2", 
    icon: ShieldCheckIcon,
    title: "Security Settings",
    subtitle: "Manage your account security",
    content: "Set up two-factor authentication..."
  }
]

<IconSubHeaderAccordion 
  items={premiumItems}
  iconContainerSize="size-10"
  iconContainerClass="rounded-full border"
  defaultValue="1"
/>
```

**Props to Implement**: `items`, `iconContainerSize`, `iconContainerClass`, `contentPadding`, `defaultValue`

---

### 🔷 MultiLevelAccordion (comp-352)

**Description**: Advanced accordion with nested collapsible sections. Enables hierarchical content organization.

**When to Use**:
- Complex help documentation
- Multi-level navigation systems
- Detailed FAQ with sub-questions
- Product documentation with categories
- Any deeply nested content structure

**Implementation After Refactoring**:
```tsx
import MultiLevelAccordion from '@/components/MultiLevelAccordion'

const hierarchicalItems = [
  {
    id: "1",
    title: "Getting Started",
    collapsibles: [
      {
        title: "Installation Guide",
        content: "Step-by-step installation instructions...",
        open: true
      },
      {
        title: "Configuration",
        content: "How to configure your environment..."
      }
    ]
  },
  {
    id: "2",
    title: "Advanced Features", 
    collapsibles: [
      {
        title: "Custom Themes",
        content: "Learn how to create custom themes..."
      },
      {
        title: "Plugin Development",
        content: "Build your own plugins..."
      }
    ]
  }
]

<MultiLevelAccordion 
  items={hierarchicalItems}
  allowMultipleOpen={false}
  defaultValue="1"
  nestedDefaultOpen={["installation"]}
/>
```

**Props to Implement**: `items`, `allowMultipleOpen`, `defaultValue`, `nestedDefaultOpen`, `maxDepth`

---

### 🔷 MultiLevelIconAccordion (comp-353)

**Description**: The most advanced accordion with multi-level nesting and icons at both parent and child levels.

**When to Use**:
- Complex documentation systems
- Advanced admin interfaces
- Feature-rich help systems
- Comprehensive navigation menus
- Enterprise application organization

**Implementation After Refactoring**:
```tsx
import MultiLevelIconAccordion from '@/components/MultiLevelIconAccordion'
import { CommandIcon, GaugeIcon, CircleDashedIcon } from 'lucide-react'

const complexItems = [
  {
    id: "1",
    title: "Platform Features",
    icon: CommandIcon,
    collapsibles: [
      {
        title: "Performance Metrics",
        content: "Monitor your application performance...",
        icon: GaugeIcon,
        open: true
      },
      {
        title: "Analytics Dashboard", 
        content: "View detailed analytics...",
        icon: CircleDashedIcon
      }
    ]
  }
]

<MultiLevelIconAccordion 
  items={complexItems}
  parentIconSize={16}
  childIconSize={16}
  defaultValue="1"
  enableAllIcons={true}
/>
```

**Props to Implement**: `items`, `parentIconSize`, `childIconSize`, `defaultValue`, `enableAllIcons`, `iconTheme`

---

## 🎨 LAYOUT VARIANTS

### Table Style Accordions
```tsx
// Connected borders for list-like appearance
<TableChevronAccordion items={items} />
<TablePlusMinusAccordion items={items} />
```

### Plus/Minus Variants
```tsx
// Clear expand/collapse indication with animated plus/minus
<PlusMinusAccordion items={items} />
<LeftPlusMinusAccordion items={items} />
```

### Left-Aligned Controls
```tsx
// Icon/controls on the left side
<LeftChevronAccordion items={items} />
<LeftPlusMinusAccordion items={items} />
```

### Content Spacing Options
```tsx
// Tabbed style with spacing
<TabbedChevronAccordion className="space-y-2" />

// Table style with no spacing  
<TableChevronAccordion className="-space-y-px" />

// Basic style with custom spacing
<BasicChevronAccordion className="space-y-4" />
```

---

## 🚀 QUICK START TEMPLATES

### Simple FAQ
```tsx
// Start here for basic FAQ sections
import BasicChevronAccordion from '@/components/BasicChevronAccordion'

<BasicChevronAccordion 
  items={faqItems}
  type="single"
  collapsible
/>
```

### Modern Interface
```tsx
// For modern, card-based designs
import TabbedChevronAccordion from '@/components/TabbedChevronAccordion'

<TabbedChevronAccordion 
  items={items}
  className="space-y-2"
/>
```

### Settings Page
```tsx
// For settings and configuration interfaces
import IconSubHeaderAccordion from '@/components/IconSubHeaderAccordion'

<IconSubHeaderAccordion 
  items={settingsItems}
  defaultValue="notifications"
/>
```

### Documentation System
```tsx
// For complex, hierarchical documentation
import MultiLevelAccordion from '@/components/MultiLevelAccordion'

<MultiLevelAccordion 
  items={docItems}
  allowMultipleOpen
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 40 LoC**: Basic accordions with simple styling (BasicChevron, PlusMinusAccordion)
- **40-50 LoC**: Enhanced basic with icons or layout variants (TabbedChevron, IconChevron)
- **50-70 LoC**: Advanced single-level with rich content (SubHeader, IconSubHeader)  
- **70+ LoC**: Complex multi-level with nested hierarchies (MultiLevel, MultiLevelIcon)

**Why LoC matters**: Accordion complexity directly impacts:
- Implementation time and maintenance overhead
- Performance (rendering and interaction speed)
- User cognitive load and navigation ease
- Mobile responsiveness and touch interaction

### Accordion Patterns & Best Practices

**Single vs Multiple**: Use `type="single"` for exclusive sections (like FAQ), `type="multiple"` for independent sections (like filters or settings).

**Icon Selection**: Icons should be:
- Semantically meaningful to content
- Consistent in style and weight
- 16px for optimal readability
- High contrast for accessibility

**Animation Considerations**: 
- Chevron rotations should be 180° for familiarity
- Plus/minus transformations need careful timing (200ms optimal)
- Content expand/collapse should feel responsive but not jarring

### Performance Tips
1. Start with BasicChevronAccordion for most use cases
2. Lazy load accordion content for large datasets
3. Use `defaultValue` to show important content by default
4. Limit nesting depth in MultiLevel accordions (max 3 levels recommended)

### Accessibility
- All accordions include proper ARIA labels and states
- Keyboard navigation fully supported (Tab, Enter, Arrow keys)
- Screen reader announcements for expand/collapse states
- Focus management maintained during interactions
- High contrast mode support for all visual indicators

### Mobile Patterns
All accordions follow consistent mobile behavior:
1. Touch targets meet 44px minimum requirement
2. Icons scale appropriately for finger interaction
3. Content reflows responsively within expanded sections
4. Swipe gestures respect but don't conflict with scroll

### Migration Path
```
BasicChevronAccordion → TabbedChevronAccordion → IconSubHeaderAccordion → MultiLevelAccordion
     (30 LoC)              (42 LoC)               (68 LoC)              (85 LoC)
```

Start simple, add visual enhancement, then rich content, finally hierarchical complexity!