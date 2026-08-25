<!--
Checklist for Designers

This template helps you create on-brand, interactive prototypes for user testing, based on your designs as input. It's built for the convergent phase of your process. For divergent exploration, other templates or solutions are recommended. To optimize AI output, keep your Figma file aligned with the Stamp library's components, colors, spacing, and icons. Any deviation requires the AI to guess, slowing down the process.

---

1. Components & structure

Utilize Stamp library components instead of detached copies. The AI connects Figma component instances (like Button, RadioButton) to `@design-system/react` equivalents. Detached versions lose this connection. Avoid flattening or outlining components, as flattened groups become raw SVG, complicating AI interpretation. Use Auto Layout for responsive design, as it translates to flexbox, while absolute positioning leads to messy code.

2. Naming & organization

Assign semantic names to layers, such as "Primary Button" or "Email Input" instead of vague labels like "Frame 427." This helps the AI select the appropriate Stamp component. Name frames based on their purpose, like "Hero Section" or "Shipping Options," to aid in structuring the hierarchy.

3. Stay on token

For spacings, typography, and colors, always use Stamp component tokens. Avoid custom values, this makes the implementation the fastest and most token-efficient.

4. Icons

Only use icons from the Stamp icon library. Custom icons may not have matching imports in `@design-system/icons`.

5. Responsiveness

Design for three breakpoints: 375px, 681px, and 1280px. Providing frames at these widths helps the AI understand layout adaptations. If only one frame is provided, indicate which breakpoint it represents.

#6. States & variants

For forms with validation, indicate which fields require it and show or describe the error states so the AI knows where to apply validation logic.

## 7. Custom elements

If your design includes custom components, assets, or icons that are not part of the Stamp library, explicitly mention this in your prompt. Otherwise the AI will attempt to map them to existing Stamp equivalents, which may produce incorrect results or lose your intended design.
-->