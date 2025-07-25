# Stepper Component

Steppers guide users through multi-step processes by showing progress and indicating the current position. Use them for checkout flows, onboarding, form wizards, or any sequential task. They excel when you need to break complex processes into manageable steps, show clear progress, or prevent users from jumping ahead.

Tabs work better for switching between related content views, but steppers enforce a linear flow. Progress bars show completion percentage but lack step indicators. Pick from 17 styles below based on your needs: layout (horizontal/vertical), content (none/titles/descriptions), style (circles/bars), and interaction (static/buttons/loading).

## Which 'Stepper' variant do you need?

### Just need simple step indicators?

**Minimalist number indicators:**
- Want numbers only, no checkmarks? Use `NumberOnlyStepper`
- Want numbers that turn into checkmarks? Use `BasicStepper`
- Need tiny indicators for tight spaces? Use `TinyButtonStepper`

**Want it vertical instead of horizontal?**
- Basic vertical layout? Use `VerticalStepper`

### Need to show step names or descriptions?

**Just step titles - horizontal layout:**
- Titles inline with the indicators? Use `InlineTitleStepper`

**Just step titles - vertical layout:**
- Titles next to vertical indicators? Use `VerticalTitleStepper`

**Need both titles AND descriptions - horizontal:**
- Clean centered layout under indicators? Use `TitleDescriptionStepper`
- Inline layout beside indicators? Use `InlineDescriptionStepper`
- Alternative layout with titles first? Use `ReverseDescriptionStepper`

**Need both titles AND descriptions - vertical:**
- Full vertical with descriptions? Use `VerticalDescriptionStepper`

### Want progress bars instead of circles?

**For installation/setup workflows:**
- Simple bars with step titles? Use `ProgressBarStepper`
- Long processes needing "Step X of Y" counter? Use `ProgressCounterStepper`

### Need navigation controls or interactivity?

**With Previous/Next buttons:**
- Horizontal layout with buttons? Use `ControlledStepper`
- Vertical layout with buttons? Use `ControlledVerticalStepper`

**For specific use cases:**
- Image galleries or slideshows? Use `PaginatedStepper`
- API calls or async operations? Use `LoadingStateStepper`

### Building something custom?
- User journeys with avatars, icons, or mixed elements? Use `MixedElementStepper`

## 📊 COMPLETE COMPONENT MATRIX

### Core Steppers

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **NumberOnlyStepper** (read if you plan to implement: registry/default/components/comp-513.tsx) | 33 | Numbers only, no checkmarks | Minimalist designs, simple flows |
| **BasicStepper** (read if you plan to implement: registry/default/components/comp-514.tsx) | 33 | Numbers with checkmark completion | Standard multi-step forms |
| **TinyButtonStepper** (read if you plan to implement: registry/default/components/comp-515.tsx) | 33 | Small indicators with checkmarks | Compact spaces, mobile |
| **VerticalStepper** (read if you plan to implement: registry/default/components/comp-526.tsx) | 33 | Vertical layout with numbers/checkmarks | Sidebar navigation, timelines |
| **MixedElementStepper** (read if you plan to implement: registry/default/components/comp-518.tsx) | 53 | Avatar, loading state, custom icons | User journeys, complex workflows |
| **ProgressBarStepper** (read if you plan to implement: registry/default/components/comp-519.tsx) | 54 | Progress bar style with titles | Installation wizards, setup flows |
| **InlineTitleStepper** (read if you plan to implement: registry/default/components/comp-523.tsx) | 56 | Step titles next to indicators | Descriptive workflows |

### Interactive Steppers

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ControlledStepper** (read if you plan to implement: registry/default/components/comp-516.tsx) | 58 | Previous/Next button controls | Form wizards, guided tours |
| **VerticalTitleStepper** (read if you plan to implement: registry/default/components/comp-528.tsx) | 60 | Vertical with inline titles | Documentation steps, tutorials |
| **ControlledVerticalStepper** (read if you plan to implement: registry/default/components/comp-527.tsx) | 61 | Vertical with button controls | Mobile workflows, narrow layouts |
| **VerticalDescriptionStepper** (read if you plan to implement: registry/default/components/comp-529.tsx) | 61 | Vertical with titles + descriptions | Detailed process explanations |
| **TitleDescriptionStepper** (read if you plan to implement: registry/default/components/comp-522.tsx) | 63 | Horizontal titles + descriptions | Onboarding, feature tours |
| **InlineDescriptionStepper** (read if you plan to implement: registry/default/components/comp-524.tsx) | 63 | Inline layout with descriptions | Wide screens, dashboards |
| **ReverseDescriptionStepper** (read if you plan to implement: registry/default/components/comp-525.tsx) | 63 | Titles before indicators | Alternative visual hierarchy |
| **ProgressCounterStepper** (read if you plan to implement: registry/default/components/comp-521.tsx) | 69 | Progress bars with step counter | Lengthy processes, uploads |
| **PaginatedStepper** (read if you plan to implement: registry/default/components/comp-520.tsx) | 70 | Chevron navigation buttons | Image galleries, slideshows |
| **LoadingStateStepper** (read if you plan to implement: registry/default/components/comp-517.tsx) | **72** | Async operations with loading | API calls, file processing |

### Layout Patterns

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Horizontal** | BasicStepper, ControlledStepper, TitleDescriptionStepper | Desktop, wide containers |
| **Vertical** | VerticalStepper, VerticalTitleStepper, VerticalDescriptionStepper | Mobile, sidebars, timelines |
| **Progress Bar** | ProgressBarStepper, ProgressCounterStepper | Installation, file uploads |
| **Interactive** | ControlledStepper, PaginatedStepper, LoadingStateStepper | User-driven navigation |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicStepper (comp-514)

**Description**: The standard stepper with numbered steps that show checkmarks when completed. Your default choice for multi-step processes.

**When to Use**:
- Multi-step forms
- Checkout processes
- Setup wizards
- Default starting point for any stepper
- When you need clear completion indicators

**Implementation After Refactoring**:
```tsx
import BasicStepper from '@/components/BasicStepper'

const steps = [
  { id: 1, label: 'Account' },
  { id: 2, label: 'Profile' },
  { id: 3, label: 'Settings' },
  { id: 4, label: 'Complete' }
]

<BasicStepper 
  steps={steps}
  currentStep={2}
  onStepClick={(step) => setCurrentStep(step)}
/>
```

**Props to Implement**: `steps`, `currentStep`, `onStepClick`, `completedSteps`, `clickable`

---

### 🔷 ControlledStepper (comp-516)

**Description**: Interactive stepper with Previous/Next button controls. Provides controlled navigation through steps.

**When to Use**:
- Form wizards
- Guided tutorials
- Multi-page surveys
- When users shouldn't skip steps
- Sequential processes

**Implementation After Refactoring**:
```tsx
import ControlledStepper from '@/components/ControlledStepper'
import { useState } from 'react'

const [currentStep, setCurrentStep] = useState(1)

<ControlledStepper 
  steps={4}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  onNext={() => handleNext()}
  onPrev={() => handlePrev()}
  nextDisabled={!isStepValid}
/>
```

**Props to Implement**: `steps`, `currentStep`, `onStepChange`, `onNext`, `onPrev`, `nextDisabled`, `prevDisabled`

---

### 🔷 TitleDescriptionStepper (comp-522)

**Description**: Horizontal stepper with titles and descriptions centered below indicators. Clean column layout for detailed workflows.

**When to Use**:
- Onboarding flows
- Complex multi-step processes
- When steps need explanation
- Feature tours
- Educational workflows

**Implementation After Refactoring**:
```tsx
import TitleDescriptionStepper from '@/components/TitleDescriptionStepper'

const steps = [
  { 
    id: 1, 
    title: 'Create Account',
    description: 'Set up your login credentials'
  },
  { 
    id: 2, 
    title: 'Add Details',
    description: 'Tell us about yourself'
  },
  { 
    id: 3, 
    title: 'Verify Email',
    description: 'Confirm your email address'
  }
]

<TitleDescriptionStepper 
  steps={steps}
  currentStep={2}
  orientation="horizontal"
/>
```

**Props to Implement**: `steps`, `currentStep`, `orientation`, `showDescription`, `compactMode`

---

### 🔷 LoadingStateStepper (comp-517)

**Description**: Controlled stepper with loading states for async operations. Shows progress during step transitions.

**When to Use**:
- API-driven workflows
- File upload processes
- Data validation steps
- When steps take time to complete
- Async form submissions

**Implementation After Refactoring**:
```tsx
import LoadingStateStepper from '@/components/LoadingStateStepper'

const [isLoading, setIsLoading] = useState(false)

const handleNext = async () => {
  setIsLoading(true)
  await processStep()
  setIsLoading(false)
  setCurrentStep(prev => prev + 1)
}

<LoadingStateStepper 
  steps={steps}
  currentStep={currentStep}
  isLoading={isLoading}
  onNext={handleNext}
  onPrev={handlePrev}
/>
```

**Props to Implement**: `steps`, `currentStep`, `isLoading`, `onNext`, `onPrev`, `loadingStep`

---

### 🔷 ProgressBarStepper (comp-519)

**Description**: Progress bar style stepper with titles below. Uses horizontal bars instead of circular indicators.

**When to Use**:
- Installation wizards
- Download/upload progress
- Setup processes
- When progress visualization matters
- Linear workflows

**Implementation After Refactoring**:
```tsx
import ProgressBarStepper from '@/components/ProgressBarStepper'

const steps = [
  { id: 1, label: 'Download' },
  { id: 2, label: 'Install' },
  { id: 3, label: 'Configure' },
  { id: 4, label: 'Complete' }
]

<ProgressBarStepper 
  steps={steps}
  currentStep={2}
  showLabels={true}
/>
```

**Props to Implement**: `steps`, `currentStep`, `showLabels`, `barColor`, `completedColor`

---

### 🔷 VerticalStepper (comp-526)

**Description**: Basic vertical stepper layout. Space-efficient for sidebars and mobile interfaces.

**When to Use**:
- Mobile interfaces
- Sidebar navigation
- Timeline displays
- When horizontal space is limited
- Process documentation

**Implementation After Refactoring**:
```tsx
import VerticalStepper from '@/components/VerticalStepper'

<VerticalStepper 
  steps={steps}
  currentStep={currentStep}
  onStepClick={handleStepClick}
  showConnectors={true}
/>
```

**Props to Implement**: `steps`, `currentStep`, `onStepClick`, `showConnectors`, `compact`

---

### 🔷 PaginatedStepper (comp-520)

**Description**: Progress bars with chevron navigation buttons. Compact navigation for multi-step processes.

**When to Use**:
- Image galleries
- Slideshow navigation
- Tutorial walkthroughs
- When space is very limited
- Mobile-first designs

**Implementation After Refactoring**:
```tsx
import PaginatedStepper from '@/components/PaginatedStepper'

<PaginatedStepper 
  totalSteps={4}
  currentStep={currentStep}
  onNext={() => setCurrentStep(prev => prev + 1)}
  onPrev={() => setCurrentStep(prev => prev - 1)}
  showStepNumbers={false}
/>
```

**Props to Implement**: `totalSteps`, `currentStep`, `onNext`, `onPrev`, `showStepNumbers`

---

### 🔷 MixedElementStepper (comp-518)

**Description**: Stepper supporting custom elements like avatars, icons, and loading states. Maximum flexibility.

**When to Use**:
- User journey tracking
- Custom branded workflows
- When steps have unique identities
- Creative implementations
- Non-standard step indicators

**Implementation After Refactoring**:
```tsx
import MixedElementStepper from '@/components/MixedElementStepper'
import { Shuffle } from 'lucide-react'

const steps = [
  { id: 1, element: <img src="/avatar.jpg" alt="User" />, type: 'avatar' },
  { id: 2, element: null, type: 'loading' },
  { id: 3, element: <Shuffle size={14} />, type: 'icon' }
]

<MixedElementStepper 
  steps={steps}
  currentStep={2}
  onStepClick={handleStepClick}
/>
```

**Props to Implement**: `steps`, `currentStep`, `onStepClick`, `allowCustomElements`

---

## 🎨 SPECIALIZED VARIANTS

### NumberOnlyStepper (comp-513)
```tsx
// Minimalist design with numbers only
<NumberOnlyStepper steps={4} currentStep={2} />
```

### TinyButtonStepper (comp-515)
```tsx
// Compact indicators for tight spaces
<TinyButtonStepper steps={4} currentStep={2} size="sm" />
```

### InlineTitleStepper (comp-523)
```tsx
// Titles displayed inline with indicators
<InlineTitleStepper steps={stepsWithTitles} currentStep={2} />
```

### VerticalTitleStepper (comp-528)
```tsx
// Vertical layout with step titles
<VerticalTitleStepper steps={stepsWithTitles} currentStep={2} />
```

### VerticalDescriptionStepper (comp-529)
```tsx
// Vertical with full descriptions
<VerticalDescriptionStepper steps={stepsWithDescriptions} currentStep={2} />
```

### InlineDescriptionStepper (comp-524)
```tsx
// Horizontal with inline descriptions
<InlineDescriptionStepper steps={stepsWithDescriptions} responsive={true} />
```

### ReverseDescriptionStepper (comp-525)
```tsx
// Alternative layout with titles before indicators
<ReverseDescriptionStepper steps={stepsWithDescriptions} currentStep={2} />
```

### ProgressCounterStepper (comp-521)
```tsx
// Progress bars with "Step X of Y" counter
<ProgressCounterStepper totalSteps={4} currentStep={2} showCounter={true} />
```

### ControlledVerticalStepper (comp-527)
```tsx
// Vertical stepper with button controls
<ControlledVerticalStepper steps={4} currentStep={currentStep} onStepChange={setCurrentStep} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Multi-Step Form
```tsx
// Start here for most use cases
import BasicStepper from '@/components/BasicStepper'

<BasicStepper 
  steps={['Account', 'Profile', 'Review', 'Complete']}
  currentStep={1}
/>
```

### Interactive Wizard
```tsx
// For guided user flows
import ControlledStepper from '@/components/ControlledStepper'

<ControlledStepper 
  steps={wizardSteps}
  currentStep={currentStep}
  onNext={handleNext}
  onPrev={handlePrev}
/>
```

### Onboarding Flow
```tsx
// For detailed step explanations
import TitleDescriptionStepper from '@/components/TitleDescriptionStepper'

<TitleDescriptionStepper 
  steps={onboardingSteps}
  currentStep={currentStep}
  showDescription={true}
/>
```

### Mobile Timeline
```tsx
// For vertical mobile layouts
import VerticalDescriptionStepper from '@/components/VerticalDescriptionStepper'

<VerticalDescriptionStepper 
  steps={timelineSteps}
  currentStep={currentStep}
  showConnectors={true}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 35 LoC**: Basic steppers with minimal features (BasicStepper, NumberOnlyStepper, TinyButtonStepper, VerticalStepper)
- **35-60 LoC**: Steppers with labels or basic interactivity (MixedElementStepper, ProgressBarStepper, InlineTitleStepper, ControlledStepper)
- **60-70 LoC**: Feature-rich with descriptions or complex layouts (TitleDescriptionStepper, VerticalDescriptionStepper, ProgressCounterStepper)
- **> 70 LoC**: Advanced features like loading states and pagination (LoadingStateStepper, PaginatedStepper)

**Why LoC matters**: Simpler steppers are easier to customize and maintain. Choose the minimal component that meets your needs and extend only when necessary.

### Component Composition
Stepper components are built from these core parts:
- `Stepper` - Main container managing state
- `StepperItem` - Individual step wrapper
- `StepperTrigger` - Clickable step area
- `StepperIndicator` - Visual step indicator (number, icon, checkmark)
- `StepperSeparator` - Connection between steps
- `StepperTitle` - Step label text
- `StepperDescription` - Additional step context

**Pro tip**: Mix and match these building blocks to create custom steppers tailored to your specific needs.

### Mobile Patterns
Stepper components adapt to mobile with these patterns:
1. Horizontal steppers stack vertically on small screens
2. Descriptions hide on mobile to save space
3. Touch targets meet minimum size requirements
4. Vertical steppers work well in mobile sidebars

### State Management
Common stepper states to handle:
- **Current**: The active step
- **Completed**: Steps that have been finished
- **Disabled**: Steps that can't be accessed yet
- **Error**: Steps with validation issues
- **Loading**: Steps processing async operations

### Performance Tips
1. Start with the simplest stepper that meets your needs
2. Lazy load step content for better initial performance
3. Use CSS transitions for smooth step changes
4. Debounce rapid step navigation clicks
5. Consider virtual scrolling for many steps (>20)

### Accessibility
- All steppers include proper ARIA labels and roles
- Keyboard navigation supported (Tab, Arrow keys)
- Screen readers announce step changes
- Focus management for interactive elements
- Current step clearly indicated for all users
- High contrast mode supported

### Common Patterns
```
Linear Flow:     Step 1 → Step 2 → Step 3 → Complete
Non-Linear:      Step 1 ↔ Step 2 ↔ Step 3 (any order)
Conditional:     Step 1 → Step 2a or 2b → Step 3
Branching:       Step 1 → Multiple paths → Converge
```

### Migration Path
```
NumberOnlyStepper → BasicStepper → ControlledStepper → LoadingStateStepper
    (33 LoC)         (33 LoC)        (58 LoC)           (72 LoC)
```

Start simple, add features based on user feedback and actual needs!