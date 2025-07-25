# Text Area Component

Text areas let users enter multiple lines of text. Use them for comments, descriptions, messages, or any content longer than a single line. They're perfect for feedback forms, chat interfaces, content creation, and data entry where users need space to express themselves.

Text areas beat single-line inputs when you expect more than a few words. Unlike rich text editors, they keep things simple - just plain text. Pick from 19 styles below based on your needs: states (required/disabled/readonly), helpers (text/errors/counters), actions (buttons), styling (colors/sizes), and advanced behaviors (floating labels/auto-grow).

## Which 'Text Area' variant do you need?

### Just need basic multiline text input?

**Standard field states:**
- Basic multiline input? Use `BasicTextarea`
- Mark it as required? Use `RequiredTextarea`
- Need to disable it? Use `DisabledTextarea`
- Display-only text? Use `ReadOnlyTextarea`

### Need to guide users or show feedback?

**Helper elements below the field:**
- Want instructions underneath? Use `TextareaWithHelperText`
- Need an "Optional" indicator? Use `TextareaWithHint`
- Showing validation errors? Use `TextareaWithError`
- Limiting character count? Use `TextareaWithCharacterCount`

### Want action buttons with your textarea?

**Button positions:**
- Button on the left side? Use `TextareaWithLeftButton`
- Button on the right side? Use `TextareaWithRightButton`
- Full-width button below? Use `TextareaWithFullButton`

### Looking for special styling?

**Visual customizations:**
- Want a colored border? Use `ColoredBorderTextarea`
- Prefer subtle gray background? Use `GrayBackgroundTextarea`
- Need compact 2-row height? Use `ShorterTextarea`
- Want to prevent resizing? Use `NoResizeTextarea`

### Need advanced label or sizing behavior?

**Modern interactions:**
- Label overlapping the border? Use `OverlappingLabelTextarea`
- Label inside the field? Use `InsetLabelTextarea`
- Animated floating label? Use `FloatingLabelTextarea`
- Auto-expanding height? Use `AutogrowingTextarea`

---

## 📊 COMPLETE COMPONENT MATRIX

### Core Text Areas

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicTextarea** (read if you plan to implement: registry/default/components/comp-59.tsx) | 15 | Simple label + textarea | Standard forms, comments |
| **DisabledTextarea** (read if you plan to implement: registry/default/components/comp-67.tsx) | 15 | Non-interactive state | Loading states, restricted access |
| **RequiredTextarea** (read if you plan to implement: registry/default/components/comp-60.tsx) | 17 | Red asterisk indicator | Mandatory fields, form validation |
| **ReadOnlyTextarea** (read if you plan to implement: registry/default/components/comp-76.tsx) | 21 | View-only with styling | Display data, review screens |

### Text Areas with Helper Elements

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **TextareaWithHint** (read if you plan to implement: registry/default/components/comp-62.tsx) | 20 | Optional indicator right-aligned | Optional fields, user guidance |
| **TextareaWithHelperText** (read if you plan to implement: registry/default/components/comp-61.tsx) | 22 | Descriptive text below | Instructions, context help |
| **TextareaWithError** (read if you plan to implement: registry/default/components/comp-64.tsx) | 27 | Error state + message | Form validation, error feedback |
| **TextareaWithCharacterCount** (read if you plan to implement: registry/default/components/comp-74.tsx) | **41** | Live character counter | Social media posts, limited text |

### Text Areas with Actions

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **TextareaWithLeftButton** (read if you plan to implement: registry/default/components/comp-68.tsx) | 17 | Button aligned left | Quick actions, mobile-first |
| **TextareaWithRightButton** (read if you plan to implement: registry/default/components/comp-69.tsx) | 19 | Button aligned right | Desktop layouts, send actions |
| **TextareaWithFullButton** (read if you plan to implement: registry/default/components/comp-70.tsx) | 19 | Full-width button below | CTAs, form submissions |

### Styling Variants

| Component | LoC | Visual Style | Best For |
|-----------|:---:|--------------|----------|
| **ColoredBorderTextarea** (read if you plan to implement: registry/default/components/comp-63.tsx) | 15 | Indigo border/ring | Brand emphasis, focus states |
| **GrayBackgroundTextarea** (read if you plan to implement: registry/default/components/comp-65.tsx) | 19 | Muted background color | Subtle inputs, secondary forms |
| **NoResizeTextarea** (read if you plan to implement: registry/default/components/comp-75.tsx) | 19 | Fixed dimensions | Consistent layouts, controlled UI |
| **ShorterTextarea** (read if you plan to implement: registry/default/components/comp-66.tsx) | 20 | 2-row height | Space-constrained forms |

### Advanced Label Styles

| Component | LoC | Label Behavior | Best For |
|-----------|:---:|----------------|----------|
| **OverlappingLabelTextarea** (read if you plan to implement: registry/default/components/comp-71.tsx) | 20 | Label overlaps border | Modern forms, clean design |
| **InsetLabelTextarea** (read if you plan to implement: registry/default/components/comp-73.tsx) | 20 | Label inside container | Material-like design |
| **FloatingLabelTextarea** (read if you plan to implement: registry/default/components/comp-72.tsx) | 21 | Animated float on focus | Interactive forms, modern UX |
| **AutogrowingTextarea** (read if you plan to implement: registry/default/components/comp-77.tsx) | 21 | Expands with content | Dynamic content, chat interfaces |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicTextarea (comp-59)

**Description**: The simplest textarea component with a label. Your go-to choice for standard multiline text input.

**When to Use**:
- Comment sections
- Feedback forms
- Description fields
- Default starting point for any multiline text
- When you need minimal complexity

**Implementation After Refactoring**:
```tsx
import BasicTextarea from '@/components/BasicTextarea'

const [comment, setComment] = useState('')

<BasicTextarea 
  label="Leave a comment"
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  placeholder="Share your thoughts..."
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `placeholder`, `id`, `rows`

---

### 🔷 TextareaWithCharacterCount (comp-74)

**Description**: Textarea with real-time character counting and limit enforcement. Shows remaining characters dynamically.

**When to Use**:
- Social media posts (Twitter-like)
- SMS messages
- Bio/description fields with limits
- Any content with strict length requirements
- When users need visual feedback on length

**Implementation After Refactoring**:
```tsx
import TextareaWithCharacterCount from '@/components/TextareaWithCharacterCount'

const [bio, setBio] = useState('')

<TextareaWithCharacterCount 
  label="User bio"
  value={bio}
  onChange={setBio}
  maxLength={180}
  showCount={true}
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `maxLength`, `showCount`, `countFormat`

---

### 🔷 TextareaWithError (comp-64)

**Description**: Textarea with error state styling and error message display. Includes proper ARIA attributes for accessibility.

**When to Use**:
- Form validation feedback
- Real-time error display
- When input doesn't meet requirements
- Server-side validation errors
- Critical user inputs

**Implementation After Refactoring**:
```tsx
import TextareaWithError from '@/components/TextareaWithError'

const [description, setDescription] = useState('')
const [error, setError] = useState('')

<TextareaWithError 
  label="Project description"
  value={description}
  onChange={(value) => {
    setDescription(value)
    setError(value.length < 10 ? 'Description must be at least 10 characters' : '')
  }}
  error={error}
  required
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `error`, `required`, `placeholder`

---

### 🔷 TextareaWithRightButton (comp-69)

**Description**: Textarea with an action button aligned to the right. Common pattern for submit/send actions.

**When to Use**:
- Comment forms with submit
- Chat interfaces
- Quick feedback forms
- Any textarea needing immediate action
- Desktop-first layouts

**Implementation After Refactoring**:
```tsx
import TextareaWithRightButton from '@/components/TextareaWithRightButton'

const [message, setMessage] = useState('')

<TextareaWithRightButton 
  label="Send a message"
  value={message}
  onChange={setMessage}
  buttonText="Send"
  onButtonClick={handleSend}
  buttonVariant="default"
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `buttonText`, `onButtonClick`, `buttonVariant`, `buttonDisabled`

---

### 🔷 FloatingLabelTextarea (comp-72)

**Description**: Textarea with animated floating label that moves up when focused or filled. Modern, interactive design pattern.

**When to Use**:
- Modern application forms
- When saving vertical space
- Material Design-inspired interfaces
- Premium user experiences
- Mobile-first applications

**Implementation After Refactoring**:
```tsx
import FloatingLabelTextarea from '@/components/FloatingLabelTextarea'

const [notes, setNotes] = useState('')

<FloatingLabelTextarea 
  label="Additional notes"
  value={notes}
  onChange={setNotes}
  rows={4}
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `rows`, `error`, `required`

---

### 🔷 AutogrowingTextarea (comp-77)

**Description**: Textarea that automatically expands as content is added, up to a maximum height. Uses CSS field-sizing for smooth behavior.

**When to Use**:
- Chat applications
- Dynamic content creation
- When content length varies greatly
- Improving user experience
- Modern, responsive interfaces

**Implementation After Refactoring**:
```tsx
import AutogrowingTextarea from '@/components/AutogrowingTextarea'

const [content, setContent] = useState('')

<AutogrowingTextarea 
  label="Your message"
  value={content}
  onChange={setContent}
  minRows={2}
  maxRows={10}
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `minRows`, `maxRows`, `placeholder`

---

### 🔷 TextareaWithHelperText (comp-61)

**Description**: Textarea with descriptive helper text below. Provides additional context or instructions to users.

**When to Use**:
- Complex form fields
- When instructions are needed
- First-time user experiences
- Accessibility improvements
- Reducing user errors

**Implementation After Refactoring**:
```tsx
import TextareaWithHelperText from '@/components/TextareaWithHelperText'

const [feedback, setFeedback] = useState('')

<TextareaWithHelperText 
  label="Detailed feedback"
  value={feedback}
  onChange={setFeedback}
  helperText="Please provide specific examples to help us improve"
  helperTextVariant="default"
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `helperText`, `helperTextVariant`, `error`

---

## 🎨 SPECIALIZED VARIANTS

### RequiredTextarea (comp-60)
```tsx
// Shows red asterisk for required fields
<RequiredTextarea label="Required field" required />
```

### TextareaWithHint (comp-62)
```tsx
// Shows "Optional" text aligned right
<TextareaWithHint label="Additional comments" showOptional />
```

### ColoredBorderTextarea (comp-63)
```tsx
// Custom border color for brand emphasis
<ColoredBorderTextarea borderColor="indigo" />
```

### GrayBackgroundTextarea (comp-65)
```tsx
// Subtle gray background for secondary inputs
<GrayBackgroundTextarea variant="muted" />
```

### ShorterTextarea (comp-66)
```tsx
// Compact 2-row height for space savings
<ShorterTextarea rows={2} />
```

### DisabledTextarea (comp-67)
```tsx
// Non-interactive disabled state
<DisabledTextarea value="Cannot edit" disabled />
```

### NoResizeTextarea (comp-75)
```tsx
// Prevents user resizing for consistent layouts
<NoResizeTextarea resize={false} />
```

### ReadOnlyTextarea (comp-76)
```tsx
// View-only with special styling
<ReadOnlyTextarea value="Read-only content" readOnly />
```

### OverlappingLabelTextarea (comp-71)
```tsx
// Modern label that overlaps the border
<OverlappingLabelTextarea label="Modern input" />
```

### InsetLabelTextarea (comp-73)
```tsx
// Label positioned inside the textarea container
<InsetLabelTextarea label="Inset label" />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form Textarea
```tsx
// Start here for simple forms
import BasicTextarea from '@/components/BasicTextarea'

<BasicTextarea 
  label="Comments"
  placeholder="Share your thoughts..."
/>
```

### Interactive Feedback Form
```tsx
// For user feedback with validation
import TextareaWithError from '@/components/TextareaWithError'
import TextareaWithRightButton from '@/components/TextareaWithRightButton'

<TextareaWithError 
  label="Feedback"
  error={validationError}
  buttonText="Submit"
  onButtonClick={handleSubmit}
/>
```

### Social Media Post
```tsx
// Character-limited posts
import TextareaWithCharacterCount from '@/components/TextareaWithCharacterCount'

<TextareaWithCharacterCount 
  label="What's on your mind?"
  maxLength={280}
  showCount={true}
/>
```

### Modern Chat Interface
```tsx
// Auto-expanding chat input
import AutogrowingTextarea from '@/components/AutogrowingTextarea'

<AutogrowingTextarea 
  placeholder="Type a message..."
  minRows={1}
  maxRows={5}
  onSubmit={sendMessage}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 20 LoC**: Basic textareas and simple variants (BasicTextarea, DisabledTextarea)
- **20-25 LoC**: Textareas with single additional feature (HelperText, Error states)
- **25-45 LoC**: Complex interactions or state management (CharacterCount)
- **All components are lightweight**: Even the most complex textarea is only 41 LoC

**Why LoC matters**: Text areas are fundamental form elements that should remain simple. Lower complexity means:
- Easier customization for specific needs
- Better performance in forms with multiple fields
- Simpler debugging and maintenance
- Faster initial page loads

### Form Integration Patterns

Text areas commonly appear in these contexts:
1. **Standalone**: Simple comment or feedback collection
2. **Form Groups**: Part of larger forms with validation
3. **Chat/Messaging**: Real-time input with send actions
4. **Content Creation**: Blog posts, articles, long-form content

Consider these patterns when choosing components:
```
Simple Form:    BasicTextarea → TextareaWithHelperText → TextareaWithError
Chat Interface: AutogrowingTextarea → TextareaWithRightButton
Content Editor: TextareaWithCharacterCount → No specialized component needed
```

### Accessibility Considerations

All textarea components include:
- Proper label associations with `htmlFor`/`id`
- ARIA attributes for error states
- Live regions for dynamic content (character counts)
- Keyboard navigation support
- Screen reader announcements

Additional accessibility tips:
1. Always provide labels (visible or screen-reader only)
2. Use `aria-describedby` for helper text
3. Announce character limits to screen readers
4. Ensure error messages are announced
5. Maintain focus management in dynamic textareas

### Performance Tips
1. Start with BasicTextarea for most use cases
2. Add features only when users need them
3. Use CSS-based animations (floating labels) over JavaScript
4. Implement debouncing for character counting
5. Lazy load advanced features like auto-growing
6. Consider virtual scrolling for very long content

### Mobile Considerations
- Textareas should be at least 44px tall for touch targets
- Consider viewport changes when keyboard appears
- Auto-growing textareas work well on mobile
- Full-width buttons are more mobile-friendly than inline
- Test with various virtual keyboards

### Migration Path
```
BasicTextarea → TextareaWithHelperText → TextareaWithError → TextareaWithCharacterCount
   (15 LoC)         (22 LoC)                (27 LoC)            (41 LoC)
```

Start with the simplest component and add features based on user feedback!