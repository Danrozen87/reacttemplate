# YearGrid Component

A flexible and accessible calendar grid component for displaying and interacting with yearly schedules.

## Features

- Year/Month/Week view modes
- Responsive design with horizontal scrolling
- Keyboard navigation support
- Week numbers display
- Weekend highlighting
- Current day indicator
- Drag and drop support
- Accessible with ARIA attributes
- Dark mode support

## Usage

```tsx
import { YearGrid } from '@/components/ui/year-grid';

export default function Calendar() {
  return (
    <YearGrid
      year={2024}
      dayWidth={24}
      onDayClick={(dayIndex) => console.log(`Day ${dayIndex} clicked`)}
      onDragOver={(dayIndex) => console.log(`Dragged over day ${dayIndex}`)}
    />
  );
}
```

## Props Interface

See `types.ts` for detailed type definitions.

## Accessibility

- Proper ARIA roles and labels
- Keyboard navigation support
- High contrast support via Tailwind classes
- Screen reader friendly structure

## i18n

The component uses month names that should be translated via the i18n system.
Required translations are in the common namespace:
- Month names
- Week abbreviation
- View mode labels

## Testing
Coverage requirement: 100%
Key scenarios:
- Core grid rendering
- Date calculations
- User interactions
- Accessibility features
- Leap year handling
- Week number calculations
- Current day highlighting
- View mode switching
- Keyboard navigation
- Drag and drop interactions
- RTL support
- Theme compatibility
