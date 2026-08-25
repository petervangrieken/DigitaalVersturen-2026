# Icon Discovery

Read this file BEFORE using any icon. Do NOT guess icon names — verify they exist first.

---

## Package & import

- **Package:** `@design-system/icons`
- **Import format** — always use size subpath exports (bare `@design-system/icons` does not work):

```tsx
import { ChevronLeftIcon, SearchIcon } from '@design-system/icons/24x24';
import { CloseIcon, ChevronDownIcon } from '@design-system/icons/16x16';
```

- **Wrap with `Icon`** from `@design-system/react` to apply design-system sizing:

```tsx
import { Icon } from '@design-system/react';
import { HeartFilledIcon } from '@design-system/icons/24x24';

<Icon size="m"><HeartFilledIcon /></Icon>
```

Available `Icon` sizes: `'xs' | 's' | 'm' | 'l' | 'xl'`

---

## Available size subpaths

| Subpath | Icon count | Notes |
|---|---|---|
| `24x24` | ~400 icons | Most complete — use this first |
| `16x16` | Subset | Small/tight UI contexts |
| `40x40` | Subset | Large decorative icons |
| `alerts` | Small set | Alert-type icons |
| `financial` | Small set | Finance/payment icons |
| `overig` | Small set | Miscellaneous |

---

## Naming conventions

| Aspect | Pattern | Examples |
|---|---|---|
| Export name | `<PascalCaseName>Icon` | `AccountIcon`, `ArrowForwardIcon`, `CloseIcon` |
| React file | `<PascalCaseName>Icon.js` | `AccountIcon.js`, `HeartFilledIcon.js` |
| SVG file | `<kebab-case-name>.svg` | `account.svg`, `arrow-forward.svg` |

### Modifier suffixes (verified)

- `-Filled` — solid variant: `HeartFilledIcon`, `DislikeFilledIcon`
- `Color` prefix — single-color illustrative: `ColorEditIcon`
- `ColorDuo` prefix — two-color illustrative: `ColorDuoEditIcon`
- No `-Outline` suffix — outline is the default style

Each exported component spreads props onto `<svg>`, uses `role="presentation"` by default, and `fill="currentColor"` so icons inherit text color.

---

## How to find icons at code-generation time

When you need an icon, use targeted Glob patterns on filenames — never dump the full directory.

### Search recipe

1. **Pick a size** (start with `24x24`).
2. **Glob for the keyword in PascalCase:**
   ```
   node_modules/@design-system/icons/dist/react/es/24x24/*Chevron*.js
   ```
3. **If the keyword could be kebab-cased,** also check the SVG dir:
   ```
   node_modules/@design-system/icons/dist/svg/24x24/*chevron*.svg
   ```
4. **Pick a verified filename** — the export name is identical to the basename (minus `.js`).
5. **If no match in `24x24`,** try `16x16`, `40x40`, or the thematic dirs (`alerts`, `financial`, `overig`).

### Before searching any directory

Check the entry count first:
```
ls node_modules/@design-system/icons/dist/react/es/24x24 | wc -l
```
If it's more than ~50 entries, **narrow with a Glob keyword** rather than listing everything.

---

## DO / DON'T

DO
- Verify the exact icon file exists with Glob before writing the import.
- Use the `Icon` wrapper from `@design-system/react` to size icons consistently.
- Provide meaningful `alt` / `aria-label` text when the icon conveys information.
- Use `aria-hidden` or `alt=""` when the icon is purely decorative.

DON'T
- Don't guess icon names. If `BellIcon` isn't found by Glob in any size folder, it doesn't exist — search with a different keyword and re-verify.
- Don't `ls` the full `24x24` directory (~400 entries). Always narrow with a Glob keyword.
- Don't Grep inside icon source files — filenames are descriptive; Glob on names is sufficient.
- Don't generate inline `<svg>` code.
- Don't use Unsplash images in place of brand illustrations — use `@design-system/illustrations` or `CdnIllustration`.
