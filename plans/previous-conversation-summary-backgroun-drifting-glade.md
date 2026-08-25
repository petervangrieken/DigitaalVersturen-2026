# Plan: Chat UX Fixes — Loader guard, inactive states, auto-scroll

## Context

The PostNL shipment assistant chat has three related UX problems:
1. **Card submit fires while streaming** — clicking confirm before the AI loader finishes isn't registered
2. **No clear inactive visual** — after confirming a card there's no strong "done" signal on the tiles/inputs
3. **No auto-scroll** — when a new AI turn appears at the bottom the user has to scroll manually

## Changes

### 1 · `src/app/lib/use-send-user-message.ts`

**Problem**: `isSending` only tracks the outgoing send; it doesn't know the AI is still streaming, so card submit buttons remain active during streaming.

**Fix**: Import `useTambo` and merge `isStreaming` into the returned `isSending`.

```ts
import { useTambo, useTamboThreadInput } from '@tambo-ai/react';

export function useSendUserMessage() {
  const { isStreaming } = useTambo();
  const { value, setValue, submit } = useTamboThreadInput();
  // ... existing logic unchanged ...
  return { send, isSending: isSending || isStreaming };
}
```

All cards already use `disabled={submitted || isSending}` — this single change blocks every submit button and every tile while the AI is generating, at zero cost to card code.

---

### 2 · `src/app/components/shipment/SelectionTile.tsx`

**Problem**: `disabled` state only sets `cursor: not-allowed`; tiles look identical to active tiles.

**Fix**: When `disabled`:
- Background → `var(--stamp-color-background-disabled)` (instead of `--stamp-color-background-surface`)
- Non-selected disabled tiles: `opacity: 0.6` (Stamp's `--stamp-opacity-illustration-disabled`)
- Selected disabled tile: full opacity (the confirmed choice stays legible)
- Hover border never shows when disabled (already handled)

```ts
background: disabled
  ? "var(--stamp-color-background-disabled)"
  : "var(--stamp-color-background-surface)",
opacity: disabled && !selected ? 0.6 : 1,
```

---

### 3 · `src/app/components/shipment/SelectionRow.tsx`

Same treatment as `SelectionTile`:
- Background → `var(--stamp-color-background-disabled)` when disabled
- Non-selected disabled: `opacity: 0.6`; selected disabled: full opacity
- Remove the existing `opacity: disabled ? 0.5 : 1` (which currently applies to all states without distinction)

---

### 4 · All cards — hide confirm button after submission

**Problem**: After confirming a card, the disabled confirm button still occupies space with no purpose.

**Fix**: Replace `disabled={submitted || isSending}` on every `Button` with a conditional render — only show the button when `!submitted`. While `isSending` is true (but not yet submitted), keep the button visible but disabled so the user sees it's processing.

```tsx
{!submitted && (
  <Button
    variant="primary"
    size="auto"
    endIcon={<ChevronRightIcon />}
    onClick={handleSubmit}
    disabled={isSending}
  >
    Bevestigen
  </Button>
)}
```

Apply to every card that has a submit button: `AddressCard`, `SenderCard`, `DeliveryTimeCard`, `DeliveryLocationCard`, `DestinationCard`, `ExportReasonCard`, `CustomsFormCard`, `HsCodeCard`, `InsuranceCard`, `ProductOfferCard`.

---

### 5 · `src/app/components/shipment/DeliveryTimeCard.tsx`

**Problem**: `SelectionTile` elements receive no `disabled` prop, so they stay interactive after submit.

**Fix**: Add `disabled={submitted || isSending}` to each `SelectionTile` in the map. Also add `onClick` guard `() => !submitted && !isSending && setSelected(opt.id)`.

---

### 6 · Form cards — disable inputs after submission

**Files**: `AddressCard.tsx`, `SenderCard.tsx`, `CustomsFormCard.tsx`

All `TextInput` and `SelectInput` elements should receive `disabled={submitted}` so Stamp automatically applies its disabled styling (grayed-out border, text color, background). This gives a clear "frozen" state to the form after confirmation.

---

### 7 · `src/app/components/chat/ShipmentApp.tsx` — auto-scroll

**Problem**: New AI turns append at the bottom but the scroll position doesn't move.

**Fix** (inside `ChatView`):
1. Add `import { useRef, useEffect } from "react"` (already uses `useState` so just extend the import).
2. Create `const scrollEndRef = useRef<HTMLDivElement>(null)`.
3. Place `<div ref={scrollEndRef} />` at the very end of the message list (after the streaming spinner).
4. Add effect:
   ```ts
   useEffect(() => {
     scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages, isStreaming]);
   ```
   Triggering on both `messages` (new turns) and `isStreaming` (scroll when spinner appears) ensures the view follows both new user messages and the loading state.

---

## Other cards to audit

The following cards may also pass selection tiles/rows without a `disabled` prop. Verify and fix if needed (same pattern as DeliveryTimeCard):
- `ExportReasonCard.tsx` — likely uses `SelectionRow`
- `DeliveryLocationCard.tsx` — likely uses `SelectionRow`
- `DestinationCard.tsx` — likely uses `SelectionRow`
- `HsCodeCard.tsx` — already uses opacity wrapper; check if tiles need `disabled`
- `ProductOfferCard.tsx` — uses two action buttons, no tiles; already has `disabled={!!decision || isSending}`

---

## Verification

- Open the chat, send a message, confirm a card **while the loader is visible** → confirm button must be disabled/invisible
- Confirm a card → tiles and inputs should visually grey out with the Stamp disabled palette
- Send a long conversation → chat must automatically scroll to the bottom after each AI turn
