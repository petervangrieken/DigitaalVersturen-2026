# Plan: Replace Text with Heading s/subtle in ExportReasonCard

## Context
The user wants the selected `<Text>` element (opt.title in ExportReasonCard.tsx:110) replaced with `<Heading level={3} size="s" color="subtle">`. This matches the pattern already applied to DeliveryTimeCard.

## Change
**File:** `src/app/components/shipment/ExportReasonCard.tsx` — line 110

Replace:
```tsx
<Text
  size="m"
  style={{ fontWeight: "var(--stamp-text-body-m-strong-font-weight)" }}
>
  {opt.title}
</Text>
```
With:
```tsx
<Heading level={3} size="s" color="subtle">
  {opt.title}
</Heading>
```

`Heading` is already imported. No other files need to change.

## Verification
Visually confirm the tile titles in ExportReasonCard render with the Heading s/subtle style.
