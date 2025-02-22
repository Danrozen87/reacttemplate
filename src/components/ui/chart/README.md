
# Chart Component

## Usage
A flexible charting component built on Recharts with theme integration.

```tsx
import { Chart } from "@/components/ui/chart";

function DataVisualization() {
  return (
    <Chart
      type="line"
      data={chartData}
      height={300}
      showLegend
    />
  );
}
```

## Props Interface
```typescript
interface ChartProps {
  type: 'line' | 'bar' | 'area' | 'pie';
  data: ChartData[];
  height?: number;
  width?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  customColors?: string[];
}
```

## Features
- Multiple chart types
- Responsive design
- Custom theming
- Interactive tooltips
- Animated transitions
- Legend support

## Accessibility
- Role: figure
- ARIA attributes:
  - aria-label: chart description
  - aria-busy: during data loading
- Keyboard navigation
- Screen reader support
- Color contrast compliance
- Data point announcements

## i18n
Required translation keys:
```json
{
  "chart": {
    "noData": "No data available",
    "loading": "Loading chart data",
    "aria": {
      "chartType": "{{type}} chart"
    }
  }
}
```
Supports all required languages (EN, SV, DA, NL)
RTL support: true

## Testing
Coverage requirement: 100%
Key scenarios:
- Data rendering
- Responsive behavior
- Interaction handling
- Animation states
- Theme integration
- Accessibility features
- i18n support

## Styling
- Theme tokens:
  - colors.chart
  - typography.chart
  - spacing.chart
- Responsive: true
- Dark mode support: true
