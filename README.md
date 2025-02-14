# Welcome to your Lovable project

## Project info - THIS FILE IS ONLY ALLOWED TO BE CHANGED IS EXPRESSIVELY TOLD SO BY THE USER, NO LOVABLE INFLUENCES ALLOWED OUTSIDE OF USER-BASED PROMPTS FROM THE LOVABLE CHAT.

**URL**: https://lovable.dev/projects/c400aa17-c02f-45bb-b853-7aaa44ba43b4

> **Always stop to ensure every part of this file is fully respected.**  
> **I repeat: Always Consult the `README.md` file for additional details**

---

## Core Technologies

1. **React** (Best Practice Implementation)  
   - Keep the developer experience in mind for easy handover.  
   - No custom experimental patterns; only well-established, best-in-class solutions.
  - Consistent patterns throughout all of our work. 

2. **TypeScript** (Strict)  
   - Avoid the `any` type; create and maintain clean, custom interfaces/types.

3. **Tailwind CSS + Animate**  
   - **No inline CSS**—enforce a centralized theming for consistent styling.  
   - **No Tailwind Merge** libraries.  
   - ** Centralized Theme, style and font systems. 
   - ** Use of Poppins font with Bold for headers, regular for subtitles and light for headers font weight.
   - ** Dark Mode & Light Mode should mirror best UX practices (akin to ChatGPT’s dark/light toggle).
   - Global CSS, fonts and styling must be part of every feature and UI component naturally with each delivery.

4. **Vite**  
   - Fast build tool for React + TypeScript, ensuring efficient development workflow.

5. **ESLint**  
   - Setup ESLint to enforce above constraints and keeps us focused on best in class delivery.
   - Enforce code quality and linting rules.
   - Automated checks on every commit to maintain high standards.

6. **i18n** (version ^4.0.1)  
   - Multi-language support: Swedish, Danish, English, and Dutch are **mandatory**.
   - Multi-language support should be built as global for common translations and use-cases, component by component for their specific use-cases outside of that which can be centralized.   
   - Internationalization must be part of every feature and UI component naturally with each delivery.

7. **Icons**  
   - **lucide-react** icons are strongly encouraged to avoid additional icon dependencies.  
   - Keep usage modular and minimal, but utilize the official icon sets for consistency.

8. **No Lovable Commands**  
   - Do not use any project-level commands that deviate from these constraints.
---

## Key Guidelines

1. **Atomic File Structure**  
   - Organize components into Atoms, Molecules, and Organisms for logical separation and scalability.  
   - Maintain consistent naming (kebab-case) for every file and folder.

2. **Global CSS Only**  
   - Absolutely no inline CSS—**all** styling must come from a global or thematic Tailwind setup.

3. **kebab-case Everywhere**  
   - Ensures uniformity across file names, folders, and class names.

4. **Component Size**  
   - Each component should be under **68 lines** to enhance clarity and maintainability.  
   - Split large components into sub-components (e.g., `modal-header`, `modal-footer`, etc.) following the atomic design principle.
   - Simplify interactions between features and components in whatever way you can. 

5. **Supabase Isolation**  
   - Keep authentication, database operations, and other data logic isolated in dedicated modules.  
   - Enhances maintainability, clarity, and modular design.
   - DX for taking what has been created in supabase into actual backend needs to be a part of the work. 

6. **UI Folder for Reference**  
   - The `ui` folder in our project is **only** for reference.  
   - Do not directly use or copy these components; they are examples and patterns to guide your own implementations.

7. **Mobile-First Approach**  
   - Design components and layouts starting from the smallest screen sizes.  
   - Ensure a responsive, seamless user experience on both mobile and desktop devices.

8. **Dark/Light Mode**  
   - Implement themes akin to ChatGPT’s dark/light toggle.  
   - Must be easily switchable, with consistent styling across all components.

---

## Developer Experience (DX) Notes

- **Strict TypeScript**: Ensures reliability, helps with refactoring, and keeps collaboration smooth.  
- **Consistent Tooling**: Use ESLint (with Prettier) for an automated, frictionless workflow.  
- **Atomic Structure**: By splitting components into smaller building blocks, the codebase remains clean, testable, and easy to maintain.  
- **Minimal Dependencies**: Keep dependencies lean for faster builds and simpler updates.

---

## Best-in-Class UX & Centralized Theme System

1. **Centralized Theme Configuration**  
   - Manage all styling—colors, spacing, typography—from a single theme or config file.  
   - Changes cascade globally, ensuring cohesive design.  
   - Supports both light mode and dark mode in a user-friendly manner.

2. **60-30-10 Color Rule**  
   - Use for balanced and visually appealing interfaces:  
     - **60%** primary/base color  
     - **30%** secondary color  
     - **10%** accent color  
   - Guides user focus and keeps the UI consistently pleasing.

3. **Mobile-First & Responsive Design**  
   - Optimize every feature for mobile as a priority, ensuring desktop also provides an excellent experience.  
   - Use Tailwind’s responsive classes to simplify style variations.

---

## Testing Strategy & Coverage Requirements

### Core Testing Infrastructure
- **Test Framework**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)  
- **Test Location**: Co-located with source files inside `__tests__` directories  
- **Naming Convention**: `*.test.ts(x)` for tests

### Coverage Targets
1. **Critical Paths**  
   - Form logic: 100%  
   - Store / State Management: 90%  
   - User interactions: 85%

2. **Component Testing**  
   - Reusable components (atoms, molecules, organisms): 90%  
   - Form and data entry components: 100%  
   - Layout and structural components: 75%

3. **Utility Functions**  
   - Validation utilities: 100%  
   - Data transformations: 90%  
   - Helper functions: 85%

### Testing Best Practices
1. **Test Organization**  
   - Group by feature/behavior  
   - Use descriptive test names  
   - Follow the AAA pattern (Arrange, Act, Assert)

2. **Component Testing**  
   - Verify render logic and user interaction  
   - Confirm i18n translations for each supported language (Swedish, Danish, English, Dutch)  
   - Check accessibility features thoroughly

3. **Running Tests**
   ```bash
   # Run tests in watch mode
   npm run test

   # Run tests with coverage
   npm run test:coverage


We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
