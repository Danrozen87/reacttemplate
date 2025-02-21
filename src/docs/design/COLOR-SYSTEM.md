
# Color System Documentation

## 40-30-20-10 Distribution Rule

Our color system follows a strict distribution for visual hierarchy and consistency:

### 1. Primary Colors (40%)
- Main backgrounds and content
- Primary text and headings
- Core content areas

### 2. Secondary Colors (30%)
- Supporting UI elements
- Secondary backgrounds
- Muted text and borders

### 3. Interactive Colors (20%)
- Buttons and links (#7C5A4E)
- Form elements
- Focus states
- Selection highlighting

### 4. Accent Colors (10%)
- Call-to-action elements (#9C6615)
- Important highlights
- Special states

## Color Tokens

```css
/* Primary (40%) */
--color-primary-bg: 240 10% 3.9%;
--color-primary-text: 0 0% 98%;

/* Secondary (30%) */
--color-secondary-bg: 240 3.7% 15.9%;
--color-secondary-text: 240 5% 64.9%;

/* Interactive (20%) */
--color-interactive: 17 25% 39%;      /* #7C5A4E */
--color-interactive-hover: 17 25% 34%;

/* Accent (10%) */
--color-accent: 35 77% 35%;          /* #9C6615 */
--color-accent-hover: 35 77% 30%;
```

## Usage Guidelines

1. **Primary Colors**
   - Use for main content areas and text
   - Maintain consistent contrast ratios
   - Consider light/dark mode variations

2. **Secondary Colors**
   - Use for supporting elements
   - Create visual hierarchy
   - Provide subtle differentiation

3. **Interactive Colors**
   - Apply to clickable elements (#7C5A4E)
   - Maintain consistency across states
   - Ensure accessibility standards

4. **Accent Colors**
   - Use sparingly for emphasis (#9C6615)
   - Highlight important actions
   - Create visual interest
