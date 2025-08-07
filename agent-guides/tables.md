# Table Component

Tables organize data into rows and columns for easy scanning and comparison. Use them for structured data like user lists, financial reports, inventory management, or any tabular information. They excel at displaying many records with consistent attributes, enabling sorting, filtering, and batch operations.

While grids work for card-based layouts and lists handle simple items, tables shine when you need to compare values across multiple properties at once. For single-record details use cards, but for 10+ records with 3+ attributes each, tables provide the clearest view. Pick from 20 variants below based on your styling needs (borders, density, special layouts) and interaction requirements (selection, pagination, filtering, column control).

## Which 'Table' variant do you need?

### Need zero JavaScript (SEO, email, print)?
- Static HTML only? Use `BasicHTMLTable`

### Just displaying data with styling?

**Standard table layouts:**
- Clean look without row borders? Use `BorderlessRowsTable`
- Alternating row colors for readability? Use `StripedTable`
- Column dividers but no row lines? Use `VerticalLinesTable`
- Modern cards with generous spacing? Use `CardStyleTable`
- Compact layout to fit more rows? Use `DenseTable`

**Special display needs:**
- User avatars or product images? Use `ImageCellTable`
- Single item details (name-value pairs)? Use `VerticalLayoutTable`
- Long lists where headers disappear? Use `StickyHeaderTable`
- Complex matrices with rotated headers? Use `CompatibilityTable`

### Users need to select items?
- Basic checkboxes without calculations? Use `SimpleSelectionTable`
- Calculate totals for selected items? Use `SelectionTotalsTable`

### Need to customize columns?
- Let users drag to resize widths? Use `ResizableColumnsTable`
- Keep key columns visible while scrolling wide data? Use `PinnableColumnsTable`
- Let users drag to reorder columns? Use `DraggableColumnsTable`

### Handling large datasets?

**Start simple:**
- Click rows to show/hide details? Use `ExpandableRowsTable`
- Basic prev/next navigation? Use `SimplePaginationTable`
- Full page numbers for jumping? Use `NumericPaginationTable`

**Advanced data management:**
- Filter each column separately? Use `ColumnFilterTable`
- Need everything (sorting, filtering, pagination, selection)? Use `EnterpriseDataTable`

## 📊 COMPLETE COMPONENT MATRIX

### Core Interactive Tables

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SelectionTotalsTable** (read if you plan to implement: registry/default/components/comp-477.tsx) | 192 | Checkboxes + footer for totals | Shopping carts, invoices, expense reports |
| **ExpandableRowsTable** (read if you plan to implement: registry/default/components/comp-482.tsx) | 243 | Click to reveal details | Master-detail views, nested data |
| **ResizableColumnsTable** (read if you plan to implement: registry/default/components/comp-479.tsx) | 260 | Drag borders to resize | Reports with varying content lengths |
| **PinnableColumnsTable** (read if you plan to implement: registry/default/components/comp-480.tsx) | 331 | Pin columns left/right | Wide datasets, financial spreadsheets |
| **DraggableColumnsTable** (read if you plan to implement: registry/default/components/comp-481.tsx) | 343 | Drag to reorder columns | Power user interfaces, dashboards |
| **SimplePaginationTable** (read if you plan to implement: registry/default/components/comp-483.tsx) | 399 | Basic prev/next buttons | Mobile interfaces, simple lists |
| **NumericPaginationTable** (read if you plan to implement: registry/default/components/comp-484.tsx) | 399 | Page numbers with jumping | Search results, forums |
| **ColumnFilterTable** (read if you plan to implement: registry/default/components/comp-478.tsx) | **523** | Individual column filters | Employee directories, product catalogs |
| **EnterpriseDataTable** (read if you plan to implement: registry/default/components/comp-485.tsx) | **780** | Everything + kitchen sink | Complex admin panels |

### Static & Styled Tables

| Component | LoC | Visual Style / Feature | Best For |
|-----------|:---:|------------------------|----------|
| **VerticalLayoutTable** (read if you plan to implement: registry/default/components/comp-474.tsx) | 52 | Headers as first column | Single item details, properties |
| **VerticalLinesTable** (read if you plan to implement: registry/default/components/comp-470.tsx) | 86 | Column separators only | Column-focused data |
| **BasicHTMLTable** (read if you plan to implement: registry/default/components/comp-466.tsx) | 90 | Zero JS, static HTML | Documentation, SEO-critical pages |
| **BorderlessRowsTable** (read if you plan to implement: registry/default/components/comp-468.tsx) | 94 | No horizontal lines | Clean, modern interfaces |
| **StripedTable** (read if you plan to implement: registry/default/components/comp-469.tsx) | 97 | Alternating row colors | Dense data, improved readability |
| **CardStyleTable** (read if you plan to implement: registry/default/components/comp-473.tsx) | 102 | Spacious rows, card-like feel | Dashboards, important entities |
| **ImageCellTable** (read if you plan to implement: registry/default/components/comp-467.tsx) | 103 | Avatar/image column | User lists, team directories |
| **SimpleSelectionTable** (read if you plan to implement: registry/default/components/comp-472.tsx) | 103 | Basic checkboxes (no library) | Lightweight selection needs |
| **DenseTable** (read if you plan to implement: registry/default/components/comp-471.tsx) | 108 | Reduced padding, compact layout | Fitting more data in less space |
| **CompatibilityTable** (read if you plan to implement: registry/default/components/comp-476.tsx) | 151 | Rotated headers (specialized) | Browser support matrices |
| **StickyHeaderTable** (read if you plan to implement: registry/default/components/comp-475.tsx) | 172 | Fixed header on scroll | Long scrollable lists |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the EnterpriseDataTable (comp-485) transformation guide.*

### 🔷 BasicHTMLTable (comp-466)

**Description**: Pure HTML table with zero JavaScript. Perfect for SEO and printing.

**When to Use**:
- SEO-critical pages (pricing, features)
- Printable reports and invoices
- Email templates
- Documentation tables
- Any static, non-interactive data

**Implementation After Refactoring**:
```tsx
import BasicHTMLTable from '@/components/BasicHTMLTable'

const data = [
  { id: '1', name: 'Basic', price: '$9/mo', features: '10 users' },
  { id: '2', name: 'Pro', price: '$29/mo', features: '50 users' }
]

const columns = [
  { key: 'name', header: 'Plan' },
  { key: 'price', header: 'Price', align: 'right' },
  { key: 'features', header: 'Features' }
]

<BasicHTMLTable data={data} columns={columns} />
```

**Props to Implement**: `data`, `columns`, `caption`, `showFooter`, `footerContent`

---

### 🔷 SelectionTotalsTable (comp-477)

**Description**: Interactive TanStack Table with row selection checkboxes and a footer for calculated totals.

**When to Use**:
- Shopping carts with totals
- Invoice line items
- Expense reports
- Order summaries
- Any multi-select with calculations

**Implementation After Refactoring**:
```tsx
import SelectionTotalsTable from '@/components/SelectionTotalsTable'

const items = [
  { id: '1', product: 'Widget', quantity: 2, price: 10.00 },
  { id: '2', product: 'Gadget', quantity: 1, price: 25.00 }
]

<SelectionTotalsTable 
  data={items}
  onSelectionChange={(selected) => console.log(selected)}
  totalField="price"
  formatTotal={(total) => `$${total.toFixed(2)}`}
/>
```

**Props to Implement**: `data`, `onSelectionChange`, `totalField`, `formatTotal`, `columns`

---

### 🔷 ColumnFilterTable (comp-478)

**Description**: Table with individual filter inputs for each column.

**When to Use**:
- Employee directories
- Product catalogs
- Inventory management
- Multi-criteria search interfaces
- Any table needing column-specific filtering

**Implementation After Refactoring**:
```tsx
import ColumnFilterTable from '@/components/ColumnFilterTable'

const employees = [
  { id: '1', name: 'John Doe', department: 'Engineering', location: 'NYC' },
  { id: '2', name: 'Jane Smith', department: 'Marketing', location: 'SF' }
]

<ColumnFilterTable 
  data={employees}
  filterableColumns={['name', 'department', 'location']}
  placeholder="Filter..."
/>
```

**Props to Implement**: `data`, `filterableColumns`, `placeholder`, `columns`, `caseSensitive`

---

### 🔷 ResizableColumnsTable (comp-479)

**Description**: Table where users can drag column borders to adjust widths.

**When to Use**:
- Reports with varying content lengths
- User-customizable layouts
- Data analysis interfaces
- Any table where column width matters

**Implementation After Refactoring**:
```tsx
import ResizableColumnsTable from '@/components/ResizableColumnsTable'

<ResizableColumnsTable 
  data={data}
  columns={columns}
  minColumnWidth={50}
  rememberWidths={true} // Saves to localStorage
/>
```

**Props to Implement**: `data`, `columns`, `minColumnWidth`, `maxColumnWidth`, `rememberWidths`

---

### 🔷 PinnableColumnsTable (comp-480)

**Description**: Pin columns to left/right while horizontally scrolling.

**When to Use**:
- Wide datasets (10+ columns)
- Financial spreadsheets
- Keeping ID/Name visible while scrolling
- Data comparison tables

**Implementation After Refactoring**:
```tsx
import PinnableColumnsTable from '@/components/PinnableColumnsTable'

<PinnableColumnsTable 
  data={financialData}
  pinnedLeft={['id', 'name']}
  pinnedRight={['total', 'actions']}
  scrollable={true}
/>
```

**Props to Implement**: `data`, `columns`, `pinnedLeft`, `pinnedRight`, `scrollable`

---

### 🔷 DraggableColumnsTable (comp-481)

**Description**: Drag columns to reorder them.

**When to Use**:
- Power user interfaces
- Personalized dashboards
- Data analysis tools
- Reports with customizable layouts

**Implementation After Refactoring**:
```tsx
import DraggableColumnsTable from '@/components/DraggableColumnsTable'

<DraggableColumnsTable 
  data={data}
  columns={columns}
  onColumnReorder={(newOrder) => saveUserPreference(newOrder)}
  lockFirstColumn={true}
/>
```

**Props to Implement**: `data`, `columns`, `onColumnReorder`, `lockFirstColumn`, `lockLastColumn`

---

### 🔷 ExpandableRowsTable (comp-482)

**Description**: Click rows to expand and show additional details.

**When to Use**:
- Master-detail views
- Hierarchical data
- Reducing initial clutter
- Order details, user profiles
- Any nested information

**Implementation After Refactoring**:
```tsx
import ExpandableRowsTable from '@/components/ExpandableRowsTable'

<ExpandableRowsTable 
  data={orders}
  columns={columns}
  renderExpanded={(row) => <OrderDetails order={row} />}
  expandOnRowClick={true}
/>
```

**Props to Implement**: `data`, `columns`, `renderExpanded`, `expandOnRowClick`, `allowMultiple`

---

### 🔷 SimplePaginationTable (comp-483)

**Description**: Basic table with previous/next navigation.

**When to Use**:
- Mobile interfaces
- Simple lists
- Limited screen space
- When page numbers aren't needed

**Implementation After Refactoring**:
```tsx
import SimplePaginationTable from '@/components/SimplePaginationTable'

<SimplePaginationTable 
  data={allItems}
  pageSize={10}
  columns={columns}
  showPageInfo={true}
/>
```

**Props to Implement**: `data`, `columns`, `pageSize`, `showPageInfo`, `onPageChange`

---

### 🔷 NumericPaginationTable (comp-484)

**Description**: Table with numbered pages and jump-to navigation.

**When to Use**:
- Search results
- Forum threads
- Product listings
- When users need specific pages
- Large datasets with known size

**Implementation After Refactoring**:
```tsx
import NumericPaginationTable from '@/components/NumericPaginationTable'

<NumericPaginationTable 
  data={searchResults}
  pageSize={20}
  columns={columns}
  showFirstLast={true}
  maxPageButtons={7}
/>
```

**Props to Implement**: `data`, `columns`, `pageSize`, `showFirstLast`, `maxPageButtons`

---

### 🔷 EnterpriseDataTable (comp-485)

**Description**: Full-featured table with sorting, filtering, pagination, selection, and actions.

**When to Use**:
- Complex admin panels
- Data management systems
- Analytics dashboards
- When you need everything
- Large datasets with complex interactions

**Implementation**:
```tsx
import EnterpriseDataTable from '@/components/EnterpriseDataTable'

<EnterpriseDataTable 
  data={users}
  columns={columns}
  enableSorting
  enableFiltering
  enablePagination
  enableSelection
  onRowAction={(action, row) => handleAction(action, row)}
/>
```

**Props**: Already implemented! See [comp-485 documentation](./comp-485-docs.md)

---

## 🎨 STYLING VARIANTS

### BorderlessRowsTable (comp-468)
```tsx
// Clean look without row lines
<BorderlessRowsTable data={data} columns={columns} />
```

### StripedTable (comp-469)
```tsx
// Alternating row colors for readability
<StripedTable data={data} columns={columns} stripeColor="muted/50" />
```

### VerticalLinesTable (comp-470)
```tsx
// Column separators without row lines
<VerticalLinesTable data={data} columns={columns} />
```

### DenseTable (comp-471)
```tsx
// Compact layout with reduced padding
<DenseTable data={data} columns={columns} size="sm" />
```

### CardStyleTable (comp-473)
```tsx
// Spacious rows with card-like feel (h-11 headers, py-2.5 cells)
<CardStyleTable data={data} columns={columns} />
// Perfect for dashboards where each row is an important entity
```

---

## 🎭 SPECIAL LAYOUTS

### ImageCellTable (comp-467)
```tsx
// Table with avatar/image column
<ImageCellTable 
  data={users}
  imageField="avatar"
  imageSize={40}
  columns={columns}
/>
```

### VerticalLayoutTable (comp-474)
```tsx
// Property list layout (headers in first column)
<VerticalLayoutTable 
  data={userProfile}
  labelWidth="150px"
/>
```

### StickyHeaderTable (comp-475)
```tsx
// Fixed header while scrolling
<StickyHeaderTable 
  data={longList}
  columns={columns}
  maxHeight="500px"
/>
```

### SimpleSelectionTable (comp-472)
```tsx
// Basic checkboxes without TanStack library
<SimpleSelectionTable 
  data={items}
  onSelectionChange={handleSelection}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Display Table
```tsx
// Start here for simple needs
import BasicHTMLTable from '@/components/BasicHTMLTable'

<BasicHTMLTable 
  data={myData} 
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'value', header: 'Value' }
  ]} 
/>
```

### Interactive Table
```tsx
// When you need user interaction
import SelectionTotalsTable from '@/components/SelectionTotalsTable'

<SelectionTotalsTable 
  data={items}
  onSelectionChange={handleSelection}
/>
```

### Data Management Table
```tsx
// For complex data operations
import EnterpriseDataTable from '@/components/EnterpriseDataTable'

<EnterpriseDataTable 
  data={records}
  enableAll // Enables all features
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 100 LoC**: Basic styling variants, simple display tables
- **100-200 LoC**: Basic interaction (simple selection, image display)
- **200-400 LoC**: Standard features (pagination, resizing, expanding)
- **400-600 LoC**: Complex features (column filtering, advanced interactions)
- **780 LoC**: EnterpriseDataTable (only use when you need everything!)

**Why LoC matters**: Lines of code directly correlates to:
- How much code you need to understand
- Maintenance complexity
- Potential bug surface area
- Time to customize or debug

### Performance Tips
1. Start with the simplest table that meets your needs
2. Use pagination for datasets > 100 rows
3. Consider virtual scrolling for > 1000 rows
4. Lazy load advanced features

### Accessibility
- All tables include proper ARIA labels
- Keyboard navigation supported where applicable
- Screen reader friendly
- Follow WCAG 2.1 guidelines

### Migration Path
```
BasicHTMLTable → SimplePaginationTable → ColumnFilterTable → EnterpriseDataTable
   (90 LoC)         (399 LoC)              (523 LoC)           (780 LoC)
```

Start simple, upgrade only when needed!
