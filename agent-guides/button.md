# Button Component

Buttons trigger actions in your interface. Use them for forms, navigation, toggles, or any clickable interaction. They're the most common UI element - from simple clicks to complex split dropdowns with menus. Every app needs buttons for user actions.

Links take you places, buttons do things. Use links for navigation between pages, buttons for actions like save, delete, or toggle. Pick from 54 button styles below based on your needs: basic actions, social logins, loading states, toggles, groups, navigation, and specialized controls.

## Which 'Button' variant do you need?

### Just need a simple clickable button?

**Most basic implementation:**
- Simplest possible button? Use `BasicButton`
- Need to show it's disabled? Use `DisabledButton`
- Want pill-shaped style? Use `RoundedButton`

**With icons:**
- Icon on the left? Use `IconButton`
- Icon on the right? Use `TrailingIconButton`
- Just a circular icon? Use `RoundedIconButton`

**Special purposes:**
- Delete or remove something? Use `DestructiveButton`
- Cancel or close action? Use `CancelButton`
- Navigation back link? Use `LinkBackButton`
- With a dropdown arrow? Use `DropdownButton`

**Responsive or special features:**
- Icon on mobile, text on desktop? Use `ResponsiveButton`
- With a number badge? Use `BadgeButton`
- With keyboard shortcut hint? Use `KeyboardShortcutButton`
- With hover tooltip? Use `TooltipButton`

### Need social login buttons?

**Icon-only buttons:**
- Just outline icons? Use `SocialIconButtons`
- Want brand colors? Use `SocialIconButtonsColored`

**Full-width with text:**
- Clean outline style? Use `OutlineSocialButtons`
- Bold brand colors? Use `FullSocialButtons`

### Building forms with save/cancel?

- Cancel + Save pair? Use `ButtonPair`

### Need split buttons with multiple actions?

**Advanced split buttons:**
- QR code + sign in? Use `QRSignInSplit`
- Dropdown on left side? Use `ReverseSplitButton`
- Preview + external link? Use `PreviewLinkGroup`
- GitHub-style with count? Use `ForkSplitButton`
- Multiple merge options? Use `SplitButton`

### Need loading feedback?

- Simple spinning icon? Use `LoadingButton`
- Fancy overlay effect? Use `AdvancedLoadingButton`

### Need navigation controls?

**Simple arrows:**
- Previous button? Use `NavigationButtonPrevious`
- Next button? Use `NavigationButtonNext`

**Animated on hover:**
- Back with slide effect? Use `BackButtonAnimated`
- Forward with slide effect? Use `ForwardButtonAnimated`
- Email with slide effect? Use `EmailButtonAnimated`

**Complex navigation:**
- Four-way directional pad? Use `DirectionalPad`

### Need interactive toggles?

**State toggles:**
- Copy to clipboard? Use `CopyButton`
- Dark/light mode? Use `DarkModeToggle`
- Save/bookmark? Use `BookmarkToggle`
- Mobile menu? Use `HamburgerButton`
- Plus to X animation? Use `AnimatedPlusButton`

**Content toggles:**
- Show more/less text? Use `ExpandButton`
- Volume up/down? Use `VolumeControl`

### Need voting or rating buttons?

**Voting pairs:**
- Outline style arrows? Use `UpDownVoteOutline`
- Filled rounded style? Use `UpDownVoteFilled`

**Social engagement:**
- Like with count? Use `LikeButton`
- Star with count? Use `StarButton`

### Need user profile buttons?

- Simple avatar + name? Use `UserProfileButton`
- With dropdown menu? Use `AvatarDropdown`

### Need system notification buttons?

- Bell with badge count? Use `NotificationButton`

### Need to upload files?

- General file upload? Use `FileUploadButton`
- Profile picture upload? Use `AvatarUploadButton`

### Need button groups?

**Connected buttons:**
- Files, Media, Menu tabs? Use `ButtonGroup`

**Toggle groups:**
- Text options (Bold, Italic)? Use `TextToggleGroup`
- Alignment icons? Use `AlignmentToggleGroup`

**Special controls:**
- Image flip controls? Use `FlipButtons`

### Need a card-style button?

- Large clickable card with description? Use `CardButton`

## 📊 COMPLETE COMPONENT MATRIX

### Core Interactive Buttons

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicButton** (read if you plan to implement: registry/default/components/comp-78.tsx) | 5 | Simplest button implementation | Default actions, getting started |
| **DisabledButton** (read if you plan to implement: registry/default/components/comp-79.tsx) | 5 | Disabled state demonstration | Showing unavailable actions |
| **RoundedButton** (read if you plan to implement: registry/default/components/comp-80.tsx) | 5 | Rounded-full styling | Modern, pill-shaped buttons |
| **ButtonPair** (read if you plan to implement: registry/default/components/comp-89.tsx) | 10 | Cancel + Save combination | Form actions, dialogs |
| **IconButton** (read if you plan to implement: registry/default/components/comp-81.tsx) | 12 | Button with leading icon | Archive, save, basic actions |
| **DestructiveButton** (read if you plan to implement: registry/default/components/comp-82.tsx) | 12 | Danger variant with trash icon | Delete, remove, destructive actions |
| **CancelButton** (read if you plan to implement: registry/default/components/comp-83.tsx) | 12 | Secondary variant with X icon | Cancel, close operations |
| **TrailingIconButton** (read if you plan to implement: registry/default/components/comp-84.tsx) | 12 | Icon on the right side | Sparkles, decorative actions |
| **BadgeButton** (read if you plan to implement: registry/default/components/comp-92.tsx) | 12 | Messages with count badge | Counts, notifications |
| **ResponsiveButton** (read if you plan to implement: registry/default/components/comp-96.tsx) | 12 | Icon-only mobile, text desktop | Adaptive interfaces |
| **LinkBackButton** (read if you plan to implement: registry/default/components/comp-124.tsx) | 12 | Link variant with chevron left | Subtle back navigation |

### Animated & Interactive Buttons

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **TextToggleGroup** (read if you plan to implement: registry/default/components/comp-109.tsx) | 14 | Stateful text toggles | Text alignment, options |
| **NavigationButtonPrevious** (read if you plan to implement: registry/default/components/comp-115.tsx) | 14 | Previous with sectioned icon | Pagination, navigation |
| **NavigationButtonNext** (read if you plan to implement: registry/default/components/comp-116.tsx) | 14 | Next with sectioned icon | Pagination, navigation |
| **LikeButton** (read if you plan to implement: registry/default/components/comp-117.tsx) | 15 | Thumbs up with separated count | Social interactions |
| **StarButton** (read if you plan to implement: registry/default/components/comp-118.tsx) | 15 | GitHub-style star with count | Favorites, ratings |
| **KeyboardShortcutButton** (read if you plan to implement: registry/default/components/comp-93.tsx) | 15 | Print button with Cmd+P indicator | Actions with keyboard shortcuts |
| **BackButtonAnimated** (read if you plan to implement: registry/default/components/comp-85.tsx) | 16 | Left arrow moves on hover | Navigation, back actions |
| **ForwardButtonAnimated** (read if you plan to implement: registry/default/components/comp-86.tsx) | 16 | Right arrow moves on hover | Navigation, next actions |
| **DropdownButton** (read if you plan to implement: registry/default/components/comp-88.tsx) | 16 | Basic chevron down indicator | Dropdown triggers, menus |
| **LoadingButton** (read if you plan to implement: registry/default/components/comp-90.tsx) | 16 | Disabled with spinning loader | Simple loading states |
| **RoundedIconButton** (read if you plan to implement: registry/default/components/comp-97.tsx) | 16 | Circular plus button | Add actions, floating buttons |
| **EmailButtonAnimated** (read if you plan to implement: registry/default/components/comp-87.tsx) | 17 | Arrow slides right on hover | Email actions, CTAs |
| **UserProfileButton** (read if you plan to implement: registry/default/components/comp-94.tsx) | 19 | Avatar + username rounded | User profiles, accounts |
| **AvatarDropdown** (read if you plan to implement: registry/default/components/comp-95.tsx) | 20 | Profile avatar with chevron | User menus, profiles |

### Social Login Buttons

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SocialIconButtons** (read if you plan to implement: registry/default/components/comp-119.tsx) | 27 | Icon-only outline buttons | Compact login options |
| **FullSocialButtons** (read if you plan to implement: registry/default/components/comp-122.tsx) | 39 | Full buttons with brand colors | Prominent social login |
| **OutlineSocialButtons** (read if you plan to implement: registry/default/components/comp-121.tsx) | 47 | Outline style with text and icons | Clean, outlined login options |
| **SocialIconButtonsColored** (read if you plan to implement: registry/default/components/comp-120.tsx) | 63 | Icon-only with brand colors | Branded compact login |

### Button Groups & Connected Buttons

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **QRSignInSplit** (read if you plan to implement: registry/default/components/comp-111.tsx) | 20 | QR icon + sign in text | Authentication options |
| **ReverseSplitButton** (read if you plan to implement: registry/default/components/comp-113.tsx) | 21 | Dropdown first, action second | Alternative split layouts |
| **PreviewLinkGroup** (read if you plan to implement: registry/default/components/comp-112.tsx) | 24 | Preview + external link | Content preview actions |
| **ForkSplitButton** (read if you plan to implement: registry/default/components/comp-114.tsx) | 24 | GitHub-style fork with count | Repository actions |
| **FlipButtons** (read if you plan to implement: registry/default/components/comp-106.tsx) | 26 | Horizontal/vertical flip controls | Image editing, transformations |
| **UpDownVoteOutline** (read if you plan to implement: registry/default/components/comp-102.tsx) | 29 | Reddit-style voting (outlined) | Community voting, feedback |
| **ButtonGroup** (read if you plan to implement: registry/default/components/comp-108.tsx) | 32 | Files, Media, Menu connected | Related action groups |
| **SplitButton** (read if you plan to implement: registry/default/components/comp-131.tsx) | **80** | Merge options with dropdown | Complex action selection |

### Toggle Groups & Multi-State Controls

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **UpDownVoteFilled** (read if you plan to implement: registry/default/components/comp-103.tsx) | 27 | Rounded voting (filled style) | Voting with emphasis |
| **AnimatedPlusButton** (read if you plan to implement: registry/default/components/comp-98.tsx) | 27 | Plus rotates to X on click | Add/remove toggle actions |
| **ExpandButton** (read if you plan to implement: registry/default/components/comp-123.tsx) | 31 | Show more/less with chevron | Content expansion |
| **NotificationButton** (read if you plan to implement: registry/default/components/comp-129.tsx) | 32 | Bell with count badge | Notification systems |
| **TextToggleGroup** (read if you plan to implement: registry/default/components/comp-110.tsx) | 33 | Stateful text toggles | Text alignment, options |
| **DarkModeToggle** (read if you plan to implement: registry/default/components/comp-130.tsx) | 36 | Sun/moon icon switching | Theme switching |
| **BookmarkToggle** (read if you plan to implement: registry/default/components/comp-101.tsx) | 37 | Bookmark with tooltip and state | Save/unsave functionality |
| **AdvancedLoadingButton** (read if you plan to implement: registry/default/components/comp-91.tsx) | 38 | Overlay spinner with text fade | Complex loading transitions |
| **AlignmentToggleGroup** (read if you plan to implement: registry/default/components/comp-107.tsx) | **58** | Icon-based alignment controls | Text formatting tools |

### Specialized & Advanced Buttons

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **CardButton** (read if you plan to implement: registry/default/components/comp-128.tsx) | 21 | Large with title and description | Navigation cards, features |
| **TooltipButton** (read if you plan to implement: registry/default/components/comp-99.tsx) | 26 | Button with tooltip on hover | Clarifying button actions |
| **HamburgerButton** (read if you plan to implement: registry/default/components/comp-100.tsx) | 46 | Hamburger to X animation | Mobile menu toggles |
| **DirectionalPad** (read if you plan to implement: registry/default/components/comp-127.tsx) | 46 | Up/down/left/right grid | Camera controls, navigation |
| **AvatarUploadButton** (read if you plan to implement: registry/default/components/comp-126.tsx) | 68 | Circular avatar upload with remove | Profile picture uploads |
| **CopyButton** (read if you plan to implement: registry/default/components/comp-105.tsx) | 68 | Copy icon to checkmark transition | Copy to clipboard functionality |
| **VolumeControl** (read if you plan to implement: registry/default/components/comp-104.tsx) | 71 | Plus/minus with level display | Audio controls, quantity |
| **FileUploadButton** (read if you plan to implement: registry/default/components/comp-125.tsx) | **81** | Image upload with preview | File uploads, image selection |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicButton (comp-78)

**Description**: The simplest button component. Your starting point for any button implementation.

**When to Use**:
- Default actions in forms and interfaces
- Getting started with button implementations
- When you need a clean, unstyled foundation
- Primary actions without special requirements
- Learning and prototyping

**Implementation After Refactoring**:
```tsx
import BasicButton from '@/components/BasicButton'

<BasicButton 
  onClick={handleClick}
  variant="default"
  size="default"
>
  Click me
</BasicButton>
```

**Props to Implement**: `onClick`, `children`, `variant`, `size`, `disabled`, `className`

---

### 🔷 SplitButton (comp-131)

**Description**: Advanced split button with primary action and dropdown menu for related options. GitHub-style merge button implementation.

**When to Use**:
- Complex actions with multiple related options
- Git workflows (merge, squash, rebase)
- Publishing workflows (save draft, publish, schedule)
- Any primary action with variations
- Advanced user interfaces

**Implementation After Refactoring**:
```tsx
import SplitButton from '@/components/SplitButton'

const mergeOptions = [
  {
    label: "Merge pull request",
    description: "All commits will be added to the base branch"
  },
  {
    label: "Squash and merge", 
    description: "Commits will be combined into one"
  }
]

<SplitButton 
  options={mergeOptions}
  selectedIndex={0}
  onSelectionChange={handleSelectionChange}
  onPrimaryAction={handleMerge}
/>
```

**Props to Implement**: `options`, `selectedIndex`, `onSelectionChange`, `onPrimaryAction`, `disabled`

---

### 🔷 FileUploadButton (comp-125)

**Description**: Complete file upload solution with preview, file name display, and remove functionality.

**When to Use**:
- Image uploads in forms
- Document upload interfaces
- Profile picture selection
- Any file input with preview needs
- File management systems

**Implementation After Refactoring**:
```tsx
import FileUploadButton from '@/components/FileUploadButton'

<FileUploadButton 
  accept="image/*"
  onFileSelect={handleFileSelect}
  onFileRemove={handleFileRemove}
  maxSize={5 * 1024 * 1024} // 5MB
  showPreview={true}
/>
```

**Props to Implement**: `accept`, `onFileSelect`, `onFileRemove`, `maxSize`, `showPreview`, `disabled`

---

### 🔷 AlignmentToggleGroup (comp-107)

**Description**: Icon-based toggle group for text alignment with left, center, right, and justify options.

**When to Use**:
- Text editors and WYSIWYG interfaces
- Document formatting tools
- Design applications
- Rich text editing
- Content management systems

**Implementation After Refactoring**:
```tsx
import AlignmentToggleGroup from '@/components/AlignmentToggleGroup'

<AlignmentToggleGroup 
  value={alignment}
  onValueChange={setAlignment}
  options={['left', 'center', 'right', 'justify']}
  showLabels={false}
/>
```

**Props to Implement**: `value`, `onValueChange`, `options`, `showLabels`, `disabled`

---

### 🔷 FullSocialButtons (comp-122)

**Description**: Complete social login buttons with brand colors, icons, and text labels.

**When to Use**:
- Authentication pages
- Sign-up and login forms
- User onboarding flows
- Marketing landing pages
- Social integration features

**Implementation After Refactoring**:
```tsx
import FullSocialButtons from '@/components/FullSocialButtons'

const socialProviders = [
  { name: 'Google', color: '#DB4437', icon: GoogleIcon },
  { name: 'Facebook', color: '#1877f2', icon: FacebookIcon },
  { name: 'GitHub', color: '#333333', icon: GitHubIcon }
]

<FullSocialButtons 
  providers={socialProviders}
  onProviderClick={handleSocialLogin}
  loading={isLoading}
/>
```

**Props to Implement**: `providers`, `onProviderClick`, `loading`, `disabled`, `layout`

---

### 🔷 CopyButton (comp-105)

**Description**: Copy to clipboard button with visual feedback animation from copy icon to checkmark.

**When to Use**:
- Code blocks and documentation
- Share links and URLs
- API keys and tokens
- Text snippets and commands
- Any copyable content

**Implementation After Refactoring**:
```tsx
import CopyButton from '@/components/CopyButton'

<CopyButton 
  textToCopy={codeSnippet}
  onCopySuccess={handleCopySuccess}
  onCopyError={handleCopyError}
  tooltip="Copy to clipboard"
/>
```

**Props to Implement**: `textToCopy`, `onCopySuccess`, `onCopyError`, `tooltip`, `size`

---

### 🔷 HamburgerButton (comp-100)

**Description**: Animated hamburger menu button that transforms to X when opened.

**When to Use**:
- Mobile navigation menus
- Sidebar toggles
- Collapsible interfaces
- Responsive web design
- Mobile-first applications

**Implementation After Refactoring**:
```tsx
import HamburgerButton from '@/components/HamburgerButton'

<HamburgerButton 
  isOpen={menuOpen}
  onToggle={setMenuOpen}
  aria-controls="mobile-menu"
  size="default"
/>
```

**Props to Implement**: `isOpen`, `onToggle`, `aria-controls`, `size`, `disabled`

---

### 🔷 DarkModeToggle (comp-130)

**Description**: Theme toggle button with smooth sun/moon icon transition.

**When to Use**:
- Theme switching interfaces
- User preference controls
- Navigation bars
- Settings panels
- Accessibility features

**Implementation After Refactoring**:
```tsx
import DarkModeToggle from '@/components/DarkModeToggle'

<DarkModeToggle 
  isDark={theme === 'dark'}
  onToggle={toggleTheme}
  showTooltip={true}
/>
```

**Props to Implement**: `isDark`, `onToggle`, `showTooltip`, `size`, `disabled`

---

### 🔷 NotificationButton (comp-129)

**Description**: Notification bell button with count badge for unread notifications.

**When to Use**:
- Navigation bars
- Dashboard headers
- Notification systems
- User interfaces with alerts
- Real-time applications

**Implementation After Refactoring**:
```tsx
import NotificationButton from '@/components/NotificationButton'

<NotificationButton 
  count={unreadCount}
  onNotificationClick={handleNotificationClick}
  onMarkAllRead={handleMarkAllRead}
  maxCount={99}
/>
```

**Props to Implement**: `count`, `onNotificationClick`, `onMarkAllRead`, `maxCount`, `showBadge`

---

## 🎨 SPECIALIZED VARIANTS & LAYOUTS

### Social Login Variants
```tsx
// Icon-only compact versions
<SocialIconButtons providers={['google', 'github']} />

// Outlined style with text
<OutlineSocialButtons providers={socialProviders} />

// Full brand-colored buttons
<FullSocialButtons providers={socialProviders} />
```

### Loading State Variants
```tsx
// Simple spinner
<LoadingButton loading={isLoading}>Save</LoadingButton>

// Advanced overlay with text fade
<AdvancedLoadingButton onSubmit={handleSubmit}>
  Submit Form
</AdvancedLoadingButton>
```

### Navigation Button Variants
```tsx
// With sectioned icon backgrounds
<NavigationButtonPrevious onClick={goBack} />
<NavigationButtonNext onClick={goForward} />

// With hover animations
<AnimatedNavigationButton direction="back" onClick={goBack} />
<AnimatedNavigationButton direction="forward" onClick={goNext} />
```

### Toggle Variants
```tsx
// Text-based toggles
<TextToggleGroup options={['Left', 'Center', 'Right']} />

// Icon-based alignment
<AlignmentToggleGroup value={alignment} onValueChange={setAlignment} />

// Theme switching
<DarkModeToggle isDark={isDarkMode} onToggle={toggleTheme} />
```

### User Interface Variants
```tsx
// Profile dropdown
<AvatarDropdown user={currentUser} onProfileClick={goToProfile} />

// Profile button with username
<UserProfileButton user={currentUser} onClick={goToProfile} />

// Notification bell
<NotificationButton count={5} onClick={openNotifications} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form Actions
```tsx
// Start here for simple forms
import { BasicButton, ButtonPair } from '@/components/buttons'

// Single action
<BasicButton onClick={handleSave}>Save</BasicButton>

// Cancel + Save combination
<ButtonPair 
  onCancel={handleCancel}
  onSave={handleSave}
  saveText="Save Changes"
/>
```

### Social Authentication
```tsx
// Complete social login setup
import { FullSocialButtons } from '@/components/buttons'

<FullSocialButtons 
  providers={['google', 'github', 'facebook']}
  onProviderClick={handleSocialLogin}
/>
```

### Interactive Interface
```tsx
// Navigation with state management
import { 
  HamburgerButton, 
  DarkModeToggle, 
  NotificationButton 
} from '@/components/buttons'

<nav>
  <HamburgerButton isOpen={menuOpen} onToggle={setMenuOpen} />
  <DarkModeToggle isDark={isDark} onToggle={setIsDark} />
  <NotificationButton count={notifications} onClick={openNotifications} />
</nav>
```

### Content Controls
```tsx
// Rich text editing tools
import { AlignmentToggleGroup, CopyButton } from '@/components/buttons'

<toolbar>
  <AlignmentToggleGroup value={align} onValueChange={setAlign} />
  <CopyButton textToCopy={selectedText} />
</toolbar>
```

### File Operations
```tsx
// Complete file upload solution
import { FileUploadButton, AvatarUploadButton } from '@/components/buttons'

// Document upload
<FileUploadButton 
  accept=".pdf,.doc,.docx"
  onFileSelect={handleFileUpload}
/>

// Profile picture upload
<AvatarUploadButton 
  currentAvatar={user.avatar}
  onAvatarChange={updateUserAvatar}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 15 LoC**: Ultra-basic buttons (BasicButton, DisabledButton, RoundedButton - 5 LoC each)
- **15-30 LoC**: Simple interactive buttons with icons or basic state (most standard buttons)
- **30-50 LoC**: Complex interactions, multi-state toggles (DarkModeToggle, social login buttons)
- **50-70 LoC**: Advanced features, specialized UI (AlignmentToggleGroup, CopyButton, file uploads)
- **70+ LoC**: Most complex functionality (SplitButton - 80 LoC, FileUploadButton - 81 LoC)

**Why LoC matters**: Button complexity directly impacts:
- Implementation time and learning curve
- Maintenance and debugging effort
- Testing requirements and edge cases
- Performance and bundle size
- Customization flexibility

### Component Composition
Buttons in OriginUI follow consistent patterns:
- **Base Button**: All components extend the core Button component from `@/registry/default/ui/button`
- **Icon Integration**: Uses Lucide React icons with consistent sizing (16px default)
- **State Management**: Client components use React hooks for interactivity
- **Accessibility**: Proper ARIA labels, keyboard navigation, screen reader support
- **Animation**: CSS transitions and transforms for smooth interactions

### Button Variants & Styling
The Button component supports consistent variants across all implementations:
```tsx
// Core variants
variant="default" | "destructive" | "outline" | "secondary" | "ghost" | "link"

// Sizes
size="default" | "sm" | "lg" | "icon"

// Common patterns
className="rounded-full"  // Pill-shaped buttons
className="gap-2"         // Icon spacing
className="group"         // Hover state grouping
```

### Performance Tips
1. Start with BasicButton and add complexity only when needed
2. Use static import/export instead of dynamic imports for core buttons
3. Lazy load complex file upload components
4. Debounce rapid interactions (copy buttons, toggles)
5. Optimize animations with CSS transforms over layout changes
6. Use proper React keys for button groups and dynamic lists

### Accessibility Best Practices
- All buttons include proper `aria-label` for screen readers
- Keyboard navigation fully supported (Enter, Space)
- Focus management with visible focus indicators
- Color contrast meets WCAG AA standards
- Loading states properly announced to screen readers
- Disabled states communicated clearly

### Animation Guidelines
OriginUI buttons use consistent animation patterns:
```css
/* Standard transition timing */
transition: all 150ms ease-in-out

/* Hover transforms */
group-hover:translate-x-0.5  /* Subtle movement */
group-hover:scale-105        /* Gentle scale */

/* State transitions */
transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]
```

### Mobile Responsive Patterns
All button components follow mobile-first responsive design:
1. Touch targets minimum 44px × 44px
2. Adequate spacing between interactive elements
3. Simplified layouts on smaller screens
4. Gesture-friendly interactions
5. Reduced animation on preference

### Migration Path
```
BasicButton → IconButton → LoadingButton → AdvancedLoadingButton
   (15 LoC)     (25 LoC)     (38 LoC)         (78 LoC)

ButtonPair → ButtonGroup → SplitButton → FileUploadButton
  (42 LoC)    (58 LoC)      (135 LoC)      (185 LoC)
```

Start with basic implementations and progressively enhance based on user needs and feedback!