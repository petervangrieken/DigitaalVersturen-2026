import { ReactNode, useState } from "react";
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
  LocationPostnlIcon,
  HomeIcon,
  LockersIcon,
} from "@design-system/icons/40x40";
import { SelectionTile } from "./SelectionTile";
import { useSendUserMessage } from "../../lib/use-send-user-message";

interface DeliveryLocationCardProps {
  headline: string;
}

interface LocationOption {
  id: string;
  icon: ReactNode;
  name: string;
  description: string;
  price: string;
}

const DEFAULT_OPTIONS: LocationOption[] = [
  {
    id: "pickup-point",
    icon: <LocationPostnlIcon style={{ width: 40, height: 40 }} />,
    name: "PostNL-punt",
    description: "Handig als de ontvanger vaak van huis is",
    price: "Gratis",
  },
  {
    id: "home",
    icon: <HomeIcon style={{ width: 40, height: 40 }} />,
    name: "Op adres ontvanger",
    description:
      "Handig als je een groot of zwaar pakket verstuurt",
    price: "+ € 0,50",
  },
  {
    id: "locker",
    icon: <LockersIcon style={{ width: 40, height: 40 }} />,
    name: "Pakketautomaat",
    description:
      "Pakket ophalen wanneer het de ontvanger uitkomt",
    price: "Gratis",
  },
];

export function DeliveryLocationCard({
  headline,
}: DeliveryLocationCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState("pickup-point");

  const handleSubmit = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    const opt = DEFAULT_OPTIONS.find((o) => o.id === selected)!;
    send(`Bezorglocatie: ${opt.name}`);
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
          {DEFAULT_OPTIONS.map((opt) => (
            <SelectionTile
              key={opt.id}
              selected={selected === opt.id}
              onClick={() => !submitted && setSelected(opt.id)}
              disabled={submitted}
            >
              <div
                style={{
                  color: "var(--stamp-color-icon-default)",
                  width: "40px",
                  height: "40px",
                  flexShrink: 0,
                }}
              >
                {opt.icon}
              </div>
              <Flex direction="column" gap="xs">
                <Heading level={3} size="s" color="subtle">
                  {opt.name}
                </Heading>
              </Flex>
              <Text size="m">{opt.description}</Text>
              <div style={{ width: "100%", marginTop: "auto", textAlign: "right" }}>
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