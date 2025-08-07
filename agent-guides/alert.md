# Alert Component

Alerts show important messages to users. Use them for success confirmations, error messages, warnings, or helpful information. They work great for form feedback, system notifications, or any message that needs user attention. Unlike toasts that disappear, alerts stay visible until dismissed or the condition changes.

Modals interrupt everything for critical actions, but alerts inform without blocking. Banners stretch across the top, but alerts fit inline with your content. Pick from 12 styles below based on urgency: subtle (neutral borders) or prominent (colored borders), and content type: simple messages, action links, or detailed lists.

## Which 'Alert' variant do you need?

### Just showing a simple one-line message?

**Want it subtle (neutral border, colored icon only)?**
- "Changes saved successfully" → Use `SimpleSuccessAlert`
- "Did you know you can..." → Use `SimpleInfoAlert`
- "Please review your settings" → Use `SimpleWarningAlert`
- "Unable to connect to server" → Use `SimpleErrorAlert`

**Need it to grab attention (colored border + text)?**
- "Payment processed!" → Use `ColoredSuccessAlert`
- "New features available!" → Use `ColoredInfoAlert`
- "Account needs verification" → Use `ColoredWarningAlert`
- "Critical: Action failed" → Use `ColoredErrorAlert`

### Warning needs a clickable action?

**How urgent is it?**
- "Complete your profile" (can wait) → Use `WarningAlertWithLink`
- "Payment method expires tomorrow!" (urgent) → Use `ColoredWarningWithLink`

### Multiple validation errors to show?

**How critical are the errors?**
- Form has several issues (fixable) → Use `ErrorAlertWithList`
- Security requirements failed (critical) → Use `ColoredErrorWithList`

## 📊 COMPLETE COMPONENT MATRIX

### Simple Alert Components

| Component | LoC | Visual Style | Best For |
|-----------|:---:|--------------|----------|
| **SimpleSuccessAlert** (read if you plan to implement: registry/default/components/comp-271.tsx) | 17 | Neutral border, emerald icon | Subtle success feedback |
| **SimpleInfoAlert** (read if you plan to implement: registry/default/components/comp-272.tsx) | 17 | Neutral border, blue icon | General information |
| **SimpleWarningAlert** (read if you plan to implement: registry/default/components/comp-267.tsx) | 17 | Neutral border, amber icon | Mild warnings |
| **SimpleErrorAlert** (read if you plan to implement: registry/default/components/comp-269.tsx) | 17 | Neutral border, red icon | Subtle error messages |
| **ColoredInfoAlert** (read if you plan to implement: registry/default/components/comp-274.tsx) | 17 | Blue border + text | Important information |
| **ColoredSuccessAlert** (read if you plan to implement: registry/default/components/comp-275.tsx) | 17 | Green border + text | Prominent success feedback |
| **ColoredWarningAlert** (read if you plan to implement: registry/default/components/comp-268.tsx) | 17 | Amber border + text | Important warnings |
| **ColoredErrorAlert** (read if you plan to implement: registry/default/components/comp-270.tsx) | 17 | Red border + text | Critical error messages |

### Interactive & Complex Alerts

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ErrorAlertWithList** (read if you plan to implement: registry/default/components/comp-277.tsx) | 25 | Title + bullet list, neutral style | Form validation errors |
| **ColoredErrorWithList** (read if you plan to implement: registry/default/components/comp-278.tsx) | 25 | Title + bullet list, red theme | Critical error details |
| **WarningAlertWithLink** (read if you plan to implement: registry/default/components/comp-273.tsx) | 27 | Action link with hover effect, neutral | Actionable warnings |
| **ColoredWarningWithLink** (read if you plan to implement: registry/default/components/comp-276.tsx) | 27 | Action link with hover effect, amber theme | Urgent actionable warnings |

### Alert Types & Semantics

| Type | Icon | Neutral Color | Themed Color | Use Cases |
|------|------|---------------|--------------|-----------|
| **Success** | CircleCheckIcon | Emerald icon only | Green border + text | Confirmations, completions |
| **Info** | InfoIcon | Blue icon only | Blue border + text | Tips, additional context |
| **Warning** | TriangleAlert | Amber icon only | Amber border + text | Cautions, missing data |
| **Error** | CircleAlert | Red icon only | Red border + text | Failures, invalid input |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 SimpleSuccessAlert (comp-271)

**Description**: Basic success alert with neutral border and emerald check icon. The most subtle way to show success feedback.

**When to Use**:
- Form submission confirmations
- Operation completed successfully
- Background process finished
- When you need subtle success feedback
- Non-critical positive updates

**Implementation After Refactoring**:
```tsx
import SimpleSuccessAlert from '@/components/SimpleSuccessAlert'

const SuccessExample = () => {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <SimpleSuccessAlert 
      message="Operation completed successfully!"
      visible={showAlert}
      onClose={() => setShowAlert(false)}
    />
  )
}
```

**Props to Implement**: `message`, `visible`, `onClose`, `icon`, `className`

---

### 🔷 ColoredErrorAlert (comp-270)

**Description**: High-visibility error alert with red border and text matching the icon color. Maximum visual impact for critical errors.

**When to Use**:
- Critical system errors
- Failed payment processing
- Security warnings
- Data loss prevention
- When immediate attention is required

**Implementation After Refactoring**:
```tsx
import ColoredErrorAlert from '@/components/ColoredErrorAlert'

const ErrorExample = () => {
  return (
    <ColoredErrorAlert 
      message="Payment processing failed!"
      type="error"
      dismissible={true}
      onDismiss={handleErrorDismiss}
    />
  )
}
```

**Props to Implement**: `message`, `type`, `dismissible`, `onDismiss`, `className`

---

### 🔷 WarningAlertWithLink (comp-273)

**Description**: Warning alert with an actionable link featuring hover animation. Neutral styling keeps focus on the action.

**When to Use**:
- Missing user profile information
- Configuration incomplete
- Account verification needed
- When users can fix the issue immediately
- Actionable warnings with clear next steps

**Implementation After Refactoring**:
```tsx
import WarningAlertWithLink from '@/components/WarningAlertWithLink'

const ActionableWarning = () => {
  return (
    <WarningAlertWithLink 
      message="Some information is missing!"
      linkText="Complete Profile"
      linkHref="/profile/edit"
      onLinkClick={handleProfileEdit}
    />
  )
}
```

**Props to Implement**: `message`, `linkText`, `linkHref`, `onLinkClick`, `linkIcon`

---

### 🔷 ErrorAlertWithList (comp-277)

**Description**: Detailed error alert with title and bullet list for multiple validation issues. Neutral border keeps it less overwhelming.

**When to Use**:
- Form validation with multiple errors
- API response with multiple issues
- Password requirement violations
- File upload validation errors
- Complex error scenarios needing explanation

**Implementation After Refactoring**:
```tsx
import ErrorAlertWithList from '@/components/ErrorAlertWithList'

const ValidationErrors = () => {
  const errors = [
    "Minimum 8 characters",
    "Include a special character",
    "Must contain uppercase letter"
  ]

  return (
    <ErrorAlertWithList 
      title="Password does not meet requirements:"
      items={errors}
      type="error"
      showIcon={true}
    />
  )
}
```

**Props to Implement**: `title`, `items`, `type`, `showIcon`, `className`

---

### 🔷 ColoredWarningWithLink (comp-276)

**Description**: High-visibility warning alert with amber theming and action link. Maximum urgency for actionable warnings.

**When to Use**:
- Account suspension warnings
- Payment method expiring
- Security vulnerabilities
- Critical missing information
- Urgent actionable items

**Implementation After Refactoring**:
```tsx
import ColoredWarningWithLink from '@/components/ColoredWarningWithLink'

const UrgentWarning = () => {
  return (
    <ColoredWarningWithLink 
      message="Your payment method expires soon!"
      linkText="Update Payment"
      linkHref="/billing/payment-methods"
      urgency="high"
    />
  )
}
```

**Props to Implement**: `message`, `linkText`, `linkHref`, `urgency`, `onAction`

---

### 🔷 ColoredInfoAlert (comp-274)

**Description**: Blue-themed informational alert for important announcements and tips.

**When to Use**:
- Feature announcements
- Important system updates
- Tips and helpful information
- Promotional messages
- Educational content

**Implementation After Refactoring**:
```tsx
import ColoredInfoAlert from '@/components/ColoredInfoAlert'

const InfoAnnouncement = () => {
  return (
    <ColoredInfoAlert 
      message="New features available in your dashboard!"
      persistent={true}
      showIcon={true}
    />
  )
}
```

**Props to Implement**: `message`, `persistent`, `showIcon`, `onLearnMore`

---

## 🎨 STYLING VARIANTS

### Neutral Border Alerts
```tsx
// Subtle styling with colored icon only
<SimpleSuccessAlert message="Task completed" />
<SimpleWarningAlert message="Check your settings" />
<SimpleErrorAlert message="Something went wrong" />
<SimpleInfoAlert message="Here's a helpful tip" />
```

### Colored Border Alerts
```tsx
// Full color theming for emphasis
<ColoredSuccessAlert message="Payment successful!" />
<ColoredWarningAlert message="Account needs attention" />
<ColoredErrorAlert message="Critical error occurred" />
<ColoredInfoAlert message="Important announcement" />
```

### Interactive Alerts
```tsx
// With actionable elements
<WarningAlertWithLink 
  message="Profile incomplete" 
  linkText="Complete Now" 
/>

<ErrorAlertWithList 
  title="Validation failed:"
  items={["Email required", "Password too short"]}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Notification
```tsx
// Start here for simple feedback
import SimpleSuccessAlert from '@/components/SimpleSuccessAlert'

<SimpleSuccessAlert 
  message="Changes saved successfully!"
/>
```

### Form Validation
```tsx
// For detailed error feedback
import ErrorAlertWithList from '@/components/ErrorAlertWithList'

<ErrorAlertWithList 
  title="Please fix the following errors:"
  items={validationErrors}
/>
```

### Actionable Warning
```tsx
// When users need to take action
import WarningAlertWithLink from '@/components/WarningAlertWithLink'

<WarningAlertWithLink 
  message="Your trial expires in 3 days"
  linkText="Upgrade Now"
  linkHref="/upgrade"
/>
```

### Critical Error
```tsx
// For errors requiring immediate attention
import ColoredErrorAlert from '@/components/ColoredErrorAlert'

<ColoredErrorAlert 
  message="Payment processing failed"
  dismissible={false}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **17 LoC**: Simple inline alerts with icon + message
- **25 LoC**: Complex content with title + bullet lists
- **27 LoC**: Interactive alerts with action links + hover effects

**Why LoC matters**: All alert components are lightweight and performant. The complexity comes from content structure rather than code complexity.

### Alert Hierarchy & When to Use Each Style

**Neutral Border Alerts**: Use when you want to inform without being visually aggressive. Perfect for:
- Background notifications
- Subtle state changes
- Secondary information
- When the alert is not the primary focus

**Colored Border Alerts**: Use when you need the alert to grab attention. Perfect for:
- Critical errors or warnings
- Important announcements
- Primary user feedback
- When immediate action is needed

### Alert Type Selection Guide

**Use Success alerts for**:
- Completed actions (save, submit, update)
- Positive confirmations
- Achievement notifications

**Use Info alerts for**:
- Tips and helpful information
- Feature announcements
- Educational content
- Context-providing messages

**Use Warning alerts for**:
- Missing or incomplete information
- Non-critical issues that need attention
- Actionable items
- Preventive notifications

**Use Error alerts for**:
- Failed operations
- Validation errors
- System problems
- Security issues

### Performance Tips
1. Use simple inline alerts for basic notifications
2. Reserve complex alerts (with lists/links) for detailed feedback
3. Implement alert queuing for multiple simultaneous alerts
4. Consider auto-dismissal for non-critical alerts

### Accessibility
- All alerts include proper ARIA labels and roles
- Icons are marked `aria-hidden="true"` to avoid redundancy
- Semantic colors are supported by text content
- Keyboard navigation supported for interactive elements
- Screen reader announcements for dynamic alerts

### Content Guidelines
1. **Keep messages concise** - users scan quickly
2. **Use action-oriented language** - "Complete your profile" vs "Profile incomplete"
3. **Provide clear next steps** - especially for warnings and errors
4. **Avoid technical jargon** - use user-friendly language
5. **Be specific** - "Password must be 8+ characters" vs "Invalid password"

### Migration Path
```
SimpleAlert → ColoredAlert → AlertWithLink → AlertWithList
  (17 LoC)     (17 LoC)       (27 LoC)       (25 LoC)
```

Start with simple alerts, add visual emphasis or complexity only when needed!