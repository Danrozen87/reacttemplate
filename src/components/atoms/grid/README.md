
# Grid Components

## ResponsiveGrid

A flexible grid component that adapts to different viewport sizes.

### Usage
```tsx
import { ResponsiveGrid } from './responsive-grid';

// Basic usage
<ResponsiveGrid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</ResponsiveGrid>

// Custom columns configuration
<ResponsiveGrid
  columns={{
    xs: 1,    // 1 column on mobile
    sm: 2,    // 2 columns on tablet
    lg: 3,    // 3 columns on desktop
    xl: 4     // 4 columns on large screens
  }}
  gap="lg"
>
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</ResponsiveGrid>
```

### Props
| Name    | Type    | Default | Description                    |
|---------|---------|---------|--------------------------------|
| columns | Object  | See below | Column counts per breakpoint |
| gap     | String  | 'md'    | Grid gap size                 |
| className| String | undefined | Additional CSS classes       |

Default columns configuration:
```tsx
{
  xs: 1,   // Mobile
  sm: 2,   // Small tablets
  md: 3,   // Tablets
  lg: 4,   // Desktop
  xl: 4,   // Large desktop
  '2xl': 4 // Extra large screens
}
```

### Accessibility
- Maintains proper spacing for readability
- Preserves content order
- Supports keyboard navigation

### Testing
Coverage requirement: 100%
Key scenarios:
- Renders correct number of columns at each breakpoint
- Applies correct gap spacing
- Handles custom className properly
