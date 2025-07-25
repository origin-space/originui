# Badge Component

Badges highlight important info with small colored labels. Use them for status indicators, counts, categories, or labels that need to stand out. They work great for notification counts (3 new messages), user states (online/offline), tags (React, TypeScript), or any small piece of metadata.

Pills show similar info but with more padding and prominence. Tags are larger and often removable. Pick from 13 badge styles below based on your needs: display-only or interactive, with or without icons, status indicators with colored dots, removable tags, or selectable filters.

## Which 'Badge' variant do you need?

### Just need a simple label or status?

**Basic display badges:**
- Default square corners (New, Beta, v2.0)? Use `BasicBadge`
- Softer pill-shaped style (Premium, Pro)? Use `RoundedBadge`

### Showing numbers or counts?
- Pure number display (99+, 3, 42)? Use `NumericBadge`
- Label with a count (Issues: 73, Comments: 12)? Use `BadgeWithCounter`

### Want to make it more visual or interactive?
- Add an icon for quick recognition (⚡ Premium, 🔒 Private)? Use `IconBadge`
- Make it clickable for navigation (category links, filters)? Use `LinkBadge`

### Indicating live system or user status?

**Minimal dot indicators (subtle, space-saving):**
- Green dot for online/active/healthy? Use `StatusBadgeGreen`
- Amber dot for pending/warning/busy? Use `StatusBadgeAmber`
- Red dot for offline/error/critical? Use `StatusBadgeRed`

**Explicit icon indicator (clearer meaning):**
- Checkmark for verified/complete/approved? Use `StatusBadgeWithIcon`

### Need users to interact with the badge?

**For multi-select interfaces:**
- Checkbox behavior with selected state? Use `SelectableBadge`

**For removable items:**
- Compact X button (applied filters, selected items)? Use `RemovableBadge`
- Larger tag-style (blog tags, categories, keywords)? Use `TagBadge`

## 📊 COMPLETE COMPONENT MATRIX

### Core Display Badges

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicBadge** (read if you plan to implement: registry/default/components/comp-413.tsx) | 5 | Simplest possible badge | Default choice, minimal labeling |
| **RoundedBadge** (read if you plan to implement: registry/default/components/comp-414.tsx) | 6 | Rounded corners styling | Modern UI, softer appearance |
| **NumericBadge** (read if you plan to implement: registry/default/components/comp-416.tsx) | 6 | Optimized for numbers | Notification counts, quantities |
| **LinkBadge** (read if you plan to implement: registry/default/components/comp-417.tsx) | 10 | Clickable badge as link | Navigation, category links |
| **IconBadge** (read if you plan to implement: registry/default/components/comp-415.tsx) | 13 | Badge with icon | Visual enhancement, branding |
| **BadgeWithCounter** (read if you plan to implement: registry/default/components/comp-418.tsx) | 13 | Badge with secondary count | Metrics, statistics display |

### Status & Interactive Badges

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **StatusBadgeWithIcon** (read if you plan to implement: registry/default/components/comp-419.tsx) | 13 | Check icon for success | Completion states, verification |
| **StatusBadgeGreen** (read if you plan to implement: registry/default/components/comp-420.tsx) | 14 | Green status dot | Online, active, success states |
| **StatusBadgeAmber** (read if you plan to implement: registry/default/components/comp-421.tsx) | 14 | Amber warning dot | Pending, warning states |
| **StatusBadgeRed** (read if you plan to implement: registry/default/components/comp-422.tsx) | 14 | Red error dot | Offline, error, critical states |
| **RemovableBadge** (read if you plan to implement: registry/default/components/comp-424.tsx) | 25 | X button for removal | Filters, selected items |
| **TagBadge** (read if you plan to implement: registry/default/components/comp-425.tsx) | 26 | Tag-style removable | Categories, tags, labels |
| **SelectableBadge** (read if you plan to implement: registry/default/components/comp-423.tsx) | **30** | Checkbox-style selection | Multi-select, toggleable options |

### Badge Variants by Purpose

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Display Only** | BasicBadge, RoundedBadge, NumericBadge | Static labels, status display |
| **Enhanced Display** | IconBadge, LinkBadge, BadgeWithCounter | Interactive elements, rich content |
| **Status Indicators** | StatusBadgeGreen/Amber/Red, StatusBadgeWithIcon | System states, live status |
| **Interactive** | SelectableBadge, RemovableBadge, TagBadge | User manipulation, filtering |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicBadge (comp-413)

**Description**: The simplest possible badge component. Pure display with default styling.

**When to Use**:
- Default choice for basic labeling
- Status indicators without interaction
- Category tags
- Simple text displays
- When you need minimal complexity

**Implementation After Refactoring**:
```tsx
import BasicBadge from '@/components/BasicBadge'

const [status, setStatus] = useState('Active')

<BasicBadge 
  text={status}
  variant="default"
  className="custom-class"
/>
```

**Props to Implement**: `text`, `variant`, `className`, `size`

---

### 🔷 SelectableBadge (comp-423)

**Description**: Interactive badge with checkbox functionality. Shows check icon when selected and supports keyboard navigation.

**When to Use**:
- Filter interfaces with multiple selections
- Tag selection in forms
- Option toggles in settings
- Multi-select scenarios
- When users need to toggle badge states

**Implementation After Refactoring**:
```tsx
import SelectableBadge from '@/components/SelectableBadge'

const [selectedTags, setSelectedTags] = useState<string[]>([])

const handleToggle = (tag: string, checked: boolean) => {
  if (checked) {
    setSelectedTags([...selectedTags, tag])
  } else {
    setSelectedTags(selectedTags.filter(t => t !== tag))
  }
}

<SelectableBadge 
  text="Technology"
  checked={selectedTags.includes('Technology')}
  onToggle={(checked) => handleToggle('Technology', checked)}
  id="tech-tag"
/>
```

**Props to Implement**: `text`, `checked`, `onToggle`, `id`, `disabled`

---

### 🔷 RemovableBadge (comp-424)

**Description**: Badge with an X button for removal. Includes proper focus management and accessibility.

**When to Use**:
- Applied filters in search interfaces
- Selected items that can be removed
- Active tags in content management
- Temporary selections
- Dynamic lists where items can be deleted

**Implementation After Refactoring**:
```tsx
import RemovableBadge from '@/components/RemovableBadge'

const [filters, setFilters] = useState(['React', 'TypeScript', 'CSS'])

const removeFilter = (filter: string) => {
  setFilters(filters.filter(f => f !== filter))
}

{filters.map(filter => (
  <RemovableBadge 
    key={filter}
    text={filter}
    onRemove={() => removeFilter(filter)}
    aria-label={`Remove ${filter} filter`}
  />
))}
```

**Props to Implement**: `text`, `onRemove`, `aria-label`, `variant`

---

### 🔷 StatusBadgeGreen (comp-420)

**Description**: Badge with a green status dot indicating positive states like online, active, or success.

**When to Use**:
- User online status
- Service health indicators
- Success states
- Active connections
- Positive system states

**Implementation After Refactoring**:
```tsx
import StatusBadge from '@/components/StatusBadge'

const [userStatus, setUserStatus] = useState<'online' | 'away' | 'offline'>('online')

<StatusBadge 
  text="Online"
  status="success"
  color="green"
  variant="outline"
/>
```

**Props to Implement**: `text`, `status`, `color`, `variant`, `size`

---

### 🔷 NumericBadge (comp-416)

**Description**: Optimized badge for displaying numbers and counts with appropriate sizing and padding.

**When to Use**:
- Notification counts
- Unread message indicators
- Quantity displays
- Counter badges
- Numeric status indicators

**Implementation After Refactoring**:
```tsx
import NumericBadge from '@/components/NumericBadge'

const [unreadCount, setUnreadCount] = useState(6)

<NumericBadge 
  count={unreadCount}
  max={99}
  showZero={false}
  className="ml-2"
/>
```

**Props to Implement**: `count`, `max`, `showZero`, `className`

---

### 🔷 TagBadge (comp-425)

**Description**: Tag-style removable badge with larger padding and distinctive styling for content categorization.

**When to Use**:
- Content tagging systems
- Blog post categories
- Product labels
- User-generated tags
- Removable classifications

**Implementation After Refactoring**:
```tsx
import TagBadge from '@/components/TagBadge'

const [postTags, setPostTags] = useState(['React', 'Tutorial', 'Beginner'])

const removeTag = (tagToRemove: string) => {
  setPostTags(postTags.filter(tag => tag !== tagToRemove))
}

{postTags.map(tag => (
  <TagBadge 
    key={tag}
    text={tag}
    onRemove={() => removeTag(tag)}
    variant="outline"
    removable={true}
  />
))}
```

**Props to Implement**: `text`, `onRemove`, `variant`, `removable`, `size`

---

### 🔷 IconBadge (comp-415)

**Description**: Badge enhanced with an icon for visual context and improved recognition.

**When to Use**:
- Feature highlights
- Premium indicators
- Status with visual context
- Branded elements
- Enhanced visual communication

**Implementation After Refactoring**:
```tsx
import IconBadge from '@/components/IconBadge'
import { ZapIcon, StarIcon, CheckIcon } from 'lucide-react'

<IconBadge 
  text="Premium"
  icon={ZapIcon}
  iconPosition="left"
  iconSize={12}
  variant="default"
/>
```

**Props to Implement**: `text`, `icon`, `iconPosition`, `iconSize`, `variant`

---

## 🎨 SPECIALIZED VARIANTS & LAYOUTS

### LinkBadge (comp-417)
```tsx
// Badge that functions as a clickable link
<LinkBadge href="/category/react" text="React" />
```

### BadgeWithCounter (comp-418)
```tsx
// Badge with secondary counter text
<BadgeWithCounter text="Issues" count={73} />
```

### StatusBadgeWithIcon (comp-419)
```tsx
// Success badge with check icon
<StatusBadgeWithIcon text="Verified" status="success" />
```

### StatusBadgeAmber (comp-421)
```tsx
// Warning state with amber dot
<StatusBadge text="Pending" color="amber" />
```

### StatusBadgeRed (comp-422)
```tsx
// Error state with red dot
<StatusBadge text="Offline" color="red" />
```

### RoundedBadge (comp-414)
```tsx
// Badge with rounded corners for softer appearance
<RoundedBadge text="Category" rounded={true} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Display Badge
```tsx
// Start here for simple labeling needs
import BasicBadge from '@/components/BasicBadge'

<BasicBadge text="New" />
```

### Interactive Tag System
```tsx
// For selectable and removable tags
import { useState } from 'react'
import TagBadge from '@/components/TagBadge'

const [tags, setTags] = useState(['React', 'TypeScript'])

{tags.map(tag => (
  <TagBadge 
    key={tag}
    text={tag}
    onRemove={() => removeTag(tag)}
  />
))}
```

### Status Indicator System
```tsx
// For real-time status display
import StatusBadge from '@/components/StatusBadge'

<StatusBadge 
  text={user.status} 
  color={getStatusColor(user.status)}
/>
```

### Notification Counter
```tsx
// For counts and notifications
import NumericBadge from '@/components/NumericBadge'

<NumericBadge count={unreadMessages} max={99} />
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 10 LoC**: Basic display badges (BasicBadge, RoundedBadge, NumericBadge)
- **10-15 LoC**: Enhanced badges with features (IconBadge, LinkBadge, StatusBadges)
- **15-25 LoC**: Interactive badges with state (BadgeWithCounter)
- **25-30 LoC**: Complex interactive badges (RemovableBadge, TagBadge, SelectableBadge)

**Why LoC matters**: Badge complexity directly correlates to:
- User interaction capabilities
- State management requirements
- Accessibility implementation depth
- Testing complexity

### Badge Composition Patterns
Badges build upon a foundation of shared design tokens:
- **Variants**: `default`, `secondary`, `destructive`, `outline`
- **Sizes**: `sm`, `default`, `lg` (though most badges use default)
- **Colors**: Built-in semantic colors for status (green, amber, red)
- **Icons**: Lucide React icons with consistent sizing (12px-16px)

**Pro tip**: Combine basic badges with wrapper components for complex behaviors rather than creating monolithic badge components.

### Accessibility Best Practices
All badges follow consistent accessibility patterns:
1. **Semantic markup** - Use appropriate ARIA labels and roles
2. **Keyboard navigation** - All interactive badges support tab navigation
3. **Screen readers** - Status changes are announced appropriately
4. **Focus management** - Clear focus indicators for interactive elements
5. **Color independence** - Status is conveyed through icons and text, not just color

### Performance Tips
1. Start with the simplest badge that meets your needs
2. Use static badges (BasicBadge, NumericBadge) for display-only scenarios
3. Implement badge removal/selection with proper React keys for list performance
4. Consider virtualizing large lists of interactive badges

### Common Badge Patterns
```
Label → Interactive → Status → Removable
  ↓          ↓          ↓          ↓
Display   Selection   Monitor    Filter
```

### Migration Path
```
BasicBadge → IconBadge → StatusBadgeGreen → RemovableBadge → SelectableBadge
  (5 LoC)     (13 LoC)      (14 LoC)          (25 LoC)        (30 LoC)
```

Start simple, upgrade only when users need more interaction capabilities!