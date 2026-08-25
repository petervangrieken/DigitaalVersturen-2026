# Guidelines

Main hub for the Stamp design system (`@design-system/*`). Read the companion files as directed below before generating UI.

## Reading order

**Always read first:**
- `Guidelines.md` — this file; rules and entry point
- `setup.md` — what is already configured; Figma import file rules
- `tokens.md` — color tokens, component prop enums, quirks

**Read on demand:**
- `components.md` — BEFORE using any design-system component
- `icon-discovery.md` — BEFORE using any icon
- `styles.md` — when building layouts or writing custom spacing/CSS

## Companion files

| File | Focus |
|---|---|
| `setup.md` | Installed packages, pre-configured providers/CSS, Figma import file rules |
| `components.md` | Component imports, props, variants, Figma→Stamp mappings, PostNL Logo |
| `icon-discovery.md` | Icon naming conventions, import path, available sizes, how to search |
| `tokens.md` | Color tokens, component prop enums, quirks & gotchas, type file paths |
| `styles.md` | Spacing scale, layout primitives (Flex/Grid/Container), responsive patterns, CSS methodology |

---

## ⛔ Hard Stops

Instant violations — fix before continuing:

1. Importing from `/src/app/components/ui/` (shadcn/ui legacy components)
2. Hardcoding pixel values or hex colors instead of `--stamp-*` tokens
3. Guessing icon names without verifying they exist first (see `icon-discovery.md`)

---

## ⚠️ MANDATORY: Component Discovery Before Writing Code

BEFORE writing ANY UI code, you MUST:

1. Read the **Available Components** list in `components.md`.
2. For EVERY UI element you are about to create, check if a Stamp component covers it.
3. If a matching component exists → **use it**. Never recreate it with custom HTML.
4. If unsure, read the component's type file at `@design-system/react/dist/src/components/{Name}/{Name}.d.ts`.

**When processing Figma imports:** Do NOT preserve the raw HTML/SVG structure from Figma-generated code. Identify which Stamp components match each element and rewrite using those. The Figma import is a visual reference — the Stamp component is the implementation.

---

## Rule 1: Packages Over Custom — NEVER use shadcn/ui

**Strictly prioritize** `@design-system/react` components. **Never import from `/src/app/components/ui/`** — those are legacy shadcn/ui components bundled with the template that **must not be used**. They conflict with Stamp styling and produce off-brand results.

- Always import UI components from `@design-system/react`.
- Group all `@design-system` imports at the top of each file.
- Use Figma component names/variant properties to determine the correct React props.

## Rule 2: Zero Hardcoding — Use `--stamp-*` Tokens

Never output raw hex codes or pixel values. Always use CSS custom properties from `@design-system/tokens`. See `styles.md` for the full token reference and layout patterns.

## Rule 3: Icons from Package Only

Never generate inline `<svg>` code. Always import from `@design-system/icons` using size subpath exports. See `icon-discovery.md` for the full search recipe.

## Rule 4: Override Component Defaults

Some Stamp components have default styling (gap, typography, etc.) baked in. Always explicitly set any styling that differs from the Figma design to override these defaults.

## Rule 5: Custom Code as Exception

Only write custom CSS/React when:
1. The layout cannot be achieved with `@design-system/css` utilities.
2. The component does not exist in `@design-system/react`.

Even then, custom code **must** use `--stamp-*` CSS variables for all values.

---

## Quick Reference

```tsx
import {
  Container, Flex, Heading, Text,
  Button, Card,
  RadioButton, RadioButtonGroup,
  Breadcrumbs, Breadcrumb, FormFieldLabel
} from '@design-system/react';
import { SearchIcon } from '@design-system/icons/24x24';
import { PostNLLogo } from './components/PostNLLogo';

export const MyComponent = () => (
  <Container>
    <PostNLLogo />

    <Breadcrumbs ariaLabel="Navigation">
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb current>Current page</Breadcrumb>
    </Breadcrumbs>

    <Heading level={1} size="xl">Page title</Heading>
    <Text size="m" variant="subtitle">Description</Text>

    {/* Spacing always uses tokens — never hardcoded px values */}
    <Flex
      direction="column"
      gap="xl"
      style={{ padding: 'var(--stamp-spacing-outer-s)' }}
    >
      <FormFieldLabel>Pick an option</FormFieldLabel>
      <RadioButtonGroup direction="row" gap="m">
        <RadioButton id="opt-1" name="options" value="1" message="Option 1" />
        <RadioButton id="opt-2" name="options" value="2" message="Option 2" />
      </RadioButtonGroup>

      <Card style={{ padding: 'var(--stamp-spacing-inner-xl)' }}>
        <Button variant="secondary" startIcon={<SearchIcon />}>
          Search
        </Button>
      </Card>
    </Flex>
  </Container>
);
```
