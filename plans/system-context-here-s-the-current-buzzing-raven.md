# Plan: PostNL Shipment Assistant Chatbot with Tambo AI

## Context

The user wants to build an AI-powered PostNL shipment assistant chat interface. The app uses `@tambo-ai/react` to drive a streaming chat thread where the AI can render rich Stamp design system components (e.g. `WelcomeCard`) inline alongside text responses. The instruction set comes from `src/imports/pasted_text/app.tsx`.

## What gets built

A full-page chat UI with:
- Orange PostNL branded header (logo, brand background)
- Scrollable message thread with user bubbles (right-aligned) and AI responses (left-aligned)
- Inline rendered React components for structured answers (WelcomeCard, extensible via tamboComponents)
- Sticky textarea + send button input bar at the bottom
- Loading spinner while streaming

## Files to create / modify

| File | Action | Notes |
|---|---|---|
| `src/app/App.tsx` | Replace | Wrap with `TamboProvider` inside `StampProvider` |
| `src/app/lib/tambo.ts` | Create | Component registry (`tamboComponents` array) |
| `src/app/components/shipment/WelcomeCard.tsx` | Create | First registered tambo component |
| `src/app/components/chat/ShipmentApp.tsx` | Create | Full chat UI: header, thread, input |

## Dependencies to install

- `@tambo-ai/react` — Tambo AI React SDK (streaming hooks, provider)
- `zod` — already likely present (react-hook-form peer), but needs verification

## Implementation steps

1. **Install packages** — `pnpm add @tambo-ai/react zod`

2. **Create `src/app/lib/tambo.ts`** — exports `tamboComponents` array registering `WelcomeCard` with a zod props schema

3. **Create `src/app/components/shipment/WelcomeCard.tsx`** — Stamp Card+Flex+Heading+Text+Button layout (all from `@design-system/react`, no hardcoded values)

4. **Create `src/app/components/chat/ShipmentApp.tsx`** — two sub-components:
   - `MessageThread`: renders `messages` from `useTambo()`, filters `content[].type === 'text'`, shows `message.renderedComponent` for AI component outputs, shows `Loader` while `isStreaming`
   - `ChatInput`: `useTamboThreadInput()` for value/setValue/submit/isPending, `TextareaInput` + `Button`
   - `ShipmentApp`: full-page flex column — branded header with `PostNLLogo variant="on-brand"`, scrollable thread, sticky input bar

5. **Replace `src/app/App.tsx`** — `TamboProvider` nested inside `StampProvider` with hardcoded API key constant, pointing to `ShipmentApp`

## Design constraints (from Guidelines.md)

- All spacing: `var(--stamp-spacing-*)` tokens only
- All colors: `var(--stamp-color-*)` tokens only  
- No imports from `/src/app/components/ui/`
- Icons: `@design-system/icons` only (no inline SVG)
- `TamboProvider` must be INSIDE `StampProvider`

## Verification

After implementation:
1. App renders without TypeScript/runtime errors
2. PostNL orange header with white logo appears
3. Typing in the textarea and pressing Enter (or Sturen button) sends a message
4. AI responses stream into the thread
5. Greeting triggers WelcomeCard rendering inline in thread
