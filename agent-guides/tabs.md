# Tab Component

Tabs organize content into separate views where only one view is visible at a time. Use them for switching between related content sections, feature areas, or data views. They work best for 2-8 items shown horizontally or vertically, with clear labels that indicate what content each tab contains.

Accordions are better for collapsible content sections that can be open simultaneously, while tabs enforce single-selection. Navigation menus link to different pages, but tabs keep you on the same page switching views. Pick from 20 styles below based on layout (horizontal/vertical), visual style (underline/pill/segmented), and features (icons/badges/tooltips).

## Which 'Tab' variant do you need?

### Need horizontal tabs?

**Just simple text tabs:**
- Starting with basic navigation? Use `BasicTabs`
- Want clean, minimalist styling? Use `TransparentTabs`
- Prefer modern rounded pills? Use `PillTabs`

**Want underline indicators:**
- For content sections or articles? Use `UnderlineTabs`
- Need smooth hover transitions too? Use `UnderlineHoverTabs`

**Looking for special styles:**
- Need toggle-style controls for settings? Use `SegmentedTabs`
- Building file managers or document tabs? Use `FolderTabs`
- Need data counts or analytics display? Use `BadgeCountTabs`

**Need icons with your tabs:**
- Want mobile-style segmented control? Use `IconSegmentedTabs`
- Building file browsers or IDEs? Use `IconFolderTabs`
- For app navigation or dashboards? Use `IconPillTabs`
- Need notifications or messaging alerts? Use `IconBadgeTabs`
- Just icons for compact toolbars? Use `IconTooltipTabs`
- Want complex navigation with everything? Use `MultiFeatureTabs`

### Need vertical sidebar tabs?

**Without icons:**
- For settings pages or basic sidebars? Use `VerticalTabs`
- For documentation sites or guides? Use `VerticalBorderTabs`
- For admin panels or dashboards? Use `VerticalButtonTabs`

**With icons:**
- For app sidebars or toolboxes? Use `VerticalIconTabs`
- Building desktop-style applications? Use `VerticalIconSidebar`
- For professional tools or expert UIs? Use `VerticalIconTooltips`

## 📊 COMPLETE COMPONENT MATRIX

### Core Horizontal Tabs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicTabs** (read if you plan to implement: registry/default/components/comp-426.tsx) | 33 | Standard tabs with default styling | Simple navigation, getting started |
| **TransparentTabs** (read if you plan to implement: registry/default/components/comp-427.tsx) | 48 | Transparent background, muted active | Minimalist designs, clean interfaces |
| **PillTabs** (read if you plan to implement: registry/default/components/comp-428.tsx) | 48 | Rounded pill-style triggers | Modern apps, playful designs |
| **UnderlineTabs** (read if you plan to implement: registry/default/components/comp-429.tsx) | 48 | Bottom border with color indicator | Content sections, articles |
| **UnderlineHoverTabs** (read if you plan to implement: registry/default/components/comp-430.tsx) | 48 | Underline with hover effects | Interactive sites, refined UX |
| **SegmentedTabs** (read if you plan to implement: registry/default/components/comp-431.tsx) | 48 | Connected button group style | Settings panels, toggle groups |
| **FolderTabs** (read if you plan to implement: registry/default/components/comp-432.tsx) | 48 | Classic folder tab appearance | File managers, document tabs |
| **BadgeCountTabs** (read if you plan to implement: registry/default/components/comp-439.tsx) | 58 | Badge counts above labels | Analytics, data-driven navigation |

### Icon-Enhanced Tabs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **IconSegmentedTabs** (read if you plan to implement: registry/default/components/comp-435.tsx) | 69 | Icons with segmented control | Mobile-like interfaces |
| **IconFolderTabs** (read if you plan to implement: registry/default/components/comp-436.tsx) | 69 | Icons with folder styling | File browsers, IDE tabs |
| **IconPillTabs** (read if you plan to implement: registry/default/components/comp-434.tsx) | 69 | Icons with pill backgrounds | App navigation, dashboards |
| **IconBadgeTabs** (read if you plan to implement: registry/default/components/comp-433.tsx) | 70 | Icons with notification badges | Social apps, messaging |
| **IconTooltipTabs** (read if you plan to implement: registry/default/components/comp-440.tsx) | 86 | Icon-only with hover tooltips | Compact interfaces, toolbars |
| **MultiFeatureTabs** (read if you plan to implement: registry/default/components/comp-437.tsx) | **132** | Icons, badges, scroll, underline | Complex navigation bars |

### Vertical Layout Tabs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **VerticalTabs** (read if you plan to implement: registry/default/components/comp-442.tsx) | 45 | Simple vertical layout | Settings pages, sidebars |
| **VerticalButtonTabs** (read if you plan to implement: registry/default/components/comp-445.tsx) | 54 | Button-style vertical tabs | Admin panels, dashboards |
| **VerticalBorderTabs** (read if you plan to implement: registry/default/components/comp-443.tsx) | 54 | Left border indicator | Documentation sites, guides |
| **VerticalIconTabs** (read if you plan to implement: registry/default/components/comp-438.tsx) | 61 | Vertical with icons | App sidebars, toolboxes |
| **VerticalIconSidebar** (read if you plan to implement: registry/default/components/comp-444.tsx) | 71 | Full icon sidebar navigation | Desktop apps, admin UIs |
| **VerticalIconTooltips** (read if you plan to implement: registry/default/components/comp-441.tsx) | 92 | Vertical icons with right tooltips | Pro tools, expert interfaces |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicTabs (comp-426)

**Description**: The simplest tab component with standard styling. Your starting point for tab navigation.

**When to Use**:
- Basic content organization
- Simple navigation between sections
- Default starting point for any tabbed interface
- When you need tabs that just work
- Prototyping and quick implementations

**Implementation After Refactoring**:
```tsx
import BasicTabs from '@/components/BasicTabs'

const tabItems = [
  { value: "overview", label: "Overview", content: <OverviewPanel /> },
  { value: "analytics", label: "Analytics", content: <AnalyticsPanel /> },
  { value: "reports", label: "Reports", content: <ReportsPanel /> }
]

<BasicTabs 
  items={tabItems}
  defaultValue="overview"
  onValueChange={(value) => console.log('Tab changed:', value)}
/>
```

**Props to Implement**: `items`, `defaultValue`, `onValueChange`, `className`, `orientation`

---

### 🔷 UnderlineTabs (comp-429)

**Description**: Tabs with an animated underline indicator that slides to the active tab. Clean and modern.

**When to Use**:
- Content-heavy interfaces
- Article or blog navigation
- Documentation sites
- When you want subtle but clear active indicators
- Modern web applications

**Implementation After Refactoring**:
```tsx
import UnderlineTabs from '@/components/UnderlineTabs'

const sections = [
  { id: "intro", title: "Introduction", content: <IntroSection /> },
  { id: "features", title: "Features", content: <FeaturesSection /> },
  { id: "pricing", title: "Pricing", content: <PricingSection /> }
]

<UnderlineTabs 
  sections={sections}
  defaultSection="intro"
  underlineColor="primary"
  animationDuration={300}
/>
```

**Props to Implement**: `sections`, `defaultSection`, `underlineColor`, `animationDuration`, `underlineHeight`

---

### 🔷 IconBadgeTabs (comp-433)

**Description**: Tabs with icons and notification badges. Perfect for apps with real-time updates.

**When to Use**:
- Social media interfaces
- Messaging applications
- Dashboard navigation with alerts
- E-commerce with cart counts
- Any app needing visual notifications

**Implementation After Refactoring**:
```tsx
import IconBadgeTabs from '@/components/IconBadgeTabs'
import { House, MessageSquare, Bell, Settings } from 'lucide-react'

const navItems = [
  { value: "home", label: "Home", icon: House },
  { value: "messages", label: "Messages", icon: MessageSquare, badge: 3 },
  { value: "notifications", label: "Notifications", icon: Bell, badge: "99+" },
  { value: "settings", label: "Settings", icon: Settings, isNew: true }
]

<IconBadgeTabs 
  items={navItems}
  onTabChange={handleTabChange}
  badgeVariant="destructive"
/>
```

**Props to Implement**: `items`, `onTabChange`, `badgeVariant`, `showLabels`, `iconSize`

---

### 🔷 SegmentedTabs (comp-431)

**Description**: Connected tabs that look like a segmented control. Great for toggle-like navigation.

**When to Use**:
- Settings panels
- View mode toggles
- Filter controls
- iOS-style interfaces
- When tabs represent different views of same data

**Implementation After Refactoring**:
```tsx
import SegmentedTabs from '@/components/SegmentedTabs'

const viewModes = [
  { value: "list", label: "List View" },
  { value: "grid", label: "Grid View" },
  { value: "calendar", label: "Calendar" }
]

<SegmentedTabs 
  options={viewModes}
  value={currentView}
  onChange={setCurrentView}
  fullWidth={true}
/>
```

**Props to Implement**: `options`, `value`, `onChange`, `fullWidth`, `size`

---

### 🔷 VerticalIconSidebar (comp-444)

**Description**: Vertical tab navigation with icons and labels, featuring a left border indicator.

**When to Use**:
- Desktop application sidebars
- Admin panel navigation
- Settings pages with multiple sections
- When horizontal space is limited
- Complex applications with many sections

**Implementation After Refactoring**:
```tsx
import VerticalIconSidebar from '@/components/VerticalIconSidebar'
import { LayoutDashboard, Users, FileText, Settings } from 'lucide-react'

const sidebarItems = [
  { value: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { value: "users", label: "Users", icon: Users },
  { value: "documents", label: "Documents", icon: FileText },
  { value: "settings", label: "Settings", icon: Settings }
]

<VerticalIconSidebar 
  items={sidebarItems}
  defaultValue="dashboard"
  indicatorColor="primary"
  onNavigate={handleNavigation}
/>
```

**Props to Implement**: `items`, `defaultValue`, `indicatorColor`, `onNavigate`, `collapsible`

---

### 🔷 IconTooltipTabs (comp-440)

**Description**: Icon-only tabs with tooltips on hover. Maximizes space while maintaining usability.

**When to Use**:
- Toolbar navigation
- Compact interfaces
- Expert user interfaces
- When space is at premium
- Mobile-first designs

**Implementation After Refactoring**:
```tsx
import IconTooltipTabs from '@/components/IconTooltipTabs'
import { Home, Search, Heart, User } from 'lucide-react'

const compactNav = [
  { value: "home", icon: Home, tooltip: "Home", badge: 2 },
  { value: "search", icon: Search, tooltip: "Search" },
  { value: "favorites", icon: Heart, tooltip: "Favorites" },
  { value: "profile", icon: User, tooltip: "Profile" }
]

<IconTooltipTabs 
  items={compactNav}
  tooltipSide="bottom"
  iconSize={20}
/>
```

**Props to Implement**: `items`, `tooltipSide`, `iconSize`, `showBadges`, `onSelect`

---

### 🔷 MultiFeatureTabs (comp-437)

**Description**: The most feature-rich tab component with icons, badges, horizontal scrolling, and underline indicators.

**When to Use**:
- Complex navigation bars
- Mobile app-like interfaces
- When you need everything
- E-commerce category navigation
- Feature-rich applications

**Implementation After Refactoring**:
```tsx
import MultiFeatureTabs from '@/components/MultiFeatureTabs'

const complexNav = [
  { value: "overview", label: "Overview", icon: LayoutGrid },
  { value: "analytics", label: "Analytics", icon: TrendingUp, badge: "New" },
  { value: "reports", label: "Reports", icon: FileText, count: 12 },
  // ... more items
]

<MultiFeatureTabs 
  items={complexNav}
  enableScroll={true}
  showUnderline={true}
  defaultValue="overview"
/>
```

**Props to Implement**: `items`, `enableScroll`, `showUnderline`, `defaultValue`, `onTabChange`

---

### 🔷 VerticalIconTabs (comp-438)

**Description**: Vertical tab layout with icons and text labels, featuring underline indicators on the active tab.

**When to Use**:
- App sidebars with icon navigation
- Toolbox interfaces
- Vertical navigation with visual context
- When you need icons but also want text labels
- Multi-section vertical layouts

**Implementation After Refactoring**:
```tsx
import VerticalIconTabs from '@/components/VerticalIconTabs'
import { Home, Settings, Users, FileText } from 'lucide-react'

const verticalNav = [
  { value: "home", label: "Home", icon: Home },
  { value: "users", label: "Users", icon: Users },
  { value: "documents", label: "Documents", icon: FileText },
  { value: "settings", label: "Settings", icon: Settings }
]

<VerticalIconTabs 
  items={verticalNav}
  defaultValue="home"
  orientation="vertical"
  showUnderline={true}
/>
```

**Props to Implement**: `items`, `defaultValue`, `orientation`, `showUnderline`, `iconSize`

---

### 🔷 VerticalIconTooltips (comp-441)

**Description**: Vertical icon-only tabs with tooltips appearing on the right side, optimized for compact sidebars.

**When to Use**:
- Professional tool interfaces
- Compact vertical navigation
- Expert user applications
- When space is extremely limited
- Icon-heavy interfaces with accessibility needs

**Implementation After Refactoring**:
```tsx
import VerticalIconTooltips from '@/components/VerticalIconTooltips'
import { Layout, Users, Mail, Settings } from 'lucide-react'

const compactSidebar = [
  { value: "dashboard", icon: Layout, tooltip: "Dashboard", badge: 3 },
  { value: "team", icon: Users, tooltip: "Team Management" },
  { value: "messages", icon: Mail, tooltip: "Messages", badge: "99+" },
  { value: "settings", icon: Settings, tooltip: "Settings" }
]

<VerticalIconTooltips 
  items={compactSidebar}
  tooltipSide="right"
  defaultValue="dashboard"
  showBadges={true}
/>
```

**Props to Implement**: `items`, `tooltipSide`, `defaultValue`, `showBadges`, `onSelect`

---

## 🎨 STYLING VARIANTS

### TransparentTabs (comp-427)
```tsx
// Minimalist tabs with transparent background
<TransparentTabs items={navItems} variant="ghost" />
```

### PillTabs (comp-428)
```tsx
// Modern rounded pill-style active states
<PillTabs items={navItems} pillColor="primary" />
```

### FolderTabs (comp-432)
```tsx
// Classic folder-style tabs for file interfaces
<FolderTabs items={fileItems} />
```

### UnderlineHoverTabs (comp-430)
```tsx
// Underline indicator with smooth hover transitions
<UnderlineHoverTabs items={navItems} hoverOpacity={0.5} />
```

### BadgeCountTabs (comp-439)
```tsx
// Tabs with numeric badges above labels
<BadgeCountTabs items={dataItems} badgePosition="top" />
```

### VerticalButtonTabs (comp-445)
```tsx
// Vertical tabs with button-style active states
<VerticalButtonTabs items={sidebarItems} gap={2} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Navigation
```tsx
// Start here for simple tab needs
import BasicTabs from '@/components/BasicTabs'

<BasicTabs 
  items={[
    { value: "tab1", label: "Tab 1", content: "Content 1" },
    { value: "tab2", label: "Tab 2", content: "Content 2" }
  ]}
/>
```

### Modern App Navigation
```tsx
// For contemporary applications
import UnderlineTabs from '@/components/UnderlineTabs'

<UnderlineTabs 
  sections={appSections}
  underlineColor="primary"
/>
```

### Dashboard Sidebar
```tsx
// Vertical navigation for dashboards
import VerticalIconSidebar from '@/components/VerticalIconSidebar'

<VerticalIconSidebar 
  items={dashboardNav}
  indicatorColor="primary"
/>
```

### Mobile-Style Tabs
```tsx
// Icon-focused navigation with badges
import IconBadgeTabs from '@/components/IconBadgeTabs'

<IconBadgeTabs 
  items={mobileNav}
  showLabels={false}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 50 LoC**: Basic tabs with simple styling variations (BasicTabs, TransparentTabs, PillTabs)
- **50-70 LoC**: Tabs with single advanced feature (icons OR badges OR special styling)
- **70-90 LoC**: Multi-feature tabs (icons + badges, tooltips)
- **90-132 LoC**: Complex tabs with multiple features and interactions (VerticalIconTooltips, MultiFeatureTabs)

**Why LoC matters**: Simpler components are easier to customize, debug, and maintain. Start with the minimum features you need.

### Component Selection Strategy

Choose your tab component based on these factors:

1. **Layout**: Horizontal (default) vs Vertical
2. **Visual Style**: Underline, Pill, Segmented, Folder, or Standard
3. **Features**: Icons, Badges, Tooltips, Scrolling
4. **Space**: Full labels vs Icon-only
5. **Interactivity**: Static vs Dynamic content

### Mobile Patterns
All tab components follow responsive design principles:
1. Horizontal scroll for overflow (comp-433, comp-437)
2. Touch-friendly tap targets (minimum 44px)
3. Icon-only modes for narrow screens
4. Collapsible labels in vertical layouts

### Performance Tips
1. Start with BasicTabs and add features only as needed
2. Use icon-only variants for better mobile performance
3. Implement lazy loading for tab content panels
4. Consider virtual scrolling for many tabs (10+)
5. Memoize tab content components to prevent unnecessary re-renders

### Accessibility
- All tabs include proper ARIA attributes (tablist, tab, tabpanel)
- Keyboard navigation with Arrow keys and Tab
- Focus indicators clearly visible
- Screen reader announcements for active tab
- Tooltips for icon-only variants
- Proper color contrast ratios maintained

### Animation & Transitions
- Underline indicators use CSS transforms for smooth sliding
- Active state transitions use 150-200ms duration
- Hover states provide immediate feedback
- Content panels can use fade or slide transitions

### Migration Path
```
BasicTabs → UnderlineTabs → IconBadgeTabs → MultiFeatureTabs
  (33 LoC)     (48 LoC)       (70 LoC)        (132 LoC)
```

Start simple, upgrade only when users need more features!