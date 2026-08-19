# Technical decisions

This is a small record of the decisions that give the portfolio its identity and shape.

## Bilingual experience

The portfolio is available in English and Spanish through a language switcher. Copy is centralized in typed translation data rather than duplicated across components.

This makes the content easier to maintain and lets the same interface work naturally for both local and international visitors.

## AbstractImage as an interactive visual

The home page uses a custom `AbstractImage` component instead of a static illustration. It renders a field of metallic spheres that responds to the pointer with light, movement, shadows, and animated eyes.

The effect is implemented with React refs, CSS custom properties, and a single `requestAnimationFrame` loop. This keeps the animation fluid without causing a React render on every frame. The sphere layout is generated deterministically, so resizing the component does not produce a visually random result on every render.

The component also respects `prefers-reduced-motion`, providing a more static experience for users who request less animation.

## CSS Modules for visual control

The portfolio uses CSS Modules instead of a component library. The design is custom and relatively small, so scoped local styles provide predictable class names without adding framework-specific visual defaults or unnecessary dependencies.

## Typed, data-driven project content

Project details, skills, certifications, and translations live in dedicated data modules. Components are responsible for presentation, while content remains easy to update independently.

This keeps the project cards consistent and makes adding a new project a focused data change rather than a change spread across the UI.

## Accessibility and responsive behavior

Accessibility is included in the implementation rather than treated as a later polish step: the site uses semantic structure, keyboard-friendly navigation, accessible labels, form validation feedback, and reduced-motion support.

The layout is responsive so the same content and interactions remain usable across desktop, tablet, and mobile screens.

## Stack in one line

React + TypeScript + Vite, with React Router for navigation, CSS Modules for styling, and Vercel for deployment.
