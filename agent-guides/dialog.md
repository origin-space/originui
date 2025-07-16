# Dialog Component

Dialogs interrupt users with important messages or tasks that require immediate attention. They overlay your content, block all other interactions, and force users to focus on one thing. Use them for confirmations, forms, alerts, or any action that needs a deliberate response before continuing.

Modals work similarly but dialogs are more focused and task-oriented. Toasts show brief notifications without blocking, but dialogs demand action. Drawers slide in from edges for secondary tasks, but dialogs center attention on critical decisions. Pick from 21 styles below based on your needs: confirmations, user input, authentication, payments, or long content.

## Which 'Dialog' variant do you need?

### Just need a quick confirmation?

**Simple yes/no decisions:**
- Basic title and description only? Use `AlertDialog`
- Need a warning icon for dangerous actions? Use `AlertWithIcon`
- Require users to type exact text to confirm? Use `DeleteConfirmationDialog`

### Need to collect user input?

**Quick forms and feedback:**
- Collecting bug reports with helpful links? Use `FeedbackDialog`
- Want satisfaction ratings (0-8 scale)? Use `RatingDialog`
- Building an email list? Use `NewsletterDialog`

**User authentication:**
- Existing users signing in? Use `SignInDialog`
- New users creating accounts? Use `SignUpDialog`

### Handling payments or subscriptions?

- Taking credit card payments? Use `PaymentCardDialog`
- Full checkout with plan selection? Use `CheckoutDialog`
- Users upgrading/downgrading plans? Use `ChangePlanDialog`

### Need advanced interactions?

**Power user features:**
- Want command palette with Cmd+K? Use `CommandDialog`
- Building step-by-step tutorials? Use `OnboardingDialog`
- Need 4-digit verification codes? Use `OTPDialog`

**Team and profile management:**
- Bulk inviting team members with link sharing? Use `InviteMembersDialog`
- Full profile editor with avatar/cover uploads? Use `EditProfileDialog`

### Displaying long content?

**Need special scrolling behavior:**
- FAQ where title stays visible? Use `ScrollableWithStickyHeader`
- Terms where "Accept" button stays visible? Use `ScrollableWithStickyFooter`
- Want branded/custom scrollbar styling? Use `ScrollableCustom`
- Just need simple overflow scrolling? Use `ScrollableNative`

**Legal agreements with tracking:**
- Terms that track reading before enabling "I agree"? Use `TermsDialog`

## 📊 COMPLETE COMPONENT MATRIX

### Core Dialog Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **AlertDialog** (read if you plan to implement: registry/default/components/comp-313.tsx) | 36 | Basic confirmation with title/description | Simple yes/no decisions |
| **AlertWithIcon** (read if you plan to implement: registry/default/components/comp-314.tsx) | 46 | Alert with warning icon | Dangerous actions, deletions |
| **FeedbackDialog** (read if you plan to implement: registry/default/components/comp-322.tsx) | 51 | Textarea with helpful links | User feedback, bug reports |
| **RatingDialog** (read if you plan to implement: registry/default/components/comp-323.tsx) | 73 | 0-8 scale rating + feedback | User satisfaction surveys |
| **NewsletterDialog** (read if you plan to implement: registry/default/components/comp-321.tsx) | 78 | Email input with icon | Newsletter subscriptions |
| **DeleteConfirmationDialog** (read if you plan to implement: registry/default/components/comp-320.tsx) | 80 | Text verification required | Irreversible actions |
| **SignInDialog** (read if you plan to implement: registry/default/components/comp-326.tsx) | 97 | Email/password with remember me | User authentication |
| **SignUpDialog** (read if you plan to implement: registry/default/components/comp-325.tsx) | 101 | Full registration form | New user onboarding |

### Advanced Form Dialogs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **PaymentCardDialog** (read if you plan to implement: registry/default/components/comp-328.tsx) | 117 | Card input with validation | Payment collection |
| **CommandDialog** (read if you plan to implement: registry/default/components/comp-333.tsx) | 121 | Keyboard-triggered search | Power user features, shortcuts |
| **OnboardingDialog** (read if you plan to implement: registry/default/components/comp-332.tsx) | 122 | Multi-step with progress dots | User onboarding, tutorials |
| **OTPDialog** (read if you plan to implement: registry/default/components/comp-324.tsx) | 142 | 4-digit code input | Two-factor auth, verification |
| **InviteMembersDialog** (read if you plan to implement: registry/default/components/comp-327.tsx) | 166 | Dynamic email list + copy link | Team collaboration |
| **CheckoutDialog** (read if you plan to implement: registry/default/components/comp-329.tsx) | 167 | Payment form with plan selection | SaaS subscriptions |
| **ChangePlanDialog** (read if you plan to implement: registry/default/components/comp-330.tsx) | 169 | Radio cards with features list | Pricing upgrades |
| **EditProfileDialog** (read if you plan to implement: registry/default/components/comp-331.tsx) | **266** | Image upload + form fields | User profile management |

### Scrollable Content Dialogs

| Component | LoC | Visual Style / Feature | Best For |
|-----------|:---:|------------------------|----------|
| **ScrollableWithStickyHeader** (read if you plan to implement: registry/default/components/comp-317.tsx) | 154 | Fixed header, scrollable body | FAQs with title visible |
| **ScrollableNative** (read if you plan to implement: registry/default/components/comp-315.tsx) | 159 | Native browser scrollbar | Long content, simple needs |
| **ScrollableWithStickyFooter** (read if you plan to implement: registry/default/components/comp-318.tsx) | 159 | Scrollable body, fixed actions | Terms with actions visible |
| **ScrollableCustom** (read if you plan to implement: registry/default/components/comp-316.tsx) | 160 | Custom styled scrollbar | Branded experiences |
| **TermsDialog** (read if you plan to implement: registry/default/components/comp-319.tsx) | 179 | Scroll tracking for "I agree" | Legal agreements, terms |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 AlertDialog (comp-313)

**Description**: The simplest dialog for confirmations. Shows title, description, and Cancel/Okay buttons.

**When to Use**:
- Delete confirmations
- Save confirmations  
- Generic yes/no questions
- Simple warnings
- Default choice for basic dialogs

**Implementation After Refactoring**:
```tsx
import AlertDialog from '@/components/AlertDialog'

const [open, setOpen] = useState(false)

<AlertDialog 
  open={open}
  onOpenChange={setOpen}
  title="Are you sure?"
  description="Take a moment to review the details provided."
  onConfirm={() => handleDelete()}
  onCancel={() => setOpen(false)}
/>
```

**Props to Implement**: `open`, `onOpenChange`, `title`, `description`, `onConfirm`, `onCancel`, `confirmText`, `cancelText`

---

### 🔷 SignInDialog (comp-326)

**Description**: Complete sign-in form with email, password, remember me checkbox, and OAuth option.

**When to Use**:
- User authentication
- Account access
- Member-only areas
- When you need both traditional and social login
- Apps requiring user sessions

**Implementation After Refactoring**:
```tsx
import SignInDialog from '@/components/SignInDialog'

const [credentials, setCredentials] = useState({ email: '', password: '' })

<SignInDialog 
  onSubmit={handleSignIn}
  onGoogleSignIn={handleGoogleAuth}
  forgotPasswordUrl="/forgot-password"
  rememberMe={true}
  onRememberMeChange={setRememberMe}
/>
```

**Props to Implement**: `onSubmit`, `onGoogleSignIn`, `forgotPasswordUrl`, `rememberMe`, `onRememberMeChange`, `loading`

---

### 🔷 DeleteConfirmationDialog (comp-320)

**Description**: High-security confirmation requiring users to type exact text before proceeding.

**When to Use**:
- Deleting projects/accounts
- Irreversible actions
- High-stakes operations
- Preventing accidental clicks
- Enterprise security requirements

**Implementation After Refactoring**:
```tsx
import DeleteConfirmationDialog from '@/components/DeleteConfirmationDialog'

<DeleteConfirmationDialog 
  itemName="Origin UI"
  onConfirm={handleDelete}
  title="Final confirmation"
  description="This action cannot be undone."
  confirmText="Origin UI"
/>
```

**Props to Implement**: `itemName`, `onConfirm`, `title`, `description`, `confirmText`, `loading`

---

### 🔷 CommandDialog (comp-333)

**Description**: Keyboard-triggered command palette with search and grouped actions. Opens with Cmd/Ctrl+K.

**When to Use**:
- Power user features
- Quick navigation
- Global search
- Keyboard shortcuts
- Professional tools/IDEs

**Implementation After Refactoring**:
```tsx
import CommandDialog from '@/components/CommandDialog'

const commands = [
  {
    group: "Quick start",
    items: [
      { label: "New folder", icon: FolderPlusIcon, shortcut: "⌘N", onSelect: createFolder },
      { label: "Import document", icon: FileInputIcon, shortcut: "⌘I", onSelect: importDoc }
    ]
  }
]

<CommandDialog 
  commands={commands}
  placeholder="Type a command or search..."
  emptyMessage="No results found."
/>
```

**Props to Implement**: `commands`, `placeholder`, `emptyMessage`, `onSelect`, `searchable`

---

### 🔷 OnboardingDialog (comp-332)

**Description**: Multi-step dialog with progress dots, image header, and next/skip navigation.

**When to Use**:
- New user onboarding
- Feature tours
- Product walkthroughs
- Multi-step tutorials
- First-time setup flows

**Implementation After Refactoring**:
```tsx
import OnboardingDialog from '@/components/OnboardingDialog'

const steps = [
  {
    title: "Welcome to Origin UI",
    description: "Discover powerful components for your projects.",
    image: "/onboarding-1.png"
  },
  // ... more steps
]

<OnboardingDialog 
  steps={steps}
  onComplete={handleOnboardingComplete}
  onSkip={handleSkip}
  allowSkip={true}
/>
```

**Props to Implement**: `steps`, `onComplete`, `onSkip`, `allowSkip`, `currentStep`, `onStepChange`

---

### 🔷 PaymentCardDialog (comp-328)

**Description**: Credit card form with real-time validation, card type detection, and secure input handling.

**When to Use**:
- Payment collection
- Card updates
- Subscription setup
- E-commerce checkout
- Billing information

**Implementation After Refactoring**:
```tsx
import PaymentCardDialog from '@/components/PaymentCardDialog'

<PaymentCardDialog 
  onSubmit={handleCardSubmit}
  title="Update your card"
  description="Your new card will replace your current card."
  setAsDefault={true}
  loading={isProcessing}
/>
```

**Props to Implement**: `onSubmit`, `title`, `description`, `setAsDefault`, `loading`, `errors`

---

### 🔷 InviteMembersDialog (comp-327)

**Description**: Dynamic email list for inviting multiple team members, plus shareable invite link with copy button.

**When to Use**:
- Team invitations
- Workspace sharing
- Collaborative features
- Referral programs
- Multi-user onboarding

**Implementation After Refactoring**:
```tsx
import InviteMembersDialog from '@/components/InviteMembersDialog'

<InviteMembersDialog 
  onInvite={handleBulkInvite}
  inviteLink="https://app.com/invite/abc123"
  maxInvites={10}
  defaultEmails={['john@company.com']}
/>
```

**Props to Implement**: `onInvite`, `inviteLink`, `maxInvites`, `defaultEmails`, `loading`

---

### 🔷 EditProfileDialog (comp-331)

**Description**: Comprehensive profile editor with cover image, avatar upload, and form fields. The most complex dialog component.

**When to Use**:
- User profile editing
- Account settings
- Complex forms with media
- Multi-field updates
- Rich user profiles

**Implementation After Refactoring**:
```tsx
import EditProfileDialog from '@/components/EditProfileDialog'

<EditProfileDialog 
  user={currentUser}
  onSave={handleProfileUpdate}
  onAvatarChange={handleAvatarUpload}
  onCoverChange={handleCoverUpload}
  maxBioLength={180}
/>
```

**Props to Implement**: `user`, `onSave`, `onAvatarChange`, `onCoverChange`, `maxBioLength`, `loading`

---

### 🔷 TermsDialog (comp-319)

**Description**: Scrollable legal content that tracks reading progress and enables "I agree" only when fully read.

**When to Use**:
- Terms of service
- Privacy policies
- Legal agreements
- Compliance requirements
- Important notices requiring acknowledgment

**Implementation After Refactoring**:
```tsx
import TermsDialog from '@/components/TermsDialog'

<TermsDialog 
  content={termsContent}
  onAgree={handleAcceptTerms}
  title="Terms & Conditions"
  requireFullRead={true}
/>
```

**Props to Implement**: `content`, `onAgree`, `title`, `requireFullRead`, `sections`

---

## 🎨 SPECIALIZED VARIANTS

### FeedbackDialog (comp-322)
```tsx
// Quick feedback with helpful links
<FeedbackDialog 
  onSubmit={handleFeedback}
  links={{ tutorials: "/help", docs: "/docs", discord: "/discord" }}
/>
```

### RatingDialog (comp-323)
```tsx
// 0-8 scale rating with feedback text
<RatingDialog 
  onSubmit={handleRatingSubmit}
  question="How hard was it to set up your account?"
  scale={[0, 8]}
/>
```

### NewsletterDialog (comp-321)
```tsx
// Email capture with privacy policy link
<NewsletterDialog 
  onSubscribe={handleSubscribe}
  privacyUrl="/privacy"
/>
```

### OTPDialog (comp-324)
```tsx
// 4-digit verification code input
<OTPDialog 
  onVerify={handleOTPVerify}
  length={4}
  resendAfter={60}
/>
```

### CheckoutDialog (comp-329)
```tsx
// Full checkout with plan selection and payment
<CheckoutDialog 
  plans={subscriptionPlans}
  onCheckout={handlePayment}
  allowCoupon={true}
/>
```

### ChangePlanDialog (comp-330)
```tsx
// Plan upgrade with feature comparison
<ChangePlanDialog 
  currentPlan="essential"
  plans={availablePlans}
  onChangePlan={handlePlanChange}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Confirmation
```tsx
// Start here for simple confirmations
import AlertDialog from '@/components/AlertDialog'

<AlertDialog 
  title="Delete item?"
  description="This action cannot be undone."
  onConfirm={handleDelete}
/>
```

### User Authentication
```tsx
// For login/signup flows
import { SignInDialog, SignUpDialog } from '@/components/auth-dialogs'

const [showSignIn, setShowSignIn] = useState(true)

{showSignIn ? (
  <SignInDialog 
    onSuccess={handleAuthSuccess}
    onSignUpClick={() => setShowSignIn(false)}
  />
) : (
  <SignUpDialog 
    onSuccess={handleAuthSuccess}
    onSignInClick={() => setShowSignIn(true)}
  />
)}
```

### Payment Collection
```tsx
// For payment and subscription flows
import PaymentCardDialog from '@/components/PaymentCardDialog'

<PaymentCardDialog 
  onSuccess={handlePaymentSuccess}
  amount={29.99}
  currency="USD"
/>
```

### Long Content
```tsx
// For terms, FAQs, or help content
import ScrollableDialog from '@/components/ScrollableDialog'

<ScrollableDialog 
  title="Frequently Asked Questions"
  content={faqContent}
  stickyHeader={true}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 50 LoC**: Basic alerts and confirmations (AlertDialog, AlertWithIcon)
- **50-100 LoC**: Simple forms and inputs (FeedbackDialog, NewsletterDialog, SignIn/SignUp)
- **100-150 LoC**: Interactive features (PaymentCard, Command, Onboarding, OTP)
- **150-200 LoC**: Complex forms and content (InviteMembers, Checkout, Terms)
- **> 200 LoC**: EditProfileDialog (266 LoC) - only when you need everything!

**Why LoC matters**: Dialog complexity directly impacts:
- Load time and bundle size
- Accessibility implementation effort
- Testing complexity
- Mobile responsiveness challenges

### Dialog Types & Patterns

Dialogs in OriginUI follow consistent patterns based on their purpose:

1. **Confirmation Dialogs**: Simple yes/no decisions with clear consequences
2. **Form Dialogs**: Collect user input with validation and submission
3. **Information Dialogs**: Display content that requires focused attention
4. **Multi-step Dialogs**: Guide users through complex processes
5. **Command Dialogs**: Power user features with keyboard navigation

### Mobile Considerations

All dialogs are mobile-optimized with:
- Full-screen mode on small devices
- Touch-friendly tap targets (minimum 44px)
- Proper keyboard handling
- Scroll management for long content
- Responsive button layouts

### Performance Tips
1. Start with the simplest dialog that meets your needs
2. Lazy load complex dialogs (EditProfile, Checkout)
3. Use portal rendering for better z-index management
4. Implement proper focus management
5. Consider loading states for async operations

### Accessibility
- All dialogs include proper ARIA labels and roles
- Focus trapped within dialog when open
- Escape key closes dialog
- Focus returns to trigger element on close
- Screen reader announcements for state changes
- High contrast mode supported

### State Management
```tsx
// Recommended pattern for dialog state
const [dialogState, setDialogState] = useState({
  isOpen: false,
  isLoading: false,
  error: null,
  data: null
})

// Handle async operations
const handleSubmit = async (formData) => {
  setDialogState(prev => ({ ...prev, isLoading: true, error: null }))
  try {
    const result = await submitData(formData)
    setDialogState(prev => ({ ...prev, isOpen: false, data: result }))
  } catch (error) {
    setDialogState(prev => ({ ...prev, error: error.message }))
  } finally {
    setDialogState(prev => ({ ...prev, isLoading: false }))
  }
}
```

### Migration Path
```
AlertDialog → DeleteConfirmationDialog → FormDialog → MultiStepDialog
  (36 LoC)        (80 LoC)              (100+ LoC)     (120+ LoC)
```

Start simple, add complexity only when user needs require it!