# Checkbox Component

Checkboxes let users select one or more options from a list. Use them for multiple selections, yes/no choices, terms acceptance, or toggling features. They work great when users can pick many items, need clear visual feedback, or when you want to show all options upfront.

Radio buttons work better for mutually exclusive choices, but checkboxes handle independent selections. Switches show on/off states, but checkboxes handle selection states. Pick from 20 styles below based on your needs: layout (single/group/tree), visual style (standard/cards/pills), position (left/right), and special features (tasks/expansion/themes).

## Which 'Checkbox' variant do you need?

### Basic forms and simple yes/no choices?

**Standard checkboxes:**
- Simple form field with label? Use `SimpleCheckbox`
- Need to match brand colors? Use `ColoredCheckbox`
- Show it can't be changed? Use `DisabledCheckbox`
- Prefer checkbox after the label? Use `RightAlignedCheckbox`

**Need supporting text:**
- Description below the label? Use `CheckboxWithDescription`
- Description with checkbox on right? Use `RightAlignedWithDescription`

### Special use cases?

**Legal and agreements:**
- Terms with clickable links? Use `TermsCheckbox`

**Complex states:**
- Parent selecting all children? Use `IndeterminateCheckbox`

**Task management:**
- Simple task with strikethrough? Use `TodoItemCheckbox`
- Premium feel with animations? Use `FancyTodoCheckbox`

**UI preferences:**
- Dark/light mode switcher? Use `DarkModeToggle`

### Selecting from multiple options?

**Basic layouts:**
- Options in a row? Use `CheckboxGroup`
- Options in a column? Use `VerticalCheckboxGroup`

**Special formats:**
- Nested categories with sub-items? Use `CheckboxTree`
- Days of week or time slots? Use `PillStyleCheckboxes`

### Need visual cards for selection?

**Feature selection:**
- Simple bordered option? Use `CardStyleCheckbox`
- Tools/features with icons? Use `CardGridWithIcons`

**E-commerce flows:**
- Credit card, PayPal, etc? Use `PaymentMethodCard`
- Logo-based service choice? Use `BrandSelectionCard`

### Building conditional forms?
- Show fields when checked? Use `CheckboxWithExpansion`

## 📊 COMPLETE COMPONENT MATRIX

### Core Checkbox Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SimpleCheckbox** (read if you plan to implement: registry/default/components/comp-132.tsx) | 14 | Basic checkbox + label | Forms, simple selection |
| **ColoredCheckbox** (read if you plan to implement: registry/default/components/comp-134.tsx) | 14 | Custom color variables | Brand-specific styling |
| **DisabledCheckbox** (read if you plan to implement: registry/default/components/comp-135.tsx) | 14 | Disabled state | Read-only forms |
| **RightAlignedCheckbox** (read if you plan to implement: registry/default/components/comp-140.tsx) | 14 | Checkbox on right side | Alternative layouts |
| **TodoItemCheckbox** (read if you plan to implement: registry/default/components/comp-136.tsx) | 16 | Strikethrough on check | Task management |
| **TermsCheckbox** (read if you plan to implement: registry/default/components/comp-138.tsx) | 19 | Link in label text | Legal agreements |
| **IndeterminateCheckbox** (read if you plan to implement: registry/default/components/comp-133.tsx) | 20 | Three-state support | Parent-child relationships |
| **CheckboxGroup** (read if you plan to implement: registry/default/components/comp-139.tsx) | 24 | Multiple inline checkboxes | Category selection |
| **VerticalCheckboxGroup** (read if you plan to implement: registry/default/components/comp-151.tsx) | 24 | Vertical layout group | Form sections |
| **CheckboxWithDescription** (read if you plan to implement: registry/default/components/comp-141.tsx) | 24 | Label + description text | Complex options |

### Enhanced Layout Components

| Component | LoC | Visual Style | Best For |
|-----------|:---:|--------------|----------|
| **FancyTodoCheckbox** (read if you plan to implement: registry/default/components/comp-137.tsx) | 28 | Circular + animated strikethrough | Premium todo apps |
| **RightAlignedWithDescription** (read if you plan to implement: registry/default/components/comp-143.tsx) | 28 | Right checkbox + description | Settings pages |
| **CardStyleCheckbox** (read if you plan to implement: registry/default/components/comp-144.tsx) | 28 | Bordered card container | Feature selection |
| **CardGridWithIcons** (read if you plan to implement: registry/default/components/comp-147.tsx) | 38 | 2x2 grid with Lucide icons | Tool selection |
| **PillStyleCheckboxes** (read if you plan to implement: registry/default/components/comp-149.tsx) | 45 | Circular pill buttons | Day/time selectors |
| **DarkModeToggle** (read if you plan to implement: registry/default/components/comp-150.tsx) | 46 | Theme switcher with icons | UI preferences |
| **PaymentMethodCard** (read if you plan to implement: registry/default/components/comp-145.tsx) | 52 | Card with payment icons | Checkout flows |
| **CheckboxTree** (read if you plan to implement: registry/default/components/comp-148.tsx) | 55 | Hierarchical structure | Category trees |
| **CheckboxWithExpansion** (read if you plan to implement: registry/default/components/comp-142.tsx) | 66 | Reveals input on check | Conditional forms |
| **BrandSelectionCard** (read if you plan to implement: registry/default/components/comp-146.tsx) | **81** | Card with brand logos | Service selection |

### Complexity Categories

| Complexity | LoC Range | Examples | When to Use |
|------------|-----------|----------|-------------|
| **Basic** | 14-20 | SimpleCheckbox, ColoredCheckbox | Simple forms, basic interactions |
| **Standard** | 24-28 | CheckboxGroup, CardStyleCheckbox | Feature selection, settings |
| **Enhanced** | 38-46 | CardGridWithIcons, PillStyleCheckboxes | Rich interactions, specialized UIs |
| **Complex** | 52-81 | CheckboxTree, CheckboxWithExpansion | Advanced forms, data structures |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 SimpleCheckbox (comp-132)

**Description**: The basic checkbox component with label. Your go-to choice for simple binary selections in forms.

**When to Use**:
- Form fields requiring yes/no selection
- Terms and conditions acceptance
- Feature toggles in settings
- Any basic checkbox need
- Starting point for custom checkbox implementations

**Implementation After Refactoring**:
```tsx
import SimpleCheckbox from '@/components/SimpleCheckbox'
import { useState } from 'react'

const [checked, setChecked] = useState(false)

<SimpleCheckbox 
  checked={checked}
  onCheckedChange={setChecked}
  label="Simple checkbox"
  disabled={false}
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `label`, `disabled`, `id`, `required`

---

### 🔷 IndeterminateCheckbox (comp-133)

**Description**: Three-state checkbox supporting checked, unchecked, and indeterminate states. Perfect for parent-child checkbox relationships.

**When to Use**:
- Parent checkbox controlling multiple children
- Bulk selection interfaces
- When some items in a group are selected
- File/folder selection hierarchies
- Complex permission systems

**Implementation After Refactoring**:
```tsx
import IndeterminateCheckbox from '@/components/IndeterminateCheckbox'
import { useState } from 'react'

const [checked, setChecked] = useState<boolean | "indeterminate">("indeterminate")

<IndeterminateCheckbox 
  checked={checked}
  onCheckedChange={setChecked}
  label="Select all items"
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `label`, `children`, `onChildChange`

---

### 🔷 CheckboxWithExpansion (comp-142)

**Description**: Advanced checkbox that reveals additional content when checked. Includes smooth animations and focus management.

**When to Use**:
- Conditional form fields
- Progressive disclosure
- Detailed configuration options
- Settings with sub-options
- Complex forms with dependent fields

**Implementation After Refactoring**:
```tsx
import CheckboxWithExpansion from '@/components/CheckboxWithExpansion'
import { useState } from 'react'

const [checked, setChecked] = useState(false)
const [inputValue, setInputValue] = useState("")

<CheckboxWithExpansion 
  checked={checked}
  onCheckedChange={setChecked}
  label="Enable custom settings"
  description="Configure advanced options"
  expandedContent={
    <Input 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter details"
    />
  }
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `label`, `description`, `expandedContent`, `autoFocus`

---

### 🔷 CheckboxTree (comp-148)

**Description**: Hierarchical checkbox structure with automatic parent-child state management. Handles complex nested selections.

**When to Use**:
- Category/subcategory selection
- Permission trees
- File system interfaces
- Organizational hierarchies
- Multi-level filtering

**Implementation After Refactoring**:
```tsx
import CheckboxTree from '@/components/CheckboxTree'

const treeData = {
  id: "1",
  label: "All Categories",
  children: [
    { id: "2", label: "Electronics" },
    { 
      id: "3", 
      label: "Clothing",
      children: [
        { id: "4", label: "Men's Clothing" },
        { id: "5", label: "Women's Clothing" }
      ]
    }
  ]
}

<CheckboxTree 
  tree={treeData}
  onSelectionChange={handleSelectionChange}
  defaultExpanded={true}
/>
```

**Props to Implement**: `tree`, `onSelectionChange`, `defaultExpanded`, `renderNode`, `showPartialStates`

---

### 🔷 CardGridWithIcons (comp-147)

**Description**: Grid layout of card-style checkboxes with icons. Perfect for visual feature or tool selection.

**When to Use**:
- Feature selection interfaces
- Tool palette selection
- Visual preference settings
- Icon-based categories
- Dashboard customization

**Implementation After Refactoring**:
```tsx
import CardGridWithIcons from '@/components/CardGridWithIcons'
import { Brush, Eraser, Scissors } from 'lucide-react'

const items = [
  { id: "1", label: "Brush", icon: Brush, defaultChecked: true },
  { id: "2", label: "Eraser", icon: Eraser },
  { id: "3", label: "Scissors", icon: Scissors }
]

<CardGridWithIcons 
  items={items}
  onSelectionChange={handleSelection}
  columns={2}
  multiple={true}
/>
```

**Props to Implement**: `items`, `onSelectionChange`, `columns`, `multiple`, `disabled`

---

### 🔷 PillStyleCheckboxes (comp-149)

**Description**: Circular pill-style checkboxes perfect for day selection, tags, or compact multiple choice.

**When to Use**:
- Day of week selection
- Tag/category selection
- Compact multiple choice
- Time slot selection
- Badge-style selection

**Implementation After Refactoring**:
```tsx
import PillStyleCheckboxes from '@/components/PillStyleCheckboxes'

const days = [
  { value: "1", label: "Monday", short: "M" },
  { value: "2", label: "Tuesday", short: "T" },
  { value: "3", label: "Wednesday", short: "W" }
]

<PillStyleCheckboxes 
  items={days}
  onSelectionChange={handleDaySelection}
  legend="Select days"
  showFullLabels={false}
/>
```

**Props to Implement**: `items`, `onSelectionChange`, `legend`, `showFullLabels`, `disabled`

---

### 🔷 PaymentMethodCard (comp-145)

**Description**: Card-style checkbox for payment method selection with branded icons and clear visual hierarchy.

**When to Use**:
- Checkout payment selection
- Subscription method choice
- Payment preference settings
- Billing configuration
- Financial service selection

**Implementation After Refactoring**:
```tsx
import PaymentMethodCard from '@/components/PaymentMethodCard'

const paymentMethods = [
  { 
    id: "card", 
    label: "Credit Card", 
    sublabel: "Visa, Mastercard", 
    icon: <CreditCardIcon />,
    defaultChecked: true 
  },
  { 
    id: "paypal", 
    label: "PayPal", 
    sublabel: "Pay with PayPal", 
    icon: <PayPalIcon /> 
  }
]

<PaymentMethodCard 
  methods={paymentMethods}
  onSelectionChange={handlePaymentMethod}
  allowMultiple={false}
/>
```

**Props to Implement**: `methods`, `onSelectionChange`, `allowMultiple`, `required`, `disabled`

---

### 🔷 DarkModeToggle (comp-150)

**Description**: Specialized toggle for theme switching using native HTML input with animated icon transitions and accessibility features.

**When to Use**:
- Theme preference settings
- Dark/light mode toggles
- UI appearance controls
- Accessibility options
- Visual preference toggles

**Implementation After Refactoring**:
```tsx
import DarkModeToggle from '@/components/DarkModeToggle'
import { useState } from 'react'

const [theme, setTheme] = useState("light")

<DarkModeToggle 
  checked={theme === "dark"}
  onChange={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
  lightIcon={<SunIcon />}
  darkIcon={<MoonIcon />}
  label="Dark mode toggle"
/>
```

**Props to Implement**: `checked`, `onChange`, `lightIcon`, `darkIcon`, `label`, `ariaLabel`

---

## 🎨 SPECIALIZED VARIANTS

### ColoredCheckbox (comp-134)
```tsx
// Custom brand colors with CSS variables
<ColoredCheckbox 
  color="indigo"
  label="Branded checkbox"
/>
```

### TodoItemCheckbox (comp-136)
```tsx
// Simple strikethrough for task management
<TodoItemCheckbox 
  label="Complete this task"
  onToggle={handleTaskToggle}
/>
```

### TermsCheckbox (comp-138)
```tsx
// Legal agreement with linked terms
<TermsCheckbox 
  label="I agree to the"
  linkText="terms of service"
  linkHref="/terms"
/>
```

### CardStyleCheckbox (comp-144)
```tsx
// Bordered card for feature selection
<CardStyleCheckbox 
  label="Premium Features"
  description="Unlock advanced capabilities"
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form Checkbox
```tsx
// Start here for simple forms
import SimpleCheckbox from '@/components/SimpleCheckbox'

<SimpleCheckbox 
  label="Newsletter subscription"
  onCheckedChange={handleSubscription}
/>
```

### Todo Application
```tsx
// For task management apps
import TodoItemCheckbox from '@/components/TodoItemCheckbox'

<TodoItemCheckbox 
  label="Buy groceries"
  completed={false}
  onToggle={handleTaskToggle}
/>
```

### Feature Selection Interface
```tsx
// For product configuration
import CardGridWithIcons from '@/components/CardGridWithIcons'

<CardGridWithIcons 
  items={features}
  onSelectionChange={updateConfiguration}
/>
```

### Settings Page
```tsx
// For application settings
import CheckboxWithExpansion from '@/components/CheckboxWithExpansion'

<CheckboxWithExpansion 
  label="Advanced notifications"
  description="Configure detailed notification preferences"
  expandedContent={<NotificationSettings />}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 20 LoC**: Basic checkboxes for simple selection (SimpleCheckbox, ColoredCheckbox)
- **20-30 LoC**: Standard checkboxes with descriptions or groups (CheckboxGroup, CheckboxWithDescription)
- **30-50 LoC**: Enhanced layouts with animations or icons (CardGridWithIcons, PillStyleCheckboxes)
- **50+ LoC**: Complex interactions with trees, expansion, or specialized UIs (CheckboxTree, CheckboxWithExpansion)

**Why LoC matters**: Checkbox complexity directly affects maintenance, customization difficulty, and potential for bugs. Start simple and upgrade only when advanced features are truly needed.

### Accessibility & Interaction Patterns
All OriginUI checkbox components follow WCAG 2.1 accessibility guidelines:

**Keyboard Navigation**:
- `Space` toggles checkbox state
- `Tab` moves between checkboxes
- `Enter` activates associated actions

**Screen Reader Support**:
- Proper ARIA labels and descriptions
- State announcements (checked/unchecked/indeterminate)
- Group relationships for checkbox trees

**Visual Indicators**:
- High contrast borders and backgrounds
- Focus rings for keyboard navigation
- Clear visual state changes

### State Management Patterns
Choose the right state pattern for your checkbox needs:

**Single Checkbox**: `useState<boolean>`
```tsx
const [checked, setChecked] = useState(false)
```

**Indeterminate Checkbox**: `useState<boolean | "indeterminate">`
```tsx
const [checked, setChecked] = useState<boolean | "indeterminate">("indeterminate")
```

**Checkbox Group**: `useState<string[]>`
```tsx
const [selected, setSelected] = useState<string[]>([])
```

**Checkbox Tree**: Custom state with parent-child relationships
```tsx
const [treeState, setTreeState] = useState<TreeState>(initialTree)
```

### Performance Tips
1. Use `useCallback` for checkbox change handlers in lists
2. Implement virtual scrolling for large checkbox trees (>100 items)
3. Debounce rapid state changes for complex tree structures
4. Lazy load icons and heavy visual content in card-style checkboxes

### Accessibility
- All checkboxes include proper ARIA labels and descriptions
- Keyboard navigation fully supported across all components
- Screen reader optimized with state announcements
- Focus management handled for expansion and tree components
- High contrast mode supported with proper color variables

### Common Patterns
```
User Intent → Visual Feedback → State Update → Side Effects
     ↓             ↓              ↓            ↓
   Click       Check/Uncheck   setState    API calls
```

### Migration Path
```
SimpleCheckbox → CheckboxGroup → CheckboxWithDescription → CheckboxTree
   (14 LoC)        (24 LoC)           (24 LoC)            (55 LoC)
```

Start with the simplest checkbox, upgrade to groups when you need multiple selections, add descriptions for complex options, and use trees only for hierarchical data!