# Notification Component

Notifications give users feedback about actions, system states, or important information. Use them for success confirmations, error messages, warnings, or any message that needs user attention. They work as temporary popups (toasts) that slide in and auto-dismiss, or as persistent messages embedded in your UI.

Toasts are perfect for non-blocking feedback after user actions, while static notifications work better for important messages that shouldn't disappear. Alerts are for critical messages that block interaction, but notifications let users continue working. Banners stretch across the top of pages, but notifications can appear anywhere. Pick from 22 styles below based on your needs: popup vs embedded, simple vs complex content, and interaction type.

## Which 'Notification' variant do you need?

### Want a popup that slides in and disappears?

**Just need a basic toast setup:**
- Using shadcn/ui already? Use `ShadcnToast`
- Want beautiful animations out-of-the-box? Use `SonnerToast`

**Need advanced toast features:**
- Want a custom-designed toast? Use `CustomSonnerToast`
- Need a visual timer showing time left? Use `ProgressTimerToast`

### Need a persistent message that stays on screen?

**Just a simple one-line message:**
- Confirming something worked? Use `MinimalSuccessNotification`
- Showing an error? Use `MinimalErrorNotification`
- Warning about something? Use `MinimalWarningNotification`
- Just informational? Use `MinimalInfoNotification`

**Want to add a clickable action:**

*Need a button:*
- General action (like undo)? Use `ActionNotification`
- Success with View/Undo pattern? Use `InlineActionNotification`

*Prefer a link arrow:*
- General link? Use `LinkNotification`
- Error with help link? Use `ErrorLinkNotification`
- Info with learn more? Use `InfoLinkNotification`
- Warning with action link? Use `WarningLinkNotification`

**Need title, description, and button together:**
- Success message? Use `DescriptiveNotification`
- Informational content? Use `InfoDescriptiveNotification`
- Warning that needs action? Use `WarningDescriptiveNotification`
- Error with details? Use `ErrorDescriptiveNotification`

### Have a special use case?

**Privacy and consent:**
- Cookie banner with accept/decline? Use `CookieConsentNotification`

**Updates and events:**
- Software update available? Use `UpdateNotification`
- Live event reminder? Use `LiveEventNotification`

**Social features:**
- User mentioned or tagged? Use `UserMentionNotification`

## 📊 COMPLETE COMPONENT MATRIX

### Toast Library Integrations

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ShadcnToast** (read if you plan to implement: registry/default/components/comp-297.tsx) | 25 | Built-in toast hook, minimal setup | Projects using shadcn/ui |
| **SonnerToast** (read if you plan to implement: registry/default/components/comp-299.tsx) | 25 | Sonner library, rich animations | Modern apps wanting polish |
| **CustomSonnerToast** (read if you plan to implement: registry/default/components/comp-300.tsx) | 59 | Custom toast content with Sonner | Branded toast experiences |
| **ProgressTimerToast** (read if you plan to implement: registry/default/components/comp-298.tsx) | **189** | Auto-dismiss timer with visual progress | Time-sensitive notifications |

### Minimal Notifications (Single Line)

| Component | LoC | Visual Style | Best For |
|-----------|:---:|--------------|----------|
| **MinimalSuccessNotification** (read if you plan to implement: registry/default/components/comp-281.tsx) | 33 | Green check icon + text | Quick success confirmations |
| **MinimalErrorNotification** (read if you plan to implement: registry/default/components/comp-280.tsx) | 33 | Red success icon + text (quirky choice) | Simple error messages |
| **MinimalWarningNotification** (read if you plan to implement: registry/default/components/comp-279.tsx) | 33 | Amber triangle icon + text | Warning alerts |
| **MinimalInfoNotification** (read if you plan to implement: registry/default/components/comp-282.tsx) | 33 | Blue info icon + text | Informational messages |

### Interactive Notifications

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ActionNotification** (read if you plan to implement: registry/default/components/comp-287.tsx) | 36 | Icon + text + action button | Undo actions, confirmations |
| **CookieConsentNotification** (read if you plan to implement: registry/default/components/comp-293.tsx) | 40 | Title + description + dual buttons | Privacy notices, consents |
| **LiveEventNotification** (read if you plan to implement: registry/default/components/comp-296.tsx) | 40 | Icon badge + time info + button | Event reminders, schedules |
| **LinkNotification** (read if you plan to implement: registry/default/components/comp-285.tsx) | 43 | Icon + text + arrow link | Navigate to details |
| **ErrorLinkNotification** (read if you plan to implement: registry/default/components/comp-284.tsx) | 43 | Error icon + text + link | Error with help link |
| **InfoLinkNotification** (read if you plan to implement: registry/default/components/comp-286.tsx) | 43 | Info icon + text + link | Info with learn more |
| **WarningLinkNotification** (read if you plan to implement: registry/default/components/comp-283.tsx) | 43 | Warning icon + text + link | Warning with action link |
| **InlineActionNotification** (read if you plan to implement: registry/default/components/comp-288.tsx) | 44 | Success message + View/Undo actions | Email sent, post published |

### Complex Content Notifications

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **DescriptiveNotification** (read if you plan to implement: registry/default/components/comp-291.tsx) | 43 | Icon + title + description + button | Detailed success messages |
| **InfoDescriptiveNotification** (read if you plan to implement: registry/default/components/comp-292.tsx) | 46 | Info icon + title + description + button | Educational notifications |
| **UpdateNotification** (read if you plan to implement: registry/default/components/comp-294.tsx) | 46 | Icon badge + title + description + buttons | Software updates, features |
| **WarningDescriptiveNotification** (read if you plan to implement: registry/default/components/comp-289.tsx) | 46 | Warning + title + description + button | Action required alerts |
| **ErrorDescriptiveNotification** (read if you plan to implement: registry/default/components/comp-290.tsx) | 46 | Error + title + description + button | Detailed error messages |
| **UserMentionNotification** (read if you plan to implement: registry/default/components/comp-295.tsx) | 59 | Avatar + user action + buttons | Social interactions |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 SonnerToast (comp-299)

**Description**: The simplest toast notification using Sonner library. Click button to show animated toast with action.

**When to Use**:
- Quick feedback for user actions
- Modern applications wanting smooth animations
- When you need out-of-the-box toast functionality
- Projects prioritizing minimal setup time
- Non-blocking user notifications

**Implementation After Refactoring**:
```tsx
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

const showNotification = () => {
  toast("Your request was completed!", {
    description: "It was a long journey, but we made it!",
    action: {
      label: "Undo",
      onClick: () => handleUndo(),
    },
  })
}

<Button onClick={showNotification}>Show notification</Button>
```

**Props to Implement**: `message`, `description`, `actionLabel`, `onAction`, `duration`, `position`

---

### 🔷 ActionNotification (comp-287)

**Description**: Static notification with icon, message, and action button. The foundation for interactive notifications.

**When to Use**:
- Undo operations (delete, archive)
- Single action confirmations
- Fixed position notifications
- When toast libraries are overkill
- Custom notification systems

**Implementation After Refactoring**:
```tsx
import ActionNotification from '@/components/ActionNotification'

const [showNotification, setShowNotification] = useState(true)

<ActionNotification 
  icon={CircleCheckIcon}
  iconColor="text-emerald-500"
  message="You've made changes!"
  actionLabel="Undo"
  onAction={handleUndo}
  onClose={() => setShowNotification(false)}
  visible={showNotification}
/>
```

**Props to Implement**: `icon`, `iconColor`, `message`, `actionLabel`, `onAction`, `onClose`, `visible`

---

### 🔷 ProgressTimerToast (comp-298)

**Description**: Advanced toast with visual progress timer, pause on hover, and custom styling. Most complex notification component.

**When to Use**:
- Time-sensitive notifications
- When visual feedback of time remaining is important
- Advanced toast requirements
- Custom toast animations
- Notifications that auto-dismiss but can be interacted with

**Implementation After Refactoring**:
```tsx
import ProgressTimerToast from '@/components/ProgressTimerToast'

<ProgressTimerToast 
  title="Your request was completed!"
  description="It demonstrates that the task has been processed."
  duration={5000}
  onAction={handleUndo}
  actionLabel="Undo changes"
  progressColor="bg-emerald-500"
/>
```

**Props to Implement**: `title`, `description`, `duration`, `onAction`, `actionLabel`, `progressColor`, `icon`

---

### 🔷 CookieConsentNotification (comp-293)

**Description**: Privacy notification with title, description, and Accept/Decline buttons.

**When to Use**:
- Cookie consent banners
- Privacy policy updates
- Terms acceptance
- GDPR compliance
- Any dual-choice notification

**Implementation After Refactoring**:
```tsx
import CookieConsentNotification from '@/components/CookieConsentNotification'

<CookieConsentNotification 
  title="We Value Your Privacy 🍪"
  description="We use cookies to improve your experience, and show personalized content."
  onAccept={handleAcceptCookies}
  onDecline={handleDeclineCookies}
  onClose={handleClose}
/>
```

**Props to Implement**: `title`, `description`, `onAccept`, `onDecline`, `onClose`, `acceptLabel`, `declineLabel`

---

### 🔷 UserMentionNotification (comp-295)

**Description**: Social notification with user avatar, mention text, and action buttons.

**When to Use**:
- User mentions or tags
- Collaboration notifications
- Social platform interactions
- Team activity alerts
- Any notification involving user identity

**Implementation After Refactoring**:
```tsx
import UserMentionNotification from '@/components/UserMentionNotification'

<UserMentionNotification 
  user={{
    name: "Mary Palmer",
    avatar: "/avatar-32-01.jpg"
  }}
  action="mentioned you in"
  target="project-campaign-02"
  targetUrl="#"
  timestamp="2 min ago"
  onAccept={handleAccept}
  onDecline={handleDecline}
/>
```

**Props to Implement**: `user`, `action`, `target`, `targetUrl`, `timestamp`, `onAccept`, `onDecline`

---

### 🔷 InlineActionNotification (comp-288)

**Description**: Success message with inline text actions (View · Undo pattern).

**When to Use**:
- Email sent confirmations
- Post published notifications
- File uploaded messages
- Any success with quick actions
- When buttons feel too heavy

**Implementation After Refactoring**:
```tsx
import InlineActionNotification from '@/components/InlineActionNotification'

<InlineActionNotification 
  message="Message sent"
  actions={[
    { label: "View", onClick: handleView },
    { label: "Undo", onClick: handleUndo }
  ]}
  onClose={handleClose}
/>
```

**Props to Implement**: `message`, `actions`, `icon`, `iconColor`, `onClose`

---

## 🎨 SPECIALIZED VARIANTS

### MinimalInfoNotification (comp-282)
```tsx
// Simplest info notification - icon inline with text
<MinimalInfoNotification message="Just a quick note!" />
```

### MinimalErrorNotification (comp-280)
```tsx
// Uses success icon with red color (quirky design choice)
<MinimalErrorNotification message="An error occurred!" />
```

### MinimalWarningNotification (comp-279)
```tsx
// Warning with amber triangle icon
<MinimalWarningNotification message="Some information is missing!" />
```

### MinimalSuccessNotification (comp-281)
```tsx
// Success confirmation - green check icon
<MinimalSuccessNotification message="Completed successfully!" />
```

### UpdateNotification (comp-294)
```tsx
// Software update notification with icon badge
<UpdateNotification 
  version="1.4"
  description="Bug fixes and performance improvements"
  onInstall={handleInstall}
/>
```

### LiveEventNotification (comp-296)
```tsx
// Event reminder with countdown and notify button
<LiveEventNotification 
  title="Live in 27 hours"
  dateTime="November 20 at 8:00 PM"
  onNotify={handleNotify}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Toast Notification
```tsx
// Start here for simple feedback
import { toast } from "sonner"

toast("Operation completed successfully!")
```

### Interactive Notification
```tsx
// For undo/redo operations
import ActionNotification from '@/components/ActionNotification'

<ActionNotification 
  message="Changes saved"
  actionLabel="Undo"
  onAction={handleUndo}
/>
```

### Complex Notification
```tsx
// For detailed messages with actions
import DescriptiveNotification from '@/components/DescriptiveNotification'

<DescriptiveNotification 
  title="Request completed"
  description="Your data has been processed successfully"
  actionLabel="View Details"
  onAction={handleViewDetails}
/>
```

### Social Notification
```tsx
// For user interactions
import UserMentionNotification from '@/components/UserMentionNotification'

<UserMentionNotification 
  user={mentionUser}
  action="replied to your comment"
  target="Design Discussion"
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 35 LoC**: Minimal notifications, single line messages (MinimalSuccessNotification, MinimalErrorNotification)
- **35-45 LoC**: Standard notifications with actions (ActionNotification, LinkNotification)
- **45-60 LoC**: Complex content with multiple elements (DescriptiveNotification, UserMentionNotification)
- **60-190 LoC**: Advanced features like progress timers (CustomSonnerToast, ProgressTimerToast)

**Why LoC matters**: Notification components should be lightweight and performant. Smaller components load faster and are easier to customize for specific use cases.

### Notification Types & Patterns

Notifications follow consistent patterns based on severity and purpose:

| Type | Icon Color | Common Uses | Dismissal |
|------|------------|-------------|-----------|
| **Success** | Green (emerald-500) | Confirmations, completions | Auto-dismiss or close button |
| **Error** | Red (red-500) | Failures, problems | Requires user acknowledgment |
| **Warning** | Amber (amber-500) | Cautions, missing data | Close button |
| **Info** | Blue (blue-500) | Tips, updates | Auto-dismiss or close button |

### Library Selection Guide

**Use Sonner when:**
- You want beautiful animations out of the box
- Position control is important (top, bottom, corners)
- You need stacking behavior for multiple toasts
- Rich customization through simple API

**Use shadcn/ui Toast when:**
- You're already using shadcn/ui components
- You need full control over toast styling
- You want to integrate with existing theme system
- Accessibility is a top priority

**Use Static Components when:**
- You need fixed-position notifications
- Toast libraries feel like overkill
- You're building a custom notification system
- You need server-side rendering without hydration issues

### Performance Tips
1. Use toast libraries for transient notifications (auto-dismiss)
2. Use static components for persistent notifications
3. Lazy load complex notification components
4. Avoid too many concurrent notifications (max 3-5)
5. Implement notification queuing for better UX

### Accessibility
- All notifications include proper ARIA labels
- Close buttons have descriptive labels
- Screen readers announce new notifications
- Keyboard navigation supported (Escape to close)
- High contrast mode compatible
- Auto-dismiss can be paused on hover/focus

### Common Implementation Patterns

**1. Global Notification Provider**
```tsx
// App root
<ToastProvider>
  <App />
</ToastProvider>

// Anywhere in app
const { toast } = useToast()
toast({ message: "Hello!" })
```

**2. Fixed Position Notifications**
```tsx
// Add positioning classes
<div className="fixed bottom-4 right-4 z-50">
  <ActionNotification {...props} />
</div>
```

**3. Notification Queue**
```tsx
const [notifications, setNotifications] = useState([])

// Add notification
setNotifications(prev => [...prev, newNotification])

// Remove after timeout
setTimeout(() => {
  setNotifications(prev => prev.filter(n => n.id !== id))
}, 5000)
```

### Migration Path
```
MinimalNotification → ActionNotification → DescriptiveNotification → Toast Library
     (33 LoC)            (36 LoC)             (43-46 LoC)         (25-189 LoC)
```

Start with static components for simple needs, migrate to toast libraries as requirements grow!