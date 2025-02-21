## Lovable AI always stops to look at Lovable's hard constraint and well-defined AI-RESPONSE-STANDARD.md file for task management and reporting.## 

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

> **Lovable AI always stops to look at Lovable's hard constraint and well-defined AI-RESPONSE-STANDARD.md file for task management and reporting.**  
> **Lovable AI always consults the `README.md` file for additional details**
> **Lovable AI enforces the new atomic i18n strategy and approach: Always Consult the `i18nREADME.md` file for additional details on translation work**
> **Lovable AI enforces a clean and perfectly groomed folder and file structure and uses complementary README files to achieve it's delivery without EXCEPTION. 

---

# Quick-Reference Reminder of the project README in short-form

## Core Stack & Rules

1. **React (Best Practices)**
   - No experimental patterns or warnings; keep code consistent and well-documented.
   - One exception: `README` may exceed 68 lines.
   - Installing a drag-and-drop library (dnd) is allowed.

2. **TypeScript (Strict)**
   - No `any`; always define custom types/interfaces.

3. **Tailwind CSS + Animate**
   - **No inline CSS**; centralized theming only.
   - No Tailwind merge libraries.
   - `theme.css` can exceed 68 lines.
   - Use **Poppins** font (Bold for headers, Regular for subtitles, Light for header font weight).
   - Proper **Dark/Light** modes with consistent color schemes.

4. **Vite**
   - Fast dev workflow for React + TypeScript.

5. **ESLint**
   - Enforce code quality, folder structure, and accessibility checks.
   - One parent folder each for components, services, hooks, etc.—**no nested duplications**.

6. **i18n (version ^4.0.1)**
   - Mandatory languages: **Swedish, Danish, English, Dutch**.
   - Must integrate i18n in every feature/component.

7. **Icons**
   - Prefer **lucide-react**; minimal additional icon dependencies.

8. **No Lovable Commands**
   - No project-level commands deviating from these constraints.

9. **Centralized Animations & Modal Backdrops**
   - Single, reusable animation system (`utils/animations`).
   - All modals must use a **global backdrop-blur**.

10. **Inline Comments & JSDoc**
    - Clearly document logic flow and data handling.
    - JSDoc for functions, interfaces, components.

11. **User Access Levels**
    - **Admin**: full read/write.
    - **Manager**: read/write for assigned users/teams.
    - **User**: only their own content.

---

## Documentation & Structure

- **Component READMEs**: usage, props, variants, accessibility, i18n, testing.
- **Folder Organization**:
  ```txt
  src/
    components/
      atoms/ (README.md)
      molecules/ (README.md)
      organisms/ (README.md)
    layouts/
    hooks/
    utils/
