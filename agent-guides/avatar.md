# Avatar Component

Avatars display user profile pictures, initials, or placeholder icons. Use them for user identification in comments, chat messages, team lists, or anywhere you need to show who's who. They're perfect for single users or groups, with options for status indicators (online/offline), notification badges, or verification marks.

Profile pictures need their own component (not just an image) because they require proper fallbacks when images fail, consistent sizing across your app, and often include overlays for status or badges. Regular images work for content, but avatars handle the special needs of user representation. Pick from 23 styles below based on your needs: single users vs groups, status indicators, badges, and different sizes.

## Which 'Avatar' variant do you need?

### Just showing a single user?

**Need a standard avatar (with or without image)?**
- Want circular avatar with auto-fallback? Use `BasicAvatar`
- Want rounded square with auto-fallback? Use `RoundedAvatar`

**Never showing images, only placeholders?**
- Only showing initials (like "JD")? Use `FallbackOnlyAvatar`
- Want a generic user icon? Use `IconFallbackAvatar`

**Need to show they're online/offline:**
- Green dot for online? Use `OnlineStatusAvatar`
- Gray dot for offline? Use `OfflineStatusAvatar`
- Online status + rounded corners? Use `RoundedOnlineStatusAvatar`

**Need notification badges:**
- Show unread count? Use `NotificationBadgeAvatar`
- Unread count + rounded corners? Use `RoundedNotificationBadgeAvatar`

**Showing verified/special users:**
- Need a verification checkmark? Use `VerifiedAvatar`

### Showing multiple users in a group?

**Need compact overlapping avatars (mobile, tight spaces)?**
- 20px tiny avatars? Use `AvatarStackSmall`
- 24px small avatars? Use `AvatarStackSmallMedium`
- 28px medium avatars? Use `AvatarStackMedium`

**Need standard overlapping avatars (lists, cards)?**
- 32px medium-large avatars? Use `AvatarStackMediumLarge`
- 36px large avatars? Use `AvatarStackLarge`
- 40px extra large avatars? Use `AvatarStackExtraLarge`

**Need prominent overlapping avatars (heroes, marketing)?**
- 48px XL avatars? Use `AvatarStackXL`
- 64px XXL avatars? Use `AvatarStackXXL`
- 80px huge avatars? Use `AvatarStackLargest`

**Need special features for your avatar group?**
- Want to show "+5 more" button? Use `AvatarStackWithMoreButton`
- Need social proof text like "Trusted by 10K+"? Use `AvatarStackWithTestimonial`
- Want avatars in a rounded container? Use `AvatarStackWithRoundedContainer`
- Want avatars in a bordered box? Use `AvatarStackWithBorderedContainer`

## 📊 COMPLETE COMPONENT MATRIX

### Core Single Avatars

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **FallbackOnlyAvatar** (read if you plan to implement: registry/default/components/comp-391.tsx) | 9 | Text initials only | Loading states, missing images |
| **IconFallbackAvatar** (read if you plan to implement: registry/default/components/comp-392.tsx) | 13 | User icon placeholder | Anonymous users, default state |
| **BasicAvatar** (read if you plan to implement: registry/default/components/comp-390.tsx) | 14 | Image + text fallback | Standard profile displays |
| **RoundedAvatar** (read if you plan to implement: registry/default/components/comp-393.tsx) | 14 | Rounded corners variant | Modern interfaces, cards |
| **OnlineStatusAvatar** (read if you plan to implement: registry/default/components/comp-394.tsx) | 19 | Green status indicator | Chat apps, user directories |
| **OfflineStatusAvatar** (read if you plan to implement: registry/default/components/comp-395.tsx) | 19 | Gray status indicator | Team member status |
| **RoundedOnlineStatusAvatar** (read if you plan to implement: registry/default/components/comp-396.tsx) | 19 | Status + rounded corners | Modern chat interfaces |
| **NotificationBadgeAvatar** (read if you plan to implement: registry/default/components/comp-398.tsx) | 20 | Number badge overlay | Message counts, notifications |
| **RoundedNotificationBadgeAvatar** (read if you plan to implement: registry/default/components/comp-399.tsx) | 20 | Badge + rounded corners | Notification systems |
| **VerifiedAvatar** (read if you plan to implement: registry/default/components/comp-397.tsx) | **39** | Verification checkmark | Verified accounts, VIP users |

### Avatar Groups & Stacks

| Component | LoC | Size/Features | Best For |
|-----------|:---:|---------------|----------|
| **AvatarStackSmall** (read if you plan to implement: registry/default/components/comp-400.tsx) | 34 | 20px overlapping avatars | Compact spaces, mobile |
| **AvatarStackSmallMedium** (read if you plan to implement: registry/default/components/comp-401.tsx) | 34 | 24px overlapping avatars | Dense layouts |
| **AvatarStackMedium** (read if you plan to implement: registry/default/components/comp-402.tsx) | 34 | 28px overlapping avatars | Standard group displays |
| **AvatarStackMediumLarge** (read if you plan to implement: registry/default/components/comp-403.tsx) | 34 | 32px overlapping avatars | Team member lists |
| **AvatarStackLarge** (read if you plan to implement: registry/default/components/comp-404.tsx) | 34 | 36px overlapping avatars | Project collaborators |
| **AvatarStackExtraLarge** (read if you plan to implement: registry/default/components/comp-405.tsx) | 34 | 40px overlapping avatars | Prominent team displays |
| **AvatarStackXL** (read if you plan to implement: registry/default/components/comp-406.tsx) | 34 | 48px overlapping avatars | Hero sections |
| **AvatarStackXXL** (read if you plan to implement: registry/default/components/comp-407.tsx) | 34 | 64px overlapping avatars | Landing pages |
| **AvatarStackLargest** (read if you plan to implement: registry/default/components/comp-408.tsx) | 34 | 80px overlapping avatars | Large displays, headers |

### Interactive & Container Variants

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **AvatarStackWithTestimonial** (read if you plan to implement: registry/default/components/comp-412.tsx) | 40 | Social proof text | Marketing sections, testimonials |
| **AvatarStackWithMoreButton** (read if you plan to implement: registry/default/components/comp-409.tsx) | 43 | "+N" overflow button | Large teams, expandable lists |
| **AvatarStackWithRoundedContainer** (read if you plan to implement: registry/default/components/comp-410.tsx) | 44 | Rounded background | Modern card designs |
| **AvatarStackWithBorderedContainer** (read if you plan to implement: registry/default/components/comp-411.tsx) | 44 | Bordered container | Defined sections, emphasis |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicAvatar (comp-390)

**Description**: The standard avatar component with image and fallback initials. Your go-to choice for user profile displays.

**When to Use**:
- User profile pages
- Comment sections
- Team member lists
- Navigation headers
- Any standard user representation

**Implementation After Refactoring**:
```tsx
import BasicAvatar from '@/components/BasicAvatar'

const [user, setUser] = useState({
  name: "Kelly King",
  avatar: "./avatar-80-07.jpg"
})

<BasicAvatar 
  src={user.avatar}
  alt={user.name}
  fallback={user.name.split(' ').map(n => n[0]).join('')}
  size="default"
/>
```

**Props to Implement**: `src`, `alt`, `fallback`, `size`, `className`

---

### 🔷 OnlineStatusAvatar (comp-394)

**Description**: Avatar with green status indicator showing user's online presence.

**When to Use**:
- Chat applications
- Team collaboration tools
- Live user directories
- Real-time presence systems
- Customer support interfaces

**Implementation After Refactoring**:
```tsx
import OnlineStatusAvatar from '@/components/OnlineStatusAvatar'

const [user, setUser] = useState({
  name: "Kelly King",
  avatar: "./avatar-80-07.jpg",
  isOnline: true
})

<OnlineStatusAvatar 
  src={user.avatar}
  alt={user.name}
  fallback="KK"
  isOnline={user.isOnline}
  statusPosition="bottom-right"
/>
```

**Props to Implement**: `src`, `alt`, `fallback`, `isOnline`, `statusPosition`, `size`

---

### 🔷 VerifiedAvatar (comp-397)

**Description**: Avatar with verification badge showing authenticated or premium status.

**When to Use**:
- Verified accounts (social media style)
- Premium/VIP users
- Admin/moderator identification
- Trusted contributor badges
- Special status indicators

**Implementation After Refactoring**:
```tsx
import VerifiedAvatar from '@/components/VerifiedAvatar'

const [user, setUser] = useState({
  name: "Kelly King",
  avatar: "./avatar-80-07.jpg",
  isVerified: true
})

<VerifiedAvatar 
  src={user.avatar}
  alt={user.name}
  fallback="KK"
  isVerified={user.isVerified}
  badgeType="verified"
/>
```

**Props to Implement**: `src`, `alt`, `fallback`, `isVerified`, `badgeType`, `badgePosition`

---

### 🔷 NotificationBadgeAvatar (comp-398)

**Description**: Avatar with number badge showing unread counts or notifications.

**When to Use**:
- Message counters
- Notification systems
- Unread indicators
- Activity badges
- Alert systems

**Implementation After Refactoring**:
```tsx
import NotificationBadgeAvatar from '@/components/NotificationBadgeAvatar'

const [user, setUser] = useState({
  name: "Kelly King",
  avatar: "./avatar-80-07.jpg",
  unreadCount: 6
})

<NotificationBadgeAvatar 
  src={user.avatar}
  alt={user.name}
  fallback="KK"
  count={user.unreadCount}
  maxCount={99}
/>
```

**Props to Implement**: `src`, `alt`, `fallback`, `count`, `maxCount`, `showZero`

---

### 🔷 AvatarStackExtraLarge (comp-405)

**Description**: Overlapping avatar group displaying multiple team members with optimal 40px size.

**When to Use**:
- Team member displays
- Project collaborators
- User group representations
- Social proof sections
- Participant lists

**Implementation After Refactoring**:
```tsx
import AvatarStackExtraLarge from '@/components/AvatarStackExtraLarge'

const [teamMembers, setTeamMembers] = useState([
  { id: 1, name: "Alex", avatar: "/avatar-80-03.jpg" },
  { id: 2, name: "Jamie", avatar: "/avatar-80-04.jpg" },
  { id: 3, name: "Sam", avatar: "/avatar-80-05.jpg" },
  { id: 4, name: "Casey", avatar: "/avatar-80-06.jpg" }
])

<AvatarStackExtraLarge 
  members={teamMembers}
  size={40}
  spacing={-12}
  maxDisplay={4}
/>
```

**Props to Implement**: `members`, `size`, `spacing`, `maxDisplay`, `showBorder`

---

### 🔷 AvatarStackWithMoreButton (comp-409)

**Description**: Avatar stack with overflow button showing additional member count.

**When to Use**:
- Large teams (5+ members)
- Expandable user lists
- Space-constrained displays
- Click to view more functionality
- Team overview sections

**Implementation After Refactoring**:
```tsx
import AvatarStackWithMoreButton from '@/components/AvatarStackWithMoreButton'

const [allMembers, setAllMembers] = useState(teamMembersArray) // 15 members total

<AvatarStackWithMoreButton 
  members={allMembers}
  displayCount={4}
  onMoreClick={handleShowAllMembers}
  size={40}
/>
```

**Props to Implement**: `members`, `displayCount`, `onMoreClick`, `size`, `moreButtonVariant`

---

### 🔷 AvatarStackWithTestimonial (comp-412)

**Description**: Avatar stack with social proof text, perfect for marketing and testimonial sections.

**When to Use**:
- Landing page testimonials
- Social proof sections
- Customer showcase
- Trust indicators
- Marketing displays

**Implementation After Refactoring**:
```tsx
import AvatarStackWithTestimonial from '@/components/AvatarStackWithTestimonial'

const [testimonial, setTestimonial] = useState({
  members: customerAvatars,
  text: "Trusted by 60K+ developers",
  highlight: "60K+"
})

<AvatarStackWithTestimonial 
  members={testimonial.members}
  text={testimonial.text}
  highlight={testimonial.highlight}
  size={20}
/>
```

**Props to Implement**: `members`, `text`, `highlight`, `size`, `variant`

---

## 🎨 SPECIALIZED VARIANTS

### FallbackOnlyAvatar (comp-391)
```tsx
// Text initials when no image available
<FallbackOnlyAvatar initials="KK" />
```

### IconFallbackAvatar (comp-392)
```tsx
// Generic user icon for anonymous/default states
<IconFallbackAvatar iconSize={16} />
```

### RoundedAvatar (comp-393)
```tsx
// Modern rounded corners for card layouts
<RoundedAvatar src="./avatar.jpg" fallback="KK" rounded="md" />
```

### OfflineStatusAvatar (comp-395)
```tsx
// Gray indicator for offline users
<OfflineStatusAvatar src="./avatar.jpg" isOnline={false} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Profile Display
```tsx
// Start here for simple user profiles
import BasicAvatar from '@/components/BasicAvatar'

<BasicAvatar 
  src={user.avatar}
  alt={user.name}
  fallback={getInitials(user.name)}
/>
```

### Chat Interface
```tsx
// For messaging and real-time apps
import OnlineStatusAvatar from '@/components/OnlineStatusAvatar'

<OnlineStatusAvatar 
  src={user.avatar}
  isOnline={user.status === 'online'}
  fallback={user.initials}
/>
```

### Team Display
```tsx
// For showing team members or collaborators
import AvatarStackExtraLarge from '@/components/AvatarStackExtraLarge'

<AvatarStackExtraLarge 
  members={projectTeam}
  maxDisplay={5}
/>
```

### Marketing Section
```tsx
// For social proof and testimonials
import AvatarStackWithTestimonial from '@/components/AvatarStackWithTestimonial'

<AvatarStackWithTestimonial 
  members={customers}
  text="Trusted by 10K+ users"
  highlight="10K+"
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 15 LoC**: Basic single avatars with minimal features (FallbackOnlyAvatar, BasicAvatar)
- **15-25 LoC**: Single avatars with status indicators or badges (OnlineStatusAvatar, NotificationBadgeAvatar)
- **25-40 LoC**: Advanced single avatars with complex features (VerifiedAvatar)
- **40-45 LoC**: Avatar groups with interactive elements (AvatarStackWithMoreButton, containers)

**Why LoC matters**: Avatar components can accumulate complexity quickly with status indicators, badges, and interactive elements. Choose the simplest variant that meets your needs.

### Avatar Sizing Guidelines
Avatar components follow consistent sizing patterns:
- **Small (20-24px)**: Compact interfaces, dense layouts, mobile-first
- **Medium (28-32px)**: Standard list items, comment threads
- **Large (36-40px)**: Profile headers, team displays
- **Extra Large (48-64px)**: Hero sections, prominent displays
- **Largest (80px+)**: Landing pages, marketing sections

### Avatar Stack Best Practices
1. **Overlap Spacing**: Use negative margins proportional to avatar size
   - 20px avatars: `-space-x-1.5` (-6px)
   - 40px avatars: `-space-x-3` (-12px)
   - 80px avatars: `-space-x-6` (-24px)
2. **Border Rings**: Add `ring-background ring-2` to separate overlapping avatars
3. **Max Display**: Limit visible avatars to 4-6 for optimal readability
4. **Z-Index**: Later avatars appear behind earlier ones naturally

### Performance Tips
1. Use the simplest avatar variant that meets your needs
2. Lazy load avatar images with proper fallbacks
3. Optimize avatar image sizes (80x80px max for most uses)
4. Consider skeleton loading states for avatar grids
5. Use CSS transforms for hover effects instead of layout changes

### Accessibility
- All avatars include proper alt text for screen readers
- Status indicators have `sr-only` text descriptions
- Color indicators are paired with text/icon alternatives
- Keyboard navigation supported for interactive elements
- High contrast mode supported with proper border rings

### Migration Path
```
FallbackOnlyAvatar → BasicAvatar → OnlineStatusAvatar → VerifiedAvatar
      (9 LoC)        (14 LoC)        (19 LoC)           (39 LoC)

AvatarStackSmall → AvatarStackExtraLarge → AvatarStackWithMoreButton
     (34 LoC)           (34 LoC)                  (43 LoC)
```

Start with basic components, add status indicators and interactive features as user needs grow!