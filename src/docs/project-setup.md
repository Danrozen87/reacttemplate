
# Project Setup and Core Technologies

## Core Stack

### 1. React (Best Practices)
- No experimental patterns or warnings
- Code consistency and documentation required
- One exception: README files may exceed 68 lines
- Installing dnd libraries is permitted

### 2. TypeScript (Strict)
- No `any` types allowed
- Custom types/interfaces required

### 3. Tailwind CSS + Animate
- No inline CSS
- Centralized theming only
- No Tailwind merge libraries
- theme.css can exceed 68 lines
- Poppins font (Bold headers, Regular subtitles)
- Dark/Light mode support

### 4. Vite
- Optimized for React + TypeScript development

### 5. ESLint
- Code quality enforcement
- Folder structure validation
- Accessibility checks
- Single parent folder structure

### 6. i18n (^4.0.1)
- Required languages: Swedish, Danish, English, Dutch
- Component-level i18n integration

### 7. Icons
- Prefer lucide-react
- Minimal icon dependencies
