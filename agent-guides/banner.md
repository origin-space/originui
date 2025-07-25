# Banner Component

Banners grab attention at the top of your page with important messages, announcements, or calls-to-action. Use them for cookie consent, sales promotions, feature launches, or system updates. They work great when you need site-wide visibility, temporary notifications, or legal compliance notices.

Modals interrupt the user flow but banners sit politely at the top. Toast notifications appear briefly then vanish, but banners stay visible. Hero sections are for marketing content, but banners handle time-sensitive system messages. Pick from 12 styles below based on your needs: dismissible or persistent, simple links or rich content, single actions or multiple buttons, and special features like countdowns or loading states.

## Which 'Banner' variant do you need?

### Need to handle legal compliance?
- Cookie consent with Accept/Decline buttons? Use `CookieConsentBanner`

### Running a time-sensitive promotion?
- Flash sale with live countdown timer? Use `CountdownTimerBanner`

### Prompting app updates or downloads?
- Update process with loading spinner? Use `LoadingStateBanner`
- Download prompt with two action buttons? Use `DownloadPromptBanner`

### Just need a simple persistent announcement?

**With emoji + text + link:**
- Want a subtle bottom border separator? Use `SimpleBorderBanner`
- Prefer animated arrow on hover? Use `AnnouncementBanner`

**With icon + text + link:**
- Specifically for upgrade prompts? Use `UpgradeBanner`
- General info with arrow indicator? Use `InfoLinkBanner`

### Want a dismissible notification?

**Need just one action:**
- Centered message with rounded button? Use `CenteredActionBanner`
- Left-aligned with icon and arrow link? Use `DismissibleLinkBanner`

**Need two actions or rich content:**
- Two buttons for binary choices? Use `DualActionBanner`
- Premium look with title + description? Use `RichContentBanner`

## 📊 COMPLETE COMPONENT MATRIX

### Static Simple Banners

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SimpleBorderBanner** (read if you plan to implement: registry/default/components/comp-311.tsx) | 14 | Emoji + text + link, bottom border | Newsletter signups, promotions |
| **AnnouncementBanner** (read if you plan to implement: registry/default/components/comp-302.tsx) | 19 | Emoji + text + hover arrow effect | Feature announcements, updates |
| **UpgradeBanner** (read if you plan to implement: registry/default/components/comp-303.tsx) | 20 | Icon + text + upgrade link | Plan upgrades, premium features |
| **CookieConsentBanner** (read if you plan to implement: registry/default/components/comp-301.tsx) | 21 | Accept/Decline buttons, responsive | GDPR compliance, legal notices |
| **InfoLinkBanner** (read if you plan to implement: registry/default/components/comp-304.tsx) | 31 | Icon + text + arrow link, responsive | General information, learn more |

### Dismissible Interactive Banners

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **CenteredActionBanner** (read if you plan to implement: registry/default/components/comp-308.tsx) | 49 | Centered layout, single rounded button | Single call-to-action prompts |
| **DismissibleLinkBanner** (read if you plan to implement: registry/default/components/comp-305.tsx) | 52 | Icon + text + arrow link + dismiss | Informational notifications |
| **DualActionBanner** (read if you plan to implement: registry/default/components/comp-306.tsx) | 52 | Icon + two action buttons + dismiss | Feature launches, app updates |
| **DownloadPromptBanner** (read if you plan to implement: registry/default/components/comp-307.tsx) | 52 | Download + Learn more buttons + dismiss | App downloads, file releases |
| **LoadingStateBanner** (read if you plan to implement: registry/default/components/comp-312.tsx) | 53 | Interactive download with loading states | App updates, version management |
| **RichContentBanner** (read if you plan to implement: registry/default/components/comp-309.tsx) | 55 | Circular icon, title/description + dismiss | Product launches, major features |

### Advanced Interactive Banners

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **CountdownTimerBanner** (read if you plan to implement: registry/default/components/comp-310.tsx) | **132** | Real-time countdown, sale promotion | Flash sales, limited-time offers |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 SimpleBorderBanner (comp-311)

**Description**: The simplest banner with emoji, text, and link. Features a clean bottom border separator.

**When to Use**:
- Newsletter signup prompts
- Simple promotional messages
- E-commerce discount offers
- Basic call-to-action banners
- When you need minimal visual impact

**Implementation After Refactoring**:
```tsx
import SimpleBorderBanner from '@/components/SimpleBorderBanner'

<SimpleBorderBanner 
  emoji="📫"
  message="Subscribe to our newsletter and get 10% off your first order!"
  linkText="Subscribe"
  linkHref="/newsletter"
  showBorder={true}
/>
```

**Props to Implement**: `emoji`, `message`, `linkText`, `linkHref`, `showBorder`

---

### 🔷 CookieConsentBanner (comp-301)

**Description**: GDPR-compliant cookie consent banner with Accept/Decline buttons and responsive layout.

**When to Use**:
- Legal compliance (GDPR, CCPA)
- Cookie consent requirements
- Privacy policy notifications
- Terms of service updates
- Any mandatory user consent flows

**Implementation After Refactoring**:
```tsx
import CookieConsentBanner from '@/components/CookieConsentBanner'

<CookieConsentBanner 
  message="We use cookies to improve your experience, analyze site usage, and show personalized content."
  onAccept={handleAcceptCookies}
  onDecline={handleDeclineCookies}
  position="fixed" // or "static"
  className="bottom-4 inset-x-4" // for fixed positioning
/>
```

**Props to Implement**: `message`, `onAccept`, `onDecline`, `position`, `className`

---

### 🔷 DualActionBanner (comp-306)

**Description**: Dismissible banner with icon, responsive layout, and two action buttons for different user choices.

**When to Use**:
- Feature launches with multiple actions
- App updates with Download/Learn more
- Product announcements
- Onboarding flows
- When users need primary and secondary actions

**Implementation After Refactoring**:
```tsx
import DualActionBanner from '@/components/DualActionBanner'
import { EclipseIcon } from 'lucide-react'

const [isVisible, setIsVisible] = useState(true)

<DualActionBanner 
  isVisible={isVisible}
  onDismiss={() => setIsVisible(false)}
  icon={EclipseIcon}
  message="It's live and ready to use! Start exploring the latest addition to your toolkit."
  primaryAction={{
    label: "Download",
    onClick: handleDownload
  }}
  secondaryAction={{
    label: "Learn more",
    onClick: handleLearnMore,
    variant: "outline"
  }}
/>
```

**Props to Implement**: `isVisible`, `onDismiss`, `icon`, `message`, `primaryAction`, `secondaryAction`

---

### 🔷 RichContentBanner (comp-309)

**Description**: Premium banner with circular icon background, title/description structure, and rich visual hierarchy.

**When to Use**:
- Major product launches
- Premium feature announcements
- Important company updates
- High-impact marketing campaigns
- When visual prominence is needed

**Implementation After Refactoring**:
```tsx
import RichContentBanner from '@/components/RichContentBanner'
import { RocketIcon } from 'lucide-react'

const [isVisible, setIsVisible] = useState(true)

<RichContentBanner 
  isVisible={isVisible}
  onDismiss={() => setIsVisible(false)}
  icon={RocketIcon}
  title="Boost your experience with Origin UI"
  description="The new feature is live! Try it out and let us know what you think."
  action={{
    label: "Try now",
    onClick: handleTryNow
  }}
/>
```

**Props to Implement**: `isVisible`, `onDismiss`, `icon`, `title`, `description`, `action`

---

### 🔷 LoadingStateBanner (comp-312)

**Description**: Interactive banner with loading states, perfect for app updates and download processes.

**When to Use**:
- App version updates
- File downloads
- Installation processes
- Any async operations with progress
- When user feedback during loading is critical

**Implementation After Refactoring**:
```tsx
import LoadingStateBanner from '@/components/LoadingStateBanner'

const [isLoading, setIsLoading] = useState(false)

const handleUpdate = async () => {
  setIsLoading(true)
  await performUpdate()
  setIsLoading(false)
}

<LoadingStateBanner 
  version="v2.1.0"
  message="New features and improvements available"
  isLoading={isLoading}
  onAction={handleUpdate}
  loadingText="Updating..."
  actionText="Update now"
/>
```

**Props to Implement**: `version`, `message`, `isLoading`, `onAction`, `loadingText`, `actionText`

---

### 🔷 CountdownTimerBanner (comp-310)

**Description**: Advanced banner with real-time countdown timer for time-sensitive promotions and sales.

**When to Use**:
- Flash sales and limited offers
- Event countdown displays
- Black Friday/Cyber Monday promotions
- Product launch countdowns
- Any time-sensitive marketing

**Implementation After Refactoring**:
```tsx
import CountdownTimerBanner from '@/components/CountdownTimerBanner'
import { TicketPercent } from 'lucide-react'

const [isVisible, setIsVisible] = useState(true)
const saleEndDate = new Date('2024-12-31T23:59:59')

<CountdownTimerBanner 
  isVisible={isVisible}
  onDismiss={() => setIsVisible(false)}
  icon={TicketPercent}
  title="Black Friday Sale!"
  description="It kicks off today and is available for just 24 hours—don't miss out!"
  endDate={saleEndDate}
  onAction={handlePurchase}
  actionText="Buy now"
  showDays={true}
/>
```

**Props to Implement**: `isVisible`, `onDismiss`, `icon`, `title`, `description`, `endDate`, `onAction`, `actionText`, `showDays`

---

## 🎨 SPECIALIZED VARIANTS

### AnnouncementBanner (comp-302)
```tsx
// Feature announcement with hover effect
<AnnouncementBanner 
  emoji="✨"
  message="Introducing transactional and marketing emails"
  linkHref="/email-features"
/>
```

### UpgradeBanner (comp-303)
```tsx
// Plan upgrade prompt with icon
<UpgradeBanner 
  icon={EclipseIcon}
  message="Get the most out of your app with real-time updates and analytics"
  upgradeHref="/upgrade"
/>
```

### CenteredActionBanner (comp-308)
```tsx
// Centered layout with single action
<CenteredActionBanner 
  message="It's live and ready to use! Start exploring the latest addition to your toolkit."
  actionText="Learn more"
  onAction={handleAction}
  buttonStyle="rounded-full"
/>
```

### InfoLinkBanner (comp-304)
```tsx
// Informational banner with arrow link
<InfoLinkBanner 
  icon={Eclipse}
  message="We just added something awesome to make your experience even better."
  linkText="Learn more"
  linkHref="/updates"
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Announcement
```tsx
// Start here for simple notifications
import SimpleBorderBanner from '@/components/SimpleBorderBanner'

<SimpleBorderBanner 
  emoji="🎉"
  message="New feature available!"
  linkText="Check it out"
  linkHref="/features"
/>
```

### Cookie Compliance
```tsx
// For legal compliance needs
import CookieConsentBanner from '@/components/CookieConsentBanner'

<CookieConsentBanner 
  message="We use cookies to enhance your experience."
  onAccept={acceptCookies}
  onDecline={declineCookies}
/>
```

### Feature Launch
```tsx
// For major product announcements
import RichContentBanner from '@/components/RichContentBanner'

<RichContentBanner 
  icon={RocketIcon}
  title="New Dashboard is Here!"
  description="Experience our redesigned interface with improved performance."
  action={{ label: "Explore", onClick: handleExplore }}
/>
```

### Sales Campaign
```tsx
// For time-sensitive promotions
import CountdownTimerBanner from '@/components/CountdownTimerBanner'

<CountdownTimerBanner 
  title="Limited Time Offer!"
  description="50% off all premium plans"
  endDate={promotionEndDate}
  onAction={handlePurchase}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 25 LoC**: Simple static banners (SimpleBorderBanner, AnnouncementBanner, UpgradeBanner)
- **25-35 LoC**: Basic interactive banners (CookieConsentBanner, InfoLinkBanner)
- **45-55 LoC**: Dismissible banners with actions (DualActionBanner, LoadingStateBanner, RichContentBanner)
- **130+ LoC**: Advanced features with real-time updates (CountdownTimerBanner)

**Why LoC matters**: Banner complexity directly impacts:
- Implementation time and effort
- Maintenance requirements
- User experience consistency
- Performance overhead

### Component Composition
Banners share common building blocks:
- **Icons**: Lucide React icons for visual hierarchy
- **Buttons**: Shadcn/ui Button component for actions
- **State Management**: useState for dismissible behavior
- **Responsive Design**: Mobile-first responsive layouts
- **Accessibility**: ARIA labels and keyboard navigation

### Theme Patterns
Most banners follow consistent themes:
1. **Light Theme**: Cookie consent, app updates (clean, minimal)
2. **Dark Theme**: Announcements, promotions (prominent, attention-grabbing)
3. **Brand Consistency**: Use consistent spacing, typography, and color schemes

### Performance Tips
1. Start with the simplest banner that meets your needs
2. Use CSS-only animations instead of JavaScript when possible
3. Implement proper cleanup for timers and intervals
4. Lazy load banner content if not immediately visible
5. Consider banner fatigue - limit simultaneous banners

### Accessibility
- All banners include proper ARIA labels
- Keyboard navigation fully supported
- Screen reader optimized messaging
- Focus management for dismiss buttons
- High contrast mode compatible
- Touch targets meet minimum size requirements (44px)

### Banner Behavior Patterns
```
Display → User Action → State Change → Cleanup
    ↓         ↓             ↓           ↓
  Show     Click/Dismiss   Hide      Remove
```

Common patterns:
- **Auto-dismiss**: Timers for temporary messages
- **Persistent**: Critical notifications until manually dismissed
- **Session-based**: Show once per session using localStorage
- **Conditional**: Based on user state or feature flags

### Migration Path
```
SimpleBorderBanner → DualActionBanner → RichContentBanner → CountdownTimerBanner
     (14 LoC)           (52 LoC)           (55 LoC)           (132 LoC)
```

Start simple, add interactivity only when users need more engagement!