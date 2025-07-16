# Radio Button Component

Radio buttons let users pick one option from a list. Use them for mutually exclusive choices like yes/no questions, payment methods, or subscription plans. They work best with 2-7 options that users can see all at once. Each click deselects the previous choice automatically.

Checkboxes work better for multiple selections, dropdowns save space for 8+ options, and toggle switches handle on/off states. But radio buttons excel at showing all available choices clearly. Pick from 20 styles below based on your needs: simple text, visual elements (colors/icons/images), detailed cards, or specialized purposes (ratings/payments).

## Which 'Radio Button' variant do you need?

### Just need simple text options?

**The basics:**
- Simplest implementation? Use `BasicRadioGroup`
- Need custom theme colors? Use `CustomColorRadio`
- Want to show disabled state? Use `DisabledRadio`

**Need more details:**
- Options with descriptions? Use `DescriptiveRadio`
- "Other" option with text input? Use `ExpandableRadio`

### Selecting something visual?

**Picking colors:**
- Theme or color selection? Use `ColorPickerRadio`

**Using icons or symbols:**
- Tool or mode selection? Use `IconGridRadio`
- Mood or feedback emojis? Use `EmojiRadio`

**Working with images:**
- Theme previews or avatars? Use `ImageRadio`

### Need specialized functionality?

**Ratings and scores:**
- 5-star product reviews? Use `StarRatingRadio`
- 0-10 satisfaction scale? Use `NPSRadio`

**Payment and billing:**
- Compact payment icons? Use `PaymentMethodRadio`
- Monthly/yearly toggle? Use `ToggleRadio`

### Want cards with rich information?

**Basic cards:**
- Simple location or server cards? Use `SimpleCardRadio`
- Cards with descriptions? Use `CardRadio`

**Resource and server cards:**
- CPU, RAM, or storage selection? Use `ResourceRadio`

**Specialized cards:**
- Subscription pricing tiers? Use `PricingPlanRadio`
- Payment method cards? Use `PaymentCardRadio`
- Service options with icons? Use `ServiceCardRadio`
- Filter reviews by star rating? Use `ReviewFilterRadio`

## 📊 COMPLETE COMPONENT MATRIX

### Core Radio Buttons

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicRadioGroup** (read if you plan to implement: registry/default/components/comp-152.tsx) | 24 | Simplest radio implementation | Forms, basic choices |
| **DisabledRadio** (read if you plan to implement: registry/default/components/comp-154.tsx) | 24 | Disabled state example | Conditional options |
| **CustomColorRadio** (read if you plan to implement: registry/default/components/comp-153.tsx) | 27 | Custom color styling | Themed interfaces |
| **ToggleRadio** (read if you plan to implement: registry/default/components/comp-170.tsx) | 35 | Billing toggle style | Period/mode selection |
| **DescriptiveRadio** (read if you plan to implement: registry/default/components/comp-155.tsx) | 54 | Labels + descriptions | Complex choices |
| **ExpandableRadio** (read if you plan to implement: registry/default/components/comp-156.tsx) | **90** | Conditional input fields | Dynamic forms |

### Visual Selection Variants

| Component | LoC | Visual Style | Best For |
|-----------|:---:|--------------|----------|
| **IconGridRadio** (read if you plan to implement: registry/default/components/comp-162.tsx) | 37 | Icon grid layout | Tool selection, modes |
| **EmojiRadio** (read if you plan to implement: registry/default/components/comp-167.tsx) | 38 | Emoji circles | Feedback, mood selection |
| **NPSRadio** (read if you plan to implement: registry/default/components/comp-168.tsx) | 39 | Numeric scale | Surveys, ratings |
| **PaymentMethodRadio** (read if you plan to implement: registry/default/components/comp-163.tsx) | 45 | Payment icons | Checkout flows |
| **ColorPickerRadio** (read if you plan to implement: registry/default/components/comp-158.tsx) | 48 | Color swatches | Theme selection |
| **StarRatingRadio** (read if you plan to implement: registry/default/components/comp-171.tsx) | 50 | Interactive stars | Reviews, ratings |
| **ImageRadio** (read if you plan to implement: registry/default/components/comp-169.tsx) | 52 | Image thumbnails | Visual preferences |

### Card-based Radio Buttons

| Component | LoC | Card Features | Best For |
|-----------|:---:|---------------|----------|
| **SimpleCardRadio** (read if you plan to implement: registry/default/components/comp-165.tsx) | 39 | Basic card layout | Location, server selection |
| **ResourceRadio** (read if you plan to implement: registry/default/components/comp-164.tsx) | 42 | Grid cards | CPU, resource selection |
| **CardRadio** (read if you plan to implement: registry/default/components/comp-159.tsx) | 58 | Cards with descriptions | Feature selection |
| **PricingPlanRadio** (read if you plan to implement: registry/default/components/comp-166.tsx) | 61 | Stacked pricing cards | Subscription plans |
| **ReviewFilterRadio** (read if you plan to implement: registry/default/components/comp-157.tsx) | 117 | Star rating filters | Review filtering |
| **PaymentCardRadio** (read if you plan to implement: registry/default/components/comp-160.tsx) | 118 | Payment method cards | Checkout, billing |
| **ServiceCardRadio** (read if you plan to implement: registry/default/components/comp-161.tsx) | **128** | Service icons + details | Service selection |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicRadioGroup (comp-152)

**Description**: The simplest radio button implementation. Clean, accessible, and perfect for standard forms.

**When to Use**:
- Standard forms with simple choices
- Settings pages
- Configuration options
- Default starting point for radio buttons
- When you need straightforward selection

**Implementation After Refactoring**:
```tsx
import BasicRadioGroup from '@/components/BasicRadioGroup'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' }
]

<BasicRadioGroup 
  options={options}
  defaultValue="1"
  onValueChange={(value) => console.log(value)}
/>
```

**Props to Implement**: `options`, `defaultValue`, `onValueChange`, `disabled`, `name`

---

### 🔷 ExpandableRadio (comp-156)

**Description**: Radio buttons with conditional input fields that expand when selected. Perfect for "Other" options.

**When to Use**:
- Forms with "Other" option requiring details
- Conditional information collection
- Dynamic form fields
- When selection needs additional input
- Survey forms with custom responses

**Implementation After Refactoring**:
```tsx
import ExpandableRadio from '@/components/ExpandableRadio'

const options = [
  { 
    value: 'standard', 
    label: 'Standard Option',
    description: 'Choose this for default behavior'
  },
  { 
    value: 'custom', 
    label: 'Custom Option',
    description: 'Provide additional details',
    expandable: true,
    inputPlaceholder: 'Enter custom details...'
  }
]

<ExpandableRadio 
  options={options}
  onValueChange={handleChange}
  onInputChange={handleInputChange}
/>
```

**Props to Implement**: `options`, `onValueChange`, `onInputChange`, `defaultValue`, `inputType`

---

### 🔷 PaymentMethodRadio (comp-163)

**Description**: Compact payment method selector with icons in a grid layout. Screen reader accessible.

**When to Use**:
- Checkout pages
- Payment method selection
- Billing settings
- E-commerce forms
- When space is limited

**Implementation After Refactoring**:
```tsx
import PaymentMethodRadio from '@/components/PaymentMethodRadio'
import { RiBankCardLine, RiPaypalLine, RiAppleLine } from '@remixicon/react'

const paymentMethods = [
  { value: 'card', label: 'Card', icon: RiBankCardLine },
  { value: 'paypal', label: 'PayPal', icon: RiPaypalLine },
  { value: 'apple', label: 'Apple Pay', icon: RiAppleLine }
]

<PaymentMethodRadio 
  methods={paymentMethods}
  defaultValue="card"
  onValueChange={handlePaymentChange}
/>
```

**Props to Implement**: `methods`, `defaultValue`, `onValueChange`, `columns`, `iconSize`

---

### 🔷 StarRatingRadio (comp-171)

**Description**: Interactive star rating with hover effects. Provides visual feedback during selection.

**When to Use**:
- Product reviews
- User feedback forms
- Rating systems
- Customer satisfaction surveys
- Any 1-5 scale rating

**Implementation After Refactoring**:
```tsx
import StarRatingRadio from '@/components/StarRatingRadio'

const [rating, setRating] = useState('')

<StarRatingRadio 
  value={rating}
  onValueChange={setRating}
  maxStars={5}
  label="Rate your experience"
/>
```

**Props to Implement**: `value`, `onValueChange`, `maxStars`, `label`, `size`

---

### 🔷 CardRadio (comp-159)

**Description**: Radio buttons styled as selectable cards with borders and hover states.

**When to Use**:
- Feature selection
- Plan comparison
- Option cards with descriptions
- When visual hierarchy matters
- Multi-line content selection

**Implementation After Refactoring**:
```tsx
import CardRadio from '@/components/CardRadio'

const features = [
  {
    value: 'basic',
    label: 'Basic Features',
    sublabel: 'Essential',
    description: 'Everything you need to get started'
  },
  {
    value: 'pro',
    label: 'Pro Features',
    sublabel: 'Advanced',
    description: 'Advanced tools for power users'
  }
]

<CardRadio 
  options={features}
  defaultValue="basic"
  onValueChange={handleFeatureChange}
/>
```

**Props to Implement**: `options`, `defaultValue`, `onValueChange`, `showBorder`, `layout`

---

### 🔷 PricingPlanRadio (comp-166)

**Description**: Stacked pricing cards with popular badges and pricing display. Optimized for plan selection.

**When to Use**:
- Subscription plan selection
- Pricing pages
- Upgrade flows
- Billing settings
- SaaS applications

**Implementation After Refactoring**:
```tsx
import PricingPlanRadio from '@/components/PricingPlanRadio'

const plans = [
  { value: 'hobby', label: 'Hobby', price: '$9/mo' },
  { value: 'plus', label: 'Plus', price: '$29/mo', popular: true },
  { value: 'team', label: 'Team', price: '$49/mo' },
  { value: 'enterprise', label: 'Enterprise', price: 'Custom' }
]

<PricingPlanRadio 
  plans={plans}
  defaultValue="plus"
  onValueChange={handlePlanChange}
  showPopularBadge={true}
/>
```

**Props to Implement**: `plans`, `defaultValue`, `onValueChange`, `showPopularBadge`, `currency`

---

### 🔷 ColorPickerRadio (comp-158)

**Description**: Visual color selection with colored radio buttons. No labels needed.

**When to Use**:
- Theme color selection
- Product variant selection
- UI customization
- Visual preferences
- When color is the primary differentiator

**Implementation After Refactoring**:
```tsx
import ColorPickerRadio from '@/components/ColorPickerRadio'

const colors = [
  { value: 'blue', color: '#3B82F6', label: 'Blue' },
  { value: 'indigo', color: '#6366F1', label: 'Indigo' },
  { value: 'pink', color: '#EC4899', label: 'Pink' },
  { value: 'emerald', color: '#10B981', label: 'Emerald' }
]

<ColorPickerRadio 
  colors={colors}
  defaultValue="blue"
  onValueChange={handleColorChange}
  size="md"
/>
```

**Props to Implement**: `colors`, `defaultValue`, `onValueChange`, `size`, `showLabels`

---

### 🔷 EmojiRadio (comp-167)

**Description**: Emoji-based selection for feedback and mood ratings. Fun and engaging.

**When to Use**:
- Customer feedback forms
- Mood tracking
- User satisfaction surveys
- Fun, engaging interfaces
- When visual emotion matters

**Implementation After Refactoring**:
```tsx
import EmojiRadio from '@/components/EmojiRadio'

const moods = [
  { value: '1', label: 'Angry', icon: '😠' },
  { value: '2', label: 'Sad', icon: '🙁' },
  { value: '3', label: 'Neutral', icon: '😐' },
  { value: '4', label: 'Happy', icon: '🙂' },
  { value: '5', label: 'Laughing', icon: '😀' }
]

<EmojiRadio 
  options={moods}
  defaultValue="3"
  onValueChange={handleMoodChange}
  label="How did it go?"
/>
```

**Props to Implement**: `options`, `defaultValue`, `onValueChange`, `label`, `size`

---

## 🎨 SPECIALIZED VARIANTS

### ToggleRadio (comp-170)
```tsx
// Billing period toggle with discount badge
<ToggleRadio 
  options={['Monthly', 'Yearly']}
  discount="-20%"
  defaultValue="Yearly"
/>
```

### NPSRadio (comp-168)
```tsx
// Net Promoter Score scale (0-5 or 0-10)
<NPSRadio 
  scale={[0, 1, 2, 3, 4, 5]}
  labels={['Not likely', 'Very Likely']}
/>
```

### ReviewFilterRadio (comp-157)
```tsx
// Filter reviews by star rating with counts
<ReviewFilterRadio 
  filters={reviewFilters}
  showCounts={true}
/>
```

### IconGridRadio (comp-162)
```tsx
// Tool selection with icons in grid
<IconGridRadio 
  tools={designTools}
  columns={2}
/>
```

### ResourceRadio (comp-164)
```tsx
// Resource selection (CPU, RAM, etc.)
<ResourceRadio 
  resources={cpuOptions}
  disabled={['16 CPU']}
/>
```

### ImageRadio (comp-169)
```tsx
// Theme selection with preview images
<ImageRadio 
  themes={themeOptions}
  imageSize={{ width: 88, height: 70 }}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form Selection
```tsx
// Start here for simple radio buttons
import BasicRadioGroup from '@/components/BasicRadioGroup'

<BasicRadioGroup 
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ]}
/>
```

### E-commerce Checkout
```tsx
// For payment and shipping selection
import PaymentMethodRadio from '@/components/PaymentMethodRadio'

<PaymentMethodRadio 
  methods={paymentOptions}
  onValueChange={updatePaymentMethod}
/>
```

### User Feedback
```tsx
// For ratings and satisfaction
import StarRatingRadio from '@/components/StarRatingRadio'

<StarRatingRadio 
  label="How satisfied are you?"
  onValueChange={submitRating}
/>
```

### SaaS Pricing
```tsx
// For plan selection with pricing
import PricingPlanRadio from '@/components/PricingPlanRadio'

<PricingPlanRadio 
  plans={subscriptionPlans}
  showPopularBadge={true}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 30 LoC**: Basic radio buttons (BasicRadioGroup, DisabledRadio, CustomColorRadio)
- **30-50 LoC**: Visual variants (ColorPicker, Emoji, NPS, Icons, ResourceRadio)
- **50-70 LoC**: Enhanced features (Descriptions, Cards, Pricing, ImageRadio)
- **70-100 LoC**: Interactive components (ExpandableRadio, StarRating)
- **> 100 LoC**: Complex cards (ReviewFilter, PaymentCards, ServiceCards)

**Why LoC matters**: Radio button complexity directly correlates with the amount of information displayed and interaction patterns. Choose simpler variants when possible to reduce maintenance overhead.

### Component Selection Guide

**Use Basic Radio Buttons when:**
- You have 2-5 simple text options
- Space is limited
- Users are familiar with the choices
- Accessibility is paramount

**Use Visual Radio Buttons when:**
- Visual differentiation helps users decide
- The choice is inherently visual (colors, themes)
- You want to make forms more engaging
- Icons or emojis clarify options

**Use Card Radio Buttons when:**
- Options need detailed explanations
- Comparing features or pricing
- Visual hierarchy is important
- You have more screen space

### Performance Tips
1. Start with the simplest radio button that meets your needs
2. Use icon fonts or SVG sprites for visual variants
3. Lazy load images in ImageRadio for better performance
4. Consider virtual scrolling for very long option lists
5. Debounce onChange handlers for complex state updates

### Accessibility
- All radio buttons include proper ARIA labels
- Keyboard navigation fully supported (arrow keys)
- Screen reader announcements for all variants
- Focus indicators meet WCAG guidelines
- Visual indicators supplement but don't replace text labels

### Common Patterns
```
Click/Tap → Select → Visual Feedback → onChange Event
    ↓          ↓            ↓              ↓
 Focus     Update UI    Announce      Update State
```

### Migration Path
```
BasicRadioGroup → DescriptiveRadio → CardRadio → ServiceCardRadio
   (24 LoC)         (54 LoC)          (58 LoC)      (128 LoC)
```

Start simple, add complexity only when user needs justify it!