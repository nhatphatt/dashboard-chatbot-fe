# Tuition Components

Core tuition management components for the dashboard.

## 📁 Structure

```
components/tuition/
├── index.ts                    # Export components
├── TuitionFeesTab.tsx         # Main tuition fees table with CRUD
├── TuitionComparisonTab.tsx   # Compare tuition across campuses
├── TuitionDialog.tsx          # Create/Edit tuition dialog
└── README.md                  # This file
```

## 🎯 Components

### TuitionFeesTab
- **Purpose**: Main tuition fees management
- **Features**: Table, Search, Filters, CRUD operations, Pagination
- **Props**: 20+ props for data and handlers

### TuitionComparisonTab
- **Purpose**: Compare tuition fees between campuses
- **Features**: Program selection, Side-by-side comparison, Statistics
- **Props**: 7 props for comparison data

### TuitionDialog
- **Purpose**: Create/Edit tuition records
- **Features**: Form validation, Program/Campus dropdowns
- **Props**: 9 props for dialog state

## 🔧 Usage

```tsx
import {
  TuitionFeesTab,
  TuitionComparisonTab,
  TuitionDialog,
} from "@/components/tuition";
```

## 📋 Features

- ✅ **CRUD Operations**: Create, Read, Update, Delete tuition records
- ✅ **Search & Filters**: Find tuition by program, campus, year
- ✅ **Comparison**: Compare fees across different campuses
- ✅ **Pagination**: Handle large datasets efficiently
- ✅ **TypeScript**: Full type safety with interfaces
- ✅ **Responsive**: Works on desktop and mobile
