# AI Development Rules for bellas!

This document outlines the technical standards and architectural patterns for the **bellas!** project.

## Tech Stack
*   **Framework:** React 18 with TypeScript and Vite.
*   **Styling:** Tailwind CSS for all styling, following a mobile-first approach.
*   **UI Components:** shadcn/ui (Radix UI primitives) located in `src/components/ui/`.
*   **Icons:** Lucide React for consistent iconography.
*   **Animations:** Framer Motion for smooth transitions and interactive elements.
*   **Routing:** React Router DOM (v6) managed in `src/App.tsx`.
*   **State & Data:** TanStack Query (React Query) for server state management.
*   **Forms:** React Hook Form with Zod for schema validation.
*   **Notifications:** Sonner and shadcn/ui toast for user feedback.

## Library Usage Rules
1.  **UI Components:** Always check `src/components/ui/` before creating new primitive components. Use shadcn/ui patterns for consistency.
2.  **Icons:** Use `lucide-react`. Avoid adding other icon libraries unless strictly necessary.
3.  **Animations:** Use `framer-motion` for page transitions and micro-interactions. Keep animations subtle (e.g., `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`).
4.  **Utilities:** Use the `cn` utility from `@/lib/utils` for conditional Tailwind classes.
5.  **State Management:** Prefer local state (`useState`) or URL state for UI logic. Use TanStack Query for any future API interactions.

## Architecture & Directory Structure
*   `src/pages/`: Contains full page views (e.g., `Index.tsx`).
*   `src/components/`: Contains reusable business components (e.g., `HeroSection.tsx`, `Navbar.tsx`).
*   `src/components/ui/`: Reserved for low-level UI primitives (shadcn).
*   `src/hooks/`: Custom React hooks for shared logic.
*   `src/assets/`: Images and static brand assets.

## Coding Standards
*   **Simplicity:** Keep components focused and under 100 lines when possible. Refactor large sections into smaller sub-components.
*   **Responsive Design:** Always use Tailwind's responsive prefixes (`md:`, `lg:`, etc.) to ensure the app looks great on mobile first.
*   **Language:** The application UI is in Portuguese (PT-BR), but code, variables, and documentation should remain in English.
*   **Error Handling:** Allow errors to bubble up to the global boundary unless specific local recovery is required. Use toasts to inform users of successes or failures.