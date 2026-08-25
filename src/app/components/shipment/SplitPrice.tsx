import { Text } from "@design-system/react";

export type PriceScale = "s" | "m" | "l";

// Decimal uses the next-smaller scale so it renders visually smaller than the integer.
// price-s-decimal and price-s-default share the same values at each scale, so the
// step-down is how you get the size difference: m→s-decimal (19px vs 25px),
// s→xs-default (16px vs 19px), l→m-decimal (25px vs 33px).
const DECIMAL_TOKEN: Record<PriceScale, string> = {
  s: "xs-default",
  m: "s-decimal",
  l: "m-decimal",
};

interface SplitPriceProps {
  value?: string;
  scale?: PriceScale;
}

export function SplitPrice({
  value,
  scale = "s",
}: SplitPriceProps) {
  if (!value) return null;

  // Non-numeric labels like "Gratis" or "standaard" get regular body text,
  // not price tokens.
  if (!/[0-9]/.test(value)) {
    return <Text size="m">{value}</Text>;
  }

  const decimalToken = DECIMAL_TOKEN[scale];
  const commaIdx = value.lastIndexOf(",");

  const integerStyle: React.CSSProperties = {
    fontSize: `var(--stamp-text-price-${scale}-default-font-size)`,
    fontWeight: `var(--stamp-text-price-${scale}-default-font-weight)`,
    lineHeight: `var(--stamp-text-price-${scale}-default-line-height)`,
    fontFamily: `var(--stamp-text-price-${scale}-default-font-family), sans-serif`,
    color: "var(--stamp-color-text-default)",
  };

  const decimalStyle: React.CSSProperties = {
    fontSize: `var(--stamp-text-price-${decimalToken}-font-size)`,
    fontWeight: `var(--stamp-text-price-${decimalToken}-font-weight)`,
    lineHeight: `var(--stamp-text-price-${decimalToken}-line-height)`,
    fontFamily: `var(--stamp-text-price-${decimalToken}-font-family), sans-serif`,
    color: "var(--stamp-color-text-default)",
  };

  if (commaIdx === -1) {
    return <span style={integerStyle}>{value}</span>;
  }

  const main = value.slice(0, commaIdx + 1);
  const cents = value.slice(commaIdx + 1);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
      }}
    >
      <span
        style={{
          ...integerStyle,
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        {main}
      </span>
      <span style={decimalStyle}>{cents}</span>
    </div>
  );
}