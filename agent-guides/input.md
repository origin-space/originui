# Input Component

Inputs collect text, numbers, dates, and other data from users. Use them for forms, search boxes, settings, and anywhere users need to enter information. They work great for single-line text (use textarea for multi-line), user data collection, and interactive forms. Choose from 59 variants based on your needs: basic text, icons/add-ons, specialized types (password/phone/payment), dates/times, and validation states.

Selects work better for predefined choices, toggles for on/off states, and sliders for ranges. Regular buttons trigger actions, but inputs collect data. Textareas handle long text, but inputs are perfect for short entries like names, emails, and numbers. Pick from the variants below based on your specific use case.

## Which 'Input' variant do you need?

### Just need basic text entry?

**Standard states and feedback:**
- Most basic form field? Use `SimpleInput`
- Need to show it's required? Use `RequiredInput`
- Showing disabled state? Use `DisabledInput`
- Display-only data? Use `ReadOnlyInput`
- Want a subtle hint? Use `HintInput`
- Need helper text below? Use `HelperTextInput`
- Showing validation errors? Use `ErrorInput`

**Alternative visual styles:**
- Want custom brand colors? Use `ColoredBorderInput`
- Prefer gray background? Use `GrayBackgroundInput`
- Label overlapping the border? Use `OverlappingLabelInput`
- Label inside the border? Use `InsetLabelInput`
- Floating label animation? Use `AnimatedLabelInput`

### Need icons or text decorations?

**Just icons:**
- Icon before the input? Use `StartIconInput`
- Icon after the input? Use `EndIconInput`

**Text prefixes/suffixes - inline style:**
- Text prefix only? Use `StartInlineAddOnInput`
- Text suffix only? Use `EndInlineAddOnInput`
- Both prefix and suffix? Use `InlineAddOnsInput`

**Text prefixes/suffixes - separated style:**
- Separated prefix only? Use `StartAddOnInput`
- Separated suffix only? Use `EndAddOnInput`
- Mix of inline and separated? Use `MixedAddOnInput`

**Dropdown prefixes/suffixes:**
- Dropdown before input? Use `StartSelectInput`
- Dropdown after input? Use `EndSelectInput`

### Want buttons with your input?

**Attached buttons:**
- Button on the side? Use `ButtonInput`
- Button inside input? Use `InlineButtonInput`
- Button attached at end? Use `EndButtonInput`
- Icon button at end? Use `EndIconButtonInput`

**Special button features:**
- Need a clear button? Use `ClearableInput`

### Building a search interface?

- Want keyboard shortcut hint? Use `SearchWithKbdInput`
- Need loading indicator? Use `SearchWithLoaderInput`
- Want icon and submit button? Use `SearchIconButtonInput`

### Handling passwords?

- Just show/hide toggle? Use `ShowHidePasswordInput`
- Need strength meter and rules? Use `PasswordStrengthInput`

### Working with dates and times?

**Basic date/time inputs:**
- Just the date? Use `DateInput`
- Just the time? Use `TimeInput`
- Both date and time? Use `DateTimeInput`

**Time with icons:**
- Clock icon at start? Use `TimeInputStartIcon`
- Icon at the end? Use `TimeInputEndIcon`

**Advanced date selection:**
- Want a calendar popup? Use `DatePicker`
- Selecting date ranges? Use `DateRangePicker`
- Need to block certain dates? Use `UnavailableDatesRangePicker`

### Need number inputs?

- Min/max range inputs? Use `RangeInput`
- Plus/minus buttons? Use `NumberInputButtons`
- Chevron up/down controls? Use `NumberInputChevrons`

### Building payment forms?

**Individual fields:**
- Card number field? Use `CardNumberInput`
- Expiry date field? Use `ExpiryDateInput`
- Security code (CVC) field? Use `CVCInput`

**Complete solution:**
- All-in-one card form? Use `PaymentCardInput`

### Managing text limits?

- Show current/max count? Use `CharacterLimitInput`
- Show remaining characters? Use `CharactersLeftInput`
- Need copy functionality? Use `CopyToClipboardInput`

### Need verification codes (OTP)?

- Simple 4-digit code? Use `OTPInputSingle`
- Spaced digit boxes? Use `OTPInputSpaced`
- Two groups of 3 digits? Use `OTPInputDouble`

### Special data types?

**File handling:**
- File uploads? Use `FileInput`

**Phone numbers:**
- International phone input? Use `PhoneNumberInput`

**Tags and lists:**
- Tags above the input? Use `TagInput`
- Tags inside the input? Use `TagInputInner`

**Formatted inputs:**
- Custom format masks? Use `MaskedInput`
- Time duration format? Use `TimestampInput`

## 📊 COMPLETE COMPONENT MATRIX

### Core Input Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SimpleInput** (read if you plan to implement: registry/default/components/comp-01.tsx) | 14 | Basic email input with label | Standard forms, simple data entry |
| **DisabledInput** (read if you plan to implement: registry/default/components/comp-08.tsx) | 14 | Disabled state example | Showing inactive fields |
| **RequiredInput** (read if you plan to implement: registry/default/components/comp-02.tsx) | 16 | Required field with asterisk | Mandatory form fields |
| **ColoredBorderInput** (read if you plan to implement: registry/default/components/comp-05.tsx) | 16 | Custom border/ring colors | Branded or themed forms |
| **FileInput** (read if you plan to implement: registry/default/components/comp-30.tsx) | 18 | File upload styling | Document uploads, attachments |
| **OverlappingLabelInput** (read if you plan to implement: registry/default/components/comp-31.tsx) | 18 | Label overlaps border | Compact modern forms |
| **HintInput** (read if you plan to implement: registry/default/components/comp-04.tsx) | 19 | Optional hint text | Fields with status indicators |
| **GrayBackgroundInput** (read if you plan to implement: registry/default/components/comp-07.tsx) | 19 | Muted background style | Alternative visual style |
| **AnimatedLabelInput** (read if you plan to implement: registry/default/components/comp-32.tsx) | 20 | Floating label animation | Modern UX, space-saving |
| **HelperTextInput** (read if you plan to implement: registry/default/components/comp-03.tsx) | 21 | Descriptive helper text | Complex fields needing explanation |
| **ReadOnlyInput** (read if you plan to implement: registry/default/components/comp-52.tsx) | 21 | Read-only with styling | Display-only data |
| **InsetLabelInput** (read if you plan to implement: registry/default/components/comp-33.tsx) | 22 | Label inside input border | Alternative label style |
| **ErrorInput** (read if you plan to implement: registry/default/components/comp-06.tsx) | 28 | Error state with message | Form validation feedback |

### Inputs with Add-ons

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **StartIconInput** (read if you plan to implement: registry/default/components/comp-09.tsx) | 20 | Icon at input start | Email, username fields |
| **EndIconInput** (read if you plan to implement: registry/default/components/comp-10.tsx) | 20 | Icon at input end | Status indicators |
| **StartInlineAddOnInput** (read if you plan to implement: registry/default/components/comp-11.tsx) | 24 | Inline text prefix | URLs, protocols |
| **EndInlineAddOnInput** (read if you plan to implement: registry/default/components/comp-12.tsx) | 24 | Inline text suffix | Domains, units |
| **StartAddOnInput** (read if you plan to implement: registry/default/components/comp-14.tsx) | 24 | Separate prefix section | Clear visual separation |
| **EndAddOnInput** (read if you plan to implement: registry/default/components/comp-15.tsx) | 24 | Separate suffix section | File extensions, TLDs |
| **InlineAddOnsInput** (read if you plan to implement: registry/default/components/comp-13.tsx) | 27 | Both prefix & suffix | Currency, units |
| **MixedAddOnInput** (read if you plan to implement: registry/default/components/comp-16.tsx) | 27 | Mixed inline/separate | Complex formatting |
| **StartSelectInput** (read if you plan to implement: registry/default/components/comp-17.tsx) | 30 | Dropdown prefix | Protocol/scheme selection |
| **EndSelectInput** (read if you plan to implement: registry/default/components/comp-18.tsx) | 27 | Dropdown suffix | Domain selection |

### Inputs with Buttons

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ButtonInput** (read if you plan to implement: registry/default/components/comp-22.tsx) | 18 | Side-by-side button | Newsletter signup |
| **InlineButtonInput** (read if you plan to implement: registry/default/components/comp-19.tsx) | 23 | Button inside input | Compact actions |
| **EndButtonInput** (read if you plan to implement: registry/default/components/comp-21.tsx) | 24 | Attached end button | Form submissions |
| **EndIconButtonInput** (read if you plan to implement: registry/default/components/comp-20.tsx) | 28 | Icon button attached | Download, actions |
| **SearchIconButtonInput** (read if you plan to implement: registry/default/components/comp-26.tsx) | 32 | Search with submit | Search forms |
| **ClearableInput** (read if you plan to implement: registry/default/components/comp-24.tsx) | 46 | Clear button on input | Resettable fields |

### Search Inputs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SearchWithKbdInput** (read if you plan to implement: registry/default/components/comp-25.tsx) | 26 | Keyboard shortcut hint | Power user interfaces |
| **SearchIconButtonInput** (read if you plan to implement: registry/default/components/comp-26.tsx) | 32 | Icon + submit button | Standard search |
| **SearchWithLoaderInput** (read if you plan to implement: registry/default/components/comp-27.tsx) | 59 | Loading state indicator | Live search, autocomplete |

### Password & Security

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ShowHidePasswordInput** (read if you plan to implement: registry/default/components/comp-23.tsx) | 42 | Toggle visibility | Login/signup forms |
| **PasswordStrengthInput** (read if you plan to implement: registry/default/components/comp-51.tsx) | **136** | Strength meter + requirements | Account creation |

### Numeric Inputs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **RangeInput** (read if you plan to implement: registry/default/components/comp-486.tsx) | 29 | Min/max range inputs | Price ranges, filters |
| **NumberInputButtons** (read if you plan to implement: registry/default/components/comp-28.tsx) | 46 | +/- increment buttons | Quantity selection |
| **NumberInputChevrons** (read if you plan to implement: registry/default/components/comp-29.tsx) | 55 | Chevron steppers | Precise numeric input |

### Date & Time Inputs (React Aria)

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **DateInput** (read if you plan to implement: registry/default/components/comp-36.tsx) | 29 | Date-only field | Birthdays, deadlines |
| **TimeInput** (read if you plan to implement: registry/default/components/comp-37.tsx) | 29 | Time-only field | Scheduling, hours |
| **DateTimeInput** (read if you plan to implement: registry/default/components/comp-40.tsx) | 31 | Combined date/time | Appointments, events |
| **TimeInputStartIcon** (read if you plan to implement: registry/default/components/comp-38.tsx) | 37 | Time with clock icon | Visual time fields |
| **TimeInputEndIcon** (read if you plan to implement: registry/default/components/comp-39.tsx) | 37 | Time with end icon | Alternative layout |
| **DatePicker** (read if you plan to implement: registry/default/components/comp-41.tsx) | 53 | Calendar popover | User-friendly date selection |
| **DateRangePicker** (read if you plan to implement: registry/default/components/comp-42.tsx) | 60 | Start/end date picker | Booking systems |
| **UnavailableDatesRangePicker** (read if you plan to implement: registry/default/components/comp-43.tsx) | **91** | Blackout dates | Hotel/flight booking |

### Payment Inputs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **ExpiryDateInput** (read if you plan to implement: registry/default/components/comp-48.tsx) | 38 | MM/YY formatting | Payment forms |
| **CVCInput** (read if you plan to implement: registry/default/components/comp-49.tsx) | 38 | Security code field | Checkout flows |
| **CardNumberInput** (read if you plan to implement: registry/default/components/comp-47.tsx) | 44 | Card number + icon | Payment entry |
| **PaymentCardInput** (read if you plan to implement: registry/default/components/comp-50.tsx) | **80** | Complete card form | One-step payment |

### Character & Text Management

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **CharacterLimitInput** (read if you plan to implement: registry/default/components/comp-34.tsx) | 43 | Shows count/limit | Tweet-like inputs |
| **CharactersLeftInput** (read if you plan to implement: registry/default/components/comp-35.tsx) | 41 | Shows remaining chars | Limited text fields |
| **CopyToClipboardInput** (read if you plan to implement: registry/default/components/comp-53.tsx) | **80** | Copy button + feedback | API keys, codes |

### OTP/PIN Inputs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **OTPInputSingle** (read if you plan to implement: registry/default/components/comp-44.tsx) | 56 | 4-digit PIN | Simple verification |
| **OTPInputSpaced** (read if you plan to implement: registry/default/components/comp-58.tsx) | 56 | Spaced boxes | Visual clarity |
| **OTPInputDouble** (read if you plan to implement: registry/default/components/comp-45.tsx) | **69** | Two 3-digit groups | Phone verification |

### Advanced Inputs

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **MaskedInput** (read if you plan to implement: registry/default/components/comp-54.tsx) | 40 | Pattern masking | License plates, codes |
| **TimestampInput** (read if you plan to implement: registry/default/components/comp-55.tsx) | 40 | Time format mask | Duration entry |
| **TagInputInner** (read if you plan to implement: registry/default/components/comp-57.tsx) | 60 | Tags inside input | Compact tag entry |
| **TagInput** (read if you plan to implement: registry/default/components/comp-56.tsx) | **72** | Tags above input | Skills, categories |
| **PhoneNumberInput** (read if you plan to implement: registry/default/components/comp-46.tsx) | **125** | Country selector + formatting | International forms |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 SimpleInput (comp-01)

**Description**: The most basic input component with label and email type. Your starting point for any form.

**When to Use**:
- Standard form fields
- Email collection
- Simple text entry
- Default starting point
- When you need minimal complexity

**Implementation After Refactoring**:
```tsx
import SimpleInput from '@/components/SimpleInput'

const [email, setEmail] = useState('')

<SimpleInput 
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
/>
```

**Props to Implement**: `label`, `type`, `value`, `onChange`, `placeholder`, `required`, `disabled`

---

### 🔷 ShowHidePasswordInput (comp-23)

**Description**: Password input with toggle button to show/hide the password text. Essential for authentication forms.

**When to Use**:
- Login forms
- Registration forms
- Password change forms
- Any password entry
- When users need to verify their input

**Implementation After Refactoring**:
```tsx
import ShowHidePasswordInput from '@/components/ShowHidePasswordInput'

const [password, setPassword] = useState('')

<ShowHidePasswordInput 
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter password"
  label="Password"
/>
```

**Props to Implement**: `value`, `onChange`, `placeholder`, `label`, `required`, `minLength`

---

### 🔷 PasswordStrengthInput (comp-51)

**Description**: Advanced password input with real-time strength indicator and requirement checklist. The most comprehensive password component.

**When to Use**:
- User registration
- Password reset flows
- Security-critical applications
- When you need to enforce password policies
- Account creation with requirements

**Implementation After Refactoring**:
```tsx
import PasswordStrengthInput from '@/components/PasswordStrengthInput'

const [password, setPassword] = useState('')

<PasswordStrengthInput 
  value={password}
  onChange={setPassword}
  requirements={[
    { regex: /.{8,}/, text: "At least 8 characters" },
    { regex: /[0-9]/, text: "At least 1 number" },
    { regex: /[a-z]/, text: "At least 1 lowercase letter" },
    { regex: /[A-Z]/, text: "At least 1 uppercase letter" }
  ]}
/>
```

**Props to Implement**: `value`, `onChange`, `requirements`, `onStrengthChange`, `showRequirements`

---

### 🔷 InlineAddOnsInput (comp-13)

**Description**: Input with inline prefix and suffix text for currency or units.

**When to Use**:
- Currency inputs ($ X.XX EUR)
- Measurement inputs
- URL parts
- Any field needing inline context
- Compact layouts

**Implementation After Refactoring**:
```tsx
import InlineAddOnsInput from '@/components/InlineAddOnsInput'

<InlineAddOnsInput 
  prefix="€"
  suffix="EUR"
  placeholder="0.00"
  type="text"
  label="Amount"
/>
```

**Props to Implement**: `prefix`, `suffix`, `value`, `onChange`, `placeholder`, `type`

---

### 🔷 SearchWithLoaderInput (comp-27)

**Description**: Search input with loading indicator that shows while searching. Great for live search experiences.

**When to Use**:
- Live search/autocomplete
- API-powered search
- Real-time filtering
- When search has latency
- Ajax search interfaces

**Implementation After Refactoring**:
```tsx
import SearchWithLoaderInput from '@/components/SearchWithLoaderInput'

const [query, setQuery] = useState('')
const [isSearching, setIsSearching] = useState(false)

<SearchWithLoaderInput 
  value={query}
  onChange={setQuery}
  isLoading={isSearching}
  onSearch={handleSearch}
  placeholder="Search..."
/>
```

**Props to Implement**: `value`, `onChange`, `isLoading`, `onSearch`, `placeholder`, `debounceMs`

---

### 🔷 PhoneNumberInput (comp-46)

**Description**: International phone number input with country selector and proper formatting. The most feature-rich input component.

**When to Use**:
- Contact forms
- International applications
- Phone verification flows
- User registration
- Any form collecting phone numbers

**Implementation After Refactoring**:
```tsx
import PhoneNumberInput from '@/components/PhoneNumberInput'

const [phone, setPhone] = useState('')

<PhoneNumberInput 
  value={phone}
  onChange={setPhone}
  defaultCountry="US"
  placeholder="Enter phone number"
/>
```

**Props to Implement**: `value`, `onChange`, `defaultCountry`, `countries`, `placeholder`

---

### 🔷 DatePicker (comp-41)

**Description**: Date input with calendar popover using React Aria for full accessibility.

**When to Use**:
- Booking forms
- Event scheduling
- Birthday inputs
- Any date selection
- When visual calendar helps

**Implementation After Refactoring**:
```tsx
import DatePicker from '@/components/DatePicker'

const [date, setDate] = useState(null)

<DatePicker 
  label="Select date"
  value={date}
  onChange={setDate}
  minDate={new Date()}
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `minDate`, `maxDate`, `isDateUnavailable`

---

### 🔷 PaymentCardInput (comp-50)

**Description**: Complete credit card form with number, expiry, and CVC in a single component.

**When to Use**:
- Checkout flows
- Payment forms
- Subscription signups
- One-step payment collection
- E-commerce applications

**Implementation After Refactoring**:
```tsx
import PaymentCardInput from '@/components/PaymentCardInput'

const [cardData, setCardData] = useState({
  number: '',
  expiry: '',
  cvc: ''
})

<PaymentCardInput 
  value={cardData}
  onChange={setCardData}
  onValid={(isValid) => setCanSubmit(isValid)}
/>
```

**Props to Implement**: `value`, `onChange`, `onValid`, `showCardType`, `acceptedCards`

---

### 🔷 TagInput (comp-56)

**Description**: Input for adding multiple tags with remove functionality.

**When to Use**:
- Skill selection
- Category assignment
- Keyword entry
- Multi-value fields
- Tagging systems

**Implementation After Refactoring**:
```tsx
import TagInput from '@/components/TagInput'

const [tags, setTags] = useState(['React', 'TypeScript'])

<TagInput 
  tags={tags}
  onTagsChange={setTags}
  placeholder="Add a skill"
  maxTags={10}
/>
```

**Props to Implement**: `tags`, `onTagsChange`, `placeholder`, `maxTags`, `allowDuplicates`

---

### 🔷 OTPInputDouble (comp-45)

**Description**: Six-digit OTP input split into two groups of three for better readability.

**When to Use**:
- Two-factor authentication
- Phone verification
- Security codes
- Split PIN entry
- Banking applications

**Implementation After Refactoring**:
```tsx
import OTPInputDouble from '@/components/OTPInputDouble'

const [otp, setOtp] = useState('')

<OTPInputDouble 
  value={otp}
  onChange={setOtp}
  onComplete={(code) => verifyOTP(code)}
  autoFocus
/>
```

**Props to Implement**: `value`, `onChange`, `onComplete`, `autoFocus`, `isDisabled`

---

## 🎨 SPECIALIZED VARIANTS

### CharacterLimitInput (comp-34)
```tsx
// Shows current/max character count
<CharacterLimitInput maxLength={50} showCount />
```

### ClearableInput (comp-24)
```tsx
// Input with clear button that appears when filled
<ClearableInput onClear={handleClear} />
```

### AnimatedLabelInput (comp-32)
```tsx
// Floating label that animates on focus/fill
<AnimatedLabelInput label="Email" />
```

### FileInput (comp-30)
```tsx
// Styled file upload input
<FileInput accept="image/*" multiple />
```

### CopyToClipboardInput (comp-53)
```tsx
// Read-only input with copy button
<CopyToClipboardInput value="npm install origin-ui" />
```

### MaskedInput (comp-54)
```tsx
// Input with format mask (license plates, etc)
<MaskedInput mask="AA99 AAA" placeholder="AB12 CDE" />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form
```tsx
// Start here for simple forms
import SimpleInput from '@/components/SimpleInput'

<SimpleInput 
  label="Email"
  type="email"
  required
/>
```

### Login Form
```tsx
// Email and password with validation
import SimpleInput from '@/components/SimpleInput'
import ShowHidePasswordInput from '@/components/ShowHidePasswordInput'

<>
  <SimpleInput label="Email" type="email" required />
  <ShowHidePasswordInput label="Password" required />
</>
```

### Search Interface
```tsx
// Search with loading state
import SearchWithLoaderInput from '@/components/SearchWithLoaderInput'

<SearchWithLoaderInput 
  onSearch={handleSearch}
  debounceMs={300}
/>
```

### Payment Form
```tsx
// Complete payment collection
import PaymentCardInput from '@/components/PaymentCardInput'

<PaymentCardInput 
  onValid={setCanPay}
/>
```

### Contact Form
```tsx
// Phone and email collection
import SimpleInput from '@/components/SimpleInput'
import PhoneNumberInput from '@/components/PhoneNumberInput'

<>
  <SimpleInput label="Email" type="email" />
  <PhoneNumberInput label="Phone" international />
</>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 20 LoC**: Basic inputs, simple variants (SimpleInput, DisabledInput)
- **20-30 LoC**: Inputs with single features (icons, add-ons, buttons)
- **30-50 LoC**: Specialized inputs (date/time, search, clear button)
- **50-80 LoC**: Complex interactions (OTP, payment, tags)
- **> 80 LoC**: Full-featured components (PhoneNumberInput, PasswordStrength)

**Why LoC matters**: Input components can quickly become complex with validation, formatting, and interaction logic. Choose the simplest component that meets your needs.

### Input Composition Patterns

Most inputs are composed of these building blocks:
- Base `Input` component from `/ui/input`
- `Label` component for accessibility
- Icons from `lucide-react`
- Wrapper `div` with relative positioning
- State management with `useState`

**Pro tip**: Start with SimpleInput and add features as needed rather than starting with complex components.

### Accessibility Best Practices

All inputs follow these accessibility patterns:
1. Proper label association with `htmlFor`/`id`
2. Unique IDs using `useId()` hook
3. ARIA attributes for states and live regions
4. Keyboard navigation support
5. Screen reader announcements

### State Management

Common patterns for input state:
```tsx
// Basic controlled input
const [value, setValue] = useState('')

// With validation
const [value, setValue] = useState('')
const [error, setError] = useState('')

// With loading
const [value, setValue] = useState('')
const [isLoading, setIsLoading] = useState(false)
```

### Third-Party Libraries

Several components use specialized libraries:
- **react-payment-inputs**: Credit card formatting
- **react-phone-number-input**: International phone numbers
- **input-otp**: OTP/PIN inputs
- **use-mask-input**: Input masking
- **emblor**: Tag inputs
- **react-aria-components**: Accessible date/time inputs

### Performance Tips
1. Use uncontrolled inputs for better performance in large forms
2. Debounce onChange handlers for search inputs
3. Lazy load complex inputs (PhoneNumberInput, PaymentCardInput)
4. Memoize validation functions
5. Use React.memo for input components in lists

### Form Integration

Inputs work with any form library:
```tsx
// React Hook Form
<Controller
  name="email"
  control={control}
  render={({ field }) => <SimpleInput {...field} />}
/>

// Formik
<Field name="email" as={SimpleInput} />
```

### Migration Path
```
SimpleInput → ErrorInput → CharacterLimitInput → PasswordStrengthInput
   (14 LoC)     (28 LoC)      (43 LoC)            (136 LoC)
```

Start with the basics, add features only when users need them!