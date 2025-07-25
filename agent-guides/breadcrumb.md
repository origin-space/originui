# Breadcrumb Component

Breadcrumbs show users where they are in your site's hierarchy and let them navigate back up. Use them for multi-level navigation, file systems, e-commerce categories, or any content with parent-child relationships. They're essential when users can arrive at a page from multiple paths or need to understand their location context.

Unlike tabs that switch between sibling content, breadcrumbs show hierarchical paths. Unlike nav menus that show all options, breadcrumbs show only the current path. Pick from 8 styles below based on your needs: separator style (chevron/slash/dot), visual enhancement (basic/container/icons), interactivity (static/selector/collapsible), and customization level (standard/custom).

## Which 'Breadcrumb' variant do you need?

### Need standard breadcrumb navigation?

**Looking for a specific separator style:**
- Default chevron arrows? Use `BasicBreadcrumb`
- Forward slashes (/) for file paths? Use `SlashSeparatorBreadcrumb`
- Subtle dots (·) for minimal design? Use `DotSeparatorBreadcrumb`

**Want enhanced visual styling:**
- Need it to stand out with a background? Use `StyledContainerBreadcrumb`
- Want icons next to each breadcrumb item? Use `IconTextBreadcrumb`

### Need advanced interactive features?

**Working with multiple contexts (databases, environments, projects):**
- Building a multi-tenant app with context switching? Use `SelectorBreadcrumb`

**Dealing with deep navigation hierarchies:**
- Just need to collapse long paths into "..."? Use `CollapsibleBreadcrumb`
- Want branded collapsible paths with custom icons? Use `CustomIconCollapsibleBreadcrumb`

## 📊 COMPLETE COMPONENT MATRIX

### Core Breadcrumb Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicBreadcrumb** (read if you plan to implement: registry/default/components/comp-448.tsx) | 34 | Home icon + default separator | Standard navigation, minimal styling |
| **SlashSeparatorBreadcrumb** (read if you plan to implement: registry/default/components/comp-450.tsx) | 34 | Home icon + "/" separators | Clear path separation, file system style |
| **DotSeparatorBreadcrumb** (read if you plan to implement: registry/default/components/comp-451.tsx) | 34 | Home icon + "·" separators | Clean minimal look, modern design |
| **StyledContainerBreadcrumb** (read if you plan to implement: registry/default/components/comp-452.tsx) | 34 | Home icon + background container | Prominent navigation, dashboard headers |
| **IconTextBreadcrumb** (read if you plan to implement: registry/default/components/comp-449.tsx) | 37 | Icons + text labels | Enhanced clarity, complex navigation |

### Interactive & Advanced Breadcrumbs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SelectorBreadcrumb** (read if you plan to implement: registry/default/components/comp-453.tsx) | 49 | Database/context selector | Multi-tenant apps, environment switching |
| **CollapsibleBreadcrumb** (read if you plan to implement: registry/default/components/comp-446.tsx) | 56 | Ellipsis dropdown for hidden paths | Long navigation paths, space constraints |
| **CustomIconCollapsibleBreadcrumb** (read if you plan to implement: registry/default/components/comp-447.tsx) | **59** | Custom icon + collapsible menu | Branded navigation, custom workflows |

### Visual Patterns

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Icon-Only Home** | BasicBreadcrumb, SlashSeparatorBreadcrumb, DotSeparatorBreadcrumb | Space-efficient, universal recognition |
| **Icon + Text** | IconTextBreadcrumb | Clear labeling, accessibility focus |
| **Container Styled** | StyledContainerBreadcrumb | Prominent placement, visual separation |
| **Interactive Elements** | SelectorBreadcrumb, CollapsibleBreadcrumb | Dynamic content, complex hierarchies |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicBreadcrumb (comp-448)

**Description**: The simplest breadcrumb implementation with home icon and default separators. Your go-to choice for standard navigation.

**When to Use**:
- Standard website navigation
- Forms and multi-step processes
- Content management systems
- Default choice for most projects
- When you need familiar, proven navigation

**Implementation After Refactoring**:
```tsx
import BasicBreadcrumb from '@/components/BasicBreadcrumb'

const breadcrumbItems = [
  { href: "/", label: "Home", isHome: true },
  { href: "/components", label: "Components" },
  { label: "Breadcrumb" } // Current page, no href
]

<BasicBreadcrumb 
  items={breadcrumbItems}
  showHomeIcon={true}
  homeIconSize={16}
/>
```

**Props to Implement**: `items`, `showHomeIcon`, `homeIconSize`, `separator`, `onNavigate`

---

### 🔷 IconTextBreadcrumb (comp-449)

**Description**: Enhanced breadcrumb with both icons and text labels for maximum clarity and visual hierarchy.

**When to Use**:
- Complex applications with many sections
- When accessibility is critical
- Users unfamiliar with icon meanings
- Enhanced visual hierarchy needed
- Enterprise applications

**Implementation After Refactoring**:
```tsx
import IconTextBreadcrumb from '@/components/IconTextBreadcrumb'
import { HomeIcon, ComponentIcon } from 'lucide-react'

const breadcrumbItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/components", label: "Components", icon: ComponentIcon },
  { label: "Breadcrumb" }
]

<IconTextBreadcrumb 
  items={breadcrumbItems}
  showIcons={true}
  iconSize={16}
/>
```

**Props to Implement**: `items`, `showIcons`, `iconSize`, `separator`, `iconPosition`

---

### 🔷 SelectorBreadcrumb (comp-453)

**Description**: Interactive breadcrumb with dropdown selectors for context switching like databases, environments, or projects.

**When to Use**:
- Multi-tenant SaaS applications
- Database administration tools
- Environment switching (dev/staging/prod)
- Project management systems
- Any context-dependent navigation

**Implementation After Refactoring**:
```tsx
import SelectorBreadcrumb from '@/components/SelectorBreadcrumb'

const databases = [
  { value: "1", label: "Orion" },
  { value: "2", label: "Sigma" },
  { value: "3", label: "Dorado" }
]

<SelectorBreadcrumb 
  basePath={[{ href: "/databases", label: "Databases" }]}
  selector={{
    value: "1",
    options: databases,
    onChange: handleDatabaseChange,
    placeholder: "Select database",
    icon: DatabaseIcon
  }}
/>
```

**Props to Implement**: `basePath`, `selector`, `onSelectionChange`, `loading`, `disabled`

---

### 🔷 CollapsibleBreadcrumb (comp-446)

**Description**: Space-efficient breadcrumb that collapses middle segments into an ellipsis dropdown for long navigation paths.

**When to Use**:
- Deep navigation hierarchies
- File system browsers
- Responsive layouts with space constraints
- Complex organizational structures
- Mobile-friendly navigation

**Implementation After Refactoring**:
```tsx
import CollapsibleBreadcrumb from '@/components/CollapsibleBreadcrumb'

const fullPath = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Documentation" },
  { href: "/docs/themes", label: "Themes" },
  { href: "/docs/themes/advanced", label: "Advanced" },
  { href: "/docs/themes/advanced/customization", label: "Customization" },
  { label: "Color Schemes" }
]

<CollapsibleBreadcrumb 
  items={fullPath}
  maxVisibleItems={3}
  collapseAfter={1}
  ellipsisMenuItems={[
    { href: "/docs/themes", label: "Themes" },
    { href: "/docs/themes/advanced", label: "Advanced" }
  ]}
/>
```

**Props to Implement**: `items`, `maxVisibleItems`, `collapseAfter`, `ellipsisMenuItems`, `onEllipsisClick`

---

### 🔷 StyledContainerBreadcrumb (comp-452)

**Description**: Breadcrumb with enhanced visual styling including background, border, and shadow for prominent placement.

**When to Use**:
- Dashboard headers
- Important navigation sections
- When breadcrumb needs visual emphasis
- Card-based layouts
- Standalone navigation components

**Implementation After Refactoring**:
```tsx
import StyledContainerBreadcrumb from '@/components/StyledContainerBreadcrumb'

<StyledContainerBreadcrumb 
  items={breadcrumbItems}
  containerStyle={{
    background: true,
    border: true,
    shadow: "xs",
    padding: "md"
  }}
/>
```

**Props to Implement**: `items`, `containerStyle`, `variant`, `size`, `rounded`

---

### 🔷 CustomIconCollapsibleBreadcrumb (comp-447)

**Description**: Advanced collapsible breadcrumb with custom icons and branded styling for specialized navigation workflows.

**When to Use**:
- Custom design systems
- Branded applications
- Specialized workflows
- Advanced file management
- Complex hierarchical data

**Implementation After Refactoring**:
```tsx
import CustomIconCollapsibleBreadcrumb from '@/components/CustomIconCollapsibleBreadcrumb'
import { FoldersIcon } from 'lucide-react'

<CustomIconCollapsibleBreadcrumb 
  items={fullPath}
  customIcon={FoldersIcon}
  iconSize={16}
  maxVisibleItems={3}
  menuItems={hiddenItems}
/>
```

**Props to Implement**: `items`, `customIcon`, `iconSize`, `maxVisibleItems`, `menuItems`, `onCustomIconClick`

---

## 🎨 SPECIALIZED VARIANTS & LAYOUTS

### SlashSeparatorBreadcrumb (comp-450)
```tsx
// File system style with "/" separators
<SlashSeparatorBreadcrumb 
  items={pathItems}
  separator=" / "
/>
```

### DotSeparatorBreadcrumb (comp-451)
```tsx
// Clean minimal look with "·" separators
<DotSeparatorBreadcrumb 
  items={pathItems}
  separator=" · "
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Website Navigation
```tsx
// Start here for most websites
import BasicBreadcrumb from '@/components/BasicBreadcrumb'

<BasicBreadcrumb 
  items={[
    { href: "/", label: "Home", isHome: true },
    { href: "/products", label: "Products" },
    { label: "Product Details" }
  ]}
/>
```

### SaaS Application
```tsx
// For context-aware applications
import SelectorBreadcrumb from '@/components/SelectorBreadcrumb'

<SelectorBreadcrumb 
  basePath={basePath}
  selector={{
    value: currentEnvironment,
    options: environments,
    onChange: switchEnvironment
  }}
/>
```

### Complex Hierarchies
```tsx
// For deep navigation with space constraints
import CollapsibleBreadcrumb from '@/components/CollapsibleBreadcrumb'

<CollapsibleBreadcrumb 
  items={fullNavigationPath}
  maxVisibleItems={3}
/>
```

### Enhanced Clarity
```tsx
// When icons improve understanding
import IconTextBreadcrumb from '@/components/IconTextBreadcrumb'

<IconTextBreadcrumb 
  items={itemsWithIcons}
  showIcons={true}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 35 LoC**: Simple display breadcrumbs, basic styling variants
- **35-40 LoC**: Enhanced styling, icon + text combinations
- **40-50 LoC**: Interactive features, context selectors
- **50+ LoC**: Advanced features, collapsible navigation, custom styling

**Why LoC matters**: Breadcrumb complexity directly impacts:
- Loading performance and bundle size
- Maintenance effort and debugging time
- User experience and navigation clarity
- Implementation and customization difficulty

### Navigation Patterns

**Linear Breadcrumbs**: Best for sequential workflows like checkout, onboarding, or multi-step forms.

**Hierarchical Breadcrumbs**: Ideal for content management, file systems, and organizational structures.

**Context-Aware Breadcrumbs**: Perfect for multi-tenant applications, dashboards with environment switching.

### Mobile Considerations
All breadcrumb components follow responsive patterns:
1. **Touch-friendly targets** - Minimum 44px touch areas
2. **Horizontal scrolling** - When items don't fit, allow horizontal scroll
3. **Intelligent collapsing** - Automatically collapse on smaller screens
4. **Icon recognition** - Ensure icons work well at smaller sizes

### Performance Tips
1. Start with the simplest breadcrumb that meets your needs
2. Use collapsible variants for paths longer than 4-5 items
3. Implement virtualization for extremely deep hierarchies
4. Lazy load dropdown content when possible
5. Cache navigation context to reduce re-renders

### Accessibility
- All breadcrumbs include proper ARIA navigation landmarks
- Keyboard navigation fully supported (Tab, Enter, Arrow keys)
- Screen reader announcements for current location
- High contrast mode compatibility
- Focus management for dropdown interactions
- Semantic HTML structure with proper heading hierarchy

### Separator Guidelines
- **Default**: Standard chevron for universal recognition
- **"/"**: File system style, technical contexts
- **"·"**: Minimal modern design, content-focused layouts
- **Custom**: Brand-specific or specialized use cases

### Migration Path
```
BasicBreadcrumb → IconTextBreadcrumb → SelectorBreadcrumb → CollapsibleBreadcrumb
   (34 LoC)         (37 LoC)           (49 LoC)            (56 LoC)
```

Start simple, add complexity only when user scenarios demand it!