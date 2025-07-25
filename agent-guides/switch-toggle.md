# Switch Component

Switches toggle between on/off states instantly. Use them for settings that take effect immediately like "Enable notifications" or "Dark mode". They're perfect when users expect instant feedback without hitting save. Unlike checkboxes that often need form submission, switches apply changes right away.

Choose switches over checkboxes for live settings, system preferences, or feature toggles. Checkboxes work better in forms with submit buttons. Radio buttons handle multiple options, but switches are strictly binary - on or off. Pick from 17 styles below based on your needs: minimal toggles, labeled options, icon indicators, or rich card layouts.

## Which 'Switch' variant do you need?

### Building a minimal interface or toolbar?
- Clean and simple everywhere? Use `SimpleSwitch`
- Need it smaller for mobile/compact UI? Use `SmallSwitch`
- Want to match your brand colors? Use `ColoredSwitch`
- Showing disabled/unavailable options? Use `DisabledSwitch`
- Prefer modern sharp corners? Use `SquareSwitch`

### Following a specific design system?
- Building for Android with Material 2? Use `M2StyleSwitch`
- Building modern Material 3 apps? Use `M3StyleSwitch`

### Building a settings or preferences page?
- Need basic on/off indication? Use `LabeledSwitch`
- Want full context with descriptions? Use `CardSwitch`
- Need better accessibility with clickable labels? Use `SideLabelSwitch`

### Building theme or mode switchers?
- Single icon that changes (sun/moon)? Use `IconLabelSwitch`
- Icons on both sides as labels? Use `IconSideLabelSwitch`
- Compact with icons inside the switch? Use `IconInsideSwitch`
- Want smooth animated icon transitions? Use `AnimatedIconSwitch`

### Building payment or service integrations?
- Basic card with brand icon? Use `BrandCardSwitch`
- Complex brand integration with rich SVG? Use `ComplexBrandSwitch`

### Want iOS-style with text in the switch?
- Clear "ON/OFF" text inside the thumb? Use `TextInsideSwitch`

## 📊 COMPLETE COMPONENT MATRIX

### Core Switch Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SimpleSwitch** (read if you plan to implement: registry/default/components/comp-172.tsx) | 16 | Basic toggle, sr-only label | Minimal interfaces, icon-only contexts |
| **ColoredSwitch** (read if you plan to implement: registry/default/components/comp-174.tsx) | 16 | Custom color (indigo), CSS variables | Branded interfaces, theme matching |
| **DisabledSwitch** (read if you plan to implement: registry/default/components/comp-175.tsx) | 16 | Disabled state example | Showing unavailable options |
| **SquareSwitch** (read if you plan to implement: registry/default/components/comp-176.tsx) | 16 | Square corners variant | Modern, sharp design systems |
| **SmallSwitch** (read if you plan to implement: registry/default/components/comp-173.tsx) | 20 | Reduced size (h-5 w-8) | Compact UIs, mobile interfaces |
| **M2StyleSwitch** (read if you plan to implement: registry/default/components/comp-177.tsx) | 20 | Material Design 2 style | Android apps, Material 2 systems |
| **M3StyleSwitch** (read if you plan to implement: registry/default/components/comp-178.tsx) | 20 | Material Design 3 style | Modern Material apps |
| **LabeledSwitch** (read if you plan to implement: registry/default/components/comp-179.tsx) | 26 | Dynamic on/off text label | Basic settings, clear state indication |

### Interactive & Labeled Switches

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **CardSwitch** (read if you plan to implement: registry/default/components/comp-186.tsx) | 29 | Card container with description | Settings pages, detailed options |
| **IconLabelSwitch** (read if you plan to implement: registry/default/components/comp-181.tsx) | 32 | Icon changes with state | Theme toggles, visual indicators |
| **TextInsideSwitch** (read if you plan to implement: registry/default/components/comp-185.tsx) | 34 | ON/OFF text inside thumb | Clear state indication, iOS-style |
| **IconInsideSwitch** (read if you plan to implement: registry/default/components/comp-183.tsx) | 35 | Icons inside switch thumb | Compact theme/mode toggles |
| **AnimatedIconSwitch** (read if you plan to implement: registry/default/components/comp-184.tsx) | 35 | Animated icon transitions | Polished interfaces, micro-interactions |
| **SideLabelSwitch** (read if you plan to implement: registry/default/components/comp-180.tsx) | 43 | Clickable labels on sides | Enhanced accessibility, clear options |
| **IconSideLabelSwitch** (read if you plan to implement: registry/default/components/comp-182.tsx) | 45 | Icon labels on sides | Visual mode switching |
| **BrandCardSwitch** (read if you plan to implement: registry/default/components/comp-187.tsx) | 53 | Card with brand icon (MasterCard) | Payment methods, service toggles |
| **ComplexBrandSwitch** (read if you plan to implement: registry/default/components/comp-188.tsx) | **82** | Complex SVG brand (Supabase) | Feature toggles, integration settings |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 SimpleSwitch (comp-172)

**Description**: The most basic switch component with screen reader only label. Perfect starting point for custom implementations.

**When to Use**:
- Minimal interfaces where context is clear
- Icon-only toolbars
- When label is provided elsewhere
- Mobile-first designs
- As a base for custom switches

**Implementation After Refactoring**:
```tsx
import SimpleSwitch from '@/components/SimpleSwitch'

const [isEnabled, setIsEnabled] = useState(false)

<SimpleSwitch 
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
  ariaLabel="Enable notifications"
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `ariaLabel`, `disabled`, `className`

---

### 🔷 LabeledSwitch (comp-179)

**Description**: Switch with dynamic text label that changes based on state (On/Off). Clear visual feedback for users.

**When to Use**:
- Settings pages
- Form fields needing clear state
- When visual feedback is important
- Accessibility-focused interfaces
- User preferences

**Implementation After Refactoring**:
```tsx
import LabeledSwitch from '@/components/LabeledSwitch'

const [isActive, setIsActive] = useState(true)

<LabeledSwitch 
  checked={isActive}
  onCheckedChange={setIsActive}
  onLabel="Active"
  offLabel="Inactive"
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `onLabel`, `offLabel`, `disabled`

---

### 🔷 SideLabelSwitch (comp-180)

**Description**: Switch with clickable labels on both sides. Clicking labels changes the switch state, improving target area.

**When to Use**:
- Enhanced accessibility needs
- Touch interfaces
- When clear options are needed
- Binary choices (Yes/No, On/Off)
- Mobile applications

**Implementation After Refactoring**:
```tsx
import SideLabelSwitch from '@/components/SideLabelSwitch'

const [agreed, setAgreed] = useState(false)

<SideLabelSwitch 
  checked={agreed}
  onCheckedChange={setAgreed}
  leftLabel="Disagree"
  rightLabel="Agree"
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `leftLabel`, `rightLabel`, `disabled`

---

### 🔷 IconLabelSwitch (comp-181)

**Description**: Switch with icon that changes based on state. Perfect for theme toggles and visual mode switches.

**When to Use**:
- Dark/light theme toggles
- Sound on/off controls
- Visual mode switching
- When icons convey meaning better
- Compact interfaces

**Implementation After Refactoring**:
```tsx
import IconLabelSwitch from '@/components/IconLabelSwitch'
import { VolumeX, Volume2 } from 'lucide-react'

const [soundEnabled, setSoundEnabled] = useState(true)

<IconLabelSwitch 
  checked={soundEnabled}
  onCheckedChange={setSoundEnabled}
  checkedIcon={Volume2}
  uncheckedIcon={VolumeX}
  ariaLabel="Toggle sound"
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `checkedIcon`, `uncheckedIcon`, `ariaLabel`

---

### 🔷 TextInsideSwitch (comp-185)

**Description**: iOS-style switch with ON/OFF text inside the switch track. Provides clear state indication.

**When to Use**:
- iOS-style interfaces
- When space is premium
- Clear binary states needed
- Mobile applications
- Settings toggles

**Implementation After Refactoring**:
```tsx
import TextInsideSwitch from '@/components/TextInsideSwitch'

const [isOn, setIsOn] = useState(false)

<TextInsideSwitch 
  checked={isOn}
  onCheckedChange={setIsOn}
  onText="ON"
  offText="OFF"
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `onText`, `offText`, `disabled`

---

### 🔷 CardSwitch (comp-186)

**Description**: Switch integrated into a card layout with title, subtitle, and description. Great for detailed settings.

**When to Use**:
- Settings pages with explanations
- Feature toggles
- Subscription options
- Privacy settings
- When context is important

**Implementation After Refactoring**:
```tsx
import CardSwitch from '@/components/CardSwitch'

const [marketingEmails, setMarketingEmails] = useState(true)

<CardSwitch 
  checked={marketingEmails}
  onCheckedChange={setMarketingEmails}
  title="Marketing Emails"
  subtitle="Optional"
  description="Receive emails about new products and features."
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `title`, `subtitle`, `description`, `disabled`

---

### 🔷 BrandCardSwitch (comp-187)

**Description**: Card switch with brand icon/logo. Perfect for payment methods, integrations, and service toggles.

**When to Use**:
- Payment method selection
- Service integrations
- API toggles
- Third-party features
- Brand-specific settings

**Implementation After Refactoring**:
```tsx
import BrandCardSwitch from '@/components/BrandCardSwitch'

const [cardEnabled, setCardEnabled] = useState(true)

<BrandCardSwitch 
  checked={cardEnabled}
  onCheckedChange={setCardEnabled}
  brandIcon={<MastercardIcon />}
  title="Mastercard"
  subtitle="****4242"
  description="Default payment method for subscriptions."
/>
```

**Props to Implement**: `checked`, `onCheckedChange`, `brandIcon`, `title`, `subtitle`, `description`

---

## 🎨 STYLE VARIANTS

### M2StyleSwitch (comp-177)
```tsx
// Material Design 2 style with border
<M2StyleSwitch checked={checked} onCheckedChange={setChecked} />
```

### M3StyleSwitch (comp-178)
```tsx
// Material Design 3 style with enhanced states
<M3StyleSwitch checked={checked} onCheckedChange={setChecked} />
```

### SquareSwitch (comp-176)
```tsx
// Square corners for sharp design systems
<SquareSwitch checked={checked} onCheckedChange={setChecked} />
```

### SmallSwitch (comp-173)
```tsx
// Compact size for dense interfaces
<SmallSwitch checked={checked} onCheckedChange={setChecked} />
```

### ColoredSwitch (comp-174)
```tsx
// Custom color using CSS variables
<ColoredSwitch 
  checked={checked} 
  onCheckedChange={setChecked}
  color="indigo" // or any CSS color
/>
```

---

## 🎭 ADVANCED INTERACTIONS

### IconSideLabelSwitch (comp-182)
```tsx
// Icons on both sides of switch
<IconSideLabelSwitch 
  leftIcon={<MoonIcon />}
  rightIcon={<SunIcon />}
  checked={isDarkMode}
  onCheckedChange={setIsDarkMode}
/>
```

### IconInsideSwitch (comp-183)
```tsx
// Icons displayed inside the switch thumb
<IconInsideSwitch 
  checkedIcon={<SunIcon />}
  uncheckedIcon={<MoonIcon />}
  checked={checked}
  onCheckedChange={setChecked}
/>
```

### AnimatedIconSwitch (comp-184)
```tsx
// Smooth icon transitions inside switch
<AnimatedIconSwitch 
  checkedIcon={<CheckIcon />}
  uncheckedIcon={<XIcon />}
  checked={checked}
  onCheckedChange={setChecked}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form Toggle
```tsx
// Start here for simple on/off states
import SimpleSwitch from '@/components/SimpleSwitch'

<SimpleSwitch 
  onCheckedChange={handleToggle}
/>
```

### Settings Page Toggle
```tsx
// For settings with descriptions
import CardSwitch from '@/components/CardSwitch'

<CardSwitch 
  title="Enable Feature"
  description="This will enable the experimental feature."
  onCheckedChange={handleFeatureToggle}
/>
```

### Theme Toggle
```tsx
// For dark/light mode switching
import IconLabelSwitch from '@/components/IconLabelSwitch'

<IconLabelSwitch 
  checkedIcon={SunIcon}
  uncheckedIcon={MoonIcon}
  checked={theme === 'dark'}
  onCheckedChange={toggleTheme}
/>
```

### Payment Method Toggle
```tsx
// For payment and service integrations
import BrandCardSwitch from '@/components/BrandCardSwitch'

<BrandCardSwitch 
  brandIcon={<PaymentIcon />}
  title="Enable Auto-pay"
  description="Automatically pay invoices when due."
  checked={autopayEnabled}
  onCheckedChange={setAutopayEnabled}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 20 LoC**: Basic switches and style variants (SimpleSwitch, ColoredSwitch, DisabledSwitch, SquareSwitch)
- **20-35 LoC**: Switches with labels or icons (SmallSwitch, M2StyleSwitch, M3StyleSwitch, LabeledSwitch, CardSwitch, IconLabelSwitch, TextInsideSwitch)
- **35-50 LoC**: Interactive switches with enhanced features (IconInsideSwitch, AnimatedIconSwitch, SideLabelSwitch, IconSideLabelSwitch)
- **> 50 LoC**: Complex card layouts with rich content (BrandCardSwitch, ComplexBrandSwitch)

**Why LoC matters**: Simpler switches are easier to customize and maintain. Start with the simplest component that meets your needs and only add complexity when user experience demands it.

### State Management
All switch components should be controlled components in production:
```tsx
// ✅ Good - Controlled component
const [isEnabled, setIsEnabled] = useState(false)
<Switch checked={isEnabled} onCheckedChange={setIsEnabled} />

// ❌ Avoid - Uncontrolled in production
<Switch defaultChecked />
```

### Accessibility Best Practices
1. **Always provide labels**: Use visible labels or `aria-label` for screen readers
2. **Keyboard support**: All switches support Space and Enter keys
3. **Focus indicators**: Ensure visible focus states for keyboard navigation
4. **ARIA attributes**: Use `role="switch"` and `aria-checked` (handled by Radix UI)
5. **Color contrast**: Ensure sufficient contrast between states

### Mobile Considerations
- **Touch targets**: Minimum 44x44px clickable area
- **Side labels**: Increase touch target with `SideLabelSwitch`
- **Visual feedback**: Use `SmallSwitch` only when space is critical
- **State persistence**: Save preferences immediately on mobile

### Performance Tips
1. Start with the simplest switch that meets your needs
2. Use `React.memo` for switches in lists
3. Debounce state changes for API calls
4. Lazy load icon components
5. Avoid complex animations on low-end devices

### Migration Path
```
SimpleSwitch → LabeledSwitch → IconLabelSwitch → CardSwitch → BrandCardSwitch
   (16 LoC)      (26 LoC)        (32 LoC)        (29 LoC)      (53-82 LoC)
```

Start simple, upgrade only when you need more context or visual richness!