# Pagination Component

Pagination splits long content across multiple pages. Use it for search results, product listings, data tables, or any content too large for a single view. Unlike infinite scroll that loads continuously, pagination gives users control and context - they know where they are and can jump to specific pages. Great for SEO since each page has its own URL.

Choose pagination over infinite scroll when users need to reference specific locations, share links to pages, or when showing total results matters. Data tables almost always need pagination. Mobile apps often use simple prev/next, while desktop interfaces can show full numeric controls. Pick from 12 styles below based on your needs.

## Which 'Pagination' variant do you need?

### Just need simple Previous/Next navigation?

**Want text labels "Previous" and "Next":**
- Basic minimal style? Use `BasicPrevNext`
- Prefer outline button style? Use `OutlinePrevNext`

**Want to show current page position:**
- Need "Page X of Y" text with arrows? Use `PageInfoPagination`
- Want centered page info with icon buttons? Use `CenteredPageInfo`
- Need page info on left, nav buttons on right? Use `InfoLeftPagination`

### Need clickable page numbers?

**Standard numeric navigation:**
- Classic style with ellipsis for long ranges? Use `NumericPagination`
- Want button group style (no gaps between)? Use `GroupedButtonPagination`
- Need first/last jump buttons too? Use `FullFeaturedNumeric`

**Want users to type a page number:**
- Need numeric buttons + "Go to page" input? Use `NumericWithGoTo`

### Need a dropdown page selector?
- Want all pages in a dropdown menu? Use `SelectPagePagination`

### Building a data table or admin interface?

**Choose your table pagination style:**
- Need "rows per page" + "1-10 of 95" display? Use `TablePagination`
- Want everything (page info + numbers + per-page)? Use `ComprehensivePagination`

## 📊 COMPLETE COMPONENT MATRIX

### Core Pagination Components

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicPrevNext** (read if you plan to implement: registry/default/components/comp-455.tsx) | 55 | Previous/Next with text labels | Mobile interfaces, simple lists |
| **PageInfoPagination** (read if you plan to implement: registry/default/components/comp-457.tsx) | 57 | Chevrons with "Page X of Y" | Minimal navigation with context |
| **InfoLeftPagination** (read if you plan to implement: registry/default/components/comp-458.tsx) | 65 | Page info left, buttons right | Wide layouts, dashboards |
| **OutlinePrevNext** (read if you plan to implement: registry/default/components/comp-454.tsx) | 69 | Outline buttons with chevrons | Modern UI, clear actions |
| **CenteredPageInfo** (read if you plan to implement: registry/default/components/comp-456.tsx) | 69 | Centered page info, icon buttons | Balanced layouts, symmetry |
| **NumericPagination** (read if you plan to implement: registry/default/components/comp-459.tsx) | 84 | Page numbers with ellipsis | Standard web pagination |
| **SelectPagePagination** (read if you plan to implement: registry/default/components/comp-464.tsx) | 113 | Dropdown with first/last buttons | Quick page jumping |
| **NumericWithGoTo** (read if you plan to implement: registry/default/components/comp-465.tsx) | 115 | Numbers + "Go to page" input | Power users, direct navigation |
| **GroupedButtonPagination** (read if you plan to implement: registry/default/components/comp-461.tsx) | 116 | Connected button style | Compact, modern design |
| **FullFeaturedNumeric** (read if you plan to implement: registry/default/components/comp-460.tsx) | 123 | Numbers + first/last buttons | Complete navigation control |
| **ComprehensivePagination** (read if you plan to implement: registry/default/components/comp-462.tsx) | 131 | Page info + numbers + per-page | Full-featured data tables |
| **TablePagination** (read if you plan to implement: registry/default/components/comp-463.tsx) | **135** | Rows per page + item range + nav | Enterprise data tables |

### Navigation Patterns

| Pattern | Examples | When to Use |
|---------|----------|-------------|
| **Simple Navigation** | BasicPrevNext, PageInfoPagination, OutlinePrevNext | Mobile apps, limited space |
| **Numeric Display** | NumericPagination, FullFeaturedNumeric, GroupedButtonPagination | Desktop interfaces, precise navigation |
| **Direct Selection** | NumericWithGoTo, SelectPagePagination | Large datasets, power users |
| **Table Integration** | ComprehensivePagination, TablePagination | Data tables, admin panels |
| **Custom Layouts** | InfoLeftPagination, CenteredPageInfo | Specific design requirements |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are already refactored to accept props dynamically. You can use them directly with the props shown in the examples.*

### 🔷 BasicPrevNext (comp-455)

**Description**: The simplest pagination with Previous/Next buttons using text labels. Clean and minimal.

**When to Use**:
- Mobile interfaces with limited space
- Simple content browsing
- When page numbers aren't critical
- Photo galleries or slideshows
- Tutorial/onboarding flows

**Implementation**:
```tsx
import BasicPrevNext from '@/components/BasicPrevNext'

const [currentPage, setCurrentPage] = useState(1)
const totalPages = 10

<BasicPrevNext 
  currentPage={currentPage} 
  totalPages={totalPages}
/>
```

**Props**: `currentPage`, `totalPages`

---

### 🔷 NumericPagination (comp-459)

**Description**: Standard pagination with clickable page numbers, ellipsis for large ranges, and previous/next navigation.

**When to Use**:
- Search results pages
- Product listings
- Blog archives
- Forum threads
- Any content with clear page boundaries

**Implementation**:
```tsx
import NumericPagination from '@/components/NumericPagination'

<NumericPagination 
  currentPage={currentPage}
  totalPages={totalPages}
  paginationItemsToDisplay={5} // Optional, defaults to 5
/>
```

**Props**: `currentPage`, `totalPages`, `paginationItemsToDisplay`

---

### 🔷 TablePagination (comp-463)

**Description**: Enterprise-style pagination designed for data tables with rows per page selector, item range display, and compact navigation controls.

**When to Use**:
- Data tables and grids
- Admin panels
- Analytics dashboards
- Any tabular data display
- When users need to control display density

**Implementation**:
```tsx
import TablePagination from '@/components/TablePagination'

<TablePagination 
  currentPage={currentPage}
  totalPages={totalPages}
/>

// Note: You'll need to handle rows per page changes separately
// This component provides the UI but not the data filtering logic
```

**Props**: `currentPage`, `totalPages`

---

### 🔷 NumericWithGoTo (comp-465)

**Description**: Numeric pagination enhanced with a "Go to page" input field for direct navigation to any page.

**When to Use**:
- Large datasets (100+ pages)
- Documentation sites
- API references
- Power user interfaces
- When users know their target page

**Implementation**:
```tsx
import NumericWithGoTo from '@/components/NumericWithGoTo'

<NumericWithGoTo 
  currentPage={currentPage}
  totalPages={totalPages}
  paginationItemsToDisplay={7}
/>

// Note: The input field is for UI only - implement navigation logic separately
```

**Props**: `currentPage`, `totalPages`, `paginationItemsToDisplay`

---

### 🔷 ComprehensivePagination (comp-462)

**Description**: Full-featured pagination with page info display, numeric navigation, and results per page dropdown.

**When to Use**:
- Complex data tables
- E-commerce product grids
- User management systems
- Anywhere users need complete control
- When showing filtered results

**Implementation**:
```tsx
import ComprehensivePagination from '@/components/ComprehensivePagination'

<ComprehensivePagination 
  currentPage={currentPage}
  totalPages={totalPages}
  paginationItemsToDisplay={5}
/>

// Includes: "Page X of Y", numeric pagination, "10/20/50/100 per page" dropdown
```

**Props**: `currentPage`, `totalPages`, `paginationItemsToDisplay`

---

### 🔷 FullFeaturedNumeric (comp-460)

**Description**: Complete numeric pagination with first, previous, page numbers, next, and last buttons.

**When to Use**:
- Desktop applications
- When first/last page access is important
- Document viewers
- Report navigation
- Maximum navigation flexibility

**Implementation**:
```tsx
import FullFeaturedNumeric from '@/components/FullFeaturedNumeric'

<FullFeaturedNumeric 
  currentPage={currentPage}
  totalPages={totalPages}
  paginationItemsToDisplay={5}
/>
```

**Props**: `currentPage`, `totalPages`, `paginationItemsToDisplay`

---

### 🔷 SelectPagePagination (comp-464)

**Description**: Pagination using a dropdown select menu for page selection, with first/previous/next/last buttons.

**When to Use**:
- PDF viewers
- Presentation tools
- When showing all page options is useful
- Fixed page count scenarios
- Quick page scanning needed

**Implementation**:
```tsx
import SelectPagePagination from '@/components/SelectPagePagination'

<SelectPagePagination 
  currentPage={currentPage}
  totalPages={totalPages}
/>

// Dropdown shows "Page 1", "Page 2", etc. for all pages
```

**Props**: `currentPage`, `totalPages`, `paginationItemsToDisplay` (unused but accepted)

---

## 🎨 SPECIALIZED VARIANTS

### PageInfoPagination (comp-457)
```tsx
// Minimal with page context display
<PageInfoPagination currentPage={3} totalPages={10} />
// Shows: < Page 3 of 10 >
```

### OutlinePrevNext (comp-454)
```tsx
// Previous/Next with outline button style
<OutlinePrevNext currentPage={1} totalPages={5} />
```

### CenteredPageInfo (comp-456)
```tsx
// Icon buttons with centered page information
<CenteredPageInfo currentPage={5} totalPages={20} />
```

### InfoLeftPagination (comp-458)
```tsx
// Page info on left, navigation buttons on right
<InfoLeftPagination currentPage={2} totalPages={8} />
```

### GroupedButtonPagination (comp-461)
```tsx
// Connected buttons with no gaps (button group style)
<GroupedButtonPagination currentPage={4} totalPages={15} />
```

---

## 🚀 QUICK START TEMPLATES

### Basic Website
```tsx
// Start here for most websites
import BasicPrevNext from '@/components/BasicPrevNext'

<BasicPrevNext 
  currentPage={currentPage}
  totalPages={totalPages}
/>
```

### Search Results
```tsx
// For search interfaces and listings
import NumericPagination from '@/components/NumericPagination'

<NumericPagination 
  currentPage={currentPage}
  totalPages={totalPages}
  paginationItemsToDisplay={7}
/>
```

### Data Table
```tsx
// For tables and admin panels
import TablePagination from '@/components/TablePagination'

<TablePagination 
  currentPage={currentPage}
  totalPages={totalPages}
/>
```

### Power User Interface
```tsx
// When users need maximum control
import ComprehensivePagination from '@/components/ComprehensivePagination'

<ComprehensivePagination 
  currentPage={currentPage}
  totalPages={totalPages}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 70 LoC**: Simple navigation components (BasicPrevNext, PageInfoPagination, OutlinePrevNext)
- **70-90 LoC**: Standard components with basic features (NumericPagination)
- **90-120 LoC**: Feature-rich with multiple controls (SelectPagePagination, NumericWithGoTo, GroupedButtonPagination)
- **> 120 LoC**: Complex with advanced features (FullFeaturedNumeric, TablePagination, ComprehensivePagination)

**Why LoC matters**: Pagination components can accumulate complexity through state management, accessibility features, and responsive behavior. Choose the simplest component that meets your needs to minimize maintenance overhead.

### Component Composition

All pagination components use these base UI components:
- `Pagination` - Container wrapper
- `PaginationContent` - Content flexbox container
- `PaginationItem` - Individual item wrapper
- `PaginationLink` - Clickable navigation element
- `PaginationNext/PaginationPrevious` - Semantic nav buttons
- `PaginationEllipsis` - "..." indicator for hidden pages

**Pro tip**: These building blocks can be combined to create custom pagination layouts when the pre-built components don't fit your needs.

### State Management

```tsx
// Basic state pattern for all components
const [currentPage, setCurrentPage] = useState(1)
const totalPages = Math.ceil(totalItems / itemsPerPage)

// Handle page changes
const handlePageChange = (page: number) => {
  setCurrentPage(page)
  // Fetch new data or update display
}
```

### Performance Tips
1. Start with the simplest pagination that meets your needs
2. Use `paginationItemsToDisplay` to limit visible page numbers
3. Implement URL-based pagination for better UX and SEO
4. Consider virtual scrolling instead of pagination for very large datasets
5. Preload adjacent pages for faster navigation

### Accessibility
- All pagination components include proper ARIA labels
- Keyboard navigation fully supported (Tab, Enter, Space)
- Screen reader announcements for page changes
- Disabled state handling for boundary pages
- Focus management after page changes
- Links use proper href attributes for SEO

### Mobile Patterns
All components are mobile-responsive by default:
1. Ellipsis automatically adjusts to screen size
2. Text labels may be hidden on small screens
3. Touch targets meet minimum size requirements
4. Consider using BasicPrevNext or PageInfoPagination for mobile

### Migration Path
```
BasicPrevNext → NumericPagination → FullFeaturedNumeric → ComprehensivePagination
   (55 LoC)        (84 LoC)            (123 LoC)            (131 LoC)
```

Start simple, upgrade only when users need more navigation options!