# Tree Component

Trees display hierarchical data with expandable/collapsible nodes. Use them for file explorers, navigation menus, organizational charts, or any nested data structure. They work great when you have parent-child relationships, need to show hierarchy levels, or want users to explore data by expanding branches.

Lists work better for flat data without nesting, but trees excel at showing relationships and depth. Regular navigation links show one level, but trees handle unlimited nesting. Pick from 12 styles below based on your needs: visual style (minimal/lines/icons), interaction (drag/edit/expand), purpose (navigation/files), and search capabilities (simple/advanced).

## Which 'Tree' variant do you need?

### Just showing hierarchical data?

**Want the cleanest look:**
- No extra styling at all? Use `BasicTree`

**Need visual guides:**
- Want connecting lines between nodes? Use `LinedTree`
- Want folder/file icons? Use `IconTree`
- Want the full package (lines + icons + expand arrows)? Use `LinedIconTree`

### Building navigation or file systems?

**For app navigation:**
- Need menu with current page highlighting? Use `NavigationTree`

**For file/code exploration:**
- Need file-type icons, smart folder sorting, and file explorer features? Use `FileTree`

### Users need to organize or edit content?

**For reorganizing:**
- Want drag-and-drop to reorder items? Use `DragDropTree`

**For renaming:**
- Need inline editing with F2 key? Use `RenamingTree`

### Need special interaction patterns?

**For managing large hierarchies:**
- Want expand/collapse all buttons for user control? Use `ExpandCollapseTree`

**For custom interaction behavior:**
- Want double-click to expand instead of single-click? Use `DoubleClickTree`

### Working with large datasets that need searching?

**Basic searching:**
- Just need to find and highlight items? Use `SearchTree`

**Complex filtering:**
- Need parent/child filtering logic and advanced search? Use `FilterTree`

## 📊 COMPLETE COMPONENT MATRIX

### Basic Display Trees

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **BasicTree** (read if you plan to implement: registry/default/components/comp-565.tsx) | 92 | Minimal tree, no styling | Simple hierarchies, clean interfaces |
| **LinedTree** (read if you plan to implement: registry/default/components/comp-566.tsx) | 98 | Vertical guide lines | Visual hierarchy emphasis |
| **IconTree** (read if you plan to implement: registry/default/components/comp-567.tsx) | 112 | Folder/file icons | File browsers, categorized content |
| **LinedIconTree** (read if you plan to implement: registry/default/components/comp-568.tsx) | 112 | Lines + icons + caret right | Feature-rich display trees |

### Interactive Trees

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **NavigationTree** (read if you plan to implement: registry/default/components/comp-576.tsx) | 135 | Current page highlighting, links | Documentation, menu navigation |
| **DragDropTree** (read if you plan to implement: registry/default/components/comp-569.tsx) | 136 | Multi-select, drag and drop | Organizing content, reordering |
| **RenamingTree** (read if you plan to implement: registry/default/components/comp-570.tsx) | 139 | Inline editing (F2 to rename) | Content management, file systems |
| **ExpandCollapseTree** (read if you plan to implement: registry/default/components/comp-574.tsx) | 144 | Expand/collapse all buttons | Large hierarchies, user control |
| **DoubleClickTree** (read if you plan to implement: registry/default/components/comp-573.tsx) | 146 | Custom double-click expand | Enhanced user interaction |

### Advanced Feature Trees

| Component | LoC | Key Features | Best For |
|-----------|:---:|--------------|----------|
| **SearchTree** (read if you plan to implement: registry/default/components/comp-571.tsx) | 160 | Search with highlighting | Finding content quickly |
| **FileTree** (read if you plan to implement: registry/default/components/comp-575.tsx) | 212 | File-specific icons, smart sorting | Code editors, file explorers |
| **FilterTree** (read if you plan to implement: registry/default/components/comp-572.tsx) | **320** | Advanced filtering, parent/child logic | Complex data exploration |

---

## 📋 COMPONENT DOCUMENTATION

*Note: All components below are static demos with hardcoded data. To use them dynamically, you must refactor them to accept the props listed, similar to the transformation guides below.*

### 🔷 BasicTree (comp-565)

**Description**: The simplest tree component with no additional styling or features. Pure hierarchy display.

**When to Use**:
- Simple organizational charts
- Minimal UI interfaces
- When you need clean, distraction-free hierarchies
- Prototyping and basic demos
- Mobile interfaces where space is limited

**Implementation After Refactoring**:
```tsx
import BasicTree from '@/components/BasicTree'

const treeData = {
  root: { name: "Company", children: ["dept1", "dept2"] },
  dept1: { name: "Engineering", children: ["team1"] },
  team1: { name: "Frontend Team" },
  dept2: { name: "Marketing" }
}

<BasicTree 
  data={treeData}
  rootId="root"
  onItemClick={handleItemClick}
  initialExpanded={["dept1"]}
/>
```

**Props to Implement**: `data`, `rootId`, `onItemClick`, `initialExpanded`, `indent`

---

### 🔷 DragDropTree (comp-569)

**Description**: Interactive tree with multi-selection and drag-and-drop reordering capabilities.

**When to Use**:
- Content management systems
- Task organization tools
- File system organizers
- Project management interfaces
- Any scenario requiring reordering

**Implementation After Refactoring**:
```tsx
import DragDropTree from '@/components/DragDropTree'

const [treeData, setTreeData] = useState(initialData)

<DragDropTree 
  data={treeData}
  onDataChange={setTreeData}
  onSelectionChange={handleSelection}
  enableMultiSelect={true}
  rootId="root"
/>
```

**Props to Implement**: `data`, `onDataChange`, `onSelectionChange`, `enableMultiSelect`, `rootId`

---

### 🔷 RenamingTree (comp-570)

**Description**: Tree with inline editing capabilities. Press F2 to rename items directly in the tree.

**When to Use**:
- File managers
- Content editors
- Category managers
- Settings interfaces
- Any tree where labels need editing

**Implementation After Refactoring**:
```tsx
import RenamingTree from '@/components/RenamingTree'

const [treeData, setTreeData] = useState(initialData)

<RenamingTree 
  data={treeData}
  onItemRename={handleRename}
  onDataChange={setTreeData}
  allowRename={(item) => item.editable}
/>
```

**Props to Implement**: `data`, `onItemRename`, `onDataChange`, `allowRename`, `validateName`

---

### 🔷 NavigationTree (comp-576)

**Description**: Navigation menu tree with current page highlighting and automatic expansion to active items.

**When to Use**:
- Documentation sidebars
- Application navigation
- Menu systems
- Site maps
- Multi-level navigation structures

**Implementation After Refactoring**:
```tsx
import NavigationTree from '@/components/NavigationTree'

const navData = {
  docs: { name: "Documentation", href: "/docs", children: ["guides"] },
  guides: { name: "Guides", children: ["getting-started"] },
  "getting-started": { name: "Getting Started", href: "/docs/getting-started", current: true }
}

<NavigationTree 
  data={navData}
  currentPath="/docs/getting-started"
  onNavigate={handleNavigation}
  expandToCurrent={true}
/>
```

**Props to Implement**: `data`, `currentPath`, `onNavigate`, `expandToCurrent`, `linkComponent`

---

### 🔷 SearchTree (comp-571)

**Description**: Tree with search functionality that highlights matching items and auto-expands to show results.

**When to Use**:
- Large hierarchical datasets
- Knowledge bases
- Category browsers
- When users need to find specific items quickly
- Documentation with many sections

**Implementation After Refactoring**:
```tsx
import SearchTree from '@/components/SearchTree'

<SearchTree 
  data={treeData}
  onSearch={handleSearch}
  searchPlaceholder="Quick search..."
  highlightMatches={true}
  expandOnSearch={true}
/>
```

**Props to Implement**: `data`, `onSearch`, `searchPlaceholder`, `highlightMatches`, `expandOnSearch`

---

### 🔷 FileTree (comp-575)

**Description**: File explorer tree with file-type specific icons, smart sorting (folders first), and drag-and-drop.

**When to Use**:
- Code editors
- File managers
- Asset browsers
- Project explorers
- Document organizers

**Implementation After Refactoring**:
```tsx
import FileTree from '@/components/FileTree'

const fileData = {
  "app/": { name: "app", type: "folder", children: ["app/page.tsx"] },
  "app/page.tsx": { name: "page.tsx", type: "file", extension: "tsx" }
}

<FileTree 
  data={fileData}
  onFileSelect={handleFileSelect}
  onFileMove={handleFileMove}
  showFileIcons={true}
  sortFoldersFirst={true}
/>
```

**Props to Implement**: `data`, `onFileSelect`, `onFileMove`, `showFileIcons`, `sortFoldersFirst`

---

### 🔷 FilterTree (comp-572)

**Description**: Advanced filtering tree with sophisticated search logic that shows parents and children of matching items.

**When to Use**:
- Complex data exploration
- Advanced search interfaces
- Large organizational structures
- When simple search isn't enough
- Data analysis tools

**Implementation After Refactoring**:
```tsx
import FilterTree from '@/components/FilterTree'

<FilterTree 
  data={treeData}
  onFilter={handleFilter}
  filterPlaceholder="Filter items..."
  showParentsOfMatches={true}
  showChildrenOfMatches={true}
  caseSensitive={false}
/>
```

**Props to Implement**: `data`, `onFilter`, `filterPlaceholder`, `showParentsOfMatches`, `showChildrenOfMatches`, `caseSensitive`

---

## 🎨 VISUAL VARIANTS

### LinedTree (comp-566)
```tsx
// Tree with vertical guide lines for visual hierarchy
<LinedTree data={data} showVerticalLines={true} />
```

### IconTree (comp-567)
```tsx
// Tree with folder/file icons for better visual categorization
<IconTree data={data} iconSet="lucide" showFileIcons={true} />
```

### ExpandCollapseTree (comp-574)
```tsx
// Tree with expand/collapse all controls
<ExpandCollapseTree 
  data={data}
  showExpandAll={true}
  showCollapseAll={true}
  showItemCounts={true}
/>
```

### DoubleClickTree (comp-573)
```tsx
// Tree with custom double-click to expand behavior
<DoubleClickTree 
  data={data}
  expandOnDoubleClick={true}
  selectOnSingleClick={true}
/>
```

---

## 🚀 QUICK START TEMPLATES

### Basic Hierarchy Display
```tsx
// Start here for simple tree displays
import BasicTree from '@/components/BasicTree'

<BasicTree 
  data={organizationData}
  rootId="company"
/>
```

### Interactive File Explorer
```tsx
// For file management interfaces
import FileTree from '@/components/FileTree'

<FileTree 
  data={fileSystemData}
  onFileSelect={handleFileSelect}
  showFileIcons={true}
/>
```

### Navigation Menu
```tsx
// For site navigation and menus
import NavigationTree from '@/components/NavigationTree'

<NavigationTree 
  data={menuStructure}
  currentPath={currentPage}
  onNavigate={handleNavigation}
/>
```

### Advanced Data Explorer
```tsx
// For complex data with search and filtering
import FilterTree from '@/components/FilterTree'

<FilterTree 
  data={complexDataset}
  onFilter={handleFilter}
  showParentsOfMatches={true}
/>
```

---

## 📏 GENERAL GUIDELINES

### Lines of Code Considerations
- **< 115 LoC**: Basic display trees (BasicTree, LinedTree, IconTree)
- **115-150 LoC**: Interactive trees with single features (DragDrop, Renaming, Navigation)
- **150-220 LoC**: Feature-rich trees with search or complex interactions
- **> 220 LoC**: Advanced trees with multiple features (FilterTree only when needed)

**Why LoC matters**: Tree components can become complex quickly due to recursive nature and state management. Choose the simplest option that meets your requirements.

### Library Foundation
All tree components are built on [@headless-tree](https://headless-tree.lukasbach.com/), which provides:
- **Accessibility**: Full keyboard navigation, screen reader support
- **Performance**: Virtual scrolling for large datasets
- **Flexibility**: Headless architecture allows custom styling
- **Features**: Rich plugin system for drag-drop, search, selection

**Key Features Used**:
- `syncDataLoaderFeature`: Core data loading
- `hotkeysCoreFeature`: Keyboard shortcuts
- `selectionFeature`: Multi-selection capabilities
- `dragAndDropFeature`: Drag and drop functionality
- `searchFeature`: Built-in search highlighting
- `renamingFeature`: Inline editing support

### Tree Architecture Patterns
Trees follow consistent patterns:
1. **Data Structure**: Flat object with parent-child relationships
2. **State Management**: React state for dynamic data, tree state for UI
3. **Feature Composition**: Modular features from headless-tree
4. **Accessibility**: Built-in ARIA support and keyboard navigation

### Performance Tips
1. Start with BasicTree for static hierarchies
2. Use virtual scrolling for trees with >1000 items
3. Implement lazy loading for deep hierarchies
4. Optimize search with debounced input
5. Consider pagination for very large datasets

### Accessibility
- All trees include proper ARIA labels and roles
- Full keyboard navigation (arrows, Enter, F2 for rename)
- Screen reader announcements for state changes
- Focus management during interactions
- High contrast mode support

### Common Use Cases
```
File Explorer → FileTree → Code editors, asset management
Navigation → NavigationTree → Documentation, app menus
Organization → DragDropTree → Project management, content organization
Search → SearchTree/FilterTree → Knowledge bases, large datasets
```

### Migration Path
```
BasicTree → IconTree → DragDropTree → SearchTree → FilterTree
 (92 LoC)   (112 LoC)   (136 LoC)     (160 LoC)    (320 LoC)
```

Start simple, add features as user needs grow!