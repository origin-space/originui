# Slider Component

Sliders let users select values by dragging along a track. Use them for numeric inputs, ranges, settings, and filters where visual feedback matters. They work great for volume controls (0-100), price ranges ($10-$500), or any value selection that benefits from seeing the relative position.

Inputs work better for precise values users already know, but sliders excel when users explore options or need immediate visual feedback. Radio buttons handle discrete choices better, but sliders smoothly handle continuous ranges. Pick from 27 styles below based on your needs: orientation (horizontal/vertical), selection type (single/range/multiple), display features (output/labels/ticks), and special purposes (volume/rating/data).

## Which 'Slider' variant do you need?

### Need a single-value slider?

**Just the basics:**
- Want the simplest slider? Use `SimpleSlider`
- Need it permanently disabled? Use `DisabledSlider`

**Custom visual styling:**
- Building a custom theme? Use `StyledSliderSolid`
- Working with compact interfaces? Use `StyledSliderTiny`
- Prefer modern UI designs? Use `StyledSliderSquare`

**Need to show the value?**
- Want live value display? Use `SliderWithOutput`
- Need simple Low/High labels? Use `SliderWithLabels`
- Want labels plus enhanced tooltip? Use `SliderWithLabelsTooltip`
- Building storage/data limit controls? Use `SliderWithReferenceLabels`
- Need precise interval markers? Use `SliderWithTicks`

**Want more control options?**
- Need manual input for precision? Use `SliderWithInput`
- Want +/- increment buttons? Use `SliderWithButtons`
- Need to reset to defaults? Use `SliderWithReset`

### Need range selection (min/max)?

**Basic dual sliders:**
- Just need two-thumb selection? Use `DualRangeSlider`
- Want to display selected range? Use `DualRangeWithOutput`
- Need input fields for exact values? Use `DualRangeWithInputs`

### Building for specific industries?

**Media players:**
- Need volume control with icons? Use `VolumeSlider`
- Building audio equalizer? Use `EqualizerSliders`

**User feedback systems:**
- Want emoji satisfaction ratings? Use `EmojiRatingSlider`
- Need emojis on both ends? Use `EmojiBetweenSlider`

**E-commerce platforms:**
- Building price filters? Use `PriceRangeSlider`
- Need complex data filtering with charts? Use `PriceHistogramSlider` *(283 LoC - very complex)*

### Need vertical orientation?

**Vertical layouts:**
- Single value vertical control? Use `VerticalSlider`
- Vertical range selection? Use `VerticalDualRange`
- Vertical with precise input? Use `VerticalSliderWithInput`

### Working with multiple selection points?

**Multi-thumb controls:**
- Need 3+ selection points? Use `MultipleThumbsSlider`
- Building 3D positioning (X/Y/Z)? Use `MultiSliderWithReset`

## 📊 COMPLETE COMPONENT MATRIX

### Core Slider Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SimpleSlider** (read if you plan to implement: registry/default/components/comp-240.tsx) | 11 | Basic single value slider | Simple selections, settings |
| **DisabledSlider** (read if you plan to implement: registry/default/components/comp-241.tsx) | 11 | Non-interactive state | Readonly displays |
| **StyledSliderSolid** (read if you plan to implement: registry/default/components/comp-243.tsx) | 15 | Solid thumb styling | Custom themes |
| **StyledSliderTiny** (read if you plan to implement: registry/default/components/comp-244.tsx) | 15 | Tiny thumb design | Compact interfaces |
| **DualRangeSlider** (read if you plan to implement: registry/default/components/comp-250.tsx) | 15 | Two-thumb range selection | Date/price ranges |
| **StyledSliderSquare** (read if you plan to implement: registry/default/components/comp-242.tsx) | 17 | Square thumb shape | Modern UI designs |
| **MultipleThumbsSlider** (read if you plan to implement: registry/default/components/comp-253.tsx) | 18 | 3+ thumb support | Complex selections |
| **VerticalSlider** (read if you plan to implement: registry/default/components/comp-261.tsx) | 18 | Vertical orientation | Volume controls, equalizers |
| **VerticalDualRange** (read if you plan to implement: registry/default/components/comp-263.tsx) | 19 | Vertical range selection | Advanced filters |

### Interactive Sliders with Display

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SliderWithLabels** (read if you plan to implement: registry/default/components/comp-248.tsx) | 20 | Low/High labels | Simple ranges |
| **SliderWithOutput** (read if you plan to implement: registry/default/components/comp-247.tsx) | 24 | Live value display | Immediate feedback |
| **SliderWithLabelsTooltip** (read if you plan to implement: registry/default/components/comp-249.tsx) | 25 | Labels + tooltip | Enhanced feedback |
| **SliderWithReferenceLabels** (read if you plan to implement: registry/default/components/comp-245.tsx) | 26 | Custom scale labels | Storage, data limits |
| **DualRangeWithOutput** (read if you plan to implement: registry/default/components/comp-251.tsx) | 26 | Range with display | Price/date ranges |
| **EmojiRatingSlider** (read if you plan to implement: registry/default/components/comp-257.tsx) | 31 | Emoji feedback | User satisfaction |
| **EmojiBetweenSlider** (read if you plan to implement: registry/default/components/comp-256.tsx) | 32 | Emojis on both ends | Experience rating |
| **VolumeSlider** (read if you plan to implement: registry/default/components/comp-252.tsx) | 37 | Icon indicators | Media players |
| **PriceRangeSlider** (read if you plan to implement: registry/default/components/comp-260.tsx) | 37 | Price filter with button | E-commerce |
| **SliderWithTicks** (read if you plan to implement: registry/default/components/comp-246.tsx) | 39 | Visual tick marks | Precise selections |

### Advanced Input Integration

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SliderWithInput** (read if you plan to implement: registry/default/components/comp-255.tsx) | 50 | Manual input field | Precise value entry |
| **VerticalSliderWithInput** (read if you plan to implement: registry/default/components/comp-262.tsx) | 51 | Vertical + input | Vertical precise control |
| **SliderWithButtons** (read if you plan to implement: registry/default/components/comp-259.tsx) | 61 | +/- increment buttons | Fine adjustments |
| **DualRangeWithInputs** (read if you plan to implement: registry/default/components/comp-258.tsx) | 64 | Range + two inputs | Exact range selection |
| **EqualizerSliders** (read if you plan to implement: registry/default/components/comp-266.tsx) | 82 | Multiple vertical sliders | Audio equalizers |
| **SliderWithReset** (read if you plan to implement: registry/default/components/comp-254.tsx) | 89 | Reset to default button | Resettable settings |
| **MultiSliderWithReset** (read if you plan to implement: registry/default/components/comp-264.tsx) | 125 | X/Y/Z with global reset | 3D positioning |
| **PriceHistogramSlider** (read if you plan to implement: registry/default/components/comp-265.tsx) | **283** | Data visualization overlay | Complex data filtering |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 SimpleSlider (comp-240)

**Description**: The most basic slider component. Single value selection with default styling. Your starting point for any slider implementation.

**When to Use**:
- Form inputs for numeric values
- Settings panels (brightness, contrast)
- Simple preference selections
- Default choice for basic needs
- When minimal UI is preferred

**Implementation After Refactoring**:
```tsx
import SimpleSlider from '@/components/SimpleSlider'

const [value, setValue] = useState(25)

<SimpleSlider 
  value={value} 
  onChange={setValue}
  min={0}
  max={100}
  label="Volume"
/>
```

**Props to Implement**: `value`, `onChange`, `min`, `max`, `step`, `label`, `disabled`

---

### 🔷 SliderWithInput (comp-255)

**Description**: Slider combined with text input for precise value entry. Users can drag or type exact values.

**When to Use**:
- When precision matters (pricing, measurements)
- Professional tools and dashboards
- Scientific/engineering applications
- Financial calculators
- Any scenario requiring exact values

**Implementation After Refactoring**:
```tsx
import SliderWithInput from '@/components/SliderWithInput'

const [value, setValue] = useState(50)

<SliderWithInput 
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  label="Opacity"
  suffix="%"
/>
```

**Props to Implement**: `value`, `onChange`, `min`, `max`, `label`, `suffix`, `inputWidth`

---

### 🔷 DualRangeSlider (comp-250)

**Description**: Two-thumb slider for selecting a range between minimum and maximum values.

**When to Use**:
- Price filtering in e-commerce
- Date range selection
- Age or year ranges
- Any min/max selection
- Data filtering interfaces

**Implementation After Refactoring**:
```tsx
import DualRangeSlider from '@/components/DualRangeSlider'

const [range, setRange] = useState([25, 75])

<DualRangeSlider 
  value={range}
  onChange={setRange}
  min={0}
  max={100}
  step={10}
  label="Price Range"
/>
```

**Props to Implement**: `value`, `onChange`, `min`, `max`, `step`, `label`, `formatValue`

---

### 🔷 VolumeSlider (comp-252)

**Description**: Horizontal slider with speaker icons and live volume display. Perfect for media controls.

**When to Use**:
- Audio/video players
- System volume controls
- Sound settings
- Media applications
- Any volume-related UI

**Implementation After Refactoring**:
```tsx
import VolumeSlider from '@/components/VolumeSlider'

const [volume, setVolume] = useState(50)

<VolumeSlider 
  value={volume}
  onChange={setVolume}
  showIcons={true}
  showValue={true}
/>
```

**Props to Implement**: `value`, `onChange`, `showIcons`, `showValue`, `muted`

---

### 🔷 EmojiRatingSlider (comp-257)

**Description**: Interactive slider that shows emoji feedback based on selected value with custom tooltip labels.

**When to Use**:
- User satisfaction surveys
- Feedback forms
- Rating systems
- Experience evaluations
- Any sentiment-based input

**Implementation After Refactoring**:
```tsx
import EmojiRatingSlider from '@/components/EmojiRatingSlider'

const ratingOptions = {
  emojis: ["😡", "🙁", "😐", "🙂", "😍"],
  labels: ["Awful", "Poor", "Okay", "Good", "Amazing"]
}

<EmojiRatingSlider 
  options={ratingOptions}
  onChange={handleRating}
  defaultValue={3}
/>
```

**Props to Implement**: `options`, `onChange`, `defaultValue`, `showTooltip`

---

### 🔷 SliderWithTicks (comp-246)

**Description**: Slider with visual tick marks below the track for better value reference.

**When to Use**:
- When discrete steps are important
- Time selections (hours, months)
- Scale-based inputs
- Settings with specific intervals
- Visual guidance for selections

**Implementation After Refactoring**:
```tsx
import SliderWithTicks from '@/components/SliderWithTicks'

<SliderWithTicks 
  value={value}
  onChange={setValue}
  max={12}
  tickInterval={2}
  showLabels={true}
/>
```

**Props to Implement**: `value`, `onChange`, `max`, `tickInterval`, `showLabels`

---

### 🔷 PriceHistogramSlider (comp-265)

**Description**: Advanced dual-range slider with histogram visualization showing data distribution. The most complex slider component.

**When to Use**:
- E-commerce price filtering
- Data analysis tools
- Statistical interfaces
- When distribution matters
- Complex filtering scenarios

**Implementation After Refactoring**:
```tsx
import PriceHistogramSlider from '@/components/PriceHistogramSlider'

const priceData = {
  items: productList,
  priceField: 'price',
  buckets: 40
}

<PriceHistogramSlider 
  data={priceData}
  range={[100, 800]}
  onChange={handlePriceFilter}
  currency="$"
/>
```

**Props to Implement**: `data`, `range`, `onChange`, `currency`, `buckets`, `showCount`

---

### 🔷 EqualizerSliders (comp-266)

**Description**: Multiple vertical sliders arranged as an audio equalizer with frequency labels.

**When to Use**:
- Audio applications
- Multi-parameter adjustments
- Music players
- Sound engineering tools
- Any grouped vertical controls

**Implementation After Refactoring**:
```tsx
import EqualizerSliders from '@/components/EqualizerSliders'

const frequencies = [
  { label: "60Hz", value: 2 },
  { label: "250Hz", value: 1 },
  { label: "1kHz", value: -1 },
  { label: "4kHz", value: -3 },
  { label: "16kHz", value: 2 }
]

<EqualizerSliders 
  bands={frequencies}
  onChange={handleEqualizerChange}
  min={-5}
  max={5}
/>
```

**Props to Implement**: `bands`, `onChange`, `min`, `max`, `showTooltips`

---

## 🎨 STYLING VARIANTS

### Solid Thumb Slider (comp-243)
```tsx
// Filled thumb with reduced opacity track
<SolidThumbSlider value={value} onChange={setValue} />
```

### Square Thumb Slider (comp-242)
```tsx
// Modern square thumb design
<SquareThumbSlider value={value} onChange={setValue} />
```

### Tiny Thumb Slider (comp-244)
```tsx
// Compact thumb for dense interfaces
<TinyThumbSlider value={value} onChange={setValue} />
```

### Multiple Thumbs (comp-253)
```tsx
// Three or more selection points
<MultipleThumbsSlider 
  values={[25, 50, 100]}
  onChange={setValues}
  showTooltips={true}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Form Slider
```tsx
// Start here for simple numeric inputs
import SimpleSlider from '@/components/SimpleSlider'

<SimpleSlider 
  defaultValue={50}
  aria-label="Select value"
/>
```

### Range Selection
```tsx
// For filtering and range inputs
import DualRangeSlider from '@/components/DualRangeSlider'

<DualRangeSlider 
  defaultValue={[20, 80]}
  label="Select range"
/>
```

### Precise Input Control
```tsx
// When exact values matter
import SliderWithInput from '@/components/SliderWithInput'

<SliderWithInput 
  min={0}
  max={100}
  defaultValue={25}
/>
```

### Media Controls
```tsx
// For audio/video interfaces
import VolumeSlider from '@/components/VolumeSlider'

<VolumeSlider 
  defaultValue={75}
  showIcons={true}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 20 LoC**: Basic sliders, simple styling variants (SimpleSlider, DisabledSlider)
- **20-40 LoC**: Interactive features, basic enhancements (SliderWithOutput, VolumeSlider)
- **40-90 LoC**: Input integration, advanced controls (SliderWithInput, SliderWithReset)
- **90-130 LoC**: Complex interactions, multiple sliders (MultiSliderWithReset)
- **283 LoC**: PriceHistogramSlider (only use when data visualization is essential)

**Why LoC matters**: Slider complexity directly impacts performance, especially with real-time updates. Choose the simplest option that meets your needs.

### Slider Interaction Patterns

Sliders support multiple interaction methods:
1. **Mouse/Touch Drag**: Primary interaction for quick adjustments
2. **Keyboard Navigation**: Arrow keys for accessibility
3. **Direct Input**: Text fields for precise values
4. **Button Controls**: +/- for incremental changes
5. **Click-to-Position**: Click track to jump to value

### Performance Tips
1. Use `defaultValue` instead of controlled state when possible
2. Debounce `onChange` handlers for expensive operations
3. Limit tick marks and labels to necessary values
4. Consider virtual rendering for multiple sliders
5. Use CSS transforms for custom styling over JS

### Accessibility
- All sliders include proper ARIA labels and roles
- Keyboard navigation with arrow keys supported
- Focus indicators clearly visible
- Screen reader announces value changes
- Touch targets meet WCAG size guidelines
- High contrast mode supported

### Common Patterns
```
Basic → With Output → With Input → With Reset → Complex Visualization
(11 LoC)   (24 LoC)     (50 LoC)     (89 LoC)    (283 LoC)
```

### Mobile Considerations
- Minimum touch target: 44x44px
- Vertical sliders for portrait layouts
- Larger thumbs for touch interfaces
- Consider native range inputs for better mobile UX
- Test gesture conflicts with scrolling

### Migration Path
```
SimpleSlider → SliderWithOutput → SliderWithInput → PriceHistogramSlider
   (11 LoC)        (24 LoC)          (50 LoC)           (283 LoC)
```

Start with basic sliders, add features based on user feedback!