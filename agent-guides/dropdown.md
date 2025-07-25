# Dropdown Component

Dropdowns show a list of options when clicked. Use them for actions, navigation, settings, or any menu that appears on demand. They save space by hiding options until needed and work great for context menus (right-click), toolbar overflows (⋯ buttons), user profiles, or filter controls. They handle 2-50+ items better than tabs (2-5 items) or navigation bars (always visible).

Select boxes are better for form inputs where users pick a value. Command palettes are better for search-driven actions. Modals are better for complex forms or wizards. But dropdowns excel at revealing grouped actions on demand. Pick from 14 styles below based on complexity: simple (33-51 LoC), standard (58-74 LoC), or advanced (83-126 LoC).

## Which 'Dropdown' variant do you need?

### Just need simple action menus?

**Space-constrained with ellipsis icon (⋯):**
- Three-dot menu button? Use `BasicEllipsisDropdown` (read 'registry/default/components/comp-366.tsx')

**Neat alignment where menu matches button:**
- Menu width equals trigger width? Use `SameWidthDropdown` (read 'registry/default/components/comp-367.tsx')

**Visual clarity with icons in menu items:**
- Icons beside each action? Use `DropdownWithIcons` (read 'registry/default/components/comp-368.tsx')

### Need to organize related actions?

**Simple visual grouping:**
- With separator lines? Use `GroupedDropdown` (read 'registry/default/components/comp-369.tsx')

**Named category sections:**
- With text labels for each group? Use `LabeledGroupsDropdown` (read 'registry/default/components/comp-370.tsx')

### Building filters or option pickers?

**Multiple selections allowed:**
- Need checkboxes? Use `CheckboxDropdown` (read 'registry/default/components/comp-371.tsx')

**Only one selection at a time:**
- Need radio buttons? Use `RadioButtonDropdown` (read 'registry/default/components/comp-372.tsx')

### Creating user account menus?

**Text-based user info (simplest):**
- Just name and email display? Use `UserAccountDropdown` (read 'registry/default/components/comp-375.tsx')

**Rich profile with avatar image:**
- Avatar inside the menu dropdown? Use `AvatarAccountMenu` (read 'registry/default/components/comp-376.tsx')

**Avatar as clickable trigger:**
- Avatar image IS the menu button? Use `AvatarButtonDropdown` (read 'registry/default/components/comp-377.tsx')

### Need specialized interfaces?

**Support and documentation:**
- External help links and resources? Use `HelpMenuDropdown` (read 'registry/default/components/comp-378.tsx')

**Content creation workflows:**
- Rich descriptions with visual icons? Use `BlockEditorMenu` (read 'registry/default/components/comp-379.tsx')

### Want advanced desktop-like menus?

**Keyboard shortcuts and nested submenus:**
- Professional app with ⌘ shortcuts? Use `RichMenuDropdown` (read 'registry/default/components/comp-373.tsx')

**Maximum feature density:**
- Icons, shortcuts, checkboxes, AND submenus? Use `AdvancedRichMenu` (read 'registry/default/components/comp-374.tsx')

## 📊 COMPLETE COMPONENT MATRIX

### Core Dropdown Menus

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicEllipsisDropdown** (read if you plan to implement: registry/default/components/comp-366.tsx) | 33 | Icon-only trigger, ghost button | Compact action menus, mobile interfaces |
| **SameWidthDropdown** (read if you plan to implement: registry/default/components/comp-367.tsx) | 33 | Menu matches trigger width | Consistent layouts, form-like dropdowns |
| **UserAccountDropdown** (read if you plan to implement: registry/default/components/comp-375.tsx) | 41 | User info display, simple actions | Basic user menus, account settings |
| **RadioButtonDropdown** (read if you plan to implement: registry/default/components/comp-372.tsx) | 43 | Single selection with state | Option pickers, sorting controls |
| **DropdownWithIcons** (read if you plan to implement: registry/default/components/comp-368.tsx) | 51 | Icons for each menu item | Visual action menus, toolbars |
| **CheckboxDropdown** (read if you plan to implement: registry/default/components/comp-371.tsx) | 58 | Multiple selection support | Filters, preferences, multi-select |
| **GroupedDropdown** (read if you plan to implement: registry/default/components/comp-369.tsx) | 63 | Grouped items with separators | Organized action menus |
| **LabeledGroupsDropdown** (read if you plan to implement: registry/default/components/comp-370.tsx) | 66 | Named sections with labels | Categorized settings, complex menus |
| **HelpMenuDropdown** (read if you plan to implement: registry/default/components/comp-378.tsx) | 67 | Link-based navigation | Support menus, documentation access |
| **RichMenuDropdown** (read if you plan to implement: registry/default/components/comp-373.tsx) | 74 | Keyboard shortcuts, submenus | Desktop-like interfaces |
| **AvatarAccountMenu** (read if you plan to implement: registry/default/components/comp-376.tsx) | 83 | Avatar image, detailed info | Rich profile menus |
| **AvatarButtonDropdown** (read if you plan to implement: registry/default/components/comp-377.tsx) | 87 | Avatar component integration | Header navigation bars |
| **BlockEditorMenu** (read if you plan to implement: registry/default/components/comp-379.tsx) | 106 | Rich descriptions, icon boxes | Content creation, block editors |
| **AdvancedRichMenu** (read if you plan to implement: registry/default/components/comp-374.tsx) | **126** | All features combined | Full-featured application menus |

### Specialized Dropdowns

| Component | LoC | Unique Features | Best For |
|-----------|:---:|-----------------|----------|
| **HelpMenuDropdown** (read if you plan to implement: registry/default/components/comp-378.tsx) | 67 | External links, custom focus | Help systems, support |
| **BlockEditorMenu** (read if you plan to implement: registry/default/components/comp-379.tsx) | 106 | Rich descriptions, icon boxes | Content creation, block editors |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicEllipsisDropdown (comp-366)

**Description**: The simplest dropdown with an icon-only trigger button. Perfect for space-constrained interfaces.

**When to Use**:
- Mobile interfaces with limited space
- Table row actions
- Toolbar overflow menus
- Settings or options buttons
- Any place where text labels would be too verbose

**Implementation After Refactoring**:
```tsx
import BasicEllipsisDropdown from '@/components/BasicEllipsisDropdown'

const menuItems = [
  { label: 'Edit', onClick: handleEdit },
  { label: 'Delete', onClick: handleDelete },
  { label: 'Share', onClick: handleShare }
]

<BasicEllipsisDropdown 
  items={menuItems}
  ariaLabel="More options"
  align="end"
/>
```

**Props to Implement**: `items`, `ariaLabel`, `align`, `disabled`, `size`

---

### 🔷 CheckboxDropdown (comp-371)

**Description**: Dropdown with checkbox items for multiple selection. Uses useState for state management and supports disabled items.

**When to Use**:
- Filter selections
- User preferences
- Feature toggles
- Multi-select forms
- Settings where multiple options can be active

**Implementation After Refactoring**:
```tsx
import CheckboxDropdown from '@/components/CheckboxDropdown'
import { useState } from "react"

const [nextjs, setNextjs] = useState<boolean>(false)
const [sveltekit, setSveltekit] = useState<boolean>(true)

const frameworks = [
  { id: 'nextjs', label: 'Next.js', checked: nextjs, onChange: setNextjs },
  { id: 'sveltekit', label: 'SvelteKit', checked: sveltekit, onChange: setSveltekit },
  { id: 'remix', label: 'Remix', checked: false, disabled: true }
]

<CheckboxDropdown 
  items={frameworks}
  triggerLabel="Checkbox items"
/>
```

**Props to Implement**: `items`, `triggerLabel`, `disabled`

---

### 🔷 GroupedDropdown (comp-369)

**Description**: Dropdown menu with visually separated groups of related actions. Supports destructive actions.

**When to Use**:
- Organizing related actions
- Context menus
- File operations
- When actions have clear categories
- Separating dangerous actions

**Implementation After Refactoring**:
```tsx
import GroupedDropdown from '@/components/GroupedDropdown'

const menuGroups = [
  {
    items: [
      { label: 'Edit', icon: Edit, onClick: handleEdit },
      { label: 'Copy', icon: Copy, onClick: handleCopy }
    ]
  },
  {
    items: [
      { label: 'Delete', icon: Trash, onClick: handleDelete, variant: 'destructive' }
    ]
  }
]

<GroupedDropdown 
  groups={menuGroups}
  triggerLabel="Actions"
/>
```

**Props to Implement**: `groups`, `triggerLabel`, `align`, `showIcons`

---

### 🔷 AvatarAccountMenu (comp-376)

**Description**: Rich user account dropdown with avatar image, user details, and icon-enhanced menu items.

**When to Use**:
- Main application user menu
- Profile management
- Account settings access
- When showing user context is important
- Apps with user authentication

**Implementation After Refactoring**:
```tsx
import AvatarAccountMenu from '@/components/AvatarAccountMenu'

const userMenu = {
  user: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: '/avatars/jane.jpg'
  },
  items: [
    { label: 'Profile', icon: User, href: '/profile' },
    { label: 'Settings', icon: Settings, href: '/settings' },
    { label: 'Help', icon: HelpCircle, href: '/help' }
  ],
  onLogout: handleLogout
}

<AvatarAccountMenu {...userMenu} />
```

**Props to Implement**: `user`, `items`, `onLogout`, `showEmail`, `avatarSize`

---

### 🔷 RichMenuDropdown (comp-373)

**Description**: Advanced dropdown with keyboard shortcuts, nested submenus, and portal rendering for proper positioning.

**When to Use**:
- Desktop applications
- Power user interfaces
- Complex navigation hierarchies
- When keyboard shortcuts matter
- Professional tools

**Implementation After Refactoring**:
```tsx
import RichMenuDropdown from '@/components/RichMenuDropdown'

const menuItems = [
  { label: 'Edit', shortcut: '⌘E', onClick: handleEdit },
  { label: 'Duplicate', shortcut: '⌘D', onClick: handleDuplicate },
  { label: 'Archive', shortcut: '⌘A', onClick: handleArchive },
  { 
    label: 'More', 
    submenu: [
      { label: 'Move to project', onClick: handleMoveProject },
      { label: 'Move to folder', onClick: handleMoveFolder },
      { label: 'Advanced options', onClick: handleAdvanced }
    ]
  }
]

<RichMenuDropdown 
  items={menuItems}
  triggerLabel="Rich menu"
/>
```

**Props to Implement**: `items`, `triggerLabel`, `onAction`, `showShortcuts`

---

### 🔷 AdvancedRichMenu (comp-374)

**Description**: The most feature-complete dropdown combining icons, shortcuts, checkboxes, radio buttons, and nested submenus with state management.

**When to Use**:
- Complex application menus
- Professional software interfaces
- When you need all dropdown features
- Desktop-class web applications
- Advanced user workflows

**Implementation After Refactoring**:
```tsx
import AdvancedRichMenu from '@/components/AdvancedRichMenu'
import { useState } from "react"

const [framework, setFramework] = useState("nextjs")
const [emailNotifications, setEmailNotifications] = useState(false)
const [pushNotifications, setPushNotifications] = useState(true)

const menuItems = [
  { type: 'action', label: 'New', icon: PlusIcon, shortcut: '⌘N' },
  { 
    type: 'submenu', 
    label: 'Framework',
    items: [
      { type: 'radio', label: 'Next.js', value: 'nextjs', group: 'framework' },
      { type: 'radio', label: 'SvelteKit', value: 'sveltekit', group: 'framework', disabled: true },
      { type: 'radio', label: 'Remix', value: 'remix', group: 'framework' }
    ]
  },
  {
    type: 'submenu',
    label: 'Notifications',
    items: [
      { type: 'checkbox', label: 'Email', checked: emailNotifications },
      { type: 'checkbox', label: 'Push', checked: pushNotifications }
    ]
  }
]

<AdvancedRichMenu 
  items={menuItems}
  onAction={handleMenuAction}
  triggerLabel="Rich menu with icons"
/>
```

**Props to Implement**: `items`, `onAction`, `triggerLabel`, `state`, `onStateChange`

---

### 🔷 BlockEditorMenu (comp-379)

**Description**: Specialized dropdown for content creation with rich item descriptions and visual icon boxes.

**When to Use**:
- Content management systems
- Block-based editors
- Page builders
- When items need descriptions
- Visual content selection

**Implementation After Refactoring**:
```tsx
import BlockEditorMenu from '@/components/BlockEditorMenu'

const contentBlocks = [
  {
    icon: TypeIcon,
    label: 'Text',
    description: 'Start writing with plain text',
    onClick: () => addBlock('text')
  },
  {
    icon: TextQuoteIcon,
    label: 'Quote',
    description: 'Capture a quote',
    onClick: () => addBlock('quote')
  },
  {
    icon: MinusIcon,
    label: 'Divider',
    description: 'Visually divide blocks',
    onClick: () => addBlock('divider')
  },
  {
    icon: Heading1Icon,
    label: 'Heading 1',
    description: 'Big section heading',
    onClick: () => addBlock('heading1')
  }
]

<BlockEditorMenu 
  blocks={contentBlocks}
  triggerIcon={PlusIcon}
  label="Add block"
/>
```

**Props to Implement**: `blocks`, `triggerIcon`, `label`, `onSelect`

---

## 🎨 SPECIALIZED VARIANTS

### SameWidthDropdown (comp-367)
```tsx
// Menu width matches trigger button width for consistent layouts
<SameWidthDropdown triggerLabel="Options" items={items} />
```

### DropdownWithIcons (comp-368)
```tsx
// Visual menu items with leading icons
<DropdownWithIcons items={iconItems} />
```

### LabeledGroupsDropdown (comp-370)
```tsx
// Organized menu with named sections
<LabeledGroupsDropdown groups={categorizedItems} />
```

### RadioButtonDropdown (comp-372)
```tsx
// Single selection from multiple options
<RadioButtonDropdown options={sortOptions} value={sortBy} onChange={setSortBy} />
```

### UserAccountDropdown (comp-375)
```tsx
// Simple user menu with email display
<UserAccountDropdown user={currentUser} />
```

### AvatarButtonDropdown (comp-377)
```tsx
// Avatar component as dropdown trigger
<AvatarButtonDropdown user={currentUser} />
```

### HelpMenuDropdown (comp-378)
```tsx
// Support and documentation links
<HelpMenuDropdown links={helpResources} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Action Menu
```tsx
// Start here for simple action menus
import BasicEllipsisDropdown from '@/components/BasicEllipsisDropdown'

<BasicEllipsisDropdown 
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete }
  ]}
/>
```

### Multi-Select Filter
```tsx
// For filters and preferences
import CheckboxDropdown from '@/components/CheckboxDropdown'

<CheckboxDropdown 
  items={filterOptions}
  onSelectionChange={applyFilters}
  triggerLabel="Filter"
/>
```

### User Profile Menu
```tsx
// Standard user account dropdown
import AvatarAccountMenu from '@/components/AvatarAccountMenu'

<AvatarAccountMenu 
  user={currentUser}
  onLogout={handleLogout}
/>
```

### Advanced Application Menu
```tsx
// For complex desktop-like interfaces
import AdvancedRichMenu from '@/components/AdvancedRichMenu'

<AdvancedRichMenu 
  menu={applicationMenu}
  onAction={handleMenuAction}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 50 LoC**: Basic dropdowns with simple triggers and items (BasicEllipsisDropdown, SameWidthDropdown)
- **50-70 LoC**: Standard dropdowns with organization or selection (CheckboxDropdown, GroupedDropdown)
- **70-90 LoC**: Feature-rich with visual elements (AvatarAccountMenu, AvatarButtonDropdown)
- **90-130 LoC**: Complex with advanced interactions (BlockEditorMenu, AdvancedRichMenu)

**Why LoC matters**: Smaller dropdowns are easier to customize and maintain. Start with the simplest component that meets your needs and only add complexity when users require it.

### Dropdown Patterns & Best Practices

All dropdown components in this collection follow consistent patterns:

1. **Trigger Types**:
   - Icon-only (space-efficient)
   - Text with chevron (clear affordance)
   - Avatar-based (user context)
   - Custom buttons (flexible)

2. **Menu Organization**:
   - Flat lists for simple menus
   - Groups with separators for related actions
   - Labeled sections for complex categorization
   - Nested submenus for hierarchical navigation

3. **Interaction Patterns**:
   - Click to open (default)
   - Hover for submenus
   - Keyboard navigation (arrow keys)
   - Escape to close
   - Click outside to dismiss

4. **State Management**:
   - Stateless for simple actions
   - Controlled state for selections
   - Local state for UI-only features

### Mobile Considerations

Dropdowns on mobile devices require special attention:
- Ensure touch targets are at least 44x44 pixels
- Consider fullscreen overlays for complex menus
- Use native select elements for simple choices
- Test gesture conflicts with swipe navigation
- Portal rendering prevents viewport issues

### Performance Tips
1. Start with the simplest dropdown that meets your needs
2. Lazy load menu content for large lists
3. Use portal rendering for better positioning performance
4. Memoize menu items if they're expensive to compute
5. Consider virtual scrolling for very long lists

### Accessibility
- All dropdowns include proper ARIA attributes
- Keyboard navigation fully supported (Tab, Arrow keys, Enter, Escape)
- Screen reader announcements for state changes
- Focus management when opening/closing
- High contrast mode supported
- Clear focus indicators

### Migration Path
```
BasicEllipsisDropdown → DropdownWithIcons → GroupedDropdown → AdvancedRichMenu
      (33 LoC)            (51 LoC)           (63 LoC)         (126 LoC)
```

Start simple, upgrade only when users need more features!