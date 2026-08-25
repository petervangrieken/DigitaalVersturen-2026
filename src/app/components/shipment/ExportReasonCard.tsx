import { useState } from "react";
import {
  Card,
  Flex,
  Heading,
  Text,
  Button,
  Illustration,
} from "@design-system/react";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import {
  Presents,
  Document,
  HandMoney,
  ColorRange,
  HomeReturnShipment,
} from "@design-system/illustrations/react/basic";
import { SelectionRow } from "./SelectionRow";
import { useSendUserMessage } from "../../lib/use-send-user-message";
import { ReactNode } from "react";

interface ExportReasonCardProps {
  headline: string;
  preSelectedReason?:
    | "geschenk"
    | "documenten"
    | "handelsgoederen"
    | "monsters"
    | "retour";
  excludeDocuments?: boolean;
}

interface ReasonOption {
  id: string;
  illustration: ReactNode;
  title: string;
  description: string;
}

const REASON_OPTIONS: ReasonOption[] = [
  {
    id: "geschenk",
    illustration: <Presents />,
    title: "Geschenk",
    description:
      "De ontvanger betaalt niet voor deze goederen.",
  },
  {
    id: "documenten",
    illustration: <Document />,
    title: "Documenten",
    description:
      "Bijvoorbeeld een ticket, contract, paspoort, diploma, bankpas of creditcard.",
  },
  {
    id: "handelsgoederen",
    illustration: <HandMoney />,
    title: "Handelsgoederen",
    description: "De ontvanger betaalt voor deze goederen.",
  },
  {
    id: "monsters",
    illustration: <ColorRange />,
    title: "Monsters of testers",
    description:
      "Een voorproefje van een bepaald product. Bijvoorbeeld een kleurenwaaier.",
  },
  {
    id: "retour",
    illustration: <HomeReturnShipment />,
    title: "Retourgoederen",
    description:
      "Je stuurt iets terug naar de afzender of verkoper.",
  },
];

export function ExportReasonCard({
  headline,
  preSelectedReason,
  excludeDocuments,
}: ExportReasonCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);
  const options = excludeDocuments
    ? REASON_OPTIONS.filter((o) => o.id !== "documenten")
    : REASON_OPTIONS;
  const defaultSelected =
    preSelectedReason === "documenten" && excludeDocuments
      ? "geschenk"
      : (preSelectedReason ?? "geschenk");
  const [selected, setSelected] = useState(defaultSelected);

  const handleSubmit = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    const opt = options.find((o) => o.id === selected)!;
    send(`Type zending: ${opt.title} — ${opt.description}`);
  };

  return (
    <Card
      theme="default"
      style={{
        padding: "var(--stamp-spacing-inner-xl)",
        ...(submitted && {
          backgroundColor: "var(--stamp-color-background-surface)",
          borderColor: "var(--stamp-color-border-default)",
        }),
      }}
    >
      <Flex direction="column" gap="l">
        <Heading level={2} size="l" color="brand">
          {headline}
        </Heading>

        {options.map((opt) => (
          <SelectionRow
            key={opt.id}
            selected={selected === opt.id}
            onClick={() => !submitted && setSelected(opt.id)}
            disabled={submitted}
          >
            <Illustration size="s">
              {opt.illustration}
            </Illustration>
            <Flex
              direction="column"
              gap="xs"
              style={{ flex: 1, minWidth: 0 }}
            >
              <Heading level={3} size="s" color="subtle">
                {opt.title}
              </Heading>
              <Text size="m" variant="subtle">
                {opt.description}
              </Text>
            </Flex>
          </SelectionRow>
        ))}

        {!submitted && !isSending && (
          <Flex justifyContent="end">
            <Button
              variant="primary"
              size="auto"
              endIcon={<ChevronRightIcon />}
              onClick={handleSubmit}
            >
              Volgende
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}