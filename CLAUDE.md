# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Ido Mandelman (deployed at https://hire-ido.com/). Single-page React app built with Vite, TypeScript, and styled-components.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check with `tsc` then produce a production build (`tsc` errors fail the build)
- `npm run lint` — ESLint over `ts`/`tsx`; runs with `--max-warnings 0`, so any warning fails
- `npm run preview` — serve the built `dist/` locally

There is no test runner configured in this project.

## Architecture

Routing lives in `src/App.tsx` using `react-router-dom` (`BrowserRouter` + `Routes`). `<Navbar />` renders on every route; each page is a component under `src/Pages/`. Routes are registered here — adding a page means adding a `<Route>` and usually a `<NavLink>` in `src/Components/Navbar.tsx`.

`src/main.tsx` wraps `<App />` in styled-components' `<ThemeProvider>` with `myTheme` and imports the single global stylesheet `src/styles/global.css`.

### Styling conventions

Styling is entirely styled-components — there are no CSS modules and only one global CSS file.

- **Theme**: colors, `borderRadius`, and responsive breakpoints are centralized in `src/styles/style-theme.ts`. The theme type is declared via module augmentation in `src/styled.d.ts` — when you add a theme property, add it in **both** files or TypeScript will error.
- **Responsive breakpoints** come from the theme, not raw pixel values. Use them as `@media (${({ theme }) => theme.devices.break1})` (≤1000px) and `break2` (≤640px). The `devices` values are the media condition text only (e.g. `max-width: 1000px`), so they must appear inside the `(...)` in the template.
- **Transient props** (styled-component props that must not reach the DOM) use the `$` prefix, e.g. `$isOpen` in `Navbar.tsx`.
- **Shared styled primitives** live in `src/Components/common/`: `Container.ts` (layout wrappers like `MainWrapper`, `Section`, `ProjectWrapper`), `Text.ts` (`Header1`–`Header3`, `Text`, `UL`, `ListItem`), `pictures.ts` (`ProjectPicture`, `ProjectImg`), and `Links.ts`. Reuse these before introducing new one-off styled elements. Page-specific styled components are defined inline at the bottom of their page/component file (see `Projects.tsx`, `Navbar.tsx`).

### Page composition pattern

Pages compose from feature components rather than holding much markup themselves. `Home.tsx` renders `<Header />` + `<AboutMe />`; `Projects.tsx` renders per-project components (`StayInTouchProject`, `GermanGameProject`) inside shared `Container` wrappers. Follow this pattern: put a page's content in dedicated components under `src/Components/` and keep the `Pages/` file as a thin composition layer wrapped in `MainWrapper`.
