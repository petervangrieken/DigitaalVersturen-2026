import { ReactNode, useState } from "react";

interface SelectionRowProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function SelectionRow({
  children,
  selected = false,
  onClick,
  disabled = false,
}: SelectionRowProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        position: "relative",
        background: disabled
          ? "var(--stamp-color-background-disabled)"
          : "var(--stamp-color-background-surface)",
        borderRadius: "var(--stamp-radius-s)",
        padding: "var(--stamp-spacing-inner-xl)",
        cursor: disabled ? "not-allowed" : "pointer",
        textAlign: "left",
        display: "flex",
        flexDirection: "row",
        gap: "var(--stamp-spacing-inner-m)",
        alignItems: "center",
        opacity: disabled && !selected ? 0.6 : 1,
        // Hover: 1px border on the element itself
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
      {children}

      {/* Selected: 2px ring outside the element */}
      {selected && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: -4,
            borderRadius: "calc(var(--stamp-radius-s) + 4px)",
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
            borderRadius: "calc(var(--stamp-radius-s) + 7px)",
            border:
              "2px solid var(--stamp-color-border-focus-outline)",
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
}
