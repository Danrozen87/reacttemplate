
# LoadingCard Component

## Usage
A card component with loading state and skeleton content.

```tsx
import { LoadingCard } from "@/components/ui/card/loading-card";

function ContentCard() {
  const [loading, setLoading] = useState(true);
  
  return (
    <LoadingCard loading={loading}>
      <CardContent />
    </LoadingCard>
  );
}
```

## Props Interface
```typescript
interface LoadingCardProps extends CardProps {
  loading?: boolean;
  lines?: number;
  imageHeight?: number;
}
```

## Variants
- Default: Standard card with content
- Loading: Shows skeleton UI
- With Image: Includes image placeholder
- Custom Lines: Configurable skeleton lines

## Accessibility
- Role: article
- ARIA attributes:
  - aria-busy: true when loading
  - aria-label: describes loading state
- Reduced motion support
- Focus preservation
- Loading announcements

## i18n
Required translation keys:
```json
{
  "card": {
    "loading": "Content loading",
    "aria": {
      "loadingState": "Loading content, please wait"
    }
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Loading state rendering
- Skeleton animation
- Content transitions
- Accessibility compliance
- Responsive behavior
- Theme compatibility
- Custom configuration

## Styling
- Theme tokens:
  - colors.skeleton
  - animation.skeleton
  - spacing.card
- Responsive: true
- Dark mode support: true
