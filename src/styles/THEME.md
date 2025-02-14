
# Theme System Documentation

## Color Palette
Our theme uses a carefully selected color palette following the 60-30-10 rule:

### Base Colors
- `--mint`: #D0E6C6 - Fresh, natural base
- `--deep-red`: #AF3E4F - Strong accent for attention
- `--eggplant`: #47314A - Rich, deep contrast
- `--khaki`: #C0B39B - Neutral balance
- `--soft-orange`: #DF986D - Warm accent

### Input Field Design Pattern
Input fields follow specific design patterns for consistency and accessibility:

#### Light Mode
```tsx
// Correct usage with semantic tokens
<Input className="bg-input border-input-border" />

// Example with proper input styling
<div className="space-y-2">
  <Label>Field Label</Label>
  <Input className="bg-input shadow-sm border-input-border placeholder:text-input-placeholder" />
</div>
```

Properties:
- Background: Subtle off-white (--input: 33 30% 98%)
- Border: Soft contrast (--input-border: 296 15% 85%)
- Placeholder: Distinct but subtle (--input-placeholder: 296 15% 65%)

#### Dark Mode
Properties:
- Background: Darker shade (--input: 296 15% 25%)
- Text: High contrast (--input-foreground: 108 27% 90%)
- Border: Visible edge (--input-border: 296 20% 30%)
- Placeholder: Balanced visibility (--input-placeholder: 108 27% 50%)

### Usage Distribution
- **60%** Primary/Background
- **30%** Secondary/Surface colors
- **10%** Accent/CTA elements

## Theme Implementation

### Light Mode
```tsx
// Background and text
<div className="bg-background text-foreground">
  <h1>Light mode content</h1>
</div>

// Cards and surfaces
<div className="bg-card text-card-foreground">
  Card content
</div>

// Interactive elements
<button className="bg-primary text-primary-foreground">
  Click me
</button>
```

### Dark Mode
Dark mode is automatically handled through the `.dark` class selector:
```tsx
// Component will adapt to both modes
<div className="bg-background text-foreground dark:bg-background dark:text-foreground">
  Content adapts to theme
</div>
```

## Custom Utilities

### Glass Effect
```tsx
<div className="glass">
  Frosted glass container
</div>
```

### Interactive States
```tsx
<button className="interactive-hover">
  Hover and active states
</button>
```

### High Contrast Text
```tsx
<p className="text-high-contrast">
  Important content
</p>
```

## Accessibility
- All color combinations meet WCAG 2.1 AA standards
- Contrast ratios exceed 4.5:1 for text
- Interactive elements have clear focus states
- Theme transitions are smooth and respect reduced motion preferences

## Best Practices
1. Use semantic color tokens instead of direct colors
2. Always provide dark mode alternatives
3. Test interactive elements in both themes
4. Use glass effects sparingly for better readability
5. Maintain consistent spacing with the design system

## Performance
- Theme changes are hardware-accelerated
- CSS variables enable efficient updates
- Reduced motion support prevents animation issues
