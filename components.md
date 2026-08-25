# Stamp Components Reference

> Part of the Stamp Design System guidelines. See also:
> - [`Guidelines.md`](./Guidelines.md) — rules, hard stops, mandatory workflow
> - [`tokens.md`](./tokens.md) — spacing/color tokens, prop enums, gotchas

---

## Available Components in `@design-system/react`

All of these are importable: `import { ComponentName } from '@design-system/react'`

### Layout & Structure
`Container`, `Flex`, `Grid`, `Fieldset`

### Typography
`Heading` (props: `size`, `level`, `color`) · `Text` (props: `size`, `variant`) · `RichText`

### Navigation
`Breadcrumbs` + `Breadcrumb` · `Tabs` (+ `TabList`, `Tab`, `TabContent`) · `StepNavigation` (+ `StepNavigationStep`) · `Stepper` · `Paging` · `Link` · `SkipLinks`

### Buttons & Actions
`Button` (props: `variant`, `size`, `startIcon`, `endIcon`) · `IconButton`

### Form Inputs
`Form` · `FormField` · `FormFieldLabel` · `FormFieldLabelGroup` · `FormFieldError` · `FormFieldHelperText` · `FormInformationButton` · `TextInput` · `TextareaInput` · `PasswordInput` · `SelectInput` · `ComboboxInput` · `DateInput` · `FileInput` · `CheckboxInput` · `CheckboxButton` · `RadioInput` · `RadioInputGroup` · `RadioButton` · `RadioButtonGroup` · `InputGroup`

### Cards & Lists
`Card` · `CardButton` · `CardLink` · `CardList` · `EmphasisCard` · `ListBasic` · `ListEmphasis` · `LinkList` · `LinkListEmphasis`

### Feedback & Overlays
`Alert` · `AlertStack` · `Banner` · `BannerContainer` · `Modal` (+ `ModalHeader`, `ModalBody`, `ModalActions`) · `Notice` · `Tooltip` · `FlyOut` · `Dimmer` · `Loader`

### Media & Decoration
`Icon` · `Illustration` · `CdnIcon` · `CdnIllustration` · `Image` · `LottieAnimation`

### Labels & Badges
`LabelBasic` · `LabelAlert` · `LabelEmphasis` · `Badge`

### Other
`Accordion` · `Table` · `RequirementList` · `StampProvider`

---

## Common Figma-to-Stamp Mappings

| If you see this in Figma… | Use this Stamp component |
|---|---|
| Radio cards / selectable option tiles | `RadioButton` + `RadioButtonGroup` |
| Simple radio list | `RadioInput` + `RadioInputGroup` |
| Checkbox cards | `CheckboxButton` |
| Breadcrumb trail | `Breadcrumbs` + `Breadcrumb` |
| Page/section heading | `Heading` (with `level` and `size` props) |
| Body / description text | `Text` (with `size` and `variant` props) |
| Form label | `FormFieldLabel` |
| Input + label + error grouped | `FormField` wrapping the input |
| Primary / secondary / tertiary button | `Button` with `variant` prop |
| Icon-only button | `IconButton` |
| Navigation steps / progress | `StepNavigation` or `Stepper` |
| Full-width content wrapper | `Container` |
| Flex layout | `Flex` (supports responsive `gap`) |
| Tabbed content | `Tabs` + `TabList` + `Tab` + `TabContent` |
| Search bar / search input | `TextInput` with `type="search"` and a search icon via `startIcon` prop (no dedicated Search component exists) |
| PostNL logo / brand mark | `PostNLLogo` from `./components/PostNLLogo` — use `variant="on-light"` on white/grey backgrounds, `variant="on-brand"` on orange/dark backgrounds. Never use the raw Figma import files directly. |

---

## Component Usage Reference

Compact decision guide — **when** to reach for each component and its key constraints.

| Component | When to use · Key constraints |
|---|---|
| `Accordion` | Groups of related Q&A or collapsible sections. Avoid nesting components with their own dividers (e.g. full `Table`) inside items. |
| `Alert` | Contextual feedback next to relevant content (error, warning, success, info). Width 320–536 px; keep `--stamp-spacing-inner-l` vertical margins. |
| `Badge` | Small numeric counts attached to tabs, cards, or nav items. Max label `999+`; anchor to parent corner. |
| `Banner` | Page introductions with a primary CTA. **Place immediately under Header/Breadcrumbs.** Choose `spotlight` (hero/brand), `emphasis` (section intro), or `basic` (utility). Images right-aligned except Spotlight. |
| `Breadcrumbs` | Third-level pages and deeper. Place **above** the main page `Heading`. |
| `Button` | Actions that trigger navigation or state changes. **Max one primary per action area.** Full-width and stacked on mobile; aligned to Grid columns on larger screens. |
| `Card` | Highlight a single topic with summary + one or two actions. Use `CardList` for groups; `EmphasisCard` for brand-heavy layouts. |
| `CheckboxButton` | Visually prominent, independent multi-select tiles. Use `CheckboxInput` for plain lists instead. |
| `CheckboxInput` | Multi-select lists or yes/no where more than one option may be chosen. Not for mutually exclusive choices. |
| `ComboboxInput` | Large, searchable single-select (country, address, entity lookups). Use `SelectInput` for smaller static lists. |
| `Container` | Wraps `Grid` and page sections to align content. Use nested Containers for full-bleed backgrounds with centred content. |
| `DateInput` | Picking a specific calendar date. Never use a plain `TextInput` for dates. |
| `Dimmer` | Always pair with `Modal`, `FlyOut`, or other overlay surfaces. Covers full viewport; prevents interaction beneath. |
| `FileInput` | File upload within a form. Display file list below the control; grow vertically as files are added. |
| `Flex` | Arrange related elements **within** a component (icon + text + button). Not for page-level column layouts — use `Grid` instead. |
| `FlyOut` | Richer overlay anchored to a trigger when content exceeds a Tooltip but a full Modal is overkill. |
| `Form` | Wrapper for input groups with a submit action. Structure with labelled inputs and a primary `Button`. |
| `Grid` | Page-level and section layouts (12-column responsive). Always pair with `Container`. |
| `Heading` | Semantic page and section headings. **Never skip levels** (e.g. H1 → H3). One display size per page max. |
| `Icon` | Reinforce actions or status alongside text. Provide `alt` text when the icon conveys meaning; use `aria-hidden` when decorative. |
| `IconButton` | Icon-only actions (close, edit, more options). Not for primary form submissions. |
| `Link` | Navigation to pages or external sites. **Do not** replace primary `Button` actions with `Link`. |
| `LinkList` | Vertical list of section/page entry-point links. Make the full row clickable; keep icons consistent across all items or omit entirely. |
| `Loader` | Content takes >~1 s. Choose subtype: **Van loader** (full page), **Spinner** (module), **Progress bar** (trackable operation), **Skeleton** (layout-aware placeholder). |
| `Modal` | Focused tasks or confirmations users must complete before returning. Always uses `Dimmer`; max 80 % viewport height. |
| `Notice` | System-wide messages (outage, major delay). **Full-width at the very top of the page; show only one at a time.** |
| `Paging` | Multi-page datasets. Use ellipsis for large ranges; reduce visible page buttons on small screens. |
| `PasswordInput` | Password entry/creation. Include requirement list and show/hide toggle. |
| `RadioButton` | Mutually exclusive choices that are **visually significant tiles** affecting content below. Group with `RadioButtonGroup`. |
| `RadioInput` | Exactly one option from a **small visible set** (plain list). Group with `RadioInputGroup`. |
| `RichText` | Long-form structured content (headings, paragraphs, lists, links). Keep line length within 6 Grid columns. |
| `SelectInput` | Single-value pick from a **medium list (5+ options)** where free text is not allowed. Use `ComboboxInput` for searchable/large lists. |
| `SkipLinks` | Required on **every page** for keyboard accessibility. Visually hidden until focused; points to main content landmark. |
| `Stepper` | Numeric value adjustment by small increments within a defined min/max range. Keep width compact; align with other form controls. |
| `StepNavigation` | Guide users through **3–5 step** processes. Always keep step indicators visible; show only current label when space is limited. |
| `Table` | Structured datasets. Use **basic** variant for simple HTML tables; **advanced** variant when sort, filter, search, or pagination is required. |
| `Tabs` | Split content into **2–5** labelled sections within the same context. Place above panels; allow horizontal scroll on tab overflow. |
| `Text` | Body copy, labels, and inline typography. Use documented `size` and `variant` values only — do not invent new weights. |
| `TextareaInput` | Multi-line free text (comments, notes). Start at ~3 lines tall; max ~6 before scrolling. Match column width to other form fields. |
| `TextInput` | Single-line text or numeric entry. **Never rely solely on placeholder** for instructions — always include a label. |
| `Tooltip` | Brief, non-essential explanatory text triggered by an icon/control. Max ~3 sentences; must be keyboard-accessible. |

---

## PostNL Logo

The design system does **not** ship a logo component. Use the template's built-in `PostNLLogo` component — it is sourced directly from the official Figma file and has no network or registry dependencies.

The logo is the official PostNL mark (shield with crown and "postnl" lettering). Two colour variants exist to match the background it sits on.

> ⚠️ **The SVG path is embedded directly inside the component.** Never add imports from `/src/imports/svg-*` to `PostNLLogo.tsx` — those Figma export files are project-specific and will not exist in colleague templates. The component must remain self-contained.

```tsx
import { PostNLLogo } from './components/PostNLLogo';

// Orange logo on a light/white background (default)
<PostNLLogo />

// White logo on an orange/brand background
<PostNLLogo variant="on-brand" />

// Sizes: "xs" | "s" | "m" (default) | "l" | "xl"
<PostNLLogo size="l" />

// Custom positioning via style / className
<PostNLLogo style={{ marginBottom: 'var(--stamp-spacing-inner-xl)' }} />
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"on-light" \| "on-brand"` | `"on-light"` | `"on-light"` = orange logo for white/light backgrounds. `"on-brand"` = white logo for orange/dark backgrounds. |
| `size` | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` | Logo height: 24 / 32 / 40 / 56 / 72 px. Width scales proportionally. |
| `ariaLabel` | `string` | `"PostNL"` | Accessible label for the `role="img"` wrapper |
| `className` | `string` | — | Applied to the root `<span>` |
| `style` | `CSSProperties` | — | Applied to the root `<span>` |

### When to use which variant

| Background colour | Use |
|---|---|
| White / `--stamp-color-background-surface` | `variant="on-light"` (default) |
| Light grey / `--stamp-color-background-default` | `variant="on-light"` |
| Orange / `--stamp-color-background-brand` | `variant="on-brand"` |
| Dark / `--stamp-color-background-inverse` | `variant="on-brand"` |

> ⚠️ Never recreate the logo with raw HTML/SVG or Unsplash images. Always use `PostNLLogo`.
