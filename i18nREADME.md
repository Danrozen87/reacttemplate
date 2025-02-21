
# Short-Form Highlights: AI-Adherence to Atomic i18n Strategy

**All texts in the system, including toasts, notifications, instructions, button texts, navigation, descriptions, labels, inputs and so forth, will feature English, Swedish, Danish and Netherland-locales. 

1. **Atomic + Domain-Based Files**  
   - Each component or domain has its own small `en.json`, `sv.json`, etc.  
   - AI only updates or generates translations for these scoped files—never a massive, monolithic one.

2. **Typed Keys & Validation**  
   - Maintain a script (e.g., `i18next-typegen`) to autogenerate TypeScript definitions.  
   - AI must ensure new or changed keys are properly typed (no unknown or “any” types).

3. **Context-Aware Translation Generation**  
   - Provide AI with domain or component context (e.g., “atoms/button”).  
   - AI suggestions reference the exact usage (e.g., a button label vs. a tooltip) for precise translations.

4. **Small, Readable JSON Structures**  
   - Keep each file under ~10–20 keys for clarity.  
   - AI must preserve the file’s structure (no random merges or reordering).

5. **Unused Key Detection**  
   - Run a static analysis or lint rule to find unused translation keys.  
   - AI can suggest removing these or marking them for future use.

6. **Lazy Loading / Namespacing**  
   - Group domain-level translations for on-demand loading.  
   - AI acknowledges these namespaces (like `atoms.button.submit_label`).

7. **Fallback & AI-Generated Drafts**  
   - If a key is missing for a language, AI can create a first-pass translation flagged as `[AI-DRAFT]`.  
   - Human or advanced QA can then review and finalize it.

8. **Automated CI Checks**  
   - Enforce 100% typed usage: if AI adds a new key, it must update the TypeScript definitions.  
   - Linter ensures no inline overrides or missing translations.

9. **Documentation & Conventions**  
   - AI must follow naming conventions (`atoms.button.submit_label`).  
   - Provide short doc for each file, explaining intended usage (e.g., “Strings for the Button atom in dark/light mode.”).

10. **Role in Overall Architecture**  
    - AI’s role is to keep translations *atomic*, typed, and context-rich—always preserving a separate file per domain or component.  
    - The end result is a **lean**, **maintainable** i18n system with minimal collisions and precise translations.
