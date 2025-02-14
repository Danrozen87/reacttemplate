
# Calendar Component

## Usage
- Basic date picker implementation
- Supports single date selection
- Customizable styling and themes
- Responsive design

## Props Interface
See `types.ts` for detailed type definitions:
- CalendarHeaderProps
- CalendarGridProps
- CalendarProps (extends DayPicker props)

## Variants
- Default: Standard calendar view
- With header: Includes navigation
- Custom styling via className prop

## Accessibility
- ARIA labels for navigation
- Keyboard navigation support
- Screen reader announcements for date changes
- Focus management

## i18n
- Month and day names support translation
- Date formatting respects locale
- RTL support
- Required translations in locale files

## Testing
Requirements:
- 90% coverage for atomic components
- Test navigation functionality
- Test date selection
- Test accessibility features
- Test responsive behavior
