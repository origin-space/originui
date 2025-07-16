# Navbar Component

Navbars provide primary navigation and branding at the top of your site or app. Use them for site-wide links, user menus, search bars, and context switching. They work best with 3-7 main items, sticky positioning, and responsive mobile menus. Unlike sidebars (vertical, many items) or tabs (content switching), navbars are horizontal and persistent.

Headers handle page-specific actions within content areas, while navbars handle global navigation. Footers contain secondary links at page bottom. Pick from 20 navbar styles below based on your needs: layout style (standard/centered/icon-only), primary function (navigation/search/context), and special features (mega menus/status badges/team switching).

## Which 'Navbar' variant do you need?

### Building a standard website or marketing page?

**Need simple navigation:**
- Classic layout (logo left, nav center, actions right)? Use `StandardLayoutNav`
- Want stylish bottom borders on active links? Use `StyledLinkNav`
- Prefer centered logo with balanced sides? Use `CenteredLogoNav`

**Need dropdown menus:**
- Multi-column mega menus with icons? Use `MegaMenuNav`

### Building a SaaS dashboard or app?

**Icon-based navigation:**
- Minimal icons only with hover tooltips? Use `IconOnlyNav`
- Icons with text labels for clarity? Use `IconWithTextNav`
- Multiple tool icons clustered on right? Use `IconHeavyNav`

**Context switching features:**
- Switching between teams/workspaces? Use `TeamSwitcherNav`
- Switching between AI models? Use `AIModelSwitcherNav`
- Clickable breadcrumbs with dropdowns? Use `InteractiveBreadcrumbNav`
- Toggle between edit/preview modes? Use `AppToggleNav`

**Page headers (not main nav):**
- Analytics page with date/filter controls? Use `DashboardHeader`
- Settings page with many action buttons? Use `ActionHeavyNav`
- System monitoring with live status badges? Use `StatusIndicatorNav`

### Is search your primary action?

**E-commerce layouts:**
- Full shopping experience (logo + nav + search + cart)? Use `SimpleCenteredNav`
- Documentation site with centered search? Use `CenteredSearchNav`

**Minimal search-first:**
- Clean design with prominent search bar? Use `FullWidthSearchNav`

### Building specialized interfaces?

**Social/community features:**
- Need notifications, messages, and social icons? Use `SocialNav`

**Secondary navigation:**
- Just need a breadcrumb trail? Use `SimpleBreadcrumbNav`
- Detail page with back button and avatars? Use `SubPageHeader`

## 📊 COMPLETE COMPONENT MATRIX

### Core Application Navbars

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **AppToggleNav** (read if you plan to implement: registry/default/components/comp-594.tsx) | 46 | Centered mode toggle | Design tools, edit/preview modes |
| **FullWidthSearchNav** (read if you plan to implement: registry/default/components/comp-586.tsx) | 57 | Minimal with prominent search | Documentation, knowledge bases |
| **DashboardHeader** (read if you plan to implement: registry/default/components/comp-593.tsx) | 58 | Breadcrumbs + date/filters | Analytics dashboards, reports |
| **ActionHeavyNav** (read if you plan to implement: registry/default/components/comp-592.tsx) | 78 | Right-side action focus | Settings pages, admin controls |
| **AIModelSwitcherNav** (read if you plan to implement: registry/default/components/comp-591.tsx) | 88 | AI model selector left | AI apps, chatbot interfaces |
| **SubPageHeader** (read if you plan to implement: registry/default/components/comp-595.tsx) | 105 | Back button + avatars | Detail pages, nested views |
| **SimpleBreadcrumbNav** (read if you plan to implement: registry/default/components/comp-583.tsx) | 107 | Basic breadcrumb nav | Multi-level navigation |
| **StyledLinkNav** (read if you plan to implement: registry/default/components/comp-579.tsx) | 116 | Bottom border indicators on active | Clean, modern websites |
| **StandardLayoutNav** (read if you plan to implement: registry/default/components/comp-577.tsx) | 118 | Logo left, nav left, actions right | Corporate sites, default choice |
| **IconHeavyNav** (read if you plan to implement: registry/default/components/comp-581.tsx) | 118 | Multiple icon menus right | Apps with many tools |
| **TeamSwitcherNav** (read if you plan to implement: registry/default/components/comp-590.tsx) | 140 | Team/account switcher | Multi-tenant SaaS |
| **CenteredLogoNav** (read if you plan to implement: registry/default/components/comp-588.tsx) | 143 | Centered logo with side nav | Brand-focused sites |
| **IconWithTextNav** (read if you plan to implement: registry/default/components/comp-587.tsx) | 144 | Icons + text labels | Clarity over minimalism |
| **CenteredSearchNav** (read if you plan to implement: registry/default/components/comp-584.tsx) | 147 | Search centered with bottom nav | Documentation sites |
| **StatusIndicatorNav** (read if you plan to implement: registry/default/components/comp-596.tsx) | 157 | Live status badges | Monitoring dashboards |
| **SimpleCenteredNav** (read if you plan to implement: registry/default/components/comp-580.tsx) | 165 | Logo + nav + search + cart layout | E-commerce sites |
| **SocialNav** (read if you plan to implement: registry/default/components/comp-585.tsx) | 168 | Search + social icons | Community platforms |
| **InteractiveBreadcrumbNav** (read if you plan to implement: registry/default/components/comp-589.tsx) | 175 | Interactive dropdowns | Complex project hierarchies |
| **IconOnlyNav** (read if you plan to implement: registry/default/components/comp-582.tsx) | 191 | Icon-only with tooltips | Compact dashboards |
| **MegaMenuNav** (read if you plan to implement: registry/default/components/comp-578.tsx) | **270** | Multi-column dropdowns | Large sites, e-commerce |

### Visual Styles & Patterns

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Icon-Only** | IconOnlyNav, IconHeavyNav | Limited space, expert users |
| **Breadcrumb-Based** | SimpleBreadcrumbNav, InteractiveBreadcrumbNav, DashboardHeader | Deep navigation hierarchies |
| **Search-Centered** | CenteredSearchNav, FullWidthSearchNav, SimpleCenteredNav | Search is primary action |
| **Status/Monitoring** | StatusIndicatorNav, ActionHeavyNav | Real-time data, admin panels |
| **Context Switchers** | TeamSwitcherNav, AIModelSwitcherNav, AppToggleNav | Multi-context applications |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 StandardLayoutNav (comp-577)

**Description**: The quintessential navbar layout with logo left, navigation center, and actions right. The default choice for most websites.

**When to Use**:
- Corporate websites
- Marketing pages
- Documentation sites
- Default starting point for any project
- When you need a familiar, proven layout

**Implementation After Refactoring**:
```tsx
import StandardLayoutNav from '@/components/StandardLayoutNav'

const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" }
]

const userActions = [
  { href: "/login", label: "Sign In", variant: "ghost" },
  { href: "/signup", label: "Get Started", variant: "default" }
]

<StandardLayoutNav 
  links={navLinks} 
  actions={userActions}
  logoHref="/"
/>
```

**Props to Implement**: `links`, `actions`, `logoHref`, `logoSrc`, `mobileBreakpoint`

---

### 🔷 IconOnlyNav (comp-582)

**Description**: Compact navbar with icon-only navigation. Shows tooltips on hover for desktop, expands to icon+label on mobile.

**When to Use**:
- SaaS dashboards with limited space
- Admin panels with many sections
- Expert user interfaces
- When icons are universally understood
- Sidebar-like navigation in header format

**Implementation After Refactoring**:
```tsx
import IconOnlyNav from '@/components/IconOnlyNav'
import { HomeIcon, LayersIcon, SettingsIcon } from 'lucide-react'

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: HomeIcon, active: true },
  { href: "/projects", label: "Projects", icon: LayersIcon },
  { href: "/settings", label: "Settings", icon: SettingsIcon }
]

<IconOnlyNav 
  links={navLinks}
  showLabelsOnMobile={true}
/>
```

**Props to Implement**: `links`, `userInfo`, `showLabelsOnMobile`

---

### 🔷 MegaMenuNav (comp-578)

**Description**: Advanced navbar with multi-column dropdown menus featuring icons and descriptions. The most complex navbar option.

**When to Use**:
- E-commerce sites with many categories
- Large corporate sites
- Complex service offerings
- When you need rich navigation content
- Sites with deep information architecture

**Implementation After Refactoring**:
```tsx
import MegaMenuNav from '@/components/MegaMenuNav'

const navLinks = [
  { 
    label: "Products",
    type: "mega",
    columns: [
      {
        title: "Components",
        items: [
          { href: "/ui", label: "UI Elements", description: "Buttons, forms, cards" },
          { href: "/data", label: "Data Display", description: "Tables, charts, lists" }
        ]
      },
      {
        title: "Templates",
        items: [
          { href: "/landing", label: "Landing Pages", icon: "layout" },
          { href: "/dashboard", label: "Dashboards", icon: "chart" }
        ]
      }
    ]
  }
]

<MegaMenuNav links={navLinks} />
```

**Props to Implement**: `links`, `actions`, `columns`, `showIcons`, `maxColumns`

---

### 🔷 DashboardHeader (comp-593)

**Description**: Content area header with breadcrumbs left and contextual actions (date picker, filters) right.

**When to Use**:
- Analytics dashboards
- Report pages
- Data visualization interfaces
- When date/filter context matters
- Content area headers (not main nav)

**Implementation After Refactoring**:
```tsx
import DashboardHeader from '@/components/DashboardHeader'

const breadcrumbs = [
  { href: "/", label: "Home" },
  { href: "/analytics", label: "Analytics" },
  { label: "Revenue Report" }
]

<DashboardHeader 
  breadcrumbs={breadcrumbs}
  dateRange={dateRange}
  onDateChange={handleDateChange}
  onFilterClick={handleFilterClick}
/>
```

**Props to Implement**: `breadcrumbs`, `dateRange`, `onDateChange`, `onFilterClick`, `showDatePicker`

---

### 🔷 CenteredSearchNav (comp-584)

**Description**: Navigation with a dominant centered search bar. Search is the primary action.

**When to Use**:
- E-commerce sites
- Documentation/knowledge bases
- Search-first applications
- Product catalogs
- Any site where search is the main user action

**Implementation After Refactoring**:
```tsx
import CenteredSearchNav from '@/components/CenteredSearchNav'

<CenteredSearchNav 
  onSearch={handleSearch}
  searchPlaceholder="Search products..."
  categories={['Electronics', 'Clothing', 'Home']}
  cartItemCount={3}
/>
```

**Props to Implement**: `onSearch`, `searchPlaceholder`, `categories`, `cartItemCount`, `userMenu`

---

### 🔷 InteractiveBreadcrumbNav (comp-589)

**Description**: Breadcrumb navigation with interactive dropdowns for switching context (team, project, environment).

**When to Use**:
- Multi-tenant SaaS applications
- Project management tools
- Complex hierarchical systems
- When users frequently switch contexts
- Deep navigation structures

**Implementation After Refactoring**:
```tsx
import InteractiveBreadcrumbNav from '@/components/InteractiveBreadcrumbNav'

const contexts = {
  team: { current: 'Acme Inc', options: teams },
  project: { current: 'Website Redesign', options: projects },
  environment: { current: 'Production', options: ['Production', 'Staging', 'Dev'] }
}

<InteractiveBreadcrumbNav 
  contexts={contexts}
  onContextChange={handleContextChange}
/>
```

**Props to Implement**: `contexts`, `onContextChange`, `breadcrumbs`, `showEnvironmentBadge`

---

### 🔷 StatusIndicatorNav (comp-596)

**Description**: Navigation with live status badges and toggle switches for monitoring.

**When to Use**:
- Server monitoring dashboards
- System status pages
- Real-time monitoring apps
- DevOps tools
- Any app tracking live statuses

**Implementation After Refactoring**:
```tsx
import StatusIndicatorNav from '@/components/StatusIndicatorNav'

const navItems = [
  { label: 'Servers', href: '/servers', status: 'online', count: 12 },
  { label: 'Databases', href: '/databases', status: 'warning', count: 3 },
  { label: 'APIs', href: '/apis', status: 'error', count: 1 }
]

<StatusIndicatorNav 
  items={navItems}
  onToggleMonitoring={handleToggle}
  isMonitoring={true}
/>
```

**Props to Implement**: `items`, `onToggleMonitoring`, `isMonitoring`, `refreshInterval`

---

### 🔷 SocialNav (comp-585)

**Description**: Social platform navbar with search left, icon navigation center, and user menu right.

**When to Use**:
- Social media platforms
- Community applications
- Messaging apps
- Content sharing platforms
- Apps with social features

**Implementation After Refactoring**:
```tsx
import SocialNav from '@/components/SocialNav'

const socialLinks = [
  { icon: HomeIcon, href: '/feed', label: 'Home' },
  { icon: BellIcon, href: '/notifications', label: 'Notifications', badge: 5 },
  { icon: MessageIcon, href: '/messages', label: 'Messages', badge: 2 }
]

<SocialNav 
  links={socialLinks}
  onSearch={handleSearch}
  user={currentUser}
/>
```

**Props to Implement**: `links`, `onSearch`, `user`, `onCreatePost`

---

### 🔷 SubPageHeader (comp-595)

**Description**: Secondary header for nested pages with back button, avatars, and contextual actions.

**When to Use**:
- Settings pages
- Project detail views
- Modal-like pages
- Nested workflows
- Any page needing context from parent

**Implementation After Refactoring**:
```tsx
import SubPageHeader from '@/components/SubPageHeader'

<SubPageHeader 
  title="Project Settings"
  onBack={() => router.back()}
  avatars={teamMembers}
  actions={[
    { label: 'Save', onClick: handleSave },
    { label: 'Cancel', onClick: handleCancel, variant: 'ghost' }
  ]}
/>
```

**Props to Implement**: `title`, `onBack`, `avatars`, `actions`, `showBorder`

---

## 🎨 SPECIALIZED NAVBARS

### AIModelSwitcherNav (comp-591)
```tsx
// AI-specific navigation with model selector on the left
<AIModelSwitcherNav 
  currentModel="gpt-4"
  models={['gpt-4', 'gpt-3.5', 'claude']}
  onModelChange={handleModelChange}
/>
```

### AppToggleNav (comp-594)
```tsx
// Mode switcher for design tools
<AppToggleNav 
  modes={['Edit', 'Preview']}
  currentMode="Edit"
  onModeChange={handleModeChange}
/>
```

### TeamSwitcherNav (comp-590)
```tsx
// Multi-tenant team switching
<TeamSwitcherNav 
  teams={userTeams}
  currentTeam={activeTeam}
  onTeamChange={handleTeamChange}
/>
```

### SimpleBreadcrumbNav (comp-583)
```tsx
// Basic breadcrumb navigation
<SimpleBreadcrumbNav 
  breadcrumbs={[
    { href: '#', label: 'Home' },
    { href: '#', label: 'Projects' },
    { label: 'Current Project' }
  ]}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Website
```tsx
// Start here for most websites
import StandardLayoutNav from '@/components/StandardLayoutNav'

<StandardLayoutNav 
  links={[
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" }
  ]}
/>
```

### SaaS Dashboard
```tsx
// For application dashboards
import IconOnlyNav from '@/components/IconOnlyNav'

<IconOnlyNav 
  links={navLinks}
  user={currentUser}
/>
```

### E-commerce Site
```tsx
// Search-focused with categories
import CenteredSearchNav from '@/components/CenteredSearchNav'

<CenteredSearchNav 
  categories={productCategories}
  onSearch={handleProductSearch}
/>
```

### Enterprise Application
```tsx
// Complex navigation with context switching
import InteractiveBreadcrumbNav from '@/components/InteractiveBreadcrumbNav'

<InteractiveBreadcrumbNav 
  contexts={organizationContexts}
  breadcrumbs={currentPath}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 60 LoC**: Minimal, single-purpose headers (AppToggleNav, FullWidthSearchNav)
- **60-120 LoC**: Standard navbars with basic features (StandardLayoutNav, AIModelSwitcherNav)
- **120-180 LoC**: Feature-rich with multiple sections (SocialNav, StatusIndicatorNav)
- **180-270 LoC**: Complex with advanced interactions (IconOnlyNav, MegaMenuNav)

**Why LoC matters**: Smaller components are:
- Easier to understand and modify
- Less likely to have bugs
- Faster to load and render
- Simpler to test

### Component Composition
Navbars use shared components from `/components/navbar-components/`:
- `user-menu.tsx` - User avatar dropdown
- `notification-menu.tsx` - Notification bell
- `theme-toggle.tsx` - Dark/light mode switch
- `team-switcher.tsx` - Organization selector
- `logo.tsx` - Brand logo component

**Pro tip**: Mix and match these building blocks to create custom navbars quickly.

### Mobile Patterns
All navbars follow consistent mobile patterns:
1. Logo stays visible
2. Navigation collapses to hamburger menu
3. Search remains accessible
4. Critical actions stay visible

### Performance Tips
1. Start with the simplest navbar that meets your needs
2. Lazy load dropdown content for mega menus
3. Use CSS transitions instead of JavaScript animations
4. Minimize re-renders with proper state management

### Accessibility
- All navbars include proper ARIA labels
- Keyboard navigation fully supported
- Screen reader optimized
- Focus management for dropdowns
- Mobile touch targets meet WCAG guidelines

### Migration Path
```
AppToggleNav → StandardLayoutNav → MegaMenuNav → Custom Composition
   (46 LoC)      (118 LoC)         (270 LoC)      (Build your own)
```

Start simple, upgrade only when users need more features!
