# Date Picker Component

Date pickers let users select dates from a calendar interface. Use them for appointment booking, date filtering, scheduling, or any form that needs date input. They're better than text inputs for dates because they prevent formatting errors, show available dates visually, and handle date validation automatically.

Prefer date pickers over dropdown selects for dates (no more separate year/month/day dropdowns). Unlike time pickers which handle hours/minutes, date pickers focus on calendar dates. Our collection includes 26 variants: from simple popovers to appointment schedulers with time slots, pricing calendars for bookings, and headless components for custom designs. Choose based on your needs: input style (popover/always visible), selection type (single/range/multiple), and special features (presets/time/pricing).

## Which 'Date Picker' variant do you need?

### Building a form that needs date input?

**Most common - click to open calendar:**
- Just picking one date? Use `PopoverDatePicker`
- Selecting a date range? Use `PopoverRangePicker`
- Want users to type OR pick? Use `InputIntegratedCalendar`

### Need an always-visible calendar?

**Standard calendars for basic selection:**
- Picking a single date? Use `BasicCalendar`
- Selecting date ranges? Use `RangeCalendar`
- Need multiple separate dates? Use `MultiDateCalendar`

**Need to control which dates users can select:**
- Some dates unavailable? Use `DisabledDatesCalendar`

**Want special visual styling:**
- Rounded day buttons? Use `CustomDayStyleCalendar`
- Styled range selection? Use `CustomRangeStyleCalendar`

**Need better navigation controls:**
- Jump to current month quickly? Use `CalendarWithButton`
- Jump to today's date? Use `CalendarWithTodayButton`
- Prefer nav buttons on the right? Use `RightNavCalendar`
- Need to select distant years? Use `YearlySelectCalendar`
- Complex year/month navigation? Use `AdvancedYearMonthPicker`

### Building specialized date experiences?

**Scheduling and appointments:**
- Basic date + time input? Use `TimeInputCalendar`
- Full appointment booking? Use `AppointmentScheduler`

**Data visualization in calendar:**
- Showing prices by day? Use `PricingCalendar`
- Need week numbers? Use `WeeklyNumbersCalendar`

**Quick selection helpers:**
- Common date shortcuts (Today, Last Week)? Use `CalendarWithPresets`
- Date range with shortcuts? Use `RangeCalendarWithPresets`

**Comparing multiple months:**
- Two months together? Use `TwoMonthCalendar`
- Three-month view? Use `ThreeMonthCalendar`

### Creating a custom design system?

**Need unstyled components (headless):**
- Date picker without styles? Use `AriaDatePicker`
- Range picker without styles? Use `AriaDateRangePicker`
- Calendar grid only? Use `AriaStandaloneCalendar`
- Range calendar logic? Use `AriaRangeCalendar`
- Disabled dates logic? Use `AriaDisabledDatesCalendar`

## 📊 COMPLETE COMPONENT MATRIX

### Core Date Pickers (react-day-picker)

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicCalendar** (read if you plan to implement: registry/default/components/comp-490.tsx) | 36 | Simplest calendar grid | Basic date display/selection |
| **AriaStandaloneCalendar** (read if you plan to implement: registry/default/components/comp-487.tsx) | 37 | Headless calendar logic | Custom calendar designs |
| **AriaRangeCalendar** (read if you plan to implement: registry/default/components/comp-488.tsx) | 41 | Headless range logic | Custom range picker UI |
| **RangeCalendar** (read if you plan to implement: registry/default/components/comp-491.tsx) | 42 | Range selection grid | Always-visible range picker |
| **MultiDateCalendar** (read if you plan to implement: registry/default/components/comp-493.tsx) | 43 | Multiple date selection | Event planning, availability |
| **AriaDatePicker** (read if you plan to implement: registry/default/components/comp-41.tsx) | 54 | Headless date picker | Fully custom date inputs |
| **TimeInputCalendar** (read if you plan to implement: registry/default/components/comp-503.tsx) | 61 | Calendar + time input | Precise datetime selection |
| **AriaDateRangePicker** (read if you plan to implement: registry/default/components/comp-42.tsx) | 61 | Headless range picker | Custom range inputs |
| **PopoverDatePicker** (read if you plan to implement: registry/default/components/comp-511.tsx) | 67 | Standard date picker | Forms, general use |
| **PopoverRangePicker** (read if you plan to implement: registry/default/components/comp-512.tsx) | 79 | Standard range picker | Bookings, date filters |
| **InputIntegratedCalendar** (read if you plan to implement: registry/default/components/comp-502.tsx) | 96 | Type or pick dates | Flexible date entry |
| **AppointmentScheduler** (read if you plan to implement: registry/default/components/comp-505.tsx) | 102 | Calendar + time slots | Appointment booking |
| **PricingCalendar** (read if you plan to implement: registry/default/components/comp-510.tsx) | 107 | Shows price per day | Travel/hotel booking |
| **CalendarWithPresets** (read if you plan to implement: registry/default/components/comp-506.tsx) | 118 | Quick date presets | Dashboards, filters |
| **RangeCalendarWithPresets** (read if you plan to implement: registry/default/components/comp-507.tsx) | 187 | Range + presets | Analytics, reports |
| **AdvancedYearMonthPicker** (read if you plan to implement: registry/default/components/comp-504.tsx) | **259** | Year/month navigation | Long-term planning |

### Additional Variants

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **CustomDayStyleCalendar** (read if you plan to implement: registry/default/components/comp-494.tsx) | 39 | Rounded day buttons | Custom styling |
| **WeeklyNumbersCalendar** (read if you plan to implement: registry/default/components/comp-499.tsx) | 50 | Shows week numbers | Week-based planning |
| **YearlySelectCalendar** (read if you plan to implement: registry/default/components/comp-498.tsx) | 95 | Year dropdown nav | Historical dates |
| **DisabledDatesCalendar** (read if you plan to implement: registry/default/components/comp-492.tsx) | 46 | Date restrictions | Availability control |
| **AriaRangeCalendar** (read if you plan to implement: registry/default/components/comp-488.tsx) | 41 | Headless range logic | Custom range picker UI |
| **AriaDisabledDatesCalendar** (read if you plan to implement: registry/default/components/comp-489.tsx) | 50 | Headless with restrictions | Custom availability UI |
| **CustomRangeStyleCalendar** (read if you plan to implement: registry/default/components/comp-495.tsx) | 47 | Round range styling | Enhanced range display |
| **CalendarWithButton** (read if you plan to implement: registry/default/components/comp-500.tsx) | 52 | Current month button | Quick navigation |
| **CalendarWithTodayButton** (read if you plan to implement: registry/default/components/comp-501.tsx) | 55 | Today button | Quick today access |

### Multi-Month Variants

| Component | LoC | Visual Layout | Best For |
|-----------|:---:|---------------|----------|
| **TwoMonthCalendar** (read if you plan to implement: registry/default/components/comp-508.tsx) | 50 | Side-by-side months | Comparing adjacent months |
| **ThreeMonthCalendar** (read if you plan to implement: registry/default/components/comp-509.tsx) | 50 | Three months view | Quarterly planning |
| **RightNavCalendar** (read if you plan to implement: registry/default/components/comp-496.tsx) | 39 | Nav buttons on right | Alternative layout |

### Library Comparison

| Feature | react-day-picker | react-aria-components |
|---------|------------------|----------------------|
| **Styling** | Fully styled, ready to use | Headless, bring your own |
| **Setup Time** | Minutes | Hours/days |
| **Customization** | CSS overrides | Complete control |
| **Accessibility** | Good | Excellent |
| **Use When** | 90% of projects | Custom design systems |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 PopoverDatePicker (comp-511)

**Description**: The standard date picker. Input button opens calendar in popover. Your go-to choice for forms.

**When to Use**:
- Form fields (birthdays, appointments)
- Single date selection
- Space-constrained layouts
- Default choice for date inputs
- Mobile-friendly interfaces

**Implementation After Refactoring**:
```tsx
import PopoverDatePicker from '@/components/PopoverDatePicker'

const [date, setDate] = useState<Date | undefined>(new Date())

<PopoverDatePicker 
  date={date} 
  onSelect={setDate}
  placeholder="Select date"
  format="PPP"
/>
```

**Props to Implement**: `date`, `onSelect`, `placeholder`, `format`, `disabled`, `minDate`, `maxDate`

---

### 🔷 PopoverRangePicker (comp-512)

**Description**: Date range picker in a popover. Select start and end dates with visual range highlighting.

**When to Use**:
- Hotel/flight bookings
- Report date ranges
- Event planning
- Analytics filters
- Any from/to date selection

**Implementation After Refactoring**:
```tsx
import PopoverRangePicker from '@/components/PopoverRangePicker'
import { DateRange } from 'react-day-picker'

const [range, setRange] = useState<DateRange | undefined>()

<PopoverRangePicker 
  range={range} 
  onSelect={setRange}
  numberOfMonths={2}
  placeholder="Select dates"
/>
```

**Props to Implement**: `range`, `onSelect`, `numberOfMonths`, `placeholder`, `minDate`, `maxDate`

---

### 🔷 AppointmentScheduler (comp-505)

**Description**: Calendar with time slot selection. Shows available times for selected date.

**When to Use**:
- Appointment booking
- Meeting scheduling
- Service reservations
- Consultation systems
- Any date + time selection

**Implementation After Refactoring**:
```tsx
import AppointmentScheduler from '@/components/AppointmentScheduler'

const availableSlots = {
  '2024-03-15': ['09:00', '10:00', '14:00'],
  '2024-03-16': ['10:00', '11:00', '15:00']
}

<AppointmentScheduler 
  availableSlots={availableSlots}
  onDateTimeSelect={handleBooking}
  timeSlotDuration={60}
/>
```

**Props to Implement**: `availableSlots`, `onDateTimeSelect`, `timeSlotDuration`, `minDate`, `maxDate`

---

### 🔷 BasicCalendar (comp-490)

**Description**: The simplest calendar component. Always visible, single date selection.

**When to Use**:
- Dashboard widgets
- Event calendars
- When space isn't constrained
- Visual date display
- Simple date picking without popover

**Implementation After Refactoring**:
```tsx
import BasicCalendar from '@/components/BasicCalendar'

const [date, setDate] = useState<Date | undefined>(new Date())

<BasicCalendar 
  selected={date}
  onSelect={setDate}
  showOutsideDays={true}
/>
```

**Props to Implement**: `selected`, `onSelect`, `showOutsideDays`, `disabled`, `modifiers`

---

### 🔷 CalendarWithPresets (comp-506)

**Description**: Calendar with quick-select preset buttons (Today, Yesterday, Last week, Last month, Last year).

**When to Use**:
- Analytics dashboards
- Report filtering
- Quick date selection
- Reducing user clicks
- Common date patterns

**Implementation After Refactoring**:
```tsx
import CalendarWithPresets from '@/components/CalendarWithPresets'

// Preset buttons built into the component:
// Today, Yesterday, Last week, Last month, Last year

<CalendarWithPresets 
  selected={date}
  onSelect={setDate}
  month={month}
  onMonthChange={setMonth}
/>
```

**Props to Implement**: `selected`, `onSelect`, `month`, `onMonthChange`, `disabled`

---

### 🔷 PricingCalendar (comp-510)

**Description**: Calendar displaying custom data (prices, availability) on each date.

**When to Use**:
- Hotel booking (room prices)
- Flight booking (ticket prices)
- Event tickets
- Resource availability
- Any per-day data display

**Implementation After Refactoring**:
```tsx
import PricingCalendar from '@/components/PricingCalendar'

const priceData = {
  '2024-03-15': { price: 199, available: true },
  '2024-03-16': { price: 249, available: true },
  '2024-03-17': { price: 179, available: false }
}

<PricingCalendar 
  data={priceData}
  onSelect={handleDateSelect}
  formatPrice={(price) => `$${price}`}
/>
```

**Props to Implement**: `data`, `onSelect`, `formatPrice`, `showUnavailable`

---

### 🔷 AdvancedYearMonthPicker (comp-504)

**Description**: Calendar with sophisticated year/month navigation. Includes a collapsible panel for quick jumping to any month/year.

**When to Use**:
- Birth date selection
- Historical data
- Long-term planning
- When users need to navigate years
- Complex date ranges

**Implementation After Refactoring**:
```tsx
import AdvancedYearMonthPicker from '@/components/AdvancedYearMonthPicker'

<AdvancedYearMonthPicker 
  selected={date}
  onSelect={setDate}
  yearRange={{ start: 1900, end: 2100 }}
  defaultExpanded={false}
/>
```

**Props to Implement**: `selected`, `onSelect`, `yearRange`, `defaultExpanded`

---

## 🎰 HEADLESS COMPONENTS (react-aria-components)

### AriaDatePicker (comp-41)

**Description**: Headless date picker with complete accessibility but zero styling.

**When to Use**:
- Building a design system from scratch
- Need complete control over DOM
- Custom styling requirements
- When react-day-picker can't be customized enough

**Implementation**:
```tsx
import AriaDatePicker from '@/components/AriaDatePicker'

// Requires significant custom styling
<AriaDatePicker 
  label="Select date"
  value={date}
  onChange={setDate}
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `minValue`, `maxValue`

---

### AriaDateRangePicker (comp-42)

**Description**: Headless date range picker. Logic only, bring your own styles.

**When to Use**:
- Custom date range UI designs
- Design system implementations
- When you need non-standard layouts
- Complete styling control needed

**Implementation**:
```tsx
import AriaDateRangePicker from '@/components/AriaDateRangePicker'

// Requires custom styling
<AriaDateRangePicker 
  label="Select dates"
  value={range}
  onChange={setRange}
/>
```

**Props to Implement**: `label`, `value`, `onChange`, `minValue`, `maxValue`

---

## 🎨 SPECIAL VARIANTS

### RangeCalendar (comp-491)
```tsx
// Always-visible range selection
<RangeCalendar 
  selected={dateRange}
  onSelect={setDateRange}
/>
```

### MultiDateCalendar (comp-493)
```tsx
// Select multiple non-consecutive dates
<MultiDateCalendar 
  selected={selectedDates}
  onSelect={setSelectedDates}
/>
```

### TimeInputCalendar (comp-503)
```tsx
// Calendar with time input field
<TimeInputCalendar 
  date={date}
  time={time}
  onDateTimeChange={handleChange}
/>
```

### InputIntegratedCalendar (comp-502)
```tsx
// Type or pick - flexible date entry
<InputIntegratedCalendar 
  value={date}
  onChange={setDate}
  inputFormat="MM/dd/yyyy"
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form Date
```tsx
// Start here for simple forms
import PopoverDatePicker from '@/components/PopoverDatePicker'

<PopoverDatePicker 
  onSelect={handleDateSelect}
/>
```

### Date Range Selection
```tsx
// For booking and filtering
import PopoverRangePicker from '@/components/PopoverRangePicker'

<PopoverRangePicker 
  onSelect={handleRangeSelect}
/>
```

### Appointment Booking
```tsx
// Complete scheduling solution
import AppointmentScheduler from '@/components/AppointmentScheduler'

<AppointmentScheduler 
  availableSlots={slots}
  onDateTimeSelect={handleBooking}
/>
```

### Dashboard Calendar
```tsx
// Always visible calendar widget
import CalendarWithPresets from '@/components/CalendarWithPresets'

<CalendarWithPresets 
  presets={quickDateOptions}
  onSelect={updateDashboard}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 50 LoC**: Basic calendars and simple variants (BasicCalendar, RangeCalendar)
- **50-80 LoC**: Standard pickers with popover (PopoverDatePicker, PopoverRangePicker)
- **80-120 LoC**: Feature-rich calendars (AppointmentScheduler, CalendarWithPresets)
- **120-200 LoC**: Complex interactions (RangeCalendarWithPresets)
- **259 LoC**: AdvancedYearMonthPicker (only when year navigation is critical)

**Why LoC matters**: Calendar components can quickly become complex. Choose the simplest option that meets your needs.

### Library Selection Guide

**Use react-day-picker when:**
- You need a working solution quickly (90% of cases)
- Default styling is acceptable
- You want built-in features like date ranges, presets
- Your team prefers configuration over coding

**Use react-aria-components when:**
- Building a custom design system
- Need complete control over markup
- Styling must match exact specifications
- Willing to invest significant development time

### Performance Tips
1. Use PopoverDatePicker/PopoverRangePicker over always-visible calendars
2. Lazy load calendar components when possible
3. Minimize calendar re-renders with proper state management
4. Consider virtual scrolling for year pickers

### Accessibility
- All components include proper ARIA labels
- Keyboard navigation fully supported
- Screen reader announcements for date changes
- Focus management for popovers
- High contrast mode supported

### Common Patterns
```
Input Field → Popover → Calendar → Selection → Close
     ↓           ↓          ↓           ↓         ↓
  Trigger    Animation   Navigate    Confirm   Update
```

### Migration Path
```
BasicCalendar → PopoverDatePicker → CalendarWithPresets → AppointmentScheduler
   (36 LoC)        (67 LoC)            (118 LoC)            (102 LoC)
```

Start with basic components, add features as user needs grow!
