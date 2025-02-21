# Welcome to your Lovable project

## Project info - THIS FILE IS ONLY ALLOWED TO BE CHANGED IF IT IS EXPRESSIVELY TOLD SO BY THE USER, NO LOVABLE INFLUENCES ALLOWED OUTSIDE OF USER-BASED PROMPTS FROM THE LOVABLE CHAT.

**URL**: https://lovable.dev/projects/c400aa17-c02f-45bb-b853-7aaa44ba43b4

#Lovable AI Response Standard, Task Tracking & Reporting (THIS FILE IS NOT ALLOWED TO BE CHANGED - IT IS FORBIDDEN!)

> **Lovable's Guarantee**: Ensure thorough progress tracking and regular status updates on the following tasks:
> 1. **Code deliveries**
> 2. **Refactoring and optimization**
> 3. **Moving files**
> 4. **Updating Imports**  
> 5. **Cleaning Up Old Files**  
> 6. **Verifying Builds**  
> 7. **Guarantee 100% Project Constraint Adherence**  
> 8. **Working to simplifying Folder/File Structure continously**
> 9. **Suggest improvements and consult established documentations and reason to find the best way forward, regardless of topic.**
> 10. **Critiques own work to ensure no bad implementations make their way into production. 
> 11. **Lovable always reads and respects the AI-RESPONSE-STANDARD.md in full before every commit and chat, the README.md in main and sub-folders where applicable, the i18nREADME.md, DESIGN-SYSTEM.md and the UX-BEST-PRACTICE.md and confirms complete adherence with each delivery. 

---

> **Always stop to look at Lovables AI-RESPONSE-STANDARD.md file for task management and reporting.**  
> **I repeat: Always Consult the `README.md` file for additional details**
> **New atomic i18n strategy and approach: Always Consult the `i18nREADME.md` file for additional details on translation work**

---

## Core Technologies

1. **React** (Best Practice Implementation)  
   - Keep the developer experience in mind for easy handover.  
   - No custom experimental patterns; only well-established, best-in-class solutions.
   - Consistent patterns throughout all of our work.
   - Maintain a zero-warning codebase.

2. **TypeScript** (Strict)  
   - Avoid the `any` type; create and maintain clean, custom interfaces/types.

3. **Tailwind CSS + Animate**  
   - **No inline CSS**—enforce a centralized theming for consistent styling.  
   - **No Tailwind Merge** libraries.  
   - **theme.css file is an exception to our line constraints of 68 lines of code.  
   - ** Centralized Theme, style and font systems. 
   - ** Use of Poppins font with Bold for headers, regular for subtitles and light for headers font weight.
   - ** Dark Mode & Light Mode should mirror best UX practices. Follow our established color scheme for Light and Dark mode to perfection.
   - Global CSS, fonts and styling must be part of every feature and UI component naturally with each delivery.

4. **Vite**  
   - Fast build tool for React + TypeScript, ensuring efficient development workflow.

5. **ESLint**  
   - Setup ESLint to enforce above constraints and keeps us focused on best in class delivery.
   - Enforce code quality and linting rules.
   - Automated checks on every commit to maintain high standards.
   - Accessability is a necessity, make that apart of our ESLint checks. 

6. **i18n** (version ^4.0.1)  
   - Multi-language support: Swedish, Danish, English, and Dutch are **mandatory**.
   - Multi-language support should be built as global for common translations and use-cases, component by component for their specific use-cases outside of that which can be centralized.   
   - Internationalization must be part of every feature and UI component naturally with each delivery.

7. **Icons**  
   - **lucide-react** icons are strongly encouraged to avoid additional icon dependencies.  
   - Keep usage modular and minimal, but utilize the official icon sets for consistency.

8. **No Lovable Commands**  
   - Do not use any project-level commands that deviate from these constraints.

9. **Centralized Animations & Modal Blur**  
   - Create and always use a **single, reusable animation system** (e.g., in `utils/animations`) that uses Tailwind CSS transitions/Animate classes for consistent entry and exit effects throughout the project. This should be made globally available for our components and project going forward.
   - All modal components, **including future profile menus, sensitive modals, or multi-step wizards**, must apply a **global backdrop-blur class** to the page background or overlay, ensuring a uniform blur effect for focusing.  
   - Reminder: Never ever use inline CSS; define any blur or transition variations in Tailwind’s global config or in a dedicated utility file.  
   - Keep these animation/blur utilities documented for easy adoption in new features.

10.  **Inline Comments & JSDoc Documentation**    
   - Provide thorough code comments explaining complex logic, focusing on how data flows within the component or function.
   - Ensure each major function, interface, and component is documented with standard JSDoc format, including parameter and return type annotations.
   - This approach increases code clarity for both human maintainers and AI-based tools, ensuring accurate suggestions and improved collaboration across the team.

11. **User Access Levels**  
   - Prepare the frontend for three distinct roles: **Admin**, **Manager**, and **User**.  
   - **Admin** always has full read/write privileges across all content.  
   - **Manager** can read/write only for the users (or teams) they manage.  
   - **User** has read/write access **exclusively** for their own content or pages.  
   - All new UI components and features must respect these roles and permissions in **every** delivery, ensuring a consistent foundation for future backend integration.

---

## Documentation Structure & Standards

1. **Component Documentation**
   - Each component must have its own README.md in its directory
   - Documentation must include:
     ```md
     # ComponentName
     
     ## Usage
     - Basic implementation example
     - Common use cases
     - Props interface
     
     ## Variants
     - Available component variations
     - Configuration options
     
     ## Accessibility
     - ARIA roles and attributes
     - Keyboard navigation
     - Screen reader considerations
     
     ## i18n
     - Required translations
     - Language-specific considerations
     
     ## Testing
     - Test coverage requirements
     - Important test scenarios
     ```

2. **Folder Structure Documentation**
   ```
   src/
   ├── components/
   │   ├── atoms/
   │   │   └── README.md
   │   ├── molecules/
   │   │   └── README.md
   │   └── organisms/
   │       └── README.md
   ├── layouts/
   │   └── README.md
   ├── hooks/
   │   └── README.md
   └── utils/
       └── README.md
   ```

3. **Code Comments & JSDoc**
   - All components must include JSDoc comments
   - Type definitions must be documented
   - Complex logic must include explanatory comments
   - Example:
     ```typescript
     /**
      * @component
      * @description Button component with multiple variants
      * @example
      * <Button variant="primary">Click me</Button>
      */
     ```

4. **Testing Documentation**
   - Test files must include descriptive comments
   - Test scenarios must be documented
   - Coverage requirements must be specified
   - Example:
     ```typescript
     /**
      * @group unit
      * @description Tests for Button component
      * @requirements
      * - Must handle all click events
      * - Must support keyboard navigation
      * - Must be accessible
      */
     ```

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


# Refactoring Best Practices

Refactoring is the systematic process of improving existing code without altering its behavior. It helps maintain readability, performance, and long-term maintainability.

## 1. Small, Incremental Changes
- **Isolate Changes**: Make one improvement at a time (e.g., extract a function, rename a variable).
- **Frequent Commits**: Allows easy rollback and clear tracking of each refactoring step.

## 2. Preserve Existing Functionality
- **Automated Testing**: Write or run tests before and after refactoring to confirm behavior remains the same.
- **Test Often**: If test coverage is lacking, add tests first to ensure safe refactors.

## 3. Improve Code Clarity
- **Rename for Meaning**: Favor descriptive function, variable, and component names.
- **Remove Dead Code**: Eliminate unused imports, variables, or functions to reduce confusion.

## 4. Maintain Atomic Structure
- **Component Splitting**: If a file is too long or handles multiple responsibilities, break it into smaller, reusable components.
- **Limit Lines of Code**: Enforce a practical limit (e.g., ≤ 68 lines) per file to keep it manageable.

## 5. Check Dependencies & Complexity
- **Minimize External Libraries**: Only keep what’s truly necessary.
- **Simplify Logic**: When refactoring, consider if you can remove nesting, break out complex loops, or reduce complexity.

## 6. Document as You Go
- **Commented Changes**: Briefly explain why a refactor was done.
- **Update README**: If the code structure changes significantly, update documentation accordingly.

---

> Refactoring ensures the codebase remains flexible, readable, and easy to collaborate on. By making small, tested changes, you minimize risk and steadily improve your code’s quality.

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

