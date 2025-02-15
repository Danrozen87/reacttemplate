
# Theme System Documentation

## Color System Architecture

### Main Theme (60-30-10 Rule)
Our theme follows a structured color distribution:
- **60%** - Primary/Background colors
- **30%** - Secondary/Surface colors
- **10%** - Accent/CTA elements

### Form Elements (Independent System)
Form elements maintain their own styling system, intentionally separated from the 60-30-10 rule:
```tsx
// Example usage
<Input className="bg-form-input border-form-border" />
```

#### Form-Specific Colors
- Background: `--form-input`
- Border: `--form-border`
- Placeholder: `--form-placeholder`
- Focus Ring: `--form-ring`
- Error: `--form-error`

## Color Palette
Our theme uses a carefully selected color palette following the 60-30-10 rule:

### Base Colors (60%)
- `--mint`: #D0E6C6 - Fresh, natural base
- `--eggplant`: #47314A - Rich, deep contrast

### Secondary Colors (30%)
- `--khaki`: #C0B39B - Neutral balance
- `--deep-red`: #AF3E4F - Strong accent

### Accent Colors (10%)
- `--soft-orange`: #DF986D - Warm accent

## Form Input Design Pattern
Form elements follow a specific design pattern separate from the main theme:

### Light Mode
```tsx
<div className="space-y-2">
  <Label>Field Label</Label>
  <Input className="bg-form-input border-form-border" />
</div>
```

Properties:
- Background: Subtle off-white (--form-input)
- Border: Soft contrast (--form-border)
- Placeholder: Distinct but subtle (--form-placeholder)

### Dark Mode
Properties:
- Background: Darker shade (--form-input-dark)
- Border: Visible edge (--form-border-dark)
- Placeholder: Balanced visibility (--form-placeholder-dark)

## Implementation Guidelines
1. Use semantic color tokens instead of direct colors
2. Keep form styling separate from content areas
3. Maintain consistent spacing with the design system
4. Follow accessibility guidelines for form elements

