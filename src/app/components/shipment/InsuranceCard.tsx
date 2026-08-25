import { useState } from "react";
import React from "react";
import {
  Card,
  Flex,
  Heading,
  Text,
  Button,
} from "@design-system/react";
import { SplitPrice } from "./SplitPrice";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import {
  ListCheckIcon,
  CloseIcon,
} from "@design-system/icons/24x24";
import { ShieldCheckIcon } from "@design-system/icons/40x40";
import { useSendUserMessage } from "../../lib/use-send-user-message";
import ShieldCheckL from "../../../imports/ShieldCheckL";

interface InsuranceTier {
  limit: string;
  price: string;
}

interface InsuranceCardProps {
  headline: string;
  tiers: InsuranceTier[];
}

interface FeatureItem {
  label: string;
  included: boolean;
}

const UNINSURED_FEATURES: FeatureItem[] = [
  { label: "Met track & trace", included: true },
  { label: "Geen verzekering", included: false },
];

interface InsuranceTileProps {
  title: string;
  features: FeatureItem[];
  price: string;
  selected: boolean;
  onSelect: () => void;
  disabled: boolean;
  icon?: React.ReactNode;
}

function InsuranceTile({
  title,
  features,
  price,
  selected,
  onSelect,
  disabled,
  icon,
}: InsuranceTileProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      style={{
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
      {icon ?? (
        <ShieldCheckIcon
          style={{
            color: "var(--stamp-color-icon-default)",
            width: "var(--stamp-size-icon-l)",
            height: "var(--stamp-size-icon-l)",
          }}
        />
      )}

      <Heading level={3} size="s" color="subtle">
        {title}
      </Heading>

      <Flex direction="column" gap="xs">
        {features.map((f) => (
          <Flex key={f.label} gap="s" alignItems="center">
            {f.included ? (
              <ListCheckIcon
                style={{
                  color: "var(--stamp-color-icon-brand)",
                  flexShrink: 0,
                }}
              />
            ) : (
              <CloseIcon
                style={{
                  color: "var(--stamp-color-icon-subtle)",
                  flexShrink: 0,
                }}
              />
            )}
            <Text size="m">{f.label}</Text>
          </Flex>
        ))}
      </Flex>

      <div style={{ width: "100%", marginTop: "auto" }}>
        <SplitPrice value={price} scale="m" />
      </div>

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

export function InsuranceCard({
  headline,
  tiers = [],
}: InsuranceCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<
    number | "not-insured"
  >(0);

  const handleSubmit = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    if (selected === "not-insured") {
      send("Verzekering: Nee, dankje");
    } else {
      const tier = tiers[selected];
      send(
        `Verzekering: Ja — verzekerd tot ${tier.limit} (${tier.price})`,
      );
    }
  };

  return (
    <Card
      theme="default"
      style={{
        padding: "var(--stamp-spacing-inner-xl)",
        ...(submitted && {
          backgroundColor:
            "var(--stamp-color-background-surface)",
          borderColor: "var(--stamp-color-border-default)",
        }),
      }}
    >
      <Flex direction="column" gap="l">
        <Heading level={2} size="l" color="brand">
          {headline}
        </Heading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--stamp-spacing-inner-l)",
          }}
        >
          {tiers.map((tier, idx) => (
            <InsuranceTile
              key={tier.limit}
              title={`Verzekerd tot ${tier.limit}`}
              features={[
                { label: "Met track & trace", included: true },
                {
                  label: "Bewijs van ontvangst",
                  included: true,
                },
                {
                  label: `Verzekerd tot ${tier.limit}`,
                  included: true,
                },
              ]}
              price={tier.price}
              selected={selected === idx}
              onSelect={() => !submitted && setSelected(idx)}
              disabled={submitted}
            />
          ))}
          <InsuranceTile
            title="Nee, dankje"
            features={UNINSURED_FEATURES}
            price="Gratis"
            selected={selected === "not-insured"}
            onSelect={() =>
              !submitted && setSelected("not-insured")
            }
            disabled={submitted}
            icon={
              <div
                style={{
                  width: "var(--stamp-size-icon-l)",
                  height: "var(--stamp-size-icon-l)",
                }}
              >
                <ShieldCheckL />
              </div>
            }
          />
        </div>

        {!submitted && !isSending && (
          <Flex justifyContent="end">
            <Button
              variant="primary"
              size="auto"
              endIcon={<ChevronRightIcon />}
              onClick={handleSubmit}
            >
              Bevestigen
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}