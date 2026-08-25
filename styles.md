# Styles, Spacing, and Layout

Read this file when building page layouts or applying custom spacing/CSS.

---

## Spacing scale

Two parallel token scales — use the right one for the right context:

**Inner spacing** (`inner-*`) — padding and gaps *within* a component, or between items inside a group. These values are embedded in the `Flex` `gap` prop scale.

**Outer spacing** (`outer-*`) — distances between distinct content blocks, sections, or page-level components. Used internally by `Container` and `Grid`. Fewer steps, larger values.

| Token | Value | Use for |
|---|---|---|
| `--stamp-spacing-inner-xxs` | 2px | Inside components |
| `--stamp-spacing-inner-xs` | 4px | Inside components |
| `--stamp-spacing-inner-s` | 8px | Inside components |
| `--stamp-spacing-inner-m` | 12px | Inside components |
| `--stamp-spacing-inner-l` | 16px | Inside components |
| `--stamp-spacing-inner-xl` | 24px | Inside components |
| `--stamp-spacing-inner-xxl` | 32px | Inside components |
| `--stamp-spacing-inner-3-xl` | 40px | Inside components |
| `--stamp-spacing-inner-4-xl` | 56px | Inside components |
| `--stamp-spacing-outer-xs` | 16px | Between sections/blocks |
| `--stamp-spacing-outer-s` | 24px | Between sections/blocks |
| `--stamp-spacing-outer-m` | 40px | Between sections/blocks |
| `--stamp-spacing-outer-l` | 56px | Between sections/blocks |
| `--stamp-spacing-outer-xl` | 88px | Between sections/blocks |

No token exists for 72px — use `calc(var(--stamp-spacing-outer-l) + var(--stamp-spacing-inner-l))` (56 + 16).

---

## Layout primitives

There is no `Stack`, `Box`, or `Inline` component. The only layout primitives are:

| Component | Use for | Key props |
|---|---|---|
| `Container` | Page-level horizontal wrapper (responsive max-width) | `fixed?`, `fullWidth?` |
| `Flex` | Linear layouts — items in a row or column | `direction`, `gap`, `columnGap`, `rowGap`, `alignItems`, `justifyContent`, `wrap` |
| `Grid` | Multi-column layouts | `gap`, `columnGap`, `rowGap` |
| `Fieldset` | Grouping form fields | — |

### Gap scale (for `Flex` and `Grid` `gap` props)

`'xss' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3-xl' | '4-xl'`

### Responsive gaps

`gap`, `columnGap`, and `rowGap` accept either a single value or a responsive object:

```tsx
<Flex direction="column" gap={{ mobile: 's', tablet: 'm', desktop: 'l' }}>
  …
</Flex>

<Grid gap={{ mobile: 'm', desktop: 'xl' }}>
  …
</Grid>
```

---

## Applying spacing tokens

**In `style` props** (for custom layout wrappers):

```tsx
// ✅ Correct — token-based
<div style={{ padding: 'var(--stamp-spacing-inner-l)', gap: 'var(--stamp-spacing-inner-xl)' }}>

// ❌ Wrong — hardcoded pixels
<div style={{ padding: '16px', gap: '24px' }}>
```

**In Tailwind arbitrary values:**

```html
<!-- ✅ Correct -->
<div class="px-[var(--stamp-spacing-inner-l)] py-[var(--stamp-spacing-outer-s)]">

<!-- ❌ Wrong -->
<div class="px-[16px] py-[48px]">
```

**In custom CSS:**

```css
.custom-card {
  padding: var(--stamp-spacing-inner-l);
  background: var(--stamp-color-background-default);
  color: var(--stamp-color-text-default);
  border: var(--stamp-border-width-s) solid var(--stamp-color-border-default);
  border-radius: var(--stamp-radius-m);
}
```

---

## Responsive breakpoints

There are **no exposed breakpoint tokens** (`--stamp-breakpoint-*` does not exist). Breakpoints are baked into component CSS and surfaced semantically as `mobile` / `tablet` / `desktop` on responsive props.

Internal breakpoints (for reference when writing custom media queries only):

```
Mobile:  default styles (375px base)
Tablet:  681px
Desktop: 1280px
```

Prefer the responsive `{ mobile, tablet, desktop }` object on component props over hand-rolled media queries.

---

## CSS methodology

Stamp uses BEM-like class names on `stamp-` blocks:

```
stamp-button stamp-button--variant-primary stamp-button--size-full
stamp-flex stamp-flex--direction-row
stamp-grid--column-gap-mobile-s
stamp-icon stamp-icon--size-m
```

Theme classes (`.stamp-theme-light`, `.stamp-theme-dark`) on the root scope all tokens.

**Utility classes** from `@design-system/css`:
- `sr-only` — visually hidden but accessible
- `lock-scroll` — disable scrolling (used when modals are open)

> ⚠️ Never override `stamp-*` BEM classes directly. Wrap in your own class instead.

---

## DO / DON'T

DO
- Use `Container` → `Flex`/`Grid` to assemble page layouts.
- Use the `gap` prop (with the gap scale) for spacing between items in `Flex`/`Grid`.
- Use `--stamp-spacing-inner-*` for padding inside custom components; `--stamp-spacing-outer-*` for margins between page sections.
- Use the responsive `{ mobile, tablet, desktop }` form when spacing should change across screen sizes.

DON'T
- Don't reach for `Stack`, `Box`, or `Inline` — they don't exist. Use `Flex`.
- Don't use raw pixel values for spacing, radius, or borders — always use tokens.
- Don't hand-roll media queries when a responsive prop already exists on the component.
- Don't override `stamp-*` BEM classes — wrap in your own class instead.
