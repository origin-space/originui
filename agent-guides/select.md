# Select Component

Selects let users pick one or more options from a dropdown list. Use them for predefined choices like countries, dates, or status options. They save space compared to radio buttons and handle long lists better than toggles. Native selects work everywhere but look different per browser, while custom selects offer consistent styling and advanced features like search or avatars.

Comboboxes add search to selects for large lists. Multi-selects show chosen items as removable tags. Avoid selects for yes/no choices (use toggles) or 2-3 options (use radio buttons). Choose from 51 variants below based on your tech stack (native/custom), features (search/multi), and content type (text/avatars/data).

## Which 'Select' variant do you need?

### Want to use native HTML selects?

**Just the basics:**
- Simplest dropdown? Use `BasicSelect`
- Need placeholder text? Use `SelectWithPlaceholder`
- Want colored border? Use `SelectWithColoredBorder`
- Prefer gray background? Use `SelectWithGrayBackground`
- Need to disable it? Use `DisabledSelect`
- Making it required? Use `RequiredSelect`
- Auto-adjust width to content? Use `AutoWidthSelect`

**With extra features:**
- Want an icon? Use `SelectWithIcon`
- Need grouped options? Use `SelectWithGroups`
- Want helper text below? Use `SelectWithHelperText`
- Need error messages? Use `SelectWithError`

**With fancy labels:**
- Floating label over border? Use `SelectWithOverlapLabel`
- Label inside the border? Use `SelectWithInsetLabel`

**Specific use case:**
- Picking timezones? Use `NativeTimezoneSelect`
- Multiple selection? Use `NativeMultiSelect`

### Want modern custom selects?

**Just the basics:**
- Clean modern style? Use `CustomSelect`
- Need placeholder? Use `CustomSelectWithPlaceholder`
- Want colored border? Use `CustomSelectColoredBorder`
- Prefer gray background? Use `CustomSelectGrayBg`
- Need to disable it? Use `DisabledCustomSelect`
- Making it required? Use `RequiredCustomSelect`
- Auto-adjust width? Use `CustomAutoWidthSelect`

**With positioning variants:**
- Arrow on the right edge? Use `SelectWithRightIndicator`
- Need prefix text? Use `SelectWithLeftPrefix`

**With extra features:**
- Want an icon? Use `CustomSelectWithIcon`
- Some options disabled? Use `SelectWithDisabledOptions`
- Want helper text? Use `CustomSelectWithHelper`
- Need error states? Use `CustomSelectWithError`

**With fancy labels:**
- Floating label? Use `CustomOverlapLabel`
- Inset label? Use `CustomInsetLabel`

**With grouped options:**
- Basic groups? Use `CustomSelectWithGroups`
- Visual separators? Use `SelectWithSeparator`

**Rich content in options:**
- Icons in each option? Use `SelectWithIcons`
- Icons with checkmarks? Use `SelectWithIndicators`
- Need descriptions? Use `SelectWithDescriptions`

**Specific use cases:**
- Timezone picker? Use `CustomTimezoneSelect`
- Status with colored dots? Use `StatusSelect`
- Country with flags? Use `CountryFlagSelect`

**User selection dropdowns:**
- Basic avatar and name? Use `UserAvatarSelect`
- Avatars with fallbacks? Use `AvatarPlaceholderSelect`
- Rich user profiles? Use `UserPortraitSelect`

### Need search functionality?

**Basic search:**
- Large list to filter? Use `SearchableSelect`
- Want to create new options? Use `SearchableWithAction`

**Specialized searches:**
- Country picker? Use `CountrySearchSelect`
- Timezone selection? Use `TimeZoneSearchSelect`

**Multi-select with search:**
- Basic multi-select? Use `MultiSelect`
- Need clear all button? Use `MultiSelectWithClear`

**Data-rich selection:**
- Metrics and badges? Use `SelectWithMetrics`

### Building accessible custom UI?
- Single selection listbox? Use `AriaListBox`
- Multiple selection? Use `AriaMultiListBox`
- Need grouped items? Use `AriaGroupedListBox`

## 📊 COMPLETE COMPONENT MATRIX

### Native HTML Selects

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicSelect** (read if you plan to implement: registry/default/components/comp-189.tsx) | 19 | Simplest native select | Quick forms, progressive enhancement |
| **SelectWithPlaceholder** (read if you plan to implement: registry/default/components/comp-190.tsx) | 21 | Native with placeholder option | Forms needing prompt text |
| **SelectWithColoredBorder** (read if you plan to implement: registry/default/components/comp-193.tsx) | 19 | Native with accent color | Branded forms |
| **SelectWithGrayBackground** (read if you plan to implement: registry/default/components/comp-195.tsx) | 19 | Native with gray bg | Alternative styling |
| **DisabledSelect** (read if you plan to implement: registry/default/components/comp-196.tsx) | 19 | Native disabled state | Read-only forms |
| **RequiredSelect** (read if you plan to implement: registry/default/components/comp-197.tsx) | 21 | Native with required attribute | Mandatory fields |
| **AutoWidthSelect** (read if you plan to implement: registry/default/components/comp-198.tsx) | 21 | Width adjusts to content | Space-conscious layouts |
| **SelectWithIcon** (read if you plan to implement: registry/default/components/comp-191.tsx) | 25 | Native with leading icon | Visual enhancement |
| **SelectWithGroups** (read if you plan to implement: registry/default/components/comp-199.tsx) | 25 | Native with optgroups | Categorized options |
| **SelectWithHelperText** (read if you plan to implement: registry/default/components/comp-192.tsx) | 26 | Native with description | User guidance |
| **SelectWithError** (read if you plan to implement: registry/default/components/comp-194.tsx) | 26 | Native with error state | Form validation |
| **SelectWithOverlapLabel** (read if you plan to implement: registry/default/components/comp-201.tsx) | 26 | Floating label design | Modern forms |
| **SelectWithInsetLabel** (read if you plan to implement: registry/default/components/comp-202.tsx) | 30 | Label inside border | Compact design |
| **NativeTimezoneSelect** (read if you plan to implement: registry/default/components/comp-200.tsx) | 46 | Native timezone picker | Simple timezone selection |

### Custom Radix UI Selects

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **CustomSelect** (read if you plan to implement: registry/default/components/comp-203.tsx) | 30 | Basic Radix UI select | Modern dropdown replacement |
| **CustomSelectWithPlaceholder** (read if you plan to implement: registry/default/components/comp-204.tsx) | 30 | Custom with placeholder | User-friendly prompts |
| **CustomSelectColoredBorder** (read if you plan to implement: registry/default/components/comp-207.tsx) | 30 | Custom with accent | Themed applications |
| **DisabledCustomSelect** (read if you plan to implement: registry/default/components/comp-210.tsx) | 30 | Custom disabled state | Conditional interactions |
| **SelectWithRightIndicator** (read if you plan to implement: registry/default/components/comp-219.tsx) | 30 | Right-aligned arrow | Alternative layouts |
| **SelectWithLeftPrefix** (read if you plan to implement: registry/default/components/comp-221.tsx) | 30 | Inline prefix text | Contextual labels |
| **CustomAutoWidthSelect** (read if you plan to implement: registry/default/components/comp-212.tsx) | 31 | Dynamic width custom | Flexible layouts |
| **RequiredCustomSelect** (read if you plan to implement: registry/default/components/comp-211.tsx) | 32 | Custom required field | Form validation |
| **CustomSelectGrayBg** (read if you plan to implement: registry/default/components/comp-209.tsx) | 33 | Custom gray background | Alternative styling |
| **CustomSelectWithIcon** (read if you plan to implement: registry/default/components/comp-205.tsx) | 34 | Custom with icon | Enhanced visuals |
| **SelectWithDisabledOptions** (read if you plan to implement: registry/default/components/comp-215.tsx) | 34 | Some options disabled | Conditional availability |
| **CustomOverlapLabel** (read if you plan to implement: registry/default/components/comp-216.tsx) | 34 | Custom floating label | Modern UI patterns |
| **CustomSelectWithHelper** (read if you plan to implement: registry/default/components/comp-206.tsx) | 37 | Custom with help text | Better UX |
| **CustomSelectWithError** (read if you plan to implement: registry/default/components/comp-208.tsx) | 37 | Custom error state | Rich validation |
| **CustomInsetLabel** (read if you plan to implement: registry/default/components/comp-217.tsx) | 37 | Custom inset label | Contained design |
| **CustomSelectWithGroups** (read if you plan to implement: registry/default/components/comp-213.tsx) | 40 | Custom option groups | Organized choices |
| **SelectWithSeparator** (read if you plan to implement: registry/default/components/comp-214.tsx) | 42 | Visual group separation | Clear categorization |
| **SelectWithIcons** (read if you plan to implement: registry/default/components/comp-222.tsx) | 42 | Icons in options | Framework/tool selection |
| **SelectWithIndicators** (read if you plan to implement: registry/default/components/comp-223.tsx) | 42 | Icons with checkmarks | Visual confirmation |
| **SelectWithDescriptions** (read if you plan to implement: registry/default/components/comp-224.tsx) | 53 | Detailed option info | Complex choices |
| **CustomTimezoneSelect** (read if you plan to implement: registry/default/components/comp-218.tsx) | 57 | Custom timezone UI | Enhanced timezone picker |
| **UserAvatarSelect** (read if you plan to implement: registry/default/components/comp-226.tsx) | 64 | User selection with avatars | Team member picker |
| **AvatarPlaceholderSelect** (read if you plan to implement: registry/default/components/comp-227.tsx) | 66 | Avatars with fallbacks | User selection with defaults |
| **StatusSelect** (read if you plan to implement: registry/default/components/comp-220.tsx) | 75 | Colored status dots | Status/priority selection |
| **UserPortraitSelect** (read if you plan to implement: registry/default/components/comp-228.tsx) | 80 | Rich user profiles | Detailed user selection |
| **CountryFlagSelect** (read if you plan to implement: registry/default/components/comp-225.tsx) | 84 | Countries with flags | International selection |

### Searchable Selects (Command/Combobox)

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **MultiSelectWithClear** (read if you plan to implement: registry/default/components/comp-235.tsx) | 100 | Multi-select with clear all | Bulk selection management |
| **MultiSelect** (read if you plan to implement: registry/default/components/comp-234.tsx) | 108 | Tag-based multi-select | Multiple choice interfaces |
| **SearchableWithAction** (read if you plan to implement: registry/default/components/comp-230.tsx) | 111 | Search with create option | Dynamic option lists |
| **TimeZoneSearchSelect** (read if you plan to implement: registry/default/components/comp-231.tsx) | 116 | Searchable timezone picker | Large timezone lists |
| **CountrySearchSelect** (read if you plan to implement: registry/default/components/comp-232.tsx) | 142 | Searchable country list | International forms |
| **SearchableSelect** (read if you plan to implement: registry/default/components/comp-229.tsx) | 151 | Basic searchable dropdown | Large option lists |
| **SelectWithMetrics** (read if you plan to implement: registry/default/components/comp-233.tsx) | **177** | Icons, badges, and metrics | Data-rich selections |

### Accessible ListBox Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **NativeMultiSelect** (read if you plan to implement: registry/default/components/comp-236.tsx) | 23 | Native multiple select | Simple multi-selection |
| **AriaMultiListBox** (read if you plan to implement: registry/default/components/comp-238.tsx) | 61 | Accessible multi-select | Custom multi-select UI |
| **AriaListBox** (read if you plan to implement: registry/default/components/comp-237.tsx) | 62 | Accessible single select | Custom accessible dropdowns |
| **AriaGroupedListBox** (read if you plan to implement: registry/default/components/comp-239.tsx) | **114** | Grouped accessible list | Complex accessible lists |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicSelect (comp-189)

**Description**: The simplest native HTML select element with minimal styling. Your starting point for any select needs.

**When to Use**:
- Quick prototypes and MVPs
- Forms where native behavior is preferred
- Progressive enhancement scenarios
- When JavaScript might be disabled
- Maximum browser compatibility needed

**Implementation After Refactoring**:
```tsx
import BasicSelect from '@/components/BasicSelect'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'banana', label: 'Banana' }
]

<BasicSelect 
  options={options}
  value={selectedValue}
  onChange={(e) => setSelectedValue(e.target.value)}
  label="Choose a fruit"
/>
```

**Props to Implement**: `options`, `value`, `onChange`, `label`, `name`, `id`

---

### 🔷 CustomSelect (comp-203)

**Description**: Modern custom select built with Radix UI, providing consistent styling and enhanced UX across all browsers.

**When to Use**:
- Modern web applications
- When consistent cross-browser styling is crucial
- Need for custom styling beyond native capabilities
- Better accessibility than native selects
- Default choice for most projects

**Implementation After Refactoring**:
```tsx
import CustomSelect from '@/components/CustomSelect'

const options = [
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' }
]

<CustomSelect 
  options={options}
  value={size}
  onValueChange={setSize}
  placeholder="Select size"
/>
```

**Props to Implement**: `options`, `value`, `onValueChange`, `placeholder`, `disabled`

---

### 🔷 SearchableSelect (comp-229)

**Description**: Combines dropdown and search functionality for large datasets. Users can filter options by typing.

**When to Use**:
- Large option lists (50+ items)
- User-generated content selection
- Product or category selection
- Any scenario where finding options quickly matters
- When scrolling through options is inefficient

**Implementation After Refactoring**:
```tsx
import SearchableSelect from '@/components/SearchableSelect'

const [open, setOpen] = useState(false)
const [value, setValue] = useState("")

const products = [
  { value: 'laptop-1', label: 'MacBook Pro 16"' },
  { value: 'laptop-2', label: 'Dell XPS 13' },
  // ... many more options
]

<SearchableSelect 
  options={products}
  value={value}
  onValueChange={setValue}
  open={open}
  onOpenChange={setOpen}
  placeholder="Search products..."
  searchPlaceholder="Type to search..."
/>
```

**Props to Implement**: `options`, `value`, `onValueChange`, `open`, `onOpenChange`, `placeholder`, `searchPlaceholder`

---

### 🔷 MultiSelect (comp-234)

**Description**: Tag-based multi-select component allowing users to select multiple options with visual feedback.

**When to Use**:
- Selecting multiple categories or tags
- Team member assignment
- Feature selection in settings
- Filter combinations
- Any multi-choice scenario

**Implementation After Refactoring**:
```tsx
import MultiSelect from '@/components/MultiSelect'

const [selectedTags, setSelectedTags] = useState<string[]>([])

const tags = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' }
]

<MultiSelect 
  options={tags}
  value={selectedTags}
  onValueChange={setSelectedTags}
  placeholder="Select technologies"
  maxItems={5}
/>
```

**Props to Implement**: `options`, `value`, `onValueChange`, `placeholder`, `maxItems`

---

### 🔷 UserAvatarSelect (comp-226)

**Description**: User selection dropdown with avatars, names, and email addresses for rich user interfaces.

**When to Use**:
- Team member assignment
- User selection in admin panels
- Conversation participant selection
- Approval workflows
- Any user-centric selection

**Implementation After Refactoring**:
```tsx
import UserAvatarSelect from '@/components/UserAvatarSelect'

const users = [
  { 
    value: 'user-1', 
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatars/john.jpg'
  },
  // ... more users
]

<UserAvatarSelect 
  users={users}
  value={selectedUser}
  onValueChange={setSelectedUser}
  placeholder="Select team member"
/>
```

**Props to Implement**: `users`, `value`, `onValueChange`, `placeholder`, `showEmail`

---

### 🔷 StatusSelect (comp-220)

**Description**: Select component with colored status indicators for visual status representation.

**When to Use**:
- Task or ticket status selection
- Priority level selection
- Workflow state management
- System status displays
- Any status-based selection

**Implementation After Refactoring**:
```tsx
import StatusSelect from '@/components/StatusSelect'

const statuses = [
  { value: 'active', label: 'Active', color: 'green' },
  { value: 'pending', label: 'Pending', color: 'yellow' },
  { value: 'inactive', label: 'Inactive', color: 'red' }
]

<StatusSelect 
  options={statuses}
  value={status}
  onValueChange={setStatus}
  label="Status"
/>
```

**Props to Implement**: `options`, `value`, `onValueChange`, `label`, `colorScheme`

---

### 🔷 CountrySearchSelect (comp-232)

**Description**: Searchable country selector with flags and country codes for international applications.

**When to Use**:
- Address forms
- International shipping
- Phone number country codes
- Localization settings
- Any country selection needs

**Implementation After Refactoring**:
```tsx
import CountrySearchSelect from '@/components/CountrySearchSelect'

<CountrySearchSelect 
  value={selectedCountry}
  onValueChange={setSelectedCountry}
  placeholder="Select country"
  includeFlags={true}
  includeDialCode={false}
/>
```

**Props to Implement**: `value`, `onValueChange`, `placeholder`, `includeFlags`, `includeDialCode`

---

### 🔷 SelectWithMetrics (comp-233)

**Description**: Advanced select showing rich data including icons, metrics, and badges for data-heavy interfaces.

**When to Use**:
- Dashboard metric selection
- KPI choosers
- Resource selection with usage data
- Performance metric selection
- Any data-rich selection needs

**Implementation After Refactoring**:
```tsx
import SelectWithMetrics from '@/components/SelectWithMetrics'

const metrics = [
  { 
    value: 'revenue',
    label: 'Revenue',
    icon: DollarIcon,
    metric: '$125.5K',
    change: '+12.5%',
    trend: 'up'
  },
  // ... more metrics
]

<SelectWithMetrics 
  options={metrics}
  value={selectedMetric}
  onValueChange={setSelectedMetric}
  showTrend={true}
/>
```

**Props to Implement**: `options`, `value`, `onValueChange`, `showTrend`, `formatMetric`

---

## 🎨 SPECIALIZED VARIANTS

### SelectWithIcon (comp-191)
```tsx
// Native select with leading icon
<SelectWithIcon icon={Calendar} options={dates} />
```

### SelectWithGroups (comp-213)
```tsx
// Organized options in logical groups
<SelectWithGroups groups={categorizedOptions} />
```

### SelectWithDescriptions (comp-224)
```tsx
// Options with detailed descriptions
<SelectWithDescriptions options={plans} showDescriptions />
```

### TimeZoneSearchSelect (comp-231)
```tsx
// Specialized timezone picker with search
<TimeZoneSearchSelect value={timezone} onChange={setTimezone} />
```

### AriaListBox (comp-237)
```tsx
// Fully accessible custom listbox
<AriaListBox items={items} onSelectionChange={handleChange} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form Select
```tsx
// Start here for simple forms
import BasicSelect from '@/components/BasicSelect'

<BasicSelect 
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]}
/>
```

### Modern Application Select
```tsx
// For modern web apps with custom styling
import CustomSelect from '@/components/CustomSelect'

<CustomSelect 
  options={options}
  placeholder="Choose an option"
/>
```

### Large Dataset Select
```tsx
// When you have many options
import SearchableSelect from '@/components/SearchableSelect'

<SearchableSelect 
  options={largeOptionList}
  searchPlaceholder="Type to filter..."
/>
```

### Multi-Choice Interface
```tsx
// For selecting multiple items
import MultiSelect from '@/components/MultiSelect'

<MultiSelect 
  options={items}
  placeholder="Select multiple items"
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 30 LoC**: Basic native selects with minimal features (BasicSelect, SelectWithPlaceholder)
- **30-50 LoC**: Enhanced selects with single features (CustomSelect, SelectWithIcon)
- **50-100 LoC**: Feature-rich selects with complex interactions (StatusSelect, UserAvatarSelect)
- **100-150 LoC**: Searchable and multi-select components (SearchableSelect, MultiSelect)
- **> 150 LoC**: Complex data-rich components (SelectWithMetrics, only when absolutely needed)

**Why LoC matters**: Smaller components are easier to understand, customize, and maintain. Start with the simplest component that meets your needs and only upgrade when users require additional features.

### Technology Stack Guide

**Use Native HTML Selects when:**
- Building progressive enhancement experiences
- Maximum accessibility is required out-of-the-box
- JavaScript might be disabled
- Quick prototypes or MVPs
- SEO is critical (server-rendered forms)

**Use Radix UI Selects when:**
- Consistent cross-browser styling is needed
- Custom styling beyond native capabilities
- Better keyboard navigation is required
- Building modern web applications
- Need portal rendering for dropdowns

**Use Command/Combobox Patterns when:**
- Dealing with large datasets (50+ options)
- Search functionality is essential
- Users need to quickly find options
- Creating dynamic option lists
- Multi-select with search is needed

**Use React Aria Components when:**
- Building a custom design system
- Need complete control over markup
- Implementing complex keyboard patterns
- Maximum accessibility customization needed

### Performance Tips
1. Start with the simplest select that meets your needs
2. Use SearchableSelect only for 50+ options
3. Lazy load option data for very large lists
4. Consider virtual scrolling for 1000+ options
5. Debounce search input in searchable selects
6. Use native selects for better mobile performance

### Accessibility
- All components include proper ARIA labels and roles
- Keyboard navigation fully supported (Arrow keys, Enter, Escape)
- Screen reader announcements for all state changes
- Focus management handled automatically
- High contrast mode supported
- Mobile touch targets meet WCAG guidelines

### Common Patterns
```
Trigger → Portal → Options List → Selection → Close
   ↓         ↓          ↓            ↓         ↓
 Button   Overlay   Navigate      Confirm   Update
```

### Migration Path
```
BasicSelect → CustomSelect → SearchableSelect → MultiSelect → SelectWithMetrics
  (19 LoC)     (30 LoC)       (151 LoC)        (108 LoC)      (177 LoC)
```

Start simple, upgrade only when users need more features!