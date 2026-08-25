import { useState } from "react";
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
  VanSpeedIcon,
  VanIcon,
  SustainableOutlineIcon,
} from "@design-system/icons/40x40";
import { SelectionTile } from "./SelectionTile";
import { useSendUserMessage } from "../../lib/use-send-user-message";
import { ReactNode } from "react";

interface DeliveryTimeCardProps {
  headline: string;
  preSelectedOption?: "fast" | "standard" | "eco";
  fastDescription?: string;
  fastPrice?: string;
  standardDescription?: string;
  standardPrice?: string;
  ecoDescription?: string;
  ecoPrice?: string;
}

interface Option {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
}

const DEFAULT_OPTIONS: Option[] = [
  {
    id: "fast",
    icon: (
      <VanSpeedIcon
        style={{
          color: "var(--stamp-color-icon-default)",
          width: "var(--stamp-size-icon-l)",
          height: "var(--stamp-size-icon-l)",
        }}
      />
    ),
    title: "Snelle bezorging",
    description: "Levertijd binnen 24 uur",
    price: "+ € 5,00",
  },
  {
    id: "standard",
    icon: (
      <VanIcon
        style={{
          color: "var(--stamp-color-icon-default)",
          width: "var(--stamp-size-icon-l)",
          height: "var(--stamp-size-icon-l)",
        }}
      />
    ),
    title: "Standaard",
    description: "Levertijd van maximaal 2 werkdagen",
    price: "Gratis",
  },
  {
    id: "eco",
    icon: (
      <SustainableOutlineIcon
        style={{
          color: "var(--stamp-color-icon-sustainable)",
          width: "var(--stamp-size-icon-l)",
          height: "var(--stamp-size-icon-l)",
        }}
      />
    ),
    title: "Maakt me niet uit",
    description: "Levertijd van maximaal 5 werkdagen",
    price: "- € 2,00",
  },
];

export function DeliveryTimeCard({
  headline,
  preSelectedOption,
  fastDescription,
  fastPrice,
  standardDescription,
  standardPrice,
  ecoDescription,
  ecoPrice,
}: DeliveryTimeCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(
    preSelectedOption ?? "standard",
  );

  const options: Option[] = [
    {
      ...DEFAULT_OPTIONS[0],
      description:
        fastDescription ?? DEFAULT_OPTIONS[0].description,
      price: fastPrice ?? DEFAULT_OPTIONS[0].price,
    },
    {
      ...DEFAULT_OPTIONS[1],
      description:
        standardDescription ?? DEFAULT_OPTIONS[1].description,
      price: standardPrice ?? DEFAULT_OPTIONS[1].price,
    },
    {
      ...DEFAULT_OPTIONS[2],
      description:
        ecoDescription ?? DEFAULT_OPTIONS[2].description,
      price: ecoPrice ?? DEFAULT_OPTIONS[2].price,
    },
  ];

  const handleSubmit = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    const opt = options.find((o) => o.id === selected)!;
    send(`Bezorgtijd: ${opt.title} — ${opt.description}`);
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

        <Flex gap="l">
          {options.map((opt) => (
            <SelectionTile
              key={opt.id}
              selected={selected === opt.id}
              onClick={() => !submitted && setSelected(opt.id)}
              disabled={submitted}
            >
              {opt.icon}
              <Heading level={3} size="s" color="subtle">
                {opt.title}
              </Heading>
              <Text size="m" style={{ flex: 1 }}>
                {opt.description}
              </Text>
              <div style={{ width: "100%", textAlign: "right" }}>
                <SplitPrice value={opt.price} scale="m" />
              </div>
            </SelectionTile>
          ))}
        </Flex>

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