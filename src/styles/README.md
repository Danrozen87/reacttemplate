
# Typography System

## Overview
Our typography system is built on the Poppins font family with a carefully crafted scale and weight system.

## Font Weights
- Light (300): Body text, subtle content
- Regular (400): Default text, interactive elements
- Bold (700): Headings, emphasis

## Type Scale
### Headings
- H1: 4xl -> 5xl -> 6xl (mobile -> tablet -> desktop)
- H2: 3xl -> 4xl -> 5xl
- H3: 2xl -> 3xl -> 4xl
- H4: xl -> 2xl -> 3xl

### Body Text
- Default: base -> lg
- Large: lg -> xl
- Small: sm -> base

## Usage
```tsx
// Headings
<h1 className="h1">Main Heading</h1>
<h2 className="h2">Section Heading</h2>

// Body text
<p className="body-default">Default paragraph text</p>
<p className="body-large">Larger body text</p>
<p className="body-small">Smaller body text</p>
```

## Accessibility
- All text components maintain a minimum contrast ratio of 4.5:1
- Text scaling is supported for users with custom font size preferences
- Line heights are optimized for readability

## Responsive Behavior
- Font sizes scale appropriately across breakpoints
- Line heights adjust for optimal readability
- Margins and spacing adapt to maintain visual hierarchy
