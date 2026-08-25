# Project Setup

Everything below is **already done** in this template. This file is a reference — do not repeat any of these steps.

## Pre-installed Packages

| Package | Purpose |
|---|---|
| `@design-system/react` | UI components + `StampProvider` (already wrapping the app) |
| `@design-system/css` | Component styles (already globally imported in `App.tsx`) |
| `@design-system/tokens` | CSS custom properties with `--stamp-*` prefix (already imported in `index.css`) |
| `@design-system/icons` | Vector icons — import by size subpath |
| `@design-system/illustrations` | Marketing/branding illustrations |
| `@design-system/shared` | Utility functions and shared logic |

## What is already configured

| Already done | Location |
|---|---|
| `import '@design-system/css'` | `App.tsx` |
| `<StampProvider colorScheme="light">` wraps the app | `App.tsx` |
| `@import '@design-system/tokens/css/light.css'` | `index.css` |
| PostNL fonts loaded from CDN | Via `StampProvider` automatically |

**Do not re-add any of the above.** Adding them again will cause duplicate styles and provider conflicts.

## Changing the color scheme

Edit the `colorScheme` prop on `StampProvider` in `App.tsx`:

```tsx
<StampProvider colorScheme="light">   // Light mode (current default)
<StampProvider colorScheme="dark">    // Dark mode
<StampProvider colorScheme="system">  // Follows OS/browser preference
```

## Figma-generated import files

The files in `/src/app/imports/` (e.g. `OpzetS375`, `OpzetM681`, `OpzetL1280`) are the **raw Figma export** — they are **visual reference only**.

- **Never modify them.**
- **Never copy their JSX structure into new components.**
- Use them solely to understand which elements to replicate, then implement using Stamp components from `@design-system/react`.

## PostNL Logo

The design system does not ship a logo component. Use the template's built-in component — self-contained, no network dependencies.

```tsx
import { PostNLLogo } from './components/PostNLLogo';

<PostNLLogo />                        // Orange logo on light/white background (default)
<PostNLLogo variant="on-brand" />     // White logo on orange/dark background
<PostNLLogo size="l" />               // xs | s | m (default) | l | xl → 24/32/40/56/72px
```

| Background | Variant |
|---|---|
| White / `--stamp-color-background-surface` | `"on-light"` (default) |
| Light grey / `--stamp-color-background-default` | `"on-light"` |
| Orange / `--stamp-color-background-brand` | `"on-brand"` |
| Dark / `--stamp-color-background-inverse` | `"on-brand"` |

> ⚠️ Never recreate the logo with raw HTML/SVG. Never import from `/src/imports/svg-*` — those files are project-specific and will not exist in other templates.
