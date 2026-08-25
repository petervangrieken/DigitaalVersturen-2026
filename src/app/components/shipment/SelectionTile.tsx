import { ReactNode, useState } from "react";

interface SelectionTileProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  badge?: string;
  disabled?: boolean;
}

export function SelectionTile({
  children,
  selected = false,
  onClick,
  badge,
  disabled = false,
}: SelectionTileProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        position: "relative",
        background: disabled
          ? "var(--stamp-color-background-disabled)"
          : "var(--stamp-color-background-surface)",
        borderRadius: "var(--stamp-radius-m)",
        padding: "var(--stamp-spacing-inner-xl)",
        cursor: disabled ? "not-allowed" : "pointer",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "var(--stamp-spacing-inner-s)",
        opacity: disabled && !selected ? 0.6 : 1,
        // Hover: 1px border on the element itself (always present to avoid layout shift)
        border: `1px solid ${hovered && !disabled ? "var(--stamp-color-border-hover)" : "transparent"}`,
        outline: "none",
      }}
      onMouseEnter={() => {
        if (!disabled) setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {badge && (
        <span
          style={{
            position: "absolute",
            top: "var(--stamp-spacing-inner-m)",
            right: "var(--stamp-spacing-inner-l)",
            color: "var(--stamp-color-text-subtle)",
            fontSize:
              "var(--stamp-text-body-s-default-font-size)",
            lineHeight:
              "var(--stamp-text-body-s-default-line-height)",
          }}
        >
          {badge}
        </span>
      )}

      {children}

      {/* Selected: 2px ring outside the element */}
      {selected && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: -4,
            borderRadius: "calc(var(--stamp-radius-m) + 4px)",
            border:
              "2px solid var(--stamp-color-border-selected)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Focus: 2px ring further outside, overlapping selected */}
      {focused && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: -7,
            borderRadius: "calc(var(--stamp-radius-m) + 7px)",
            border:
              "2px solid var(--stamp-color-border-focus-outline)",
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
}
