# Token & Component API Reference

Foundational design tokens, component prop enums, and known quirks. Read this on every code-generation task.

For spacing tokens and layout patterns, see `styles.md`.
For icon imports, see `icon-discovery.md`.

---

## Key Color Tokens

| Token | Value | Notes |
|---|---|---|
| `--stamp-color-background-surface` | `#ffffff` | **White — use for page backgrounds** |
| `--stamp-color-background-default` | `#e7e8eb` | Gray — NOT white |
| `--stamp-color-background-variant` | `#f1f1f2` | Light gray |
| `--stamp-color-background-inverse` | `#1f1e2f` | Dark/inverted |
| `--stamp-color-background-brand` | `#f56900` | Orange brand |
| `--stamp-color-background-disabled` | `#f1f1f2` | Disabled state |
| `--stamp-color-text-default` | `#1f1e2f` | Primary text |
| `--stamp-color-text-subtle` | `#67687f` | Secondary/muted text |
| `--stamp-color-text-inverse` | `#ffffff` | Text on dark backgrounds |
| `--stamp-color-text-brand` | `#D83D00` | Brand-colored text |
| `--stamp-color-text-negative` | `#d70036` | Error text |
| `--stamp-color-text-positive` | `#008005` | Success text |
| `--stamp-color-border-default` | `#bec0cb` | Standard border |
| `--stamp-color-border-strong` | `#67687f` | Emphasized border |
| `--stamp-color-border-error` | `#d70036` | Error border |
| `--stamp-color-border-hover` | `#6161ff` | Hover border |
| `--stamp-color-icon-default` | `#4e4ee2` | Default icon color |

> ⚠️ `--stamp-color-border-subtle` does **NOT** exist. Use `--stamp-color-border-default` instead.

---

## Component Prop Values

| Component | Prop | Values |
|---|---|---|
| `Heading` | `size` | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl' \| '3-xl'` |
| `Heading` | `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` |
| `Heading` | `color` | `'default' \| 'brand' \| 'subtle' \| 'on-brand'` |
| `Text` | `size` | `'s' \| 'm' \| 'l'` |
| `Text` | `variant` | `'default' \| 'subtle' \| 'subtitle'` |
| `Banner` | `variant` | `'spotlight' \| 'emphasis' \| 'basic'` |
| `Button` | `variant` | `'primary' \| 'secondary' \| 'tertiary'` |
| `Button` | `size` | `'auto' \| 'full'` |
| `Card` | `variant` | `'basic' \| 'emphasis'` |
| `TextInput` | `size` | `'narrow' \| 'default' \| 'full'` |
| `Alert` | `type` | `'success' \| 'warning' \| 'error' \| 'information'` |
| `Alert` | `variant` | `'primary' \| 'secondary' \| 'tertiary'` |
| `Notice` | `type` | `'error' \| 'warning' \| 'informative'` |
| `Modal` | `size` | `'small' \| 'medium' \| 'large' \| 'fullscreen'` |
| `Loader` | `variant` | `'van' \| 'spinner' \| 'progress' \| 'skeleton'` |
| `Link` | `size` | `'s' \| 'm' \| 'l'` |
| `FormFieldLabel` | `variant` | `'default' \| 'subtle'` |
| `Flex` | `direction` | `'row' \| 'column'` |
| `Flex` | `gap` | `'xss' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl' \| '3-xl' \| '4-xl'` or `{ mobile, tablet, desktop }` |
| `Flex` | `columnGap` | same scale as `gap` |
| `Flex` | `rowGap` | same scale as `gap` |
| `Flex` | `alignItems` | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'` |
| `Flex` | `justifyContent` | `'start' \| 'center' \| 'end' \| 'between' \| 'around'` |
| `Flex` | `wrap` | `'wrap' \| 'nowrap'` |
| `Grid` | `gap` | `'xss' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl' \| '3-xl' \| '4-xl'` or `{ mobile, tablet, desktop }` |
| `Grid` | `columnGap` | same scale as `gap` |
| `Grid` | `rowGap` | same scale as `gap` |
| `*Group` | `gap` | `'xss' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl' \| '3-xl' \| '4-xl'` |
| `*Group` | `direction` | `'row' \| 'column'` |
| `IconButton` | `variant` | `'primary' \| 'secondary' \| 'tertiary'` |
| `IconButton` | `size` | `'s' \| 'm' \| 'l'` |
| `FormField` | `direction` | `'row' \| 'column'` |
| `StepNavigation` | `currentStep` | `number` (required) |

> For the full prop API of any component, read its type file at:
> `@design-system/react/dist/src/components/{Name}/{Name}.d.ts`

---

## Component Quirks & Gotchas

- **`RadioInput` / `CheckboxInput`** have **no `label` prop**. Wrap with `<label>` + `FormFieldLabel` manually.
- **`RadioButton`** has a required `message` prop (card description) and optional `label` (smaller heading above message).
- **`Alert`** uses `body` (ReactNode) and `iconLabel` (string) — **not** a children pattern.
- **`Breadcrumb`** can leak `_fgT`/`_fgS`/`_fgB` console warnings in Figma Make — these are benign.
- **`Button`** has `startIcon` and `endIcon` for icon placement, and `loading`/`loadingLabel` for loading state.
- **`DateInput`** extends `TextInputProps` and requires `selectDateButtonLabel` (string).

---

## Type File Paths

Use these to explore the full API of any package:

- Components: `@design-system/react/dist/src/components/{Name}/{Name}.d.ts`
- Shared types: `@design-system/shared/dist/types/{name}.d.ts`
- Icon barrel: `@design-system/icons/dist/react/es/{size}/index.d.ts`
- Token CSS: `@design-system/tokens/dist/css/light.css`
