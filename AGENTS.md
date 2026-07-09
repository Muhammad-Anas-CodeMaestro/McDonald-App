# Agent instructions for McDonald App

## Purpose
This repository is a small React + Vite front-end app using Tailwind CSS, React Router, Ant Design reset styles, and localStorage-based auth.

## Useful commands
- `npm install` — install dependencies
- `npm run dev` — start the Vite development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the source files

## Project structure
- `src/main.jsx` — app entry point
- `src/App.jsx` — routing, protected route guard, top-level app structure
- `src/pages/` — page-level views for login, dashboard, tickets, notifications
- `src/componets/` — reusable UI components (note the folder name is intentionally spelled `componets`)
- `src/data/` — static table and user data values used by pages and components
- `src/lib/storage.js` — namespaced localStorage helper functions
- `src/foam/` — form field abstractions and ticket form definitions

## Conventions
- Functional React components with JSX are used throughout.
- Tailwind utility classes are the main styling approach.
- React Router v7 is used for routes and navigation.
- Protected pages rely on `localStorage.getItem('isLoggedIn') === 'true'`.
- The app uses ES modules (`type: module` in `package.json`).

## Routing and auth
Routes are defined in `src/App.jsx`:
- `/login` — login page
- `/dashboard` — protected dashboard
- `/mytickets/inprogress` — protected in-progress tickets
- `/mytickets/resolved` — protected resolved tickets
- `/mytickets/closed` — protected closed tickets
- `/notifications` — protected notification page

Protected access is enforced by the `ProtectedRoute` wrapper in `src/App.jsx`.

## Styling and imports
- `antd/dist/reset.css` is imported in `src/main.jsx`.
- Tailwind is configured in `vite.config.js` and `tailwind.config.cjs`.

## Notes for agents
- There is no dedicated backend in this repo; state and auth are stored locally.
- There are no test scripts present in the current workspace.
- Keep edits aligned with the existing `src/` layout and the misspelled `src/componets/` directory.
